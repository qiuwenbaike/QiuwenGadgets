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
      const [username] = usernameMatchArray;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dob0lzQWN0aXZlL1dob0lzQWN0aXZlLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9vcHRpb25zLmpzb24iLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL2dldExhc3RBY3RpdmVNYXJrZXIudHN4IiwgInNyYy9XaG9Jc0FjdGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1dob0lzQWN0aXZlL21vZHVsZXMvY29yZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHt3aG9Jc0FjdGl2ZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA+PSAwKSB7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4od2hvSXNBY3RpdmUpO1xufVxuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgV2hvSXNBY3RpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbnR5cGUgVGltZVNwYW4gPSAnVGhpc1dlZWsnIHwgJ1RoaXNNb250aCcgfCAnVGhpc1NlYXNvbicgfCAnVGhpc1NlbWl5ZWFyJyB8ICdUaGlzWWVhcicgfCAnT3ZlckFZZWFyJztcblxuZnVuY3Rpb24gV3JhcHBlcihwcm9wczoge3RpbWVTcGFuOiBUaW1lU3BhbjsgaW5uZXJFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnR9KSB7XG5cdGNvbnN0IHt0aW1lU3BhbiwgaW5uZXJFbGVtZW50fSA9IHByb3BzO1xuXG5cdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nW10gPSBbJ2dhZGdldC13aG9pc2FjdGl2ZV9fc3BhbicsIGBnYWRnZXQtd2hvaXNhY3RpdmVfXyR7dGltZVNwYW59YF07XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aW5uZXJFbGVtZW50fTwvc2VjdGlvbj47XG5cdH0gZWxzZSBpZiAoWydnb25nYmknLCAndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59XG5cbmZ1bmN0aW9uIFRhZyhwcm9wczoge3RpbWVTcGFuOiBUaW1lU3BhbjsgaW5kaWNhdG9yOiBib29sZWFufSkge1xuXHRjb25zdCB7dGltZVNwYW4sIGluZGljYXRvcn0gPSBwcm9wcztcblxuXHRjb25zdCBpY29uQ2xhc3NOYW1lOiBzdHJpbmdbXSA9IFsnZ2FkZ2V0LXdob2lzYWN0aXZlX19pY29uJywgYGdhZGdldC13aG9pc2FjdGl2ZV9faWNvbl9fJHt0aW1lU3Bhbn1gXTtcblx0Y29uc3QgdGV4dENsYXNzTmFtZTogc3RyaW5nW10gPSBbXG5cdFx0J2dhZGdldC13aG9pc2FjdGl2ZV9fdGV4dCcsXG5cdFx0aW5kaWNhdG9yID09PSB0cnVlID8gJywgZ2FkZ2V0LXdob2lzYWN0aXZlX19ub3RleHQnIDogJycsXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtpY29uQ2xhc3NOYW1lfSB0aXRsZT17Z2V0TWVzc2FnZSh0aW1lU3Bhbil9IC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3RleHRDbGFzc05hbWV9PntnZXRNZXNzYWdlKHRpbWVTcGFuKSA/PyAnJ308L3NwYW4+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmNvbnN0IGdldExhc3RBY3RpdmVNYXJrZXIgPSAodGltZXN0YW1wOiBzdHJpbmcsIGluZGljYXRvcjogYm9vbGVhbik6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG5cdGNvbnN0IGRhdGU6IG51bWJlciA9IERhdGUucGFyc2UodGltZXN0YW1wKTtcblx0Y29uc3Qgbm93OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXHRjb25zdCBkaWZmOiBudW1iZXIgPSBNYXRoLmZsb29yKChub3cgLSBkYXRlKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cblx0bGV0IHRpbWVTcGFuOiBUaW1lU3BhbiA9ICdUaGlzV2Vlayc7XG5cdGlmIChkaWZmID4gMzY1KSB7XG5cdFx0dGltZVNwYW4gPSAnT3ZlckFZZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gMTgzKSB7XG5cdFx0dGltZVNwYW4gPSAnVGhpc1NlbWl5ZWFyJztcblx0fSBlbHNlIGlmIChkaWZmID4gOTIpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzU2Vhc29uJztcblx0fSBlbHNlIGlmIChkaWZmID4gMzEpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzWWVhcic7XG5cdH0gZWxzZSBpZiAoZGlmZiA+IDcpIHtcblx0XHR0aW1lU3BhbiA9ICdUaGlzTW9udGgnO1xuXHR9XG5cblx0cmV0dXJuIDxXcmFwcGVyIHRpbWVTcGFuPXt0aW1lU3Bhbn0gaW5uZXJFbGVtZW50PXs8VGFnIHRpbWVTcGFuPXt0aW1lU3Bhbn0gaW5kaWNhdG9yPXtpbmRpY2F0b3J9IC8+fSAvPjtcbn07XG5cbmV4cG9ydCB0eXBlIHtUaW1lU3Bhbn07XG5leHBvcnQge2dldExhc3RBY3RpdmVNYXJrZXJ9O1xuIiwgImltcG9ydCB0eXBlIHtUaW1lU3Bhbn0gZnJvbSAnLi9nZXRMYXN0QWN0aXZlTWFya2VyJztcbmltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRPdmVyQVllYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIG92ZXIgYSB5ZWFyIGFnbycsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDlubTmnKrmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5bm05pyq5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzV2VlazogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyB3ZWVrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOWRqOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDlkajlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNNb250aDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0ZWQgdGhpcyBtb250aCcsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDmnIjlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA5pyI5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzU2Vhc29uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCBpbiAzIG1vbnRocycsXG5cdFx0XHQnemgtaGFucyc6ICfkuInmnIjlhoXmnInnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiJ5pyI5YWn5pyJ57eo6LyvJyxcblx0XHR9KSxcblx0XHRUaGlzU2VtaXllYXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdGVkIGluIGhhbGYgYSB5ZWFyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNiuW5tOWGheaciee8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfljYrlubTlhafmnInnt6jovK8nLFxuXHRcdH0pLFxuXHRcdFRoaXNZZWFyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXRlZCB0aGlzIHllYXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA5bm05YaF5pyJ57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOW5tOWFp+aciee3qOi8rycsXG5cdFx0fSksXG5cdH0gc2F0aXNmaWVzIFJlY29yZDxUaW1lU3Bhbiwgc3RyaW5nPiAmIFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldExhc3RBY3RpdmVNYXJrZXJ9IGZyb20gJy4vZ2V0TGFzdEFjdGl2ZU1hcmtlcic7XG5cbmNvbnN0IHdob0lzQWN0aXZlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VybmFtZXM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0ICRlbGVtZW50czogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdID0gW107XG5cblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHsyOiBsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIG13LnV0aWwuJGNvbnRlbnQuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oXG5cdFx0W1xuXHRcdFx0J2FbdGl0bGVePVwiVXNlcjpcIl06bm90KC5tdy1jaGFuZ2VzbGlzdC1kYXRlKTpub3QoW2hyZWYqPVwidW5kb1wiXSknLFxuXHRcdFx0YGFbdGl0bGVePVwiJHtsb2NhbGl6ZWRVc2VyTmFtZXNwYWNlfTpcIl06bm90KC5tdy1jaGFuZ2VzbGlzdC1kYXRlKTpub3QoW2hyZWYqPVwidW5kb1wiXSlgLFxuXHRcdF0uam9pbignLCcpXG5cdCkpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cblx0XHRjb25zdCB1c2VyUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCgoVXNlcil8KCR7bG9jYWxpemVkVXNlck5hbWVzcGFjZX0pKTooLio/KSg/PSZ8JClgKTtcblx0XHRjb25zdCB1c2VybmFtZU1hdGNoQXJyYXk6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gZGVjb2RlVVJJKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJykubWF0Y2godXNlclJlZ2V4KTtcblx0XHRpZiAoIXVzZXJuYW1lTWF0Y2hBcnJheSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgW3VzZXJuYW1lXSA9IHVzZXJuYW1lTWF0Y2hBcnJheTtcblx0XHRjb25zdCBpbmRleDogbnVtYmVyID0gdXNlcm5hbWUuaW5kZXhPZignLycpO1xuXHRcdGlmIChpbmRleCA9PT0gLTEpIHtcblx0XHRcdCRlbGVtZW50LmRhdGEoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuXHRcdFx0dXNlcm5hbWVzW3VzZXJuYW1lcy5sZW5ndGhdID0gdXNlcm5hbWU7XG5cdFx0XHQkZWxlbWVudHNbJGVsZW1lbnRzLmxlbmd0aF0gPSAkZWxlbWVudDtcblx0XHR9XG5cdH1cblxuXHRpZiAoIXVzZXJuYW1lcy5sZW5ndGggfHwgISRlbGVtZW50cy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBiYXNlUGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0bGlzdDogJ3VzZXJjb250cmlicycsXG5cdFx0dWNsaW1pdDogMSxcblx0fTtcblx0dHlwZSBVc2VyY29udHJpYnMgPSB7XG5cdFx0dXNlcmNvbnRyaWJzOiBBcnJheTx7XG5cdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHR9Pjtcblx0fTtcblxuXHRmb3IgKGNvbnN0IHVzZXJuYW1lIG9mIG5ldyBTZXQodXNlcm5hbWVzKSkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2VyQ29udHJpYnNQYXJhbXMgPSB7XG5cdFx0XHQuLi5iYXNlUGFyYW1zLFxuXHRcdFx0dWN1c2VyOiB1c2VybmFtZSxcblx0XHR9O1xuXG5cdFx0dm9pZCBhcGkuZ2V0KHBhcmFtcykudGhlbigocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB7dXNlcmNvbnRyaWJzfSA9IHJlc3VsdFsncXVlcnknXSBhcyBVc2VyY29udHJpYnM7XG5cdFx0XHRpZiAoIXVzZXJjb250cmlicy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7dGltZXN0YW1wfSA9IHVzZXJjb250cmlic1swXSE7XG5cblx0XHRcdGZvciAoY29uc3QgJGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0XHRcdGlmICgkZWxlbWVudC5kYXRhKCd1c2VybmFtZScpID09PSB1c2VybmFtZSkge1xuXHRcdFx0XHRcdCQoZ2V0TGFzdEFjdGl2ZU1hcmtlcih0aW1lc3RhbXAsIHRydWUpKS5pbnNlcnRBZnRlcigkZWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGlmICh3Z1JlbGV2YW50VXNlck5hbWUgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgJiYgd2dBY3Rpb24gPT09ICd2aWV3Jykge1xuXHRcdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCAyKS50b1RleHQoKTtcblx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpLnRvVGV4dCgpO1xuXHRcdGlmIChyZWxldmFudFVzZXJQYWdlTmFtZSAhPT0gcGFnZU5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlckNvbnRyaWJzUGFyYW1zID0ge1xuXHRcdFx0Li4uYmFzZVBhcmFtcyxcblx0XHRcdHVjdXNlcjogd2dSZWxldmFudFVzZXJOYW1lLFxuXHRcdH07XG5cblx0XHR2b2lkIGFwaS5nZXQocGFyYW1zKS50aGVuKChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHt1c2VyY29udHJpYnN9ID0gcmVzdWx0WydxdWVyeSddIGFzIFVzZXJjb250cmlicztcblx0XHRcdGlmICghdXNlcmNvbnRyaWJzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHt0aW1lc3RhbXB9ID0gdXNlcmNvbnRyaWJzWzBdITtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKSkge1xuXHRcdFx0XHRlbGVtZW50LnByZXBlbmQoZ2V0TGFzdEFjdGl2ZU1hcmtlcih0aW1lc3RhbXAsIGZhbHNlKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7d2hvSXNBY3RpdmV9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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VixNQUFNYSxLQUFhakUsa0JBQWtCLENBQUEsR0FBQStHO0FBQUEsVUFBQTtBQUEzRCxhQUFBRCxXQUFBMUMsRUFBQSxHQUFBLEVBQUEyQyxTQUFBRCxXQUFBekMsRUFBQSxHQUFBQyxRQUE4RDtBQUFBLGdCQUFuREUsVUFBQXVDLE9BQUF0QztBQUNWRCxrQkFBUXdDLFFBQVF0RSxvQkFBb0JDLFdBQVcsS0FBSyxDQUFDO1FBQ3REO01BQUEsU0FBQTRDLEtBQUE7QUFBQXVCLG1CQUFBdEIsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXVCLG1CQUFBckIsRUFBQTtNQUFBO0lBQ0QsQ0FBQztFQUNGO0FBQ0Q7O0FMN0ZBLElBQUk5RCxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixLQUFLLEdBQUc7QUFDNUMsUUFBQSxHQUFLL0IsbUJBQUFtSCxTQUFRLEVBQUViLEtBQUtqRCxXQUFXO0FBQ2hDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIk92ZXJBWWVhciIsICJsb2NhbGl6ZSIsICJlbiIsICJUaGlzV2VlayIsICJUaGlzTW9udGgiLCAiVGhpc1NlYXNvbiIsICJUaGlzU2VtaXllYXIiLCAiVGhpc1llYXIiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIldyYXBwZXIiLCAicHJvcHMiLCAidGltZVNwYW4iLCAiaW5uZXJFbGVtZW50IiwgImNsYXNzTmFtZSIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiVGFnIiwgIl9nZXRNZXNzYWdlIiwgImluZGljYXRvciIsICJpY29uQ2xhc3NOYW1lIiwgInRleHRDbGFzc05hbWUiLCAiRnJhZ21lbnQiLCAidGl0bGUiLCAiZ2V0TGFzdEFjdGl2ZU1hcmtlciIsICJ0aW1lc3RhbXAiLCAiZGF0ZSIsICJEYXRlIiwgInBhcnNlIiwgIm5vdyIsICJkaWZmIiwgIk1hdGgiLCAiZmxvb3IiLCAid2hvSXNBY3RpdmUiLCAiJGJvZHkiLCAidXNlcm5hbWVzIiwgIiRlbGVtZW50cyIsICJ3Z0FjdGlvbiIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAibG9jYWxpemVkVXNlck5hbWVzcGFjZSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInV0aWwiLCAiJGNvbnRlbnQiLCAiZmluZCIsICJqb2luIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJfJGVsZW1lbnQkYXR0ciIsICJlbGVtZW50IiwgInZhbHVlIiwgIiRlbGVtZW50IiwgIiQiLCAidXNlclJlZ2V4IiwgIlJlZ0V4cCIsICJ1c2VybmFtZU1hdGNoQXJyYXkiLCAiZGVjb2RlVVJJIiwgImF0dHIiLCAibWF0Y2giLCAidXNlcm5hbWUiLCAiaW5kZXgiLCAiaW5kZXhPZiIsICJkYXRhIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImJhc2VQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJsaXN0IiwgInVjbGltaXQiLCAiX2l0ZXJhdG9yMyIsICJTZXQiLCAiX3N0ZXAzIiwgInBhcmFtcyIsICJ1Y3VzZXIiLCAidGhlbiIsICJyZXN1bHQiLCAidXNlcmNvbnRyaWJzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImluc2VydEFmdGVyIiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJwYWdlTmFtZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJwcmVwZW5kIiwgImdldEJvZHkiXQp9Cg==
