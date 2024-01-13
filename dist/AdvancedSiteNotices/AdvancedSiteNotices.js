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
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/AdvancedSiteNotices/modules/constant.ts
var CLASS_NAME = "gadget-advanced_site_notices";
var CLASS_NAME_DISMISS = "".concat(CLASS_NAME, "__dismiss");
var CLASS_NAME_NOTICE = "".concat(CLASS_NAME, "__notice");
var CLASS_NAME_NOTICE_CONTENT = "".concat(CLASS_NAME_NOTICE, "__content");
var CLASS_NAME_TITLE = "".concat(CLASS_NAME, "__title");
var STORAGE_KEY = "ext.gadget.AdvancedSiteNotices_dismissASN";
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
var WG_WIKI_ID = mw.config.get("wgWikiID");
//! src/AdvancedSiteNotices/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (AdvancedSiteNotices/".concat(version, "; ").concat(WG_WIKI_ID, ")"));
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
//! src/AdvancedSiteNotices/modules/loadRemoteNotices.ts
var loadRemoteNotices = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const response = yield queryApi();
    const responseParse = response["parse"];
    if (!(responseParse !== null && responseParse !== void 0 && responseParse.text)) {
      return {};
    }
    const $remoteNotices = $("<div>").html(responseParse.text).find("ul.sitents");
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
//! src/AdvancedSiteNotices/modules/util/generateArea.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
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
    DismissNotice: (0, import_ext_gadget2.localize)({
      en: "You have chosen to turn off Advanced Site Notices for the next 30 days. <br>If the site-wide announcement is not updated within the next 30 days, it will no longer be displayed; however, if the site-wide announcement is updated, it will be displayed again.",
      ja: "今後30日間、ASNをオフにすることを選択しました。<br>サイト全体の通知が今後30日以内に更新されない場合、表示されなくなります。ただし、サイト全体の通知が更新される場合は、再び表示されます。",
      "zh-hans": "您已选择在接下来30日内关闭“高级站点通告”。<br>若接下来30日内全站公告未有更新，则不再显示；但是，若全站公告内容更新，则将重新显示。",
      "zh-hant": "您已選擇在接下來30日內關閉「高級站點通告」。<br>若接下來30日內全站公告未有更新，則不再顯示；但是，若全站公告內容更新，則將重新顯示。"
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
//! src/AdvancedSiteNotices/modules/util/generateArea.tsx
var generateArea = () => {
  const area = /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
    className: [CLASS_NAME, "noprint"]
  }, /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
    className: [CLASS_NAME_TITLE]
  }, getMessage("Title")), /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
    className: CLASS_NAME_NOTICE
  }, /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
    className: [CLASS_NAME_NOTICE_CONTENT, "center"]
  })), /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
    className: CLASS_NAME_DISMISS
  }, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
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
  var _$notice$attr;
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
  const criteriaData = ((_$notice$attr = $notice.attr("data-asn-criteria")) !== null && _$notice$attr !== void 0 ? _$notice$attr : "").trim();
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
//! src/AdvancedSiteNotices/modules/showNotice.ts
var import_ext_gadget4 = require("ext.gadget.Tippy");
var import_ext_gadget5 = require("ext.gadget.Toastify");
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
  const toastifyInstance = (0, import_ext_gadget5.toastify)({
    node: $("<span>").html(getMessage("DismissNotice")).get(0),
    close: true,
    duration: 10 * 1e3,
    gravity: "top",
    position: "right",
    onClick: () => {
      toastifyInstance.hideToast();
    }
  });
});
(0, import_ext_gadget4.tippy)($dismiss.get(0), {
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
    const $body = yield (0, import_ext_gadget6.getBody)();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvb3B0aW9ucy5qc29uIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL0FkdmFuY2VkU2l0ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL2FwaS50cyIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL3V0aWwvcXVlcnlBcGkudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9sb2FkUmVtb3RlTm90aWNlcy50cyIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVBcmVhLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL21hdGNoQ3JpdGVyaWEudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9zaG93Tm90aWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgIntcblx0XCJhamF4UGFnZVRpdGxlXCI6IFwiVGVtcGxhdGU6QWR2YW5jZWRTaXRlTm90aWNlcy9hamF4XCIsXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI3NpdGVOb3RpY2VcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4yXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7dHlwZSBSZW1vdGVOb3RpY2VzfSBmcm9tICcuL21vZHVsZXMvdXRpbC9xdWVyeUFwaSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2xvYWRSZW1vdGVOb3RpY2VzfSBmcm9tICcuL21vZHVsZXMvbG9hZFJlbW90ZU5vdGljZXMnO1xuaW1wb3J0IHtzaG93Tm90aWNlc30gZnJvbSAnLi9tb2R1bGVzL3Nob3dOb3RpY2UnO1xuXG4oYXN5bmMgZnVuY3Rpb24gYWR2YW5jZWRTaXRlTm90aWNlcygpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gYXdhaXQgZ2V0Qm9keSgpO1xuXG5cdGNvbnN0ICRtb3VudFBvaW50OiBKUXVlcnkgPSAkYm9keS5maW5kKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0aWYgKCEkbW91bnRQb2ludC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCByZW1vdGVOb3RpY2VzOiBSZW1vdGVOb3RpY2VzID0gYXdhaXQgbG9hZFJlbW90ZU5vdGljZXMoKTtcblx0aWYgKCFyZW1vdGVOb3RpY2VzLiRub3RpY2VzPy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCByYW5kb21JbmRleDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmVtb3RlTm90aWNlcy4kbm90aWNlcy5sZW5ndGgpO1xuXHRzaG93Tm90aWNlcygkbW91bnRQb2ludCwgcmFuZG9tSW5kZXgsIHJlbW90ZU5vdGljZXMpO1xufSkoKTtcbiIsICJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWFkdmFuY2VkX3NpdGVfbm90aWNlcyc7XG5jb25zdCBDTEFTU19OQU1FX0RJU01JU1M6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X19kaXNtaXNzYDtcbmNvbnN0IENMQVNTX05BTUVfTk9USUNFOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9fbm90aWNlYDtcbmNvbnN0IENMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTk9USUNFfV9fY29udGVudGA7XG5jb25zdCBDTEFTU19OQU1FX1RJVExFOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9fdGl0bGVgO1xuXG5jb25zdCBTVE9SQUdFX0tFWTogc3RyaW5nID0gJ2V4dC5nYWRnZXQuQWR2YW5jZWRTaXRlTm90aWNlc19kaXNtaXNzQVNOJztcblxuY29uc3QgV0dfVVNFUl9HUk9VUFM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykgPz8gW107XG5jb25zdCBXR19VU0VSX0xBTkdVQUdFOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpO1xuY29uc3QgV0dfV0lLSV9JRDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKTtcblxuZXhwb3J0IHtcblx0Q0xBU1NfTkFNRSxcblx0Q0xBU1NfTkFNRV9ESVNNSVNTLFxuXHRDTEFTU19OQU1FX05PVElDRSxcblx0Q0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVCxcblx0Q0xBU1NfTkFNRV9USVRMRSxcblx0U1RPUkFHRV9LRVksXG5cdFdHX1VTRVJfR1JPVVBTLFxuXHRXR19VU0VSX0xBTkdVQUdFLFxuXHRXR19XSUtJX0lELFxufTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1dHX1dJS0lfSUR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChBZHZhbmNlZFNpdGVOb3RpY2VzLyR7T1BUSU9OUy52ZXJzaW9ufTsgJHtXR19XSUtJX0lEfSlgKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfVVNFUl9MQU5HVUFHRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5cbmludGVyZmFjZSBSZW1vdGVOb3RpY2VzIHtcblx0JG5vdGljZXM/OiBKUXVlcnk7XG5cdHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRhY3Rpb246ICdwYXJzZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICd0ZXh0Jyxcblx0cGFnZTogT1BUSU9OUy5hamF4UGFnZVRpdGxlLFxuXHR1c2VsYW5nOiBXR19VU0VSX0xBTkdVQUdFLFxuXHR2YXJpYW50OiBXR19VU0VSX0xBTkdVQUdFLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoKTogUHJvbWlzZTxSZXR1cm5UeXBlPG13LkFwaVsnZ2V0J10+PiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0FkdmFuY2VkU2l0ZU5vdGljZXNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIFJlbW90ZU5vdGljZXMsIHF1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlcywgcXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5cbnR5cGUgQXBpUmVzcG9uc2UgPSB7XG5cdHBhcnNlOiB7XG5cdFx0dGV4dD86IHN0cmluZztcblx0fTtcbn07XG5cbmNvbnN0IGxvYWRSZW1vdGVOb3RpY2VzID0gYXN5bmMgKCk6IFByb21pc2U8UmVtb3RlTm90aWNlcz4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoKTtcblx0Y29uc3QgcmVzcG9uc2VQYXJzZSA9IHJlc3BvbnNlWydwYXJzZSddIGFzIEFwaVJlc3BvbnNlWydwYXJzZSddO1xuXG5cdGlmICghcmVzcG9uc2VQYXJzZT8udGV4dCkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0ICRyZW1vdGVOb3RpY2VzOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyckbm90aWNlcyddPiA9ICQoJzxkaXY+Jylcblx0XHQuaHRtbChyZXNwb25zZVBhcnNlLnRleHQpXG5cdFx0LmZpbmQoJ3VsLnNpdGVudHMnKTtcblxuXHRjb25zdCAkbm90aWNlczogSlF1ZXJ5ID0gJHJlbW90ZU5vdGljZXMuZmluZCgnbGknKTtcblx0Y29uc3QgcmVtb3RlTm90aWNlc1ZlcnNpb246IE5vbk51bGxhYmxlPFJlbW90ZU5vdGljZXNbJ3ZlcnNpb24nXT4gPSAoXG5cdFx0JHJlbW90ZU5vdGljZXMuZGF0YSgnYXNuLXZlcnNpb24nKSBhcyBudW1iZXJcblx0KS50b1N0cmluZygpO1xuXG5cdHJldHVybiB7XG5cdFx0JG5vdGljZXMsXG5cdFx0dmVyc2lvbjogcmVtb3RlTm90aWNlc1ZlcnNpb24sXG5cdH07XG59O1xuXG5leHBvcnQge2xvYWRSZW1vdGVOb3RpY2VzfTtcbiIsICJpbXBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0RJU01JU1MsXG5cdENMQVNTX05BTUVfTk9USUNFLFxuXHRDTEFTU19OQU1FX05PVElDRV9DT05URU5ULFxuXHRDTEFTU19OQU1FX1RJVExFLFxufSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZUFyZWEgPSAoKTogSlF1ZXJ5ID0+IHtcblx0Y29uc3QgYXJlYSA9IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsICdub3ByaW50J119PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FX1RJVExFXX0+e2dldE1lc3NhZ2UoJ1RpdGxlJyl9PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9OT1RJQ0V9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQsICdjZW50ZXInXX0+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0RJU01JU1N9PlxuXHRcdFx0XHQ8YSByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD17Z2V0TWVzc2FnZSgnRGlzbWlzcycpfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG5cblx0cmV0dXJuICQoYXJlYSBhcyBIVE1MRWxlbWVudCk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlQXJlYX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdERpc21pc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVHVybiBvZmYgdGhpcyBub3RpY2UnLFxuXHRcdFx0amE6ICdBU07jgpLjgqrjg5XjgavjgZnjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6Zet5YWs5ZGKJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWieWFrOWRiicsXG5cdFx0fSksXG5cdFx0RGlzbWlzc05vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBjaG9zZW4gdG8gdHVybiBvZmYgQWR2YW5jZWQgU2l0ZSBOb3RpY2VzIGZvciB0aGUgbmV4dCAzMCBkYXlzLiA8YnI+SWYgdGhlIHNpdGUtd2lkZSBhbm5vdW5jZW1lbnQgaXMgbm90IHVwZGF0ZWQgd2l0aGluIHRoZSBuZXh0IDMwIGRheXMsIGl0IHdpbGwgbm8gbG9uZ2VyIGJlIGRpc3BsYXllZDsgaG93ZXZlciwgaWYgdGhlIHNpdGUtd2lkZSBhbm5vdW5jZW1lbnQgaXMgdXBkYXRlZCwgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYWdhaW4uJyxcblx0XHRcdGphOiAn5LuK5b6MMzDml6XplpPjgIFBU07jgpLjgqrjg5XjgavjgZnjgovjgZPjgajjgpLpgbjmip7jgZfjgb7jgZfjgZ/jgII8YnI+44K144Kk44OI5YWo5L2T44Gu6YCa55+l44GM5LuK5b6MMzDml6Xku6XlhoXjgavmm7TmlrDjgZXjgozjgarjgYTloLTlkIjjgIHooajnpLrjgZXjgozjgarjgY/jgarjgorjgb7jgZnjgILjgZ/jgaDjgZfjgIHjgrXjgqTjg4jlhajkvZPjga7pgJrnn6XjgYzmm7TmlrDjgZXjgozjgovloLTlkIjjga/jgIHlho3jgbPooajnpLrjgZXjgozjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey6YCJ5oup5Zyo5o6l5LiL5p2lMzDml6XlhoXlhbPpl63igJzpq5jnuqfnq5nngrnpgJrlkYrigJ3jgII8YnI+6Iul5o6l5LiL5p2lMzDml6XlhoXlhajnq5nlhazlkYrmnKrmnInmm7TmlrDvvIzliJnkuI3lho3mmL7npLrvvJvkvYbmmK/vvIzoi6Xlhajnq5nlhazlkYrlhoXlrrnmm7TmlrDvvIzliJnlsIbph43mlrDmmL7npLrjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey6YG45pOH5Zyo5o6l5LiL5L6GMzDml6Xlhafpl5zplonjgIzpq5jntJrnq5npu57pgJrlkYrjgI3jgII8YnI+6Iul5o6l5LiL5L6GMzDml6Xlhaflhajnq5nlhazlkYrmnKrmnInmm7TmlrDvvIzliYfkuI3lho3poa/npLrvvJvkvYbmmK/vvIzoi6Xlhajnq5nlhazlkYrlhaflrrnmm7TmlrDvvIzliYflsIfph43mlrDpoa/npLrjgIInLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Fubm91bmNlbWVudCcsXG5cdFx0XHRqYTogJ+mAmuefpScsXG5cdFx0XHR6aDogJ+WFrOWRiicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHtXR19VU0VSX0dST1VQUywgV0dfVVNFUl9MQU5HVUFHRX0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5jb25zdCBpbl9ncm91cCA9IChncm91cDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBXR19VU0VSX0dST1VQUy5pbmNsdWRlcyhncm91cCk7XG59O1xuXG5jb25zdCBvbmx5X2ZvciA9ICh1c2VyTGFuZ3VhZ2U6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gdXNlckxhbmd1YWdlID09PSBXR19VU0VSX0xBTkdVQUdFO1xufTtcblxuY29uc3QgbWF0Y2hDcml0ZXJpYSA9ICgkbm90aWNlOiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0Y29uc3QgY2FjaGUgPSAkbm90aWNlLmRhdGEoJ2Fzbi1jYWNoZScpIGFzIGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdGlmIChjYWNoZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9XG5cblx0Y29uc3QgdGVzdENyaXRlcmlhID0gKGNyaXRlcmlhOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHQvLyBGSVhNRTogVGhpcyBzaG91bGRuJ3QgYmUgdXNpbmcgZXZhbCBvbiBkYXRhIGVudGVyZWQgaW4gd2lraXRleHQuXG5cdFx0Ly8gSWYgdGhhdCBkYXRhIGlzIG1hbGZvcm1lZCBpdCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBlLmcuIGNyaXRlcmlhID0gXCIoZmFsc2UpKVwiXG5cdFx0dHJ5IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXG5cdFx0XHRyZXR1cm4gd2luZG93LmV2YWwoY3JpdGVyaWEpIGFzIGJvb2xlYW47XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGxldCByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdCBjcml0ZXJpYURhdGE6IHN0cmluZyA9ICgkbm90aWNlLmF0dHIoJ2RhdGEtYXNuLWNyaXRlcmlhJykgPz8gJycpLnRyaW0oKTtcblx0aWYgKGNyaXRlcmlhRGF0YSkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXN1bHQgPSB0ZXN0Q3JpdGVyaWEobXcuVXJpLmRlY29kZShjcml0ZXJpYURhdGEpKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCRub3RpY2UuYXR0cignY2xhc3MnKSkge1xuXHRcdGxldCBjcml0ZXJpYTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3N5c29wJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBpbl9ncm91cCgnc3lzb3AnKSB8fCBpbl9ncm91cCgnc3Rld2FyZCcpIHx8IGluX2dyb3VwKCdxaXV3ZW4nKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfbG9nZ2VkJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBpbl9ncm91cCgndXNlcicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV9hbm9uJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSAhaW5fZ3JvdXAoJ3VzZXInKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfY24nKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1jbicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9zZycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLXNnJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX215JykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtbXknKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfaGsnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1oaycpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9tbycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLW1vJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX3R3JykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtdHcnKTtcblx0XHR9XG5cblx0XHRpZiAoY3JpdGVyaWEgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y3JpdGVyaWEgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJlc3VsdCA9IGNyaXRlcmlhO1xuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9IHRydWU7XG5cdH1cblxuXHQkbm90aWNlLmRhdGEoJ2Fzbi1jYWNoZScsIHJlc3VsdCk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7bWF0Y2hDcml0ZXJpYX07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FX0RJU01JU1MsIENMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQsIFNUT1JBR0VfS0VZfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7dHlwZSBSZW1vdGVOb3RpY2VzfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuaW1wb3J0IHtnZW5lcmF0ZUFyZWF9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZUFyZWEnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHttYXRjaENyaXRlcmlhfSBmcm9tICcuL3V0aWwvbWF0Y2hDcml0ZXJpYSc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBicm9hZGNhc3RDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoU1RPUkFHRV9LRVkpO1xuXG5sZXQgY3VycmVudFZlcnNpb246IHN0cmluZyA9ICcwJztcbmNvbnN0IGxvY2FsVmVyc2lvbjogc3RyaW5nIHwgbnVsbCA9IG13LnN0b3JhZ2UuZ2V0KFNUT1JBR0VfS0VZKSBhcyBzdHJpbmcgfCBudWxsO1xuXG5sZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuXG5jb25zdCAkYXJlYTogSlF1ZXJ5ID0gZ2VuZXJhdGVBcmVhKCk7XG5jb25zdCAkY3VycmVudE5vdGljZTogSlF1ZXJ5ID0gJGFyZWEuZmluZChgLiR7Q0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVH1gKTtcbmNvbnN0ICRkaXNtaXNzOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJGFyZWEuZmluZChgLiR7Q0xBU1NfTkFNRV9ESVNNSVNTfWApLmZpbmQoJ2EnKTtcblxuY29uc3QgY2xvc2VOb3RpY2VzID0gKCk6IHZvaWQgPT4ge1xuXHRicm9hZGNhc3RDaGFubmVsLnBvc3RNZXNzYWdlKCdjbG9zZScpO1xuXHRicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XG5cdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdCRhcmVhLnJlbW92ZSgpO1xuXHRtdy5zdG9yYWdlLnNldChTVE9SQUdFX0tFWSwgY3VycmVudFZlcnNpb24sIDYwICogNjAgKiAyNCAqIDMwICogMTAwMCk7XG59O1xuXG5icm9hZGNhc3RDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjbG9zZU5vdGljZXMpO1xuXG4kZGlzbWlzcy5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdGNsb3NlTm90aWNlcygpO1xuXHRjb25zdCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoe1xuXHRcdG5vZGU6ICQoJzxzcGFuPicpLmh0bWwoZ2V0TWVzc2FnZSgnRGlzbWlzc05vdGljZScpKS5nZXQoMCksXG5cdFx0Y2xvc2U6IHRydWUsXG5cdFx0ZHVyYXRpb246IDEwICogMTAwMCxcblx0XHRncmF2aXR5OiAndG9wJyxcblx0XHRwb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRvbkNsaWNrOiAoKTogdm9pZCA9PiB7XG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdH0sXG5cdH0pO1xufSk7XG50aXBweSgkZGlzbWlzcy5nZXQoMCkgYXMgSFRNTEFuY2hvckVsZW1lbnQsIHtcblx0YXJyb3c6IHRydWUsXG5cdGNvbnRlbnQ6ICRkaXNtaXNzLmF0dHIoJ2FyaWEtbGFiZWwnKSBhcyBzdHJpbmcsXG5cdHBsYWNlbWVudDogJ2JvdHRvbScsXG59KTtcblxubGV0ICRub3RpY2VzOiBKUXVlcnk7XG5jb25zdCBub3RpY2VTdHlsZXM6IEhUTUxTdHlsZUVsZW1lbnRbXSA9IFtdO1xuY29uc3Qgc2hvd05vdGljZXMgPSAoJG1vdW50UG9pbnQ6IEpRdWVyeSwgaW5kZXg6IG51bWJlciwgcmVtb3RlTm90aWNlcz86IFJlbW90ZU5vdGljZXMpOiB2b2lkID0+IHtcblx0Y3VycmVudFZlcnNpb24gPSByZW1vdGVOb3RpY2VzPy52ZXJzaW9uID8/IGN1cnJlbnRWZXJzaW9uO1xuXHRpZiAoY3VycmVudFZlcnNpb24gPT09IGxvY2FsVmVyc2lvbikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChyZW1vdGVOb3RpY2VzPy4kbm90aWNlcykge1xuXHRcdCh7JG5vdGljZXN9ID0gcmVtb3RlTm90aWNlcyk7XG5cdH1cblxuXHRjb25zdCBub3RpY2VzTGVuZ3RoOiBudW1iZXIgPSAkbm90aWNlcy5sZW5ndGg7XG5cdGNvbnN0IG5leHROb3RpY2VJbmRleDogbnVtYmVyID0gKGluZGV4ICsgMSkgJSBub3RpY2VzTGVuZ3RoO1xuXHRsZXQgJG5vdGljZTogSlF1ZXJ5ID0gJCgpO1xuXG5cdGxldCBpOiBudW1iZXIgPSAwO1xuXHR3aGlsZSAoaSsrIDwgbm90aWNlc0xlbmd0aCkge1xuXHRcdCRub3RpY2UgPSAkbm90aWNlcy5lcShpbmRleCk7XG5cdFx0aWYgKCFtYXRjaENyaXRlcmlhKCRub3RpY2UpKSB7XG5cdFx0XHRzaG93Tm90aWNlcygkbW91bnRQb2ludCwgbmV4dE5vdGljZUluZGV4KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXggPSBpbmRleCsrICUgbm90aWNlc0xlbmd0aDtcblx0fVxuXG5cdGlmICh0eXBlb2YgJG5vdGljZS5kYXRhKCdhc24taHRtbCcpID09PSAnc3RyaW5nJykge1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLWh0bWwtcmF3JywgbXcuVXJpLmRlY29kZSgkbm90aWNlLmRhdGEoJ2Fzbi1odG1sJykgYXMgc3RyaW5nKSk7XG5cdFx0JG5vdGljZS5kYXRhKCdhc24taHRtbCcsIG51bGwpO1xuXHR9XG5cdGlmICh0eXBlb2YgJG5vdGljZS5kYXRhKCdhc24tc3R5bGUnKSA9PT0gJ3N0cmluZycpIHtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZS1pZCcsIG5vdGljZVN0eWxlcy5sZW5ndGgpO1xuXHRcdGNvbnN0IHN0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gbXcubG9hZGVyLmFkZFN0eWxlVGFnKG13LlVyaS5kZWNvZGUoJG5vdGljZS5kYXRhKCdhc24tc3R5bGUnKSBhcyBzdHJpbmcpKTtcblx0XHRzdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0bm90aWNlU3R5bGVzW25vdGljZVN0eWxlcy5sZW5ndGhdID0gc3R5bGU7IC8vIFJlcGxhY2UgYG5vdGljZVN0eWxlcy5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZScsIG51bGwpO1xuXHR9XG5cblx0Y29uc3Qgbm90aWNlSHRtbDogc3RyaW5nID0gKCRub3RpY2UuZGF0YSgnYXNuLWh0bWwtcmF3JykgYXMgc3RyaW5nKSB8fCAkbm90aWNlLmh0bWwoKTtcblx0Y29uc3Qgbm90aWNlU3R5bGVJZDogbnVtYmVyID0gJG5vdGljZS5kYXRhKCdhc24tc3R5bGUtaWQnKSBhcyBudW1iZXI7XG5cdGNvbnN0IGN1cnJlbnROb3RpY2VIdG1sOiBzdHJpbmcgPSAkY3VycmVudE5vdGljZS5odG1sKCk7XG5cdGlmIChjdXJyZW50Tm90aWNlSHRtbCAmJiBjdXJyZW50Tm90aWNlSHRtbCAhPT0gbm90aWNlSHRtbCkge1xuXHRcdCRjdXJyZW50Tm90aWNlLnN0b3AoKS5mYWRlT3V0KCgpOiB2b2lkID0+IHtcblx0XHRcdGZvciAoY29uc3Qgc3R5bGUgb2Ygbm90aWNlU3R5bGVzKSB7XG5cdFx0XHRcdHN0eWxlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5vdGljZVN0eWxlOiBIVE1MU3R5bGVFbGVtZW50IHwgdW5kZWZpbmVkID0gbm90aWNlU3R5bGVzW25vdGljZVN0eWxlSWRdO1xuXHRcdFx0aWYgKG5vdGljZVN0eWxlKSB7XG5cdFx0XHRcdG5vdGljZVN0eWxlLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQkY3VycmVudE5vdGljZS5odG1sKG5vdGljZUh0bWwpO1xuXHRcdFx0Ly8gYW5pbWF0aW9uIHRyeSAvY2F0Y2hlZCB0byBhdm9pZCBUeXBlRXJyb3I6IChBbmltYXRpb24udHdlZW5lcnNbcHJvcF18fFtdKS5jb25jYXQgaXMgbm90IGEgZnVuY3Rpb24gZXJyb3IgYmVpbmcgc2VlbiBpbiBwcm9kdWN0aW9uXG5cdFx0XHR0cnkge1xuXHRcdFx0XHQkY3VycmVudE5vdGljZS5mYWRlSW4oKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9KTtcblx0fSBlbHNlIGlmICghY3VycmVudE5vdGljZUh0bWwpIHtcblx0XHQkbW91bnRQb2ludC5hcHBlbmQoJGFyZWEpO1xuXHRcdGNvbnN0IG5vdGljZVN0eWxlOiBIVE1MU3R5bGVFbGVtZW50IHwgdW5kZWZpbmVkID0gbm90aWNlU3R5bGVzW25vdGljZVN0eWxlSWRdO1xuXHRcdGlmIChub3RpY2VTdHlsZSkge1xuXHRcdFx0bm90aWNlU3R5bGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0JGN1cnJlbnROb3RpY2UuaHRtbChub3RpY2VIdG1sKS5mYWRlSW4oKTtcblx0fVxuXG5cdHRpbWVyID0gc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG5cdFx0c2hvd05vdGljZXMoJG1vdW50UG9pbnQsIG5leHROb3RpY2VJbmRleCk7XG5cdH0sIDcgKiAxMDAwKTtcbn07XG5cbmV4cG9ydCB7c2hvd05vdGljZXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFNBQVMsUUFBUTtBQUNkLFVBQUksV0FBVyxDQUFDO0FBRWhCLGVBQVNBLGtCQUFpQixTQUFTO0FBQy9CLFlBQUksUUFBUTtBQUNaLGtCQUFVLE9BQU8sT0FBTztBQUV4QixZQUFJLEtBQUssdUJBQXVCLFVBQVU7QUFFMUMsaUJBQVMsRUFBRSxJQUFJLFNBQVMsRUFBRSxLQUFLLENBQUM7QUFDaEMsaUJBQVMsRUFBRSxFQUFFLEtBQUssSUFBSTtBQUV0QixhQUFLLFFBQVE7QUFDYixhQUFLLE1BQU07QUFDWCxhQUFLLFVBQVU7QUFDZixhQUFLLE1BQU0sSUFBSSxlQUFlO0FBQzlCLGFBQUss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dEIsY0FBYzVFLGNBQUEsUUFBQWtHLDBCQUFBLFVBQWRBLHNCQUF3Qm5CLFNBQVE7QUFDcEM7SUFDRDtBQUVBLFVBQU1zQixjQUFzQkMsS0FBS0MsTUFBTUQsS0FBS0UsT0FBTyxJQUFJNUIsY0FBYzVFLFNBQVMrRSxNQUFNO0FBQ3BGTixnQkFBWUMsYUFBYTJCLGFBQWF6QixhQUFhO0VBQ3BELENBQUE7QUFBQSxXQWZnQjZCLHNCQUFBO0FBQUEsV0FBQUMscUJBQUF6SCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUF1SDtBQUFBLEdBQUEsRUFlYjsiLAogICJuYW1lcyI6IFsiQnJvYWRjYXN0Q2hhbm5lbCIsICJhamF4UGFnZVRpdGxlIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJyZXF1aXJlIiwgIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9ESVNNSVNTIiwgImNvbmNhdCIsICJDTEFTU19OQU1FX05PVElDRSIsICJDTEFTU19OQU1FX05PVElDRV9DT05URU5UIiwgIkNMQVNTX05BTUVfVElUTEUiLCAiU1RPUkFHRV9LRVkiLCAiV0dfVVNFUl9HUk9VUFMiLCAiX213JGNvbmZpZyRnZXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19VU0VSX0xBTkdVQUdFIiwgIldHX1dJS0lfSUQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBhZ2UiLCAidXNlbGFuZyIsICJ2YXJpYW50IiwgInF1ZXJ5QXBpIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibG9hZFJlbW90ZU5vdGljZXMiLCAiX3JlZjIiLCAicmVzcG9uc2UiLCAicmVzcG9uc2VQYXJzZSIsICJ0ZXh0IiwgIiRyZW1vdGVOb3RpY2VzIiwgIiQiLCAiaHRtbCIsICJmaW5kIiwgIiRub3RpY2VzMiIsICJyZW1vdGVOb3RpY2VzVmVyc2lvbiIsICJkYXRhIiwgInRvU3RyaW5nIiwgIiRub3RpY2VzIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiRGlzbWlzcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJEaXNtaXNzTm90aWNlIiwgIlRpdGxlIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZUFyZWEiLCAiYXJlYSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInJvbGUiLCAiaW5fZ3JvdXAiLCAiZ3JvdXAiLCAiaW5jbHVkZXMiLCAib25seV9mb3IiLCAidXNlckxhbmd1YWdlIiwgIm1hdGNoQ3JpdGVyaWEiLCAiJG5vdGljZSIsICJfJG5vdGljZSRhdHRyIiwgImNhY2hlIiwgInRlc3RDcml0ZXJpYSIsICJjcml0ZXJpYSIsICJ3aW5kb3ciLCAiZXZhbCIsICJyZXN1bHQiLCAiY3JpdGVyaWFEYXRhIiwgImF0dHIiLCAidHJpbSIsICJVcmkiLCAiZGVjb2RlIiwgImhhc0NsYXNzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYnJvYWRjYXN0Q2hhbm5lbCIsICJCcm9hZGNhc3RDaGFubmVsIiwgImN1cnJlbnRWZXJzaW9uIiwgImxvY2FsVmVyc2lvbiIsICJzdG9yYWdlIiwgInRpbWVyIiwgIiRhcmVhIiwgIiRjdXJyZW50Tm90aWNlIiwgIiRkaXNtaXNzIiwgImNsb3NlTm90aWNlcyIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJjbGVhclRpbWVvdXQiLCAicmVtb3ZlIiwgInNldCIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAidG9hc3RpZnkiLCAibm9kZSIsICJkdXJhdGlvbiIsICJncmF2aXR5IiwgInBvc2l0aW9uIiwgIm9uQ2xpY2siLCAiaGlkZVRvYXN0IiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgIm5vdGljZVN0eWxlcyIsICJzaG93Tm90aWNlcyIsICIkbW91bnRQb2ludCIsICJpbmRleCIsICJyZW1vdGVOb3RpY2VzIiwgIl9yZW1vdGVOb3RpY2VzJHZlcnNpbyIsICJub3RpY2VzTGVuZ3RoIiwgImxlbmd0aCIsICJuZXh0Tm90aWNlSW5kZXgiLCAiaSIsICJlcSIsICJzdHlsZSIsICJsb2FkZXIiLCAiYWRkU3R5bGVUYWciLCAiZGlzYWJsZWQiLCAibm90aWNlSHRtbCIsICJub3RpY2VTdHlsZUlkIiwgImN1cnJlbnROb3RpY2VIdG1sIiwgInN0b3AiLCAiZmFkZU91dCIsICJfaSIsICJfbm90aWNlU3R5bGVzIiwgIm5vdGljZVN0eWxlIiwgImZhZGVJbiIsICJhcHBlbmQiLCAic2V0VGltZW91dCIsICJfcmVtb3RlTm90aWNlcyQkbm90aWMiLCAiJGJvZHkiLCAiZ2V0Qm9keSIsICJyYW5kb21JbmRleCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJhZHZhbmNlZFNpdGVOb3RpY2VzIiwgIl9hZHZhbmNlZFNpdGVOb3RpY2VzIl0KfQo=

})();

/* </nowiki> */
