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
var storageKey = "ext.gadget.WhoIsActive_whoIsActive-";
var version = "2.1";
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
//! src/WhoIsActive/modules/util/getLastActiveMarker.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
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
      let ucDate;
      if (ucTimestamp) {
        ucDate = new Date(ucTimestamp);
        timestamp = ucTimestamp;
      }
      const leTimestamp = yield getLogEventsTimestamp(username);
      let leDate;
      if (leTimestamp) {
        leDate = new Date(leTimestamp);
        if (!ucDate || leDate > ucDate) {
          timestamp = leTimestamp;
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
    const mountPoint = document.querySelector(mountPointSelector);
    if (!mountPoint) {
      return;
    }
    mountPoint.prepend(getLastActiveMarker(timestamp, false));
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
    2: localizedUserNamespace,
    3: localizedUserTalkNamespace
  } = wgFormattedNamespaces;
  var _iterator3 = _createForOfIteratorHelper($content.find(['a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])', 'a[title^="'.concat(localizedUserNamespace, ':"]:not(.mw-changeslist-date):not([href*="undo"])')].join(","))), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var _$element$attr;
      const element = _step3.value;
      const $element = $(element);
      const userRegex = new RegExp("((User|User[_ ]talk)|(".concat(localizedUserNamespace, "|").concat(localizedUserTalkNamespace, ")):(.*?)(?=&|$)"));
      const userNameMatchArray = decodeURI((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "").match(userRegex);
      if (!userNameMatchArray) {
        continue;
      }
      let [userName] = userNameMatchArray;
      userName = userName.replace(new RegExp("^((User|User[_ ]talk)|(".concat(localizedUserNamespace, "|").concat(localizedUserTalkNamespace, ")):"), "i"), "");
      userName = userName.replace(/#.*$/i, "");
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
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName === "Recentchanges") {
    return;
  }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dob0lzQWN0aXZlL29wdGlvbnMuanNvbiIsICJzcmMvR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy91dGlsL2dldExhc3RBY3RpdmVNYXJrZXIudHN4IiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRUaW1lc3RhbXAudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9hcHBlbmRNYXJrZXIudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRVc2VyTGlua3MudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvY29yZS50cyIsICJzcmMvV2hvSXNBY3RpdmUvV2hvSXNBY3RpdmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0Lldob0lzQWN0aXZlX3dob0lzQWN0aXZlLVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjFcIlxufVxuIiwgImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG50eXBlIFRpbWVTcGFuID0gJ1RoaXNXZWVrJyB8ICdUaGlzTW9udGgnIHwgJ1RoaXNTZWFzb24nIHwgJ1RoaXNTZW1peWVhcicgfCAnVGhpc1llYXInIHwgJ092ZXJBWWVhcic7XG5cbmZ1bmN0aW9uIFdyYXBwZXIocHJvcHM6IHt0aW1lU3BhbjogVGltZVNwYW47IGlubmVyRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50fSkge1xuXHRjb25zdCB7dGltZVNwYW4sIGlubmVyRWxlbWVudH0gPSBwcm9wcztcblxuXHRjb25zdCBjbGFzc05hbWU6IHN0cmluZ1tdID0gWydnYWRnZXQtd2hvaXNhY3RpdmUnLCBgZ2FkZ2V0LXdob2lzYWN0aXZlX18ke3RpbWVTcGFufWBdO1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1suLi5jbGFzc05hbWUsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKFsnZ29uZ2JpJywgJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMiddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gPGxpIGNsYXNzTmFtZT17W2NsYXNzTmFtZSwgJ25vcHJpbnQnXX0+e2lubmVyRWxlbWVudH08L2xpPjtcblx0fVxuXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzTmFtZSwgJ25vcHJpbnQnXX0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59XG5cbmZ1bmN0aW9uIFRhZyhwcm9wczoge3RpbWVTcGFuOiBUaW1lU3BhbjsgaW5kaWNhdG9yOiBib29sZWFufSkge1xuXHRjb25zdCB7dGltZVNwYW4sIGluZGljYXRvcn0gPSBwcm9wcztcblxuXHRjb25zdCBpY29uQ2xhc3NOYW1lOiBzdHJpbmdbXSA9IFsnZ2FkZ2V0LXdob2lzYWN0aXZlX19pY29uJywgYGdhZGdldC13aG9pc2FjdGl2ZV9faWNvbl9fJHt0aW1lU3Bhbn1gXTtcblx0Y29uc3QgdGV4dENsYXNzTmFtZTogc3RyaW5nW10gPSBbXG5cdFx0J2dhZGdldC13aG9pc2FjdGl2ZV9fdGV4dCcsXG5cdFx0aW5kaWNhdG9yID09PSB0cnVlID8gJywgZ2FkZ2V0LXdob2lzYWN0aXZlX19ub3RleHQnIDogJycsXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtpY29uQ2xhc3NOYW1lfSB0aXRsZT17Z2V0TWVzc2FnZSh0aW1lU3Bhbil9IC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3RleHRDbGFzc05hbWV9PntnZXRNZXNzYWdlKHRpbWVTcGFuKSA/PyAnJ308L3NwYW4+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmNvbnN0IGdldExhc3RBY3RpdmVNYXJrZXIgPSAodGltZXN0YW1wOiBzdHJpbmcsIGluZGljYXRvcjogYm9vbGVhbik6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG5cdGNvbnN0IGRhdGU6IG51bWJlciA9IERhdGUucGFyc2UodGltZXN0YW1wKTtcblx0Y29uc3Qgbm93OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXHRjb25zdCBkaWZmOiBudW1iZXIgPSBNYXRoLmZsb29yKChub3cgLSBkYXRlKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cblx0bGV0IHRpbWVTcGFuOiBUaW1lU3BhbiA9ICdUaGlzV2Vlayc7XG5cdGlmIChkaWZmID4gMzY1KSB7XG5cdFx0dGltZVNwYW4gPSAnT3ZlckFZZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gMTgzKSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc1llYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiA5Mikge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNTZW1peWVhcic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDMxKSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc1NlYXNvbic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDcpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzTW9udGgnO1xuXHR9XG5cblx0cmV0dXJuIDxXcmFwcGVyIHRpbWVTcGFuPXt0aW1lU3Bhbn0gaW5uZXJFbGVtZW50PXs8VGFnIHRpbWVTcGFuPXt0aW1lU3Bhbn0gaW5kaWNhdG9yPXtpbmRpY2F0b3J9IC8+fSAvPjtcbn07XG5cbmV4cG9ydCB0eXBlIHtUaW1lU3Bhbn07XG5leHBvcnQge2dldExhc3RBY3RpdmVNYXJrZXJ9O1xuIiwgImltcG9ydCB0eXBlIHtUaW1lU3Bhbn0gZnJvbSAnLi91dGlsL2dldExhc3RBY3RpdmVNYXJrZXInO1xuaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdE92ZXJBWWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgb3ZlciBhIHllYXIgYWdvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOW5tOacquaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlubTmnKrmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNXZWVrOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIHdlZWsnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5ZGo5YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOWRqOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc01vbnRoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIG1vbnRoJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOaciOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDmnIjlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNTZWFzb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIGluIDMgbW9udGhzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4ieaciOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuInmnIjlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNTZW1peWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgaW4gaGFsZiBhIHllYXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5Y2K5bm05YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+WNiuW5tOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc1llYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIHRoaXMgeWVhcicsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlubTlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5bm05YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0fSBzYXRpc2ZpZXMgUmVjb3JkPFRpbWVTcGFuLCBzdHJpbmc+ICYgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBXaG9Jc0FjdGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TG9nZXZlbnRzLCBVc2VyY29udHJpYnN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGdldFVzZXJDb250cmlic1RpbWVzdGFtcCA9IGFzeW5jICh1Y3VzZXI6IHN0cmluZykgPT4ge1xuXHRsZXQgdGltZXN0YW1wOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlckNvbnRyaWJzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0XHRcdHVjbGltaXQ6IDEsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHRcdHVjdXNlcixcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0Y29uc3Qge3VzZXJjb250cmlic30gPSByZXN1bHRbJ3F1ZXJ5J10gYXMgVXNlcmNvbnRyaWJzO1xuXHRcdGlmICh1c2VyY29udHJpYnMubGVuZ3RoKSB7XG5cdFx0XHQoe3RpbWVzdGFtcH0gPSB1c2VyY29udHJpYnNbMF0hKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW1dob0lzQWN0aXZlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5jb25zdCBnZXRMb2dFdmVudHNUaW1lc3RhbXAgPSBhc3luYyAobGV1c2VyOiBzdHJpbmcpID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdGxldXNlcixcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRsZWxpbWl0OiAxLFxuXHRcdFx0bGVwcm9wOiAndGltZXN0YW1wJyxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRjb25zdCB7bG9nZXZlbnRzfSA9IHJlc3VsdFsncXVlcnknXSBhcyBMb2dldmVudHM7XG5cdFx0aWYgKGxvZ2V2ZW50cy5sZW5ndGgpIHtcblx0XHRcdCh7dGltZXN0YW1wfSA9IGxvZ2V2ZW50c1swXSEpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbV2hvSXNBY3RpdmVdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbmNvbnN0IGdldFRpbWVzdGFtcCA9IGFzeW5jICh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+ID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSkpIHtcblx0XHR0aW1lc3RhbXAgPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSkgYXMgc3RyaW5nO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHVjVGltZXN0YW1wID0gYXdhaXQgZ2V0VXNlckNvbnRyaWJzVGltZXN0YW1wKHVzZXJuYW1lKTtcblx0XHRsZXQgdWNEYXRlOiBEYXRlIHwgdW5kZWZpbmVkO1xuXG5cdFx0aWYgKHVjVGltZXN0YW1wKSB7XG5cdFx0XHR1Y0RhdGUgPSBuZXcgRGF0ZSh1Y1RpbWVzdGFtcCk7XG5cdFx0XHR0aW1lc3RhbXAgPSB1Y1RpbWVzdGFtcDtcblx0XHR9XG5cblx0XHRjb25zdCBsZVRpbWVzdGFtcCA9IGF3YWl0IGdldExvZ0V2ZW50c1RpbWVzdGFtcCh1c2VybmFtZSk7XG5cdFx0bGV0IGxlRGF0ZTogRGF0ZSB8IHVuZGVmaW5lZDtcblxuXHRcdGlmIChsZVRpbWVzdGFtcCkge1xuXHRcdFx0bGVEYXRlID0gbmV3IERhdGUobGVUaW1lc3RhbXApO1xuXG5cdFx0XHRpZiAoIXVjRGF0ZSB8fCBsZURhdGUgPiB1Y0RhdGUpIHtcblx0XHRcdFx0dGltZXN0YW1wID0gbGVUaW1lc3RhbXA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHRpbWVzdGFtcCkge1xuXHRcdC8vIENhY2hlIGZvciAxMCBtaW51dGVzXG5cdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgdXNlcm5hbWUsIHRpbWVzdGFtcCwgMTAgKiA2MCk7XG5cdH1cblxuXHRyZXR1cm4gdGltZXN0YW1wO1xufTtcblxuZXhwb3J0IHtnZXRUaW1lc3RhbXB9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNUfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2dldExhc3RBY3RpdmVNYXJrZXJ9IGZyb20gJy4vZ2V0TGFzdEFjdGl2ZU1hcmtlcic7XG5pbXBvcnQge2dldFRpbWVzdGFtcH0gZnJvbSAnLi9nZXRUaW1lc3RhbXAnO1xuXG5jb25zdCBhcHBlbmRNYXJrZXJUb1VzZXJMaW5rcyA9IGFzeW5jICh7dXNlck5hbWUsICRlbGVtZW50c306IHt1c2VyTmFtZTogc3RyaW5nOyAkZWxlbWVudHM6IEpRdWVyeVtdfSkgPT4ge1xuXHQvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdGlmIChTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXModXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGltZXN0YW1wID0gYXdhaXQgZ2V0VGltZXN0YW1wKHVzZXJOYW1lKTtcblxuXHRpZiAoIXRpbWVzdGFtcCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgJGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0JChnZXRMYXN0QWN0aXZlTWFya2VyKHRpbWVzdGFtcCwgdHJ1ZSkpLmluc2VydEFmdGVyKCRlbGVtZW50KTtcblx0fVxufTtcblxuY29uc3QgYXBwZW5kTWFya2VyVG9Vc2VyUGFnZSA9IGFzeW5jICh1c2VyTmFtZTogc3RyaW5nKSA9PiB7XG5cdGlmIChTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXModXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGltZXN0YW1wID0gYXdhaXQgZ2V0VGltZXN0YW1wKHVzZXJOYW1lKTtcblxuXHRpZiAoIXRpbWVzdGFtcCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdGlmICghbW91bnRQb2ludCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG1vdW50UG9pbnQucHJlcGVuZChnZXRMYXN0QWN0aXZlTWFya2VyKHRpbWVzdGFtcCwgZmFsc2UpKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kTWFya2VyVG9Vc2VyTGlua3MsIGFwcGVuZE1hcmtlclRvVXNlclBhZ2V9O1xuIiwgImNvbnN0IGdldFVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KSA9PiB7XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdPiA9IHt9O1xuXG5cdGNvbnN0IHt3Z0Zvcm1hdHRlZE5hbWVzcGFjZXN9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHsyOiBsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlLCAzOiBsb2NhbGl6ZWRVc2VyVGFsa05hbWVzcGFjZX0gPSB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXM7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kPEhUTUxBbmNob3JFbGVtZW50Pihcblx0XHRbXG5cdFx0XHQnYVt0aXRsZV49XCJVc2VyOlwiXTpub3QoLm13LWNoYW5nZXNsaXN0LWRhdGUpOm5vdChbaHJlZio9XCJ1bmRvXCJdKScsXG5cdFx0XHRgYVt0aXRsZV49XCIke2xvY2FsaXplZFVzZXJOYW1lc3BhY2V9OlwiXTpub3QoLm13LWNoYW5nZXNsaXN0LWRhdGUpOm5vdChbaHJlZio9XCJ1bmRvXCJdKWAsXG5cdFx0XS5qb2luKCcsJylcblx0KSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblxuXHRcdGNvbnN0IHVzZXJSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChcblx0XHRcdGAoKFVzZXJ8VXNlcltfIF10YWxrKXwoJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfXwke2xvY2FsaXplZFVzZXJUYWxrTmFtZXNwYWNlfSkpOiguKj8pKD89JnwkKWBcblx0XHQpO1xuXHRcdGNvbnN0IHVzZXJOYW1lTWF0Y2hBcnJheTogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBkZWNvZGVVUkkoJGVsZW1lbnQuYXR0cignaHJlZicpID8/ICcnKS5tYXRjaCh1c2VyUmVnZXgpO1xuXHRcdGlmICghdXNlck5hbWVNYXRjaEFycmF5KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgW3VzZXJOYW1lXSA9IHVzZXJOYW1lTWF0Y2hBcnJheTtcblx0XHR1c2VyTmFtZSA9IHVzZXJOYW1lLnJlcGxhY2UoXG5cdFx0XHRuZXcgUmVnRXhwKGBeKChVc2VyfFVzZXJbXyBddGFsayl8KCR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX18JHtsb2NhbGl6ZWRVc2VyVGFsa05hbWVzcGFjZX0pKTpgLCAnaScpLFxuXHRcdFx0Jydcblx0XHQpO1xuXHRcdHVzZXJOYW1lID0gdXNlck5hbWUucmVwbGFjZSgvIy4qJC9pLCAnJyk7XG5cdFx0Y29uc3QgaW5kZXg6IG51bWJlciA9IHVzZXJOYW1lLmluZGV4T2YoJy8nKTtcblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHR1c2VyTGlua3NbdXNlck5hbWVdID8/PSBbXTtcblx0XHRcdCh1c2VyTGlua3NbdXNlck5hbWVdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSlbXG5cdFx0XHRcdCh1c2VyTGlua3NbdXNlck5hbWVdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSkubGVuZ3RoXG5cdFx0XHRdID0gJGVsZW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2V0VXNlckxpbmtzfTtcbiIsICJpbXBvcnQge2FwcGVuZE1hcmtlclRvVXNlckxpbmtzLCBhcHBlbmRNYXJrZXJUb1VzZXJQYWdlfSBmcm9tICcuL3V0aWwvYXBwZW5kTWFya2VyJztcbmltcG9ydCB7Z2V0VXNlckxpbmtzfSBmcm9tICcuL3V0aWwvZ2V0VXNlckxpbmtzJztcblxuY29uc3Qgd2hvSXNBY3RpdmVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnUmVjZW50Y2hhbmdlcycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB1c2VyTGlua3MgPSBnZXRVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdGZvciAoY29uc3QgW3VzZXJOYW1lLCAkZWxlbWVudHNdIG9mIE9iamVjdC5lbnRyaWVzKHVzZXJMaW5rcykpIHtcblx0XHR2b2lkIGFwcGVuZE1hcmtlclRvVXNlckxpbmtzKHt1c2VyTmFtZSwgJGVsZW1lbnRzfSk7XG5cdH1cbn07XG5cbmNvbnN0IHdob0lzQWN0aXZlVXNlclBhZ2UgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUgfHwgd2dOYW1lc3BhY2VOdW1iZXIgIT09IDIgfHwgd2dBY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCAyKS50b1RleHQoKTtcblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1BhZ2VOYW1lKS50b1RleHQoKTtcblx0aWYgKHJlbGV2YW50VXNlclBhZ2VOYW1lICE9PSBwYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgYXBwZW5kTWFya2VyVG9Vc2VyUGFnZSh3Z1JlbGV2YW50VXNlck5hbWUpO1xufTtcblxuZXhwb3J0IHt3aG9Jc0FjdGl2ZVVzZXJMaW5rcywgd2hvSXNBY3RpdmVVc2VyUGFnZX07XG4iLCAiaW1wb3J0IHt3aG9Jc0FjdGl2ZVVzZXJMaW5rcywgd2hvSXNBY3RpdmVVc2VyUGFnZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4oZnVuY3Rpb24gd2hvSXNBY3RpdmVMb2FkKCkge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKHdob0lzQWN0aXZlVXNlckxpbmtzKTtcblx0dm9pZCB3aG9Jc0FjdGl2ZVVzZXJQYWdlKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLGFBQWM7QUFDZCxJQUFBQyxVQUFXOztBQ0haLElBQU1DLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7O0FDVEQsSUFBQUMscUJBQWtCQyxRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7QUNDbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFlBQUEsR0FBV0Ysa0JBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsV0FBQSxHQUFVTCxrQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxZQUFBLEdBQVdOLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLGFBQUEsR0FBWVAsa0JBQUFHLFVBQVM7TUFDcEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksZUFBQSxHQUFj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U1QiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiT3ZlckFZZWFyIiwgImxvY2FsaXplIiwgImVuIiwgIlRoaXNXZWVrIiwgIlRoaXNNb250aCIsICJUaGlzU2Vhc29uIiwgIlRoaXNTZW1peWVhciIsICJUaGlzWWVhciIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiV3JhcHBlciIsICJwcm9wcyIsICJ0aW1lU3BhbiIsICJpbm5lckVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImNvbmNhdCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiVGFnIiwgIl9nZXRNZXNzYWdlIiwgImluZGljYXRvciIsICJpY29uQ2xhc3NOYW1lIiwgInRleHRDbGFzc05hbWUiLCAiRnJhZ21lbnQiLCAidGl0bGUiLCAiZ2V0TGFzdEFjdGl2ZU1hcmtlciIsICJ0aW1lc3RhbXAiLCAiZGF0ZSIsICJEYXRlIiwgInBhcnNlIiwgIm5vdyIsICJkaWZmIiwgIk1hdGgiLCAiZmxvb3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0VXNlckNvbnRyaWJzVGltZXN0YW1wIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidWN1c2VyIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImxpc3QiLCAidWNsaW1pdCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXN1bHQiLCAidXNlcmNvbnRyaWJzIiwgImxlbmd0aCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRMb2dFdmVudHNUaW1lc3RhbXAiLCAiX3JlZjIiLCAibGV1c2VyIiwgImZvcm1hdHZlcnNpb24iLCAibGVsaW1pdCIsICJsZXByb3AiLCAibG9nZXZlbnRzIiwgIl94MiIsICJnZXRUaW1lc3RhbXAiLCAiX3JlZjMiLCAidXNlcm5hbWUiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAidWNUaW1lc3RhbXAiLCAidWNEYXRlIiwgImxlVGltZXN0YW1wIiwgImxlRGF0ZSIsICJzZXRPYmplY3QiLCAiX3gzIiwgImFwcGVuZE1hcmtlclRvVXNlckxpbmtzIiwgIl9yZWY0IiwgInVzZXJOYW1lIiwgIiRlbGVtZW50cyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICIkZWxlbWVudCIsICJ2YWx1ZSIsICIkIiwgImluc2VydEFmdGVyIiwgImVyciIsICJlIiwgImYiLCAiX3g0IiwgImFwcGVuZE1hcmtlclRvVXNlclBhZ2UiLCAiX3JlZjUiLCAibW91bnRQb2ludCIsICJwcmVwZW5kIiwgIl94NSIsICJnZXRVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAidXNlckxpbmtzIiwgIndnRm9ybWF0dGVkTmFtZXNwYWNlcyIsICJsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlIiwgImxvY2FsaXplZFVzZXJUYWxrTmFtZXNwYWNlIiwgIl9pdGVyYXRvcjMiLCAiZmluZCIsICJqb2luIiwgIl9zdGVwMyIsICJfJGVsZW1lbnQkYXR0ciIsICJlbGVtZW50IiwgInVzZXJSZWdleCIsICJSZWdFeHAiLCAidXNlck5hbWVNYXRjaEFycmF5IiwgImRlY29kZVVSSSIsICJhdHRyIiwgIm1hdGNoIiwgInJlcGxhY2UiLCAiaW5kZXgiLCAiaW5kZXhPZiIsICJfdXNlck5hbWUiLCAiX3VzZXJMaW5rcyRfdXNlck5hbWUiLCAid2hvSXNBY3RpdmVVc2VyTGlua3MiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgIndob0lzQWN0aXZlVXNlclBhZ2UiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAicmVsZXZhbnRVc2VyUGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInBhZ2VOYW1lIiwgIndob0lzQWN0aXZlTG9hZCIsICJob29rIiwgImFkZCJdCn0K
