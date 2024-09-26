/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/WhoIsActive}
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

// dist/WhoIsActive/WhoIsActive.js
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
//! src/WhoIsActive/options.json
var mountPointSelector = "#footer-info,.page-info";
var version = "2.0";
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
//! src/WhoIsActive/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("WhoIsActive/".concat(version));
//! src/WhoIsActive/modules/getLastActiveMarker.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/WhoIsActive/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    OverAYear: (0, import_ext_gadget2.localize)({
      en: "Edited over a year ago",
      "zh-hans": "一年未有编辑",
      "zh-hant": "一年未有編輯"
    }),
    ThisWeek: (0, import_ext_gadget2.localize)({
      en: "Edited this week",
      "zh-hans": "一周内有编辑",
      "zh-hant": "一周內有編輯"
    }),
    ThisMonth: (0, import_ext_gadget2.localize)({
      en: "Edited this month",
      "zh-hans": "一月内有编辑",
      "zh-hant": "一月內有編輯"
    }),
    ThisSeason: (0, import_ext_gadget2.localize)({
      en: "Edited in 3 months",
      "zh-hans": "三月内有编辑",
      "zh-hant": "三月內有編輯"
    }),
    ThisSemiyear: (0, import_ext_gadget2.localize)({
      en: "Edited in half a year",
      "zh-hans": "半年内有编辑",
      "zh-hant": "半年內有編輯"
    }),
    ThisYear: (0, import_ext_gadget2.localize)({
      en: "Edited this year",
      "zh-hans": "一年内有编辑",
      "zh-hant": "一年內有編輯"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/WhoIsActive/modules/getLastActiveMarker.tsx
function Wrapper(props) {
  const {
    timeSpan,
    innerElement
  } = props;
  const className = ["gadget-whoisactive", "gadget-whoisactive__".concat(timeSpan)];
  const {
    skin
  } = mw.config.get();
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget3.default.createElement("section", {
      className
    }, innerElement);
  } else if (["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget3.default.createElement("li", {
      className
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
    className
  }, innerElement);
}
function Tag(props) {
  var _getMessage;
  const {
    timeSpan,
    indicator
  } = props;
  const iconClassName = ["gadget-whoisactive__icon", "gadget-whoisactive__icon__".concat(timeSpan)];
  const textClassName = ["gadget-whoisactive__text", indicator === true ? ", gadget-whoisactive__notext" : ""];
  return /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
    className: iconClassName,
    title: getMessage(timeSpan)
  }), /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
    className: textClassName
  }, (_getMessage = getMessage(timeSpan)) !== null && _getMessage !== void 0 ? _getMessage : ""));
}
var getLastActiveMarker = (timestamp, indicator) => {
  const date = Date.parse(timestamp);
  const now = Date.now();
  const diff = Math.floor((now - date) / (1e3 * 60 * 60 * 24));
  let timeSpan = "ThisWeek";
  if (diff > 365) {
    timeSpan = "OverAYear";
  } else if (diff > 183) {
    timeSpan = "ThisYear";
  } else if (diff > 92) {
    timeSpan = "ThisSemiyear";
  } else if (diff > 31) {
    timeSpan = "ThisSeason";
  } else if (diff > 7) {
    timeSpan = "ThisMonth";
  }
  return /* @__PURE__ */ import_ext_gadget3.default.createElement(Wrapper, {
    timeSpan,
    innerElement: /* @__PURE__ */ import_ext_gadget3.default.createElement(Tag, {
      timeSpan,
      indicator
    })
  });
};
//! src/WhoIsActive/modules/core.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var baseParams = {
  action: "query",
  format: "json",
  list: "usercontribs",
  uclimit: 1,
  smaxage: 3600,
  maxage: 3600
};
var whoIsActive = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ($content) {
    const usernames = [];
    const $elements = [];
    const {
      wgFormattedNamespaces
    } = mw.config.get();
    const {
      2: localizedUserNamespace
    } = wgFormattedNamespaces;
    var _iterator2 = _createForOfIteratorHelper($content.find(['a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])', 'a[title^="'.concat(localizedUserNamespace, ':"]:not(.mw-changeslist-date):not([href*="undo"])')].join(","))), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _$element$attr;
        const element = _step2.value;
        const $element = $(element);
        const userRegex = new RegExp("((User)|(".concat(localizedUserNamespace, ")):(.*?)(?=&|$)"));
        const usernameMatchArray = decodeURI((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "").match(userRegex);
        if (!usernameMatchArray) {
          continue;
        }
        let [username] = usernameMatchArray;
        username = username.replace(new RegExp("^((User)|(".concat(localizedUserNamespace, ")):"), "i"), "");
        const index = username.indexOf("/");
        if (index === -1) {
          $element.data("username", username);
          usernames[usernames.length] = username;
          $elements[$elements.length] = $element;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!usernames.length || !$elements.length) {
      return;
    }
    var _iterator3 = _createForOfIteratorHelper((0, import_ext_gadget4.uniqueArray)(usernames)), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const username = _step3.value;
        if (SYSTEM_SCRIPT_LIST.includes(username)) {
          continue;
        }
        const params = {
          ...baseParams,
          ucuser: username
        };
        const result = yield api.get(params);
        const {
          usercontribs
        } = result["query"];
        if (!usercontribs.length) {
          return;
        }
        const {
          timestamp
        } = usercontribs[0];
        var _iterator4 = _createForOfIteratorHelper($elements), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const $element = _step4.value;
            if ($element.data("username") === username) {
              $(getLastActiveMarker(timestamp, true)).insertAfter($element);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  return function whoIsActive2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var whoIsActiveUserPage = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const {
      wgAction,
      wgNamespaceNumber,
      wgPageName,
      wgRelevantUserName
    } = mw.config.get();
    if (wgRelevantUserName && wgNamespaceNumber === 2 && wgAction === "view") {
      const relevantUserPageName = new mw.Title(wgRelevantUserName, 2).toText();
      const pageName = new mw.Title(wgPageName).toText();
      if (relevantUserPageName !== pageName) {
        return;
      }
      const params = {
        ...baseParams,
        ucuser: wgRelevantUserName
      };
      const result = yield api.get(params);
      const {
        usercontribs
      } = result["query"];
      if (!usercontribs.length) {
        return;
      }
      const {
        timestamp
      } = usercontribs[0];
      var _iterator5 = _createForOfIteratorHelper(document.querySelectorAll(mountPointSelector)), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          const element = _step5.value;
          element.prepend(getLastActiveMarker(timestamp, false));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  });
  return function whoIsActiveUserPage2() {
    return _ref2.apply(this, arguments);
  };
}();
//! src/WhoIsActive/WhoIsActive.ts
(function whoIsActiveLoad() {
  if (mw.config.get("wgNamespaceNumber") < 0) {
    return;
  }
  mw.hook("wikipage.content").add(whoIsActive);
  void whoIsActiveUserPage();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dob0lzQWN0aXZlL29wdGlvbnMuanNvbiIsICJzcmMvR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvZ2V0TGFzdEFjdGl2ZU1hcmtlci50c3giLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9XaG9Jc0FjdGl2ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBXaG9Jc0FjdGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxudHlwZSBUaW1lU3BhbiA9ICdUaGlzV2VlaycgfCAnVGhpc01vbnRoJyB8ICdUaGlzU2Vhc29uJyB8ICdUaGlzU2VtaXllYXInIHwgJ1RoaXNZZWFyJyB8ICdPdmVyQVllYXInO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHByb3BzOiB7dGltZVNwYW46IFRpbWVTcGFuOyBpbm5lckVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudH0pIHtcblx0Y29uc3Qge3RpbWVTcGFuLCBpbm5lckVsZW1lbnR9ID0gcHJvcHM7XG5cblx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmdbXSA9IFsnZ2FkZ2V0LXdob2lzYWN0aXZlJywgYGdhZGdldC13aG9pc2FjdGl2ZV9fJHt0aW1lU3Bhbn1gXTtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9zZWN0aW9uPjtcblx0fSBlbHNlIGlmIChbJ2dvbmdiaScsICd2ZWN0b3InLCAndmVjdG9yLTIwMjInXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2lubmVyRWxlbWVudH08L2xpPjtcblx0fVxuXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gVGFnKHByb3BzOiB7dGltZVNwYW46IFRpbWVTcGFuOyBpbmRpY2F0b3I6IGJvb2xlYW59KSB7XG5cdGNvbnN0IHt0aW1lU3BhbiwgaW5kaWNhdG9yfSA9IHByb3BzO1xuXG5cdGNvbnN0IGljb25DbGFzc05hbWU6IHN0cmluZ1tdID0gWydnYWRnZXQtd2hvaXNhY3RpdmVfX2ljb24nLCBgZ2FkZ2V0LXdob2lzYWN0aXZlX19pY29uX18ke3RpbWVTcGFufWBdO1xuXHRjb25zdCB0ZXh0Q2xhc3NOYW1lOiBzdHJpbmdbXSA9IFtcblx0XHQnZ2FkZ2V0LXdob2lzYWN0aXZlX190ZXh0Jyxcblx0XHRpbmRpY2F0b3IgPT09IHRydWUgPyAnLCBnYWRnZXQtd2hvaXNhY3RpdmVfX25vdGV4dCcgOiAnJyxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2ljb25DbGFzc05hbWV9IHRpdGxlPXtnZXRNZXNzYWdlKHRpbWVTcGFuKX0gLz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17dGV4dENsYXNzTmFtZX0+e2dldE1lc3NhZ2UodGltZVNwYW4pID8/ICcnfTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuY29uc3QgZ2V0TGFzdEFjdGl2ZU1hcmtlciA9ICh0aW1lc3RhbXA6IHN0cmluZywgaW5kaWNhdG9yOiBib29sZWFuKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcblx0Y29uc3QgZGF0ZTogbnVtYmVyID0gRGF0ZS5wYXJzZSh0aW1lc3RhbXApO1xuXHRjb25zdCBub3c6IG51bWJlciA9IERhdGUubm93KCk7XG5cdGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKG5vdyAtIGRhdGUpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblxuXHRsZXQgdGltZVNwYW46IFRpbWVTcGFuID0gJ1RoaXNXZWVrJztcblx0aWYgKGRpZmYgPiAzNjUpIHtcblx0XHR0aW1lU3BhbiA9ICdPdmVyQVllYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiAxODMpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzWWVhcic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDkyKSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc1NlbWl5ZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gMzEpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzU2Vhc29uJztcblx0fSBlbHNlIGlmIChkaWZmID4gNykge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNNb250aCc7XG5cdH1cblxuXHRyZXR1cm4gPFdyYXBwZXIgdGltZVNwYW49e3RpbWVTcGFufSBpbm5lckVsZW1lbnQ9ezxUYWcgdGltZVNwYW49e3RpbWVTcGFufSBpbmRpY2F0b3I9e2luZGljYXRvcn0gLz59IC8+O1xufTtcblxuZXhwb3J0IHR5cGUge1RpbWVTcGFufTtcbmV4cG9ydCB7Z2V0TGFzdEFjdGl2ZU1hcmtlcn07XG4iLCAiaW1wb3J0IHR5cGUge1RpbWVTcGFufSBmcm9tICcuL2dldExhc3RBY3RpdmVNYXJrZXInO1xuaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdE92ZXJBWWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgb3ZlciBhIHllYXIgYWdvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOW5tOacquaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlubTmnKrmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNXZWVrOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIHdlZWsnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5ZGo5YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOWRqOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc01vbnRoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIG1vbnRoJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOaciOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDmnIjlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNTZWFzb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIGluIDMgbW9udGhzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4ieaciOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuInmnIjlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNTZW1peWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgaW4gaGFsZiBhIHllYXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5Y2K5bm05YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+WNiuW5tOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc1llYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIHRoaXMgeWVhcicsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlubTlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5bm05YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0fSBzYXRpc2ZpZXMgUmVjb3JkPFRpbWVTcGFuLCBzdHJpbmc+ICYgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TGFzdEFjdGl2ZU1hcmtlcn0gZnJvbSAnLi9nZXRMYXN0QWN0aXZlTWFya2VyJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGJhc2VQYXJhbXM6IEFwaVF1ZXJ5VXNlckNvbnRyaWJzUGFyYW1zID0ge1xuXHRhY3Rpb246ICdxdWVyeScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0dWNsaW1pdDogMSxcblx0c21heGFnZTogMzYwMCxcblx0bWF4YWdlOiAzNjAwLFxufTtcbnR5cGUgVXNlcmNvbnRyaWJzID0ge1xuXHR1c2VyY29udHJpYnM6IEFycmF5PHtcblx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0fT47XG59O1xuXG5jb25zdCB3aG9Jc0FjdGl2ZSA9IGFzeW5jICgkY29udGVudDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB1c2VybmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0ICRlbGVtZW50czogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdID0gW107XG5cblx0Y29uc3Qge3dnRm9ybWF0dGVkTmFtZXNwYWNlc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgezI6IGxvY2FsaXplZFVzZXJOYW1lc3BhY2V9ID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oXG5cdFx0W1xuXHRcdFx0J2FbdGl0bGVePVwiVXNlcjpcIl06bm90KC5tdy1jaGFuZ2VzbGlzdC1kYXRlKTpub3QoW2hyZWYqPVwidW5kb1wiXSknLFxuXHRcdFx0YGFbdGl0bGVePVwiJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfTpcIl06bm90KC5tdy1jaGFuZ2VzbGlzdC1kYXRlKTpub3QoW2hyZWYqPVwidW5kb1wiXSlgLFxuXHRcdF0uam9pbignLCcpXG5cdCkpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cblx0XHRjb25zdCB1c2VyUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCgoVXNlcil8KCR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX0pKTooLio/KSg/PSZ8JClgKTtcblx0XHRjb25zdCB1c2VybmFtZU1hdGNoQXJyYXk6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gZGVjb2RlVVJJKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJykubWF0Y2godXNlclJlZ2V4KTtcblx0XHRpZiAoIXVzZXJuYW1lTWF0Y2hBcnJheSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IFt1c2VybmFtZV0gPSB1c2VybmFtZU1hdGNoQXJyYXk7XG5cdFx0dXNlcm5hbWUgPSB1c2VybmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoYF4oKFVzZXIpfCgke2xvY2FsaXplZFVzZXJOYW1lc3BhY2V9KSk6YCwgJ2knKSwgJycpO1xuXHRcdGNvbnN0IGluZGV4OiBudW1iZXIgPSB1c2VybmFtZS5pbmRleE9mKCcvJyk7XG5cdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0JGVsZW1lbnQuZGF0YSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG5cdFx0XHR1c2VybmFtZXNbdXNlcm5hbWVzLmxlbmd0aF0gPSB1c2VybmFtZTtcblx0XHRcdCRlbGVtZW50c1skZWxlbWVudHMubGVuZ3RoXSA9ICRlbGVtZW50O1xuXHRcdH1cblx0fVxuXG5cdGlmICghdXNlcm5hbWVzLmxlbmd0aCB8fCAhJGVsZW1lbnRzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgdXNlcm5hbWUgb2YgdW5pcXVlQXJyYXkodXNlcm5hbWVzKSkge1xuXHRcdC8vIFJlcGxhY2UgYG5ldyBTZXQoKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdGlmIChTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXModXNlcm5hbWUpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlckNvbnRyaWJzUGFyYW1zID0ge1xuXHRcdFx0Li4uYmFzZVBhcmFtcyxcblx0XHRcdHVjdXNlcjogdXNlcm5hbWUsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdGNvbnN0IHt1c2VyY29udHJpYnN9ID0gcmVzdWx0WydxdWVyeSddIGFzIFVzZXJjb250cmlicztcblx0XHRpZiAoIXVzZXJjb250cmlicy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB7dGltZXN0YW1wfSA9IHVzZXJjb250cmlic1swXSE7XG5cblx0XHRmb3IgKGNvbnN0ICRlbGVtZW50IG9mICRlbGVtZW50cykge1xuXHRcdFx0aWYgKCRlbGVtZW50LmRhdGEoJ3VzZXJuYW1lJykgPT09IHVzZXJuYW1lKSB7XG5cdFx0XHRcdCQoZ2V0TGFzdEFjdGl2ZU1hcmtlcih0aW1lc3RhbXAsIHRydWUpKS5pbnNlcnRBZnRlcigkZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCB3aG9Jc0FjdGl2ZVVzZXJQYWdlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1JlbGV2YW50VXNlck5hbWUgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgJiYgd2dBY3Rpb24gPT09ICd2aWV3Jykge1xuXHRcdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCAyKS50b1RleHQoKTtcblx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpLnRvVGV4dCgpO1xuXHRcdGlmIChyZWxldmFudFVzZXJQYWdlTmFtZSAhPT0gcGFnZU5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlckNvbnRyaWJzUGFyYW1zID0ge1xuXHRcdFx0Li4uYmFzZVBhcmFtcyxcblx0XHRcdHVjdXNlcjogd2dSZWxldmFudFVzZXJOYW1lLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRjb25zdCB7dXNlcmNvbnRyaWJzfSA9IHJlc3VsdFsncXVlcnknXSBhcyBVc2VyY29udHJpYnM7XG5cdFx0aWYgKCF1c2VyY29udHJpYnMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qge3RpbWVzdGFtcH0gPSB1c2VyY29udHJpYnNbMF0hO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcikpIHtcblx0XHRcdGVsZW1lbnQucHJlcGVuZChnZXRMYXN0QWN0aXZlTWFya2VyKHRpbWVzdGFtcCwgZmFsc2UpKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7d2hvSXNBY3RpdmUsIHdob0lzQWN0aXZlVXNlclBhZ2V9O1xuIiwgImltcG9ydCB7d2hvSXNBY3RpdmUsIHdob0lzQWN0aXZlVXNlclBhZ2V9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuKGZ1bmN0aW9uIHdob0lzQWN0aXZlTG9hZCgpIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCh3aG9Jc0FjdGl2ZSk7XG5cdHZvaWQgd2hvSXNBY3RpdmVVc2VyUGFnZSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHFCQUFzQjtBQUN0QixJQUFBQyxVQUFXOztBQ0ZaLElBQU1DLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7O0FDUkQsSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsZUFBQUMsT0FBaUNOLE9BQU8sQ0FBRTs7QUNIOUQsSUFBQU8scUJBQWtCQyxRQUFBTCxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNDbEIsSUFBQU0scUJBQXVCTixRQUFBLGlCQUFBO0FBRXZCLElBQU1PLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFlBQUEsR0FBV0YsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsV0FBQSxHQUFVTCxtQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxZQUFBLEdBQVdOLG1CQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLGFBQUEsR0FBWVAsbUJBQUFHLFVBQVM7TUFDcEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksZUFBQSxHQUFjUixtQkFBQUcsVUFBUztNQUN0QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESyxXQUFBLEdBQVVULG1CQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1NLGVBQWVULGdCQUFnQjtBQUVyQyxJQUFNVSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRHJDQSxTQUFTQyxRQUFRQyxPQUErRDtBQUMvRSxRQUFNO0lBQUNDO0lBQVVDO0VBQVksSUFBSUY7QUFFakMsUUFBTUcsWUFBc0IsQ0FBQyxzQkFBQSx1QkFBQXBCLE9BQTZDa0IsUUFBUSxDQUFBO0FBQ2xGLFFBQU07SUFBQ0c7RUFBSSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdCLE1BQUlILFNBQVMsV0FBVztBQUN2QixXQUFPcEIsbUNBQUF3QixRQUFBQyxjQUFDLFdBQUE7TUFBUU47SUFBQSxHQUF1QkQsWUFBYTtFQUNyRCxXQUFXLENBQUMsVUFBVSxVQUFVLGFBQWEsRUFBRVEsU0FBU04sSUFBSSxLQUFLTyxTQUFTQyxjQUFjLGdCQUFnQixHQUFHO0FBQzFHLFdBQU81QixtQ0FBQXdCLFFBQUFDLGNBQUMsTUFBQTtNQUFHTjtJQUFBLEdBQXVCRCxZQUFhO0VBQ2hEO0FBRUEsU0FBT2xCLG1DQUFBd0IsUUFBQUMsY0FBQyxPQUFBO0lBQUlOO0VBQUEsR0FBdUJELFlBQWE7QUFDakQ7QUFFQSxTQUFTVyxJQUFJYixPQUFpRDtBQUFBLE1BQUFjO0FBQzdELFFBQU07SUFBQ2I7SUFBVWM7RUFBUyxJQUFJZjtBQUU5QixRQUFNZ0IsZ0JBQTBCLENBQUMsNEJBQUEsNkJBQUFqQyxPQUF5RGtCLFFBQVEsQ0FBQTtBQUNsRyxRQUFNZ0IsZ0JBQTBCLENBQy9CLDRCQUNBRixjQUFjLE9BQU8saUNBQWlDLEVBQUE7QUFHdkQsU0FDQy9CLG1DQUFBd0IsUUFBQUMsY0FBQXpCLG1CQUFBd0IsUUFBQVUsVUFBQSxNQUNDbEMsbUNBQUF3QixRQUFBQyxjQUFDLFFBQUE7SUFBS04sV0FBV2E7SUFBZUcsT0FBT3RCLFdBQVdJLFFBQVE7RUFBQSxDQUFHLEdBQzdEakIsbUNBQUF3QixRQUFBQyxjQUFDLFFBQUE7SUFBS04sV0FBV2M7RUFBQSxJQUFBSCxjQUFnQmpCLFdBQVdJLFFBQVEsT0FBQSxRQUFBYSxnQkFBQSxTQUFBQSxjQUFLLEVBQUcsQ0FDN0Q7QUFFRjtBQUVBLElBQU1NLHNCQUFzQkEsQ0FBQ0MsV0FBbUJOLGNBQTJDO0FBQzFGLFFBQU1PLE9BQWVDLEtBQUtDLE1BQU1ILFNBQVM7QUFDekMsUUFBTUksTUFBY0YsS0FBS0UsSUFBSTtBQUM3QixRQUFNQyxPQUFlQyxLQUFLQyxPQUFPSCxNQUFNSCxTQUFTLE1BQU8sS0FBSyxLQUFLLEdBQUc7QUFFcEUsTUFBSXJCLFdBQXFCO0FBQ3pCLE1BQUl5QixPQUFPLEtBQUs7QUFDZnpCLGVBQVc7RUFDWixXQUFXeUIsT0FBTyxLQUFLO0FBQ3RCekIsZUFBVztFQUNaLFdBQVd5QixPQUFPLElBQUk7QUFDckJ6QixlQUFXO0VBQ1osV0FBV3lCLE9BQU8sSUFBSTtBQUNyQnpCLGVBQVc7RUFDWixXQUFXeUIsT0FBTyxHQUFHO0FBQ3BCekIsZUFBVztFQUNaO0FBRUEsU0FBT2pCLG1DQUFBd0IsUUFBQUMsY0FBQ1YsU0FBQTtJQUFRRTtJQUFvQkMsY0FBY2xCLG1DQUFBd0IsUUFBQUMsY0FBQ0ksS0FBQTtNQUFJWjtNQUFvQmM7SUFBQSxDQUFzQjtFQUFBLENBQUk7QUFDdEc7O0FFcERBLElBQUFjLHFCQUEwQmpELFFBQUEsaUJBQUE7QUFFMUIsSUFBTWtELGFBQXlDO0VBQzlDQyxRQUFRO0VBQ1JDLFFBQVE7RUFDUkMsTUFBTTtFQUNOQyxTQUFTO0VBQ1RDLFNBQVM7RUFDVEMsUUFBUTtBQUNUO0FBT0EsSUFBTUMsY0FBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFjLFdBQU9DLFVBQWlEO0FBQzNFLFVBQU1DLFlBQXNCLENBQUE7QUFDNUIsVUFBTUMsWUFBeUMsQ0FBQTtBQUUvQyxVQUFNO01BQUNDO0lBQXFCLElBQUl0QyxHQUFHQyxPQUFPQyxJQUFJO0FBRTlDLFVBQU07TUFBQyxHQUFHcUM7SUFBc0IsSUFBSUQ7QUFBQSxRQUFBRSxhQUFBQywyQkFDZE4sU0FBU08sS0FDOUIsQ0FDQyxtRUFBQSxhQUFBaEUsT0FDYTZELHdCQUFzQixtREFBQSxDQUFBLEVBQ2xDSSxLQUFLLEdBQUcsQ0FDWCxDQUFBLEdBQUFDO0FBQUEsUUFBQTtBQUxBLFdBQUFKLFdBQUFLLEVBQUEsR0FBQSxFQUFBRCxTQUFBSixXQUFBTSxFQUFBLEdBQUFDLFFBS0c7QUFBQSxZQUFBQztBQUFBLGNBTFFDLFVBQUFMLE9BQUFNO0FBTVYsY0FBTUMsV0FBc0NDLEVBQUVILE9BQU87QUFFckQsY0FBTUksWUFBb0IsSUFBSUMsT0FBQSxZQUFBNUUsT0FBbUI2RCx3QkFBc0IsaUJBQUEsQ0FBaUI7QUFDeEYsY0FBTWdCLHFCQUE4Q0MsV0FBQVIsaUJBQVVHLFNBQVNNLEtBQUssTUFBTSxPQUFBLFFBQUFULG1CQUFBLFNBQUFBLGlCQUFLLEVBQUUsRUFBRVUsTUFBTUwsU0FBUztBQUMxRyxZQUFJLENBQUNFLG9CQUFvQjtBQUN4QjtRQUNEO0FBRUEsWUFBSSxDQUFDSSxRQUFRLElBQUlKO0FBQ2pCSSxtQkFBV0EsU0FBU0MsUUFBUSxJQUFJTixPQUFBLGFBQUE1RSxPQUFvQjZELHdCQUFzQixLQUFBLEdBQU8sR0FBRyxHQUFHLEVBQUU7QUFDekYsY0FBTXNCLFFBQWdCRixTQUFTRyxRQUFRLEdBQUc7QUFDMUMsWUFBSUQsVUFBVSxJQUFJO0FBQ2pCVixtQkFBU1ksS0FBSyxZQUFZSixRQUFRO0FBQ2xDdkIsb0JBQVVBLFVBQVU0QixNQUFNLElBQUlMO0FBQzlCdEIsb0JBQVVBLFVBQVUyQixNQUFNLElBQUliO1FBQy9CO01BQ0Q7SUFBQSxTQUFBYyxLQUFBO0FBQUF6QixpQkFBQTBCLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUF6QixpQkFBQTJCLEVBQUE7SUFBQTtBQUVBLFFBQUksQ0FBQy9CLFVBQVU0QixVQUFVLENBQUMzQixVQUFVMkIsUUFBUTtBQUMzQztJQUNEO0FBQUEsUUFBQUksYUFBQTNCLDRCQUVXLEdBQVlqQixtQkFBQTZDLGFBQVlqQyxTQUFTLENBQUEsR0FBQWtDO0FBQUEsUUFBQTtBQUE1QyxXQUFBRixXQUFBdkIsRUFBQSxHQUFBLEVBQUF5QixTQUFBRixXQUFBdEIsRUFBQSxHQUFBQyxRQUErQztBQUFBLGNBQXBDWSxXQUFBVyxPQUFBcEI7QUFFVixZQUFJN0UsbUJBQW1CZ0MsU0FBU3NELFFBQVEsR0FBRztBQUMxQztRQUNEO0FBRUEsY0FBTVksU0FBcUM7VUFDMUMsR0FBRzlDO1VBQ0grQyxRQUFRYjtRQUNUO0FBRUEsY0FBTWMsU0FBQSxNQUFlakcsSUFBSTBCLElBQUlxRSxNQUFNO0FBRW5DLGNBQU07VUFBQ0c7UUFBWSxJQUFJRCxPQUFPLE9BQU87QUFDckMsWUFBSSxDQUFDQyxhQUFhVixRQUFRO0FBQ3pCO1FBQ0Q7QUFFQSxjQUFNO1VBQUNoRDtRQUFTLElBQUkwRCxhQUFhLENBQUM7QUFBQSxZQUFBQyxhQUFBbEMsMkJBRVhKLFNBQUEsR0FBQXVDO0FBQUEsWUFBQTtBQUF2QixlQUFBRCxXQUFBOUIsRUFBQSxHQUFBLEVBQUErQixTQUFBRCxXQUFBN0IsRUFBQSxHQUFBQyxRQUFrQztBQUFBLGtCQUF2QkksV0FBQXlCLE9BQUExQjtBQUNWLGdCQUFJQyxTQUFTWSxLQUFLLFVBQVUsTUFBTUosVUFBVTtBQUMzQ1AsZ0JBQUVyQyxvQkFBb0JDLFdBQVcsSUFBSSxDQUFDLEVBQUU2RCxZQUFZMUIsUUFBUTtZQUM3RDtVQUNEO1FBQUEsU0FBQWMsS0FBQTtBQUFBVSxxQkFBQVQsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQVUscUJBQUFSLEVBQUE7UUFBQTtNQUNEO0lBQUEsU0FBQUYsS0FBQTtBQUFBRyxpQkFBQUYsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQUcsaUJBQUFELEVBQUE7SUFBQTtFQUNELENBQUE7QUFBQSxTQUFBLFNBN0RNbkMsYUFBQThDLElBQUE7QUFBQSxXQUFBN0MsS0FBQThDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQStETixJQUFNQyxzQkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFoRCxrQkFBc0IsYUFBMkI7QUFDdEQsVUFBTTtNQUFDaUQ7TUFBVUM7TUFBbUJDO01BQVlDO0lBQWtCLElBQUl0RixHQUFHQyxPQUFPQyxJQUFJO0FBRXBGLFFBQUlvRixzQkFBc0JGLHNCQUFzQixLQUFLRCxhQUFhLFFBQVE7QUFDekUsWUFBTUksdUJBQStCLElBQUl2RixHQUFHd0YsTUFBTUYsb0JBQW9CLENBQUMsRUFBRUcsT0FBTztBQUNoRixZQUFNQyxXQUFtQixJQUFJMUYsR0FBR3dGLE1BQU1ILFVBQVUsRUFBRUksT0FBTztBQUN6RCxVQUFJRix5QkFBeUJHLFVBQVU7QUFDdEM7TUFDRDtBQUVBLFlBQU1uQixTQUFxQztRQUMxQyxHQUFHOUM7UUFDSCtDLFFBQVFjO01BQ1Q7QUFFQSxZQUFNYixTQUFBLE1BQWVqRyxJQUFJMEIsSUFBSXFFLE1BQU07QUFFbkMsWUFBTTtRQUFDRztNQUFZLElBQUlELE9BQU8sT0FBTztBQUNyQyxVQUFJLENBQUNDLGFBQWFWLFFBQVE7QUFDekI7TUFDRDtBQUVBLFlBQU07UUFBQ2hEO01BQVMsSUFBSTBELGFBQWEsQ0FBQztBQUFBLFVBQUFpQixhQUFBbEQsMkJBQ1puQyxTQUFTc0YsaUJBQXNDekgsa0JBQWtCLENBQUEsR0FBQTBIO0FBQUEsVUFBQTtBQUF2RixhQUFBRixXQUFBOUMsRUFBQSxHQUFBLEVBQUFnRCxTQUFBRixXQUFBN0MsRUFBQSxHQUFBQyxRQUEwRjtBQUFBLGdCQUEvRUUsVUFBQTRDLE9BQUEzQztBQUNWRCxrQkFBUTZDLFFBQVEvRSxvQkFBb0JDLFdBQVcsS0FBSyxDQUFDO1FBQ3REO01BQUEsU0FBQWlELEtBQUE7QUFBQTBCLG1CQUFBekIsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQTBCLG1CQUFBeEIsRUFBQTtNQUFBO0lBQ0Q7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQTNCTWMsdUJBQUE7QUFBQSxXQUFBQyxNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0NDakZMLFNBQVNlLGtCQUFrQjtBQUMzQixNQUFJL0YsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsSUFBSSxHQUFHO0FBQzNDO0VBQ0Q7QUFFQUYsS0FBR2dHLEtBQUssa0JBQWtCLEVBQUVDLElBQUlqRSxXQUFXO0FBQzNDLE9BQUtpRCxvQkFBb0I7QUFDMUIsR0FBRzsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiU1lTVEVNX1NDUklQVF9MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJPdmVyQVllYXIiLCAibG9jYWxpemUiLCAiZW4iLCAiVGhpc1dlZWsiLCAiVGhpc01vbnRoIiwgIlRoaXNTZWFzb24iLCAiVGhpc1NlbWl5ZWFyIiwgIlRoaXNZZWFyIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJXcmFwcGVyIiwgInByb3BzIiwgInRpbWVTcGFuIiwgImlubmVyRWxlbWVudCIsICJjbGFzc05hbWUiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlRhZyIsICJfZ2V0TWVzc2FnZSIsICJpbmRpY2F0b3IiLCAiaWNvbkNsYXNzTmFtZSIsICJ0ZXh0Q2xhc3NOYW1lIiwgIkZyYWdtZW50IiwgInRpdGxlIiwgImdldExhc3RBY3RpdmVNYXJrZXIiLCAidGltZXN0YW1wIiwgImRhdGUiLCAiRGF0ZSIsICJwYXJzZSIsICJub3ciLCAiZGlmZiIsICJNYXRoIiwgImZsb29yIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJiYXNlUGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAibGlzdCIsICJ1Y2xpbWl0IiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgIndob0lzQWN0aXZlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiJGNvbnRlbnQiLCAidXNlcm5hbWVzIiwgIiRlbGVtZW50cyIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAibG9jYWxpemVkVXNlck5hbWVzcGFjZSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiam9pbiIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiXyRlbGVtZW50JGF0dHIiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkZWxlbWVudCIsICIkIiwgInVzZXJSZWdleCIsICJSZWdFeHAiLCAidXNlcm5hbWVNYXRjaEFycmF5IiwgImRlY29kZVVSSSIsICJhdHRyIiwgIm1hdGNoIiwgInVzZXJuYW1lIiwgInJlcGxhY2UiLCAiaW5kZXgiLCAiaW5kZXhPZiIsICJkYXRhIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgIl9pdGVyYXRvcjMiLCAidW5pcXVlQXJyYXkiLCAiX3N0ZXAzIiwgInBhcmFtcyIsICJ1Y3VzZXIiLCAicmVzdWx0IiwgInVzZXJjb250cmlicyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJpbnNlcnRBZnRlciIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAid2hvSXNBY3RpdmVVc2VyUGFnZSIsICJfcmVmMiIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiLCAiX2l0ZXJhdG9yNSIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9zdGVwNSIsICJwcmVwZW5kIiwgIndob0lzQWN0aXZlTG9hZCIsICJob29rIiwgImFkZCJdCn0K
