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
require_broadcastchannel_polyfill();
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
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
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
//! src/CookieWarning/options.json
var readingPIPPKey = "consentRead";
var storageKey = "ext.gadget.CookieWarning_cookieConsent";
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
      en: 'To provide better experience, we utilize cookies and other technologies to provide services. You can refer to our <a rel="noopener" target="_blank" href="/wiki/QW:PIPP?'.concat(readingPIPPKey, '=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a> to learn how we handle your personal information.'),
      ja: 'より良いサービスを提供するために、クッキーやその他の技術を利用しています。個人情報の取り扱い方法については、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?'.concat(readingPIPPKey, '=1" title="個人情報保護方針">個人情報保護方針</a>をご参照ください。'),
      "zh-hans": '为了提供最佳体验，我们利用Cookie及其他技术提供服务；您可以查阅我们的<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?'.concat(readingPIPPKey, '=1" title="个人信息保护方针">个人信息保护方针</a>，了解我们如何处理您的个人信息。'),
      "zh-hant": '為了提供最佳體驗，我们利用Cookie及其他技術提供服務；您可以查閱我們的<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?'.concat(readingPIPPKey, '=1" title="個人信息保護方針">個人信息保護方針</a>，了解我們如何處理您的個人信息')
    }),
    TOSNotice: (0, import_ext_gadget.localize)({
      en: 'By using this site, you agree to our <a rel="noopener" target="_blank" href="/wiki/QW:TOS?'.concat(readingPIPPKey, '=1" title="Terms of Use"><em>Terms of Use</em></a>, <a rel="noopener" target="_blank" href="/wiki/QW:PIPP?').concat(readingPIPPKey, '=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a>, and other <a rel="noopener" target="_blank" href="/wiki/QW:LAW?').concat(readingPIPPKey, '=1" title="Legal policies">legal policies</a>.'),
      ja: 'このサイトを利用することで、<a rel="noopener" target="_blank" href="/wiki/QW:TOS?'.concat(readingPIPPKey, '=1" title="利用規約">利用規約</a>、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?').concat(readingPIPPKey, '=1" title="個人情報保護方針">個人情報保護方針</a>、その他の<a rel="noopener" target="_blank" href="/wiki/QW:LAW?').concat(readingPIPPKey, '=1" title="法的ポリシー">法的ポリシー</a>について十分に理解し、遵守することに同意したものとみなされます。'),
      "zh-hans": '访问本网站，或以任何方式使用本网站，均代表您已仔细阅读、充分了解并同意遵守本网站的<a rel="noopener" target="_blank" href="/wiki/QW:TOS?'.concat(readingPIPPKey, '=1" title="用户协议">用户协议</a>、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?').concat(readingPIPPKey, '=1" title="个人信息保护方针">个人信息保护方针</a>及其他各项<a rel="noopener" target="_blank" href="/wiki/QW:LAW?').concat(readingPIPPKey, '=1" title="法律方针">法律方针</a>的规定。'),
      "zh-hant": '存取本網站，或以任何方式使用本網站，均代表您已仔細閱讀、充分了解並同意遵守本網站的<a rel="noopener" target="_blank" href="/wiki/QW:TOS?'.concat(readingPIPPKey, '=1" title="用戶協議">用戶協議</a>、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?').concat(readingPIPPKey, '=1" title="個人信息保護方針">個人信息保護方針</a>及其他各項<a rel="noopener" target="_blank" href="/wiki/QW:LAW?').concat(readingPIPPKey, '=1" title="法律方針">法律方針</a>的規定。')
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
(function cookieWarning() {
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
  const rootElement = RootElement({
    agreeButtonOnClick: closeWarning
  });
  document.body.append(rootElement);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvb3B0aW9ucy5qc29uIiwgInNyYy9Db29raWVXYXJuaW5nL2NvbXBvbmVudHMvQWdyZWVCdXR0b24udHN4IiwgInNyYy9Db29raWVXYXJuaW5nL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0NvbnNlbnROb3RpY2UudHN4IiwgInNyYy9Db29raWVXYXJuaW5nL2NvbXBvbmVudHMvUm9vdEVsZW1lbnQudHN4IiwgInNyYy9Db29raWVXYXJuaW5nL2NvbXBvbmVudHMvQ29va2llV2FybmluZy5tb2R1bGUubGVzcyIsICJzcmMvQ29va2llV2FybmluZy9Db29raWVXYXJuaW5nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgIntcblx0XCJyZWFkaW5nUElQUEtleVwiOiBcImNvbnNlbnRSZWFkXCIsXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuQ29va2llV2FybmluZ19jb29raWVDb25zZW50XCJcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFncmVlQnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdGNsYXNzTmFtZT17WydjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdD5cblx0XHR7Z2V0TWVzc2FnZSgnQWdyZWUnKX1cblx0PC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBZ3JlZUJ1dHRvbjtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWdyZWU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZScsXG5cdFx0XHRqYTogJ+OBmeOBueOBpuioseWPr+OBmeOCiycsXG5cdFx0XHR6aDogJ+WQjOaEjycsXG5cdFx0fSksXG5cdFx0Q29va2llTm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogYFRvIHByb3ZpZGUgYmV0dGVyIGV4cGVyaWVuY2UsIHdlIHV0aWxpemUgY29va2llcyBhbmQgb3RoZXIgdGVjaG5vbG9naWVzIHRvIHByb3ZpZGUgc2VydmljZXMuIFlvdSBjYW4gcmVmZXIgdG8gb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFA/JHtPUFRJT05TLnJlYWRpbmdQSVBQS2V5fT0xXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPjxlbT5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvZW0+PC9hPiB0byBsZWFybiBob3cgd2UgaGFuZGxlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24uYCxcblx0XHRcdGphOiBg44KI44KK6Imv44GE44K144O844OT44K544KS5o+Q5L6b44GZ44KL44Gf44KB44Gr44CB44Kv44OD44Kt44O844KE44Gd44Gu5LuW44Gu5oqA6KGT44KS5Yip55So44GX44Gm44GE44G+44GZ44CC5YCL5Lq65oOF5aCx44Gu5Y+W44KK5omx44GE5pa55rOV44Gr44Gk44GE44Gm44Gv44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUD8ke09QVElPTlMucmVhZGluZ1BJUFBLZXl9PTFcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+aWuemHnVwiPuWAi+S6uuaDheWgseS/neitt+aWuemHnTwvYT7jgpLjgZTlj4LnhafjgY/jgaDjgZXjgYTjgIJgLFxuXHRcdFx0J3poLWhhbnMnOiBg5Li65LqG5o+Q5L6b5pyA5L2z5L2T6aqM77yM5oiR5Lus5Yip55SoQ29va2ll5Y+K5YW25LuW5oqA5pyv5o+Q5L6b5pyN5Yqh77yb5oKo5Y+v5Lul5p+l6ZiF5oiR5Lus55qEPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUD8ke09QVElPTlMucmVhZGluZ1BJUFBLZXl9PTFcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOaWuemSiFwiPuS4quS6uuS/oeaBr+S/neaKpOaWuemSiDwvYT7vvIzkuobop6PmiJHku6zlpoLkvZXlpITnkIbmgqjnmoTkuKrkurrkv6Hmga/jgIJgLFxuXHRcdFx0J3poLWhhbnQnOiBg54K65LqG5o+Q5L6b5pyA5L2z6auU6amX77yM5oiR5Lus5Yip55SoQ29va2ll5Y+K5YW25LuW5oqA6KGT5o+Q5L6b5pyN5YuZ77yb5oKo5Y+v5Lul5p+l6Zax5oiR5YCR55qEPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUD8ke09QVElPTlMucmVhZGluZ1BJUFBLZXl9PTFcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aWuemHnVwiPuWAi+S6uuS/oeaBr+S/neitt+aWuemHnTwvYT7vvIzkuobop6PmiJHlgJHlpoLkvZXomZXnkIbmgqjnmoTlgIvkurrkv6Hmga9gLFxuXHRcdH0pLFxuXHRcdFRPU05vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46IGBCeSB1c2luZyB0aGlzIHNpdGUsIHlvdSBhZ3JlZSB0byBvdXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TPyR7T1BUSU9OUy5yZWFkaW5nUElQUEtleX09MVwiIHRpdGxlPVwiVGVybXMgb2YgVXNlXCI+PGVtPlRlcm1zIG9mIFVzZTwvZW0+PC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUD8ke09QVElPTlMucmVhZGluZ1BJUFBLZXl9PTFcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+PGVtPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9lbT48L2E+LCBhbmQgb3RoZXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6TEFXPyR7T1BUSU9OUy5yZWFkaW5nUElQUEtleX09MVwiIHRpdGxlPVwiTGVnYWwgcG9saWNpZXNcIj5sZWdhbCBwb2xpY2llczwvYT4uYCxcblx0XHRcdGphOiBg44GT44Gu44K144Kk44OI44KS5Yip55So44GZ44KL44GT44Go44Gn44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TPyR7T1BUSU9OUy5yZWFkaW5nUElQUEtleX09MVwiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFA/JHtPUFRJT05TLnJlYWRpbmdQSVBQS2V5fT0xXCIgdGl0bGU9XCLlgIvkurrmg4XloLHkv53orbfmlrnph51cIj7lgIvkurrmg4XloLHkv53orbfmlrnph508L2E+44CB44Gd44Gu5LuW44GuPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6TEFXPyR7T1BUSU9OUy5yZWFkaW5nUElQUEtleX09MVwiIHRpdGxlPVwi5rOV55qE44Od44Oq44K344O8XCI+5rOV55qE44Od44Oq44K344O8PC9hPuOBq+OBpOOBhOOBpuWNgeWIhuOBq+eQhuino+OBl+OAgemBteWuiOOBmeOCi+OBk+OBqOOBq+WQjOaEj+OBl+OBn+OCguOBruOBqOOBv+OBquOBleOCjOOBvuOBmeOAgmAsXG5cdFx0XHQnemgtaGFucyc6IGDorr/pl67mnKznvZHnq5nvvIzmiJbku6Xku7vkvZXmlrnlvI/kvb/nlKjmnKznvZHnq5nvvIzlnYfku6Pooajmgqjlt7Lku5Tnu4bpmIXor7vjgIHlhYXliIbkuobop6PlubblkIzmhI/pgbXlrojmnKznvZHnq5nnmoQ8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1M/JHtPUFRJT05TLnJlYWRpbmdQSVBQS2V5fT0xXCIgdGl0bGU9XCLnlKjmiLfljY/orq5cIj7nlKjmiLfljY/orq48L2E+44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUD8ke09QVElPTlMucmVhZGluZ1BJUFBLZXl9PTFcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOaWuemSiFwiPuS4quS6uuS/oeaBr+S/neaKpOaWuemSiDwvYT7lj4rlhbbku5blkITpobk8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpMQVc/JHtPUFRJT05TLnJlYWRpbmdQSVBQS2V5fT0xXCIgdGl0bGU9XCLms5XlvovmlrnpkohcIj7ms5Xlvovmlrnpkog8L2E+55qE6KeE5a6a44CCYCxcblx0XHRcdCd6aC1oYW50JzogYOWtmOWPluacrOe2suerme+8jOaIluS7peS7u+S9leaWueW8j+S9v+eUqOacrOe2suerme+8jOWdh+S7o+ihqOaCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPUz8ke09QVElPTlMucmVhZGluZ1BJUFBLZXl9PTFcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQPyR7T1BUSU9OUy5yZWFkaW5nUElQUEtleX09MVwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235pa56YedXCI+5YCL5Lq65L+h5oGv5L+d6K235pa56YedPC9hPuWPiuWFtuS7luWQhOmghTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkxBVz8ke09QVElPTlMucmVhZGluZ1BJUFBLZXl9PTFcIiB0aXRsZT1cIuazleW+i+aWuemHnVwiPuazleW+i+aWuemHnTwvYT7nmoTopo/lrprjgIJgLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBDb25zZW50Tm90aWNlID0gKCkgPT4gKFxuXHQ8PlxuXHRcdDxwIGlubmVySFRNTD17Z2V0TWVzc2FnZSgnVE9TTm90aWNlJyl9IC8+XG5cdFx0PHAgaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdDb29raWVOb3RpY2UnKX0gLz5cblx0PC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb25zZW50Tm90aWNlO1xuIiwgImltcG9ydCBBZ3JlZUJ1dHRvbiBmcm9tICcuL0FncmVlQnV0dG9uJztcbmltcG9ydCBDb25zZW50Tm90aWNlIGZyb20gJy4vQ29uc2VudE5vdGljZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3dhcm5pbmd9IGZyb20gJy4vQ29va2llV2FybmluZy5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdGFncmVlQnV0dG9uT25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgUm9vdEVsZW1lbnQgPSAoe2FncmVlQnV0dG9uT25DbGlja306IFByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPXtbd2FybmluZywgJ25vcHJpbnQnXX0+XG5cdFx0PENvbnNlbnROb3RpY2UgLz5cblx0XHQ8QWdyZWVCdXR0b24gb25DbGljaz17YWdyZWVCdXR0b25PbkNsaWNrfSAvPlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCB7Um9vdEVsZW1lbnR9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0Nvb2tpZVdhcm5pbmcubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCB3YXJuaW5nID0gXCJDb29raWVXYXJuaW5nLW1vZHVsZV9fd2FybmluZ191a3ZmeUdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIndhcm5pbmdcIjogd2FybmluZ1xufTtcbiAgICAgICIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Um9vdEVsZW1lbnR9IGZyb20gJy4vY29tcG9uZW50cy9Sb290RWxlbWVudCc7XG5cbihmdW5jdGlvbiBjb29raWVXYXJuaW5nKCk6IHZvaWQge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGxhc3RTdG9yYWdlVmFsdWU6IHN0cmluZyB8IG51bGwgPSBtdy5zdG9yYWdlLmdldChPUFRJT05TLnN0b3JhZ2VLZXkpIGFzIHN0cmluZyB8IG51bGw7XG5cdGNvbnN0IHVybENvbnNlbnRSZWFkOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKE9QVElPTlMucmVhZGluZ1BJUFBLZXkpO1xuXG5cdGlmICh3Z1VzZXJOYW1lIHx8IGxhc3RTdG9yYWdlVmFsdWUgPT09ICcxJyB8fCB1cmxDb25zZW50UmVhZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsb3NlV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0XHRicm9hZGNhc3RDaGFubmVsLnBvc3RNZXNzYWdlKCdjbG9zZScpO1xuXHRcdGJyb2FkY2FzdENoYW5uZWwuY2xvc2UoKTtcblx0XHRyb290RWxlbWVudC5yZW1vdmUoKTtcblx0XHRtdy5zdG9yYWdlLnNldChPUFRJT05TLnN0b3JhZ2VLZXksICcxJywgNjAgKiA2MCAqIDEwMDAgKiAyNCAqIDMwKTtcblx0fTtcblxuXHRjb25zdCBicm9hZGNhc3RDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoT1BUSU9OUy5zdG9yYWdlS2V5KTtcblx0YnJvYWRjYXN0Q2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2xvc2VXYXJuaW5nKTtcblxuXHRjb25zdCByb290RWxlbWVudCA9IFJvb3RFbGVtZW50KHthZ3JlZUJ1dHRvbk9uQ2xpY2s6IGNsb3NlV2FybmluZ30pO1xuXG5cdGRv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QyxPQUFPQyxJQUFJO0FBQ25DLFFBQU1DLG1CQUFrQ0gsR0FBR0ksUUFBUUYsSUFBWXBDLFVBQVU7QUFDekUsUUFBTXVDLGlCQUFnQ0wsR0FBR00sS0FBS0MsY0FBc0IxQyxjQUFjO0FBRWxGLE1BQUlrQyxjQUFjSSxxQkFBcUIsT0FBT0UsZ0JBQWdCO0FBQzdEO0VBQ0Q7QUFFQSxRQUFNRyxlQUFlQSxNQUFZO0FBQ2hDQyxxQkFBaUJDLFlBQVksT0FBTztBQUNwQ0QscUJBQWlCRSxNQUFNO0FBQ3ZCQyxnQkFBWUMsT0FBTztBQUNuQmIsT0FBR0ksUUFBUVUsSUFBWWhELFlBQVksS0FBSyxLQUFLLEtBQUssTUFBTyxLQUFLLEVBQUU7RUFDakU7QUFFQSxRQUFNMkMsbUJBQXFDLElBQUlNLGlCQUF5QmpELFVBQVU7QUFDbEYyQyxtQkFBaUJPLGlCQUFpQixXQUFXUixZQUFZO0FBRXpELFFBQU1JLGNBQWNoQixZQUFZO0lBQUNDLG9CQUFvQlc7RUFBWSxDQUFDO0FBRWxFUyxXQUFTQyxLQUFLQyxPQUFPUCxXQUFXO0FBQ2pDLEdBQUc7IiwKICAibmFtZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAicmVhZGluZ1BJUFBLZXkiLCAic3RvcmFnZUtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBZ3JlZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJDb29raWVOb3RpY2UiLCAiY29uY2F0IiwgIlRPU05vdGljZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiQWdyZWVCdXR0b24iLCAib25DbGljayIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgIkFncmVlQnV0dG9uX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIkNvbnNlbnROb3RpY2UiLCAiRnJhZ21lbnQiLCAiaW5uZXJIVE1MIiwgIkNvbnNlbnROb3RpY2VfZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAid2FybmluZyIsICJSb290RWxlbWVudCIsICJhZ3JlZUJ1dHRvbk9uQ2xpY2siLCAiY29va2llV2FybmluZyIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibGFzdFN0b3JhZ2VWYWx1ZSIsICJzdG9yYWdlIiwgInVybENvbnNlbnRSZWFkIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjbG9zZVdhcm5pbmciLCAiYnJvYWRjYXN0Q2hhbm5lbCIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJyb290RWxlbWVudCIsICJyZW1vdmUiLCAic2V0IiwgIkJyb2FkY2FzdENoYW5uZWwiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJkb2N1bWVudCIsICJib2R5IiwgImFwcGVuZCJdCn0K
