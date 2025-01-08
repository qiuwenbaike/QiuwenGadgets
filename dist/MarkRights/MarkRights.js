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
      var _$element$attr, _userGroups, _userGroups$username;
      const $element = _step2.value;
      const username = getUserName((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
      if (!username) {
        continue;
      }
      (_userGroups = userGroups) !== null && _userGroups !== void 0 ? _userGroups : userGroups = {};
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
  const users = [];
  const $userLinks = [];
  const $elements = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
  var _iterator4 = _createForOfIteratorHelper($elements), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const element = _step4.value;
      const $element = $(element);
      if ($element.parents("li").find(".gadgets-markrights").length || $element.siblings(".gadgets-markrights").length) {
        continue;
      }
      $userLinks[$userLinks.length] = $element;
      const {
        textContent
      } = element;
      const user = textContent === null || textContent === void 0 ? void 0 : textContent.toString();
      if (!user) {
        continue;
      }
      users[users.length] = user;
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return {
    users,
    $userLinks
  };
};
//! src/MarkRights/modules/core.ts
var markUserRights = ($content) => {
  const {
    users,
    $userLinks
  } = generateUserLinks($content);
  const promises = [];
  for (let i = 0; i < users.length; i++) {
    const ususers = users.splice(0, 25);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9xdWVyeS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2dldFVzZXJOYW1lLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvdXRpbC9hcHBlbmRVc2VyUmlnaHRzTWFyay50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9jb3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBkZXNjcmlwdGlvbiDlnKjmnIDov5Hkv67mlLnjgIHnm5Hop4bliJfooajjgIHmnaHnm67ljoblj7LorrDlvZXnrYnkvY3nva7ku6XnibnmrormoLzlvI/mmL7npLrmnInnibnmrormnYPpmZDnmoTnlKjmiLdcbiAqL1xuaW1wb3J0IHttYXJrVXNlclJpZ2h0c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtSaWdodHMoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnIHx8ICRjb250ZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdCcpKSB7XG5cdFx0dm9pZCBtYXJrVXNlclJpZ2h0cygkY29udGVudCk7XG5cdH1cbn0pO1xuXG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckdyb3VwcywgcXVlcnlVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnknO1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IDIuMFxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya1JpZ2h0cy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5VXNlckdyb3VwcyA9IGFzeW5jICh1c3VzZXJzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0dXN1c2Vycyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5R2xvYmFsVXNlckdyb3VwcyA9IGFzeW5jICh1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bWV0YTogJ2dsb2JhbHVzZXJpbmZvJyxcblx0XHRndWl1c2VyOiB1c2VyLFxuXHRcdGd1aXByb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHtxdWVyeVVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHFpdXdlbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ6ZW/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ermemVtycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdHRyYW5zd2lraTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRwYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdGF1dG9yZXZpZXdlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdH0pLFxuXHRcdHNlbmlvcmVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZW5pb3IgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i1hOa3see8luiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfos4fmt7Hnt6jogIUnLFxuXHRcdH0pLFxuXHRcdGV2ZW50c3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRjb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0YXV0b2NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Zmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHQnaXBibG9jay1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgZ2V0VXNlck5hbWUgPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRpZiAoIXVybCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIHVybCk7XG5cblx0Y29uc3QgZGVjb2RlID0gKHN0cmluZzogc3RyaW5nLCByZXBsYWNlOiAoX3N0cmluZzogc3RyaW5nKSA9PiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG5cdFx0XHQoKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXBsYWNlKHN0cmluZykpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZShzdHJpbmcpLnJlcGxhY2UoLyUoPyFcXGQrKS9nLCAnJTI1Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKClcblx0XHQpO1xuXHR9O1xuXG5cdGlmICh1c2VybmFtZSkge1xuXHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWUsIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoJ1VzZXI6JywgJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHVzZXJuYW1lTWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gdXJsLm1hdGNoKC9cXC93aWtpXFwvVXNlcjooLis/KSQvKTtcblxuXHRpZiAodXNlcm5hbWVNYXRjaD8uWzFdKSB7XG5cdFx0cmV0dXJuIGRlY29kZSh1c2VybmFtZU1hdGNoWzFdLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gJyc7XG59O1xuXG5leHBvcnQge2dldFVzZXJOYW1lfTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7Z2V0VXNlck5hbWV9IGZyb20gJy4vZ2V0VXNlck5hbWUnO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBwZW5kVXNlclJpZ2h0c01hcmsgPSAoJHVzZXJMaW5rczogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdLCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCAkZWxlbWVudCBvZiAkdXNlckxpbmtzKSB7XG5cdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyA9IGdldFVzZXJOYW1lKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJyk7XG5cdFx0aWYgKCF1c2VybmFtZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlckdyb3VwcyA/Pz0ge307XG5cdFx0Y29uc3QgZ3JvdXBzID0gdXNlckdyb3Vwc1t1c2VybmFtZV0gPz8gW107XG5cblx0XHRsZXQgJHN1cHM6IEpRdWVyeTtcblx0XHRpZiAoJGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHQkc3VwcyA9ICRlbGVtZW50LnNpYmxpbmdzKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykuZXEoMCk7XG5cdFx0fSBlbHNlIGlmICgkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCkge1xuXHRcdFx0JHN1cHMgPSAkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5lcSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHN1cHMgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0cy1tYXJrcmlnaHRzJyk7XG5cdFx0XHQkZWxlbWVudC5hZnRlcigkc3Vwcyk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBncm91cCBvZiB1bmlxdWVBcnJheShncm91cHMpKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGBnYWRnZXRzLW1hcmtyaWdodHNfXyR7Z3JvdXB9YDtcblx0XHRcdGlmICgkc3Vwcy5maW5kKCdzdXAnKS5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQkc3Vwcy5hcHBlbmQoXG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIHNlZSAuLi90eXBlcy5kLnRzXG5cdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0JCgnPHN1cD4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhjbGFzc05hbWUpXG5cdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0YWx0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2FwcGVuZFVzZXJSaWdodHNNYXJrfTtcbiIsICJjb25zdCBnZW5lcmF0ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KToge3VzZXJzOiBzdHJpbmdbXTsgJHVzZXJMaW5rczogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdfSA9PiB7XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCAkdXNlckxpbmtzOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10gPSBbXTtcblx0Y29uc3QgJGVsZW1lbnRzID0gJGNvbnRlbnQuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJ2EubXctdXNlcmxpbms6bm90KC5tdy1hbm9udXNlcmxpbmspJyk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRlbGVtZW50cykge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGggfHxcblx0XHRcdCRlbGVtZW50LnNpYmxpbmdzKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQkdXNlckxpbmtzWyR1c2VyTGlua3MubGVuZ3RoXSA9ICRlbGVtZW50O1xuXG5cdFx0Y29uc3Qge3RleHRDb250ZW50fSA9IGVsZW1lbnQ7XG5cdFx0Y29uc3QgdXNlcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGV4dENvbnRlbnQ/LnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJzW3VzZXJzLmxlbmd0aF0gPSB1c2VyO1xuXHR9XG5cblx0cmV0dXJuIHt1c2VycywgJHVzZXJMaW5rc307XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlckxpbmtzfTtcbiIsICJpbXBvcnQge3F1ZXJ5R2xvYmFsVXNlckdyb3VwcywgcXVlcnlVc2VyR3JvdXBzfSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB7YXBwZW5kVXNlclJpZ2h0c01hcmt9IGZyb20gJy4vdXRpbC9hcHBlbmRVc2VyUmlnaHRzTWFyayc7XG5pbXBvcnQge2dlbmVyYXRlVXNlckxpbmtzfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MnO1xuXG5jb25zdCBtYXJrVXNlclJpZ2h0cyA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt1c2VycywgJHVzZXJMaW5rc30gPSBnZW5lcmF0ZVVzZXJMaW5rcygkY29udGVudCk7XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghdXN1c2Vycy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRjb25zdCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJHcm91cHModXN1c2Vycyk7XG5cdFx0XHRcdGNvbnN0IHt1c2VyczogcXVlcnlVc2Vyc30gPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0XHRcdFx0dXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W107XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIHF1ZXJ5VXNlcnMpIHtcblx0XHRcdFx0XHRpZiAoIXVzZXI/Lm5hbWUgfHwgIXVzZXI/Lmdyb3Vwcykge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3Qge25hbWUsIGdyb3Vwc30gPSB1c2VyO1xuXG5cdFx0XHRcdFx0dXNlckdyb3Vwc1tuYW1lXSA/Pz0gW107XG5cblx0XHRcdFx0XHR1c2VyR3JvdXBzW25hbWVdID0gW1xuXHRcdFx0XHRcdFx0Li4udXNlckdyb3Vwc1tuYW1lXSxcblx0XHRcdFx0XHRcdC4uLmdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdF07XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0YXBwZW5kVXNlclJpZ2h0c01hcmsoJHVzZXJMaW5rcywgdXNlckdyb3Vwcyk7XG5cdFx0fTtcblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRjb25zdCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIHVzdXNlcnMpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5R2xvYmFsVXNlckdyb3Vwcyh1c2VyKTtcblx0XHRcdFx0XHRjb25zdCB7Z2xvYmFsdXNlcmluZm99ID0gcmVzcG9uc2VbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0XHRcdFx0Z2xvYmFsdXNlcmluZm86IHtncm91cHM6IHN0cmluZ1tdfTtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0aWYgKCFnbG9iYWx1c2VyaW5mbz8uZ3JvdXBzKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCB7Z3JvdXBzfSA9IGdsb2JhbHVzZXJpbmZvO1xuXG5cdFx0XHRcdFx0dXNlckdyb3Vwc1t1c2VyXSA/Pz0gW107XG5cblx0XHRcdFx0XHR1c2VyR3JvdXBzW3VzZXJdID0gWy4uLnVzZXJHcm91cHNbdXNlcl0sIC4uLmdyb3Vwc107XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtSaWdodHNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGFwcGVuZFVzZXJSaWdodHNNYXJrKCR1c2VyTGlua3MsIHVzZXJHcm91cHMpO1xuXHRcdH07XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpO1xufTtcblxuZXhwb3J0IHttYXJrVXNlclJpZ2h0c307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBLENBQUE7QUFBQUMsU0FBQUQsb0JBQUE7RUFBQUUsdUJBQUFBLE1BQUFBO0VBQUFDLGlCQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQU4sa0JBQUE7O0FDQ0MsSUFBQU8sVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxjQUFBQyxPQUFnQ0wsT0FBTyxDQUFFOztBQ0Q3RCxJQUFNSixrQkFBQSwyQkFBQTtBQUFBLE1BQUFVLE9BQUFDLGtCQUFrQixXQUFPQyxTQUErQjtBQUM3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QUFXMUMsSUFBSSxHQUFHLEdBQUd1RCxNQUFNO1VBQ25ELFNBQVN5QyxPQUFnQjtBQUN4QkMsb0JBQVFELE1BQU0sNEJBQTRCQSxLQUFLO1VBQ2hEO1FBQ0Q7TUFBQSxTQUFBdEIsS0FBQTtBQUFBd0IsbUJBQUF2QixFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBd0IsbUJBQUF0QixFQUFBO01BQUE7QUFFQXBDLDJCQUFxQkMsWUFBWUMsVUFBVTtJQUM1QyxDQUFBO0VBQ0Q7QUFFQSxPQUFBMUQsa0JBQU0sYUFBWTtBQUNqQixhQUFBc0gsS0FBQSxHQUFBQyxZQUFzQmhCLFVBQUFlLEtBQUFDLFVBQUE1QyxRQUFBMkMsTUFBVTtBQUFoQyxZQUFXRSxVQUFBRCxVQUFBRCxFQUFBO0FBQ1YsVUFBSTtBQUNILGNBQU1FLFFBQVE7TUFDZixRQUFRO01BQUM7SUFDVjtFQUNELENBQUEsRUFBRztBQUNKOztBUjdFQTFFLEdBQUcyRSxLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLFdBQVc3QixVQUFnQjtBQUNuRSxNQUFJQSxTQUFTeEIsS0FBSyxJQUFJLE1BQU0scUJBQXFCd0IsU0FBU1IsU0FBUyxnQkFBZ0IsR0FBRztBQUNyRixTQUFLZ0IsZUFBZVIsUUFBUTtFQUM3QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIk1hcmtSaWdodHNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1c3VzZXJzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJ1c3Byb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJfcmVmMiIsICJ1c2VyIiwgIm1ldGEiLCAiZ3VpdXNlciIsICJndWlwcm9wIiwgIl94MiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInFpdXdlbiIsICJsb2NhbGl6ZSIsICJlbiIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJzZW5pb3JlZGl0b3IiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0VXNlck5hbWUiLCAidXJsIiwgInVzZXJuYW1lIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJkZWNvZGUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJuYW1lTWF0Y2giLCAibWF0Y2giLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwcGVuZFVzZXJSaWdodHNNYXJrIiwgIiR1c2VyTGlua3MiLCAidXNlckdyb3VwcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJfJGVsZW1lbnQkYXR0ciIsICJfdXNlckdyb3VwcyIsICJfdXNlckdyb3VwcyR1c2VybmFtZSIsICIkZWxlbWVudCIsICJ2YWx1ZSIsICJhdHRyIiwgImdyb3VwcyIsICIkc3VwcyIsICJwYXJlbnRzIiwgImZpbmQiLCAibGVuZ3RoIiwgInNpYmxpbmdzIiwgImVxIiwgIiQiLCAiYWRkQ2xhc3MiLCAiYWZ0ZXIiLCAiX2l0ZXJhdG9yMyIsICJ1bmlxdWVBcnJheSIsICJfc3RlcDMiLCAiZ3JvdXAiLCAiY2xhc3NOYW1lIiwgImhhc0NsYXNzIiwgImFwcGVuZCIsICJhbHQiLCAidGl0bGUiLCAiZXJyIiwgImUiLCAiZiIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJ1c2VycyIsICIkZWxlbWVudHMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZWxlbWVudCIsICJ0ZXh0Q29udGVudCIsICJ0b1N0cmluZyIsICJtYXJrVXNlclJpZ2h0cyIsICJwcm9taXNlcyIsICJpIiwgInNwbGljZSIsICJxdWVyeVVzZXJzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl91c2VyR3JvdXBzJG5hbWUiLCAibmFtZSIsICJmaWx0ZXIiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfdXNlckdyb3VwcyR1c2VyIiwgImdsb2JhbHVzZXJpbmZvIiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgImhvb2siLCAiYWRkIiwgIm1hcmtSaWdodHMiXQp9Cg==
