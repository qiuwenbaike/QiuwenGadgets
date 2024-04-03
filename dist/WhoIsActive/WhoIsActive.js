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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dob0lzQWN0aXZlL1dob0lzQWN0aXZlLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL2dldExhc3RBY3RpdmVNYXJrZXIudHN4IiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvY29yZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt3aG9Jc0FjdGl2ZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA+PSAwKSB7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4od2hvSXNBY3RpdmUpO1xufVxuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgV2hvSXNBY3RpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbnR5cGUgVGltZVNwYW4gPSAnVGhpc1dlZWsnIHwgJ1RoaXNNb250aCcgfCAnVGhpc1NlYXNvbicgfCAnVGhpc1NlbWl5ZWFyJyB8ICdUaGlzWWVhcicgfCAnT3ZlckFZZWFyJztcblxuZnVuY3Rpb24gV3JhcHBlcihwcm9wczoge3RpbWVTcGFuOiBUaW1lU3BhbjsgaW5uZXJFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnR9KSB7XG5cdGNvbnN0IHt0aW1lU3BhbiwgaW5uZXJFbGVtZW50fSA9IHByb3BzO1xuXG5cdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nW10gPSBbJ2dhZGdldC13aG9pc2FjdGl2ZV9fc3BhbicsIGBnYWRnZXQtd2hvaXNhY3RpdmVfXyR7dGltZVNwYW59YF07XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aW5uZXJFbGVtZW50fTwvc2VjdGlvbj47XG5cdH0gZWxzZSBpZiAoWydnb25nYmknLCAndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59XG5cbmZ1bmN0aW9uIFRhZyhwcm9wczoge3RpbWVTcGFuOiBUaW1lU3BhbjsgaW5kaWNhdG9yOiBib29sZWFufSkge1xuXHRjb25zdCB7dGltZVNwYW4sIGluZGljYXRvcn0gPSBwcm9wcztcblxuXHRjb25zdCBpY29uQ2xhc3NOYW1lOiBzdHJpbmdbXSA9IFsnZ2FkZ2V0LXdob2lzYWN0aXZlX19pY29uJywgYGdhZGdldC13aG9pc2FjdGl2ZV9faWNvbl9fJHt0aW1lU3Bhbn1gXTtcblx0Y29uc3QgdGV4dENsYXNzTmFtZTogc3RyaW5nW10gPSBbXG5cdFx0J2dhZGdldC13aG9pc2FjdGl2ZV9fdGV4dCcsXG5cdFx0aW5kaWNhdG9yID09PSB0cnVlID8gJywgZ2FkZ2V0LXdob2lzYWN0aXZlX19ub3RleHQnIDogJycsXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtpY29uQ2xhc3NOYW1lfSB0aXRsZT17Z2V0TWVzc2FnZSh0aW1lU3Bhbil9IC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3RleHRDbGFzc05hbWV9PntnZXRNZXNzYWdlKHRpbWVTcGFuKSA/PyAnJ308L3NwYW4+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmNvbnN0IGdldExhc3RBY3RpdmVNYXJrZXIgPSAodGltZXN0YW1wOiBzdHJpbmcsIGluZGljYXRvcjogYm9vbGVhbik6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG5cdGNvbnN0IGRhdGU6IG51bWJlciA9IERhdGUucGFyc2UodGltZXN0YW1wKTtcblx0Y29uc3Qgbm93OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXHRjb25zdCBkaWZmOiBudW1iZXIgPSBNYXRoLmZsb29yKChub3cgLSBkYXRlKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cblx0bGV0IHRpbWVTcGFuOiBUaW1lU3BhbiA9ICdUaGlzV2Vlayc7XG5cdGlmIChkaWZmID4gMzY1KSB7XG5cdFx0dGltZVNwYW4gPSAnT3ZlckFZZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gMTgzKSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc1llYXInO1xuXHR9IGVsc2UgaWYgKGRpZmYgPiA5Mikge1xuXHRcdHRpbWVTcGFuID0gJ1RoaXNTZW1peWVhcic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDMxKSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc1NlYXNvbic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDcpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzTW9udGgnO1xuXHR9XG5cblx0cmV0dXJuIDxXcmFwcGVyIHRpbWVTcGFuPXt0aW1lU3Bhbn0gaW5uZXJFbGVtZW50PXs8VGFnIHRpbWVTcGFuPXt0aW1lU3Bhbn0gaW5kaWNhdG9yPXtpbmRpY2F0b3J9IC8+fSAvPjtcbn07XG5cbmV4cG9ydCB0eXBlIHtUaW1lU3Bhbn07XG5leHBvcnQge2dldExhc3RBY3RpdmVNYXJrZXJ9O1xuIiwgImltcG9ydCB0eXBlIHtUaW1lU3Bhbn0gZnJvbSAnLi9nZXRMYXN0QWN0aXZlTWFya2VyJztcbmltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRPdmVyQVllYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIG92ZXIgYSB5ZWFyIGFnbycsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlubTmnKrmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5bm05pyq5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzV2VlazogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyB3ZWVrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOWRqOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlkajlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNNb250aDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyBtb250aCcsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDmnIjlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5pyI5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzU2Vhc29uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCBpbiAzIG1vbnRocycsXG5cdFx0XHQnemgtaGFucyc6ICfkuInmnIjlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiJ5pyI5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzU2VtaXllYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIGluIGhhbGYgYSB5ZWFyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNiuW5tOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfljYrlubTlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNZZWFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIHllYXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5bm05YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOW5tOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxUaW1lU3Bhbiwgc3RyaW5nPiAmIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNUfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldExhc3RBY3RpdmVNYXJrZXJ9IGZyb20gJy4vZ2V0TGFzdEFjdGl2ZU1hcmtlcic7XG5cbmNvbnN0IHdob0lzQWN0aXZlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VybmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0ICRlbGVtZW50czogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdID0gW107XG5cblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHsyOiBsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIG13LnV0aWwuJGNvbnRlbnQuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oXG5cdFx0W1xuXHRcdFx0J2FbdGl0bGVePVwiVXNlcjpcIl06bm90KC5tdy1jaGFuZ2VzbGlzdC1kYXRlKTpub3QoW2hyZWYqPVwidW5kb1wiXSknLFxuXHRcdFx0YGFbdGl0bGVePVwiJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfTpcIl06bm90KC5tdy1jaGFuZ2VzbGlzdC1kYXRlKTpub3QoW2hyZWYqPVwidW5kb1wiXSlgLFxuXHRcdF0uam9pbignLCcpXG5cdCkpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cblx0XHRjb25zdCB1c2VyUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCgoVXNlcil8KCR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX0pKTooLio/KSg/PSZ8JClgKTtcblx0XHRjb25zdCB1c2VybmFtZU1hdGNoQXJyYXk6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gZGVjb2RlVVJJKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJykubWF0Y2godXNlclJlZ2V4KTtcblx0XHRpZiAoIXVzZXJuYW1lTWF0Y2hBcnJheSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IFt1c2VybmFtZV0gPSB1c2VybmFtZU1hdGNoQXJyYXk7XG5cdFx0dXNlcm5hbWUgPSB1c2VybmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoYF4oKFVzZXIpfCgke2xvY2FsaXplZFVzZXJOYW1lc3BhY2V9KSk6YCwgJ2knKSwgJycpO1xuXHRcdGNvbnN0IGluZGV4OiBudW1iZXIgPSB1c2VybmFtZS5pbmRleE9mKCcvJyk7XG5cdFx0aWYgKGluZGV4ID09PSAtMSkge1xuXHRcdFx0JGVsZW1lbnQuZGF0YSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG5cdFx0XHR1c2VybmFtZXNbdXNlcm5hbWVzLmxlbmd0aF0gPSB1c2VybmFtZTtcblx0XHRcdCRlbGVtZW50c1skZWxlbWVudHMubGVuZ3RoXSA9ICRlbGVtZW50O1xuXHRcdH1cblx0fVxuXG5cdGlmICghdXNlcm5hbWVzLmxlbmd0aCB8fCAhJGVsZW1lbnRzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGJhc2VQYXJhbXM6IEFwaVF1ZXJ5VXNlckNvbnRyaWJzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0XHR1Y2xpbWl0OiAxLFxuXHR9O1xuXHR0eXBlIFVzZXJjb250cmlicyA9IHtcblx0XHR1c2VyY29udHJpYnM6IEFycmF5PHtcblx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdH0+O1xuXHR9O1xuXG5cdGZvciAoY29uc3QgdXNlcm5hbWUgb2YgbmV3IFNldCh1c2VybmFtZXMpKSB7XG5cdFx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh1c2VybmFtZSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2VyQ29udHJpYnNQYXJhbXMgPSB7XG5cdFx0XHQuLi5iYXNlUGFyYW1zLFxuXHRcdFx0dWN1c2VyOiB1c2VybmFtZSxcblx0XHR9O1xuXG5cdFx0dm9pZCBhcGkuZ2V0KHBhcmFtcykudGhlbigocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB7dXNlcmNvbnRyaWJzfSA9IHJlc3VsdFsncXVlcnknXSBhcyBVc2VyY29udHJpYnM7XG5cdFx0XHRpZiAoIXVzZXJjb250cmlicy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7dGltZXN0YW1wfSA9IHVzZXJjb250cmlic1swXSE7XG5cblx0XHRcdGZvciAoY29uc3QgJGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0XHRcdGlmICgkZWxlbWVudC5kYXRhKCd1c2VybmFtZScpID09PSB1c2VybmFtZSkge1xuXHRcdFx0XHRcdCQoZ2V0TGFzdEFjdGl2ZU1hcmtlcih0aW1lc3RhbXAsIHRydWUpKS5pbnNlcnRBZnRlcigkZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGlmICh3Z1JlbGV2YW50VXNlck5hbWUgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgJiYgd2dBY3Rpb24gPT09ICd2aWV3Jykge1xuXHRcdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCAyKS50b1RleHQoKTtcblx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpLnRvVGV4dCgpO1xuXHRcdGlmIChyZWxldmFudFVzZXJQYWdlTmFtZSAhPT0gcGFnZU5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlckNvbnRyaWJzUGFyYW1zID0ge1xuXHRcdFx0Li4uYmFzZVBhcmFtcyxcblx0XHRcdHVjdXNlcjogd2dSZWxldmFudFVzZXJOYW1lLFxuXHRcdH07XG5cblx0XHR2b2lkIGFwaS5nZXQocGFyYW1zKS50aGVuKChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHt1c2VyY29udHJpYnN9ID0gcmVzdWx0WydxdWVyeSddIGFzIFVzZXJjb250cmlicztcblx0XHRcdGlmICghdXNlcmNvbnRyaWJzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHt0aW1lc3RhbXB9ID0gdXNlcmNvbnRyaWJzWzBdITtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKSkge1xuXHRcdFx0XHRlbGVtZW50LnByZXBlbmQoZ2V0TGFzdEFjdGl2ZU1hcmtlcih0aW1lc3RhbXAsIGZhbHNlKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7d2hvSXNBY3RpdmV9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxxQkFBc0I7QUFDdEIsSUFBQUMsVUFBVzs7QUNGWixJQUFNQyxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBOztB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LFVBQUE7QUFBM0QsYUFBQUQsV0FBQTNDLEVBQUEsR0FBQSxFQUFBNEMsU0FBQUQsV0FBQTFDLEVBQUEsR0FBQUMsUUFBOEQ7QUFBQSxnQkFBbkRFLFVBQUF3QyxPQUFBdkM7QUFDVkQsa0JBQVF5QyxRQUFRdkUsb0JBQW9CQyxXQUFXLEtBQUssQ0FBQztRQUN0RDtNQUFBLFNBQUE2QyxLQUFBO0FBQUF1QixtQkFBQXRCLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUF1QixtQkFBQXJCLEVBQUE7TUFBQTtJQUNELENBQUM7RUFDRjtBQUNEOztBTm5HQSxJQUFJL0QsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsS0FBSyxHQUFHO0FBQzVDLFFBQUEsR0FBS2hDLG1CQUFBcUgsU0FBUSxFQUFFYixLQUFLbEQsV0FBVztBQUNoQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiU1lTVEVNX1NDUklQVF9MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiT3ZlckFZZWFyIiwgImxvY2FsaXplIiwgImVuIiwgIlRoaXNXZWVrIiwgIlRoaXNNb250aCIsICJUaGlzU2Vhc29uIiwgIlRoaXNTZW1peWVhciIsICJUaGlzWWVhciIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiV3JhcHBlciIsICJwcm9wcyIsICJ0aW1lU3BhbiIsICJpbm5lckVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJUYWciLCAiX2dldE1lc3NhZ2UiLCAiaW5kaWNhdG9yIiwgImljb25DbGFzc05hbWUiLCAidGV4dENsYXNzTmFtZSIsICJGcmFnbWVudCIsICJ0aXRsZSIsICJnZXRMYXN0QWN0aXZlTWFya2VyIiwgInRpbWVzdGFtcCIsICJkYXRlIiwgIkRhdGUiLCAicGFyc2UiLCAibm93IiwgImRpZmYiLCAiTWF0aCIsICJmbG9vciIsICJ3aG9Jc0FjdGl2ZSIsICIkYm9keSIsICJ1c2VybmFtZXMiLCAiJGVsZW1lbnRzIiwgIndnQWN0aW9uIiwgIndnRm9ybWF0dGVkTmFtZXNwYWNlcyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAidXRpbCIsICIkY29udGVudCIsICJmaW5kIiwgImpvaW4iLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl8kZWxlbWVudCRhdHRyIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJGVsZW1lbnQiLCAiJCIsICJ1c2VyUmVnZXgiLCAiUmVnRXhwIiwgInVzZXJuYW1lTWF0Y2hBcnJheSIsICJkZWNvZGVVUkkiLCAiYXR0ciIsICJtYXRjaCIsICJ1c2VybmFtZSIsICJyZXBsYWNlIiwgImluZGV4IiwgImluZGV4T2YiLCAiZGF0YSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJiYXNlUGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAibGlzdCIsICJ1Y2xpbWl0IiwgIl9pdGVyYXRvcjMiLCAiU2V0IiwgIl9zdGVwMyIsICJwYXJhbXMiLCAidWN1c2VyIiwgInRoZW4iLCAicmVzdWx0IiwgInVzZXJjb250cmlicyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJpbnNlcnRBZnRlciIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicHJlcGVuZCIsICJnZXRCb2R5Il0KfQo=
