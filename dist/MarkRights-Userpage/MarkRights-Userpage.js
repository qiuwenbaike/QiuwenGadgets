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
//! src/MarkRights-Userpage/modules/appendIcon.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var elementWrap = (spanClass, innerElement) => {
  const className = ["gadget-markrights_userpage", "gadget-markrights_userpage__".concat(spanClass)];
  if (WG_SKIN === "citizen") {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("section", {
      className
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(WG_SKIN) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
      className
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    className
  }, innerElement);
};
var appendIcon = (indicatorText, spanClass) => {
  var _document$querySelect;
  if (spanClass === "unknown" || !indicatorText) {
    return;
  }
  const indicator = /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
    className: ["gadget-markrights_userpage__icon", "gadget-markrights_userpage__icon__".concat(spanClass)],
    title: indicatorText
  }), /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
    className: "gadget-markrights_userpage__text"
  }, indicatorText));
  const tag = elementWrap(spanClass, indicator);
  (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(tag);
};
//! src/MarkRights-Userpage/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Webmaster: (0, import_ext_gadget2.localize)({
      en: "Webmaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    Steward: (0, import_ext_gadget2.localize)({
      en: "Steward",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    CheckUser: (0, import_ext_gadget2.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    Suppress: (0, import_ext_gadget2.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    SysOp: (0, import_ext_gadget2.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    InterfaceAdmin: (0, import_ext_gadget2.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    TemplateEditor: (0, import_ext_gadget2.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    Transwiki: (0, import_ext_gadget2.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    Patroller: (0, import_ext_gadget2.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    AutoReviewer: (0, import_ext_gadget2.localize)({
      en: "Exempted from page patrol",
      "zh-hans": "巡查豁免",
      "zh-hant": "巡查豁免"
    }),
    SeniorEditor: (0, import_ext_gadget2.localize)({
      en: "Senior Editor",
      "zh-hans": "资深编者",
      "zh-hant": "資深編者"
    }),
    EventSponsor: (0, import_ext_gadget2.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    MassMessageSender: (0, import_ext_gadget2.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    Confirmed: (0, import_ext_gadget2.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    AutoConfirmed: (0, import_ext_gadget2.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    RNRSVerifyExempt: (0, import_ext_gadget2.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    Bot: (0, import_ext_gadget2.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    Flood: (0, import_ext_gadget2.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    IPBlockExempt: (0, import_ext_gadget2.localize)({
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
var import_ext_gadget3 = require("ext.gadget.Util");
var getPermissions = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    if (!WG_RELEVANT_USER_NAME) {
      return;
    }
    const api = (0, import_ext_gadget3.initMwApi)("MarkRights-Userpage/1.0");
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
      if (WEBMASTER_LIST.includes(WG_RELEVANT_USER_NAME) || groups.includes("qiuwen")) {
        appendIcon(getMessage("Webmaster"), "qiuwen");
      }
      if (groups.includes("steward")) {
        appendIcon(getMessage("Steward"), "steward");
      }
      if (groups.includes("checkuser")) {
        appendIcon(getMessage("CheckUser"), "checkuser");
      }
      if (groups.includes("suppress")) {
        appendIcon(getMessage("Suppress"), "suppress");
      }
      if (groups.includes("sysop")) {
        appendIcon(getMessage("SysOp"), "sysop");
      }
      if (groups.includes("interface-admin")) {
        appendIcon(getMessage("InterfaceAdmin"), "interface-admin");
      }
      if (groups.includes("templateeditor")) {
        appendIcon(getMessage("TemplateEditor"), "templateeditor");
      }
      if (groups.includes("transwiki")) {
        appendIcon(getMessage("Transwiki"), "transwiki");
      }
      if (groups.includes("patroller")) {
        appendIcon(getMessage("Patroller"), "patroller");
      }
      if (groups.includes("autoreviewer")) {
        appendIcon(getMessage("AutoReviewer"), "autoreviewer");
      }
      if (groups.includes("senioreditor")) {
        appendIcon(getMessage("SeniorEditor"), "senioreditor");
      }
      if (groups.includes("massmessage-sender")) {
        appendIcon(getMessage("MassMessageSender"), "massmessage-sender");
      }
      if (groups.includes("autoconfirmed")) {
        appendIcon(getMessage("AutoConfirmed"), "autoconfirmed");
      } else if (groups.includes("confirmed")) {
        appendIcon(getMessage("Confirmed"), "confirmed");
      }
      if (groups.includes("rnrsverify-exempt")) {
        appendIcon(getMessage("RNRSVerifyExempt"), "rnrsverify-exempt");
      }
      if (groups.includes("bot") && !SYSTEM_SCRIPT_LIST.includes(WG_RELEVANT_USER_NAME)) {
        appendIcon(getMessage("Bot"), "bot");
      }
      if (groups.includes("flood")) {
        appendIcon(getMessage("Flood"), "flood");
      }
      if (groups.includes("ipblock-exempt")) {
        appendIcon(getMessage("IPBlockExempt"), "ipblock-exempt");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9hcHBlbmRJY29uLnRzeCIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL01hcmtSaWdodHMtVXNlcnBhZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuY29uc3QgV0dfU0tJTiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcbmNvbnN0IFdHX1JFTEVWQU5UX1VTRVJfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFVzZXJOYW1lJykgPz8gJyc7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfU0tJTiwgV0dfUkVMRVZBTlRfVVNFUl9OQU1FfTtcbiIsICJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHtXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoc3BhbkNsYXNzOiBVc2VyUmlnaHRzLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCBjbGFzc05hbWUgPSBbJ2dhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlJywgYGdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX18ke3NwYW5DbGFzc31gXTtcblxuXHRpZiAoV0dfU0tJTiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aW5uZXJFbGVtZW50fTwvc2VjdGlvbj47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoV0dfU0tJTikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9kaXY+O1xufTtcblxuY29uc3QgYXBwZW5kSWNvbiA9IChpbmRpY2F0b3JUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQsIHNwYW5DbGFzczogVXNlclJpZ2h0cyB8ICd1bmtub3duJyk6IHZvaWQgPT4ge1xuXHRpZiAoc3BhbkNsYXNzID09PSAndW5rbm93bicgfHwgIWluZGljYXRvclRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgaW5kaWNhdG9yID0gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb24nLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb25fXyR7c3BhbkNsYXNzfWBdfVxuXHRcdFx0XHR0aXRsZT17aW5kaWNhdG9yVGV4dH1cblx0XHRcdC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fdGV4dFwiPntpbmRpY2F0b3JUZXh0fTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcblx0Y29uc3QgdGFnID0gZWxlbWVudFdyYXAoc3BhbkNsYXNzLCBpbmRpY2F0b3IpO1xuXHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0gYXMgSFRNTEVsZW1lbnQpPy5wcmVwZW5kKHRhZyk7XG59O1xuXG5leHBvcnQge2FwcGVuZEljb259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRXZWJtYXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VibWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0XHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdH0pLFxuXHRcdFN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHRDaGVja1VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdFN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdFN5c09wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdEludGVyZmFjZUFkbWluOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdFRlbXBsYXRlRWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHRUcmFuc3dpa2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW1wb3J0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+85YWl6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WMr+WFpeiAhScsXG5cdFx0fSksXG5cdFx0UGF0cm9sbGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcicsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRBdXRvUmV2aWV3ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwYWdlIHBhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l6LGB5YWNJyxcblx0XHR9KSxcblx0XHRTZW5pb3JFZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VuaW9yIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfotYTmt7HnvJbogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6LOH5rex57eo6ICFJyxcblx0XHR9KSxcblx0XHRFdmVudFNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHRNYXNzTWVzc2FnZVNlbmRlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Q29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdEF1dG9Db25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRSTlJTVmVyaWZ5RXhlbXB0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHRCb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdEZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0SVBCbG9ja0V4ZW1wdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfUkVMRVZBTlRfVVNFUl9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwcGVuZEljb259IGZyb20gJy4vYXBwZW5kSWNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuZXhwb3J0IGNvbnN0IGdldFBlcm1pc3Npb25zID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRpZiAoIVdHX1JFTEVWQU5UX1VTRVJfTkFNRSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnTWFya1JpZ2h0cy1Vc2VycGFnZS8xLjAnKTtcblx0dHJ5IHtcblx0XHRjb25zdCBsaXN0VXNlcnNQYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0XHR1c3VzZXJzOiBXR19SRUxFVkFOVF9VU0VSX05BTUUsXG5cdFx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdH07XG5cdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQobGlzdFVzZXJzUGFyYW1zKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0Y29uc3QgW3tncm91cHN9XTogW3tncm91cHM6IFVzZXJSaWdodHNbXX1dID0gcXVlcnkudXNlcnM7XG5cdFx0aWYgKFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKFdHX1JFTEVWQU5UX1VTRVJfTkFNRSkgfHwgZ3JvdXBzLmluY2x1ZGVzKCdxaXV3ZW4nKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdXZWJtYXN0ZXInKSwgJ3FpdXdlbicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzdGV3YXJkJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnU3Rld2FyZCcpLCAnc3Rld2FyZCcpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdjaGVja3VzZXInKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdDaGVja1VzZXInKSwgJ2NoZWNrdXNlcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzdXBwcmVzcycpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1N1cHByZXNzJyksICdzdXBwcmVzcycpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1N5c09wJyksICdzeXNvcCcpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdpbnRlcmZhY2UtYWRtaW4nKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdJbnRlcmZhY2VBZG1pbicpLCAnaW50ZXJmYWNlLWFkbWluJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3RlbXBsYXRlZWRpdG9yJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnVGVtcGxhdGVFZGl0b3InKSwgJ3RlbXBsYXRlZWRpdG9yJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3RyYW5zd2lraScpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1RyYW5zd2lraScpLCAndHJhbnN3aWtpJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1BhdHJvbGxlcicpLCAncGF0cm9sbGVyJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2F1dG9yZXZpZXdlcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0F1dG9SZXZpZXdlcicpLCAnYXV0b3Jldmlld2VyJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3NlbmlvcmVkaXRvcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1NlbmlvckVkaXRvcicpLCAnc2VuaW9yZWRpdG9yJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ21hc3NtZXNzYWdlLXNlbmRlcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ01hc3NNZXNzYWdlU2VuZGVyJyksICdtYXNzbWVzc2FnZS1zZW5kZXInKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0F1dG9Db25maXJtZWQnKSwgJ2F1dG9jb25maXJtZWQnKTtcblx0XHR9IGVsc2UgaWYgKGdyb3Vwcy5pbmNsdWRlcygnY29uZmlybWVkJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnQ29uZmlybWVkJyksICdjb25maXJtZWQnKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygncm5yc3ZlcmlmeS1leGVtcHQnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdSTlJTVmVyaWZ5RXhlbXB0JyksICdybnJzdmVyaWZ5LWV4ZW1wdCcpO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHRncm91cHMuaW5jbHVkZXMoJ2JvdCcpICYmXG5cdFx0XHQhU1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKFdHX1JFTEVWQU5UX1VTRVJfTkFNRSkgLy8gQWxyZWFkeSBzaG93biBpbiBHZW9Mb2NhdGlvblZpZXdlclxuXHRcdCkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdCb3QnKSwgJ2JvdCcpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdmbG9vZCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0Zsb29kJyksICdmbG9vZCcpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdpcGJsb2NrLWV4ZW1wdCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0lQQmxvY2tFeGVtcHQnKSwgJ2lwYmxvY2stZXhlbXB0Jyk7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG59O1xuIiwgImltcG9ydCB7V0dfUkVMRVZBTlRfVVNFUl9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uc30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAoV0dfUkVMRVZBTlRfVVNFUl9OQU1FICYmIG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDIgJiYgbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnKSB7XG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUoV0dfUkVMRVZBTlRfVVNFUl9OQU1FLCAyKS50b1RleHQoKTtcblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZShtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykpLnRvVGV4dCgpO1xuXHRpZiAocmVsZXZhbnRVc2VyUGFnZU5hbWUgPT09IHBhZ2VOYW1lKSB7XG5cdFx0dm9pZCBnZXRQZXJtaXNzaW9ucygpO1xuXHR9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsaUJBQTJCLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1CO0FBQ3RGLElBQU1DLFVBQVVDLEdBQUdDLE9BQU9DLElBQUksTUFBTTtBQUNwQyxJQUFNQyx5QkFBQUMsaUJBQWdDSixHQUFHQyxPQUFPQyxJQUFJLG9CQUFvQixPQUFBLFFBQUFFLG1CQUFBLFNBQUFBLGlCQUFLOztBQ1o1RSxJQUFBQyxxQkFBc0I7O0FDQXZCLElBQUFDLG9CQUFrQ0MsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFJbEMsSUFBTUMsY0FBY0EsQ0FBQ0MsV0FBdUJDLGlCQUErQjtBQUMxRSxRQUFNQyxZQUFZLENBQUMsOEJBQUEsK0JBQUFDLE9BQTZESCxTQUFTLENBQUE7QUFFekYsTUFBSVgsWUFBWSxXQUFXO0FBQzFCLFdBQU9PLGtDQUFBUSxRQUFBQyxjQUFDLFdBQUE7TUFBUUg7SUFBQSxHQUF1QkQsWUFBYTtFQUNyRCxXQUFXLENBQUMsVUFBVSxlQUFlLFFBQVEsRUFBRUssU0FBU2pCLE9BQU8sS0FBS2tCLFNBQVNDLGNBQWMsZ0JBQWdCLEdBQUc7QUFDN0csV0FBT1osa0NBQUFRLFFBQUFDLGNBQUMsTUFBQTtNQUFHSDtJQUFBLEdBQXVCRCxZQUFhO0VBQ2hEO0FBQ0EsU0FBT0wsa0NBQUFRLFFBQUFDLGNBQUMsT0FBQTtJQUFJSDtFQUFBLEdBQXVCRCxZQUFhO0FBQ2pEO0FBRUEsSUFBTVEsYUFBYUEsQ0FBQ0MsZUFBbUNWLGNBQTRDO0FBQUEsTUFBQVc7QUFDbEcsTUFBSVgsY0FBYyxhQUFhLENBQUNVLGVBQWU7QUFDOUM7RUFDRDtBQUNBLFFBQU1FLFlBQ0xoQixrQ0FBQVEsUUFBQUMsY0FBQVQsa0JBQUFRLFFBQUFTLFVBQUEsTUFDQ2pCLGtDQUFBUSxRQUFBQyxjQUFDLFFBQUE7SUFDQUgsV0FBVyxDQUFDLG9DQUFBLHFDQUFBQyxPQUF5RUgsU0FBUyxDQUFBO0lBQzlGYyxPQUFPSjtFQUFBLENBQ1IsR0FDQWQsa0NBQUFRLFFBQUFDLGNBQUMsUUFBQTtJQUFLSCxXQUFVO0VBQUEsR0FBb0NRLGFBQWMsQ0FDbkU7QUFFRCxRQUFNSyxNQUFNaEIsWUFBWUMsV0FBV1ksU0FBUztBQUMzQyxHQUFBRCx3QkFBQUosU0FBU1MsaUJBQXlCckIsa0JBQWtCLEVBQUUsQ0FBQyxPQUFBLFFBQUFnQiwwQkFBQSxVQUF2REEsc0JBQTBFTSxRQUFRRixHQUFHO0FBQ3ZGOztBQy9CQSxJQUFBRyxxQkFBdUJwQixRQUFBLGlCQUFBO0FBRXZCLElBQU1xQixrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxZQUFBLEdBQVdGLG1CQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU0wsbUJBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsWUFBQSxHQUFXTixtQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxXQUFBLEdBQVVQLG1CQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLFFBQUEsR0FBT1IsbUJBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESyxpQkFBQSxHQUFnQlQsbUJBQUFHLFVBQVM7TUFDeEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRE0saUJBQUEsR0FBZ0JWLG1CQUFBRyxVQUFTO01BQ3hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RPLFlBQUEsR0FBV1gsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFEsWUFBQSxHQUFXWixtQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEUyxlQUFBLEdBQWNiLG1CQUFBRyxVQUFTO01BQ3RCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RVLGVBQUEsR0FBY2QsbUJBQUFHLFVBQVM7TUFDdEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFcsZUFBQSxHQUFjZixtQkFBQUcsVUFBUztNQUN0QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEWSxvQkFBQSxHQUFtQmhCLG1CQUFBRyxVQUFTO01BQzNCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RhLFlBQUEsR0FBV2pCLG1CQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RjLGdCQUFBLEdBQWVsQixtQkFBQUcsVUFBUztNQUN2QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEZSxtQkFBQSxHQUFrQm5CLG1CQUFBRyxVQUFTO01BQzFCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RnQixNQUFBLEdBQUtwQixtQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RpQixRQUFBLEdBQU9yQixtQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RrQixnQkFBQSxHQUFldEIsbUJBQUFHLFVBQVM7TUFDdkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTW1CLGVBQWV0QixnQkFBZ0I7QUFFckMsSUFBTXVCLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDdEdBLElBQUFDLHFCQUF3QjlDLFFBQUEsaUJBQUE7QUFFakIsSUFBTStDLGlCQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWlCLGFBQTJCO0FBQ3hELFFBQUksQ0FBQ3RELHVCQUF1QjtBQUMzQjtJQUNEO0FBQ0EsVUFBTXVELE9BQUEsR0FBY0osbUJBQUFLLFdBQVUseUJBQXlCO0FBQ3ZELFFBQUk7QUFDSCxZQUFNQyxrQkFBdUM7UUFDNUNDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxlQUFlO1FBQ2ZDLE1BQU07UUFDTkMsU0FBUzlEO1FBQ1QrRCxRQUFRO01BQ1Q7QUFDQSxZQUFNO1FBQUNDO01BQUssSUFBQSxNQUFVVCxJQUFJeEQsSUFBSTBELGVBQWU7QUFFN0MsWUFBTSxDQUFDO1FBQUNRO01BQU0sQ0FBQyxJQUE4QkQsTUFBTUU7QUFDbkQsVUFBSXZFLGVBQWVrQixTQUFTYixxQkFBcUIsS0FBS2lFLE9BQU9wRCxTQUFTLFFBQVEsR0FBRztBQUNoRkcsbUJBQVdpQyxXQUFXLFdBQVcsR0FBRyxRQUFRO01BQzdDO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLFNBQVMsR0FBRztBQUMvQkcsbUJBQVdpQyxXQUFXLFNBQVMsR0FBRyxTQUFTO01BQzVDO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLFdBQVcsR0FBRztBQUNqQ0csbUJBQVdpQyxXQUFXLFdBQVcsR0FBRyxXQUFXO01BQ2hEO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLFVBQVUsR0FBRztBQUNoQ0csbUJBQVdpQyxXQUFXLFVBQVUsR0FBRyxVQUFVO01BQzlDO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLE9BQU8sR0FBRztBQUM3QkcsbUJBQVdpQyxXQUFXLE9BQU8sR0FBRyxPQUFPO01BQ3hDO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLGlCQUFpQixHQUFHO0FBQ3ZDRyxtQkFBV2lDLFdBQVcsZ0JBQWdCLEdBQUcsaUJBQWlCO01BQzNEO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLGdCQUFnQixHQUFHO0FBQ3RDRyxtQkFBV2lDLFdBQVcsZ0JBQWdCLEdBQUcsZ0JBQWdCO01BQzFEO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLFdBQVcsR0FBRztBQUNqQ0csbUJBQVdpQyxXQUFXLFdBQVcsR0FBRyxXQUFXO01BQ2hEO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLFdBQVcsR0FBRztBQUNqQ0csbUJBQVdpQyxXQUFXLFdBQVcsR0FBRyxXQUFXO01BQ2hEO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLGNBQWMsR0FBRztBQUNwQ0csbUJBQVdpQyxXQUFXLGNBQWMsR0FBRyxjQUFjO01BQ3REO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLGNBQWMsR0FBRztBQUNwQ0csbUJBQVdpQyxXQUFXLGNBQWMsR0FBRyxjQUFjO01BQ3REO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLG9CQUFvQixHQUFHO0FBQzFDRyxtQkFBV2lDLFdBQVcsbUJBQW1CLEdBQUcsb0JBQW9CO01BQ2pFO0FBQ0EsVUFBSWdCLE9BQU9wRCxTQUFTLGVBQWUsR0FBRztBQUNyQ0csbUJBQVdpQyxXQUFXLGVBQWUsR0FBRyxlQUFlO01BQ3hELFdBQVdnQixPQUFPcEQsU0FBUyxXQUFXLEdBQUc7QUFDeENHLG1CQUFXaUMsV0FBVyxXQUFXLEdBQUcsV0FBVztNQUNoRDtBQUNBLFVBQUlnQixPQUFPcEQsU0FBUyxtQkFBbUIsR0FBRztBQUN6Q0csbUJBQVdpQyxXQUFXLGtCQUFrQixHQUFHLG1CQUFtQjtNQUMvRDtBQUNBLFVBQ0NnQixPQUFPcEQsU0FBUyxLQUFLLEtBQ3JCLENBQUNuQixtQkFBbUJtQixTQUFTYixxQkFBcUIsR0FDakQ7QUFDRGdCLG1CQUFXaUMsV0FBVyxLQUFLLEdBQUcsS0FBSztNQUNwQztBQUNBLFVBQUlnQixPQUFPcEQsU0FBUyxPQUFPLEdBQUc7QUFDN0JHLG1CQUFXaUMsV0FBVyxPQUFPLEdBQUcsT0FBTztNQUN4QztBQUNBLFVBQUlnQixPQUFPcEQsU0FBUyxnQkFBZ0IsR0FBRztBQUN0Q0csbUJBQVdpQyxXQUFXLGVBQWUsR0FBRyxnQkFBZ0I7TUFDekQ7SUFDRCxRQUFRO0lBQUM7RUFDVixDQUFBO0FBQUEsU0FBQSxTQTFFYUcsa0JBQUE7QUFBQSxXQUFBQyxLQUFBYyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDSGIsSUFBSXBFLHlCQUF5QkgsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsTUFBTSxLQUFLRixHQUFHQyxPQUFPQyxJQUFJLFVBQVUsTUFBTSxRQUFRO0FBQzlHLFFBQU1zRSx1QkFBK0IsSUFBSXhFLEdBQUd5RSxNQUFNdEUsdUJBQXVCLENBQUMsRUFBRXVFLE9BQU87QUFDbkYsUUFBTUMsV0FBbUIsSUFBSTNFLEdBQUd5RSxNQUFNekUsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLENBQUMsRUFBRXdFLE9BQU87QUFDMUUsTUFBSUYseUJBQXlCRyxVQUFVO0FBQ3RDLFNBQUtwQixlQUFlO0VBQ3JCO0FBQ0Q7IiwKICAibmFtZXMiOiBbIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJXR19TS0lOIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfUkVMRVZBTlRfVVNFUl9OQU1FIiwgIl9tdyRjb25maWckZ2V0IiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZWxlbWVudFdyYXAiLCAic3BhbkNsYXNzIiwgImlubmVyRWxlbWVudCIsICJjbGFzc05hbWUiLCAiY29uY2F0IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImFwcGVuZEljb24iLCAiaW5kaWNhdG9yVGV4dCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiaW5kaWNhdG9yIiwgIkZyYWdtZW50IiwgInRpdGxlIiwgInRhZyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJXZWJtYXN0ZXIiLCAibG9jYWxpemUiLCAiZW4iLCAiU3Rld2FyZCIsICJDaGVja1VzZXIiLCAiU3VwcHJlc3MiLCAiU3lzT3AiLCAiSW50ZXJmYWNlQWRtaW4iLCAiVGVtcGxhdGVFZGl0b3IiLCAiVHJhbnN3aWtpIiwgIlBhdHJvbGxlciIsICJBdXRvUmV2aWV3ZXIiLCAiU2VuaW9yRWRpdG9yIiwgIkV2ZW50U3BvbnNvciIsICJNYXNzTWVzc2FnZVNlbmRlciIsICJDb25maXJtZWQiLCAiQXV0b0NvbmZpcm1lZCIsICJSTlJTVmVyaWZ5RXhlbXB0IiwgIkJvdCIsICJGbG9vZCIsICJJUEJsb2NrRXhlbXB0IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0UGVybWlzc2lvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcGkiLCAiaW5pdE13QXBpIiwgImxpc3RVc2Vyc1BhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJ1c3VzZXJzIiwgInVzcHJvcCIsICJxdWVyeSIsICJncm91cHMiLCAidXNlcnMiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJwYWdlTmFtZSJdCn0K
