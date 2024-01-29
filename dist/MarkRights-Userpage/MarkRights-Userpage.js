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
//! src/MarkRights-Userpage/modules/core.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/MarkRights-Userpage/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Webmaster: (0, import_ext_gadget.localize)({
      en: "Webmaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    Steward: (0, import_ext_gadget.localize)({
      en: "Steward",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    CheckUser: (0, import_ext_gadget.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    Suppress: (0, import_ext_gadget.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    SysOp: (0, import_ext_gadget.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    InterfaceAdmin: (0, import_ext_gadget.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    TemplateEditor: (0, import_ext_gadget.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    Transwiki: (0, import_ext_gadget.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    Patroller: (0, import_ext_gadget.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    AutoReviewer: (0, import_ext_gadget.localize)({
      en: "Exempted from page patrol",
      "zh-hans": "巡查豁免",
      "zh-hant": "巡查豁免"
    }),
    SeniorEditor: (0, import_ext_gadget.localize)({
      en: "Senior Editor",
      "zh-hans": "资深编者",
      "zh-hant": "資深編者"
    }),
    EventSponsor: (0, import_ext_gadget.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    MassMessageSender: (0, import_ext_gadget.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    Confirmed: (0, import_ext_gadget.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    AutoConfirmed: (0, import_ext_gadget.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    RNRSVerifyExempt: (0, import_ext_gadget.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    Bot: (0, import_ext_gadget.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    Flood: (0, import_ext_gadget.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    IPBlockExempt: (0, import_ext_gadget.localize)({
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
//! src/MarkRights-Userpage/modules/core.tsx
var import_ext_gadget3 = require("ext.gadget.Util");
var wgRelevantUserName = mw.config.get("wgRelevantUserName");
var appendIcon = (indicatorText, spanClass) => {
  if (spanClass === "unknown") {
    return;
  }
  const tag = WG_SKIN === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
    className: ["gadget-markrights_userpage", "gadget-markrights_userpage__".concat(spanClass)]
  }) : ["vector", "vector-2022", "gongbi"].includes(WG_SKIN) ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
    className: ["gadget-markrights_userpage", "gadget-markrights_userpage__".concat(spanClass)]
  }) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: ["gadget-markrights_userpage", "gadget-markrights_userpage__".concat(spanClass)]
  });
  const indicator = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: ["gadget-markrights_userpage__icon", "gadget-markrights_userpage__icon__".concat(spanClass)],
    title: indicatorText
  }), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: "gadget-markrights_userpage__text"
  }, indicatorText !== null && indicatorText !== void 0 ? indicatorText : ""));
  const $body = $("body");
  $(tag).append(indicator).prependTo($body.find("#footer-info, .page-info"));
};
var getPermissions = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    if (!wgRelevantUserName) {
      return;
    }
    const api = (0, import_ext_gadget3.initMwApi)("MarkRights-Userpage/1.0");
    try {
      const listUsersParams = {
        action: "query",
        format: "json",
        formatversion: "2",
        list: "users",
        ususers: wgRelevantUserName,
        usprop: "groups"
      };
      const {
        query
      } = yield api.get(listUsersParams);
      const [{
        groups
      }] = query.users;
      if (WEBMASTER_LIST.includes(wgRelevantUserName) || groups.includes("qiuwen")) {
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
      if (groups.includes("bot") && !SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
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
if (wgRelevantUserName && mw.config.get("wgNamespaceNumber") === 2 && mw.config.get("wgAction") === "view") {
  const relevantUserPageName = new mw.Title(wgRelevantUserName, 2).toText();
  const pageName = new mw.Title(mw.config.get("wgPageName")).toText();
  if (relevantUserPageName === pageName) {
    $(() => {
      void getPermissions();
    });
  }
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9NYXJrUmlnaHRzLVVzZXJwYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBTWVNURU1fU0NSSVBUX0xJU1Q6IHN0cmluZ1tdID0gW1xuXHQn5rul55So6L+H5ruk5ZmoJyxcblx0J+axgumXu+e8luiAhScsXG5cdCfmsYLpl7vnmb7np5HnpL7ljLonLFxuXHQnRXhhbXBsZScsXG5cdCdFeHRlcm5hbCBjb250cmlidXRvcnMnLFxuXHQnTWFpbnRlbmFuY2Ugc2NyaXB0Jyxcblx0J01lZGlhV2lraSBkZWZhdWx0Jyxcblx0J01lZGlhV2lraSBtZXNzYWdlIGRlbGl2ZXJ5Jyxcblx0J05ldyB1c2VyIHBhZ2UnLFxuXTtcbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcbmNvbnN0IFdHX1NLSU4gPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfU0tJTn07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNULCBXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3Qgd2dSZWxldmFudFVzZXJOYW1lOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFVzZXJOYW1lJyk7XG5cbmNvbnN0IGFwcGVuZEljb24gPSAoaW5kaWNhdG9yVGV4dDogc3RyaW5nLCBzcGFuQ2xhc3M6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRpZiAoc3BhbkNsYXNzID09PSAndW5rbm93bicpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgdGFnID1cblx0XHRXR19TS0lOID09PSAnY2l0aXplbicgPyAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfXyR7c3BhbkNsYXNzfWBdfSAvPlxuXHRcdCkgOiBbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhXR19TS0lOKSA/IChcblx0XHRcdDxsaSBjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfXyR7c3BhbkNsYXNzfWBdfSAvPlxuXHRcdCkgOiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WydnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZScsIGBnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fJHtzcGFuQ2xhc3N9YF19IC8+XG5cdFx0KTtcblx0Y29uc3QgaW5kaWNhdG9yID0gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb24nLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb25fXyR7c3BhbkNsYXNzfWBdfVxuXHRcdFx0XHR0aXRsZT17aW5kaWNhdG9yVGV4dH1cblx0XHRcdC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fdGV4dFwiPntpbmRpY2F0b3JUZXh0ID8/ICcnfTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHQkKHRhZykuYXBwZW5kKGluZGljYXRvcikucHJlcGVuZFRvKCRib2R5LmZpbmQoJyNmb290ZXItaW5mbywgLnBhZ2UtaW5mbycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQZXJtaXNzaW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ01hcmtSaWdodHMtVXNlcnBhZ2UvMS4wJyk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgbGlzdFVzZXJzUGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdFx0dXN1c2Vyczogd2dSZWxldmFudFVzZXJOYW1lLFxuXHRcdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHR9O1xuXHRcdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KGxpc3RVc2Vyc1BhcmFtcyk7XG5cdFx0Y29uc3QgW3tncm91cHN9XTogW3tncm91cHM6IHN0cmluZ1tdfV0gPSBxdWVyeS51c2Vycztcblx0XHRpZiAoV0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSB8fCBncm91cHMuaW5jbHVkZXMoJ3FpdXdlbicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1dlYm1hc3RlcicpLCAncWl1d2VuJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N0ZXdhcmQnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdTdGV3YXJkJyksICdzdGV3YXJkJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2NoZWNrdXNlcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0NoZWNrVXNlcicpLCAnY2hlY2t1c2VyJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N1cHByZXNzJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnU3VwcHJlc3MnKSwgJ3N1cHByZXNzJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N5c29wJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnU3lzT3AnKSwgJ3N5c29wJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2ludGVyZmFjZS1hZG1pbicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0ludGVyZmFjZUFkbWluJyksICdpbnRlcmZhY2UtYWRtaW4nKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygndGVtcGxhdGVlZGl0b3InKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdUZW1wbGF0ZUVkaXRvcicpLCAndGVtcGxhdGVlZGl0b3InKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygndHJhbnN3aWtpJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnVHJhbnN3aWtpJyksICd0cmFuc3dpa2knKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygncGF0cm9sbGVyJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnUGF0cm9sbGVyJyksICdwYXRyb2xsZXInKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnYXV0b3Jldmlld2VyJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnQXV0b1Jldmlld2VyJyksICdhdXRvcmV2aWV3ZXInKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc2VuaW9yZWRpdG9yJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnU2VuaW9yRWRpdG9yJyksICdzZW5pb3JlZGl0b3InKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnbWFzc21lc3NhZ2Utc2VuZGVyJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnTWFzc01lc3NhZ2VTZW5kZXInKSwgJ21hc3NtZXNzYWdlLXNlbmRlcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdhdXRvY29uZmlybWVkJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnQXV0b0NvbmZpcm1lZCcpLCAnYXV0b2NvbmZpcm1lZCcpO1xuXHRcdH0gZWxzZSBpZiAoZ3JvdXBzLmluY2x1ZGVzKCdjb25maXJtZWQnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdDb25maXJtZWQnKSwgJ2NvbmZpcm1lZCcpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdybnJzdmVyaWZ5LWV4ZW1wdCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1JOUlNWZXJpZnlFeGVtcHQnKSwgJ3JucnN2ZXJpZnktZXhlbXB0Jyk7XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdGdyb3Vwcy5pbmNsdWRlcygnYm90JykgJiZcblx0XHRcdCFTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSAvLyBBbHJlYWR5IHNob3duIGluIEdlb0xvY2F0aW9uVmlld2VyXG5cdFx0KSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0JvdCcpLCAnYm90Jyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2Zsb29kJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnRmxvb2QnKSwgJ2Zsb29kJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2lwYmxvY2stZXhlbXB0JykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnSVBCbG9ja0V4ZW1wdCcpLCAnaXBibG9jay1leGVtcHQnKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFdlYm1hc3RlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ6ZW/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ermemVtycsXG5cdFx0fSksXG5cdFx0U3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdENoZWNrVXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0U3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0U3lzT3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0SW50ZXJmYWNlQWRtaW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0VGVtcGxhdGVFZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdFRyYW5zd2lraTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdEF1dG9SZXZpZXdlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdH0pLFxuXHRcdFNlbmlvckVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZW5pb3IgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i1hOa3see8luiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfos4fmt7Hnt6jogIUnLFxuXHRcdH0pLFxuXHRcdEV2ZW50U3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdE1hc3NNZXNzYWdlU2VuZGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRDb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0QXV0b0NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdFJOUlNWZXJpZnlFeGVtcHQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSByZWFsLW5hbWUgdmVyaWZpY2F0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflr6blkI3liLbpqZforYnosYHlhY0nLFxuXHRcdH0pLFxuXHRcdEJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Rmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHRJUEJsb2NrRXhlbXB0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRQZXJtaXNzaW9ucywgd2dSZWxldmFudFVzZXJOYW1lfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmICh3Z1JlbGV2YW50VXNlck5hbWUgJiYgbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gMiAmJiBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpID09PSAndmlldycpIHtcblx0Y29uc3QgcmVsZXZhbnRVc2VyUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1JlbGV2YW50VXNlck5hbWUsIDIpLnRvVGV4dCgpO1xuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSkudG9UZXh0KCk7XG5cdGlmIChyZWxldmFudFVzZXJQYWdlTmFtZSA9PT0gcGFnZU5hbWUpIHtcblx0XHQkKCgpID0+IHtcblx0XHRcdHZvaWQgZ2V0UGVybWlzc2lvbnMoKTtcblx0XHR9KTtcblx0fVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QU0sUUFBUTtBQUMzRyxRQUFNa0UsdUJBQStCLElBQUlwRSxHQUFHcUUsTUFBTXBDLG9CQUFvQixDQUFDLEVBQUVxQyxPQUFPO0FBQ2hGLFFBQU1DLFdBQW1CLElBQUl2RSxHQUFHcUUsTUFBTXJFLEdBQUdDLE9BQU9DLElBQUksWUFBWSxDQUFDLEVBQUVvRSxPQUFPO0FBQzFFLE1BQUlGLHlCQUF5QkcsVUFBVTtBQUN0Q3hCLE1BQUUsTUFBTTtBQUNQLFdBQUtJLGVBQWU7SUFDckIsQ0FBQztFQUNGO0FBQ0Q7IiwKICAibmFtZXMiOiBbIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJXR19TS0lOIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiV2VibWFzdGVyIiwgImxvY2FsaXplIiwgImVuIiwgIlN0ZXdhcmQiLCAiQ2hlY2tVc2VyIiwgIlN1cHByZXNzIiwgIlN5c09wIiwgIkludGVyZmFjZUFkbWluIiwgIlRlbXBsYXRlRWRpdG9yIiwgIlRyYW5zd2lraSIsICJQYXRyb2xsZXIiLCAiQXV0b1Jldmlld2VyIiwgIlNlbmlvckVkaXRvciIsICJFdmVudFNwb25zb3IiLCAiTWFzc01lc3NhZ2VTZW5kZXIiLCAiQ29uZmlybWVkIiwgIkF1dG9Db25maXJtZWQiLCAiUk5SU1ZlcmlmeUV4ZW1wdCIsICJCb3QiLCAiRmxvb2QiLCAiSVBCbG9ja0V4ZW1wdCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJhcHBlbmRJY29uIiwgImluZGljYXRvclRleHQiLCAic3BhbkNsYXNzIiwgInRhZyIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImNvbmNhdCIsICJpbmNsdWRlcyIsICJpbmRpY2F0b3IiLCAiRnJhZ21lbnQiLCAidGl0bGUiLCAiJGJvZHkiLCAiJCIsICJhcHBlbmQiLCAicHJlcGVuZFRvIiwgImZpbmQiLCAiZ2V0UGVybWlzc2lvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcGkiLCAiaW5pdE13QXBpIiwgImxpc3RVc2Vyc1BhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJ1c3VzZXJzIiwgInVzcHJvcCIsICJxdWVyeSIsICJncm91cHMiLCAidXNlcnMiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJwYWdlTmFtZSJdCn0K
