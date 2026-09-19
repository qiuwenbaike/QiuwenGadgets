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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvb3B0aW9ucy5qc29uIiwgImRpc3QvQ29va2llV2FybmluZy9zcmMvQ29va2llV2FybmluZy9BcHAudnVlIiwgInNyYy9Db29raWVXYXJuaW5nL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcQ29va2llV2FybmluZ1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9Db29raWVXYXJuaW5nL0FwcC52dWUiLCAic3JjL0Nvb2tpZVdhcm5pbmcvQ29va2llV2FybmluZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHZhciBjaGFubmVscyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gQnJvYWRjYXN0Q2hhbm5lbChjaGFubmVsKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIGNoYW5uZWwgPSBTdHJpbmcoY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGlkID0gJyRCcm9hZGNhc3RDaGFubmVsJCcgKyBjaGFubmVsICsgJyQnO1xuXG4gICAgICAgIGNoYW5uZWxzW2lkXSA9IGNoYW5uZWxzW2lkXSB8fCBbXTtcbiAgICAgICAgY2hhbm5lbHNbaWRdLnB1c2godGhpcyk7XG5cbiAgICAgICAgdGhpcy5fbmFtZSA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX2Nsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tYyA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0MS5zdGFydCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0Mi5zdGFydCgpO1xuXG4gICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUuc3RvcmFnZUFyZWEgIT09IGdsb2JhbC5sb2NhbFN0b3JhZ2UpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLm5ld1ZhbHVlID09IG51bGwgfHwgZS5uZXdWYWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLmtleS5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoKSAhPT0gaWQpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICR0aGlzLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQnJvYWRjYXN0Q2hhbm5lbC5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8vIEJyb2FkY2FzdENoYW5uZWwgQVBJXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RNZXNzYWdlOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBvdGhlciBjb250ZXh0cyB2aWEgc3RvcmFnZSBldmVudHMuLi5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9pZCArIFN0cmluZyhEYXRlLm5vdygpKSArICckJyArIFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gY3VycmVudCBjb250ZXh0IHZpYSBwb3J0c1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLmZvckVhY2goZnVuY3Rpb24oYmMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmMgPT09ICR0aGlzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgYmMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQyLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNoYW5uZWxzW3RoaXMuX2lkXS5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRXZlbnRUYXJnZXQgQVBJXG4gICAgICAgIGdldCBvbm1lc3NhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEub25tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25tZXNzYWdlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbigvKmV2ZW50Ki8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5kaXNwYXRjaEV2ZW50LmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCA9IGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsIHx8IEJyb2FkY2FzdENoYW5uZWw7XG59KShzZWxmKTtcbiIsICJ7XG5cdFwicmVhZGluZ1BJUFBLZXlcIjogXCJjb25zZW50UmVhZFwiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0LkNvb2tpZVdhcm5pbmdfY29va2llQ29uc2VudFwiXG59XG4iLCAiPCEtLSBlc2xpbnQtZGlzYWJsZSB2dWUvbm8tdi1odG1sIC0tPlxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtDZHhCdXR0b259IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRhZ3JlZUJ1dHRvbk9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBwZXJzb25hbEluZm9Qb2xpY3lVcmwgPSBgL3dpa2kvUVc6UElQUD8ke09QVElPTlMucmVhZGluZ1BJUFBLZXl9PTFgO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImNvb2tpZS13YXJuaW5nIG5vcHJpbnRcIj5cblx0XHQ8cD5cblx0XHRcdHt7IGdldE1lc3NhZ2UoJ0Nvb2tpZU5vdGljZScpIH19XG5cdFx0XHR7eyBnZXRNZXNzYWdlKCdQSVBQTm90aWNlMCcpIH19XG5cdFx0XHQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIDpocmVmPVwicGVyc29uYWxJbmZvUG9saWN5VXJsXCIgOnRpdGxlPVwiZ2V0TWVzc2FnZSgnUElQUE5vdGljZTEnKVwiPlxuXHRcdFx0XHR7eyBnZXRNZXNzYWdlKCdQSVBQTm90aWNlMScpIH19XG5cdFx0XHQ8L2E+XG5cdFx0XHR7eyBnZXRNZXNzYWdlKCdQSVBQTm90aWNlMicpIH19XG5cdFx0PC9wPlxuXHRcdDxjZHgtYnV0dG9uIGFjdGlvbj1cInByb2dyZXNzaXZlXCIgd2VpZ2h0PVwicHJpbWFyeVwiIEBjbGljaz1cInByb3BzLmFncmVlQnV0dG9uT25DbGlja1wiPlxuXHRcdFx0e3sgZ2V0TWVzc2FnZSgnQWdyZWUnKSB9fVxuXHRcdDwvY2R4LWJ1dHRvbj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4uY29va2llLXdhcm5pbmcge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDEwMTtcblx0Ym90dG9tOiAxZW07XG5cdHJpZ2h0OiAwO1xuXHRsZWZ0OiAwO1xuXHRtYXgtd2lkdGg6IDkyLjUlO1xuXHRwYWRkaW5nOiAwLjc1ZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG5cdGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuXHRtYXJnaW46IDAuNzVlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0Y29sb3I6ICMxOTE5MTk7XG5cdGZvbnQtc2l6ZTogMC45ZW07XG5cdGxpbmUtaGVpZ2h0OiAxLjI1O1xuXHRvcGFjaXR5OiAxO1xuXHRwb2ludGVyLWV2ZW50czogYXV0bztcblxuXHRwIHtcblx0XHRtYXJnaW46IDAgYXV0byAwLjVyZW07XG5cdH1cblxuXHQ6ZGVlcCguY2R4LWJ1dHRvbikge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDAuNWVtIDA7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjMzZjO1xuXHRcdGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzZjO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGxpbmUtaGVpZ2h0OiAxO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0d2lkdGg6IDIwZW07XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogYXV0bztcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWdyZWU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZScsXG5cdFx0XHRqYTogJ+OBmeOBueOBpuioseWPr+OBmeOCiycsXG5cdFx0XHR6aDogJ+WQjOaEjycsXG5cdFx0fSksXG5cdFx0Q29va2llTm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RvIHByb3ZpZGUgYmV0dGVyIGV4cGVyaWVuY2UsIHdlIHV0aWxpemUgY29va2llcyBhbmQgb3RoZXIgdGVjaG5vbG9naWVzIHRvIHByb3ZpZGUgc2VydmljZXMuJyxcblx0XHRcdGphOiAn44KI44KK6Imv44GE44K144O844OT44K544KS5o+Q5L6b44GZ44KL44Gf44KB44Gr44CB44Kv44OD44Kt44O844KE44Gd44Gu5LuW44Gu5oqA6KGT44KS5Yip55So44GX44Gm44GE44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4uuS6huaPkOS+m+acgOS9s+S9k+mqjO+8jOaIkeS7rOWIqeeUqENvb2tpZeWPiuWFtuS7luaKgOacr+aPkOS+m+acjeWKoeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfngrrkuobmj5DkvpvmnIDkvbPpq5TpqZfvvIzmiJHku6zliKnnlKhDb29raWXlj4rlhbbku5bmioDooZPmj5DkvpvmnI3li5nvvJsnLFxuXHRcdH0pLFxuXHRcdFBJUFBOb3RpY2UwOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogYFlvdSBjYW4gcmVmZXIgdG8gb3VyIGAsXG5cdFx0XHRqYTogYOWAi+S6uuaDheWgseOBruWPluOCiuaJseOBhOaWueazleOBq+OBpOOBhOOBpuOBr+OAgWAsXG5cdFx0XHQnemgtaGFucyc6IGDmgqjlj6/ku6Xmn6XpmIXmiJHku6znmoRgLFxuXHRcdFx0J3poLWhhbnQnOiBg5oKo5Y+v5Lul5p+l6Zax5oiR5YCR55qEYCxcblx0XHR9KSxcblx0XHRQSVBQTm90aWNlMTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IGBQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeWAsXG5cdFx0XHRqYTogYOWAi+S6uuaDheWgseS/neitt+aWuemHnWAsXG5cdFx0XHQnemgtaGFucyc6IGDkuKrkurrkv6Hmga/kv53miqTmlrnpkohgLFxuXHRcdFx0J3poLWhhbnQnOiBg5YCL5Lq65L+h5oGv5L+d6K235pa56YedYCxcblx0XHR9KSxcblx0XHRQSVBQTm90aWNlMjogbG9jYWxpemUoe1xuXHRcdFx0ZW46IGAgdG8gbGVhcm4gaG93IHdlIGhhbmRsZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLmAsXG5cdFx0XHRqYTogYOOCkuOBlOWPgueFp+OBj+OBoOOBleOBhOOAgmAsXG5cdFx0XHQnemgtaGFucyc6IGDvvIzkuobop6PmiJHku6zlpoLkvZXlpITnkIbmgqjnmoTkuKrkurrkv6Hmga/jgIJgLFxuXHRcdFx0J3poLWhhbnQnOiBg77yM5LqG6Kej5oiR5YCR5aaC5L2V6JmV55CG5oKo55qE5YCL5Lq66LOH6KiKYCxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImNvb2tpZS13YXJuaW5nIG5vcHJpbnRcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0gW1widGl0bGVcIl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIFtcbiAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQ29va2llTm90aWNlJykpICsgXCIgXCIgKyBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdQSVBQTm90aWNlMCcpKSArIFwiIFwiLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImFcIiwge1xuICAgICAgICByZWw6IFwibm9vcGVuZXJcIixcbiAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICBocmVmOiAkc2V0dXAucGVyc29uYWxJbmZvUG9saWN5VXJsLFxuICAgICAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ1BJUFBOb3RpY2UxJylcbiAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ1BJUFBOb3RpY2UxJykpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF8yKSxcbiAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCIgXCIgKyBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdQSVBQTm90aWNlMicpKSwgMSAvKiBURVhUICovKVxuICAgIF0pLFxuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgd2VpZ2h0OiBcInByaW1hcnlcIixcbiAgICAgIG9uQ2xpY2s6ICRzZXR1cC5wcm9wcy5hZ3JlZUJ1dHRvbk9uQ2xpY2tcbiAgICB9LCB7XG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQWdyZWUnKSksIDEgLyogVEVYVCAqLylcbiAgICAgIF0pLFxuICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICB9LCA4IC8qIFBST1BTICovLCBbXCJvbkNsaWNrXCJdKVxuICBdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxDb29raWVXYXJuaW5nXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXENvb2tpZVdhcm5pbmdcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxDb29raWVXYXJuaW5nXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxDb29raWVXYXJuaW5nXFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtZjM2ZTUzNzhcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gY29va2llV2FybmluZygpOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBsYXN0U3RvcmFnZVZhbHVlOiBzdHJpbmcgfCBudWxsID0gbXcuc3RvcmFnZS5nZXQoT1BUSU9OUy5zdG9yYWdlS2V5KSBhcyBzdHJpbmcgfCBudWxsO1xuXHRjb25zdCB1cmxDb25zZW50UmVhZDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZShPUFRJT05TLnJlYWRpbmdQSVBQS2V5KTtcblxuXHRpZiAod2dVc2VyTmFtZSB8fCBsYXN0U3RvcmFnZVZhbHVlID09PSAnMScgfHwgdXJsQ29uc2VudFJlYWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjbG9zZVdhcm5pbmcgPSAoKTogdm9pZCA9PiB7XG5cdFx0YnJvYWRjYXN0Q2hhbm5lbC5wb3N0TWVzc2FnZSgnY2xvc2UnKTtcblx0XHRicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XG5cdFx0cm9vdEVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0bXcuc3RvcmFnZS5zZXQoT1BUSU9OUy5zdG9yYWdlS2V5LCAnMScsIDYwICogNjAgKiAxMDAwICogMjQgKiAzMCk7XG5cdH07XG5cblx0Y29uc3QgYnJvYWRjYXN0Q2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKE9QVElPTlMuc3RvcmFnZUtleSk7XG5cdGJyb2FkY2FzdENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNsb3NlV2FybmluZyk7XG5cblx0Y29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdEVsZW1lbnQpO1xuXHRjb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwLCB7XG5cdFx0YWdyZWVCdXR0b25PbkNsaWNrOiBjbG9zZVdhcm5pbmcsXG5cdH0pO1xuXHRhcHAubW91bnQocm9vdEVsZW1lbnQpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFFBQVE7QUFDZCxVQUFJLFdBQVcsQ0FBQztBQUVoQixlQUFTQSxrQkFBaUIsU0FBUztBQUMvQixZQUFJLFFB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QU1DLG1CQUFrQ0gsR0FBR0ksUUFBUUYsSUFBWTdELFVBQVU7QUFDekUsUUFBTWdFLGlCQUFnQ0wsR0FBR00sS0FBS0MsY0FBc0JuRSxjQUFjO0FBRWxGLE1BQUkyRCxjQUFjSSxxQkFBcUIsT0FBT0UsZ0JBQWdCO0FBQzdEO0VBQ0Q7QUFFQSxRQUFNRyxlQUFlQSxNQUFZO0FBQ2hDQyxxQkFBaUJDLFlBQVksT0FBTztBQUNwQ0QscUJBQWlCRSxNQUFNO0FBQ3ZCQyxnQkFBWUMsT0FBTztBQUNuQmIsT0FBR0ksUUFBUVUsSUFBWXpFLFlBQVksS0FBSyxLQUFLLEtBQUssTUFBTyxLQUFLLEVBQUU7RUFDakU7QUFFQSxRQUFNb0UsbUJBQXFDLElBQUlNLGlCQUF5QjFFLFVBQVU7QUFDbEZvRSxtQkFBaUJPLGlCQUFpQixXQUFXUixZQUFZO0FBRXpELFFBQU1JLGNBQWNLLFNBQVNDLGNBQWMsS0FBSztBQUNoREQsV0FBU0UsS0FBS0MsT0FBT1IsV0FBVztBQUNoQyxRQUFNUyxPQUFBLEdBQU0zQixZQUFBNEIsV0FBVTdCLGNBQUs7SUFDMUJQLG9CQUFvQnNCO0VBQ3JCLENBQUM7QUFDRGEsTUFBSUUsTUFBTVgsV0FBVztBQUN0QixDQUFDOyIsCiAgIm5hbWVzIjogWyJCcm9hZGNhc3RDaGFubmVsIiwgInJlYWRpbmdQSVBQS2V5IiwgInN0b3JhZ2VLZXkiLCAiaW1wb3J0X2NvZGV4IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFncmVlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIkNvb2tpZU5vdGljZSIsICJQSVBQTm90aWNlMCIsICJQSVBQTm90aWNlMSIsICJQSVBQTm90aWNlMiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvcHMiLCAiX19wcm9wcyIsICJwZXJzb25hbEluZm9Qb2xpY3lVcmwiLCAiY29uY2F0IiwgImltcG9ydF92dWUyIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgInJlbCIsICJ0YXJnZXQiLCAiaHJlZiIsICJ0aXRsZSIsICJjcmVhdGVWTm9kZSIsICJhY3Rpb24iLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiYWdyZWVCdXR0b25PbkNsaWNrIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJfIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgImltcG9ydF92dWUzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRCb2R5IiwgInRoZW4iLCAiY29va2llV2FybmluZyIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibGFzdFN0b3JhZ2VWYWx1ZSIsICJzdG9yYWdlIiwgInVybENvbnNlbnRSZWFkIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjbG9zZVdhcm5pbmciLCAiYnJvYWRjYXN0Q2hhbm5lbCIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJyb290RWxlbWVudCIsICJyZW1vdmUiLCAic2V0IiwgIkJyb2FkY2FzdENoYW5uZWwiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImJvZHkiLCAiYXBwZW5kIiwgImFwcCIsICJjcmVhdGVBcHAiLCAibW91bnQiXQp9Cg==
