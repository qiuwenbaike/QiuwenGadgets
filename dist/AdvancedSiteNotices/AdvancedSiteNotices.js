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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvb3B0aW9ucy5qc29uIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL0FkdmFuY2VkU2l0ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvbG9hZFJlbW90ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9zaG93Tm90aWNlLnRzIiwgImRpc3QvQWR2YW5jZWRTaXRlTm90aWNlcy9zcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL05vdGljZUFyZWEudnVlIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcQWR2YW5jZWRTaXRlTm90aWNlc1xcbW9kdWxlc1xcTm90aWNlQXJlYS52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL05vdGljZUFyZWEudnVlIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvdXRpbC9tYXRjaENyaXRlcmlhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgIntcblx0XCJhamF4UGFnZVRpdGxlXCI6IFwiVGVtcGxhdGU6QWR2YW5jZWRTaXRlTm90aWNlcy9hamF4XCIsXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI3NpdGVOb3RpY2VcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5BZHZhbmNlZFNpdGVOb3RpY2VzX2Rpc21pc3NBU05cIixcblx0XCJjYWNoZUtleVwiOiBcImV4dC5nYWRnZXQuQWR2YW5jZWRTaXRlTm90aWNlc19jYWNoZVwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bG9hZFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy9sb2FkUmVtb3RlTm90aWNlcyc7XG5pbXBvcnQge3Nob3dOb3RpY2VzfSBmcm9tICcuL21vZHVsZXMvc2hvd05vdGljZSc7XG5cbihhc3luYyBmdW5jdGlvbiBhZHZhbmNlZFNpdGVOb3RpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSBhd2FpdCBnZXRCb2R5KCk7XG5cblx0Y29uc3QgJG1vdW50UG9pbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoISRtb3VudFBvaW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZXM6IFJlbW90ZU5vdGljZXMgPSBhd2FpdCBsb2FkUmVtb3RlTm90aWNlcygpO1xuXHRpZiAoIXJlbW90ZU5vdGljZXMuJG5vdGljZXM/Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJhbmRvbUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1vdGVOb3RpY2VzLiRub3RpY2VzLmxlbmd0aCk7XG5cdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCByYW5kb21JbmRleCwgcmVtb3RlTm90aWNlcyk7XG59KSgpO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQWR2YW5jZWRTaXRlTm90aWNlcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5pbnRlcmZhY2UgUmVtb3RlTm90aWNlcyB7XG5cdCRub3RpY2VzPzogSlF1ZXJ5O1xuXHR2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5jb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0YWN0aW9uOiAncGFyc2UnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAndGV4dCcsXG5cdHBhZ2U6IE9QVElPTlMuYWpheFBhZ2VUaXRsZSxcblx0dXNlbGFuZzogd2dVc2VyTGFuZ3VhZ2UsXG5cdHZhcmlhbnQ6IHdnVXNlckxhbmd1YWdlLFxuXHRzbWF4YWdlOiA2MDAsXG5cdG1heGFnZTogNjAwLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoKTogUHJvbWlzZTxSZXR1cm5UeXBlPG13LkFwaVsnZ2V0J10+PiA9PiB7XG5cdHRyeSB7XG5cdFx0bGV0IHJlc3BvbnNlO1xuXG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuY2FjaGVLZXkpKSB7XG5cdFx0XHRyZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuY2FjaGVLZXkpIGFzIFJldHVyblR5cGU8bXcuQXBpWydnZXQnXT47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbWV0ZXJzKTtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuY2FjaGVLZXksIHJlc3BvbnNlLCA2MCAqIDEwKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0FkdmFuY2VkU2l0ZU5vdGljZXNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIFJlbW90ZU5vdGljZXMsIHF1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlcywgcXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5cbnR5cGUgQXBpUmVzcG9uc2UgPSB7XG5cdHBhcnNlOiB7XG5cdFx0dGV4dD86IHN0cmluZztcblx0fTtcbn07XG5cbmNvbnN0IGxvYWRSZW1vdGVOb3RpY2VzID0gYXN5bmMgKCk6IFByb21pc2U8UmVtb3RlTm90aWNlcz4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoKTtcblx0Y29uc3QgcmVzcG9uc2VQYXJzZSA9IHJlc3BvbnNlWydwYXJzZSddIGFzIEFwaVJlc3BvbnNlWydwYXJzZSddO1xuXG5cdGlmICghcmVzcG9uc2VQYXJzZT8udGV4dCkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0ICRyZW1vdGVOb3RpY2UgPSAkKCc8ZGl2PicpLmh0bWwocmVzcG9uc2VQYXJzZS50ZXh0KS5maW5kKCd1bC5zaXRlbnRzJyk7XG5cdGlmICghJHJlbW90ZU5vdGljZSkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0ICRyZW1vdGVOb3RpY2VzOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyckbm90aWNlcyddPiA9ICRyZW1vdGVOb3RpY2U7XG5cblx0Y29uc3QgJG5vdGljZXM6IEpRdWVyeSA9ICRyZW1vdGVOb3RpY2VzLmZpbmQoJ2xpJyk7XG5cdGNvbnN0IHJlbW90ZU5vdGljZXNWZXJzaW9uOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyd2ZXJzaW9uJ10+ID0gKFxuXHRcdCRyZW1vdGVOb3RpY2VzLmRhdGEoJ2Fzbi12ZXJzaW9uJykgYXMgbnVtYmVyXG5cdCkudG9TdHJpbmcoKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRub3RpY2VzLFxuXHRcdHZlcnNpb246IHJlbW90ZU5vdGljZXNWZXJzaW9uLFxuXHR9O1xufTtcblxuZXhwb3J0IHtsb2FkUmVtb3RlTm90aWNlc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIEFwcCwgY3JlYXRlQXBwLCByZWFjdGl2ZX0gZnJvbSAndnVlJztcbmltcG9ydCBOb3RpY2VBcmVhIGZyb20gJy4vTm90aWNlQXJlYS52dWUnO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge21hdGNoQ3JpdGVyaWF9IGZyb20gJy4vdXRpbC9tYXRjaENyaXRlcmlhJztcblxuY29uc3QgYnJvYWRjYXN0Q2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKE9QVElPTlMuc3RvcmFnZUtleSk7XG5cbmxldCBjdXJyZW50VmVyc2lvbjogc3RyaW5nID0gJzAnO1xuY29uc3QgbG9jYWxWZXJzaW9uID0gbXcuc3RvcmFnZS5nZXQoT1BUSU9OUy5zdG9yYWdlS2V5KSBhcyBzdHJpbmcgfCBudWxsO1xubGV0IHRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IHVuZGVmaW5lZDtcbmxldCBjbG9zZWQgPSBmYWxzZTtcbmxldCBub3RpY2VBcHA6IEFwcCB8IHVuZGVmaW5lZDtcbmxldCBub3RpY2VSb290OiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZDtcbmxldCBub3RpY2VTdGF0ZTpcblx0fCB7XG5cdFx0XHRodG1sOiBzdHJpbmc7XG5cdFx0XHRrZXk6IG51bWJlcjtcblx0XHRcdHZpc2libGU6IGJvb2xlYW47XG5cdCAgfVxuXHR8IHVuZGVmaW5lZDtcbmxldCBwZW5kaW5nTm90aWNlOlxuXHR8IHtcblx0XHRcdGh0bWw6IHN0cmluZztcblx0XHRcdGtleTogbnVtYmVyO1xuXHRcdFx0c3R5bGVJZDogbnVtYmVyO1xuXHRcdFx0bmV4dEluZGV4OiBudW1iZXI7XG5cdCAgfVxuXHR8IHVuZGVmaW5lZDtcbmxldCBhY3RpdmVTdHlsZUlkID0gLTE7XG5cbmxldCAkbm90aWNlczogSlF1ZXJ5O1xuY29uc3Qgbm90aWNlU3R5bGVzOiBIVE1MU3R5bGVFbGVtZW50W10gPSBbXTtcblxuY29uc3QgdXBkYXRlTm90aWNlU3R5bGUgPSAoc3R5bGVJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGlmIChhY3RpdmVTdHlsZUlkID09PSBzdHlsZUlkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBzdHlsZSBvZiBub3RpY2VTdHlsZXMpIHtcblx0XHRzdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cdH1cblx0Y29uc3Qgbm90aWNlU3R5bGUgPSBub3RpY2VTdHlsZXNbc3R5bGVJZF07XG5cdGlmIChub3RpY2VTdHlsZSkge1xuXHRcdG5vdGljZVN0eWxlLmRpc2FibGVkID0gZmFsc2U7XG5cdH1cblx0YWN0aXZlU3R5bGVJZCA9IHN0eWxlSWQ7XG59O1xuXG5jb25zdCBzY2hlZHVsZU5leHROb3RpY2UgPSAoJG1vdW50UG9pbnQ6IEpRdWVyeSwgbmV4dEluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcblx0dGltZXIgPSBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcblx0XHRzaG93Tm90aWNlcygkbW91bnRQb2ludCwgbmV4dEluZGV4KTtcblx0fSwgNyAqIDEwMDApO1xufTtcblxuY29uc3Qgc2hvd1BlbmRpbmdOb3RpY2UgPSAoJG1vdW50UG9pbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRpZiAoIXBlbmRpbmdOb3RpY2UgfHwgIW5vdGljZVN0YXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbmV4dE5vdGljZSA9IHBlbmRpbmdOb3RpY2U7XG5cdHBlbmRpbmdOb3RpY2UgPSB1bmRlZmluZWQ7XG5cdHVwZGF0ZU5vdGljZVN0eWxlKG5leHROb3RpY2Uuc3R5bGVJZCk7XG5cdG5vdGljZVN0YXRlLmh0bWwgPSBuZXh0Tm90aWNlLmh0bWw7XG5cdG5vdGljZVN0YXRlLmtleSA9IG5leHROb3RpY2Uua2V5O1xuXHRub3RpY2VTdGF0ZS52aXNpYmxlID0gdHJ1ZTtcblx0c2NoZWR1bGVOZXh0Tm90aWNlKCRtb3VudFBvaW50LCBuZXh0Tm90aWNlLm5leHRJbmRleCk7XG59O1xuXG5mdW5jdGlvbiBjbG9zZU5vdGljZXMoKTogdm9pZCB7XG5cdGlmIChjbG9zZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y2xvc2VkID0gdHJ1ZTtcblx0YnJvYWRjYXN0Q2hhbm5lbC5wb3N0TWVzc2FnZSgnY2xvc2UnKTtcblx0YnJvYWRjYXN0Q2hhbm5lbC5jbG9zZSgpO1xuXHRpZiAodGltZXIpIHtcblx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHR9XG5cdG5vdGljZUFwcD8udW5tb3VudCgpO1xuXHRub3RpY2VSb290Py5yZW1vdmUoKTtcblx0bXcuc3RvcmFnZS5zZXQoT1BUSU9OUy5zdG9yYWdlS2V5LCBjdXJyZW50VmVyc2lvbiwgNjAgKiA2MCAqIDI0ICogMzApO1xufVxuXG5mdW5jdGlvbiBkaXNtaXNzTm90aWNlKCk6IHZvaWQge1xuXHRjbG9zZU5vdGljZXMoKTtcblx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnRGlzbWlzc05vdGljZScpLCB7XG5cdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ0Rpc21pc3NOb3RpY2VUaXRsZScpLFxuXHRcdHRhZzogJ0FkdmFuY2VkU2l0ZU5vdGljZXMnLFxuXHR9KTtcbn1cblxuY29uc3Qgc2hvd05vdGljZXMgPSAoJG1vdW50UG9pbnQ6IEpRdWVyeSwgaW5kZXg6IG51bWJlciwgcmVtb3RlTm90aWNlcz86IFJlbW90ZU5vdGljZXMpOiB2b2lkID0+IHtcblx0aWYgKGNsb3NlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGN1cnJlbnRWZXJzaW9uID0gcmVtb3RlTm90aWNlcz8udmVyc2lvbiA/PyBjdXJyZW50VmVyc2lvbjtcblx0aWYgKGN1cnJlbnRWZXJzaW9uID09PSBsb2NhbFZlcnNpb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAocmVtb3RlTm90aWNlcz8uJG5vdGljZXMpIHtcblx0XHQoeyRub3RpY2VzfSA9IHJlbW90ZU5vdGljZXMpO1xuXHR9XG5cblx0Y29uc3Qgbm90aWNlc0xlbmd0aDogbnVtYmVyID0gJG5vdGljZXMubGVuZ3RoO1xuXHRsZXQgc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRsZXQgJG5vdGljZTogSlF1ZXJ5ID0gJCgpO1xuXHRmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBub3RpY2VzTGVuZ3RoOyBvZmZzZXQrKykge1xuXHRcdGNvbnN0IGNhbmRpZGF0ZUluZGV4ID0gKGluZGV4ICsgb2Zmc2V0KSAlIG5vdGljZXNMZW5ndGg7XG5cdFx0Y29uc3QgY2FuZGlkYXRlTm90aWNlID0gJG5vdGljZXMuZXEoY2FuZGlkYXRlSW5kZXgpO1xuXHRcdGlmIChtYXRjaENyaXRlcmlhKGNhbmRpZGF0ZU5vdGljZSkpIHtcblx0XHRcdCRub3RpY2UgPSBjYW5kaWRhdGVOb3RpY2U7XG5cdFx0XHRzZWxlY3RlZEluZGV4ID0gY2FuZGlkYXRlSW5kZXg7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0aWYgKHNlbGVjdGVkSW5kZXggPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IG5leHROb3RpY2VJbmRleCA9IChzZWxlY3RlZEluZGV4ICsgMSkgJSBub3RpY2VzTGVuZ3RoO1xuXG5cdGlmICh0eXBlb2YgJG5vdGljZS5kYXRhKCdhc24taHRtbCcpID09PSAnc3RyaW5nJykge1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLWh0bWwtcmF3JywgZGVjb2RlVVJJQ29tcG9uZW50KCgkbm90aWNlLmRhdGEoJ2Fzbi1odG1sJykgYXMgc3RyaW5nKS5yZXBsYWNlKC9cXCsvZywgJyUyMCcpKSk7XG5cdFx0JG5vdGljZS5kYXRhKCdhc24taHRtbCcsIG51bGwpO1xuXHR9XG5cdGlmICh0eXBlb2YgJG5vdGljZS5kYXRhKCdhc24tc3R5bGUnKSA9PT0gJ3N0cmluZycpIHtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZS1pZCcsIG5vdGljZVN0eWxlcy5sZW5ndGgpO1xuXHRcdGNvbnN0IHN0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gbXcubG9hZGVyLmFkZFN0eWxlVGFnKFxuXHRcdFx0ZGVjb2RlVVJJQ29tcG9uZW50KCgkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZScpIGFzIHN0cmluZykucmVwbGFjZSgvXFwrL2csICclMjAnKSlcblx0XHQpO1xuXHRcdHN0eWxlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRub3RpY2VTdHlsZXNbbm90aWNlU3R5bGVzLmxlbmd0aF0gPSBzdHlsZTtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZScsIG51bGwpO1xuXHR9XG5cblx0Y29uc3Qgbm90aWNlSHRtbDogc3RyaW5nID0gKCRub3RpY2UuZGF0YSgnYXNuLWh0bWwtcmF3JykgYXMgc3RyaW5nKSB8fCAkbm90aWNlLmh0bWwoKTtcblx0Y29uc3Qgbm90aWNlU3R5bGVJZCA9ICgkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZS1pZCcpIGFzIG51bWJlciB8IHVuZGVmaW5lZCkgPz8gLTE7XG5cdGlmICghbm90aWNlUm9vdCkge1xuXHRcdG5vdGljZVJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHQkbW91bnRQb2ludC5hcHBlbmQobm90aWNlUm9vdCk7XG5cdFx0bm90aWNlU3RhdGUgPSByZWFjdGl2ZSh7XG5cdFx0XHRodG1sOiBub3RpY2VIdG1sLFxuXHRcdFx0a2V5OiBzZWxlY3RlZEluZGV4LFxuXHRcdFx0dmlzaWJsZTogdHJ1ZSxcblx0XHR9KTtcblx0XHRub3RpY2VBcHAgPSBjcmVhdGVBcHAoTm90aWNlQXJlYSwge1xuXHRcdFx0c3RhdGU6IG5vdGljZVN0YXRlLFxuXHRcdFx0b25EaXNtaXNzOiBkaXNtaXNzTm90aWNlLFxuXHRcdFx0b25Ob3RpY2VIaWRkZW46ICgpID0+IHNob3dQZW5kaW5nTm90aWNlKCRtb3VudFBvaW50KSxcblx0XHR9KTtcblx0XHRub3RpY2VBcHAubW91bnQobm90aWNlUm9vdCk7XG5cdFx0dXBkYXRlTm90aWNlU3R5bGUobm90aWNlU3R5bGVJZCk7XG5cdFx0c2NoZWR1bGVOZXh0Tm90aWNlKCRtb3VudFBvaW50LCBuZXh0Tm90aWNlSW5kZXgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghbm90aWNlU3RhdGUgfHwgKG5vdGljZVN0YXRlLmh0bWwgPT09IG5vdGljZUh0bWwgJiYgYWN0aXZlU3R5bGVJZCA9PT0gbm90aWNlU3R5bGVJZCkpIHtcblx0XHRzY2hlZHVsZU5leHROb3RpY2UoJG1vdW50UG9pbnQsIG5leHROb3RpY2VJbmRleCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHRpbWVyKSB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0fVxuXHRpZiAobm90aWNlU3RhdGUuaHRtbCA9PT0gbm90aWNlSHRtbCkge1xuXHRcdHVwZGF0ZU5vdGljZVN0eWxlKG5vdGljZVN0eWxlSWQpO1xuXHRcdHNjaGVkdWxlTmV4dE5vdGljZSgkbW91bnRQb2ludCwgbmV4dE5vdGljZUluZGV4KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwZW5kaW5nTm90aWNlID0ge1xuXHRcdGh0bWw6IG5vdGljZUh0bWwsXG5cdFx0a2V5OiBzZWxlY3RlZEluZGV4LFxuXHRcdHN0eWxlSWQ6IG5vdGljZVN0eWxlSWQsXG5cdFx0bmV4dEluZGV4OiBuZXh0Tm90aWNlSW5kZXgsXG5cdH07XG5cdG5vdGljZVN0YXRlLnZpc2libGUgPSBmYWxzZTtcbn07XG5cbmJyb2FkY2FzdENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNsb3NlTm90aWNlcyk7XG5cbmV4cG9ydCB7c2hvd05vdGljZXN9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4SWNvbn0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmludGVyZmFjZSBOb3RpY2VWaWV3U3RhdGUge1xuXHRodG1sOiBzdHJpbmc7XG5cdGtleTogbnVtYmVyO1xuXHR2aXNpYmxlOiBib29sZWFuO1xufVxuXG5kZWZpbmVQcm9wczx7XG5cdHN0YXRlOiBOb3RpY2VWaWV3U3RhdGU7XG5cdG9uRGlzbWlzczogKCkgPT4gdm9pZDtcblx0b25Ob3RpY2VIaWRkZW46ICgpID0+IHZvaWQ7XG59PigpO1xuXG4vKipcbiAqIFNWRyBwYXRocyBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgcGF0aCBkYXRhIGlzIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cblxuLyoqIFBhdGggZm9yIGBjZHhJY29uQ2xvc2VgLiAqL1xuY29uc3QgY2R4SWNvbkNsb3NlID0ge1xuXHRwYXRoOiAnTTE2LjcwNyA0LjcwNyAxMS40MTQgMTBsNS4yOTMgNS4yOTMtMS40MTQgMS40MTRMMTAgMTEuNDE0bC01LjI5MyA1LjI5My0xLjQxNC0xLjQxNEw4LjU4NiAxMCAzLjI5MyA0LjcwN2wxLjQxNC0xLjQxNEwxMCA4LjU4Nmw1LjI5My01LjI5M3onLFxufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzIG5vcHJpbnRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlc19fdGl0bGVcIj57eyBnZXRNZXNzYWdlKCdUaXRsZScpIH19PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImdhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXNfX25vdGljZVwiPlxuXHRcdFx0PFRyYW5zaXRpb24gbmFtZT1cImFzbi1ub3RpY2VcIiBtb2RlPVwib3V0LWluXCIgYXBwZWFyIEBhZnRlci1sZWF2ZT1cIm9uTm90aWNlSGlkZGVuXCI+XG5cdFx0XHRcdDwhLS0gZXNsaW50LWRpc2FibGUgdnVlL25vLXYtaHRtbCAtLSBwYXJzZWQgSFRNTCBpcyBwcm92aWRlZCBieSB0aGUgY29uZmlndXJlZCBhbm5vdW5jZW1lbnQgdGVtcGxhdGUgLS0+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHR2LWlmPVwic3RhdGUudmlzaWJsZVwiXG5cdFx0XHRcdFx0OmtleT1cInN0YXRlLmtleVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzX19ub3RpY2VfX2NvbnRlbnQgY2VudGVyXCJcblx0XHRcdFx0XHR2LWh0bWw9XCJzdGF0ZS5odG1sXCJcblx0XHRcdFx0PjwvZGl2PlxuXHRcdFx0XHQ8IS0tIGVzbGludC1lbmFibGUgdnVlL25vLXYtaHRtbCAtLT5cblx0XHRcdDwvVHJhbnNpdGlvbj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlc19fZGlzbWlzc1wiPlxuXHRcdFx0PGNkeC1idXR0b25cblx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0OmFyaWEtbGFiZWw9XCJnZXRNZXNzYWdlKCdEaXNtaXNzJylcIlxuXHRcdFx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdEaXNtaXNzJylcIlxuXHRcdFx0XHRAY2xpY2s9XCJvbkRpc21pc3NcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8Y2R4LWljb24gOmljb249XCJjZHhJY29uQ2xvc2VcIiAvPlxuXHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuLmdhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRtaW4taGVpZ2h0OiA0ZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDAgMC41ZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkIEBjb25zdC1jb2xvci1ncmF5O1xuXHRib3gtc2hhZG93OiAwIDAuNXB4IDAgQGJhY2tncm91bmQtY29sb3ItcHJpbWFyeTtcblx0YmFja2dyb3VuZC1jb2xvcjogQGJhY2tncm91bmQtY29sb3Itd2hpdGUtLWxpZ2h0O1xuXHRjb2xvcjogQGNvbnN0LWNvbG9yLXByaW1hcnk7XG5cdGxpbmUtaGVpZ2h0OiAxO1xuXHRvdmVyZmxvdy15OiBoaWRkZW47XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHQuY2xpZW50LWRhcmttb2RlICYge1xuXHRcdGJhY2tncm91bmQ6IEBjb25zdC1jb2xvci1ncmF5LS1kYXJrO1xuXHR9XG59XG5cbi5nYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzX190aXRsZSB7XG5cdG9yZGVyOiAxO1xuXHRwYWRkaW5nOiAwLjJlbSAwLjRlbTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtLXNtYWxsO1xuXHRiYWNrZ3JvdW5kOiBAY29sb3ItLXByaW1hcnk7XG5cdGNvbG9yOiBAY29uc3QtY29sb3Itd2hpdGU7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5nYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzX19ub3RpY2Uge1xuXHR3aWR0aDogMTAwJTtcblx0b3JkZXI6IDI7XG5cdG1hcmdpbjogMC41ZW07XG59XG5cbi5nYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzX19ub3RpY2VfX2NvbnRlbnQge1xuXHQvLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tcHJvcGVydHktdmFsdWUta2V5d29yZC1uby1kZXByZWNhdGVkXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cdHdpbGwtY2hhbmdlOiBvcGFjaXR5O1xufVxuXG4uZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlc19fZGlzbWlzcyB7XG5cdG1pbi13aWR0aDogMmVtO1xuXHRvcmRlcjogMztcblxuXHQ6ZGVlcCguY2R4LWJ1dHRvbikge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdG1pbi13aWR0aDogMmVtO1xuXHRcdHBhZGRpbmc6IDAuMjVlbTtcblx0XHRmb250LXNpemU6IDE1MCU7XG5cdH1cblxuXHQ6ZGVlcCguY2R4LWljb24pIHtcblx0XHR3aWR0aDogMWVtO1xuXHRcdGhlaWdodDogMWVtO1xuXHR9XG59XG5cbi52ZS1hY3RpdmF0ZWQtZGlzYWJsZWQoJyFpbXBvcnRhbnQnKTtcbjwvc3R5bGU+XG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbi5nYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzIHtcblx0LmFzbi1ub3RpY2UtZW50ZXItZnJvbSxcblx0LmFzbi1ub3RpY2UtYXBwZWFyLWZyb20sXG5cdC5hc24tbm90aWNlLWxlYXZlLXRvIHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cblx0LmFzbi1ub3RpY2UtZW50ZXItYWN0aXZlLFxuXHQuYXNuLW5vdGljZS1hcHBlYXItYWN0aXZlLFxuXHQuYXNuLW5vdGljZS1sZWF2ZS1hY3RpdmUge1xuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RGlzbWlzczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUdXJuIG9mZiB0aGlzIG5vdGljZScsXG5cdFx0XHRqYTogJ0FTTuOCkuOCquODleOBq+OBmeOCiycsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl63lhazlkYonLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJ5YWs5ZGKJyxcblx0XHR9KSxcblx0XHREaXNtaXNzTm90aWNlVGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgY2hvc2VuIHRvIHR1cm4gb2ZmIEFkdmFuY2VkIFNpdGUgTm90aWNlcyBmb3IgdGhlIG5leHQgMzAgZGF5cy4nLFxuXHRcdFx0amE6ICfku4rlvowzMOaXpemWk+OAgUFTTuOCkuOCquODleOBq+OBmeOCi+OBk+OBqOOCkumBuOaKnuOBl+OBvuOBl+OBn+OAgicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjlt7LpgInmi6nlnKjmjqXkuIvmnaUzMOaXpeWGheWFs+mXreKAnOmrmOe6p+ermeeCuemAmuWRiuKAneOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjlt7Lpgbjmk4flnKjmjqXkuIvkvoYzMOaXpeWFp+mXnOmWieOAjOmrmOe0muermem7numAmuWRiuOAjeOAgicsXG5cdFx0fSksXG5cdFx0RGlzbWlzc05vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJZiB0aGUgc2l0ZS13aWRlIGFubm91bmNlbWVudCBpcyBub3QgdXBkYXRlZCB3aXRoaW4gdGhlIG5leHQgMzAgZGF5cywgaXQgd2lsbCBubyBsb25nZXIgYmUgZGlzcGxheWVkOyBob3dldmVyLCBpZiB0aGUgc2l0ZS13aWRlIGFubm91bmNlbWVudCBpcyB1cGRhdGVkLCBpdCB3aWxsIGJlIGRpc3BsYXllZCBhZ2Fpbi4nLFxuXHRcdFx0amE6ICfjgrXjgqTjg4jlhajkvZPjga7pgJrnn6XjgYzku4rlvowzMOaXpeS7peWGheOBq+abtOaWsOOBleOCjOOBquOBhOWgtOWQiOOAgeihqOekuuOBleOCjOOBquOBj+OBquOCiuOBvuOBmeOAguOBn+OBoOOBl+OAgeOCteOCpOODiOWFqOS9k+OBrumAmuefpeOBjOabtOaWsOOBleOCjOOCi+WgtOWQiOOBr+OAgeWGjeOBs+ihqOekuuOBleOCjOOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmjqXkuIvmnaUzMOaXpeWGheWFqOermeWFrOWRiuacquacieabtOaWsO+8jOWImeS4jeWGjeaYvuekuu+8m+S9huaYr++8jOiLpeWFqOermeWFrOWRiuWGheWuueabtOaWsO+8jOWImeWwhumHjeaWsOaYvuekuuOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfoi6XmjqXkuIvkvoYzMOaXpeWFp+WFqOermeWFrOWRiuacquacieabtOaWsO+8jOWJh+S4jeWGjemhr+ekuu+8m+S9huaYr++8jOiLpeWFqOermeWFrOWRiuWFp+WuueabtOaWsO+8jOWJh+Wwh+mHjeaWsOmhr+ekuuOAgicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQW5ub3VuY2VtZW50Jyxcblx0XHRcdGphOiAn6YCa55+lJyxcblx0XHRcdHpoOiAn5YWs5ZGKJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlcyBub3ByaW50XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlc19fdGl0bGVcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzX19ub3RpY2VcIiB9XG5jb25zdCBfaG9pc3RlZF80ID0gW1wiaW5uZXJIVE1MXCJdXG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzX19kaXNtaXNzXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdUaXRsZScpKSwgMSAvKiBURVhUICovKSxcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIFtcbiAgICAgIF9jcmVhdGVWTm9kZShfVHJhbnNpdGlvbiwge1xuICAgICAgICBuYW1lOiBcImFzbi1ub3RpY2VcIixcbiAgICAgICAgbW9kZTogXCJvdXQtaW5cIixcbiAgICAgICAgYXBwZWFyOiBcIlwiLFxuICAgICAgICBvbkFmdGVyTGVhdmU6ICRwcm9wcy5vbk5vdGljZUhpZGRlblxuICAgICAgfSwge1xuICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgKCRwcm9wcy5zdGF0ZS52aXNpYmxlKVxuICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6ICRwcm9wcy5zdGF0ZS5rZXksXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlc19fbm90aWNlX19jb250ZW50IGNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogJHByb3BzLnN0YXRlLmh0bWxcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfNCkpXG4gICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wib25BZnRlckxlYXZlXCJdKVxuICAgIF0pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNSwgW1xuICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5nZXRNZXNzYWdlKCdEaXNtaXNzJyksXG4gICAgICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnRGlzbWlzcycpLFxuICAgICAgICBvbkNsaWNrOiAkcHJvcHMub25EaXNtaXNzXG4gICAgICB9LCB7XG4gICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4SWNvblwiXSwgeyBpY29uOiAkc2V0dXAuY2R4SWNvbkNsb3NlIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiYXJpYS1sYWJlbFwiLCBcInRpdGxlXCIsIFwib25DbGlja1wiXSlcbiAgICBdKVxuICBdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxBZHZhbmNlZFNpdGVOb3RpY2VzXFxcXG1vZHVsZXNcXFxcTm90aWNlQXJlYS52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEFkdmFuY2VkU2l0ZU5vdGljZXNcXFxcbW9kdWxlc1xcXFxOb3RpY2VBcmVhLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEFkdmFuY2VkU2l0ZU5vdGljZXNcXFxcbW9kdWxlc1xcXFxOb3RpY2VBcmVhLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTFcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxBZHZhbmNlZFNpdGVOb3RpY2VzXFxcXG1vZHVsZXNcXFxcTm90aWNlQXJlYS52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxBZHZhbmNlZFNpdGVOb3RpY2VzXFxcXG1vZHVsZXNcXFxcTm90aWNlQXJlYS52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYzMwYmY2MGVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImNvbnN0IHt3Z1VzZXJHcm91cHMsIHdnR2xvYmFsR3JvdXBzLCB3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGluX2dyb3VwID0gKGdyb3VwOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0cmV0dXJuICEhKHdnVXNlckdyb3Vwcz8uaW5jbHVkZXMoZ3JvdXApIHx8ICh3Z0dsb2JhbEdyb3VwcyBhcyBzdHJpbmdbXSk/LmluY2x1ZGVzKGdyb3VwKSk7XG59O1xuXG5jb25zdCBvbmx5X2ZvciA9ICh1c2VyTGFuZ3VhZ2U6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gdXNlckxhbmd1YWdlID09PSB3Z1VzZXJMYW5ndWFnZTtcbn07XG5cbmNvbnN0IG1hdGNoQ3JpdGVyaWEgPSAoJG5vdGljZTogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IGNhY2hlID0gJG5vdGljZS5kYXRhKCdhc24tY2FjaGUnKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRpZiAoY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZTtcblx0fVxuXG5cdGNvbnN0IHRlc3RDcml0ZXJpYSA9IChjcml0ZXJpYTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0Ly8gRklYTUU6IFRoaXMgc2hvdWxkbid0IGJlIHVzaW5nIGV2YWwgb24gZGF0YSBlbnRlcmVkIGluIHdpa2l0ZXh0LlxuXHRcdC8vIElmIHRoYXQgZGF0YSBpcyBtYWxmb3JtZWQgaXQgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gZS5nLiBjcml0ZXJpYSA9IFwiKGZhbHNlKSlcIlxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gd2luZG93LmV2YWwoY3JpdGVyaWEpIGFzIGJvb2xlYW47XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGxldCByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdCBjcml0ZXJpYURhdGE6IHN0cmluZyA9ICgoJG5vdGljZS5kYXRhKCdhc24tY3JpdGVyaWEnKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnKS50cmltKCk7XG5cdGlmIChjcml0ZXJpYURhdGEpIHtcblx0XHR0cnkge1xuXHRcdFx0cmVzdWx0ID0gdGVzdENyaXRlcmlhKGRlY29kZVVSSUNvbXBvbmVudChjcml0ZXJpYURhdGEucmVwbGFjZSgvXFwrL2csICclMjAnKSkpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoJG5vdGljZS5hdHRyKCdjbGFzcycpKSB7XG5cdFx0bGV0IGNyaXRlcmlhOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfc3lzb3AnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IGluX2dyb3VwKCdzeXNvcCcpIHx8IGluX2dyb3VwKCdzdGV3YXJkJykgfHwgaW5fZ3JvdXAoJ3FpdXdlbicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV9sb2dnZWQnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IGluX2dyb3VwKCd1c2VyJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X2Fub24nKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9ICFpbl9ncm91cCgndXNlcicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9jbicpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLWNuJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX3NnJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2Zvcignemgtc2cnKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfbXknKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1teScpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9oaycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLWhrJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX21vJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtbW8nKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfdHcnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC10dycpO1xuXHRcdH1cblxuXHRcdGlmIChjcml0ZXJpYSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjcml0ZXJpYSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gY3JpdGVyaWE7XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gdHJ1ZTtcblx0fVxuXG5cdCRub3RpY2UuZGF0YSgnYXNuLWNhY2hlJywgcmVzdWx0KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHttYXRjaENyaXRlcmlhfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFNBQVMsUUFBUTtBQUNkLFVBQUksV0FBVyxDQUFDO0FBRWhCLGVBQVNBLGtCQUFpQixTQUFTO0FBQy9CLFlBQUksUUFBUTtBQUNaLGtCQUFVLE9BQU8sT0FBTztBQUV4QixZQUFJLEtBQUssdUJBQXVCLFVBQVU7QUFFMUMsaUJBQVMsRUFBRSxJQUFJLFNBQVMsRUFBRSxLQUFLLENBQUM7QUFDaEMsaUJBQVMsRUFBRSxFQUFFLEtBQUssSUFBSTtBQUV0QixhQUFLLFFBQVE7QUFDYixhQUFLLE1BQU07QUFDWCxhQUFLLFVBQVU7QUFDZixhQUFLLE1BQU0sSUFBSSxlQUFlO0FBQzlCLGFBQUssSUFBSSxNQUFNLE1BQU07QUFDckIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUVyQixlQUFPLGlCQUFpQixXQUFXLFNBQVMsR0FBRztBQUMzQyxjQUFJLEVBQUUsZ0JBQWdCLE9BQU8sYUFBYztBQUMzQyxjQUFJLEVBQUUsWUFBWSxRQUFRLEVBQUUsYUFBYSxHQUFJO0FBQzdDLGNBQUksRUFBRSxJQUFJLFVBQVUsR0FBRyxHQUFHLE1BQU0sTUFBTSxHQUFJO0FBQzFDLGNBQUksT0FBTyxLQUFLLE1BQU0sRUFBRSxRQUFRO0FBQ2hDLGdCQUFNLElBQUksTUFBTSxZQUFZLElBQUk7QUFBQSxRQUNwQyxDQUFDO0FBQUEsTUFDTDtBQUVBLE1BQUFBLGtCQUFpQixZQUFZO0FBQUE7QUFBQSxRQUV6QixJQUFJLE9BQU87QUFDUCxpQkFBTyxLQUFLO0FBQUEsUUFDaEI7QUFBQSxRQUNBLGFBQWEsU0FBUyxTQUFTO0FBQzNC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QUFFQXhDLGtCQUFnQjtJQUNmbkcsTUFBTThJO0lBQ054SCxLQUFLZ0g7SUFDTC9CLFNBQVN3QztJQUNUL0IsV0FBVzJCO0VBQ1o7QUFDQXpDLGNBQVk3QyxVQUFVO0FBQ3ZCO0FBRUFxQyxpQkFBaUI0RCxpQkFBaUIsV0FBV2pDLFlBQVk7OzsrQ0poTHhELGFBQW9EO0FBQUEsUUFBQWtDO0FBQ3BELFVBQU1DLFFBQUEsT0FBaUMsR0FBTTdMLG1CQUFBOEwsU0FBUTtBQUVyRCxVQUFNMUMsY0FBc0J5QyxNQUFNdkosS0FBYTFDLGtCQUFrQjtBQUNqRSxRQUFJLENBQUN3SixZQUFZTCxRQUFRO0FBQ3hCO0lBQ0Q7QUFFQSxVQUFNd0IsZ0JBQUEsTUFBcUN4SSxrQkFBa0I7QUFDN0QsUUFBSSxHQUFBNkosd0JBQUNyQixjQUFjM0gsY0FBQSxRQUFBZ0osMEJBQUEsVUFBZEEsc0JBQXdCN0MsU0FBUTtBQUNwQztJQUNEO0FBRUEsVUFBTWdELGNBQXNCQyxLQUFLQyxNQUFNRCxLQUFLRSxPQUFPLElBQUkzQixjQUFjM0gsU0FBU21HLE1BQU07QUFDcEZRLGdCQUFZSCxhQUFhMkMsYUFBYXhCLGFBQWE7RUFDcEQsQ0FBQTtBQUFBLFdBZmdCNEIsc0JBQUE7QUFBQSxXQUFBQyxxQkFBQXZLLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQXFLO0FBQUEsR0FBQSxFQWViOyIsCiAgIm5hbWVzIjogWyJCcm9hZGNhc3RDaGFubmVsIiwgImFqYXhQYWdlVGl0bGUiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInN0b3JhZ2VLZXkiLCAiY2FjaGVLZXkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJ3Z1VzZXJMYW5ndWFnZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicGFnZSIsICJ1c2VsYW5nIiwgInZhcmlhbnQiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnlBcGkiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJyZXNwb25zZSIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJzZXRPYmplY3QiLCAiZXJyb3IiLCAiY29uc29sZSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibG9hZFJlbW90ZU5vdGljZXMiLCAiX3JlZjIiLCAicmVzcG9uc2VQYXJzZSIsICJ0ZXh0IiwgIiRyZW1vdGVOb3RpY2UiLCAiJCIsICJodG1sIiwgImZpbmQiLCAiJHJlbW90ZU5vdGljZXMiLCAiJG5vdGljZXMyIiwgInJlbW90ZU5vdGljZXNWZXJzaW9uIiwgImRhdGEiLCAidG9TdHJpbmciLCAiJG5vdGljZXMiLCAiaW1wb3J0X3Z1ZTMiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiRGlzbWlzcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJEaXNtaXNzTm90aWNlVGl0bGUiLCAiRGlzbWlzc05vdGljZSIsICJUaXRsZSIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiY2R4SWNvbkNsb3NlIiwgInBhdGgiLCAiaW1wb3J0X3Z1ZTIiLCAiX2hvaXN0ZWRfMSIsICJjbGFzcyIsICJfaG9pc3RlZF8yIiwgIl9ob2lzdGVkXzMiLCAiX2hvaXN0ZWRfNCIsICJfaG9pc3RlZF81IiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJjcmVhdGVWTm9kZSIsICJUcmFuc2l0aW9uIiwgIm5hbWUiLCAibW9kZSIsICJhcHBlYXIiLCAib25BZnRlckxlYXZlIiwgIm9uTm90aWNlSGlkZGVuIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJzdGF0ZSIsICJ2aXNpYmxlIiwgImlubmVySFRNTCIsICJjcmVhdGVDb21tZW50Vk5vZGUiLCAiXyIsICJ3ZWlnaHQiLCAidHlwZSIsICJ0aXRsZSIsICJvbkNsaWNrIiwgIm9uRGlzbWlzcyIsICJpY29uIiwgIk5vdGljZUFyZWFfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIk5vdGljZUFyZWFfZGVmYXVsdDIiLCAid2dVc2VyR3JvdXBzIiwgIndnR2xvYmFsR3JvdXBzIiwgIndnVXNlckxhbmd1YWdlMiIsICJpbl9ncm91cCIsICJncm91cCIsICJpbmNsdWRlcyIsICJvbmx5X2ZvciIsICJ1c2VyTGFuZ3VhZ2UiLCAibWF0Y2hDcml0ZXJpYSIsICIkbm90aWNlIiwgIl8kbm90aWNlJGRhdGEiLCAiY2FjaGUiLCAidGVzdENyaXRlcmlhIiwgImNyaXRlcmlhIiwgIndpbmRvdyIsICJldmFsIiwgInJlc3VsdCIsICJjcml0ZXJpYURhdGEiLCAidHJpbSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAicmVwbGFjZSIsICJhdHRyIiwgImhhc0NsYXNzIiwgImJyb2FkY2FzdENoYW5uZWwiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJjdXJyZW50VmVyc2lvbiIsICJsb2NhbFZlcnNpb24iLCAidGltZXIiLCAiY2xvc2VkIiwgIm5vdGljZUFwcCIsICJub3RpY2VSb290IiwgIm5vdGljZVN0YXRlIiwgInBlbmRpbmdOb3RpY2UiLCAiYWN0aXZlU3R5bGVJZCIsICJub3RpY2VTdHlsZXMiLCAidXBkYXRlTm90aWNlU3R5bGUiLCAic3R5bGVJZCIsICJfaSIsICJfbm90aWNlU3R5bGVzIiwgImxlbmd0aCIsICJzdHlsZSIsICJkaXNhYmxlZCIsICJub3RpY2VTdHlsZSIsICJzY2hlZHVsZU5leHROb3RpY2UiLCAiJG1vdW50UG9pbnQiLCAibmV4dEluZGV4IiwgInNldFRpbWVvdXQiLCAic2hvd05vdGljZXMiLCAic2hvd1BlbmRpbmdOb3RpY2UiLCAibmV4dE5vdGljZSIsICJjbG9zZU5vdGljZXMiLCAiX25vdGljZUFwcCIsICJfbm90aWNlUm9vdCIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJjbGVhclRpbWVvdXQiLCAidW5tb3VudCIsICJyZW1vdmUiLCAic2V0IiwgImRpc21pc3NOb3RpY2UiLCAibm90aWZ5IiwgInRhZyIsICJpbmRleCIsICJyZW1vdGVOb3RpY2VzIiwgIl9yZW1vdGVOb3RpY2VzJHZlcnNpbyIsICJfJG5vdGljZSRkYXRhMiIsICJub3RpY2VzTGVuZ3RoIiwgInNlbGVjdGVkSW5kZXgiLCAib2Zmc2V0IiwgImNhbmRpZGF0ZUluZGV4IiwgImNhbmRpZGF0ZU5vdGljZSIsICJlcSIsICJuZXh0Tm90aWNlSW5kZXgiLCAibG9hZGVyIiwgImFkZFN0eWxlVGFnIiwgIm5vdGljZUh0bWwiLCAibm90aWNlU3R5bGVJZCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJyZWFjdGl2ZSIsICJjcmVhdGVBcHAiLCAibW91bnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfcmVtb3RlTm90aWNlcyQkbm90aWMiLCAiJGJvZHkiLCAiZ2V0Qm9keSIsICJyYW5kb21JbmRleCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJhZHZhbmNlZFNpdGVOb3RpY2VzIiwgIl9hZHZhbmNlZFNpdGVOb3RpY2VzIl0KfQo=
