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
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
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
var listPageUserLinkThreshold = 300;
var maxConcurrentGlobalBatches = 4;
var maxGlobalUsersOnListPages = 100;
var version = 2.1;
//! src/MarkRights/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`MarkRights/${version}`);
//! src/MarkRights/modules/util/getUserGroups.ts
var queryUserGroups = async (ususers) => {
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
  const response = await api.get(params);
  return response;
};
var queryGlobalUserGroups = async (guiuser) => {
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
  const response = await api.get(params);
  return response;
};
var getLocalUserGroups = async (ususers) => {
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
    const response = await queryUserGroups(ususers);
    const {
      users: queryUsers
    } = response["query"];
    for (const user of queryUsers) {
      if (!(user !== null && user !== void 0 && user.name) || !(user !== null && user !== void 0 && user.groups)) {
        continue;
      }
      const {
        name,
        groups
      } = user;
      userGroups[name] ?? (userGroups[name] = []);
      userGroups[name] = [...userGroups[name], ...groups.filter((element) => {
        return element !== "*";
      })];
      mw.storage.setObject(storageKeyLocal + name, userGroups[name], 60 * 60);
    }
  } catch (error) {
    console.error("[MarkRights] Ajax error:", error);
  }
  return userGroups;
};
var getGlobalUserGroups = async (ususers) => {
  const userGroups = {};
  ususers = ususers.filter((username) => {
    if (mw.storage.getObject(storageKeyGlobal + username)) {
      userGroups[username] = mw.storage.getObject(storageKeyGlobal + username);
    }
    return !Object.keys(userGroups).includes(username);
  });
  for (const user of ususers) {
    try {
      const response = await queryGlobalUserGroups(user);
      const {
        globaluserinfo
      } = response["query"];
      if (!(globaluserinfo !== null && globaluserinfo !== void 0 && globaluserinfo.groups)) {
        continue;
      }
      const {
        groups
      } = globaluserinfo;
      userGroups[user] ?? (userGroups[user] = []);
      userGroups[user] = [...userGroups[user], ...groups];
      mw.storage.setObject(storageKeyGlobal + user, userGroups[user], 60 * 60);
    } catch (error) {
      console.error("[MarkRights] Ajax error:", error);
    }
  }
  return userGroups;
};
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
      en: "Exempted from phone number verification",
      "zh-hans": "手机号验证豁免",
      "zh-hant": "手機號驗證豁免"
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
//! src/MarkRights/modules/util/appendUserRightsMark.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var supContainerCache = /* @__PURE__ */ new WeakMap();
var getSupContainer = ($element) => {
  const element = $element[0];
  if (!element) {
    return null;
  }
  const listItem = element.closest("li");
  if (listItem) {
    var _cached$;
    const cached = supContainerCache.get(listItem);
    if (cached !== null && cached !== void 0 && (_cached$ = cached[0]) !== null && _cached$ !== void 0 && _cached$.isConnected) {
      return cached;
    }
  }
  let $sups = $element.siblings(".gadgets-markrights").first();
  if (!$sups.length) {
    const $scope = listItem ? $(listItem) : $element.parent();
    $sups = $scope.find(".gadgets-markrights").first();
  }
  return $sups.length ? $sups : null;
};
var appendUserRightsMark = (userLinks, userGroups) => {
  for (const [user, groups] of Object.entries(userGroups)) {
    const groupsToMark = (0, import_ext_gadget3.uniqueArray)(groups);
    const $elements = userLinks[user];
    if (!groupsToMark.length || !($elements !== null && $elements !== void 0 && $elements.length)) {
      continue;
    }
    for (const $element of $elements) {
      let $sups = getSupContainer($element);
      const groupsToAdd = groupsToMark.filter((group) => {
        var _$sups;
        const className = `gadgets-markrights__${group}`;
        const deprecatedClassName = `gadgets-markrights-${group}`;
        const $supsOfGroup = (_$sups = $sups) === null || _$sups === void 0 ? void 0 : _$sups.children("sup");
        if (!$supsOfGroup) {
          return true;
        }
        return !$supsOfGroup.hasClass(className) && !$supsOfGroup.hasClass(deprecatedClassName);
      });
      if (!groupsToAdd.length) {
        continue;
      }
      if (!$sups) {
        var _$element$;
        $sups = $("<span>").addClass("gadgets-markrights");
        $element.after($sups);
        const listItem = (_$element$ = $element[0]) === null || _$element$ === void 0 ? void 0 : _$element$.closest("li");
        if (listItem) {
          supContainerCache.set(listItem, $sups);
        }
      }
      for (const group of groupsToAdd) {
        $sups.append(
          // The following classes are used here:
          // * see ../types.d.ts
          // * for more information
          $("<sup>").addClass(`gadgets-markrights__${group}`).addClass(`gadgets-markrights-${group}`).attr({
            alt: getMessage(group),
            title: getMessage(group)
          })
        );
      }
    }
  }
};
//! src/MarkRights/modules/util/generateUserLinks.ts
var generateUserLinks = ($content) => {
  const userLinks = {};
  const $elements = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
  for (const element of $elements) {
    const $element = $(element);
    const listItem = element.closest("li");
    if ($element.siblings(".gadgets-markrights").length || listItem !== null && listItem !== void 0 && listItem.querySelector(".gadgets-markrights")) {
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
    userLinks[user] ?? (userLinks[user] = []);
    userLinks[user][userLinks[user].length] = $element;
  }
  return userLinks;
};
//! src/MarkRights/modules/core.ts
var BATCH_SIZE = 25;
var LIST_SPECIAL_PAGES = ["AbuseLog", "Contributions", "Log", "Newfiles", "Newpages", "Prefixindex", "Recentchanges", "Recentchangeslinked", "Watchlist"];
var isListPage = (userCount) => {
  if (userCount >= listPageUserLinkThreshold) {
    return true;
  }
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  return Boolean(wgCanonicalSpecialPageName && LIST_SPECIAL_PAGES.includes(wgCanonicalSpecialPageName));
};
var runWithConcurrency = async (tasks, limit) => {
  let nextIndex = 0;
  const workers = Array.from({
    length: Math.min(limit, tasks.length)
  }, async () => {
    for (; ; ) {
      const index = nextIndex++;
      if (index >= tasks.length) {
        return;
      }
      await tasks[index]();
    }
  });
  await Promise.all(workers);
};
var markUserRights = async ($content) => {
  const userLinks = generateUserLinks($content);
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  for (let i = 0; i < users.length; i += BATCH_SIZE) {
    const batch = users.slice(i, i + BATCH_SIZE);
    const localGroups = await getLocalUserGroups(batch);
    appendUserRightsMark(userLinks, localGroups);
  }
  const globalUsers = users.slice(0, isListPage(users.length) ? maxGlobalUsersOnListPages : users.length);
  const globalBatches = [];
  for (let i = 0; i < globalUsers.length; i += BATCH_SIZE) {
    globalBatches.push(globalUsers.slice(i, i + BATCH_SIZE));
  }
  await runWithConcurrency(globalBatches.map((batch) => {
    return async () => {
      const globalGroups = await getGlobalUserGroups(batch);
      appendUserRightsMark(userLinks, globalGroups);
    };
  }), maxConcurrentGlobalBatches);
};
//! src/MarkRights/MarkRights.ts
mw.hook("wikipage.content").add(function markRights($content) {
  if ($content.attr("id") === "mw-content-text" || $content.hasClass("mw-changeslist")) {
    void markUserRights($content);
  }
});

})();

/* </nowiki> */

