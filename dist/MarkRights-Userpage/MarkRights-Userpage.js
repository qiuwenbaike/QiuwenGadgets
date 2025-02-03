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
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvZ2V0UGVybWlzc2lvbnMudHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvY29tcG9uZW50cy9yZWFjdC50c3giLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9hcHBlbmRJY29uLnRzeCIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvTWFya1JpZ2h0cy1Vc2VycGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidXNlck5hbWVTcGFjZU51bWJlclwiOiAyLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9O1xuIiwgImltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldEdsb2JhbFVzZXJHcm91cHMsIGdldExvY2FsVXNlckdyb3Vwc30gZnJvbSAnZXh0LmdhZGdldC5NYXJrUmlnaHRzJztcbmltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwcGVuZEljb259IGZyb20gJy4vYXBwZW5kSWNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBnZXRQZXJtaXNzaW9ucyA9IGFzeW5jICh3Z1JlbGV2YW50VXNlck5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGxvY2FsR3JvdXBzTWFwID0gYXdhaXQgZ2V0TG9jYWxVc2VyR3JvdXBzKFt3Z1JlbGV2YW50VXNlck5hbWVdKTtcblx0XHRjb25zdCBsb2NhbEdyb3VwcyA9IGxvY2FsR3JvdXBzTWFwW3dnUmVsZXZhbnRVc2VyTmFtZV0gPz8gW107XG5cblx0XHRjb25zdCBnbG9iYWxHcm91cHNNYXAgPSBhd2FpdCBnZXRHbG9iYWxVc2VyR3JvdXBzKFt3Z1JlbGV2YW50VXNlck5hbWVdKTtcblx0XHRjb25zdCBnbG9iYWxHcm91cHMgPSBnbG9iYWxHcm91cHNNYXBbd2dSZWxldmFudFVzZXJOYW1lXSA/PyBbXTtcblxuXHRcdGNvbnN0IGdyb3VwcyA9IHVuaXF1ZUFycmF5KFsuLi5sb2NhbEdyb3VwcywgLi4uZ2xvYmFsR3JvdXBzXSkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHQvLyBEbyBub3Qgc2hvdyBpbXBsaWNpdCBncm91cHMuIEJvdHMgQWxyZWFkeSBzaG93biBpbiBHZW9Mb2NhdGlvblZpZXdlclxuXHRcdFx0cmV0dXJuICFbJyonLCAndXNlcicsICdhdXRvY29uZmlybWVkJywgJ3JucnN2ZXJpZnktY29uZmlybWVkJywgJ2JvdCddLmluY2x1ZGVzKGVsZW1lbnQpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0XHQvLyBBbHJlYWR5IHNob3duIGluIEdlb0xvY2F0aW9uVmlld2VyXG5cdFx0fSBlbHNlIGlmIChXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpKSB7XG5cdFx0XHRhcHBlbmRJY29uKHtpbmRpY2F0b3JUZXh0OiBnZXRNZXNzYWdlKCdxaXV3ZW4nKSwgc3BhbkNsYXNzOiAncWl1d2VuJ30pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xuXHRcdFx0XHRhcHBlbmRJY29uKHtpbmRpY2F0b3JUZXh0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLCBzcGFuQ2xhc3M6IGdyb3VwIGFzIFVzZXJSaWdodHN9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbnN9O1xuIiwgImltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJ34vTWFya1JpZ2h0cy9tb2R1bGVzL3R5cGVzJztcblxuaW50ZXJmYWNlIEZvb3Rlck5vdGljZVByb3BzIHtcblx0c3BhbkNsYXNzOiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W107XG59XG5cbmNvbnN0IEZvb3Rlck5vdGljZSA9ICh7c3BhbkNsYXNzLCBjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBjbGFzc05hbWVzID0gWydnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZScsIGBnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fJHtzcGFuQ2xhc3N9YF07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e3NraW4gPT09ICdjaXRpemVuJyA/IChcblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbLi4uY2xhc3NOYW1lcywgJ3BhZ2UtaW5mb19faXRlbScsICdjaXRpemVuLWZvb3Rlcl9fcGFnZWluZm8taXRlbScsICdub3ByaW50J119PlxuXHRcdFx0XHRcdHtjaGlsZHJlbiA/PyA8PjwvPn1cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0KSA6IFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykgPyAoXG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9e1tjbGFzc05hbWVzLCAnbm9wcmludCddfT57Y2hpbGRyZW4gPz8gPD48Lz59PC9saT5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbY2xhc3NOYW1lcywgJ25vcHJpbnQnXX0+e2NoaWxkcmVuID8/IDw+PC8+fTwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmludGVyZmFjZSBJbmRpY2F0b3JQcm9wcyB7XG5cdGluZGljYXRvclRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0c3BhbkNsYXNzOiBVc2VyUmlnaHRzIHwgJ3Vua25vd24nO1xufVxuXG5jb25zdCBJbmRpY2F0b3IgPSAoe2luZGljYXRvclRleHQsIHNwYW5DbGFzc306IEluZGljYXRvclByb3BzKSA9PiB7XG5cdGlmICghaW5kaWNhdG9yVGV4dCkge1xuXHRcdHJldHVybiA8PjwvPjtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxzcGFuXG5cdFx0XHRcdGNsYXNzTmFtZT17WydnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9faWNvbicsIGBnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9faWNvbl9fJHtzcGFuQ2xhc3N9YF19XG5cdFx0XHRcdHRpdGxlPXtpbmRpY2F0b3JUZXh0fVxuXHRcdFx0Lz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX190ZXh0XCI+e2luZGljYXRvclRleHR9PC9zcGFuPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuY29uc3QgRm9vdGVySWNvbiA9ICh7c3BhbkNsYXNzLCBpbmRpY2F0b3JUZXh0fTogSW5kaWNhdG9yUHJvcHMpID0+IChcblx0PEZvb3Rlck5vdGljZSBzcGFuQ2xhc3M9e3NwYW5DbGFzc30+XG5cdFx0PEluZGljYXRvciBpbmRpY2F0b3JUZXh0PXtpbmRpY2F0b3JUZXh0fSBzcGFuQ2xhc3M9e3NwYW5DbGFzc30gLz5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5leHBvcnQge0Zvb3Rlckljb24sIHR5cGUgSW5kaWNhdG9yUHJvcHN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Rm9vdGVySWNvbiwgdHlwZSBJbmRpY2F0b3JQcm9wc30gZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuXG5jb25zdCBhcHBlbmRGb290ZXJOb3RpY2UgPSAoZWxlbWVudDogRWxlbWVudCkgPT4ge1xuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXG5cdGlmIChtb3VudFBvaW50KSB7XG5cdFx0bW91bnRQb2ludC5wcmVwZW5kKGVsZW1lbnQpO1xuXHR9XG59O1xuXG5jb25zdCBhcHBlbmRJY29uID0gKHtpbmRpY2F0b3JUZXh0LCBzcGFuQ2xhc3N9OiBJbmRpY2F0b3JQcm9wcyk6IHZvaWQgPT4ge1xuXHRpZiAoc3BhbkNsYXNzID09PSAndW5rbm93bicgfHwgIWluZGljYXRvclRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhcHBlbmRGb290ZXJOb3RpY2UoPEZvb3Rlckljb24gc3BhbkNsYXNzPXtzcGFuQ2xhc3N9IGluZGljYXRvclRleHQ9e2luZGljYXRvclRleHR9IC8+KTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kSWNvbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHFpdXdlbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ6ZW/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ermemVtycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdHRyYW5zd2lraTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRwYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdGF1dG9yZXZpZXdlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdH0pLFxuXHRcdHNlbmlvcmVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZW5pb3IgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i1hOa3see8luiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfos4fmt7Hnt6jogIUnLFxuXHRcdH0pLFxuXHRcdGV2ZW50c3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRjb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0YXV0b2NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdCdybnJzdmVyaWZ5LWV4ZW1wdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSByZWFsLW5hbWUgdmVyaWZpY2F0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflr6blkI3liLbpqZforYnosYHlhY0nLFxuXHRcdH0pLFxuXHRcdGJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Zmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHQnaXBibG9jay1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldFBlcm1pc3Npb25zfSBmcm9tICcuL21vZHVsZXMvZ2V0UGVybWlzc2lvbnMnO1xuXG4oZnVuY3Rpb24gbWFya1JpZ2h0c1VzZXJQYWdlKCk6IHZvaWQge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIXdnUmVsZXZhbnRVc2VyTmFtZSB8fCAhKHdnTmFtZXNwYWNlTnVtYmVyID09PSBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIpIHx8ICEod2dBY3Rpb24gPT09ICd2aWV3JykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAobXcudXRpbC5pc0lQdjRBZGRyZXNzKHdnUmVsZXZhbnRVc2VyTmFtZSkgfHwgbXcudXRpbC5pc0lQdjZBZGRyZXNzKHdnUmVsZXZhbnRVc2VyTmFtZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCByZWxldmFudFVzZXJQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUmVsZXZhbnRVc2VyTmFtZSwgT1BUSU9OUy51c2VyTmFtZVNwYWNlTnVtYmVyKS50b1RleHQoKTtcblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1BhZ2VOYW1lKS50b1RleHQoKTtcblx0aWYgKHBhZ2VOYW1lICE9PSByZWxldmFudFVzZXJQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgZ2V0UGVybWlzc2lvbnMod2dSZWxldmFudFVzZXJOYW1lKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsc0JBQXVCOztBQ0Z4QixJQUFNQyxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsaUJBQTJCLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1COztBQ1Z0RixJQUFBQyxxQkFBc0RDLFFBQUEsdUJBQUE7O0FDRHRELElBQUFDLG9CQUFrQ0MsUUFBQUYsUUFBQSxnQkFBQSxHQUFBLENBQUE7QUFRbEMsSUFBTUcsZUFBZUEsQ0FBQztFQUFDQztFQUFXQyxXQUFXSixrQ0FBQUssUUFBQUMsY0FBQU4sa0JBQUFLLFFBQUFFLFVBQUEsSUFBRTtBQUFHLE1BQXlCO0FBQzFFLFFBQU07SUFBQ0M7RUFBSSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQzdCLFFBQU1DLGFBQWEsQ0FBQyw4QkFBQSwrQkFBQUMsT0FBNkRWLFNBQVMsQ0FBQTtBQUUxRixTQUNDSCxrQ0FBQUssUUFBQUMsY0FBQU4sa0JBQUFLLFFBQUFFLFVBQUEsTUFDRUMsU0FBUyxZQUNUUixrQ0FBQUssUUFBQUMsY0FBQyxX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QUFBO0FBQXBCLGVBQUFGLFdBQUFHLEVBQUEsR0FBQSxFQUFBRCxTQUFBRixXQUFBSSxFQUFBLEdBQUFDLFFBQTRCO0FBQUEsa0JBQWpCQyxRQUFBSixPQUFBSztBQUNWOUMsdUJBQVc7Y0FBQ1IsZUFBZTZCLFdBQVd3QixLQUFtQjtjQUFHckUsV0FBV3FFO1lBQW1CLENBQUM7VUFDNUY7UUFBQSxTQUFBRSxLQUFBO0FBQUFSLHFCQUFBUyxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBUixxQkFBQVUsRUFBQTtRQUFBO01BQ0Q7SUFDRCxRQUFRO0lBQUM7RUFDVixDQUFBO0FBQUEsU0FBQSxTQXZCTXpCLGdCQUFBMEIsSUFBQTtBQUFBLFdBQUF6QixLQUFBMEIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztDSUpMLFNBQVNDLHFCQUEyQjtBQUNwQyxRQUFNO0lBQUNDO0lBQVVDO0lBQW1CQztJQUFZN0I7RUFBa0IsSUFBSTdDLEdBQUdDLE9BQU9DLElBQUk7QUFDcEYsTUFBSSxDQUFDMkMsc0JBQXNCLEVBQUU0QixzQkFBOEJ2Rix3QkFBd0IsRUFBRXNGLGFBQWEsU0FBUztBQUMxRztFQUNEO0FBRUEsTUFBSXhFLEdBQUcyRSxLQUFLQyxjQUFjL0Isa0JBQWtCLEtBQUs3QyxHQUFHMkUsS0FBS0UsY0FBY2hDLGtCQUFrQixHQUFHO0FBQzNGO0VBQ0Q7QUFFQSxRQUFNaUMsdUJBQStCLElBQUk5RSxHQUFHK0UsTUFBTWxDLG9CQUE0QjNELG1CQUFtQixFQUFFOEYsT0FBTztBQUMxRyxRQUFNQyxXQUFtQixJQUFJakYsR0FBRytFLE1BQU1MLFVBQVUsRUFBRU0sT0FBTztBQUN6RCxNQUFJQyxhQUFhSCxzQkFBc0I7QUFDdEM7RUFDRDtBQUVBLE9BQUtwQyxlQUFlRyxrQkFBa0I7QUFDdkMsR0FBRzsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgInVzZXJOYW1lU3BhY2VOdW1iZXIiLCAiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAiRm9vdGVyTm90aWNlIiwgInNwYW5DbGFzcyIsICJjaGlsZHJlbiIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNsYXNzTmFtZXMiLCAiY29uY2F0IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIkluZGljYXRvciIsICJpbmRpY2F0b3JUZXh0IiwgInRpdGxlIiwgIkZvb3Rlckljb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwcGVuZEZvb3Rlck5vdGljZSIsICJlbGVtZW50IiwgIm1vdW50UG9pbnQiLCAicHJlcGVuZCIsICJhcHBlbmRJY29uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAicWl1d2VuIiwgImxvY2FsaXplIiwgImVuIiwgInN0ZXdhcmQiLCAiY2hlY2t1c2VyIiwgInN1cHByZXNzIiwgInN5c29wIiwgInRlbXBsYXRlZWRpdG9yIiwgInRyYW5zd2lraSIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgInNlbmlvcmVkaXRvciIsICJldmVudHNwb25zb3IiLCAiY29uZmlybWVkIiwgImF1dG9jb25maXJtZWQiLCAiYm90IiwgImZsb29kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZ2V0UGVybWlzc2lvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAiX2xvY2FsR3JvdXBzTWFwJHdnUmVsIiwgIl9nbG9iYWxHcm91cHNNYXAkd2dSZSIsICJsb2NhbEdyb3Vwc01hcCIsICJnZXRMb2NhbFVzZXJHcm91cHMiLCAibG9jYWxHcm91cHMiLCAiZ2xvYmFsR3JvdXBzTWFwIiwgImdldEdsb2JhbFVzZXJHcm91cHMiLCAiZ2xvYmFsR3JvdXBzIiwgImdyb3VwcyIsICJ1bmlxdWVBcnJheSIsICJmaWx0ZXIiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZ3JvdXAiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibWFya1JpZ2h0c1VzZXJQYWdlIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAidXRpbCIsICJpc0lQdjRBZGRyZXNzIiwgImlzSVB2NkFkZHJlc3MiLCAicmVsZXZhbnRVc2VyUGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInBhZ2VOYW1lIl0KfQo=
