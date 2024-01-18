/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-AdvancedSiteNotices.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AdvancedSiteNotices}
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

// dist/AdvancedSiteNotices/AdvancedSiteNotices.js
require_broadcastchannel_polyfill();
var _mw$config$get;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
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
//! src/AdvancedSiteNotices/options.json
var ajaxPageTitle = "Template:AdvancedSiteNotices/ajax";
var mountPointSelector = "#siteNotice";
var version = "3.2";
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
var import_ext_gadget8 = require("ext.gadget.Util");
//! src/AdvancedSiteNotices/modules/constant.ts
var CLASS_NAME = "gadget-advanced_site_notices";
var CLASS_NAME_DISMISS = "".concat(CLASS_NAME, "__dismiss");
var CLASS_NAME_NOTICE = "".concat(CLASS_NAME, "__notice");
var CLASS_NAME_NOTICE_CONTENT = "".concat(CLASS_NAME_NOTICE, "__content");
var CLASS_NAME_TITLE = "".concat(CLASS_NAME, "__title");
var STORAGE_KEY = "ext.gadget.AdvancedSiteNotices_dismissASN";
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
//! src/AdvancedSiteNotices/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("AdvancedSiteNotices/".concat(version));
//! src/AdvancedSiteNotices/modules/util/queryApi.ts
var parameters = {
  action: "parse",
  format: "json",
  formatversion: "2",
  prop: "text",
  page: ajaxPageTitle,
  uselang: WG_USER_LANGUAGE,
  variant: WG_USER_LANGUAGE
};
var queryApi = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    try {
      return yield api.get(parameters);
    } catch (error) {
      console.error("[AdvancedSiteNotices] Ajax error:", error);
      return {};
    }
  });
  return function queryApi2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/AdvancedSiteNotices/modules/loadRemoteNotices.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var loadRemoteNotices = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const response = yield queryApi();
    const responseParse = response["parse"];
    if (!(responseParse !== null && responseParse !== void 0 && responseParse.text)) {
      return {};
    }
    const remoteNotice = (/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      innerHTML: responseParse.text
    })).querySelector("ul.sitents");
    if (!remoteNotice) {
      return {};
    }
    const $remoteNotices = $(remoteNotice);
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
}();
//! src/AdvancedSiteNotices/modules/showNotice.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.React"), 1);
//! src/AdvancedSiteNotices/modules/util/generateArea.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/AdvancedSiteNotices/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Dismiss: (0, import_ext_gadget3.localize)({
      en: "Turn off this notice",
      ja: "ASNをオフにする",
      "zh-hans": "关闭公告",
      "zh-hant": "關閉公告"
    }),
    DismissNotice: (0, import_ext_gadget3.localize)({
      en: "You have chosen to turn off Advanced Site Notices for the next 30 days. <br>If the site-wide announcement is not updated within the next 30 days, it will no longer be displayed; however, if the site-wide announcement is updated, it will be displayed again.",
      ja: "今後30日間、ASNをオフにすることを選択しました。<br>サイト全体の通知が今後30日以内に更新されない場合、表示されなくなります。ただし、サイト全体の通知が更新される場合は、再び表示されます。",
      "zh-hans": "您已选择在接下来30日内关闭“高级站点通告”。<br>若接下来30日内全站公告未有更新，则不再显示；但是，若全站公告内容更新，则将重新显示。",
      "zh-hant": "您已選擇在接下來30日內關閉「高級站點通告」。<br>若接下來30日內全站公告未有更新，則不再顯示；但是，若全站公告內容更新，則將重新顯示。"
    }),
    Title: (0, import_ext_gadget3.localize)({
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
//! src/AdvancedSiteNotices/modules/util/generateArea.tsx
var generateArea = () => {
  const area = /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME, "noprint"]
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME_TITLE]
  }, getMessage("Title")), /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_NOTICE
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME_NOTICE_CONTENT, "center"]
  })), /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_DISMISS
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("a", {
    role: "button",
    "aria-label": getMessage("Dismiss")
  })));
  return $(area);
};
//! src/AdvancedSiteNotices/modules/util/matchCriteria.ts
var in_group = (group) => {
  return WG_USER_GROUPS.includes(group);
};
var only_for = (userLanguage) => {
  return userLanguage === WG_USER_LANGUAGE;
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
      result = testCriteria(mw.Uri.decode(criteriaData));
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
//! src/AdvancedSiteNotices/modules/showNotice.tsx
var import_ext_gadget6 = require("ext.gadget.Tippy");
var import_ext_gadget7 = require("ext.gadget.Toastify");
var broadcastChannel = new BroadcastChannel(STORAGE_KEY);
var currentVersion = "0";
var localVersion = mw.storage.get(STORAGE_KEY);
var timer;
var $area = generateArea();
var $currentNotice = $area.find(".".concat(CLASS_NAME_NOTICE_CONTENT));
var $dismiss = $area.find(".".concat(CLASS_NAME_DISMISS)).find("a");
var closeNotices = () => {
  broadcastChannel.postMessage("close");
  broadcastChannel.close();
  clearTimeout(timer);
  $area.remove();
  mw.storage.set(STORAGE_KEY, currentVersion, 60 * 60 * 24 * 30 * 1e3);
};
broadcastChannel.addEventListener("message", closeNotices);
$dismiss.on("click", () => {
  closeNotices();
  const toastifyInstance = (0, import_ext_gadget7.toastify)({
    node: /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
      innerHTML: getMessage("DismissNotice")
    }),
    close: true,
    duration: 10 * 1e3,
    gravity: "top",
    position: "right",
    onClick() {
      toastifyInstance.hideToast();
    }
  });
});
(0, import_ext_gadget6.tippy)($dismiss.get(0), {
  arrow: true,
  content: $dismiss.attr("aria-label"),
  placement: "bottom"
});
var $notices;
var noticeStyles = [];
var showNotices = ($mountPoint, index, remoteNotices) => {
  var _remoteNotices$versio;
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
  const nextNoticeIndex = (index + 1) % noticesLength;
  let $notice = $();
  let i = 0;
  while (i++ < noticesLength) {
    $notice = $notices.eq(index);
    if (!matchCriteria($notice)) {
      showNotices($mountPoint, nextNoticeIndex);
      return;
    }
    index = index++ % noticesLength;
  }
  if (typeof $notice.data("asn-html") === "string") {
    $notice.data("asn-html-raw", mw.Uri.decode($notice.data("asn-html")));
    $notice.data("asn-html", null);
  }
  if (typeof $notice.data("asn-style") === "string") {
    $notice.data("asn-style-id", noticeStyles.length);
    const style = mw.loader.addStyleTag(mw.Uri.decode($notice.data("asn-style")));
    style.disabled = true;
    noticeStyles[noticeStyles.length] = style;
    $notice.data("asn-style", null);
  }
  const noticeHtml = $notice.data("asn-html-raw") || $notice.html();
  const noticeStyleId = $notice.data("asn-style-id");
  const currentNoticeHtml = $currentNotice.html();
  if (currentNoticeHtml && currentNoticeHtml !== noticeHtml) {
    $currentNotice.stop().fadeOut(() => {
      for (var _i = 0, _noticeStyles = noticeStyles; _i < _noticeStyles.length; _i++) {
        const style = _noticeStyles[_i];
        style.disabled = true;
      }
      const noticeStyle = noticeStyles[noticeStyleId];
      if (noticeStyle) {
        noticeStyle.disabled = false;
      }
      $currentNotice.html(noticeHtml);
      try {
        $currentNotice.fadeIn();
      } catch {
      }
    });
  } else if (!currentNoticeHtml) {
    $mountPoint.append($area);
    const noticeStyle = noticeStyles[noticeStyleId];
    if (noticeStyle) {
      noticeStyle.disabled = false;
    }
    $currentNotice.html(noticeHtml).fadeIn();
  }
  timer = setTimeout(() => {
    showNotices($mountPoint, nextNoticeIndex);
  }, 7 * 1e3);
};
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
(function() {
  var _advancedSiteNotices = _asyncToGenerator(function* () {
    var _remoteNotices$$notic;
    const $body = yield (0, import_ext_gadget8.getBody)();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvb3B0aW9ucy5qc29uIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL0FkdmFuY2VkU2l0ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL2FwaS50cyIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL3V0aWwvcXVlcnlBcGkudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9sb2FkUmVtb3RlTm90aWNlcy50c3giLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9zaG93Tm90aWNlLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVBcmVhLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL21hdGNoQ3JpdGVyaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImFqYXhQYWdlVGl0bGVcIjogXCJUZW1wbGF0ZTpBZHZhbmNlZFNpdGVOb3RpY2VzL2FqYXhcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjc2l0ZU5vdGljZVwiLFxuXHRcInZlcnNpb25cIjogXCIzLjJcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bG9hZFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy9sb2FkUmVtb3RlTm90aWNlcyc7XG5pbXBvcnQge3Nob3dOb3RpY2VzfSBmcm9tICcuL21vZHVsZXMvc2hvd05vdGljZSc7XG5cbihhc3luYyBmdW5jdGlvbiBhZHZhbmNlZFNpdGVOb3RpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSBhd2FpdCBnZXRCb2R5KCk7XG5cblx0Y29uc3QgJG1vdW50UG9pbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoISRtb3VudFBvaW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZXM6IFJlbW90ZU5vdGljZXMgPSBhd2FpdCBsb2FkUmVtb3RlTm90aWNlcygpO1xuXHRpZiAoIXJlbW90ZU5vdGljZXMuJG5vdGljZXM/Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJhbmRvbUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1vdGVOb3RpY2VzLiRub3RpY2VzLmxlbmd0aCk7XG5cdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCByYW5kb21JbmRleCwgcmVtb3RlTm90aWNlcyk7XG59KSgpO1xuIiwgImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzJztcbmNvbnN0IENMQVNTX05BTUVfRElTTUlTUzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX2Rpc21pc3NgO1xuY29uc3QgQ0xBU1NfTkFNRV9OT1RJQ0U6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X19ub3RpY2VgO1xuY29uc3QgQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9OT1RJQ0V9X19jb250ZW50YDtcbmNvbnN0IENMQVNTX05BTUVfVElUTEU6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X190aXRsZWA7XG5cbmNvbnN0IFNUT1JBR0VfS0VZOiBzdHJpbmcgPSAnZXh0LmdhZGdldC5BZHZhbmNlZFNpdGVOb3RpY2VzX2Rpc21pc3NBU04nO1xuXG5jb25zdCBXR19VU0VSX0dST1VQUzogc3RyaW5nW10gPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKSA/PyBbXTtcbmNvbnN0IFdHX1VTRVJfTEFOR1VBR0U6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyk7XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfRElTTUlTUyxcblx0Q0xBU1NfTkFNRV9OT1RJQ0UsXG5cdENMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQsXG5cdENMQVNTX05BTUVfVElUTEUsXG5cdFNUT1JBR0VfS0VZLFxuXHRXR19VU0VSX0dST1VQUyxcblx0V0dfVVNFUl9MQU5HVUFHRSxcbn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBBZHZhbmNlZFNpdGVOb3RpY2VzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtXR19VU0VSX0xBTkdVQUdFfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcblxuaW50ZXJmYWNlIFJlbW90ZU5vdGljZXMge1xuXHQkbm90aWNlcz86IEpRdWVyeTtcblx0dmVyc2lvbj86IHN0cmluZztcbn1cblxuY29uc3QgcGFyYW1ldGVyczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ3BhcnNlJyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ3RleHQnLFxuXHRwYWdlOiBPUFRJT05TLmFqYXhQYWdlVGl0bGUsXG5cdHVzZWxhbmc6IFdHX1VTRVJfTEFOR1VBR0UsXG5cdHZhcmlhbnQ6IFdHX1VTRVJfTEFOR1VBR0UsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jICgpOiBQcm9taXNlPFJldHVyblR5cGU8bXcuQXBpWydnZXQnXT4+ID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbWV0ZXJzKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbQWR2YW5jZWRTaXRlTm90aWNlc10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3R5cGUgUmVtb3RlTm90aWNlcywgcXVlcnlBcGl9O1xuIiwgImltcG9ydCB7dHlwZSBSZW1vdGVOb3RpY2VzLCBxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxudHlwZSBBcGlSZXNwb25zZSA9IHtcblx0cGFyc2U6IHtcblx0XHR0ZXh0Pzogc3RyaW5nO1xuXHR9O1xufTtcblxuY29uc3QgbG9hZFJlbW90ZU5vdGljZXMgPSBhc3luYyAoKTogUHJvbWlzZTxSZW1vdGVOb3RpY2VzPiA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5QXBpPj4gPSBhd2FpdCBxdWVyeUFwaSgpO1xuXHRjb25zdCByZXNwb25zZVBhcnNlID0gcmVzcG9uc2VbJ3BhcnNlJ10gYXMgQXBpUmVzcG9uc2VbJ3BhcnNlJ107XG5cblx0aWYgKCFyZXNwb25zZVBhcnNlPy50ZXh0KSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0Y29uc3QgcmVtb3RlTm90aWNlID0gKDxkaXYgaW5uZXJIVE1MPXtyZXNwb25zZVBhcnNlLnRleHR9IC8+KS5xdWVyeVNlbGVjdG9yKCd1bC5zaXRlbnRzJyk7XG5cdGlmICghcmVtb3RlTm90aWNlKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG5cblx0Y29uc3QgJHJlbW90ZU5vdGljZXM6IE5vbk51bGxhYmxlPFJlbW90ZU5vdGljZXNbJyRub3RpY2VzJ10+ID0gJChyZW1vdGVOb3RpY2UpIGFzIEpRdWVyeTtcblxuXHRjb25zdCAkbm90aWNlczogSlF1ZXJ5ID0gJHJlbW90ZU5vdGljZXMuZmluZCgnbGknKTtcblx0Y29uc3QgcmVtb3RlTm90aWNlc1ZlcnNpb246IE5vbk51bGxhYmxlPFJlbW90ZU5vdGljZXNbJ3ZlcnNpb24nXT4gPSAoXG5cdFx0JHJlbW90ZU5vdGljZXMuZGF0YSgnYXNuLXZlcnNpb24nKSBhcyBudW1iZXJcblx0KS50b1N0cmluZygpO1xuXG5cdHJldHVybiB7XG5cdFx0JG5vdGljZXMsXG5cdFx0dmVyc2lvbjogcmVtb3RlTm90aWNlc1ZlcnNpb24sXG5cdH07XG59O1xuXG5leHBvcnQge2xvYWRSZW1vdGVOb3RpY2VzfTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUVfRElTTUlTUywgQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVCwgU1RPUkFHRV9LRVl9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5pbXBvcnQge2dlbmVyYXRlQXJlYX0gZnJvbSAnLi91dGlsL2dlbmVyYXRlQXJlYSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge21hdGNoQ3JpdGVyaWF9IGZyb20gJy4vdXRpbC9tYXRjaENyaXRlcmlhJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGJyb2FkY2FzdENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChTVE9SQUdFX0tFWSk7XG5cbmxldCBjdXJyZW50VmVyc2lvbjogc3RyaW5nID0gJzAnO1xuY29uc3QgbG9jYWxWZXJzaW9uOiBzdHJpbmcgfCBudWxsID0gbXcuc3RvcmFnZS5nZXQoU1RPUkFHRV9LRVkpIGFzIHN0cmluZyB8IG51bGw7XG5cbmxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG5cbmNvbnN0ICRhcmVhOiBKUXVlcnkgPSBnZW5lcmF0ZUFyZWEoKTtcbmNvbnN0ICRjdXJyZW50Tm90aWNlOiBKUXVlcnkgPSAkYXJlYS5maW5kKGAuJHtDTEFTU19OQU1FX05PVElDRV9DT05URU5UfWApO1xuY29uc3QgJGRpc21pc3M6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYXJlYS5maW5kKGAuJHtDTEFTU19OQU1FX0RJU01JU1N9YCkuZmluZCgnYScpO1xuXG5jb25zdCBjbG9zZU5vdGljZXMgPSAoKTogdm9pZCA9PiB7XG5cdGJyb2FkY2FzdENoYW5uZWwucG9zdE1lc3NhZ2UoJ2Nsb3NlJyk7XG5cdGJyb2FkY2FzdENoYW5uZWwuY2xvc2UoKTtcblx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0JGFyZWEucmVtb3ZlKCk7XG5cdG13LnN0b3JhZ2Uuc2V0KFNUT1JBR0VfS0VZLCBjdXJyZW50VmVyc2lvbiwgNjAgKiA2MCAqIDI0ICogMzAgKiAxMDAwKTtcbn07XG5cbmJyb2FkY2FzdENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNsb3NlTm90aWNlcyk7XG5cbiRkaXNtaXNzLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0Y2xvc2VOb3RpY2VzKCk7XG5cdGNvbnN0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeSh7XG5cdFx0bm9kZTogPHNwYW4gaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdEaXNtaXNzTm90aWNlJyl9IC8+LFxuXHRcdGNsb3NlOiB0cnVlLFxuXHRcdGR1cmF0aW9uOiAxMCAqIDEwMDAsXG5cdFx0Z3Jhdml0eTogJ3RvcCcsXG5cdFx0cG9zaXRpb246ICdyaWdodCcsXG5cdFx0b25DbGljaygpOiB2b2lkIHtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0fSxcblx0fSk7XG59KTtcbnRpcHB5KCRkaXNtaXNzLmdldCgwKSBhcyBIVE1MQW5jaG9yRWxlbWVudCwge1xuXHRhcnJvdzogdHJ1ZSxcblx0Y29udGVudDogJGRpc21pc3MuYXR0cignYXJpYS1sYWJlbCcpIGFzIHN0cmluZyxcblx0cGxhY2VtZW50OiAnYm90dG9tJyxcbn0pO1xuXG5sZXQgJG5vdGljZXM6IEpRdWVyeTtcbmNvbnN0IG5vdGljZVN0eWxlczogSFRNTFN0eWxlRWxlbWVudFtdID0gW107XG5jb25zdCBzaG93Tm90aWNlcyA9ICgkbW91bnRQb2ludDogSlF1ZXJ5LCBpbmRleDogbnVtYmVyLCByZW1vdGVOb3RpY2VzPzogUmVtb3RlTm90aWNlcyk6IHZvaWQgPT4ge1xuXHRjdXJyZW50VmVyc2lvbiA9IHJlbW90ZU5vdGljZXM/LnZlcnNpb24gPz8gY3VycmVudFZlcnNpb247XG5cdGlmIChjdXJyZW50VmVyc2lvbiA9PT0gbG9jYWxWZXJzaW9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHJlbW90ZU5vdGljZXM/LiRub3RpY2VzKSB7XG5cdFx0KHskbm90aWNlc30gPSByZW1vdGVOb3RpY2VzKTtcblx0fVxuXG5cdGNvbnN0IG5vdGljZXNMZW5ndGg6IG51bWJlciA9ICRub3RpY2VzLmxlbmd0aDtcblx0Y29uc3QgbmV4dE5vdGljZUluZGV4OiBudW1iZXIgPSAoaW5kZXggKyAxKSAlIG5vdGljZXNMZW5ndGg7XG5cdGxldCAkbm90aWNlOiBKUXVlcnkgPSAkKCk7XG5cblx0bGV0IGk6IG51bWJlciA9IDA7XG5cdHdoaWxlIChpKysgPCBub3RpY2VzTGVuZ3RoKSB7XG5cdFx0JG5vdGljZSA9ICRub3RpY2VzLmVxKGluZGV4KTtcblx0XHRpZiAoIW1hdGNoQ3JpdGVyaWEoJG5vdGljZSkpIHtcblx0XHRcdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCBuZXh0Tm90aWNlSW5kZXgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCA9IGluZGV4KysgJSBub3RpY2VzTGVuZ3RoO1xuXHR9XG5cblx0aWYgKHR5cGVvZiAkbm90aWNlLmRhdGEoJ2Fzbi1odG1sJykgPT09ICdzdHJpbmcnKSB7XG5cdFx0JG5vdGljZS5kYXRhKCdhc24taHRtbC1yYXcnLCBtdy5VcmkuZGVjb2RlKCRub3RpY2UuZGF0YSgnYXNuLWh0bWwnKSBhcyBzdHJpbmcpKTtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1odG1sJywgbnVsbCk7XG5cdH1cblx0aWYgKHR5cGVvZiAkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZScpID09PSAnc3RyaW5nJykge1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLXN0eWxlLWlkJywgbm90aWNlU3R5bGVzLmxlbmd0aCk7XG5cdFx0Y29uc3Qgc3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSBtdy5sb2FkZXIuYWRkU3R5bGVUYWcobXcuVXJpLmRlY29kZSgkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZScpIGFzIHN0cmluZykpO1xuXHRcdHN0eWxlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRub3RpY2VTdHlsZXNbbm90aWNlU3R5bGVzLmxlbmd0aF0gPSBzdHlsZTsgLy8gUmVwbGFjZSBgbm90aWNlU3R5bGVzLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLXN0eWxlJywgbnVsbCk7XG5cdH1cblxuXHRjb25zdCBub3RpY2VIdG1sOiBzdHJpbmcgPSAoJG5vdGljZS5kYXRhKCdhc24taHRtbC1yYXcnKSBhcyBzdHJpbmcpIHx8ICRub3RpY2UuaHRtbCgpO1xuXHRjb25zdCBub3RpY2VTdHlsZUlkOiBudW1iZXIgPSAkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZS1pZCcpIGFzIG51bWJlcjtcblx0Y29uc3QgY3VycmVudE5vdGljZUh0bWw6IHN0cmluZyA9ICRjdXJyZW50Tm90aWNlLmh0bWwoKTtcblx0aWYgKGN1cnJlbnROb3RpY2VIdG1sICYmIGN1cnJlbnROb3RpY2VIdG1sICE9PSBub3RpY2VIdG1sKSB7XG5cdFx0JGN1cnJlbnROb3RpY2Uuc3RvcCgpLmZhZGVPdXQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBzdHlsZSBvZiBub3RpY2VTdHlsZXMpIHtcblx0XHRcdFx0c3R5bGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgbm90aWNlU3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgfCB1bmRlZmluZWQgPSBub3RpY2VTdHlsZXNbbm90aWNlU3R5bGVJZF07XG5cdFx0XHRpZiAobm90aWNlU3R5bGUpIHtcblx0XHRcdFx0bm90aWNlU3R5bGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdCRjdXJyZW50Tm90aWNlLmh0bWwobm90aWNlSHRtbCk7XG5cdFx0XHQvLyBhbmltYXRpb24gdHJ5IC9jYXRjaGVkIHRvIGF2b2lkIFR5cGVFcnJvcjogKEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXXx8W10pLmNvbmNhdCBpcyBub3QgYSBmdW5jdGlvbiBlcnJvciBiZWluZyBzZWVuIGluIHByb2R1Y3Rpb25cblx0XHRcdHRyeSB7XG5cdFx0XHRcdCRjdXJyZW50Tm90aWNlLmZhZGVJbigpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKCFjdXJyZW50Tm90aWNlSHRtbCkge1xuXHRcdCRtb3VudFBvaW50LmFwcGVuZCgkYXJlYSk7XG5cdFx0Y29uc3Qgbm90aWNlU3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgfCB1bmRlZmluZWQgPSBub3RpY2VTdHlsZXNbbm90aWNlU3R5bGVJZF07XG5cdFx0aWYgKG5vdGljZVN0eWxlKSB7XG5cdFx0XHRub3RpY2VTdHlsZS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHQkY3VycmVudE5vdGljZS5odG1sKG5vdGljZUh0bWwpLmZhZGVJbigpO1xuXHR9XG5cblx0dGltZXIgPSBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcblx0XHRzaG93Tm90aWNlcygkbW91bnRQb2ludCwgbmV4dE5vdGljZUluZGV4KTtcblx0fSwgNyAqIDEwMDApO1xufTtcblxuZXhwb3J0IHtzaG93Tm90aWNlc307XG4iLCAiaW1wb3J0IHtcblx0Q0xBU1NfTkFNRSxcblx0Q0xBU1NfTkFNRV9ESVNNSVNTLFxuXHRDTEFTU19OQU1FX05PVElDRSxcblx0Q0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVCxcblx0Q0xBU1NfTkFNRV9USVRMRSxcbn0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVBcmVhID0gKCk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0IGFyZWEgPSAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCAnbm9wcmludCddfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9USVRMRV19PntnZXRNZXNzYWdlKCdUaXRsZScpfTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfTk9USUNFfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FX05PVElDRV9DT05URU5ULCAnY2VudGVyJ119IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0RJU01JU1N9PlxuXHRcdFx0XHQ8YSByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD17Z2V0TWVzc2FnZSgnRGlzbWlzcycpfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG5cblx0cmV0dXJuICQoYXJlYSkgYXMgSlF1ZXJ5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUFyZWF9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHREaXNtaXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1R1cm4gb2ZmIHRoaXMgbm90aWNlJyxcblx0XHRcdGphOiAnQVNO44KS44Kq44OV44Gr44GZ44KLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXreWFrOWRiicsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zplonlhazlkYonLFxuXHRcdH0pLFxuXHRcdERpc21pc3NOb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgY2hvc2VuIHRvIHR1cm4gb2ZmIEFkdmFuY2VkIFNpdGUgTm90aWNlcyBmb3IgdGhlIG5leHQgMzAgZGF5cy4gPGJyPklmIHRoZSBzaXRlLXdpZGUgYW5ub3VuY2VtZW50IGlzIG5vdCB1cGRhdGVkIHdpdGhpbiB0aGUgbmV4dCAzMCBkYXlzLCBpdCB3aWxsIG5vIGxvbmdlciBiZSBkaXNwbGF5ZWQ7IGhvd2V2ZXIsIGlmIHRoZSBzaXRlLXdpZGUgYW5ub3VuY2VtZW50IGlzIHVwZGF0ZWQsIGl0IHdpbGwgYmUgZGlzcGxheWVkIGFnYWluLicsXG5cdFx0XHRqYTogJ+S7iuW+jDMw5pel6ZaT44CBQVNO44KS44Kq44OV44Gr44GZ44KL44GT44Go44KS6YG45oqe44GX44G+44GX44Gf44CCPGJyPuOCteOCpOODiOWFqOS9k+OBrumAmuefpeOBjOS7iuW+jDMw5pel5Lul5YaF44Gr5pu05paw44GV44KM44Gq44GE5aC05ZCI44CB6KGo56S644GV44KM44Gq44GP44Gq44KK44G+44GZ44CC44Gf44Gg44GX44CB44K144Kk44OI5YWo5L2T44Gu6YCa55+l44GM5pu05paw44GV44KM44KL5aC05ZCI44Gv44CB5YaN44Gz6KGo56S644GV44KM44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3sumAieaLqeWcqOaOpeS4i+adpTMw5pel5YaF5YWz6Zet4oCc6auY57qn56uZ54K56YCa5ZGK4oCd44CCPGJyPuiLpeaOpeS4i+adpTMw5pel5YaF5YWo56uZ5YWs5ZGK5pyq5pyJ5pu05paw77yM5YiZ5LiN5YaN5pi+56S677yb5L2G5piv77yM6Iul5YWo56uZ5YWs5ZGK5YaF5a655pu05paw77yM5YiZ5bCG6YeN5paw5pi+56S644CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3sumBuOaTh+WcqOaOpeS4i+S+hjMw5pel5YWn6Zec6ZaJ44CM6auY57Sa56uZ6bue6YCa5ZGK44CN44CCPGJyPuiLpeaOpeS4i+S+hjMw5pel5YWn5YWo56uZ5YWs5ZGK5pyq5pyJ5pu05paw77yM5YmH5LiN5YaN6aGv56S677yb5L2G5piv77yM6Iul5YWo56uZ5YWs5ZGK5YWn5a655pu05paw77yM5YmH5bCH6YeN5paw6aGv56S644CCJyxcblx0XHR9KSxcblx0XHRUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBbm5vdW5jZW1lbnQnLFxuXHRcdFx0amE6ICfpgJrnn6UnLFxuXHRcdFx0emg6ICflhazlkYonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCB7V0dfVVNFUl9HUk9VUFMsIFdHX1VTRVJfTEFOR1VBR0V9IGZyb20gJy4uL2NvbnN0YW50JztcblxuY29uc3QgaW5fZ3JvdXAgPSAoZ3JvdXA6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gV0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoZ3JvdXApO1xufTtcblxuY29uc3Qgb25seV9mb3IgPSAodXNlckxhbmd1YWdlOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIHVzZXJMYW5ndWFnZSA9PT0gV0dfVVNFUl9MQU5HVUFHRTtcbn07XG5cbmNvbnN0IG1hdGNoQ3JpdGVyaWEgPSAoJG5vdGljZTogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IGNhY2hlID0gJG5vdGljZS5kYXRhKCdhc24tY2FjaGUnKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRpZiAoY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZTtcblx0fVxuXG5cdGNvbnN0IHRlc3RDcml0ZXJpYSA9IChjcml0ZXJpYTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0Ly8gRklYTUU6IFRoaXMgc2hvdWxkbid0IGJlIHVzaW5nIGV2YWwgb24gZGF0YSBlbnRlcmVkIGluIHdpa2l0ZXh0LlxuXHRcdC8vIElmIHRoYXQgZGF0YSBpcyBtYWxmb3JtZWQgaXQgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gZS5nLiBjcml0ZXJpYSA9IFwiKGZhbHNlKSlcIlxuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuXHRcdFx0cmV0dXJuIHdpbmRvdy5ldmFsKGNyaXRlcmlhKSBhcyBib29sZWFuO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3QgY3JpdGVyaWFEYXRhOiBzdHJpbmcgPSAoKCRub3RpY2UuZGF0YSgnYXNuLWNyaXRlcmlhJykgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJykudHJpbSgpO1xuXHRpZiAoY3JpdGVyaWFEYXRhKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IHRlc3RDcml0ZXJpYShtdy5VcmkuZGVjb2RlKGNyaXRlcmlhRGF0YSkpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoJG5vdGljZS5hdHRyKCdjbGFzcycpKSB7XG5cdFx0bGV0IGNyaXRlcmlhOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfc3lzb3AnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IGluX2dyb3VwKCdzeXNvcCcpIHx8IGluX2dyb3VwKCdzdGV3YXJkJykgfHwgaW5fZ3JvdXAoJ3FpdXdlbicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV9sb2dnZWQnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IGluX2dyb3VwKCd1c2VyJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X2Fub24nKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9ICFpbl9ncm91cCgndXNlcicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9jbicpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLWNuJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX3NnJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2Zvcignemgtc2cnKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfbXknKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1teScpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9oaycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLWhrJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX21vJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtbW8nKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfdHcnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC10dycpO1xuXHRcdH1cblxuXHRcdGlmIChjcml0ZXJpYSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjcml0ZXJpYSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gY3JpdGVyaWE7XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gdHJ1ZTtcblx0fVxuXG5cdCRub3RpY2UuZGF0YSgnYXNuLWNhY2hlJywgcmVzdWx0KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHttYXRjaENyaXRlcmlhfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFFBQVE7QUFDZCxVQUFJLFdBQVcsQ0FBQztBQUVoQixlQUFTQSxrQkFBaUIsU0FBUztBQUMvQixZQUFJLFFBQVE7QUFDWixrQkFBVSxPQUFPLE9BQU87QUFFeEIsWUFBSSxLQUFLLHVCQUF1QixVQUFVO0FBRTFDLGlCQUFTLEVBQUUsSUFBSSxTQUFTLEVBQUUsS0FBSyxDQUFDO0FBQ2hDLGlCQUFTLEVBQUUsRUFBRSxLQUFLLElBQUk7QUFFdEIsYUFBSyxRQUFRO0FBQ2IsYUFBSyxNQUFNO0FBQ1gsYUFB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LEdBQU10SixtQkFBQXVKLFNBQVE7QUFFckQsVUFBTTNCLGNBQXNCMEIsTUFBTXRHLEtBQWFsRCxrQkFBa0I7QUFDakUsUUFBSSxDQUFDOEgsWUFBWUssUUFBUTtBQUN4QjtJQUNEO0FBRUEsVUFBTUgsZ0JBQUEsTUFBcUMzRixrQkFBa0I7QUFDN0QsUUFBSSxHQUFBa0gsd0JBQUN2QixjQUFjMUUsY0FBQSxRQUFBaUcsMEJBQUEsVUFBZEEsc0JBQXdCcEIsU0FBUTtBQUNwQztJQUNEO0FBRUEsVUFBTXVCLGNBQXNCQyxLQUFLQyxNQUFNRCxLQUFLRSxPQUFPLElBQUk3QixjQUFjMUUsU0FBUzZFLE1BQU07QUFDcEZOLGdCQUFZQyxhQUFhNEIsYUFBYTFCLGFBQWE7RUFDcEQsQ0FBQTtBQUFBLFdBZmdCOEIsc0JBQUE7QUFBQSxXQUFBQyxxQkFBQTlILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQTRIO0FBQUEsR0FBQSxFQWViOyIsCiAgIm5hbWVzIjogWyJCcm9hZGNhc3RDaGFubmVsIiwgImFqYXhQYWdlVGl0bGUiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ4IiwgInJlcXVpcmUiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0RJU01JU1MiLCAiY29uY2F0IiwgIkNMQVNTX05BTUVfTk9USUNFIiwgIkNMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQiLCAiQ0xBU1NfTkFNRV9USVRMRSIsICJTVE9SQUdFX0tFWSIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1VTRVJfTEFOR1VBR0UiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBhZ2UiLCAidXNlbGFuZyIsICJ2YXJpYW50IiwgInF1ZXJ5QXBpIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAibG9hZFJlbW90ZU5vdGljZXMiLCAiX3JlZjIiLCAicmVzcG9uc2UiLCAicmVzcG9uc2VQYXJzZSIsICJ0ZXh0IiwgInJlbW90ZU5vdGljZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgInF1ZXJ5U2VsZWN0b3IiLCAiJHJlbW90ZU5vdGljZXMiLCAiJCIsICIkbm90aWNlczIiLCAiZmluZCIsICJyZW1vdGVOb3RpY2VzVmVyc2lvbiIsICJkYXRhIiwgInRvU3RyaW5nIiwgIiRub3RpY2VzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJEaXNtaXNzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkRpc21pc3NOb3RpY2UiLCAiVGl0bGUiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlQXJlYSIsICJhcmVhIiwgImNsYXNzTmFtZSIsICJyb2xlIiwgImluX2dyb3VwIiwgImdyb3VwIiwgImluY2x1ZGVzIiwgIm9ubHlfZm9yIiwgInVzZXJMYW5ndWFnZSIsICJtYXRjaENyaXRlcmlhIiwgIiRub3RpY2UiLCAiXyRub3RpY2UkZGF0YSIsICJjYWNoZSIsICJ0ZXN0Q3JpdGVyaWEiLCAiY3JpdGVyaWEiLCAid2luZG93IiwgImV2YWwiLCAicmVzdWx0IiwgImNyaXRlcmlhRGF0YSIsICJ0cmltIiwgIlVyaSIsICJkZWNvZGUiLCAiYXR0ciIsICJoYXNDbGFzcyIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgImJyb2FkY2FzdENoYW5uZWwiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJjdXJyZW50VmVyc2lvbiIsICJsb2NhbFZlcnNpb24iLCAic3RvcmFnZSIsICJ0aW1lciIsICIkYXJlYSIsICIkY3VycmVudE5vdGljZSIsICIkZGlzbWlzcyIsICJjbG9zZU5vdGljZXMiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAiY2xlYXJUaW1lb3V0IiwgInJlbW92ZSIsICJzZXQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJvbiIsICJ0b2FzdGlmeUluc3RhbmNlIiwgInRvYXN0aWZ5IiwgIm5vZGUiLCAiZHVyYXRpb24iLCAiZ3Jhdml0eSIsICJwb3NpdGlvbiIsICJvbkNsaWNrIiwgImhpZGVUb2FzdCIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJub3RpY2VTdHlsZXMiLCAic2hvd05vdGljZXMiLCAiJG1vdW50UG9pbnQiLCAiaW5kZXgiLCAicmVtb3RlTm90aWNlcyIsICJfcmVtb3RlTm90aWNlcyR2ZXJzaW8iLCAibm90aWNlc0xlbmd0aCIsICJsZW5ndGgiLCAibmV4dE5vdGljZUluZGV4IiwgImkiLCAiZXEiLCAic3R5bGUiLCAibG9hZGVyIiwgImFkZFN0eWxlVGFnIiwgImRpc2FibGVkIiwgIm5vdGljZUh0bWwiLCAiaHRtbCIsICJub3RpY2VTdHlsZUlkIiwgImN1cnJlbnROb3RpY2VIdG1sIiwgInN0b3AiLCAiZmFkZU91dCIsICJfaSIsICJfbm90aWNlU3R5bGVzIiwgIm5vdGljZVN0eWxlIiwgImZhZGVJbiIsICJhcHBlbmQiLCAic2V0VGltZW91dCIsICJfcmVtb3RlTm90aWNlcyQkbm90aWMiLCAiJGJvZHkiLCAiZ2V0Qm9keSIsICJyYW5kb21JbmRleCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJhZHZhbmNlZFNpdGVOb3RpY2VzIiwgIl9hZHZhbmNlZFNpdGVOb3RpY2VzIl0KfQo=

})();

/* </nowiki> */
