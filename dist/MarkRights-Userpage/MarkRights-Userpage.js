/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.css}
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocationReader}
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
var WG_WIKI_ID = mw.config.get("wgWikiID");
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
    const api = (0, import_ext_gadget3.initMwApi)("Qiuwen/1.1 (MarkRights-Userpage/1.0; ".concat(WG_WIKI_ID, ")"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9NYXJrUmlnaHRzLVVzZXJwYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBTWVNURU1fU0NSSVBUX0xJU1Q6IHN0cmluZ1tdID0gW1xuXHQn5rul55So6L+H5ruk5ZmoJyxcblx0J+axgumXu+e8luiAhScsXG5cdCfmsYLpl7vnmb7np5HnpL7ljLonLFxuXHQnRXhhbXBsZScsXG5cdCdFeHRlcm5hbCBjb250cmlidXRvcnMnLFxuXHQnTWFpbnRlbmFuY2Ugc2NyaXB0Jyxcblx0J01lZGlhV2lraSBkZWZhdWx0Jyxcblx0J01lZGlhV2lraSBtZXNzYWdlIGRlbGl2ZXJ5Jyxcblx0J05ldyB1c2VyIHBhZ2UnLFxuXTtcbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcbmNvbnN0IFdHX1NLSU4gPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5jb25zdCBXR19XSUtJX0lEOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIFdHX1NLSU4sIFdHX1dJS0lfSUR9O1xuIiwgImltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfU0tJTiwgV0dfV0lLSV9JRH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuZXhwb3J0IGNvbnN0IHdnUmVsZXZhbnRVc2VyTmFtZTogc3RyaW5nIHwgbnVsbCA9IG13LmNvbmZpZy5nZXQoJ3dnUmVsZXZhbnRVc2VyTmFtZScpO1xuXG5jb25zdCBhcHBlbmRJY29uID0gKGluZGljYXRvclRleHQ6IHN0cmluZywgc3BhbkNsYXNzOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0aWYgKHNwYW5DbGFzcyA9PT0gJ3Vua25vd24nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHRhZyA9XG5cdFx0V0dfU0tJTiA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbJ2dhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlJywgYGdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX18ke3NwYW5DbGFzc31gXX0gLz5cblx0XHQpIDogWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoV0dfU0tJTikgPyAoXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPXtbJ2dhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlJywgYGdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX18ke3NwYW5DbGFzc31gXX0gLz5cblx0XHQpIDogKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfXyR7c3BhbkNsYXNzfWBdfSAvPlxuXHRcdCk7XG5cdGNvbnN0IGluZGljYXRvciA9IChcblx0XHQ8PlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0Y2xhc3NOYW1lPXtbJ2dhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19pY29uJywgYGdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19pY29uX18ke3NwYW5DbGFzc31gXX1cblx0XHRcdFx0dGl0bGU9e2luZGljYXRvclRleHR9XG5cdFx0XHQvPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX3RleHRcIj57aW5kaWNhdG9yVGV4dCA/PyAnJ308L3NwYW4+XG5cdFx0PC8+XG5cdCk7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0JCh0YWcpLmFwcGVuZChpbmRpY2F0b3IpLnByZXBlbmRUbygkYm9keS5maW5kKCcjZm9vdGVyLWluZm8sIC5wYWdlLWluZm8nKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGVybWlzc2lvbnMgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlmICghd2dSZWxldmFudFVzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChNYXJrUmlnaHRzLVVzZXJwYWdlLzEuMDsgJHtXR19XSUtJX0lEfSlgKTtcblx0dHJ5IHtcblx0XHRjb25zdCBsaXN0VXNlcnNQYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0XHR1c3VzZXJzOiB3Z1JlbGV2YW50VXNlck5hbWUsXG5cdFx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdH07XG5cdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQobGlzdFVzZXJzUGFyYW1zKTtcblx0XHRjb25zdCBbe2dyb3Vwc31dOiBbe2dyb3Vwczogc3RyaW5nW119XSA9IHF1ZXJ5LnVzZXJzO1xuXHRcdGlmIChXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpIHx8IGdyb3Vwcy5pbmNsdWRlcygncWl1d2VuJykpIHtcblx0XHRcdC8qIGFwcGVuZEljb24obWVzc2FnZSgnV2VibWFzdGVyJyksICdxaXV3ZW4nKTsgKi9cblx0XHRcdHJldHVybjsgLy8gQWxyZWFkeSBzaG93biBpbiBHZW9Mb2NhdGlvblZpZXdlclxuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzdGV3YXJkJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnU3Rld2FyZCcpLCAnc3Rld2FyZCcpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdjaGVja3VzZXInKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdDaGVja1VzZXInKSwgJ2NoZWNrdXNlcicpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzdXBwcmVzcycpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1N1cHByZXNzJyksICdzdXBwcmVzcycpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1N5c09wJyksICdzeXNvcCcpO1xuXHRcdH1cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdpbnRlcmZhY2UtYWRtaW4nKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdJbnRlcmZhY2VBZG1pbicpLCAnaW50ZXJmYWNlLWFkbWluJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3RlbXBsYXRlZWRpdG9yJykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnVGVtcGxhdGVFZGl0b3InKSwgJ3RlbXBsYXRlZWRpdG9yJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3RyYW5zd2lraScpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1RyYW5zd2lraScpLCAndHJhbnN3aWtpJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1BhdHJvbGxlcicpLCAncGF0cm9sbGVyJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2F1dG9yZXZpZXdlcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0F1dG9SZXZpZXdlcicpLCAnYXV0b3Jldmlld2VyJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3NlbmlvcmVkaXRvcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ1NlbmlvckVkaXRvcicpLCAnc2VuaW9yZWRpdG9yJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ21hc3NtZXNzYWdlLXNlbmRlcicpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ01hc3NNZXNzYWdlU2VuZGVyJyksICdtYXNzbWVzc2FnZS1zZW5kZXInKTtcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpKSB7XG5cdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0LyogYXBwZW5kSWNvbihtZXNzYWdlKCdBdXRvQ29uZmlybWVkJyksICdhdXRvY29uZmlybWVkJyk7ICovXG5cdFx0fSBlbHNlIGlmIChncm91cHMuaW5jbHVkZXMoJ2NvbmZpcm1lZCcpKSB7XG5cdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoJ0NvbmZpcm1lZCcpLCAnY29uZmlybWVkJyk7XG5cdFx0fVxuXHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3JucnN2ZXJpZnktZXhlbXB0JykpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgnUk5SU1ZlcmlmeUV4ZW1wdCcpLCAncm5yc3ZlcmlmeS1leGVtcHQnKTtcblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0Z3JvdXBzLmluY2x1ZGVzKCdib3QnKSAmJlxuXHRcdFx0IVNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpIC8vIEFscmVhZHkgc2hvd24gaW4gR2VvTG9jYXRpb25WaWV3ZXJcblx0XHQpIHtcblx0XHRcdC8qIGFwcGVuZEljb24obWVzc2FnZSgnQm90JyksICdib3QnKTsgKi9cblx0XHRcdC8vIEFscmVhZHkgc2hvd24gaW4gR2VvTG9jYXRpb25WaWV3ZXJcblx0XHR9XG5cdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnZmxvb2QnKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdGbG9vZCcpLCAnZmxvb2QnKTtcblx0XHR9XG5cdFx0Ly8gaWYgKGdyb3Vwcy5pbmNsdWRlcygnaXBibG9jay1leGVtcHQnKSkge1xuXHRcdC8vICAgICBhcHBlbmRJY29uKG1lc3NhZ2UoJ0lQQmxvY2tFeGVtcHQnKSwgJ2lwYmxvY2stZXhlbXB0Jyk7XG5cdFx0Ly8gfVxuXHR9IGNhdGNoIHt9XG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQvLyBXZWJtYXN0ZXI6IGxvY2FsaXplKHtcblx0XHQvLyBcdGVuOiAnV2VibWFzdGVyJyxcblx0XHQvLyBcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0Ly8gXHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdC8vIH0pLFxuXHRcdFN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHRDaGVja1VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdFN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdFN5c09wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdEludGVyZmFjZUFkbWluOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdFRlbXBsYXRlRWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHRUcmFuc3dpa2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW1wb3J0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+85YWl6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WMr+WFpeiAhScsXG5cdFx0fSksXG5cdFx0UGF0cm9sbGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcicsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRBdXRvUmV2aWV3ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwYWdlIHBhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l6LGB5YWNJyxcblx0XHR9KSxcblx0XHRTZW5pb3JFZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VuaW9yIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfotYTmt7HnvJbogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6LOH5rex57eo6ICFJyxcblx0XHR9KSxcblx0XHRFdmVudFNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHRNYXNzTWVzc2FnZVNlbmRlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Q29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdC8vIEF1dG9Db25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHQvLyBcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0Ly8gXHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdC8vIFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHQvLyB9KSxcblx0XHRSTlJTVmVyaWZ5RXhlbXB0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHRCb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdEZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0Ly8gSVBCbG9ja0V4ZW1wdDogbG9jYWxpemUoe1xuXHRcdC8vIFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0Ly8gXHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0Ly8gXHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0Ly8gfSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0UGVybWlzc2lvbnMsIHdnUmVsZXZhbnRVc2VyTmFtZX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAod2dSZWxldmFudFVzZXJOYW1lICYmIG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDIgJiYgbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnKSB7XG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCAyKS50b1RleHQoKTtcblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZShtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykpLnRvVGV4dCgpO1xuXHRpZiAocmVsZXZhbnRVc2VyUGFnZU5hbWUgPT09IHBhZ2VOYW1lKSB7XG5cdFx0JCgoKSA9PiB7XG5cdFx0XHR2b2lkIGdldFBlcm1pc3Npb25zKCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7QUFFRCxJQUFNQyxpQkFBMkIsQ0FBQyxVQUFVLHVCQUF1QixtQkFBbUI7QUFDdEYsSUFBTUMsVUFBVUMsR0FBR0MsT0FBT0MsSUFBSSxNQUFNO0FBQ3BDLElBQU1DLGFBQXFCSCxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7O0FDWm5ELElBQUFFLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTzs7Ozs7O0lBTU5DLFVBQUEsR0FBU0Ysa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsWUFBQSxHQUFXTCxrQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxXQUFBLEdBQVVOLGtCQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFFBQUEsR0FBT1Asa0JBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxpQkFBQSxHQUFnQlIsa0JBQUFHLFVBQVM7TUFDeEJDLElB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Q0FBQyxFQUFFcUMsT0FBTztBQUNoRixRQUFNQyxXQUFtQixJQUFJckUsR0FBR21FLE1BQU1uRSxHQUFHQyxPQUFPQyxJQUFJLFlBQVksQ0FBQyxFQUFFa0UsT0FBTztBQUMxRSxNQUFJRix5QkFBeUJHLFVBQVU7QUFDdEN4QixNQUFFLE1BQU07QUFDUCxXQUFLSSxlQUFlO0lBQ3JCLENBQUM7RUFDRjtBQUNEOyIsCiAgIm5hbWVzIjogWyJTWVNURU1fU0NSSVBUX0xJU1QiLCAiV0VCTUFTVEVSX0xJU1QiLCAiV0dfU0tJTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1dJS0lfSUQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiU3Rld2FyZCIsICJsb2NhbGl6ZSIsICJlbiIsICJDaGVja1VzZXIiLCAiU3VwcHJlc3MiLCAiU3lzT3AiLCAiSW50ZXJmYWNlQWRtaW4iLCAiVGVtcGxhdGVFZGl0b3IiLCAiVHJhbnN3aWtpIiwgIlBhdHJvbGxlciIsICJBdXRvUmV2aWV3ZXIiLCAiU2VuaW9yRWRpdG9yIiwgIkV2ZW50U3BvbnNvciIsICJNYXNzTWVzc2FnZVNlbmRlciIsICJDb25maXJtZWQiLCAiUk5SU1ZlcmlmeUV4ZW1wdCIsICJCb3QiLCAiRmxvb2QiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAiYXBwZW5kSWNvbiIsICJpbmRpY2F0b3JUZXh0IiwgInNwYW5DbGFzcyIsICJ0YWciLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJjb25jYXQiLCAiaW5jbHVkZXMiLCAiaW5kaWNhdG9yIiwgIkZyYWdtZW50IiwgInRpdGxlIiwgIiRib2R5IiwgIiQiLCAiYXBwZW5kIiwgInByZXBlbmRUbyIsICJmaW5kIiwgImdldFBlcm1pc3Npb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYXBpIiwgImluaXRNd0FwaSIsICJsaXN0VXNlcnNQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXN1c2VycyIsICJ1c3Byb3AiLCAicXVlcnkiLCAiZ3JvdXBzIiwgInVzZXJzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiXQp9Cg==

})();

/* </nowiki> */
