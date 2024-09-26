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
var userGroupMap = /* @__PURE__ */ new Map();
var globalUserGroupMap = /* @__PURE__ */ new Map();
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
var queryUserGroups = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (ususers) {
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups",
      smaxage: 3600,
      maxage: 3600
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
      smaxage: 3600,
      maxage: 3600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryGlobalUserGroups2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var done = ($userLinks) => {
  $userLinks.each((_index, element) => {
    var _$element$attr, _userGroupMap$get, _globalUserGroupMap$g;
    const $element = $(element);
    if ($element.parents("li").find(".gadgets-markrights").length) {
      return;
    }
    const username = getUsername((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
    if (!username) {
      return;
    }
    const groups = (_userGroupMap$get = userGroupMap.get(username)) !== null && _userGroupMap$get !== void 0 ? _userGroupMap$get : [];
    const globalGroups = (_globalUserGroupMap$g = globalUserGroupMap.get(username)) !== null && _globalUserGroupMap$g !== void 0 ? _globalUserGroupMap$g : [];
    if (!groups) {
      return;
    }
    const $sups = $("<span>").addClass("gadgets-markrights");
    var _iterator2 = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)([...groups, ...globalGroups])), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const group = _step2.value;
        const className = "gadgets-markrights__".concat(group);
        if ($sups.find("sup").hasClass(className)) {
          return;
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
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    $element.after($sups);
  });
};
var markUserRights = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($content) {
    const $userLinks = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
    let users = [];
    const queue = [];
    $userLinks.each((_index, {
      textContent
    }) => {
      const userLinkText = textContent === null || textContent === void 0 ? void 0 : textContent.toString();
      if (userLinkText) {
        users[users.length] = userLinkText;
      }
      users = (0, import_ext_gadget3.uniqueArray)(users);
      if (users.length === 25) {
        queue[queue.length] = users;
        users = [];
      }
    });
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
        var _iterator3 = _createForOfIteratorHelper(queryUsers), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const user = _step3.value;
            if (!user || !user.groups) {
              continue;
            }
            userGroupMap.set(user.name, user.groups.filter((element) => {
              return element !== "*";
            }));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var _iterator4 = _createForOfIteratorHelper(ususers), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const user = _step4.value;
            const queryGlobalUserInfoResponse = yield queryGlobalUserGroups(user);
            if (queryGlobalUserInfoResponse["query"] && queryGlobalUserInfoResponse["query"].globaluserinfo) {
              const {
                groups: globalgroups
              } = queryGlobalUserInfoResponse["query"].globaluserinfo;
              globalUserGroupMap.set(user, globalgroups);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        done($userLinks);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvY29yZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAZGVzY3JpcHRpb24g5Zyo5pyA6L+R5L+u5pS544CB55uR6KeG5YiX6KGo44CB5p2h55uu5Y6G5Y+y6K6w5b2V562J5L2N572u5Lul54m55q6K5qC85byP5pi+56S65pyJ54m55q6K5p2D6ZmQ55qE55So5oi3XG4gKi9cbmltcG9ydCB7bWFya1VzZXJSaWdodHN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBtYXJrUmlnaHRzKCRjb250ZW50KTogdm9pZCB7XG5cdGlmICgkY29udGVudC5hdHRyKCdpZCcpID09PSAnbXctY29udGVudC10ZXh0JyB8fCAkY29udGVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QnKSkge1xuXHRcdHZvaWQgbWFya1VzZXJSaWdodHMoJGNvbnRlbnQpO1xuXHR9XG59KTtcblxuZXhwb3J0IHtxdWVyeUdsb2JhbFVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IDIuMFxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya1JpZ2h0cy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRxaXV3ZW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VibWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0XHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdH0pLFxuXHRcdHN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHRjaGVja3VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdHN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdHN5c29wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdCdpbnRlcmZhY2UtYWRtaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHR0cmFuc3dpa2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW1wb3J0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+85YWl6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WMr+WFpeiAhScsXG5cdFx0fSksXG5cdFx0cGF0cm9sbGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcicsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRhdXRvcmV2aWV3ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwYWdlIHBhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l6LGB5YWNJyxcblx0XHR9KSxcblx0XHRzZW5pb3JlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VuaW9yIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfotYTmt7HnvJbogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6LOH5rex57eo6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHJlYWwtbmFtZSB2ZXJpZmljYXRpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6e5ZCN5Yi26aqM6K+B6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvpuWQjeWItumpl+itieixgeWFjScsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB1c2VyR3JvdXBNYXAgPSBuZXcgTWFwKCk7XG5jb25zdCBnbG9iYWxVc2VyR3JvdXBNYXAgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IGdldFVzZXJuYW1lID0gKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0aWYgKCF1cmwpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB1c2VybmFtZTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCB1cmwpO1xuXG5cdGNvbnN0IGRlY29kZSA9IChzdHJpbmc6IHN0cmluZywgcmVwbGFjZTogKF9zdHJpbmc6IHN0cmluZykgPT4gc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0KCgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVwbGFjZShzdHJpbmcpKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2Uoc3RyaW5nKS5yZXBsYWNlKC8lKD8hXFxkKykvZywgJyUyNScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpXG5cdFx0KTtcblx0fTtcblxuXHRpZiAodXNlcm5hbWUpIHtcblx0XHRyZXR1cm4gZGVjb2RlKHVzZXJuYW1lLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKCdVc2VyOicsICcnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0fSk7XG5cdH1cblx0Y29uc3QgdXNlcm5hbWVNYXRjaDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSB1cmwubWF0Y2goL1xcL3dpa2lcXC9Vc2VyOiguKz8pJC8pO1xuXHRpZiAodXNlcm5hbWVNYXRjaD8uWzFdKSB7XG5cdFx0cmV0dXJuIGRlY29kZSh1c2VybmFtZU1hdGNoWzFdLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuICcnO1xufTtcblxuY29uc3QgcXVlcnlVc2VyR3JvdXBzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDM2MDAsXG5cdFx0bWF4YWdlOiAzNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBxdWVyeUdsb2JhbFVzZXJHcm91cHMgPSBhc3luYyAodXNlcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdG1ldGE6ICdnbG9iYWx1c2VyaW5mbycsXG5cdFx0Z3VpdXNlcjogdXNlcixcblx0XHRndWlwcm9wOiAnZ3JvdXBzJyxcblx0XHRzbWF4YWdlOiAzNjAwLFxuXHRcdG1heGFnZTogMzYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZG9uZSA9ICgkdXNlckxpbmtzOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdCR1c2VyTGlua3MuZWFjaCgoX2luZGV4OiBudW1iZXIsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKCRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmluZCgnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB1c2VybmFtZTogc3RyaW5nID0gZ2V0VXNlcm5hbWUoJGVsZW1lbnQuYXR0cignaHJlZicpID8/ICcnKTtcblx0XHRpZiAoIXVzZXJuYW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGdyb3VwcyA9ICh1c2VyR3JvdXBNYXAuZ2V0KHVzZXJuYW1lKSBhcyBzdHJpbmdbXSB8IHVuZGVmaW5lZCkgPz8gW107XG5cdFx0Y29uc3QgZ2xvYmFsR3JvdXBzID0gKGdsb2JhbFVzZXJHcm91cE1hcC5nZXQodXNlcm5hbWUpIGFzIHN0cmluZ1tdIHwgdW5kZWZpbmVkKSA/PyBbXTtcblx0XHRpZiAoIWdyb3Vwcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCAkc3VwczogSlF1ZXJ5ID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2dhZGdldHMtbWFya3JpZ2h0cycpO1xuXHRcdGZvciAoY29uc3QgZ3JvdXAgb2YgdW5pcXVlQXJyYXkoWy4uLmdyb3VwcywgLi4uZ2xvYmFsR3JvdXBzXSkpIHtcblx0XHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nID0gYGdhZGdldHMtbWFya3JpZ2h0c19fJHtncm91cH1gO1xuXHRcdFx0aWYgKCRzdXBzLmZpbmQoJ3N1cCcpLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JHN1cHMuYXBwZW5kKFxuXHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fcWl1d2VuXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3N0ZXdhcmRcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fY2hlY2t1c2VyXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3N1cHByZXNzXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3N5c29wXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2ludGVyZmFjZS1hZG1pblxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX190ZW1wbGF0ZWVkaXRvclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX190cmFuc3dpa2lcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fcGF0cm9sbGVyXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2F1dG9yZXZpZXdlclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zZW5pb3JlZGl0b3Jcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fZXZlbnRzcG9uc29yXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX21hc3NtZXNzYWdlLXNlbmRlclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19jb25maXJtZWRcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fYXV0b2NvbmZpcm1lZFxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19ib3Rcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fZmxvb2Rcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19faXBibG9jay1leGVtcHRcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fcm5yc3ZlcmlmeS1leGVtcHRcblx0XHRcdFx0JCgnPHN1cD4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhjbGFzc05hbWUpXG5cdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0YWx0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdCRlbGVtZW50LmFmdGVyKCRzdXBzKTtcblx0fSk7XG59O1xuXG5jb25zdCBtYXJrVXNlclJpZ2h0cyA9IGFzeW5jICgkY29udGVudDogSlF1ZXJ5KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0ICR1c2VyTGlua3M6IEpRdWVyeSA9ICRjb250ZW50LmZpbmQoJ2EubXctdXNlcmxpbms6bm90KC5tdy1hbm9udXNlcmxpbmspJyk7XG5cdGxldCB1c2Vyczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgcXVldWU6IEFycmF5PHR5cGVvZiB1c2Vycz4gPSBbXTtcblxuXHQkdXNlckxpbmtzLmVhY2goKF9pbmRleDogbnVtYmVyLCB7dGV4dENvbnRlbnR9OiB7dGV4dENvbnRlbnQ6IHN0cmluZyB8IG51bGx9KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgdXNlckxpbmtUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udG9TdHJpbmcoKTtcblx0XHRpZiAodXNlckxpbmtUZXh0KSB7XG5cdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlckxpbmtUZXh0OyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHR9XG5cblx0XHQvLyDnlKjmiLflkI3liJfooajljrvph41cblx0XHR1c2VycyA9IHVuaXF1ZUFycmF5KHVzZXJzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblxuXHRcdGlmICh1c2Vycy5sZW5ndGggPT09IDI1KSB7XG5cdFx0XHRxdWV1ZVtxdWV1ZS5sZW5ndGhdID0gdXNlcnM7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0dXNlcnMgPSBbXTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmICh1c2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0cXVldWVbcXVldWUubGVuZ3RoXSA9IHVzZXJzOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdGZvciAoY29uc3QgdXN1c2VycyBvZiBxdWV1ZSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBxdWVyeVVzZXJSZXNwb25zZSA9IGF3YWl0IHF1ZXJ5VXNlckdyb3Vwcyh1c3VzZXJzKTtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRcdGNvbnN0IHt1c2VyczogcXVlcnlVc2Vyc306IHt1c2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXX0gPSBxdWVyeVVzZXJSZXNwb25zZVsncXVlcnknXTtcblxuXHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIHF1ZXJ5VXNlcnMpIHtcblx0XHRcdFx0aWYgKCF1c2VyIHx8ICF1c2VyLmdyb3Vwcykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHVzZXJHcm91cE1hcC5zZXQoXG5cdFx0XHRcdFx0dXNlci5uYW1lLFxuXHRcdFx0XHRcdHVzZXIuZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IHVzZXIgb2YgdXN1c2Vycykge1xuXHRcdFx0XHRjb25zdCBxdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2UgPSBhd2FpdCBxdWVyeUdsb2JhbFVzZXJHcm91cHModXNlcik7XG5cdFx0XHRcdGlmIChxdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2VbJ3F1ZXJ5J10gJiYgcXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlWydxdWVyeSddLmdsb2JhbHVzZXJpbmZvKSB7XG5cdFx0XHRcdFx0Y29uc3Qge2dyb3VwczogZ2xvYmFsZ3JvdXBzfToge2dyb3Vwczogc3RyaW5nW119ID0gcXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlWydxdWVyeSddXG5cdFx0XHRcdFx0XHQuZ2xvYmFsdXNlcmluZm8gYXMge2dyb3Vwczogc3RyaW5nW119O1xuXHRcdFx0XHRcdGdsb2JhbFVzZXJHcm91cE1hcC5zZXQodXNlciwgZ2xvYmFsZ3JvdXBzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRkb25lKCR1c2VyTGlua3MpO1xuXHRcdH0gY2F0Y2gge31cblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeVVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3VwcywgbWFya1VzZXJSaWdodHN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQSxDQUFBO0FBQUFDLFNBQUFELG9CQUFBO0VBQUFFLHVCQUFBQSxNQUFBQTtFQUFBQyxpQkFBQUEsTUFBQUE7QUFB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b0JBQU07Z0JBQUN6QyxRQUFRMEM7Y0FBWSxJQUF3QkYsNEJBQTRCLE9BQU8sRUFDcEZDO0FBQ0YxRixpQ0FBbUJvRixJQUFJdEQsTUFBTTZELFlBQVk7WUFDMUM7VUFDRDtRQUFBLFNBQUF6QixLQUFBO0FBQUFxQixxQkFBQXBCLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUFxQixxQkFBQW5CLEVBQUE7UUFBQTtBQUVBakMsYUFBS0MsVUFBVTtNQUNoQixRQUFRO01BQUM7SUFDVjtFQUNELENBQUE7QUFBQSxTQUFBLFNBdERNa0MsZ0JBQUFzQixLQUFBO0FBQUEsV0FBQXJCLE1BQUE1QyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FKMUhOeEIsR0FBR3lGLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsV0FBV3ZCLFVBQWdCO0FBQ25FLE1BQUlBLFNBQVN4QixLQUFLLElBQUksTUFBTSxxQkFBcUJ3QixTQUFTVixTQUFTLGdCQUFnQixHQUFHO0FBQ3JGLFNBQUtRLGVBQWVFLFFBQVE7RUFDN0I7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJNYXJrUmlnaHRzX2V4cG9ydHMiLCAiX19leHBvcnQiLCAicXVlcnlHbG9iYWxVc2VyR3JvdXBzIiwgInF1ZXJ5VXNlckdyb3VwcyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAicWl1d2VuIiwgImxvY2FsaXplIiwgImVuIiwgInN0ZXdhcmQiLCAiY2hlY2t1c2VyIiwgInN1cHByZXNzIiwgInN5c29wIiwgInRlbXBsYXRlZWRpdG9yIiwgInRyYW5zd2lraSIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgInNlbmlvcmVkaXRvciIsICJldmVudHNwb25zb3IiLCAiY29uZmlybWVkIiwgImF1dG9jb25maXJtZWQiLCAiYm90IiwgImZsb29kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAidXNlckdyb3VwTWFwIiwgIk1hcCIsICJnbG9iYWxVc2VyR3JvdXBNYXAiLCAiZ2V0VXNlcm5hbWUiLCAidXJsIiwgInVzZXJuYW1lIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJkZWNvZGUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJuYW1lTWF0Y2giLCAibWF0Y2giLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1c3VzZXJzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJ1c3Byb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJfcmVmMiIsICJ1c2VyIiwgIm1ldGEiLCAiZ3VpdXNlciIsICJndWlwcm9wIiwgIl94MiIsICJkb25lIiwgIiR1c2VyTGlua3MiLCAiZWFjaCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJfJGVsZW1lbnQkYXR0ciIsICJfdXNlckdyb3VwTWFwJGdldCIsICJfZ2xvYmFsVXNlckdyb3VwTWFwJGciLCAiJGVsZW1lbnQiLCAiJCIsICJwYXJlbnRzIiwgImZpbmQiLCAibGVuZ3RoIiwgImF0dHIiLCAiZ3JvdXBzIiwgImdsb2JhbEdyb3VwcyIsICIkc3VwcyIsICJhZGRDbGFzcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgInVuaXF1ZUFycmF5IiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZ3JvdXAiLCAidmFsdWUiLCAiY2xhc3NOYW1lIiwgImhhc0NsYXNzIiwgImFwcGVuZCIsICJhbHQiLCAidGl0bGUiLCAiZXJyIiwgImUiLCAiZiIsICJhZnRlciIsICJtYXJrVXNlclJpZ2h0cyIsICJfcmVmMyIsICIkY29udGVudCIsICJ1c2VycyIsICJxdWV1ZSIsICJ0ZXh0Q29udGVudCIsICJ1c2VyTGlua1RleHQiLCAidG9TdHJpbmciLCAiX2kiLCAiX3F1ZXVlIiwgInF1ZXJ5VXNlclJlc3BvbnNlIiwgInF1ZXJ5VXNlcnMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAic2V0IiwgIm5hbWUiLCAiZmlsdGVyIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZSIsICJnbG9iYWx1c2VyaW5mbyIsICJnbG9iYWxncm91cHMiLCAiX3gzIiwgImhvb2siLCAiYWRkIiwgIm1hcmtSaWdodHMiXQp9Cg==
