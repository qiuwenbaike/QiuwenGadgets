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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
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
  uclimit: 1
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dob0lzQWN0aXZlL29wdGlvbnMuanNvbiIsICJzcmMvR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvZ2V0TGFzdEFjdGl2ZU1hcmtlci50c3giLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvV2hvSXNBY3RpdmUvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9XaG9Jc0FjdGl2ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBXaG9Jc0FjdGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxudHlwZSBUaW1lU3BhbiA9ICdUaGlzV2VlaycgfCAnVGhpc01vbnRoJyB8ICdUaGlzU2Vhc29uJyB8ICdUaGlzU2VtaXllYXInIHwgJ1RoaXNZZWFyJyB8ICdPdmVyQVllYXInO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHByb3BzOiB7dGltZVNwYW46IFRpbWVTcGFuOyBpbm5lckVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudH0pIHtcblx0Y29uc3Qge3RpbWVTcGFuLCBpbm5lckVsZW1lbnR9ID0gcHJvcHM7XG5cblx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmdbXSA9IFsnZ2FkZ2V0LXdob2lzYWN0aXZlJywgYGdhZGdldC13aG9pc2FjdGl2ZV9fJHt0aW1lU3Bhbn1gXTtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9zZWN0aW9uPjtcblx0fSBlbHNlIGlmIChbJ2dvbmdiaScsICd2ZWN0b3InLCAndmVjdG9yLTIwMjInXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2lubmVyRWxlbWVudH08L2xpPjtcblx0fVxuXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gVGFnKHByb3BzOiB7dGltZVNwYW46IFRpbWVTcGFuOyBpbmRpY2F0b3I6IGJvb2xlYW59KSB7XG5cdGNvbnN0IHt0aW1lU3BhbiwgaW5kaWNhdG9yfSA9IHByb3BzO1xuXG5cdGNvbnN0IGljb25DbGFzc05hbWU6IHN0cmluZ1tdID0gWydnYWRnZXQtd2hvaXNhY3RpdmVfX2ljb24nLCBgZ2FkZ2V0LXdob2lzYWN0aXZlX19pY29uX18ke3RpbWVTcGFufWBdO1xuXHRjb25zdCB0ZXh0Q2xhc3NOYW1lOiBzdHJpbmdbXSA9IFtcblx0XHQnZ2FkZ2V0LXdob2lzYWN0aXZlX190ZXh0Jyxcblx0XHRpbmRpY2F0b3IgPT09IHRydWUgPyAnLCBnYWRnZXQtd2hvaXNhY3RpdmVfX25vdGV4dCcgOiAnJyxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2ljb25DbGFzc05hbWV9IHRpdGxlPXtnZXRNZXNzYWdlKHRpbWVTcGFuKX0gLz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17dGV4dENsYXNzTmFtZX0+e2dldE1lc3NhZ2UodGltZVNwYW4pID8/ICcnfTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuY29uc3QgZ2V0TGFzdEFjdGl2ZU1hcmtlciA9ICh0aW1lc3RhbXA6IHN0cmluZywgaW5kaWNhdG9yOiBib29sZWFuKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcblx0Y29uc3QgZGF0ZTogbnVtYmVyID0gRGF0ZS5wYXJzZSh0aW1lc3RhbXApO1xuXHRjb25zdCBub3c6IG51bWJlciA9IERhdGUubm93KCk7XG5cdGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKG5vdyAtIGRhdGUpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblxuXHRsZXQgdGltZVNwYW46IFRpbWVTcGFuID0gJ1RoaXNXZWVrJztcblx0aWYgKGRpZmYgPiAzNjUpIHtcblx0XHR0aW1lU3BhbiA9ICdPdmVyQVllYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiAxODMpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzWWVhcic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDkyKSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc1NlbWl5ZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gMzEpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzU2Vhc29uJztcblx0fSBlbHNlIGlmIChkaWZmID4gNykge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNNb250aCc7XG5cdH1cblxuXHRyZXR1cm4gPFdyYXBwZXIgdGltZVNwYW49e3RpbWVTcGFufSBpbm5lckVsZW1lbnQ9ezxUYWcgdGltZVNwYW49e3RpbWVTcGFufSBpbmRpY2F0b3I9e2luZGljYXRvcn0gLz59IC8+O1xufTtcblxuZXhwb3J0IHR5cGUge1RpbWVTcGFufTtcbmV4cG9ydCB7Z2V0TGFzdEFjdGl2ZU1hcmtlcn07XG4iLCAiaW1wb3J0IHR5cGUge1RpbWVTcGFufSBmcm9tICcuL2dldExhc3RBY3RpdmVNYXJrZXInO1xuaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdE92ZXJBWWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgb3ZlciBhIHllYXIgYWdvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOW5tOacquaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlubTmnKrmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNXZWVrOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIHdlZWsnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5ZGo5YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOWRqOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc01vbnRoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIG1vbnRoJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOaciOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDmnIjlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNTZWFzb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIGluIDMgbW9udGhzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4ieaciOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuInmnIjlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNTZW1peWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgaW4gaGFsZiBhIHllYXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5Y2K5bm05YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+WNiuW5tOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc1llYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIHRoaXMgeWVhcicsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlubTlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5bm05YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0fSBzYXRpc2ZpZXMgUmVjb3JkPFRpbWVTcGFuLCBzdHJpbmc+ICYgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TGFzdEFjdGl2ZU1hcmtlcn0gZnJvbSAnLi9nZXRMYXN0QWN0aXZlTWFya2VyJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGJhc2VQYXJhbXM6IEFwaVF1ZXJ5VXNlckNvbnRyaWJzUGFyYW1zID0ge1xuXHRhY3Rpb246ICdxdWVyeScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0dWNsaW1pdDogMSxcbn07XG50eXBlIFVzZXJjb250cmlicyA9IHtcblx0dXNlcmNvbnRyaWJzOiBBcnJheTx7XG5cdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdH0+O1xufTtcblxuY29uc3Qgd2hvSXNBY3RpdmUgPSBhc3luYyAoJGNvbnRlbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdXNlcm5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCAkZWxlbWVudHM6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD5bXSA9IFtdO1xuXG5cdGNvbnN0IHt3Z0Zvcm1hdHRlZE5hbWVzcGFjZXN9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHsyOiBsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KFxuXHRcdFtcblx0XHRcdCdhW3RpdGxlXj1cIlVzZXI6XCJdOm5vdCgubXctY2hhbmdlc2xpc3QtZGF0ZSk6bm90KFtocmVmKj1cInVuZG9cIl0pJyxcblx0XHRcdGBhW3RpdGxlXj1cIiR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX06XCJdOm5vdCgubXctY2hhbmdlc2xpc3QtZGF0ZSk6bm90KFtocmVmKj1cInVuZG9cIl0pYCxcblx0XHRdLmpvaW4oJywnKVxuXHQpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXG5cdFx0Y29uc3QgdXNlclJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAoKFVzZXIpfCgke2xvY2FsaXplZFVzZXJOYW1lc3BhY2V9KSk6KC4qPykoPz0mfCQpYCk7XG5cdFx0Y29uc3QgdXNlcm5hbWVNYXRjaEFycmF5OiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IGRlY29kZVVSSSgkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJycpLm1hdGNoKHVzZXJSZWdleCk7XG5cdFx0aWYgKCF1c2VybmFtZU1hdGNoQXJyYXkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBbdXNlcm5hbWVdID0gdXNlcm5hbWVNYXRjaEFycmF5O1xuXHRcdHVzZXJuYW1lID0gdXNlcm5hbWUucmVwbGFjZShuZXcgUmVnRXhwKGBeKChVc2VyKXwoJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfSkpOmAsICdpJyksICcnKTtcblx0XHRjb25zdCBpbmRleDogbnVtYmVyID0gdXNlcm5hbWUuaW5kZXhPZignLycpO1xuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdCRlbGVtZW50LmRhdGEoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuXHRcdFx0dXNlcm5hbWVzW3VzZXJuYW1lcy5sZW5ndGhdID0gdXNlcm5hbWU7XG5cdFx0XHQkZWxlbWVudHNbJGVsZW1lbnRzLmxlbmd0aF0gPSAkZWxlbWVudDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIXVzZXJuYW1lcy5sZW5ndGggfHwgISRlbGVtZW50cy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IHVzZXJuYW1lIG9mIHVuaXF1ZUFycmF5KHVzZXJuYW1lcykpIHtcblx0XHQvLyBSZXBsYWNlIGBuZXcgU2V0KClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRpZiAoU1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKHVzZXJuYW1lKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHRcdC4uLmJhc2VQYXJhbXMsXG5cdFx0XHR1Y3VzZXI6IHVzZXJuYW1lLFxuXHRcdH07XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRjb25zdCB7dXNlcmNvbnRyaWJzfSA9IHJlc3VsdFsncXVlcnknXSBhcyBVc2VyY29udHJpYnM7XG5cdFx0aWYgKCF1c2VyY29udHJpYnMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qge3RpbWVzdGFtcH0gPSB1c2VyY29udHJpYnNbMF0hO1xuXG5cdFx0Zm9yIChjb25zdCAkZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRcdGlmICgkZWxlbWVudC5kYXRhKCd1c2VybmFtZScpID09PSB1c2VybmFtZSkge1xuXHRcdFx0XHQkKGdldExhc3RBY3RpdmVNYXJrZXIodGltZXN0YW1wLCB0cnVlKSkuaW5zZXJ0QWZ0ZXIoJGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuY29uc3Qgd2hvSXNBY3RpdmVVc2VyUGFnZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dSZWxldmFudFVzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dSZWxldmFudFVzZXJOYW1lICYmIHdnTmFtZXNwYWNlTnVtYmVyID09PSAyICYmIHdnQWN0aW9uID09PSAndmlldycpIHtcblx0XHRjb25zdCByZWxldmFudFVzZXJQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUmVsZXZhbnRVc2VyTmFtZSwgMikudG9UZXh0KCk7XG5cdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1BhZ2VOYW1lKS50b1RleHQoKTtcblx0XHRpZiAocmVsZXZhbnRVc2VyUGFnZU5hbWUgIT09IHBhZ2VOYW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHRcdC4uLmJhc2VQYXJhbXMsXG5cdFx0XHR1Y3VzZXI6IHdnUmVsZXZhbnRVc2VyTmFtZSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0Y29uc3Qge3VzZXJjb250cmlic30gPSByZXN1bHRbJ3F1ZXJ5J10gYXMgVXNlcmNvbnRyaWJzO1xuXHRcdGlmICghdXNlcmNvbnRyaWJzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHt0aW1lc3RhbXB9ID0gdXNlcmNvbnRyaWJzWzBdITtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpKSB7XG5cdFx0XHRlbGVtZW50LnByZXBlbmQoZ2V0TGFzdEFjdGl2ZU1hcmtlcih0aW1lc3RhbXAsIGZhbHNlKSk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3dob0lzQWN0aXZlLCB3aG9Jc0FjdGl2ZVVzZXJQYWdlfTtcbiIsICJpbXBvcnQge3dob0lzQWN0aXZlLCB3aG9Jc0FjdGl2ZVVzZXJQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiB3aG9Jc0FjdGl2ZUxvYWQoKSB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQod2hvSXNBY3RpdmUpO1xuXHR2b2lkIHdob0lzQWN0aXZlVXNlclBhZ2UoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQzFCLEdBQUc7IiwKICAibmFtZXMiOiBbIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiT3ZlckFZZWFyIiwgImxvY2FsaXplIiwgImVuIiwgIlRoaXNXZWVrIiwgIlRoaXNNb250aCIsICJUaGlzU2Vhc29uIiwgIlRoaXNTZW1peWVhciIsICJUaGlzWWVhciIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiV3JhcHBlciIsICJwcm9wcyIsICJ0aW1lU3BhbiIsICJpbm5lckVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJUYWciLCAiX2dldE1lc3NhZ2UiLCAiaW5kaWNhdG9yIiwgImljb25DbGFzc05hbWUiLCAidGV4dENsYXNzTmFtZSIsICJGcmFnbWVudCIsICJ0aXRsZSIsICJnZXRMYXN0QWN0aXZlTWFya2VyIiwgInRpbWVzdGFtcCIsICJkYXRlIiwgIkRhdGUiLCAicGFyc2UiLCAibm93IiwgImRpZmYiLCAiTWF0aCIsICJmbG9vciIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYmFzZVBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImxpc3QiLCAidWNsaW1pdCIsICJ3aG9Jc0FjdGl2ZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIiRjb250ZW50IiwgInVzZXJuYW1lcyIsICIkZWxlbWVudHMiLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgImxvY2FsaXplZFVzZXJOYW1lc3BhY2UiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgImpvaW4iLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl8kZWxlbWVudCRhdHRyIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJGVsZW1lbnQiLCAiJCIsICJ1c2VyUmVnZXgiLCAiUmVnRXhwIiwgInVzZXJuYW1lTWF0Y2hBcnJheSIsICJkZWNvZGVVUkkiLCAiYXR0ciIsICJtYXRjaCIsICJ1c2VybmFtZSIsICJyZXBsYWNlIiwgImluZGV4IiwgImluZGV4T2YiLCAiZGF0YSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfaXRlcmF0b3IzIiwgInVuaXF1ZUFycmF5IiwgIl9zdGVwMyIsICJwYXJhbXMiLCAidWN1c2VyIiwgInJlc3VsdCIsICJ1c2VyY29udHJpYnMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaW5zZXJ0QWZ0ZXIiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIndob0lzQWN0aXZlVXNlclBhZ2UiLCAiX3JlZjIiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAicmVsZXZhbnRVc2VyUGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInBhZ2VOYW1lIiwgIl9pdGVyYXRvcjUiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfc3RlcDUiLCAicHJlcGVuZCIsICJ3aG9Jc0FjdGl2ZUxvYWQiLCAiaG9vayIsICJhZGQiXQp9Cg==
