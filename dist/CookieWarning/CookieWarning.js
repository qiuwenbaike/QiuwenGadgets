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
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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
          if (e.storageArea !== global.localStorage)
            return;
          if (e.newValue == null || e.newValue === "")
            return;
          if (e.key.substring(0, id.length) !== id)
            return;
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
            if (bc === $this)
              return;
            bc._mc.port2.postMessage(JSON.parse(value));
          });
        },
        close: function() {
          if (this._closed)
            return;
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
require_broadcastchannel_polyfill();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/CookieWarning/modules/constant.ts
var STORAGE_KEY = "ext.gadget.CookieWarning_cookieConsent";
var LAST_STORAGE_VALUE = mw.storage.get(STORAGE_KEY);
var URL_CONSENT_READ = mw.util.getParamValue("consentRead");
//! src/CookieWarning/components/AgreeButton.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
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
      en: 'To provide better experience, we utilize cookies and other technologies to provide services. You can refer to our <a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a> to learn how we handle your personal information.',
      ja: 'より良いサービスを提供するために、クッキーやその他の技術を利用しています。個人情報の取り扱い方法については、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="個人情報保護方針">個人情報保護方針</a>をご参照ください。',
      "zh-hans": '为了提供最佳体验，我们利用Cookie及其他技术提供服务；您可以查阅我们的<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="个人信息保护方针">个人信息保护方针</a>，了解我们如何处理您的个人信息。',
      "zh-hant": '為了提供最佳體驗，我们利用Cookie及其他技術提供服務；您可以查閱我們的<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="個人信息保護方針">個人信息保護方針</a>，了解我們如何處理您的個人信息'
    }),
    TOSNotice: (0, import_ext_gadget.localize)({
      en: 'By using this site, you agree to our <a rel="noopener" target="_blank" href="/wiki/QW:TOS?consentRead=1" title="Terms of Use"><em>Terms of Use</em></a>, <a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a>, and other <a rel="noopener" target="_blank" href="/wiki/QW:LAW?consentRead=1" title="Legal policies">legal policies</a>.',
      ja: 'このサイトを利用することで、<a rel="noopener" target="_blank" href="/wiki/QW:TOS?consentRead=1" title="利用規約">利用規約</a>、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="個人情報保護方針">個人情報保護方針</a>、その他の<a rel="noopener" target="_blank" href="/wiki/QW:LAW?consentRead=1" title="法的ポリシー">法的ポリシー</a>について十分に理解し、遵守することに同意したものとみなされます。',
      "zh-hans": '访问本网站，或以任何方式使用本网站，均代表您已仔细阅读、充分了解并同意遵守本网站的<a rel="noopener" target="_blank" href="/wiki/QW:TOS?consentRead=1" title="用户协议">用户协议</a>、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="个人信息保护方针">个人信息保护方针</a>及其他各项<a rel="noopener" target="_blank" href="/wiki/QW:LAW?consentRead=1" title="法律方针">法律方针</a>的规定。',
      "zh-hant": '存取本網站，或以任何方式使用本網站，均代表您已仔細閱讀、充分了解並同意遵守本網站的<a rel="noopener" target="_blank" href="/wiki/QW:TOS?consentRead=1" title="用戶協議">用戶協議</a>、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="個人信息保護方針">個人信息保護方針</a>及其他各項<a rel="noopener" target="_blank" href="/wiki/QW:LAW?consentRead=1" title="法律方針">法律方針</a>的規定。'
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/CookieWarning/components/AgreeButton.tsx
var AgreeButton = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
  className: ["cdx-button", "cdx-button--action-progressive", "cdx-button--weight-primary"],
  onClick
}, getMessage("Agree"));
var AgreeButton_default = AgreeButton;
//! src/CookieWarning/components/ConsentNotice.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
var ConsentNotice = () => /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("p", {
  innerHTML: getMessage("TOSNotice")
}), /* @__PURE__ */ import_ext_gadget3.default.createElement("p", {
  innerHTML: getMessage("CookieNotice")
}));
var ConsentNotice_default = ConsentNotice;
//! src/CookieWarning/components/RootElement.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/CookieWarning/components/CookieWarning.module.less
var warning = "CookieWarning-module__warning_ukvfyG";
//! src/CookieWarning/components/RootElement.tsx
var RootElement = ({
  agreeButtonOnClick
}) => /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
  className: [warning, "noprint"]
}, /* @__PURE__ */ import_ext_gadget4.default.createElement(ConsentNotice_default, null), /* @__PURE__ */ import_ext_gadget4.default.createElement(AgreeButton_default, {
  onClick: agreeButtonOnClick
}));
//! src/CookieWarning/CookieWarning.ts
var {
  wgUserName
} = mw.config.get();
(function cookieWarning() {
  if (wgUserName || LAST_STORAGE_VALUE === "1" || URL_CONSENT_READ) {
    return;
  }
  const closeWarning = () => {
    broadcastChannel.postMessage("close");
    broadcastChannel.close();
    rootElement.remove();
    mw.storage.set(STORAGE_KEY, "1", 60 * 60 * 1e3 * 24 * 30);
  };
  const broadcastChannel = new BroadcastChannel(STORAGE_KEY);
  broadcastChannel.addEventListener("message", closeWarning);
  const rootElement = RootElement({
    agreeButtonOnClick: closeWarning
  });
  document.body.append(rootElement);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0FncmVlQnV0dG9uLnRzeCIsICJzcmMvQ29va2llV2FybmluZy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvY29tcG9uZW50cy9Db25zZW50Tm90aWNlLnRzeCIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL1Jvb3RFbGVtZW50LnRzeCIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0Nvb2tpZVdhcm5pbmcubW9kdWxlLmxlc3MiLCAic3JjL0Nvb2tpZVdhcm5pbmcvQ29va2llV2FybmluZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHZhciBjaGFubmVscyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gQnJvYWRjYXN0Q2hhbm5lbChjaGFubmVsKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIGNoYW5uZWwgPSBTdHJpbmcoY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGlkID0gJyRCcm9hZGNhc3RDaGFubmVsJCcgKyBjaGFubmVsICsgJyQnO1xuXG4gICAgICAgIGNoYW5uZWxzW2lkXSA9IGNoYW5uZWxzW2lkXSB8fCBbXTtcbiAgICAgICAgY2hhbm5lbHNbaWRdLnB1c2godGhpcyk7XG5cbiAgICAgICAgdGhpcy5fbmFtZSA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX2Nsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tYyA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0MS5zdGFydCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0Mi5zdGFydCgpO1xuXG4gICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUuc3RvcmFnZUFyZWEgIT09IGdsb2JhbC5sb2NhbFN0b3JhZ2UpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLm5ld1ZhbHVlID09IG51bGwgfHwgZS5uZXdWYWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLmtleS5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoKSAhPT0gaWQpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICR0aGlzLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQnJvYWRjYXN0Q2hhbm5lbC5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8vIEJyb2FkY2FzdENoYW5uZWwgQVBJXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RNZXNzYWdlOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBvdGhlciBjb250ZXh0cyB2aWEgc3RvcmFnZSBldmVudHMuLi5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9pZCArIFN0cmluZyhEYXRlLm5vdygpKSArICckJyArIFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gY3VycmVudCBjb250ZXh0IHZpYSBwb3J0c1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLmZvckVhY2goZnVuY3Rpb24oYmMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmMgPT09ICR0aGlzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgYmMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQyLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNoYW5uZWxzW3RoaXMuX2lkXS5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRXZlbnRUYXJnZXQgQVBJXG4gICAgICAgIGdldCBvbm1lc3NhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEub25tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25tZXNzYWdlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbigvKmV2ZW50Ki8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5kaXNwYXRjaEV2ZW50LmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCA9IGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsIHx8IEJyb2FkY2FzdENoYW5uZWw7XG59KShzZWxmKTtcbiIsICJjb25zdCBTVE9SQUdFX0tFWTogc3RyaW5nID0gJ2V4dC5nYWRnZXQuQ29va2llV2FybmluZ19jb29raWVDb25zZW50JztcblxuY29uc3QgTEFTVF9TVE9SQUdFX1ZBTFVFOiBzdHJpbmcgfCBudWxsID0gbXcuc3RvcmFnZS5nZXQoU1RPUkFHRV9LRVkpIGFzIHN0cmluZyB8IG51bGw7XG5cbmNvbnN0IFVSTF9DT05TRU5UX1JFQUQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2NvbnNlbnRSZWFkJyk7XG5cbmV4cG9ydCB7TEFTVF9TVE9SQUdFX1ZBTFVFLCBTVE9SQUdFX0tFWSwgVVJMX0NPTlNFTlRfUkVBRH07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRvbkNsaWNrKCk6IHZvaWQ7XG59XG5cbmNvbnN0IEFncmVlQnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdGNsYXNzTmFtZT17WydjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdD5cblx0XHR7Z2V0TWVzc2FnZSgnQWdyZWUnKX1cblx0PC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBZ3JlZUJ1dHRvbjtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWdyZWU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZScsXG5cdFx0XHRqYTogJ+OBmeOBueOBpuioseWPr+OBmeOCiycsXG5cdFx0XHR6aDogJ+WQjOaEjycsXG5cdFx0fSksXG5cdFx0Q29va2llTm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RvIHByb3ZpZGUgYmV0dGVyIGV4cGVyaWVuY2UsIHdlIHV0aWxpemUgY29va2llcyBhbmQgb3RoZXIgdGVjaG5vbG9naWVzIHRvIHByb3ZpZGUgc2VydmljZXMuIFlvdSBjYW4gcmVmZXIgdG8gb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwiUGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3lcIj48ZW0+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2VtPjwvYT4gdG8gbGVhcm4gaG93IHdlIGhhbmRsZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLicsXG5cdFx0XHRqYTogJ+OCiOOCiuiJr+OBhOOCteODvOODk+OCueOCkuaPkOS+m+OBmeOCi+OBn+OCgeOBq+OAgeOCr+ODg+OCreODvOOChOOBneOBruS7luOBruaKgOihk+OCkuWIqeeUqOOBl+OBpuOBhOOBvuOBmeOAguWAi+S6uuaDheWgseOBruWPluOCiuaJseOBhOaWueazleOBq+OBpOOBhOOBpuOBr+OAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235pa56YedXCI+5YCL5Lq65oOF5aCx5L+d6K235pa56YedPC9hPuOCkuOBlOWPgueFp+OBj+OBoOOBleOBhOOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfkuLrkuobmj5DkvpvmnIDkvbPkvZPpqozvvIzmiJHku6zliKnnlKhDb29raWXlj4rlhbbku5bmioDmnK/mj5DkvpvmnI3liqHvvJvmgqjlj6/ku6Xmn6XpmIXmiJHku6znmoQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOaWuemSiFwiPuS4quS6uuS/oeaBr+S/neaKpOaWuemSiDwvYT7vvIzkuobop6PmiJHku6zlpoLkvZXlpITnkIbmgqjnmoTkuKrkurrkv6Hmga/jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn54K65LqG5o+Q5L6b5pyA5L2z6auU6amX77yM5oiR5Lus5Yip55SoQ29va2ll5Y+K5YW25LuW5oqA6KGT5o+Q5L6b5pyN5YuZ77yb5oKo5Y+v5Lul5p+l6Zax5oiR5YCR55qEPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLlgIvkurrkv6Hmga/kv53orbfmlrnph51cIj7lgIvkurrkv6Hmga/kv53orbfmlrnph508L2E+77yM5LqG6Kej5oiR5YCR5aaC5L2V6JmV55CG5oKo55qE5YCL5Lq65L+h5oGvJyxcblx0XHR9KSxcblx0XHRUT1NOb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQnkgdXNpbmcgdGhpcyBzaXRlLCB5b3UgYWdyZWUgdG8gb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPUz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCJUZXJtcyBvZiBVc2VcIj48ZW0+VGVybXMgb2YgVXNlPC9lbT48L2E+LCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+PGVtPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9lbT48L2E+LCBhbmQgb3RoZXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6TEFXP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIkxlZ2FsIHBvbGljaWVzXCI+bGVnYWwgcG9saWNpZXM8L2E+LicsXG5cdFx0XHRqYTogJ+OBk+OBruOCteOCpOODiOOCkuWIqeeUqOOBmeOCi+OBk+OBqOOBp+OAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPUz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLliKnnlKjopo/ntIRcIj7liKnnlKjopo/ntIQ8L2E+44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLlgIvkurrmg4XloLHkv53orbfmlrnph51cIj7lgIvkurrmg4XloLHkv53orbfmlrnph508L2E+44CB44Gd44Gu5LuW44GuPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6TEFXP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuazleeahOODneODquOCt+ODvFwiPuazleeahOODneODquOCt+ODvDwvYT7jgavjgaTjgYTjgabljYHliIbjgavnkIbop6PjgZfjgIHpgbXlrojjgZnjgovjgZPjgajjgavlkIzmhI/jgZfjgZ/jgoLjga7jgajjgb/jgarjgZXjgozjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6K6/6Zeu5pys572R56uZ77yM5oiW5Lul5Lu75L2V5pa55byP5L2/55So5pys572R56uZ77yM5Z2H5Luj6KGo5oKo5bey5LuU57uG6ZiF6K+744CB5YWF5YiG5LqG6Kej5bm25ZCM5oSP6YG15a6I5pys572R56uZ55qEPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIueUqOaIt+WNj+iurlwiPueUqOaIt+WNj+iurjwvYT7jgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOaWuemSiFwiPuS4quS6uuS/oeaBr+S/neaKpOaWuemSiDwvYT7lj4rlhbbku5blkITpobk8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpMQVc/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5rOV5b6L5pa56ZKIXCI+5rOV5b6L5pa56ZKIPC9hPueahOinhOWumuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCflrZjlj5bmnKzntrLnq5nvvIzmiJbku6Xku7vkvZXmlrnlvI/kvb/nlKjmnKzntrLnq5nvvIzlnYfku6Pooajmgqjlt7Lku5TntLDplrHoroDjgIHlhYXliIbkuobop6PkuKblkIzmhI/pgbXlrojmnKzntrLnq5nnmoQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1M/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235pa56YedXCI+5YCL5Lq65L+h5oGv5L+d6K235pa56YedPC9hPuWPiuWFtuS7luWQhOmghTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkxBVz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLms5Xlvovmlrnph51cIj7ms5Xlvovmlrnph508L2E+55qE6KaP5a6a44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgQ29uc2VudE5vdGljZSA9ICgpID0+IChcblx0PD5cblx0XHQ8cCBpbm5lckhUTUw9e2dldE1lc3NhZ2UoJ1RPU05vdGljZScpfSAvPlxuXHRcdDxwIGlubmVySFRNTD17Z2V0TWVzc2FnZSgnQ29va2llTm90aWNlJyl9IC8+XG5cdDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc2VudE5vdGljZTtcbiIsICJpbXBvcnQgQWdyZWVCdXR0b24gZnJvbSAnLi9BZ3JlZUJ1dHRvbic7XG5pbXBvcnQgQ29uc2VudE5vdGljZSBmcm9tICcuL0NvbnNlbnROb3RpY2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHt3YXJuaW5nfSBmcm9tICcuL0Nvb2tpZVdhcm5pbmcubW9kdWxlLmxlc3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRhZ3JlZUJ1dHRvbk9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFJvb3RFbGVtZW50ID0gKHthZ3JlZUJ1dHRvbk9uQ2xpY2t9OiBQcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17W3dhcm5pbmcsICdub3ByaW50J119PlxuXHRcdDxDb25zZW50Tm90aWNlIC8+XG5cdFx0PEFncmVlQnV0dG9uIG9uQ2xpY2s9e2FncmVlQnV0dG9uT25DbGlja30gLz5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQge1Jvb3RFbGVtZW50fTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0Nvb2tpZVdhcm5pbmcvY29tcG9uZW50cy9Db29raWVXYXJuaW5nLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgd2FybmluZyA9IFwiQ29va2llV2FybmluZy1tb2R1bGVfX3dhcm5pbmdfdWt2ZnlHXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJ3YXJuaW5nXCI6IHdhcm5pbmdcbn07XG4gICAgICAiLCAiaW1wb3J0IHtMQVNUX1NUT1JBR0VfVkFMVUUsIFNUT1JBR0VfS0VZLCBVUkxfQ09OU0VOVF9SRUFEfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtSb290RWxlbWVudH0gZnJvbSAnLi9jb21wb25lbnRzL1Jvb3RFbGVtZW50JztcblxuY29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4oZnVuY3Rpb24gY29va2llV2FybmluZygpOiB2b2lkIHtcblx0aWYgKHdnVXNlck5hbWUgfHwgTEFTVF9TVE9SQUdFX1ZBTFVFID09PSAnMScgfHwgVVJMX0NPTlNFTlRfUkVBRCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsb3NlV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0XHRicm9hZGNhc3RDaGFubmVsLnBvc3RNZXNzYWdlKCdjbG9zZScpO1xuXHRcdGJyb2FkY2FzdENoYW5uZWwuY2xvc2UoKTtcblx0XHRyb290RWxlbWVudC5yZW1vdmUoKTtcblx0XHRtdy5zdG9yYWdlLnNldChTVE9SQUdFX0tFWSwgJzEnLCA2MCAqIDYwICogMTAwMCAqIDI0ICogMzApO1xuXHR9O1xuXG5cdGNvbnN0IGJyb2FkY2FzdENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChTVE9SQUdFX0tFWSk7XG5cdGJyb2FkY2FzdENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNsb3NlV2FybmluZyk7XG5cblx0Y29uc3Qgcm9vdEVsZW1lbnQgPSBSb290RWxlbWVudCh7YWdyZWVCdXR0b25PbkNsaWNrOiBjbG9zZVdhcm5pbmd9KTtcblxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290RWxlbWVudCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFFBQVE7QUFDZCxVQUFJLFdBQVcsQ0FBQztBQUVoQixlQUFTQSxrQkFBaUIsU0FBUztBQUMvQixZQUFJLFFBQVE7QUFD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UUFBQUMsY0FBQyxLQUFBO0VBQUVNLFdBQVdYLFdBQVcsY0FBYztBQUFBLENBQUcsQ0FDM0M7QUFHRCxJQUFPWSx3QkFBUUg7O0FDUmYsSUFBQUkscUJBQWtCekIsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRFgsSUFBTXlCLFVBQVU7O0FEUXZCLElBQU1DLGNBQWNBLENBQUM7RUFBQ0M7QUFBa0IsTUFDdkNILG1DQUFBVCxRQUFBQyxjQUFDLE9BQUE7RUFBSUMsV0FBVyxDQUFDUSxTQUFTLFNBQVM7QUFBQSxHQUNsQ0QsbUNBQUFULFFBQUFDLGNBQUNPLHVCQUFBLElBQWMsR0FDZkMsbUNBQUFULFFBQUFDLGNBQUNFLHFCQUFBO0VBQVlKLFNBQVNhO0FBQUEsQ0FBb0IsQ0FDM0M7O0FFVkQsSUFBTTtFQUFDQztBQUFVLElBQUlwQyxHQUFHcUMsT0FBT25DLElBQUk7Q0FFbEMsU0FBU29DLGdCQUFzQjtBQUMvQixNQUFJRixjQUFjckMsdUJBQXVCLE9BQU9JLGtCQUFrQjtBQUNqRTtFQUNEO0FBRUEsUUFBTW9DLGVBQWVBLE1BQVk7QUFDaENDLHFCQUFpQkMsWUFBWSxPQUFPO0FBQ3BDRCxxQkFBaUJFLE1BQU07QUFDdkJDLGdCQUFZQyxPQUFPO0FBQ25CNUMsT0FBR0MsUUFBUTRDLElBQUkvQyxhQUFhLEtBQUssS0FBSyxLQUFLLE1BQU8sS0FBSyxFQUFFO0VBQzFEO0FBRUEsUUFBTTBDLG1CQUFxQyxJQUFJTSxpQkFBaUJoRCxXQUFXO0FBQzNFMEMsbUJBQWlCTyxpQkFBaUIsV0FBV1IsWUFBWTtBQUV6RCxRQUFNSSxjQUFjVCxZQUFZO0lBQUNDLG9CQUFvQkk7RUFBWSxDQUFDO0FBRWxFUyxXQUFTQyxLQUFLQyxPQUFPUCxXQUFXO0FBQ2pDLEdBQUc7IiwKICAibmFtZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAiU1RPUkFHRV9LRVkiLCAiTEFTVF9TVE9SQUdFX1ZBTFVFIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0IiwgIlVSTF9DT05TRU5UX1JFQUQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFncmVlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIkNvb2tpZU5vdGljZSIsICJUT1NOb3RpY2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkFncmVlQnV0dG9uIiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJBZ3JlZUJ1dHRvbl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJDb25zZW50Tm90aWNlIiwgIkZyYWdtZW50IiwgImlubmVySFRNTCIsICJDb25zZW50Tm90aWNlX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgIndhcm5pbmciLCAiUm9vdEVsZW1lbnQiLCAiYWdyZWVCdXR0b25PbkNsaWNrIiwgIndnVXNlck5hbWUiLCAiY29uZmlnIiwgImNvb2tpZVdhcm5pbmciLCAiY2xvc2VXYXJuaW5nIiwgImJyb2FkY2FzdENoYW5uZWwiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAicm9vdEVsZW1lbnQiLCAicmVtb3ZlIiwgInNldCIsICJCcm9hZGNhc3RDaGFubmVsIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZG9jdW1lbnQiLCAiYm9keSIsICJhcHBlbmQiXQp9Cg==
