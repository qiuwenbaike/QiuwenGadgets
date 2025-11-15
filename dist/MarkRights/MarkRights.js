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
      if (mw.storage.getObject(storageKeyLocal + username)) {
        userGroups[username] = mw.storage.getObject(storageKeyLocal + username);
      }
      return !Object.keys(userGroups).includes(username);
    });
    try {
      if (ususers.length === 0) {
        return userGroups;
      }
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
      if (mw.storage.getObject(storageKeyGlobal + username)) {
        userGroups[username] = mw.storage.getObject(storageKeyGlobal + username);
      }
      return !Object.keys(userGroups).includes(username);
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
      var _$element$attr, _userGroups$username;
      const $element = _step4.value;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2V0VXNlckdyb3Vwcy50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy91dGlsL2dldFVzZXJOYW1lLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvdXRpbC9hcHBlbmRVc2VyUmlnaHRzTWFyay50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9jb3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBkZXNjcmlwdGlvbiDlnKjmnIDov5Hkv67mlLnjgIHnm5Hop4bliJfooajjgIHmnaHnm67ljoblj7LorrDlvZXnrYnkvY3nva7ku6XnibnmrormoLzlvI/mmL7npLrmnInnibnmrormnYPpmZDnmoTnlKjmiLdcbiAqL1xuaW1wb3J0IHttYXJrVXNlclJpZ2h0c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtSaWdodHMoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnIHx8ICRjb250ZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdCcpKSB7XG5cdFx0dm9pZCBtYXJrVXNlclJpZ2h0cygkY29udGVudCk7XG5cdH1cbn0pO1xuXG5leHBvcnQge1xuXHRnZXRMb2NhbFVzZXJHcm91cHMsXG5cdGdldEdsb2JhbFVzZXJHcm91cHMsXG5cdHF1ZXJ5VXNlckdyb3Vwcyxcblx0cXVlcnlHbG9iYWxVc2VyR3JvdXBzLFxufSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRVc2VyR3JvdXBzJztcbiIsICJ7XG5cdFwic3RvcmFnZUtleUdsb2JhbFwiOiBcImV4dC5nYWRnZXQuTWFya1JpZ2h0c19nbG9iYWwtXCIsXG5cdFwic3RvcmFnZUtleUxvY2FsXCI6IFwiZXh0LmdhZGdldC5NYXJrUmlnaHRzX2xvY2FsLVwiLFxuXHRcInZlcnNpb25cIjogMi4xXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrUmlnaHRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlVc2VyR3JvdXBzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlHbG9iYWxVc2VyR3JvdXBzID0gYXN5bmMgKGd1aXVzZXI6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRtZXRhOiAnZ2xvYmFsdXNlcmluZm8nLFxuXHRcdGd1aXVzZXIsXG5cdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRMb2NhbFVzZXJHcm91cHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nW10pOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj4gPT4ge1xuXHRjb25zdCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHR1c3VzZXJzID0gdXN1c2Vycy5maWx0ZXIoKHVzZXJuYW1lKSA9PiB7XG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlcm5hbWUpKSB7XG5cdFx0XHR1c2VyR3JvdXBzW3VzZXJuYW1lXSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgdXNlcm5hbWUpIGFzIHN0cmluZ1tdO1xuXHRcdH1cblxuXHRcdHJldHVybiAhT2JqZWN0LmtleXModXNlckdyb3VwcykuaW5jbHVkZXModXNlcm5hbWUpO1xuXHR9KTtcblxuXHR0cnkge1xuXHRcdGlmICh1c3VzZXJzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHVzZXJHcm91cHM7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJHcm91cHModXN1c2Vycyk7XG5cdFx0Y29uc3Qge3VzZXJzOiBxdWVyeVVzZXJzfSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdHVzZXJzOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdO1xuXHRcdH07XG5cblx0XHRmb3IgKGNvbnN0IHVzZXIgb2YgcXVlcnlVc2Vycykge1xuXHRcdFx0aWYgKCF1c2VyPy5uYW1lIHx8ICF1c2VyPy5ncm91cHMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHtuYW1lLCBncm91cHN9ID0gdXNlcjtcblxuXHRcdFx0dXNlckdyb3Vwc1tuYW1lXSA/Pz0gW107XG5cblx0XHRcdHVzZXJHcm91cHNbbmFtZV0gPSBbXG5cdFx0XHRcdC4uLnVzZXJHcm91cHNbbmFtZV0sXG5cdFx0XHRcdC4uLmdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0XHR9KSxcblx0XHRcdF07XG5cblx0XHRcdC8vIENhY2hlIGZvciAxIGhvdXJcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2FsICsgbmFtZSwgdXNlckdyb3Vwc1tuYW1lXSwgNjAgKiA2MCk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrUmlnaHRzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxuXG5cdHJldHVybiB1c2VyR3JvdXBzO1xufTtcblxuY29uc3QgZ2V0R2xvYmFsVXNlckdyb3VwcyA9IGFzeW5jICh1c3VzZXJzOiBzdHJpbmdbXSk6IFByb21pc2U8UmVjb3JkPHN0cmluZywgc3RyaW5nW10+PiA9PiB7XG5cdGNvbnN0IHVzZXJHcm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdHVzdXNlcnMgPSB1c3VzZXJzLmZpbHRlcigodXNlcm5hbWUpID0+IHtcblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5R2xvYmFsICsgdXNlcm5hbWUpKSB7XG5cdFx0XHR1c2VyR3JvdXBzW3VzZXJuYW1lXSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUdsb2JhbCArIHVzZXJuYW1lKSBhcyBzdHJpbmdbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gIU9iamVjdC5rZXlzKHVzZXJHcm91cHMpLmluY2x1ZGVzKHVzZXJuYW1lKTtcblx0fSk7XG5cblx0Zm9yIChjb25zdCB1c2VyIG9mIHVzdXNlcnMpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUdsb2JhbFVzZXJHcm91cHModXNlcik7XG5cdFx0XHRjb25zdCB7Z2xvYmFsdXNlcmluZm99ID0gcmVzcG9uc2VbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0XHRnbG9iYWx1c2VyaW5mbzoge2dyb3Vwczogc3RyaW5nW119O1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCFnbG9iYWx1c2VyaW5mbz8uZ3JvdXBzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB7Z3JvdXBzfSA9IGdsb2JhbHVzZXJpbmZvO1xuXG5cdFx0XHR1c2VyR3JvdXBzW3VzZXJdID8/PSBbXTtcblxuXHRcdFx0dXNlckdyb3Vwc1t1c2VyXSA9IFsuLi51c2VyR3JvdXBzW3VzZXJdLCAuLi5ncm91cHNdO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlHbG9iYWwgKyB1c2VyLCB1c2VyR3JvdXBzW3VzZXJdLCA2MCAqIDYwKTtcblx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtSaWdodHNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1c2VyR3JvdXBzO1xufTtcblxuZXhwb3J0IHtnZXRMb2NhbFVzZXJHcm91cHMsIGdldEdsb2JhbFVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3VwcywgcXVlcnlHbG9iYWxVc2VyR3JvdXBzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0cWl1d2VuOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1dlYm1hc3RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnq5nplb8nLFxuXHRcdFx0J3poLWhhbnQnOiAn56uZ6ZW3Jyxcblx0XHR9KSxcblx0XHRzdGV3YXJkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N0ZXdhcmQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6KOB5Yaz5aeU5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ijgeaxuuWnlOWToScsXG5cdFx0fSksXG5cdFx0Y2hlY2t1c2VyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NoZWNrVXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnlKjmiLfmn6XmoLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn55So5oi25p+l5qC4Jyxcblx0XHR9KSxcblx0XHRzdXBwcmVzczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdmVyc2lnaHRlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnm5HnnaPlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn55uj552j5ZOhJyxcblx0XHR9KSxcblx0XHRzeXNvcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTeXNPcCcsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHQnaW50ZXJmYWNlLWFkbWluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnRlcmZhY2UgQWRtaW5pc3RyYXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfnlYzpnaLnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LuL6Z2i566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUZW1wbGF0ZSBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5qih5p2/57yW6L6R5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+aooeadv+e3qOi8r+WToScsXG5cdFx0fSksXG5cdFx0dHJhbnN3aWtpOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ltcG9ydGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvvOWFpeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfljK/lhaXogIUnLFxuXHRcdH0pLFxuXHRcdHBhdHJvbGxlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0YXV0b3Jldmlld2VyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcGFnZSBwYXRyb2wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeixgeWFjScsXG5cdFx0fSksXG5cdFx0c2VuaW9yZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlbmlvciBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn6LWE5rex57yW6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+izh+a3see3qOiAhScsXG5cdFx0fSksXG5cdFx0ZXZlbnRzcG9uc29yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V2ZW50IFNwb25zb3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5rS75Yqo57uE57uH6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+a0u+WLlee1hOe5lOiAhScsXG5cdFx0fSksXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTWFzc01lc3NhZ2Ugc2VuZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wkp+mHj+a2iOaBr+WPkemAgeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICflpKfph4/oqIrmga/lgrPpgIHogIUnLFxuXHRcdH0pLFxuXHRcdGNvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRhdXRvY29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0F1dG8tY29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn6Ieq5Yqo56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iHquWLleeiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0Ym90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JvdCcsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajkuronLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw5Lq6Jyxcblx0XHR9KSxcblx0XHRmbG9vZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGbG9vZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDnlKjmiLYnLFxuXHRcdH0pLFxuXHRcdCdybnJzdmVyaWZ5LWV4ZW1wdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSByZWFsLW5hbWUgdmVyaWZpY2F0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflr6blkI3liLbpqZforYnosYHlhY0nLFxuXHRcdH0pLFxuXHRcdCdpcGJsb2NrLWV4ZW1wdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBJUCBibG9ja3MnLFxuXHRcdFx0J3poLWhhbnMnOiAnSVDlsIHnpoHosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAnSVDlsIHpjpbosYHlhY0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBnZXRVc2VyTmFtZSA9ICh1cmw6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGlmICghdXJsKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJywgdXJsKTtcblxuXHRjb25zdCBkZWNvZGUgPSAoc3RyaW5nOiBzdHJpbmcsIHJlcGxhY2U6IChfc3RyaW5nOiBzdHJpbmcpID0+IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChcblx0XHRcdCgoKTogc3RyaW5nID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlcGxhY2Uoc3RyaW5nKSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybiByZXBsYWNlKHN0cmluZykucmVwbGFjZSgvJSg/IVxcZCspL2csICclMjUnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkoKVxuXHRcdCk7XG5cdH07XG5cblx0aWYgKHVzZXJuYW1lKSB7XG5cdFx0cmV0dXJuIGRlY29kZSh1c2VybmFtZSwgKHN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgnVXNlcjonLCAnJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdH0pO1xuXHR9XG5cblx0Y29uc3QgdXNlcm5hbWVNYXRjaDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSB1cmwubWF0Y2goL1xcL3dpa2lcXC9Vc2VyOiguKz8pJC8pO1xuXG5cdGlmICh1c2VybmFtZU1hdGNoPy5bMV0pIHtcblx0XHRyZXR1cm4gZGVjb2RlKHVzZXJuYW1lTWF0Y2hbMV0sIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiAnJztcbn07XG5cbmV4cG9ydCB7Z2V0VXNlck5hbWV9O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtnZXRVc2VyTmFtZX0gZnJvbSAnLi9nZXRVc2VyTmFtZSc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcHBlbmRVc2VyUmlnaHRzTWFyayA9ICgkdXNlckxpbmtzOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+W10sIHVzZXJHcm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPik6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0ICRlbGVtZW50IG9mICR1c2VyTGlua3MpIHtcblx0XHRjb25zdCB1c2VybmFtZTogc3RyaW5nID0gZ2V0VXNlck5hbWUoJGVsZW1lbnQuYXR0cignaHJlZicpID8/ICcnKTtcblx0XHRpZiAoIXVzZXJuYW1lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR1c2VyR3JvdXBzID8/PSB7fTtcblx0XHRjb25zdCBncm91cHMgPSB1c2VyR3JvdXBzW3VzZXJuYW1lXSA/PyBbXTtcblxuXHRcdGxldCAkc3VwczogSlF1ZXJ5O1xuXHRcdGlmICgkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGgpIHtcblx0XHRcdCRzdXBzID0gJGVsZW1lbnQuc2libGluZ3MoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5lcSgwKTtcblx0XHR9IGVsc2UgaWYgKCRlbGVtZW50LnNpYmxpbmdzKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHQkc3VwcyA9ICRlbGVtZW50LnBhcmVudHMoJ2xpJykuZmluZCgnLmdhZGdldHMtbWFya3JpZ2h0cycpLmVxKDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkc3VwcyA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdnYWRnZXRzLW1hcmtyaWdodHMnKTtcblx0XHRcdCRlbGVtZW50LmFmdGVyKCRzdXBzKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGdyb3VwIG9mIHVuaXF1ZUFycmF5KGdyb3VwcykpIHtcblx0XHRcdGNvbnN0IGNsYXNzTmFtZTogc3RyaW5nID0gYGdhZGdldHMtbWFya3JpZ2h0c19fJHtncm91cH1gO1xuXHRcdFx0Y29uc3QgZGVwcmVjYXRlZENsYXNzTmFtZTogc3RyaW5nID0gYGdhZGdldHMtbWFya3JpZ2h0cy0ke2dyb3VwfWA7XG5cdFx0XHRpZiAoJHN1cHMuZmluZCgnc3VwJykuaGFzQ2xhc3MoY2xhc3NOYW1lKSB8fCAkc3Vwcy5maW5kKCdzdXAnKS5oYXNDbGFzcyhkZXByZWNhdGVkQ2xhc3NOYW1lKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0JHN1cHMuYXBwZW5kKFxuXHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0Ly8gKiBzZWUgLi4vdHlwZXMuZC50c1xuXHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdCQoJzxzdXA+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhkZXByZWNhdGVkQ2xhc3NOYW1lKVxuXHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdGFsdDogZ2V0TWVzc2FnZShncm91cCBhcyBVc2VyUmlnaHRzKSxcblx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHthcHBlbmRVc2VyUmlnaHRzTWFya307XG4iLCAiY29uc3QgZ2VuZXJhdGVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IFJlY29yZDxzdHJpbmcsIEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD5bXT4gPT4ge1xuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD5bXT4gPSB7fTtcblx0Y29uc3QgJGVsZW1lbnRzID0gJGNvbnRlbnQuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJ2EubXctdXNlcmxpbms6bm90KC5tdy1hbm9udXNlcmxpbmspJyk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRlbGVtZW50cykge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGggfHxcblx0XHRcdCRlbGVtZW50LnNpYmxpbmdzKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB7dGV4dENvbnRlbnR9ID0gZWxlbWVudDtcblx0XHRjb25zdCB1c2VyOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udG9TdHJpbmcoKTtcblxuXHRcdGlmICghdXNlcikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyh1c2VyKSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3ModXNlcikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJMaW5rc1t1c2VyXSA/Pz0gW107XG5cblx0XHR1c2VyTGlua3NbdXNlcl1bdXNlckxpbmtzW3VzZXJdLmxlbmd0aF0gPSAkZWxlbWVudDsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdHJldHVybiB1c2VyTGlua3M7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlckxpbmtzfTtcbiIsICJpbXBvcnQge2dldEdsb2JhbFVzZXJHcm91cHMsIGdldExvY2FsVXNlckdyb3Vwc30gZnJvbSAnLi91dGlsL2dldFVzZXJHcm91cHMnO1xuaW1wb3J0IHthcHBlbmRVc2VyUmlnaHRzTWFya30gZnJvbSAnLi91dGlsL2FwcGVuZFVzZXJSaWdodHNNYXJrJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5cbmNvbnN0IG1hcmtVc2VyUmlnaHRzID0gKCRjb250ZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3QgdXNlckxpbmtzID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR1c2VyTGlua3MgPSBPYmplY3QudmFsdWVzKHVzZXJMaW5rcykucmVkdWNlKChwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpID0+IHtcblx0XHRyZXR1cm4gWy4uLnByZXZpb3VzVmFsdWUsIC4uLmN1cnJlbnRWYWx1ZV07XG5cdH0pO1xuXHRpZiAoISR1c2VyTGlua3MubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuICEobXcudXRpbC5pc0lQdjRBZGRyZXNzKGVsZW1lbnQpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyhlbGVtZW50KSk7XG5cdFx0fSk7XG5cblx0XHRpZiAoIXVzdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0bGV0IHVzZXJHcm91cHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR1c2VyR3JvdXBzID0gYXdhaXQgZ2V0TG9jYWxVc2VyR3JvdXBzKHVzdXNlcnMpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtSaWdodHNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRhcHBlbmRVc2VyUmlnaHRzTWFyaygkdXNlckxpbmtzLCB1c2VyR3JvdXBzKTtcblx0XHR9O1xuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGxldCB1c2VyR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dXNlckdyb3VwcyA9IGF3YWl0IGdldEdsb2JhbFVzZXJHcm91cHModXN1c2Vycyk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya1JpZ2h0c10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cblx0XHRcdGFwcGVuZFVzZXJSaWdodHNNYXJrKCR1c2VyTGlua3MsIHVzZXJHcm91cHMpO1xuXHRcdH07XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpO1xufTtcblxuZXhwb3J0IHttYXJrVXNlclJpZ2h0c307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBLENBQUE7QUFBQUMsU0FBQUQsb0JBQUE7RUFBQUUscUJBQUFBLE1BQUFBO0VBQUFDLG9CQUFBQSxNQUFBQTtFQUFBQyx1QkFBQUEsTUFBQUE7RUFBQUMsaUJBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBUixrQkFBQTs7QUNDQyxJQUFBUyxtQkFBb0I7QUFDcEIsSUFBQUMsa0JBQW1CO0FBQ25CLElBQUFDLFVBQVc7O0FDRlosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsY0FBQUMsT0FBZ0NMLE9BQU8sQ0FBRTs7QUNBN0QsSUFBTU4sa0JBQUEsMkJBQUE7QUFBQSxNQUFBWSxPQUFBQyxrQkFBa0IsV0FBT0MsU0FBK0I7QUFDN0QsVUFBTUMsU0FBOEI7TUFDbkNEO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsUUFBUTtNQUNSQyxTQUFTO01BQ1RDLFFBQVE7SUFDVDtBQUNBLFVBQU1DLFdBQUEsTUFBaUJkLElBQUllLElBQUlULE1BQU07QUFFckMsV0FBT1E7RUFDUixDQUFBO0FBQUEsU0FBQSxTQWRNdkIsaUJBQUF5QixJQUFBO0FBQUEsV0FBQWIsS0FBQWMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBZ0JOLElBQU01Qix3QkFBQSwyQkFBQTtBQUFBLE1BQUE2QixRQUFBZixrQkFBd0IsV0FBT2dCLFNBQW9CO0FBQ3hELFVBQU1kLFNBQVM7TUFDZEMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZlksTUFBTTtNQUNORDtNQUNBRSxTQUFTO01BQ1RWLFNBQVM7TUFDVEMsUUFBUTtJQUNUO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmQsSUFBSWUsSUFBSVQsTUFBTTtBQUVyQyxXQUFPUTtFQUNSLENBQUE7QUFBQSxTQUFBLFNBZE14Qix1QkFBQWlDLEtBQUE7QUFBQSxXQUFBSixNQUFBRixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFnQk4sSUFBTTdCLHFCQUFBLDJCQUFBO0FBQUEsTUFBQW1DLFFBQUFwQixrQkFBcUIsV0FBT0MsU0FBeUQ7QUFDMUYsVUFBTW9CLGFBQXVDLENBQUM7QUFFOUNwQixjQUFVQSxRQUFRcUIsT0FBUUMsY0FBYTtBQUN0QyxVQUFJQyxHQUFHQyxRQUFRQyxVQUFrQmxDLGtCQUFrQitCLFFBQVEsR0FBRztBQUM3REYsbUJBQVdFLFFBQVEsSUFBSUMsR0FBR0MsUUFBUUMsVUFBa0JsQyxrQkFBa0IrQixRQUFRO01BQy9FO0FBRUEsYUFBTyxDQUFDSSxPQUFPQyxLQUFLUCxVQUFVLEVBQUVRLFNBQVNOLFFBQVE7SUFDbEQsQ0FBQztBQUVELFFBQUk7QUFDSCxVQUFJdEIsUUFBUTZCLFdBQVcsR0FBRztBQUN6QixlQUFPVDtNQUNSO0FBRUEsWUFBTVgsV0FBQSxNQUFpQnZCLGdCQUFnQmMsT0FBTztBQUM5QyxZQUFNO1FBQUM4QixPQUFPQztNQUFVLElBQUl0QixTQUFTLE9BQU87QUFBQSxVQUFBdUIsYUFBQUMsMkJBSXpCRixVQUFBLEdBQUFHO0FBQUEsVUFBQTtBQUFuQixhQUFBRixXQUFBRyxFQUFBLEdBQUEsRUFBQUQsU0FBQUYsV0FBQUksRUFBQSxHQUFBQyxRQUErQjtBQUFBLGNBQUFDO0FBQUEsZ0JBQXBCQyxPQUFBTCxPQUFBTTtBQUNWLGNBQUksRUFBQ0QsU0FBQSxRQUFBQSxTQUFBLFVBQUFBLEtBQU1FLFNBQVEsRUFBQ0YsU0FBQSxRQUFBQSxTQUFBLFVBQUFBLEtBQU1HLFNBQVE7QUFDakM7VUFDRDtBQUVBLGdCQUFNO1lBQUNEO1lBQU1DO1VBQU0sSUFBSUg7QUFFdkIsV0FBQUQsbUJBQUFsQixXQUFXcUIsSUFBSSxPQUFBLFFBQUFILHFCQUFBLFNBQUFBLG1CQUFmbEIsV0FBV3FCLElBQUksSUFBTSxDQUFBO0FBRXJCckIscUJBQVdxQixJQUFJLElBQUksQ0FDbEIsR0FBR3JCLFdBQVdxQixJQUFJLEdBQ2xCLEdBQUdDLE9BQU9yQixPQUFRc0IsYUFBWTtBQUM3QixtQkFBT0EsWUFBWTtVQUNwQixDQUFDLENBQUE7QUFJRnBCLGFBQUdDLFFBQVFvQixVQUFrQnJELGtCQUFrQmtELE1BQU1yQixXQUFXcUIsSUFBSSxHQUFHLEtBQUssRUFBRTtRQUMvRTtNQUFBLFNBQUFJLEtBQUE7QUFBQWIsbUJBQUFjLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFiLG1CQUFBZSxFQUFBO01BQUE7SUFDRCxTQUFTQyxPQUFnQjtBQUN4QkMsY0FBUUQsTUFBTSw0QkFBNEJBLEtBQUs7SUFDaEQ7QUFFQSxXQUFPNUI7RUFDUixDQUFBO0FBQUEsU0FBQSxTQTdDTXBDLG9CQUFBa0UsS0FBQTtBQUFBLFdBQUEvQixNQUFBUCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUErQ04sSUFBTTlCLHNCQUFBLDJCQUFBO0FBQUEsTUFBQW9FLFFBQUFwRCxrQkFBc0IsV0FBT0MsU0FBeUQ7QUFDM0YsVUFBTW9CLGFBQXVDLENBQUM7QUFFOUNwQixjQUFVQSxRQUFRcUIsT0FBUUMsY0FBYTtBQUN0QyxVQUFJQyxHQUFHQyxRQUFRQyxVQUFrQm5DLG1CQUFtQmdDLFFBQVEsR0FBRztBQUM5REYsbUJBQVdFLFFBQVEsSUFBSUMsR0FBR0MsUUFBUUMsVUFBa0JuQyxtQkFBbUJnQyxRQUFRO01BQ2hGO0FBRUEsYUFBTyxDQUFDSSxPQUFPQyxLQUFLUCxVQUFVLEVBQUVRLFNBQVNOLFFBQVE7SUFDbEQsQ0FBQztBQUFBLFFBQUE4QixhQUFBbkIsMkJBRWtCakMsT0FBQSxHQUFBcUQ7QUFBQSxRQUFBO0FBQW5CLFdBQUFELFdBQUFqQixFQUFBLEdBQUEsRUFBQWtCLFNBQUFELFdBQUFoQixFQUFBLEdBQUFDLFFBQTRCO0FBQUEsY0FBakJFLE9BQUFjLE9BQUFiO0FBQ1YsWUFBSTtBQUFBLGNBQUFjO0FBQ0gsZ0JBQU03QyxXQUFBLE1BQWlCeEIsc0JBQXNCc0QsSUFBSTtBQUNqRCxnQkFBTTtZQUFDZ0I7VUFBYyxJQUFJOUMsU0FBUyxPQUFPO0FBSXpDLGNBQUksRUFBQzhDLG1CQUFBLFFBQUFBLG1CQUFBLFVBQUFBLGVBQWdCYixTQUFRO0FBQzVCO1VBQ0Q7QUFFQSxnQkFBTTtZQUFDQTtVQUFNLElBQUlhO0FBRWpCLFdBQUFELG1CQUFBbEMsV0FBV21CLElBQUksT0FBQSxRQUFBZSxxQkFBQSxTQUFBQSxtQkFBZmxDLFdBQVdtQixJQUFJLElBQU0sQ0FBQTtBQUVyQm5CLHFCQUFXbUIsSUFBSSxJQUFJLENBQUMsR0FBR25CLFdBQVdtQixJQUFJLEdBQUcsR0FBR0csTUFBTTtBQUdsRG5CLGFBQUdDLFFBQVFvQixVQUFrQnRELG1CQUFtQmlELE1BQU1uQixXQUFXbUIsSUFBSSxHQUFHLEtBQUssRUFBRTtRQUNoRixTQUFTUyxPQUFnQjtBQUN4QkMsa0JBQVFELE1BQU0sNEJBQTRCQSxLQUFLO1FBQ2hEO01BQ0Q7SUFBQSxTQUFBSCxLQUFBO0FBQUFPLGlCQUFBTixFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBTyxpQkFBQUwsRUFBQTtJQUFBO0FBRUEsV0FBTzNCO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FwQ01yQyxxQkFBQXlFLEtBQUE7QUFBQSxXQUFBTCxNQUFBdkMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQ2xGTixJQUFBNEMscUJBQXVCL0QsUUFBQSxpQkFBQTtBQUV2QixJQUFNZ0Usa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixtQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNMLG1CQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFlBQUEsR0FBV04sbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsV0FBQSxHQUFVUCxtQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxRQUFBLEdBQU9SLG1CQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxvQkFBQSxHQUFtQkosbUJBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREssaUJBQUEsR0FBZ0JULG1CQUFBRyxVQUFTO01BQ3hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RNLFlBQUEsR0FBV1YsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRE8sWUFBQSxHQUFXWCxtQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEUSxlQUFBLEdBQWNaLG1CQUFBRyxVQUFTO01BQ3RCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RTLGVBQUEsR0FBY2IsbUJBQUFHLFVBQVM7TUFDdEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFUsZUFBQSxHQUFjZCxtQkFBQUcsVUFBUztNQUN0QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHVCQUFBLEdBQXNCSixtQkFBQUcsVUFBUztNQUM5QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEVyxZQUFBLEdBQVdmLG1CQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RZLGdCQUFBLEdBQWVoQixtQkFBQUcsVUFBUztNQUN2QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEYSxNQUFBLEdBQUtqQixtQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RjLFFBQUEsR0FBT2xCLG1CQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxzQkFBQSxHQUFxQkosbUJBQUFHLFVBQVM7TUFDN0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxtQkFBQSxHQUFrQkosbUJBQUFHLFVBQVM7TUFDMUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTWUsZUFBZWxCLGdCQUFnQjtBQUVyQyxJQUFNbUIsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUMxR0EsSUFBTUMsY0FBZUMsU0FBd0I7QUFDNUMsTUFBSSxDQUFDQSxLQUFLO0FBQ1QsV0FBTztFQUNSO0FBRUEsUUFBTTFELFdBQTBCQyxHQUFHMEQsS0FBS0MsY0FBYyxTQUFTRixHQUFHO0FBRWxFLFFBQU1HLFNBQVNBLENBQUNDLFFBQWdCQyxZQUFpRDtBQUNoRixXQUFPQyxvQkFDTCxNQUFjO0FBQ2QsVUFBSTtBQUNILGVBQU9BLG1CQUFtQkQsUUFBUUQsTUFBTSxDQUFDO01BQzFDLFFBQVE7QUFDUCxlQUFPQyxRQUFRRCxNQUFNLEVBQUVDLFFBQVEsYUFBYSxLQUFLO01BQ2xEO0lBQ0QsR0FBRyxDQUNKO0VBQ0Q7QUFFQSxNQUFJL0QsVUFBVTtBQUNiLFdBQU82RCxPQUFPN0QsVUFBVzhELFlBQTJCO0FBQ25ELGFBQU9BLE9BQU9DLFFBQVEsU0FBUyxFQUFFLEVBQUVBLFFBQVEsTUFBTSxHQUFHO0lBQ3JELENBQUM7RUFDRjtBQUVBLFFBQU1FLGdCQUF5Q1AsSUFBSVEsTUFBTSxxQkFBcUI7QUFFOUUsTUFBSUQsa0JBQUEsUUFBQUEsa0JBQUEsVUFBQUEsY0FBZ0IsQ0FBQyxHQUFHO0FBQ3ZCLFdBQU9KLE9BQU9JLGNBQWMsQ0FBQyxHQUFJSCxZQUEyQjtBQUMzRCxhQUFPQSxPQUFPQyxRQUFRLE1BQU0sR0FBRztJQUNoQyxDQUFDO0VBQ0Y7QUFFQSxTQUFPO0FBQ1I7O0FDL0JBLElBQUFJLHFCQUEwQi9GLFFBQUEsaUJBQUE7QUFFMUIsSUFBTWdHLHVCQUF1QkEsQ0FBQ0MsWUFBeUN2RSxlQUErQztBQUFBLE1BQUF3RSxhQUFBM0QsMkJBQzlGMEQsVUFBQSxHQUFBRTtBQUFBLE1BQUE7QUFBdkIsU0FBQUQsV0FBQXpELEVBQUEsR0FBQSxFQUFBMEQsU0FBQUQsV0FBQXhELEVBQUEsR0FBQUMsUUFBbUM7QUFBQSxVQUFBeUQsZ0JBQUFDO0FBQUEsWUFBeEJDLFdBQUFILE9BQUFyRDtBQUNWLFlBQU1sQixXQUFtQnlELGFBQUFlLGlCQUFZRSxTQUFTQyxLQUFLLE1BQU0sT0FBQSxRQUFBSCxtQkFBQSxTQUFBQSxpQkFBSyxFQUFFO0FBQ2hFLFVBQUksQ0FBQ3hFLFVBQVU7QUFDZDtNQUNEO0FBRUFGLHFCQUFBLFFBQUFBLGVBQUEsU0FBQUEsYUFBQUEsYUFBZSxDQUFDO0FBQ2hCLFlBQU1zQixVQUFBcUQsdUJBQVMzRSxXQUFXRSxRQUFRLE9BQUEsUUFBQXlFLHlCQUFBLFNBQUFBLHVCQUFLLENBQUE7QUFFdkMsVUFBSUc7QUFDSixVQUFJRixTQUFTRyxRQUFRLElBQUksRUFBRUMsS0FBSyxxQkFBcUIsRUFBRXZFLFFBQVE7QUFDOURxRSxnQkFBUUYsU0FBU0ssU0FBUyxxQkFBcUIsRUFBRUMsR0FBRyxDQUFDO01BQ3RELFdBQVdOLFNBQVNLLFNBQVMscUJBQXFCLEVBQUV4RSxRQUFRO0FBQzNEcUUsZ0JBQVFGLFNBQVNHLFFBQVEsSUFBSSxFQUFFQyxLQUFLLHFCQUFxQixFQUFFRSxHQUFHLENBQUM7TUFDaEUsT0FBTztBQUNOSixnQkFBUUssRUFBRSxRQUFRLEVBQUVDLFNBQVMsb0JBQW9CO0FBQ2pEUixpQkFBU1MsTUFBTVAsS0FBSztNQUNyQjtBQUFBLFVBQUFRLGFBQUF6RSw0QkFFVyxHQUFTd0QsbUJBQUFrQixhQUFZakUsTUFBTSxDQUFBLEdBQUFrRTtBQUFBLFVBQUE7QUFBdEMsYUFBQUYsV0FBQXZFLEVBQUEsR0FBQSxFQUFBeUUsU0FBQUYsV0FBQXRFLEVBQUEsR0FBQUMsUUFBeUM7QUFBQSxnQkFBOUJ3RSxRQUFBRCxPQUFBcEU7QUFDVixnQkFBTXNFLFlBQUEsdUJBQUFqSCxPQUEyQ2dILEtBQUs7QUFDdEQsZ0JBQU1FLHNCQUFBLHNCQUFBbEgsT0FBb0RnSCxLQUFLO0FBQy9ELGNBQUlYLE1BQU1FLEtBQUssS0FBSyxFQUFFWSxTQUFTRixTQUFTLEtBQUtaLE1BQU1FLEtBQUssS0FBSyxFQUFFWSxTQUFTRCxtQkFBbUIsR0FBRztBQUM3RjtVQUNEO0FBRUFiLGdCQUFNZTs7OztZQUlMVixFQUFFLE9BQU8sRUFDUEMsU0FBU00sU0FBUyxFQUNsQk4sU0FBU08sbUJBQW1CLEVBQzVCZCxLQUFLO2NBQ0xpQixLQUFLckMsV0FBV2dDLEtBQW1CO2NBQ25DTSxPQUFPdEMsV0FBV2dDLEtBQW1CO1lBQ3RDLENBQUM7VUFDSDtRQUNEO01BQUEsU0FBQWhFLEtBQUE7QUFBQTZELG1CQUFBNUQsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQTZELG1CQUFBM0QsRUFBQTtNQUFBO0lBQ0Q7RUFBQSxTQUFBRixLQUFBO0FBQUErQyxlQUFBOUMsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQStDLGVBQUE3QyxFQUFBO0VBQUE7QUFDRDs7QUM5Q0EsSUFBTXFFLG9CQUFxQkMsY0FBa0U7QUFDNUYsUUFBTUMsWUFBeUQsQ0FBQztBQUNoRSxRQUFNQyxZQUFZRixTQUFTakIsS0FBd0IscUNBQXFDO0FBQUEsTUFBQW9CLGFBQUF2RiwyQkFFbEVzRixTQUFBLEdBQUFFO0FBQUEsTUFBQTtBQUF0QixTQUFBRCxXQUFBckYsRUFBQSxHQUFBLEVBQUFzRixTQUFBRCxXQUFBcEYsRUFBQSxHQUFBQyxRQUFpQztBQUFBLFVBQUFxRjtBQUFBLFlBQXRCL0UsVUFBQThFLE9BQUFqRjtBQUNWLFlBQU13RCxXQUFzQ08sRUFBRTVELE9BQU87QUFDckQsVUFDQ3FELFNBQVNHLFFBQVEsSUFBSSxFQUFFQyxLQUFLLHFCQUFxQixFQUFFdkUsVUFDbkRtRSxTQUFTSyxTQUFTLHFCQUFxQixFQUFFeEUsUUFDeEM7QUFDRDtNQUNEO0FBRUEsWUFBTTtRQUFDOEY7TUFBVyxJQUFJaEY7QUFDdEIsWUFBTUosT0FBMkJvRixnQkFBQSxRQUFBQSxnQkFBQSxTQUFBLFNBQUFBLFlBQWFDLFNBQVM7QUFFdkQsVUFBSSxDQUFDckYsTUFBTTtBQUNWO01BQ0Q7QUFFQSxVQUFJaEIsR0FBRzBELEtBQUs0QyxjQUFjdEYsSUFBSSxLQUFLaEIsR0FBRzBELEtBQUs2QyxjQUFjdkYsSUFBSSxHQUFHO0FBQy9EO01BQ0Q7QUFFQSxPQUFBbUYsa0JBQUFKLFVBQVUvRSxJQUFJLE9BQUEsUUFBQW1GLG9CQUFBLFNBQUFBLGtCQUFkSixVQUFVL0UsSUFBSSxJQUFNLENBQUE7QUFFcEIrRSxnQkFBVS9FLElBQUksRUFBRStFLFVBQVUvRSxJQUFJLEVBQUVWLE1BQU0sSUFBSW1FO0lBQzNDO0VBQUEsU0FBQW5ELEtBQUE7QUFBQTJFLGVBQUExRSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBMkUsZUFBQXpFLEVBQUE7RUFBQTtBQUVBLFNBQU91RTtBQUNSOztBQzFCQSxJQUFNUyxpQkFBa0JWLGNBQTJCO0FBQ2xELFFBQU1DLFlBQVlGLGtCQUFrQkMsUUFBUTtBQUc1QyxRQUFNdkYsUUFBa0JKLE9BQU9DLEtBQUsyRixTQUFTO0FBQzdDLE1BQUksQ0FBQ3hGLE1BQU1ELFFBQVE7QUFDbEI7RUFDRDtBQUVBLFFBQU04RCxhQUFhakUsT0FBT3NHLE9BQU9WLFNBQVMsRUFBRVcsT0FBTyxDQUFDQyxlQUFlQyxpQkFBaUI7QUFDbkYsV0FBTyxDQUFDLEdBQUdELGVBQWUsR0FBR0MsWUFBWTtFQUMxQyxDQUFDO0FBQ0QsTUFBSSxDQUFDeEMsV0FBVzlELFFBQVE7QUFDdkI7RUFDRDtBQUVBLFFBQU11RyxXQUFvQyxDQUFBO0FBRTFDLFdBQVNDLElBQUksR0FBR0EsSUFBSXZHLE1BQU1ELFFBQVF3RyxLQUFLO0FBQ3RDLFVBQU1ySSxVQUFVOEIsTUFBTXdHLE9BQU8sR0FBRyxFQUFFLEVBQUVqSCxPQUFRc0IsYUFBWTtBQUN2RCxhQUFPLEVBQUVwQixHQUFHMEQsS0FBSzRDLGNBQWNsRixPQUFPLEtBQUtwQixHQUFHMEQsS0FBSzZDLGNBQWNuRixPQUFPO0lBQ3pFLENBQUM7QUFFRCxRQUFJLENBQUMzQyxRQUFRNkIsUUFBUTtBQUNwQjtJQUNEO0FBRUF1RyxhQUFTQSxTQUFTdkcsTUFBTSxJQUFBOUIsa0NBQUksYUFBMkI7QUFDdEQsVUFBSXFCLGFBQXVDLENBQUM7QUFFNUMsVUFBSTtBQUNIQSxxQkFBQSxNQUFtQnBDLG1CQUFtQmdCLE9BQU87TUFDOUMsU0FBU2dELE9BQWdCO0FBQ3hCQyxnQkFBUUQsTUFBTSw0QkFBNEJBLEtBQUs7TUFDaEQ7QUFFQTBDLDJCQUFxQkMsWUFBWXZFLFVBQVU7SUFDNUMsQ0FBQTtBQUVBZ0gsYUFBU0EsU0FBU3ZHLE1BQU0sSUFBQTlCLGtDQUFJLGFBQTJCO0FBQ3RELFVBQUlxQixhQUF1QyxDQUFDO0FBRTVDLFVBQUk7QUFDSEEscUJBQUEsTUFBbUJyQyxvQkFBb0JpQixPQUFPO01BQy9DLFNBQVNnRCxPQUFnQjtBQUN4QkMsZ0JBQVFELE1BQU0sNEJBQTRCQSxLQUFLO01BQ2hEO0FBRUEwQywyQkFBcUJDLFlBQVl2RSxVQUFVO0lBQzVDLENBQUE7RUFDRDtBQUVBLE9BQUFyQixrQkFBTSxhQUFZO0FBQ2pCLGFBQUF3SSxLQUFBLEdBQUFDLFlBQXNCSixVQUFBRyxLQUFBQyxVQUFBM0csUUFBQTBHLE1BQVU7QUFBaEMsWUFBV0UsVUFBQUQsVUFBQUQsRUFBQTtBQUNWLFVBQUk7QUFDSCxjQUFNRSxRQUFRO01BQ2YsUUFBUTtNQUFDO0lBQ1Y7RUFDRCxDQUFBLEVBQUc7QUFDSjs7QVIxREFsSCxHQUFHbUgsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxXQUFXdkIsVUFBZ0I7QUFDbkUsTUFBSUEsU0FBU3BCLEtBQUssSUFBSSxNQUFNLHFCQUFxQm9CLFNBQVNMLFNBQVMsZ0JBQWdCLEdBQUc7QUFDckYsU0FBS2UsZUFBZVYsUUFBUTtFQUM3QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIk1hcmtSaWdodHNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJnZXRHbG9iYWxVc2VyR3JvdXBzIiwgImdldExvY2FsVXNlckdyb3VwcyIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJzdG9yYWdlS2V5R2xvYmFsIiwgInN0b3JhZ2VLZXlMb2NhbCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1c3VzZXJzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJ1c3Byb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJfcmVmMiIsICJndWl1c2VyIiwgIm1ldGEiLCAiZ3VpcHJvcCIsICJfeDIiLCAiX3JlZjMiLCAidXNlckdyb3VwcyIsICJmaWx0ZXIiLCAidXNlcm5hbWUiLCAibXciLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAiT2JqZWN0IiwgImtleXMiLCAiaW5jbHVkZXMiLCAibGVuZ3RoIiwgInVzZXJzIiwgInF1ZXJ5VXNlcnMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiX3VzZXJHcm91cHMkbmFtZSIsICJ1c2VyIiwgInZhbHVlIiwgIm5hbWUiLCAiZ3JvdXBzIiwgImVsZW1lbnQiLCAic2V0T2JqZWN0IiwgImVyciIsICJlIiwgImYiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeDMiLCAiX3JlZjQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3VzZXJHcm91cHMkdXNlciIsICJnbG9iYWx1c2VyaW5mbyIsICJfeDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJxaXV3ZW4iLCAibG9jYWxpemUiLCAiZW4iLCAic3Rld2FyZCIsICJjaGVja3VzZXIiLCAic3VwcHJlc3MiLCAic3lzb3AiLCAidGVtcGxhdGVlZGl0b3IiLCAidHJhbnN3aWtpIiwgInBhdHJvbGxlciIsICJhdXRvcmV2aWV3ZXIiLCAic2VuaW9yZWRpdG9yIiwgImV2ZW50c3BvbnNvciIsICJjb25maXJtZWQiLCAiYXV0b2NvbmZpcm1lZCIsICJib3QiLCAiZmxvb2QiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdldFVzZXJOYW1lIiwgInVybCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiZGVjb2RlIiwgInN0cmluZyIsICJyZXBsYWNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VybmFtZU1hdGNoIiwgIm1hdGNoIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcHBlbmRVc2VyUmlnaHRzTWFyayIsICIkdXNlckxpbmtzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIl8kZWxlbWVudCRhdHRyIiwgIl91c2VyR3JvdXBzJHVzZXJuYW1lIiwgIiRlbGVtZW50IiwgImF0dHIiLCAiJHN1cHMiLCAicGFyZW50cyIsICJmaW5kIiwgInNpYmxpbmdzIiwgImVxIiwgIiQiLCAiYWRkQ2xhc3MiLCAiYWZ0ZXIiLCAiX2l0ZXJhdG9yNSIsICJ1bmlxdWVBcnJheSIsICJfc3RlcDUiLCAiZ3JvdXAiLCAiY2xhc3NOYW1lIiwgImRlcHJlY2F0ZWRDbGFzc05hbWUiLCAiaGFzQ2xhc3MiLCAiYXBwZW5kIiwgImFsdCIsICJ0aXRsZSIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJ1c2VyTGlua3MiLCAiJGVsZW1lbnRzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIl91c2VyTGlua3MkdXNlciIsICJ0ZXh0Q29udGVudCIsICJ0b1N0cmluZyIsICJpc0lQdjRBZGRyZXNzIiwgImlzSVB2NkFkZHJlc3MiLCAibWFya1VzZXJSaWdodHMiLCAidmFsdWVzIiwgInJlZHVjZSIsICJwcmV2aW91c1ZhbHVlIiwgImN1cnJlbnRWYWx1ZSIsICJwcm9taXNlcyIsICJpIiwgInNwbGljZSIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJob29rIiwgImFkZCIsICJtYXJrUmlnaHRzIl0KfQo=
