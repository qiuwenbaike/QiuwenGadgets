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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9hcHBlbmRJY29uLnRzeCIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL01hcmtSaWdodHMtVXNlcnBhZ2UudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuY29uc3QgV0dfU0tJTiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcbmNvbnN0IFdHX1JFTEVWQU5UX1VTRVJfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFVzZXJOYW1lJykgPz8gJyc7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfU0tJTiwgV0dfUkVMRVZBTlRfVVNFUl9OQU1FfTtcbiIsICJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge1dHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChzcGFuQ2xhc3M6IHVzZXJSaWdodHMsIGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IGNsYXNzTmFtZSA9IFsnZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfXyR7c3BhbkNsYXNzfWBdO1xuXG5cdGlmIChXR19TS0lOID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWV9Pntpbm5lckVsZW1lbnR9PC9zZWN0aW9uPjtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhXR19TS0lOKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2lubmVyRWxlbWVudH08L2xpPjtcblx0fVxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBhcHBlbmRJY29uID0gKGluZGljYXRvclRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZCwgc3BhbkNsYXNzOiB1c2VyUmlnaHRzIHwgJ3Vua25vd24nKTogdm9pZCA9PiB7XG5cdGlmIChzcGFuQ2xhc3MgPT09ICd1bmtub3duJyB8fCAhaW5kaWNhdG9yVGV4dCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBpbmRpY2F0b3IgPSAoXG5cdFx0PD5cblx0XHRcdDxzcGFuXG5cdFx0XHRcdGNsYXNzTmFtZT17WydnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9faWNvbicsIGBnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9faWNvbl9fJHtzcGFuQ2xhc3N9YF19XG5cdFx0XHRcdHRpdGxlPXtpbmRpY2F0b3JUZXh0fVxuXHRcdFx0Lz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX190ZXh0XCI+e2luZGljYXRvclRleHR9PC9zcGFuPlxuXHRcdDwvPlxuXHQpO1xuXHRjb25zdCB0YWcgPSBlbGVtZW50V3JhcChzcGFuQ2xhc3MsIGluZGljYXRvcik7XG5cdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKVswXSBhcyBIVE1MRWxlbWVudCk/LnByZXBlbmQodGFnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kSWNvbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFdlYm1hc3RlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ6ZW/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ermemVtycsXG5cdFx0fSksXG5cdFx0U3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdENoZWNrVXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0U3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0U3lzT3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0SW50ZXJmYWNlQWRtaW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0VGVtcGxhdGVFZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdFRyYW5zd2lraTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdEF1dG9SZXZpZXdlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdH0pLFxuXHRcdFNlbmlvckVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZW5pb3IgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i1hOa3see8luiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfos4fmt7Hnt6jogIUnLFxuXHRcdH0pLFxuXHRcdEV2ZW50U3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdE1hc3NNZXNzYWdlU2VuZGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRDb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0QXV0b0NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdFJOUlNWZXJpZnlFeGVtcHQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSByZWFsLW5hbWUgdmVyaWZpY2F0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflr6blkI3liLbpqZforYnosYHlhY0nLFxuXHRcdH0pLFxuXHRcdEJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Rmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHRJUEJsb2NrRXhlbXB0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNULCBXR19SRUxFVkFOVF9VU0VSX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcHBlbmRJY29ufSBmcm9tICcuL2FwcGVuZEljb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmV4cG9ydCBjb25zdCBnZXRQZXJtaXNzaW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKCFXR19SRUxFVkFOVF9VU0VSX05BTUUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ01hcmtSaWdodHMtVXNlcnBhZ2UvMS4wJyk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgbGlzdFVzZXJzUGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdFx0dXN1c2VyczogV0dfUkVMRVZBTlRfVVNFUl9OQU1FLFxuXHRcdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHR9O1xuXHRcdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KGxpc3RVc2Vyc1BhcmFtcyk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuXHRcdGNvbnN0IFt7Z3JvdXBzfV06IFt7Z3JvdXBzOiB1c2VyUmlnaHRzW119XSA9IHF1ZXJ5LnVzZXJzO1xuXHRcdGlmIChXRUJNQVNURVJfTElTVC5pbmNsdWRlcyhXR19SRUxFVkFOVF9VU0VSX05BTUUpIHx8IGdyb3Vwcy5pbmNsdWRlcygncWl1d2VuJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnV2VibWFzdGVyJyksICdxaXV3ZW4nKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3Rld2FyZCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1N0ZXdhcmQnKSwgJ3N0ZXdhcmQnKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnY2hlY2t1c2VyJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnQ2hlY2tVc2VyJyksICdjaGVja3VzZXInKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3VwcHJlc3MnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdTdXBwcmVzcycpLCAnc3VwcHJlc3MnKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdTeXNPcCcpLCAnc3lzb3AnKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnaW50ZXJmYWNlLWFkbWluJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnSW50ZXJmYWNlQWRtaW4nKSwgJ2ludGVyZmFjZS1hZG1pbicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCd0ZW1wbGF0ZWVkaXRvcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1RlbXBsYXRlRWRpdG9yJyksICd0ZW1wbGF0ZWVkaXRvcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCd0cmFuc3dpa2knKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdUcmFuc3dpa2knKSwgJ3RyYW5zd2lraScpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdwYXRyb2xsZXInKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdQYXRyb2xsZXInKSwgJ3BhdHJvbGxlcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdhdXRvcmV2aWV3ZXInKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdBdXRvUmV2aWV3ZXInKSwgJ2F1dG9yZXZpZXdlcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzZW5pb3JlZGl0b3InKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdTZW5pb3JFZGl0b3InKSwgJ3NlbmlvcmVkaXRvcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdtYXNzbWVzc2FnZS1zZW5kZXInKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdNYXNzTWVzc2FnZVNlbmRlcicpLCAnbWFzc21lc3NhZ2Utc2VuZGVyJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2F1dG9jb25maXJtZWQnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdBdXRvQ29uZmlybWVkJyksICdhdXRvY29uZmlybWVkJyk7XG5cdFx0fSBlbHNlIGlmIChncm91cHMuaW5jbHVkZXMoJ2NvbmZpcm1lZCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0NvbmZpcm1lZCcpLCAnY29uZmlybWVkJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3JucnN2ZXJpZnktZXhlbXB0JykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnUk5SU1ZlcmlmeUV4ZW1wdCcpLCAncm5yc3ZlcmlmeS1leGVtcHQnKTtcblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0Z3JvdXBzLmluY2x1ZGVzKCdib3QnKSAmJlxuXHRcdFx0IVNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyhXR19SRUxFVkFOVF9VU0VSX05BTUUpIC8vIEFscmVhZHkgc2hvd24gaW4gR2VvTG9jYXRpb25WaWV3ZXJcblx0XHQpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnQm90JyksICdib3QnKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnZmxvb2QnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdGbG9vZCcpLCAnZmxvb2QnKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnaXBibG9jay1leGVtcHQnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdJUEJsb2NrRXhlbXB0JyksICdpcGJsb2NrLWV4ZW1wdCcpO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxufTtcbiIsICJpbXBvcnQge1dHX1JFTEVWQU5UX1VTRVJfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbnN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKFdHX1JFTEVWQU5UX1VTRVJfTkFNRSAmJiBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAyICYmIG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgPT09ICd2aWV3Jykge1xuXHRjb25zdCByZWxldmFudFVzZXJQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKFdHX1JFTEVWQU5UX1VTRVJfTkFNRSwgMikudG9UZXh0KCk7XG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpKS50b1RleHQoKTtcblx0aWYgKHJlbGV2YW50VXNlclBhZ2VOYW1lID09PSBwYWdlTmFtZSkge1xuXHRcdHZvaWQgZ2V0UGVybWlzc2lvbnMoKTtcblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEscUJBQStCLENBQ3BDLFNBQ0EsUUFDQSxVQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLFVBQVUsdUJBQXVCLG1CQUFtQjtBQUN0RixJQUFNQyxVQUFVQyxHQUFHQyxPQUFPQyxJQUFJLE1BQU07QUFDcEMsSUFBTUMseUJBQUFDLGlCQUFnQ0osR0FBR0MsT0FBT0MsSUFBSSxvQkFBb0IsT0FBQSxRQUFBRSxtQkFBQSxTQUFBQSxpQkFBSzs7QUNaNUUsSUFBQUMscUJBQXNCOztBQ0F2QixJQUFBQyxvQkFBa0NDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBR2xD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VTtBQUN0QyxTQUFLcEIsZUFBZTtFQUNyQjtBQUNEOyIsCiAgIm5hbWVzIjogWyJTWVNURU1fU0NSSVBUX0xJU1QiLCAiV0VCTUFTVEVSX0xJU1QiLCAiV0dfU0tJTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1JFTEVWQU5UX1VTRVJfTkFNRSIsICJfbXckY29uZmlnJGdldCIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImVsZW1lbnRXcmFwIiwgInNwYW5DbGFzcyIsICJpbm5lckVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImNvbmNhdCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJhcHBlbmRJY29uIiwgImluZGljYXRvclRleHQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImluZGljYXRvciIsICJGcmFnbWVudCIsICJ0aXRsZSIsICJ0YWciLCAicXVlcnlTZWxlY3RvckFsbCIsICJwcmVwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiV2VibWFzdGVyIiwgImxvY2FsaXplIiwgImVuIiwgIlN0ZXdhcmQiLCAiQ2hlY2tVc2VyIiwgIlN1cHByZXNzIiwgIlN5c09wIiwgIkludGVyZmFjZUFkbWluIiwgIlRlbXBsYXRlRWRpdG9yIiwgIlRyYW5zd2lraSIsICJQYXRyb2xsZXIiLCAiQXV0b1Jldmlld2VyIiwgIlNlbmlvckVkaXRvciIsICJFdmVudFNwb25zb3IiLCAiTWFzc01lc3NhZ2VTZW5kZXIiLCAiQ29uZmlybWVkIiwgIkF1dG9Db25maXJtZWQiLCAiUk5SU1ZlcmlmeUV4ZW1wdCIsICJCb3QiLCAiRmxvb2QiLCAiSVBCbG9ja0V4ZW1wdCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldFBlcm1pc3Npb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYXBpIiwgImluaXRNd0FwaSIsICJsaXN0VXNlcnNQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXN1c2VycyIsICJ1c3Byb3AiLCAicXVlcnkiLCAiZ3JvdXBzIiwgInVzZXJzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiXQp9Cg==
