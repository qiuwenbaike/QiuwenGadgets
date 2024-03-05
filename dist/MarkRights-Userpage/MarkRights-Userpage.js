/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.css}
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocationReader}
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

// dist/MarkRights-Userpage/MarkRights-Userpage.js
var _mw$config$get;
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
//! src/MarkRights-Userpage/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
var WG_SKIN = mw.config.get("skin");
var WG_RELEVANT_USER_NAME = (_mw$config$get = mw.config.get("wgRelevantUserName")) !== null && _mw$config$get !== void 0 ? _mw$config$get : "";
//! src/MarkRights-Userpage/options.json
var mountPointSelector = "#footer-info,.page-info";
var version = 1.1;
//! src/MarkRights-Userpage/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("MarkRights-Userpage/".concat(version));
//! src/MarkRights-Userpage/modules/appendIcon.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var elementWrap = (spanClass, innerElement) => {
  const className = ["gadget-markrights_userpage", "gadget-markrights_userpage__".concat(spanClass)];
  if (WG_SKIN === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      className
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(WG_SKIN) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      className
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className
  }, innerElement);
};
var appendIcon = (indicatorText, spanClass) => {
  var _document$querySelect;
  if (spanClass === "unknown" || !indicatorText) {
    return;
  }
  const indicator = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: ["gadget-markrights_userpage__icon", "gadget-markrights_userpage__icon__".concat(spanClass)],
    title: indicatorText
  }), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: "gadget-markrights_userpage__text"
  }, indicatorText));
  const tag = elementWrap(spanClass, indicator);
  (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(tag);
};
//! src/MarkRights-Userpage/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    qiuwen: (0, import_ext_gadget3.localize)({
      en: "Webmaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    steward: (0, import_ext_gadget3.localize)({
      en: "Steward",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    checkuser: (0, import_ext_gadget3.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    suppress: (0, import_ext_gadget3.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget3.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget3.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget3.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    transwiki: (0, import_ext_gadget3.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget3.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autoreviewer: (0, import_ext_gadget3.localize)({
      en: "Exempted from page patrol",
      "zh-hans": "巡查豁免",
      "zh-hant": "巡查豁免"
    }),
    senioreditor: (0, import_ext_gadget3.localize)({
      en: "Senior Editor",
      "zh-hans": "资深编者",
      "zh-hant": "資深編者"
    }),
    eventsponsor: (0, import_ext_gadget3.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget3.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget3.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget3.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget3.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    bot: (0, import_ext_gadget3.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget3.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "ipblock-exempt": (0, import_ext_gadget3.localize)({
      en: "Exempted from IP blocks",
      "zh-hans": "IP封禁豁免",
      "zh-hant": "IP封鎖豁免"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkRights-Userpage/modules/core.ts
var getPermissions = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    if (!WG_RELEVANT_USER_NAME) {
      return;
    }
    try {
      const listUsersParams = {
        action: "query",
        format: "json",
        formatversion: "2",
        list: "users",
        ususers: WG_RELEVANT_USER_NAME,
        usprop: "groups"
      };
      const {
        query
      } = yield api.get(listUsersParams);
      const [{
        groups
      }] = query.users;
      var _iterator2 = _createForOfIteratorHelper(groups), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const group = _step2.value;
          if (["*", "user", "autoconfirmed", "rnrsverify-confirmed"].includes(group)) {
            continue;
          } else if (group === "bot" && SYSTEM_SCRIPT_LIST.includes(WG_RELEVANT_USER_NAME)) {
            continue;
          } else if (WEBMASTER_LIST.includes(WG_RELEVANT_USER_NAME) || group === "qiuwen") {
            appendIcon(getMessage("qiuwen"), "qiuwen");
          } else if (groups.includes(group)) {
            appendIcon(getMessage(group), group);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } catch {
    }
  });
  return function getPermissions2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/MarkRights-Userpage/MarkRights-Userpage.ts
if (WG_RELEVANT_USER_NAME && mw.config.get("wgNamespaceNumber") === 2 && mw.config.get("wgAction") === "view") {
  const relevantUserPageName = new mw.Title(WG_RELEVANT_USER_NAME, 2).toText();
  const pageName = new mw.Title(mw.config.get("wgPageName")).toText();
  if (relevantUserPageName === pageName) {
    void getPermissions();
  }
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9hcGkudHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9hcHBlbmRJY29uLnRzeCIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL01hcmtSaWdodHMtVXNlcnBhZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuY29uc3QgV0dfU0tJTiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcbmNvbnN0IFdHX1JFTEVWQU5UX1VTRVJfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFVzZXJOYW1lJykgPz8gJyc7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfU0tJTiwgV0dfUkVMRVZBTlRfVVNFUl9OQU1FfTtcbiIsICJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IDEuMVxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya1JpZ2h0cy1Vc2VycGFnZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHtXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoc3BhbkNsYXNzOiBVc2VyUmlnaHRzLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjbGFzc05hbWUgPSBbJ2dhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlJywgYGdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX18ke3NwYW5DbGFzc31gXTtcblxuXHRpZiAoV0dfU0tJTiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aW5uZXJFbGVtZW50fTwvc2VjdGlvbj47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoV0dfU0tJTikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9kaXY+O1xufTtcblxuY29uc3QgYXBwZW5kSWNvbiA9IChpbmRpY2F0b3JUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQsIHNwYW5DbGFzczogVXNlclJpZ2h0cyB8ICd1bmtub3duJyk6IHZvaWQgPT4ge1xuXHRpZiAoc3BhbkNsYXNzID09PSAndW5rbm93bicgfHwgIWluZGljYXRvclRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgaW5kaWNhdG9yID0gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb24nLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb25fXyR7c3BhbkNsYXNzfWBdfVxuXHRcdFx0XHR0aXRsZT17aW5kaWNhdG9yVGV4dH1cblx0XHRcdC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fdGV4dFwiPntpbmRpY2F0b3JUZXh0fTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcblx0Y29uc3QgdGFnID0gZWxlbWVudFdyYXAoc3BhbkNsYXNzLCBpbmRpY2F0b3IpO1xuXHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0gYXMgSFRNTEVsZW1lbnQpPy5wcmVwZW5kKHRhZyk7XG59O1xuXG5leHBvcnQge2FwcGVuZEljb259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRxaXV3ZW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VibWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0XHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdH0pLFxuXHRcdHN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHRjaGVja3VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdHN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdHN5c29wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdCdpbnRlcmZhY2UtYWRtaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHR0cmFuc3dpa2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW1wb3J0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+85YWl6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WMr+WFpeiAhScsXG5cdFx0fSksXG5cdFx0cGF0cm9sbGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcicsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRhdXRvcmV2aWV3ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwYWdlIHBhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l6LGB5YWNJyxcblx0XHR9KSxcblx0XHRzZW5pb3JlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VuaW9yIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfotYTmt7HnvJbogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6LOH5rex57eo6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfUkVMRVZBTlRfVVNFUl9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHthcHBlbmRJY29ufSBmcm9tICcuL2FwcGVuZEljb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKCFXR19SRUxFVkFOVF9VU0VSX05BTUUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IGxpc3RVc2Vyc1BhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bGlzdDogJ3VzZXJzJyxcblx0XHRcdHVzdXNlcnM6IFdHX1JFTEVWQU5UX1VTRVJfTkFNRSxcblx0XHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdFx0fTtcblx0XHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChsaXN0VXNlcnNQYXJhbXMpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBbe2dyb3Vwc31dOiBbe2dyb3VwczogVXNlclJpZ2h0c1tdfV0gPSBxdWVyeS51c2VycztcblxuXHRcdGZvciAoY29uc3QgZ3JvdXAgb2YgZ3JvdXBzKSB7XG5cdFx0XHRpZiAoWycqJywgJ3VzZXInLCAnYXV0b2NvbmZpcm1lZCcsICdybnJzdmVyaWZ5LWNvbmZpcm1lZCddLmluY2x1ZGVzKGdyb3VwKSkge1xuXHRcdFx0XHRjb250aW51ZTsgLy8gRG8gbm90IHNob3cgaW1wbGljaXQgZ3JvdXBzXG5cdFx0XHR9IGVsc2UgaWYgKGdyb3VwID09PSAnYm90JyAmJiBTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMoV0dfUkVMRVZBTlRfVVNFUl9OQU1FKSkge1xuXHRcdFx0XHRjb250aW51ZTsgLy8gQWxyZWFkeSBzaG93biBpbiBHZW9Mb2NhdGlvblZpZXdlclxuXHRcdFx0fSBlbHNlIGlmIChXRUJNQVNURVJfTElTVC5pbmNsdWRlcyhXR19SRUxFVkFOVF9VU0VSX05BTUUpIHx8IGdyb3VwID09PSAncWl1d2VuJykge1xuXHRcdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ3FpdXdlbicpLCAncWl1d2VuJyk7XG5cdFx0XHR9IGVsc2UgaWYgKGdyb3Vwcy5pbmNsdWRlcyhncm91cCkpIHtcblx0XHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKGdyb3VwKSwgZ3JvdXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxufTtcblxuZXhwb3J0IHtnZXRQZXJtaXNzaW9uc307XG4iLCAiaW1wb3J0IHtXR19SRUxFVkFOVF9VU0VSX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldFBlcm1pc3Npb25zfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChXR19SRUxFVkFOVF9VU0VSX05BTUUgJiYgbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gMiAmJiBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpID09PSAndmlldycpIHtcblx0Y29uc3QgcmVsZXZhbnRVc2VyUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZShXR19SRUxFVkFOVF9VU0VSX05BTUUsIDIpLnRvVGV4dCgpO1xuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSkudG9UZXh0KCk7XG5cdGlmIChyZWxldmFudFVzZXJQYWdlTmFtZSA9PT0gcGFnZU5hbWUpIHtcblx0XHR2b2lkIGdldFBlcm1pc3Npb25zKCk7XG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7QUFFRCxJQUFNQyxpQkFBMkIsQ0FBQyxVQUFVLHVCQUF1QixtQkFBbUI7QUFDdEYsSUFBTUMsVUFBVUMsR0FBR0MsT0FBT0MsSUFBSSxNQUFNO0FBQ3BDLElBQU1DLHlCQUFBQyxpQkFBZ0NKLEdBQUdDLE9BQU9DLElBQUksb0JBQW9CLE9BQUEsUUFBQUUsbUJBQUEsU0FBQUEsaUJBQUs7O0FDWjVFLElBQUFDLHFCQUFzQjtBQUN0QixJQUFBQyxVQUFXOztBQ0RaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLHVCQUFBQyxPQUF5Q0wsT0FBTyxDQUFFOztBQ0Z0RSxJQUFBTSxxQkFBa0NDLFFBQUFMLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBSWxDLElBQU1NLGNBQWNBLENBQUNDLFdBQXVCQyxpQkFBK0I7QUFDMUUsUUFBTUMsWUFBWSxDQUFDLDhCQUFBLCtCQUFBTixPQUE2REksU0FBUyxDQUFBO0FBRXpGLE1BQUloQixZQUFZLFdBQVc7QUFDMUIsV0FBT2EsbUNBQUFNLFFBQUFDLGNBQUMsV0FBQTtNQUFRRjtJQUFBLEdBQXVCRCxZQUFhO0VBQ3JELFdBQVcsQ0FBQyxVQUFVLGVBQWUsUUFBUSxFQUFFSSxTQUFTckIsT0FBTyxLQUFL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QUtzRSxVQUFVLFVBQVU7QUFDaEZsRCx1QkFBVzZCLFdBQVcsUUFBUSxHQUFHLFFBQVE7VUFDMUMsV0FBV2EsT0FBTzdDLFNBQVNxRCxLQUFLLEdBQUc7QUFDbENsRCx1QkFBVzZCLFdBQVdxQixLQUFLLEdBQUdBLEtBQUs7VUFDcEM7UUFDRDtNQUFBLFNBQUFFLEtBQUE7QUFBQVIsbUJBQUFTLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFSLG1CQUFBVSxFQUFBO01BQUE7SUFDRCxRQUFRO0lBQUM7RUFDVixDQUFBO0FBQUEsU0FBQSxTQTlCTXZCLGtCQUFBO0FBQUEsV0FBQUMsS0FBQXVCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNITixJQUFJNUUseUJBQXlCSCxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixNQUFNLEtBQUtGLEdBQUdDLE9BQU9DLElBQUksVUFBVSxNQUFNLFFBQVE7QUFDOUcsUUFBTThFLHVCQUErQixJQUFJaEYsR0FBR2lGLE1BQU05RSx1QkFBdUIsQ0FBQyxFQUFFK0UsT0FBTztBQUNuRixRQUFNQyxXQUFtQixJQUFJbkYsR0FBR2lGLE1BQU1qRixHQUFHQyxPQUFPQyxJQUFJLFlBQVksQ0FBQyxFQUFFZ0YsT0FBTztBQUMxRSxNQUFJRix5QkFBeUJHLFVBQVU7QUFDdEMsU0FBSzdCLGVBQWU7RUFDckI7QUFDRDsiLAogICJuYW1lcyI6IFsiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgIldHX1NLSU4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19SRUxFVkFOVF9VU0VSX05BTUUiLCAiX213JGNvbmZpZyRnZXQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJlbGVtZW50V3JhcCIsICJzcGFuQ2xhc3MiLCAiaW5uZXJFbGVtZW50IiwgImNsYXNzTmFtZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJhcHBlbmRJY29uIiwgImluZGljYXRvclRleHQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImluZGljYXRvciIsICJGcmFnbWVudCIsICJ0aXRsZSIsICJ0YWciLCAicXVlcnlTZWxlY3RvckFsbCIsICJwcmVwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAicWl1d2VuIiwgImxvY2FsaXplIiwgImVuIiwgInN0ZXdhcmQiLCAiY2hlY2t1c2VyIiwgInN1cHByZXNzIiwgInN5c29wIiwgInRlbXBsYXRlZWRpdG9yIiwgInRyYW5zd2lraSIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgInNlbmlvcmVkaXRvciIsICJldmVudHNwb25zb3IiLCAiY29uZmlybWVkIiwgImF1dG9jb25maXJtZWQiLCAiYm90IiwgImZsb29kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRQZXJtaXNzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImxpc3RVc2Vyc1BhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJ1c3VzZXJzIiwgInVzcHJvcCIsICJxdWVyeSIsICJncm91cHMiLCAidXNlcnMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZ3JvdXAiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicmVsZXZhbnRVc2VyUGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInBhZ2VOYW1lIl0KfQo=
