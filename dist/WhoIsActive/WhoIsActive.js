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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1dob0lzQWN0aXZlL29wdGlvbnMuanNvbiIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy91dGlsL2FwcGVuZEZvb3Rlck5vdGljZS50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy91dGlsL2dldExhc3RBY3RpdmVNYXJrZXIudHN4IiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRUaW1lc3RhbXAudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9hcHBlbmRNYXJrZXIudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvdXRpbC9nZXRVc2VyTGlua3MudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvY29yZS50cyIsICJzcmMvV2hvSXNBY3RpdmUvV2hvSXNBY3RpdmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9O1xuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0Lldob0lzQWN0aXZlX3dob0lzQWN0aXZlLVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjFcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgYXBwZW5kRm9vdGVyTm90aWNlID0gKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcblx0Y29uc3QgbW91bnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblxuXHRpZiAobW91bnRQb2ludCkge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZChlbGVtZW50KTtcblx0fVxufTtcblxuZXhwb3J0IHthcHBlbmRGb290ZXJOb3RpY2V9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG50eXBlIFRpbWVTcGFuID0gJ1RoaXNXZWVrJyB8ICdUaGlzTW9udGgnIHwgJ1RoaXNTZWFzb24nIHwgJ1RoaXNTZW1peWVhcicgfCAnVGhpc1llYXInIHwgJ092ZXJBWWVhcic7XG5cbmZ1bmN0aW9uIFdyYXBwZXIocHJvcHM6IHt0aW1lU3BhbjogVGltZVNwYW47IGlubmVyRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50fSkge1xuXHRjb25zdCB7dGltZVNwYW4sIGlubmVyRWxlbWVudH0gPSBwcm9wcztcblxuXHRjb25zdCBjbGFzc05hbWU6IHN0cmluZ1tdID0gWydnYWRnZXQtd2hvaXNhY3RpdmUnLCBgZ2FkZ2V0LXdob2lzYWN0aXZlX18ke3RpbWVTcGFufWBdO1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1suLi5jbGFzc05hbWUsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKFsnZ29uZ2JpJywgJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMiddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gPGxpIGNsYXNzTmFtZT17W2NsYXNzTmFtZSwgJ25vcHJpbnQnXX0+e2lubmVyRWxlbWVudH08L2xpPjtcblx0fVxuXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzTmFtZSwgJ25vcHJpbnQnXX0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59XG5cbmZ1bmN0aW9uIFRhZyhwcm9wczoge3RpbWVTcGFuOiBUaW1lU3BhbjsgaW5kaWNhdG9yOiBib29sZWFufSkge1xuXHRjb25zdCB7dGltZVNwYW4sIGluZGljYXRvcn0gPSBwcm9wcztcblxuXHRjb25zdCBpY29uQ2xhc3NOYW1lOiBzdHJpbmdbXSA9IFsnZ2FkZ2V0LXdob2lzYWN0aXZlX19pY29uJywgYGdhZGdldC13aG9pc2FjdGl2ZV9faWNvbl9fJHt0aW1lU3Bhbn1gXTtcblx0Y29uc3QgdGV4dENsYXNzTmFtZTogc3RyaW5nW10gPSBbXG5cdFx0J2dhZGdldC13aG9pc2FjdGl2ZV9fdGV4dCcsXG5cdFx0aW5kaWNhdG9yID09PSB0cnVlID8gJywgZ2FkZ2V0LXdob2lzYWN0aXZlX19ub3RleHQnIDogJycsXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtpY29uQ2xhc3NOYW1lfSB0aXRsZT17Z2V0TWVzc2FnZSh0aW1lU3Bhbil9IC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3RleHRDbGFzc05hbWV9PntnZXRNZXNzYWdlKHRpbWVTcGFuKSA/PyAnJ308L3NwYW4+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmNvbnN0IGdldExhc3RBY3RpdmVNYXJrZXIgPSAodGltZXN0YW1wOiBzdHJpbmcsIGluZGljYXRvcjogYm9vbGVhbik6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG5cdGNvbnN0IGRhdGU6IG51bWJlciA9IERhdGUucGFyc2UodGltZXN0YW1wKTtcblx0Y29uc3Qgbm93OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXHRjb25zdCBkaWZmOiBudW1iZXIgPSBNYXRoLmZsb29yKChub3cgLSBkYXRlKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cblx0bGV0IHRpbWVTcGFuOiBUaW1lU3BhbiA9ICdUaGlzV2Vlayc7XG5cdGlmIChkaWZmID4gMzY1KSB7XG5cdFx0dGltZVNwYW4gPSAnT3ZlckFZZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gMTgzKSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc1llYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiA5Mikge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNTZW1peWVhcic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDMxKSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc1NlYXNvbic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDcpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzTW9udGgnO1xuXHR9XG5cblx0cmV0dXJuIDxXcmFwcGVyIHRpbWVTcGFuPXt0aW1lU3Bhbn0gaW5uZXJFbGVtZW50PXs8VGFnIHRpbWVTcGFuPXt0aW1lU3Bhbn0gaW5kaWNhdG9yPXtpbmRpY2F0b3J9IC8+fSAvPjtcbn07XG5cbmV4cG9ydCB0eXBlIHtUaW1lU3Bhbn07XG5leHBvcnQge2dldExhc3RBY3RpdmVNYXJrZXJ9O1xuIiwgImltcG9ydCB0eXBlIHtUaW1lU3Bhbn0gZnJvbSAnLi91dGlsL2dldExhc3RBY3RpdmVNYXJrZXInO1xuaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdE92ZXJBWWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgb3ZlciBhIHllYXIgYWdvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOW5tOacquaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlubTmnKrmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNXZWVrOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIHdlZWsnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5ZGo5YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOWRqOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc01vbnRoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIG1vbnRoJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOaciOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDmnIjlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNTZWFzb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIGluIDMgbW9udGhzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4ieaciOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuInmnIjlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNTZW1peWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgaW4gaGFsZiBhIHllYXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5Y2K5bm05YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+WNiuW5tOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc1llYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIHRoaXMgeWVhcicsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlubTlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5bm05YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0fSBzYXRpc2ZpZXMgUmVjb3JkPFRpbWVTcGFuLCBzdHJpbmc+ICYgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBXaG9Jc0FjdGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TG9nZXZlbnRzLCBVc2VyY29udHJpYnN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGdldFVzZXJDb250cmlic1RpbWVzdGFtcCA9IGFzeW5jICh1Y3VzZXI6IHN0cmluZykgPT4ge1xuXHRsZXQgdGltZXN0YW1wOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlckNvbnRyaWJzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0XHRcdHVjbGltaXQ6IDEsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHRcdHVjdXNlcixcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0Y29uc3Qge3VzZXJjb250cmlic30gPSByZXN1bHRbJ3F1ZXJ5J10gYXMgVXNlcmNvbnRyaWJzO1xuXHRcdGlmICh1c2VyY29udHJpYnMubGVuZ3RoKSB7XG5cdFx0XHQoe3RpbWVzdGFtcH0gPSB1c2VyY29udHJpYnNbMF0hKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW1dob0lzQWN0aXZlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxuXG5cdHJldHVybiB0aW1lc3RhbXA7XG59O1xuXG5jb25zdCBnZXRMb2dFdmVudHNUaW1lc3RhbXAgPSBhc3luYyAobGV1c2VyOiBzdHJpbmcpID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdGxldXNlcixcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRsZWxpbWl0OiAxLFxuXHRcdFx0bGVwcm9wOiAndGltZXN0YW1wJyxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRjb25zdCB7bG9nZXZlbnRzfSA9IHJlc3VsdFsncXVlcnknXSBhcyBMb2dldmVudHM7XG5cdFx0aWYgKGxvZ2V2ZW50cy5sZW5ndGgpIHtcblx0XHRcdCh7dGltZXN0YW1wfSA9IGxvZ2V2ZW50c1swXSEpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbV2hvSXNBY3RpdmVdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG5cblx0cmV0dXJuIHRpbWVzdGFtcDtcbn07XG5cbmNvbnN0IGdldFRpbWVzdGFtcCA9IGFzeW5jICh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+ID0+IHtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSkpIHtcblx0XHR0aW1lc3RhbXAgPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB1c2VybmFtZSkgYXMgc3RyaW5nO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHVjVGltZXN0YW1wID0gYXdhaXQgZ2V0VXNlckNvbnRyaWJzVGltZXN0YW1wKHVzZXJuYW1lKTtcblx0XHRjb25zdCBsZVRpbWVzdGFtcCA9IGF3YWl0IGdldExvZ0V2ZW50c1RpbWVzdGFtcCh1c2VybmFtZSk7XG5cblx0XHRpZiAodWNUaW1lc3RhbXAgfHwgbGVUaW1lc3RhbXApIHtcblx0XHRcdGlmICh1Y1RpbWVzdGFtcCAmJiBsZVRpbWVzdGFtcCkge1xuXHRcdFx0XHR0aW1lc3RhbXAgPVxuXHRcdFx0XHRcdE51bWJlci5wYXJzZUludCh1Y1RpbWVzdGFtcCwgMTApID4gTnVtYmVyLnBhcnNlSW50KGxlVGltZXN0YW1wLCAxMCkgPyB1Y1RpbWVzdGFtcCA6IGxlVGltZXN0YW1wO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGltZXN0YW1wID0gdWNUaW1lc3RhbXAgfHwgbGVUaW1lc3RhbXA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHRpbWVzdGFtcCkge1xuXHRcdC8vIENhY2hlIGZvciAxMCBtaW51dGVzXG5cdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgdXNlcm5hbWUsIHRpbWVzdGFtcCwgMTAgKiA2MCk7XG5cdH1cblxuXHRyZXR1cm4gdGltZXN0YW1wO1xufTtcblxuZXhwb3J0IHtnZXRUaW1lc3RhbXB9O1xuIiwgImltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNUfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2FwcGVuZEZvb3Rlck5vdGljZX0gZnJvbSAnLi9hcHBlbmRGb290ZXJOb3RpY2UnO1xuaW1wb3J0IHtnZXRMYXN0QWN0aXZlTWFya2VyfSBmcm9tICcuL2dldExhc3RBY3RpdmVNYXJrZXInO1xuaW1wb3J0IHtnZXRUaW1lc3RhbXB9IGZyb20gJy4vZ2V0VGltZXN0YW1wJztcblxuY29uc3QgYXBwZW5kTWFya2VyVG9Vc2VyTGlua3MgPSBhc3luYyAoe3VzZXJOYW1lLCAkZWxlbWVudHN9OiB7dXNlck5hbWU6IHN0cmluZzsgJGVsZW1lbnRzOiBKUXVlcnlbXX0pID0+IHtcblx0Ly8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRpZiAoU1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKHVzZXJOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRpbWVzdGFtcCA9IGF3YWl0IGdldFRpbWVzdGFtcCh1c2VyTmFtZSk7XG5cblx0aWYgKCF0aW1lc3RhbXApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0ICRlbGVtZW50IG9mICRlbGVtZW50cykge1xuXHRcdCQoZ2V0TGFzdEFjdGl2ZU1hcmtlcih0aW1lc3RhbXAsIHRydWUpKS5pbnNlcnRBZnRlcigkZWxlbWVudCk7XG5cdH1cbn07XG5cbmNvbnN0IGFwcGVuZE1hcmtlclRvVXNlclBhZ2UgPSBhc3luYyAodXNlck5hbWU6IHN0cmluZykgPT4ge1xuXHRpZiAoU1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKHVzZXJOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRpbWVzdGFtcCA9IGF3YWl0IGdldFRpbWVzdGFtcCh1c2VyTmFtZSk7XG5cblx0aWYgKCF0aW1lc3RhbXApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhcHBlbmRGb290ZXJOb3RpY2UoZ2V0TGFzdEFjdGl2ZU1hcmtlcih0aW1lc3RhbXAsIGZhbHNlKSk7XG59O1xuXG5leHBvcnQge2FwcGVuZE1hcmtlclRvVXNlckxpbmtzLCBhcHBlbmRNYXJrZXJUb1VzZXJQYWdlfTtcbiIsICJjb25zdCBnZXRVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSkgPT4ge1xuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD5bXT4gPSB7fTtcblxuXHRjb25zdCB7d2dGb3JtYXR0ZWROYW1lc3BhY2VzfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCB7MjogbG9jYWxpemVkVXNlck5hbWVzcGFjZX0gPSB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXM7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kPEhUTUxBbmNob3JFbGVtZW50Pihcblx0XHRbXG5cdFx0XHQnYVt0aXRsZV49XCJVc2VyOlwiXTpub3QoLm13LWNoYW5nZXNsaXN0LWRhdGUpOm5vdChbaHJlZio9XCJ1bmRvXCJdKScsXG5cdFx0XHRgYVt0aXRsZV49XCIke2xvY2FsaXplZFVzZXJOYW1lc3BhY2V9OlwiXTpub3QoLm13LWNoYW5nZXNsaXN0LWRhdGUpOm5vdChbaHJlZio9XCJ1bmRvXCJdKWAsXG5cdFx0XS5qb2luKCcsJylcblx0KSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblxuXHRcdGNvbnN0IHVzZXJSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgKChVc2VyKXwoJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfSkpOiguKj8pKD89JnwkKWApO1xuXHRcdGNvbnN0IHVzZXJOYW1lTWF0Y2hBcnJheTogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBkZWNvZGVVUkkoJGVsZW1lbnQuYXR0cignaHJlZicpID8/ICcnKS5tYXRjaCh1c2VyUmVnZXgpO1xuXHRcdGlmICghdXNlck5hbWVNYXRjaEFycmF5KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgW3VzZXJOYW1lXSA9IHVzZXJOYW1lTWF0Y2hBcnJheTtcblx0XHR1c2VyTmFtZSA9IHVzZXJOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChgXigoVXNlcil8KCR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX0pKTpgLCAnaScpLCAnJyk7XG5cdFx0Y29uc3QgaW5kZXg6IG51bWJlciA9IHVzZXJOYW1lLmluZGV4T2YoJy8nKTtcblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHR1c2VyTGlua3NbdXNlck5hbWVdID8/PSBbXTtcblx0XHRcdCh1c2VyTGlua3NbdXNlck5hbWVdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSlbXG5cdFx0XHRcdCh1c2VyTGlua3NbdXNlck5hbWVdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSkubGVuZ3RoXG5cdFx0XHRdID0gJGVsZW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2V0VXNlckxpbmtzfTtcbiIsICJpbXBvcnQge2FwcGVuZE1hcmtlclRvVXNlckxpbmtzLCBhcHBlbmRNYXJrZXJUb1VzZXJQYWdlfSBmcm9tICcuL3V0aWwvYXBwZW5kTWFya2VyJztcbmltcG9ydCB7Z2V0VXNlckxpbmtzfSBmcm9tICcuL3V0aWwvZ2V0VXNlckxpbmtzJztcblxuY29uc3Qgd2hvSXNBY3RpdmVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgdXNlckxpbmtzID0gZ2V0VXNlckxpbmtzKCRjb250ZW50KTtcblxuXHRmb3IgKGNvbnN0IFt1c2VyTmFtZSwgJGVsZW1lbnRzXSBvZiBPYmplY3QuZW50cmllcyh1c2VyTGlua3MpKSB7XG5cdFx0dm9pZCBhcHBlbmRNYXJrZXJUb1VzZXJMaW5rcyh7dXNlck5hbWUsICRlbGVtZW50c30pO1xuXHR9XG59O1xuXG5jb25zdCB3aG9Jc0FjdGl2ZVVzZXJQYWdlID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dSZWxldmFudFVzZXJOYW1lIHx8IHdnTmFtZXNwYWNlTnVtYmVyICE9PSAyIHx8IHdnQWN0aW9uICE9PSAndmlldycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCByZWxldmFudFVzZXJQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUmVsZXZhbnRVc2VyTmFtZSwgMikudG9UZXh0KCk7XG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudG9UZXh0KCk7XG5cdGlmIChyZWxldmFudFVzZXJQYWdlTmFtZSAhPT0gcGFnZU5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFwcGVuZE1hcmtlclRvVXNlclBhZ2Uod2dSZWxldmFudFVzZXJOYW1lKTtcbn07XG5cbmV4cG9ydCB7d2hvSXNBY3RpdmVVc2VyTGlua3MsIHdob0lzQWN0aXZlVXNlclBhZ2V9O1xuIiwgImltcG9ydCB7d2hvSXNBY3RpdmVVc2VyTGlua3MsIHdob0lzQWN0aXZlVXNlclBhZ2V9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuKGZ1bmN0aW9uIHdob0lzQWN0aXZlTG9hZCgpIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCh3aG9Jc0FjdGl2ZVVzZXJMaW5rcyk7XG5cdHZvaWQgd2hvSXNBY3RpdmVVc2VyUGFnZSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7O0FDUkEsSUFBQUMscUJBQXNCO0FBQ3RCLElBQUFDLGFBQWM7QUFDZCxJQUFBQyxVQUFXOztBQ0RaLElBQU1DLHFCQUFzQkMsYUFBcUI7QUFDaEQsUUFBTUMsYUFBYUMsU0FBU0MsY0FBbUNQLGtCQUFrQjtBQUVqRixNQUFJSyxZQUFZO0FBQ2ZBLGVBQVdHLFFBQVFKLE9BQU87RUFDM0I7QUFDRDs7QUNSQSxJQUFBSyxxQkFBa0JDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0NsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsWUFBQSxHQUFXRixrQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxXQUFBLEdBQVVMLGtCQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFlBQUEsR0FBV04sa0JBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsYUFBQSxHQUFZUCxrQkFBQUcsVUFBUztNQUNwQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxlQUFBLEdBQWNSLGtCQUFBRyxVQUFTO01BQ3RCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLFdBQUEsR0FBVVQsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTU0sZUFBZVQsZ0JBQWdCO0FBRXJDLElBQU1VLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEckNBLFNBQVNDLFFBQVFDLE9BQStEO0FBQy9FLFFBQU07SUFBQ0M7SUFBVUM7RUFBWSxJQUFJRjtBQUVqQyxRQUFNRyxZQUFzQixDQUFDLHNCQUFBLHVCQUFBQyxPQUE2Q0gsUUFBUSxDQUFBO0FBQ2xGLFFBQU07SUFBQ0k7RUFBSSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTdCLE1BQUlILFNBQVMsV0FBVztBQUN2QixXQUNDdEIsbUNBQUEwQixRQUFBQyxjQUFDLFdBQUE7TUFBUVAsV0FBVyxDQUFDLEdBQUdBLFdBQVcsbUJBQW1CLGlDQUFpQyxTQUFTO0lBQUEsR0FDOUZELFlBQ0Y7RUFFRixXQUFXLENBQUMsVUFBVSxVQUFVLGFBQWEsRUFBRVMsU0FBU04sSUFBSSxLQUFLekIsU0FBU0MsY0FBYyxnQkFBZ0IsR0FBRztBQUMxRyxXQUFPRSxtQ0FBQTBCLFFBQUFDLGNBQUMsTUFBQTtNQUFHUCxXQUFXLENBQUNBLFdBQVcsU0FBUztJQUFBLEdBQUlELFlBQWE7RUFDN0Q7QUFFQSxTQUFPbkIsbUNBQUEwQixRQUFBQyxjQUFDLE9BQUE7SUFBSVAsV0FBVyxDQUFDQSxXQUFXLFNBQVM7RUFBQSxHQUFJRCxZQUFhO0FBQzlEO0FBRUEsU0FBU1UsSUFBSVosT0FBaUQ7QUFBQSxNQUFBYTtBQUM3RCxRQUFNO0lBQUNaO0lBQVVhO0VBQVMsSUFBSWQ7QUFFOUIsUUFBTWUsZ0JBQTBCLENBQUMsNEJBQUEsNkJBQUFYLE9BQXlESCxRQUFRLENBQUE7QUFDbEcsUUFBTWUsZ0JBQTBCLENBQy9CLDRCQUNBRixjQUFjLE9BQU8saUNBQWlDLEVBQUE7QUFHdkQsU0FDQy9CLG1DQUFBMEIsUUFBQUMsY0FBQTNCLG1CQUFBMEIsUUFBQVEsVUFBQSxNQUNDbEMsbUNBQUEwQixRQUFBQyxjQUFDLFFBQUE7SUFBS1AsV0FBV1k7SUFBZUcsT0FBT3JCLFdBQVdJLFFBQVE7RUFBQSxDQUFHLEdBQzdEbEIsbUNBQUEwQixRQUFBQyxjQUFDLFFBQUE7SUFBS1AsV0FBV2E7RUFBQSxJQUFBSCxjQUFnQmhCLFdBQVdJLFFBQVEsT0FBQSxRQUFBWSxnQkFBQSxTQUFBQSxjQUFLLEVBQUcsQ0FDN0Q7QUFFRjtBQUVBLElBQU1NLHNCQUFzQkEsQ0FBQ0MsV0FBbUJOLGNBQTJDO0FBQzFGLFFBQU1PLE9BQWVDLEtBQUtDLE1BQU1ILFNBQVM7QUFDekMsUUFBTUksTUFBY0YsS0FBS0UsSUFBSTtBQUM3QixRQUFNQyxPQUFlQyxLQUFLQyxPQUFPSCxNQUFNSCxTQUFTLE1BQU8sS0FBSyxLQUFLLEdBQUc7QUFFcEUsTUFBSXBCLFdBQXFCO0FBQ3pCLE1BQUl3QixPQUFPLEtBQUs7QUFDZnhCLGVBQVc7RUFDWixXQUFXd0IsT0FBTyxLQUFLO0FBQ3RCeEIsZUFBVztFQUNaLFdBQVd3QixPQUFPLElBQUk7QUFDckJ4QixlQUFXO0VBQ1osV0FBV3dCLE9BQU8sSUFBSTtBQUNyQnhCLGVBQVc7RUFDWixXQUFXd0IsT0FBTyxHQUFHO0FBQ3BCeEIsZUFBVztFQUNaO0FBRUEsU0FBT2xCLG1DQUFBMEIsUUFBQUMsY0FBQ1gsU0FBQTtJQUFRRTtJQUFvQkMsY0FBY25CLG1DQUFBMEIsUUFBQUMsY0FBQ0UsS0FBQTtNQUFJWDtNQUFvQmE7SUFBQSxDQUFzQjtFQUFBLENBQUk7QUFDdEc7O0FFM0RBLElBQUFjLHFCQUF3QjNDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTTRDLE9BQUEsR0FBY0QsbUJBQUFFLFdBQUEsZUFBQTFCLE9BQWlDNUIsT0FBTyxDQUFFOztBQ0M5RCxJQUFNdUQsMkJBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBMkIsV0FBT0MsUUFBbUI7QUFDMUQsUUFBSWQ7QUFFSixRQUFJO0FBQ0gsWUFBTWUsU0FBcUM7UUFDMUNDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxRQUFRO1FBQ1JQO01BQ0Q7QUFFQSxZQUFNUSxTQUFBLE1BQWViLElBQUlyQixJQUFJMkIsTUFBTTtBQUVuQyxZQUFNO1FBQUNRO01BQVksSUFBSUQsT0FBTyxPQUFPO0FBQ3JDLFVBQUlDLGFBQWFDLFFBQVE7QUFDeEIsU0FBQztVQUFDeEI7UUFBUyxJQUFJdUIsYUFBYSxDQUFDO01BQzlCO0lBQ0QsU0FBU0UsT0FBZ0I7QUFDeEJDLGNBQVFELE1BQU0sNkJBQTZCQSxLQUFLO0lBQ2pEO0FBRUEsV0FBT3pCO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0F6Qk1XLDBCQUFBZ0IsSUFBQTtBQUFBLFdBQUFmLEtBQUFnQixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUEyQk4sSUFBTUMsd0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBbEIsa0JBQXdCLFdBQU9tQixRQUFtQjtBQUN2RCxRQUFJaEM7QUFFSixRQUFJO0FBQ0gsWUFBTWUsU0FBa0M7UUFDdkNpQjtRQUNBaEIsUUFBUTtRQUNSQyxRQUFRO1FBQ1JnQixlQUFlO1FBQ2ZmLE1BQU07UUFDTmdCLFNBQVM7UUFDVEMsUUFBUTtRQUNSZixTQUFTO1FBQ1RDLFFBQVE7TUFDVDtBQUVBLFlBQU1DLFNBQUEsTUFBZWIsSUFBSXJCLElBQUkyQixNQUFNO0FBRW5DLFlBQU07UUFBQ3FCO01BQVMsSUFBSWQsT0FBTyxPQUFPO0FBQ2xDLFVBQUljLFVBQVVaLFFBQVE7QUFDckIsU0FBQztVQUFDeEI7UUFBUyxJQUFJb0MsVUFBVSxDQUFDO01BQzNCO0lBQ0QsU0FBU1gsT0FBZ0I7QUFDeEJDLGNBQVFELE1BQU0sNkJBQTZCQSxLQUFLO0lBQ2pEO0FBRUEsV0FBT3pCO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0EzQk04Qix1QkFBQU8sS0FBQTtBQUFBLFdBQUFOLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQTZCTixJQUFNUyxlQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQTFCLGtCQUFlLFdBQU8yQixVQUFrRDtBQUM3RSxRQUFJeEM7QUFFSixRQUFJZCxHQUFHdUQsUUFBUUMsVUFBa0J2RixhQUFhcUYsUUFBUSxHQUFHO0FBQ3hEeEMsa0JBQVlkLEdBQUd1RCxRQUFRQyxVQUFrQnZGLGFBQWFxRixRQUFRO0lBQy9ELE9BQU87QUFDTixZQUFNRyxjQUFBLE1BQW9CaEMseUJBQXlCNkIsUUFBUTtBQUMzRCxZQUFNSSxjQUFBLE1BQW9CZCxzQkFBc0JVLFFBQVE7QUFFeEQsVUFBSUcsZUFBZUMsYUFBYTtBQUMvQixZQUFJRCxlQUFlQyxhQUFhO0FBQy9CNUMsc0JBQ0M2QyxPQUFPQyxTQUFTSCxhQUFhLEVBQUUsSUFBSUUsT0FBT0MsU0FBU0YsYUFBYSxFQUFFLElBQUlELGNBQWNDO1FBQ3RGLE9BQU87QUFDTjVDLHNCQUFZMkMsZUFBZUM7UUFDNUI7TUFDRDtJQUNEO0FBRUEsUUFBSTVDLFdBQVc7QUFFZGQsU0FBR3VELFFBQVFNLFVBQWtCNUYsYUFBYXFGLFVBQVV4QyxXQUFXLEtBQUssRUFBRTtJQUN2RTtBQUVBLFdBQU9BO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0F6Qk1zQyxjQUFBVSxLQUFBO0FBQUEsV0FBQVQsTUFBQVgsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQ3ZETixJQUFNb0IsMEJBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBckMsa0JBQTBCLFdBQU87SUFBQ3NDO0lBQVVDO0VBQVMsR0FBK0M7QUFFekcsUUFBSW5HLG1CQUFtQnNDLFNBQVM0RCxRQUFRLEdBQUc7QUFDMUM7SUFDRDtBQUVBLFVBQU1uRCxZQUFBLE1BQWtCc0MsYUFBYWEsUUFBUTtBQUU3QyxRQUFJLENBQUNuRCxXQUFXO0FBQ2Y7SUFDRDtBQUFBLFFBQUFxRCxhQUFBQywyQkFFdUJGLFNBQUEsR0FBQUc7QUFBQSxRQUFBO0FBQXZCLFdBQUFGLFdBQUFHLEVBQUEsR0FBQSxFQUFBRCxTQUFBRixXQUFBSSxFQUFBLEdBQUFDLFFBQWtDO0FBQUEsY0FBdkJDLFdBQUFKLE9BQUFLO0FBQ1ZDLFVBQUU5RCxvQkFBb0JDLFdBQVcsSUFBSSxDQUFDLEVBQUU4RCxZQUFZSCxRQUFRO01BQzdEO0lBQUEsU0FBQUksS0FBQTtBQUFBVixpQkFBQVcsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQVYsaUJBQUFZLEVBQUE7SUFBQTtFQUNELENBQUE7QUFBQSxTQUFBLFNBZk1oQix5QkFBQWlCLEtBQUE7QUFBQSxXQUFBaEIsTUFBQXRCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWlCTixJQUFNc0MseUJBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBdkQsa0JBQXlCLFdBQU9zQyxVQUFxQjtBQUMxRCxRQUFJbEcsbUJBQW1Cc0MsU0FBUzRELFFBQVEsR0FBRztBQUMxQztJQUNEO0FBRUEsVUFBTW5ELFlBQUEsTUFBa0JzQyxhQUFhYSxRQUFRO0FBRTdDLFFBQUksQ0FBQ25ELFdBQVc7QUFDZjtJQUNEO0FBRUEzQyx1QkFBbUIwQyxvQkFBb0JDLFdBQVcsS0FBSyxDQUFDO0VBQ3pELENBQUE7QUFBQSxTQUFBLFNBWk1tRSx3QkFBQUUsS0FBQTtBQUFBLFdBQUFELE1BQUF4QyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDdEJOLElBQU15QyxlQUFnQkMsY0FBcUI7QUFDMUMsUUFBTUMsWUFBeUQsQ0FBQztBQUVoRSxRQUFNO0lBQUNDO0VBQXFCLElBQUl2RixHQUFHQyxPQUFPQyxJQUFJO0FBRTlDLFFBQU07SUFBQyxHQUFHc0Y7RUFBc0IsSUFBSUQ7QUFBQSxNQUFBRSxhQUFBckIsMkJBQ2RpQixTQUFTSyxLQUM5QixDQUNDLG1FQUFBLGFBQUE1RixPQUNhMEYsd0JBQXNCLG1EQUFBLENBQUEsRUFDbENHLEtBQUssR0FBRyxDQUNYLENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBTEEsU0FBQUgsV0FBQW5CLEVBQUEsR0FBQSxFQUFBc0IsU0FBQUgsV0FBQWxCLEVBQUEsR0FBQUMsUUFLRztBQUFBLFVBQUFxQjtBQUFBLFlBTFF6SCxVQUFBd0gsT0FBQWxCO0FBTVYsWUFBTUQsV0FBc0NFLEVBQUV2RyxPQUFPO0FBRXJELFlBQU0wSCxZQUFvQixJQUFJQyxPQUFBLFlBQUFqRyxPQUFtQjBGLHdCQUFzQixpQkFBQSxDQUFpQjtBQUN4RixZQUFNUSxxQkFBOENDLFdBQUFKLGlCQUFVcEIsU0FBU3lCLEtBQUssTUFBTSxPQUFBLFFBQUFMLG1CQUFBLFNBQUFBLGlCQUFLLEVBQUUsRUFBRU0sTUFBTUwsU0FBUztBQUMxRyxVQUFJLENBQUNFLG9CQUFvQjtBQUN4QjtNQUNEO0FBRUEsVUFBSSxDQUFDL0IsUUFBUSxJQUFJK0I7QUFDakIvQixpQkFBV0EsU0FBU21DLFFBQVEsSUFBSUwsT0FBQSxhQUFBakcsT0FBb0IwRix3QkFBc0IsS0FBQSxHQUFPLEdBQUcsR0FBRyxFQUFFO0FBQ3pGLFlBQU1hLFFBQWdCcEMsU0FBU3FDLFFBQVEsR0FBRztBQUMxQyxVQUFJRCxVQUFVLElBQUk7QUFBQSxZQUFBRSxXQUFBQztBQUNqQixTQUFBQSx1QkFBQWxCLFVBQUFpQixZQUFVdEMsUUFBUSxPQUFBLFFBQUF1Qyx5QkFBQSxTQUFBQSx1QkFBbEJsQixVQUFBaUIsU0FBQSxJQUF3QixDQUFBO0FBQ3ZCakIsa0JBQVVyQixRQUFRLEVBQ2pCcUIsVUFBVXJCLFFBQVEsRUFBaUQzQixNQUNyRSxJQUFJbUM7TUFDTDtJQUNEO0VBQUEsU0FBQUksS0FBQTtBQUFBWSxlQUFBWCxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBWSxlQUFBVixFQUFBO0VBQUE7QUFFQSxTQUFPTztBQUNSOztBQzdCQSxJQUFNbUIsdUJBQXdCcEIsY0FBd0M7QUFDckUsUUFBTUMsWUFBWUYsYUFBYUMsUUFBUTtBQUV2QyxXQUFBcUIsS0FBQSxHQUFBQyxrQkFBb0NDLE9BQU9DLFFBQVF2QixTQUFTLEdBQUFvQixLQUFBQyxnQkFBQXJFLFFBQUFvRSxNQUFHO0FBQS9ELFVBQVcsQ0FBQ3pDLFVBQVVDLFNBQVMsSUFBQXlDLGdCQUFBRCxFQUFBO0FBQzlCLFNBQUszQyx3QkFBd0I7TUFBQ0U7TUFBVUM7SUFBUyxDQUFDO0VBQ25EO0FBQ0Q7QUFFQSxJQUFNNEMsc0JBQXNCQSxNQUFZO0FBQ3ZDLFFBQU07SUFBQ0M7SUFBVUM7SUFBbUJDO0lBQVlDO0VBQWtCLElBQUlsSCxHQUFHQyxPQUFPQyxJQUFJO0FBRXBGLE1BQUksQ0FBQ2dILHNCQUFzQkYsc0JBQXNCLEtBQUtELGFBQWEsUUFBUTtBQUMxRTtFQUNEO0FBRUEsUUFBTUksdUJBQStCLElBQUluSCxHQUFHb0gsTUFBTUYsb0JBQW9CLENBQUMsRUFBRUcsT0FBTztBQUNoRixRQUFNQyxXQUFtQixJQUFJdEgsR0FBR29ILE1BQU1ILFVBQVUsRUFBRUksT0FBTztBQUN6RCxNQUFJRix5QkFBeUJHLFVBQVU7QUFDdEM7RUFDRDtBQUVBLE9BQUtyQyx1QkFBdUJpQyxrQkFBa0I7QUFDL0M7O0NDdkJDLFNBQVNLLGtCQUFrQjtBQUMzQnZILEtBQUd3SCxLQUFLLGtCQUFrQixFQUFFQyxJQUFJaEIsb0JBQW9CO0FBQ3BELE9BQUtLLG9CQUFvQjtBQUMxQixHQUFHOyIsCiAgIm5hbWVzIjogWyJTWVNURU1fU0NSSVBUX0xJU1QiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInN0b3JhZ2VLZXkiLCAidmVyc2lvbiIsICJhcHBlbmRGb290ZXJOb3RpY2UiLCAiZWxlbWVudCIsICJtb3VudFBvaW50IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicHJlcGVuZCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJPdmVyQVllYXIiLCAibG9jYWxpemUiLCAiZW4iLCAiVGhpc1dlZWsiLCAiVGhpc01vbnRoIiwgIlRoaXNTZWFzb24iLCAiVGhpc1NlbWl5ZWFyIiwgIlRoaXNZZWFyIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJXcmFwcGVyIiwgInByb3BzIiwgInRpbWVTcGFuIiwgImlubmVyRWxlbWVudCIsICJjbGFzc05hbWUiLCAiY29uY2F0IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5jbHVkZXMiLCAiVGFnIiwgIl9nZXRNZXNzYWdlIiwgImluZGljYXRvciIsICJpY29uQ2xhc3NOYW1lIiwgInRleHRDbGFzc05hbWUiLCAiRnJhZ21lbnQiLCAidGl0bGUiLCAiZ2V0TGFzdEFjdGl2ZU1hcmtlciIsICJ0aW1lc3RhbXAiLCAiZGF0ZSIsICJEYXRlIiwgInBhcnNlIiwgIm5vdyIsICJkaWZmIiwgIk1hdGgiLCAiZmxvb3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0VXNlckNvbnRyaWJzVGltZXN0YW1wIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidWN1c2VyIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImxpc3QiLCAidWNsaW1pdCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXN1bHQiLCAidXNlcmNvbnRyaWJzIiwgImxlbmd0aCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRMb2dFdmVudHNUaW1lc3RhbXAiLCAiX3JlZjIiLCAibGV1c2VyIiwgImZvcm1hdHZlcnNpb24iLCAibGVsaW1pdCIsICJsZXByb3AiLCAibG9nZXZlbnRzIiwgIl94MiIsICJnZXRUaW1lc3RhbXAiLCAiX3JlZjMiLCAidXNlcm5hbWUiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAidWNUaW1lc3RhbXAiLCAibGVUaW1lc3RhbXAiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgInNldE9iamVjdCIsICJfeDMiLCAiYXBwZW5kTWFya2VyVG9Vc2VyTGlua3MiLCAiX3JlZjQiLCAidXNlck5hbWUiLCAiJGVsZW1lbnRzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIiRlbGVtZW50IiwgInZhbHVlIiwgIiQiLCAiaW5zZXJ0QWZ0ZXIiLCAiZXJyIiwgImUiLCAiZiIsICJfeDQiLCAiYXBwZW5kTWFya2VyVG9Vc2VyUGFnZSIsICJfcmVmNSIsICJfeDUiLCAiZ2V0VXNlckxpbmtzIiwgIiRjb250ZW50IiwgInVzZXJMaW5rcyIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAibG9jYWxpemVkVXNlck5hbWVzcGFjZSIsICJfaXRlcmF0b3IzIiwgImZpbmQiLCAiam9pbiIsICJfc3RlcDMiLCAiXyRlbGVtZW50JGF0dHIiLCAidXNlclJlZ2V4IiwgIlJlZ0V4cCIsICJ1c2VyTmFtZU1hdGNoQXJyYXkiLCAiZGVjb2RlVVJJIiwgImF0dHIiLCAibWF0Y2giLCAicmVwbGFjZSIsICJpbmRleCIsICJpbmRleE9mIiwgIl91c2VyTmFtZSIsICJfdXNlckxpbmtzJF91c2VyTmFtZSIsICJ3aG9Jc0FjdGl2ZVVzZXJMaW5rcyIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAid2hvSXNBY3RpdmVVc2VyUGFnZSIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiLCAid2hvSXNBY3RpdmVMb2FkIiwgImhvb2siLCAiYWRkIl0KfQo=
