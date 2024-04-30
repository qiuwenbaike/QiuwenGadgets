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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvb3B0aW9ucy5qc29uIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL0FkdmFuY2VkU2l0ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvbG9hZFJlbW90ZU5vdGljZXMudHN4IiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9zaG93Tm90aWNlLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVBcmVhLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL21hdGNoQ3JpdGVyaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImFqYXhQYWdlVGl0bGVcIjogXCJUZW1wbGF0ZTpBZHZhbmNlZFNpdGVOb3RpY2VzL2FqYXhcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjc2l0ZU5vdGljZVwiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0LkFkdmFuY2VkU2l0ZU5vdGljZXNfZGlzbWlzc0FTTlwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bG9hZFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy9sb2FkUmVtb3RlTm90aWNlcyc7XG5pbXBvcnQge3Nob3dOb3RpY2VzfSBmcm9tICcuL21vZHVsZXMvc2hvd05vdGljZSc7XG5cbihhc3luYyBmdW5jdGlvbiBhZHZhbmNlZFNpdGVOb3RpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSBhd2FpdCBnZXRCb2R5KCk7XG5cblx0Y29uc3QgJG1vdW50UG9pbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoISRtb3VudFBvaW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZXM6IFJlbW90ZU5vdGljZXMgPSBhd2FpdCBsb2FkUmVtb3RlTm90aWNlcygpO1xuXHRpZiAoIXJlbW90ZU5vdGljZXMuJG5vdGljZXM/Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJhbmRvbUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1vdGVOb3RpY2VzLiRub3RpY2VzLmxlbmd0aCk7XG5cdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCByYW5kb21JbmRleCwgcmVtb3RlTm90aWNlcyk7XG59KSgpO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQWR2YW5jZWRTaXRlTm90aWNlcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5pbnRlcmZhY2UgUmVtb3RlTm90aWNlcyB7XG5cdCRub3RpY2VzPzogSlF1ZXJ5O1xuXHR2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5jb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0YWN0aW9uOiAncGFyc2UnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAndGV4dCcsXG5cdHBhZ2U6IE9QVElPTlMuYWpheFBhZ2VUaXRsZSxcblx0dXNlbGFuZzogd2dVc2VyTGFuZ3VhZ2UsXG5cdHZhcmlhbnQ6IHdnVXNlckxhbmd1YWdlLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoKTogUHJvbWlzZTxSZXR1cm5UeXBlPG13LkFwaVsnZ2V0J10+PiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0FkdmFuY2VkU2l0ZU5vdGljZXNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIFJlbW90ZU5vdGljZXMsIHF1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlcywgcXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbnR5cGUgQXBpUmVzcG9uc2UgPSB7XG5cdHBhcnNlOiB7XG5cdFx0dGV4dD86IHN0cmluZztcblx0fTtcbn07XG5cbmNvbnN0IGxvYWRSZW1vdGVOb3RpY2VzID0gYXN5bmMgKCk6IFByb21pc2U8UmVtb3RlTm90aWNlcz4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoKTtcblx0Y29uc3QgcmVzcG9uc2VQYXJzZSA9IHJlc3BvbnNlWydwYXJzZSddIGFzIEFwaVJlc3BvbnNlWydwYXJzZSddO1xuXG5cdGlmICghcmVzcG9uc2VQYXJzZT8udGV4dCkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZSA9ICg8ZGl2IGlubmVySFRNTD17cmVzcG9uc2VQYXJzZS50ZXh0fSAvPikucXVlcnlTZWxlY3RvcigndWwuc2l0ZW50cycpO1xuXHRpZiAoIXJlbW90ZU5vdGljZSkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0ICRyZW1vdGVOb3RpY2VzOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyckbm90aWNlcyddPiA9ICQocmVtb3RlTm90aWNlKSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgJG5vdGljZXM6IEpRdWVyeSA9ICRyZW1vdGVOb3RpY2VzLmZpbmQoJ2xpJyk7XG5cdGNvbnN0IHJlbW90ZU5vdGljZXNWZXJzaW9uOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyd2ZXJzaW9uJ10+ID0gKFxuXHRcdCRyZW1vdGVOb3RpY2VzLmRhdGEoJ2Fzbi12ZXJzaW9uJykgYXMgbnVtYmVyXG5cdCkudG9TdHJpbmcoKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRub3RpY2VzLFxuXHRcdHZlcnNpb246IHJlbW90ZU5vdGljZXNWZXJzaW9uLFxuXHR9O1xufTtcblxuZXhwb3J0IHtsb2FkUmVtb3RlTm90aWNlc307XG4iLCAiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXMnO1xuY29uc3QgQ0xBU1NfTkFNRV9ESVNNSVNTOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9fZGlzbWlzc2A7XG5jb25zdCBDTEFTU19OQU1FX05PVElDRTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX25vdGljZWA7XG5jb25zdCBDTEFTU19OQU1FX05PVElDRV9DT05URU5UOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX05PVElDRX1fX2NvbnRlbnRgO1xuY29uc3QgQ0xBU1NfTkFNRV9USVRMRTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX3RpdGxlYDtcblxuZXhwb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RJU01JU1MsIENMQVNTX05BTUVfTk9USUNFLCBDTEFTU19OQU1FX05PVElDRV9DT05URU5ULCBDTEFTU19OQU1FX1RJVExFfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0NMQVNTX05BTUVfRElTTUlTUywgQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlc30gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcmVhfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVBcmVhJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7bWF0Y2hDcml0ZXJpYX0gZnJvbSAnLi91dGlsL21hdGNoQ3JpdGVyaWEnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYnJvYWRjYXN0Q2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKE9QVElPTlMuc3RvcmFnZUtleSk7XG5cbmxldCBjdXJyZW50VmVyc2lvbjogc3RyaW5nID0gJzAnO1xuY29uc3QgbG9jYWxWZXJzaW9uID0gbXcuc3RvcmFnZS5nZXQoT1BUSU9OUy5zdG9yYWdlS2V5KSBhcyBzdHJpbmcgfCBudWxsO1xuXG5sZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuXG5jb25zdCAkYXJlYTogSlF1ZXJ5ID0gZ2VuZXJhdGVBcmVhKCk7XG5jb25zdCAkY3VycmVudE5vdGljZTogSlF1ZXJ5ID0gJGFyZWEuZmluZChgLiR7Q0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVH1gKTtcbmNvbnN0ICRkaXNtaXNzOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJGFyZWEuZmluZChgLiR7Q0xBU1NfTkFNRV9ESVNNSVNTfWApLmZpbmQoJ2EnKTtcblxuY29uc3QgY2xvc2VOb3RpY2VzID0gKCk6IHZvaWQgPT4ge1xuXHRicm9hZGNhc3RDaGFubmVsLnBvc3RNZXNzYWdlKCdjbG9zZScpO1xuXHRicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XG5cdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdCRhcmVhLnJlbW92ZSgpO1xuXHRtdy5zdG9yYWdlLnNldChPUFRJT05TLnN0b3JhZ2VLZXksIGN1cnJlbnRWZXJzaW9uLCA2MCAqIDYwICogMjQgKiAzMCAqIDEwMDApO1xufTtcblxuYnJvYWRjYXN0Q2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgY2xvc2VOb3RpY2VzKTtcblxuJGRpc21pc3Mub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRjbG9zZU5vdGljZXMoKTtcblx0Y29uc3QgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHRub2RlOiA8c3BhbiBpbm5lckhUTUw9e2dldE1lc3NhZ2UoJ0Rpc21pc3NOb3RpY2UnKX0gLz4sXG5cdFx0Y2xvc2U6IHRydWUsXG5cdFx0ZHVyYXRpb246IDEwICogMTAwMCxcblx0XHRncmF2aXR5OiAndG9wJyxcblx0XHRwb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRvbkNsaWNrKCk6IHZvaWQge1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR9LFxuXHR9KTtcbn0pO1xudGlwcHkoJGRpc21pc3MuZ2V0KDApIGFzIEhUTUxBbmNob3JFbGVtZW50LCB7XG5cdGFycm93OiB0cnVlLFxuXHRjb250ZW50OiAkZGlzbWlzcy5hdHRyKCdhcmlhLWxhYmVsJykgYXMgc3RyaW5nLFxuXHRwbGFjZW1lbnQ6ICdib3R0b20nLFxufSk7XG5cbmxldCAkbm90aWNlczogSlF1ZXJ5O1xuY29uc3Qgbm90aWNlU3R5bGVzOiBIVE1MU3R5bGVFbGVtZW50W10gPSBbXTtcbmNvbnN0IHNob3dOb3RpY2VzID0gKCRtb3VudFBvaW50OiBKUXVlcnksIGluZGV4OiBudW1iZXIsIHJlbW90ZU5vdGljZXM/OiBSZW1vdGVOb3RpY2VzKTogdm9pZCA9PiB7XG5cdGN1cnJlbnRWZXJzaW9uID0gcmVtb3RlTm90aWNlcz8udmVyc2lvbiA/PyBjdXJyZW50VmVyc2lvbjtcblx0aWYgKGN1cnJlbnRWZXJzaW9uID09PSBsb2NhbFZlcnNpb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAocmVtb3RlTm90aWNlcz8uJG5vdGljZXMpIHtcblx0XHQoeyRub3RpY2VzfSA9IHJlbW90ZU5vdGljZXMpO1xuXHR9XG5cblx0Y29uc3Qgbm90aWNlc0xlbmd0aDogbnVtYmVyID0gJG5vdGljZXMubGVuZ3RoO1xuXHRjb25zdCBuZXh0Tm90aWNlSW5kZXg6IG51bWJlciA9IChpbmRleCArIDEpICUgbm90aWNlc0xlbmd0aDtcblx0bGV0ICRub3RpY2U6IEpRdWVyeSA9ICQoKTtcblxuXHRsZXQgaTogbnVtYmVyID0gMDtcblx0d2hpbGUgKGkrKyA8IG5vdGljZXNMZW5ndGgpIHtcblx0XHQkbm90aWNlID0gJG5vdGljZXMuZXEoaW5kZXgpO1xuXHRcdGlmICghbWF0Y2hDcml0ZXJpYSgkbm90aWNlKSkge1xuXHRcdFx0c2hvd05vdGljZXMoJG1vdW50UG9pbnQsIG5leHROb3RpY2VJbmRleCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4ID0gaW5kZXgrKyAlIG5vdGljZXNMZW5ndGg7XG5cdH1cblxuXHRpZiAodHlwZW9mICRub3RpY2UuZGF0YSgnYXNuLWh0bWwnKSA9PT0gJ3N0cmluZycpIHtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1odG1sLXJhdycsIG13LlVyaS5kZWNvZGUoJG5vdGljZS5kYXRhKCdhc24taHRtbCcpIGFzIHN0cmluZykpO1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLWh0bWwnLCBudWxsKTtcblx0fVxuXHRpZiAodHlwZW9mICRub3RpY2UuZGF0YSgnYXNuLXN0eWxlJykgPT09ICdzdHJpbmcnKSB7XG5cdFx0JG5vdGljZS5kYXRhKCdhc24tc3R5bGUtaWQnLCBub3RpY2VTdHlsZXMubGVuZ3RoKTtcblx0XHRjb25zdCBzdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IG13LmxvYWRlci5hZGRTdHlsZVRhZyhtdy5VcmkuZGVjb2RlKCRub3RpY2UuZGF0YSgnYXNuLXN0eWxlJykgYXMgc3RyaW5nKSk7XG5cdFx0c3R5bGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdG5vdGljZVN0eWxlc1tub3RpY2VTdHlsZXMubGVuZ3RoXSA9IHN0eWxlOyAvLyBSZXBsYWNlIGBub3RpY2VTdHlsZXMucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0JG5vdGljZS5kYXRhKCdhc24tc3R5bGUnLCBudWxsKTtcblx0fVxuXG5cdGNvbnN0IG5vdGljZUh0bWw6IHN0cmluZyA9ICgkbm90aWNlLmRhdGEoJ2Fzbi1odG1sLXJhdycpIGFzIHN0cmluZykgfHwgJG5vdGljZS5odG1sKCk7XG5cdGNvbnN0IG5vdGljZVN0eWxlSWQ6IG51bWJlciA9ICRub3RpY2UuZGF0YSgnYXNuLXN0eWxlLWlkJykgYXMgbnVtYmVyO1xuXHRjb25zdCBjdXJyZW50Tm90aWNlSHRtbDogc3RyaW5nID0gJGN1cnJlbnROb3RpY2UuaHRtbCgpO1xuXHRpZiAoY3VycmVudE5vdGljZUh0bWwgJiYgY3VycmVudE5vdGljZUh0bWwgIT09IG5vdGljZUh0bWwpIHtcblx0XHQkY3VycmVudE5vdGljZS5zdG9wKCkuZmFkZU91dCgoKTogdm9pZCA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IHN0eWxlIG9mIG5vdGljZVN0eWxlcykge1xuXHRcdFx0XHRzdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBub3RpY2VTdHlsZTogSFRNTFN0eWxlRWxlbWVudCB8IHVuZGVmaW5lZCA9IG5vdGljZVN0eWxlc1tub3RpY2VTdHlsZUlkXTtcblx0XHRcdGlmIChub3RpY2VTdHlsZSkge1xuXHRcdFx0XHRub3RpY2VTdHlsZS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0JGN1cnJlbnROb3RpY2UuaHRtbChub3RpY2VIdG1sKTtcblx0XHRcdC8vIGFuaW1hdGlvbiB0cnkgL2NhdGNoZWQgdG8gYXZvaWQgVHlwZUVycm9yOiAoQW5pbWF0aW9uLnR3ZWVuZXJzW3Byb3BdfHxbXSkuY29uY2F0IGlzIG5vdCBhIGZ1bmN0aW9uIGVycm9yIGJlaW5nIHNlZW4gaW4gcHJvZHVjdGlvblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0JGN1cnJlbnROb3RpY2UuZmFkZUluKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAoIWN1cnJlbnROb3RpY2VIdG1sKSB7XG5cdFx0JG1vdW50UG9pbnQuYXBwZW5kKCRhcmVhKTtcblx0XHRjb25zdCBub3RpY2VTdHlsZTogSFRNTFN0eWxlRWxlbWVudCB8IHVuZGVmaW5lZCA9IG5vdGljZVN0eWxlc1tub3RpY2VTdHlsZUlkXTtcblx0XHRpZiAobm90aWNlU3R5bGUpIHtcblx0XHRcdG5vdGljZVN0eWxlLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdCRjdXJyZW50Tm90aWNlLmh0bWwobm90aWNlSHRtbCkuZmFkZUluKCk7XG5cdH1cblxuXHR0aW1lciA9IHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCBuZXh0Tm90aWNlSW5kZXgpO1xuXHR9LCA3ICogMTAwMCk7XG59O1xuXG5leHBvcnQge3Nob3dOb3RpY2VzfTtcbiIsICJpbXBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0RJU01JU1MsXG5cdENMQVNTX05BTUVfTk9USUNFLFxuXHRDTEFTU19OQU1FX05PVElDRV9DT05URU5ULFxuXHRDTEFTU19OQU1FX1RJVExFLFxufSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZUFyZWEgPSAoKTogSlF1ZXJ5ID0+IHtcblx0Y29uc3QgYXJlYTogUmVhY3QuUmVhY3RFbGVtZW50ID0gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgJ25vcHJpbnQnXX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9USVRMRX0+e2dldE1lc3NhZ2UoJ1RpdGxlJyl9PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9OT1RJQ0V9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQsICdjZW50ZXInXX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfRElTTUlTU30+XG5cdFx0XHRcdDxhIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPXtnZXRNZXNzYWdlKCdEaXNtaXNzJyl9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcblxuXHRyZXR1cm4gJChhcmVhKSBhcyBKUXVlcnk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlQXJlYX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdERpc21pc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVHVybiBvZmYgdGhpcyBub3RpY2UnLFxuXHRcdFx0amE6ICdBU07jgpLjgqrjg5XjgavjgZnjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6Zet5YWs5ZGKJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWieWFrOWRiicsXG5cdFx0fSksXG5cdFx0RGlzbWlzc05vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBjaG9zZW4gdG8gdHVybiBvZmYgQWR2YW5jZWQgU2l0ZSBOb3RpY2VzIGZvciB0aGUgbmV4dCAzMCBkYXlzLiA8YnI+SWYgdGhlIHNpdGUtd2lkZSBhbm5vdW5jZW1lbnQgaXMgbm90IHVwZGF0ZWQgd2l0aGluIHRoZSBuZXh0IDMwIGRheXMsIGl0IHdpbGwgbm8gbG9uZ2VyIGJlIGRpc3BsYXllZDsgaG93ZXZlciwgaWYgdGhlIHNpdGUtd2lkZSBhbm5vdW5jZW1lbnQgaXMgdXBkYXRlZCwgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYWdhaW4uJyxcblx0XHRcdGphOiAn5LuK5b6MMzDml6XplpPjgIFBU07jgpLjgqrjg5XjgavjgZnjgovjgZPjgajjgpLpgbjmip7jgZfjgb7jgZfjgZ/jgII8YnI+44K144Kk44OI5YWo5L2T44Gu6YCa55+l44GM5LuK5b6MMzDml6Xku6XlhoXjgavmm7TmlrDjgZXjgozjgarjgYTloLTlkIjjgIHooajnpLrjgZXjgozjgarjgY/jgarjgorjgb7jgZnjgILjgZ/jgaDjgZfjgIHjgrXjgqTjg4jlhajkvZPjga7pgJrnn6XjgYzmm7TmlrDjgZXjgozjgovloLTlkIjjga/jgIHlho3jgbPooajnpLrjgZXjgozjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey6YCJ5oup5Zyo5o6l5LiL5p2lMzDml6XlhoXlhbPpl63igJzpq5jnuqfnq5nngrnpgJrlkYrigJ3jgII8YnI+6Iul5o6l5LiL5p2lMzDml6XlhoXlhajnq5nlhazlkYrmnKrmnInmm7TmlrDvvIzliJnkuI3lho3mmL7npLrvvJvkvYbmmK/vvIzoi6Xlhajnq5nlhazlkYrlhoXlrrnmm7TmlrDvvIzliJnlsIbph43mlrDmmL7npLrjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey6YG45pOH5Zyo5o6l5LiL5L6GMzDml6Xlhafpl5zplonjgIzpq5jntJrnq5npu57pgJrlkYrjgI3jgII8YnI+6Iul5o6l5LiL5L6GMzDml6Xlhaflhajnq5nlhazlkYrmnKrmnInmm7TmlrDvvIzliYfkuI3lho3poa/npLrvvJvkvYbmmK/vvIzoi6Xlhajnq5nlhazlkYrlhaflrrnmm7TmlrDvvIzliYflsIfph43mlrDpoa/npLrjgIInLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Fubm91bmNlbWVudCcsXG5cdFx0XHRqYTogJ+mAmuefpScsXG5cdFx0XHR6aDogJ+WFrOWRiicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHt3Z1VzZXJHcm91cHMsIHdnR2xvYmFsR3JvdXBzLCB3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbmNvbnN0IGluX2dyb3VwID0gKGdyb3VwOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0cmV0dXJuICEhKHdnVXNlckdyb3Vwcz8uaW5jbHVkZXMoZ3JvdXApIHx8ICh3Z0dsb2JhbEdyb3VwcyBhcyBzdHJpbmdbXSk/LmluY2x1ZGVzKGdyb3VwKSk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5jb25zdCBvbmx5X2ZvciA9ICh1c2VyTGFuZ3VhZ2U6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gdXNlckxhbmd1YWdlID09PSB3Z1VzZXJMYW5ndWFnZTtcbn07XG5cbmNvbnN0IG1hdGNoQ3JpdGVyaWEgPSAoJG5vdGljZTogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IGNhY2hlID0gJG5vdGljZS5kYXRhKCdhc24tY2FjaGUnKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRpZiAoY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZTtcblx0fVxuXG5cdGNvbnN0IHRlc3RDcml0ZXJpYSA9IChjcml0ZXJpYTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0Ly8gRklYTUU6IFRoaXMgc2hvdWxkbid0IGJlIHVzaW5nIGV2YWwgb24gZGF0YSBlbnRlcmVkIGluIHdpa2l0ZXh0LlxuXHRcdC8vIElmIHRoYXQgZGF0YSBpcyBtYWxmb3JtZWQgaXQgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gZS5nLiBjcml0ZXJpYSA9IFwiKGZhbHNlKSlcIlxuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuXHRcdFx0cmV0dXJuIHdpbmRvdy5ldmFsKGNyaXRlcmlhKSBhcyBib29sZWFuO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3QgY3JpdGVyaWFEYXRhOiBzdHJpbmcgPSAoKCRub3RpY2UuZGF0YSgnYXNuLWNyaXRlcmlhJykgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJykudHJpbSgpO1xuXHRpZiAoY3JpdGVyaWFEYXRhKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IHRlc3RDcml0ZXJpYShtdy5VcmkuZGVjb2RlKGNyaXRlcmlhRGF0YSkpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoJG5vdGljZS5hdHRyKCdjbGFzcycpKSB7XG5cdFx0bGV0IGNyaXRlcmlhOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfc3lzb3AnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IGluX2dyb3VwKCdzeXNvcCcpIHx8IGluX2dyb3VwKCdzdGV3YXJkJykgfHwgaW5fZ3JvdXAoJ3FpdXdlbicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV9sb2dnZWQnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IGluX2dyb3VwKCd1c2VyJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X2Fub24nKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9ICFpbl9ncm91cCgndXNlcicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9jbicpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLWNuJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX3NnJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2Zvcignemgtc2cnKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfbXknKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1teScpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9oaycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLWhrJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX21vJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtbW8nKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfdHcnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC10dycpO1xuXHRcdH1cblxuXHRcdGlmIChjcml0ZXJpYSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjcml0ZXJpYSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gY3JpdGVyaWE7XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gdHJ1ZTtcblx0fVxuXG5cdCRub3RpY2UuZGF0YSgnYXNuLWNhY2hlJywgcmVzdWx0KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHttYXRjaENyaXRlcmlhfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFNBQVMsUUFBUTtBQUNkLFVBQUksV0FBVyxDQUFDO0FBRWhCLGVBQVNBLGtCQUFpQixTQUFTO0FBQy9CLFlBQUksUUFBUTtBQUNaLGtCQUFVLE9BQU8sT0FBTztBQUV4QixZQUFJLEtBQUssdUJBQXVCLFVBQVU7QUFFMUMsaUJBQVMsRUFBRSxJQUFJLFNBQVMsRUFBRSxLQUFLLENBQUM7QUFDaEMsaUJBQVMsRUFBRSxFQUFFLEtBQUssSUFBSTtBQUV0QixhQUFLLFFBQVE7QUFDYixhQUFLLE1BQU07QUFDWCxhQUFLLFVBQVU7QUFDZixhQUFLLE1BQU0sSUFBSSxlQUFlO0FBQzlCLGFBQUssSUFBSSxNQUFNLE1BQU07QUFDckIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUVyQixlQUFPLGlCQUFpQixXQUFXLFNBQVMsR0FBRztBQUMzQyxjQUFJLEVBQUUsZ0JBQWdCLE9BQU87QUFBYztBQUMzQyxjQUFJLEVBQUUsWUFBWSxRQUFRLEVBQUUsYUFBYTtBQUFJO0FBQzdDLGNBQUksRUFBRSxJQUFJLFVBQVUsR0FBRyxHQUFHLE1BQU0sTUFBTTtBQUFJO0FBQzFDLGNBQUksT0FBTyxLQUFLLE1BQU0sRUFBRSxRQUFRO0FBQ2hDLGdCQUFNLElBQUksTUFBTSxZQUFZLElBQUk7QUFBQSxRQUNwQyxDQUFDO0FBQUEsTUFDTDtBQUVBLE1BQUFBLGtCQUFpQixZQUFZO0FBQUE7QUFBQSxRQUV6QixJQUFJLE9BQU87QUFDUCxpQkFBTyxLQUFLO0FBQUEsUUFDaEI7QUFBQSxRQUNBLGFBQWEsU0FBUyxTQUFTO0FBQzNCLGNBQUksUUFBUTtBQUNaLGNBQUksS0FBSyxTQUFTO0FBQ2QsZ0JBQUksSUFBSSxJQUFJLE1BQU07QUFDbEIsY0FBRSxPQUFPO0FBQ1Qsa0JBQU07QUFBQSxVQUNWO0FBQ0EsY0FBSSxRQUFRLEtBQUssVUFBVSxPQUFPO0FBR2xDLGNBQUksTUFBTSxLQUFLLE1BQU0sT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sT0FBTyxLQUFLLE9BQU8sQ0FBQztBQUNwRSxpQkFBTyxhQUFhLFFBQVEsS0FBSyxLQUFLO0FBQ3RDLHFCQUFXLFdBQVc7QUFDbEIsbUJBQU8sYUFBYSxXQUFXLEdBQUc7QUFBQSxVQUN0QyxHQUFHLEdBQUc7QUFHTixtQkFBUyxLQUFLLEdBQUcsRUFBRSxRQUFRLFNBQVMsSUFBSTtBQUNwQyxnQkFBSSxPQUFPO0FBQU87QUFDbEIsZUFBRyxJQUFJLE1BQU0sWUFBWSxLQUFLLE1BQU0sS0FBSyxDQUFDO0FBQUEsVUFDOUMsQ0FBQztBQUFBLFFBQ0w7QUFBQSxRQUNBLE9BQU8sV0FBVztBQUNkLGNBQUksS0FBSztBQUFTO0FBQ2xCLGVBQUssVUFBVTtBQUNmLGVBQUssSUFBSSxNQUFNLE1BQU07QUFDckIsZUFBSyxJQUFJLE1BQU0sTUFBTTtBQUVyQixjQUFJLFFBQVEsU0FBUyxLQUFLLEdBQUcsRUFBRSxRQUFRLElBQUk7QUFDM0MsbUJBQVMsS0FBSyxHQUFHLEVBQUUsT0FBTyxPQUFPLENBQUM7QUFBQSxRQUN0QztBQUFBO0FBQUEsUUFHQSxJQUFJLFlBQVk7QUFDWixpQkFBTyxLQUFLLElBQUksTUFBTTtBQUFBLFFBQzFCO0FBQUEsUUFDQSxJQUFJLFVBQVUsT0FBTztBQUNqQixlQUFLLElBQUksTUFBTSxZQUFZO0FBQUEsUUFDL0I7QUFBQSxRQUNBLGtCQUFrQixXQUEwQztBQUN4RCxpQkFBTyxLQUFLLElBQUksTUFBTSxpQkFBaUIsTUFBTSxLQUFLLElBQUksT0FBTyxTQUFTO0FBQUEsUUFDMUU7QUFBQSxRQUNBLHFCQUFxQixXQUEwQztBQUMzRCxpQkFBTyxLQUFLLElBQUksTUFBTSxvQkFBb0IsTUFBTSxLQUFLLElBQUksT0FBTyxTQUFTO0FBQUEsUUFDN0U7QUFBQSxRQUNBLGVBQWUsV0FBb0I7QUFDL0IsaUJBQU8sS0FBSyxJQUFJLE1BQU0sY0FBYyxNQUFNLEtBQUssSUFBSSxPQUFPLFNBQVM7QUFBQSxRQUN2RTtBQUFBLE1BQ0o7QUFFQSxhQUFPLG1CQUFtQixPQUFPLG9CQUFvQkE7QUFBQSxJQUN6RCxHQUFHLElBQUk7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZOLElBQUFDLGdCQUFpQjtBQUNqQixJQUFBQyxxQkFBc0I7QUFDdEIsSUFBQUMsYUFBYztBQUNkLElBQUFDLFVBQVc7O0FDRlosSUFBQUMscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0R0QixJQUFBQyxvQkFBd0JELFFBQUEsaUJBQUE7QUFFeEIsSUFBTUUsT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSx1QkFBQUMsT0FBeUNOLE9BQU8sQ0FBRTs7QUNLdEUsSUFBTTtFQUFDTztBQUFjLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFdkMsSUFBTUMsYUFBNkI7RUFDbENDLFFBQVE7RUFDUkMsUUFBUTtFQUNSQyxlQUFlO0VBQ2ZDLE1BQU07RUFDTkMsTUFBY25CO0VBQ2RvQixTQUFTVjtFQUNUVyxTQUFTWDtBQUNWO0FBRUEsSUFBTVksV0FBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFXLGFBQWdEO0FBQ2hFLFFBQUk7QUFDSCxhQUFBLE1BQWFqQixJQUFJTSxJQUFJQyxVQUFVO0lBQ2hDLFNBQVNXLE9BQU87QUFDZkMsY0FBUUQsTUFBTSxxQ0FBcUNBLEtBQUs7QUFDeEQsYUFBTyxDQUFDO0lBQ1Q7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQVBNSCxZQUFBO0FBQUEsV0FBQUMsS0FBQUksTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQ25CTixJQUFBQyxxQkFBa0JDLFFBQUF6QixRQUFBLGtCQUFBLEdBQUEsQ0FBQTtBQVFsQixJQUFNMEIsb0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBUixrQkFBb0IsYUFBb0M7QUFDN0QsVUFBTVMsV0FBQSxNQUF1RFgsU0FBUztBQUN0RSxVQUFNWSxnQkFBZ0JELFNBQVMsT0FBTztBQUV0QyxRQUFJLEVBQUNDLGtCQUFBLFFBQUFBLGtCQUFBLFVBQUFBLGNBQWVDLE9BQU07QUFDekIsYUFBTyxDQUFDO0lBQ1Q7QUFFQSxVQUFNQyxnQkFBZ0JQLG1DQUFBUSxRQUFBQyxjQUFDLE9BQUE7TUFBSUMsV0FBV0wsY0FBY0M7SUFBQSxDQUFNLEdBQUlLLGNBQWMsWUFBWTtBQUN4RixRQUFJLENBQUNKLGNBQWM7QUFDbEIsYUFBTyxDQUFDO0lBQ1Q7QUFFQSxVQUFNSyxpQkFBeURDLEVBQUVOLFlBQVk7QUFFN0UsVUFBTU8sWUFBbUJGLGVBQWVHLEtBQUssSUFBSTtBQUNqRCxVQUFNQyx1QkFDTEosZUFBZUssS0FBSyxhQUFhLEVBQ2hDQyxTQUFTO0FBRVgsV0FBTztNQUNOQyxVQUFBTDtNQUNBeEMsU0FBUzBDO0lBQ1Y7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQXhCTWQscUJBQUE7QUFBQSxXQUFBQyxNQUFBTCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDVE4sSUFBTXFCLGFBQXFCO0FBQzNCLElBQU1DLHFCQUFBLEdBQUF6QyxPQUFnQ3dDLFlBQVUsV0FBQTtBQUNoRCxJQUFNRSxvQkFBQSxHQUFBMUMsT0FBK0J3QyxZQUFVLFVBQUE7QUFDL0MsSUFBTUcsNEJBQUEsR0FBQTNDLE9BQXVDMEMsbUJBQWlCLFdBQUE7QUFDOUQsSUFBTUUsbUJBQUEsR0FBQTVDLE9BQThCd0MsWUFBVSxTQUFBOztBQ0Y5QyxJQUFBSyxxQkFBa0J4QixRQUFBekIsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDS2xCLElBQUFrRCxxQkFBa0J6QixRQUFBekIsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDUGxCLElBQUFtRCxxQkFBdUJuRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1vRCxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxVQUFBLEdBQVNGLG1CQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsZ0JBQUEsR0FBZU4sbUJBQUFHLFVBQVM7TUFDdkJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQ0M7TUFDRCxXQUNDO0lBQ0YsQ0FBQztJQUNERSxRQUFBLEdBQU9QLG1CQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKRyxJQUFJO0lBQ0wsQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlUixnQkFBZ0I7QUFFckMsSUFBTVMsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURwQkEsSUFBTUMsZUFBZUEsTUFBYztBQUNsQyxRQUFNQyxPQUNMZCxtQ0FBQWxCLFFBQUFDLGNBQUMsT0FBQTtJQUFJZ0MsV0FBVyxDQUFDckIsWUFBWSxTQUFTO0VBQUEsR0FDckNNLG1DQUFBbEIsUUFBQUMsY0FBQyxPQUFBO0lBQUlnQyxXQUFXakI7RUFBQSxHQUFtQmEsV0FBVyxPQUFPLENBQUUsR0FDdkRYLG1DQUFBbEIsUUFBQUMsY0FBQyxPQUFBO0lBQUlnQyxXQUFXbkI7RUFBQSxHQUNmSSxtQ0FBQWxCLFFBQUFDLGNBQUMsT0FBQTtJQUFJZ0MsV0FBVyxDQUFDbEIsMkJBQTJCLFFBQVE7RUFBQSxDQUFHLENBQ3hELEdBQ0FHLG1DQUFBbEIsUUFBQUMsY0FBQyxPQUFBO0lBQUlnQyxXQUFXcEI7RUFBQSxHQUNmSyxtQ0FBQWxCLFFBQUFDLGNBQUMsS0FBQTtJQUFFaUMsTUFBSztJQUFTLGNBQVlMLFdBQVcsU0FBUztFQUFBLENBQUcsQ0FDckQsQ0FDRDtBQUdELFNBQU94QixFQUFFMkIsSUFBSTtBQUNkOztBRXhCQSxJQUFNO0VBQUNHO0VBQWNDO0VBQWdCL0QsZ0JBQUFnRTtBQUFjLElBQUkvRCxHQUFHQyxPQUFPQyxJQUFJO0FBR3JFLElBQU04RCxXQUFZQyxXQUEyQjtBQUM1QyxTQUFPLENBQUMsRUFBRUosaUJBQUEsUUFBQUEsaUJBQUEsVUFBQUEsYUFBY0ssU0FBU0QsS0FBSyxLQUFNSCxtQkFBQSxRQUFBQSxtQkFBQSxVQUFBQSxlQUE2QkksU0FBU0QsS0FBSztBQUN4RjtBQUdBLElBQU1FLFdBQVlDLGtCQUFrQztBQUNuRCxTQUFPQSxpQkFBaUJMO0FBQ3pCO0FBRUEsSUFBTU0sZ0JBQWlCQyxhQUE2QjtBQUFBLE1BQUFDO0FBQ25ELFFBQU1DLFFBQVFGLFFBQVFuQyxLQUFLLFdBQVc7QUFDdEMsTUFBSXFDLFVBQVUsUUFBVztBQUN4QixXQUFPQTtFQUNSO0FBRUEsUUFBTUMsZUFBZ0JDLGNBQThCO0FBR25ELFFBQUk7QUFFSCxhQUFPQyxPQUFPQyxLQUFLRixRQUFRO0lBQzVCLFFBQVE7QUFDUCxhQUFPO0lBQ1I7RUFDRDtBQUVBLE1BQUlHLFNBQWtCO0FBRXRCLFFBQU1DLGlCQUFBUCxnQkFBeUJELFFBQVFuQyxLQUFLLGNBQWMsT0FBQSxRQUFBb0Msa0JBQUEsU0FBQUEsZ0JBQTRCLElBQUlRLEtBQUs7QUFDL0YsTUFBSUQsY0FBYztBQUNqQixRQUFJO0FBQ0hELGVBQVNKLGFBQWF6RSxHQUFHZ0YsSUFBSUMsT0FBT0gsWUFBWSxDQUFDO0lBQ2xELFFBQVE7QUFDUEQsZUFBUztJQUNWO0VBQ0QsV0FBV1AsUUFBUVksS0FBSyxPQUFPLEdBQUc7QUFDakMsUUFBSVI7QUFFSixRQUFJSixRQUFRYSxTQUFTLFlBQVksR0FBRztBQUNuQ1QsbUJBQUFBLFdBQWFWLFNBQVMsT0FBTyxLQUFLQSxTQUFTLFNBQVMsS0FBS0EsU0FBUyxRQUFRO0lBQzNFO0FBQ0EsUUFBSU0sUUFBUWEsU0FBUyxhQUFhLEdBQUc7QUFDcENULG1CQUFBQSxXQUFhVixTQUFTLE1BQU07SUFDN0I7QUFDQSxRQUFJTSxRQUFRYSxTQUFTLFdBQVcsR0FBRztBQUNsQ1QsbUJBQUFBLFdBQWEsQ0FBQ1YsU0FBUyxNQUFNO0lBQzlCO0FBQ0EsUUFBSU0sUUFBUWEsU0FBUyxZQUFZLEdBQUc7QUFDbkNULG1CQUFBQSxXQUFhUCxTQUFTLE9BQU87SUFDOUI7QUFDQSxRQUFJRyxRQUFRYSxTQUFTLFlBQVksR0FBRztBQUNuQ1QsbUJBQUFBLFdBQWFQLFNBQVMsT0FBTztJQUM5QjtBQUNBLFFBQUlHLFFBQVFhLFNBQVMsWUFBWSxHQUFHO0FBQ25DVCxtQkFBQUEsV0FBYVAsU0FBUyxPQUFPO0lBQzlCO0FBQ0EsUUFBSUcsUUFBUWEsU0FBUyxZQUFZLEdBQUc7QUFDbkNULG1CQUFBQSxXQUFhUCxTQUFTLE9BQU87SUFDOUI7QUFDQSxRQUFJRyxRQUFRYSxTQUFTLFlBQVksR0FBRztBQUNuQ1QsbUJBQUFBLFdBQWFQLFNBQVMsT0FBTztJQUM5QjtBQUNBLFFBQUlHLFFBQVFhLFNBQVMsWUFBWSxHQUFHO0FBQ25DVCxtQkFBQUEsV0FBYVAsU0FBUyxPQUFPO0lBQzlCO0FBRUEsUUFBSU8sYUFBYSxRQUFXO0FBQzNCQSxpQkFBVztJQUNaO0FBRUFHLGFBQVNIO0VBQ1YsT0FBTztBQUNORyxhQUFTO0VBQ1Y7QUFFQVAsVUFBUW5DLEtBQUssYUFBYTBDLE1BQU07QUFFaEMsU0FBT0E7QUFDUjs7QUgxRUEsSUFBQU8scUJBQW9CMUYsUUFBQSxrQkFBQTtBQUNwQixJQUFBMkYscUJBQXVCM0YsUUFBQSxxQkFBQTtBQUV2QixJQUFNNEYsbUJBQXFDLElBQUlDLGlCQUF5QmhHLFVBQVU7QUFFbEYsSUFBSWlHLGlCQUF5QjtBQUM3QixJQUFNQyxlQUFlekYsR0FBRzBGLFFBQVF4RixJQUFZWCxVQUFVO0FBRXRELElBQUlvRztBQUVKLElBQU1DLFFBQWdCbkMsYUFBYTtBQUNuQyxJQUFNb0MsaUJBQXlCRCxNQUFNM0QsS0FBQSxJQUFBbkMsT0FBUzJDLHlCQUF5QixDQUFFO0FBQ3pFLElBQU1xRCxXQUFzQ0YsTUFBTTNELEtBQUEsSUFBQW5DLE9BQVN5QyxrQkFBa0IsQ0FBRSxFQUFFTixLQUFLLEdBQUc7QUFFekYsSUFBTThELGVBQWVBLE1BQVk7QUFDaENULG1CQUFpQlUsWUFBWSxPQUFPO0FBQ3BDVixtQkFBaUJXLE1BQU07QUFDdkJDLGVBQWFQLEtBQUs7QUFDbEJDLFFBQU1PLE9BQU87QUFDYm5HLEtBQUcwRixRQUFRVSxJQUFZN0csWUFBWWlHLGdCQUFnQixLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUk7QUFDNUU7QUFFQUYsaUJBQWlCZSxpQkFBaUIsV0FBV04sWUFBWTtBQUV6REQsU0FBU1EsR0FBRyxTQUFTLE1BQVk7QUFDaENQLGVBQWE7QUFDYixRQUFNUSxvQkFBQSxHQUFxQ2xCLG1CQUFBbUIsVUFBUztJQUNuREMsTUFBTTlELG1DQUFBakIsUUFBQUMsY0FBQyxRQUFBO01BQUtDLFdBQVcyQixXQUFXLGVBQWU7SUFBQSxDQUFHO0lBQ3BEMEMsT0FBTztJQUNQUyxVQUFVLEtBQUs7SUFDZkMsU0FBUztJQUNUQyxVQUFVO0lBQ1ZDLFVBQWdCO0FBQ2ZOLHVCQUFpQk8sVUFBVTtJQUM1QjtFQUNELENBQUM7QUFDRixDQUFDO0NBQUEsR0FDRDFCLG1CQUFBMkIsT0FBTWpCLFNBQVM1RixJQUFJLENBQUMsR0FBd0I7RUFDM0M4RyxPQUFPO0VBQ1BDLFNBQVNuQixTQUFTWixLQUFLLFlBQVk7RUFDbkNnQyxXQUFXO0FBQ1osQ0FBQztBQUVELElBQUk3RTtBQUNKLElBQU04RSxlQUFtQyxDQUFBO0FBQ3pDLElBQU1DLGNBQWNBLENBQUNDLGFBQXFCQyxPQUFlQyxrQkFBd0M7QUFBQSxNQUFBQztBQUNoR2hDLG9CQUFBZ0Msd0JBQWlCRCxrQkFBQSxRQUFBQSxrQkFBQSxTQUFBLFNBQUFBLGNBQWUvSCxhQUFBLFFBQUFnSSwwQkFBQSxTQUFBQSx3QkFBV2hDO0FBQzNDLE1BQUlBLG1CQUFtQkMsY0FBYztBQUNwQztFQUNEO0FBRUEsTUFBSThCLGtCQUFBLFFBQUFBLGtCQUFBLFVBQUFBLGNBQWVsRixVQUFVO0FBQzVCLEtBQUM7TUFBQ0E7SUFBUSxJQUFJa0Y7RUFDZjtBQUVBLFFBQU1FLGdCQUF3QnBGLFNBQVNxRjtBQUN2QyxRQUFNQyxtQkFBMkJMLFFBQVEsS0FBS0c7QUFDOUMsTUFBSW5ELFVBQWtCdkMsRUFBRTtBQUV4QixNQUFJNkYsSUFBWTtBQUNoQixTQUFPQSxNQUFNSCxlQUFlO0FBQzNCbkQsY0FBVWpDLFNBQVN3RixHQUFHUCxLQUFLO0FBQzNCLFFBQUksQ0FBQ2pELGNBQWNDLE9BQU8sR0FBRztBQUM1QjhDLGtCQUFZQyxhQUFhTSxlQUFlO0FBQ3hDO0lBQ0Q7QUFDQUwsWUFBUUEsVUFBVUc7RUFDbkI7QUFFQSxNQUFJLE9BQU9uRCxRQUFRbkMsS0FBSyxVQUFVLE1BQU0sVUFBVTtBQUNqRG1DLFlBQVFuQyxLQUFLLGdCQUFnQm5DLEdBQUdnRixJQUFJQyxPQUFPWCxRQUFRbkMsS0FBSyxVQUFVLENBQVcsQ0FBQztBQUM5RW1DLFlBQVFuQyxLQUFLLFlBQVksSUFBSTtFQUM5QjtBQUNBLE1BQUksT0FBT21DLFFBQVFuQyxLQUFLLFdBQVcsTUFBTSxVQUFVO0FBQ2xEbUMsWUFBUW5DLEtBQUssZ0JBQWdCZ0YsYUFBYU8sTUFBTTtBQUNoRCxVQUFNSSxRQUEwQjlILEdBQUcrSCxPQUFPQyxZQUFZaEksR0FBR2dGLElBQUlDLE9BQU9YLFFBQVFuQyxLQUFLLFdBQVcsQ0FBVyxDQUFDO0FBQ3hHMkYsVUFBTUcsV0FBVztBQUNqQmQsaUJBQWFBLGFBQWFPLE1BQU0sSUFBSUk7QUFDcEN4RCxZQUFRbkMsS0FBSyxhQUFhLElBQUk7RUFDL0I7QUFFQSxRQUFNK0YsYUFBc0I1RCxRQUFRbkMsS0FBSyxjQUFjLEtBQWdCbUMsUUFBUTZELEtBQUs7QUFDcEYsUUFBTUMsZ0JBQXdCOUQsUUFBUW5DLEtBQUssY0FBYztBQUN6RCxRQUFNa0csb0JBQTRCeEMsZUFBZXNDLEtBQUs7QUFDdEQsTUFBSUUscUJBQXFCQSxzQkFBc0JILFlBQVk7QUFDMURyQyxtQkFBZXlDLEtBQUssRUFBRUMsUUFBUSxNQUFZO0FBQ3pDLGVBQUFDLEtBQUEsR0FBQUMsZ0JBQW9CdEIsY0FBQXFCLEtBQUFDLGNBQUFmLFFBQUFjLE1BQWM7QUFBbEMsY0FBV1YsUUFBQVcsY0FBQUQsRUFBQTtBQUNWVixjQUFNRyxXQUFXO01BQ2xCO0FBQ0EsWUFBTVMsY0FBNEN2QixhQUFhaUIsYUFBYTtBQUM1RSxVQUFJTSxhQUFhO0FBQ2hCQSxvQkFBWVQsV0FBVztNQUN4QjtBQUNBcEMscUJBQWVzQyxLQUFLRCxVQUFVO0FBRTlCLFVBQUk7QUFDSHJDLHVCQUFlOEMsT0FBTztNQUN2QixRQUFRO01BQUM7SUFDVixDQUFDO0VBQ0YsV0FBVyxDQUFDTixtQkFBbUI7QUFDOUJoQixnQkFBWXVCLE9BQU9oRCxLQUFLO0FBQ3hCLFVBQU04QyxjQUE0Q3ZCLGFBQWFpQixhQUFhO0FBQzVFLFFBQUlNLGFBQWE7QUFDaEJBLGtCQUFZVCxXQUFXO0lBQ3hCO0FBQ0FwQyxtQkFBZXNDLEtBQUtELFVBQVUsRUFBRVMsT0FBTztFQUN4QztBQUVBaEQsVUFBUWtELFdBQVcsTUFBWTtBQUM5QnpCLGdCQUFZQyxhQUFhTSxlQUFlO0VBQ3pDLEdBQUcsSUFBSSxHQUFJO0FBQ1o7OzsrQ0xoSEMsYUFBb0Q7QUFBQSxRQUFBbUI7QUFDcEQsVUFBTUMsUUFBQSxPQUFpQyxHQUFNdEosbUJBQUF1SixTQUFRO0FBRXJELFVBQU0zQixjQUFzQjBCLE1BQU05RyxLQUFhM0Msa0JBQWtCO0FBQ2pFLFFBQUksQ0FBQytILFlBQVlLLFFBQVE7QUFDeEI7SUFDRDtBQUVBLFVBQU1ILGdCQUFBLE1BQXFDbkcsa0JBQWtCO0FBQzdELFFBQUksR0FBQTBILHdCQUFDdkIsY0FBY2xGLGNBQUEsUUFBQXlHLDBCQUFBLFVBQWRBLHNCQUF3QnBCLFNBQVE7QUFDcEM7SUFDRDtBQUVBLFVBQU11QixjQUFzQkMsS0FBS0MsTUFBTUQsS0FBS0UsT0FBTyxJQUFJN0IsY0FBY2xGLFNBQVNxRixNQUFNO0FBQ3BGTixnQkFBWUMsYUFBYTRCLGFBQWExQixhQUFhO0VBQ3BELENBQUE7QUFBQSxXQWZnQjhCLHNCQUFBO0FBQUEsV0FBQUMscUJBQUF0SSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFvSTtBQUFBLEdBQUEsRUFlYjsiLAogICJuYW1lcyI6IFsiQnJvYWRjYXN0Q2hhbm5lbCIsICJhamF4UGFnZVRpdGxlIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJzdG9yYWdlS2V5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ4IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAid2dVc2VyTGFuZ3VhZ2UiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBhZ2UiLCAidXNlbGFuZyIsICJ2YXJpYW50IiwgInF1ZXJ5QXBpIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAibG9hZFJlbW90ZU5vdGljZXMiLCAiX3JlZjIiLCAicmVzcG9uc2UiLCAicmVzcG9uc2VQYXJzZSIsICJ0ZXh0IiwgInJlbW90ZU5vdGljZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgInF1ZXJ5U2VsZWN0b3IiLCAiJHJlbW90ZU5vdGljZXMiLCAiJCIsICIkbm90aWNlczIiLCAiZmluZCIsICJyZW1vdGVOb3RpY2VzVmVyc2lvbiIsICJkYXRhIiwgInRvU3RyaW5nIiwgIiRub3RpY2VzIiwgIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9ESVNNSVNTIiwgIkNMQVNTX05BTUVfTk9USUNFIiwgIkNMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQiLCAiQ0xBU1NfTkFNRV9USVRMRSIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAiRGlzbWlzcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJEaXNtaXNzTm90aWNlIiwgIlRpdGxlIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZUFyZWEiLCAiYXJlYSIsICJjbGFzc05hbWUiLCAicm9sZSIsICJ3Z1VzZXJHcm91cHMiLCAid2dHbG9iYWxHcm91cHMiLCAid2dVc2VyTGFuZ3VhZ2UyIiwgImluX2dyb3VwIiwgImdyb3VwIiwgImluY2x1ZGVzIiwgIm9ubHlfZm9yIiwgInVzZXJMYW5ndWFnZSIsICJtYXRjaENyaXRlcmlhIiwgIiRub3RpY2UiLCAiXyRub3RpY2UkZGF0YSIsICJjYWNoZSIsICJ0ZXN0Q3JpdGVyaWEiLCAiY3JpdGVyaWEiLCAid2luZG93IiwgImV2YWwiLCAicmVzdWx0IiwgImNyaXRlcmlhRGF0YSIsICJ0cmltIiwgIlVyaSIsICJkZWNvZGUiLCAiYXR0ciIsICJoYXNDbGFzcyIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgImJyb2FkY2FzdENoYW5uZWwiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJjdXJyZW50VmVyc2lvbiIsICJsb2NhbFZlcnNpb24iLCAic3RvcmFnZSIsICJ0aW1lciIsICIkYXJlYSIsICIkY3VycmVudE5vdGljZSIsICIkZGlzbWlzcyIsICJjbG9zZU5vdGljZXMiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAiY2xlYXJUaW1lb3V0IiwgInJlbW92ZSIsICJzZXQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJvbiIsICJ0b2FzdGlmeUluc3RhbmNlIiwgInRvYXN0aWZ5IiwgIm5vZGUiLCAiZHVyYXRpb24iLCAiZ3Jhdml0eSIsICJwb3NpdGlvbiIsICJvbkNsaWNrIiwgImhpZGVUb2FzdCIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJub3RpY2VTdHlsZXMiLCAic2hvd05vdGljZXMiLCAiJG1vdW50UG9pbnQiLCAiaW5kZXgiLCAicmVtb3RlTm90aWNlcyIsICJfcmVtb3RlTm90aWNlcyR2ZXJzaW8iLCAibm90aWNlc0xlbmd0aCIsICJsZW5ndGgiLCAibmV4dE5vdGljZUluZGV4IiwgImkiLCAiZXEiLCAic3R5bGUiLCAibG9hZGVyIiwgImFkZFN0eWxlVGFnIiwgImRpc2FibGVkIiwgIm5vdGljZUh0bWwiLCAiaHRtbCIsICJub3RpY2VTdHlsZUlkIiwgImN1cnJlbnROb3RpY2VIdG1sIiwgInN0b3AiLCAiZmFkZU91dCIsICJfaSIsICJfbm90aWNlU3R5bGVzIiwgIm5vdGljZVN0eWxlIiwgImZhZGVJbiIsICJhcHBlbmQiLCAic2V0VGltZW91dCIsICJfcmVtb3RlTm90aWNlcyQkbm90aWMiLCAiJGJvZHkiLCAiZ2V0Qm9keSIsICJyYW5kb21JbmRleCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJhZHZhbmNlZFNpdGVOb3RpY2VzIiwgIl9hZHZhbmNlZFNpdGVOb3RpY2VzIl0KfQo=
