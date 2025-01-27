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
  getGlobalUserGroups: () => getGlobalUserGroups,
  getLocalUserGroups: () => getLocalUserGroups,
  queryGlobalUserGroups: () => queryGlobalUserGroups,
  queryUserGroups: () => queryUserGroups
});
module.exports = __toCommonJS(MarkRights_exports);
//! src/MarkRights/options.json
var version = 2;
var storageKeyLocal = "ext.gadget.WhoIsActive_MarkRights-local-";
var storageKeyGlobal = "ext.gadget.WhoIsActive_MarkRights-global-";
//! src/MarkRights/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("MarkRights/".concat(version));
//! src/MarkRights/modules/util/getUserGroups.ts
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
var getLocalUserGroups = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (ususers) {
    const userGroups = {};
    ususers = ususers.filter((username) => {
      var _userGroups$username;
      if (mw.storage.getObject(storageKeyLocal + username)) {
        userGroups[username] = mw.storage.getObject(storageKeyLocal + username);
      }
      return !!(userGroups !== null && userGroups !== void 0 && (_userGroups$username = userGroups[username]) !== null && _userGroups$username !== void 0 && _userGroups$username.length);
    });
    try {
      const response = yield queryUserGroups(ususers);
      const {
        users: queryUsers
      } = response["query"];
      var _iterator2 = _createForOfIteratorHelper(queryUsers), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var _userGroups$name;
          const user = _step2.value;
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
          mw.storage.setObject(storageKeyLocal + name, userGroups[name], 10 * 60);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } catch (error) {
      console.error("[MarkRights] Ajax error:", error);
    }
    return userGroups;
  });
  return function getLocalUserGroups2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getGlobalUserGroups = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (ususers) {
    const userGroups = {};
    ususers = ususers.filter((username) => {
      var _userGroups$username2;
      if (mw.storage.getObject(storageKeyGlobal + username)) {
        userGroups[username] = mw.storage.getObject(storageKeyGlobal + username);
      }
      return !!(userGroups !== null && userGroups !== void 0 && (_userGroups$username2 = userGroups[username]) !== null && _userGroups$username2 !== void 0 && _userGroups$username2.length);
    });
    var _iterator3 = _createForOfIteratorHelper(ususers), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const user = _step3.value;
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
          mw.storage.setObject(storageKeyLocal + user, userGroups[user], 10 * 60);
        } catch (error) {
          console.error("[MarkRights] Ajax error:", error);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return userGroups;
  });
  return function getGlobalUserGroups2(_x4) {
    return _ref4.apply(this, arguments);
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
  var _iterator4 = _createForOfIteratorHelper($userLinks), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _$element$attr, _userGroups$username3;
      const $element = _step4.value;
      const username = getUserName((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
      if (!username) {
        continue;
      }
      userGroups !== null && userGroups !== void 0 ? userGroups : userGroups = {};
      const groups = (_userGroups$username3 = userGroups[username]) !== null && _userGroups$username3 !== void 0 ? _userGroups$username3 : [];
      let $sups;
      if ($element.parents("li").find(".gadgets-markrights").length) {
        $sups = $element.siblings(".gadgets-markrights").eq(0);
      } else if ($element.siblings(".gadgets-markrights").length) {
        $sups = $element.parents("li").find(".gadgets-markrights").eq(0);
      } else {
        $sups = $("<span>").addClass("gadgets-markrights");
        $element.after($sups);
      }
      var _iterator5 = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)(groups)), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          const group = _step5.value;
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
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
//! src/MarkRights/modules/util/generateUserLinks.ts
var generateUserLinks = ($content) => {
  const userLinks = {};
  const $elements = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
  var _iterator6 = _createForOfIteratorHelper($elements), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      var _userLinks$user;
      const element = _step6.value;
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
    _iterator6.e(err);
  } finally {
    _iterator6.f();
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
      let userGroups = {};
      try {
        userGroups = yield getLocalUserGroups(ususers);
      } catch (error) {
        console.error("[MarkRights] Ajax error:", error);
      }
      appendUserRightsMark($userLinks, userGroups);
    });
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      let userGroups = {};
      try {
        userGroups = yield getGlobalUserGroups(ususers);
      } catch (error) {
        console.error("[MarkRights] Ajax error:", error);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2V0VXNlckdyb3Vwcy50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2dldFVzZXJOYW1lLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvdXRpbC9hcHBlbmRVc2VyUmlnaHRzTWFyay50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9jb3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBkZXNjcmlwdGlvbiDlnKjmnIDov5Hkv67mlLnjgIHnm5Hop4bliJfooajjgIHmnaHnm67ljoblj7LorrDlvZXnrYnkvY3nva7ku6XnibnmrormoLzlvI/mmL7npLrmnInnibnmrormnYPpmZDnmoTnlKjmiLdcbiAqL1xuaW1wb3J0IHttYXJrVXNlclJpZ2h0c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtSaWdodHMoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnIHx8ICRjb250ZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdCcpKSB7XG5cdFx0dm9pZCBtYXJrVXNlclJpZ2h0cygkY29udGVudCk7XG5cdH1cbn0pO1xuXG5leHBvcnQge1xuXHRnZXRMb2NhbFVzZXJHcm91cHMsXG5cdGdldEdsb2JhbFVzZXJHcm91cHMsXG5cdHF1ZXJ5VXNlckdyb3Vwcyxcblx0cXVlcnlHbG9iYWxVc2VyR3JvdXBzLFxufSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRVc2VyR3JvdXBzJztcbiIsICJ7XG5cdFwidmVyc2lvblwiOiAyLjAsXG5cdFwic3RvcmFnZUtleUxvY2FsXCI6IFwiZXh0LmdhZGdldC5XaG9Jc0FjdGl2ZV9NYXJrUmlnaHRzLWxvY2FsLVwiLFxuXHRcInN0b3JhZ2VLZXlHbG9iYWxcIjogXCJleHQuZ2FkZ2V0Lldob0lzQWN0aXZlX01hcmtSaWdodHMtZ2xvYmFsLVwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrUmlnaHRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlVc2VyR3JvdXBzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlHbG9iYWxVc2VyR3JvdXBzID0gYXN5bmMgKGd1aXVzZXI6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRtZXRhOiAnZ2xvYmFsdXNlcmluZm8nLFxuXHRcdGd1aXVzZXIsXG5cdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRMb2NhbFVzZXJHcm91cHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nW10pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj4gPT4ge1xuXHRjb25zdCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHR1c3VzZXJzID0gdXN1c2Vycy5maWx0ZXIoKHVzZXJuYW1lKSA9PiB7XG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlcm5hbWUpKSB7XG5cdFx0XHR1c2VyR3JvdXBzW3VzZXJuYW1lXSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlcm5hbWUpIGFzIHN0cmluZ1tdO1xuXHRcdH1cblxuXHRcdHJldHVybiAhIXVzZXJHcm91cHM/Llt1c2VybmFtZV0/Lmxlbmd0aDtcblx0fSk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5VXNlckdyb3Vwcyh1c3VzZXJzKTtcblx0XHRjb25zdCB7dXNlcnM6IHF1ZXJ5VXNlcnN9ID0gcmVzcG9uc2VbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0dXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W107XG5cdFx0fTtcblxuXHRcdGZvciAoY29uc3QgdXNlciBvZiBxdWVyeVVzZXJzKSB7XG5cdFx0XHRpZiAoIXVzZXI/Lm5hbWUgfHwgIXVzZXI/Lmdyb3Vwcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge25hbWUsIGdyb3Vwc30gPSB1c2VyO1xuXG5cdFx0XHR1c2VyR3JvdXBzW25hbWVdID8/PSBbXTtcblxuXHRcdFx0dXNlckdyb3Vwc1tuYW1lXSA9IFtcblx0XHRcdFx0Li4udXNlckdyb3Vwc1tuYW1lXSxcblx0XHRcdFx0Li4uZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XTtcblxuXHRcdFx0Ly8gQ2FjaGUgZm9yIDEwIG1pbnV0ZXNcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgbmFtZSwgdXNlckdyb3Vwc1tuYW1lXSwgMTAgKiA2MCk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxuXG5cdHJldHVybiB1c2VyR3JvdXBzO1xufTtcblxuY29uc3QgZ2V0R2xvYmFsVXNlckdyb3VwcyA9IGFzeW5jICh1c3VzZXJzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVjb3JkPHN0cmluZywgc3RyaW5nW10+PiA9PiB7XG5cdGNvbnN0IHVzZXJHcm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdHVzdXNlcnMgPSB1c3VzZXJzLmZpbHRlcigodXNlcm5hbWUpID0+IHtcblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5R2xvYmFsICsgdXNlcm5hbWUpKSB7XG5cdFx0XHR1c2VyR3JvdXBzW3VzZXJuYW1lXSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUdsb2JhbCArIHVzZXJuYW1lKSBhcyBzdHJpbmdbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gISF1c2VyR3JvdXBzPy5bdXNlcm5hbWVdPy5sZW5ndGg7XG5cdH0pO1xuXG5cdGZvciAoY29uc3QgdXNlciBvZiB1c3VzZXJzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlHbG9iYWxVc2VyR3JvdXBzKHVzZXIpO1xuXHRcdFx0Y29uc3Qge2dsb2JhbHVzZXJpbmZvfSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdFx0Z2xvYmFsdXNlcmluZm86IHtncm91cHM6IHN0cmluZ1tdfTtcblx0XHRcdH07XG5cblx0XHRcdGlmICghZ2xvYmFsdXNlcmluZm8/Lmdyb3Vwcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge2dyb3Vwc30gPSBnbG9iYWx1c2VyaW5mbztcblxuXHRcdFx0dXNlckdyb3Vwc1t1c2VyXSA/Pz0gW107XG5cblx0XHRcdHVzZXJHcm91cHNbdXNlcl0gPSBbLi4udXNlckdyb3Vwc1t1c2VyXSwgLi4uZ3JvdXBzXTtcblxuXHRcdFx0Ly8gQ2FjaGUgZm9yIDEwIG1pbnV0ZXNcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlciwgdXNlckdyb3Vwc1t1c2VyXSwgMTAgKiA2MCk7XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdXNlckdyb3Vwcztcbn07XG5cbmV4cG9ydCB7Z2V0TG9jYWxVc2VyR3JvdXBzLCBnZXRHbG9iYWxVc2VyR3JvdXBzLCBxdWVyeVVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHFpdXdlbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ6ZW/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ermemVtycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdHRyYW5zd2lraTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRwYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdGF1dG9yZXZpZXdlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdH0pLFxuXHRcdHNlbmlvcmVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZW5pb3IgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i1hOa3see8luiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfos4fmt7Hnt6jogIUnLFxuXHRcdH0pLFxuXHRcdGV2ZW50c3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRjb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0YXV0b2NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Zmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHQnaXBibG9jay1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgZ2V0VXNlck5hbWUgPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRpZiAoIXVybCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIHVybCk7XG5cblx0Y29uc3QgZGVjb2RlID0gKHN0cmluZzogc3RyaW5nLCByZXBsYWNlOiAoX3N0cmluZzogc3RyaW5nKSA9PiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG5cdFx0XHQoKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXBsYWNlKHN0cmluZykpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZShzdHJpbmcpLnJlcGxhY2UoLyUoPyFcXGQrKS9nLCAnJTI1Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKClcblx0XHQpO1xuXHR9O1xuXG5cdGlmICh1c2VybmFtZSkge1xuXHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWUsIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoJ1VzZXI6JywgJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHVzZXJuYW1lTWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gdXJsLm1hdGNoKC9cXC93aWtpXFwvVXNlcjooLis/KSQvKTtcblxuXHRpZiAodXNlcm5hbWVNYXRjaD8uWzFdKSB7XG5cdFx0cmV0dXJuIGRlY29kZSh1c2VybmFtZU1hdGNoWzFdLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gJyc7XG59O1xuXG5leHBvcnQge2dldFVzZXJOYW1lfTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7Z2V0VXNlck5hbWV9IGZyb20gJy4vZ2V0VXNlck5hbWUnO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBwZW5kVXNlclJpZ2h0c01hcmsgPSAoJHVzZXJMaW5rczogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdLCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCAkZWxlbWVudCBvZiAkdXNlckxpbmtzKSB7XG5cdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyA9IGdldFVzZXJOYW1lKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJyk7XG5cdFx0aWYgKCF1c2VybmFtZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlckdyb3VwcyA/Pz0ge307XG5cdFx0Y29uc3QgZ3JvdXBzID0gdXNlckdyb3Vwc1t1c2VybmFtZV0gPz8gW107XG5cblx0XHRsZXQgJHN1cHM6IEpRdWVyeTtcblx0XHRpZiAoJGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHQkc3VwcyA9ICRlbGVtZW50LnNpYmxpbmdzKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykuZXEoMCk7XG5cdFx0fSBlbHNlIGlmICgkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCkge1xuXHRcdFx0JHN1cHMgPSAkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5lcSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHN1cHMgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0cy1tYXJrcmlnaHRzJyk7XG5cdFx0XHQkZWxlbWVudC5hZnRlcigkc3Vwcyk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBncm91cCBvZiB1bmlxdWVBcnJheShncm91cHMpKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGBnYWRnZXRzLW1hcmtyaWdodHNfXyR7Z3JvdXB9YDtcblx0XHRcdGlmICgkc3Vwcy5maW5kKCdzdXAnKS5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQkc3Vwcy5hcHBlbmQoXG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIHNlZSAuLi90eXBlcy5kLnRzXG5cdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0JCgnPHN1cD4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhjbGFzc05hbWUpXG5cdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0YWx0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2FwcGVuZFVzZXJSaWdodHNNYXJrfTtcbiIsICJjb25zdCBnZW5lcmF0ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KTogUmVjb3JkPHN0cmluZywgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdPiA9PiB7XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdPiA9IHt9O1xuXHRjb25zdCAkZWxlbWVudHMgPSAkY29udGVudC5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYS5tdy11c2VybGluazpub3QoLm13LWFub251c2VybGluayknKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGVsZW1lbnRzKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmluZCgnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCB8fFxuXHRcdFx0JGVsZW1lbnQuc2libGluZ3MoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGhcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHt0ZXh0Q29udGVudH0gPSBlbGVtZW50O1xuXHRcdGNvbnN0IHVzZXI6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRleHRDb250ZW50Py50b1N0cmluZygpO1xuXG5cdFx0aWYgKCF1c2VyKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAobXcudXRpbC5pc0lQdjRBZGRyZXNzKHVzZXIpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyh1c2VyKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlckxpbmtzW3VzZXJdID8/PSBbXTtcblxuXHRcdHVzZXJMaW5rc1t1c2VyXVt1c2VyTGlua3NbdXNlcl0ubGVuZ3RoXSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9O1xuIiwgImltcG9ydCB7Z2V0R2xvYmFsVXNlckdyb3VwcywgZ2V0TG9jYWxVc2VyR3JvdXBzfSBmcm9tICcuL3V0aWwvZ2V0VXNlckdyb3Vwcyc7XG5pbXBvcnQge2FwcGVuZFVzZXJSaWdodHNNYXJrfSBmcm9tICcuL3V0aWwvYXBwZW5kVXNlclJpZ2h0c01hcmsnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVXNlckxpbmtzJztcblxuY29uc3QgbWFya1VzZXJSaWdodHMgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCB1c2VyTGlua3MgPSBnZW5lcmF0ZVVzZXJMaW5rcygkY29udGVudCk7XG5cblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHVzZXJMaW5rcyA9IE9iamVjdC52YWx1ZXModXNlckxpbmtzKS5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4ge1xuXHRcdHJldHVybiBbLi4ucHJldmlvdXNWYWx1ZSwgLi4uY3VycmVudFZhbHVlXTtcblx0fSk7XG5cdGlmICghJHVzZXJMaW5rcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdXN1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gIShtdy51dGlsLmlzSVB2NEFkZHJlc3MoZWxlbWVudCkgfHwgbXcudXRpbC5pc0lQdjZBZGRyZXNzKGVsZW1lbnQpKTtcblx0XHR9KTtcblxuXHRcdGlmICghdXN1c2Vycy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRsZXQgdXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHVzZXJHcm91cHMgPSBhd2FpdCBnZXRMb2NhbFVzZXJHcm91cHModXN1c2Vycyk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya1JpZ2h0c10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdGFwcGVuZFVzZXJSaWdodHNNYXJrKCR1c2VyTGlua3MsIHVzZXJHcm91cHMpO1xuXHRcdH07XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0bGV0IHVzZXJHcm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR1c2VyR3JvdXBzID0gYXdhaXQgZ2V0R2xvYmFsVXNlckdyb3Vwcyh1c3VzZXJzKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0YXBwZW5kVXNlclJpZ2h0c01hcmsoJHVzZXJMaW5rcywgdXNlckdyb3Vwcyk7XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5leHBvcnQge21hcmtVc2VyUmlnaHRzfTtcbiJdLAogICJtYXBwaW5ncyI6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Q3JGLFNBQUtlLGVBQWVWLFFBQVE7RUFDN0I7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJNYXJrUmlnaHRzX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiZ2V0R2xvYmFsVXNlckdyb3VwcyIsICJnZXRMb2NhbFVzZXJHcm91cHMiLCAicXVlcnlHbG9iYWxVc2VyR3JvdXBzIiwgInF1ZXJ5VXNlckdyb3VwcyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidmVyc2lvbiIsICJzdG9yYWdlS2V5TG9jYWwiLCAic3RvcmFnZUtleUdsb2JhbCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidXN1c2VycyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXNwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX3JlZjIiLCAiZ3VpdXNlciIsICJtZXRhIiwgImd1aXByb3AiLCAiX3gyIiwgIl9yZWYzIiwgInVzZXJHcm91cHMiLCAiZmlsdGVyIiwgInVzZXJuYW1lIiwgIl91c2VyR3JvdXBzJHVzZXJuYW1lIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgImxlbmd0aCIsICJ1c2VycyIsICJxdWVyeVVzZXJzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl91c2VyR3JvdXBzJG5hbWUiLCAidXNlciIsICJ2YWx1ZSIsICJuYW1lIiwgImdyb3VwcyIsICJlbGVtZW50IiwgInNldE9iamVjdCIsICJlcnIiLCAiZSIsICJmIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3gzIiwgIl9yZWY0IiwgIl91c2VyR3JvdXBzJHVzZXJuYW1lMiIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJfdXNlckdyb3VwcyR1c2VyIiwgImdsb2JhbHVzZXJpbmZvIiwgIl94NCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInFpdXdlbiIsICJsb2NhbGl6ZSIsICJlbiIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJzZW5pb3JlZGl0b3IiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0VXNlck5hbWUiLCAidXJsIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJkZWNvZGUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJuYW1lTWF0Y2giLCAibWF0Y2giLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwcGVuZFVzZXJSaWdodHNNYXJrIiwgIiR1c2VyTGlua3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiXyRlbGVtZW50JGF0dHIiLCAiX3VzZXJHcm91cHMkdXNlcm5hbWUzIiwgIiRlbGVtZW50IiwgImF0dHIiLCAiJHN1cHMiLCAicGFyZW50cyIsICJmaW5kIiwgInNpYmxpbmdzIiwgImVxIiwgIiQiLCAiYWRkQ2xhc3MiLCAiYWZ0ZXIiLCAiX2l0ZXJhdG9yNSIsICJ1bmlxdWVBcnJheSIsICJfc3RlcDUiLCAiZ3JvdXAiLCAiY2xhc3NOYW1lIiwgImhhc0NsYXNzIiwgImFwcGVuZCIsICJhbHQiLCAidGl0bGUiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAidXNlckxpbmtzIiwgIiRlbGVtZW50cyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfdXNlckxpbmtzJHVzZXIiLCAidGV4dENvbnRlbnQiLCAidG9TdHJpbmciLCAiaXNJUHY0QWRkcmVzcyIsICJpc0lQdjZBZGRyZXNzIiwgIm1hcmtVc2VyUmlnaHRzIiwgIk9iamVjdCIsICJrZXlzIiwgInZhbHVlcyIsICJyZWR1Y2UiLCAicHJldmlvdXNWYWx1ZSIsICJjdXJyZW50VmFsdWUiLCAicHJvbWlzZXMiLCAiaSIsICJzcGxpY2UiLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiaG9vayIsICJhZGQiLCAibWFya1JpZ2h0cyJdCn0K
