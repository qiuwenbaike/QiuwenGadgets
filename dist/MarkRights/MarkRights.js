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
var storageKeyGlobal = "ext.gadget.MarkRights_global-";
var storageKeyLocal = "ext.gadget.MarkRights_local-";
var version = 2.1;
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
          mw.storage.setObject(storageKeyLocal + name, userGroups[name], 60 * 60);
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
          mw.storage.setObject(storageKeyGlobal + user, userGroups[user], 60 * 60);
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
          const deprecatedClassName = "gadgets-markrights-".concat(group);
          if ($sups.find("sup").hasClass(className) || $sups.find("sup").hasClass(deprecatedClassName)) {
            continue;
          }
          $sups.append(
            // The following classes are used here:
            // * see ../types.d.ts
            // * for more information
            $("<sup>").addClass(className).addClass(deprecatedClassName).attr({
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2V0VXNlckdyb3Vwcy50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2dldFVzZXJOYW1lLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvdXRpbC9hcHBlbmRVc2VyUmlnaHRzTWFyay50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9jb3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBkZXNjcmlwdGlvbiDlnKjmnIDov5Hkv67mlLnjgIHnm5Hop4bliJfooajjgIHmnaHnm67ljoblj7LorrDlvZXnrYnkvY3nva7ku6XnibnmrormoLzlvI/mmL7npLrmnInnibnmrormnYPpmZDnmoTnlKjmiLdcbiAqL1xuaW1wb3J0IHttYXJrVXNlclJpZ2h0c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtSaWdodHMoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnIHx8ICRjb250ZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdCcpKSB7XG5cdFx0dm9pZCBtYXJrVXNlclJpZ2h0cygkY29udGVudCk7XG5cdH1cbn0pO1xuXG5leHBvcnQge1xuXHRnZXRMb2NhbFVzZXJHcm91cHMsXG5cdGdldEdsb2JhbFVzZXJHcm91cHMsXG5cdHF1ZXJ5VXNlckdyb3Vwcyxcblx0cXVlcnlHbG9iYWxVc2VyR3JvdXBzLFxufSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRVc2VyR3JvdXBzJztcbiIsICJ7XG5cdFwic3RvcmFnZUtleUdsb2JhbFwiOiBcImV4dC5nYWRnZXQuTWFya1JpZ2h0c19nbG9iYWwtXCIsXG5cdFwic3RvcmFnZUtleUxvY2FsXCI6IFwiZXh0LmdhZGdldC5NYXJrUmlnaHRzX2xvY2FsLVwiLFxuXHRcInZlcnNpb25cIjogMi4xXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrUmlnaHRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlVc2VyR3JvdXBzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlHbG9iYWxVc2VyR3JvdXBzID0gYXN5bmMgKGd1aXVzZXI6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRtZXRhOiAnZ2xvYmFsdXNlcmluZm8nLFxuXHRcdGd1aXVzZXIsXG5cdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRMb2NhbFVzZXJHcm91cHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nW10pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj4gPT4ge1xuXHRjb25zdCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHR1c3VzZXJzID0gdXN1c2Vycy5maWx0ZXIoKHVzZXJuYW1lKSA9PiB7XG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlcm5hbWUpKSB7XG5cdFx0XHR1c2VyR3JvdXBzW3VzZXJuYW1lXSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlcm5hbWUpIGFzIHN0cmluZ1tdO1xuXHRcdH1cblxuXHRcdHJldHVybiAhdXNlckdyb3Vwcz8uW3VzZXJuYW1lXT8ubGVuZ3RoO1xuXHR9KTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlVc2VyR3JvdXBzKHVzdXNlcnMpO1xuXHRcdGNvbnN0IHt1c2VyczogcXVlcnlVc2Vyc30gPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0XHR1c2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXTtcblx0XHR9O1xuXG5cdFx0Zm9yIChjb25zdCB1c2VyIG9mIHF1ZXJ5VXNlcnMpIHtcblx0XHRcdGlmICghdXNlcj8ubmFtZSB8fCAhdXNlcj8uZ3JvdXBzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7bmFtZSwgZ3JvdXBzfSA9IHVzZXI7XG5cblx0XHRcdHVzZXJHcm91cHNbbmFtZV0gPz89IFtdO1xuXG5cdFx0XHR1c2VyR3JvdXBzW25hbWVdID0gW1xuXHRcdFx0XHQuLi51c2VyR3JvdXBzW25hbWVdLFxuXHRcdFx0XHQuLi5ncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdFx0fSksXG5cdFx0XHRdO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NhbCArIG5hbWUsIHVzZXJHcm91cHNbbmFtZV0sIDYwICogNjApO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbTWFya1JpZ2h0c10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cblxuXHRyZXR1cm4gdXNlckdyb3Vwcztcbn07XG5cbmNvbnN0IGdldEdsb2JhbFVzZXJHcm91cHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nW10pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj4gPT4ge1xuXHRjb25zdCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHR1c3VzZXJzID0gdXN1c2Vycy5maWx0ZXIoKHVzZXJuYW1lKSA9PiB7XG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUdsb2JhbCArIHVzZXJuYW1lKSkge1xuXHRcdFx0dXNlckdyb3Vwc1t1c2VybmFtZV0gPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlHbG9iYWwgKyB1c2VybmFtZSkgYXMgc3RyaW5nW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuICF1c2VyR3JvdXBzPy5bdXNlcm5hbWVdPy5sZW5ndGg7XG5cdH0pO1xuXG5cdGZvciAoY29uc3QgdXNlciBvZiB1c3VzZXJzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlHbG9iYWxVc2VyR3JvdXBzKHVzZXIpO1xuXHRcdFx0Y29uc3Qge2dsb2JhbHVzZXJpbmZvfSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdFx0Z2xvYmFsdXNlcmluZm86IHtncm91cHM6IHN0cmluZ1tdfTtcblx0XHRcdH07XG5cblx0XHRcdGlmICghZ2xvYmFsdXNlcmluZm8/Lmdyb3Vwcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge2dyb3Vwc30gPSBnbG9iYWx1c2VyaW5mbztcblxuXHRcdFx0dXNlckdyb3Vwc1t1c2VyXSA/Pz0gW107XG5cblx0XHRcdHVzZXJHcm91cHNbdXNlcl0gPSBbLi4udXNlckdyb3Vwc1t1c2VyXSwgLi4uZ3JvdXBzXTtcblxuXHRcdFx0Ly8gQ2FjaGUgZm9yIDEgaG91clxuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5R2xvYmFsICsgdXNlciwgdXNlckdyb3Vwc1t1c2VyXSwgNjAgKiA2MCk7XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdXNlckdyb3Vwcztcbn07XG5cbmV4cG9ydCB7Z2V0TG9jYWxVc2VyR3JvdXBzLCBnZXRHbG9iYWxVc2VyR3JvdXBzLCBxdWVyeVVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHFpdXdlbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ6ZW/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ermemVtycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdHRyYW5zd2lraTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRwYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdGF1dG9yZXZpZXdlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdH0pLFxuXHRcdHNlbmlvcmVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZW5pb3IgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i1hOa3see8luiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfos4fmt7Hnt6jogIUnLFxuXHRcdH0pLFxuXHRcdGV2ZW50c3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRjb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0YXV0b2NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Zmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHQnaXBibG9jay1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgZ2V0VXNlck5hbWUgPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRpZiAoIXVybCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIHVybCk7XG5cblx0Y29uc3QgZGVjb2RlID0gKHN0cmluZzogc3RyaW5nLCByZXBsYWNlOiAoX3N0cmluZzogc3RyaW5nKSA9PiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG5cdFx0XHQoKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXBsYWNlKHN0cmluZykpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZShzdHJpbmcpLnJlcGxhY2UoLyUoPyFcXGQrKS9nLCAnJTI1Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKClcblx0XHQpO1xuXHR9O1xuXG5cdGlmICh1c2VybmFtZSkge1xuXHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWUsIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoJ1VzZXI6JywgJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IHVzZXJuYW1lTWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gdXJsLm1hdGNoKC9cXC93aWtpXFwvVXNlcjooLis/KSQvKTtcblxuXHRpZiAodXNlcm5hbWVNYXRjaD8uWzFdKSB7XG5cdFx0cmV0dXJuIGRlY29kZSh1c2VybmFtZU1hdGNoWzFdLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gJyc7XG59O1xuXG5leHBvcnQge2dldFVzZXJOYW1lfTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7Z2V0VXNlck5hbWV9IGZyb20gJy4vZ2V0VXNlck5hbWUnO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBwZW5kVXNlclJpZ2h0c01hcmsgPSAoJHVzZXJMaW5rczogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PltdLCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCAkZWxlbWVudCBvZiAkdXNlckxpbmtzKSB7XG5cdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyA9IGdldFVzZXJOYW1lKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJyk7XG5cdFx0aWYgKCF1c2VybmFtZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlckdyb3VwcyA/Pz0ge307XG5cdFx0Y29uc3QgZ3JvdXBzID0gdXNlckdyb3Vwc1t1c2VybmFtZV0gPz8gW107XG5cblx0XHRsZXQgJHN1cHM6IEpRdWVyeTtcblx0XHRpZiAoJGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHQkc3VwcyA9ICRlbGVtZW50LnNpYmxpbmdzKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykuZXEoMCk7XG5cdFx0fSBlbHNlIGlmICgkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aCkge1xuXHRcdFx0JHN1cHMgPSAkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5lcSgwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHN1cHMgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0cy1tYXJrcmlnaHRzJyk7XG5cdFx0XHQkZWxlbWVudC5hZnRlcigkc3Vwcyk7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBncm91cCBvZiB1bmlxdWVBcnJheShncm91cHMpKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGBnYWRnZXRzLW1hcmtyaWdodHNfXyR7Z3JvdXB9YDtcblx0XHRcdGNvbnN0IGRlcHJlY2F0ZWRDbGFzc05hbWU6IHN0cmluZyA9IGBnYWRnZXRzLW1hcmtyaWdodHMtJHtncm91cH1gO1xuXHRcdFx0aWYgKCRzdXBzLmZpbmQoJ3N1cCcpLmhhc0NsYXNzKGNsYXNzTmFtZSkgfHwgJHN1cHMuZmluZCgnc3VwJykuaGFzQ2xhc3MoZGVwcmVjYXRlZENsYXNzTmFtZSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdCRzdXBzLmFwcGVuZChcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogc2VlIC4uL3R5cGVzLmQudHNcblx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHQkKCc8c3VwPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKGNsYXNzTmFtZSlcblx0XHRcdFx0XHQuYWRkQ2xhc3MoZGVwcmVjYXRlZENsYXNzTmFtZSlcblx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRhbHQ6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZShncm91cCBhcyBVc2VyUmlnaHRzKSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7YXBwZW5kVXNlclJpZ2h0c01hcmt9O1xuIiwgImNvbnN0IGdlbmVyYXRlVXNlckxpbmtzID0gKCRjb250ZW50OiBKUXVlcnkpOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10+ID0+IHtcblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10+ID0ge307XG5cdGNvbnN0ICRlbGVtZW50cyA9ICRjb250ZW50LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCdhLm13LXVzZXJsaW5rOm5vdCgubXctYW5vbnVzZXJsaW5rKScpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZWxlbWVudHMpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKFxuXHRcdFx0JGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoIHx8XG5cdFx0XHQkZWxlbWVudC5zaWJsaW5ncygnLmdhZGdldHMtbWFya3JpZ2h0cycpLmxlbmd0aFxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qge3RleHRDb250ZW50fSA9IGVsZW1lbnQ7XG5cdFx0Y29uc3QgdXNlcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGV4dENvbnRlbnQ/LnRvU3RyaW5nKCk7XG5cblx0XHRpZiAoIXVzZXIpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChtdy51dGlsLmlzSVB2NEFkZHJlc3ModXNlcikgfHwgbXcudXRpbC5pc0lQdjZBZGRyZXNzKHVzZXIpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR1c2VyTGlua3NbdXNlcl0gPz89IFtdO1xuXG5cdFx0dXNlckxpbmtzW3VzZXJdW3VzZXJMaW5rc1t1c2VyXS5sZW5ndGhdID0gJGVsZW1lbnQ7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gdXNlckxpbmtzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc307XG4iLCAiaW1wb3J0IHtnZXRHbG9iYWxVc2VyR3JvdXBzLCBnZXRMb2NhbFVzZXJHcm91cHN9IGZyb20gJy4vdXRpbC9nZXRVc2VyR3JvdXBzJztcbmltcG9ydCB7YXBwZW5kVXNlclJpZ2h0c01hcmt9IGZyb20gJy4vdXRpbC9hcHBlbmRVc2VyUmlnaHRzTWFyayc7XG5pbXBvcnQge2dlbmVyYXRlVXNlckxpbmtzfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MnO1xuXG5jb25zdCBtYXJrVXNlclJpZ2h0cyA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdGNvbnN0IHVzZXJMaW5rcyA9IGdlbmVyYXRlVXNlckxpbmtzKCRjb250ZW50KTtcblxuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0Y29uc3QgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdXNlckxpbmtzID0gT2JqZWN0LnZhbHVlcyh1c2VyTGlua3MpLnJlZHVjZSgocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSA9PiB7XG5cdFx0cmV0dXJuIFsuLi5wcmV2aW91c1ZhbHVlLCAuLi5jdXJyZW50VmFsdWVdO1xuXHR9KTtcblx0aWYgKCEkdXNlckxpbmtzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCB1c3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiAhKG13LnV0aWwuaXNJUHY0QWRkcmVzcyhlbGVtZW50KSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3MoZWxlbWVudCkpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKCF1c3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGxldCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dXNlckdyb3VwcyA9IGF3YWl0IGdldExvY2FsVXNlckdyb3Vwcyh1c3VzZXJzKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0YXBwZW5kVXNlclJpZ2h0c01hcmsoJHVzZXJMaW5rcywgdXNlckdyb3Vwcyk7XG5cdFx0fTtcblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRsZXQgdXNlckdyb3VwczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHVzZXJHcm91cHMgPSBhd2FpdCBnZXRHbG9iYWxVc2VyR3JvdXBzKHVzdXNlcnMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtSaWdodHNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRhcHBlbmRVc2VyUmlnaHRzTWFyaygkdXNlckxpbmtzLCB1c2VyR3JvdXBzKTtcblx0XHR9O1xuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmV4cG9ydCB7bWFya1VzZXJSaWdodHN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQSxDQUFBO0FBQUFDLFNBQUFELG9CQUFBO0VBQUFFLHFCQUFBQSxNQUFBQTtFQUFBQyxvQkFBQUEsTUFBQUE7RUFBQUMsdUJBQUFBLE1BQUFBO0VBQUFDLGlCQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQVIsa0JBQUE7O0FDQ0MsSUFBQVMsbUJBQW9CO0FBQ3BCLElBQUFDLGtCQUFtQjtBQUNuQixJQUFBQyxVQUFXOztBQ0ZaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGNBQUFDLE9BQWdDTCxPQUFPLENBQUU7O0FDQTdELElBQU1OLGtCQUFBLDJCQUFBO0FBQUEsTUFBQVksT0FBQUMsa0JBQWtCLFdBQU9DLFNBQStCO0FBQzdELFVBQU1DLFNBQThCO01BQ25DRDtNQUNBRSxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNO01BQ05DLFFBQVE7TUFDUkMsU0FBUztNQUNUQyxRQUFRO0lBQ1Q7QUFDQSxVQUFNQyxXQUFBLE1BQWlCZCxJQUFJZSxJQUFJVCxNQUFNO0FBRXJDLFdBQU9RO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FkTXZCLGlCQUFBeUIsSUFBQTtBQUFBLFdBQUFiLEtBQUFjLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWdCTixJQUFNNUIsd0JBQUEsMkJBQUE7QUFB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QUFVO0FBQWhDLFlBQVdFLFVBQUFELFVBQUFELEVBQUE7QUFDVixVQUFJO0FBQ0gsY0FBTUUsUUFBUTtNQUNmLFFBQVE7TUFBQztJQUNWO0VBQ0QsQ0FBQSxFQUFHO0FBQ0o7O0FSMURBbEgsR0FBR21ILEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsV0FBV3pCLFVBQWdCO0FBQ25FLE1BQUlBLFNBQVNwQixLQUFLLElBQUksTUFBTSxxQkFBcUJvQixTQUFTTCxTQUFTLGdCQUFnQixHQUFHO0FBQ3JGLFNBQUtlLGVBQWVWLFFBQVE7RUFDN0I7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJNYXJrUmlnaHRzX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiZ2V0R2xvYmFsVXNlckdyb3VwcyIsICJnZXRMb2NhbFVzZXJHcm91cHMiLCAicXVlcnlHbG9iYWxVc2VyR3JvdXBzIiwgInF1ZXJ5VXNlckdyb3VwcyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAic3RvcmFnZUtleUdsb2JhbCIsICJzdG9yYWdlS2V5TG9jYWwiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidXN1c2VycyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXNwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX3JlZjIiLCAiZ3VpdXNlciIsICJtZXRhIiwgImd1aXByb3AiLCAiX3gyIiwgIl9yZWYzIiwgInVzZXJHcm91cHMiLCAiZmlsdGVyIiwgInVzZXJuYW1lIiwgIl91c2VyR3JvdXBzJHVzZXJuYW1lIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgImxlbmd0aCIsICJ1c2VycyIsICJxdWVyeVVzZXJzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl91c2VyR3JvdXBzJG5hbWUiLCAidXNlciIsICJ2YWx1ZSIsICJuYW1lIiwgImdyb3VwcyIsICJlbGVtZW50IiwgInNldE9iamVjdCIsICJlcnIiLCAiZSIsICJmIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3gzIiwgIl9yZWY0IiwgIl91c2VyR3JvdXBzJHVzZXJuYW1lMiIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJfdXNlckdyb3VwcyR1c2VyIiwgImdsb2JhbHVzZXJpbmZvIiwgIl94NCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInFpdXdlbiIsICJsb2NhbGl6ZSIsICJlbiIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJzZW5pb3JlZGl0b3IiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0VXNlck5hbWUiLCAidXJsIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJkZWNvZGUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJuYW1lTWF0Y2giLCAibWF0Y2giLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwcGVuZFVzZXJSaWdodHNNYXJrIiwgIiR1c2VyTGlua3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiXyRlbGVtZW50JGF0dHIiLCAiX3VzZXJHcm91cHMkdXNlcm5hbWUzIiwgIiRlbGVtZW50IiwgImF0dHIiLCAiJHN1cHMiLCAicGFyZW50cyIsICJmaW5kIiwgInNpYmxpbmdzIiwgImVxIiwgIiQiLCAiYWRkQ2xhc3MiLCAiYWZ0ZXIiLCAiX2l0ZXJhdG9yNSIsICJ1bmlxdWVBcnJheSIsICJfc3RlcDUiLCAiZ3JvdXAiLCAiY2xhc3NOYW1lIiwgImRlcHJlY2F0ZWRDbGFzc05hbWUiLCAiaGFzQ2xhc3MiLCAiYXBwZW5kIiwgImFsdCIsICJ0aXRsZSIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJ1c2VyTGlua3MiLCAiJGVsZW1lbnRzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIl91c2VyTGlua3MkdXNlciIsICJ0ZXh0Q29udGVudCIsICJ0b1N0cmluZyIsICJpc0lQdjRBZGRyZXNzIiwgImlzSVB2NkFkZHJlc3MiLCAibWFya1VzZXJSaWdodHMiLCAiT2JqZWN0IiwgImtleXMiLCAidmFsdWVzIiwgInJlZHVjZSIsICJwcmV2aW91c1ZhbHVlIiwgImN1cnJlbnRWYWx1ZSIsICJwcm9taXNlcyIsICJpIiwgInNwbGljZSIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJob29rIiwgImFkZCIsICJtYXJrUmlnaHRzIl0KfQo=
