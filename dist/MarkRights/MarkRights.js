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
      return !(userGroups !== null && userGroups !== void 0 && (_userGroups$username = userGroups[username]) !== null && _userGroups$username !== void 0 && _userGroups$username.length);
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
      return !(userGroups !== null && userGroups !== void 0 && (_userGroups$username2 = userGroups[username]) !== null && _userGroups$username2 !== void 0 && _userGroups$username2.length);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2V0VXNlckdyb3Vwcy50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2dldFVzZXJOYW1lLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvdXRpbC9hcHBlbmRVc2VyUmlnaHRzTWFyay50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9jb3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBkZXNjcmlwdGlvbiDlnKjmnIDov5Hkv67mlLnjgIHnm5Hop4bliJfooajjgIHmnaHnm67ljoblj7LorrDlvZXnrYnkvY3nva7ku6XnibnmrormoLzlvI/mmL7npLrmnInnibnmrormnYPpmZDnmoTnlKjmiLdcbiAqL1xuaW1wb3J0IHttYXJrVXNlclJpZ2h0c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtSaWdodHMoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnIHx8ICRjb250ZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdCcpKSB7XG5cdFx0dm9pZCBtYXJrVXNlclJpZ2h0cygkY29udGVudCk7XG5cdH1cbn0pO1xuXG5leHBvcnQge1xuXHRnZXRMb2NhbFVzZXJHcm91cHMsXG5cdGdldEdsb2JhbFVzZXJHcm91cHMsXG5cdHF1ZXJ5VXNlckdyb3Vwcyxcblx0cXVlcnlHbG9iYWxVc2VyR3JvdXBzLFxufSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRVc2VyR3JvdXBzJztcbiIsICJ7XG5cdFwidmVyc2lvblwiOiAyLjAsXG5cdFwic3RvcmFnZUtleUxvY2FsXCI6IFwiZXh0LmdhZGdldC5XaG9Jc0FjdGl2ZV9NYXJrUmlnaHRzLWxvY2FsLVwiLFxuXHRcInN0b3JhZ2VLZXlHbG9iYWxcIjogXCJleHQuZ2FkZ2V0Lldob0lzQWN0aXZlX01hcmtSaWdodHMtZ2xvYmFsLVwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrUmlnaHRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlVc2VyR3JvdXBzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlHbG9iYWxVc2VyR3JvdXBzID0gYXN5bmMgKGd1aXVzZXI6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRtZXRhOiAnZ2xvYmFsdXNlcmluZm8nLFxuXHRcdGd1aXVzZXIsXG5cdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRMb2NhbFVzZXJHcm91cHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nW10pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj4gPT4ge1xuXHRjb25zdCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHR1c3VzZXJzID0gdXN1c2Vycy5maWx0ZXIoKHVzZXJuYW1lKSA9PiB7XG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlcm5hbWUpKSB7XG5cdFx0XHR1c2VyR3JvdXBzW3VzZXJuYW1lXSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlcm5hbWUpIGFzIHN0cmluZ1tdO1xuXHRcdH1cblxuXHRcdHJldHVybiAhdXNlckdyb3Vwcz8uW3VzZXJuYW1lXT8ubGVuZ3RoO1xuXHR9KTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlVc2VyR3JvdXBzKHVzdXNlcnMpO1xuXHRcdGNvbnN0IHt1c2VyczogcXVlcnlVc2Vyc30gPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0XHR1c2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXTtcblx0XHR9O1xuXG5cdFx0Zm9yIChjb25zdCB1c2VyIG9mIHF1ZXJ5VXNlcnMpIHtcblx0XHRcdGlmICghdXNlcj8ubmFtZSB8fCAhdXNlcj8uZ3JvdXBzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7bmFtZSwgZ3JvdXBzfSA9IHVzZXI7XG5cblx0XHRcdHVzZXJHcm91cHNbbmFtZV0gPz89IFtdO1xuXG5cdFx0XHR1c2VyR3JvdXBzW25hbWVdID0gW1xuXHRcdFx0XHQuLi51c2VyR3JvdXBzW25hbWVdLFxuXHRcdFx0XHQuLi5ncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdFx0fSksXG5cdFx0XHRdO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMTAgbWludXRlc1xuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9jYWwgKyBuYW1lLCB1c2VyR3JvdXBzW25hbWVdLCAxMCAqIDYwKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW01hcmtSaWdodHNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG5cblx0cmV0dXJuIHVzZXJHcm91cHM7XG59O1xuXG5jb25zdCBnZXRHbG9iYWxVc2VyR3JvdXBzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZ1tdKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4+ID0+IHtcblx0Y29uc3QgdXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0dXN1c2VycyA9IHVzdXNlcnMuZmlsdGVyKCh1c2VybmFtZSkgPT4ge1xuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlHbG9iYWwgKyB1c2VybmFtZSkpIHtcblx0XHRcdHVzZXJHcm91cHNbdXNlcm5hbWVdID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5R2xvYmFsICsgdXNlcm5hbWUpIGFzIHN0cmluZ1tdO1xuXHRcdH1cblxuXHRcdHJldHVybiAhdXNlckdyb3Vwcz8uW3VzZXJuYW1lXT8ubGVuZ3RoO1xuXHR9KTtcblxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgdXN1c2Vycykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5R2xvYmFsVXNlckdyb3Vwcyh1c2VyKTtcblx0XHRcdGNvbnN0IHtnbG9iYWx1c2VyaW5mb30gPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0XHRcdGdsb2JhbHVzZXJpbmZvOiB7Z3JvdXBzOiBzdHJpbmdbXX07XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIWdsb2JhbHVzZXJpbmZvPy5ncm91cHMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHtncm91cHN9ID0gZ2xvYmFsdXNlcmluZm87XG5cblx0XHRcdHVzZXJHcm91cHNbdXNlcl0gPz89IFtdO1xuXG5cdFx0XHR1c2VyR3JvdXBzW3VzZXJdID0gWy4uLnVzZXJHcm91cHNbdXNlcl0sIC4uLmdyb3Vwc107XG5cblx0XHRcdC8vIENhY2hlIGZvciAxMCBtaW51dGVzXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NhbCArIHVzZXIsIHVzZXJHcm91cHNbdXNlcl0sIDEwICogNjApO1xuXHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya1JpZ2h0c10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVzZXJHcm91cHM7XG59O1xuXG5leHBvcnQge2dldExvY2FsVXNlckdyb3VwcywgZ2V0R2xvYmFsVXNlckdyb3VwcywgcXVlcnlVc2VyR3JvdXBzLCBxdWVyeUdsb2JhbFVzZXJHcm91cHN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRxaXV3ZW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VibWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0XHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdH0pLFxuXHRcdHN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHRjaGVja3VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdHN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdHN5c29wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdCdpbnRlcmZhY2UtYWRtaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHR0cmFuc3dpa2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW1wb3J0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+85YWl6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WMr+WFpeiAhScsXG5cdFx0fSksXG5cdFx0cGF0cm9sbGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcicsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRhdXRvcmV2aWV3ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwYWdlIHBhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l6LGB5YWNJyxcblx0XHR9KSxcblx0XHRzZW5pb3JlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VuaW9yIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfotYTmt7HnvJbogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6LOH5rex57eo6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHJlYWwtbmFtZSB2ZXJpZmljYXRpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6e5ZCN5Yi26aqM6K+B6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvpuWQjeWItumpl+itieixgeWFjScsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGdldFVzZXJOYW1lID0gKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0aWYgKCF1cmwpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB1c2VybmFtZTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCB1cmwpO1xuXG5cdGNvbnN0IGRlY29kZSA9IChzdHJpbmc6IHN0cmluZywgcmVwbGFjZTogKF9zdHJpbmc6IHN0cmluZykgPT4gc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0KCgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVwbGFjZShzdHJpbmcpKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2Uoc3RyaW5nKS5yZXBsYWNlKC8lKD8hXFxkKykvZywgJyUyNScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpXG5cdFx0KTtcblx0fTtcblxuXHRpZiAodXNlcm5hbWUpIHtcblx0XHRyZXR1cm4gZGVjb2RlKHVzZXJuYW1lLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKCdVc2VyOicsICcnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0fSk7XG5cdH1cblxuXHRjb25zdCB1c2VybmFtZU1hdGNoOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHVybC5tYXRjaCgvXFwvd2lraVxcL1VzZXI6KC4rPykkLyk7XG5cblx0aWYgKHVzZXJuYW1lTWF0Y2g/LlsxXSkge1xuXHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWVNYXRjaFsxXSwgKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuICcnO1xufTtcblxuZXhwb3J0IHtnZXRVc2VyTmFtZX07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge2dldFVzZXJOYW1lfSBmcm9tICcuL2dldFVzZXJOYW1lJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwcGVuZFVzZXJSaWdodHNNYXJrID0gKCR1c2VyTGlua3M6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD5bXSwgdXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+KTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgJGVsZW1lbnQgb2YgJHVzZXJMaW5rcykge1xuXHRcdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgPSBnZXRVc2VyTmFtZSgkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJycpO1xuXHRcdGlmICghdXNlcm5hbWUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJHcm91cHMgPz89IHt9O1xuXHRcdGNvbnN0IGdyb3VwcyA9IHVzZXJHcm91cHNbdXNlcm5hbWVdID8/IFtdO1xuXG5cdFx0bGV0ICRzdXBzOiBKUXVlcnk7XG5cdFx0aWYgKCRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmluZCgnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCkge1xuXHRcdFx0JHN1cHMgPSAkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmVxKDApO1xuXHRcdH0gZWxzZSBpZiAoJGVsZW1lbnQuc2libGluZ3MoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGgpIHtcblx0XHRcdCRzdXBzID0gJGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykuZXEoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRzdXBzID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2dhZGdldHMtbWFya3JpZ2h0cycpO1xuXHRcdFx0JGVsZW1lbnQuYWZ0ZXIoJHN1cHMpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgZ3JvdXAgb2YgdW5pcXVlQXJyYXkoZ3JvdXBzKSkge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgPSBgZ2FkZ2V0cy1tYXJrcmlnaHRzX18ke2dyb3VwfWA7XG5cdFx0XHRpZiAoJHN1cHMuZmluZCgnc3VwJykuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0JHN1cHMuYXBwZW5kKFxuXHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0Ly8gKiBzZWUgLi4vdHlwZXMuZC50c1xuXHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdCQoJzxzdXA+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuXHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdGFsdDogZ2V0TWVzc2FnZShncm91cCBhcyBVc2VyUmlnaHRzKSxcblx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHthcHBlbmRVc2VyUmlnaHRzTWFya307XG4iLCAiY29uc3QgZ2VuZXJhdGVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IFJlY29yZDxzdHJpbmcsIEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD5bXT4gPT4ge1xuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD5bXT4gPSB7fTtcblx0Y29uc3QgJGVsZW1lbnRzID0gJGNvbnRlbnQuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJ2EubXctdXNlcmxpbms6bm90KC5tdy1hbm9udXNlcmxpbmspJyk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRlbGVtZW50cykge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGggfHxcblx0XHRcdCRlbGVtZW50LnNpYmxpbmdzKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB7dGV4dENvbnRlbnR9ID0gZWxlbWVudDtcblx0XHRjb25zdCB1c2VyOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udG9TdHJpbmcoKTtcblxuXHRcdGlmICghdXNlcikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyh1c2VyKSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3ModXNlcikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJMaW5rc1t1c2VyXSA/Pz0gW107XG5cblx0XHR1c2VyTGlua3NbdXNlcl1bdXNlckxpbmtzW3VzZXJdLmxlbmd0aF0gPSAkZWxlbWVudDsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdHJldHVybiB1c2VyTGlua3M7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlckxpbmtzfTtcbiIsICJpbXBvcnQge2dldEdsb2JhbFVzZXJHcm91cHMsIGdldExvY2FsVXNlckdyb3Vwc30gZnJvbSAnLi91dGlsL2dldFVzZXJHcm91cHMnO1xuaW1wb3J0IHthcHBlbmRVc2VyUmlnaHRzTWFya30gZnJvbSAnLi91dGlsL2FwcGVuZFVzZXJSaWdodHNNYXJrJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5cbmNvbnN0IG1hcmtVc2VyUmlnaHRzID0gKCRjb250ZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgdXNlckxpbmtzID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR1c2VyTGlua3MgPSBPYmplY3QudmFsdWVzKHVzZXJMaW5rcykucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHtcblx0XHRyZXR1cm4gWy4uLnByZXZpb3VzVmFsdWUsIC4uLmN1cnJlbnRWYWx1ZV07XG5cdH0pO1xuXHRpZiAoISR1c2VyTGlua3MubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuICEobXcudXRpbC5pc0lQdjRBZGRyZXNzKGVsZW1lbnQpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyhlbGVtZW50KSk7XG5cdFx0fSk7XG5cblx0XHRpZiAoIXVzdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0bGV0IHVzZXJHcm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR1c2VyR3JvdXBzID0gYXdhaXQgZ2V0TG9jYWxVc2VyR3JvdXBzKHVzdXNlcnMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtSaWdodHNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRhcHBlbmRVc2VyUmlnaHRzTWFyaygkdXNlckxpbmtzLCB1c2VyR3JvdXBzKTtcblx0XHR9O1xuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGxldCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dXNlckdyb3VwcyA9IGF3YWl0IGdldEdsb2JhbFVzZXJHcm91cHModXN1c2Vycyk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya1JpZ2h0c10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdGFwcGVuZFVzZXJSaWdodHNNYXJrKCR1c2VyTGlua3MsIHVzZXJHcm91cHMpO1xuXHRcdH07XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpO1xufTtcblxuZXhwb3J0IHttYXJrVXNlclJpZ2h0c307XG4iXSwKICAibWFwcGluZ3MiOiAi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QWVWLFFBQVE7RUFDN0I7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJNYXJrUmlnaHRzX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiZ2V0R2xvYmFsVXNlckdyb3VwcyIsICJnZXRMb2NhbFVzZXJHcm91cHMiLCAicXVlcnlHbG9iYWxVc2VyR3JvdXBzIiwgInF1ZXJ5VXNlckdyb3VwcyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidmVyc2lvbiIsICJzdG9yYWdlS2V5TG9jYWwiLCAic3RvcmFnZUtleUdsb2JhbCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidXN1c2VycyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXNwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX3JlZjIiLCAiZ3VpdXNlciIsICJtZXRhIiwgImd1aXByb3AiLCAiX3gyIiwgIl9yZWYzIiwgInVzZXJHcm91cHMiLCAiZmlsdGVyIiwgInVzZXJuYW1lIiwgIl91c2VyR3JvdXBzJHVzZXJuYW1lIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgImxlbmd0aCIsICJ1c2VycyIsICJxdWVyeVVzZXJzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl91c2VyR3JvdXBzJG5hbWUiLCAidXNlciIsICJ2YWx1ZSIsICJuYW1lIiwgImdyb3VwcyIsICJlbGVtZW50IiwgInNldE9iamVjdCIsICJlcnIiLCAiZSIsICJmIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3gzIiwgIl9yZWY0IiwgIl91c2VyR3JvdXBzJHVzZXJuYW1lMiIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJfdXNlckdyb3VwcyR1c2VyIiwgImdsb2JhbHVzZXJpbmZvIiwgIl94NCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInFpdXdlbiIsICJsb2NhbGl6ZSIsICJlbiIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJzZW5pb3JlZGl0b3IiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0VXNlck5hbWUiLCAidXJsIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJkZWNvZGUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJuYW1lTWF0Y2giLCAibWF0Y2giLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwcGVuZFVzZXJSaWdodHNNYXJrIiwgIiR1c2VyTGlua3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiXyRlbGVtZW50JGF0dHIiLCAiX3VzZXJHcm91cHMkdXNlcm5hbWUzIiwgIiRlbGVtZW50IiwgImF0dHIiLCAiJHN1cHMiLCAicGFyZW50cyIsICJmaW5kIiwgInNpYmxpbmdzIiwgImVxIiwgIiQiLCAiYWRkQ2xhc3MiLCAiYWZ0ZXIiLCAiX2l0ZXJhdG9yNSIsICJ1bmlxdWVBcnJheSIsICJfc3RlcDUiLCAiZ3JvdXAiLCAiY2xhc3NOYW1lIiwgImhhc0NsYXNzIiwgImFwcGVuZCIsICJhbHQiLCAidGl0bGUiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAidXNlckxpbmtzIiwgIiRlbGVtZW50cyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfdXNlckxpbmtzJHVzZXIiLCAidGV4dENvbnRlbnQiLCAidG9TdHJpbmciLCAiaXNJUHY0QWRkcmVzcyIsICJpc0lQdjZBZGRyZXNzIiwgIm1hcmtVc2VyUmlnaHRzIiwgIk9iamVjdCIsICJrZXlzIiwgInZhbHVlcyIsICJyZWR1Y2UiLCAicHJldmlvdXNWYWx1ZSIsICJjdXJyZW50VmFsdWUiLCAicHJvbWlzZXMiLCAiaSIsICJzcGxpY2UiLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAiaG9vayIsICJhZGQiLCAibWFya1JpZ2h0cyJdCn0K
