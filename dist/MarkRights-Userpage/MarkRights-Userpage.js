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
//! src/MarkRights-Userpage/options.json
var mountPointSelector = "#footer-info,.page-info";
var userNameSpaceNumber = 2;
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
//! src/MarkRights-Userpage/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.MarkRights");
//! src/MarkRights-Userpage/modules/appendIcon.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var elementWrap = (spanClass, innerElement) => {
  const {
    skin
  } = mw.config.get();
  const classNames = ["gadget-markrights_userpage", "gadget-markrights_userpage__".concat(spanClass)];
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("section", {
      className: classNames
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
      className: classNames
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    className: classNames
  }, innerElement);
};
var indicator = ({
  indicatorText,
  spanClass
}) => /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  className: ["gadget-markrights_userpage__icon", "gadget-markrights_userpage__icon__".concat(spanClass)],
  title: indicatorText
}), /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  className: "gadget-markrights_userpage__text"
}, indicatorText));
var appendIcon = (indicatorText, spanClass) => {
  var _document$querySelect;
  if (spanClass === "unknown" || !indicatorText) {
    return;
  }
  const tag = elementWrap(spanClass, indicator({
    indicatorText,
    spanClass
  }));
  (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(tag);
};
//! src/MarkRights-Userpage/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    qiuwen: (0, import_ext_gadget2.localize)({
      en: "Webmaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    steward: (0, import_ext_gadget2.localize)({
      en: "Steward",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    checkuser: (0, import_ext_gadget2.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    suppress: (0, import_ext_gadget2.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget2.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget2.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget2.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    transwiki: (0, import_ext_gadget2.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget2.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autoreviewer: (0, import_ext_gadget2.localize)({
      en: "Exempted from page patrol",
      "zh-hans": "巡查豁免",
      "zh-hant": "巡查豁免"
    }),
    senioreditor: (0, import_ext_gadget2.localize)({
      en: "Senior Editor",
      "zh-hans": "资深编者",
      "zh-hant": "資深編者"
    }),
    eventsponsor: (0, import_ext_gadget2.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget2.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget2.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget2.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget2.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    bot: (0, import_ext_gadget2.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget2.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "ipblock-exempt": (0, import_ext_gadget2.localize)({
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
var getPermissions = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (wgRelevantUserName) {
    try {
      const {
        query: {
          users: [{
            groups: localgroups
          }]
        }
      } = yield (0, import_ext_gadget3.queryUserGroups)("".concat(wgRelevantUserName));
      const {
        query: {
          globaluserinfo: {
            groups: globalgroups
          }
        }
      } = yield (0, import_ext_gadget3.queryGlobalUserGroups)("".concat(wgRelevantUserName));
      const groups = (0, import_ext_gadget4.uniqueArray)([...localgroups, ...globalgroups]).filter((element) => {
        return !["*", "user", "autoconfirmed", "rnrsverify-confirmed", "bot"].includes(element);
      });
      if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
      } else if (WEBMASTER_LIST.includes(wgRelevantUserName)) {
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
  const relevantUserPageName = new mw.Title(wgRelevantUserName, userNameSpaceNumber).toText();
  const pageName = new mw.Title(wgPageName).toText();
  if (pageName !== relevantUserPageName) {
    return;
  }
  void getPermissions(wgRelevantUserName);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvY29yZS50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2FwcGVuZEljb24udHN4IiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9NYXJrUmlnaHRzLVVzZXJwYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCIsXG5cdFwidXNlck5hbWVTcGFjZU51bWJlclwiOiAyXG59XG4iLCAiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7cXVlcnlHbG9iYWxVc2VyR3JvdXBzLCBxdWVyeVVzZXJHcm91cHN9IGZyb20gJ2V4dC5nYWRnZXQuTWFya1JpZ2h0cyc7XG5pbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHthcHBlbmRJY29ufSBmcm9tICcuL2FwcGVuZEljb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgZ2V0UGVybWlzc2lvbnMgPSBhc3luYyAod2dSZWxldmFudFVzZXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCB7XG5cdFx0XHRxdWVyeToge1xuXHRcdFx0XHR1c2VyczogW3tncm91cHM6IGxvY2FsZ3JvdXBzfV0sXG5cdFx0XHR9LFxuXHRcdH06IHtcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdHVzZXJzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Z3JvdXBzOiBzdHJpbmdbXTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXHRcdFx0fTtcblx0XHR9ID0gKGF3YWl0IHF1ZXJ5VXNlckdyb3VwcyhgJHt3Z1JlbGV2YW50VXNlck5hbWV9YCkpIGFzIG5ldmVyO1xuXHRcdGNvbnN0IHtcblx0XHRcdHF1ZXJ5OiB7XG5cdFx0XHRcdGdsb2JhbHVzZXJpbmZvOiB7Z3JvdXBzOiBnbG9iYWxncm91cHN9LFxuXHRcdFx0fSxcblx0XHR9OiB7XG5cdFx0XHRxdWVyeToge1xuXHRcdFx0XHRnbG9iYWx1c2VyaW5mbzoge1xuXHRcdFx0XHRcdGdyb3Vwczogc3RyaW5nW107XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdH0gPSAoYXdhaXQgcXVlcnlHbG9iYWxVc2VyR3JvdXBzKGAke3dnUmVsZXZhbnRVc2VyTmFtZX1gKSkgYXMgbmV2ZXI7XG5cblx0XHRjb25zdCBncm91cHMgPSB1bmlxdWVBcnJheShbLi4ubG9jYWxncm91cHMsIC4uLmdsb2JhbGdyb3Vwc10pLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0Ly8gRG8gbm90IHNob3cgaW1wbGljaXQgZ3JvdXBzLiBCb3RzIEFscmVhZHkgc2hvd24gaW4gR2VvTG9jYXRpb25WaWV3ZXJcblx0XHRcdHJldHVybiAhWycqJywgJ3VzZXInLCAnYXV0b2NvbmZpcm1lZCcsICdybnJzdmVyaWZ5LWNvbmZpcm1lZCcsICdib3QnXS5pbmNsdWRlcyhlbGVtZW50KTtcblx0XHR9KTtcblxuXHRcdGlmIChTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSkge1xuXHRcdFx0Ly8gQWxyZWFkeSBzaG93biBpbiBHZW9Mb2NhdGlvblZpZXdlclxuXHRcdH0gZWxzZSBpZiAoV0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSkge1xuXHRcdFx0YXBwZW5kSWNvbihnZXRNZXNzYWdlKCdxaXV3ZW4nKSwgJ3FpdXdlbicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xuXHRcdFx0XHRhcHBlbmRJY29uKGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksIGdyb3VwIGFzIFVzZXJSaWdodHMpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxufTtcblxuZXhwb3J0IHtnZXRQZXJtaXNzaW9uc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKHNwYW5DbGFzczogVXNlclJpZ2h0cywgaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBjbGFzc05hbWVzID0gWydnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZScsIGBnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fJHtzcGFuQ2xhc3N9YF07XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9Pntpbm5lckVsZW1lbnR9PC9zZWN0aW9uPjtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZXN9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn07XG5cbmNvbnN0IGluZGljYXRvciA9ICh7XG5cdGluZGljYXRvclRleHQsXG5cdHNwYW5DbGFzcyxcbn06IHtcblx0aW5kaWNhdG9yVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRzcGFuQ2xhc3M6IFVzZXJSaWdodHMgfCAndW5rbm93bic7XG59KSA9PiAoXG5cdDw+XG5cdFx0PHNwYW5cblx0XHRcdGNsYXNzTmFtZT17WydnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9faWNvbicsIGBnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9faWNvbl9fJHtzcGFuQ2xhc3N9YF19XG5cdFx0XHR0aXRsZT17aW5kaWNhdG9yVGV4dH1cblx0XHQvPlxuXHRcdDxzcGFuIGNsYXNzTmFtZT1cImdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX190ZXh0XCI+e2luZGljYXRvclRleHR9PC9zcGFuPlxuXHQ8Lz5cbik7XG5cbmNvbnN0IGFwcGVuZEljb24gPSAoaW5kaWNhdG9yVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkLCBzcGFuQ2xhc3M6IFVzZXJSaWdodHMgfCAndW5rbm93bicpOiB2b2lkID0+IHtcblx0aWYgKHNwYW5DbGFzcyA9PT0gJ3Vua25vd24nIHx8ICFpbmRpY2F0b3JUZXh0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHRhZyA9IGVsZW1lbnRXcmFwKHNwYW5DbGFzcywgaW5kaWNhdG9yKHtpbmRpY2F0b3JUZXh0LCBzcGFuQ2xhc3N9KSk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKVswXT8ucHJlcGVuZCh0YWcpO1xufTtcblxuZXhwb3J0IHthcHBlbmRJY29ufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0cWl1d2VuOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1dlYm1hc3RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnq5nplb8nLFxuXHRcdFx0J3poLWhhbnQnOiAn56uZ6ZW3Jyxcblx0XHR9KSxcblx0XHRzdGV3YXJkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N0ZXdhcmQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6KOB5Yaz5aeU5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ijgeaxuuWnlOWToScsXG5cdFx0fSksXG5cdFx0Y2hlY2t1c2VyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NoZWNrVXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnlKjmiLfmn6XmoLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn55So5oi25p+l5qC4Jyxcblx0XHR9KSxcblx0XHRzdXBwcmVzczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdmVyc2lnaHRlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnm5HnnaPlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn55uj552j5ZOhJyxcblx0XHR9KSxcblx0XHRzeXNvcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTeXNPcCcsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHQnaW50ZXJmYWNlLWFkbWluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnRlcmZhY2UgQWRtaW5pc3RyYXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfnlYzpnaLnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LuL6Z2i566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUZW1wbGF0ZSBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5qih5p2/57yW6L6R5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+aooeadv+e3qOi8r+WToScsXG5cdFx0fSksXG5cdFx0dHJhbnN3aWtpOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ltcG9ydGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvvOWFpeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfljK/lhaXogIUnLFxuXHRcdH0pLFxuXHRcdHBhdHJvbGxlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0YXV0b3Jldmlld2VyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcGFnZSBwYXRyb2wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeixgeWFjScsXG5cdFx0fSksXG5cdFx0c2VuaW9yZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlbmlvciBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn6LWE5rex57yW6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+izh+a3see3qOiAhScsXG5cdFx0fSksXG5cdFx0ZXZlbnRzcG9uc29yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V2ZW50IFNwb25zb3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5rS75Yqo57uE57uH6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+a0u+WLlee1hOe5lOiAhScsXG5cdFx0fSksXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTWFzc01lc3NhZ2Ugc2VuZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wkp+mHj+a2iOaBr+WPkemAgeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICflpKfph4/oqIrmga/lgrPpgIHogIUnLFxuXHRcdH0pLFxuXHRcdGNvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRhdXRvY29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0F1dG8tY29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn6Ieq5Yqo56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iHquWLleeiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHJlYWwtbmFtZSB2ZXJpZmljYXRpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6e5ZCN5Yi26aqM6K+B6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvpuWQjeWItumpl+itieixgeWFjScsXG5cdFx0fSksXG5cdFx0Ym90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JvdCcsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajkuronLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw5Lq6Jyxcblx0XHR9KSxcblx0XHRmbG9vZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGbG9vZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDnlKjmiLYnLFxuXHRcdH0pLFxuXHRcdCdpcGJsb2NrLWV4ZW1wdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBJUCBibG9ja3MnLFxuXHRcdFx0J3poLWhhbnMnOiAnSVDlsIHnpoHosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAnSVDlsIHpjpbosYHlhY0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbnN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuKGZ1bmN0aW9uIG1hcmtSaWdodHNVc2VyUGFnZSgpOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dSZWxldmFudFVzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUgfHwgISh3Z05hbWVzcGFjZU51bWJlciA9PT0gT1BUSU9OUy51c2VyTmFtZVNwYWNlTnVtYmVyKSB8fCAhKHdnQWN0aW9uID09PSAndmlldycpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcmVsZXZhbnRVc2VyUGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZSh3Z1JlbGV2YW50VXNlck5hbWUsIE9QVElPTlMudXNlck5hbWVTcGFjZU51bWJlcikudG9UZXh0KCk7XG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudG9UZXh0KCk7XG5cdGlmIChwYWdlTmFtZSAhPT0gcmVsZXZhbnRVc2VyUGFnZU5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGdldFBlcm1pc3Npb25zKHdnUmVsZXZhbnRVc2VyTmFtZSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFFdEIsSUFBQUMsc0JBQXVCOztBQ0h4QixJQUFNQyxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsaUJBQTJCLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1COztBQ1Z0RixJQUFBQyxxQkFBcURDLFFBQUEsdUJBQUE7O0FDQXJELElBQUFDLG9CQUFrQ0MsUUFBQUYsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFHbEMsSUFBTUcsY0FBY0EsQ0FBQ0MsV0FBdUJDLGlCQUErQjtBQUMxRSxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUM3QixRQUFNQyxhQUFhLENBQUMsOEJBQUEsK0JBQUFDLE9BQTZEUCxTQUFTLENBQUE7QUFFMUYsTUFBSUUsU0FBUyxXQUFXO0FBQ3ZCLFdBQU9MLGtDQUFBVyxRQUFBQyxjQUFDLFdBQUE7TUFBUUMsV0FBV0o7SUFBQSxHQUFhTCxZQUFhO0VBQ3RELFdBQVcsQ0FBQyxVQUFVLGVBQWUsUUFBUSxFQUFFVSxTQUFTVCxJQUFJLEtBQUtVLFNBQVNDLGNBQWMsZ0JBQWdCLEdBQUc7QUFDMUcsV0FBT2hCLGtDQUFBVyxRQUFBQyxjQUFDLE1BQUE7TUFBR0MsV0FBV0o7SUFBQSxHQUFhTCxZQUFhO0VBQ2pEO0FBQ0EsU0FBT0osa0NBQUFXLFFBQUFDLGNBQUMsT0FBQTtJQUFJQyxXQUFXSjtFQUFBLEdBQWFMLFlBQWE7QUFDbEQ7QUFFQSxJQUFNYSxZQUFZQSxDQUFDO0VBQ2xCQztFQUNBZjtBQUNELE1BSUNILGtDQUFBVyxRQUFBQyxjQUFBWixrQkFBQVcsUUFBQVEsVUFBQSxNQUNDbkIsa0NBQUFXLFFBQUFDLGNBQUMsUUFBQTtFQUNBQyxXQUFXLENBQUMsb0NBQUEscUNBQUFILE9BQXlFUCxTQUFTLENBQUE7RUFDOUZpQixPQUFPRjtBQUFBLENBQ1IsR0FDQWxCLGtDQUFBVyxRQUFBQyxjQUFDLFFBQUE7RUFBS0MsV0FBVTtBQUFBLEdBQW9DSyxhQUFjLENBQ25FO0FBR0QsSUFBTUcsYUFBYUEsQ0FBQ0gsZUFBbUNmLGNBQTRDO0FBQUEsTUFBQW1CO0FBQ2xHLE1BQUluQixjQUFjLGFBQWEsQ0FBQ2UsZUFBZTtBQUM5QztFQUNEO0FBQ0EsUUFBTUssTUFBTXJCLFlBQVlDLFdBQVdjLFVBQVU7SUFBQ0M7SUFBZWY7RUFBUyxDQUFDLENBQUM7QUFDeEUsR0FBQW1CLHdCQUFBUCxTQUFTUyxpQkFBc0M5QixrQkFBa0IsRUFBRSxDQUFDLE9BQUEsUUFBQTRCLDBCQUFBLFVBQXBFQSxzQkFBdUVHLFFBQVFGLEdBQUc7QUFDbkY7O0FDdENBLElBQUFHLHFCQUF1QjNCLFFBQUEsaUJBQUE7QUFFdkIsSUFBTTRCLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsbUJBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTCxtQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxZQUFBLEdBQVdOLG1CQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFdBQUEsR0FBVVAsbUJBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksUUFBQSxHQUFPUixtQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsb0JBQUEsR0FBbUJKLG1CQUFBRyxVQUFTO01BQzNCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLGlCQUFBLEdBQWdCVCxtQkFBQUcsVUFBUztNQUN4QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNETSxZQUFBLEdBQVdWLG1CQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RPLFlBQUEsR0FBV1gsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFEsZUFBQSxHQUFjWixtQkFBQUcsVUFBUztNQUN0QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEUyxlQUFBLEdBQWNiLG1CQUFBRyxVQUFTO01BQ3RCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RVLGVBQUEsR0FBY2QsbUJBQUFHLFVBQVM7TUFDdEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCx1QkFBQSxHQUFzQkosbUJBQUFHLFVBQVM7TUFDOUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFcsWUFBQSxHQUFXZixtQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEWSxnQkFBQSxHQUFlaEIsbUJBQUFHLFVBQVM7TUFDdkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxzQkFBQSxHQUFxQkosbUJBQUFHLFVBQVM7TUFDN0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRGEsTUFBQSxHQUFLakIsbUJBQUFHLFVBQVM7TUFDYkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEYyxRQUFBLEdBQU9sQixtQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsbUJBQUEsR0FBa0JKLG1CQUFBRyxVQUFTO01BQzFCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1lLGVBQWVsQixnQkFBZ0I7QUFFckMsSUFBTW1CLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FGckdBLElBQUFDLHFCQUEwQmpELFFBQUEsaUJBQUE7QUFFMUIsSUFBTWtELGlCQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWlCLFdBQU9DLG9CQUE4QztBQUMzRSxRQUFJO0FBQ0gsWUFBTTtRQUNMQyxPQUFPO1VBQ05DLE9BQU8sQ0FBQztZQUFDQyxRQUFRQztVQUFXLENBQUM7UUFDOUI7TUFDRCxJQUFBLE9BUUssR0FBTTFELG1CQUFBMkQsaUJBQUEsR0FBQS9DLE9BQW1CMEMsa0JBQWtCLENBQUU7QUFDbEQsWUFBTTtRQUNMQyxPQUFPO1VBQ05LLGdCQUFnQjtZQUFDSCxRQUFRSTtVQUFZO1FBQ3RDO01BQ0QsSUFBQSxPQU1LLEdBQU03RCxtQkFBQThELHVCQUFBLEdBQUFsRCxPQUF5QjBDLGtCQUFrQixDQUFFO0FBRXhELFlBQU1HLFVBQUEsR0FBU1AsbUJBQUFhLGFBQVksQ0FBQyxHQUFHTCxhQUFhLEdBQUdHLFlBQVksQ0FBQyxFQUFFRyxPQUFRQyxhQUFZO0FBRWpGLGVBQU8sQ0FBQyxDQUFDLEtBQUssUUFBUSxpQkFBaUIsd0JBQXdCLEtBQUssRUFBRWpELFNBQVNpRCxPQUFPO01BQ3ZGLENBQUM7QUFFRCxVQUFJbkUsbUJBQW1Ca0IsU0FBU3NDLGtCQUFrQixHQUFHO01BRXJELFdBQVd2RCxlQUFlaUIsU0FBU3NDLGtCQUFrQixHQUFHO0FBQ3ZEL0IsbUJBQVd5QixXQUFXLFFBQVEsR0FBRyxRQUFRO01BQzFDLE9BQU87QUFBQSxZQUFBa0IsYUFBQUMsMkJBQ2NWLE1BQUEsR0FBQVc7QUFBQSxZQUFBO0FBQXBCLGVBQUFGLFdBQUFHLEVBQUEsR0FBQSxFQUFBRCxTQUFBRixXQUFBSSxFQUFBLEdBQUFDLFFBQTRCO0FBQUEsa0JBQWpCQyxRQUFBSixPQUFBSztBQUNWbEQsdUJBQVd5QixXQUFXd0IsS0FBbUIsR0FBR0EsS0FBbUI7VUFDaEU7UUFBQSxTQUFBRSxLQUFBO0FBQUFSLHFCQUFBUyxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBUixxQkFBQVUsRUFBQTtRQUFBO01BQ0Q7SUFDRCxRQUFRO0lBQUM7RUFDVixDQUFBO0FBQUEsU0FBQSxTQTFDTXpCLGdCQUFBMEIsSUFBQTtBQUFBLFdBQUF6QixLQUFBMEIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztDR0pMLFNBQVNDLHFCQUEyQjtBQUNwQyxRQUFNO0lBQUNDO0lBQVVDO0lBQW1CQztJQUFZN0I7RUFBa0IsSUFBSTlDLEdBQUdDLE9BQU9DLElBQUk7QUFDcEYsTUFBSSxDQUFDNEMsc0JBQXNCLEVBQUU0QixzQkFBOEJyRix3QkFBd0IsRUFBRW9GLGFBQWEsU0FBUztBQUMxRztFQUNEO0FBRUEsUUFBTUcsdUJBQStCLElBQUk1RSxHQUFHNkUsTUFBTS9CLG9CQUE0QnpELG1CQUFtQixFQUFFeUYsT0FBTztBQUMxRyxRQUFNQyxXQUFtQixJQUFJL0UsR0FBRzZFLE1BQU1GLFVBQVUsRUFBRUcsT0FBTztBQUN6RCxNQUFJQyxhQUFhSCxzQkFBc0I7QUFDdEM7RUFDRDtBQUVBLE9BQUtqQyxlQUFlRyxrQkFBa0I7QUFDdkMsR0FBRzsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgInVzZXJOYW1lU3BhY2VOdW1iZXIiLCAiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAiZWxlbWVudFdyYXAiLCAic3BhbkNsYXNzIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lcyIsICJjb25jYXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImluZGljYXRvciIsICJpbmRpY2F0b3JUZXh0IiwgIkZyYWdtZW50IiwgInRpdGxlIiwgImFwcGVuZEljb24iLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInRhZyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJxaXV3ZW4iLCAibG9jYWxpemUiLCAiZW4iLCAic3Rld2FyZCIsICJjaGVja3VzZXIiLCAic3VwcHJlc3MiLCAic3lzb3AiLCAidGVtcGxhdGVlZGl0b3IiLCAidHJhbnN3aWtpIiwgInBhdHJvbGxlciIsICJhdXRvcmV2aWV3ZXIiLCAic2VuaW9yZWRpdG9yIiwgImV2ZW50c3BvbnNvciIsICJjb25maXJtZWQiLCAiYXV0b2NvbmZpcm1lZCIsICJib3QiLCAiZmxvb2QiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJnZXRQZXJtaXNzaW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJxdWVyeSIsICJ1c2VycyIsICJncm91cHMiLCAibG9jYWxncm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgImdsb2JhbHVzZXJpbmZvIiwgImdsb2JhbGdyb3VwcyIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAidW5pcXVlQXJyYXkiLCAiZmlsdGVyIiwgImVsZW1lbnQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZ3JvdXAiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibWFya1JpZ2h0c1VzZXJQYWdlIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAicmVsZXZhbnRVc2VyUGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInBhZ2VOYW1lIl0KfQo=
