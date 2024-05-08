/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-AdvancedSiteNotices.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AdvancedSiteNotices}
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

// dist/AdvancedSiteNotices/AdvancedSiteNotices.js
require_broadcastchannel_polyfill();
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
var storageKey = "ext.gadget.AdvancedSiteNotices_dismissASN";
var version = "4.0";
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
var import_ext_gadget8 = require("ext.gadget.Util");
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
  variant: wgUserLanguage
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
//! src/AdvancedSiteNotices/modules/constant.ts
var CLASS_NAME = "gadget-advanced_site_notices";
var CLASS_NAME_DISMISS = "".concat(CLASS_NAME, "__dismiss");
var CLASS_NAME_NOTICE = "".concat(CLASS_NAME, "__notice");
var CLASS_NAME_NOTICE_CONTENT = "".concat(CLASS_NAME_NOTICE, "__content");
var CLASS_NAME_TITLE = "".concat(CLASS_NAME, "__title");
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
    className: CLASS_NAME_TITLE
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
var broadcastChannel = new BroadcastChannel(storageKey);
var currentVersion = "0";
var localVersion = mw.storage.get(storageKey);
var timer;
var $area = generateArea();
var $currentNotice = $area.find(".".concat(CLASS_NAME_NOTICE_CONTENT));
var $dismiss = $area.find(".".concat(CLASS_NAME_DISMISS)).find("a");
var closeNotices = () => {
  broadcastChannel.postMessage("close");
  broadcastChannel.close();
  clearTimeout(timer);
  $area.remove();
  mw.storage.set(storageKey, currentVersion, 60 * 60 * 24 * 30 * 1e3);
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvb3B0aW9ucy5qc29uIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL0FkdmFuY2VkU2l0ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvbG9hZFJlbW90ZU5vdGljZXMudHN4IiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9zaG93Tm90aWNlLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVBcmVhLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL21hdGNoQ3JpdGVyaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImFqYXhQYWdlVGl0bGVcIjogXCJUZW1wbGF0ZTpBZHZhbmNlZFNpdGVOb3RpY2VzL2FqYXhcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjc2l0ZU5vdGljZVwiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0LkFkdmFuY2VkU2l0ZU5vdGljZXNfZGlzbWlzc0FTTlwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bG9hZFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy9sb2FkUmVtb3RlTm90aWNlcyc7XG5pbXBvcnQge3Nob3dOb3RpY2VzfSBmcm9tICcuL21vZHVsZXMvc2hvd05vdGljZSc7XG5cbihhc3luYyBmdW5jdGlvbiBhZHZhbmNlZFNpdGVOb3RpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSBhd2FpdCBnZXRCb2R5KCk7XG5cblx0Y29uc3QgJG1vdW50UG9pbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoISRtb3VudFBvaW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZXM6IFJlbW90ZU5vdGljZXMgPSBhd2FpdCBsb2FkUmVtb3RlTm90aWNlcygpO1xuXHRpZiAoIXJlbW90ZU5vdGljZXMuJG5vdGljZXM/Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJhbmRvbUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1vdGVOb3RpY2VzLiRub3RpY2VzLmxlbmd0aCk7XG5cdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCByYW5kb21JbmRleCwgcmVtb3RlTm90aWNlcyk7XG59KSgpO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQWR2YW5jZWRTaXRlTm90aWNlcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5pbnRlcmZhY2UgUmVtb3RlTm90aWNlcyB7XG5cdCRub3RpY2VzPzogSlF1ZXJ5O1xuXHR2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5jb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0YWN0aW9uOiAncGFyc2UnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAndGV4dCcsXG5cdHBhZ2U6IE9QVElPTlMuYWpheFBhZ2VUaXRsZSxcblx0dXNlbGFuZzogd2dVc2VyTGFuZ3VhZ2UsXG5cdHZhcmlhbnQ6IHdnVXNlckxhbmd1YWdlLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoKTogUHJvbWlzZTxSZXR1cm5UeXBlPG13LkFwaVsnZ2V0J10+PiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0FkdmFuY2VkU2l0ZU5vdGljZXNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIFJlbW90ZU5vdGljZXMsIHF1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlcywgcXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbnR5cGUgQXBpUmVzcG9uc2UgPSB7XG5cdHBhcnNlOiB7XG5cdFx0dGV4dD86IHN0cmluZztcblx0fTtcbn07XG5cbmNvbnN0IGxvYWRSZW1vdGVOb3RpY2VzID0gYXN5bmMgKCk6IFByb21pc2U8UmVtb3RlTm90aWNlcz4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoKTtcblx0Y29uc3QgcmVzcG9uc2VQYXJzZSA9IHJlc3BvbnNlWydwYXJzZSddIGFzIEFwaVJlc3BvbnNlWydwYXJzZSddO1xuXG5cdGlmICghcmVzcG9uc2VQYXJzZT8udGV4dCkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZSA9ICg8ZGl2IGlubmVySFRNTD17cmVzcG9uc2VQYXJzZS50ZXh0fSAvPikucXVlcnlTZWxlY3RvcigndWwuc2l0ZW50cycpO1xuXHRpZiAoIXJlbW90ZU5vdGljZSkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0ICRyZW1vdGVOb3RpY2VzOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyckbm90aWNlcyddPiA9ICQocmVtb3RlTm90aWNlKSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgJG5vdGljZXM6IEpRdWVyeSA9ICRyZW1vdGVOb3RpY2VzLmZpbmQoJ2xpJyk7XG5cdGNvbnN0IHJlbW90ZU5vdGljZXNWZXJzaW9uOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyd2ZXJzaW9uJ10+ID0gKFxuXHRcdCRyZW1vdGVOb3RpY2VzLmRhdGEoJ2Fzbi12ZXJzaW9uJykgYXMgbnVtYmVyXG5cdCkudG9TdHJpbmcoKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRub3RpY2VzLFxuXHRcdHZlcnNpb246IHJlbW90ZU5vdGljZXNWZXJzaW9uLFxuXHR9O1xufTtcblxuZXhwb3J0IHtsb2FkUmVtb3RlTm90aWNlc307XG4iLCAiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXMnO1xuY29uc3QgQ0xBU1NfTkFNRV9ESVNNSVNTOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9fZGlzbWlzc2A7XG5jb25zdCBDTEFTU19OQU1FX05PVElDRTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX25vdGljZWA7XG5jb25zdCBDTEFTU19OQU1FX05PVElDRV9DT05URU5UOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX05PVElDRX1fX2NvbnRlbnRgO1xuY29uc3QgQ0xBU1NfTkFNRV9USVRMRTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX3RpdGxlYDtcblxuZXhwb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RJU01JU1MsIENMQVNTX05BTUVfTk9USUNFLCBDTEFTU19OQU1FX05PVElDRV9DT05URU5ULCBDTEFTU19OQU1FX1RJVExFfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0NMQVNTX05BTUVfRElTTUlTUywgQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlc30gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcmVhfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVBcmVhJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7bWF0Y2hDcml0ZXJpYX0gZnJvbSAnLi91dGlsL21hdGNoQ3JpdGVyaWEnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYnJvYWRjYXN0Q2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKE9QVElPTlMuc3RvcmFnZUtleSk7XG5cbmxldCBjdXJyZW50VmVyc2lvbjogc3RyaW5nID0gJzAnO1xuY29uc3QgbG9jYWxWZXJzaW9uID0gbXcuc3RvcmFnZS5nZXQoT1BUSU9OUy5zdG9yYWdlS2V5KSBhcyBzdHJpbmcgfCBudWxsO1xuXG5sZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuXG5jb25zdCAkYXJlYTogSlF1ZXJ5ID0gZ2VuZXJhdGVBcmVhKCk7XG5jb25zdCAkY3VycmVudE5vdGljZTogSlF1ZXJ5ID0gJGFyZWEuZmluZChgLiR7Q0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVH1gKTtcbmNvbnN0ICRkaXNtaXNzOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJGFyZWEuZmluZChgLiR7Q0xBU1NfTkFNRV9ESVNNSVNTfWApLmZpbmQoJ2EnKTtcblxuY29uc3QgY2xvc2VOb3RpY2VzID0gKCk6IHZvaWQgPT4ge1xuXHRicm9hZGNhc3RDaGFubmVsLnBvc3RNZXNzYWdlKCdjbG9zZScpO1xuXHRicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XG5cdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdCRhcmVhLnJlbW92ZSgpO1xuXHRtdy5zdG9yYWdlLnNldChPUFRJT05TLnN0b3JhZ2VLZXksIGN1cnJlbnRWZXJzaW9uLCA2MCAqIDYwICogMjQgKiAzMCAqIDEwMDApO1xufTtcblxuYnJvYWRjYXN0Q2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2xvc2VOb3RpY2VzKTtcblxuJGRpc21pc3Mub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRjbG9zZU5vdGljZXMoKTtcblx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHRub2RlOiA8c3BhbiBpbm5lckhUTUw9e2dldE1lc3NhZ2UoJ0Rpc21pc3NOb3RpY2UnKX0gLz4sXG5cdFx0Y2xvc2U6IHRydWUsXG5cdFx0ZHVyYXRpb246IDEwICogMTAwMCxcblx0XHRncmF2aXR5OiAndG9wJyxcblx0XHRwb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRvbkNsaWNrKCk6IHZvaWQge1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR9LFxuXHR9KTtcbn0pO1xudGlwcHkoJGRpc21pc3MuZ2V0KDApIGFzIEhUTUxBbmNob3JFbGVtZW50LCB7XG5cdGFycm93OiB0cnVlLFxuXHRjb250ZW50OiAkZGlzbWlzcy5hdHRyKCdhcmlhLWxhYmVsJykgYXMgc3RyaW5nLFxuXHRwbGFjZW1lbnQ6ICdib3R0b20nLFxufSk7XG5cbmxldCAkbm90aWNlczogSlF1ZXJ5O1xuY29uc3Qgbm90aWNlU3R5bGVzOiBIVE1MU3R5bGVFbGVtZW50W10gPSBbXTtcbmNvbnN0IHNob3dOb3RpY2VzID0gKCRtb3VudFBvaW50OiBKUXVlcnksIGluZGV4OiBudW1iZXIsIHJlbW90ZU5vdGljZXM/OiBSZW1vdGVOb3RpY2VzKTogdm9pZCA9PiB7XG5cdGN1cnJlbnRWZXJzaW9uID0gcmVtb3RlTm90aWNlcz8udmVyc2lvbiA/PyBjdXJyZW50VmVyc2lvbjtcblx0aWYgKGN1cnJlbnRWZXJzaW9uID09PSBsb2NhbFZlcnNpb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAocmVtb3RlTm90aWNlcz8uJG5vdGljZXMpIHtcblx0XHQoeyRub3RpY2VzfSA9IHJlbW90ZU5vdGljZXMpO1xuXHR9XG5cblx0Y29uc3Qgbm90aWNlc0xlbmd0aDogbnVtYmVyID0gJG5vdGljZXMubGVuZ3RoO1xuXHRjb25zdCBuZXh0Tm90aWNlSW5kZXg6IG51bWJlciA9IChpbmRleCArIDEpICUgbm90aWNlc0xlbmd0aDtcblx0bGV0ICRub3RpY2U6IEpRdWVyeSA9ICQoKTtcblxuXHRsZXQgaTogbnVtYmVyID0gMDtcblx0d2hpbGUgKGkrKyA8IG5vdGljZXNMZW5ndGgpIHtcblx0XHQkbm90aWNlID0gJG5vdGljZXMuZXEoaW5kZXgpO1xuXHRcdGlmICghbWF0Y2hDcml0ZXJpYSgkbm90aWNlKSkge1xuXHRcdFx0c2hvd05vdGljZXMoJG1vdW50UG9pbnQsIG5leHROb3RpY2VJbmRleCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4ID0gaW5kZXgrKyAlIG5vdGljZXNMZW5ndGg7XG5cdH1cblxuXHRpZiAodHlwZW9mICRub3RpY2UuZGF0YSgnYXNuLWh0bWwnKSA9PT0gJ3N0cmluZycpIHtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1odG1sLXJhdycsIG13LlVyaS5kZWNvZGUoJG5vdGljZS5kYXRhKCdhc24taHRtbCcpIGFzIHN0cmluZykpO1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLWh0bWwnLCBudWxsKTtcblx0fVxuXHRpZiAodHlwZW9mICRub3RpY2UuZGF0YSgnYXNuLXN0eWxlJykgPT09ICdzdHJpbmcnKSB7XG5cdFx0JG5vdGljZS5kYXRhKCdhc24tc3R5bGUtaWQnLCBub3RpY2VTdHlsZXMubGVuZ3RoKTtcblx0XHRjb25zdCBzdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IG13LmxvYWRlci5hZGRTdHlsZVRhZyhtdy5VcmkuZGVjb2RlKCRub3RpY2UuZGF0YSgnYXNuLXN0eWxlJykgYXMgc3RyaW5nKSk7XG5cdFx0c3R5bGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdG5vdGljZVN0eWxlc1tub3RpY2VTdHlsZXMubGVuZ3RoXSA9IHN0eWxlOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZScsIG51bGwpO1xuXHR9XG5cblx0Y29uc3Qgbm90aWNlSHRtbDogc3RyaW5nID0gKCRub3RpY2UuZGF0YSgnYXNuLWh0bWwtcmF3JykgYXMgc3RyaW5nKSB8fCAkbm90aWNlLmh0bWwoKTtcblx0Y29uc3Qgbm90aWNlU3R5bGVJZDogbnVtYmVyID0gJG5vdGljZS5kYXRhKCdhc24tc3R5bGUtaWQnKSBhcyBudW1iZXI7XG5cdGNvbnN0IGN1cnJlbnROb3RpY2VIdG1sOiBzdHJpbmcgPSAkY3VycmVudE5vdGljZS5odG1sKCk7XG5cdGlmIChjdXJyZW50Tm90aWNlSHRtbCAmJiBjdXJyZW50Tm90aWNlSHRtbCAhPT0gbm90aWNlSHRtbCkge1xuXHRcdCRjdXJyZW50Tm90aWNlLnN0b3AoKS5mYWRlT3V0KCgpOiB2b2lkID0+IHtcblx0XHRcdGZvciAoY29uc3Qgc3R5bGUgb2Ygbm90aWNlU3R5bGVzKSB7XG5cdFx0XHRcdHN0eWxlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5vdGljZVN0eWxlOiBIVE1MU3R5bGVFbGVtZW50IHwgdW5kZWZpbmVkID0gbm90aWNlU3R5bGVzW25vdGljZVN0eWxlSWRdO1xuXHRcdFx0aWYgKG5vdGljZVN0eWxlKSB7XG5cdFx0XHRcdG5vdGljZVN0eWxlLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQkY3VycmVudE5vdGljZS5odG1sKG5vdGljZUh0bWwpO1xuXHRcdFx0Ly8gYW5pbWF0aW9uIHRyeSAvY2F0Y2hlZCB0byBhdm9pZCBUeXBlRXJyb3I6IChBbmltYXRpb24udHdlZW5lcnNbcHJvcF18fFtdKS5jb25jYXQgaXMgbm90IGEgZnVuY3Rpb24gZXJyb3IgYmVpbmcgc2VlbiBpbiBwcm9kdWN0aW9uXG5cdFx0XHR0cnkge1xuXHRcdFx0XHQkY3VycmVudE5vdGljZS5mYWRlSW4oKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9KTtcblx0fSBlbHNlIGlmICghY3VycmVudE5vdGljZUh0bWwpIHtcblx0XHQkbW91bnRQb2ludC5hcHBlbmQoJGFyZWEpO1xuXHRcdGNvbnN0IG5vdGljZVN0eWxlOiBIVE1MU3R5bGVFbGVtZW50IHwgdW5kZWZpbmVkID0gbm90aWNlU3R5bGVzW25vdGljZVN0eWxlSWRdO1xuXHRcdGlmIChub3RpY2VTdHlsZSkge1xuXHRcdFx0bm90aWNlU3R5bGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0JGN1cnJlbnROb3RpY2UuaHRtbChub3RpY2VIdG1sKS5mYWRlSW4oKTtcblx0fVxuXG5cdHRpbWVyID0gc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG5cdFx0c2hvd05vdGljZXMoJG1vdW50UG9pbnQsIG5leHROb3RpY2VJbmRleCk7XG5cdH0sIDcgKiAxMDAwKTtcbn07XG5cbmV4cG9ydCB7c2hvd05vdGljZXN9O1xuIiwgImltcG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfRElTTUlTUyxcblx0Q0xBU1NfTkFNRV9OT1RJQ0UsXG5cdENMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQsXG5cdENMQVNTX05BTUVfVElUTEUsXG59IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlQXJlYSA9ICgpOiBKUXVlcnkgPT4ge1xuXHRjb25zdCBhcmVhOiBSZWFjdC5SZWFjdEVsZW1lbnQgPSAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCAnbm9wcmludCddfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX1RJVExFfT57Z2V0TWVzc2FnZSgnVGl0bGUnKX08L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX05PVElDRX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVCwgJ2NlbnRlciddfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9ESVNNSVNTfT5cblx0XHRcdFx0PGEgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9e2dldE1lc3NhZ2UoJ0Rpc21pc3MnKX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xuXG5cdHJldHVybiAkKGFyZWEpIGFzIEpRdWVyeTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVBcmVhfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RGlzbWlzczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUdXJuIG9mZiB0aGlzIG5vdGljZScsXG5cdFx0XHRqYTogJ0FTTuOCkuOCquODleOBq+OBmeOCiycsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl63lhazlkYonLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJ5YWs5ZGKJyxcblx0XHR9KSxcblx0XHREaXNtaXNzTm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIGNob3NlbiB0byB0dXJuIG9mZiBBZHZhbmNlZCBTaXRlIE5vdGljZXMgZm9yIHRoZSBuZXh0IDMwIGRheXMuIDxicj5JZiB0aGUgc2l0ZS13aWRlIGFubm91bmNlbWVudCBpcyBub3QgdXBkYXRlZCB3aXRoaW4gdGhlIG5leHQgMzAgZGF5cywgaXQgd2lsbCBubyBsb25nZXIgYmUgZGlzcGxheWVkOyBob3dldmVyLCBpZiB0aGUgc2l0ZS13aWRlIGFubm91bmNlbWVudCBpcyB1cGRhdGVkLCBpdCB3aWxsIGJlIGRpc3BsYXllZCBhZ2Fpbi4nLFxuXHRcdFx0amE6ICfku4rlvowzMOaXpemWk+OAgUFTTuOCkuOCquODleOBq+OBmeOCi+OBk+OBqOOCkumBuOaKnuOBl+OBvuOBl+OBn+OAgjxicj7jgrXjgqTjg4jlhajkvZPjga7pgJrnn6XjgYzku4rlvowzMOaXpeS7peWGheOBq+abtOaWsOOBleOCjOOBquOBhOWgtOWQiOOAgeihqOekuuOBleOCjOOBquOBj+OBquOCiuOBvuOBmeOAguOBn+OBoOOBl+OAgeOCteOCpOODiOWFqOS9k+OBrumAmuefpeOBjOabtOaWsOOBleOCjOOCi+WgtOWQiOOBr+OAgeWGjeOBs+ihqOekuuOBleOCjOOBvuOBmeOAgicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjlt7LpgInmi6nlnKjmjqXkuIvmnaUzMOaXpeWGheWFs+mXreKAnOmrmOe6p+ermeeCuemAmuWRiuKAneOAgjxicj7oi6XmjqXkuIvmnaUzMOaXpeWGheWFqOermeWFrOWRiuacquacieabtOaWsO+8jOWImeS4jeWGjeaYvuekuu+8m+S9huaYr++8jOiLpeWFqOermeWFrOWRiuWGheWuueabtOaWsO+8jOWImeWwhumHjeaWsOaYvuekuuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7Lpgbjmk4flnKjmjqXkuIvkvoYzMOaXpeWFp+mXnOmWieOAjOmrmOe0muermem7numAmuWRiuOAjeOAgjxicj7oi6XmjqXkuIvkvoYzMOaXpeWFp+WFqOermeWFrOWRiuacquacieabtOaWsO+8jOWJh+S4jeWGjemhr+ekuu+8m+S9huaYr++8jOiLpeWFqOermeWFrOWRiuWFp+WuueabtOaWsO+8jOWJh+Wwh+mHjeaWsOmhr+ekuuOAgicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQW5ub3VuY2VtZW50Jyxcblx0XHRcdGphOiAn6YCa55+lJyxcblx0XHRcdHpoOiAn5YWs5ZGKJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3Qge3dnVXNlckdyb3Vwcywgd2dHbG9iYWxHcm91cHMsIHdnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuY29uc3QgaW5fZ3JvdXAgPSAoZ3JvdXA6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gISEod2dVc2VyR3JvdXBzPy5pbmNsdWRlcyhncm91cCkgfHwgKHdnR2xvYmFsR3JvdXBzIGFzIHN0cmluZ1tdKT8uaW5jbHVkZXMoZ3JvdXApKTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbmNvbnN0IG9ubHlfZm9yID0gKHVzZXJMYW5ndWFnZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiB1c2VyTGFuZ3VhZ2UgPT09IHdnVXNlckxhbmd1YWdlO1xufTtcblxuY29uc3QgbWF0Y2hDcml0ZXJpYSA9ICgkbm90aWNlOiBKUXVlcnkpOiBib29sZWFuID0+IHtcblx0Y29uc3QgY2FjaGUgPSAkbm90aWNlLmRhdGEoJ2Fzbi1jYWNoZScpIGFzIGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdGlmIChjYWNoZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9XG5cblx0Y29uc3QgdGVzdENyaXRlcmlhID0gKGNyaXRlcmlhOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHQvLyBGSVhNRTogVGhpcyBzaG91bGRuJ3QgYmUgdXNpbmcgZXZhbCBvbiBkYXRhIGVudGVyZWQgaW4gd2lraXRleHQuXG5cdFx0Ly8gSWYgdGhhdCBkYXRhIGlzIG1hbGZvcm1lZCBpdCB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBlLmcuIGNyaXRlcmlhID0gXCIoZmFsc2UpKVwiXG5cdFx0dHJ5IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXG5cdFx0XHRyZXR1cm4gd2luZG93LmV2YWwoY3JpdGVyaWEpIGFzIGJvb2xlYW47XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdGxldCByZXN1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdCBjcml0ZXJpYURhdGE6IHN0cmluZyA9ICgoJG5vdGljZS5kYXRhKCdhc24tY3JpdGVyaWEnKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnKS50cmltKCk7XG5cdGlmIChjcml0ZXJpYURhdGEpIHtcblx0XHR0cnkge1xuXHRcdFx0cmVzdWx0ID0gdGVzdENyaXRlcmlhKG13LlVyaS5kZWNvZGUoY3JpdGVyaWFEYXRhKSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdH1cblx0fSBlbHNlIGlmICgkbm90aWNlLmF0dHIoJ2NsYXNzJykpIHtcblx0XHRsZXQgY3JpdGVyaWE6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV9zeXNvcCcpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gaW5fZ3JvdXAoJ3N5c29wJykgfHwgaW5fZ3JvdXAoJ3N0ZXdhcmQnKSB8fCBpbl9ncm91cCgncWl1d2VuJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X2xvZ2dlZCcpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gaW5fZ3JvdXAoJ3VzZXInKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfYW5vbicpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gIWluX2dyb3VwKCd1c2VyJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX2NuJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtY24nKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfc2cnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1zZycpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9teScpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLW15Jyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX2hrJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtaGsnKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfbW8nKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1tbycpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF90dycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLXR3Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNyaXRlcmlhID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNyaXRlcmlhID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXN1bHQgPSBjcml0ZXJpYTtcblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSB0cnVlO1xuXHR9XG5cblx0JG5vdGljZS5kYXRhKCdhc24tY2FjaGUnLCByZXN1bHQpO1xuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQge21hdGNoQ3JpdGVyaWF9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTTtBQUNYLGFBQUssVUFBVTtBQUNmLGFBQUssTUFBTSxJQUFJLGVBQWU7QUFDOUIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUNy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QU10SixtQkFBQXVKLFNBQVE7QUFFckQsVUFBTTNCLGNBQXNCMEIsTUFBTTlHLEtBQWEzQyxrQkFBa0I7QUFDakUsUUFBSSxDQUFDK0gsWUFBWUssUUFBUTtBQUN4QjtJQUNEO0FBRUEsVUFBTUgsZ0JBQUEsTUFBcUNuRyxrQkFBa0I7QUFDN0QsUUFBSSxHQUFBMEgsd0JBQUN2QixjQUFjbEYsY0FBQSxRQUFBeUcsMEJBQUEsVUFBZEEsc0JBQXdCcEIsU0FBUTtBQUNwQztJQUNEO0FBRUEsVUFBTXVCLGNBQXNCQyxLQUFLQyxNQUFNRCxLQUFLRSxPQUFPLElBQUk3QixjQUFjbEYsU0FBU3FGLE1BQU07QUFDcEZOLGdCQUFZQyxhQUFhNEIsYUFBYTFCLGFBQWE7RUFDcEQsQ0FBQTtBQUFBLFdBZmdCOEIsc0JBQUE7QUFBQSxXQUFBQyxxQkFBQXRJLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQW9JO0FBQUEsR0FBQSxFQWViOyIsCiAgIm5hbWVzIjogWyJCcm9hZGNhc3RDaGFubmVsIiwgImFqYXhQYWdlVGl0bGUiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInN0b3JhZ2VLZXkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJ3Z1VzZXJMYW5ndWFnZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicGFnZSIsICJ1c2VsYW5nIiwgInZhcmlhbnQiLCAicXVlcnlBcGkiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJlcnJvciIsICJjb25zb2xlIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJsb2FkUmVtb3RlTm90aWNlcyIsICJfcmVmMiIsICJyZXNwb25zZSIsICJyZXNwb25zZVBhcnNlIiwgInRleHQiLCAicmVtb3RlTm90aWNlIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAicXVlcnlTZWxlY3RvciIsICIkcmVtb3RlTm90aWNlcyIsICIkIiwgIiRub3RpY2VzMiIsICJmaW5kIiwgInJlbW90ZU5vdGljZXNWZXJzaW9uIiwgImRhdGEiLCAidG9TdHJpbmciLCAiJG5vdGljZXMiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0RJU01JU1MiLCAiQ0xBU1NfTkFNRV9OT1RJQ0UiLCAiQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVCIsICJDTEFTU19OQU1FX1RJVExFIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJEaXNtaXNzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkRpc21pc3NOb3RpY2UiLCAiVGl0bGUiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlQXJlYSIsICJhcmVhIiwgImNsYXNzTmFtZSIsICJyb2xlIiwgIndnVXNlckdyb3VwcyIsICJ3Z0dsb2JhbEdyb3VwcyIsICJ3Z1VzZXJMYW5ndWFnZTIiLCAiaW5fZ3JvdXAiLCAiZ3JvdXAiLCAiaW5jbHVkZXMiLCAib25seV9mb3IiLCAidXNlckxhbmd1YWdlIiwgIm1hdGNoQ3JpdGVyaWEiLCAiJG5vdGljZSIsICJfJG5vdGljZSRkYXRhIiwgImNhY2hlIiwgInRlc3RDcml0ZXJpYSIsICJjcml0ZXJpYSIsICJ3aW5kb3ciLCAiZXZhbCIsICJyZXN1bHQiLCAiY3JpdGVyaWFEYXRhIiwgInRyaW0iLCAiVXJpIiwgImRlY29kZSIsICJhdHRyIiwgImhhc0NsYXNzIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiYnJvYWRjYXN0Q2hhbm5lbCIsICJCcm9hZGNhc3RDaGFubmVsIiwgImN1cnJlbnRWZXJzaW9uIiwgImxvY2FsVmVyc2lvbiIsICJzdG9yYWdlIiwgInRpbWVyIiwgIiRhcmVhIiwgIiRjdXJyZW50Tm90aWNlIiwgIiRkaXNtaXNzIiwgImNsb3NlTm90aWNlcyIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJjbGVhclRpbWVvdXQiLCAicmVtb3ZlIiwgInNldCIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAidG9hc3RpZnkiLCAibm9kZSIsICJkdXJhdGlvbiIsICJncmF2aXR5IiwgInBvc2l0aW9uIiwgIm9uQ2xpY2siLCAiaGlkZVRvYXN0IiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgIm5vdGljZVN0eWxlcyIsICJzaG93Tm90aWNlcyIsICIkbW91bnRQb2ludCIsICJpbmRleCIsICJyZW1vdGVOb3RpY2VzIiwgIl9yZW1vdGVOb3RpY2VzJHZlcnNpbyIsICJub3RpY2VzTGVuZ3RoIiwgImxlbmd0aCIsICJuZXh0Tm90aWNlSW5kZXgiLCAiaSIsICJlcSIsICJzdHlsZSIsICJsb2FkZXIiLCAiYWRkU3R5bGVUYWciLCAiZGlzYWJsZWQiLCAibm90aWNlSHRtbCIsICJodG1sIiwgIm5vdGljZVN0eWxlSWQiLCAiY3VycmVudE5vdGljZUh0bWwiLCAic3RvcCIsICJmYWRlT3V0IiwgIl9pIiwgIl9ub3RpY2VTdHlsZXMiLCAibm90aWNlU3R5bGUiLCAiZmFkZUluIiwgImFwcGVuZCIsICJzZXRUaW1lb3V0IiwgIl9yZW1vdGVOb3RpY2VzJCRub3RpYyIsICIkYm9keSIsICJnZXRCb2R5IiwgInJhbmRvbUluZGV4IiwgIk1hdGgiLCAiZmxvb3IiLCAicmFuZG9tIiwgImFkdmFuY2VkU2l0ZU5vdGljZXMiLCAiX2FkdmFuY2VkU2l0ZU5vdGljZXMiXQp9Cg==
