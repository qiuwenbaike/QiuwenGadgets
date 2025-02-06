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
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
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
  }, children) : ["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
    className: [classNames, "noprint"]
  }, children) : /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    className: [classNames, "noprint"]
  }, children));
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
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
var appendIcon = ({
  indicatorText,
  spanClass
}) => {
  if (spanClass === "unknown" || !indicatorText) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  mountPoint.prepend(/* @__PURE__ */ import_ext_gadget2.default.createElement(FooterIcon, {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvZ2V0UGVybWlzc2lvbnMudHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvY29tcG9uZW50cy9yZWFjdC50c3giLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9hcHBlbmRJY29uLnRzeCIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvTWFya1JpZ2h0cy1Vc2VycGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidXNlck5hbWVTcGFjZU51bWJlclwiOiAyLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9O1xuIiwgImltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldEdsb2JhbFVzZXJHcm91cHMsIGdldExvY2FsVXNlckdyb3Vwc30gZnJvbSAnZXh0LmdhZGdldC5NYXJrUmlnaHRzJztcbmltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwcGVuZEljb259IGZyb20gJy4vYXBwZW5kSWNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9ucyA9IGFzeW5jICh3Z1JlbGV2YW50VXNlck5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGxvY2FsR3JvdXBzTWFwID0gYXdhaXQgZ2V0TG9jYWxVc2VyR3JvdXBzKFt3Z1JlbGV2YW50VXNlck5hbWVdKTtcblx0XHRjb25zdCBsb2NhbEdyb3VwcyA9IGxvY2FsR3JvdXBzTWFwW3dnUmVsZXZhbnRVc2VyTmFtZV0gPz8gW107XG5cblx0XHRjb25zdCBnbG9iYWxHcm91cHNNYXAgPSBhd2FpdCBnZXRHbG9iYWxVc2VyR3JvdXBzKFt3Z1JlbGV2YW50VXNlck5hbWVdKTtcblx0XHRjb25zdCBnbG9iYWxHcm91cHMgPSBnbG9iYWxHcm91cHNNYXBbd2dSZWxldmFudFVzZXJOYW1lXSA/PyBbXTtcblxuXHRcdGNvbnN0IGdyb3VwcyA9IHVuaXF1ZUFycmF5KFsuLi5sb2NhbEdyb3VwcywgLi4uZ2xvYmFsR3JvdXBzXSkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHQvLyBEbyBub3Qgc2hvdyBpbXBsaWNpdCBncm91cHMuIEJvdHMgQWxyZWFkeSBzaG93biBpbiBHZW9Mb2NhdGlvblZpZXdlclxuXHRcdFx0cmV0dXJuICFbJyonLCAndXNlcicsICdhdXRvY29uZmlybWVkJywgJ3JucnN2ZXJpZnktY29uZmlybWVkJywgJ2JvdCddLmluY2x1ZGVzKGVsZW1lbnQpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0XHQvLyBBbHJlYWR5IHNob3duIGluIEdlb0xvY2F0aW9uVmlld2VyXG5cdFx0fSBlbHNlIGlmIChXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0XHRhcHBlbmRJY29uKHtpbmRpY2F0b3JUZXh0OiBnZXRNZXNzYWdlKCdxaXV3ZW4nKSwgc3BhbkNsYXNzOiAncWl1d2VuJ30pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xuXHRcdFx0XHRhcHBlbmRJY29uKHtpbmRpY2F0b3JUZXh0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLCBzcGFuQ2xhc3M6IGdyb3VwIGFzIFVzZXJSaWdodHN9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbnN9O1xuIiwgImltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuaW50ZXJmYWNlIEZvb3Rlck5vdGljZVByb3BzIHtcblx0c3BhbkNsYXNzOiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50O1xufVxuXG5jb25zdCBGb290ZXJOb3RpY2UgPSAoe3NwYW5DbGFzcywgY2hpbGRyZW4gPSA8PjwvPn06IEZvb3Rlck5vdGljZVByb3BzKSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFsnZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfXyR7c3BhbkNsYXNzfWBdO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtza2luID09PSAnY2l0aXplbicgPyAoXG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17Wy4uLmNsYXNzTmFtZXMsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdCkgOiBbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpID8gKFxuXHRcdFx0XHQ8bGkgY2xhc3NOYW1lPXtbY2xhc3NOYW1lcywgJ25vcHJpbnQnXX0+e2NoaWxkcmVufTwvbGk+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W2NsYXNzTmFtZXMsICdub3ByaW50J119PntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5pbnRlcmZhY2UgSW5kaWNhdG9yUHJvcHMge1xuXHRpbmRpY2F0b3JUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdHNwYW5DbGFzczogVXNlclJpZ2h0cyB8ICd1bmtub3duJztcbn1cblxuY29uc3QgSW5kaWNhdG9yID0gKHtpbmRpY2F0b3JUZXh0LCBzcGFuQ2xhc3N9OiBJbmRpY2F0b3JQcm9wcykgPT4ge1xuXHRpZiAoIWluZGljYXRvclRleHQpIHtcblx0XHRyZXR1cm4gPD48Lz47XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRjbGFzc05hbWU9e1snZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb24nLCBgZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb25fXyR7c3BhbkNsYXNzfWBdfVxuXHRcdFx0XHR0aXRsZT17aW5kaWNhdG9yVGV4dH1cblx0XHRcdC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fdGV4dFwiPntpbmRpY2F0b3JUZXh0fTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmNvbnN0IEZvb3Rlckljb24gPSAoe3NwYW5DbGFzcywgaW5kaWNhdG9yVGV4dH06IEluZGljYXRvclByb3BzKSA9PiAoXG5cdDxGb290ZXJOb3RpY2Ugc3BhbkNsYXNzPXtzcGFuQ2xhc3N9PlxuXHRcdDxJbmRpY2F0b3IgaW5kaWNhdG9yVGV4dD17aW5kaWNhdG9yVGV4dH0gc3BhbkNsYXNzPXtzcGFuQ2xhc3N9IC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuZXhwb3J0IHtGb290ZXJJY29uLCB0eXBlIEluZGljYXRvclByb3BzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0Zvb3Rlckljb24sIHR5cGUgSW5kaWNhdG9yUHJvcHN9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcblxuY29uc3QgYXBwZW5kSWNvbiA9ICh7aW5kaWNhdG9yVGV4dCwgc3BhbkNsYXNzfTogSW5kaWNhdG9yUHJvcHMpOiB2b2lkID0+IHtcblx0aWYgKHNwYW5DbGFzcyA9PT0gJ3Vua25vd24nIHx8ICFpbmRpY2F0b3JUZXh0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbW91bnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0aWYgKCFtb3VudFBvaW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bW91bnRQb2ludC5wcmVwZW5kKDxGb290ZXJJY29uIHNwYW5DbGFzcz17c3BhbkNsYXNzfSBpbmRpY2F0b3JUZXh0PXtpbmRpY2F0b3JUZXh0fSAvPik7XG59O1xuXG5leHBvcnQge2FwcGVuZEljb259O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRxaXV3ZW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VibWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0XHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdH0pLFxuXHRcdHN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHRjaGVja3VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdHN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdHN5c29wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdCdpbnRlcmZhY2UtYWRtaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHR0cmFuc3dpa2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW1wb3J0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+85YWl6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WMr+WFpeiAhScsXG5cdFx0fSksXG5cdFx0cGF0cm9sbGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcicsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRhdXRvcmV2aWV3ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwYWdlIHBhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l6LGB5YWNJyxcblx0XHR9KSxcblx0XHRzZW5pb3JlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VuaW9yIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfotYTmt7HnvJbogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6LOH5rex57eo6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRQZXJtaXNzaW9uc30gZnJvbSAnLi9tb2R1bGVzL2dldFBlcm1pc3Npb25zJztcblxuKGZ1bmN0aW9uIG1hcmtSaWdodHNVc2VyUGFnZSgpOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dSZWxldmFudFVzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUgfHwgISh3Z05hbWVzcGFjZU51bWJlciA9PT0gT1BUSU9OUy51c2VyTmFtZVNwYWNlTnVtYmVyKSB8fCAhKHdnQWN0aW9uID09PSAndmlldycpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyh3Z1JlbGV2YW50VXNlck5hbWUpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcmVsZXZhbnRVc2VyUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1JlbGV2YW50VXNlck5hbWUsIE9QVElPTlMudXNlck5hbWVTcGFjZU51bWJlcikudG9UZXh0KCk7XG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudG9UZXh0KCk7XG5cdGlmIChwYWdlTmFtZSAhPT0gcmVsZXZhbnRVc2VyUGFnZU5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGdldFBlcm1pc3Npb25zKHdnUmVsZXZhbnRVc2VyTmFtZSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLHNCQUF1Qjs7QUNGeEIsSUFBTUMscUJBQStCLENBQ3BDLFNBQ0EsUUFDQSxVQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLFVBQVUsdUJBQXVCLG1CQUFtQjs7QUNWdEYsSUFBQUMscUJBQXNEQyxRQUFBLHVCQUFBOztBQ0R0RCxJQUFBQyxvQkFBa0NDLFFBQUFGLFFBQUEsZ0JBQUEsR0FBQSxDQUFBO0FBUWxDLElBQU1HLGVBQWVBLENBQUM7RUFBQ0M7RUFBV0MsV0FBV0osa0NBQUFLLFFBQUFDLGNBQUFOLGtCQUFBSyxRQUFBRSxVQUFBLElBQUU7QUFBRyxNQUF5QjtBQUMxRSxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUM3QixRQUFNQyxhQUFhLENBQUMsOEJBQUEsK0JBQUFDLE9BQTZEVixTQUFTLENBQUE7QUFFMUYsU0FDQ0gsa0NBQUFLLFFBQUFDLGNBQUFOLGtCQUFBSyxRQUFBRSxVQUFBLE1BQ0VDLFNBQVMsWUFDVFIsa0NBQUFLLFFBQUFDLGNBQUMsV0FBQTtJQUFRUSxXQUFXLENBQUMsR0FBR0YsWUFBWSxtQkFBbUIsaUNBQWlDLFNBQVM7RUFBQSxHQUMvRlIsUUFDRixJQUNHLENBQUMsVUFBVSxlQUFlLFFBQVEsRUFBRVcsU0FBU1AsSUFBSSxLQUFLUSxTQUFTQyxj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QU07SUFBQ0M7SUFBVUM7SUFBbUJDO0lBQVk5QjtFQUFrQixJQUFJM0MsR0FBR0MsT0FBT0MsSUFBSTtBQUNwRixNQUFJLENBQUN5QyxzQkFBc0IsRUFBRTZCLHNCQUE4QnRGLHdCQUF3QixFQUFFcUYsYUFBYSxTQUFTO0FBQzFHO0VBQ0Q7QUFFQSxNQUFJdkUsR0FBRzBFLEtBQUtDLGNBQWNoQyxrQkFBa0IsS0FBSzNDLEdBQUcwRSxLQUFLRSxjQUFjakMsa0JBQWtCLEdBQUc7QUFDM0Y7RUFDRDtBQUVBLFFBQU1rQyx1QkFBK0IsSUFBSTdFLEdBQUc4RSxNQUFNbkMsb0JBQTRCekQsbUJBQW1CLEVBQUU2RixPQUFPO0FBQzFHLFFBQU1DLFdBQW1CLElBQUloRixHQUFHOEUsTUFBTUwsVUFBVSxFQUFFTSxPQUFPO0FBQ3pELE1BQUlDLGFBQWFILHNCQUFzQjtBQUN0QztFQUNEO0FBRUEsT0FBS3JDLGVBQWVHLGtCQUFrQjtBQUN2QyxHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidXNlck5hbWVTcGFjZU51bWJlciIsICJTWVNURU1fU0NSSVBUX0xJU1QiLCAiV0VCTUFTVEVSX0xJU1QiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJGb290ZXJOb3RpY2UiLCAic3BhbkNsYXNzIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lcyIsICJjb25jYXQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiSW5kaWNhdG9yIiwgImluZGljYXRvclRleHQiLCAidGl0bGUiLCAiRm9vdGVySWNvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBwZW5kSWNvbiIsICJtb3VudFBvaW50IiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJxaXV3ZW4iLCAibG9jYWxpemUiLCAiZW4iLCAic3Rld2FyZCIsICJjaGVja3VzZXIiLCAic3VwcHJlc3MiLCAic3lzb3AiLCAidGVtcGxhdGVlZGl0b3IiLCAidHJhbnN3aWtpIiwgInBhdHJvbGxlciIsICJhdXRvcmV2aWV3ZXIiLCAic2VuaW9yZWRpdG9yIiwgImV2ZW50c3BvbnNvciIsICJjb25maXJtZWQiLCAiYXV0b2NvbmZpcm1lZCIsICJib3QiLCAiZmxvb2QiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnZXRQZXJtaXNzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJfbG9jYWxHcm91cHNNYXAkd2dSZWwiLCAiX2dsb2JhbEdyb3Vwc01hcCR3Z1JlIiwgImxvY2FsR3JvdXBzTWFwIiwgImdldExvY2FsVXNlckdyb3VwcyIsICJsb2NhbEdyb3VwcyIsICJnbG9iYWxHcm91cHNNYXAiLCAiZ2V0R2xvYmFsVXNlckdyb3VwcyIsICJnbG9iYWxHcm91cHMiLCAiZ3JvdXBzIiwgInVuaXF1ZUFycmF5IiwgImZpbHRlciIsICJlbGVtZW50IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImdyb3VwIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm1hcmtSaWdodHNVc2VyUGFnZSIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgInV0aWwiLCAiaXNJUHY0QWRkcmVzcyIsICJpc0lQdjZBZGRyZXNzIiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJwYWdlTmFtZSJdCn0K
