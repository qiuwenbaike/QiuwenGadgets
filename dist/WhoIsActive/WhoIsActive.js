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
//! src/WhoIsActive/options.json
var mountPointSelector = "#footer-info,.page-info";
var storageKey = "ext.gadget.WhoIsActive_whoIsActive-";
var version = "2.1";
//! src/WhoIsActive/modules/util/appendFooterNotice.ts
var appendFooterNotice = (element) => {
  const mountPoint = document.querySelector(mountPointSelector);
  if (mountPoint) {
    mountPoint.prepend(element);
  }
};
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
      if (usercontribs.length) {
        ({
          timestamp
        } = usercontribs[0]);
      }
    } catch (error) {
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
      if (logevents.length) {
        ({
          timestamp
        } = logevents[0]);
      }
    } catch (error) {
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
    if (mw.storage.getObject(storageKey + username)) {
      timestamp = mw.storage.getObject(storageKey + username);
    } else {
      const ucTimestamp = yield getUserContribsTimestamp(username);
      const leTimestamp = yield getLogEventsTimestamp(username);
      if (ucTimestamp || leTimestamp) {
        if (ucTimestamp && leTimestamp) {
          timestamp = Number.parseInt(ucTimestamp, 10) > Number.parseInt(leTimestamp, 10) ? ucTimestamp : leTimestamp;
        } else {
          timestamp = ucTimestamp || leTimestamp;
        }
      }
    }
    if (timestamp) {
      mw.storage.setObject(storageKey + username, timestamp, 10 * 60);
    }
    return timestamp;
  });
  return function getTimestamp2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/WhoIsActive/modules/util/appendMarker.ts
var appendMarkerToUserLinks = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* ({
    userName,
    $elements
  }) {
    if (SYSTEM_SCRIPT_LIST.includes(userName)) {
      return;
    }
    const timestamp = yield getTimestamp(userName);
    if (!timestamp) {
      return;
    }
    var _iterator2 = _createForOfIteratorHelper($elements), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const $element = _step2.value;
        $(getLastActiveMarker(timestamp, true)).insertAfter($element);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  return function appendMarkerToUserLinks2(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var appendMarkerToUserPage = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (userName) {
    if (SYSTEM_SCRIPT_LIST.includes(userName)) {
      return;
    }
    const timestamp = yield getTimestamp(userName);
    if (!timestamp) {
      return;
    }
    appendFooterNotice(getLastActiveMarker(timestamp, false));
  });
  return function appendMarkerToUserPage2(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
//! src/WhoIsActive/modules/util/getUserLinks.ts
var getUserLinks = ($content) => {
  const userLinks = {};
  const {
    wgFormattedNamespaces
  } = mw.config.get();
  const {
    2: localizedUserNamespace
  } = wgFormattedNamespaces;
  var _iterator3 = _createForOfIteratorHelper($content.find(['a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])', 'a[title^="'.concat(localizedUserNamespace, ':"]:not(.mw-changeslist-date):not([href*="undo"])')].join(","))), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var _$element$attr;
      const element = _step3.value;
      const $element = $(element);
      const userRegex = new RegExp("((User)|(".concat(localizedUserNamespace, ")):(.*?)(?=&|$)"));
      const userNameMatchArray = decodeURI((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "").match(userRegex);
      if (!userNameMatchArray) {
        continue;
      }
      let [userName] = userNameMatchArray;
      userName = userName.replace(new RegExp("^((User)|(".concat(localizedUserNamespace, ")):"), "i"), "");
      const index = userName.indexOf("/");
      if (index === -1) {
        var _userName, _userLinks$_userName;
        (_userLinks$_userName = userLinks[_userName = userName]) !== null && _userLinks$_userName !== void 0 ? _userLinks$_userName : userLinks[_userName] = [];
        userLinks[userName][userLinks[userName].length] = $element;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return userLinks;
};
//! src/WhoIsActive/modules/core.ts
var whoIsActiveUserLinks = ($content) => {
  const userLinks = getUserLinks($content);
  for (var _i = 0, _Object$entries = Object.entries(userLinks); _i < _Object$entries.length; _i++) {
    const [userName, $elements] = _Object$entries[_i];
    void appendMarkerToUserLinks({
      userName,
      $elements
    });
  }
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
  void appendMarkerToUserPage(wgRelevantUserName);
};
//! src/WhoIsActive/WhoIsActive.ts
(function whoIsActiveLoad() {
  mw.hook("wikipage.content").add(whoIsActiveUserLinks);
  void whoIsActiveUserPage();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1dob0lzQWN0aXZlL29wdGlvbnMuanNvbiIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy91dGlsL2FwcGVuZEZvb3Rlck5vdGljZS50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy91dGlsL2dldExhc3RBY3RpdmVNYXJrZXIudHN4IiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRUaW1lc3RhbXAudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9hcHBlbmRNYXJrZXIudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRVc2VyTGlua3MudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvY29yZS50cyIsICJzcmMvV2hvSXNBY3RpdmUvV2hvSXNBY3RpdmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9O1xuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0Lldob0lzQWN0aXZlX3dob0lzQWN0aXZlLVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjFcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgYXBwZW5kRm9vdGVyTm90aWNlID0gKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcblx0Y29uc3QgbW91bnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblxuXHRpZiAobW91bnRQb2ludCkge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZChlbGVtZW50KTtcblx0fVxufTtcblxuZXhwb3J0IHthcHBlbmRGb290ZXJOb3RpY2V9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbnR5cGUgVGltZVNwYW4gPSAnVGhpc1dlZWsnIHwgJ1RoaXNNb250aCcgfCAnVGhpc1NlYXNvbicgfCAnVGhpc1NlbWl5ZWFyJyB8ICdUaGlzWWVhcicgfCAnT3ZlckFZZWFyJztcblxuZnVuY3Rpb24gV3JhcHBlcihwcm9wczoge3RpbWVTcGFuOiBUaW1lU3BhbjsgaW5uZXJFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnR9KSB7XG5cdGNvbnN0IHt0aW1lU3BhbiwgaW5uZXJFbGVtZW50fSA9IHByb3BzO1xuXG5cdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nW10gPSBbJ2dhZGdldC13aG9pc2FjdGl2ZScsIGBnYWRnZXQtd2hvaXNhY3RpdmVfXyR7dGltZVNwYW59YF07XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17Wy4uLmNsYXNzTmFtZSwgJ3BhZ2UtaW5mb19faXRlbScsICdjaXRpemVuLWZvb3Rlcl9fcGFnZWluZm8taXRlbScsICdub3ByaW50J119PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWydnb25nYmknLCAndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnbm9wcmludCddfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnbm9wcmludCddfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gVGFnKHByb3BzOiB7dGltZVNwYW46IFRpbWVTcGFuOyBpbmRpY2F0b3I6IGJvb2xlYW59KSB7XG5cdGNvbnN0IHt0aW1lU3BhbiwgaW5kaWNhdG9yfSA9IHByb3BzO1xuXG5cdGNvbnN0IGljb25DbGFzc05hbWU6IHN0cmluZ1tdID0gWydnYWRnZXQtd2hvaXNhY3RpdmVfX2ljb24nLCBgZ2FkZ2V0LXdob2lzYWN0aXZlX19pY29uX18ke3RpbWVTcGFufWBdO1xuXHRjb25zdCB0ZXh0Q2xhc3NOYW1lOiBzdHJpbmdbXSA9IFtcblx0XHQnZ2FkZ2V0LXdob2lzYWN0aXZlX190ZXh0Jyxcblx0XHRpbmRpY2F0b3IgPT09IHRydWUgPyAnLCBnYWRnZXQtd2hvaXNhY3RpdmVfX25vdGV4dCcgOiAnJyxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2ljb25DbGFzc05hbWV9IHRpdGxlPXtnZXRNZXNzYWdlKHRpbWVTcGFuKX0gLz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17dGV4dENsYXNzTmFtZX0+e2dldE1lc3NhZ2UodGltZVNwYW4pID8/ICcnfTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuY29uc3QgZ2V0TGFzdEFjdGl2ZU1hcmtlciA9ICh0aW1lc3RhbXA6IHN0cmluZywgaW5kaWNhdG9yOiBib29sZWFuKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcblx0Y29uc3QgZGF0ZTogbnVtYmVyID0gRGF0ZS5wYXJzZSh0aW1lc3RhbXApO1xuXHRjb25zdCBub3c6IG51bWJlciA9IERhdGUubm93KCk7XG5cdGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKG5vdyAtIGRhdGUpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblxuXHRsZXQgdGltZVNwYW46IFRpbWVTcGFuID0gJ1RoaXNXZWVrJztcblx0aWYgKGRpZmYgPiAzNjUpIHtcblx0XHR0aW1lU3BhbiA9ICdPdmVyQVllYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiAxODMpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzWWVhcic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDkyKSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc1NlbWl5ZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gMzEpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzU2Vhc29uJztcblx0fSBlbHNlIGlmIChkaWZmID4gNykge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNNb250aCc7XG5cdH1cblxuXHRyZXR1cm4gPFdyYXBwZXIgdGltZVNwYW49e3RpbWVTcGFufSBpbm5lckVsZW1lbnQ9ezxUYWcgdGltZVNwYW49e3RpbWVTcGFufSBpbmRpY2F0b3I9e2luZGljYXRvcn0gLz59IC8+O1xufTtcblxuZXhwb3J0IHR5cGUge1RpbWVTcGFufTtcbmV4cG9ydCB7Z2V0TGFzdEFjdGl2ZU1hcmtlcn07XG4iLCAiaW1wb3J0IHR5cGUge1RpbWVTcGFufSBmcm9tICcuL3V0aWwvZ2V0TGFzdEFjdGl2ZU1hcmtlcic7XG5pbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0T3ZlckFZZWFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCBvdmVyIGEgeWVhciBhZ28nLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5bm05pyq5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOW5tOacquaciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc1dlZWs6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIHRoaXMgd2VlaycsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlkajlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5ZGo5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzTW9udGg6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIHRoaXMgbW9udGgnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5pyI5YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOaciOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc1NlYXNvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgaW4gMyBtb250aHMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiJ5pyI5YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4ieaciOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc1NlbWl5ZWFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCBpbiBoYWxmIGEgeWVhcicsXG5cdFx0XHQnemgtaGFucyc6ICfljYrlubTlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Y2K5bm05YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzWWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyB5ZWFyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOW5tOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlubTlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHR9IHNhdGlzZmllcyBSZWNvcmQ8VGltZVNwYW4sIHN0cmluZz4gJiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFdob0lzQWN0aXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtMb2dldmVudHMsIFVzZXJjb250cmlic30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0VXNlckNvbnRyaWJzVGltZXN0YW1wID0gYXN5bmMgKHVjdXNlcjogc3RyaW5nKSA9PiB7XG5cdGxldCB0aW1lc3RhbXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2VyQ29udHJpYnNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGxpc3Q6ICd1c2VyY29udHJpYnMnLFxuXHRcdFx0dWNsaW1pdDogMSxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdFx0dWN1c2VyLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRjb25zdCB7dXNlcmNvbnRyaWJzfSA9IHJlc3VsdFsncXVlcnknXSBhcyBVc2VyY29udHJpYnM7XG5cdFx0aWYgKHVzZXJjb250cmlicy5sZW5ndGgpIHtcblx0XHRcdCh7dGltZXN0YW1wfSA9IHVzZXJjb250cmlic1swXSEpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbV2hvSXNBY3RpdmVdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbmNvbnN0IGdldExvZ0V2ZW50c1RpbWVzdGFtcCA9IGFzeW5jIChsZXVzZXI6IHN0cmluZykgPT4ge1xuXHRsZXQgdGltZXN0YW1wOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdFx0bGV1c2VyLFxuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdGxlbGltaXQ6IDEsXG5cdFx0XHRsZXByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdGNvbnN0IHtsb2dldmVudHN9ID0gcmVzdWx0WydxdWVyeSddIGFzIExvZ2V2ZW50cztcblx0XHRpZiAobG9nZXZlbnRzLmxlbmd0aCkge1xuXHRcdFx0KHt0aW1lc3RhbXB9ID0gbG9nZXZlbnRzWzBdISk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tXaG9Jc0FjdGl2ZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cblxuXHRyZXR1cm4gdGltZXN0YW1wO1xufTtcblxuY29uc3QgZ2V0VGltZXN0YW1wID0gYXN5bmMgKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4gPT4ge1xuXHRsZXQgdGltZXN0YW1wOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHVzZXJuYW1lKSkge1xuXHRcdHRpbWVzdGFtcCA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHVzZXJuYW1lKSBhcyBzdHJpbmc7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgdWNUaW1lc3RhbXAgPSBhd2FpdCBnZXRVc2VyQ29udHJpYnNUaW1lc3RhbXAodXNlcm5hbWUpO1xuXHRcdGNvbnN0IGxlVGltZXN0YW1wID0gYXdhaXQgZ2V0TG9nRXZlbnRzVGltZXN0YW1wKHVzZXJuYW1lKTtcblxuXHRcdGlmICh1Y1RpbWVzdGFtcCB8fCBsZVRpbWVzdGFtcCkge1xuXHRcdFx0aWYgKHVjVGltZXN0YW1wICYmIGxlVGltZXN0YW1wKSB7XG5cdFx0XHRcdHRpbWVzdGFtcCA9XG5cdFx0XHRcdFx0TnVtYmVyLnBhcnNlSW50KHVjVGltZXN0YW1wLCAxMCkgPiBOdW1iZXIucGFyc2VJbnQobGVUaW1lc3RhbXAsIDEwKSA/IHVjVGltZXN0YW1wIDogbGVUaW1lc3RhbXA7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aW1lc3RhbXAgPSB1Y1RpbWVzdGFtcCB8fCBsZVRpbWVzdGFtcDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAodGltZXN0YW1wKSB7XG5cdFx0Ly8gQ2FjaGUgZm9yIDEwIG1pbnV0ZXNcblx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSwgdGltZXN0YW1wLCAxMCAqIDYwKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5leHBvcnQge2dldFRpbWVzdGFtcH07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1R9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7YXBwZW5kRm9vdGVyTm90aWNlfSBmcm9tICcuL2FwcGVuZEZvb3Rlck5vdGljZSc7XG5pbXBvcnQge2dldExhc3RBY3RpdmVNYXJrZXJ9IGZyb20gJy4vZ2V0TGFzdEFjdGl2ZU1hcmtlcic7XG5pbXBvcnQge2dldFRpbWVzdGFtcH0gZnJvbSAnLi9nZXRUaW1lc3RhbXAnO1xuXG5jb25zdCBhcHBlbmRNYXJrZXJUb1VzZXJMaW5rcyA9IGFzeW5jICh7dXNlck5hbWUsICRlbGVtZW50c306IHt1c2VyTmFtZTogc3RyaW5nOyAkZWxlbWVudHM6IEpRdWVyeVtdfSkgPT4ge1xuXHQvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdGlmIChTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXModXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGltZXN0YW1wID0gYXdhaXQgZ2V0VGltZXN0YW1wKHVzZXJOYW1lKTtcblxuXHRpZiAoIXRpbWVzdGFtcCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgJGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0JChnZXRMYXN0QWN0aXZlTWFya2VyKHRpbWVzdGFtcCwgdHJ1ZSkpLmluc2VydEFmdGVyKCRlbGVtZW50KTtcblx0fVxufTtcblxuY29uc3QgYXBwZW5kTWFya2VyVG9Vc2VyUGFnZSA9IGFzeW5jICh1c2VyTmFtZTogc3RyaW5nKSA9PiB7XG5cdGlmIChTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXModXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGltZXN0YW1wID0gYXdhaXQgZ2V0VGltZXN0YW1wKHVzZXJOYW1lKTtcblxuXHRpZiAoIXRpbWVzdGFtcCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFwcGVuZEZvb3Rlck5vdGljZShnZXRMYXN0QWN0aXZlTWFya2VyKHRpbWVzdGFtcCwgZmFsc2UpKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kTWFya2VyVG9Vc2VyTGlua3MsIGFwcGVuZE1hcmtlclRvVXNlclBhZ2V9O1xuIiwgImNvbnN0IGdldFVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KSA9PiB7XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdPiA9IHt9O1xuXG5cdGNvbnN0IHt3Z0Zvcm1hdHRlZE5hbWVzcGFjZXN9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHsyOiBsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KFxuXHRcdFtcblx0XHRcdCdhW3RpdGxlXj1cIlVzZXI6XCJdOm5vdCgubXctY2hhbmdlc2xpc3QtZGF0ZSk6bm90KFtocmVmKj1cInVuZG9cIl0pJyxcblx0XHRcdGBhW3RpdGxlXj1cIiR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX06XCJdOm5vdCgubXctY2hhbmdlc2xpc3QtZGF0ZSk6bm90KFtocmVmKj1cInVuZG9cIl0pYCxcblx0XHRdLmpvaW4oJywnKVxuXHQpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgdXNlclJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAoKFVzZXIpfCgke2xvY2FsaXplZFVzZXJOYW1lc3BhY2V9KSk6KC4qPykoPz0mfCQpYCk7XG5cdFx0Y29uc3QgdXNlck5hbWVNYXRjaEFycmF5OiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IGRlY29kZVVSSSgkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJycpLm1hdGNoKHVzZXJSZWdleCk7XG5cdFx0aWYgKCF1c2VyTmFtZU1hdGNoQXJyYXkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBbdXNlck5hbWVdID0gdXNlck5hbWVNYXRjaEFycmF5O1xuXHRcdHVzZXJOYW1lID0gdXNlck5hbWUucmVwbGFjZShuZXcgUmVnRXhwKGBeKChVc2VyKXwoJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfSkpOmAsICdpJyksICcnKTtcblx0XHRjb25zdCBpbmRleDogbnVtYmVyID0gdXNlck5hbWUuaW5kZXhPZignLycpO1xuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdHVzZXJMaW5rc1t1c2VyTmFtZV0gPz89IFtdO1xuXHRcdFx0KHVzZXJMaW5rc1t1c2VyTmFtZV0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKVtcblx0XHRcdFx0KHVzZXJMaW5rc1t1c2VyTmFtZV0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKS5sZW5ndGhcblx0XHRcdF0gPSAkZWxlbWVudDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdXNlckxpbmtzO1xufTtcblxuZXhwb3J0IHtnZXRVc2VyTGlua3N9O1xuIiwgImltcG9ydCB7YXBwZW5kTWFya2VyVG9Vc2VyTGlua3MsIGFwcGVuZE1hcmtlclRvVXNlclBhZ2V9IGZyb20gJy4vdXRpbC9hcHBlbmRNYXJrZXInO1xuaW1wb3J0IHtnZXRVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZXRVc2VyTGlua3MnO1xuXG5jb25zdCB3aG9Jc0FjdGl2ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VyTGlua3MgPSBnZXRVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdGZvciAoY29uc3QgW3VzZXJOYW1lLCAkZWxlbWVudHNdIG9mIE9iamVjdC5lbnRyaWVzKHVzZXJMaW5rcykpIHtcblx0XHR2b2lkIGFwcGVuZE1hcmtlclRvVXNlckxpbmtzKHt1c2VyTmFtZSwgJGVsZW1lbnRzfSk7XG5cdH1cbn07XG5cbmNvbnN0IHdob0lzQWN0aXZlVXNlclBhZ2UgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUgfHwgd2dOYW1lc3BhY2VOdW1iZXIgIT09IDIgfHwgd2dBY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCAyKS50b1RleHQoKTtcblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1BhZ2VOYW1lKS50b1RleHQoKTtcblx0aWYgKHJlbGV2YW50VXNlclBhZ2VOYW1lICE9PSBwYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgYXBwZW5kTWFya2VyVG9Vc2VyUGFnZSh3Z1JlbGV2YW50VXNlck5hbWUpO1xufTtcblxuZXhwb3J0IHt3aG9Jc0FjdGl2ZVVzZXJMaW5rcywgd2hvSXNBY3RpdmVVc2VyUGFnZX07XG4iLCAiaW1wb3J0IHt3aG9Jc0FjdGl2ZVVzZXJMaW5rcywgd2hvSXNBY3RpdmVVc2VyUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4oZnVuY3Rpb24gd2hvSXNBY3RpdmVMb2FkKCkge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKHdob0lzQWN0aXZlVXNlckxpbmtzKTtcblx0dm9pZCB3aG9Jc0FjdGl2ZVVzZXJQYWdlKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEscUJBQStCLENBQ3BDLFNBQ0EsUUFDQSxVQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTs7QUNSQSxJQUFBQyxxQkFBc0I7QUFDdEIsSUFBQUMsYUFBYztBQUNkLElBQUFDLFVBQVc7O0FDRFosSUFBTUMscUJBQXNCQyxhQUFxQjtBQUNoRCxRQUFNQyxhQUFhQyxTQUFTQyxjQUFtQ1Asa0JBQWtCO0FBRWpGLE1BQUlLLFlBQVk7QUFDZkEsZUFBV0csUUFBUUosT0FBTztFQUMzQjtBQUNEOztBQ1JBLElBQUFLLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQ2xCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxZQUFBLEdBQVdGLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFdBQUEsR0FBVUwsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsWUFBQSxHQUFXTixrQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxhQUFBLEdBQVlQLGtCQUFBRyxVQUFTO01BQ3BCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLGVBQUEsR0FBY1Isa0JBQUFHLFVBQVM7TUFDdEJDLElBQUk7TUFDSixX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QUFDOUIsU0FBSzNDLHdCQUF3QjtNQUFDRTtNQUFVQztJQUFTLENBQUM7RUFDbkQ7QUFDRDtBQUVBLElBQU00QyxzQkFBc0JBLE1BQVk7QUFDdkMsUUFBTTtJQUFDQztJQUFVQztJQUFtQkM7SUFBWUM7RUFBa0IsSUFBSWxILEdBQUdDLE9BQU9DLElBQUk7QUFFcEYsTUFBSSxDQUFDZ0gsc0JBQXNCRixzQkFBc0IsS0FBS0QsYUFBYSxRQUFRO0FBQzFFO0VBQ0Q7QUFFQSxRQUFNSSx1QkFBK0IsSUFBSW5ILEdBQUdvSCxNQUFNRixvQkFBb0IsQ0FBQyxFQUFFRyxPQUFPO0FBQ2hGLFFBQU1DLFdBQW1CLElBQUl0SCxHQUFHb0gsTUFBTUgsVUFBVSxFQUFFSSxPQUFPO0FBQ3pELE1BQUlGLHlCQUF5QkcsVUFBVTtBQUN0QztFQUNEO0FBRUEsT0FBS3JDLHVCQUF1QmlDLGtCQUFrQjtBQUMvQzs7Q0N2QkMsU0FBU0ssa0JBQWtCO0FBQzNCdkgsS0FBR3dILEtBQUssa0JBQWtCLEVBQUVDLElBQUloQixvQkFBb0I7QUFDcEQsT0FBS0ssb0JBQW9CO0FBQzFCLEdBQUc7IiwKICAibmFtZXMiOiBbIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAic3RvcmFnZUtleSIsICJ2ZXJzaW9uIiwgImFwcGVuZEZvb3Rlck5vdGljZSIsICJlbGVtZW50IiwgIm1vdW50UG9pbnQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwcmVwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIk92ZXJBWWVhciIsICJsb2NhbGl6ZSIsICJlbiIsICJUaGlzV2VlayIsICJUaGlzTW9udGgiLCAiVGhpc1NlYXNvbiIsICJUaGlzU2VtaXllYXIiLCAiVGhpc1llYXIiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIldyYXBwZXIiLCAicHJvcHMiLCAidGltZVNwYW4iLCAiaW5uZXJFbGVtZW50IiwgImNsYXNzTmFtZSIsICJjb25jYXQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpbmNsdWRlcyIsICJUYWciLCAiX2dldE1lc3NhZ2UiLCAiaW5kaWNhdG9yIiwgImljb25DbGFzc05hbWUiLCAidGV4dENsYXNzTmFtZSIsICJGcmFnbWVudCIsICJ0aXRsZSIsICJnZXRMYXN0QWN0aXZlTWFya2VyIiwgInRpbWVzdGFtcCIsICJkYXRlIiwgIkRhdGUiLCAicGFyc2UiLCAibm93IiwgImRpZmYiLCAiTWF0aCIsICJmbG9vciIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRVc2VyQ29udHJpYnNUaW1lc3RhbXAiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1Y3VzZXIiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAibGlzdCIsICJ1Y2xpbWl0IiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3VsdCIsICJ1c2VyY29udHJpYnMiLCAibGVuZ3RoIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldExvZ0V2ZW50c1RpbWVzdGFtcCIsICJfcmVmMiIsICJsZXVzZXIiLCAiZm9ybWF0dmVyc2lvbiIsICJsZWxpbWl0IiwgImxlcHJvcCIsICJsb2dldmVudHMiLCAiX3gyIiwgImdldFRpbWVzdGFtcCIsICJfcmVmMyIsICJ1c2VybmFtZSIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJ1Y1RpbWVzdGFtcCIsICJsZVRpbWVzdGFtcCIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAic2V0T2JqZWN0IiwgIl94MyIsICJhcHBlbmRNYXJrZXJUb1VzZXJMaW5rcyIsICJfcmVmNCIsICJ1c2VyTmFtZSIsICIkZWxlbWVudHMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiJGVsZW1lbnQiLCAidmFsdWUiLCAiJCIsICJpbnNlcnRBZnRlciIsICJlcnIiLCAiZSIsICJmIiwgIl94NCIsICJhcHBlbmRNYXJrZXJUb1VzZXJQYWdlIiwgIl9yZWY1IiwgIl94NSIsICJnZXRVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAidXNlckxpbmtzIiwgIndnRm9ybWF0dGVkTmFtZXNwYWNlcyIsICJsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlIiwgIl9pdGVyYXRvcjMiLCAiZmluZCIsICJqb2luIiwgIl9zdGVwMyIsICJfJGVsZW1lbnQkYXR0ciIsICJ1c2VyUmVnZXgiLCAiUmVnRXhwIiwgInVzZXJOYW1lTWF0Y2hBcnJheSIsICJkZWNvZGVVUkkiLCAiYXR0ciIsICJtYXRjaCIsICJyZXBsYWNlIiwgImluZGV4IiwgImluZGV4T2YiLCAiX3VzZXJOYW1lIiwgIl91c2VyTGlua3MkX3VzZXJOYW1lIiwgIndob0lzQWN0aXZlVXNlckxpbmtzIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJ3aG9Jc0FjdGl2ZVVzZXJQYWdlIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJwYWdlTmFtZSIsICJ3aG9Jc0FjdGl2ZUxvYWQiLCAiaG9vayIsICJhZGQiXQp9Cg==
