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
    // Webmaster: localize({
    // 	en: 'Webmaster',
    // 	'zh-hans': '站长',
    // 	'zh-hant': '站長',
    // }),
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
    // AutoConfirmed: localize({
    // 	en: 'Auto-confirmed user',
    // 	'zh-hans': '自动确认用户',
    // 	'zh-hant': '自動確認用戶',
    // }),
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
    })
    // IPBlockExempt: localize({
    // 	en: 'Exempted from IP blocks',
    // 	'zh-hans': 'IP封禁豁免',
    // 	'zh-hant': 'IP封鎖豁免',
    // }),
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
        return;
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
      } else if (groups.includes("confirmed")) {
        appendIcon(getMessage("Confirmed"), "confirmed");
      }
      if (groups.includes("rnrsverify-exempt")) {
        appendIcon(getMessage("RNRSVerifyExempt"), "rnrsverify-exempt");
      }
      if (groups.includes("bot") && !SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
      }
      if (groups.includes("flood")) {
        appendIcon(getMessage("Flood"), "flood");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9NYXJrUmlnaHRzLVVzZXJwYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBTWVNURU1fU0NSSVBUX0xJU1Q6IHN0cmluZ1tdID0gW1xuXHQn5rul55So6L+H5ruk5ZmoJyxcblx0J+axgumXu+e8luiAhScsXG5cdCfmsYLpl7vnmb7np5HnpL7ljLonLFxuXHQnRXhhbXBsZScsXG5cdCdFeHRlcm5hbCBjb250cmlidXRvcnMnLFxuXHQnTWFpbnRlbmFuY2Ugc2NyaXB0Jyxcblx0J01lZGlhV2lraSBkZWZhdWx0Jyxcblx0J01lZGlhV2lraSBtZXNzYWdlIGRlbGl2ZXJ5Jyxcblx0J05ldyB1c2VyIHBhZ2UnLFxuXTtcbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcbmNvbnN0IFdHX1NLSU4gPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfU0tJTn07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNULCBXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5leHBvcnQgY29uc3Qgd2dSZWxldmFudFVzZXJOYW1lOiBzdHJpbmcgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFVzZXJOYW1lJyk7XG5cbmNvbnN0IGFwcGVuZEljb24gPSAoaW5kaWNhdG9yVGV4dDogc3RyaW5nLCBzcGFuQ2xhc3M6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRpZiAoc3BhbkNsYXNzID09PSAndW5rbm93bicpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgdGFnID1cblx0XHRXR19TS0lOID09PSAnY2l0aXplbicgPyAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfXyR7c3BhbkNsYXNzfWBdfSAvPlxuXHRcdCkgOiBbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhXR19TS0lOKSA/IChcblx0XHRcdDxsaSBjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfXyR7c3BhbkNsYXNzfWBdfSAvPlxuXHRcdCkgOiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17WydnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZScsIGBnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fJHtzcGFuQ2xhc3N9YF19IC8+XG5cdFx0KTtcblx0Y29uc3QgaW5kaWNhdG9yID0gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb24nLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb25fXyR7c3BhbkNsYXNzfWBdfVxuXHRcdFx0XHR0aXRsZT17aW5kaWNhdG9yVGV4dH1cblx0XHRcdC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fdGV4dFwiPntpbmRpY2F0b3JUZXh0ID8/ICcnfTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHQkKHRhZykuYXBwZW5kKGluZGljYXRvcikucHJlcGVuZFRvKCRib2R5LmZpbmQoJyNmb290ZXItaW5mbywgLnBhZ2UtaW5mbycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQZXJtaXNzaW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ01hcmtSaWdodHMtVXNlcnBhZ2UvMS4wJyk7XG5cdHRyeSB7XG5cdFx0Y29uc3QgbGlzdFVzZXJzUGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdFx0dXN1c2Vyczogd2dSZWxldmFudFVzZXJOYW1lLFxuXHRcdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHR9O1xuXHRcdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KGxpc3RVc2Vyc1BhcmFtcyk7XG5cdFx0Y29uc3QgW3tncm91cHN9XTogW3tncm91cHM6IHN0cmluZ1tdfV0gPSBxdWVyeS51c2Vycztcblx0XHRpZiAoV0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSB8fCBncm91cHMuaW5jbHVkZXMoJ3FpdXdlbicpKSB7XG5cdFx0XHQvKiBhcHBlbmRJY29uKG1lc3NhZ2UoJ1dlYm1hc3RlcicpLCAncWl1d2VuJyk7ICovXG5cdFx0XHRyZXR1cm47IC8vIEFscmVhZHkgc2hvd24gaW4gR2VvTG9jYXRpb25WaWV3ZXJcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3Rld2FyZCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1N0ZXdhcmQnKSwgJ3N0ZXdhcmQnKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnY2hlY2t1c2VyJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnQ2hlY2tVc2VyJyksICdjaGVja3VzZXInKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3VwcHJlc3MnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdTdXBwcmVzcycpLCAnc3VwcHJlc3MnKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdTeXNPcCcpLCAnc3lzb3AnKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnaW50ZXJmYWNlLWFkbWluJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnSW50ZXJmYWNlQWRtaW4nKSwgJ2ludGVyZmFjZS1hZG1pbicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCd0ZW1wbGF0ZWVkaXRvcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1RlbXBsYXRlRWRpdG9yJyksICd0ZW1wbGF0ZWVkaXRvcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCd0cmFuc3dpa2knKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdUcmFuc3dpa2knKSwgJ3RyYW5zd2lraScpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdwYXRyb2xsZXInKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdQYXRyb2xsZXInKSwgJ3BhdHJvbGxlcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdhdXRvcmV2aWV3ZXInKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdBdXRvUmV2aWV3ZXInKSwgJ2F1dG9yZXZpZXdlcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzZW5pb3JlZGl0b3InKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdTZW5pb3JFZGl0b3InKSwgJ3NlbmlvcmVkaXRvcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdtYXNzbWVzc2FnZS1zZW5kZXInKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdNYXNzTWVzc2FnZVNlbmRlcicpLCAnbWFzc21lc3NhZ2Utc2VuZGVyJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2F1dG9jb25maXJtZWQnKSkge1xuXHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdC8qIGFwcGVuZEljb24obWVzc2FnZSgnQXV0b0NvbmZpcm1lZCcpLCAnYXV0b2NvbmZpcm1lZCcpOyAqL1xuXHRcdH0gZWxzZSBpZiAoZ3JvdXBzLmluY2x1ZGVzKCdjb25maXJtZWQnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdDb25maXJtZWQnKSwgJ2NvbmZpcm1lZCcpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdybnJzdmVyaWZ5LWV4ZW1wdCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1JOUlNWZXJpZnlFeGVtcHQnKSwgJ3JucnN2ZXJpZnktZXhlbXB0Jyk7XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdGdyb3Vwcy5pbmNsdWRlcygnYm90JykgJiZcblx0XHRcdCFTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSAvLyBBbHJlYWR5IHNob3duIGluIEdlb0xvY2F0aW9uVmlld2VyXG5cdFx0KSB7XG5cdFx0XHQvKiBhcHBlbmRJY29uKG1lc3NhZ2UoJ0JvdCcpLCAnYm90Jyk7ICovXG5cdFx0XHQvLyBBbHJlYWR5IHNob3duIGluIEdlb0xvY2F0aW9uVmlld2VyXG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2Zsb29kJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnRmxvb2QnKSwgJ2Zsb29kJyk7XG5cdFx0fVxuXHRcdC8vIGlmIChncm91cHMuaW5jbHVkZXMoJ2lwYmxvY2stZXhlbXB0JykpIHtcblx0XHQvLyAgICAgYXBwZW5kSWNvbihtZXNzYWdlKCdJUEJsb2NrRXhlbXB0JyksICdpcGJsb2NrLWV4ZW1wdCcpO1xuXHRcdC8vIH1cblx0fSBjYXRjaCB7fVxufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Ly8gV2VibWFzdGVyOiBsb2NhbGl6ZSh7XG5cdFx0Ly8gXHRlbjogJ1dlYm1hc3RlcicsXG5cdFx0Ly8gXHQnemgtaGFucyc6ICfnq5nplb8nLFxuXHRcdC8vIFx0J3poLWhhbnQnOiAn56uZ6ZW3Jyxcblx0XHQvLyB9KSxcblx0XHRTdGV3YXJkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N0ZXdhcmQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6KOB5Yaz5aeU5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ijgeaxuuWnlOWToScsXG5cdFx0fSksXG5cdFx0Q2hlY2tVc2VyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NoZWNrVXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnlKjmiLfmn6XmoLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn55So5oi25p+l5qC4Jyxcblx0XHR9KSxcblx0XHRTdXBwcmVzczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdmVyc2lnaHRlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnm5HnnaPlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn55uj552j5ZOhJyxcblx0XHR9KSxcblx0XHRTeXNPcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTeXNPcCcsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHRJbnRlcmZhY2VBZG1pbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnRlcmZhY2UgQWRtaW5pc3RyYXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfnlYzpnaLnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LuL6Z2i566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHRUZW1wbGF0ZUVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUZW1wbGF0ZSBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5qih5p2/57yW6L6R5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+aooeadv+e3qOi8r+WToScsXG5cdFx0fSksXG5cdFx0VHJhbnN3aWtpOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ltcG9ydGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvvOWFpeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfljK/lhaXogIUnLFxuXHRcdH0pLFxuXHRcdFBhdHJvbGxlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0QXV0b1Jldmlld2VyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcGFnZSBwYXRyb2wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeixgeWFjScsXG5cdFx0fSksXG5cdFx0U2VuaW9yRWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlbmlvciBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn6LWE5rex57yW6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+izh+a3see3qOiAhScsXG5cdFx0fSksXG5cdFx0RXZlbnRTcG9uc29yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V2ZW50IFNwb25zb3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5rS75Yqo57uE57uH6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+a0u+WLlee1hOe5lOiAhScsXG5cdFx0fSksXG5cdFx0TWFzc01lc3NhZ2VTZW5kZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTWFzc01lc3NhZ2Ugc2VuZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wkp+mHj+a2iOaBr+WPkemAgeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICflpKfph4/oqIrmga/lgrPpgIHogIUnLFxuXHRcdH0pLFxuXHRcdENvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHQvLyBBdXRvQ29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0Ly8gXHRlbjogJ0F1dG8tY29uZmlybWVkIHVzZXInLFxuXHRcdC8vIFx0J3poLWhhbnMnOiAn6Ieq5Yqo56Gu6K6k55So5oi3Jyxcblx0XHQvLyBcdCd6aC1oYW50JzogJ+iHquWLleeiuuiqjeeUqOaIticsXG5cdFx0Ly8gfSksXG5cdFx0Uk5SU1ZlcmlmeUV4ZW1wdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHJlYWwtbmFtZSB2ZXJpZmljYXRpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6e5ZCN5Yi26aqM6K+B6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvpuWQjeWItumpl+itieixgeWFjScsXG5cdFx0fSksXG5cdFx0Qm90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JvdCcsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajkuronLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw5Lq6Jyxcblx0XHR9KSxcblx0XHRGbG9vZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGbG9vZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDnlKjmiLYnLFxuXHRcdH0pLFxuXHRcdC8vIElQQmxvY2tFeGVtcHQ6IGxvY2FsaXplKHtcblx0XHQvLyBcdGVuOiAnRXhlbXB0ZWQgZnJvbSBJUCBibG9ja3MnLFxuXHRcdC8vIFx0J3poLWhhbnMnOiAnSVDlsIHnpoHosYHlhY0nLFxuXHRcdC8vIFx0J3poLWhhbnQnOiAnSVDlsIHpjpbosYHlhY0nLFxuXHRcdC8vIH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldFBlcm1pc3Npb25zLCB3Z1JlbGV2YW50VXNlck5hbWV9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuaWYgKHdnUmVsZXZhbnRVc2VyTmFtZSAmJiBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAyICYmIG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgPT09ICd2aWV3Jykge1xuXHRjb25zdCByZWxldmFudFVzZXJQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUmVsZXZhbnRVc2VyTmFtZSwgMikudG9UZXh0KCk7XG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUobXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpKS50b1RleHQoKTtcblx0aWYgKHJlbGV2YW50VXNlclBhZ2VOYW1lID09PSBwYWdlTmFtZSkge1xuXHRcdCQoKCkgPT4ge1xuXHRcdFx0dm9pZCBnZXRQZXJtaXNzaW9ucygpO1xuXHRcdH0pO1xuXHR9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Q0Q7IiwKICAibmFtZXMiOiBbIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJXR19TS0lOIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiU3Rld2FyZCIsICJsb2NhbGl6ZSIsICJlbiIsICJDaGVja1VzZXIiLCAiU3VwcHJlc3MiLCAiU3lzT3AiLCAiSW50ZXJmYWNlQWRtaW4iLCAiVGVtcGxhdGVFZGl0b3IiLCAiVHJhbnN3aWtpIiwgIlBhdHJvbGxlciIsICJBdXRvUmV2aWV3ZXIiLCAiU2VuaW9yRWRpdG9yIiwgIkV2ZW50U3BvbnNvciIsICJNYXNzTWVzc2FnZVNlbmRlciIsICJDb25maXJtZWQiLCAiUk5SU1ZlcmlmeUV4ZW1wdCIsICJCb3QiLCAiRmxvb2QiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAiYXBwZW5kSWNvbiIsICJpbmRpY2F0b3JUZXh0IiwgInNwYW5DbGFzcyIsICJ0YWciLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJjb25jYXQiLCAiaW5jbHVkZXMiLCAiaW5kaWNhdG9yIiwgIkZyYWdtZW50IiwgInRpdGxlIiwgIiRib2R5IiwgIiQiLCAiYXBwZW5kIiwgInByZXBlbmRUbyIsICJmaW5kIiwgImdldFBlcm1pc3Npb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYXBpIiwgImluaXRNd0FwaSIsICJsaXN0VXNlcnNQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXN1c2VycyIsICJ1c3Byb3AiLCAicXVlcnkiLCAiZ3JvdXBzIiwgInVzZXJzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiXQp9Cg==

})();

/* </nowiki> */
