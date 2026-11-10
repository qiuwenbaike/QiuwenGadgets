/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-markblocked.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MarkBlocked}
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

// dist/MarkBlocked/MarkBlocked.js
//! src/MarkBlocked/options.json
var contributionsPageAlias = "Special:Contributions";
var userNamespaceNumbers = [2, 3];
var storageKeyBlocked = "ext.gadget.MarkBlocked_blocked-";
var storageKeyLocked = "ext.gadget.MarkBlocked_locked-";
var version = "2.0";
//! src/MarkBlocked/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    infinity: (0, import_ext_gadget.localize)({
      en: "infinity",
      "zh-hans": "无限期",
      "zh-hant": "無限期"
    }),
    Blocked: (0, import_ext_gadget.localize)({
      en: "; $5blocked ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5封鎖$1：$3（$4前）"
    }),
    "Globally Blocked": (0, import_ext_gadget.localize)({
      en: "; $5blocked globally ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5全域封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5全域封鎖$1：$3（$4前）"
    }),
    Locked: (0, import_ext_gadget.localize)({
      en: "; Locked",
      "zh-hans": "；已全域锁定",
      "zh-hant": "；已全域鎖定"
    }),
    partial: (0, import_ext_gadget.localize)({
      en: "partial ",
      zh: "部分"
    }),
    d: (0, import_ext_gadget.localize)({
      en: "day",
      zh: "天"
    }),
    s: (0, import_ext_gadget.localize)({
      en: "second",
      zh: "秒"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkBlocked/modules/util/parseTime.ts
var addZero = (v) => {
  return v <= 9 ? `0${v}` : `${v}`;
};
var inHours = (ms) => {
  let mm = Math.floor(ms / 6e4);
  if (!mm) {
    return `${Math.floor(ms / 1e3)}${getMessage("s")}`;
  }
  let hh = Math.floor(mm / 60);
  mm %= 60;
  const dd = Math.floor(hh / 24);
  hh %= 24;
  if (dd) {
    return `${dd + (dd < 10 ? `.${addZero(hh)}` : "")}${getMessage("d")}`;
  }
  return `${hh}:${addZero(mm)}`;
};
var parseTS = (string) => {
  const m = string.replace(/\D/g, "").match(/(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/);
  return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6])).getTime();
};
//! src/MarkBlocked/modules/MarkBlocked.module.less
var userlinkIndef = "MarkBlocked-module__userlinkIndef_xtAfOG__4100";
var userlinkLocked = "MarkBlocked-module__userlinkLocked_xtAfOG__4100";
var userlinkPartial = "MarkBlocked-module__userlinkPartial_xtAfOG__4100";
var userlinkTemp = "MarkBlocked-module__userlinkTemp_xtAfOG__4100";
//! src/MarkBlocked/modules/util/markLinks.ts
var markGlobalLockedLinks = ({
  response,
  userLinks
}) => {
  const user = response === null || response === void 0 ? void 0 : response.name;
  const locked = response === null || response === void 0 ? void 0 : response.locked;
  if (!locked || !user) {
    return;
  }
  const tip = getMessage("Locked");
  const $links = userLinks[user];
  if (!$links) {
    return;
  }
  const className = userlinkLocked;
  for (const $link of $links) {
    $link.addClass(className).attr("title", $link.attr("title") + tip);
  }
};
var markLocalBlocks = ({
  response,
  userLinks,
  bkip
}) => {
  var _response$query;
  if (!((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.blocks)) {
    return;
  }
  for (const block of response["query"].blocks) {
    const isPartialBlcok = typeof block.restrictions === "string" && block.restrictions !== "";
    let className = userlinkPartial;
    let blockTime = "";
    if (block.expiry.startsWith("in")) {
      if (!isPartialBlcok) {
        className = userlinkIndef;
      }
      blockTime = getMessage("infinity");
    } else {
      if (!isPartialBlcok) {
        className = userlinkTemp;
      }
      blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
    }
    let tip = getMessage("Blocked").replace("$1", blockTime).replace("$2", block.by).replace("$3", block.reason).replace("$4", inHours(Date.now() - parseTS(block.timestamp)));
    tip = isPartialBlcok ? tip.replace("$5", getMessage("partial")) : tip.replace("$5", "");
    const $links = userLinks[bkip ?? block.user];
    if (!$links) {
      continue;
    }
    for (const $link of $links) {
      $link.addClass(className).attr("title", $link.attr("title") + tip);
    }
  }
};
var markGlobalBlocks = ({
  response,
  userLinks,
  bkip
}) => {
  var _response$query2;
  if (!((_response$query2 = response["query"]) !== null && _response$query2 !== void 0 && _response$query2.globalblocks)) {
    return;
  }
  for (const block of response["query"].globalblocks) {
    let className = userlinkPartial;
    let blockTime = "";
    if (block.expiry.startsWith("in")) {
      className = userlinkIndef;
      blockTime = getMessage("infinity");
    } else {
      className = userlinkTemp;
      blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
    }
    let tip = getMessage("Globally Blocked").replace("$1", blockTime).replace("$2", block.by).replace("$3", block.reason).replace("$4", inHours(Date.now() - parseTS(block.timestamp)));
    tip = tip.replace("$5", "");
    const $links = userLinks[bkip ?? block.target];
    if (!$links) {
      continue;
    }
    for (const $link of $links) {
      $link.addClass(className).attr("title", $link.attr("title") + tip);
    }
  }
};
//! src/MarkBlocked/modules/util/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)(`MarkBlocked/${version}`);
//! src/MarkBlocked/modules/util/query.ts
var queryGlobalUserInfo = async (guiuser) => {
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    meta: ["globaluserinfo"],
    guiuser,
    smaxage: 600,
    maxage: 600
  };
  const {
    query: {
      globaluserinfo: {
        name,
        locked = false,
        missing = false
      }
    }
  } = await api.get(params);
  const response = {
    name
  };
  if (locked) {
    response.locked = locked;
  }
  if (missing) {
    response.missing = missing;
  }
  return response;
};
var queryIPBlocks = async (bkip) => {
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    list: ["blocks", "globalblocks"],
    bkip,
    bklimit: 100,
    bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
    bgip: bkip,
    bglimit: 100,
    bgprop: ["by", "expiry", "reason", "timestamp", "target"],
    smaxage: 600,
    maxage: 600
  };
  return await api.get(params);
};
var queryUserBlocks = async (bkusers) => {
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    list: ["blocks", "globalblocks"],
    bkusers,
    bklimit: 100,
    bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
    bglimit: 100,
    bgtargets: bkusers,
    bgprop: ["by", "expiry", "reason", "timestamp", "target"],
    smaxage: 600,
    maxage: 600
  };
  return await api.get(params);
};
//! src/MarkBlocked/modules/util/markUserLinks.ts
var markGlobalLockedUserLinks = (userLinks) => {
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  for (const guiuser of users) {
    if (mw.util.isIPv4Address(guiuser) || mw.util.isIPv6Address(guiuser)) {
      continue;
    }
    if (mw.storage.getObject(storageKeyLocked + guiuser)) {
      const response = mw.storage.getObject(storageKeyLocked + guiuser);
      if (response) {
        markGlobalLockedLinks({
          response,
          userLinks
        });
        continue;
      }
    }
    promises[promises.length] = async () => {
      try {
        const response = await queryGlobalUserInfo(guiuser);
        markGlobalLockedLinks({
          response,
          userLinks
        });
        mw.storage.setObject(storageKeyLocked + guiuser, response, 60 * 60 * 24);
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    };
  }
  void Promise.all(promises.map((promise) => promise()));
};
var markBlockedUserLinks = (userLinks) => {
  let users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  for (const user of users) {
    if (mw.storage.getObject(storageKeyBlocked + user)) {
      var _response$query3, _response$query4;
      const response = mw.storage.getObject(storageKeyBlocked + user);
      if ((_response$query3 = response["query"]) !== null && _response$query3 !== void 0 && _response$query3.blocks || (_response$query4 = response["query"]) !== null && _response$query4 !== void 0 && _response$query4.globalblocks) {
        var _response$query5, _response$query6;
        if ((_response$query5 = response["query"]) !== null && _response$query5 !== void 0 && _response$query5.blocks) {
          markLocalBlocks({
            response,
            userLinks
          });
        }
        if ((_response$query6 = response["query"]) !== null && _response$query6 !== void 0 && _response$query6.globalblocks) {
          markGlobalBlocks({
            response,
            userLinks
          });
        }
        users = users.filter((element) => {
          return element !== user;
        });
      }
    }
  }
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    promises[promises.length] = async () => {
      try {
        var _response$query7, _response$query8;
        const response = await queryUserBlocks(bkusers);
        const blockRecords = {};
        for (const user of bkusers) {
          blockRecords[user] = {
            query: {
              blocks: [],
              globalblocks: []
            }
          };
        }
        if ((_response$query7 = response["query"]) !== null && _response$query7 !== void 0 && _response$query7.blocks) {
          markLocalBlocks({
            response,
            userLinks
          });
          for (const block of response["query"].blocks) {
            if (block.user) {
              var _blockRecords$block$u;
              (_blockRecords$block$u = blockRecords[block.user]) === null || _blockRecords$block$u === void 0 || _blockRecords$block$u.query.blocks.push(block);
            }
          }
        }
        if ((_response$query8 = response["query"]) !== null && _response$query8 !== void 0 && _response$query8.globalblocks) {
          markGlobalBlocks({
            response,
            userLinks
          });
          for (const block of response["query"].globalblocks) {
            if (block.target) {
              var _blockRecords$block$t;
              (_blockRecords$block$t = blockRecords[block.target]) === null || _blockRecords$block$t === void 0 || _blockRecords$block$t.query.globalblocks.push(block);
            }
          }
        }
        for (const [user, value] of Object.entries(blockRecords)) {
          mw.storage.setObject(storageKeyBlocked + user, value, 60 * 60);
        }
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    };
  }
  void Promise.all(promises.map((promise) => promise()));
};
var markBlockedIPLinks = (userLinks) => {
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    for (let bkip of bkusers) {
      if (!mw.util.isIPv4Address(bkip) && !mw.util.isIPv6Address(bkip)) {
        continue;
      }
      if (mw.util.isIPv6Address(bkip)) {
        bkip = bkip.toUpperCase();
      }
      if (mw.storage.getObject(storageKeyBlocked + bkip)) {
        var _response$query9, _response$query0;
        const response = mw.storage.getObject(storageKeyBlocked + bkip);
        if ((_response$query9 = response["query"]) !== null && _response$query9 !== void 0 && _response$query9.blocks) {
          markLocalBlocks({
            response,
            userLinks
          });
        }
        if ((_response$query0 = response["query"]) !== null && _response$query0 !== void 0 && _response$query0.globalblocks) {
          markGlobalBlocks({
            response,
            userLinks
          });
        }
        continue;
      }
      promises[promises.length] = async () => {
        try {
          var _response$query1, _response$query10;
          const response = await queryIPBlocks(bkip);
          if ((_response$query1 = response["query"]) !== null && _response$query1 !== void 0 && _response$query1.blocks) {
            markLocalBlocks({
              response,
              userLinks,
              bkip
            });
            for (const block of response["query"].blocks) {
              if (block.user) {
                mw.storage.setObject(storageKeyBlocked + block.user, response, 60 * 60);
              }
            }
          }
          if ((_response$query10 = response["query"]) !== null && _response$query10 !== void 0 && _response$query10.globalblocks) {
            markGlobalBlocks({
              response,
              userLinks,
              bkip
            });
            for (const block of response["query"].globalblocks) {
              if (block.target) {
                mw.storage.setObject(storageKeyBlocked + block.target, response, 60 * 60);
              }
            }
          }
        } catch (error) {
          console.error("[MarkBlocked] Ajax error:", error);
        }
      };
    }
  }
  void Promise.all(promises.map((promise) => promise()));
};
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/MarkBlocked/modules/util/generateUserNamespaceTitles.ts
var generateUserNamespaceTitles = () => {
  const {
    wgNamespaceIds
  } = mw.config.get();
  const userNamespaceTitles2 = [];
  for (const [namespace, id] of Object.entries(wgNamespaceIds)) {
    if (!userNamespaceNumbers.includes(id)) {
      continue;
    }
    userNamespaceTitles2[userNamespaceTitles2.length] = `${mw.util.escapeRegExp(namespace.replace(/_/g, " "))}:`;
  }
  return userNamespaceTitles2;
};
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var userNamespaceTitles = generateUserNamespaceTitles();
var userTitleRegex = new RegExp(`^(${userNamespaceTitles.join("|")}|${contributionsPageAlias}\\/)+([^\\/#]+)$`, "i");
var {
  wgArticlePath,
  wgScript
} = mw.config.get();
var articleRegex = new RegExp(`${wgArticlePath.replace("$1", "")}([^#]+)`);
var scriptRegex = new RegExp(`^${wgScript}\\?title=([^#&]+)`);
var generateUserLinks = ($content) => {
  const userLinks = {};
  for (const element of $content.find("a")) {
    var _user;
    const $element = $(element);
    if ($element.hasClass("mw-changeslist-date") || $element.hasClass("ext-discussiontools-init-timestamplink") || $element.parent("span").hasClass("mw-history-undo") || $element.parent("span").hasClass("mw-rollback-link")) {
      continue;
    }
    const href = $element.attr("href");
    if (!href) {
      continue;
    }
    if (mw.util.isIPv6Address(href.replace(/^(?:https?:\/\/)/i, ""))) {
      continue;
    }
    try {
      if (new import_ext_gadget3.MwUri(href).host !== location.host) {
        continue;
      }
    } catch {
      try {
        if (new import_ext_gadget3.MwUri(location.href + href).host !== location.host) {
          continue;
        }
      } catch {
        continue;
      }
    }
    let pageTitle;
    if (articleRegex.test(href)) {
      const match = articleRegex.exec(href);
      pageTitle = match[1];
    } else if (scriptRegex.test(href)) {
      const match = scriptRegex.exec(href);
      pageTitle = match[1];
    } else {
      continue;
    }
    if (!pageTitle || typeof pageTitle !== "string") {
      continue;
    }
    pageTitle = decodeURIComponent(pageTitle).replace(/_/g, " ");
    const userExecArray = userTitleRegex.exec(pageTitle);
    if (!userExecArray || typeof userExecArray[2] !== "string") {
      continue;
    }
    let user = userExecArray[2].slice(0, 1).toUpperCase() + userExecArray[2].slice(1);
    if (mw.util.isIPv6Address(user)) {
      user = user.toUpperCase();
    }
    userLinks[_user = user] ?? (userLinks[_user] = []);
    userLinks[user][userLinks[user].length] = $element;
  }
  return userLinks;
};
//! src/MarkBlocked/modules/markBlockedUser.ts
var markBlockedUser = ($content) => {
  const userLinks = generateUserLinks($content);
  markGlobalLockedUserLinks(userLinks);
  markBlockedUserLinks(userLinks);
  markBlockedIPLinks(userLinks);
};
//! src/MarkBlocked/modules/addHook.ts
var {
  wgAction,
  wgNamespaceNumber
} = mw.config.get();
var addHook = () => {
  let isInit = false;
  mw.hook("wikipage.content").add(function markBlocked($content) {
    if (isInit) {
      return;
    }
    isInit = true;
    if (wgAction === "view" && wgNamespaceNumber === 0) {
      $content = $content.find(".diff-title");
    }
    $content = $content.add("#ca-nstab-user");
    markBlockedUser($content);
  });
};
//! src/MarkBlocked/MarkBlocked.ts
if (!["edit", "submit"].includes(mw.config.get("wgAction"))) {
  addHook();
}

})();

/* </nowiki> */

