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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2dlbmVyYXRlVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9wYXJzZVRpbWUudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9xdWVyeUdsb2JhbFVzZXJJbmZvLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcXVlcnlJUEJsb2Nrcy50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3F1ZXJ5VXNlckJsb2Nrcy50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9tYXJrQmxvY2tlZFVzZXIudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvYWRkSG9vay50cyIsICJzcmMvTWFya0Jsb2NrZWQvTWFya0Jsb2NrZWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb250cmlidXRpb25zUGFnZUFsaWFzXCI6IFwiU3BlY2lhbDpDb250cmlidXRpb25zXCIsXG5cdFwidXNlck5hbWVzcGFjZU51bWJlcnNcIjogWzIsIDNdLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TXdVcml9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc30gZnJvbSAnLi9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMnO1xuXG4vLyBHZXQgYWxsIGFsaWFzZXMgZm9yIHVzZXI6ICYgdXNlcl90YWxrOlxuY29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMoKTtcbi8vIFJlZ0V4cCBmb3IgYWxsIHRpdGxlcyB0aGF0IGFyZSAgVXNlcjp8IFVzZXJfdGFsazogfCBTcGVjaWFsOkNvbnRyaWJ1dGlvbnMvIChmb3IgdXNlcnNjcmlwdHMpXG5jb25zdCB1c2VyVGl0bGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChcblx0YF4oJHt1c2VyTmFtZXNwYWNlVGl0bGVzLmpvaW4oJ3wnKX18JHtPUFRJT05TLmNvbnRyaWJ1dGlvbnNQYWdlQWxpYXN9XFxcXC8pKyhbXlxcXFwvI10rKSRgLFxuXHQnaSdcbik7XG5cbi8vIFJlZ0V4cCBmb3IgbGlua3Ncbi8vIGFydGljbGVSZWdleCBhbHNvIG1hdGNoZXMgZXh0ZXJuYWwgbGlua3MgaW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgbm9waW5nIHRlbXBsYXRlXG5jb25zdCB7d2dBcnRpY2xlUGF0aCwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KFteI10rKWApO1xuY29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3dnU2NyaXB0fVxcXFw/dGl0bGU9KFteIyZdKylgKTtcblxuY29uc3QgZ2VuZXJhdGVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0ge307XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJ2EnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QtZGF0ZScpIHx8XG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnZXh0LWRpc2N1c3Npb250b29scy1pbml0LXRpbWVzdGFtcGxpbmsnKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LWhpc3RvcnktdW5kbycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctcm9sbGJhY2stbGluaycpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhocmVmLnJlcGxhY2UoL14oPzpodHRwcz86XFwvXFwvKS9pLCAnJykpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdC8vIE1heWJlIGFic29sdXRlIFVSTFxuXHRcdFx0aWYgKG5ldyBNd1VyaShocmVmKS5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gTWF5YmUgcmVsYXRpdmUgVVJMXG5cdFx0XHRcdGlmIChuZXcgTXdVcmkobG9jYXRpb24uaHJlZiArIGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBwYWdlVGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHBhZ2VUaXRsZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWdlVGl0bGUpLnJlcGxhY2UoL18vZywgJyAnKTtcblxuXHRcdGNvbnN0IHVzZXJFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSB1c2VyVGl0bGVSZWdleC5leGVjKHBhZ2VUaXRsZSk7XG5cdFx0aWYgKCF1c2VyRXhlY0FycmF5IHx8IHR5cGVvZiB1c2VyRXhlY0FycmF5WzJdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IHVzZXI6IHN0cmluZyA9IHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMSk7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyh1c2VyKSkge1xuXHRcdFx0dXNlciA9IHVzZXIudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cblx0XHR1c2VyTGlua3NbdXNlcl0gPz89IFtdO1xuXG5cdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pW1xuXHRcdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pLmxlbmd0aFxuXHRcdF0gPSAkZWxlbWVudDsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdHJldHVybiB1c2VyTGlua3M7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlckxpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lc3BhY2UsIGlkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0XHRpZiAoIU9QVElPTlMudXNlck5hbWVzcGFjZU51bWJlcnMuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR1c2VyTmFtZXNwYWNlVGl0bGVzW3VzZXJOYW1lc3BhY2VUaXRsZXMubGVuZ3RoXSA9IGAke213LnV0aWwuZXNjYXBlUmVnRXhwKG5hbWVzcGFjZS5yZXBsYWNlKC9fL2csICcgJykpfTpgOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJOYW1lc3BhY2VUaXRsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGluZmluaXR5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2luZmluaXR5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXoOmZkOacnycsXG5cdFx0XHQnemgtaGFudCc6ICfnhKHpmZDmnJ8nLFxuXHRcdH0pLFxuXHRcdEJsb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHQnR2xvYmFsbHkgQmxvY2tlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgZ2xvYmFsbHkgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWFqOWfn+WwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15YWo5Z+f5bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHRMb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyBMb2NrZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb5bey5YWo5Z+f6ZSB5a6aJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+W3suWFqOWfn+mOluWumicsXG5cdFx0fSksXG5cdFx0cGFydGlhbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwYXJ0aWFsICcsXG5cdFx0XHR6aDogJ+mDqOWIhicsXG5cdFx0fSksXG5cdFx0ZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkYXknLFxuXHRcdFx0emg6ICflpKknLFxuXHRcdH0pLFxuXHRcdHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnc2Vjb25kJyxcblx0XHRcdHpoOiAn56eSJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgYWRkWmVybyA9ICh2OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gdiA8PSA5ID8gYDAke3Z9YCA6IGAke3Z9YDtcbn07XG5cbmNvbnN0IGluSG91cnMgPSAobXM6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdGxldCBtbTogbnVtYmVyID0gTWF0aC5mbG9vcihtcyAvIDZlNCk7XG5cdGlmICghbW0pIHtcblx0XHRyZXR1cm4gYCR7TWF0aC5mbG9vcihtcyAvIDFlMyl9JHtnZXRNZXNzYWdlKCdzJyl9YDtcblx0fVxuXG5cdGxldCBoaDogbnVtYmVyID0gTWF0aC5mbG9vcihtbSAvIDYwKTtcblx0bW0gJT0gNjA7XG5cblx0Y29uc3QgZGQ6IG51bWJlciA9IE1hdGguZmxvb3IoaGggLyAyNCk7XG5cdGhoICU9IDI0O1xuXG5cdGlmIChkZCkge1xuXHRcdHJldHVybiBgJHtkZCArIChkZCA8IDEwID8gYC4ke2FkZFplcm8oaGgpfWAgOiAnJyl9JHtnZXRNZXNzYWdlKCdkJyl9YDtcblx0fVxuXG5cdHJldHVybiBgJHtoaH06JHthZGRaZXJvKG1tKX1gO1xufTtcblxuLy8gMjAwODEyMjYyMjA2MDUgb3IgMjAwOC0wMS0yNlQwNjozNDoxOVogLT4gbnVtYmVyXG5jb25zdCBwYXJzZVRTID0gKHN0cmluZzogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0Y29uc3QgbTogUmVnRXhwTWF0Y2hBcnJheSA9IHN0cmluZ1xuXHRcdC5yZXBsYWNlKC9cXEQvZywgJycpXG5cdFx0Lm1hdGNoKC8oXFxkXFxkXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkvKSBhcyBSZWdFeHBNYXRjaEFycmF5O1xuXG5cdHJldHVybiBuZXcgRGF0ZShcblx0XHREYXRlLlVUQyhcblx0XHRcdCsobVsxXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzJdIGFzIHN0cmluZykgLSAxLFxuXHRcdFx0KyhtWzNdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNF0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs1XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzZdIGFzIHN0cmluZylcblx0XHQpXG5cdCkuZ2V0VGltZSgpO1xufTtcblxuZXhwb3J0IHtpbkhvdXJzLCBwYXJzZVRTfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0luZGVmID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rSW5kZWZfeHRBZk9HXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtMb2NrZWQgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtMb2NrZWRfeHRBZk9HXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtQYXJ0aWFsID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rUGFydGlhbF94dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1RlbXAgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtUZW1wX3h0QWZPR1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwidXNlcmxpbmtJbmRlZlwiOiB1c2VybGlua0luZGVmLFxuICBcInVzZXJsaW5rTG9ja2VkXCI6IHVzZXJsaW5rTG9ja2VkLFxuICBcInVzZXJsaW5rUGFydGlhbFwiOiB1c2VybGlua1BhcnRpYWwsXG4gIFwidXNlcmxpbmtUZW1wXCI6IHVzZXJsaW5rVGVtcFxufTtcbiAgICAgICIsICJpbXBvcnQge2luSG91cnMsIHBhcnNlVFN9IGZyb20gJy4vcGFyc2VUaW1lJztcbmltcG9ydCB7dXNlcmxpbmtJbmRlZiwgdXNlcmxpbmtMb2NrZWQsIHVzZXJsaW5rUGFydGlhbCwgdXNlcmxpbmtUZW1wfSBmcm9tICcuLi9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgdHlwZSB7UXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc0FuZExvY2tzUmVzcG9uc2V9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbi8vIENhbGxiYWNrOiByZWNlaXZlIGRhdGEgYW5kIG1hcmsgbGlua3NcbmNvbnN0IG1hcmtMaW5rcyA9ICh7XG5cdHJlc3BvbnNlLFxuXHR1c2VyTGlua3MsXG5cdGJraXAsXG59OiB7XG5cdHJlc3BvbnNlOiBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzQW5kTG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG5cdGJraXA/OiBzdHJpbmc7XG59KTogdm9pZCA9PiB7XG5cdC8vIExvY2FsIGJsb2Nrc1xuXHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0XHRjb25zdCBpc1BhcnRpYWxCbGNvazogYm9vbGVhbiA9IHR5cGVvZiBibG9jay5yZXN0cmljdGlvbnMgPT09ICdzdHJpbmcnICYmIGJsb2NrLnJlc3RyaWN0aW9ucyAhPT0gJyc7IC8vIFBhcnRpYWwgYmxvY2tcblxuXHRcdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRcdGxldCBibG9ja1RpbWU6IHN0cmluZyA9ICcnO1xuXHRcdFx0aWYgKGJsb2NrLmV4cGlyeS5zdGFydHNXaXRoKCdpbicpKSB7XG5cdFx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua0luZGVmIGFzIHN0cmluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCFpc1BhcnRpYWxCbGNvaykge1xuXHRcdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rVGVtcCBhcyBzdHJpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmxvY2tUaW1lID0gaW5Ib3VycyhwYXJzZVRTKGJsb2NrLmV4cGlyeSkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdCbG9ja2VkJylcblx0XHRcdFx0LnJlcGxhY2UoJyQxJywgYmxvY2tUaW1lKVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdFx0LnJlcGxhY2UoJyQzJywgYmxvY2sucmVhc29uKVxuXHRcdFx0XHQucmVwbGFjZSgnJDQnLCBpbkhvdXJzKERhdGUubm93KCkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpKTtcblx0XHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tia2lwID8/IGJsb2NrLnVzZXJdO1xuXHRcdFx0aWYgKCEkbGlua3MpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJGxpbmtzKSB7XG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEdsb2JhbCBibG9ja3Ncblx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWxibG9ja3MpIHtcblx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRcdGxldCBibG9ja1RpbWU6IHN0cmluZyA9ICcnO1xuXHRcdFx0aWYgKGJsb2NrLmV4cGlyeS5zdGFydHNXaXRoKCdpbicpKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rSW5kZWYgYXMgc3RyaW5nO1xuXHRcdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtUZW1wIGFzIHN0cmluZztcblx0XHRcdFx0YmxvY2tUaW1lID0gaW5Ib3VycyhwYXJzZVRTKGJsb2NrLmV4cGlyeSkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdHbG9iYWxseSBCbG9ja2VkJylcblx0XHRcdFx0LnJlcGxhY2UoJyQxJywgYmxvY2tUaW1lKVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdFx0LnJlcGxhY2UoJyQzJywgYmxvY2sucmVhc29uKVxuXHRcdFx0XHQucmVwbGFjZSgnJDQnLCBpbkhvdXJzKERhdGUubm93KCkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpKTtcblx0XHRcdHRpcCA9IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tia2lwID8/IGJsb2NrLnRhcmdldF07XG5cdFx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHQkbGluay5hZGRDbGFzcyhjbGFzc05hbWUpLmF0dHIoJ3RpdGxlJywgJGxpbmsuYXR0cigndGl0bGUnKSArIHRpcCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2xvYmFsIGxvY2tzXG5cdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRjb25zdCB1c2VyID0gcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsdXNlcmluZm8/Lm5hbWU7XG5cdFx0Y29uc3QgbG9ja2VkID0gcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsdXNlcmluZm8/LmxvY2tlZDtcblxuXHRcdGlmICghbG9ja2VkIHx8ICF1c2VyKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdMb2NrZWQnKTtcblxuXHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbYmtpcCA/PyB1c2VyXTtcblx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsYXNzTmFtZSA9IHVzZXJsaW5rTG9ja2VkIGFzIHN0cmluZztcblxuXHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJGxpbmtzKSB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7bWFya0xpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYE1hcmtCbG9ja2VkLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlHbG9iYWxVc2VySW5mbyA9IGFzeW5jIChndWl1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2UgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRtZXRhOiBbJ2dsb2JhbHVzZXJpbmZvJ10sXG5cdFx0Z3VpdXNlcixcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7cXVlcnlHbG9iYWxVc2VySW5mb307XG4iLCAiaW1wb3J0IHtBcGlRdWVyeUdsb2JhbEJsb2Nrc1BhcmFtc1JlZGVmaW5lZH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlJUEJsb2NrcyA9IGFzeW5jIChia2lwOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyAmIEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogWydibG9ja3MnLCAnZ2xvYmFsYmxvY2tzJ10sXG5cdFx0YmtpcCxcblx0XHRia2xpbWl0OiAxMDAsXG5cdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0YmdpcDogYmtpcCxcblx0XHRiZ2xpbWl0OiAxMDAsXG5cdFx0Ymdwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAndGltZXN0YW1wJywgJ3RhcmdldCddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtxdWVyeUlQQmxvY2tzfTtcbiIsICJpbXBvcnQge0FwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeVVzZXJCbG9ja3MgPSBhc3luYyAoYmt1c2Vyczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyAmIEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogWydibG9ja3MnLCAnZ2xvYmFsYmxvY2tzJ10sXG5cdFx0Ymt1c2Vycyxcblx0XHRia2xpbWl0OiAxMDAsXG5cdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0YmdsaW1pdDogMTAwLFxuXHRcdGJndGFyZ2V0czogYmt1c2Vycyxcblx0XHRiZ3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICd0aW1lc3RhbXAnLCAndGFyZ2V0J10sXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5leHBvcnQge3F1ZXJ5VXNlckJsb2Nrc307XG4iLCAiaW1wb3J0IHR5cGUge1F1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NBbmRMb2Nrc1Jlc3BvbnNlfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5pbXBvcnQge21hcmtMaW5rc30gZnJvbSAnLi91dGlsL21hcmtMaW5rcyc7XG5pbXBvcnQge3F1ZXJ5R2xvYmFsVXNlckluZm99IGZyb20gJy4vdXRpbC9xdWVyeUdsb2JhbFVzZXJJbmZvJztcbmltcG9ydCB7cXVlcnlJUEJsb2Nrc30gZnJvbSAnLi91dGlsL3F1ZXJ5SVBCbG9ja3MnO1xuaW1wb3J0IHtxdWVyeVVzZXJCbG9ja3N9IGZyb20gJy4vdXRpbC9xdWVyeVVzZXJCbG9ja3MnO1xuXG5jb25zdCBtYXJrQmxvY2tlZFVzZXIgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IGdlbmVyYXRlVXNlckxpbmtzKCRjb250ZW50KTtcblxuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0Y29uc3QgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHQvLyBHbG9iYWwgTG9jayBxdWVpcmVzXG5cdC8vIE1vdmUgR2xvYmFsIExvY2sgcXVlcmllcyBiZWZvcmUgYmxvY2sgcXVyaWVzLFxuXHQvLyBzaW5jZSB0aGV5IHVzZSBBcnJheSNzcGxpY2UgdG8gY3JlYXRlIGJ1bGsgcXVlcmllcyxcblx0Ly8gYW5kIGl0ZW1zIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBhcnJheSBcInVzZXJzXCIuXG5cdGZvciAoY29uc3QgZ3VpdXNlciBvZiB1c2Vycykge1xuXHRcdGlmIChtdy51dGlsLmlzSVB2NEFkZHJlc3MoZ3VpdXNlcikgfHwgbXcudXRpbC5pc0lQdjZBZGRyZXNzKGd1aXVzZXIpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgcXVlcnlHbG9iYWxVc2VySW5mbyhndWl1c2VyKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc0FuZExvY2tzUmVzcG9uc2U7XG5cdFx0XHRcdG1hcmtMaW5rcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Ly8gTG9jYWwgYW5kIEdsb2JhbCBMb2NrIHF1ZWlyZXNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGJrdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghYmt1c2Vycy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBxdWVyeVVzZXJCbG9ja3MoYmt1c2VycykpIGFzIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NBbmRMb2Nrc1Jlc3BvbnNlO1xuXHRcdFx0XHRtYXJrTGlua3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZvciAobGV0IGJraXAgb2YgYmt1c2Vycykge1xuXHRcdFx0aWYgKCFtdy51dGlsLmlzSVB2NEFkZHJlc3MoYmtpcCkgJiYgIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhia2lwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhia2lwKSkge1xuXHRcdFx0XHRia2lwID0gYmtpcC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5SVBCbG9ja3MoYmtpcCkpIGFzIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NBbmRMb2Nrc1Jlc3BvbnNlO1xuXHRcdFx0XHRcdG1hcmtMaW5rcyh7cmVzcG9uc2UsIHVzZXJMaW5rcywgYmtpcH0pO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmV4cG9ydCB7bWFya0Jsb2NrZWRVc2VyfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkVXNlcn0gZnJvbSAnLi9tYXJrQmxvY2tlZFVzZXInO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya0Jsb2NrZWQoJGNvbnRlbnQpOiB2b2lkIHtcblx0XHRpZiAoaXNJbml0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlzSW5pdCA9IHRydWU7XG5cblx0XHQvLyBPbiB0aGUgZmlyc3QgY2FsbCBhZnRlciBpbml0aWFsIHBhZ2UgbG9hZCwgY29udGFpbmVyIGlzIG13LnV0aWwuJGNvbnRlbnRcblx0XHQvLyBVc2VkIHRvIGxpbWl0IG1haW5zcGFjZSBhY3Rpdml0eSB0byBqdXN0IHRoZSBkaWZmIGRlZmluaXRpb25zXG5cdFx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRcdCRjb250ZW50ID0gJGNvbnRlbnQuZmluZCgnLmRpZmYtdGl0bGUnKTtcblx0XHR9XG5cdFx0Ly8gT24gcGFnZSBsb2FkLCBhbHNvIHVwZGF0ZSB0aGUgbmFtZXNwYWNlIHRhYlxuXHRcdCRjb250ZW50ID0gJGNvbnRlbnQuYWRkKCcjY2EtbnN0YWItdXNlcicpO1xuXG5cdFx0bWFya0Jsb2NrZWRVc2VyKCRjb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgImltcG9ydCB7YWRkSG9va30gZnJvbSAnLi9tb2R1bGVzL2FkZEhvb2snO1xuXG5pZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpKSkge1xuXHRhZGRIb29rKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSx5QkFBMEI7QUFDMUIsSUFBQUMsdUJBQXdCLENBQUMsR0FBRyxDQUFDO0FBQzdCLElBQUFDLFVBQVc7O0FDRlosSUFBQUMsb0JBQW9CQyxRQUFBLGlCQUFBOztBQ0NwQixJQUFNQyw4QkFBOEJBLE1BQWdCO0FBQ25ELFFBQU07SUFBQ0M7RUFBYyxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXZDLFFBQU1DLHVCQUFnQyxDQUFBO0FBRXRDLFdBQUFDLEtBQUEsR0FBQUMsa0JBQThCQyxPQUFPQyxRQUFRUixjQUFjLEdB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WTtBQUMzQixNQUFJQyxTQUFrQjtBQUV0QnJMLEtBQUdzTCxLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLFlBQVkvSixVQUFnQjtBQUNwRSxRQUFJNEosUUFBUTtBQUNYO0lBQ0Q7QUFDQUEsYUFBUztBQUlULFFBQUlILGFBQWEsVUFBVUMsc0JBQXNCLEdBQUc7QUFDbkQxSixpQkFBV0EsU0FBU0ksS0FBSyxhQUFhO0lBQ3ZDO0FBRUFKLGVBQVdBLFNBQVM4SixJQUFJLGdCQUFnQjtBQUV4Q3JCLG9CQUFnQnpJLFFBQVE7RUFDekIsQ0FBQztBQUNGOztBQ3JCQSxJQUFJLENBQUMsQ0FBQyxRQUFRLFFBQVEsRUFBRWQsU0FBU1gsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLENBQUMsR0FBRztBQUM1RGtMLFVBQVE7QUFDVDsiLAogICJuYW1lcyI6IFsiY29udHJpYnV0aW9uc1BhZ2VBbGlhcyIsICJ1c2VyTmFtZXNwYWNlTnVtYmVycyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzIiwgIndnTmFtZXNwYWNlSWRzIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAidXNlck5hbWVzcGFjZVRpdGxlczIiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJuYW1lc3BhY2UiLCAiaWQiLCAiaW5jbHVkZXMiLCAiY29uY2F0IiwgInV0aWwiLCAiZXNjYXBlUmVnRXhwIiwgInJlcGxhY2UiLCAidXNlck5hbWVzcGFjZVRpdGxlcyIsICJ1c2VyVGl0bGVSZWdleCIsICJSZWdFeHAiLCAiam9pbiIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgImFydGljbGVSZWdleCIsICJzY3JpcHRSZWdleCIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJ1c2VyTGlua3MiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiX3VzZXIiLCAiX3VzZXJMaW5rcyRfdXNlciIsICJlbGVtZW50IiwgInZhbHVlIiwgIiRlbGVtZW50IiwgIiQiLCAiaGFzQ2xhc3MiLCAicGFyZW50IiwgImhyZWYiLCAiYXR0ciIsICJpc0lQdjZBZGRyZXNzIiwgIk13VXJpIiwgImhvc3QiLCAibG9jYXRpb24iLCAicGFnZVRpdGxlIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlckV4ZWNBcnJheSIsICJ1c2VyIiwgInNsaWNlIiwgInRvVXBwZXJDYXNlIiwgImVyciIsICJlIiwgImYiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJpbmZpbml0eSIsICJsb2NhbGl6ZSIsICJlbiIsICJCbG9ja2VkIiwgIkxvY2tlZCIsICJwYXJ0aWFsIiwgInpoIiwgImQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFkZFplcm8iLCAidiIsICJpbkhvdXJzIiwgIm1zIiwgIm1tIiwgIk1hdGgiLCAiZmxvb3IiLCAiaGgiLCAiZGQiLCAicGFyc2VUUyIsICJzdHJpbmciLCAibSIsICJEYXRlIiwgIlVUQyIsICJnZXRUaW1lIiwgInVzZXJsaW5rSW5kZWYiLCAidXNlcmxpbmtMb2NrZWQiLCAidXNlcmxpbmtQYXJ0aWFsIiwgInVzZXJsaW5rVGVtcCIsICJtYXJrTGlua3MiLCAicmVzcG9uc2UiLCAiYmtpcCIsICJfcmVzcG9uc2UkcXVlcnkiLCAiX3Jlc3BvbnNlJHF1ZXJ5MiIsICJfcmVzcG9uc2UkcXVlcnkzIiwgImJsb2NrcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJibG9jayIsICJpc1BhcnRpYWxCbGNvayIsICJyZXN0cmljdGlvbnMiLCAiY2xhc3NOYW1lIiwgImJsb2NrVGltZSIsICJleHBpcnkiLCAic3RhcnRzV2l0aCIsICJ0aW1lc3RhbXAiLCAidGlwIiwgImJ5IiwgInJlYXNvbiIsICJub3ciLCAiJGxpbmtzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIiRsaW5rIiwgImFkZENsYXNzIiwgImdsb2JhbGJsb2NrcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ0YXJnZXQiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiZ2xvYmFsdXNlcmluZm8iLCAiX3Jlc3BvbnNlJHF1ZXJ5JGdsb2JhIiwgIl9yZXNwb25zZSRxdWVyeSRnbG9iYTIiLCAibmFtZSIsICJsb2NrZWQiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicXVlcnlHbG9iYWxVc2VySW5mbyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImd1aXVzZXIiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJtZXRhIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWVyeUlQQmxvY2tzIiwgIl9yZWYyIiwgImxpc3QiLCAiYmtsaW1pdCIsICJia3Byb3AiLCAiYmdpcCIsICJiZ2xpbWl0IiwgImJncHJvcCIsICJfeDIiLCAicXVlcnlVc2VyQmxvY2tzIiwgIl9yZWYzIiwgImJrdXNlcnMiLCAiYmd0YXJnZXRzIiwgIl94MyIsICJtYXJrQmxvY2tlZFVzZXIiLCAidXNlcnMiLCAia2V5cyIsICJwcm9taXNlcyIsICJfaTIiLCAiX3VzZXJzIiwgImlzSVB2NEFkZHJlc3MiLCAiZXJyb3IiLCAiY29uc29sZSIsICJpIiwgInNwbGljZSIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaTMiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiYWRkSG9vayIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAibWFya0Jsb2NrZWQiXQp9Cg==
