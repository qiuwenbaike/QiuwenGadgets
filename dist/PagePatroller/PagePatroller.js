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
//! src/PagePatroller/modules/components/react.tsx
var FooterNotice = ({
  id,
  children
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, mw.config.get("skin") === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
  id: id !== null && id !== void 0 ? id : elementId,
  className: [elementId, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
}, children) : ["vector", "vector-2022", "gongbi"].includes(mw.config.get("skin")) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
  id: id !== null && id !== void 0 ? id : elementId,
  className: [elementId, "noprint"]
}, children) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id: id !== null && id !== void 0 ? id : elementId,
  className: [elementId, "noprint"]
}, children));
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
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
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
    var _document$querySelect;
    const footerElement = /* @__PURE__ */ import_ext_gadget4.default.createElement(FooterNotice, null);
    (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(footerElement);
    if (document.querySelectorAll(".patrollink").length) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29tcG9uZW50cy9yZWFjdC50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvc2hvd1BhZ2VQYXRyb2xsZXIudHN4IiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvYXBpLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvdXRpbC9nZXRQYXRyb2xsZXIudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImZvb3Rlci1pbmZvLXBhdHJvbGxlclwiLFxuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuUGFnZVBhdHJvbGxlcl9nZXRQYXRyb2xsZXItXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmludGVyZmFjZSBGb290ZXJOb3RpY2VQcm9wcyB7XG5cdGlkPzogc3RyaW5nO1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdO1xufVxuXG5jb25zdCBGb290ZXJOb3RpY2UgPSAoe2lkLCBjaGlsZHJlbn06IEZvb3Rlck5vdGljZVByb3BzKSA9PiAoXG5cdDw+XG5cdFx0e213LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0PHNlY3Rpb25cblx0XHRcdFx0aWQ9e2lkID8/IE9QVElPTlMuZWxlbWVudElkfVxuXHRcdFx0XHRjbGFzc05hbWU9e1tPUFRJT05TLmVsZW1lbnRJZCwgJ3BhZ2UtaW5mb19faXRlbScsICdjaXRpemVuLWZvb3Rlcl9fcGFnZWluZm8taXRlbScsICdub3ByaW50J119XG5cdFx0XHQ+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpIDogWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMobXcuY29uZmlnLmdldCgnc2tpbicpKSB8fFxuXHRcdCAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSA/IChcblx0XHRcdDxsaSBpZD17aWQgPz8gT1BUSU9OUy5lbGVtZW50SWR9IGNsYXNzTmFtZT17W09QVElPTlMuZWxlbWVudElkLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9saT5cblx0XHQpIDogKFxuXHRcdFx0PGRpdiBpZD17aWQgPz8gT1BUSU9OUy5lbGVtZW50SWR9IGNsYXNzTmFtZT17W09QVElPTlMuZWxlbWVudElkLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0KX1cblx0PC8+XG4pO1xuXG5jb25zdCBOb3RQYXRyb2xsZWRZZXQgPSAoKSA9PiAoXG5cdDxzcGFuIGlkPVwicGFnZV9wYXRyb2xsZXJfX25vdC1wYXRyb2xsZWRcIiB0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0Jyl9IC8+XG4pO1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4gPHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fbG9hZGluZ1wiIHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdMb2FkaW5nLi4uJyl9IC8+O1xuXG5pbnRlcmZhY2UgUGF0cm9sbGVkUHJvcHMge1xuXHR0aW1lc3RhbXA/OiBzdHJpbmc7XG5cdHVzZXI/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFBhdHJvbGxlZCA9ICh7dGltZXN0YW1wLCB1c2VyfTogUGF0cm9sbGVkUHJvcHMpID0+IChcblx0PD5cblx0XHR7dGltZXN0YW1wICYmIHVzZXIgPyAoXG5cdFx0XHQ8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWQtYnlcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JykucmVwbGFjZSgnJDEnLCB0aW1lc3RhbXApfVxuXHRcdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3VzZXJ9YCl9Pnt1c2VyfTwvYT5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ3BlcmlvZCcpfVxuXHRcdFx0PC9zcGFuPlxuXHRcdCkgOiAoXG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRpZD1cInBhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWRcIlxuXHRcdFx0XHR0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkJyl9XG5cdFx0XHQvPlxuXHRcdCl9XG5cdDwvPlxuKTtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gKCkgPT4gKFxuXHQ8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19lcnJvclwiIHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlcicpfSAvPlxuKTtcblxuZXhwb3J0IHtGb290ZXJOb3RpY2UsIE5vdFBhdHJvbGxlZFlldCwgTG9hZGluZywgUGF0cm9sbGVkLCBFcnJvck1lc3NhZ2V9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTG9hZGluZy4uLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliqDovb3mraTpobXpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo5Yqg6LyJ5q2k6aCB6Z2i55qE5beh5p+l6ICF4oCm4oCmJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XjgIInLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCBieSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgJDEgYnknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5beh5p+l5LqOJDHvvIzlt6Hmn6XogIXmmK8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5beh5p+l5pa8JDHvvIzlt6Hmn6XogIXmmK8nLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5Yqo5qCH5Li65bey5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWLleaomeeIsuW3suW3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlci4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5p+l5om+5beh5p+l6ICF5pe25Ye6546w6ZSZ6K+v44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+afpeaJvuW3oeafpeiAheaZguWHuuePvumMr+iqpOOAgicsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtFcnJvck1lc3NhZ2UsIEZvb3Rlck5vdGljZSwgTG9hZGluZywgTm90UGF0cm9sbGVkWWV0LCBQYXRyb2xsZWR9IGZyb20gJy4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldFBhdHJvbGxlcn0gZnJvbSAnLi91dGlsL2dldFBhdHJvbGxlcic7XG5cbmNvbnN0IHNob3dQYWdlUGF0cm9sbGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBmb290ZXJFbGVtZW50ID0gPEZvb3Rlck5vdGljZSAvPjtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0/LnByZXBlbmQoZm9vdGVyRWxlbWVudCk7XG5cblx0Ly8gaWYgdGhlcmUgaXMgYSBwYXRyb2wgbGluaywgdGhlIHBhZ2UgbXVzdCBiZSBub3QgcGF0cm9sbGVkXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGF0cm9sbGluaycpLmxlbmd0aCkge1xuXHRcdGZvb3RlckVsZW1lbnQuYXBwZW5kKDxOb3RQYXRyb2xsZWRZZXQgLz4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIExvYWQgcGF0cm9sbGVyIGluZm9cblx0Ly8gYWRkIGBMb2FkaW5nLi4uYFxuXHRmb290ZXJFbGVtZW50LmFwcGVuZCg8TG9hZGluZyAvPik7XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgbG9nID0gYXdhaXQgZ2V0UGF0cm9sbGVyKHdnUGFnZU5hbWUpO1xuXHRcdGNvbnN0IHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH0gPSBsb2c7XG5cblx0XHRpZiAoYWN0aW9uICYmIHVzZXIgJiYgdGltZXN0YW1wKSB7XG5cdFx0XHRjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcblxuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3BhdHJvbCcpIHtcblx0XHRcdFx0Zm9vdGVyRWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPFBhdHJvbGxlZCB0aW1lc3RhbXA9e2RhdGUudG9Mb2NhbGVTdHJpbmcoKX0gdXNlcj17dXNlcn0gLz4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9vdGVyRWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPFBhdHJvbGxlZCAvPik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvb3RlckVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxQYXRyb2xsZWQgLz4pO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHQvLyByZXR1cm4gZXJyb3Iocylcblx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl06JywgZXJyb3IpO1xuXHRcdGZvb3RlckVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxFcnJvck1lc3NhZ2UgLz4pO1xuXHR9XG59O1xuXG5leHBvcnQge3Nob3dQYWdlUGF0cm9sbGVyfTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1BhZ2VQYXRyb2xsZXIvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcblxuY29uc3QgZ2V0UGF0cm9sbGVyID0gYXN5bmMgKHdnUGFnZU5hbWU6IHN0cmluZykgPT4ge1xuXHRsZXQgYWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB1c2VyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB0aW1lc3RhbXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dQYWdlTmFtZSkpIHtcblx0XHQoe2FjdGlvbiwgdXNlciwgdGltZXN0YW1wfSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUGFnZU5hbWUpIGFzIHtcblx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgJiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdFx0bGV0eXBlOiAncGF0cm9sJyxcblx0XHRcdFx0bGV0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdFx0cnZwcm9wOiAndGltZXN0YW1wJyxcblx0XHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdFx0aWYgKHF1ZXJ5Py5sb2dldmVudHMgJiYgcXVlcnkubG9nZXZlbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBbbG9nXTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSA9IHF1ZXJ5LmxvZ2V2ZW50cyBhcyBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXHRcdFx0XHQoe2FjdGlvbn0gPSBsb2cpO1xuXG5cdFx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdFx0KHt1c2VyLCB0aW1lc3RhbXB9ID0gbG9nKTtcblxuXHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUGFnZU5hbWUsIHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH0sIDYwICogNjAgKiAyNCAqIDMwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl0gQWpheCBlcnJvciBpbiBgZ2V0UGF0cm9sbGVyYCBtZXRob2Q6JywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9O1xufTtcblxuZXhwb3J0IHtnZXRQYXRyb2xsZXJ9O1xuIiwgImltcG9ydCB7c2hvd1BhZ2VQYXRyb2xsZXJ9IGZyb20gJy4vbW9kdWxlcy9zaG93UGFnZVBhdHJvbGxlcic7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dBcnRpY2xlSWQsIHdnSXNNYWluUGFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbihmdW5jdGlvbiAoKSB7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCEod2dBcnRpY2xlSWQgPiAwKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgc2hvd1BhZ2VQYXRyb2xsZXIoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhO0FBQ2IsSUFBQUMscUJBQXNCO0FBQ3RCLElBQUFDLGFBQWM7O0FDRmYsSUFBQUMscUJBQWtDQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEMsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sZUFBQSxH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QU87QUFDTjhDLHNCQUFjTSxnQkFBZ0IzQyxtQ0FBQXRCLFFBQUFDLGNBQUNZLFdBQUEsSUFBVSxDQUFFO01BQzVDO0lBQ0QsU0FBU3NDLE9BQWdCO0FBRXhCQyxjQUFRRCxNQUFNLG9CQUFvQkEsS0FBSztBQUN2Q1Esb0JBQWNNLGdCQUFnQjNDLG1DQUFBdEIsUUFBQUMsY0FBQ29CLGNBQUEsSUFBYSxDQUFFO0lBQy9DO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FwQ01tQyxxQkFBQTtBQUFBLFdBQUFDLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUdITixJQUFNO0VBQUNZO0VBQW1CQztFQUFhQztBQUFZLElBQUlsRSxHQUFHQyxPQUFPQyxJQUFJO0NBRXBFLFdBQVk7QUFDWixNQUFJOEQsb0JBQW9CLEdBQUc7QUFDMUI7RUFDRDtBQUVBLE1BQUlFLGNBQWM7QUFDakI7RUFDRDtBQUVBLE1BQUksRUFBRUQsY0FBYyxJQUFJO0FBQ3ZCO0VBQ0Q7QUFFQSxPQUFLWixrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJzdG9yYWdlS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRm9vdGVyTm90aWNlIiwgImlkIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIk5vdFBhdHJvbGxlZFlldCIsICJ0ZXh0Q29udGVudCIsICJMb2FkaW5nIiwgIlBhdHJvbGxlZCIsICJ0aW1lc3RhbXAiLCAidXNlciIsICJyZXBsYWNlIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgIkVycm9yTWVzc2FnZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0UGF0cm9sbGVyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAid2dQYWdlTmFtZSIsICJhY3Rpb24iLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgImxpc3QiLCAibGV0eXBlIiwgImxldGl0bGUiLCAicnZwcm9wIiwgInJ2bGltaXQiLCAicnZkaXIiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAibG9nZXZlbnRzIiwgImxlbmd0aCIsICJsb2ciLCAic2V0T2JqZWN0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInNob3dQYWdlUGF0cm9sbGVyIiwgIl9yZWYyIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJmb290ZXJFbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJhcHBlbmQiLCAiZGF0ZSIsICJEYXRlIiwgInJlcGxhY2VDaGlsZHJlbiIsICJ0b0xvY2FsZVN0cmluZyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z0FydGljbGVJZCIsICJ3Z0lzTWFpblBhZ2UiXQp9Cg==
