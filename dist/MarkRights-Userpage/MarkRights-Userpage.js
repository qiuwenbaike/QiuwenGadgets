/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-whoisactive.css}
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocationReader}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: MIT
 *
 * - The "check" icon from @wikimedia/codex-icons
 * - The "checkAll" icon from @wikimedia/codex-icons
 * - The "download" icon from @wikimedia/codex-icons
 * - The "edit" icon from @wikimedia/codex-icons
 * - The "eyeClosed" icon from @wikimedia/codex-icons
 * - The "globe" icon from @wikimedia/codex-icons
 * - The "home" icon from @wikimedia/codex-icons
 * - The "key" icon from @wikimedia/codex-icons
 * - The "layout" icon from @wikimedia/codex-icons
 * - The "message" icon from @wikimedia/codex-icons
 * - The "recentChanges" icon from @wikimedia/codex-icons
 * - The "robot" icon from @wikimedia/codex-icons
 * - The "search" icon from @wikimedia/codex-icons
 * - The "settings" icon from @wikimedia/codex-icons
 * - The "star" icon from @wikimedia/codex-icons
 * - The "success" icon from @wikimedia/codex-icons
 * - The "templateAdd" icon from @wikimedia/codex-icons
 * - The "unFlag" icon from @wikimedia/codex-icons
 * - The "unLock" icon from @wikimedia/codex-icons
 * - The "update" icon from @wikimedia/codex-icons
 *
 * @license MIT
 */

/**
 * Copyright (c) 2011-2022 Wikimedia Design & OOUI team and other contributors.
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

// dist/MarkRights-Userpage/MarkRights-Userpage.js
//! src/MarkRights-Userpage/options.json
var elementId = "gadget-markrights_userpage";
var mountPointSelector = "#footer-info,.page-info";
var userNameSpaceNumber = 2;
var userTalkNameSpaceNumber = 3;
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
//! src/MarkRights-Userpage/modules/constant.ts
var CLASS_NAME = "gadget-markrights_userpage";
var IMPLICIT_GROUPS = ["*", "user", "autoconfirmed", "rnrsverify-confirmed", "bot"];
var TONE_MAP = {
  autoreviewer: "confirmed",
  bot: "editor",
  checkuser: "sysop",
  confirmed: "confirmed",
  eventsponsor: "patroller",
  flood: "confirmed",
  "interface-admin": "sysop",
  "ipblock-exempt": "confirmed",
  "massmessage-sender": "editor",
  patroller: "patroller",
  qiuwen: "steward",
  "rnrsverify-exempt": "confirmed",
  senioreditor: "editor",
  steward: "steward",
  suppress: "sysop",
  sysop: "sysop",
  templateeditor: "editor",
  transwiki: "editor"
};
//! src/MarkRights-Userpage/modules/getPermissions.ts
var import_ext_gadget2 = require("ext.gadget.MarkRights");
var import_vue = require("vue");
//! src/MarkRights-Userpage/modules/icons.ts
var cdxIconCheck = {
  path: "M18.154 3.837 8 16.8H6.65l-4.8-3.6 1.2-1.6 4.02 3.015 9.517-12.02z"
};
var cdxIconCheckAll = {
  path: "M14 17h-4v-2h4zm2.404-13.163L6.22 16.8H4.9L.1 13.2l1.2-1.6 4.02 3.015 9.517-12.02zM17 13h-4v-2h4zm3-4h-4V7h4z"
};
var cdxIconDownload = {
  path: "M19 19H1v-2h18zm-8-7.104 3.5-3.5 1.414 1.414-5.207 5.208H9.293L4.086 9.81 5.5 8.396l3.5 3.5V1h2z"
};
var cdxIconEdit = {
  path: "m15.4.4 4.2 4.2-3.2 3.2-4.2-4.2zM10.8 5 15 9.2l-8.6 8.6-4.5 1.5-1.2-1.2 1.5-4.5z"
};
var cdxIconEyeClosed = {
  path: "m19.254 17.84-1.414 1.414-3.64-3.64a7 7 0 01-9.15-.65L.793 10.707V9.292l3.542-3.543L.871 2.285 2.285.871zM2.914 9.999l3.55 3.55a5 5 0 006.302.63l-1.855-1.854a2.5 2.5 0 01-3.238-3.238L5.749 7.163zm4.724-6.604a7 7 0 017.311 1.64l4.258 4.257v1.415l-2.13 2.128-1.414-1.414 1.423-1.422-3.55-3.55A5 5 0 009.28 5.037z"
};
var cdxIconGlobe = {
  path: "M10 1a9 9 0 110 18 9 9 0 010-18M8.028 11c.1 1.846.473 3.431.97 4.552.295.661.594 1.073.824 1.292.081.077.14.117.178.138a1 1 0 00.178-.138c.23-.22.529-.63.823-1.292.498-1.12.87-2.706.97-4.552zm-4.956 0a7 7 0 004.122 5.413C6.557 15.001 6.13 13.11 6.025 11zm10.903 0c-.104 2.11-.533 4-1.17 5.413A7 7 0 0016.928 11zm-6.78-7.414A7 7 0 003.071 9h2.953c.104-2.11.531-4.001 1.17-5.414ZM10 3.016a1 1 0 00-.178.14c-.23.22-.53.63-.823 1.292-.498 1.12-.87 2.706-.97 4.552h3.943c-.101-1.846-.473-3.431-.971-4.552-.294-.661-.593-1.073-.823-1.292a1 1 0 00-.178-.14m2.805.57c.638 1.413 1.066 3.303 1.17 5.414h2.953a7 7 0 00-4.123-5.414"
};
var cdxIconHome = {
  path: "m19.707 10.293-1.414 1.414L17 10.414V20H3v-9.586l-1.293 1.293-1.414-1.414L10 .586zM5 8.414V18h3v-5h4v5h3V8.414l-5-5z"
};
var cdxIconLayout = {
  path: "M9 18H2V2h7zm-5-2h3V4H4zm14 2h-7v-7h7zm-5-2h3v-3h-3zm5-7h-7V2h7zm-5-2h3V4h-3z",
  shouldFlip: true
};
var cdxIconMessage = {
  path: "M20 17H0V3h20zm-10-4.212-8-6.5V15h16V6.288zm0-2.577L16.414 5H3.586z"
};
var cdxIconRecentChanges = {
  path: "m16.594 12.402-5.376 5.376-.096.04-1.768.706-.65-.65.707-1.768.04-.095 5.375-5.376zM7 17.01 1 17v-2l6 .01zM12 11H1V9h11zm7.422-1.426-1.414 1.414-1.768-1.767 1.414-1.414zM19 5H1V3h18z"
};
var cdxIconSearch = {
  path: "M8 1a7 7 0 015.605 11.191l5.102 5.102-1.414 1.414-5.102-5.102A7 7 0 118 1m0 2a5 5 0 100 10A5 5 0 008 3"
};
var cdxIconSettings = {
  path: "M11.835 3.505a6.7 6.7 0 011.46.603l2.362-1.18 1.414 1.415-1.18 2.361a6.7 6.7 0 01.603 1.46L19 9v2l-2.506.835a6.7 6.7 0 01-.603 1.46l1.18 2.362-1.414 1.414-2.362-1.18a6.7 6.7 0 01-1.46.603L11 19H9l-.836-2.506a6.7 6.7 0 01-1.46-.603l-2.361 1.18-1.414-1.414 1.18-2.362a6.7 6.7 0 01-.604-1.46L1 11V9l2.505-.836a6.7 6.7 0 01.603-1.46l-1.18-2.361 1.415-1.414 2.361 1.18a6.7 6.7 0 011.46-.604L9 1h2zM10 7a3 3 0 100 6 3 3 0 000-6"
};
var cdxIconStar = {
  path: "M12.9 7H19v1.588l-4.593 3.589L16.5 19h-2L10 15.5 5.5 19h-2l2.092-6.823L1 8.587V7h6.1l1.945-5.995h1.91zM8.6 9H4.5l3.415 2.435-1.289 4.17L10 13l3.373 2.605-1.288-4.17L15.5 9h-4.05L10 4.687z"
};
var cdxIconSuccess = {
  path: "M10 1a9 9 0 110 18 9 9 0 010-18M8.823 11.118 6.8 9.6l-1.2 1.6 2.8 2.1h1.1l4.905-5.956-1.561-1.25z"
};
var cdxIconTemplateAdd = {
  path: "M9 6H2v9h13v-3h2v5H0V4h9zm8-2h3v2h-3v3h-2V6h-3V4h3V1h2z",
  shouldFlip: true
};
var cdxIconUnFlag = {
  path: "m19.254 17.84-1.414 1.414L10.586 12H5v8H3V4.414L.871 2.285 2.285.871zM5 10h3.586L5 6.414zm12 2h-.758l-2-2H15V4H8.242l-2-2H17z"
};
var cdxIconUpdate = {
  path: "m12.009 13.695.002 1.388-4.694 4.88-1.441-1.385 3.065-3.188H0v-2h8.933l-3.057-3.164 1.438-1.39zm2.115-12.219L11.067 4.64H20v2h-8.941l3.065 3.188-1.441 1.386-4.694-4.881.002-1.388 4.694-4.86 1.439 1.39Z",
  shouldFlip: true
};
var cdxIconRobot = '<path d="M9 3h2v2h5.5A2.5 2.5 0 0119 7.5V15h-7v2h4a1 1 0 011 1v2H3v-2a1 1 0 011-1h4v-2H1V7.5A2.5 2.5 0 013.5 5H9M5.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3m9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3"/><circle cx="10" cy="2" r="2"/>';
var cdxIconKey = '<path d="M13.706 1.5C17.128 1.5 20 4.133 20 7.5s-2.872 6-6.294 6c-.65 0-1.28-.095-1.873-.27q-.007-.004-.016-.006L9.855 15H9v2H7v1.5H1l-1-1v-2.435L7.446 8.13a6 6 0 01-.034-.631c0-3.367 2.872-6 6.294-6Zm0 2c-2.426 0-4.294 1.844-4.294 4q0 .407.083.79l.12.555L2 15.935v.565h3V15h2v-2h2.086l2.3-2.081.584.24a4.5 4.5 0 001.736.341c2.426 0 4.294-1.844 4.294-4s-1.868-4-4.294-4"/><circle cx="13.75" cy="7.5" r="1.5"/>';
var cdxIconUnLock = '<path d="M11 15H9v-3h2z"/><path d="M10 1a4 4 0 014 4v3h3v11H3V8h9V5a2 2 0 10-4 0v.5H6V5a4 4 0 014-4M5 17h10v-7H5z"/>';
var GROUP_ICONS = {
  autoconfirmed: cdxIconCheckAll,
  autoreviewer: cdxIconUnFlag,
  bot: cdxIconRobot,
  checkuser: cdxIconSearch,
  confirmed: cdxIconCheck,
  eventsponsor: cdxIconStar,
  flood: cdxIconUpdate,
  "interface-admin": cdxIconLayout,
  "ipblock-exempt": cdxIconUnLock,
  "massmessage-sender": cdxIconMessage,
  patroller: cdxIconRecentChanges,
  qiuwen: cdxIconHome,
  "rnrsverify-exempt": cdxIconSuccess,
  senioreditor: cdxIconEdit,
  steward: cdxIconGlobe,
  suppress: cdxIconEyeClosed,
  sysop: cdxIconSettings,
  templateeditor: cdxIconTemplateAdd,
  transwiki: cdxIconDownload
};
var UNKNOWN_GROUP_ICON = cdxIconKey;
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
var CLASS_NAME2 = "gadget-markrights_userpage";
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    indicators: {
      type: Array,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const badges = (0, import_vue2.computed)(() => {
      return props.indicators.map(({
        group,
        text
      }) => {
        return {
          group,
          icon: GROUP_ICONS[group] ?? UNKNOWN_GROUP_ICON,
          text,
          tone: TONE_MAP[group]
        };
      });
    });
    const __returned__ = {
      CLASS_NAME: CLASS_NAME2,
      props,
      badges,
      get CdxIcon() {
        return import_codex.CdxIcon;
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
  class: "gadget-markrights_userpage__text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
    import_vue3.Fragment,
    null,
    (0, import_vue3.renderList)($setup.badges, (badge) => {
      return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("span", {
        key: badge.group,
        class: (0, import_vue3.normalizeClass)(["gadget-markrights_userpage__badge", badge.tone ? `${$setup.CLASS_NAME}__badge--${badge.tone}` : ""]),
        title: badge.text
      }, [(0, import_vue3.createVNode)($setup["CdxIcon"], {
        class: "gadget-markrights_userpage__icon",
        icon: badge.icon,
        size: "small"
      }, null, 8, ["icon"]), (0, import_vue3.createElementVNode)(
        "span",
        _hoisted_2,
        (0, import_vue3.toDisplayString)(badge.text),
        1
        /* TEXT */
      )], 10, _hoisted_1);
    }),
    128
    /* KEYED_FRAGMENT */
  );
}
//! src/MarkRights-Userpage/modules/App.vue
App_default.render = render;
App_default.__file = "src\\MarkRights-Userpage\\modules\\App.vue";
App_default.__scopeId = "data-v-3a157625";
var App_default2 = App_default;
//! src/MarkRights-Userpage/modules/appendIcon.ts
var import_vue4 = require("vue");
//! src/MarkRights-Userpage/modules/util/createFooterRoot.ts
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
//! src/MarkRights-Userpage/modules/appendIcon.ts
var appendIcon = (indicators) => {
  if (!indicators.length) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  const root = createFooterRoot(mountPoint);
  (0, import_vue4.createApp)(App_default2, {
    indicators
  }).mount(root);
};
//! src/MarkRights-Userpage/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    qiuwen: (0, import_ext_gadget.localize)({
      en: "Webmaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    steward: (0, import_ext_gadget.localize)({
      en: "Steward",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    checkuser: (0, import_ext_gadget.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核员",
      "zh-hant": "用戶查核員"
    }),
    suppress: (0, import_ext_gadget.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    transwiki: (0, import_ext_gadget.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autoreviewer: (0, import_ext_gadget.localize)({
      en: "Exempted from page patrol",
      "zh-hans": "巡查豁免",
      "zh-hant": "巡查豁免者"
    }),
    senioreditor: (0, import_ext_gadget.localize)({
      en: "Senior Editor",
      "zh-hans": "资深编者",
      "zh-hant": "資深編者"
    }),
    eventsponsor: (0, import_ext_gadget.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget.localize)({
      en: "Exempted from phone number verification",
      "zh-hans": "手机号验证豁免",
      "zh-hant": "手機號驗證豁免"
    }),
    bot: (0, import_ext_gadget.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "ipblock-exempt": (0, import_ext_gadget.localize)({
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
//! src/MarkRights-Userpage/modules/getPermissions.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var buildIndicators = async (wgRelevantUserName) => {
  if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
    return [];
  }
  if (WEBMASTER_LIST.includes(wgRelevantUserName)) {
    return [{
      group: "qiuwen",
      text: getMessage("qiuwen")
    }];
  }
  const localGroupsMap = await (0, import_ext_gadget2.getLocalUserGroups)([wgRelevantUserName]);
  const localGroups = localGroupsMap[wgRelevantUserName] ?? [];
  const globalGroupsMap = await (0, import_ext_gadget2.getGlobalUserGroups)([wgRelevantUserName]);
  const globalGroups = globalGroupsMap[wgRelevantUserName] ?? [];
  return (0, import_ext_gadget3.uniqueArray)([...localGroups, ...globalGroups]).filter((group) => {
    return !IMPLICIT_GROUPS.includes(group);
  }).map((group) => {
    const userRight = group;
    return {
      group: userRight,
      text: getMessage(userRight)
    };
  });
};
var getPermissions = async (wgRelevantUserName) => {
  try {
    const indicators = await buildIndicators(wgRelevantUserName);
    appendIcon(indicators);
  } catch (error) {
    console.error("[MarkRights-Userpage] Ajax error in `getPermissions` method:", error);
  }
};
//! src/MarkRights-Userpage/MarkRights-Userpage.ts
(function markRightsUserPage() {
  const {
    wgAction,
    wgNamespaceNumber,
    wgPageName,
    wgRelevantUserName
  } = mw.config.get();
  if (!wgRelevantUserName || ![userNameSpaceNumber, userTalkNameSpaceNumber].includes(wgNamespaceNumber) || !(wgAction === "view")) {
    return;
  }
  if (mw.util.isIPv4Address(wgRelevantUserName) || mw.util.isIPv6Address(wgRelevantUserName)) {
    return;
  }
  const relevantUserPageName = new mw.Title(wgRelevantUserName, userNameSpaceNumber).toText();
  const pageName = new mw.Title(wgPageName).toText();
  if (pageName !== relevantUserPageName) {
    return;
  }
  void getPermissions(wgRelevantUserName);
})();

})();

/* </nowiki> */

