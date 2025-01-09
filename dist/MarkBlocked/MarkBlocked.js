/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-markblocked.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MarkBlocked}
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

// dist/MarkBlocked/MarkBlocked.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
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
//! src/MarkBlocked/options.json
var contributionsPageAlias = "Special:Contributions";
var userNamespaceNumbers = [2, 3];
var version = "2.0";
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/MarkBlocked/modules/util/generateUserNamespaceTitles.ts
var generateUserNamespaceTitles = () => {
  const {
    wgNamespaceIds
  } = mw.config.get();
  const userNamespaceTitles2 = [];
  for (var _i = 0, _Object$entries = Object.entries(wgNamespaceIds); _i < _Object$entries.length; _i++) {
    const [namespace, id] = _Object$entries[_i];
    if (!userNamespaceNumbers.includes(id)) {
      continue;
    }
    userNamespaceTitles2[userNamespaceTitles2.length] = "".concat(mw.util.escapeRegExp(namespace.replace(/_/g, " ")), ":");
  }
  return userNamespaceTitles2;
};
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var userNamespaceTitles = generateUserNamespaceTitles();
var userTitleRegex = new RegExp("^(".concat(userNamespaceTitles.join("|"), "|").concat(contributionsPageAlias, "\\/)+([^\\/#]+)$"), "i");
var {
  wgArticlePath,
  wgScript
} = mw.config.get();
var articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "([^#]+)"));
var scriptRegex = new RegExp("^".concat(wgScript, "\\?title=([^#&]+)"));
var generateUserLinks = ($content) => {
  const userLinks = {};
  var _iterator = _createForOfIteratorHelper($content.find("a")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _user, _userLinks$_user;
      const element = _step.value;
      const $element = $(element);
      if ($element.hasClass("mw-changeslist-date") || $element.hasClass("ext-discussiontools-init-timestamplink") || $element.parent("span").hasClass("mw-history-undo") || $element.parent("span").hasClass("mw-rollback-link")) {
        continue;
      }
      const href = $element.attr("href");
      if (!href) {
        continue;
      }
      if (mw.util.isIPv6Address(href.replace(/^(?:https?:\/\/)/i, ""))) {
        continue;
      }
      try {
        if (new import_ext_gadget.MwUri(href).host !== location.host) {
          continue;
        }
      } catch {
        try {
          if (new import_ext_gadget.MwUri(location.href + href).host !== location.host) {
            continue;
          }
        } catch {
          continue;
        }
      }
      let pageTitle;
      if (articleRegex.test(href)) {
        const match = articleRegex.exec(href);
        pageTitle = match[1];
      } else if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        pageTitle = match[1];
      } else {
        continue;
      }
      pageTitle = decodeURIComponent(pageTitle).replace(/_/g, " ");
      const userExecArray = userTitleRegex.exec(pageTitle);
      if (!userExecArray || typeof userExecArray[2] !== "string") {
        continue;
      }
      let user = userExecArray[2].slice(0, 1).toUpperCase() + userExecArray[2].slice(1);
      if (mw.util.isIPv6Address(user)) {
        user = user.toUpperCase();
      }
      (_userLinks$_user = userLinks[_user = user]) !== null && _userLinks$_user !== void 0 ? _userLinks$_user : userLinks[_user] = [];
      userLinks[user][userLinks[user].length] = $element;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return userLinks;
};
//! src/MarkBlocked/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    infinity: (0, import_ext_gadget2.localize)({
      en: "infinity",
      "zh-hans": "无限期",
      "zh-hant": "無限期"
    }),
    Blocked: (0, import_ext_gadget2.localize)({
      en: "; $5blocked ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5封鎖$1：$3（$4前）"
    }),
    "Globally Blocked": (0, import_ext_gadget2.localize)({
      en: "; $5blocked globally ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5全域封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5全域封鎖$1：$3（$4前）"
    }),
    Locked: (0, import_ext_gadget2.localize)({
      en: "; Locked",
      "zh-hans": "；已全域锁定",
      "zh-hant": "；已全域鎖定"
    }),
    partial: (0, import_ext_gadget2.localize)({
      en: "partial ",
      zh: "部分"
    }),
    d: (0, import_ext_gadget2.localize)({
      en: "day",
      zh: "天"
    }),
    s: (0, import_ext_gadget2.localize)({
      en: "second",
      zh: "秒"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkBlocked/modules/util/parseTime.ts
var addZero = (v) => {
  return v <= 9 ? "0".concat(v) : "".concat(v);
};
var inHours = (ms) => {
  let mm = Math.floor(ms / 6e4);
  if (!mm) {
    return "".concat(Math.floor(ms / 1e3)).concat(getMessage("s"));
  }
  let hh = Math.floor(mm / 60);
  mm %= 60;
  const dd = Math.floor(hh / 24);
  hh %= 24;
  if (dd) {
    return "".concat(dd + (dd < 10 ? ".".concat(addZero(hh)) : "")).concat(getMessage("d"));
  }
  return "".concat(hh, ":").concat(addZero(mm));
};
var parseTS = (string) => {
  const m = string.replace(/\D/g, "").match(/(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/);
  return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6])).getTime();
};
//! src/MarkBlocked/modules/MarkBlocked.module.less
var userlinkIndef = "MarkBlocked-module__userlinkIndef_xtAfOG";
var userlinkLocked = "MarkBlocked-module__userlinkLocked_xtAfOG";
var userlinkPartial = "MarkBlocked-module__userlinkPartial_xtAfOG";
var userlinkTemp = "MarkBlocked-module__userlinkTemp_xtAfOG";
//! src/MarkBlocked/modules/util/markLinks.ts
var markLinks = ({
  response,
  userLinks,
  bkip
}) => {
  var _response$query, _response$query2, _response$query3;
  if ((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.blocks) {
    var _iterator2 = _createForOfIteratorHelper(response["query"].blocks), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const block = _step2.value;
        const isPartialBlcok = typeof block.restrictions === "string" && block.restrictions !== "";
        let className = userlinkPartial;
        let blockTime = "";
        if (block.expiry.startsWith("in")) {
          if (!isPartialBlcok) {
            className = userlinkIndef;
          }
          blockTime = getMessage("infinity");
        } else {
          if (!isPartialBlcok) {
            className = userlinkTemp;
          }
          blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
        }
        let tip = getMessage("Blocked").replace("$1", blockTime).replace("$2", block.by).replace("$3", block.reason).replace("$4", inHours(Date.now() - parseTS(block.timestamp)));
        tip = isPartialBlcok ? tip.replace("$5", getMessage("partial")) : tip.replace("$5", "");
        const $links = userLinks[bkip !== null && bkip !== void 0 ? bkip : block.user];
        if (!$links) {
          continue;
        }
        var _iterator3 = _createForOfIteratorHelper($links), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const $link = _step3.value;
            $link.addClass(className).attr("title", $link.attr("title") + tip);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if ((_response$query2 = response["query"]) !== null && _response$query2 !== void 0 && _response$query2.globalblocks) {
    var _iterator4 = _createForOfIteratorHelper(response["query"].globalblocks), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const block = _step4.value;
        let className = userlinkPartial;
        let blockTime = "";
        if (block.expiry.startsWith("in")) {
          className = userlinkIndef;
          blockTime = getMessage("infinity");
        } else {
          className = userlinkTemp;
          blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
        }
        let tip = getMessage("Globally Blocked").replace("$1", blockTime).replace("$2", block.by).replace("$3", block.reason).replace("$4", inHours(Date.now() - parseTS(block.timestamp)));
        tip = tip.replace("$5", "");
        const $links = userLinks[bkip !== null && bkip !== void 0 ? bkip : block.target];
        if (!$links) {
          continue;
        }
        var _iterator5 = _createForOfIteratorHelper($links), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const $link = _step5.value;
            $link.addClass(className).attr("title", $link.attr("title") + tip);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  if ((_response$query3 = response["query"]) !== null && _response$query3 !== void 0 && _response$query3.globaluserinfo) {
    var _response$query$globa, _response$query$globa2;
    const user = (_response$query$globa = response["query"].globaluserinfo) === null || _response$query$globa === void 0 ? void 0 : _response$query$globa.name;
    const locked = (_response$query$globa2 = response["query"].globaluserinfo) === null || _response$query$globa2 === void 0 ? void 0 : _response$query$globa2.locked;
    if (!locked || !user) {
      return;
    }
    const tip = getMessage("Locked");
    const $links = userLinks[bkip !== null && bkip !== void 0 ? bkip : user];
    if (!$links) {
      return;
    }
    const className = userlinkLocked;
    var _iterator6 = _createForOfIteratorHelper($links), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        const $link = _step6.value;
        $link.addClass(className).attr("title", $link.attr("title") + tip);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
};
//! src/MarkBlocked/modules/util/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("MarkBlocked/".concat(version));
//! src/MarkBlocked/modules/util/queryGlobalUserInfo.ts
var queryGlobalUserInfo = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (guiuser) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: ["globaluserinfo"],
      guiuser,
      smaxage: 600,
      maxage: 600
    };
    return yield api.get(params);
  });
  return function queryGlobalUserInfo2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/MarkBlocked/modules/util/queryIPBlocks.ts
var queryIPBlocks = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (bkip) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: ["blocks", "globalblocks"],
      bkip,
      bklimit: 100,
      bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
      bgip: bkip,
      bglimit: 100,
      bgprop: ["by", "expiry", "reason", "timestamp", "target"],
      smaxage: 600,
      maxage: 600
    };
    return yield api.get(params);
  });
  return function queryIPBlocks2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/MarkBlocked/modules/util/queryUserBlocks.ts
var queryUserBlocks = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (bkusers) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: ["blocks", "globalblocks"],
      bkusers,
      bklimit: 100,
      bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
      bglimit: 100,
      bgtargets: bkusers,
      bgprop: ["by", "expiry", "reason", "timestamp", "target"],
      smaxage: 600,
      maxage: 600
    };
    return yield api.get(params);
  });
  return function queryUserBlocks2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/MarkBlocked/modules/markBlockedUser.ts
var markBlockedUser = ($content) => {
  const userLinks = generateUserLinks($content);
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  for (var _i2 = 0, _users = users; _i2 < _users.length; _i2++) {
    const guiuser = _users[_i2];
    if (mw.util.isIPv4Address(guiuser) || mw.util.isIPv6Address(guiuser)) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      try {
        const response = yield queryGlobalUserInfo(guiuser);
        markLinks({
          response,
          userLinks
        });
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    });
  }
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      try {
        const response = yield queryUserBlocks(bkusers);
        markLinks({
          response,
          userLinks
        });
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    });
    var _iterator7 = _createForOfIteratorHelper(bkusers), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        let bkip = _step7.value;
        if (!mw.util.isIPv4Address(bkip) && !mw.util.isIPv6Address(bkip)) {
          continue;
        }
        if (mw.util.isIPv6Address(bkip)) {
          bkip = bkip.toUpperCase();
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          try {
            const response = yield queryIPBlocks(bkip);
            markLinks({
              response,
              userLinks,
              bkip
            });
          } catch (error) {
            console.error("[MarkBlocked] Ajax error:", error);
          }
        });
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }
  void _asyncToGenerator(function* () {
    for (var _i3 = 0, _promises = promises; _i3 < _promises.length; _i3++) {
      const promise = _promises[_i3];
      try {
        yield promise();
      } catch {
      }
    }
  })();
};
//! src/MarkBlocked/modules/addHook.ts
var {
  wgAction,
  wgNamespaceNumber
} = mw.config.get();
var addHook = () => {
  let isInit = false;
  mw.hook("wikipage.content").add(function markBlocked($content) {
    if (isInit) {
      return;
    }
    isInit = true;
    if (wgAction === "view" && wgNamespaceNumber === 0) {
      $content = $content.find(".diff-title");
    }
    $content = $content.add("#ca-nstab-user");
    markBlockedUser($content);
  });
};
//! src/MarkBlocked/MarkBlocked.ts
if (!["edit", "submit"].includes(mw.config.get("wgAction"))) {
  addHook();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2dlbmVyYXRlVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9wYXJzZVRpbWUudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9xdWVyeUdsb2JhbFVzZXJJbmZvLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcXVlcnlJUEJsb2Nrcy50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3F1ZXJ5VXNlckJsb2Nrcy50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9tYXJrQmxvY2tlZFVzZXIudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvYWRkSG9vay50cyIsICJzcmMvTWFya0Jsb2NrZWQvTWFya0Jsb2NrZWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb250cmlidXRpb25zUGFnZUFsaWFzXCI6IFwiU3BlY2lhbDpDb250cmlidXRpb25zXCIsXG5cdFwidXNlck5hbWVzcGFjZU51bWJlcnNcIjogWzIsIDNdLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TXdVcml9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc30gZnJvbSAnLi9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMnO1xuXG4vLyBHZXQgYWxsIGFsaWFzZXMgZm9yIHVzZXI6ICYgdXNlcl90YWxrOlxuY29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMoKTtcbi8vIFJlZ0V4cCBmb3IgYWxsIHRpdGxlcyB0aGF0IGFyZSAgVXNlcjp8IFVzZXJfdGFsazogfCBTcGVjaWFsOkNvbnRyaWJ1dGlvbnMvIChmb3IgdXNlcnNjcmlwdHMpXG5jb25zdCB1c2VyVGl0bGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChcblx0YF4oJHt1c2VyTmFtZXNwYWNlVGl0bGVzLmpvaW4oJ3wnKX18JHtPUFRJT05TLmNvbnRyaWJ1dGlvbnNQYWdlQWxpYXN9XFxcXC8pKyhbXlxcXFwvI10rKSRgLFxuXHQnaSdcbik7XG5cbi8vIFJlZ0V4cCBmb3IgbGlua3Ncbi8vIGFydGljbGVSZWdleCBhbHNvIG1hdGNoZXMgZXh0ZXJuYWwgbGlua3MgaW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgbm9waW5nIHRlbXBsYXRlXG5jb25zdCB7d2dBcnRpY2xlUGF0aCwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KFteI10rKWApO1xuY29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3dnU2NyaXB0fVxcXFw/dGl0bGU9KFteIyZdKylgKTtcblxuY29uc3QgZ2VuZXJhdGVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0ge307XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJ2EnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QtZGF0ZScpIHx8XG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnZXh0LWRpc2N1c3Npb250b29scy1pbml0LXRpbWVzdGFtcGxpbmsnKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LWhpc3RvcnktdW5kbycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctcm9sbGJhY2stbGluaycpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhocmVmLnJlcGxhY2UoL14oPzpodHRwcz86XFwvXFwvKS9pLCAnJykpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdC8vIE1heWJlIGFic29sdXRlIFVSTFxuXHRcdFx0aWYgKG5ldyBNd1VyaShocmVmKS5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gTWF5YmUgcmVsYXRpdmUgVVJMXG5cdFx0XHRcdGlmIChuZXcgTXdVcmkobG9jYXRpb24uaHJlZiArIGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBwYWdlVGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHBhZ2VUaXRsZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWdlVGl0bGUpLnJlcGxhY2UoL18vZywgJyAnKTtcblxuXHRcdGNvbnN0IHVzZXJFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSB1c2VyVGl0bGVSZWdleC5leGVjKHBhZ2VUaXRsZSk7XG5cdFx0aWYgKCF1c2VyRXhlY0FycmF5IHx8IHR5cGVvZiB1c2VyRXhlY0FycmF5WzJdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IHVzZXI6IHN0cmluZyA9IHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMSk7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyh1c2VyKSkge1xuXHRcdFx0dXNlciA9IHVzZXIudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cblx0XHR1c2VyTGlua3NbdXNlcl0gPz89IFtdO1xuXG5cdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pW1xuXHRcdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pLmxlbmd0aFxuXHRcdF0gPSAkZWxlbWVudDsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRyZXR1cm4gdXNlckxpbmtzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMgPSAoKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VJZHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gW107XG5cblx0Zm9yIChjb25zdCBbbmFtZXNwYWNlLCBpZF0gb2YgT2JqZWN0LmVudHJpZXMod2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0aWYgKCFPUFRJT05TLnVzZXJOYW1lc3BhY2VOdW1iZXJzLmluY2x1ZGVzKGlkKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlck5hbWVzcGFjZVRpdGxlc1t1c2VyTmFtZXNwYWNlVGl0bGVzLmxlbmd0aF0gPSBgJHttdy51dGlsLmVzY2FwZVJlZ0V4cChuYW1lc3BhY2UucmVwbGFjZSgvXy9nLCAnICcpKX06YDsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRyZXR1cm4gdXNlck5hbWVzcGFjZVRpdGxlcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aW5maW5pdHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnaW5maW5pdHknLFxuXHRcdFx0J3poLWhhbnMnOiAn5peg6ZmQ5pyfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eEoemZkOacnycsXG5cdFx0fSksXG5cdFx0QmxvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdCdHbG9iYWxseSBCbG9ja2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCBnbG9iYWxseSAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15YWo5Z+f5bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlhajln5/lsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdExvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7IExvY2tlZCcsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvlt7Llhajln5/plIHlrponLFxuXHRcdFx0J3poLWhhbnQnOiAn77yb5bey5YWo5Z+f6Y6W5a6aJyxcblx0XHR9KSxcblx0XHRwYXJ0aWFsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3BhcnRpYWwgJyxcblx0XHRcdHpoOiAn6YOo5YiGJyxcblx0XHR9KSxcblx0XHRkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RheScsXG5cdFx0XHR6aDogJ+WkqScsXG5cdFx0fSksXG5cdFx0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdzZWNvbmQnLFxuXHRcdFx0emg6ICfnp5InLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBhZGRaZXJvID0gKHY6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdHJldHVybiB2IDw9IDkgPyBgMCR7dn1gIDogYCR7dn1gO1xufTtcblxuY29uc3QgaW5Ib3VycyA9IChtczogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0bGV0IG1tOiBudW1iZXIgPSBNYXRoLmZsb29yKG1zIC8gNmU0KTtcblx0aWYgKCFtbSkge1xuXHRcdHJldHVybiBgJHtNYXRoLmZsb29yKG1zIC8gMWUzKX0ke2dldE1lc3NhZ2UoJ3MnKX1gO1xuXHR9XG5cblx0bGV0IGhoOiBudW1iZXIgPSBNYXRoLmZsb29yKG1tIC8gNjApO1xuXHRtbSAlPSA2MDtcblxuXHRjb25zdCBkZDogbnVtYmVyID0gTWF0aC5mbG9vcihoaCAvIDI0KTtcblx0aGggJT0gMjQ7XG5cblx0aWYgKGRkKSB7XG5cdFx0cmV0dXJuIGAke2RkICsgKGRkIDwgMTAgPyBgLiR7YWRkWmVybyhoaCl9YCA6ICcnKX0ke2dldE1lc3NhZ2UoJ2QnKX1gO1xuXHR9XG5cblx0cmV0dXJuIGAke2hofToke2FkZFplcm8obW0pfWA7XG59O1xuXG4vLyAyMDA4MTIyNjIyMDYwNSBvciAyMDA4LTAxLTI2VDA2OjM0OjE5WiAtPiBudW1iZXJcbmNvbnN0IHBhcnNlVFMgPSAoc3RyaW5nOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRjb25zdCBtOiBSZWdFeHBNYXRjaEFycmF5ID0gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1xcRC9nLCAnJylcblx0XHQubWF0Y2goLyhcXGRcXGRcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKS8pIGFzIFJlZ0V4cE1hdGNoQXJyYXk7XG5cblx0cmV0dXJuIG5ldyBEYXRlKFxuXHRcdERhdGUuVVRDKFxuXHRcdFx0KyhtWzFdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bMl0gYXMgc3RyaW5nKSAtIDEsXG5cdFx0XHQrKG1bM10gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs0XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzVdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNl0gYXMgc3RyaW5nKVxuXHRcdClcblx0KS5nZXRUaW1lKCk7XG59O1xuXG5leHBvcnQge2luSG91cnMsIHBhcnNlVFN9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rSW5kZWYgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtJbmRlZl94dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0xvY2tlZCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua0xvY2tlZF94dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1BhcnRpYWwgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtQYXJ0aWFsX3h0QWZPR1wiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rVGVtcCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua1RlbXBfeHRBZk9HXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJ1c2VybGlua0luZGVmXCI6IHVzZXJsaW5rSW5kZWYsXG4gIFwidXNlcmxpbmtMb2NrZWRcIjogdXNlcmxpbmtMb2NrZWQsXG4gIFwidXNlcmxpbmtQYXJ0aWFsXCI6IHVzZXJsaW5rUGFydGlhbCxcbiAgXCJ1c2VybGlua1RlbXBcIjogdXNlcmxpbmtUZW1wXG59O1xuICAgICAgIiwgImltcG9ydCB7aW5Ib3VycywgcGFyc2VUU30gZnJvbSAnLi9wYXJzZVRpbWUnO1xuaW1wb3J0IHt1c2VybGlua0luZGVmLCB1c2VybGlua0xvY2tlZCwgdXNlcmxpbmtQYXJ0aWFsLCB1c2VybGlua1RlbXB9IGZyb20gJy4uL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcbmltcG9ydCB0eXBlIHtRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzQW5kTG9ja3NSZXNwb25zZX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuLy8gQ2FsbGJhY2s6IHJlY2VpdmUgZGF0YSBhbmQgbWFyayBsaW5rc1xuY29uc3QgbWFya0xpbmtzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcblx0YmtpcCxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NBbmRMb2Nrc1Jlc3BvbnNlO1xuXHR1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPjtcblx0YmtpcD86IHN0cmluZztcbn0pOiB2b2lkID0+IHtcblx0Ly8gTG9jYWwgYmxvY2tzXG5cdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdGNvbnN0IGlzUGFydGlhbEJsY29rOiBib29sZWFuID0gdHlwZW9mIGJsb2NrLnJlc3RyaWN0aW9ucyA9PT0gJ3N0cmluZycgJiYgYmxvY2sucmVzdHJpY3Rpb25zICE9PSAnJzsgLy8gUGFydGlhbCBibG9ja1xuXG5cdFx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSB1c2VybGlua1BhcnRpYWwgYXMgc3RyaW5nO1xuXHRcdFx0bGV0IGJsb2NrVGltZTogc3RyaW5nID0gJyc7XG5cdFx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdFx0aWYgKCFpc1BhcnRpYWxCbGNvaykge1xuXHRcdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rSW5kZWYgYXMgc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrVGltZSA9IGdldE1lc3NhZ2UoJ2luZmluaXR5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtUZW1wIGFzIHN0cmluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0Jsb2NrZWQnKVxuXHRcdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIGJsb2NrLmJ5KVxuXHRcdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdFx0dGlwID0gaXNQYXJ0aWFsQmxjb2sgPyB0aXAucmVwbGFjZSgnJDUnLCBnZXRNZXNzYWdlKCdwYXJ0aWFsJykpIDogdGlwLnJlcGxhY2UoJyQ1JywgJycpO1xuXG5cdFx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2JraXAgPz8gYmxvY2sudXNlcl07XG5cdFx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHQkbGluay5hZGRDbGFzcyhjbGFzc05hbWUpLmF0dHIoJ3RpdGxlJywgJGxpbmsuYXR0cigndGl0bGUnKSArIHRpcCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2xvYmFsIGJsb2Nrc1xuXHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSB1c2VybGlua1BhcnRpYWwgYXMgc3RyaW5nO1xuXHRcdFx0bGV0IGJsb2NrVGltZTogc3RyaW5nID0gJyc7XG5cdFx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHRcdGJsb2NrVGltZSA9IGdldE1lc3NhZ2UoJ2luZmluaXR5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua1RlbXAgYXMgc3RyaW5nO1xuXHRcdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0dsb2JhbGx5IEJsb2NrZWQnKVxuXHRcdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIGJsb2NrLmJ5KVxuXHRcdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdFx0dGlwID0gdGlwLnJlcGxhY2UoJyQ1JywgJycpO1xuXG5cdFx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2JraXAgPz8gYmxvY2sudGFyZ2V0XTtcblx0XHRcdGlmICghJGxpbmtzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBHbG9iYWwgbG9ja3Ncblx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWx1c2VyaW5mbykge1xuXHRcdGNvbnN0IHVzZXIgPSByZXNwb25zZVsncXVlcnknXS5nbG9iYWx1c2VyaW5mbz8ubmFtZTtcblx0XHRjb25zdCBsb2NrZWQgPSByZXNwb25zZVsncXVlcnknXS5nbG9iYWx1c2VyaW5mbz8ubG9ja2VkO1xuXG5cdFx0aWYgKCFsb2NrZWQgfHwgIXVzZXIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0xvY2tlZCcpO1xuXG5cdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tia2lwID8/IHVzZXJdO1xuXHRcdGlmICghJGxpbmtzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgY2xhc3NOYW1lID0gdXNlcmxpbmtMb2NrZWQgYXMgc3RyaW5nO1xuXG5cdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHttYXJrTGlua3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya0Jsb2NrZWQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeUdsb2JhbFVzZXJJbmZvID0gYXN5bmMgKGd1aXVzZXI6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZSA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdG1ldGE6IFsnZ2xvYmFsdXNlcmluZm8nXSxcblx0XHRndWl1c2VyLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtxdWVyeUdsb2JhbFVzZXJJbmZvfTtcbiIsICJpbXBvcnQge0FwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeUlQQmxvY2tzID0gYXN5bmMgKGJraXA6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5QmxvY2tzUGFyYW1zICYgQXBpUXVlcnlHbG9iYWxCbG9ja3NQYXJhbXNSZWRlZmluZWQgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiBbJ2Jsb2NrcycsICdnbG9iYWxibG9ja3MnXSxcblx0XHRia2lwLFxuXHRcdGJrbGltaXQ6IDEwMCxcblx0XHRia3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICdyZXN0cmljdGlvbnMnLCAndGltZXN0YW1wJywgJ3VzZXInXSxcblx0XHRiZ2lwOiBia2lwLFxuXHRcdGJnbGltaXQ6IDEwMCxcblx0XHRiZ3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICd0aW1lc3RhbXAnLCAndGFyZ2V0J10sXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5leHBvcnQge3F1ZXJ5SVBCbG9ja3N9O1xuIiwgImltcG9ydCB7QXBpUXVlcnlHbG9iYWxCbG9ja3NQYXJhbXNSZWRlZmluZWR9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5VXNlckJsb2NrcyA9IGFzeW5jIChia3VzZXJzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5QmxvY2tzUGFyYW1zICYgQXBpUXVlcnlHbG9iYWxCbG9ja3NQYXJhbXNSZWRlZmluZWQgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiBbJ2Jsb2NrcycsICdnbG9iYWxibG9ja3MnXSxcblx0XHRia3VzZXJzLFxuXHRcdGJrbGltaXQ6IDEwMCxcblx0XHRia3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICdyZXN0cmljdGlvbnMnLCAndGltZXN0YW1wJywgJ3VzZXInXSxcblx0XHRiZ2xpbWl0OiAxMDAsXG5cdFx0Ymd0YXJnZXRzOiBia3VzZXJzLFxuXHRcdGJncHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3RpbWVzdGFtcCcsICd0YXJnZXQnXSxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7cXVlcnlVc2VyQmxvY2tzfTtcbiIsICJpbXBvcnQgdHlwZSB7UXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc0FuZExvY2tzUmVzcG9uc2V9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVXNlckxpbmtzJztcbmltcG9ydCB7bWFya0xpbmtzfSBmcm9tICcuL3V0aWwvbWFya0xpbmtzJztcbmltcG9ydCB7cXVlcnlHbG9iYWxVc2VySW5mb30gZnJvbSAnLi91dGlsL3F1ZXJ5R2xvYmFsVXNlckluZm8nO1xuaW1wb3J0IHtxdWVyeUlQQmxvY2tzfSBmcm9tICcuL3V0aWwvcXVlcnlJUEJsb2Nrcyc7XG5pbXBvcnQge3F1ZXJ5VXNlckJsb2Nrc30gZnJvbSAnLi91dGlsL3F1ZXJ5VXNlckJsb2Nrcyc7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlciA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdC8vIEdsb2JhbCBMb2NrIHF1ZWlyZXNcblx0Ly8gTW92ZSBHbG9iYWwgTG9jayBxdWVyaWVzIGJlZm9yZSBibG9jayBxdXJpZXMsXG5cdC8vIHNpbmNlIHRoZXkgdXNlIEFycmF5I3NwbGljZSB0byBjcmVhdGUgYnVsayBxdWVyaWVzLFxuXHQvLyBhbmQgaXRlbXMgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGFycmF5IFwidXNlcnNcIi5cblx0Zm9yIChjb25zdCBndWl1c2VyIG9mIHVzZXJzKSB7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyhndWl1c2VyKSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3MoZ3VpdXNlcikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBxdWVyeUdsb2JhbFVzZXJJbmZvKGd1aXVzZXIpKSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzQW5kTG9ja3NSZXNwb25zZTtcblx0XHRcdFx0bWFya0xpbmtzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBMb2NhbCBhbmQgR2xvYmFsIExvY2sgcXVlaXJlc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5VXNlckJsb2Nrcyhia3VzZXJzKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc0FuZExvY2tzUmVzcG9uc2U7XG5cdFx0XHRcdG1hcmtMaW5rcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Zm9yIChsZXQgYmtpcCBvZiBia3VzZXJzKSB7XG5cdFx0XHRpZiAoIW13LnV0aWwuaXNJUHY0QWRkcmVzcyhia2lwKSAmJiAhbXcudXRpbC5pc0lQdjZBZGRyZXNzKGJraXApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGJraXApKSB7XG5cdFx0XHRcdGJraXAgPSBia2lwLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgcXVlcnlJUEJsb2Nrcyhia2lwKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc0FuZExvY2tzUmVzcG9uc2U7XG5cdFx0XHRcdFx0bWFya0xpbmtzKHtyZXNwb25zZSwgdXNlckxpbmtzLCBia2lwfSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpO1xufTtcblxuZXhwb3J0IHttYXJrQmxvY2tlZFVzZXJ9O1xuIiwgImltcG9ydCB7bWFya0Jsb2NrZWRVc2VyfSBmcm9tICcuL21hcmtCbG9ja2VkVXNlcic7XG5cbmNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBhZGRIb29rID0gKCk6IHZvaWQgPT4ge1xuXHRsZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBtYXJrQmxvY2tlZCgkY29udGVudCk6IHZvaWQge1xuXHRcdGlmIChpc0luaXQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aXNJbml0ID0gdHJ1ZTtcblxuXHRcdC8vIE9uIHRoZSBmaXJzdCBjYWxsIGFmdGVyIGluaXRpYWwgcGFnZSBsb2FkLCBjb250YWluZXIgaXMgbXcudXRpbC4kY29udGVudFxuXHRcdC8vIFVzZWQgdG8gbGltaXQgbWFpbnNwYWNlIGFjdGl2aXR5IHRvIGp1c3QgdGhlIGRpZmYgZGVmaW5pdGlvbnNcblx0XHRpZiAod2dBY3Rpb24gPT09ICd2aWV3JyAmJiB3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdFx0JGNvbnRlbnQgPSAkY29udGVudC5maW5kKCcuZGlmZi10aXRsZScpO1xuXHRcdH1cblx0XHQvLyBPbiBwYWdlIGxvYWQsIGFsc28gdXBkYXRlIHRoZSBuYW1lc3BhY2UgdGFiXG5cdFx0JGNvbnRlbnQgPSAkY29udGVudC5hZGQoJyNjYS1uc3RhYi11c2VyJyk7XG5cblx0XHRtYXJrQmxvY2tlZFVzZXIoJGNvbnRlbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkSG9va307XG4iLCAiaW1wb3J0IHthZGRIb29rfSBmcm9tICcuL21vZHVsZXMvYWRkSG9vayc7XG5cbmlmICghWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykpKSB7XG5cdGFkZEhvb2soKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHlCQUEwQjtBQUMxQixJQUFBQyx1QkFBd0IsQ0FBQyxHQUFHLENBQUM7QUFDN0IsSUFBQUMsVUFBVzs7QUNGWixJQUFBQyxvQkFBb0JDLFFBQUEsaUJBQUE7O0FDQ3BCLElBQU1DLDhCQUE4QkEsTUFBZ0I7QUFDbkQsUUFBTTtJQUFDQztFQUFjLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFdkMsUUFBTUMsdUJBQWdDLENBQUE7QUFFdEMsV0FBQUMsS0FBQSxHQUFBQyxrQkFBOEJDLE9BQU9DLFFBQVFSLGNBQWMs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QUFZO0FBQzNCLE1BQUlDLFNBQWtCO0FBRXRCckwsS0FBR3NMLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsWUFBWS9KLFVBQWdCO0FBQ3BFLFFBQUk0SixRQUFRO0FBQ1g7SUFDRDtBQUNBQSxhQUFTO0FBSVQsUUFBSUgsYUFBYSxVQUFVQyxzQkFBc0IsR0FBRztBQUNuRDFKLGlCQUFXQSxTQUFTSSxLQUFLLGFBQWE7SUFDdkM7QUFFQUosZUFBV0EsU0FBUzhKLElBQUksZ0JBQWdCO0FBRXhDckIsb0JBQWdCekksUUFBUTtFQUN6QixDQUFDO0FBQ0Y7O0FDckJBLElBQUksQ0FBQyxDQUFDLFFBQVEsUUFBUSxFQUFFZCxTQUFTWCxHQUFHQyxPQUFPQyxJQUFJLFVBQVUsQ0FBQyxHQUFHO0FBQzVEa0wsVUFBUTtBQUNUOyIsCiAgIm5hbWVzIjogWyJjb250cmlidXRpb25zUGFnZUFsaWFzIiwgInVzZXJOYW1lc3BhY2VOdW1iZXJzIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMiLCAid2dOYW1lc3BhY2VJZHMiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzMiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgIm5hbWVzcGFjZSIsICJpZCIsICJpbmNsdWRlcyIsICJjb25jYXQiLCAidXRpbCIsICJlc2NhcGVSZWdFeHAiLCAicmVwbGFjZSIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzIiwgInVzZXJUaXRsZVJlZ2V4IiwgIlJlZ0V4cCIsICJqb2luIiwgIndnQXJ0aWNsZVBhdGgiLCAid2dTY3JpcHQiLCAiYXJ0aWNsZVJlZ2V4IiwgInNjcmlwdFJlZ2V4IiwgImdlbmVyYXRlVXNlckxpbmtzIiwgIiRjb250ZW50IiwgInVzZXJMaW5rcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJfdXNlciIsICJfdXNlckxpbmtzJF91c2VyIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJGVsZW1lbnQiLCAiJCIsICJoYXNDbGFzcyIsICJwYXJlbnQiLCAiaHJlZiIsICJhdHRyIiwgImlzSVB2NkFkZHJlc3MiLCAiTXdVcmkiLCAiaG9zdCIsICJsb2NhdGlvbiIsICJwYWdlVGl0bGUiLCAidGVzdCIsICJtYXRjaCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VyRXhlY0FycmF5IiwgInVzZXIiLCAic2xpY2UiLCAidG9VcHBlckNhc2UiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImluZmluaXR5IiwgImxvY2FsaXplIiwgImVuIiwgIkJsb2NrZWQiLCAiTG9ja2VkIiwgInBhcnRpYWwiLCAiemgiLCAiZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkWmVybyIsICJ2IiwgImluSG91cnMiLCAibXMiLCAibW0iLCAiTWF0aCIsICJmbG9vciIsICJoaCIsICJkZCIsICJwYXJzZVRTIiwgInN0cmluZyIsICJtIiwgIkRhdGUiLCAiVVRDIiwgImdldFRpbWUiLCAidXNlcmxpbmtJbmRlZiIsICJ1c2VybGlua0xvY2tlZCIsICJ1c2VybGlua1BhcnRpYWwiLCAidXNlcmxpbmtUZW1wIiwgIm1hcmtMaW5rcyIsICJyZXNwb25zZSIsICJia2lwIiwgIl9yZXNwb25zZSRxdWVyeSIsICJfcmVzcG9uc2UkcXVlcnkyIiwgIl9yZXNwb25zZSRxdWVyeTMiLCAiYmxvY2tzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImJsb2NrIiwgImlzUGFydGlhbEJsY29rIiwgInJlc3RyaWN0aW9ucyIsICJjbGFzc05hbWUiLCAiYmxvY2tUaW1lIiwgImV4cGlyeSIsICJzdGFydHNXaXRoIiwgInRpbWVzdGFtcCIsICJ0aXAiLCAiYnkiLCAicmVhc29uIiwgIm5vdyIsICIkbGlua3MiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiJGxpbmsiLCAiYWRkQ2xhc3MiLCAiZ2xvYmFsYmxvY2tzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInRhcmdldCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJnbG9iYWx1c2VyaW5mbyIsICJfcmVzcG9uc2UkcXVlcnkkZ2xvYmEiLCAiX3Jlc3BvbnNlJHF1ZXJ5JGdsb2JhMiIsICJuYW1lIiwgImxvY2tlZCIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJxdWVyeUdsb2JhbFVzZXJJbmZvIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZ3VpdXNlciIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgIm1ldGEiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1ZXJ5SVBCbG9ja3MiLCAiX3JlZjIiLCAibGlzdCIsICJia2xpbWl0IiwgImJrcHJvcCIsICJiZ2lwIiwgImJnbGltaXQiLCAiYmdwcm9wIiwgIl94MiIsICJxdWVyeVVzZXJCbG9ja3MiLCAiX3JlZjMiLCAiYmt1c2VycyIsICJiZ3RhcmdldHMiLCAiX3gzIiwgIm1hcmtCbG9ja2VkVXNlciIsICJ1c2VycyIsICJrZXlzIiwgInByb21pc2VzIiwgIl9pMiIsICJfdXNlcnMiLCAiaXNJUHY0QWRkcmVzcyIsICJlcnJvciIsICJjb25zb2xlIiwgImkiLCAic3BsaWNlIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIl9pMyIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJhZGRIb29rIiwgImlzSW5pdCIsICJob29rIiwgImFkZCIsICJtYXJrQmxvY2tlZCJdCn0K
