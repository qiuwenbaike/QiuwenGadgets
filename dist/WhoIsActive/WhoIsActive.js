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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
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
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
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
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
//! src/WhoIsActive/WhoIsActive.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/WhoIsActive/options.json
var mountPointSelector = "#footer-info,.page-info";
var version = "2.0";
//! src/WhoIsActive/modules/constant.ts
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
  const className = ["gadget-whoisactive__span", "gadget-whoisactive__".concat(timeSpan)];
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
    timeSpan = "ThisSemiyear";
  } else if (diff > 92) {
    timeSpan = "ThisSeason";
  } else if (diff > 31) {
    timeSpan = "ThisYear";
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
var whoIsActive = ($body) => {
  const usernames = [];
  const $elements = [];
  const {
    wgAction,
    wgFormattedNamespaces,
    wgNamespaceNumber,
    wgPageName,
    wgRelevantUserName
  } = mw.config.get();
  const {
    2: localizedUserNamespace
  } = wgFormattedNamespaces;
  var _iterator2 = _createForOfIteratorHelper(mw.util.$content.find(['a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])', 'a[title^="'.concat(localizedUserNamespace, ':"]:not(.mw-changeslist-date):not([href*="undo"])')].join(","))), _step2;
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
  const baseParams = {
    action: "query",
    format: "json",
    list: "usercontribs",
    uclimit: 1
  };
  var _iterator3 = _createForOfIteratorHelper(new Set(usernames)), _step3;
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
      void api.get(params).then((result) => {
        const {
          usercontribs
        } = result["query"];
        if (!usercontribs.length) {
          return;
        }
        const {
          timestamp
        } = usercontribs[0];
        var _iterator5 = _createForOfIteratorHelper($elements), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const $element = _step5.value;
            if ($element.data("username") === username) {
              $(getLastActiveMarker(timestamp, true)).insertAfter($element);
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      });
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
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
    void api.get(params).then((result) => {
      const {
        usercontribs
      } = result["query"];
      if (!usercontribs.length) {
        return;
      }
      const {
        timestamp
      } = usercontribs[0];
      var _iterator4 = _createForOfIteratorHelper($body.find(mountPointSelector)), _step4;
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
  }
};
//! src/WhoIsActive/WhoIsActive.ts
if (mw.config.get("wgNamespaceNumber") >= 0) {
  void (0, import_ext_gadget4.getBody)().then(whoIsActive);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dob0lzQWN0aXZlL1dob0lzQWN0aXZlLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9vcHRpb25zLmpzb24iLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL2dldExhc3RBY3RpdmVNYXJrZXIudHN4IiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvY29yZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt3aG9Jc0FjdGl2ZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA+PSAwKSB7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4od2hvSXNBY3RpdmUpO1xufVxuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBXaG9Jc0FjdGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxudHlwZSBUaW1lU3BhbiA9ICdUaGlzV2VlaycgfCAnVGhpc01vbnRoJyB8ICdUaGlzU2Vhc29uJyB8ICdUaGlzU2VtaXllYXInIHwgJ1RoaXNZZWFyJyB8ICdPdmVyQVllYXInO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHByb3BzOiB7dGltZVNwYW46IFRpbWVTcGFuOyBpbm5lckVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudH0pIHtcblx0Y29uc3Qge3RpbWVTcGFuLCBpbm5lckVsZW1lbnR9ID0gcHJvcHM7XG5cblx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmdbXSA9IFsnZ2FkZ2V0LXdob2lzYWN0aXZlX19zcGFuJywgYGdhZGdldC13aG9pc2FjdGl2ZV9fJHt0aW1lU3Bhbn1gXTtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9zZWN0aW9uPjtcblx0fSBlbHNlIGlmIChbJ2dvbmdiaScsICd2ZWN0b3InLCAndmVjdG9yLTIwMjInXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2lubmVyRWxlbWVudH08L2xpPjtcblx0fVxuXG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gVGFnKHByb3BzOiB7dGltZVNwYW46IFRpbWVTcGFuOyBpbmRpY2F0b3I6IGJvb2xlYW59KSB7XG5cdGNvbnN0IHt0aW1lU3BhbiwgaW5kaWNhdG9yfSA9IHByb3BzO1xuXG5cdGNvbnN0IGljb25DbGFzc05hbWU6IHN0cmluZ1tdID0gWydnYWRnZXQtd2hvaXNhY3RpdmVfX2ljb24nLCBgZ2FkZ2V0LXdob2lzYWN0aXZlX19pY29uX18ke3RpbWVTcGFufWBdO1xuXHRjb25zdCB0ZXh0Q2xhc3NOYW1lOiBzdHJpbmdbXSA9IFtcblx0XHQnZ2FkZ2V0LXdob2lzYWN0aXZlX190ZXh0Jyxcblx0XHRpbmRpY2F0b3IgPT09IHRydWUgPyAnLCBnYWRnZXQtd2hvaXNhY3RpdmVfX25vdGV4dCcgOiAnJyxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2ljb25DbGFzc05hbWV9IHRpdGxlPXtnZXRNZXNzYWdlKHRpbWVTcGFuKX0gLz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17dGV4dENsYXNzTmFtZX0+e2dldE1lc3NhZ2UodGltZVNwYW4pID8/ICcnfTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcbn1cblxuY29uc3QgZ2V0TGFzdEFjdGl2ZU1hcmtlciA9ICh0aW1lc3RhbXA6IHN0cmluZywgaW5kaWNhdG9yOiBib29sZWFuKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcblx0Y29uc3QgZGF0ZTogbnVtYmVyID0gRGF0ZS5wYXJzZSh0aW1lc3RhbXApO1xuXHRjb25zdCBub3c6IG51bWJlciA9IERhdGUubm93KCk7XG5cdGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGguZmxvb3IoKG5vdyAtIGRhdGUpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblxuXHRsZXQgdGltZVNwYW46IFRpbWVTcGFuID0gJ1RoaXNXZWVrJztcblx0aWYgKGRpZmYgPiAzNjUpIHtcblx0XHR0aW1lU3BhbiA9ICdPdmVyQVllYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiAxODMpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzU2VtaXllYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiA5Mikge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNTZWFzb24nO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiAzMSkge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNZZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gNykge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNNb250aCc7XG5cdH1cblxuXHRyZXR1cm4gPFdyYXBwZXIgdGltZVNwYW49e3RpbWVTcGFufSBpbm5lckVsZW1lbnQ9ezxUYWcgdGltZVNwYW49e3RpbWVTcGFufSBpbmRpY2F0b3I9e2luZGljYXRvcn0gLz59IC8+O1xufTtcblxuZXhwb3J0IHR5cGUge1RpbWVTcGFufTtcbmV4cG9ydCB7Z2V0TGFzdEFjdGl2ZU1hcmtlcn07XG4iLCAiaW1wb3J0IHR5cGUge1RpbWVTcGFufSBmcm9tICcuL2dldExhc3RBY3RpdmVNYXJrZXInO1xuaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdE92ZXJBWWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgb3ZlciBhIHllYXIgYWdvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOW5tOacquaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlubTmnKrmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNXZWVrOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIHdlZWsnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5ZGo5YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOWRqOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc01vbnRoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIG1vbnRoJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOaciOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDmnIjlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNTZWFzb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIGluIDMgbW9udGhzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4ieaciOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuInmnIjlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNTZW1peWVhcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgaW4gaGFsZiBhIHllYXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5Y2K5bm05YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+WNiuW5tOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdFx0VGhpc1llYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIHRoaXMgeWVhcicsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlubTlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5bm05YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0fSBzYXRpc2ZpZXMgUmVjb3JkPFRpbWVTcGFuLCBzdHJpbmc+ICYgUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TGFzdEFjdGl2ZU1hcmtlcn0gZnJvbSAnLi9nZXRMYXN0QWN0aXZlTWFya2VyJztcblxuY29uc3Qgd2hvSXNBY3RpdmUgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHVzZXJuYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgJGVsZW1lbnRzOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10gPSBbXTtcblxuXHRjb25zdCB7d2dBY3Rpb24sIHdnRm9ybWF0dGVkTmFtZXNwYWNlcywgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgezI6IGxvY2FsaXplZFVzZXJOYW1lc3BhY2V9ID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbXcudXRpbC4kY29udGVudC5maW5kPEhUTUxBbmNob3JFbGVtZW50Pihcblx0XHRbXG5cdFx0XHQnYVt0aXRsZV49XCJVc2VyOlwiXTpub3QoLm13LWNoYW5nZXNsaXN0LWRhdGUpOm5vdChbaHJlZio9XCJ1bmRvXCJdKScsXG5cdFx0XHRgYVt0aXRsZV49XCIke2xvY2FsaXplZFVzZXJOYW1lc3BhY2V9OlwiXTpub3QoLm13LWNoYW5nZXNsaXN0LWRhdGUpOm5vdChbaHJlZio9XCJ1bmRvXCJdKWAsXG5cdFx0XS5qb2luKCcsJylcblx0KSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblxuXHRcdGNvbnN0IHVzZXJSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgKChVc2VyKXwoJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfSkpOiguKj8pKD89JnwkKWApO1xuXHRcdGNvbnN0IHVzZXJuYW1lTWF0Y2hBcnJheTogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSBkZWNvZGVVUkkoJGVsZW1lbnQuYXR0cignaHJlZicpID8/ICcnKS5tYXRjaCh1c2VyUmVnZXgpO1xuXHRcdGlmICghdXNlcm5hbWVNYXRjaEFycmF5KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgW3VzZXJuYW1lXSA9IHVzZXJuYW1lTWF0Y2hBcnJheTtcblx0XHR1c2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChgXigoVXNlcil8KCR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX0pKTpgLCAnaScpLCAnJyk7XG5cdFx0Y29uc3QgaW5kZXg6IG51bWJlciA9IHVzZXJuYW1lLmluZGV4T2YoJy8nKTtcblx0XHRpZiAoaW5kZXggPT09IC0xKSB7XG5cdFx0XHQkZWxlbWVudC5kYXRhKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcblx0XHRcdHVzZXJuYW1lc1t1c2VybmFtZXMubGVuZ3RoXSA9IHVzZXJuYW1lO1xuXHRcdFx0JGVsZW1lbnRzWyRlbGVtZW50cy5sZW5ndGhdID0gJGVsZW1lbnQ7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCF1c2VybmFtZXMubGVuZ3RoIHx8ICEkZWxlbWVudHMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYmFzZVBhcmFtczogQXBpUXVlcnlVc2VyQ29udHJpYnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGxpc3Q6ICd1c2VyY29udHJpYnMnLFxuXHRcdHVjbGltaXQ6IDEsXG5cdH07XG5cdHR5cGUgVXNlcmNvbnRyaWJzID0ge1xuXHRcdHVzZXJjb250cmliczogQXJyYXk8e1xuXHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0fT47XG5cdH07XG5cblx0Zm9yIChjb25zdCB1c2VybmFtZSBvZiBuZXcgU2V0KHVzZXJuYW1lcykpIHtcblx0XHRpZiAoU1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKHVzZXJuYW1lKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHRcdC4uLmJhc2VQYXJhbXMsXG5cdFx0XHR1Y3VzZXI6IHVzZXJuYW1lLFxuXHRcdH07XG5cblx0XHR2b2lkIGFwaS5nZXQocGFyYW1zKS50aGVuKChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHt1c2VyY29udHJpYnN9ID0gcmVzdWx0WydxdWVyeSddIGFzIFVzZXJjb250cmlicztcblx0XHRcdGlmICghdXNlcmNvbnRyaWJzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHt0aW1lc3RhbXB9ID0gdXNlcmNvbnRyaWJzWzBdITtcblxuXHRcdFx0Zm9yIChjb25zdCAkZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRcdFx0aWYgKCRlbGVtZW50LmRhdGEoJ3VzZXJuYW1lJykgPT09IHVzZXJuYW1lKSB7XG5cdFx0XHRcdFx0JChnZXRMYXN0QWN0aXZlTWFya2VyKHRpbWVzdGFtcCwgdHJ1ZSkpLmluc2VydEFmdGVyKCRlbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0aWYgKHdnUmVsZXZhbnRVc2VyTmFtZSAmJiB3Z05hbWVzcGFjZU51bWJlciA9PT0gMiAmJiB3Z0FjdGlvbiA9PT0gJ3ZpZXcnKSB7XG5cdFx0Y29uc3QgcmVsZXZhbnRVc2VyUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1JlbGV2YW50VXNlck5hbWUsIDIpLnRvVGV4dCgpO1xuXHRcdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudG9UZXh0KCk7XG5cdFx0aWYgKHJlbGV2YW50VXNlclBhZ2VOYW1lICE9PSBwYWdlTmFtZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2VyQ29udHJpYnNQYXJhbXMgPSB7XG5cdFx0XHQuLi5iYXNlUGFyYW1zLFxuXHRcdFx0dWN1c2VyOiB3Z1JlbGV2YW50VXNlck5hbWUsXG5cdFx0fTtcblxuXHRcdHZvaWQgYXBpLmdldChwYXJhbXMpLnRoZW4oKHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3Qge3VzZXJjb250cmlic30gPSByZXN1bHRbJ3F1ZXJ5J10gYXMgVXNlcmNvbnRyaWJzO1xuXHRcdFx0aWYgKCF1c2VyY29udHJpYnMubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge3RpbWVzdGFtcH0gPSB1c2VyY29udHJpYnNbMF0hO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpKSB7XG5cdFx0XHRcdGVsZW1lbnQucHJlcGVuZChnZXRMYXN0QWN0aXZlTWFya2VyKHRpbWVzdGFtcCwgZmFsc2UpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHt3aG9Jc0FjdGl2ZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLHFCQUFzQjtBQUN0QixJQUFBQyxVQUFXOztBQ0ZaLElBQU1DLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7O0FDUkQsSUFBQUMsb0JBQXdCSixRQUFBLGlCQUFBO0FBRXhCLElBQU1LLE9BQUEsR0FBY0Qsa0JBQUFFLFdBQUEsZUFBQUMsT0FBaUNMLE9BQU8sQ0FBRTs7QUNIOUQsSUFBQU0scUJBQWtC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QkFBUXlDLFFBQVF2RSxvQkFBb0JDLFdBQVcsS0FBSyxDQUFDO1FBQ3REO01BQUEsU0FBQTZDLEtBQUE7QUFBQXVCLG1CQUFBdEIsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXVCLG1CQUFBckIsRUFBQTtNQUFBO0lBQ0QsQ0FBQztFQUNGO0FBQ0Q7O0FObkdBLElBQUkvRCxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixLQUFLLEdBQUc7QUFDNUMsUUFBQSxHQUFLaEMsbUJBQUFxSCxTQUFRLEVBQUViLEtBQUtsRCxXQUFXO0FBQ2hDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJTWVNURU1fU0NSSVBUX0xJU1QiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJPdmVyQVllYXIiLCAibG9jYWxpemUiLCAiZW4iLCAiVGhpc1dlZWsiLCAiVGhpc01vbnRoIiwgIlRoaXNTZWFzb24iLCAiVGhpc1NlbWl5ZWFyIiwgIlRoaXNZZWFyIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJXcmFwcGVyIiwgInByb3BzIiwgInRpbWVTcGFuIiwgImlubmVyRWxlbWVudCIsICJjbGFzc05hbWUiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlRhZyIsICJfZ2V0TWVzc2FnZSIsICJpbmRpY2F0b3IiLCAiaWNvbkNsYXNzTmFtZSIsICJ0ZXh0Q2xhc3NOYW1lIiwgIkZyYWdtZW50IiwgInRpdGxlIiwgImdldExhc3RBY3RpdmVNYXJrZXIiLCAidGltZXN0YW1wIiwgImRhdGUiLCAiRGF0ZSIsICJwYXJzZSIsICJub3ciLCAiZGlmZiIsICJNYXRoIiwgImZsb29yIiwgIndob0lzQWN0aXZlIiwgIiRib2R5IiwgInVzZXJuYW1lcyIsICIkZWxlbWVudHMiLCAid2dBY3Rpb24iLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgImxvY2FsaXplZFVzZXJOYW1lc3BhY2UiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJ1dGlsIiwgIiRjb250ZW50IiwgImZpbmQiLCAiam9pbiIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiXyRlbGVtZW50JGF0dHIiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkZWxlbWVudCIsICIkIiwgInVzZXJSZWdleCIsICJSZWdFeHAiLCAidXNlcm5hbWVNYXRjaEFycmF5IiwgImRlY29kZVVSSSIsICJhdHRyIiwgIm1hdGNoIiwgInVzZXJuYW1lIiwgInJlcGxhY2UiLCAiaW5kZXgiLCAiaW5kZXhPZiIsICJkYXRhIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImJhc2VQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJsaXN0IiwgInVjbGltaXQiLCAiX2l0ZXJhdG9yMyIsICJTZXQiLCAiX3N0ZXAzIiwgInBhcmFtcyIsICJ1Y3VzZXIiLCAidGhlbiIsICJyZXN1bHQiLCAidXNlcmNvbnRyaWJzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImluc2VydEFmdGVyIiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJwYWdlTmFtZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJwcmVwZW5kIiwgImdldEJvZHkiXQp9Cg==
