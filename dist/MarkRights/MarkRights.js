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
//! src/MarkRights/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("MarkRights/".concat(version));
//! src/MarkRights/modules/util/query.ts
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
  var _ref2 = _asyncToGenerator(function* (guiuser) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: "globaluserinfo",
      guiuser,
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
//! src/MarkRights/modules/util/getUserName.ts
var getUserName = (url) => {
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
//! src/MarkRights/modules/util/appendUserRightsMark.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var appendUserRightsMark = ($userLinks, userGroups) => {
  var _iterator2 = _createForOfIteratorHelper($userLinks), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _$element$attr, _userGroups$username;
      const $element = _step2.value;
      const username = getUserName((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
      if (!username) {
        continue;
      }
      userGroups !== null && userGroups !== void 0 ? userGroups : userGroups = {};
      const groups = (_userGroups$username = userGroups[username]) !== null && _userGroups$username !== void 0 ? _userGroups$username : [];
      let $sups;
      if ($element.parents("li").find(".gadgets-markrights").length) {
        $sups = $element.siblings(".gadgets-markrights").eq(0);
      } else if ($element.siblings(".gadgets-markrights").length) {
        $sups = $element.parents("li").find(".gadgets-markrights").eq(0);
      } else {
        $sups = $("<span>").addClass("gadgets-markrights");
        $element.after($sups);
      }
      var _iterator3 = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)(groups)), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const group = _step3.value;
          const className = "gadgets-markrights__".concat(group);
          if ($sups.find("sup").hasClass(className)) {
            continue;
          }
          $sups.append(
            // The following classes are used here:
            // * see ../types.d.ts
            // * for more information
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
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
//! src/MarkRights/modules/util/generateUserLinks.ts
var generateUserLinks = ($content) => {
  const userLinks = {};
  const $elements = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
  var _iterator4 = _createForOfIteratorHelper($elements), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _userLinks$user;
      const element = _step4.value;
      const $element = $(element);
      if ($element.parents("li").find(".gadgets-markrights").length || $element.siblings(".gadgets-markrights").length) {
        continue;
      }
      const {
        textContent
      } = element;
      const user = textContent === null || textContent === void 0 ? void 0 : textContent.toString();
      if (!user) {
        continue;
      }
      if (mw.util.isIPv4Address(user) || mw.util.isIPv6Address(user)) {
        continue;
      }
      (_userLinks$user = userLinks[user]) !== null && _userLinks$user !== void 0 ? _userLinks$user : userLinks[user] = [];
      userLinks[user][userLinks[user].length] = $element;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return userLinks;
};
//! src/MarkRights/modules/core.ts
var markUserRights = ($content) => {
  const userLinks = generateUserLinks($content);
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const $userLinks = Object.values(userLinks).reduce((previousValue, currentValue) => {
    return [...previousValue, ...currentValue];
  });
  if (!$userLinks.length) {
    return;
  }
  const promises = [];
  for (let i = 0; i < users.length; i++) {
    const ususers = users.splice(0, 25).filter((element) => {
      return !(mw.util.isIPv4Address(element) || mw.util.isIPv6Address(element));
    });
    if (!ususers.length) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      const userGroups = {};
      try {
        const response = yield queryUserGroups(ususers);
        const {
          users: queryUsers
        } = response["query"];
        var _iterator5 = _createForOfIteratorHelper(queryUsers), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var _userGroups$name;
            const user = _step5.value;
            if (!(user !== null && user !== void 0 && user.name) || !(user !== null && user !== void 0 && user.groups)) {
              continue;
            }
            const {
              name,
              groups
            } = user;
            (_userGroups$name = userGroups[name]) !== null && _userGroups$name !== void 0 ? _userGroups$name : userGroups[name] = [];
            userGroups[name] = [...userGroups[name], ...groups.filter((element) => {
              return element !== "*";
            })];
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      } catch (error) {
        console.error("[MarkRights] Ajax error:", error);
      }
      appendUserRightsMark($userLinks, userGroups);
    });
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      const userGroups = {};
      var _iterator6 = _createForOfIteratorHelper(ususers), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          const user = _step6.value;
          try {
            var _userGroups$user;
            const response = yield queryGlobalUserGroups(user);
            const {
              globaluserinfo
            } = response["query"];
            if (!(globaluserinfo !== null && globaluserinfo !== void 0 && globaluserinfo.groups)) {
              continue;
            }
            const {
              groups
            } = globaluserinfo;
            (_userGroups$user = userGroups[user]) !== null && _userGroups$user !== void 0 ? _userGroups$user : userGroups[user] = [];
            userGroups[user] = [...userGroups[user], ...groups];
          } catch (error) {
            console.error("[MarkRights] Ajax error:", error);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      appendUserRightsMark($userLinks, userGroups);
    });
  }
  void _asyncToGenerator(function* () {
    for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
      const promise = _promises[_i];
      try {
        yield promise();
      } catch {
      }
    }
  })();
};
//! src/MarkRights/MarkRights.ts
mw.hook("wikipage.content").add(function markRights($content) {
  if ($content.attr("id") === "mw-content-text" || $content.hasClass("mw-changeslist")) {
    void markUserRights($content);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvcXVlcnkudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvdXRpbC9nZXRVc2VyTmFtZS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvYXBwZW5kVXNlclJpZ2h0c01hcmsudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2dlbmVyYXRlVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvY29yZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAZGVzY3JpcHRpb24g5Zyo5pyA6L+R5L+u5pS544CB55uR6KeG5YiX6KGo44CB5p2h55uu5Y6G5Y+y6K6w5b2V562J5L2N572u5Lul54m55q6K5qC85byP5pi+56S65pyJ54m55q6K5p2D6ZmQ55qE55So5oi3XG4gKi9cbmltcG9ydCB7bWFya1VzZXJSaWdodHN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBtYXJrUmlnaHRzKCRjb250ZW50KTogdm9pZCB7XG5cdGlmICgkY29udGVudC5hdHRyKCdpZCcpID09PSAnbXctY29udGVudC10ZXh0JyB8fCAkY29udGVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QnKSkge1xuXHRcdHZvaWQgbWFya1VzZXJSaWdodHMoJGNvbnRlbnQpO1xuXHR9XG59KTtcblxuZXhwb3J0IHtxdWVyeUdsb2JhbFVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvcXVlcnknO1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IDIuMFxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya1JpZ2h0cy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5VXNlckdyb3VwcyA9IGFzeW5jICh1c3VzZXJzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0dXN1c2Vycyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5R2xvYmFsVXNlckdyb3VwcyA9IGFzeW5jIChndWl1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bWV0YTogJ2dsb2JhbHVzZXJpbmZvJyxcblx0XHRndWl1c2VyLFxuXHRcdGd1aXByb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHtxdWVyeVVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHFpdXdlbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ6ZW/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ermemVtycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdHRyYW5zd2lraTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRwYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdGF1dG9yZXZpZXdlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdH0pLFxuXHRcdHNlbmlvcmVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZW5pb3IgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i1hOa3see8luiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfos4fmt7Hnt6jogIUnLFxuXHRcdH0pLFxuXHRcdGV2ZW50c3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRjb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0YXV0b2NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Zmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHQnaXBibG9jay1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgZ2V0VXNlck5hbWUgPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRpZiAoIXVybCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIHVybCk7XG5cblx0Y29uc3QgZGVjb2RlID0gKHN0cmluZzogc3RyaW5nLCByZXBsYWNlOiAoX3N0cmluZzogc3RyaW5nKSA9PiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG5cdFx0XHQoKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXBsYWNlKHN0cmluZykpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZShzdHJpbmcpLnJlcGxhY2UoLyUoPyFcXGQrKS9nLCAnJTI1Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKClcblx0XHQpO1xuXHR9O1xuXG5cdGlmICh1c2VybmFtZSkge1xuXHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWUsIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoJ1VzZXI6JywgJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHVzZXJuYW1lTWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gdXJsLm1hdGNoKC9cXC93aWtpXFwvVXNlcjooLis/KSQvKTtcblxuXHRpZiAodXNlcm5hbWVNYXRjaD8uWzFdKSB7XG5cdFx0cmV0dXJuIGRlY29kZSh1c2VybmFtZU1hdGNoWzFdLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gJyc7XG59O1xuXG5leHBvcnQge2dldFVzZXJOYW1lfTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7Z2V0VXNlck5hbWV9IGZyb20gJy4vZ2V0VXNlck5hbWUnO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBwZW5kVXNlclJpZ2h0c01hcmsgPSAoJHVzZXJMaW5rczogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdLCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCAkZWxlbWVudCBvZiAkdXNlckxpbmtzKSB7XG5cdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyA9IGdldFVzZXJOYW1lKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJyk7XG5cdFx0aWYgKCF1c2VybmFtZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlckdyb3VwcyA/Pz0ge307XG5cdFx0Y29uc3QgZ3JvdXBzID0gdXNlckdyb3Vwc1t1c2VybmFtZV0gPz8gW107XG5cblx0XHRsZXQgJHN1cHM6IEpRdWVyeTtcblx0XHRpZiAoJGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHQkc3VwcyA9ICRlbGVtZW50LnNpYmxpbmdzKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykuZXEoMCk7XG5cdFx0fSBlbHNlIGlmICgkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCkge1xuXHRcdFx0JHN1cHMgPSAkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5lcSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHN1cHMgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0cy1tYXJrcmlnaHRzJyk7XG5cdFx0XHQkZWxlbWVudC5hZnRlcigkc3Vwcyk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBncm91cCBvZiB1bmlxdWVBcnJheShncm91cHMpKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGBnYWRnZXRzLW1hcmtyaWdodHNfXyR7Z3JvdXB9YDtcblx0XHRcdGlmICgkc3Vwcy5maW5kKCdzdXAnKS5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQkc3Vwcy5hcHBlbmQoXG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIHNlZSAuLi90eXBlcy5kLnRzXG5cdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0JCgnPHN1cD4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhjbGFzc05hbWUpXG5cdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0YWx0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2FwcGVuZFVzZXJSaWdodHNNYXJrfTtcbiIsICJjb25zdCBnZW5lcmF0ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KTogUmVjb3JkPHN0cmluZywgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdPiA9PiB7XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdPiA9IHt9O1xuXHRjb25zdCAkZWxlbWVudHMgPSAkY29udGVudC5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYS5tdy11c2VybGluazpub3QoLm13LWFub251c2VybGluayknKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmluZCgnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCB8fFxuXHRcdFx0JGVsZW1lbnQuc2libGluZ3MoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGhcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHt0ZXh0Q29udGVudH0gPSBlbGVtZW50O1xuXHRcdGNvbnN0IHVzZXI6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRleHRDb250ZW50Py50b1N0cmluZygpO1xuXG5cdFx0aWYgKCF1c2VyKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAobXcudXRpbC5pc0lQdjRBZGRyZXNzKHVzZXIpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyh1c2VyKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlckxpbmtzW3VzZXJdID8/PSBbXTtcblxuXHRcdHVzZXJMaW5rc1t1c2VyXVt1c2VyTGlua3NbdXNlcl0ubGVuZ3RoXSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9O1xuIiwgImltcG9ydCB7cXVlcnlHbG9iYWxVc2VyR3JvdXBzLCBxdWVyeVVzZXJHcm91cHN9IGZyb20gJy4vdXRpbC9xdWVyeSc7XG5pbXBvcnQge2FwcGVuZFVzZXJSaWdodHNNYXJrfSBmcm9tICcuL3V0aWwvYXBwZW5kVXNlclJpZ2h0c01hcmsnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVXNlckxpbmtzJztcblxuY29uc3QgbWFya1VzZXJSaWdodHMgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VyTGlua3MgPSBnZW5lcmF0ZVVzZXJMaW5rcygkY29udGVudCk7XG5cblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHVzZXJMaW5rcyA9IE9iamVjdC52YWx1ZXModXNlckxpbmtzKS5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4ge1xuXHRcdHJldHVybiBbLi4ucHJldmlvdXNWYWx1ZSwgLi4uY3VycmVudFZhbHVlXTtcblx0fSk7XG5cdGlmICghJHVzZXJMaW5rcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdXN1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gIShtdy51dGlsLmlzSVB2NEFkZHJlc3MoZWxlbWVudCkgfHwgbXcudXRpbC5pc0lQdjZBZGRyZXNzKGVsZW1lbnQpKTtcblx0XHR9KTtcblx0XHRpZiAoIXVzdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0Y29uc3QgdXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlVc2VyR3JvdXBzKHVzdXNlcnMpO1xuXHRcdFx0XHRjb25zdCB7dXNlcnM6IHF1ZXJ5VXNlcnN9ID0gcmVzcG9uc2VbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0XHRcdHVzZXJzOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGZvciAoY29uc3QgdXNlciBvZiBxdWVyeVVzZXJzKSB7XG5cdFx0XHRcdFx0aWYgKCF1c2VyPy5uYW1lIHx8ICF1c2VyPy5ncm91cHMpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHtuYW1lLCBncm91cHN9ID0gdXNlcjtcblxuXHRcdFx0XHRcdHVzZXJHcm91cHNbbmFtZV0gPz89IFtdO1xuXG5cdFx0XHRcdFx0dXNlckdyb3Vwc1tuYW1lXSA9IFtcblx0XHRcdFx0XHRcdC4uLnVzZXJHcm91cHNbbmFtZV0sXG5cdFx0XHRcdFx0XHQuLi5ncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya1JpZ2h0c10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdGFwcGVuZFVzZXJSaWdodHNNYXJrKCR1c2VyTGlua3MsIHVzZXJHcm91cHMpO1xuXHRcdH07XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0Y29uc3QgdXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHRcdGZvciAoY29uc3QgdXNlciBvZiB1c3VzZXJzKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUdsb2JhbFVzZXJHcm91cHModXNlcik7XG5cdFx0XHRcdFx0Y29uc3Qge2dsb2JhbHVzZXJpbmZvfSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdFx0XHRcdGdsb2JhbHVzZXJpbmZvOiB7Z3JvdXBzOiBzdHJpbmdbXX07XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGlmICghZ2xvYmFsdXNlcmluZm8/Lmdyb3Vwcykge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3Qge2dyb3Vwc30gPSBnbG9iYWx1c2VyaW5mbztcblxuXHRcdFx0XHRcdHVzZXJHcm91cHNbdXNlcl0gPz89IFtdO1xuXG5cdFx0XHRcdFx0dXNlckdyb3Vwc1t1c2VyXSA9IFsuLi51c2VyR3JvdXBzW3VzZXJdLCAuLi5ncm91cHNdO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRhcHBlbmRVc2VyUmlnaHRzTWFyaygkdXNlckxpbmtzLCB1c2VyR3JvdXBzKTtcblx0XHR9O1xuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmV4cG9ydCB7bWFya1VzZXJSaWdodHN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQSxDQUFBO0FBQUFDLFNBQUFELG9CQUFBO0VBQUFFLHVCQUFBQSxNQUFBQTtFQUFBQyxpQkFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFOLGtCQUFBOztBQ0NDLElBQUFPLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsY0FBQUMsT0FBZ0NMLE9BQU8sQ0FBRTs7QUNEN0QsSUFBTUosa0JBQUEsMkJBQUE7QUFBQSxNQUFBVSxPQUFBQyxrQkFBa0IsV0FBT0MsU0FBK0I7QUFDN0QsVUFBTUMsU0FBOEI7TUFDbkNEO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsUUFBUTtNQUNSQyxTQUFTO01BQ1RDLFFBQVE7SUFDVDtBQUNBLFVBQU1DLFdBQUEsTUFBaUJkLElBQUllLElBQUlULE1BQU07QUFFckMsV0FBT1E7RUFDUixDQUFBO0FBQUEsU0FBQSxTQWRNckIsaUJBQUF1QixJQUFBO0FBQUEsV0FBQWIsS0FBQWMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBZ0JOLElBQU0xQix3QkFBQSwyQkFBQTtBQUFBLE1BQUEyQixRQUFBZixrQkFBd0IsV0FBT2dCLFNBQW9CO0FBQ3hELFVBQU1kLFNBQVM7TUFDZEMsUUFBUTtNQUNSQyxRQUFR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cEUsV0FBVzJDLElBQUksSUFBTSxDQUFBO0FBRXJCM0MsdUJBQVcyQyxJQUFJLElBQUksQ0FBQyxHQUFHM0MsV0FBVzJDLElBQUksR0FBRyxHQUFHL0IsTUFBTTtVQUNuRCxTQUFTb0QsT0FBZ0I7QUFDeEJDLG9CQUFRRCxNQUFNLDRCQUE0QkEsS0FBSztVQUNoRDtRQUNEO01BQUEsU0FBQWpDLEtBQUE7QUFBQW1DLG1CQUFBbEMsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQW1DLG1CQUFBakMsRUFBQTtNQUFBO0FBRUFuQywyQkFBcUJDLFlBQVlDLFVBQVU7SUFDNUMsQ0FBQTtFQUNEO0FBRUEsT0FBQXpELGtCQUFNLGFBQVk7QUFDakIsYUFBQStILEtBQUEsR0FBQUMsWUFBc0JoQixVQUFBZSxLQUFBQyxVQUFBdkQsUUFBQXNELE1BQVU7QUFBaEMsWUFBV0UsVUFBQUQsVUFBQUQsRUFBQTtBQUNWLFVBQUk7QUFDSCxjQUFNRSxRQUFRO01BQ2YsUUFBUTtNQUFDO0lBQ1Y7RUFDRCxDQUFBLEVBQUc7QUFDSjs7QVI1RkFwRixHQUFHcUYsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxXQUFXeEMsVUFBZ0I7QUFDbkUsTUFBSUEsU0FBU3hCLEtBQUssSUFBSSxNQUFNLHFCQUFxQndCLFNBQVNSLFNBQVMsZ0JBQWdCLEdBQUc7QUFDckYsU0FBS29CLGVBQWVaLFFBQVE7RUFDN0I7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJNYXJrUmlnaHRzX2V4cG9ydHMiLCAiX19leHBvcnQiLCAicXVlcnlHbG9iYWxVc2VyR3JvdXBzIiwgInF1ZXJ5VXNlckdyb3VwcyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidXN1c2VycyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXNwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX3JlZjIiLCAiZ3VpdXNlciIsICJtZXRhIiwgImd1aXByb3AiLCAiX3gyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAicWl1d2VuIiwgImxvY2FsaXplIiwgImVuIiwgInN0ZXdhcmQiLCAiY2hlY2t1c2VyIiwgInN1cHByZXNzIiwgInN5c29wIiwgInRlbXBsYXRlZWRpdG9yIiwgInRyYW5zd2lraSIsICJwYXRyb2xsZXIiLCAiYXV0b3Jldmlld2VyIiwgInNlbmlvcmVkaXRvciIsICJldmVudHNwb25zb3IiLCAiY29uZmlybWVkIiwgImF1dG9jb25maXJtZWQiLCAiYm90IiwgImZsb29kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRVc2VyTmFtZSIsICJ1cmwiLCAidXNlcm5hbWUiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImRlY29kZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlcm5hbWVNYXRjaCIsICJtYXRjaCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBwZW5kVXNlclJpZ2h0c01hcmsiLCAiJHVzZXJMaW5rcyIsICJ1c2VyR3JvdXBzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl8kZWxlbWVudCRhdHRyIiwgIl91c2VyR3JvdXBzJHVzZXJuYW1lIiwgIiRlbGVtZW50IiwgInZhbHVlIiwgImF0dHIiLCAiZ3JvdXBzIiwgIiRzdXBzIiwgInBhcmVudHMiLCAiZmluZCIsICJsZW5ndGgiLCAic2libGluZ3MiLCAiZXEiLCAiJCIsICJhZGRDbGFzcyIsICJhZnRlciIsICJfaXRlcmF0b3IzIiwgInVuaXF1ZUFycmF5IiwgIl9zdGVwMyIsICJncm91cCIsICJjbGFzc05hbWUiLCAiaGFzQ2xhc3MiLCAiYXBwZW5kIiwgImFsdCIsICJ0aXRsZSIsICJlcnIiLCAiZSIsICJmIiwgImdlbmVyYXRlVXNlckxpbmtzIiwgIiRjb250ZW50IiwgInVzZXJMaW5rcyIsICIkZWxlbWVudHMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiX3VzZXJMaW5rcyR1c2VyIiwgImVsZW1lbnQiLCAidGV4dENvbnRlbnQiLCAidXNlciIsICJ0b1N0cmluZyIsICJpc0lQdjRBZGRyZXNzIiwgImlzSVB2NkFkZHJlc3MiLCAibWFya1VzZXJSaWdodHMiLCAidXNlcnMiLCAiT2JqZWN0IiwgImtleXMiLCAidmFsdWVzIiwgInJlZHVjZSIsICJwcmV2aW91c1ZhbHVlIiwgImN1cnJlbnRWYWx1ZSIsICJwcm9taXNlcyIsICJpIiwgInNwbGljZSIsICJmaWx0ZXIiLCAicXVlcnlVc2VycyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfdXNlckdyb3VwcyRuYW1lIiwgIm5hbWUiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfdXNlckdyb3VwcyR1c2VyIiwgImdsb2JhbHVzZXJpbmZvIiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgImhvb2siLCAiYWRkIiwgIm1hcmtSaWdodHMiXQp9Cg==
