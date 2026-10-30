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

// dist/MarkRights-Userpage/MarkRights-Userpage.js
//! src/MarkRights-Userpage/options.json
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
var elementId = "gadget-markrights_userpage";
var mountPointSelector = "#footer-info,.page-info";
var userNameSpaceNumber = 2;
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
        var _GROUP_ICONS$group;
        return {
          group,
          icon: (_GROUP_ICONS$group = GROUP_ICONS[group]) !== null && _GROUP_ICONS$group !== void 0 ? _GROUP_ICONS$group : UNKNOWN_GROUP_ICON,
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
        class: (0, import_vue3.normalizeClass)(["gadget-markrights_userpage__badge", badge.tone ? "".concat($setup.CLASS_NAME, "__badge--").concat(badge.tone) : ""]),
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
var buildIndicators = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (wgRelevantUserName) {
    var _localGroupsMap$wgRel, _globalGroupsMap$wgRe;
    if (SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName)) {
      return [];
    }
    if (WEBMASTER_LIST.includes(wgRelevantUserName)) {
      return [{
        group: "qiuwen",
        text: getMessage("qiuwen")
      }];
    }
    const localGroupsMap = yield (0, import_ext_gadget2.getLocalUserGroups)([wgRelevantUserName]);
    const localGroups = (_localGroupsMap$wgRel = localGroupsMap[wgRelevantUserName]) !== null && _localGroupsMap$wgRel !== void 0 ? _localGroupsMap$wgRel : [];
    const globalGroupsMap = yield (0, import_ext_gadget2.getGlobalUserGroups)([wgRelevantUserName]);
    const globalGroups = (_globalGroupsMap$wgRe = globalGroupsMap[wgRelevantUserName]) !== null && _globalGroupsMap$wgRe !== void 0 ? _globalGroupsMap$wgRe : [];
    return (0, import_ext_gadget3.uniqueArray)([...localGroups, ...globalGroups]).filter((group) => {
      return !IMPLICIT_GROUPS.includes(group);
    }).map((group) => {
      const userRight = group;
      return {
        group: userRight,
        text: getMessage(userRight)
      };
    });
  });
  return function buildIndicators2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var getPermissions = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (wgRelevantUserName) {
    try {
      const indicators = yield buildIndicators(wgRelevantUserName);
      appendIcon(indicators);
    } catch (error) {
      console.error("[MarkRights-Userpage] Ajax error in `getPermissions` method:", error);
    }
  });
  return function getPermissions2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/MarkRights-Userpage/MarkRights-Userpage.ts
(function markRightsUserPage() {
  const {
    wgAction,
    wgNamespaceNumber,
    wgPageName,
    wgRelevantUserName
  } = mw.config.get();
  if (!wgRelevantUserName || !(wgNamespaceNumber === userNameSpaceNumber) || !(wgAction === "view")) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMtVXNlcnBhZ2Uvb3B0aW9ucy5qc29uIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9nZXRQZXJtaXNzaW9ucy50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL2ljb25zLnRzIiwgImRpc3QvTWFya1JpZ2h0cy1Vc2VycGFnZS9zcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL0FwcC52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXE1hcmtSaWdodHMtVXNlcnBhZ2VcXG1vZHVsZXNcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9tb2R1bGVzL0FwcC52dWUiLCAic3JjL01hcmtSaWdodHMtVXNlcnBhZ2UvbW9kdWxlcy9hcHBlbmRJY29uLnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvdXRpbC9jcmVhdGVGb290ZXJSb290LnRzIiwgInNyYy9NYXJrUmlnaHRzLVVzZXJwYWdlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya1JpZ2h0cy1Vc2VycGFnZS9NYXJrUmlnaHRzLVVzZXJwYWdlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiZWxlbWVudElkXCI6IFwiZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInVzZXJOYW1lU3BhY2VOdW1iZXJcIjogMixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJjb25zdCBTWVNURU1fU0NSSVBUX0xJU1Q6IHN0cmluZ1tdID0gW1xuXHQn5rul55So6L+H5ruk5ZmoJyxcblx0J+axgumXu+e8luiAhScsXG5cdCfmsYLpl7vnmb7np5HnpL7ljLonLFxuXHQnRXhhbXBsZScsXG5cdCdFeHRlcm5hbCBjb250cmlidXRvcnMnLFxuXHQnTWFpbnRlbmFuY2Ugc2NyaXB0Jyxcblx0J01lZGlhV2lraSBkZWZhdWx0Jyxcblx0J01lZGlhV2lraSBtZXNzYWdlIGRlbGl2ZXJ5Jyxcblx0J05ldyB1c2VyIHBhZ2UnLFxuXTtcbmNvbnN0IFdFQk1BU1RFUl9MSVNUOiBzdHJpbmdbXSA9IFsnUWl1V2VuJywgJ1FpdVdlbiBmb3IgQWNjb3VudHMnLCAnUWl1d2VuU29jaWFsTWVkaWEnXTtcblxuZXhwb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfTtcbiIsICJpbXBvcnQgdHlwZSB7SW5kaWNhdG9yVG9uZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnfi9NYXJrUmlnaHRzL21vZHVsZXMvdHlwZXMnO1xuXG5jb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnO1xuXG4vKipcbiAqIEdyb3VwcyB0aGF0IGFyZSBlaXRoZXIgaW1wbGljaXRseSBncmFudGVkIHRvIGV2ZXJ5IHJlZ2lzdGVyZWQgdXNlciBvciBhbHJlYWR5XG4gKiBtYXJrZWQgYnkgYW5vdGhlciBnYWRnZXQsIGhlbmNlIHRoZXJlIGlzIG5vIG5lZWQgdG8gZGlzcGxheSB0aGVtIGhlcmUuXG4gKi9cbmNvbnN0IElNUExJQ0lUX0dST1VQUzogc3RyaW5nW10gPSBbJyonLCAndXNlcicsICdhdXRvY29uZmlybWVkJywgJ3JucnN2ZXJpZnktY29uZmlybWVkJywgJ2JvdCddO1xuXG4vKipcbiAqIE1hcHMgYSB1c2VyIGdyb3VwIHRvIHRoZSB2aXN1YWwgdG9uZSBvZiBpdHMgaW5kaWNhdG9yIGJhZGdlLlxuICpcbiAqIFVzZXIgZ3JvdXBzIHRoYXQgYXJlIG1pc3NpbmcgaGVyZSBmYWxsIGJhY2sgdG8gdGhlIG5ldXRyYWwgZ3JheSB0b25lLlxuICovXG5jb25zdCBUT05FX01BUDogUGFydGlhbDxSZWNvcmQ8VXNlclJpZ2h0cywgSW5kaWNhdG9yVG9uZT4+ID0ge1xuXHRhdXRvcmV2aWV3ZXI6ICdjb25maXJtZWQnLFxuXHRib3Q6ICdlZGl0b3InLFxuXHRjaGVja3VzZXI6ICdzeXNvcCcsXG5cdGNvbmZpcm1lZDogJ2NvbmZpcm1lZCcsXG5cdGV2ZW50c3BvbnNvcjogJ3BhdHJvbGxlcicsXG5cdGZsb29kOiAnY29uZmlybWVkJyxcblx0J2ludGVyZmFjZS1hZG1pbic6ICdzeXNvcCcsXG5cdCdpcGJsb2NrLWV4ZW1wdCc6ICdjb25maXJtZWQnLFxuXHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogJ2VkaXRvcicsXG5cdHBhdHJvbGxlcjogJ3BhdHJvbGxlcicsXG5cdHFpdXdlbjogJ3N0ZXdhcmQnLFxuXHQncm5yc3ZlcmlmeS1leGVtcHQnOiAnY29uZmlybWVkJyxcblx0c2VuaW9yZWRpdG9yOiAnZWRpdG9yJyxcblx0c3Rld2FyZDogJ3N0ZXdhcmQnLFxuXHRzdXBwcmVzczogJ3N5c29wJyxcblx0c3lzb3A6ICdzeXNvcCcsXG5cdHRlbXBsYXRlZWRpdG9yOiAnZWRpdG9yJyxcblx0dHJhbnN3aWtpOiAnZWRpdG9yJyxcbn07XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH0gZnJvbSAnfi9HZW9Mb2NhdGlvbi9tb2R1bGVzL2NvbnN0YW50JztcbmV4cG9ydCB7Q0xBU1NfTkFNRSwgSU1QTElDSVRfR1JPVVBTLCBUT05FX01BUH07XG4iLCAiaW1wb3J0IHtJTVBMSUNJVF9HUk9VUFMsIFNZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRHbG9iYWxVc2VyR3JvdXBzLCBnZXRMb2NhbFVzZXJHcm91cHN9IGZyb20gJ2V4dC5nYWRnZXQuTWFya1JpZ2h0cyc7XG5pbXBvcnQgdHlwZSB7SW5kaWNhdG9yfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2FwcGVuZEljb259IGZyb20gJy4vYXBwZW5kSWNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vKipcbiAqIEBwYXJhbSB3Z1JlbGV2YW50VXNlck5hbWUgVGhlIG5hbWUgb2YgdGhlIHVzZXIgb3duaW5nIHRoZSBjdXJyZW50IHVzZXIgcGFnZS5cbiAqIEByZXR1cm5zIFRoZSBpbmRpY2F0b3JzIHRvIGRpc3BsYXksIGFuIGVtcHR5IGFycmF5IHdoZW4gdGhlcmUgaXMgbm9uZS5cbiAqL1xuY29uc3QgYnVpbGRJbmRpY2F0b3JzID0gYXN5bmMgKHdnUmVsZXZhbnRVc2VyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxJbmRpY2F0b3JbXT4gPT4ge1xuXHRpZiAoU1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKHdnUmVsZXZhbnRVc2VyTmFtZSkpIHtcblx0XHQvLyBBbHJlYWR5IHNob3duIGluIEdlb0xvY2F0aW9uUmVhZGVyXG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0aWYgKFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKHdnUmVsZXZhbnRVc2VyTmFtZSkpIHtcblx0XHRyZXR1cm4gW3tncm91cDogJ3FpdXdlbicsIHRleHQ6IGdldE1lc3NhZ2UoJ3FpdXdlbicpfV07XG5cdH1cblxuXHRjb25zdCBsb2NhbEdyb3Vwc01hcCA9IGF3YWl0IGdldExvY2FsVXNlckdyb3Vwcyhbd2dSZWxldmFudFVzZXJOYW1lXSk7XG5cdGNvbnN0IGxvY2FsR3JvdXBzOiBzdHJpbmdbXSA9IGxvY2FsR3JvdXBzTWFwW3dnUmVsZXZhbnRVc2VyTmFtZV0gPz8gW107XG5cblx0Y29uc3QgZ2xvYmFsR3JvdXBzTWFwID0gYXdhaXQgZ2V0R2xvYmFsVXNlckdyb3Vwcyhbd2dSZWxldmFudFVzZXJOYW1lXSk7XG5cdGNvbnN0IGdsb2JhbEdyb3Vwczogc3RyaW5nW10gPSBnbG9iYWxHcm91cHNNYXBbd2dSZWxldmFudFVzZXJOYW1lXSA/PyBbXTtcblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoWy4uLmxvY2FsR3JvdXBzLCAuLi5nbG9iYWxHcm91cHNdKVxuXHRcdC5maWx0ZXIoKGdyb3VwKSA9PiB7XG5cdFx0XHRyZXR1cm4gIUlNUExJQ0lUX0dST1VQUy5pbmNsdWRlcyhncm91cCk7XG5cdFx0fSlcblx0XHQubWFwPEluZGljYXRvcj4oKGdyb3VwKSA9PiB7XG5cdFx0XHRjb25zdCB1c2VyUmlnaHQ6IFVzZXJSaWdodHMgPSBncm91cCBhcyBVc2VyUmlnaHRzO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRncm91cDogdXNlclJpZ2h0LFxuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKHVzZXJSaWdodCksXG5cdFx0XHR9O1xuXHRcdH0pO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gd2dSZWxldmFudFVzZXJOYW1lIFRoZSBuYW1lIG9mIHRoZSB1c2VyIG93bmluZyB0aGUgY3VycmVudCB1c2VyIHBhZ2UuXG4gKi9cbmNvbnN0IGdldFBlcm1pc3Npb25zID0gYXN5bmMgKHdnUmVsZXZhbnRVc2VyTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgaW5kaWNhdG9ycyA9IGF3YWl0IGJ1aWxkSW5kaWNhdG9ycyh3Z1JlbGV2YW50VXNlck5hbWUpO1xuXG5cdFx0YXBwZW5kSWNvbihpbmRpY2F0b3JzKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbTWFya1JpZ2h0cy1Vc2VycGFnZV0gQWpheCBlcnJvciBpbiBgZ2V0UGVybWlzc2lvbnNgIG1ldGhvZDonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7Z2V0UGVybWlzc2lvbnN9O1xuIiwgImltcG9ydCB0eXBlIHtJbmRpY2F0b3JJY29ufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICd+L01hcmtSaWdodHMvbW9kdWxlcy90eXBlcyc7XG5cbi8qKlxuICogU1ZHIHBhdGggZGF0YSBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgaWNvbnMgYXJlIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cblxuLyoqIFBhdGggZm9yIGBjZHhJY29uQ2hlY2tgLiAqL1xuY29uc3QgY2R4SWNvbkNoZWNrOiBJbmRpY2F0b3JJY29uID0ge1xuXHRwYXRoOiAnTTE4LjE1NCAzLjgzNyA4IDE2LjhINi42NWwtNC44LTMuNiAxLjItMS42IDQuMDIgMy4wMTUgOS41MTctMTIuMDJ6Jyxcbn07XG5cbi8qKiBQYXRoIGZvciBgY2R4SWNvbkNoZWNrQWxsYC4gKi9cbmNvbnN0IGNkeEljb25DaGVja0FsbDogSW5kaWNhdG9ySWNvbiA9IHtcblx0cGF0aDogJ00xNCAxN2gtNHYtMmg0em0yLjQwNC0xMy4xNjNMNi4yMiAxNi44SDQuOUwuMSAxMy4ybDEuMi0xLjYgNC4wMiAzLjAxNSA5LjUxNy0xMi4wMnpNMTcgMTNoLTR2LTJoNHptMy00aC00VjdoNHonLFxufTtcblxuLyoqIFBhdGggZm9yIGBjZHhJY29uRG93bmxvYWRgLiAqL1xuY29uc3QgY2R4SWNvbkRvd25sb2FkOiBJbmRpY2F0b3JJY29uID0ge1xuXHRwYXRoOiAnTTE5IDE5SDF2LTJoMTh6bS04LTcuMTA0IDMuNS0zLjUgMS40MTQgMS40MTQtNS4yMDcgNS4yMDhIOS4yOTNMNC4wODYgOS44MSA1LjUgOC4zOTZsMy41IDMuNVYxaDJ6Jyxcbn07XG5cbi8qKiBQYXRoIGZvciBgY2R4SWNvbkVkaXRgLiAqL1xuY29uc3QgY2R4SWNvbkVkaXQ6IEluZGljYXRvckljb24gPSB7XG5cdHBhdGg6ICdtMTUuNC40IDQuMiA0LjItMy4yIDMuMi00LjItNC4yek0xMC44IDUgMTUgOS4ybC04LjYgOC42LTQuNSAxLjUtMS4yLTEuMiAxLjUtNC41eicsXG59O1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25FeWVDbG9zZWRgLiAqL1xuY29uc3QgY2R4SWNvbkV5ZUNsb3NlZDogSW5kaWNhdG9ySWNvbiA9IHtcblx0cGF0aDogJ20xOS4yNTQgMTcuODQtMS40MTQgMS40MTQtMy42NC0zLjY0YTcgNyAwIDAxLTkuMTUtLjY1TC43OTMgMTAuNzA3VjkuMjkybDMuNTQyLTMuNTQzTC44NzEgMi4yODUgMi4yODUuODcxek0yLjkxNCA5Ljk5OWwzLjU1IDMuNTVhNSA1IDAgMDA2LjMwMi42M2wtMS44NTUtMS44NTRhMi41IDIuNSAwIDAxLTMuMjM4LTMuMjM4TDUuNzQ5IDcuMTYzem00LjcyNC02LjYwNGE3IDcgMCAwMTcuMzExIDEuNjRsNC4yNTggNC4yNTd2MS40MTVsLTIuMTMgMi4xMjgtMS40MTQtMS40MTQgMS40MjMtMS40MjItMy41NS0zLjU1QTUgNSAwIDAwOS4yOCA1LjAzN3onLFxufTtcblxuLyoqIFBhdGggZm9yIGBjZHhJY29uR2xvYmVgLiAqL1xuY29uc3QgY2R4SWNvbkdsb2JlOiBJbmRpY2F0b3JJY29uID0ge1xuXHRwYXRoOiAnTTEwIDFhOSA5IDAgMTEwIDE4IDkgOSAwIDAxMC0xOE04LjAyOCAxMWMuMSAxLjg0Ni40NzMgMy40MzEuOTcgNC41NTIuMjk1LjY2MS41OTQgMS4wNzMuODI0IDEuMjkyLjA4MS4wNzcuMTQuMTE3LjE3OC4xMzhhMSAxIDAgMDAuMTc4LS4xMzhjLjIzLS4yMi41MjktLjYzLjgyMy0xLjI5Mi40OTgtMS4xMi44Ny0yLjcwNi45Ny00LjU1MnptLTQuOTU2IDBhNyA3IDAgMDA0LjEyMiA1LjQxM0M2LjU1NyAxNS4wMDEgNi4xMyAxMy4xMSA2LjAyNSAxMXptMTAuOTAzIDBjLS4xMDQgMi4xMS0uNTMzIDQtMS4xNyA1LjQxM0E3IDcgMCAwMDE2LjkyOCAxMXptLTYuNzgtNy40MTRBNyA3IDAgMDAzLjA3MSA5aDIuOTUzYy4xMDQtMi4xMS41MzEtNC4wMDEgMS4xNy01LjQxNFpNMTAgMy4wMTZhMSAxIDAgMDAtLjE3OC4xNGMtLjIzLjIyLS41My42My0uODIzIDEuMjkyLS40OTggMS4xMi0uODcgMi43MDYtLjk3IDQuNTUyaDMuOTQzYy0uMTAxLTEuODQ2LS40NzMtMy40MzEtLjk3MS00LjU1Mi0uMjk0LS42NjEtLjU5My0xLjA3My0uODIzLTEuMjkyYTEgMSAwIDAwLS4xNzgtLjE0bTIuODA1LjU3Yy42MzggMS40MTMgMS4wNjYgMy4zMDMgMS4xNyA1LjQxNGgyLjk1M2E3IDcgMCAwMC00LjEyMy01LjQxNCcsXG59O1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25Ib21lYC4gKi9cbmNvbnN0IGNkeEljb25Ib21lOiBJbmRpY2F0b3JJY29uID0ge1xuXHRwYXRoOiAnbTE5LjcwNyAxMC4yOTMtMS40MTQgMS40MTRMMTcgMTAuNDE0VjIwSDN2LTkuNTg2bC0xLjI5MyAxLjI5My0xLjQxNC0xLjQxNEwxMCAuNTg2ek01IDguNDE0VjE4aDN2LTVoNHY1aDNWOC40MTRsLTUtNXonLFxufTtcblxuLyoqIFBhdGggZm9yIGBjZHhJY29uTGF5b3V0YC4gKi9cbmNvbnN0IGNkeEljb25MYXlvdXQ6IEluZGljYXRvckljb24gPSB7XG5cdHBhdGg6ICdNOSAxOEgyVjJoN3ptLTUtMmgzVjRINHptMTQgMmgtN3YtN2g3em0tNS0yaDN2LTNoLTN6bTUtN2gtN1YyaDd6bS01LTJoM1Y0aC0zeicsXG5cdHNob3VsZEZsaXA6IHRydWUsXG59O1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25NZXNzYWdlYC4gKi9cbmNvbnN0IGNkeEljb25NZXNzYWdlOiBJbmRpY2F0b3JJY29uID0ge1xuXHRwYXRoOiAnTTIwIDE3SDBWM2gyMHptLTEwLTQuMjEyLTgtNi41VjE1aDE2VjYuMjg4em0wLTIuNTc3TDE2LjQxNCA1SDMuNTg2eicsXG59O1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25SZWNlbnRDaGFuZ2VzYC4gKi9cbmNvbnN0IGNkeEljb25SZWNlbnRDaGFuZ2VzOiBJbmRpY2F0b3JJY29uID0ge1xuXHRwYXRoOiAnbTE2LjU5NCAxMi40MDItNS4zNzYgNS4zNzYtLjA5Ni4wNC0xLjc2OC43MDYtLjY1LS42NS43MDctMS43NjguMDQtLjA5NSA1LjM3NS01LjM3NnpNNyAxNy4wMSAxIDE3di0ybDYgLjAxek0xMiAxMUgxVjloMTF6bTcuNDIyLTEuNDI2LTEuNDE0IDEuNDE0LTEuNzY4LTEuNzY3IDEuNDE0LTEuNDE0ek0xOSA1SDFWM2gxOHonLFxufTtcblxuLyoqIFBhdGggZm9yIGBjZHhJY29uU2VhcmNoYC4gKi9cbmNvbnN0IGNkeEljb25TZWFyY2g6IEluZGljYXRvckljb24gPSB7XG5cdHBhdGg6ICdNOCAxYTcgNyAwIDAxNS42MDUgMTEuMTkxbDUuMTAyIDUuMTAyLTEuNDE0IDEuNDE0LTUuMTAyLTUuMTAyQTcgNyAwIDExOCAxbTAgMmE1IDUgMCAxMDAgMTBBNSA1IDAgMDA4IDMnLFxufTtcblxuLyoqIFBhdGggZm9yIGBjZHhJY29uU2V0dGluZ3NgLiAqL1xuY29uc3QgY2R4SWNvblNldHRpbmdzOiBJbmRpY2F0b3JJY29uID0ge1xuXHRwYXRoOiAnTTExLjgzNSAzLjUwNWE2LjcgNi43IDAgMDExLjQ2LjYwM2wyLjM2Mi0xLjE4IDEuNDE0IDEuNDE1LTEuMTggMi4zNjFhNi43IDYuNyAwIDAxLjYwMyAxLjQ2TDE5IDl2MmwtMi41MDYuODM1YTYuNyA2LjcgMCAwMS0uNjAzIDEuNDZsMS4xOCAyLjM2Mi0xLjQxNCAxLjQxNC0yLjM2Mi0xLjE4YTYuNyA2LjcgMCAwMS0xLjQ2LjYwM0wxMSAxOUg5bC0uODM2LTIuNTA2YTYuNyA2LjcgMCAwMS0xLjQ2LS42MDNsLTIuMzYxIDEuMTgtMS40MTQtMS40MTQgMS4xOC0yLjM2MmE2LjcgNi43IDAgMDEtLjYwNC0xLjQ2TDEgMTFWOWwyLjUwNS0uODM2YTYuNyA2LjcgMCAwMS42MDMtMS40NmwtMS4xOC0yLjM2MSAxLjQxNS0xLjQxNCAyLjM2MSAxLjE4YTYuNyA2LjcgMCAwMTEuNDYtLjYwNEw5IDFoMnpNMTAgN2EzIDMgMCAxMDAgNiAzIDMgMCAwMDAtNicsXG59O1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25TdGFyYC4gKi9cbmNvbnN0IGNkeEljb25TdGFyOiBJbmRpY2F0b3JJY29uID0ge1xuXHRwYXRoOiAnTTEyLjkgN0gxOXYxLjU4OGwtNC41OTMgMy41ODlMMTYuNSAxOWgtMkwxMCAxNS41IDUuNSAxOWgtMmwyLjA5Mi02LjgyM0wxIDguNTg3VjdoNi4xbDEuOTQ1LTUuOTk1aDEuOTF6TTguNiA5SDQuNWwzLjQxNSAyLjQzNS0xLjI4OSA0LjE3TDEwIDEzbDMuMzczIDIuNjA1LTEuMjg4LTQuMTdMMTUuNSA5aC00LjA1TDEwIDQuNjg3eicsXG59O1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25TdWNjZXNzYC4gKi9cbmNvbnN0IGNkeEljb25TdWNjZXNzOiBJbmRpY2F0b3JJY29uID0ge1xuXHRwYXRoOiAnTTEwIDFhOSA5IDAgMTEwIDE4IDkgOSAwIDAxMC0xOE04LjgyMyAxMS4xMTggNi44IDkuNmwtMS4yIDEuNiAyLjggMi4xaDEuMWw0LjkwNS01Ljk1Ni0xLjU2MS0xLjI1eicsXG59O1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25UZW1wbGF0ZUFkZGAuICovXG5jb25zdCBjZHhJY29uVGVtcGxhdGVBZGQ6IEluZGljYXRvckljb24gPSB7XG5cdHBhdGg6ICdNOSA2SDJ2OWgxM3YtM2gydjVIMFY0aDl6bTgtMmgzdjJoLTN2M2gtMlY2aC0zVjRoM1YxaDJ6Jyxcblx0c2hvdWxkRmxpcDogdHJ1ZSxcbn07XG5cbi8qKiBQYXRoIGZvciBgY2R4SWNvblVuRmxhZ2AuICovXG5jb25zdCBjZHhJY29uVW5GbGFnOiBJbmRpY2F0b3JJY29uID0ge1xuXHRwYXRoOiAnbTE5LjI1NCAxNy44NC0xLjQxNCAxLjQxNEwxMC41ODYgMTJINXY4SDNWNC40MTRMLjg3MSAyLjI4NSAyLjI4NS44NzF6TTUgMTBoMy41ODZMNSA2LjQxNHptMTIgMmgtLjc1OGwtMi0ySDE1VjRIOC4yNDJsLTItMkgxN3onLFxufTtcblxuLyoqIFBhdGggZm9yIGBjZHhJY29uVXBkYXRlYC4gKi9cbmNvbnN0IGNkeEljb25VcGRhdGU6IEluZGljYXRvckljb24gPSB7XG5cdHBhdGg6ICdtMTIuMDA5IDEzLjY5NS4wMDIgMS4zODgtNC42OTQgNC44OC0xLjQ0MS0xLjM4NSAzLjA2NS0zLjE4OEgwdi0yaDguOTMzbC0zLjA1Ny0zLjE2NCAxLjQzOC0xLjM5em0yLjExNS0xMi4yMTlMMTEuMDY3IDQuNjRIMjB2MmgtOC45NDFsMy4wNjUgMy4xODgtMS40NDEgMS4zODYtNC42OTQtNC44ODEuMDAyLTEuMzg4IDQuNjk0LTQuODYgMS40MzkgMS4zOVonLFxuXHRzaG91bGRGbGlwOiB0cnVlLFxufTtcblxuLyoqXG4gKiBTVkcgZm9yIGBjZHhJY29uUm9ib3RgLlxuICpcbiAqIFRoaXMgaWNvbiBpcyBjb21wb3NlZCBvZiBtb3JlIHRoYW4gb25lIHRhZywgaGVuY2UgaXQgaXMgc3RvcmVkIGFzIHJhdyBTVkdcbiAqIG1hcmt1cCBpbnN0ZWFkIG9mIGEgYmFyZSBwYXRoLlxuICovXG5jb25zdCBjZHhJY29uUm9ib3Q6IEluZGljYXRvckljb24gPVxuXHQnPHBhdGggZD1cIk05IDNoMnYyaDUuNUEyLjUgMi41IDAgMDExOSA3LjVWMTVoLTd2Mmg0YTEgMSAwIDAxMSAxdjJIM3YtMmExIDEgMCAwMTEtMWg0di0ySDFWNy41QTIuNSAyLjUgMCAwMTMuNSA1SDlNNS41IDlhMS41IDEuNSAwIDEwMCAzIDEuNSAxLjUgMCAwMDAtM205IDBhMS41IDEuNSAwIDEwMCAzIDEuNSAxLjUgMCAwMDAtM1wiLz48Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjJcIiByPVwiMlwiLz4nO1xuXG4vKipcbiAqIFNWRyBmb3IgYGNkeEljb25LZXlgLCB1c2VkIGZvciB1c2VyIGdyb3VwcyB3aXRob3V0IGEgZGVkaWNhdGVkIGljb24uXG4gKlxuICogVGhpcyBpY29uIGlzIGNvbXBvc2VkIG9mIG1vcmUgdGhhbiBvbmUgdGFnLCBoZW5jZSBpdCBpcyBzdG9yZWQgYXMgcmF3IFNWR1xuICogbWFya3VwIGluc3RlYWQgb2YgYSBiYXJlIHBhdGguXG4gKi9cbmNvbnN0IGNkeEljb25LZXk6IEluZGljYXRvckljb24gPVxuXHQnPHBhdGggZD1cIk0xMy43MDYgMS41QzE3LjEyOCAxLjUgMjAgNC4xMzMgMjAgNy41cy0yLjg3MiA2LTYuMjk0IDZjLS42NSAwLTEuMjgtLjA5NS0xLjg3My0uMjdxLS4wMDctLjAwNC0uMDE2LS4wMDZMOS44NTUgMTVIOXYySDd2MS41SDFsLTEtMXYtMi40MzVMNy40NDYgOC4xM2E2IDYgMCAwMS0uMDM0LS42MzFjMC0zLjM2NyAyLjg3Mi02IDYuMjk0LTZabTAgMmMtMi40MjYgMC00LjI5NCAxLjg0NC00LjI5NCA0cTAgLjQwNy4wODMuNzlsLjEyLjU1NUwyIDE1LjkzNXYuNTY1aDNWMTVoMnYtMmgyLjA4NmwyLjMtMi4wODEuNTg0LjI0YTQuNSA0LjUgMCAwMDEuNzM2LjM0MWMyLjQyNiAwIDQuMjk0LTEuODQ0IDQuMjk0LTRzLTEuODY4LTQtNC4yOTQtNFwiLz48Y2lyY2xlIGN4PVwiMTMuNzVcIiBjeT1cIjcuNVwiIHI9XCIxLjVcIi8+JztcblxuLyoqXG4gKiBTVkcgZm9yIGBjZHhJY29uVW5Mb2NrYC5cbiAqXG4gKiBUaGlzIGljb24gaXMgY29tcG9zZWQgb2YgbW9yZSB0aGFuIG9uZSB0YWcsIGhlbmNlIGl0IGlzIHN0b3JlZCBhcyByYXcgU1ZHXG4gKiBtYXJrdXAgaW5zdGVhZCBvZiBhIGJhcmUgcGF0aC5cbiAqL1xuY29uc3QgY2R4SWNvblVuTG9jazogSW5kaWNhdG9ySWNvbiA9XG5cdCc8cGF0aCBkPVwiTTExIDE1SDl2LTNoMnpcIi8+PHBhdGggZD1cIk0xMCAxYTQgNCAwIDAxNCA0djNoM3YxMUgzVjhoOVY1YTIgMiAwIDEwLTQgMHYuNUg2VjVhNCA0IDAgMDE0LTRNNSAxN2gxMHYtN0g1elwiLz4nO1xuXG5jb25zdCBHUk9VUF9JQ09OUzogUGFydGlhbDxSZWNvcmQ8VXNlclJpZ2h0cywgSW5kaWNhdG9ySWNvbj4+ID0ge1xuXHRhdXRvY29uZmlybWVkOiBjZHhJY29uQ2hlY2tBbGwsXG5cdGF1dG9yZXZpZXdlcjogY2R4SWNvblVuRmxhZyxcblx0Ym90OiBjZHhJY29uUm9ib3QsXG5cdGNoZWNrdXNlcjogY2R4SWNvblNlYXJjaCxcblx0Y29uZmlybWVkOiBjZHhJY29uQ2hlY2ssXG5cdGV2ZW50c3BvbnNvcjogY2R4SWNvblN0YXIsXG5cdGZsb29kOiBjZHhJY29uVXBkYXRlLFxuXHQnaW50ZXJmYWNlLWFkbWluJzogY2R4SWNvbkxheW91dCxcblx0J2lwYmxvY2stZXhlbXB0JzogY2R4SWNvblVuTG9jayxcblx0J21hc3NtZXNzYWdlLXNlbmRlcic6IGNkeEljb25NZXNzYWdlLFxuXHRwYXRyb2xsZXI6IGNkeEljb25SZWNlbnRDaGFuZ2VzLFxuXHRxaXV3ZW46IGNkeEljb25Ib21lLFxuXHQncm5yc3ZlcmlmeS1leGVtcHQnOiBjZHhJY29uU3VjY2Vzcyxcblx0c2VuaW9yZWRpdG9yOiBjZHhJY29uRWRpdCxcblx0c3Rld2FyZDogY2R4SWNvbkdsb2JlLFxuXHRzdXBwcmVzczogY2R4SWNvbkV5ZUNsb3NlZCxcblx0c3lzb3A6IGNkeEljb25TZXR0aW5ncyxcblx0dGVtcGxhdGVlZGl0b3I6IGNkeEljb25UZW1wbGF0ZUFkZCxcblx0dHJhbnN3aWtpOiBjZHhJY29uRG93bmxvYWQsXG59O1xuXG4vKiogSWNvbiBmb3IgdXNlciBncm91cHMgdGhhdCBoYXZlIG5vIGRlZGljYXRlZCBpY29uLiAqL1xuY29uc3QgVU5LTk9XTl9HUk9VUF9JQ09OOiBJbmRpY2F0b3JJY29uID0gY2R4SWNvbktleTtcblxuZXhwb3J0IHtHUk9VUF9JQ09OUywgVU5LTk9XTl9HUk9VUF9JQ09OfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtHUk9VUF9JQ09OUywgVU5LTk9XTl9HUk9VUF9JQ09OfSBmcm9tICcuL2ljb25zJztcbmltcG9ydCB0eXBlIHtJbmRpY2F0b3IsIEluZGljYXRvckljb24sIEluZGljYXRvclRvbmV9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7VE9ORV9NQVB9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcblxuaW50ZXJmYWNlIEFwcFByb3BzIHtcblx0LyoqIFRoZSB1c2VyIGdyb3VwcyB0byBkaXNwbGF5LiAqL1xuXHRpbmRpY2F0b3JzOiBJbmRpY2F0b3JbXTtcbn1cblxuaW50ZXJmYWNlIEJhZGdlIHtcblx0Z3JvdXA6IEluZGljYXRvclsnZ3JvdXAnXTtcblx0aWNvbjogSW5kaWNhdG9ySWNvbjtcblx0dGV4dDogc3RyaW5nO1xuXHR0b25lOiBJbmRpY2F0b3JUb25lIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2UnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPEFwcFByb3BzPigpO1xuXG5jb25zdCBiYWRnZXMgPSBjb21wdXRlZDxCYWRnZVtdPigoKSA9PiB7XG5cdHJldHVybiBwcm9wcy5pbmRpY2F0b3JzLm1hcDxCYWRnZT4oKHtncm91cCwgdGV4dH0pID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Z3JvdXAsXG5cdFx0XHRpY29uOiBHUk9VUF9JQ09OU1tncm91cF0gPz8gVU5LTk9XTl9HUk9VUF9JQ09OLFxuXHRcdFx0dGV4dCxcblx0XHRcdHRvbmU6IFRPTkVfTUFQW2dyb3VwXSxcblx0XHR9O1xuXHR9KTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PHNwYW5cblx0XHR2LWZvcj1cImJhZGdlIGluIGJhZGdlc1wiXG5cdFx0OmtleT1cImJhZGdlLmdyb3VwXCJcblx0XHRjbGFzcz1cImdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19iYWRnZVwiXG5cdFx0OmNsYXNzPVwiYmFkZ2UudG9uZSA/IGAke0NMQVNTX05BTUV9X19iYWRnZS0tJHtiYWRnZS50b25lfWAgOiAnJ1wiXG5cdFx0OnRpdGxlPVwiYmFkZ2UudGV4dFwiXG5cdD5cblx0XHQ8Y2R4LWljb24gY2xhc3M9XCJnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9faWNvblwiIDppY29uPVwiYmFkZ2UuaWNvblwiIHNpemU9XCJzbWFsbFwiIC8+XG5cdFx0PHNwYW4gY2xhc3M9XCJnYWRnZXQtbWFya3JpZ2h0c191c2VycGFnZV9fdGV4dFwiPnt7IGJhZGdlLnRleHQgfX08L3NwYW4+XG5cdDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuLmdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19iYWRnZSB7XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDAuMjVlbTtcblx0bWFyZ2luOiAwIDAuMjVlbSAhaW1wb3J0YW50O1xuXHRwYWRkaW5nOiAwIDAuNWVtICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogMXB4IHNvbGlkIEBjb25zdC1jb2xvci1ncmF5O1xuXHRmb250LXNpemU6IDAuOWVtO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy0tc21hbGw7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXG5cdC5tdy1mb290ZXIgJiB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMC4yNWVtO1xuXHR9XG5cblx0LyogVGhlIHdlYm1hc3RlciBhbmQgdGhlIHN0ZXdhcmRzOiB2aW9sZXQgKi9cblx0Ji0tc3Rld2FyZCB7XG5cdFx0Ym9yZGVyLWNvbG9yOiBAY29sb3ItZ3JvdXAtLXN0ZXdhcmQ7XG5cdFx0Y29sb3I6IEBjb2xvci1ncm91cC0tc3Rld2FyZDtcblx0fVxuXG5cdC8qIEhpZ2gtbGV2ZWwgbWFuYWdlcnMgYW5kIGNoZWNrdXNlcnM6IGRhcmsgcGluayAqL1xuXHQmLS1zeXNvcCB7XG5cdFx0Ym9yZGVyLWNvbG9yOiBAY29sb3ItZ3JvdXAtLXN5c29wO1xuXHRcdGNvbG9yOiBAY29sb3ItZ3JvdXAtLXN5c29wO1xuXHR9XG5cblx0LyogUGFnZSBwYXRyb2xsZXJzIGFuZCBldmVudCBzcG9uc29yczogYnJvd24gKi9cblx0Ji0tcGF0cm9sbGVyIHtcblx0XHRib3JkZXItY29sb3I6IEBjb2xvci1ncm91cC0tcGF0cm9sbGVyO1xuXHRcdGNvbG9yOiBAY29sb3ItZ3JvdXAtLXBhdHJvbGxlcjtcblx0fVxuXG5cdC8qIEVkaXRpbmcgcmVsYXRlZCByaWdodHM6IGJsdWUgKi9cblx0Ji0tZWRpdG9yIHtcblx0XHRib3JkZXItY29sb3I6IEBjb2xvci1ncm91cC0tYm90O1xuXHRcdGNvbG9yOiBAY29sb3ItZ3JvdXAtLWJvdDtcblx0fVxuXG5cdC8qIENvbmZpcm1hdGlvbiBhbmQgZXhlbXB0aW9uIHJpZ2h0czogZ3JlZW4gKi9cblx0Ji0tY29uZmlybWVkIHtcblx0XHRib3JkZXItY29sb3I6IEBjb2xvci1ncm91cC0tY29uZmlybWVkO1xuXHRcdGNvbG9yOiBAY29sb3ItZ3JvdXAtLWNvbmZpcm1lZDtcblx0fVxufVxuXG4uZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2ljb24ge1xuXHR3aWR0aDogMWVtO1xuXHRoZWlnaHQ6IDFlbTtcblx0Y29sb3I6IGluaGVyaXQ7XG5cblx0OmRlZXAoc3ZnKSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdGZpbGw6IGN1cnJlbnRDb2xvcjtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcyB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gW1widGl0bGVcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX190ZXh0XCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAuYmFkZ2VzLCAoYmFkZ2UpID0+IHtcbiAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwge1xuICAgICAga2V5OiBiYWRnZS5ncm91cCxcbiAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wiZ2FkZ2V0LW1hcmtyaWdodHNfdXNlcnBhZ2VfX2JhZGdlXCIsIGJhZGdlLnRvbmUgPyBgJHskc2V0dXAuQ0xBU1NfTkFNRX1fX2JhZGdlLS0ke2JhZGdlLnRvbmV9YCA6ICcnXSksXG4gICAgICB0aXRsZTogYmFkZ2UudGV4dFxuICAgIH0sIFtcbiAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhJY29uXCJdLCB7XG4gICAgICAgIGNsYXNzOiBcImdhZGdldC1tYXJrcmlnaHRzX3VzZXJwYWdlX19pY29uXCIsXG4gICAgICAgIGljb246IGJhZGdlLmljb24sXG4gICAgICAgIHNpemU6IFwic21hbGxcIlxuICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwic3BhblwiLCBfaG9pc3RlZF8yLCBfdG9EaXNwbGF5U3RyaW5nKGJhZGdlLnRleHQpLCAxIC8qIFRFWFQgKi8pXG4gICAgXSwgMTAgLyogQ0xBU1MsIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbiAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcTWFya1JpZ2h0cy1Vc2VycGFnZVxcXFxtb2R1bGVzXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXE1hcmtSaWdodHMtVXNlcnBhZ2VcXFxcbW9kdWxlc1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXE1hcmtSaWdodHMtVXNlcnBhZ2VcXFxcbW9kdWxlc1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcTWFya1JpZ2h0cy1Vc2VycGFnZVxcXFxtb2R1bGVzXFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtM2ExNTc2MjVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCB0eXBlIHtJbmRpY2F0b3J9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2NyZWF0ZUZvb3RlclJvb3R9IGZyb20gJy4vdXRpbC9jcmVhdGVGb290ZXJSb290JztcblxuLyoqXG4gKiBSZW5kZXIgZXZlcnkgaW5kaWNhdG9yIGJhZGdlIGludG8gdGhlIHBhZ2UgZm9vdGVyLlxuICpcbiAqIEBwYXJhbSBpbmRpY2F0b3JzIFRoZSB1c2VyIGdyb3VwcyB0byBkaXNwbGF5LlxuICovXG5jb25zdCBhcHBlbmRJY29uID0gKGluZGljYXRvcnM6IEluZGljYXRvcltdKTogdm9pZCA9PiB7XG5cdGlmICghaW5kaWNhdG9ycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoIW1vdW50UG9pbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCByb290ID0gY3JlYXRlRm9vdGVyUm9vdChtb3VudFBvaW50KTtcblxuXHRjcmVhdGVBcHAoQXBwLCB7aW5kaWNhdG9yc30pLm1vdW50KHJvb3QpO1xufTtcblxuZXhwb3J0IHthcHBlbmRJY29ufTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0NMQVNTX05BTUV9IGZyb20gJy4uL2NvbnN0YW50JztcblxuLyoqXG4gKiBDcmVhdGUgYW5kIGluc2VydCB0aGUgcm9vdCBlbGVtZW50IHdoaWNoIGhvc3RzIHRoZSBWdWUgYXBwbGljYXRpb24uXG4gKlxuICogQHBhcmFtIG1vdW50UG9pbnQgVGhlIGNvbnRhaW5lciBvZiB0aGUgcGFnZSBmb290ZXIgaW5kaWNhdG9ycy5cbiAqIEByZXR1cm5zIFRoZSBjcmVhdGVkIHJvb3QgZWxlbWVudC5cbiAqL1xuY29uc3QgY3JlYXRlRm9vdGVyUm9vdCA9IChtb3VudFBvaW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50ID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0NpdGl6ZW4gPSBza2luID09PSAnY2l0aXplbic7XG5cdGNvbnN0IGlzTGlzdEl0ZW0gPVxuXHRcdFsnZ29uZ2JpJywgJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMiddLmluY2x1ZGVzKHNraW4pIHx8IEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSk7XG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGlzQ2l0aXplbiA/ICdzZWN0aW9uJyA6IGlzTGlzdEl0ZW0gPyAnbGknIDogJ2RpdicpO1xuXG5cdHJvb3QuaWQgPSBPUFRJT05TLmVsZW1lbnRJZDtcblx0cm9vdC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUUsICdub3ByaW50Jyk7XG5cdGlmIChpc0NpdGl6ZW4pIHtcblx0XHRyb290LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtaW5mb19faXRlbScsICdjaXRpemVuLWZvb3Rlcl9fcGFnZWluZm8taXRlbScpO1xuXHR9XG5cdG1vdW50UG9pbnQucHJlcGVuZChyb290KTtcblxuXHRyZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCB7Y3JlYXRlRm9vdGVyUm9vdH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHFpdXdlbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ6ZW/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ermemVtycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC45ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguOWToScsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdHRyYW5zd2lraTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRwYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdGF1dG9yZXZpZXdlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6XosYHlhY3ogIUnLFxuXHRcdH0pLFxuXHRcdHNlbmlvcmVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZW5pb3IgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i1hOa3see8luiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfos4fmt7Hnt6jogIUnLFxuXHRcdH0pLFxuXHRcdGV2ZW50c3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRjb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0YXV0b2NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdCdybnJzdmVyaWZ5LWV4ZW1wdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwaG9uZSBudW1iZXIgdmVyaWZpY2F0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aJi+acuuWPt+mqjOivgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICfmiYvmqZ/omZ/pqZforYnosYHlhY0nLFxuXHRcdH0pLFxuXHRcdGJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Zmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHQnaXBibG9jay1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICcuL01hcmtSaWdodHMtVXNlcnBhZ2UubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0UGVybWlzc2lvbnN9IGZyb20gJy4vbW9kdWxlcy9nZXRQZXJtaXNzaW9ucyc7XG5cbihmdW5jdGlvbiBtYXJrUmlnaHRzVXNlclBhZ2UoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWUsIHdnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghd2dSZWxldmFudFVzZXJOYW1lIHx8ICEod2dOYW1lc3BhY2VOdW1iZXIgPT09IE9QVElPTlMudXNlck5hbWVTcGFjZU51bWJlcikgfHwgISh3Z0FjdGlvbiA9PT0gJ3ZpZXcnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChtdy51dGlsLmlzSVB2NEFkZHJlc3Mod2dSZWxldmFudFVzZXJOYW1lKSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3Mod2dSZWxldmFudFVzZXJOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIpLnRvVGV4dCgpO1xuXHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpLnRvVGV4dCgpO1xuXHRpZiAocGFnZU5hbWUgIT09IHJlbGV2YW50VXNlclBhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBnZXRQ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QUk7QUFDcEYsTUFBSSxDQUFDMkIsc0JBQXNCLEVBQUVzQixzQkFBOEJoSix3QkFBd0IsRUFBRStJLGFBQWEsU0FBUztBQUMxRztFQUNEO0FBRUEsTUFBSWxELEdBQUdxRCxLQUFLQyxjQUFjekIsa0JBQWtCLEtBQUs3QixHQUFHcUQsS0FBS0UsY0FBYzFCLGtCQUFrQixHQUFHO0FBQzNGO0VBQ0Q7QUFFQSxRQUFNMkIsdUJBQStCLElBQUl4RCxHQUFHeUQsTUFBTTVCLG9CQUE0QjFILG1CQUFtQixFQUFFdUosT0FBTztBQUMxRyxRQUFNQyxXQUFtQixJQUFJM0QsR0FBR3lELE1BQU1MLFVBQVUsRUFBRU0sT0FBTztBQUN6RCxNQUFJQyxhQUFhSCxzQkFBc0I7QUFDdEM7RUFDRDtBQUVBLE9BQUtaLGVBQWVmLGtCQUFrQjtBQUN2QyxHQUFHOyIsCiAgIm5hbWVzIjogWyJlbGVtZW50SWQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInVzZXJOYW1lU3BhY2VOdW1iZXIiLCAiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgIkNMQVNTX05BTUUiLCAiSU1QTElDSVRfR1JPVVBTIiwgIlRPTkVfTUFQIiwgImF1dG9yZXZpZXdlciIsICJib3QiLCAiY2hlY2t1c2VyIiwgImNvbmZpcm1lZCIsICJldmVudHNwb25zb3IiLCAiZmxvb2QiLCAicGF0cm9sbGVyIiwgInFpdXdlbiIsICJzZW5pb3JlZGl0b3IiLCAic3Rld2FyZCIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiY2R4SWNvbkNoZWNrIiwgInBhdGgiLCAiY2R4SWNvbkNoZWNrQWxsIiwgImNkeEljb25Eb3dubG9hZCIsICJjZHhJY29uRWRpdCIsICJjZHhJY29uRXllQ2xvc2VkIiwgImNkeEljb25HbG9iZSIsICJjZHhJY29uSG9tZSIsICJjZHhJY29uTGF5b3V0IiwgInNob3VsZEZsaXAiLCAiY2R4SWNvbk1lc3NhZ2UiLCAiY2R4SWNvblJlY2VudENoYW5nZXMiLCAiY2R4SWNvblNlYXJjaCIsICJjZHhJY29uU2V0dGluZ3MiLCAiY2R4SWNvblN0YXIiLCAiY2R4SWNvblN1Y2Nlc3MiLCAiY2R4SWNvblRlbXBsYXRlQWRkIiwgImNkeEljb25VbkZsYWciLCAiY2R4SWNvblVwZGF0ZSIsICJjZHhJY29uUm9ib3QiLCAiY2R4SWNvbktleSIsICJjZHhJY29uVW5Mb2NrIiwgIkdST1VQX0lDT05TIiwgImF1dG9jb25maXJtZWQiLCAiVU5LTk9XTl9HUk9VUF9JQ09OIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJDTEFTU19OQU1FMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgImJhZGdlcyIsICJjb21wdXRlZCIsICJpbmRpY2F0b3JzIiwgIm1hcCIsICJncm91cCIsICJ0ZXh0IiwgIl9HUk9VUF9JQ09OUyRncm91cCIsICJpY29uIiwgInRvbmUiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJfaG9pc3RlZF8yIiwgImNsYXNzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiRnJhZ21lbnQiLCAicmVuZGVyTGlzdCIsICJiYWRnZSIsICJrZXkiLCAibm9ybWFsaXplQ2xhc3MiLCAiY29uY2F0IiwgInRpdGxlIiwgImNyZWF0ZVZOb2RlIiwgInNpemUiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIkFwcF9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNCIsICJjcmVhdGVGb290ZXJSb290IiwgIm1vdW50UG9pbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlzQ2l0aXplbiIsICJpc0xpc3RJdGVtIiwgImluY2x1ZGVzIiwgIkJvb2xlYW4iLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJyb290IiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJwcmVwZW5kIiwgImFwcGVuZEljb24iLCAibGVuZ3RoIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImJ1aWxkSW5kaWNhdG9ycyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJfbG9jYWxHcm91cHNNYXAkd2dSZWwiLCAiX2dsb2JhbEdyb3Vwc01hcCR3Z1JlIiwgImxvY2FsR3JvdXBzTWFwIiwgImdldExvY2FsVXNlckdyb3VwcyIsICJsb2NhbEdyb3VwcyIsICJnbG9iYWxHcm91cHNNYXAiLCAiZ2V0R2xvYmFsVXNlckdyb3VwcyIsICJnbG9iYWxHcm91cHMiLCAidW5pcXVlQXJyYXkiLCAiZmlsdGVyIiwgInVzZXJSaWdodCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0UGVybWlzc2lvbnMiLCAiX3JlZjIiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeDIiLCAibWFya1JpZ2h0c1VzZXJQYWdlIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAidXRpbCIsICJpc0lQdjRBZGRyZXNzIiwgImlzSVB2NkFkZHJlc3MiLCAicmVsZXZhbnRVc2VyUGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInBhZ2VOYW1lIl0KfQo=
