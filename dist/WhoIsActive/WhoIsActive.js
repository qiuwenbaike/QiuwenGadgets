/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.js}
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/WhoIsActive}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: MIT
 *
 * - The "userContributions" icon from @wikimedia/codex-icons
 *
 * @license MIT
 */

/**
 * Copyright 2011-2022 Codex Team and other contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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

// dist/WhoIsActive/WhoIsActive.js
//! src/WhoIsActive/options.json
var elementId = "gadget-whoisactive";
var mountPointSelector = "#footer-info,.page-info";
var storageKey = "ext.gadget.WhoIsActive_whoIsActive-";
var userNameSpaceNumber = 2;
var version = "3.0";
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
//! src/WhoIsActive/modules/constant.ts
var CLASS_NAME = "gadget-whoisactive";
var TONE_MAP = {
  OverAYear: "error",
  ThisMonth: "info",
  ThisSeason: "purple",
  ThisSemiyear: "orange",
  ThisWeek: "success",
  ThisYear: "warning"
};
//! src/WhoIsActive/modules/icons.ts
var USER_CONTRIBUTIONS_ICON = '<path d="M1 3h18v2H1zm0 6h10v2H1zm0 6h8v2H1zm10 2v-1a3 3 0 013-3h2a3 3 0 013 3v1z"/><circle cx="15" cy="10" r="2"/>';
var import_vue2 = require("vue");
//! src/WhoIsActive/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    OverAYear: (0, import_ext_gadget.localize)({
      en: "Edited over a year ago",
      "zh-hans": "一年未有编辑",
      "zh-hant": "一年未有編輯"
    }),
    ThisWeek: (0, import_ext_gadget.localize)({
      en: "Edited this week",
      "zh-hans": "一周内有编辑",
      "zh-hant": "一周內有編輯"
    }),
    ThisMonth: (0, import_ext_gadget.localize)({
      en: "Edited this month",
      "zh-hans": "一月内有编辑",
      "zh-hant": "一月內有編輯"
    }),
    ThisSeason: (0, import_ext_gadget.localize)({
      en: "Edited in 3 months",
      "zh-hans": "三月内有编辑",
      "zh-hant": "三月內有編輯"
    }),
    ThisSemiyear: (0, import_ext_gadget.localize)({
      en: "Edited in half a year",
      "zh-hans": "半年内有编辑",
      "zh-hant": "半年內有編輯"
    }),
    ThisYear: (0, import_ext_gadget.localize)({
      en: "Edited this year",
      "zh-hans": "一年内有编辑",
      "zh-hant": "一年內有編輯"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var CLASS_NAME2 = "gadget-whoisactive";
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    timeSpan: {
      type: String,
      required: true
    },
    indicator: {
      type: Boolean,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const toneClassName = (0, import_vue2.computed)(() => {
      return `${CLASS_NAME2}__badge--${TONE_MAP[props.timeSpan]}`;
    });
    const text = (0, import_vue2.computed)(() => {
      return getMessage(props.timeSpan);
    });
    const __returned__ = {
      CLASS_NAME: CLASS_NAME2,
      props,
      toneClassName,
      text,
      get CdxIcon() {
        return import_codex.CdxIcon;
      },
      get USER_CONTRIBUTIONS_ICON() {
        return USER_CONTRIBUTIONS_ICON;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue3 = require("vue");
var _hoisted_1 = ["title"];
var _hoisted_2 = {
  class: "gadget-whoisactive__text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("span", {
    class: (0, import_vue3.normalizeClass)(["gadget-whoisactive__badge", [$setup.toneClassName, {
      "gadget-whoisactive__badge--compact": $props.indicator
    }]]),
    title: $setup.text
  }, [(0, import_vue3.createVNode)($setup["CdxIcon"], {
    class: "gadget-whoisactive__icon",
    icon: $setup.USER_CONTRIBUTIONS_ICON,
    size: "small"
  }, null, 8, ["icon"]), (0, import_vue3.createElementVNode)(
    "span",
    _hoisted_2,
    (0, import_vue3.toDisplayString)($setup.text),
    1
    /* TEXT */
  )], 10, _hoisted_1);
}
//! src/WhoIsActive/modules/App.vue
App_default.render = render;
App_default.__file = "src\\WhoIsActive\\modules\\App.vue";
App_default.__scopeId = "data-v-9d775533";
var App_default2 = App_default;
//! src/WhoIsActive/modules/util/appendMarkerToUserLinks.ts
var import_vue4 = require("vue");
//! src/WhoIsActive/modules/util/createLinkRoot.ts
var createLinkRoot = (userLink) => {
  const root = document.createElement("span");
  root.classList.add(CLASS_NAME, "noprint");
  userLink.after(root);
  return root;
};
//! src/WhoIsActive/modules/util/getTimeSpan.ts
var MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1e3;
var getTimeSpan = (timestamp) => {
  const date = Date.parse(timestamp);
  const diff = Math.floor((Date.now() - date) / MILLISECONDS_PER_DAY);
  if (diff > 365) {
    return "OverAYear";
  } else if (diff > 183) {
    return "ThisYear";
  } else if (diff > 92) {
    return "ThisSemiyear";
  } else if (diff > 31) {
    return "ThisSeason";
  } else if (diff > 7) {
    return "ThisMonth";
  }
  return "ThisWeek";
};
//! src/WhoIsActive/modules/util/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)(`WhoIsActive/${version}`);
//! src/WhoIsActive/modules/util/getTimestamp.ts
var getUserContribsTimestamp = async (ucuser) => {
  let timestamp;
  try {
    const params = {
      action: "query",
      format: "json",
      list: "usercontribs",
      uclimit: 1,
      smaxage: 600,
      maxage: 600,
      ucuser
    };
    const result = await api.get(params);
    const {
      usercontribs
    } = result["query"];
    if (usercontribs.length) {
      ({
        timestamp
      } = usercontribs[0]);
    }
  } catch (error) {
    console.error("[WhoIsActive] Ajax error:", error);
  }
  return timestamp;
};
var getLogEventsTimestamp = async (leuser) => {
  let timestamp;
  try {
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
    const result = await api.get(params);
    const {
      logevents
    } = result["query"];
    if (logevents.length) {
      ({
        timestamp
      } = logevents[0]);
    }
  } catch (error) {
    console.error("[WhoIsActive] Ajax error:", error);
  }
  return timestamp;
};
var getTimestamp = async (username) => {
  let timestamp;
  if (mw.storage.getObject(storageKey + username)) {
    timestamp = mw.storage.getObject(storageKey + username);
  } else {
    const ucTimestamp = await getUserContribsTimestamp(username);
    let ucDate;
    if (ucTimestamp) {
      ucDate = new Date(ucTimestamp);
      timestamp = ucTimestamp;
    }
    const leTimestamp = await getLogEventsTimestamp(username);
    let leDate;
    if (leTimestamp) {
      leDate = new Date(leTimestamp);
      if (!ucDate || leDate > ucDate) {
        timestamp = leTimestamp;
      }
    }
  }
  if (timestamp) {
    mw.storage.setObject(storageKey + username, timestamp, 30 * 60);
  }
  return timestamp;
};
//! src/WhoIsActive/modules/util/appendMarkerToUserLinks.ts
var appendMarkerToUserLinks = async ({
  userName,
  elements
}) => {
  if (SYSTEM_SCRIPT_LIST.includes(userName)) {
    return;
  }
  const timestamp = await getTimestamp(userName);
  if (!timestamp) {
    return;
  }
  const timeSpan = getTimeSpan(timestamp);
  for (const element of elements) {
    (0, import_vue4.createApp)(App_default2, {
      timeSpan,
      indicator: true
    }).mount(createLinkRoot(element));
  }
};
//! src/WhoIsActive/modules/util/appendMarkerToUserPage.ts
var import_vue5 = require("vue");
//! src/WhoIsActive/modules/util/createFooterRoot.ts
var createFooterRoot = (mountPoint) => {
  const {
    skin
  } = mw.config.get();
  const isCitizen = skin === "citizen";
  const isListItem = ["gongbi", "vector", "vector-2022"].includes(skin) || Boolean(document.querySelector("ul#footer-info"));
  const root = document.createElement(isCitizen ? "section" : isListItem ? "li" : "div");
  root.id = elementId;
  root.classList.add(CLASS_NAME, "noprint");
  if (isCitizen) {
    root.classList.add("page-info__item", "citizen-footer__pageinfo-item");
  }
  mountPoint.prepend(root);
  return root;
};
//! src/WhoIsActive/modules/util/appendMarkerToUserPage.ts
var appendMarkerToUserPage = async (userName) => {
  if (SYSTEM_SCRIPT_LIST.includes(userName)) {
    return;
  }
  const timestamp = await getTimestamp(userName);
  if (!timestamp) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  const timeSpan = getTimeSpan(timestamp);
  (0, import_vue5.createApp)(App_default2, {
    timeSpan,
    indicator: false
  }).mount(createFooterRoot(mountPoint));
};
//! src/WhoIsActive/modules/util/getUserLinks.ts
var getUserLinks = (content) => {
  const userLinks = {};
  const {
    wgFormattedNamespaces
  } = mw.config.get();
  const {
    2: localizedUserNamespace,
    3: localizedUserTalkNamespace
  } = wgFormattedNamespaces;
  const selector = ['a[title^="User:"]:not(.mw-changeslist-date):not([href*="undo"])', `a[title^="${localizedUserNamespace}:"]:not(.mw-changeslist-date):not([href*="undo"])`].join(",");
  const userRegex = new RegExp(`((User|User[_ ]talk)|(${localizedUserNamespace}|${localizedUserTalkNamespace})):(.*?)(?=&|$)`);
  const namespaceRegex = new RegExp(`^((User|User[_ ]talk)|(${localizedUserNamespace}|${localizedUserTalkNamespace})):`, "i");
  for (const element of content.querySelectorAll(selector)) {
    const href = decodeURI(element.getAttribute("href") ?? "");
    const userNameMatchArray = href.match(userRegex);
    if (!userNameMatchArray) {
      continue;
    }
    let [userName] = userNameMatchArray;
    userName = userName.replace(namespaceRegex, "").replace(/#.*$/i, "");
    if (userName.includes("/")) {
      continue;
    }
    const elements = userLinks[userName] ?? [];
    elements[elements.length] = element;
    userLinks[userName] = elements;
  }
  return userLinks;
};
//! src/WhoIsActive/modules/core.ts
var whoIsActiveUserLinks = ($content) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName === "Recentchanges") {
    return;
  }
  const content = $content[0];
  if (!content) {
    return;
  }
  const userLinks = getUserLinks(content);
  for (const [userName, elements] of Object.entries(userLinks)) {
    void appendMarkerToUserLinks({
      userName,
      elements
    });
  }
};
var whoIsActiveUserPage = () => {
  const {
    wgAction,
    wgNamespaceNumber,
    wgPageName,
    wgRelevantUserName
  } = mw.config.get();
  if (!wgRelevantUserName || wgNamespaceNumber !== userNameSpaceNumber || wgAction !== "view") {
    return;
  }
  const relevantUserPageName = new mw.Title(wgRelevantUserName, userNameSpaceNumber).toText();
  const pageName = new mw.Title(wgPageName).toText();
  if (relevantUserPageName !== pageName) {
    return;
  }
  void appendMarkerToUserPage(wgRelevantUserName);
};
//! src/WhoIsActive/WhoIsActive.ts
(function whoIsActiveLoad() {
  mw.hook("wikipage.content").add(whoIsActiveUserLinks);
  void whoIsActiveUserPage();
})();

})();

/* </nowiki> */

