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
          continue;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRMYXN0QWN0aXZlTWFya2VyLnRzeCIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9vcHRpb25zLmpzb24iLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRUaW1lc3RhbXAudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9hcHBlbmRMYXN0QWN0aXZlTWFya2VyLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL3V0aWwvYXBwZW5kTGFzdEFjdGl2ZU1hcmtlclRvVXNlclBhZ2UudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRVc2VyTmFtZXNBbmRFbGVtZW50cy50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9XaG9Jc0FjdGl2ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxudHlwZSBUaW1lU3BhbiA9ICdUaGlzV2VlaycgfCAnVGhpc01vbnRoJyB8ICdUaGlzU2Vhc29uJyB8ICdUaGlzU2VtaXllYXInIHwgJ1RoaXNZZWFyJyB8ICdPdmVyQVllYXInO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHByb3BzOiB7dGltZVNwYW46IFRpbWVTcGFuOyBpbm5lckVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudH0pIHtcblx0Y29uc3Qge3RpbWVTcGFuLCBpbm5lckVsZW1lbnR9ID0gcHJvcHM7XG5cblx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmdbXSA9IFsnZ2FkZ2V0LXdob2lzYWN0aXZlJywgYGdhZGdldC13aG9pc2FjdGl2ZV9fJHt0aW1lU3Bhbn1gXTtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbLi4uY2xhc3NOYW1lLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ2dvbmdiaScsICd2ZWN0b3InLCAndmVjdG9yLTIwMjInXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBjbGFzc05hbWU9e1tjbGFzc05hbWUsICdub3ByaW50J119Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e1tjbGFzc05hbWUsICdub3ByaW50J119Pntpbm5lckVsZW1lbnR9PC9kaXY+O1xufVxuXG5mdW5jdGlvbiBUYWcocHJvcHM6IHt0aW1lU3BhbjogVGltZVNwYW47IGluZGljYXRvcjogYm9vbGVhbn0pIHtcblx0Y29uc3Qge3RpbWVTcGFuLCBpbmRpY2F0b3J9ID0gcHJvcHM7XG5cblx0Y29uc3QgaWNvbkNsYXNzTmFtZTogc3RyaW5nW10gPSBbJ2dhZGdldC13aG9pc2FjdGl2ZV9faWNvbicsIGBnYWRnZXQtd2hvaXNhY3RpdmVfX2ljb25fXyR7dGltZVNwYW59YF07XG5cdGNvbnN0IHRleHRDbGFzc05hbWU6IHN0cmluZ1tdID0gW1xuXHRcdCdnYWRnZXQtd2hvaXNhY3RpdmVfX3RleHQnLFxuXHRcdGluZGljYXRvciA9PT0gdHJ1ZSA/ICcsIGdhZGdldC13aG9pc2FjdGl2ZV9fbm90ZXh0JyA6ICcnLFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17aWNvbkNsYXNzTmFtZX0gdGl0bGU9e2dldE1lc3NhZ2UodGltZVNwYW4pfSAvPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXt0ZXh0Q2xhc3NOYW1lfT57Z2V0TWVzc2FnZSh0aW1lU3BhbikgPz8gJyd9PC9zcGFuPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5jb25zdCBnZXRMYXN0QWN0aXZlTWFya2VyID0gKHRpbWVzdGFtcDogc3RyaW5nLCBpbmRpY2F0b3I6IGJvb2xlYW4pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuXHRjb25zdCBkYXRlOiBudW1iZXIgPSBEYXRlLnBhcnNlKHRpbWVzdGFtcCk7XG5cdGNvbnN0IG5vdzogbnVtYmVyID0gRGF0ZS5ub3coKTtcblx0Y29uc3QgZGlmZjogbnVtYmVyID0gTWF0aC5mbG9vcigobm93IC0gZGF0ZSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuXG5cdGxldCB0aW1lU3BhbjogVGltZVNwYW4gPSAnVGhpc1dlZWsnO1xuXHRpZiAoZGlmZiA+IDM2NSkge1xuXHRcdHRpbWVTcGFuID0gJ092ZXJBWWVhcic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDE4Mykge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNZZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gOTIpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzU2VtaXllYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiAzMSkge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNTZWFzb24nO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiA3KSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc01vbnRoJztcblx0fVxuXG5cdHJldHVybiA8V3JhcHBlciB0aW1lU3Bhbj17dGltZVNwYW59IGlubmVyRWxlbWVudD17PFRhZyB0aW1lU3Bhbj17dGltZVNwYW59IGluZGljYXRvcj17aW5kaWNhdG9yfSAvPn0gLz47XG59O1xuXG5leHBvcnQgdHlwZSB7VGltZVNwYW59O1xuZXhwb3J0IHtnZXRMYXN0QWN0aXZlTWFya2VyfTtcbiIsICJpbXBvcnQgdHlwZSB7VGltZVNwYW59IGZyb20gJy4vdXRpbC9nZXRMYXN0QWN0aXZlTWFya2VyJztcbmltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRPdmVyQVllYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIG92ZXIgYSB5ZWFyIGFnbycsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlubTmnKrmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5bm05pyq5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzV2VlazogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyB3ZWVrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOWRqOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlkajlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNNb250aDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyBtb250aCcsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDmnIjlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5pyI5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzU2Vhc29uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCBpbiAzIG1vbnRocycsXG5cdFx0XHQnemgtaGFucyc6ICfkuInmnIjlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiJ5pyI5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzU2VtaXllYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIGluIGhhbGYgYSB5ZWFyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNiuW5tOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfljYrlubTlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNZZWFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIHllYXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5bm05YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOW5tOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxUaW1lU3Bhbiwgc3RyaW5nPiAmIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5XaG9Jc0FjdGl2ZV93aG9Jc0FjdGl2ZS1cIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgV2hvSXNBY3RpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0xvZ2V2ZW50cywgVXNlcmNvbnRyaWJzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRVc2VyQ29udHJpYnNUaW1lc3RhbXAgPSBhc3luYyAodWN1c2VyOiBzdHJpbmcpID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0bGlzdDogJ3VzZXJjb250cmlicycsXG5cdFx0XHR1Y2xpbWl0OiAxLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0XHR1Y3VzZXIsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdGNvbnN0IHt1c2VyY29udHJpYnN9ID0gcmVzdWx0WydxdWVyeSddIGFzIFVzZXJjb250cmlicztcblx0XHRpZiAoIXVzZXJjb250cmlicy5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQoe3RpbWVzdGFtcH0gPSB1c2VyY29udHJpYnNbMF0hKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHR0aW1lc3RhbXAgPSAnMCc7XG5cdFx0Y29uc29sZS5lcnJvcignW1dob0lzQWN0aXZlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5jb25zdCBnZXRMb2dFdmVudHNUaW1lc3RhbXAgPSBhc3luYyAobGV1c2VyOiBzdHJpbmcpID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdGxldXNlcixcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRsZWxpbWl0OiAxLFxuXHRcdFx0bGVwcm9wOiAndGltZXN0YW1wJyxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRjb25zdCB7bG9nZXZlbnRzfSA9IHJlc3VsdFsncXVlcnknXSBhcyBMb2dldmVudHM7XG5cdFx0aWYgKCFsb2dldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0KHt0aW1lc3RhbXB9ID0gbG9nZXZlbnRzWzBdISk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0dGltZXN0YW1wID0gJzAnO1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tXaG9Jc0FjdGl2ZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cblxuXHRyZXR1cm4gdGltZXN0YW1wO1xufTtcblxuY29uc3QgZ2V0VGltZXN0YW1wID0gYXN5bmMgKHVzZXJuYW1lOiBzdHJpbmcpID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nO1xuXG5cdGlmIChtdy5zdG9yYWdlLmdldChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSkpIHtcblx0XHR0aW1lc3RhbXAgPSBtdy5zdG9yYWdlLmdldChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSkgYXMgc3RyaW5nO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHVjVGltZXN0YW1wID0gKGF3YWl0IGdldFVzZXJDb250cmlic1RpbWVzdGFtcCh1c2VybmFtZSkpID8/ICcwJztcblx0XHRjb25zdCBsZVRpbWVzdGFtcCA9IChhd2FpdCBnZXRMb2dFdmVudHNUaW1lc3RhbXAodXNlcm5hbWUpKSA/PyAnMCc7XG5cdFx0dGltZXN0YW1wID0gTnVtYmVyLnBhcnNlSW50KHVjVGltZXN0YW1wLCAxMCkgPiBOdW1iZXIucGFyc2VJbnQobGVUaW1lc3RhbXAsIDEwKSA/IHVjVGltZXN0YW1wIDogbGVUaW1lc3RhbXA7XG5cblx0XHQvLyBDYWNoZSBmb3IgMTAgbWludXRlc1xuXHRcdG13LnN0b3JhZ2Uuc2V0KE9QVElPTlMuc3RvcmFnZUtleSArIHVzZXJuYW1lLCB0aW1lc3RhbXAsIDEwICogNjApO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbmV4cG9ydCB7Z2V0VGltZXN0YW1wfTtcbiIsICJpbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRMYXN0QWN0aXZlTWFya2VyfSBmcm9tICcuL2dldExhc3RBY3RpdmVNYXJrZXInO1xuaW1wb3J0IHtnZXRUaW1lc3RhbXB9IGZyb20gJy4vZ2V0VGltZXN0YW1wJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwcGVuZExhc3RBY3RpdmVNYXJrZXIgPSBhc3luYyAoe3VzZXJuYW1lcywgJGVsZW1lbnRzfToge3VzZXJuYW1lczogc3RyaW5nW107ICRlbGVtZW50czogSlF1ZXJ5W119KSA9PiB7XG5cdC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0Zm9yIChjb25zdCB1c2VybmFtZSBvZiB1bmlxdWVBcnJheSh1c2VybmFtZXMpKSB7XG5cdFx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh1c2VybmFtZSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRpbWVzdGFtcCA9IChhd2FpdCBnZXRUaW1lc3RhbXAodXNlcm5hbWUpKSA/PyAnMCc7XG5cblx0XHRpZiAoIXRpbWVzdGFtcCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCAkZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRcdGlmICgkZWxlbWVudC5kYXRhKCd1c2VybmFtZScpID09PSB1c2VybmFtZSkge1xuXHRcdFx0XHQkKGdldExhc3RBY3RpdmVNYXJrZXIodGltZXN0YW1wLCB0cnVlKSkuaW5zZXJ0QWZ0ZXIoJGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHthcHBlbmRMYXN0QWN0aXZlTWFya2VyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRMYXN0QWN0aXZlTWFya2VyfSBmcm9tICcuL2dldExhc3RBY3RpdmVNYXJrZXInO1xuaW1wb3J0IHtnZXRUaW1lc3RhbXB9IGZyb20gJy4vZ2V0VGltZXN0YW1wJztcblxuY29uc3QgYXBwZW5kTGFzdEFjdGl2ZU1hcmtlclRvVXNlclBhZ2UgPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZykgPT4ge1xuXHRpZiAoU1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKHVzZXJuYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRpbWVzdGFtcCA9IChhd2FpdCBnZXRUaW1lc3RhbXAodXNlcm5hbWUpKSA/PyAnMCc7XG5cblx0aWYgKCF0aW1lc3RhbXApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpKSB7XG5cdFx0ZWxlbWVudC5wcmVwZW5kKGdldExhc3RBY3RpdmVNYXJrZXIodGltZXN0YW1wLCBmYWxzZSkpO1xuXHR9XG59O1xuXG5leHBvcnQge2FwcGVuZExhc3RBY3RpdmVNYXJrZXJUb1VzZXJQYWdlfTtcbiIsICJjb25zdCBnZXRVc2VyTmFtZXNBbmRFbGVtZW50cyA9ICgkY29udGVudDogSlF1ZXJ5KSA9PiB7XG5cdGNvbnN0IHVzZXJuYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgJGVsZW1lbnRzOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10gPSBbXTtcblxuXHRjb25zdCB7d2dGb3JtYXR0ZWROYW1lc3BhY2VzfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCB7MjogbG9jYWxpemVkVXNlck5hbWVzcGFjZX0gPSB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXM7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kPEhUTUxBbmNob3JFbGVtZW50Pihcblx0XHRbXG5cdFx0XHQnYVt0aXRsZV49XCJVc2VyOlwiXTpub3QoLm13LWNoYW5nZXNsaXN0LWRhdGUpOm5vdChbaHJlZio9XCJ1bmRvXCJdKScsXG5cdFx0XHRgYVt0aXRsZV49XCIke2xvY2FsaXplZFVzZXJOYW1lc3BhY2V9OlwiXTpub3QoLm13LWNoYW5nZXNsaXN0LWRhdGUpOm5vdChbaHJlZio9XCJ1bmRvXCJdKWAsXG5cdFx0XS5qb2luKCcsJylcblx0KSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblxuXHRcdGNvbnN0IHVzZXJSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgKChVc2VyKXwoJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfSkpOiguKj8pKD89JnwkKWApO1xuXHRcdGNvbnN0IHVzZXJuYW1lTWF0Y2hBcnJheTogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBkZWNvZGVVUkkoJGVsZW1lbnQuYXR0cignaHJlZicpID8/ICcnKS5tYXRjaCh1c2VyUmVnZXgpO1xuXHRcdGlmICghdXNlcm5hbWVNYXRjaEFycmF5KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgW3VzZXJuYW1lXSA9IHVzZXJuYW1lTWF0Y2hBcnJheTtcblx0XHR1c2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChgXigoVXNlcil8KCR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX0pKTpgLCAnaScpLCAnJyk7XG5cdFx0Y29uc3QgaW5kZXg6IG51bWJlciA9IHVzZXJuYW1lLmluZGV4T2YoJy8nKTtcblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHQkZWxlbWVudC5kYXRhKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcblx0XHRcdHVzZXJuYW1lc1t1c2VybmFtZXMubGVuZ3RoXSA9IHVzZXJuYW1lO1xuXHRcdFx0JGVsZW1lbnRzWyRlbGVtZW50cy5sZW5ndGhdID0gJGVsZW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHt1c2VybmFtZXMsICRlbGVtZW50c307XG59O1xuXG5leHBvcnQge2dldFVzZXJOYW1lc0FuZEVsZW1lbnRzfTtcbiIsICJpbXBvcnQge2FwcGVuZExhc3RBY3RpdmVNYXJrZXJ9IGZyb20gJy4vdXRpbC9hcHBlbmRMYXN0QWN0aXZlTWFya2VyJztcbmltcG9ydCB7YXBwZW5kTGFzdEFjdGl2ZU1hcmtlclRvVXNlclBhZ2V9IGZyb20gJy4vdXRpbC9hcHBlbmRMYXN0QWN0aXZlTWFya2VyVG9Vc2VyUGFnZSc7XG5pbXBvcnQge2dldFVzZXJOYW1lc0FuZEVsZW1lbnRzfSBmcm9tICcuL3V0aWwvZ2V0VXNlck5hbWVzQW5kRWxlbWVudHMnO1xuXG5jb25zdCB3aG9Jc0FjdGl2ZSA9ICgkY29udGVudDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7dXNlcm5hbWVzLCAkZWxlbWVudHN9ID0gZ2V0VXNlck5hbWVzQW5kRWxlbWVudHMoJGNvbnRlbnQpO1xuXG5cdGlmICghdXNlcm5hbWVzLmxlbmd0aCB8fCAhJGVsZW1lbnRzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgYXBwZW5kTGFzdEFjdGl2ZU1hcmtlcih7dXNlcm5hbWVzLCAkZWxlbWVudHN9KTtcbn07XG5cbmNvbnN0IHdob0lzQWN0aXZlVXNlclBhZ2UgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUgfHwgd2dOYW1lc3BhY2VOdW1iZXIgIT09IDIgfHwgd2dBY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCAyKS50b1RleHQoKTtcblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1BhZ2VOYW1lKS50b1RleHQoKTtcblx0aWYgKHJlbGV2YW50VXNlclBhZ2VOYW1lICE9PSBwYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgYXBwZW5kTGFzdEFjdGl2ZU1hcmtlclRvVXNlclBhZ2Uod2dSZWxldmFudFVzZXJOYW1lKTtcbn07XG5cbmV4cG9ydCB7d2hvSXNBY3RpdmUsIHdob0lzQWN0aXZlVXNlclBhZ2V9O1xuIiwgImltcG9ydCB7d2hvSXNBY3RpdmUsIHdob0lzQWN0aXZlVXNlclBhZ2V9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuKGZ1bmN0aW9uIHdob0lzQWN0aXZlTG9hZCgpIHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCh3aG9Jc0FjdGl2ZSk7XG5cdHZvaWQgd2hvSXNBY3RpdmVVc2VyUGFnZSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7O0FDVEQsSUFBQUMscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNDbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFlBQUEsR0FBV0Ysa0JBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsV0FBQSxHQUFVTCxrQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxZQUFBLEdBQVdOLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLGFBQUEsR0FBWVAsa0JBQUFHLFVBQVM7TUFDcEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksZUFBQSxHQUFjUixrQkFBQUcsVUFBUztNQUN0QkMs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LEdBQUcrSCxNQUFNRixvQkFBb0IsQ0FBQyxFQUFFRyxPQUFPO0FBQ2hGLFFBQU1DLFdBQW1CLElBQUlqSSxHQUFHK0gsTUFBTUgsVUFBVSxFQUFFSSxPQUFPO0FBQ3pELE1BQUlGLHlCQUF5QkcsVUFBVTtBQUN0QztFQUNEO0FBRUEsT0FBS3BDLGlDQUFpQ2dDLGtCQUFrQjtBQUN6RDs7Q0MxQkMsU0FBU0ssa0JBQWtCO0FBQzNCLE1BQUlsSSxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixJQUFJLEdBQUc7QUFDM0M7RUFDRDtBQUVBRixLQUFHbUksS0FBSyxrQkFBa0IsRUFBRUMsSUFBSVosV0FBVztBQUMzQyxPQUFLQyxvQkFBb0I7QUFDMUIsR0FBRzsiLAogICJuYW1lcyI6IFsiU1lTVEVNX1NDUklQVF9MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIk92ZXJBWWVhciIsICJsb2NhbGl6ZSIsICJlbiIsICJUaGlzV2VlayIsICJUaGlzTW9udGgiLCAiVGhpc1NlYXNvbiIsICJUaGlzU2VtaXllYXIiLCAiVGhpc1llYXIiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIldyYXBwZXIiLCAicHJvcHMiLCAidGltZVNwYW4iLCAiaW5uZXJFbGVtZW50IiwgImNsYXNzTmFtZSIsICJjb25jYXQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlRhZyIsICJfZ2V0TWVzc2FnZSIsICJpbmRpY2F0b3IiLCAiaWNvbkNsYXNzTmFtZSIsICJ0ZXh0Q2xhc3NOYW1lIiwgIkZyYWdtZW50IiwgInRpdGxlIiwgImdldExhc3RBY3RpdmVNYXJrZXIiLCAidGltZXN0YW1wIiwgImRhdGUiLCAiRGF0ZSIsICJwYXJzZSIsICJub3ciLCAiZGlmZiIsICJNYXRoIiwgImZsb29yIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgInN0b3JhZ2VLZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0VXNlckNvbnRyaWJzVGltZXN0YW1wIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidWN1c2VyIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImxpc3QiLCAidWNsaW1pdCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXN1bHQiLCAidXNlcmNvbnRyaWJzIiwgImxlbmd0aCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRMb2dFdmVudHNUaW1lc3RhbXAiLCAiX3JlZjIiLCAibGV1c2VyIiwgImZvcm1hdHZlcnNpb24iLCAibGVsaW1pdCIsICJsZXByb3AiLCAibG9nZXZlbnRzIiwgIl94MiIsICJnZXRUaW1lc3RhbXAiLCAiX3JlZjMiLCAidXNlcm5hbWUiLCAic3RvcmFnZSIsICJfeWllbGQkZ2V0VXNlckNvbnRyaWIiLCAiX3lpZWxkJGdldExvZ0V2ZW50c1RpIiwgInVjVGltZXN0YW1wIiwgImxlVGltZXN0YW1wIiwgIk51bWJlciIsICJwYXJzZUludCIsICJzZXQiLCAiX3gzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcHBlbmRMYXN0QWN0aXZlTWFya2VyIiwgIl9yZWY0IiwgInVzZXJuYW1lcyIsICIkZWxlbWVudHMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJ1bmlxdWVBcnJheSIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX3lpZWxkJGdldFRpbWVzdGFtcCIsICJ2YWx1ZSIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICIkZWxlbWVudCIsICJkYXRhIiwgIiQiLCAiaW5zZXJ0QWZ0ZXIiLCAiZXJyIiwgImUiLCAiZiIsICJfeDQiLCAiYXBwZW5kTGFzdEFjdGl2ZU1hcmtlclRvVXNlclBhZ2UiLCAiX3JlZjUiLCAiX3lpZWxkJGdldFRpbWVzdGFtcDIiLCAiX2l0ZXJhdG9yNCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9zdGVwNCIsICJlbGVtZW50IiwgInByZXBlbmQiLCAiX3g1IiwgImdldFVzZXJOYW1lc0FuZEVsZW1lbnRzIiwgIiRjb250ZW50IiwgIndnRm9ybWF0dGVkTmFtZXNwYWNlcyIsICJsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlIiwgIl9pdGVyYXRvcjUiLCAiZmluZCIsICJqb2luIiwgIl9zdGVwNSIsICJfJGVsZW1lbnQkYXR0ciIsICJ1c2VyUmVnZXgiLCAiUmVnRXhwIiwgInVzZXJuYW1lTWF0Y2hBcnJheSIsICJkZWNvZGVVUkkiLCAiYXR0ciIsICJtYXRjaCIsICJyZXBsYWNlIiwgImluZGV4IiwgImluZGV4T2YiLCAid2hvSXNBY3RpdmUiLCAid2hvSXNBY3RpdmVVc2VyUGFnZSIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiLCAid2hvSXNBY3RpdmVMb2FkIiwgImhvb2siLCAiYWRkIl0KfQo=
