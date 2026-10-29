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
var ajaxPageTitle = "Template:AdvancedSiteNotices/ajax";
var mountPointSelector = "#siteNotice";
var storageKey = "ext.gadget.AdvancedSiteNotices_dismissASN";
var cacheKey = "ext.gadget.AdvancedSiteNotices_cache";
var version = "4.0";
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/AdvancedSiteNotices/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("AdvancedSiteNotices/".concat(version));
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
var queryApi = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* () {
    try {
      let response;
      if (mw.storage.getObject(cacheKey)) {
        response = mw.storage.getObject(cacheKey);
      } else {
        response = yield api.get(parameters);
        mw.storage.setObject(cacheKey, response, 60 * 10);
      }
      return response;
    } catch (error) {
      console.error("[AdvancedSiteNotices] Ajax error:", error);
      return {};
    }
  });
  return function queryApi2() {
    return _ref.apply(this, arguments);
  };
})();
//! src/AdvancedSiteNotices/modules/loadRemoteNotices.ts
var loadRemoteNotices = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* () {
    const response = yield queryApi();
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
  });
  return function loadRemoteNotices2() {
    return _ref2.apply(this, arguments);
  };
})();
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
  var _$notice$data;
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
  const criteriaData = ((_$notice$data = $notice.data("asn-criteria")) !== null && _$notice$data !== void 0 ? _$notice$data : "").trim();
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
  for (var _i = 0, _noticeStyles = noticeStyles; _i < _noticeStyles.length; _i++) {
    const style = _noticeStyles[_i];
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
  var _remoteNotices$versio, _$notice$data2;
  if (closed) {
    return;
  }
  currentVersion = (_remoteNotices$versio = remoteNotices === null || remoteNotices === void 0 ? void 0 : remoteNotices.version) !== null && _remoteNotices$versio !== void 0 ? _remoteNotices$versio : currentVersion;
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
  const noticeStyleId = (_$notice$data2 = $notice.data("asn-style-id")) !== null && _$notice$data2 !== void 0 ? _$notice$data2 : -1;
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
(function() {
  var _advancedSiteNotices = _asyncToGenerator(function* () {
    var _remoteNotices$$notic;
    const $body = yield (0, import_ext_gadget3.getBody)();
    const $mountPoint = $body.find(mountPointSelector);
    if (!$mountPoint.length) {
      return;
    }
    const remoteNotices = yield loadRemoteNotices();
    if (!((_remoteNotices$$notic = remoteNotices.$notices) !== null && _remoteNotices$$notic !== void 0 && _remoteNotices$$notic.length)) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * remoteNotices.$notices.length);
    showNotices($mountPoint, randomIndex, remoteNotices);
  });
  function advancedSiteNotices() {
    return _advancedSiteNotices.apply(this, arguments);
  }
  return advancedSiteNotices;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvb3B0aW9ucy5qc29uIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL0FkdmFuY2VkU2l0ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvbG9hZFJlbW90ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9zaG93Tm90aWNlLnRzIiwgImRpc3QvQWR2YW5jZWRTaXRlTm90aWNlcy9zcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL05vdGljZUFyZWEudnVlIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcQWR2YW5jZWRTaXRlTm90aWNlc1xcbW9kdWxlc1xcTm90aWNlQXJlYS52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL05vdGljZUFyZWEudnVlIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvdXRpbC9tYXRjaENyaXRlcmlhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgIntcblx0XCJhamF4UGFnZVRpdGxlXCI6IFwiVGVtcGxhdGU6QWR2YW5jZWRTaXRlTm90aWNlcy9hamF4XCIsXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI3NpdGVOb3RpY2VcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5BZHZhbmNlZFNpdGVOb3RpY2VzX2Rpc21pc3NBU05cIixcblx0XCJjYWNoZUtleVwiOiBcImV4dC5nYWRnZXQuQWR2YW5jZWRTaXRlTm90aWNlc19jYWNoZVwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bG9hZFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy9sb2FkUmVtb3RlTm90aWNlcyc7XG5pbXBvcnQge3Nob3dOb3RpY2VzfSBmcm9tICcuL21vZHVsZXMvc2hvd05vdGljZSc7XG5cbihhc3luYyBmdW5jdGlvbiBhZHZhbmNlZFNpdGVOb3RpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSBhd2FpdCBnZXRCb2R5KCk7XG5cblx0Y29uc3QgJG1vdW50UG9pbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoISRtb3VudFBvaW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZXM6IFJlbW90ZU5vdGljZXMgPSBhd2FpdCBsb2FkUmVtb3RlTm90aWNlcygpO1xuXHRpZiAoIXJlbW90ZU5vdGljZXMuJG5vdGljZXM/Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJhbmRvbUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1vdGVOb3RpY2VzLiRub3RpY2VzLmxlbmd0aCk7XG5cdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCByYW5kb21JbmRleCwgcmVtb3RlTm90aWNlcyk7XG59KSgpO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQWR2YW5jZWRTaXRlTm90aWNlcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5pbnRlcmZhY2UgUmVtb3RlTm90aWNlcyB7XG5cdCRub3RpY2VzPzogSlF1ZXJ5O1xuXHR2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5jb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0YWN0aW9uOiAncGFyc2UnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAndGV4dCcsXG5cdHBhZ2U6IE9QVElPTlMuYWpheFBhZ2VUaXRsZSxcblx0dXNlbGFuZzogd2dVc2VyTGFuZ3VhZ2UsXG5cdHZhcmlhbnQ6IHdnVXNlckxhbmd1YWdlLFxuXHRzbWF4YWdlOiA2MDAsXG5cdG1heGFnZTogNjAwLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoKTogUHJvbWlzZTxSZXR1cm5UeXBlPG13LkFwaVsnZ2V0J10+PiA9PiB7XG5cdHRyeSB7XG5cdFx0bGV0IHJlc3BvbnNlO1xuXG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuY2FjaGVLZXkpKSB7XG5cdFx0XHRyZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuY2FjaGVLZXkpIGFzIFJldHVyblR5cGU8bXcuQXBpWydnZXQnXT47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbWV0ZXJzKTtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuY2FjaGVLZXksIHJlc3BvbnNlLCA2MCAqIDEwKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0FkdmFuY2VkU2l0ZU5vdGljZXNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIFJlbW90ZU5vdGljZXMsIHF1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlcywgcXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5cbnR5cGUgQXBpUmVzcG9uc2UgPSB7XG5cdHBhcnNlOiB7XG5cdFx0dGV4dD86IHN0cmluZztcblx0fTtcbn07XG5cbmNvbnN0IGxvYWRSZW1vdGVOb3RpY2VzID0gYXN5bmMgKCk6IFByb21pc2U8UmVtb3RlTm90aWNlcz4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoKTtcblx0Y29uc3QgcmVzcG9uc2VQYXJzZSA9IHJlc3BvbnNlWydwYXJzZSddIGFzIEFwaVJlc3BvbnNlWydwYXJzZSddO1xuXG5cdGlmICghcmVzcG9uc2VQYXJzZT8udGV4dCkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0ICRyZW1vdGVOb3RpY2UgPSAkKCc8ZGl2PicpLmh0bWwocmVzcG9uc2VQYXJzZS50ZXh0KS5maW5kKCd1bC5zaXRlbnRzJyk7XG5cdGlmICghJHJlbW90ZU5vdGljZSkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0ICRyZW1vdGVOb3RpY2VzOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyckbm90aWNlcyddPiA9ICRyZW1vdGVOb3RpY2U7XG5cblx0Y29uc3QgJG5vdGljZXM6IEpRdWVyeSA9ICRyZW1vdGVOb3RpY2VzLmZpbmQoJ2xpJyk7XG5cdGNvbnN0IHJlbW90ZU5vdGljZXNWZXJzaW9uOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyd2ZXJzaW9uJ10+ID0gKFxuXHRcdCRyZW1vdGVOb3RpY2VzLmRhdGEoJ2Fzbi12ZXJzaW9uJykgYXMgbnVtYmVyXG5cdCkudG9TdHJpbmcoKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRub3RpY2VzLFxuXHRcdHZlcnNpb246IHJlbW90ZU5vdGljZXNWZXJzaW9uLFxuXHR9O1xufTtcblxuZXhwb3J0IHtsb2FkUmVtb3RlTm90aWNlc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIEFwcCwgY3JlYXRlQXBwLCByZWFjdGl2ZX0gZnJvbSAndnVlJztcbmltcG9ydCBOb3RpY2VBcmVhIGZyb20gJy4vTm90aWNlQXJlYS52dWUnO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge21hdGNoQ3JpdGVyaWF9IGZyb20gJy4vdXRpbC9tYXRjaENyaXRlcmlhJztcblxuY29uc3QgYnJvYWRjYXN0Q2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKE9QVElPTlMuc3RvcmFnZUtleSk7XG5cbmxldCBjdXJyZW50VmVyc2lvbjogc3RyaW5nID0gJzAnO1xuY29uc3QgbG9jYWxWZXJzaW9uID0gbXcuc3RvcmFnZS5nZXQoT1BUSU9OUy5zdG9yYWdlS2V5KSBhcyBzdHJpbmcgfCBudWxsO1xubGV0IHRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZDtcbmxldCBjbG9zZWQgPSBmYWxzZTtcbmxldCBub3RpY2VBcHA6IEFwcCB8IHVuZGVmaW5lZDtcbmxldCBub3RpY2VSb290OiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZDtcbmxldCBub3RpY2VTdGF0ZTpcblx0fCB7XG5cdFx0XHRodG1sOiBzdHJpbmc7XG5cdFx0XHRrZXk6IG51bWJlcjtcblx0XHRcdHZpc2libGU6IGJvb2xlYW47XG5cdCAgfVxuXHR8IHVuZGVmaW5lZDtcbmxldCBwZW5kaW5nTm90aWNlOlxuXHR8IHtcblx0XHRcdGh0bWw6IHN0cmluZztcblx0XHRcdGtleTogbnVtYmVyO1xuXHRcdFx0c3R5bGVJZDogbnVtYmVyO1xuXHRcdFx0bmV4dEluZGV4OiBudW1iZXI7XG5cdCAgfVxuXHR8IHVuZGVmaW5lZDtcbmxldCBhY3RpdmVTdHlsZUlkID0gLTE7XG5cbmxldCAkbm90aWNlczogSlF1ZXJ5O1xuY29uc3Qgbm90aWNlU3R5bGVzOiBIVE1MU3R5bGVFbGVtZW50W10gPSBbXTtcblxuY29uc3QgdXBkYXRlTm90aWNlU3R5bGUgPSAoc3R5bGVJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGlmIChhY3RpdmVTdHlsZUlkID09PSBzdHlsZUlkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBzdHlsZSBvZiBub3RpY2VTdHlsZXMpIHtcblx0XHRzdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cdH1cblx0Y29uc3Qgbm90aWNlU3R5bGUgPSBub3RpY2VTdHlsZXNbc3R5bGVJZF07XG5cdGlmIChub3RpY2VTdHlsZSkge1xuXHRcdG5vdGljZVN0eWxlLmRpc2FibGVkID0gZmFsc2U7XG5cdH1cblx0YWN0aXZlU3R5bGVJZCA9IHN0eWxlSWQ7XG59O1xuXG5jb25zdCBzY2hlZHVsZU5leHROb3RpY2UgPSAoJG1vdW50UG9pbnQ6IEpRdWVyeSwgbmV4dEluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcblx0dGltZXIgPSBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcblx0XHRzaG93Tm90aWNlcygkbW91bnRQb2ludCwgbmV4dEluZGV4KTtcblx0fSwgNyAqIDEwMDApO1xufTtcblxuY29uc3Qgc2hvd1BlbmRpbmdOb3RpY2UgPSAoJG1vdW50UG9pbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRpZiAoIXBlbmRpbmdOb3RpY2UgfHwgIW5vdGljZVN0YXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbmV4dE5vdGljZSA9IHBlbmRpbmdOb3RpY2U7XG5cdHBlbmRpbmdOb3RpY2UgPSB1bmRlZmluZWQ7XG5cdHVwZGF0ZU5vdGljZVN0eWxlKG5leHROb3RpY2Uuc3R5bGVJZCk7XG5cdG5vdGljZVN0YXRlLmh0bWwgPSBuZXh0Tm90aWNlLmh0bWw7XG5cdG5vdGljZVN0YXRlLmtleSA9IG5leHROb3RpY2Uua2V5O1xuXHRub3RpY2VTdGF0ZS52aXNpYmxlID0gdHJ1ZTtcblx0c2NoZWR1bGVOZXh0Tm90aWNlKCRtb3VudFBvaW50LCBuZXh0Tm90aWNlLm5leHRJbmRleCk7XG59O1xuXG5mdW5jdGlvbiBjbG9zZU5vdGljZXMoKTogdm9pZCB7XG5cdGlmIChjbG9zZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y2xvc2VkID0gdHJ1ZTtcblx0YnJvYWRjYXN0Q2hhbm5lbC5wb3N0TWVzc2FnZSgnY2xvc2UnKTtcblx0YnJvYWRjYXN0Q2hhbm5lbC5jbG9zZSgpO1xuXHRpZiAodGltZXIpIHtcblx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHR9XG5cdG5vdGljZUFwcD8udW5tb3VudCgpO1xuXHRub3RpY2VSb290Py5yZW1vdmUoKTtcblx0bXcuc3RvcmFnZS5zZXQoT1BUSU9OUy5zdG9yYWdlS2V5LCBjdXJyZW50VmVyc2lvbiwgNjAgKiA2MCAqIDI0ICogMzApO1xufVxuXG5mdW5jdGlvbiBkaXNtaXNzTm90aWNlKCk6IHZvaWQge1xuXHRjbG9zZU5vdGljZXMoKTtcblx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnRGlzbWlzc05vdGljZScpLCB7XG5cdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ0Rpc21pc3NOb3RpY2VUaXRsZScpLFxuXHRcdHRhZzogJ0FkdmFuY2VkU2l0ZU5vdGljZXMnLFxuXHR9KTtcbn1cblxuY29uc3Qgc2hvd05vdGljZXMgPSAoJG1vdW50UG9pbnQ6IEpRdWVyeSwgaW5kZXg6IG51bWJlciwgcmVtb3RlTm90aWNlcz86IFJlbW90ZU5vdGljZXMpOiB2b2lkID0+IHtcblx0aWYgKGNsb3NlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGN1cnJlbnRWZXJzaW9uID0gcmVtb3RlTm90aWNlcz8udmVyc2lvbiA/PyBjdXJyZW50VmVyc2lvbjtcblx0aWYgKGN1cnJlbnRWZXJzaW9uID09PSBsb2NhbFZlcnNpb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAocmVtb3RlTm90aWNlcz8uJG5vdGljZXMpIHtcblx0XHQoeyRub3RpY2VzfSA9IHJlbW90ZU5vdGljZXMpO1xuXHR9XG5cblx0Y29uc3Qgbm90aWNlc0xlbmd0aDogbnVtYmVyID0gJG5vdGljZXMubGVuZ3RoO1xuXHRsZXQgc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRsZXQgJG5vdGljZTogSlF1ZXJ5ID0gJCgpO1xuXHRmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBub3RpY2VzTGVuZ3RoOyBvZmZzZXQrKykge1xuXHRcdGNvbnN0IGNhbmRpZGF0ZUluZGV4ID0gKGluZGV4ICsgb2Zmc2V0KSAlIG5vdGljZXNMZW5ndGg7XG5cdFx0Y29uc3QgY2FuZGlkYXRlTm90aWNlID0gJG5vdGljZXMuZXEoY2FuZGlkYXRlSW5kZXgpO1xuXHRcdGlmIChtYXRjaENyaXRlcmlhKGNhbmRpZGF0ZU5vdGljZSkpIHtcblx0XHRcdCRub3RpY2UgPSBjYW5kaWRhdGVOb3RpY2U7XG5cdFx0XHRzZWxlY3RlZEluZGV4ID0gY2FuZGlkYXRlSW5kZXg7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0aWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IG5leHROb3RpY2VJbmRleCA9IChzZWxlY3RlZEluZGV4ICsgMSkgJSBub3RpY2VzTGVuZ3RoO1xuXG5cdGlmICh0eXBlb2YgJG5vdGljZS5kYXRhKCdhc24taHRtbCcpID09PSAnc3RyaW5nJykge1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLWh0bWwtcmF3JywgZGVjb2RlVVJJQ29tcG9uZW50KCgkbm90aWNlLmRhdGEoJ2Fzbi1odG1sJykgYXMgc3RyaW5nKS5yZXBsYWNlKC9cXCsvZywgJyUyMCcpKSk7XG5cdFx0JG5vdGljZS5kYXRhKCdhc24taHRtbCcsIG51bGwpO1xuXHR9XG5cdGlmICh0eXBlb2YgJG5vdGljZS5kYXRhKCdhc24tc3R5bGUnKSA9PT0gJ3N0cmluZycpIHtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZS1pZCcsIG5vdGljZVN0eWxlcy5sZW5ndGgpO1xuXHRcdGNvbnN0IHN0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gbXcubG9hZGVyLmFkZFN0eWxlVGFnKFxuXHRcdFx0ZGVjb2RlVVJJQ29tcG9uZW50KCgkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZScpIGFzIHN0cmluZykucmVwbGFjZSgvXFwrL2csICclMjAnKSlcblx0XHQpO1xuXHRcdHN0eWxlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRub3RpY2VTdHlsZXNbbm90aWNlU3R5bGVzLmxlbmd0aF0gPSBzdHlsZTtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZScsIG51bGwpO1xuXHR9XG5cblx0Y29uc3Qgbm90aWNlSHRtbDogc3RyaW5nID0gKCRub3RpY2UuZGF0YSgnYXNuLWh0bWwtcmF3JykgYXMgc3RyaW5nKSB8fCAkbm90aWNlLmh0bWwoKTtcblx0Y29uc3Qgbm90aWNlU3R5bGVJZCA9ICgkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZS1pZCcpIGFzIG51bWJlciB8IHVuZGVmaW5lZCkgPz8gLTE7XG5cdGlmICghbm90aWNlUm9vdCkge1xuXHRcdG5vdGljZVJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHQkbW91bnRQb2ludC5hcHBlbmQobm90aWNlUm9vdCk7XG5cdFx0bm90aWNlU3RhdGUgPSByZWFjdGl2ZSh7XG5cdFx0XHRodG1sOiBub3RpY2VIdG1sLFxuXHRcdFx0a2V5OiBzZWxlY3RlZEluZGV4LFxuXHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHR9KTtcblx0XHRub3RpY2VBcHAgPSBjcmVhdGVBcHAoTm90aWNlQXJlYSwge1xuXHRcdFx0c3RhdGU6IG5vdGljZVN0YXRlLFxuXHRcdFx0b25EaXNtaXNzOiBkaXNtaXNzTm90aWNlLFxuXHRcdFx0b25Ob3RpY2VIaWRkZW46ICgpID0+IHNob3dQZW5kaW5nTm90aWNlKCRtb3VudFBvaW50KSxcblx0XHR9KTtcblx0XHRub3RpY2VBcHAubW91bnQobm90aWNlUm9vdCk7XG5cdFx0dXBkYXRlTm90aWNlU3R5bGUobm90aWNlU3R5bGVJZCk7XG5cdFx0c2NoZWR1bGVOZXh0Tm90aWNlKCRtb3VudFBvaW50LCBuZXh0Tm90aWNlSW5kZXgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghbm90aWNlU3RhdGUgfHwgKG5vdGljZVN0YXRlLmh0bWwgPT09IG5vdGljZUh0bWwgJiYgYWN0aXZlU3R5bGVJZCA9PT0gbm90aWNlU3R5bGVJZCkpIHtcblx0XHRzY2hlZHVsZU5leHROb3RpY2UoJG1vdW50UG9pbnQsIG5leHROb3RpY2VJbmRleCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHRpbWVyKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0fVxuXHRpZiAobm90aWNlU3RhdGUuaHRtbCA9PT0gbm90aWNlSHRtbCkge1xuXHRcdHVwZGF0ZU5vdGljZVN0eWxlKG5vdGljZVN0eWxlSWQpO1xuXHRcdHNjaGVkdWxlTmV4dE5vdGljZSgkbW91bnRQb2ludCwgbmV4dE5vdGljZUluZGV4KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwZW5kaW5nTm90aWNlID0ge1xuXHRcdGh0bWw6IG5vdGljZUh0bWwsXG5cdFx0a2V5OiBzZWxlY3RlZEluZGV4LFxuXHRcdHN0eWxlSWQ6IG5vdGljZVN0eWxlSWQsXG5cdFx0bmV4dEluZGV4OiBuZXh0Tm90aWNlSW5kZXgsXG5cdH07XG5cdG5vdGljZVN0YXRlLnZpc2libGUgPSBmYWxzZTtcbn07XG5cbmJyb2FkY2FzdENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNsb3NlTm90aWNlcyk7XG5cbmV4cG9ydCB7c2hvd05vdGljZXN9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4SWNvbn0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmludGVyZmFjZSBOb3RpY2VWaWV3U3RhdGUge1xuXHRodG1sOiBzdHJpbmc7XG5cdGtleTogbnVtYmVyO1xuXHR2aXNpYmxlOiBib29sZWFuO1xufVxuXG5kZWZpbmVQcm9wczx7XG5cdHN0YXRlOiBOb3RpY2VWaWV3U3RhdGU7XG5cdG9uRGlzbWlzczogKCkgPT4gdm9pZDtcblx0b25Ob3RpY2VIaWRkZW46ICgpID0+IHZvaWQ7XG59PigpO1xuXG4vKipcbiAqIFNWRyBwYXRocyBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgcGF0aCBkYXRhIGlzIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cblxuLyoqIFBhdGggZm9yIGBjZHhJY29uQ2xvc2VgLiAqL1xuY29uc3QgY2R4SWNvbkNsb3NlID0ge1xuXHRwYXRoOiAnTTE2LjcwNyA0LjcwNyAxMS40MTQgMTBsNS4yOTMgNS4yOTMtMS40MTQgMS40MTRMMTAgMTEuNDE0bC01LjI5MyA1LjI5My0xLjQxNC0xLjQxNEw4LjU4NiAxMCAzLjI5MyA0LjcwN2wxLjQxNC0xLjQxNEwxMCA4LjU4Nmw1LjI5My01LjI5M3onLFxufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzIG5vcHJpbnRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlc19fdGl0bGVcIj57eyBnZXRNZXNzYWdlKCdUaXRsZScpIH19PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImdhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXNfX25vdGljZVwiPlxuXHRcdFx0PFRyYW5zaXRpb24gbmFtZT1cImFzbi1ub3RpY2VcIiBtb2RlPVwib3V0LWluXCIgYXBwZWFyIEBhZnRlci1sZWF2ZT1cIm9uTm90aWNlSGlkZGVuXCI+XG5cdFx0XHRcdDwhLS0gZXNsaW50LWRpc2FibGUgdnVlL25vLXYtaHRtbCAtLSBwYXJzZWQgSFRNTCBpcyBwcm92aWRlZCBieSB0aGUgY29uZmlndXJlZCBhbm5vdW5jZW1lbnQgdGVtcGxhdGUgLS0+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHR2LWlmPVwic3RhdGUudmlzaWJsZVwiXG5cdFx0XHRcdFx0OmtleT1cInN0YXRlLmtleVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzX19ub3RpY2VfX2NvbnRlbnQgY2VudGVyXCJcblx0XHRcdFx0XHR2LWh0bWw9XCJzdGF0ZS5odG1sXCJcblx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHQ8IS0tIGVzbGludC1lbmFibGUgdnVlL25vLXYtaHRtbCAtLT5cblx0XHRcdDwvVHJhbnNpdGlvbj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlc19fZGlzbWlzc1wiPlxuXHRcdFx0PGNkeC1idXR0b25cblx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0OmFyaWEtbGFiZWw9XCJnZXRNZXNzYWdlKCdEaXNtaXNzJylcIlxuXHRcdFx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdEaXNtaXNzJylcIlxuXHRcdFx0XHRAY2xpY2s9XCJvbkRpc21pc3NcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8Y2R4LWljb24gOmljb249XCJjZHhJY29uQ2xvc2VcIiAvPlxuXHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuLmdhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRtaW4taGVpZ2h0OiA0ZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDAgMC41ZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkIEBjb25zdC1jb2xvci1ncmF5O1xuXHRib3gtc2hhZG93OiAwIDAuNXB4IDAgQGJhY2tncm91bmQtY29sb3ItcHJpbWFyeTtcblx0YmFja2dyb3VuZC1jb2xvcjogQGJhY2tncm91bmQtY29sb3Itd2hpdGUtLWxpZ2h0O1xuXHRjb2xvcjogQGNvbnN0LWNvbG9yLXByaW1hcnk7XG5cdGxpbmUtaGVpZ2h0OiAxO1xuXHRvdmVyZmxvdy15OiBoaWRkZW47XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHQuY2xpZW50LWRhcmttb2RlICYge1xuXHRcdGJhY2tncm91bmQ6IEBjb25zdC1jb2xvci1ncmF5LS1kYXJrO1xuXHR9XG5cblx0OmRlZXAoLmFzbi1ub3RpY2UtZW50ZXItZnJvbSksXG5cdDpkZWVwKC5hc24tbm90aWNlLWFwcGVhci1mcm9tKSxcblx0OmRlZXAoLmFzbi1ub3RpY2UtbGVhdmUtdG8pIHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cblx0OmRlZXAoLmFzbi1ub3RpY2UtZW50ZXItYWN0aXZlKSxcblx0OmRlZXAoLmFzbi1ub3RpY2UtYXBwZWFyLWFjdGl2ZSksXG5cdDpkZWVwKC5hc24tbm90aWNlLWxlYXZlLWFjdGl2ZSkge1xuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcblx0fVxufVxuXG4uZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlc19fdGl0bGUge1xuXHRvcmRlcjogMTtcblx0cGFkZGluZzogMC4yZW0gMC40ZW07XG5cdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLS1zbWFsbDtcblx0YmFja2dyb3VuZDogQGNvbG9yLS1wcmltYXJ5O1xuXHRjb2xvcjogQGNvbnN0LWNvbG9yLXdoaXRlO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlc19fbm90aWNlIHtcblx0d2lkdGg6IDEwMCU7XG5cdG9yZGVyOiAyO1xuXHRtYXJnaW46IDAuNWVtO1xufVxuXG4uZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlc19fbm90aWNlX19jb250ZW50IHtcblx0Ly8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLXByb3BlcnR5LXZhbHVlLWtleXdvcmQtbm8tZGVwcmVjYXRlZFxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXHR3aWxsLWNoYW5nZTogb3BhY2l0eTtcbn1cblxuLmdhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXNfX2Rpc21pc3Mge1xuXHRtaW4td2lkdGg6IDJlbTtcblx0b3JkZXI6IDM7XG5cblx0OmRlZXAoLmNkeC1idXR0b24pIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRwYWRkaW5nOiAwLjI1ZW07XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdC5jZHgtaWNvbiBzdmcge1xuXHRcdFx0XHRmaWxsOiAjMzZjO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4udmUtYWN0aXZhdGVkLWRpc2FibGVkKCchaW1wb3J0YW50Jyk7XG48L3N0eWxlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHREaXNtaXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1R1cm4gb2ZmIHRoaXMgbm90aWNlJyxcblx0XHRcdGphOiAnQVNO44KS44Kq44OV44Gr44GZ44KLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXreWFrOWRiicsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zplonlhazlkYonLFxuXHRcdH0pLFxuXHRcdERpc21pc3NOb3RpY2VUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBjaG9zZW4gdG8gdHVybiBvZmYgQWR2YW5jZWQgU2l0ZSBOb3RpY2VzIGZvciB0aGUgbmV4dCAzMCBkYXlzLicsXG5cdFx0XHRqYTogJ+S7iuW+jDMw5pel6ZaT44CBQVNO44KS44Kq44OV44Gr44GZ44KL44GT44Go44KS6YG45oqe44GX44G+44GX44Gf44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOW3sumAieaLqeWcqOaOpeS4i+adpTMw5pel5YaF5YWz6Zet4oCc6auY57qn56uZ54K56YCa5ZGK4oCd44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOW3sumBuOaTh+WcqOaOpeS4i+S+hjMw5pel5YWn6Zec6ZaJ44CM6auY57Sa56uZ6bue6YCa5ZGK44CN44CCJyxcblx0XHR9KSxcblx0XHREaXNtaXNzTm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIHRoZSBzaXRlLXdpZGUgYW5ub3VuY2VtZW50IGlzIG5vdCB1cGRhdGVkIHdpdGhpbiB0aGUgbmV4dCAzMCBkYXlzLCBpdCB3aWxsIG5vIGxvbmdlciBiZSBkaXNwbGF5ZWQ7IGhvd2V2ZXIsIGlmIHRoZSBzaXRlLXdpZGUgYW5ub3VuY2VtZW50IGlzIHVwZGF0ZWQsIGl0IHdpbGwgYmUgZGlzcGxheWVkIGFnYWluLicsXG5cdFx0XHRqYTogJ+OCteOCpOODiOWFqOS9k+OBrumAmuefpeOBjOS7iuW+jDMw5pel5Lul5YaF44Gr5pu05paw44GV44KM44Gq44GE5aC05ZCI44CB6KGo56S644GV44KM44Gq44GP44Gq44KK44G+44GZ44CC44Gf44Gg44GX44CB44K144Kk44OI5YWo5L2T44Gu6YCa55+l44GM5pu05paw44GV44KM44KL5aC05ZCI44Gv44CB5YaN44Gz6KGo56S644GV44KM44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iLpeaOpeS4i+adpTMw5pel5YaF5YWo56uZ5YWs5ZGK5pyq5pyJ5pu05paw77yM5YiZ5LiN5YaN5pi+56S677yb5L2G5piv77yM6Iul5YWo56uZ5YWs5ZGK5YaF5a655pu05paw77yM5YiZ5bCG6YeN5paw5pi+56S644CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+iLpeaOpeS4i+S+hjMw5pel5YWn5YWo56uZ5YWs5ZGK5pyq5pyJ5pu05paw77yM5YmH5LiN5YaN6aGv56S677yb5L2G5piv77yM6Iul5YWo56uZ5YWs5ZGK5YWn5a655pu05paw77yM5YmH5bCH6YeN5paw6aGv56S644CCJyxcblx0XHR9KSxcblx0XHRUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBbm5vdW5jZW1lbnQnLFxuXHRcdFx0amE6ICfpgJrnn6UnLFxuXHRcdFx0emg6ICflhazlkYonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24sIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzIG5vcHJpbnRcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzX190aXRsZVwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcImdhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXNfX25vdGljZVwiIH1cbmNvbnN0IF9ob2lzdGVkXzQgPSBbXCJpbm5lckhUTUxcIl1cbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcImdhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXNfX2Rpc21pc3NcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ1RpdGxlJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgX2NyZWF0ZVZOb2RlKF9UcmFuc2l0aW9uLCB7XG4gICAgICAgIG5hbWU6IFwiYXNuLW5vdGljZVwiLFxuICAgICAgICBtb2RlOiBcIm91dC1pblwiLFxuICAgICAgICBhcHBlYXI6IFwiXCIsXG4gICAgICAgIG9uQWZ0ZXJMZWF2ZTogJHByb3BzLm9uTm90aWNlSGlkZGVuXG4gICAgICB9LCB7XG4gICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAoJHByb3BzLnN0YXRlLnZpc2libGUpXG4gICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGtleTogJHByb3BzLnN0YXRlLmtleSxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzX19ub3RpY2VfX2NvbnRlbnQgY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAkcHJvcHMuc3RhdGUuaHRtbFxuICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF80KSlcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgXSksXG4gICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJvbkFmdGVyTGVhdmVcIl0pXG4gICAgXSksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF81LCBbXG4gICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLmdldE1lc3NhZ2UoJ0Rpc21pc3MnKSxcbiAgICAgICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdEaXNtaXNzJyksXG4gICAgICAgIG9uQ2xpY2s6ICRwcm9wcy5vbkRpc21pc3NcbiAgICAgIH0sIHtcbiAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhJY29uXCJdLCB7IGljb246ICRzZXR1cC5jZHhJY29uQ2xvc2UgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJhcmlhLWxhYmVsXCIsIFwidGl0bGVcIiwgXCJvbkNsaWNrXCJdKVxuICAgIF0pXG4gIF0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEFkdmFuY2VkU2l0ZU5vdGljZXNcXFxcbW9kdWxlc1xcXFxOb3RpY2VBcmVhLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcQWR2YW5jZWRTaXRlTm90aWNlc1xcXFxtb2R1bGVzXFxcXE5vdGljZUFyZWEudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEFkdmFuY2VkU2l0ZU5vdGljZXNcXFxcbW9kdWxlc1xcXFxOb3RpY2VBcmVhLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXEFkdmFuY2VkU2l0ZU5vdGljZXNcXFxcbW9kdWxlc1xcXFxOb3RpY2VBcmVhLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1jMzBiZjYwZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiY29uc3Qge3dnVXNlckdyb3Vwcywgd2dHbG9iYWxHcm91cHMsIHdnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgaW5fZ3JvdXAgPSAoZ3JvdXA6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gISEod2dVc2VyR3JvdXBzPy5pbmNsdWRlcyhncm91cCkgfHwgKHdnR2xvYmFsR3JvdXBzIGFzIHN0cmluZ1tdKT8uaW5jbHVkZXMoZ3JvdXApKTtcbn07XG5cbmNvbnN0IG9ubHlfZm9yID0gKHVzZXJMYW5ndWFnZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiB1c2VyTGFuZ3VhZ2UgPT09IHdnVXNlckxhbmd1YWdlO1xufTtcblxuY29uc3QgbWF0Y2hDcml0ZXJpYSA9ICgkbm90aWNlOiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0Y29uc3QgY2FjaGUgPSAkbm90aWNlLmRhdGEoJ2Fzbi1jYWNoZScpIGFzIGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdGlmIChjYWNoZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9XG5cblx0Y29uc3QgdGVzdENyaXRlcmlhID0gKGNyaXRlcmlhOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHQvLyBGSVhNRTogVGhpcyBzaG91bGRuJ3QgYmUgdXNpbmcgZXZhbCBvbiBkYXRhIGVudGVyZWQgaW4gd2lraXRleHQuXG5cdFx0Ly8gSWYgdGhhdCBkYXRhIGlzIG1hbGZvcm1lZCBpdCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBlLmcuIGNyaXRlcmlhID0gXCIoZmFsc2UpKVwiXG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiB3aW5kb3cuZXZhbChjcml0ZXJpYSkgYXMgYm9vbGVhbjtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0bGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0IGNyaXRlcmlhRGF0YTogc3RyaW5nID0gKCgkbm90aWNlLmRhdGEoJ2Fzbi1jcml0ZXJpYScpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJycpLnRyaW0oKTtcblx0aWYgKGNyaXRlcmlhRGF0YSkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXN1bHQgPSB0ZXN0Q3JpdGVyaWEoZGVjb2RlVVJJQ29tcG9uZW50KGNyaXRlcmlhRGF0YS5yZXBsYWNlKC9cXCsvZywgJyUyMCcpKSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdH1cblx0fSBlbHNlIGlmICgkbm90aWNlLmF0dHIoJ2NsYXNzJykpIHtcblx0XHRsZXQgY3JpdGVyaWE6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV9zeXNvcCcpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gaW5fZ3JvdXAoJ3N5c29wJykgfHwgaW5fZ3JvdXAoJ3N0ZXdhcmQnKSB8fCBpbl9ncm91cCgncWl1d2VuJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X2xvZ2dlZCcpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gaW5fZ3JvdXAoJ3VzZXInKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfYW5vbicpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gIWluX2dyb3VwKCd1c2VyJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX2NuJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtY24nKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfc2cnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1zZycpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9teScpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLW15Jyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX2hrJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtaGsnKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfbW8nKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1tbycpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF90dycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLXR3Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNyaXRlcmlhID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNyaXRlcmlhID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXN1bHQgPSBjcml0ZXJpYTtcblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSB0cnVlO1xuXHR9XG5cblx0JG5vdGljZS5kYXRhKCdhc24tY2FjaGUnLCByZXN1bHQpO1xuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQge21hdGNoQ3JpdGVyaWF9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QWlDLEdBQU03TCxtQkFBQThMLFNBQVE7QUFFckQsVUFBTTFDLGNBQXNCeUMsTUFBTXZKLEtBQWExQyxrQkFBa0I7QUFDakUsUUFBSSxDQUFDd0osWUFBWUwsUUFBUTtBQUN4QjtJQUNEO0FBRUEsVUFBTXdCLGdCQUFBLE1BQXFDeEksa0JBQWtCO0FBQzdELFFBQUksR0FBQTZKLHdCQUFDckIsY0FBYzNILGNBQUEsUUFBQWdKLDBCQUFBLFVBQWRBLHNCQUF3QjdDLFNBQVE7QUFDcEM7SUFDRDtBQUVBLFVBQU1nRCxjQUFzQkMsS0FBS0MsTUFBTUQsS0FBS0UsT0FBTyxJQUFJM0IsY0FBYzNILFNBQVNtRyxNQUFNO0FBQ3BGUSxnQkFBWUgsYUFBYTJDLGFBQWF4QixhQUFhO0VBQ3BELENBQUE7QUFBQSxXQWZnQjRCLHNCQUFBO0FBQUEsV0FBQUMscUJBQUF2SyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFxSztBQUFBLEdBQUEsRUFlYjsiLAogICJuYW1lcyI6IFsiQnJvYWRjYXN0Q2hhbm5lbCIsICJhamF4UGFnZVRpdGxlIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJzdG9yYWdlS2V5IiwgImNhY2hlS2V5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAid2dVc2VyTGFuZ3VhZ2UiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBhZ2UiLCAidXNlbGFuZyIsICJ2YXJpYW50IiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInF1ZXJ5QXBpIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmVzcG9uc2UiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAic2V0T2JqZWN0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImxvYWRSZW1vdGVOb3RpY2VzIiwgIl9yZWYyIiwgInJlc3BvbnNlUGFyc2UiLCAidGV4dCIsICIkcmVtb3RlTm90aWNlIiwgIiQiLCAiaHRtbCIsICJmaW5kIiwgIiRyZW1vdGVOb3RpY2VzIiwgIiRub3RpY2VzMiIsICJyZW1vdGVOb3RpY2VzVmVyc2lvbiIsICJkYXRhIiwgInRvU3RyaW5nIiwgIiRub3RpY2VzIiwgImltcG9ydF92dWUzIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkRpc21pc3MiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiRGlzbWlzc05vdGljZVRpdGxlIiwgIkRpc21pc3NOb3RpY2UiLCAiVGl0bGUiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImNkeEljb25DbG9zZSIsICJwYXRoIiwgImltcG9ydF92dWUyIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJfaG9pc3RlZF8zIiwgIl9ob2lzdGVkXzQiLCAiX2hvaXN0ZWRfNSIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAiVHJhbnNpdGlvbiIsICJuYW1lIiwgIm1vZGUiLCAiYXBwZWFyIiwgIm9uQWZ0ZXJMZWF2ZSIsICJvbk5vdGljZUhpZGRlbiIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAic3RhdGUiLCAidmlzaWJsZSIsICJpbm5lckhUTUwiLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgIl8iLCAid2VpZ2h0IiwgInR5cGUiLCAidGl0bGUiLCAib25DbGljayIsICJvbkRpc21pc3MiLCAiaWNvbiIsICJOb3RpY2VBcmVhX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJOb3RpY2VBcmVhX2RlZmF1bHQyIiwgIndnVXNlckdyb3VwcyIsICJ3Z0dsb2JhbEdyb3VwcyIsICJ3Z1VzZXJMYW5ndWFnZTIiLCAiaW5fZ3JvdXAiLCAiZ3JvdXAiLCAiaW5jbHVkZXMiLCAib25seV9mb3IiLCAidXNlckxhbmd1YWdlIiwgIm1hdGNoQ3JpdGVyaWEiLCAiJG5vdGljZSIsICJfJG5vdGljZSRkYXRhIiwgImNhY2hlIiwgInRlc3RDcml0ZXJpYSIsICJjcml0ZXJpYSIsICJ3aW5kb3ciLCAiZXZhbCIsICJyZXN1bHQiLCAiY3JpdGVyaWFEYXRhIiwgInRyaW0iLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInJlcGxhY2UiLCAiYXR0ciIsICJoYXNDbGFzcyIsICJicm9hZGNhc3RDaGFubmVsIiwgIkJyb2FkY2FzdENoYW5uZWwiLCAiY3VycmVudFZlcnNpb24iLCAibG9jYWxWZXJzaW9uIiwgInRpbWVyIiwgImNsb3NlZCIsICJub3RpY2VBcHAiLCAibm90aWNlUm9vdCIsICJub3RpY2VTdGF0ZSIsICJwZW5kaW5nTm90aWNlIiwgImFjdGl2ZVN0eWxlSWQiLCAibm90aWNlU3R5bGVzIiwgInVwZGF0ZU5vdGljZVN0eWxlIiwgInN0eWxlSWQiLCAiX2kiLCAiX25vdGljZVN0eWxlcyIsICJsZW5ndGgiLCAic3R5bGUiLCAiZGlzYWJsZWQiLCAibm90aWNlU3R5bGUiLCAic2NoZWR1bGVOZXh0Tm90aWNlIiwgIiRtb3VudFBvaW50IiwgIm5leHRJbmRleCIsICJzZXRUaW1lb3V0IiwgInNob3dOb3RpY2VzIiwgInNob3dQZW5kaW5nTm90aWNlIiwgIm5leHROb3RpY2UiLCAiY2xvc2VOb3RpY2VzIiwgIl9ub3RpY2VBcHAiLCAiX25vdGljZVJvb3QiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAiY2xlYXJUaW1lb3V0IiwgInVubW91bnQiLCAicmVtb3ZlIiwgInNldCIsICJkaXNtaXNzTm90aWNlIiwgIm5vdGlmeSIsICJ0YWciLCAiaW5kZXgiLCAicmVtb3RlTm90aWNlcyIsICJfcmVtb3RlTm90aWNlcyR2ZXJzaW8iLCAiXyRub3RpY2UkZGF0YTIiLCAibm90aWNlc0xlbmd0aCIsICJzZWxlY3RlZEluZGV4IiwgIm9mZnNldCIsICJjYW5kaWRhdGVJbmRleCIsICJjYW5kaWRhdGVOb3RpY2UiLCAiZXEiLCAibmV4dE5vdGljZUluZGV4IiwgImxvYWRlciIsICJhZGRTdHlsZVRhZyIsICJub3RpY2VIdG1sIiwgIm5vdGljZVN0eWxlSWQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAicmVhY3RpdmUiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX3JlbW90ZU5vdGljZXMkJG5vdGljIiwgIiRib2R5IiwgImdldEJvZHkiLCAicmFuZG9tSW5kZXgiLCAiTWF0aCIsICJmbG9vciIsICJyYW5kb20iLCAiYWR2YW5jZWRTaXRlTm90aWNlcyIsICJfYWR2YW5jZWRTaXRlTm90aWNlcyJdCn0K
