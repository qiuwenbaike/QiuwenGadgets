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
var STORAGE_KEY = "ext.gadget.AdvancedSiteNotices_dismissASN";
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
  wgUserLanguage: wgUserLanguage2
} = mw.config.get();
var in_group = (group) => {
  return !!(wgUserGroups !== null && wgUserGroups !== void 0 && wgUserGroups.includes(group));
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvb3B0aW9ucy5qc29uIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL0FkdmFuY2VkU2l0ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvbG9hZFJlbW90ZU5vdGljZXMudHN4IiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9zaG93Tm90aWNlLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVBcmVhLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL21hdGNoQ3JpdGVyaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImFqYXhQYWdlVGl0bGVcIjogXCJUZW1wbGF0ZTpBZHZhbmNlZFNpdGVOb3RpY2VzL2FqYXhcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjc2l0ZU5vdGljZVwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bG9hZFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy9sb2FkUmVtb3RlTm90aWNlcyc7XG5pbXBvcnQge3Nob3dOb3RpY2VzfSBmcm9tICcuL21vZHVsZXMvc2hvd05vdGljZSc7XG5cbihhc3luYyBmdW5jdGlvbiBhZHZhbmNlZFNpdGVOb3RpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSBhd2FpdCBnZXRCb2R5KCk7XG5cblx0Y29uc3QgJG1vdW50UG9pbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoISRtb3VudFBvaW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZXM6IFJlbW90ZU5vdGljZXMgPSBhd2FpdCBsb2FkUmVtb3RlTm90aWNlcygpO1xuXHRpZiAoIXJlbW90ZU5vdGljZXMuJG5vdGljZXM/Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJhbmRvbUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1vdGVOb3RpY2VzLiRub3RpY2VzLmxlbmd0aCk7XG5cdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCByYW5kb21JbmRleCwgcmVtb3RlTm90aWNlcyk7XG59KSgpO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQWR2YW5jZWRTaXRlTm90aWNlcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5pbnRlcmZhY2UgUmVtb3RlTm90aWNlcyB7XG5cdCRub3RpY2VzPzogSlF1ZXJ5O1xuXHR2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5jb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlQYXJzZVBhcmFtcyAmIHtcblx0dmFyaWFudD86IHN0cmluZztcbn0gPSB7XG5cdGFjdGlvbjogJ3BhcnNlJyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ3RleHQnLFxuXHRwYWdlOiBPUFRJT05TLmFqYXhQYWdlVGl0bGUsXG5cdHVzZWxhbmc6IHdnVXNlckxhbmd1YWdlLFxuXHR2YXJpYW50OiB3Z1VzZXJMYW5ndWFnZSxcbn07XG5cbmNvbnN0IHF1ZXJ5QXBpID0gYXN5bmMgKCk6IFByb21pc2U8UmV0dXJuVHlwZTxtdy5BcGlbJ2dldCddPj4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtZXRlcnMpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tBZHZhbmNlZFNpdGVOb3RpY2VzXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7dHlwZSBSZW1vdGVOb3RpY2VzLCBxdWVyeUFwaX07XG4iLCAiaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXMsIHF1ZXJ5QXBpfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG50eXBlIEFwaVJlc3BvbnNlID0ge1xuXHRwYXJzZToge1xuXHRcdHRleHQ/OiBzdHJpbmc7XG5cdH07XG59O1xuXG5jb25zdCBsb2FkUmVtb3RlTm90aWNlcyA9IGFzeW5jICgpOiBQcm9taXNlPFJlbW90ZU5vdGljZXM+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKCk7XG5cdGNvbnN0IHJlc3BvbnNlUGFyc2UgPSByZXNwb25zZVsncGFyc2UnXSBhcyBBcGlSZXNwb25zZVsncGFyc2UnXTtcblxuXHRpZiAoIXJlc3BvbnNlUGFyc2U/LnRleHQpIHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRjb25zdCByZW1vdGVOb3RpY2UgPSAoPGRpdiBpbm5lckhUTUw9e3Jlc3BvbnNlUGFyc2UudGV4dH0gLz4pLnF1ZXJ5U2VsZWN0b3IoJ3VsLnNpdGVudHMnKTtcblx0aWYgKCFyZW1vdGVOb3RpY2UpIHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRjb25zdCAkcmVtb3RlTm90aWNlczogTm9uTnVsbGFibGU8UmVtb3RlTm90aWNlc1snJG5vdGljZXMnXT4gPSAkKHJlbW90ZU5vdGljZSkgYXMgSlF1ZXJ5O1xuXG5cdGNvbnN0ICRub3RpY2VzOiBKUXVlcnkgPSAkcmVtb3RlTm90aWNlcy5maW5kKCdsaScpO1xuXHRjb25zdCByZW1vdGVOb3RpY2VzVmVyc2lvbjogTm9uTnVsbGFibGU8UmVtb3RlTm90aWNlc1sndmVyc2lvbiddPiA9IChcblx0XHQkcmVtb3RlTm90aWNlcy5kYXRhKCdhc24tdmVyc2lvbicpIGFzIG51bWJlclxuXHQpLnRvU3RyaW5nKCk7XG5cblx0cmV0dXJuIHtcblx0XHQkbm90aWNlcyxcblx0XHR2ZXJzaW9uOiByZW1vdGVOb3RpY2VzVmVyc2lvbixcblx0fTtcbn07XG5cbmV4cG9ydCB7bG9hZFJlbW90ZU5vdGljZXN9O1xuIiwgImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtYWR2YW5jZWRfc2l0ZV9ub3RpY2VzJztcbmNvbnN0IENMQVNTX05BTUVfRElTTUlTUzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX2Rpc21pc3NgO1xuY29uc3QgQ0xBU1NfTkFNRV9OT1RJQ0U6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X19ub3RpY2VgO1xuY29uc3QgQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9OT1RJQ0V9X19jb250ZW50YDtcbmNvbnN0IENMQVNTX05BTUVfVElUTEU6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X190aXRsZWA7XG5cbmNvbnN0IFNUT1JBR0VfS0VZOiBzdHJpbmcgPSAnZXh0LmdhZGdldC5BZHZhbmNlZFNpdGVOb3RpY2VzX2Rpc21pc3NBU04nO1xuXG5leHBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfRElTTUlTUywgQ0xBU1NfTkFNRV9OT1RJQ0UsIENMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQsIENMQVNTX05BTUVfVElUTEUsIFNUT1JBR0VfS0VZfTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUVfRElTTUlTUywgQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVCwgU1RPUkFHRV9LRVl9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5pbXBvcnQge2dlbmVyYXRlQXJlYX0gZnJvbSAnLi91dGlsL2dlbmVyYXRlQXJlYSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge21hdGNoQ3JpdGVyaWF9IGZyb20gJy4vdXRpbC9tYXRjaENyaXRlcmlhJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGJyb2FkY2FzdENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChTVE9SQUdFX0tFWSk7XG5cbmxldCBjdXJyZW50VmVyc2lvbjogc3RyaW5nID0gJzAnO1xuY29uc3QgbG9jYWxWZXJzaW9uID0gbXcuc3RvcmFnZS5nZXQoU1RPUkFHRV9LRVkpIGFzIHN0cmluZyB8IG51bGw7XG5cbmxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG5cbmNvbnN0ICRhcmVhOiBKUXVlcnkgPSBnZW5lcmF0ZUFyZWEoKTtcbmNvbnN0ICRjdXJyZW50Tm90aWNlOiBKUXVlcnkgPSAkYXJlYS5maW5kKGAuJHtDTEFTU19OQU1FX05PVElDRV9DT05URU5UfWApO1xuY29uc3QgJGRpc21pc3M6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYXJlYS5maW5kKGAuJHtDTEFTU19OQU1FX0RJU01JU1N9YCkuZmluZCgnYScpO1xuXG5jb25zdCBjbG9zZU5vdGljZXMgPSAoKTogdm9pZCA9PiB7XG5cdGJyb2FkY2FzdENoYW5uZWwucG9zdE1lc3NhZ2UoJ2Nsb3NlJyk7XG5cdGJyb2FkY2FzdENoYW5uZWwuY2xvc2UoKTtcblx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0JGFyZWEucmVtb3ZlKCk7XG5cdG13LnN0b3JhZ2Uuc2V0KFNUT1JBR0VfS0VZLCBjdXJyZW50VmVyc2lvbiwgNjAgKiA2MCAqIDI0ICogMzAgKiAxMDAwKTtcbn07XG5cbmJyb2FkY2FzdENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNsb3NlTm90aWNlcyk7XG5cbiRkaXNtaXNzLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0Y2xvc2VOb3RpY2VzKCk7XG5cdGNvbnN0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeSh7XG5cdFx0bm9kZTogPHNwYW4gaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdEaXNtaXNzTm90aWNlJyl9IC8+LFxuXHRcdGNsb3NlOiB0cnVlLFxuXHRcdGR1cmF0aW9uOiAxMCAqIDEwMDAsXG5cdFx0Z3Jhdml0eTogJ3RvcCcsXG5cdFx0cG9zaXRpb246ICdyaWdodCcsXG5cdFx0b25DbGljaygpOiB2b2lkIHtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0fSxcblx0fSk7XG59KTtcbnRpcHB5KCRkaXNtaXNzLmdldCgwKSBhcyBIVE1MQW5jaG9yRWxlbWVudCwge1xuXHRhcnJvdzogdHJ1ZSxcblx0Y29udGVudDogJGRpc21pc3MuYXR0cignYXJpYS1sYWJlbCcpIGFzIHN0cmluZyxcblx0cGxhY2VtZW50OiAnYm90dG9tJyxcbn0pO1xuXG5sZXQgJG5vdGljZXM6IEpRdWVyeTtcbmNvbnN0IG5vdGljZVN0eWxlczogSFRNTFN0eWxlRWxlbWVudFtdID0gW107XG5jb25zdCBzaG93Tm90aWNlcyA9ICgkbW91bnRQb2ludDogSlF1ZXJ5LCBpbmRleDogbnVtYmVyLCByZW1vdGVOb3RpY2VzPzogUmVtb3RlTm90aWNlcyk6IHZvaWQgPT4ge1xuXHRjdXJyZW50VmVyc2lvbiA9IHJlbW90ZU5vdGljZXM/LnZlcnNpb24gPz8gY3VycmVudFZlcnNpb247XG5cdGlmIChjdXJyZW50VmVyc2lvbiA9PT0gbG9jYWxWZXJzaW9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHJlbW90ZU5vdGljZXM/LiRub3RpY2VzKSB7XG5cdFx0KHskbm90aWNlc30gPSByZW1vdGVOb3RpY2VzKTtcblx0fVxuXG5cdGNvbnN0IG5vdGljZXNMZW5ndGg6IG51bWJlciA9ICRub3RpY2VzLmxlbmd0aDtcblx0Y29uc3QgbmV4dE5vdGljZUluZGV4OiBudW1iZXIgPSAoaW5kZXggKyAxKSAlIG5vdGljZXNMZW5ndGg7XG5cdGxldCAkbm90aWNlOiBKUXVlcnkgPSAkKCk7XG5cblx0bGV0IGk6IG51bWJlciA9IDA7XG5cdHdoaWxlIChpKysgPCBub3RpY2VzTGVuZ3RoKSB7XG5cdFx0JG5vdGljZSA9ICRub3RpY2VzLmVxKGluZGV4KTtcblx0XHRpZiAoIW1hdGNoQ3JpdGVyaWEoJG5vdGljZSkpIHtcblx0XHRcdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCBuZXh0Tm90aWNlSW5kZXgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCA9IGluZGV4KysgJSBub3RpY2VzTGVuZ3RoO1xuXHR9XG5cblx0aWYgKHR5cGVvZiAkbm90aWNlLmRhdGEoJ2Fzbi1odG1sJykgPT09ICdzdHJpbmcnKSB7XG5cdFx0JG5vdGljZS5kYXRhKCdhc24taHRtbC1yYXcnLCBtdy5VcmkuZGVjb2RlKCRub3RpY2UuZGF0YSgnYXNuLWh0bWwnKSBhcyBzdHJpbmcpKTtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1odG1sJywgbnVsbCk7XG5cdH1cblx0aWYgKHR5cGVvZiAkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZScpID09PSAnc3RyaW5nJykge1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLXN0eWxlLWlkJywgbm90aWNlU3R5bGVzLmxlbmd0aCk7XG5cdFx0Y29uc3Qgc3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgPSBtdy5sb2FkZXIuYWRkU3R5bGVUYWcobXcuVXJpLmRlY29kZSgkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZScpIGFzIHN0cmluZykpO1xuXHRcdHN0eWxlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRub3RpY2VTdHlsZXNbbm90aWNlU3R5bGVzLmxlbmd0aF0gPSBzdHlsZTsgLy8gUmVwbGFjZSBgbm90aWNlU3R5bGVzLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLXN0eWxlJywgbnVsbCk7XG5cdH1cblxuXHRjb25zdCBub3RpY2VIdG1sOiBzdHJpbmcgPSAoJG5vdGljZS5kYXRhKCdhc24taHRtbC1yYXcnKSBhcyBzdHJpbmcpIHx8ICRub3RpY2UuaHRtbCgpO1xuXHRjb25zdCBub3RpY2VTdHlsZUlkOiBudW1iZXIgPSAkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZS1pZCcpIGFzIG51bWJlcjtcblx0Y29uc3QgY3VycmVudE5vdGljZUh0bWw6IHN0cmluZyA9ICRjdXJyZW50Tm90aWNlLmh0bWwoKTtcblx0aWYgKGN1cnJlbnROb3RpY2VIdG1sICYmIGN1cnJlbnROb3RpY2VIdG1sICE9PSBub3RpY2VIdG1sKSB7XG5cdFx0JGN1cnJlbnROb3RpY2Uuc3RvcCgpLmZhZGVPdXQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBzdHlsZSBvZiBub3RpY2VTdHlsZXMpIHtcblx0XHRcdFx0c3R5bGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgbm90aWNlU3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgfCB1bmRlZmluZWQgPSBub3RpY2VTdHlsZXNbbm90aWNlU3R5bGVJZF07XG5cdFx0XHRpZiAobm90aWNlU3R5bGUpIHtcblx0XHRcdFx0bm90aWNlU3R5bGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdCRjdXJyZW50Tm90aWNlLmh0bWwobm90aWNlSHRtbCk7XG5cdFx0XHQvLyBhbmltYXRpb24gdHJ5IC9jYXRjaGVkIHRvIGF2b2lkIFR5cGVFcnJvcjogKEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXXx8W10pLmNvbmNhdCBpcyBub3QgYSBmdW5jdGlvbiBlcnJvciBiZWluZyBzZWVuIGluIHByb2R1Y3Rpb25cblx0XHRcdHRyeSB7XG5cdFx0XHRcdCRjdXJyZW50Tm90aWNlLmZhZGVJbigpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKCFjdXJyZW50Tm90aWNlSHRtbCkge1xuXHRcdCRtb3VudFBvaW50LmFwcGVuZCgkYXJlYSk7XG5cdFx0Y29uc3Qgbm90aWNlU3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgfCB1bmRlZmluZWQgPSBub3RpY2VTdHlsZXNbbm90aWNlU3R5bGVJZF07XG5cdFx0aWYgKG5vdGljZVN0eWxlKSB7XG5cdFx0XHRub3RpY2VTdHlsZS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHQkY3VycmVudE5vdGljZS5odG1sKG5vdGljZUh0bWwpLmZhZGVJbigpO1xuXHR9XG5cblx0dGltZXIgPSBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcblx0XHRzaG93Tm90aWNlcygkbW91bnRQb2ludCwgbmV4dE5vdGljZUluZGV4KTtcblx0fSwgNyAqIDEwMDApO1xufTtcblxuZXhwb3J0IHtzaG93Tm90aWNlc307XG4iLCAiaW1wb3J0IHtcblx0Q0xBU1NfTkFNRSxcblx0Q0xBU1NfTkFNRV9ESVNNSVNTLFxuXHRDTEFTU19OQU1FX05PVElDRSxcblx0Q0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVCxcblx0Q0xBU1NfTkFNRV9USVRMRSxcbn0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVBcmVhID0gKCk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0IGFyZWE6IFJlYWN0LlJlYWN0RWxlbWVudCA9IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsICdub3ByaW50J119PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfVElUTEV9PntnZXRNZXNzYWdlKCdUaXRsZScpfTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfTk9USUNFfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FX05PVElDRV9DT05URU5ULCAnY2VudGVyJ119IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0RJU01JU1N9PlxuXHRcdFx0XHQ8YSByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD17Z2V0TWVzc2FnZSgnRGlzbWlzcycpfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG5cblx0cmV0dXJuICQoYXJlYSkgYXMgSlF1ZXJ5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUFyZWF9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHREaXNtaXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1R1cm4gb2ZmIHRoaXMgbm90aWNlJyxcblx0XHRcdGphOiAnQVNO44KS44Kq44OV44Gr44GZ44KLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXreWFrOWRiicsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zplonlhazlkYonLFxuXHRcdH0pLFxuXHRcdERpc21pc3NOb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgY2hvc2VuIHRvIHR1cm4gb2ZmIEFkdmFuY2VkIFNpdGUgTm90aWNlcyBmb3IgdGhlIG5leHQgMzAgZGF5cy4gPGJyPklmIHRoZSBzaXRlLXdpZGUgYW5ub3VuY2VtZW50IGlzIG5vdCB1cGRhdGVkIHdpdGhpbiB0aGUgbmV4dCAzMCBkYXlzLCBpdCB3aWxsIG5vIGxvbmdlciBiZSBkaXNwbGF5ZWQ7IGhvd2V2ZXIsIGlmIHRoZSBzaXRlLXdpZGUgYW5ub3VuY2VtZW50IGlzIHVwZGF0ZWQsIGl0IHdpbGwgYmUgZGlzcGxheWVkIGFnYWluLicsXG5cdFx0XHRqYTogJ+S7iuW+jDMw5pel6ZaT44CBQVNO44KS44Kq44OV44Gr44GZ44KL44GT44Go44KS6YG45oqe44GX44G+44GX44Gf44CCPGJyPuOCteOCpOODiOWFqOS9k+OBrumAmuefpeOBjOS7iuW+jDMw5pel5Lul5YaF44Gr5pu05paw44GV44KM44Gq44GE5aC05ZCI44CB6KGo56S644GV44KM44Gq44GP44Gq44KK44G+44GZ44CC44Gf44Gg44GX44CB44K144Kk44OI5YWo5L2T44Gu6YCa55+l44GM5pu05paw44GV44KM44KL5aC05ZCI44Gv44CB5YaN44Gz6KGo56S644GV44KM44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3sumAieaLqeWcqOaOpeS4i+adpTMw5pel5YaF5YWz6Zet4oCc6auY57qn56uZ54K56YCa5ZGK4oCd44CCPGJyPuiLpeaOpeS4i+adpTMw5pel5YaF5YWo56uZ5YWs5ZGK5pyq5pyJ5pu05paw77yM5YiZ5LiN5YaN5pi+56S677yb5L2G5piv77yM6Iul5YWo56uZ5YWs5ZGK5YaF5a655pu05paw77yM5YiZ5bCG6YeN5paw5pi+56S644CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3sumBuOaTh+WcqOaOpeS4i+S+hjMw5pel5YWn6Zec6ZaJ44CM6auY57Sa56uZ6bue6YCa5ZGK44CN44CCPGJyPuiLpeaOpeS4i+S+hjMw5pel5YWn5YWo56uZ5YWs5ZGK5pyq5pyJ5pu05paw77yM5YmH5LiN5YaN6aGv56S677yb5L2G5piv77yM6Iul5YWo56uZ5YWs5ZGK5YWn5a655pu05paw77yM5YmH5bCH6YeN5paw6aGv56S644CCJyxcblx0XHR9KSxcblx0XHRUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBbm5vdW5jZW1lbnQnLFxuXHRcdFx0amE6ICfpgJrnn6UnLFxuXHRcdFx0emg6ICflhazlkYonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCB7d2dVc2VyR3JvdXBzLCB3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbmNvbnN0IGluX2dyb3VwID0gKGdyb3VwOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0cmV0dXJuICEhd2dVc2VyR3JvdXBzPy5pbmNsdWRlcyhncm91cCk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5jb25zdCBvbmx5X2ZvciA9ICh1c2VyTGFuZ3VhZ2U6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gdXNlckxhbmd1YWdlID09PSB3Z1VzZXJMYW5ndWFnZTtcbn07XG5cbmNvbnN0IG1hdGNoQ3JpdGVyaWEgPSAoJG5vdGljZTogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IGNhY2hlID0gJG5vdGljZS5kYXRhKCdhc24tY2FjaGUnKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRpZiAoY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZTtcblx0fVxuXG5cdGNvbnN0IHRlc3RDcml0ZXJpYSA9IChjcml0ZXJpYTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0Ly8gRklYTUU6IFRoaXMgc2hvdWxkbid0IGJlIHVzaW5nIGV2YWwgb24gZGF0YSBlbnRlcmVkIGluIHdpa2l0ZXh0LlxuXHRcdC8vIElmIHRoYXQgZGF0YSBpcyBtYWxmb3JtZWQgaXQgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gZS5nLiBjcml0ZXJpYSA9IFwiKGZhbHNlKSlcIlxuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuXHRcdFx0cmV0dXJuIHdpbmRvdy5ldmFsKGNyaXRlcmlhKSBhcyBib29sZWFuO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3QgY3JpdGVyaWFEYXRhOiBzdHJpbmcgPSAoKCRub3RpY2UuZGF0YSgnYXNuLWNyaXRlcmlhJykgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJykudHJpbSgpO1xuXHRpZiAoY3JpdGVyaWFEYXRhKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IHRlc3RDcml0ZXJpYShtdy5VcmkuZGVjb2RlKGNyaXRlcmlhRGF0YSkpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoJG5vdGljZS5hdHRyKCdjbGFzcycpKSB7XG5cdFx0bGV0IGNyaXRlcmlhOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfc3lzb3AnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IGluX2dyb3VwKCdzeXNvcCcpIHx8IGluX2dyb3VwKCdzdGV3YXJkJykgfHwgaW5fZ3JvdXAoJ3FpdXdlbicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV9sb2dnZWQnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IGluX2dyb3VwKCd1c2VyJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X2Fub24nKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9ICFpbl9ncm91cCgndXNlcicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9jbicpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLWNuJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX3NnJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2Zvcignemgtc2cnKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfbXknKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1teScpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9oaycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLWhrJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX21vJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtbW8nKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfdHcnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC10dycpO1xuXHRcdH1cblxuXHRcdGlmIChjcml0ZXJpYSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjcml0ZXJpYSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gY3JpdGVyaWE7XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gdHJ1ZTtcblx0fVxuXG5cdCRub3RpY2UuZGF0YSgnYXNuLWNhY2hlJywgcmVzdWx0KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHttYXRjaENyaXRlcmlhfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFNBQVMsUUFBUTtBQUNkLFVBQUksV0FBVyxDQUFDO0FBRWhCLGVBQVNBLGtCQUFpQixTQUFTO0FBQy9CLFlBQUksUUFBUTtBQUNaLGtCQUFVLE9BQU8sT0FBTztBQUV4QixZQUFJLEtBQUssdUJBQXVCLFVBQVU7QUFFMUMsaUJBQVMsRUFBRSxJQUFJLFNBQVMsRUFBRSxLQUFLLENBQUM7QUFDaEMsaUJBQVMsRUFBRSxFQUFFLEtBQUssSUFBSTtBQUV0QixhQUFLLFFBQVE7QUFDYixhQUFLLE1BQU07QUFDWCxhQUFLLFVBQVU7QUFDZixhQUFLLE1BQU0sSUFBSSxlQUFlO0FBQzlCLGFBQUssSUFBSSxNQUFNLE1BQU07QUFDckIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUVyQixlQUFPLGlCQUFpQixXQUFXLFNBQVMsR0FBRztBQUMz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QUFBLE1BQXFDbkcsa0JBQWtCO0FBQzdELFFBQUksR0FBQTBILHdCQUFDdkIsY0FBY2xGLGNBQUEsUUFBQXlHLDBCQUFBLFVBQWRBLHNCQUF3QnBCLFNBQVE7QUFDcEM7SUFDRDtBQUVBLFVBQU11QixjQUFzQkMsS0FBS0MsTUFBTUQsS0FBS0UsT0FBTyxJQUFJN0IsY0FBY2xGLFNBQVNxRixNQUFNO0FBQ3BGTixnQkFBWUMsYUFBYTRCLGFBQWExQixhQUFhO0VBQ3BELENBQUE7QUFBQSxXQWZnQjhCLHNCQUFBO0FBQUEsV0FBQUMscUJBQUF0SSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFvSTtBQUFBLEdBQUEsRUFlYjsiLAogICJuYW1lcyI6IFsiQnJvYWRjYXN0Q2hhbm5lbCIsICJhamF4UGFnZVRpdGxlIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0OCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgIndnVXNlckxhbmd1YWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJwYWdlIiwgInVzZWxhbmciLCAidmFyaWFudCIsICJxdWVyeUFwaSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImVycm9yIiwgImNvbnNvbGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImxvYWRSZW1vdGVOb3RpY2VzIiwgIl9yZWYyIiwgInJlc3BvbnNlIiwgInJlc3BvbnNlUGFyc2UiLCAidGV4dCIsICJyZW1vdGVOb3RpY2UiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJxdWVyeVNlbGVjdG9yIiwgIiRyZW1vdGVOb3RpY2VzIiwgIiQiLCAiJG5vdGljZXMyIiwgImZpbmQiLCAicmVtb3RlTm90aWNlc1ZlcnNpb24iLCAiZGF0YSIsICJ0b1N0cmluZyIsICIkbm90aWNlcyIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfRElTTUlTUyIsICJDTEFTU19OQU1FX05PVElDRSIsICJDTEFTU19OQU1FX05PVElDRV9DT05URU5UIiwgIkNMQVNTX05BTUVfVElUTEUiLCAiU1RPUkFHRV9LRVkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkRpc21pc3MiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiRGlzbWlzc05vdGljZSIsICJUaXRsZSIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2VuZXJhdGVBcmVhIiwgImFyZWEiLCAiY2xhc3NOYW1lIiwgInJvbGUiLCAid2dVc2VyR3JvdXBzIiwgIndnVXNlckxhbmd1YWdlMiIsICJpbl9ncm91cCIsICJncm91cCIsICJpbmNsdWRlcyIsICJvbmx5X2ZvciIsICJ1c2VyTGFuZ3VhZ2UiLCAibWF0Y2hDcml0ZXJpYSIsICIkbm90aWNlIiwgIl8kbm90aWNlJGRhdGEiLCAiY2FjaGUiLCAidGVzdENyaXRlcmlhIiwgImNyaXRlcmlhIiwgIndpbmRvdyIsICJldmFsIiwgInJlc3VsdCIsICJjcml0ZXJpYURhdGEiLCAidHJpbSIsICJVcmkiLCAiZGVjb2RlIiwgImF0dHIiLCAiaGFzQ2xhc3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJicm9hZGNhc3RDaGFubmVsIiwgIkJyb2FkY2FzdENoYW5uZWwiLCAiY3VycmVudFZlcnNpb24iLCAibG9jYWxWZXJzaW9uIiwgInN0b3JhZ2UiLCAidGltZXIiLCAiJGFyZWEiLCAiJGN1cnJlbnROb3RpY2UiLCAiJGRpc21pc3MiLCAiY2xvc2VOb3RpY2VzIiwgInBvc3RNZXNzYWdlIiwgImNsb3NlIiwgImNsZWFyVGltZW91dCIsICJyZW1vdmUiLCAic2V0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAib24iLCAidG9hc3RpZnlJbnN0YW5jZSIsICJ0b2FzdGlmeSIsICJub2RlIiwgImR1cmF0aW9uIiwgImdyYXZpdHkiLCAicG9zaXRpb24iLCAib25DbGljayIsICJoaWRlVG9hc3QiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAibm90aWNlU3R5bGVzIiwgInNob3dOb3RpY2VzIiwgIiRtb3VudFBvaW50IiwgImluZGV4IiwgInJlbW90ZU5vdGljZXMiLCAiX3JlbW90ZU5vdGljZXMkdmVyc2lvIiwgIm5vdGljZXNMZW5ndGgiLCAibGVuZ3RoIiwgIm5leHROb3RpY2VJbmRleCIsICJpIiwgImVxIiwgInN0eWxlIiwgImxvYWRlciIsICJhZGRTdHlsZVRhZyIsICJkaXNhYmxlZCIsICJub3RpY2VIdG1sIiwgImh0bWwiLCAibm90aWNlU3R5bGVJZCIsICJjdXJyZW50Tm90aWNlSHRtbCIsICJzdG9wIiwgImZhZGVPdXQiLCAiX2kiLCAiX25vdGljZVN0eWxlcyIsICJub3RpY2VTdHlsZSIsICJmYWRlSW4iLCAiYXBwZW5kIiwgInNldFRpbWVvdXQiLCAiX3JlbW90ZU5vdGljZXMkJG5vdGljIiwgIiRib2R5IiwgImdldEJvZHkiLCAicmFuZG9tSW5kZXgiLCAiTWF0aCIsICJmbG9vciIsICJyYW5kb20iLCAiYWR2YW5jZWRTaXRlTm90aWNlcyIsICJfYWR2YW5jZWRTaXRlTm90aWNlcyJdCn0K
