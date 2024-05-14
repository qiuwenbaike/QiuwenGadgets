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
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
//! src/MarkRights-Userpage/options.json
var mountPointSelector = "#footer-info,.page-info";
var version = 1.1;
//! src/MarkRights-Userpage/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("MarkRights-Userpage/".concat(version));
//! src/MarkRights-Userpage/modules/appendIcon.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var elementWrap = (spanClass, innerElement) => {
  const {
    skin
  } = mw.config.get();
  const classNames = ["gadget-markrights_userpage", "gadget-markrights_userpage__".concat(spanClass)];
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      className: classNames
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      className: classNames
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: classNames
  }, innerElement);
};
var indicator = (indicatorText, spanClass) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: ["gadget-markrights_userpage__icon", "gadget-markrights_userpage__icon__".concat(spanClass)],
  title: indicatorText
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: "gadget-markrights_userpage__text"
}, indicatorText));
var appendIcon = (indicatorText, spanClass) => {
  var _document$querySelect;
  if (spanClass === "unknown" || !indicatorText) {
    return;
  }
  const tag = elementWrap(spanClass, indicator(indicatorText, spanClass));
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
var import_ext_gadget4 = require("ext.gadget.Util");
var queryUserGroups = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (ususers) {
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups"
    };
    const response = yield api.post(params);
    return response;
  });
  return function queryUserGroups2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var queryGlobalUserGroups = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (guiuser) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: "globaluserinfo",
      guiuser,
      guiprop: "groups"
    };
    const response = yield api.post(params);
    return response;
  });
  return function queryGlobalUserGroups2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getPermissions = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (wgRelevantUserName2) {
    try {
      const {
        query: localquery
      } = yield queryUserGroups(wgRelevantUserName2);
      const {
        query: globalquery
      } = yield queryGlobalUserGroups(wgRelevantUserName2);
      const [{
        groups: localgroups
      }] = localquery.users;
      const {
        groups: globalgroups
      } = globalquery.globaluserinfo;
      const groups = (0, import_ext_gadget4.uniqueArray)([...localgroups, ...globalgroups]).filter((element) => {
        return !["*", "user", "autoconfirmed", "rnrsverify-confirmed", "bot"].includes(element);
      });
      if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName2)) {
      } else if (WEBMASTER_LIST.includes(wgRelevantUserName2)) {
        appendIcon(getMessage("qiuwen"), "qiuwen");
      } else {
        var _iterator2 = _createForOfIteratorHelper(groups), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const group = _step2.value;
            appendIcon(getMessage(group), group);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch {
    }
  });
  return function getPermissions2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/MarkRights-Userpage/MarkRights-Userpage.ts
var {
  wgAction,
  wgNamespaceNumber,
  wgRelevantUserName
} = mw.config.get();
if (wgRelevantUserName && wgNamespaceNumber === 2 && wgAction === "view") {
  const relevantUserPageName = new mw.Title(wgRelevantUserName, 2).toText();
  const pageName = new mw.Title(mw.config.get("wgPageName")).toText();
  if (relevantUserPageName === pageName) {
    void getPermissions(wgRelevantUserName);
  }
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvYXBwZW5kSWNvbi50c3giLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvY29yZS50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9NYXJrUmlnaHRzLVVzZXJwYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBTWVNURU1fU0NSSVBUX0xJU1Q6IHN0cmluZ1tdID0gW1xuXHQn5rul55So6L+H5ruk5ZmoJyxcblx0J+axgumXu+e8luiAhScsXG5cdCfmsYLpl7vnmb7np5HnpL7ljLonLFxuXHQnRXhhbXBsZScsXG5cdCdFeHRlcm5hbCBjb250cmlidXRvcnMnLFxuXHQnTWFpbnRlbmFuY2Ugc2NyaXB0Jyxcblx0J01lZGlhV2lraSBkZWZhdWx0Jyxcblx0J01lZGlhV2lraSBtZXNzYWdlIGRlbGl2ZXJ5Jyxcblx0J05ldyB1c2VyIHBhZ2UnLFxuXTtcbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfTtcbiIsICJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IDEuMVxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya1JpZ2h0cy1Vc2VycGFnZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChzcGFuQ2xhc3M6IFVzZXJSaWdodHMsIGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFsnZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfXyR7c3BhbkNsYXNzfWBdO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57aW5uZXJFbGVtZW50fTwvc2VjdGlvbj47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBpbmRpY2F0b3IgPSAoaW5kaWNhdG9yVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkLCBzcGFuQ2xhc3M6IFVzZXJSaWdodHMgfCAndW5rbm93bicpID0+IChcblx0PD5cblx0XHQ8c3BhblxuXHRcdFx0Y2xhc3NOYW1lPXtbJ2dhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19pY29uJywgYGdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19pY29uX18ke3NwYW5DbGFzc31gXX1cblx0XHRcdHRpdGxlPXtpbmRpY2F0b3JUZXh0fVxuXHRcdC8+XG5cdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX3RleHRcIj57aW5kaWNhdG9yVGV4dH08L3NwYW4+XG5cdDwvPlxuKTtcblxuY29uc3QgYXBwZW5kSWNvbiA9IChpbmRpY2F0b3JUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQsIHNwYW5DbGFzczogVXNlclJpZ2h0cyB8ICd1bmtub3duJyk6IHZvaWQgPT4ge1xuXHRpZiAoc3BhbkNsYXNzID09PSAndW5rbm93bicgfHwgIWluZGljYXRvclRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgdGFnID0gZWxlbWVudFdyYXAoc3BhbkNsYXNzLCBpbmRpY2F0b3IoaW5kaWNhdG9yVGV4dCwgc3BhbkNsYXNzKSk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKVswXT8ucHJlcGVuZCh0YWcpO1xufTtcblxuZXhwb3J0IHthcHBlbmRJY29ufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0cWl1d2VuOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1dlYm1hc3RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnq5nplb8nLFxuXHRcdFx0J3poLWhhbnQnOiAn56uZ6ZW3Jyxcblx0XHR9KSxcblx0XHRzdGV3YXJkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N0ZXdhcmQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6KOB5Yaz5aeU5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ijgeaxuuWnlOWToScsXG5cdFx0fSksXG5cdFx0Y2hlY2t1c2VyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NoZWNrVXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnlKjmiLfmn6XmoLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn55So5oi25p+l5qC4Jyxcblx0XHR9KSxcblx0XHRzdXBwcmVzczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdmVyc2lnaHRlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnm5HnnaPlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn55uj552j5ZOhJyxcblx0XHR9KSxcblx0XHRzeXNvcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTeXNPcCcsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHQnaW50ZXJmYWNlLWFkbWluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnRlcmZhY2UgQWRtaW5pc3RyYXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfnlYzpnaLnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LuL6Z2i566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUZW1wbGF0ZSBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5qih5p2/57yW6L6R5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+aooeadv+e3qOi8r+WToScsXG5cdFx0fSksXG5cdFx0dHJhbnN3aWtpOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ltcG9ydGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvvOWFpeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfljK/lhaXogIUnLFxuXHRcdH0pLFxuXHRcdHBhdHJvbGxlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0YXV0b3Jldmlld2VyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcGFnZSBwYXRyb2wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeixgeWFjScsXG5cdFx0fSksXG5cdFx0c2VuaW9yZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlbmlvciBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn6LWE5rex57yW6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+izh+a3see3qOiAhScsXG5cdFx0fSksXG5cdFx0ZXZlbnRzcG9uc29yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V2ZW50IFNwb25zb3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5rS75Yqo57uE57uH6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+a0u+WLlee1hOe5lOiAhScsXG5cdFx0fSksXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTWFzc01lc3NhZ2Ugc2VuZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wkp+mHj+a2iOaBr+WPkemAgeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICflpKfph4/oqIrmga/lgrPpgIHogIUnLFxuXHRcdH0pLFxuXHRcdGNvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRhdXRvY29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0F1dG8tY29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn6Ieq5Yqo56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iHquWLleeiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHJlYWwtbmFtZSB2ZXJpZmljYXRpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6e5ZCN5Yi26aqM6K+B6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvpuWQjeWItumpl+itieixgeWFjScsXG5cdFx0fSksXG5cdFx0Ym90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JvdCcsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajkuronLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw5Lq6Jyxcblx0XHR9KSxcblx0XHRmbG9vZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGbG9vZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDnlKjmiLYnLFxuXHRcdH0pLFxuXHRcdCdpcGJsb2NrLWV4ZW1wdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBJUCBibG9ja3MnLFxuXHRcdFx0J3poLWhhbnMnOiAnSVDlsIHnpoHosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAnSVDlsIHpjpbosYHlhY0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2FwcGVuZEljb259IGZyb20gJy4vYXBwZW5kSWNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBxdWVyeVVzZXJHcm91cHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlHbG9iYWxVc2VyR3JvdXBzID0gYXN5bmMgKGd1aXVzZXI6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRtZXRhOiAnZ2xvYmFsdXNlcmluZm8nLFxuXHRcdGd1aXVzZXIsXG5cdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRQZXJtaXNzaW9ucyA9IGFzeW5jICh3Z1JlbGV2YW50VXNlck5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHtxdWVyeTogbG9jYWxxdWVyeX0gPSBhd2FpdCBxdWVyeVVzZXJHcm91cHMod2dSZWxldmFudFVzZXJOYW1lKTtcblx0XHRjb25zdCB7cXVlcnk6IGdsb2JhbHF1ZXJ5fSA9IGF3YWl0IHF1ZXJ5R2xvYmFsVXNlckdyb3Vwcyh3Z1JlbGV2YW50VXNlck5hbWUpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBbe2dyb3VwczogbG9jYWxncm91cHN9XTogW3tncm91cHM6IFVzZXJSaWdodHNbXX1dID0gbG9jYWxxdWVyeS51c2Vycztcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0Y29uc3Qge2dyb3VwczogZ2xvYmFsZ3JvdXBzfToge2dyb3VwczogVXNlclJpZ2h0c1tdfSA9IGdsb2JhbHF1ZXJ5Lmdsb2JhbHVzZXJpbmZvO1xuXG5cdFx0Y29uc3QgZ3JvdXBzID0gdW5pcXVlQXJyYXkoWy4uLmxvY2FsZ3JvdXBzLCAuLi5nbG9iYWxncm91cHNdKS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdC8vIERvIG5vdCBzaG93IGltcGxpY2l0IGdyb3Vwcy4gQm90cyBBbHJlYWR5IHNob3duIGluIEdlb0xvY2F0aW9uVmlld2VyXG5cdFx0XHRyZXR1cm4gIVsnKicsICd1c2VyJywgJ2F1dG9jb25maXJtZWQnLCAncm5yc3ZlcmlmeS1jb25maXJtZWQnLCAnYm90J10uaW5jbHVkZXMoZWxlbWVudCk7XG5cdFx0fSk7XG5cblx0XHRpZiAoU1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKHdnUmVsZXZhbnRVc2VyTmFtZSkpIHtcblx0XHRcdC8vIEFscmVhZHkgc2hvd24gaW4gR2VvTG9jYXRpb25WaWV3ZXJcblx0XHR9IGVsc2UgaWYgKFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKHdnUmVsZXZhbnRVc2VyTmFtZSkpIHtcblx0XHRcdGFwcGVuZEljb24oZ2V0TWVzc2FnZSgncWl1d2VuJyksICdxaXV3ZW4nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcblx0XHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKGdyb3VwKSwgZ3JvdXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxufTtcblxuZXhwb3J0IHtnZXRQZXJtaXNzaW9uc307XG4iLCAiaW1wb3J0IHtnZXRQZXJtaXNzaW9uc30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAod2dSZWxldmFudFVzZXJOYW1lICYmIHdnTmFtZXNwYWNlTnVtYmVyID09PSAyICYmIHdnQWN0aW9uID09PSAndmlldycpIHtcblx0Y29uc3QgcmVsZXZhbnRVc2VyUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1JlbGV2YW50VXNlck5hbWUsIDIpLnRvVGV4dCgpO1xuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSkudG9UZXh0KCk7XG5cdGlmIChyZWxldmFudFVzZXJQYWdlTmFtZSA9PT0gcGFnZU5hbWUpIHtcblx0XHR2b2lkIGdldFBlcm1pc3Npb25zKHdnUmVsZXZhbnRVc2VyTmFtZSk7XG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEscUJBQStCLENBQ3BDLFNBQ0EsUUFD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dEMsU0FBS2hDLGVBQWU0QixrQkFBa0I7RUFDdkM7QUFDRDsiLAogICJuYW1lcyI6IFsiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiZWxlbWVudFdyYXAiLCAic3BhbkNsYXNzIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lcyIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW5kaWNhdG9yIiwgImluZGljYXRvclRleHQiLCAiRnJhZ21lbnQiLCAidGl0bGUiLCAiYXBwZW5kSWNvbiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAidGFnIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInFpdXdlbiIsICJsb2NhbGl6ZSIsICJlbiIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJzZW5pb3JlZGl0b3IiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInF1ZXJ5VXNlckdyb3VwcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVzdXNlcnMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInVzcHJvcCIsICJyZXNwb25zZSIsICJwb3N0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAiX3JlZjIiLCAiZ3VpdXNlciIsICJtZXRhIiwgImd1aXByb3AiLCAiX3gyIiwgImdldFBlcm1pc3Npb25zIiwgIl9yZWYzIiwgIndnUmVsZXZhbnRVc2VyTmFtZTIiLCAicXVlcnkiLCAibG9jYWxxdWVyeSIsICJnbG9iYWxxdWVyeSIsICJncm91cHMiLCAibG9jYWxncm91cHMiLCAidXNlcnMiLCAiZ2xvYmFsZ3JvdXBzIiwgImdsb2JhbHVzZXJpbmZvIiwgInVuaXF1ZUFycmF5IiwgImZpbHRlciIsICJlbGVtZW50IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImdyb3VwIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiX3gzIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiXQp9Cg==
