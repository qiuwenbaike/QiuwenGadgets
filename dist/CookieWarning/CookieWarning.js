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
      en: "You can refer to our ",
      ja: "個人情報の取り扱い方法については、",
      "zh-hans": "您可以查阅我们的",
      "zh-hant": "您可以查閱我們的"
    }),
    PIPPNotice1: (0, import_ext_gadget.localize)({
      en: "Personal Information Protection Policy",
      ja: "個人情報保護方針",
      "zh-hans": "个人信息保护方针",
      "zh-hant": "個人信息保護方針"
    }),
    PIPPNotice2: (0, import_ext_gadget.localize)({
      en: " to learn how we handle your personal information.",
      ja: "をご参照ください。",
      "zh-hans": "，了解我们如何处理您的个人信息。",
      "zh-hant": "，了解我們如何處理您的個人資訊"
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
    const personalInfoPolicyUrl = "/wiki/QW:PIPP?".concat(readingPIPPKey, "=1");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvb3B0aW9ucy5qc29uIiwgImRpc3QvQ29va2llV2FybmluZy9zcmMvQ29va2llV2FybmluZy9BcHAudnVlIiwgInNyYy9Db29raWVXYXJuaW5nL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RTpcXENvZGVzXFxRaXV3ZW5cXFFpdXdlbkdhZGdldHNcXHNyY1xcQ29va2llV2FybmluZ1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9Db29raWVXYXJuaW5nL0FwcC52dWUiLCAic3JjL0Nvb2tpZVdhcm5pbmcvQ29va2llV2FybmluZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHZhciBjaGFubmVscyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gQnJvYWRjYXN0Q2hhbm5lbChjaGFubmVsKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIGNoYW5uZWwgPSBTdHJpbmcoY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGlkID0gJyRCcm9hZGNhc3RDaGFubmVsJCcgKyBjaGFubmVsICsgJyQnO1xuXG4gICAgICAgIGNoYW5uZWxzW2lkXSA9IGNoYW5uZWxzW2lkXSB8fCBbXTtcbiAgICAgICAgY2hhbm5lbHNbaWRdLnB1c2godGhpcyk7XG5cbiAgICAgICAgdGhpcy5fbmFtZSA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX2Nsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tYyA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0MS5zdGFydCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0Mi5zdGFydCgpO1xuXG4gICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUuc3RvcmFnZUFyZWEgIT09IGdsb2JhbC5sb2NhbFN0b3JhZ2UpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLm5ld1ZhbHVlID09IG51bGwgfHwgZS5uZXdWYWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLmtleS5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoKSAhPT0gaWQpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICR0aGlzLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQnJvYWRjYXN0Q2hhbm5lbC5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8vIEJyb2FkY2FzdENoYW5uZWwgQVBJXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RNZXNzYWdlOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBvdGhlciBjb250ZXh0cyB2aWEgc3RvcmFnZSBldmVudHMuLi5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9pZCArIFN0cmluZyhEYXRlLm5vdygpKSArICckJyArIFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gY3VycmVudCBjb250ZXh0IHZpYSBwb3J0c1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLmZvckVhY2goZnVuY3Rpb24oYmMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmMgPT09ICR0aGlzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgYmMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQyLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNoYW5uZWxzW3RoaXMuX2lkXS5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRXZlbnRUYXJnZXQgQVBJXG4gICAgICAgIGdldCBvbm1lc3NhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEub25tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25tZXNzYWdlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbigvKmV2ZW50Ki8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5kaXNwYXRjaEV2ZW50LmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCA9IGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsIHx8IEJyb2FkY2FzdENoYW5uZWw7XG59KShzZWxmKTtcbiIsICJ7XG5cdFwicmVhZGluZ1BJUFBLZXlcIjogXCJjb25zZW50UmVhZFwiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0LkNvb2tpZVdhcm5pbmdfY29va2llQ29uc2VudFwiXG59XG4iLCAiPCEtLSBlc2xpbnQtZGlzYWJsZSB2dWUvbm8tdi1odG1sIC0tPlxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtDZHhCdXR0b259IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRhZ3JlZUJ1dHRvbk9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBwZXJzb25hbEluZm9Qb2xpY3lVcmwgPSBgL3dpa2kvUVc6UElQUD8ke09QVElPTlMucmVhZGluZ1BJUFBLZXl9PTFgO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImNvb2tpZS13YXJuaW5nIG5vcHJpbnRcIj5cblx0XHQ8cD5cblx0XHRcdHt7IGdldE1lc3NhZ2UoJ0Nvb2tpZU5vdGljZScpIH19XG5cdFx0XHR7eyBnZXRNZXNzYWdlKCdQSVBQTm90aWNlMCcpIH19XG5cdFx0XHQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIDpocmVmPVwicGVyc29uYWxJbmZvUG9saWN5VXJsXCIgOnRpdGxlPVwiZ2V0TWVzc2FnZSgnUElQUE5vdGljZTEnKVwiPlxuXHRcdFx0XHR7eyBnZXRNZXNzYWdlKCdQSVBQTm90aWNlMScpIH19XG5cdFx0XHQ8L2E+XG5cdFx0XHR7eyBnZXRNZXNzYWdlKCdQSVBQTm90aWNlMicpIH19XG5cdFx0PC9wPlxuXHRcdDxjZHgtYnV0dG9uIGFjdGlvbj1cInByb2dyZXNzaXZlXCIgd2VpZ2h0PVwicHJpbWFyeVwiIEBjbGljaz1cInByb3BzLmFncmVlQnV0dG9uT25DbGlja1wiPlxuXHRcdFx0e3sgZ2V0TWVzc2FnZSgnQWdyZWUnKSB9fVxuXHRcdDwvY2R4LWJ1dHRvbj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4uY29va2llLXdhcm5pbmcge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDEwMTtcblx0Ym90dG9tOiAxcmVtO1xuXHRyaWdodDogMDtcblx0bGVmdDogMDtcblx0bWF4LXdpZHRoOiBtaW4oOTIuNSUsIDIwcmVtKTtcblx0cGFkZGluZzogMXJlbTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcblx0bWFyZ2luOiAxcmVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRjb2xvcjogIzE5MTkxOTtcblxuXHRwIHtcblx0XHRtYXJnaW4tdG9wOiAwO1xuXHR9XG5cblx0OmRlZXAoLmNkeC1idXR0b24pIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0cmlnaHQ6IGF1dG87XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFncmVlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUnLFxuXHRcdFx0amE6ICfjgZnjgbnjgaboqLHlj6/jgZnjgosnLFxuXHRcdFx0emg6ICflkIzmhI8nLFxuXHRcdH0pLFxuXHRcdENvb2tpZU5vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUbyBwcm92aWRlIGJldHRlciBleHBlcmllbmNlLCB3ZSB1dGlsaXplIGNvb2tpZXMgYW5kIG90aGVyIHRlY2hub2xvZ2llcyB0byBwcm92aWRlIHNlcnZpY2VzLicsXG5cdFx0XHRqYTogJ+OCiOOCiuiJr+OBhOOCteODvOODk+OCueOCkuaPkOS+m+OBmeOCi+OBn+OCgeOBq+OAgeOCr+ODg+OCreODvOOChOOBneOBruS7luOBruaKgOihk+OCkuWIqeeUqOOBl+OBpuOBhOOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6ICfkuLrkuobmj5DkvpvmnIDkvbPkvZPpqozvvIzmiJHku6zliKnnlKhDb29raWXlj4rlhbbku5bmioDmnK/mj5DkvpvmnI3liqHjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn54K65LqG5o+Q5L6b5pyA5L2z6auU6amX77yM5oiR5Lus5Yip55SoQ29va2ll5Y+K5YW25LuW5oqA6KGT5o+Q5L6b5pyN5YuZ77ybJyxcblx0XHR9KSxcblx0XHRQSVBQTm90aWNlMDogbG9jYWxpemUoe1xuXHRcdFx0ZW46IGBZb3UgY2FuIHJlZmVyIHRvIG91ciBgLFxuXHRcdFx0amE6IGDlgIvkurrmg4XloLHjga7lj5bjgormibHjgYTmlrnms5XjgavjgaTjgYTjgabjga/jgIFgLFxuXHRcdFx0J3poLWhhbnMnOiBg5oKo5Y+v5Lul5p+l6ZiF5oiR5Lus55qEYCxcblx0XHRcdCd6aC1oYW50JzogYOaCqOWPr+S7peafpemWseaIkeWAkeeahGAsXG5cdFx0fSksXG5cdFx0UElQUE5vdGljZTE6IGxvY2FsaXplKHtcblx0XHRcdGVuOiBgUGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3lgLFxuXHRcdFx0amE6IGDlgIvkurrmg4XloLHkv53orbfmlrnph51gLFxuXHRcdFx0J3poLWhhbnMnOiBg5Liq5Lq65L+h5oGv5L+d5oqk5pa56ZKIYCxcblx0XHRcdCd6aC1oYW50JzogYOWAi+S6uuS/oeaBr+S/neitt+aWuemHnWAsXG5cdFx0fSksXG5cdFx0UElQUE5vdGljZTI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiBgIHRvIGxlYXJuIGhvdyB3ZSBoYW5kbGUgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi5gLFxuXHRcdFx0amE6IGDjgpLjgZTlj4LnhafjgY/jgaDjgZXjgYTjgIJgLFxuXHRcdFx0J3poLWhhbnMnOiBg77yM5LqG6Kej5oiR5Lus5aaC5L2V5aSE55CG5oKo55qE5Liq5Lq65L+h5oGv44CCYCxcblx0XHRcdCd6aC1oYW50JzogYO+8jOS6huino+aIkeWAkeWmguS9leiZleeQhuaCqOeahOWAi+S6uuizh+ioimAsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJjb29raWUtd2FybmluZyBub3ByaW50XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IFtcInRpdGxlXCJdXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBbXG4gICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0Nvb2tpZU5vdGljZScpKSArIFwiIFwiICsgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnUElQUE5vdGljZTAnKSkgKyBcIiBcIiwgMSAvKiBURVhUICovKSxcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJhXCIsIHtcbiAgICAgICAgcmVsOiBcIm5vb3BlbmVyXCIsXG4gICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgaHJlZjogJHNldHVwLnBlcnNvbmFsSW5mb1BvbGljeVVybCxcbiAgICAgICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdQSVBQTm90aWNlMScpXG4gICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdQSVBQTm90aWNlMScpKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfMiksXG4gICAgICBfY3JlYXRlVGV4dFZOb2RlKFwiIFwiICsgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnUElQUE5vdGljZTInKSksIDEgLyogVEVYVCAqLylcbiAgICBdKSxcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgIHdlaWdodDogXCJwcmltYXJ5XCIsXG4gICAgICBvbkNsaWNrOiAkc2V0dXAucHJvcHMuYWdyZWVCdXR0b25PbkNsaWNrXG4gICAgfSwge1xuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0FncmVlJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSwgOCAvKiBQUk9QUyAqLywgW1wib25DbGlja1wiXSlcbiAgXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxDb29raWVXYXJuaW5nXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcQ29va2llV2FybmluZ1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcQ29va2llV2FybmluZ1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcQ29va2llV2FybmluZ1xcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWYzNmU1Mzc4XCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGNvb2tpZVdhcm5pbmcoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgbGFzdFN0b3JhZ2VWYWx1ZTogc3RyaW5nIHwgbnVsbCA9IG13LnN0b3JhZ2UuZ2V0KE9QVElPTlMuc3RvcmFnZUtleSkgYXMgc3RyaW5nIHwgbnVsbDtcblx0Y29uc3QgdXJsQ29uc2VudFJlYWQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoT1BUSU9OUy5yZWFkaW5nUElQUEtleSk7XG5cblx0aWYgKHdnVXNlck5hbWUgfHwgbGFzdFN0b3JhZ2VWYWx1ZSA9PT0gJzEnIHx8IHVybENvbnNlbnRSZWFkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY2xvc2VXYXJuaW5nID0gKCk6IHZvaWQgPT4ge1xuXHRcdGJyb2FkY2FzdENoYW5uZWwucG9zdE1lc3NhZ2UoJ2Nsb3NlJyk7XG5cdFx0YnJvYWRjYXN0Q2hhbm5lbC5jbG9zZSgpO1xuXHRcdHJvb3RFbGVtZW50LnJlbW92ZSgpO1xuXHRcdG13LnN0b3JhZ2Uuc2V0KE9QVElPTlMuc3RvcmFnZUtleSwgJzEnLCA2MCAqIDYwICogMTAwMCAqIDI0ICogMzApO1xuXHR9O1xuXG5cdGNvbnN0IGJyb2FkY2FzdENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChPUFRJT05TLnN0b3JhZ2VLZXkpO1xuXHRicm9hZGNhc3RDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjbG9zZVdhcm5pbmcpO1xuXG5cdGNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3RFbGVtZW50KTtcblx0Y29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdGFncmVlQnV0dG9uT25DbGljazogY2xvc2VXYXJuaW5nLFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3RFbGVtZW50KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTTtBQUNYLGFBQUssVUFBVTtBQUNmLGFBQUssTUFBTSxJQUFJLGVBQWU7QUFDOUIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUNyQixhQUFLLElBQUksTUFBTSxNQUFNO0FBRXJCLGVBQU8saUJBQWlCLFdBQVcsU0FBUyxH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O0VBQ2pFO0FBRUEsUUFBTW9FLG1CQUFxQyxJQUFJTSxpQkFBeUIxRSxVQUFVO0FBQ2xGb0UsbUJBQWlCTyxpQkFBaUIsV0FBV1IsWUFBWTtBQUV6RCxRQUFNSSxjQUFjSyxTQUFTQyxjQUFjLEtBQUs7QUFDaERELFdBQVNFLEtBQUtDLE9BQU9SLFdBQVc7QUFDaEMsUUFBTVMsT0FBQSxHQUFNM0IsWUFBQTRCLFdBQVU3QixjQUFLO0lBQzFCUCxvQkFBb0JzQjtFQUNyQixDQUFDO0FBQ0RhLE1BQUlFLE1BQU1YLFdBQVc7QUFDdEIsQ0FBQzsiLAogICJuYW1lcyI6IFsiQnJvYWRjYXN0Q2hhbm5lbCIsICJyZWFkaW5nUElQUEtleSIsICJzdG9yYWdlS2V5IiwgImltcG9ydF9jb2RleCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBZ3JlZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJDb29raWVOb3RpY2UiLCAiUElQUE5vdGljZTAiLCAiUElQUE5vdGljZTEiLCAiUElQUE5vdGljZTIiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb3BzIiwgIl9fcHJvcHMiLCAicGVyc29uYWxJbmZvUG9saWN5VXJsIiwgImNvbmNhdCIsICJpbXBvcnRfdnVlMiIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJyZWwiLCAidGFyZ2V0IiwgImhyZWYiLCAidGl0bGUiLCAiY3JlYXRlVk5vZGUiLCAiYWN0aW9uIiwgIndlaWdodCIsICJvbkNsaWNrIiwgImFncmVlQnV0dG9uT25DbGljayIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiXyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIkFwcF9kZWZhdWx0MiIsICJpbXBvcnRfdnVlMyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImNvb2tpZVdhcm5pbmciLCAid2dVc2VyTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImxhc3RTdG9yYWdlVmFsdWUiLCAic3RvcmFnZSIsICJ1cmxDb25zZW50UmVhZCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiY2xvc2VXYXJuaW5nIiwgImJyb2FkY2FzdENoYW5uZWwiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAicm9vdEVsZW1lbnQiLCAicmVtb3ZlIiwgInNldCIsICJCcm9hZGNhc3RDaGFubmVsIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJib2R5IiwgImFwcGVuZCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgIm1vdW50Il0KfQo=
