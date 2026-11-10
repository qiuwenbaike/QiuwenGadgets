/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/CookieWarning}
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

// dist/CookieWarning/CookieWarning.js
//! src/CookieWarning/options.json
require_broadcastchannel_polyfill();
var readingPIPPKey = "consentRead";
var storageKey = "ext.gadget.CookieWarning_cookieConsent";
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/CookieWarning/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Agree: (0, import_ext_gadget.localize)({
      en: "I agree",
      ja: "すべて許可する",
      zh: "同意"
    }),
    CookieNotice: (0, import_ext_gadget.localize)({
      en: "To provide better experience, we utilize cookies and other technologies to provide services.",
      ja: "より良いサービスを提供するために、クッキーやその他の技術を利用しています。",
      "zh-hans": "为了提供最佳体验，我们利用Cookie及其他技术提供服务。",
      "zh-hant": "為了提供最佳體驗，我们利用Cookie及其他技術提供服務；"
    }),
    PIPPNotice0: (0, import_ext_gadget.localize)({
      en: `You can refer to our `,
      ja: `個人情報の取り扱い方法については、`,
      "zh-hans": `您可以查阅我们的`,
      "zh-hant": `您可以查閱我們的`
    }),
    PIPPNotice1: (0, import_ext_gadget.localize)({
      en: `Personal Information Protection Policy`,
      ja: `個人情報保護方針`,
      "zh-hans": `个人信息保护方针`,
      "zh-hant": `個人信息保護方針`
    }),
    PIPPNotice2: (0, import_ext_gadget.localize)({
      en: ` to learn how we handle your personal information.`,
      ja: `をご参照ください。`,
      "zh-hans": `，了解我们如何处理您的个人信息。`,
      "zh-hant": `，了解我們如何處理您的個人資訊。`
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    agreeButtonOnClick: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const personalInfoPolicyUrl = `/wiki/QW:PIPP?${readingPIPPKey}=1`;
    const __returned__ = {
      props,
      personalInfoPolicyUrl,
      get CdxButton() {
        return import_codex.CdxButton;
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
  class: "cookie-warning noprint"
};
var _hoisted_2 = ["title"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", _hoisted_1, [(0, import_vue2.createElementVNode)("p", null, [(0, import_vue2.createTextVNode)(
    (0, import_vue2.toDisplayString)($setup.getMessage("CookieNotice")) + " " + (0, import_vue2.toDisplayString)($setup.getMessage("PIPPNotice0")) + " ",
    1
    /* TEXT */
  ), (0, import_vue2.createElementVNode)("a", {
    rel: "noopener",
    target: "_blank",
    href: $setup.personalInfoPolicyUrl,
    title: $setup.getMessage("PIPPNotice1")
  }, (0, import_vue2.toDisplayString)($setup.getMessage("PIPPNotice1")), 9, _hoisted_2), (0, import_vue2.createTextVNode)(
    " " + (0, import_vue2.toDisplayString)($setup.getMessage("PIPPNotice2")),
    1
    /* TEXT */
  )]), (0, import_vue2.createVNode)($setup["CdxButton"], {
    action: "progressive",
    weight: "primary",
    onClick: $setup.props.agreeButtonOnClick
  }, {
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createTextVNode)(
      (0, import_vue2.toDisplayString)($setup.getMessage("Agree")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["onClick"])]);
}
//! src/CookieWarning/App.vue
App_default.render = render;
App_default.__file = "src\\CookieWarning\\App.vue";
App_default.__scopeId = "data-v-f36e5378";
var App_default2 = App_default;
//! src/CookieWarning/CookieWarning.ts
var import_vue3 = require("vue");
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(function cookieWarning() {
  const {
    wgUserName
  } = mw.config.get();
  const lastStorageValue = mw.storage.get(storageKey);
  const urlConsentRead = mw.util.getParamValue(readingPIPPKey);
  if (wgUserName || lastStorageValue === "1" || urlConsentRead) {
    return;
  }
  const closeWarning = () => {
    broadcastChannel.postMessage("close");
    broadcastChannel.close();
    rootElement.remove();
    mw.storage.set(storageKey, "1", 60 * 60 * 1e3 * 24 * 30);
  };
  const broadcastChannel = new BroadcastChannel(storageKey);
  broadcastChannel.addEventListener("message", closeWarning);
  const rootElement = document.createElement("div");
  document.body.append(rootElement);
  const app = (0, import_vue3.createApp)(App_default2, {
    agreeButtonOnClick: closeWarning
  });
  app.mount(rootElement);
});

})();

/* </nowiki> */

