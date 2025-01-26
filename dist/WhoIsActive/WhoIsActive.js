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
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
//! src/WhoIsActive/modules/util/getLastActiveMarker.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/WhoIsActive/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    OverAYear: (0, import_ext_gadget.localize)({
      en: "Edited over a year ago",
      "zh-hans": "一年未有编辑",
      "zh-hant": "一年未有編輯"
    }),
    ThisWeek: (0, import_ext_gadget.localize)({
      en: "Edited this week",
      "zh-hans": "一周内有编辑",
      "zh-hant": "一周內有編輯"
    }),
    ThisMonth: (0, import_ext_gadget.localize)({
      en: "Edited this month",
      "zh-hans": "一月内有编辑",
      "zh-hant": "一月內有編輯"
    }),
    ThisSeason: (0, import_ext_gadget.localize)({
      en: "Edited in 3 months",
      "zh-hans": "三月内有编辑",
      "zh-hant": "三月內有編輯"
    }),
    ThisSemiyear: (0, import_ext_gadget.localize)({
      en: "Edited in half a year",
      "zh-hans": "半年内有编辑",
      "zh-hant": "半年內有編輯"
    }),
    ThisYear: (0, import_ext_gadget.localize)({
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
//! src/WhoIsActive/modules/util/getLastActiveMarker.tsx
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
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      className: [...className, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
    }, innerElement);
  } else if (["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      className: [className, "noprint"]
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: [className, "noprint"]
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
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: iconClassName,
    title: getMessage(timeSpan)
  }), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
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
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(Wrapper, {
    timeSpan,
    innerElement: /* @__PURE__ */ import_ext_gadget2.default.createElement(Tag, {
      timeSpan,
      indicator
    })
  });
};
//! src/WhoIsActive/options.json
var mountPointSelector = "#footer-info,.page-info";
var version = "2.0";
var storageKey = "ext.gadget.WhoIsActive_whoIsActive-";
//! src/WhoIsActive/modules/util/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("WhoIsActive/".concat(version));
//! src/WhoIsActive/modules/util/getTimestamp.ts
var getUserContribsTimestamp = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (ucuser) {
    let timestamp;
    try {
      const params = {
        action: "query",
        format: "json",
        list: "usercontribs",
        uclimit: 1,
        smaxage: 600,
        maxage: 600,
        ucuser
      };
      const result = yield api.get(params);
      const {
        usercontribs
      } = result["query"];
      if (!usercontribs.length) {
        return;
      }
      ({
        timestamp
      } = usercontribs[0]);
    } catch (error) {
      timestamp = "0";
      console.error("[WhoIsActive] Ajax error:", error);
    }
    return timestamp;
  });
  return function getUserContribsTimestamp2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getLogEventsTimestamp = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (leuser) {
    let timestamp;
    try {
      const params = {
        leuser,
        action: "query",
        format: "json",
        formatversion: "2",
        list: "logevents",
        lelimit: 1,
        leprop: "timestamp",
        smaxage: 600,
        maxage: 600
      };
      const result = yield api.get(params);
      const {
        logevents
      } = result["query"];
      if (!logevents.length) {
        return;
      }
      ({
        timestamp
      } = logevents[0]);
    } catch (error) {
      timestamp = "0";
      console.error("[WhoIsActive] Ajax error:", error);
    }
    return timestamp;
  });
  return function getLogEventsTimestamp2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getTimestamp = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (username) {
    let timestamp;
    if (mw.storage.get(storageKey + username)) {
      timestamp = mw.storage.get(storageKey + username);
    } else {
      var _yield$getUserContrib, _yield$getLogEventsTi;
      const ucTimestamp = (_yield$getUserContrib = yield getUserContribsTimestamp(username)) !== null && _yield$getUserContrib !== void 0 ? _yield$getUserContrib : "0";
      const leTimestamp = (_yield$getLogEventsTi = yield getLogEventsTimestamp(username)) !== null && _yield$getLogEventsTi !== void 0 ? _yield$getLogEventsTi : "0";
      timestamp = Number.parseInt(ucTimestamp, 10) > Number.parseInt(leTimestamp, 10) ? ucTimestamp : leTimestamp;
      mw.storage.set(storageKey + username, timestamp, 10 * 60);
    }
    return timestamp;
  });
  return function getTimestamp2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/WhoIsActive/modules/util/appendLastActiveMarker.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var appendLastActiveMarker = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* ({
    usernames,
    $elements
  }) {
    var _iterator2 = _createForOfIteratorHelper((0, import_ext_gadget4.uniqueArray)(usernames)), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _yield$getTimestamp;
        const username = _step2.value;
        if (SYSTEM_SCRIPT_LIST.includes(username)) {
          continue;
        }
        const timestamp = (_yield$getTimestamp = yield getTimestamp(username)) !== null && _yield$getTimestamp !== void 0 ? _yield$getTimestamp : "0";
        if (!timestamp) {
          return;
        }
        var _iterator3 = _createForOfIteratorHelper($elements), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const $element = _step3.value;
            if ($element.data("username") === username) {
              $(getLastActiveMarker(timestamp, true)).insertAfter($element);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  return function appendLastActiveMarker2(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/WhoIsActive/modules/util/appendLastActiveMarkerToUserPage.ts
var appendLastActiveMarkerToUserPage = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (username) {
    var _yield$getTimestamp2;
    if (SYSTEM_SCRIPT_LIST.includes(username)) {
      return;
    }
    const timestamp = (_yield$getTimestamp2 = yield getTimestamp(username)) !== null && _yield$getTimestamp2 !== void 0 ? _yield$getTimestamp2 : "0";
    if (!timestamp) {
      return;
    }
    var _iterator4 = _createForOfIteratorHelper(document.querySelectorAll(mountPointSelector)), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        element.prepend(getLastActiveMarker(timestamp, false));
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
  return function appendLastActiveMarkerToUserPage2(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
//! src/WhoIsActive/modules/util/getUserNamesAndElements.ts
var getUserNamesAndElements = ($content) => {
  const usernames = [];
  const $elements = [];
  const {
    wgFormattedNamespaces
  } = mw.config.get();
  const {
    2: localizedUserNamespace
  } = wgFormattedNamespaces;
  var _iterator5 = _createForOfIteratorHelper($content.find(['a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])', 'a[title^="'.concat(localizedUserNamespace, ':"]:not(.mw-changeslist-date):not([href*="undo"])')].join(","))), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _$element$attr;
      const element = _step5.value;
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
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return {
    usernames,
    $elements
  };
};
//! src/WhoIsActive/modules/core.ts
var whoIsActive = ($content) => {
  const {
    usernames,
    $elements
  } = getUserNamesAndElements($content);
  if (!usernames.length || !$elements.length) {
    return;
  }
  void appendLastActiveMarker({
    usernames,
    $elements
  });
};
var whoIsActiveUserPage = () => {
  const {
    wgAction,
    wgNamespaceNumber,
    wgPageName,
    wgRelevantUserName
  } = mw.config.get();
  if (!wgRelevantUserName || wgNamespaceNumber !== 2 || wgAction !== "view") {
    return;
  }
  const relevantUserPageName = new mw.Title(wgRelevantUserName, 2).toText();
  const pageName = new mw.Title(wgPageName).toText();
  if (relevantUserPageName !== pageName) {
    return;
  }
  void appendLastActiveMarkerToUserPage(wgRelevantUserName);
};
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRMYXN0QWN0aXZlTWFya2VyLnRzeCIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9vcHRpb25zLmpzb24iLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRUaW1lc3RhbXAudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9hcHBlbmRMYXN0QWN0aXZlTWFya2VyLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL3V0aWwvYXBwZW5kTGFzdEFjdGl2ZU1hcmtlclRvVXNlclBhZ2UudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRVc2VyTmFtZXNBbmRFbGVtZW50cy50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9XaG9Jc0FjdGl2ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxudHlwZSBUaW1lU3BhbiA9ICdUaGlzV2VlaycgfCAnVGhpc01vbnRoJyB8ICdUaGlzU2Vhc29uJyB8ICdUaGlzU2VtaXllYXInIHwgJ1RoaXNZZWFyJyB8ICdPdmVyQVllYXInO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHByb3BzOiB7dGltZVNwYW46IFRpbWVTcGFuOyBpbm5lckVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudH0pIHtcblx0Y29uc3Qge3RpbWVTcGFuLCBpbm5lckVsZW1lbnR9ID0gcHJvcHM7XG5cblx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmdbXSA9IFsnZ2FkZ2V0LXdob2lzYWN0aXZlJywgYGdhZGdldC13aG9pc2FjdGl2ZV9fJHt0aW1lU3Bhbn1gXTtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbLi4uY2xhc3NOYW1lLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ2dvbmdiaScsICd2ZWN0b3InLCAndmVjdG9yLTIwMjInXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBjbGFzc05hbWU9e1tjbGFzc05hbWUsICdub3ByaW50J119Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e1tjbGFzc05hbWUsICdub3ByaW50J119Pntpbm5lckVsZW1lbnR9PC9kaXY+O1xufVxuXG5mdW5jdGlvbiBUYWcocHJvcHM6IHt0aW1lU3BhbjogVGltZVNwYW47IGluZGljYXRvcjogYm9vbGVhbn0pIHtcblx0Y29uc3Qge3RpbWVTcGFuLCBpbmRpY2F0b3J9ID0gcHJvcHM7XG5cblx0Y29uc3QgaWNvbkNsYXNzTmFtZTogc3RyaW5nW10gPSBbJ2dhZGdldC13aG9pc2FjdGl2ZV9faWNvbicsIGBnYWRnZXQtd2hvaXNhY3RpdmVfX2ljb25fXyR7dGltZVNwYW59YF07XG5cdGNvbnN0IHRleHRDbGFzc05hbWU6IHN0cmluZ1tdID0gW1xuXHRcdCdnYWRnZXQtd2hvaXNhY3RpdmVfX3RleHQnLFxuXHRcdGluZGljYXRvciA9PT0gdHJ1ZSA/ICcsIGdhZGdldC13aG9pc2FjdGl2ZV9fbm90ZXh0JyA6ICcnLFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17aWNvbkNsYXNzTmFtZX0gdGl0bGU9e2dldE1lc3NhZ2UodGltZVNwYW4pfSAvPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXt0ZXh0Q2xhc3NOYW1lfT57Z2V0TWVzc2FnZSh0aW1lU3BhbikgPz8gJyd9PC9zcGFuPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5jb25zdCBnZXRMYXN0QWN0aXZlTWFya2VyID0gKHRpbWVzdGFtcDogc3RyaW5nLCBpbmRpY2F0b3I6IGJvb2xlYW4pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuXHRjb25zdCBkYXRlOiBudW1iZXIgPSBEYXRlLnBhcnNlKHRpbWVzdGFtcCk7XG5cdGNvbnN0IG5vdzogbnVtYmVyID0gRGF0ZS5ub3coKTtcblx0Y29uc3QgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigobm93IC0gZGF0ZSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuXG5cdGxldCB0aW1lU3BhbjogVGltZVNwYW4gPSAnVGhpc1dlZWsnO1xuXHRpZiAoZGlmZiA+IDM2NSkge1xuXHRcdHRpbWVTcGFuID0gJ092ZXJBWWVhcic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDE4Mykge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNZZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gOTIpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzU2VtaXllYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiAzMSkge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNTZWFzb24nO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiA3KSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc01vbnRoJztcblx0fVxuXG5cdHJldHVybiA8V3JhcHBlciB0aW1lU3Bhbj17dGltZVNwYW59IGlubmVyRWxlbWVudD17PFRhZyB0aW1lU3Bhbj17dGltZVNwYW59IGluZGljYXRvcj17aW5kaWNhdG9yfSAvPn0gLz47XG59O1xuXG5leHBvcnQgdHlwZSB7VGltZVNwYW59O1xuZXhwb3J0IHtnZXRMYXN0QWN0aXZlTWFya2VyfTtcbiIsICJpbXBvcnQgdHlwZSB7VGltZVNwYW59IGZyb20gJy4vdXRpbC9nZXRMYXN0QWN0aXZlTWFya2VyJztcbmltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRPdmVyQVllYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIG92ZXIgYSB5ZWFyIGFnbycsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlubTmnKrmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5bm05pyq5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzV2VlazogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyB3ZWVrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOWRqOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlkajlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNNb250aDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyBtb250aCcsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDmnIjlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5pyI5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzU2Vhc29uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCBpbiAzIG1vbnRocycsXG5cdFx0XHQnemgtaGFucyc6ICfkuInmnIjlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiJ5pyI5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzU2VtaXllYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIGluIGhhbGYgYSB5ZWFyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNiuW5tOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfljYrlubTlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNZZWFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIHllYXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5bm05YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOW5tOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxUaW1lU3Bhbiwgc3RyaW5nPiAmIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5XaG9Jc0FjdGl2ZV93aG9Jc0FjdGl2ZS1cIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgV2hvSXNBY3RpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0xvZ2V2ZW50cywgVXNlcmNvbnRyaWJzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRVc2VyQ29udHJpYnNUaW1lc3RhbXAgPSBhc3luYyAodWN1c2VyOiBzdHJpbmcpID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0bGlzdDogJ3VzZXJjb250cmlicycsXG5cdFx0XHR1Y2xpbWl0OiAxLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0XHR1Y3VzZXIsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdGNvbnN0IHt1c2VyY29udHJpYnN9ID0gcmVzdWx0WydxdWVyeSddIGFzIFVzZXJjb250cmlicztcblx0XHRpZiAoIXVzZXJjb250cmlicy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQoe3RpbWVzdGFtcH0gPSB1c2VyY29udHJpYnNbMF0hKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHR0aW1lc3RhbXAgPSAnMCc7XG5cdFx0Y29uc29sZS5lcnJvcignW1dob0lzQWN0aXZlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5jb25zdCBnZXRMb2dFdmVudHNUaW1lc3RhbXAgPSBhc3luYyAobGV1c2VyOiBzdHJpbmcpID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdGxldXNlcixcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRsZWxpbWl0OiAxLFxuXHRcdFx0bGVwcm9wOiAndGltZXN0YW1wJyxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRjb25zdCB7bG9nZXZlbnRzfSA9IHJlc3VsdFsncXVlcnknXSBhcyBMb2dldmVudHM7XG5cdFx0aWYgKCFsb2dldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0KHt0aW1lc3RhbXB9ID0gbG9nZXZlbnRzWzBdISk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0dGltZXN0YW1wID0gJzAnO1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tXaG9Jc0FjdGl2ZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cblxuXHRyZXR1cm4gdGltZXN0YW1wO1xufTtcblxuY29uc3QgZ2V0VGltZXN0YW1wID0gYXN5bmMgKHVzZXJuYW1lOiBzdHJpbmcpID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nO1xuXG5cdGlmIChtdy5zdG9yYWdlLmdldChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSkpIHtcblx0XHR0aW1lc3RhbXAgPSBtdy5zdG9yYWdlLmdldChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSkgYXMgc3RyaW5nO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHVjVGltZXN0YW1wID0gKGF3YWl0IGdldFVzZXJDb250cmlic1RpbWVzdGFtcCh1c2VybmFtZSkpID8/ICcwJztcblx0XHRjb25zdCBsZVRpbWVzdGFtcCA9IChhd2FpdCBnZXRMb2dFdmVudHNUaW1lc3RhbXAodXNlcm5hbWUpKSA/PyAnMCc7XG5cdFx0dGltZXN0YW1wID0gTnVtYmVyLnBhcnNlSW50KHVjVGltZXN0YW1wLCAxMCkgPiBOdW1iZXIucGFyc2VJbnQobGVUaW1lc3RhbXAsIDEwKSA/IHVjVGltZXN0YW1wIDogbGVUaW1lc3RhbXA7XG5cblx0XHQvLyBDYWNoZSBmb3IgMTAgbWludXRlc1xuXHRcdG13LnN0b3JhZ2Uuc2V0KE9QVElPTlMuc3RvcmFnZUtleSArIHVzZXJuYW1lLCB0aW1lc3RhbXAsIDEwICogNjApO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbmV4cG9ydCB7Z2V0VGltZXN0YW1wfTtcbiIsICJpbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRMYXN0QWN0aXZlTWFya2VyfSBmcm9tICcuL2dldExhc3RBY3RpdmVNYXJrZXInO1xuaW1wb3J0IHtnZXRUaW1lc3RhbXB9IGZyb20gJy4vZ2V0VGltZXN0YW1wJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwcGVuZExhc3RBY3RpdmVNYXJrZXIgPSBhc3luYyAoe3VzZXJuYW1lcywgJGVsZW1lbnRzfToge3VzZXJuYW1lczogc3RyaW5nW107ICRlbGVtZW50czogSlF1ZXJ5W119KSA9PiB7XG5cdC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0Zm9yIChjb25zdCB1c2VybmFtZSBvZiB1bmlxdWVBcnJheSh1c2VybmFtZXMpKSB7XG5cdFx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh1c2VybmFtZSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRpbWVzdGFtcCA9IChhd2FpdCBnZXRUaW1lc3RhbXAodXNlcm5hbWUpKSA/PyAnMCc7XG5cblx0XHRpZiAoIXRpbWVzdGFtcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgJGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0XHRpZiAoJGVsZW1lbnQuZGF0YSgndXNlcm5hbWUnKSA9PT0gdXNlcm5hbWUpIHtcblx0XHRcdFx0JChnZXRMYXN0QWN0aXZlTWFya2VyKHRpbWVzdGFtcCwgdHJ1ZSkpLmluc2VydEFmdGVyKCRlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7YXBwZW5kTGFzdEFjdGl2ZU1hcmtlcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1R9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TGFzdEFjdGl2ZU1hcmtlcn0gZnJvbSAnLi9nZXRMYXN0QWN0aXZlTWFya2VyJztcbmltcG9ydCB7Z2V0VGltZXN0YW1wfSBmcm9tICcuL2dldFRpbWVzdGFtcCc7XG5cbmNvbnN0IGFwcGVuZExhc3RBY3RpdmVNYXJrZXJUb1VzZXJQYWdlID0gYXN5bmMgKHVzZXJuYW1lOiBzdHJpbmcpID0+IHtcblx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh1c2VybmFtZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0aW1lc3RhbXAgPSAoYXdhaXQgZ2V0VGltZXN0YW1wKHVzZXJuYW1lKSkgPz8gJzAnO1xuXG5cdGlmICghdGltZXN0YW1wKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKSkge1xuXHRcdGVsZW1lbnQucHJlcGVuZChnZXRMYXN0QWN0aXZlTWFya2VyKHRpbWVzdGFtcCwgZmFsc2UpKTtcblx0fVxufTtcblxuZXhwb3J0IHthcHBlbmRMYXN0QWN0aXZlTWFya2VyVG9Vc2VyUGFnZX07XG4iLCAiY29uc3QgZ2V0VXNlck5hbWVzQW5kRWxlbWVudHMgPSAoJGNvbnRlbnQ6IEpRdWVyeSkgPT4ge1xuXHRjb25zdCB1c2VybmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0ICRlbGVtZW50czogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdID0gW107XG5cblx0Y29uc3Qge3dnRm9ybWF0dGVkTmFtZXNwYWNlc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgezI6IGxvY2FsaXplZFVzZXJOYW1lc3BhY2V9ID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oXG5cdFx0W1xuXHRcdFx0J2FbdGl0bGVePVwiVXNlcjpcIl06bm90KC5tdy1jaGFuZ2VzbGlzdC1kYXRlKTpub3QoW2hyZWYqPVwidW5kb1wiXSknLFxuXHRcdFx0YGFbdGl0bGVePVwiJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfTpcIl06bm90KC5tdy1jaGFuZ2VzbGlzdC1kYXRlKTpub3QoW2hyZWYqPVwidW5kb1wiXSlgLFxuXHRcdF0uam9pbignLCcpXG5cdCkpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cblx0XHRjb25zdCB1c2VyUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCgoVXNlcil8KCR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX0pKTooLio/KSg/PSZ8JClgKTtcblx0XHRjb25zdCB1c2VybmFtZU1hdGNoQXJyYXk6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gZGVjb2RlVVJJKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJykubWF0Y2godXNlclJlZ2V4KTtcblx0XHRpZiAoIXVzZXJuYW1lTWF0Y2hBcnJheSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IFt1c2VybmFtZV0gPSB1c2VybmFtZU1hdGNoQXJyYXk7XG5cdFx0dXNlcm5hbWUgPSB1c2VybmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoYF4oKFVzZXIpfCgke2xvY2FsaXplZFVzZXJOYW1lc3BhY2V9KSk6YCwgJ2knKSwgJycpO1xuXHRcdGNvbnN0IGluZGV4OiBudW1iZXIgPSB1c2VybmFtZS5pbmRleE9mKCcvJyk7XG5cdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0JGVsZW1lbnQuZGF0YSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG5cdFx0XHR1c2VybmFtZXNbdXNlcm5hbWVzLmxlbmd0aF0gPSB1c2VybmFtZTtcblx0XHRcdCRlbGVtZW50c1skZWxlbWVudHMubGVuZ3RoXSA9ICRlbGVtZW50O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7dXNlcm5hbWVzLCAkZWxlbWVudHN9O1xufTtcblxuZXhwb3J0IHtnZXRVc2VyTmFtZXNBbmRFbGVtZW50c307XG4iLCAiaW1wb3J0IHthcHBlbmRMYXN0QWN0aXZlTWFya2VyfSBmcm9tICcuL3V0aWwvYXBwZW5kTGFzdEFjdGl2ZU1hcmtlcic7XG5pbXBvcnQge2FwcGVuZExhc3RBY3RpdmVNYXJrZXJUb1VzZXJQYWdlfSBmcm9tICcuL3V0aWwvYXBwZW5kTGFzdEFjdGl2ZU1hcmtlclRvVXNlclBhZ2UnO1xuaW1wb3J0IHtnZXRVc2VyTmFtZXNBbmRFbGVtZW50c30gZnJvbSAnLi91dGlsL2dldFVzZXJOYW1lc0FuZEVsZW1lbnRzJztcblxuY29uc3Qgd2hvSXNBY3RpdmUgPSAoJGNvbnRlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3VzZXJuYW1lcywgJGVsZW1lbnRzfSA9IGdldFVzZXJOYW1lc0FuZEVsZW1lbnRzKCRjb250ZW50KTtcblxuXHRpZiAoIXVzZXJuYW1lcy5sZW5ndGggfHwgISRlbGVtZW50cy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFwcGVuZExhc3RBY3RpdmVNYXJrZXIoe3VzZXJuYW1lcywgJGVsZW1lbnRzfSk7XG59O1xuXG5jb25zdCB3aG9Jc0FjdGl2ZVVzZXJQYWdlID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dSZWxldmFudFVzZXJOYW1lIHx8IHdnTmFtZXNwYWNlTnVtYmVyICE9PSAyIHx8IHdnQWN0aW9uICE9PSAndmlldycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCByZWxldmFudFVzZXJQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUmVsZXZhbnRVc2VyTmFtZSwgMikudG9UZXh0KCk7XG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudG9UZXh0KCk7XG5cdGlmIChyZWxldmFudFVzZXJQYWdlTmFtZSAhPT0gcGFnZU5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFwcGVuZExhc3RBY3RpdmVNYXJrZXJUb1VzZXJQYWdlKHdnUmVsZXZhbnRVc2VyTmFtZSk7XG59O1xuXG5leHBvcnQge3dob0lzQWN0aXZlLCB3aG9Jc0FjdGl2ZVVzZXJQYWdlfTtcbiIsICJpbXBvcnQge3dob0lzQWN0aXZlLCB3aG9Jc0FjdGl2ZVVzZXJQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiB3aG9Jc0FjdGl2ZUxvYWQoKSB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQod2hvSXNBY3RpdmUpO1xuXHR2b2lkIHdob0lzQWN0aXZlVXNlclBhZ2UoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBOztBQ1RELElBQUFDLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQ2xCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxZQUFBLEdBQVdGLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFdBQUEsR0FBVUwsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsWUFBQSxHQUFXTixrQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxhQUFBLEdBQVlQLGtCQUFBRyxVQUFTO01BQ3BCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLGVBQUEsR0FBY1Isa0JBQUFHLFVBQVM7TUFDdEJDLElB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QUFHK0gsTUFBTUYsb0JBQW9CLENBQUMsRUFBRUcsT0FBTztBQUNoRixRQUFNQyxXQUFtQixJQUFJakksR0FBRytILE1BQU1ILFVBQVUsRUFBRUksT0FBTztBQUN6RCxNQUFJRix5QkFBeUJHLFVBQVU7QUFDdEM7RUFDRDtBQUVBLE9BQUtwQyxpQ0FBaUNnQyxrQkFBa0I7QUFDekQ7O0NDMUJDLFNBQVNLLGtCQUFrQjtBQUMzQixNQUFJbEksR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsSUFBSSxHQUFHO0FBQzNDO0VBQ0Q7QUFFQUYsS0FBR21JLEtBQUssa0JBQWtCLEVBQUVDLElBQUlaLFdBQVc7QUFDM0MsT0FBS0Msb0JBQW9CO0FBQzFCLEdBQUc7IiwKICAibmFtZXMiOiBbIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJPdmVyQVllYXIiLCAibG9jYWxpemUiLCAiZW4iLCAiVGhpc1dlZWsiLCAiVGhpc01vbnRoIiwgIlRoaXNTZWFzb24iLCAiVGhpc1NlbWl5ZWFyIiwgIlRoaXNZZWFyIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJXcmFwcGVyIiwgInByb3BzIiwgInRpbWVTcGFuIiwgImlubmVyRWxlbWVudCIsICJjbGFzc05hbWUiLCAiY29uY2F0IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJUYWciLCAiX2dldE1lc3NhZ2UiLCAiaW5kaWNhdG9yIiwgImljb25DbGFzc05hbWUiLCAidGV4dENsYXNzTmFtZSIsICJGcmFnbWVudCIsICJ0aXRsZSIsICJnZXRMYXN0QWN0aXZlTWFya2VyIiwgInRpbWVzdGFtcCIsICJkYXRlIiwgIkRhdGUiLCAicGFyc2UiLCAibm93IiwgImRpZmYiLCAiTWF0aCIsICJmbG9vciIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJzdG9yYWdlS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldFVzZXJDb250cmlic1RpbWVzdGFtcCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVjdXNlciIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJsaXN0IiwgInVjbGltaXQiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicmVzdWx0IiwgInVzZXJjb250cmlicyIsICJsZW5ndGgiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0TG9nRXZlbnRzVGltZXN0YW1wIiwgIl9yZWYyIiwgImxldXNlciIsICJmb3JtYXR2ZXJzaW9uIiwgImxlbGltaXQiLCAibGVwcm9wIiwgImxvZ2V2ZW50cyIsICJfeDIiLCAiZ2V0VGltZXN0YW1wIiwgIl9yZWYzIiwgInVzZXJuYW1lIiwgInN0b3JhZ2UiLCAiX3lpZWxkJGdldFVzZXJDb250cmliIiwgIl95aWVsZCRnZXRMb2dFdmVudHNUaSIsICJ1Y1RpbWVzdGFtcCIsICJsZVRpbWVzdGFtcCIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAic2V0IiwgIl94MyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBwZW5kTGFzdEFjdGl2ZU1hcmtlciIsICJfcmVmNCIsICJ1c2VybmFtZXMiLCAiJGVsZW1lbnRzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAidW5pcXVlQXJyYXkiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl95aWVsZCRnZXRUaW1lc3RhbXAiLCAidmFsdWUiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiJGVsZW1lbnQiLCAiZGF0YSIsICIkIiwgImluc2VydEFmdGVyIiwgImVyciIsICJlIiwgImYiLCAiX3g0IiwgImFwcGVuZExhc3RBY3RpdmVNYXJrZXJUb1VzZXJQYWdlIiwgIl9yZWY1IiwgIl95aWVsZCRnZXRUaW1lc3RhbXAyIiwgIl9pdGVyYXRvcjQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfc3RlcDQiLCAiZWxlbWVudCIsICJwcmVwZW5kIiwgIl94NSIsICJnZXRVc2VyTmFtZXNBbmRFbGVtZW50cyIsICIkY29udGVudCIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAibG9jYWxpemVkVXNlck5hbWVzcGFjZSIsICJfaXRlcmF0b3I1IiwgImZpbmQiLCAiam9pbiIsICJfc3RlcDUiLCAiXyRlbGVtZW50JGF0dHIiLCAidXNlclJlZ2V4IiwgIlJlZ0V4cCIsICJ1c2VybmFtZU1hdGNoQXJyYXkiLCAiZGVjb2RlVVJJIiwgImF0dHIiLCAibWF0Y2giLCAicmVwbGFjZSIsICJpbmRleCIsICJpbmRleE9mIiwgIndob0lzQWN0aXZlIiwgIndob0lzQWN0aXZlVXNlclBhZ2UiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAicmVsZXZhbnRVc2VyUGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInBhZ2VOYW1lIiwgIndob0lzQWN0aXZlTG9hZCIsICJob29rIiwgImFkZCJdCn0K
