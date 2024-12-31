/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-MarkRights.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MarkRights}
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

// dist/MarkRights/MarkRights.js
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/MarkRights/MarkRights.ts
var MarkRights_exports = {};
__export(MarkRights_exports, {
  queryGlobalUserGroups: () => queryGlobalUserGroups,
  queryUserGroups: () => queryUserGroups
});
module.exports = __toCommonJS(MarkRights_exports);
//! src/MarkRights/options.json
var version = 2;
//! src/MarkRights/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("MarkRights/".concat(version));
//! src/MarkRights/modules/query.ts
var queryUserGroups = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (ususers) {
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryUserGroups2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var queryGlobalUserGroups = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (user) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: "globaluserinfo",
      guiuser: user,
      guiprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryGlobalUserGroups2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/MarkRights/modules/i18n.ts
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
    "rnrsverify-exempt": (0, import_ext_gadget2.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
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
//! src/MarkRights/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var getUsername = (url) => {
  if (!url) {
    return "";
  }
  const username = mw.util.getParamValue("title", url);
  const decode = (string, replace) => {
    return decodeURIComponent((() => {
      try {
        return decodeURIComponent(replace(string));
      } catch {
        return replace(string).replace(/%(?!\d+)/g, "%25");
      }
    })());
  };
  if (username) {
    return decode(username, (string) => {
      return string.replace("User:", "").replace(/_/g, " ");
    });
  }
  const usernameMatch = url.match(/\/wiki\/User:(.+?)$/);
  if (usernameMatch !== null && usernameMatch !== void 0 && usernameMatch[1]) {
    return decode(usernameMatch[1], (string) => {
      return string.replace(/_/g, " ");
    });
  }
  return "";
};
var appendUserRightsMark = ($userLinks, {
  userGroupMap,
  globalUserGroupMap
}) => {
  var _iterator2 = _createForOfIteratorHelper($userLinks), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _$element$attr, _userGroupMap$get, _globalUserGroupMap$g;
      const element = _step2.value;
      const $element = $(element);
      if ($element.parents("li").find(".gadgets-markrights").length) {
        continue;
      }
      if ($element.siblings(".gadgets-markrights").length) {
        continue;
      }
      const username = getUsername((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
      if (!username) {
        continue;
      }
      const groups = (_userGroupMap$get = userGroupMap.get(username)) !== null && _userGroupMap$get !== void 0 ? _userGroupMap$get : [];
      const globalGroups = (_globalUserGroupMap$g = globalUserGroupMap.get(username)) !== null && _globalUserGroupMap$g !== void 0 ? _globalUserGroupMap$g : [];
      if (!groups) {
        continue;
      }
      const $sups = $("<span>").addClass("gadgets-markrights");
      var _iterator3 = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)([...groups, ...globalGroups])), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const group = _step3.value;
          const className = "gadgets-markrights__".concat(group);
          if ($sups.find("sup").hasClass(className)) {
            continue;
          }
          $sups.append(
            // The following classes are used here:
            // * gadget-markrights__qiuwen
            // * gadget-markrights__steward
            // * gadget-markrights__checkuser
            // * gadget-markrights__suppress
            // * gadget-markrights__sysop
            // * gadget-markrights__interface-admin
            // * gadget-markrights__templateeditor
            // * gadget-markrights__transwiki
            // * gadget-markrights__patroller
            // * gadget-markrights__autoreviewer
            // * gadget-markrights__senioreditor
            // * gadget-markrights__eventsponsor
            // * gadget-markrights__massmessage-sender
            // * gadget-markrights__confirmed
            // * gadget-markrights__autoconfirmed
            // * gadget-markrights__bot
            // * gadget-markrights__flood
            // * gadget-markrights__ipblock-exempt
            // * gadget-markrights__rnrsverify-exempt
            $("<sup>").addClass(className).attr({
              alt: getMessage(group),
              title: getMessage(group)
            })
          );
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      $element.after($sups);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var markUserRights = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($content) {
    const $userLinks = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
    let users = [];
    const queue = [];
    const userGroupMap = /* @__PURE__ */ new Map();
    const globalUserGroupMap = /* @__PURE__ */ new Map();
    var _iterator4 = _createForOfIteratorHelper($userLinks), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        const $element = $(element);
        if ($element.parents("li").find(".gadgets-markrights").length) {
          continue;
        }
        if ($element.siblings(".gadgets-markrights").length) {
          continue;
        }
        const {
          textContent
        } = element;
        const userLinkText = textContent === null || textContent === void 0 ? void 0 : textContent.toString();
        if (userLinkText) {
          users[users.length] = userLinkText;
        }
        users = (0, import_ext_gadget3.uniqueArray)(users);
        if (users.length === 25) {
          queue[queue.length] = users;
          users = [];
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (users.length > 0) {
      queue[queue.length] = users;
    }
    for (var _i = 0, _queue = queue; _i < _queue.length; _i++) {
      const ususers = _queue[_i];
      try {
        const queryUserResponse = yield queryUserGroups(ususers);
        const {
          users: queryUsers
        } = queryUserResponse["query"];
        var _iterator5 = _createForOfIteratorHelper(queryUsers), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const user = _step5.value;
            if (!user || !user.groups) {
              continue;
            }
            userGroupMap.set(user.name, user.groups.filter((element) => {
              return element !== "*";
            }));
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        var _iterator6 = _createForOfIteratorHelper(ususers), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const user = _step6.value;
            const queryGlobalUserInfoResponse = yield queryGlobalUserGroups(user);
            if (queryGlobalUserInfoResponse["query"] && queryGlobalUserInfoResponse["query"].globaluserinfo) {
              const {
                groups: globalgroups
              } = queryGlobalUserInfoResponse["query"].globaluserinfo;
              globalUserGroupMap.set(user, globalgroups);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        appendUserRightsMark($userLinks, {
          userGroupMap,
          globalUserGroupMap
        });
      } catch {
      }
    }
  });
  return function markUserRights2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/MarkRights/MarkRights.ts
mw.hook("wikipage.content").add(function markRights($content) {
  if ($content.attr("id") === "mw-content-text" || $content.hasClass("mw-changeslist")) {
    void markUserRights($content);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9xdWVyeS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9jb3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBkZXNjcmlwdGlvbiDlnKjmnIDov5Hkv67mlLnjgIHnm5Hop4bliJfooajjgIHmnaHnm67ljoblj7LorrDlvZXnrYnkvY3nva7ku6XnibnmrormoLzlvI/mmL7npLrmnInnibnmrormnYPpmZDnmoTnlKjmiLdcbiAqL1xuaW1wb3J0IHttYXJrVXNlclJpZ2h0c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtSaWdodHMoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnIHx8ICRjb250ZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdCcpKSB7XG5cdFx0dm9pZCBtYXJrVXNlclJpZ2h0cygkY29udGVudCk7XG5cdH1cbn0pO1xuXG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckdyb3VwcywgcXVlcnlVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnknO1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IDIuMFxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya1JpZ2h0cy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5VXNlckdyb3VwcyA9IGFzeW5jICh1c3VzZXJzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0dXN1c2Vycyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5R2xvYmFsVXNlckdyb3VwcyA9IGFzeW5jICh1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bWV0YTogJ2dsb2JhbHVzZXJpbmZvJyxcblx0XHRndWl1c2VyOiB1c2VyLFxuXHRcdGd1aXByb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHtxdWVyeVVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHFpdXdlbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ6ZW/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ermemVtycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdHRyYW5zd2lraTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRwYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdGF1dG9yZXZpZXdlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdH0pLFxuXHRcdHNlbmlvcmVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZW5pb3IgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i1hOa3see8luiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfos4fmt7Hnt6jogIUnLFxuXHRcdH0pLFxuXHRcdGV2ZW50c3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRjb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0YXV0b2NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Zmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHQnaXBibG9jay1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtxdWVyeUdsb2JhbFVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3Vwc30gZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBnZXRVc2VybmFtZSA9ICh1cmw6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGlmICghdXJsKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJywgdXJsKTtcblxuXHRjb25zdCBkZWNvZGUgPSAoc3RyaW5nOiBzdHJpbmcsIHJlcGxhY2U6IChfc3RyaW5nOiBzdHJpbmcpID0+IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChcblx0XHRcdCgoKTogc3RyaW5nID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlcGxhY2Uoc3RyaW5nKSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybiByZXBsYWNlKHN0cmluZykucmVwbGFjZSgvJSg/IVxcZCspL2csICclMjUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKVxuXHRcdCk7XG5cdH07XG5cblx0aWYgKHVzZXJuYW1lKSB7XG5cdFx0cmV0dXJuIGRlY29kZSh1c2VybmFtZSwgKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgnVXNlcjonLCAnJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdH0pO1xuXHR9XG5cdGNvbnN0IHVzZXJuYW1lTWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gdXJsLm1hdGNoKC9cXC93aWtpXFwvVXNlcjooLis/KSQvKTtcblx0aWYgKHVzZXJuYW1lTWF0Y2g/LlsxXSkge1xuXHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWVNYXRjaFsxXSwgKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiAnJztcbn07XG5cbmNvbnN0IGFwcGVuZFVzZXJSaWdodHNNYXJrID0gKFxuXHQkdXNlckxpbmtzOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LFxuXHR7dXNlckdyb3VwTWFwLCBnbG9iYWxVc2VyR3JvdXBNYXB9OiB7dXNlckdyb3VwTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT47IGdsb2JhbFVzZXJHcm91cE1hcDogTWFwPHN0cmluZywgc3RyaW5nW10+fVxuKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkdXNlckxpbmtzKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKCRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmluZCgnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmICgkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgPSBnZXRVc2VybmFtZSgkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJycpO1xuXHRcdGlmICghdXNlcm5hbWUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBncm91cHMgPSB1c2VyR3JvdXBNYXAuZ2V0KHVzZXJuYW1lKSA/PyBbXTtcblx0XHRjb25zdCBnbG9iYWxHcm91cHMgPSBnbG9iYWxVc2VyR3JvdXBNYXAuZ2V0KHVzZXJuYW1lKSA/PyBbXTtcblx0XHRpZiAoIWdyb3Vwcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0ICRzdXBzOiBKUXVlcnkgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0cy1tYXJrcmlnaHRzJyk7XG5cdFx0Zm9yIChjb25zdCBncm91cCBvZiB1bmlxdWVBcnJheShbLi4uZ3JvdXBzLCAuLi5nbG9iYWxHcm91cHNdKSkge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgPSBgZ2FkZ2V0cy1tYXJrcmlnaHRzX18ke2dyb3VwfWA7XG5cdFx0XHRpZiAoJHN1cHMuZmluZCgnc3VwJykuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdCRzdXBzLmFwcGVuZChcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3FpdXdlblxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zdGV3YXJkXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2NoZWNrdXNlclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zdXBwcmVzc1xuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zeXNvcFxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19pbnRlcmZhY2UtYWRtaW5cblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fdGVtcGxhdGVlZGl0b3Jcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fdHJhbnN3aWtpXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3BhdHJvbGxlclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19hdXRvcmV2aWV3ZXJcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fc2VuaW9yZWRpdG9yXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2V2ZW50c3BvbnNvclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19tYXNzbWVzc2FnZS1zZW5kZXJcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fY29uZmlybWVkXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2F1dG9jb25maXJtZWRcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fYm90XG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2Zsb29kXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2lwYmxvY2stZXhlbXB0XG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3JucnN2ZXJpZnktZXhlbXB0XG5cdFx0XHRcdCQoJzxzdXA+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuXHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdGFsdDogZ2V0TWVzc2FnZShncm91cCBhcyBVc2VyUmlnaHRzKSxcblx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHQkZWxlbWVudC5hZnRlcigkc3Vwcyk7XG5cdH1cbn07XG5cbmNvbnN0IG1hcmtVc2VyUmlnaHRzID0gYXN5bmMgKCRjb250ZW50OiBKUXVlcnkpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgJHVzZXJMaW5rczogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnYS5tdy11c2VybGluazpub3QoLm13LWFub251c2VybGluayknKTtcblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBxdWV1ZTogQXJyYXk8dHlwZW9mIHVzZXJzPiA9IFtdO1xuXHRjb25zdCB1c2VyR3JvdXBNYXA6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcblx0Y29uc3QgZ2xvYmFsVXNlckdyb3VwTWFwOiBNYXA8c3RyaW5nLCBzdHJpbmdbXT4gPSBuZXcgTWFwKCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICR1c2VyTGlua3MpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAoJGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKCRlbGVtZW50LnNpYmxpbmdzKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3Qge3RleHRDb250ZW50fSA9IGVsZW1lbnQ7XG5cdFx0Y29uc3QgdXNlckxpbmtUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udG9TdHJpbmcoKTtcblx0XHRpZiAodXNlckxpbmtUZXh0KSB7XG5cdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlckxpbmtUZXh0OyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHR9XG5cblx0XHQvLyDnlKjmiLflkI3liJfooajljrvph41cblx0XHR1c2VycyA9IHVuaXF1ZUFycmF5KHVzZXJzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblxuXHRcdGlmICh1c2Vycy5sZW5ndGggPT09IDI1KSB7XG5cdFx0XHRxdWV1ZVtxdWV1ZS5sZW5ndGhdID0gdXNlcnM7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0dXNlcnMgPSBbXTtcblx0XHR9XG5cdH1cblxuXHRpZiAodXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB1c2VyczsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRmb3IgKGNvbnN0IHVzdXNlcnMgb2YgcXVldWUpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcXVlcnlVc2VyUmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJHcm91cHModXN1c2Vycyk7XG5cdFx0XHRjb25zdCB7dXNlcnM6IHF1ZXJ5VXNlcnN9ID0gcXVlcnlVc2VyUmVzcG9uc2VbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0XHR1c2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXTtcblx0XHRcdH07XG5cblx0XHRcdGZvciAoY29uc3QgdXNlciBvZiBxdWVyeVVzZXJzKSB7XG5cdFx0XHRcdGlmICghdXNlciB8fCAhdXNlci5ncm91cHMpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR1c2VyR3JvdXBNYXAuc2V0KFxuXHRcdFx0XHRcdHVzZXIubmFtZSxcblx0XHRcdFx0XHR1c2VyLmdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIHVzdXNlcnMpIHtcblx0XHRcdFx0Y29uc3QgcXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlID0gYXdhaXQgcXVlcnlHbG9iYWxVc2VyR3JvdXBzKHVzZXIpO1xuXHRcdFx0XHRpZiAocXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlWydxdWVyeSddICYmIHF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZVsncXVlcnknXS5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0XHRcdGNvbnN0IHtncm91cHM6IGdsb2JhbGdyb3Vwc306IHtncm91cHM6IHN0cmluZ1tdfSA9IHF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZVsncXVlcnknXVxuXHRcdFx0XHRcdFx0Lmdsb2JhbHVzZXJpbmZvIGFzIHtncm91cHM6IHN0cmluZ1tdfTtcblx0XHRcdFx0XHRnbG9iYWxVc2VyR3JvdXBNYXAuc2V0KHVzZXIsIGdsb2JhbGdyb3Vwcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0YXBwZW5kVXNlclJpZ2h0c01hcmsoJHVzZXJMaW5rcywge3VzZXJHcm91cE1hcCwgZ2xvYmFsVXNlckdyb3VwTWFwfSk7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xuXG5leHBvcnQge21hcmtVc2VyUmlnaHRzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQUEsQ0FBQTtBQUFBQyxTQUFBRCxvQkFBQTtFQUFBRSx1QkFBQUEsTUFBQUE7RUFBQUMsaUJBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBTixrQkFBQTs7QUNDQyxJQUFBTyxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGNBQUFDLE9BQWdDTCxPQUFPLENBQUU7O0FDRDdELElBQU1KLGtCQUFBLDJCQUFBO0FBQUEsTUFBQVUsT0FBQUMsa0JBQWtCLFdBQU9DLFNBQStCO0FBQzdELFVBQU1DLFNBQThCO01BQ25DRDtNQUNBRSxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNO01BQ05DLFFBQVE7TUFDUkMsU0FBUztNQUNUQyxRQUFRO0lBQ1Q7QUFDQSxVQUFNQyxXQUFBLE1BQWlCZCxJQUFJZSxJQUFJVCxNQUFNO0FBRXJDLFdBQU9RO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FkTXJC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QW5CLGVBQUFELFdBQUFwRCxFQUFBLEdBQUEsRUFBQXFELFNBQUFELFdBQUFuRCxFQUFBLEdBQUFDLFFBQTRCO0FBQUEsa0JBQWpCakQsT0FBQW9HLE9BQUE5QztBQUNWLGtCQUFNK0MsOEJBQUEsTUFBb0NqSSxzQkFBc0I0QixJQUFJO0FBQ3BFLGdCQUFJcUcsNEJBQTRCLE9BQU8sS0FBS0EsNEJBQTRCLE9BQU8sRUFBRUMsZ0JBQWdCO0FBQ2hHLG9CQUFNO2dCQUFDeEMsUUFBUXlDO2NBQVksSUFBd0JGLDRCQUE0QixPQUFPLEVBQ3BGQztBQUNGM0QsaUNBQW1CcUQsSUFBSWhHLE1BQU11RyxZQUFZO1lBQzFDO1VBQ0Q7UUFBQSxTQUFBNUIsS0FBQTtBQUFBd0IscUJBQUF2QixFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBd0IscUJBQUF0QixFQUFBO1FBQUE7QUFFQXJDLDZCQUFxQkMsWUFBWTtVQUFDQztVQUFjQztRQUFrQixDQUFDO01BQ3BFLFFBQVE7TUFBQztJQUNWO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FqRU1vQyxnQkFBQXlCLEtBQUE7QUFBQSxXQUFBeEIsTUFBQW5GLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUw3Rk5pQyxHQUFHMEUsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxXQUFXMUIsVUFBZ0I7QUFDbkUsTUFBSUEsU0FBU3BCLEtBQUssSUFBSSxNQUFNLHFCQUFxQm9CLFNBQVNWLFNBQVMsZ0JBQWdCLEdBQUc7QUFDckYsU0FBS1EsZUFBZUUsUUFBUTtFQUM3QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIk1hcmtSaWdodHNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1c3VzZXJzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJ1c3Byb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJfcmVmMiIsICJ1c2VyIiwgIm1ldGEiLCAiZ3VpdXNlciIsICJndWlwcm9wIiwgIl94MiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInFpdXdlbiIsICJsb2NhbGl6ZSIsICJlbiIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJzZW5pb3JlZGl0b3IiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldFVzZXJuYW1lIiwgInVybCIsICJ1c2VybmFtZSIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiZGVjb2RlIiwgInN0cmluZyIsICJyZXBsYWNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VybmFtZU1hdGNoIiwgIm1hdGNoIiwgImFwcGVuZFVzZXJSaWdodHNNYXJrIiwgIiR1c2VyTGlua3MiLCAidXNlckdyb3VwTWFwIiwgImdsb2JhbFVzZXJHcm91cE1hcCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJfJGVsZW1lbnQkYXR0ciIsICJfdXNlckdyb3VwTWFwJGdldCIsICJfZ2xvYmFsVXNlckdyb3VwTWFwJGciLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkZWxlbWVudCIsICIkIiwgInBhcmVudHMiLCAiZmluZCIsICJsZW5ndGgiLCAic2libGluZ3MiLCAiYXR0ciIsICJncm91cHMiLCAiZ2xvYmFsR3JvdXBzIiwgIiRzdXBzIiwgImFkZENsYXNzIiwgIl9pdGVyYXRvcjMiLCAidW5pcXVlQXJyYXkiLCAiX3N0ZXAzIiwgImdyb3VwIiwgImNsYXNzTmFtZSIsICJoYXNDbGFzcyIsICJhcHBlbmQiLCAiYWx0IiwgInRpdGxlIiwgImVyciIsICJlIiwgImYiLCAiYWZ0ZXIiLCAibWFya1VzZXJSaWdodHMiLCAiX3JlZjMiLCAiJGNvbnRlbnQiLCAidXNlcnMiLCAicXVldWUiLCAiTWFwIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInRleHRDb250ZW50IiwgInVzZXJMaW5rVGV4dCIsICJ0b1N0cmluZyIsICJfaSIsICJfcXVldWUiLCAicXVlcnlVc2VyUmVzcG9uc2UiLCAicXVlcnlVc2VycyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJzZXQiLCAibmFtZSIsICJmaWx0ZXIiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlIiwgImdsb2JhbHVzZXJpbmZvIiwgImdsb2JhbGdyb3VwcyIsICJfeDMiLCAiaG9vayIsICJhZGQiLCAibWFya1JpZ2h0cyJdCn0K
