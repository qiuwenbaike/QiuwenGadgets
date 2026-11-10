/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://meta.wikimedia.org/wiki/User:Xiplus/js/list-user-last-active.js}
 * @base {@link https://zh.wikipedia.org/w/index.php?title=MediaWiki:Gadget-CommentsinLocalTime.js&oldid=48314651}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ListUsersLastActive}
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

// dist/ListUsersLastActive/ListUsersLastActive.js
//! src/ListUsersLastActive/modules/util/adjustTime.ts
var addLeadingZero = (number) => {
  const numberString = typeof number === "number" && number < 10 ? `0${number.toString()}` : number.toString();
  return numberString;
};
var adjustTime = (time) => {
  let date;
  let today = /* @__PURE__ */ new Date();
  const yesterday = /* @__PURE__ */ new Date();
  const tomorrow = /* @__PURE__ */ new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const utcOffset = -1 * time.getTimezoneOffset() / 60;
  const utcOffsetToString = utcOffset >= 0 ? `+${utcOffset}` : `−${Math.abs(utcOffset)}`;
  const year = time.getFullYear();
  const month = addLeadingZero(time.getMonth() + 1);
  const day = time.getDate();
  const hour = Number.parseInt(time.getHours().toString(), 10);
  const minute = addLeadingZero(time.getMinutes());
  if (year === today.getFullYear() && month === addLeadingZero(today.getMonth() + 1) && day === today.getDate()) {
    date = "今天";
  } else if (year === yesterday.getFullYear() && month === addLeadingZero(yesterday.getMonth() + 1) && day === yesterday.getDate()) {
    date = "昨天";
  } else if (year === tomorrow.getFullYear() && month === addLeadingZero(tomorrow.getMonth() + 1) && day === tomorrow.getDate()) {
    date = "明天";
  } else {
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    date = `${year}年${addLeadingZero(month)}月${addLeadingZero(day)}日`;
  }
  const hourMinute = `${addLeadingZero(hour)}:${minute} `;
  return `${date}, ${hourMinute} (UTC${utcOffsetToString})`;
};
//! src/ListUsersLastActive/options.json
var version = "2.0";
//! src/ListUsersLastActive/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`ListUsersLastActive/${version}`);
//! src/ListUsersLastActive/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "(": (0, import_ext_gadget2.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget2.localize)({
      en: ") ",
      zh: "）"
    }),
    "Last active on": (0, import_ext_gadget2.localize)({
      en: "Last active on $1",
      "zh-hans": "最后操作于$1",
      "zh-hant": "最後動作於$1"
    }),
    "Never active": (0, import_ext_gadget2.localize)({
      en: "Never active",
      "zh-hans": "从未有操作",
      "zh-hant": "從未有動作"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ListUsersLastActive/modules/checkLastActive.ts
var queryUserContribs = async (ucuser) => {
  const params = {
    ucuser,
    action: "query",
    format: "json",
    formatversion: "2",
    list: "usercontribs",
    ucdir: "older",
    uclimit: 1,
    ucprop: "timestamp",
    smaxage: 600,
    maxage: 600
  };
  const response = await api.get(params);
  return response;
};
var queryLogEvents = async (leuser) => {
  const params = {
    leuser,
    action: "query",
    format: "json",
    formatversion: "2",
    list: "logevents",
    lelimit: 1,
    leprop: "timestamp",
    smaxage: 600,
    maxage: 600
  };
  const response = await api.get(params);
  return response;
};
var checkLastActive = async ($element) => {
  const userName = $element.find(".mw-userlink > bdi").text();
  let maxDate;
  try {
    const userContribs = await queryUserContribs(userName);
    if (userContribs["query"].usercontribs[0]) {
      maxDate = new Date(userContribs["query"].usercontribs[0].timestamp);
    }
    const logEvents = await queryLogEvents(userName);
    if (logEvents["query"].logevents[0]) {
      const date = new Date(logEvents["query"].logevents[0].timestamp);
      if (!maxDate || date > maxDate) {
        maxDate = date;
      }
    }
    const lastActiveMessage = getMessage("(") + (maxDate ? getMessage("Last active on").replace("$1", adjustTime(maxDate)) : getMessage("Never active")) + getMessage(")");
    $element.append(lastActiveMessage);
  } catch (error) {
    console.error("[ListUsersLastActive] Ajax error:", error);
  }
};
//! src/ListUsersLastActive/ListUsersLastActive.ts
var import_ext_gadget3 = require("ext.gadget.Util");
void (0, import_ext_gadget3.getBody)().then(($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Listusers") {
    return;
  }
  for (const element of $body.find("#mw-content-text>ul>li")) {
    void checkLastActive($(element));
  }
});

})();

/* </nowiki> */

