/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Vanished_user_1929210/js/OnlineAdmins.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/OnlineAdmins}
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

// dist/OnlineAdmins/OnlineAdmins.js
//! src/OnlineAdmins/options.json
var version = "2.0";
//! src/OnlineAdmins/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`OnlineAdmins/${version}`);
//! src/OnlineAdmins/modules/util/query.ts
var queryRecentChanges = async (rcstart, rcend) => {
  const params = {
    rcstart,
    rcend,
    action: "query",
    format: "json",
    formatversion: "2",
    list: "recentchanges",
    rcprop: "user",
    rcshow: ["!bot", "!anon"],
    rclimit: 500,
    smaxage: 600,
    maxage: 600
  };
  const response = await api.get(params);
  return response;
};
var queryLogEvents = async (lestart, leend) => {
  const params = {
    lestart,
    leend,
    action: "query",
    format: "json",
    formatversion: "2",
    list: "logevents",
    leprop: "user",
    lelimit: 500,
    smaxage: 600,
    maxage: 600
  };
  const response = await api.get(params);
  return response;
};
var queryUserProps = async (ususers) => {
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
//! src/OnlineAdmins/modules/constant.ts
var BLACK_LIST = ["滥用过滤器"];
//! src/OnlineAdmins/modules/util/getAdmins.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var getAdmins = async () => {
  const stewards = [];
  const sysops = [];
  const patrollers = [];
  let users = [];
  const promises = [];
  const time = /* @__PURE__ */ new Date();
  const rcstart = time.toISOString();
  time.setMinutes(time.getMinutes() - 30);
  const rcend = time.toISOString();
  try {
    const recentchanges = await queryRecentChanges(rcstart, rcend);
    for (const {
      user
    } of recentchanges["query"].recentchanges) {
      users[users.length] = user;
    }
  } catch {
  }
  try {
    const logevents = await queryLogEvents(rcstart, rcend);
    for (const {
      user
    } of logevents["query"].logevents) {
      users[users.length] = user;
    }
  } catch {
  }
  users = (0, import_ext_gadget2.uniqueArray)(users);
  for (let i = 0; i < users.length; i++) {
    const ususers = users.splice(0, 25);
    if (!ususers.length) {
      continue;
    }
    promises[promises.length] = async () => {
      const response = await queryUserProps(ususers);
      for (const {
        groups,
        name
      } of response["query"].users) {
        if (groups.includes("bot") || BLACK_LIST.includes(name)) {
          continue;
        }
        if (!name) {
          continue;
        }
        if (groups.includes("steward")) {
          stewards[stewards.length] = name;
        }
        if (groups.includes("sysop")) {
          sysops[sysops.length] = name;
        }
        if (groups.includes("patroller")) {
          patrollers[patrollers.length] = name;
        }
      }
    };
  }
  for (const promise of promises) {
    try {
      await promise();
    } catch {
    }
  }
  return {
    stewards,
    sysops,
    patrollers
  };
};
//! src/OnlineAdmins/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Talk: (0, import_ext_gadget3.localize)({
      en: "Talk",
      ja: "留言",
      zh: "留言"
    }),
    "(": (0, import_ext_gadget3.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget3.localize)({
      en: ")",
      zh: "）"
    }),
    " ($1 online):": (0, import_ext_gadget3.localize)({
      en: " ($1 online):",
      ja: "（$1人オンライン中）：",
      "zh-hans": "（$1个在线）：",
      "zh-hant": "（$1個在線）："
    }),
    Patrollers: (0, import_ext_gadget3.localize)({
      en: "Patrollers",
      ja: "巡回者",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    Stewards: (0, import_ext_gadget3.localize)({
      en: "Stewards",
      ja: "スチュワード",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    "Network error": (0, import_ext_gadget3.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    NoOnline: (0, import_ext_gadget3.localize)({
      en: "Currently there are no high privilege users online",
      ja: "現在、高権限利用者はオンラインにいません",
      "zh-hans": "目前没有站务人员在线",
      "zh-hant": "目前沒有站務人員在線"
    }),
    Online: (0, import_ext_gadget3.localize)({
      en: "Online admins",
      ja: "オンラインの高権限利用者",
      "zh-hans": "在线站务人员",
      "zh-hant": "線上站務人員"
    }),
    OnlineWithin30Minutes: (0, import_ext_gadget3.localize)({
      en: "High privilege users online within 30 minutes:",
      ja: "30分以内にオンラインで高権限利用者：",
      "zh-hans": "下面是最近30分钟内在线的站务人员：",
      "zh-hant": "下面是最近30分鐘內的線上站務人員："
    }),
    SysOps: (0, import_ext_gadget3.localize)({
      en: "Admins",
      ja: "管理者",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/OnlineAdmins/modules/components/OnlineAdmins.module.less
var section = "OnlineAdmins-module__section_WS9IGa__4100";
var sectionList = "OnlineAdmins-module__sectionList_WS9IGa__4100";
var talkPageLink = "OnlineAdmins-module__talkPageLink_WS9IGa__4100";
//! src/OnlineAdmins/modules/util/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};
//! src/OnlineAdmins/modules/components/userLink.ts
var userLink = ({
  userName
}) => {
  const userNameLink = document.createElement("a");
  userNameLink.href = mw.util.getUrl(`User:${sanitize(userName)}`);
  userNameLink.target = "_blank";
  userNameLink.rel = ["noopener", "noreferrer"].join(" ");
  userNameLink.textContent = sanitize(userName);
  const userTalkLink = document.createElement("a");
  userTalkLink.href = mw.util.getUrl(`User_talk:${sanitize(userName)}`);
  userTalkLink.target = "_blank";
  userTalkLink.rel = ["noopener", "noreferrer"].join(" ");
  userTalkLink.textContent = getMessage("Talk");
  const userTalkLinkWrap = document.createElement("span");
  userTalkLinkWrap.className = talkPageLink;
  userTalkLinkWrap.append(getMessage("("), userTalkLink, getMessage(")"));
  const item = document.createElement("li");
  item.append(userNameLink, " ", userTalkLinkWrap);
  return item;
};
//! src/OnlineAdmins/modules/components/groupList.ts
var groupList = ({
  groupName,
  userNames
}) => {
  if (groupName && userNames.length) {
    const groupNameTitle = document.createElement("span");
    groupNameTitle.textContent = groupName;
    const onlineUserNumber = document.createElement("span");
    onlineUserNumber.textContent = getMessage(" ($1 online):").replace("$1", String(userNames.length));
    const userNameLinks = userNames.map((userName) => {
      return userLink({
        userName
      });
    });
    const sectionUserList = document.createElement("ul");
    sectionUserList.className = sectionList;
    sectionUserList.append(...userNameLinks);
    const groupListWrap = document.createElement("div");
    groupListWrap.className = section;
    groupListWrap.append(groupNameTitle, onlineUserNumber, sectionUserList);
    return groupListWrap;
  }
  const comment = document.createComment("");
  return comment;
};
//! src/OnlineAdmins/modules/components/onlineAdminsList.ts
var onlineAdminsList = ({
  stewards,
  sysops,
  patrollers
}) => {
  const listTitle = document.createElement("p");
  listTitle.textContent = getMessage("OnlineWithin30Minutes");
  const listWrap = document.createElement("div");
  listWrap.append(listTitle);
  if (stewards.length) {
    const stewardList = groupList({
      groupName: getMessage("Stewards"),
      userNames: stewards
    });
    listWrap.append(stewardList);
  }
  if (sysops.length) {
    const sysOpList = groupList({
      groupName: getMessage("SysOps"),
      userNames: sysops
    });
    listWrap.append(sysOpList);
  }
  if (patrollers.length) {
    const patrollerList = groupList({
      groupName: getMessage("Patrollers"),
      userNames: patrollers
    });
    listWrap.append(patrollerList);
  }
  return listWrap;
};
//! src/OnlineAdmins/modules/doClick.ts
var doClick = async (event) => {
  event.preventDefault();
  const notify = (element, type = "info") => {
    return mw.notify(element, {
      tag: "onlineAdmins",
      type
    });
  };
  try {
    const {
      stewards,
      sysops,
      patrollers
    } = await getAdmins();
    if (stewards.length + sysops.length + patrollers.length) {
      notify($("<div>").append(onlineAdminsList({
        stewards,
        sysops,
        patrollers
      })));
    } else {
      notify(getMessage("NoOnline"), "warn");
    }
  } catch {
    notify(getMessage("Network error"), "error");
  }
};
//! src/OnlineAdmins/OnlineAdmins.ts
var addPortletLink = () => {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", getMessage("Online"), "t-onlineadmin");
  if (!element) {
    return;
  }
  $(element).find("a").on("click", (event) => {
    void doClick(event);
  });
};
$(addPortletLink);

})();

/* </nowiki> */

