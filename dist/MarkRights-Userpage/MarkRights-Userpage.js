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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
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
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
//! src/MarkRights-Userpage/options.json
var mountPointSelector = "#footer-info,.page-info";
var userNameSpaceNumber = 2;
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
//! src/MarkRights-Userpage/modules/getPermissions.ts
var import_ext_gadget4 = require("ext.gadget.MarkRights");
//! src/MarkRights-Userpage/components/react.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var FooterNotice = ({
  spanClass,
  children = /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  const classNames = ["gadget-markrights_userpage", "gadget-markrights_userpage__".concat(spanClass)];
  return /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, skin === "citizen" ? /* @__PURE__ */ import_ext_gadget.default.createElement("section", {
    className: [...classNames, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
  }, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null)) : ["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
    className: [classNames, "noprint"]
  }, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null)) : /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    className: [classNames, "noprint"]
  }, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null)));
};
var Indicator = ({
  indicatorText,
  spanClass
}) => {
  if (!indicatorText) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null);
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
    className: ["gadget-markrights_userpage__icon", "gadget-markrights_userpage__icon__".concat(spanClass)],
    title: indicatorText
  }), /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
    className: "gadget-markrights_userpage__text"
  }, indicatorText));
};
var FooterIcon = ({
  spanClass,
  indicatorText
}) => /* @__PURE__ */ import_ext_gadget.default.createElement(FooterNotice, {
  spanClass
}, /* @__PURE__ */ import_ext_gadget.default.createElement(Indicator, {
  indicatorText,
  spanClass
}));
//! src/MarkRights-Userpage/modules/appendIcon.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var appendFooterNotice = (element) => {
  const mountPoint = document.querySelector(mountPointSelector);
  if (mountPoint) {
    mountPoint.prepend(element);
  }
};
var appendIcon = ({
  indicatorText,
  spanClass
}) => {
  if (spanClass === "unknown" || !indicatorText) {
    return;
  }
  appendFooterNotice(/* @__PURE__ */ import_ext_gadget2.default.createElement(FooterIcon, {
    spanClass,
    indicatorText
  }));
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
//! src/MarkRights-Userpage/modules/getPermissions.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var getPermissions = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (wgRelevantUserName) {
    try {
      var _localGroupsMap$wgRel, _globalGroupsMap$wgRe;
      const localGroupsMap = yield (0, import_ext_gadget4.getLocalUserGroups)([wgRelevantUserName]);
      const localGroups = (_localGroupsMap$wgRel = localGroupsMap[wgRelevantUserName]) !== null && _localGroupsMap$wgRel !== void 0 ? _localGroupsMap$wgRel : [];
      const globalGroupsMap = yield (0, import_ext_gadget4.getGlobalUserGroups)([wgRelevantUserName]);
      const globalGroups = (_globalGroupsMap$wgRe = globalGroupsMap[wgRelevantUserName]) !== null && _globalGroupsMap$wgRe !== void 0 ? _globalGroupsMap$wgRe : [];
      const groups = (0, import_ext_gadget5.uniqueArray)([...localGroups, ...globalGroups]).filter((element) => {
        return !["*", "user", "autoconfirmed", "rnrsverify-confirmed", "bot"].includes(element);
      });
      if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
      } else if (WEBMASTER_LIST.includes(wgRelevantUserName)) {
        appendIcon({
          indicatorText: getMessage("qiuwen"),
          spanClass: "qiuwen"
        });
      } else {
        var _iterator2 = _createForOfIteratorHelper(groups), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const group = _step2.value;
            appendIcon({
              indicatorText: getMessage(group),
              spanClass: group
            });
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
  return function getPermissions2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/MarkRights-Userpage/MarkRights-Userpage.ts
(function markRightsUserPage() {
  const {
    wgAction,
    wgNamespaceNumber,
    wgPageName,
    wgRelevantUserName
  } = mw.config.get();
  if (!wgRelevantUserName || !(wgNamespaceNumber === userNameSpaceNumber) || !(wgAction === "view")) {
    return;
  }
  if (mw.util.isIPv4Address(wgRelevantUserName) || mw.util.isIPv6Address(wgRelevantUserName)) {
    return;
  }
  const relevantUserPageName = new mw.Title(wgRelevantUserName, userNameSpaceNumber).toText();
  const pageName = new mw.Title(wgPageName).toText();
  if (pageName !== relevantUserPageName) {
    return;
  }
  void getPermissions(wgRelevantUserName);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvZ2V0UGVybWlzc2lvbnMudHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvY29tcG9uZW50cy9yZWFjdC50c3giLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9hcHBlbmRJY29uLnRzeCIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvTWFya1JpZ2h0cy1Vc2VycGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidXNlck5hbWVTcGFjZU51bWJlclwiOiAyLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9O1xuIiwgImltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldEdsb2JhbFVzZXJHcm91cHMsIGdldExvY2FsVXNlckdyb3Vwc30gZnJvbSAnZXh0LmdhZGdldC5NYXJrUmlnaHRzJztcbmltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwcGVuZEljb259IGZyb20gJy4vYXBwZW5kSWNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9ucyA9IGFzeW5jICh3Z1JlbGV2YW50VXNlck5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGxvY2FsR3JvdXBzTWFwID0gYXdhaXQgZ2V0TG9jYWxVc2VyR3JvdXBzKFt3Z1JlbGV2YW50VXNlck5hbWVdKTtcblx0XHRjb25zdCBsb2NhbEdyb3VwcyA9IGxvY2FsR3JvdXBzTWFwW3dnUmVsZXZhbnRVc2VyTmFtZV0gPz8gW107XG5cblx0XHRjb25zdCBnbG9iYWxHcm91cHNNYXAgPSBhd2FpdCBnZXRHbG9iYWxVc2VyR3JvdXBzKFt3Z1JlbGV2YW50VXNlck5hbWVdKTtcblx0XHRjb25zdCBnbG9iYWxHcm91cHMgPSBnbG9iYWxHcm91cHNNYXBbd2dSZWxldmFudFVzZXJOYW1lXSA/PyBbXTtcblxuXHRcdGNvbnN0IGdyb3VwcyA9IHVuaXF1ZUFycmF5KFsuLi5sb2NhbEdyb3VwcywgLi4uZ2xvYmFsR3JvdXBzXSkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHQvLyBEbyBub3Qgc2hvdyBpbXBsaWNpdCBncm91cHMuIEJvdHMgQWxyZWFkeSBzaG93biBpbiBHZW9Mb2NhdGlvblZpZXdlclxuXHRcdFx0cmV0dXJuICFbJyonLCAndXNlcicsICdhdXRvY29uZmlybWVkJywgJ3JucnN2ZXJpZnktY29uZmlybWVkJywgJ2JvdCddLmluY2x1ZGVzKGVsZW1lbnQpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0XHQvLyBBbHJlYWR5IHNob3duIGluIEdlb0xvY2F0aW9uVmlld2VyXG5cdFx0fSBlbHNlIGlmIChXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0XHRhcHBlbmRJY29uKHtpbmRpY2F0b3JUZXh0OiBnZXRNZXNzYWdlKCdxaXV3ZW4nKSwgc3BhbkNsYXNzOiAncWl1d2VuJ30pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xuXHRcdFx0XHRhcHBlbmRJY29uKHtpbmRpY2F0b3JUZXh0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLCBzcGFuQ2xhc3M6IGdyb3VwIGFzIFVzZXJSaWdodHN9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbnN9O1xuIiwgImltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRzcGFuQ2xhc3M6IHN0cmluZztcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXTtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtzcGFuQ2xhc3MsIGNoaWxkcmVuID0gPD48Lz59OiBGb290ZXJOb3RpY2VQcm9wcykgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGNsYXNzTmFtZXMgPSBbJ2dhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlJywgYGdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX18ke3NwYW5DbGFzc31gXTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7c2tpbiA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1suLi5jbGFzc05hbWVzLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVuID8/IDw+PC8+fVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpIDogWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSA/IChcblx0XHRcdFx0PGxpIGNsYXNzTmFtZT17W2NsYXNzTmFtZXMsICdub3ByaW50J119PntjaGlsZHJlbiA/PyA8PjwvPn08L2xpPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1tjbGFzc05hbWVzLCAnbm9wcmludCddfT57Y2hpbGRyZW4gPz8gPD48Lz59PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufTtcblxuaW50ZXJmYWNlIEluZGljYXRvclByb3BzIHtcblx0aW5kaWNhdG9yVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRzcGFuQ2xhc3M6IFVzZXJSaWdodHMgfCAndW5rbm93bic7XG59XG5cbmNvbnN0IEluZGljYXRvciA9ICh7aW5kaWNhdG9yVGV4dCwgc3BhbkNsYXNzfTogSW5kaWNhdG9yUHJvcHMpID0+IHtcblx0aWYgKCFpbmRpY2F0b3JUZXh0KSB7XG5cdFx0cmV0dXJuIDw+PC8+O1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0Y2xhc3NOYW1lPXtbJ2dhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19pY29uJywgYGdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19pY29uX18ke3NwYW5DbGFzc31gXX1cblx0XHRcdFx0dGl0bGU9e2luZGljYXRvclRleHR9XG5cdFx0XHQvPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX3RleHRcIj57aW5kaWNhdG9yVGV4dH08L3NwYW4+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5jb25zdCBGb290ZXJJY29uID0gKHtzcGFuQ2xhc3MsIGluZGljYXRvclRleHR9OiBJbmRpY2F0b3JQcm9wcykgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlIHNwYW5DbGFzcz17c3BhbkNsYXNzfT5cblx0XHQ8SW5kaWNhdG9yIGluZGljYXRvclRleHQ9e2luZGljYXRvclRleHR9IHNwYW5DbGFzcz17c3BhbkNsYXNzfSAvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmV4cG9ydCB7Rm9vdGVySWNvbiwgdHlwZSBJbmRpY2F0b3JQcm9wc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtGb290ZXJJY29uLCB0eXBlIEluZGljYXRvclByb3BzfSBmcm9tICcuLi9jb21wb25lbnRzL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgYXBwZW5kRm9vdGVyTm90aWNlID0gKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcblx0Y29uc3QgbW91bnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblxuXHRpZiAobW91bnRQb2ludCkge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZChlbGVtZW50KTtcblx0fVxufTtcblxuY29uc3QgYXBwZW5kSWNvbiA9ICh7aW5kaWNhdG9yVGV4dCwgc3BhbkNsYXNzfTogSW5kaWNhdG9yUHJvcHMpOiB2b2lkID0+IHtcblx0aWYgKHNwYW5DbGFzcyA9PT0gJ3Vua25vd24nIHx8ICFpbmRpY2F0b3JUZXh0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXBwZW5kRm9vdGVyTm90aWNlKDxGb290ZXJJY29uIHNwYW5DbGFzcz17c3BhbkNsYXNzfSBpbmRpY2F0b3JUZXh0PXtpbmRpY2F0b3JUZXh0fSAvPik7XG59O1xuXG5leHBvcnQge2FwcGVuZEljb259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRxaXV3ZW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VibWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0XHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdH0pLFxuXHRcdHN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHRjaGVja3VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdHN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdHN5c29wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdCdpbnRlcmZhY2UtYWRtaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHR0cmFuc3dpa2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW1wb3J0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+85YWl6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WMr+WFpeiAhScsXG5cdFx0fSksXG5cdFx0cGF0cm9sbGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcicsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRhdXRvcmV2aWV3ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwYWdlIHBhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l6LGB5YWNJyxcblx0XHR9KSxcblx0XHRzZW5pb3JlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VuaW9yIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfotYTmt7HnvJbogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6LOH5rex57eo6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uc30gZnJvbSAnLi9tb2R1bGVzL2dldFBlcm1pc3Npb25zJztcblxuKGZ1bmN0aW9uIG1hcmtSaWdodHNVc2VyUGFnZSgpOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dSZWxldmFudFVzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUgfHwgISh3Z05hbWVzcGFjZU51bWJlciA9PT0gT1BUSU9OUy51c2VyTmFtZVNwYWNlTnVtYmVyKSB8fCAhKHdnQWN0aW9uID09PSAndmlldycpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyh3Z1JlbGV2YW50VXNlck5hbWUpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcmVsZXZhbnRVc2VyUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1JlbGV2YW50VXNlck5hbWUsIE9QVElPTlMudXNlck5hbWVTcGFjZU51bWJlcikudG9UZXh0KCk7XG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudG9UZXh0KCk7XG5cdGlmIChwYWdlTmFtZSAhPT0gcmVsZXZhbnRVc2VyUGFnZU5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGdldFBlcm1pc3Npb25zKHdnUmVsZXZhbnRVc2VyTmFtZSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLHNCQUF1Qjs7QUNGeEIsSUFBTUMscUJBQStCLENBQ3BDLFNBQ0EsUUFDQSxVQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLFVBQVUsdUJBQXVCLG1CQUFtQjs7QUNWdEYsSUFBQUMscUJBQXNEQyxRQUFBLHVCQUFBOztBQ0R0RCxJQUFBQyxvQkFBa0NDLFFBQUFGLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBUWxDLElBQU1HLGVBQWVBLENBQUM7RUFBQ0M7RUFBV0MsV0FBV0osa0NBQUFLLFFBQUFDLGNBQUFOLGtCQUFBSyxRQUFBRSxVQUFBLElBQUU7QUFBRyxNQUF5QjtBQUMxRSxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUM3QixRQUFNQyxhQUFhLENBQUMsOEJBQUEsK0JBQUFDLE9BQTZEVixTQUFTLENBQUE7QUFFMUYsU0FDQ0gsa0NBQUFLLFFBQUFDLGNBQUFOLGtCQUFBSyxRQUFBRSxVQUFBLE1BQ0VDLFNBQVMsWUFDVFIsa0NBQUFLLFFBQUFDLGNB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QUEsWUFBQTtBQUFwQixlQUFBRixXQUFBRyxFQUFBLEdBQUEsRUFBQUQsU0FBQUYsV0FBQUksRUFBQSxHQUFBQyxRQUE0QjtBQUFBLGtCQUFqQkMsUUFBQUosT0FBQUs7QUFDVjlDLHVCQUFXO2NBQUNSLGVBQWU2QixXQUFXd0IsS0FBbUI7Y0FBR3JFLFdBQVdxRTtZQUFtQixDQUFDO1VBQzVGO1FBQUEsU0FBQUUsS0FBQTtBQUFBUixxQkFBQVMsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQVIscUJBQUFVLEVBQUE7UUFBQTtNQUNEO0lBQ0QsUUFBUTtJQUFDO0VBQ1YsQ0FBQTtBQUFBLFNBQUEsU0F2Qk16QixnQkFBQTBCLElBQUE7QUFBQSxXQUFBekIsS0FBQTBCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7Q0lKTCxTQUFTQyxxQkFBMkI7QUFDcEMsUUFBTTtJQUFDQztJQUFVQztJQUFtQkM7SUFBWTdCO0VBQWtCLElBQUk3QyxHQUFHQyxPQUFPQyxJQUFJO0FBQ3BGLE1BQUksQ0FBQzJDLHNCQUFzQixFQUFFNEIsc0JBQThCdkYsd0JBQXdCLEVBQUVzRixhQUFhLFNBQVM7QUFDMUc7RUFDRDtBQUVBLE1BQUl4RSxHQUFHMkUsS0FBS0MsY0FBYy9CLGtCQUFrQixLQUFLN0MsR0FBRzJFLEtBQUtFLGNBQWNoQyxrQkFBa0IsR0FBRztBQUMzRjtFQUNEO0FBRUEsUUFBTWlDLHVCQUErQixJQUFJOUUsR0FBRytFLE1BQU1sQyxvQkFBNEIzRCxtQkFBbUIsRUFBRThGLE9BQU87QUFDMUcsUUFBTUMsV0FBbUIsSUFBSWpGLEdBQUcrRSxNQUFNTCxVQUFVLEVBQUVNLE9BQU87QUFDekQsTUFBSUMsYUFBYUgsc0JBQXNCO0FBQ3RDO0VBQ0Q7QUFFQSxPQUFLcEMsZUFBZUcsa0JBQWtCO0FBQ3ZDLEdBQUc7IiwKICAibmFtZXMiOiBbIm1vdW50UG9pbnRTZWxlY3RvciIsICJ1c2VyTmFtZVNwYWNlTnVtYmVyIiwgIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgIkZvb3Rlck5vdGljZSIsICJzcGFuQ2xhc3MiLCAiY2hpbGRyZW4iLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjbGFzc05hbWVzIiwgImNvbmNhdCIsICJjbGFzc05hbWUiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJJbmRpY2F0b3IiLCAiaW5kaWNhdG9yVGV4dCIsICJ0aXRsZSIsICJGb290ZXJJY29uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcHBlbmRGb290ZXJOb3RpY2UiLCAiZWxlbWVudCIsICJtb3VudFBvaW50IiwgInByZXBlbmQiLCAiYXBwZW5kSWNvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInFpdXdlbiIsICJsb2NhbGl6ZSIsICJlbiIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJzZW5pb3JlZGl0b3IiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImdldFBlcm1pc3Npb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgIl9sb2NhbEdyb3Vwc01hcCR3Z1JlbCIsICJfZ2xvYmFsR3JvdXBzTWFwJHdnUmUiLCAibG9jYWxHcm91cHNNYXAiLCAiZ2V0TG9jYWxVc2VyR3JvdXBzIiwgImxvY2FsR3JvdXBzIiwgImdsb2JhbEdyb3Vwc01hcCIsICJnZXRHbG9iYWxVc2VyR3JvdXBzIiwgImdsb2JhbEdyb3VwcyIsICJncm91cHMiLCAidW5pcXVlQXJyYXkiLCAiZmlsdGVyIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImdyb3VwIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm1hcmtSaWdodHNVc2VyUGFnZSIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgInV0aWwiLCAiaXNJUHY0QWRkcmVzcyIsICJpc0lQdjZBZGRyZXNzIiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJwYWdlTmFtZSJdCn0K
