/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-AdvancedSiteNotices.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-AdvancedSiteNotices.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AdvancedSiteNotices}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: MIT
 *
 * The "close" icon from @wikimedia/codex-icons
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js
var require_broadcastchannel_polyfill = __commonJS({
  "node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js"() {
    (function(global) {
      var channels = [];
      function BroadcastChannel2(channel) {
        var $this = this;
        channel = String(channel);
        var id = "$BroadcastChannel$" + channel + "$";
        channels[id] = channels[id] || [];
        channels[id].push(this);
        this._name = channel;
        this._id = id;
        this._closed = false;
        this._mc = new MessageChannel();
        this._mc.port1.start();
        this._mc.port2.start();
        global.addEventListener("storage", function(e) {
          if (e.storageArea !== global.localStorage) return;
          if (e.newValue == null || e.newValue === "") return;
          if (e.key.substring(0, id.length) !== id) return;
          var data = JSON.parse(e.newValue);
          $this._mc.port2.postMessage(data);
        });
      }
      BroadcastChannel2.prototype = {
        // BroadcastChannel API
        get name() {
          return this._name;
        },
        postMessage: function(message) {
          var $this = this;
          if (this._closed) {
            var e = new Error();
            e.name = "InvalidStateError";
            throw e;
          }
          var value = JSON.stringify(message);
          var key = this._id + String(Date.now()) + "$" + String(Math.random());
          global.localStorage.setItem(key, value);
          setTimeout(function() {
            global.localStorage.removeItem(key);
          }, 500);
          channels[this._id].forEach(function(bc) {
            if (bc === $this) return;
            bc._mc.port2.postMessage(JSON.parse(value));
          });
        },
        close: function() {
          if (this._closed) return;
          this._closed = true;
          this._mc.port1.close();
          this._mc.port2.close();
          var index = channels[this._id].indexOf(this);
          channels[this._id].splice(index, 1);
        },
        // EventTarget API
        get onmessage() {
          return this._mc.port1.onmessage;
        },
        set onmessage(value) {
          this._mc.port1.onmessage = value;
        },
        addEventListener: function() {
          return this._mc.port1.addEventListener.apply(this._mc.port1, arguments);
        },
        removeEventListener: function() {
          return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments);
        },
        dispatchEvent: function() {
          return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments);
        }
      };
      global.BroadcastChannel = global.BroadcastChannel || BroadcastChannel2;
    })(self);
  }
});

// dist/AdvancedSiteNotices/AdvancedSiteNotices.js
//! src/AdvancedSiteNotices/options.json
require_broadcastchannel_polyfill();
var ajaxPageTitle = "Template:AdvancedSiteNotices/ajax";
var mountPointSelector = "#siteNotice";
var storageKey = "ext.gadget.AdvancedSiteNotices_dismissASN";
var cacheKey = "ext.gadget.AdvancedSiteNotices_cache";
var version = "4.0";
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/AdvancedSiteNotices/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`AdvancedSiteNotices/${version}`);
//! src/AdvancedSiteNotices/modules/util/queryApi.ts
var {
  wgUserLanguage
} = mw.config.get();
var parameters = {
  action: "parse",
  format: "json",
  formatversion: "2",
  prop: "text",
  page: ajaxPageTitle,
  uselang: wgUserLanguage,
  variant: wgUserLanguage,
  smaxage: 600,
  maxage: 600
};
var queryApi = async () => {
  try {
    let response;
    if (mw.storage.getObject(cacheKey)) {
      response = mw.storage.getObject(cacheKey);
    } else {
      response = await api.get(parameters);
      mw.storage.setObject(cacheKey, response, 60 * 10);
    }
    return response;
  } catch (error) {
    console.error("[AdvancedSiteNotices] Ajax error:", error);
    return {};
  }
};
//! src/AdvancedSiteNotices/modules/loadRemoteNotices.ts
var loadRemoteNotices = async () => {
  const response = await queryApi();
  const responseParse = response["parse"];
  if (!(responseParse !== null && responseParse !== void 0 && responseParse.text)) {
    return {};
  }
  const $remoteNotice = $("<div>").html(responseParse.text).find("ul.sitents");
  if (!$remoteNotice) {
    return {};
  }
  const $remoteNotices = $remoteNotice;
  const $notices2 = $remoteNotices.find("li");
  const remoteNoticesVersion = $remoteNotices.data("asn-version").toString();
  return {
    $notices: $notices2,
    version: remoteNoticesVersion
  };
};
//! src/AdvancedSiteNotices/modules/showNotice.ts
var import_vue3 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/AdvancedSiteNotices/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Dismiss: (0, import_ext_gadget2.localize)({
      en: "Turn off this notice",
      ja: "ASNをオフにする",
      "zh-hans": "关闭公告",
      "zh-hant": "關閉公告"
    }),
    DismissNoticeTitle: (0, import_ext_gadget2.localize)({
      en: "You have chosen to turn off Advanced Site Notices for the next 30 days.",
      ja: "今後30日間、ASNをオフにすることを選択しました。",
      "zh-hans": "您已选择在接下来30日内关闭“高级站点通告”。",
      "zh-hant": "您已選擇在接下來30日內關閉「高級站點通告」。"
    }),
    DismissNotice: (0, import_ext_gadget2.localize)({
      en: "If the site-wide announcement is not updated within the next 30 days, it will no longer be displayed; however, if the site-wide announcement is updated, it will be displayed again.",
      ja: "サイト全体の通知が今後30日以内に更新されない場合、表示されなくなります。ただし、サイト全体の通知が更新される場合は、再び表示されます。",
      "zh-hans": "若接下来30日内全站公告未有更新，则不再显示；但是，若全站公告内容更新，则将重新显示。",
      "zh-hant": "若接下來30日內全站公告未有更新，則不再顯示；但是，若全站公告內容更新，則將重新顯示。"
    }),
    Title: (0, import_ext_gadget2.localize)({
      en: "Announcement",
      ja: "通知",
      zh: "公告"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var NoticeArea_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "NoticeArea",
  props: {
    state: {
      type: Object,
      required: true
    },
    onDismiss: {
      type: Function,
      required: true
    },
    onNoticeHidden: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const cdxIconClose = {
      path: "M16.707 4.707 11.414 10l5.293 5.293-1.414 1.414L10 11.414l-5.293 5.293-1.414-1.414L8.586 10 3.293 4.707l1.414-1.414L10 8.586l5.293-5.293z"
    };
    const __returned__ = {
      cdxIconClose,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxIcon() {
        return import_codex.CdxIcon;
      },
      get getMessage() {
        return getMessage;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue2 = require("vue");
var _hoisted_1 = {
  class: "gadget-advanced_site_notices noprint"
};
var _hoisted_2 = {
  class: "gadget-advanced_site_notices__title"
};
var _hoisted_3 = {
  class: "gadget-advanced_site_notices__notice"
};
var _hoisted_4 = ["innerHTML"];
var _hoisted_5 = {
  class: "gadget-advanced_site_notices__dismiss"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", _hoisted_1, [(0, import_vue2.createElementVNode)(
    "div",
    _hoisted_2,
    (0, import_vue2.toDisplayString)($setup.getMessage("Title")),
    1
    /* TEXT */
  ), (0, import_vue2.createElementVNode)("div", _hoisted_3, [(0, import_vue2.createVNode)(import_vue2.Transition, {
    name: "asn-notice",
    mode: "out-in",
    appear: "",
    onAfterLeave: $props.onNoticeHidden
  }, {
    default: (0, import_vue2.withCtx)(() => [$props.state.visible ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", {
      key: $props.state.key,
      class: "gadget-advanced_site_notices__notice__content center",
      innerHTML: $props.state.html
    }, null, 8, _hoisted_4)) : (0, import_vue2.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  }, 8, ["onAfterLeave"])]), (0, import_vue2.createElementVNode)("div", _hoisted_5, [(0, import_vue2.createVNode)($setup["CdxButton"], {
    weight: "quiet",
    type: "button",
    "aria-label": $setup.getMessage("Dismiss"),
    title: $setup.getMessage("Dismiss"),
    onClick: $props.onDismiss
  }, {
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createVNode)($setup["CdxIcon"], {
      icon: $setup.cdxIconClose
    })]),
    _: 1
    /* STABLE */
  }, 8, ["aria-label", "title", "onClick"])])]);
}
//! src/AdvancedSiteNotices/modules/NoticeArea.vue
NoticeArea_default.render = render;
NoticeArea_default.__file = "src\\AdvancedSiteNotices\\modules\\NoticeArea.vue";
NoticeArea_default.__scopeId = "data-v-c30bf60e";
var NoticeArea_default2 = NoticeArea_default;
//! src/AdvancedSiteNotices/modules/util/matchCriteria.ts
var {
  wgUserGroups,
  wgGlobalGroups,
  wgUserLanguage: wgUserLanguage2
} = mw.config.get();
var in_group = (group) => {
  return !!(wgUserGroups !== null && wgUserGroups !== void 0 && wgUserGroups.includes(group) || wgGlobalGroups !== null && wgGlobalGroups !== void 0 && wgGlobalGroups.includes(group));
};
var only_for = (userLanguage) => {
  return userLanguage === wgUserLanguage2;
};
var matchCriteria = ($notice) => {
  const cache = $notice.data("asn-cache");
  if (cache !== void 0) {
    return cache;
  }
  const testCriteria = (criteria) => {
    try {
      return window.eval(criteria);
    } catch {
      return false;
    }
  };
  let result = false;
  const criteriaData = ($notice.data("asn-criteria") ?? "").trim();
  if (criteriaData) {
    try {
      result = testCriteria(decodeURIComponent(criteriaData.replace(/\+/g, "%20")));
    } catch {
      result = true;
    }
  } else if ($notice.attr("class")) {
    let criteria;
    if ($notice.hasClass("only_sysop")) {
      criteria || (criteria = in_group("sysop") || in_group("steward") || in_group("qiuwen"));
    }
    if ($notice.hasClass("only_logged")) {
      criteria || (criteria = in_group("user"));
    }
    if ($notice.hasClass("only_anon")) {
      criteria || (criteria = !in_group("user"));
    }
    if ($notice.hasClass("only_zh_cn")) {
      criteria || (criteria = only_for("zh-cn"));
    }
    if ($notice.hasClass("only_zh_sg")) {
      criteria || (criteria = only_for("zh-sg"));
    }
    if ($notice.hasClass("only_zh_my")) {
      criteria || (criteria = only_for("zh-my"));
    }
    if ($notice.hasClass("only_zh_hk")) {
      criteria || (criteria = only_for("zh-hk"));
    }
    if ($notice.hasClass("only_zh_mo")) {
      criteria || (criteria = only_for("zh-mo"));
    }
    if ($notice.hasClass("only_zh_tw")) {
      criteria || (criteria = only_for("zh-tw"));
    }
    if (criteria === void 0) {
      criteria = true;
    }
    result = criteria;
  } else {
    result = true;
  }
  $notice.data("asn-cache", result);
  return result;
};
//! src/AdvancedSiteNotices/modules/showNotice.ts
var broadcastChannel = new BroadcastChannel(storageKey);
var currentVersion = "0";
var localVersion = mw.storage.get(storageKey);
var timer;
var closed = false;
var noticeApp;
var noticeRoot;
var noticeState;
var pendingNotice;
var activeStyleId = -1;
var $notices;
var noticeStyles = [];
var updateNoticeStyle = (styleId) => {
  if (activeStyleId === styleId) {
    return;
  }
  for (const style of noticeStyles) {
    style.disabled = true;
  }
  const noticeStyle = noticeStyles[styleId];
  if (noticeStyle) {
    noticeStyle.disabled = false;
  }
  activeStyleId = styleId;
};
var scheduleNextNotice = ($mountPoint, nextIndex) => {
  timer = setTimeout(() => {
    showNotices($mountPoint, nextIndex);
  }, 7 * 1e3);
};
var showPendingNotice = ($mountPoint) => {
  if (!pendingNotice || !noticeState) {
    return;
  }
  const nextNotice = pendingNotice;
  pendingNotice = void 0;
  updateNoticeStyle(nextNotice.styleId);
  noticeState.html = nextNotice.html;
  noticeState.key = nextNotice.key;
  noticeState.visible = true;
  scheduleNextNotice($mountPoint, nextNotice.nextIndex);
};
function closeNotices() {
  var _noticeApp, _noticeRoot;
  if (closed) {
    return;
  }
  closed = true;
  broadcastChannel.postMessage("close");
  broadcastChannel.close();
  if (timer) {
    clearTimeout(timer);
  }
  (_noticeApp = noticeApp) === null || _noticeApp === void 0 || _noticeApp.unmount();
  (_noticeRoot = noticeRoot) === null || _noticeRoot === void 0 || _noticeRoot.remove();
  mw.storage.set(storageKey, currentVersion, 60 * 60 * 24 * 30);
}
function dismissNotice() {
  closeNotices();
  void mw.notify(getMessage("DismissNotice"), {
    title: getMessage("DismissNoticeTitle"),
    tag: "AdvancedSiteNotices"
  });
}
var showNotices = ($mountPoint, index, remoteNotices) => {
  if (closed) {
    return;
  }
  currentVersion = (remoteNotices === null || remoteNotices === void 0 ? void 0 : remoteNotices.version) ?? currentVersion;
  if (currentVersion === localVersion) {
    return;
  }
  if (remoteNotices !== null && remoteNotices !== void 0 && remoteNotices.$notices) {
    ({
      $notices
    } = remoteNotices);
  }
  const noticesLength = $notices.length;
  let selectedIndex = -1;
  let $notice = $();
  for (let offset = 0; offset < noticesLength; offset++) {
    const candidateIndex = (index + offset) % noticesLength;
    const candidateNotice = $notices.eq(candidateIndex);
    if (matchCriteria(candidateNotice)) {
      $notice = candidateNotice;
      selectedIndex = candidateIndex;
      break;
    }
  }
  if (selectedIndex < 0) {
    return;
  }
  const nextNoticeIndex = (selectedIndex + 1) % noticesLength;
  if (typeof $notice.data("asn-html") === "string") {
    $notice.data("asn-html-raw", decodeURIComponent($notice.data("asn-html").replace(/\+/g, "%20")));
    $notice.data("asn-html", null);
  }
  if (typeof $notice.data("asn-style") === "string") {
    $notice.data("asn-style-id", noticeStyles.length);
    const style = mw.loader.addStyleTag(decodeURIComponent($notice.data("asn-style").replace(/\+/g, "%20")));
    style.disabled = true;
    noticeStyles[noticeStyles.length] = style;
    $notice.data("asn-style", null);
  }
  const noticeHtml = $notice.data("asn-html-raw") || $notice.html();
  const noticeStyleId = $notice.data("asn-style-id") ?? -1;
  if (!noticeRoot) {
    noticeRoot = document.createElement("div");
    $mountPoint.append(noticeRoot);
    noticeState = (0, import_vue3.reactive)({
      html: noticeHtml,
      key: selectedIndex,
      visible: true
    });
    noticeApp = (0, import_vue3.createApp)(NoticeArea_default2, {
      state: noticeState,
      onDismiss: dismissNotice,
      onNoticeHidden: () => showPendingNotice($mountPoint)
    });
    noticeApp.mount(noticeRoot);
    updateNoticeStyle(noticeStyleId);
    scheduleNextNotice($mountPoint, nextNoticeIndex);
    return;
  }
  if (!noticeState || noticeState.html === noticeHtml && activeStyleId === noticeStyleId) {
    scheduleNextNotice($mountPoint, nextNoticeIndex);
    return;
  }
  if (timer) {
    clearTimeout(timer);
  }
  if (noticeState.html === noticeHtml) {
    updateNoticeStyle(noticeStyleId);
    scheduleNextNotice($mountPoint, nextNoticeIndex);
    return;
  }
  pendingNotice = {
    html: noticeHtml,
    key: selectedIndex,
    styleId: noticeStyleId,
    nextIndex: nextNoticeIndex
  };
  noticeState.visible = false;
};
broadcastChannel.addEventListener("message", closeNotices);
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
(async function advancedSiteNotices() {
  var _remoteNotices$$notic;
  const $body = await (0, import_ext_gadget3.getBody)();
  const $mountPoint = $body.find(mountPointSelector);
  if (!$mountPoint.length) {
    return;
  }
  const remoteNotices = await loadRemoteNotices();
  if (!((_remoteNotices$$notic = remoteNotices.$notices) !== null && _remoteNotices$$notic !== void 0 && _remoteNotices$$notic.length)) {
    return;
  }
  const randomIndex = Math.floor(Math.random() * remoteNotices.$notices.length);
  showNotices($mountPoint, randomIndex, remoteNotices);
})();

})();

/* </nowiki> */

