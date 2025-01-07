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
  userLinks
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
        const $links = userLinks[block.user];
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
        const $links = userLinks[block.target];
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
    const $links = userLinks[user];
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
//! src/MarkBlocked/modules/util/queryUserBlocks.ts
var queryUserBlocks = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (bkusers) {
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
  return function queryUserBlocks2(_x2) {
    return _ref2.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2dlbmVyYXRlVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9wYXJzZVRpbWUudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9xdWVyeUdsb2JhbFVzZXJJbmZvLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcXVlcnlVc2VyQmxvY2tzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL21hcmtCbG9ja2VkVXNlci50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9hZGRIb29rLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9NYXJrQmxvY2tlZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbnRyaWJ1dGlvbnNQYWdlQWxpYXNcIjogXCJTcGVjaWFsOkNvbnRyaWJ1dGlvbnNcIixcblx0XCJ1c2VyTmFtZXNwYWNlTnVtYmVyc1wiOiBbMiwgM10sXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfSBmcm9tICcuL2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyc7XG5cbi8vIEdldCBhbGwgYWxpYXNlcyBmb3IgdXNlcjogJiB1c2VyX3RhbGs6XG5jb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcygpO1xuLy8gUmVnRXhwIGZvciBhbGwgdGl0bGVzIHRoYXQgYXJlICBVc2VyOnwgVXNlcl90YWxrOiB8IFNwZWNpYWw6Q29udHJpYnV0aW9ucy8gKGZvciB1c2Vyc2NyaXB0cylcbmNvbnN0IHVzZXJUaXRsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRgXigke3VzZXJOYW1lc3BhY2VUaXRsZXMuam9pbignfCcpfXwke09QVElPTlMuY29udHJpYnV0aW9uc1BhZ2VBbGlhc31cXFxcLykrKFteXFxcXC8jXSspJGAsXG5cdCdpJ1xuKTtcblxuLy8gUmVnRXhwIGZvciBsaW5rc1xuLy8gYXJ0aWNsZVJlZ2V4IGFsc28gbWF0Y2hlcyBleHRlcm5hbCBsaW5rcyBpbiBvcmRlciB0byBzdXBwb3J0IHRoZSBub3BpbmcgdGVtcGxhdGVcbmNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oW14jXSspYCk7XG5jb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7d2dTY3JpcHR9XFxcXD90aXRsZT0oW14jJl0rKWApO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KTogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0+IHtcblx0Ly8gRmluZCBhbGwgXCJ1c2VyXCIgbGlua3MgYW5kIHNhdmUgdGhlbSBpbiB1c2VyTGlua3MgOiB7ICd1c2Vycyc6IFs8bGluazE+LCA8bGluazI+LCAuLi5dLCAndXNlcjInOiBbPGxpbmszPiwgPGxpbmszPiwgLi4uXSwgLi4uIH1cblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPSB7fTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnYScpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdC1kYXRlJykgfHxcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdleHQtZGlzY3Vzc2lvbnRvb2xzLWluaXQtdGltZXN0YW1wbGluaycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctaGlzdG9yeS11bmRvJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1yb2xsYmFjay1saW5rJylcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGhyZWYucmVwbGFjZSgvXig/Omh0dHBzPzpcXC9cXC8pL2ksICcnKSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Ly8gTWF5YmUgYWJzb2x1dGUgVVJMXG5cdFx0XHRpZiAobmV3IE13VXJpKGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBNYXliZSByZWxhdGl2ZSBVUkxcblx0XHRcdFx0aWYgKG5ldyBNd1VyaShsb2NhdGlvbi5ocmVmICsgaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cGFnZVRpdGxlID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhZ2VUaXRsZSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXG5cdFx0Y29uc3QgdXNlckV4ZWNBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IHVzZXJUaXRsZVJlZ2V4LmV4ZWMocGFnZVRpdGxlKTtcblx0XHRpZiAoIXVzZXJFeGVjQXJyYXkgfHwgdHlwZW9mIHVzZXJFeGVjQXJyYXlbMl0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgdXNlcjogc3RyaW5nID0gdXNlckV4ZWNBcnJheVsyXS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdXNlckV4ZWNBcnJheVsyXS5zbGljZSgxKTtcblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKHVzZXIpKSB7XG5cdFx0XHR1c2VyID0gdXNlci50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdHVzZXJMaW5rc1t1c2VyXSA/Pz0gW107XG5cblx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSlbXG5cdFx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSkubGVuZ3RoXG5cdFx0XSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdHJldHVybiB1c2VyTGlua3M7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlckxpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lc3BhY2UsIGlkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0XHRpZiAoIU9QVElPTlMudXNlck5hbWVzcGFjZU51bWJlcnMuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR1c2VyTmFtZXNwYWNlVGl0bGVzW3VzZXJOYW1lc3BhY2VUaXRsZXMubGVuZ3RoXSA9IGAke213LnV0aWwuZXNjYXBlUmVnRXhwKG5hbWVzcGFjZS5yZXBsYWNlKC9fL2csICcgJykpfTpgOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdHJldHVybiB1c2VyTmFtZXNwYWNlVGl0bGVzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRpbmZpbml0eTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdpbmZpbml0eScsXG5cdFx0XHQnemgtaGFucyc6ICfml6DpmZDmnJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn54Sh6ZmQ5pyfJyxcblx0XHR9KSxcblx0XHRCbG9ja2VkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzsgJDVibG9ja2VkICgkMSkgYnkgJDI6ICQzICgkNCBhZ28pJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8m+eUsSQyJDXlsIHnpoEkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yb55SxJDIkNeWwgemOliQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0fSksXG5cdFx0J0dsb2JhbGx5IEJsb2NrZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzsgJDVibG9ja2VkIGdsb2JhbGx5ICgkMSkgYnkgJDI6ICQzICgkNCBhZ28pJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8m+eUsSQyJDXlhajln5/lsIHnpoEkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yb55SxJDIkNeWFqOWfn+WwgemOliQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0fSksXG5cdFx0TG9ja2VkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzsgTG9ja2VkJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8m+W3suWFqOWfn+mUgeWumicsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvlt7Llhajln5/pjpblrponLFxuXHRcdH0pLFxuXHRcdHBhcnRpYWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFydGlhbCAnLFxuXHRcdFx0emg6ICfpg6jliIYnLFxuXHRcdH0pLFxuXHRcdGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGF5Jyxcblx0XHRcdHpoOiAn5aSpJyxcblx0XHR9KSxcblx0XHRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3NlY29uZCcsXG5cdFx0XHR6aDogJ+enkicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGFkZFplcm8gPSAodjogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHYgPD0gOSA/IGAwJHt2fWAgOiBgJHt2fWA7XG59O1xuXG5jb25zdCBpbkhvdXJzID0gKG1zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRsZXQgbW06IG51bWJlciA9IE1hdGguZmxvb3IobXMgLyA2ZTQpO1xuXHRpZiAoIW1tKSB7XG5cdFx0cmV0dXJuIGAke01hdGguZmxvb3IobXMgLyAxZTMpfSR7Z2V0TWVzc2FnZSgncycpfWA7XG5cdH1cblxuXHRsZXQgaGg6IG51bWJlciA9IE1hdGguZmxvb3IobW0gLyA2MCk7XG5cdG1tICU9IDYwO1xuXG5cdGNvbnN0IGRkOiBudW1iZXIgPSBNYXRoLmZsb29yKGhoIC8gMjQpO1xuXHRoaCAlPSAyNDtcblxuXHRpZiAoZGQpIHtcblx0XHRyZXR1cm4gYCR7ZGQgKyAoZGQgPCAxMCA/IGAuJHthZGRaZXJvKGhoKX1gIDogJycpfSR7Z2V0TWVzc2FnZSgnZCcpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7aGh9OiR7YWRkWmVybyhtbSl9YDtcbn07XG5cbi8vIDIwMDgxMjI2MjIwNjA1IG9yIDIwMDgtMDEtMjZUMDY6MzQ6MTlaIC0+IG51bWJlclxuY29uc3QgcGFyc2VUUyA9IChzdHJpbmc6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdGNvbnN0IG06IFJlZ0V4cE1hdGNoQXJyYXkgPSBzdHJpbmdcblx0XHQucmVwbGFjZSgvXFxEL2csICcnKVxuXHRcdC5tYXRjaCgvKFxcZFxcZFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpLykgYXMgUmVnRXhwTWF0Y2hBcnJheTtcblxuXHRyZXR1cm4gbmV3IERhdGUoXG5cdFx0RGF0ZS5VVEMoXG5cdFx0XHQrKG1bMV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVsyXSBhcyBzdHJpbmcpIC0gMSxcblx0XHRcdCsobVszXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzRdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs2XSBhcyBzdHJpbmcpXG5cdFx0KVxuXHQpLmdldFRpbWUoKTtcbn07XG5cbmV4cG9ydCB7aW5Ib3VycywgcGFyc2VUU307XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtJbmRlZiA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua0luZGVmX3h0QWZPR1wiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rTG9ja2VkID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rTG9ja2VkX3h0QWZPR1wiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rUGFydGlhbCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua1BhcnRpYWxfeHRBZk9HXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtUZW1wID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rVGVtcF94dEFmT0dcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInVzZXJsaW5rSW5kZWZcIjogdXNlcmxpbmtJbmRlZixcbiAgXCJ1c2VybGlua0xvY2tlZFwiOiB1c2VybGlua0xvY2tlZCxcbiAgXCJ1c2VybGlua1BhcnRpYWxcIjogdXNlcmxpbmtQYXJ0aWFsLFxuICBcInVzZXJsaW5rVGVtcFwiOiB1c2VybGlua1RlbXBcbn07XG4gICAgICAiLCAiaW1wb3J0IHtpbkhvdXJzLCBwYXJzZVRTfSBmcm9tICcuL3BhcnNlVGltZSc7XG5pbXBvcnQge3VzZXJsaW5rSW5kZWYsIHVzZXJsaW5rTG9ja2VkLCB1c2VybGlua1BhcnRpYWwsIHVzZXJsaW5rVGVtcH0gZnJvbSAnLi4vTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHR5cGUge1F1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NBbmRMb2Nrc1Jlc3BvbnNlfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG4vLyBDYWxsYmFjazogcmVjZWl2ZSBkYXRhIGFuZCBtYXJrIGxpbmtzXG5jb25zdCBtYXJrTGlua3MgPSAoe1xuXHRyZXNwb25zZSxcblx0dXNlckxpbmtzLFxufToge1xuXHRyZXNwb25zZTogUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc0FuZExvY2tzUmVzcG9uc2U7XG5cdHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+O1xufSk6IHZvaWQgPT4ge1xuXHQvLyBMb2NhbCBibG9ja3Ncblx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdFx0Y29uc3QgaXNQYXJ0aWFsQmxjb2s6IGJvb2xlYW4gPSB0eXBlb2YgYmxvY2sucmVzdHJpY3Rpb25zID09PSAnc3RyaW5nJyAmJiBibG9jay5yZXN0cmljdGlvbnMgIT09ICcnOyAvLyBQYXJ0aWFsIGJsb2NrXG5cblx0XHRcdGxldCBjbGFzc05hbWU6IHN0cmluZyA9IHVzZXJsaW5rUGFydGlhbCBhcyBzdHJpbmc7XG5cdFx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRcdGlmIChibG9jay5leHBpcnkuc3RhcnRzV2l0aCgnaW4nKSkge1xuXHRcdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmxvY2tUaW1lID0gZ2V0TWVzc2FnZSgnaW5maW5pdHknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua1RlbXAgYXMgc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmxvY2tlZCcpXG5cdFx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdFx0LnJlcGxhY2UoJyQyJywgYmxvY2suYnkpXG5cdFx0XHRcdC5yZXBsYWNlKCckMycsIGJsb2NrLnJlYXNvbilcblx0XHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0XHR0aXAgPSBpc1BhcnRpYWxCbGNvayA/IHRpcC5yZXBsYWNlKCckNScsIGdldE1lc3NhZ2UoJ3BhcnRpYWwnKSkgOiB0aXAucmVwbGFjZSgnJDUnLCAnJyk7XG5cblx0XHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbYmxvY2sudXNlcl07XG5cdFx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHQkbGluay5hZGRDbGFzcyhjbGFzc05hbWUpLmF0dHIoJ3RpdGxlJywgJGxpbmsuYXR0cigndGl0bGUnKSArIHRpcCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2xvYmFsIGJsb2Nrc1xuXHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSB1c2VybGlua1BhcnRpYWwgYXMgc3RyaW5nO1xuXHRcdFx0bGV0IGJsb2NrVGltZTogc3RyaW5nID0gJyc7XG5cdFx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHRcdGJsb2NrVGltZSA9IGdldE1lc3NhZ2UoJ2luZmluaXR5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua1RlbXAgYXMgc3RyaW5nO1xuXHRcdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0dsb2JhbGx5IEJsb2NrZWQnKVxuXHRcdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIGJsb2NrLmJ5KVxuXHRcdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdFx0dGlwID0gdGlwLnJlcGxhY2UoJyQ1JywgJycpO1xuXG5cdFx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2Jsb2NrLnRhcmdldF07XG5cdFx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHQkbGluay5hZGRDbGFzcyhjbGFzc05hbWUpLmF0dHIoJ3RpdGxlJywgJGxpbmsuYXR0cigndGl0bGUnKSArIHRpcCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2xvYmFsIGxvY2tzXG5cdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRjb25zdCB1c2VyID0gcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsdXNlcmluZm8/Lm5hbWU7XG5cdFx0Y29uc3QgbG9ja2VkID0gcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsdXNlcmluZm8/LmxvY2tlZDtcblxuXHRcdGlmICghbG9ja2VkIHx8ICF1c2VyKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdMb2NrZWQnKTtcblxuXHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbdXNlcl07XG5cdFx0aWYgKCEkbGlua3MpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBjbGFzc05hbWUgPSB1c2VybGlua0xvY2tlZCBhcyBzdHJpbmc7XG5cblx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHQkbGluay5hZGRDbGFzcyhjbGFzc05hbWUpLmF0dHIoJ3RpdGxlJywgJGxpbmsuYXR0cigndGl0bGUnKSArIHRpcCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge21hcmtMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrQmxvY2tlZC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5R2xvYmFsVXNlckluZm8gPSBhc3luYyAoZ3VpdXNlcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bWV0YTogWydnbG9iYWx1c2VyaW5mbyddLFxuXHRcdGd1aXVzZXIsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckluZm99O1xuIiwgImltcG9ydCB7QXBpUXVlcnlHbG9iYWxCbG9ja3NQYXJhbXNSZWRlZmluZWR9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5VXNlckJsb2NrcyA9IGFzeW5jIChia3VzZXJzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5QmxvY2tzUGFyYW1zICYgQXBpUXVlcnlHbG9iYWxCbG9ja3NQYXJhbXNSZWRlZmluZWQgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiBbJ2Jsb2NrcycsICdnbG9iYWxibG9ja3MnXSxcblx0XHRia3VzZXJzLFxuXHRcdGJrbGltaXQ6IDEwMCxcblx0XHRia3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICdyZXN0cmljdGlvbnMnLCAndGltZXN0YW1wJywgJ3VzZXInXSxcblx0XHRiZ2xpbWl0OiAxMDAsXG5cdFx0Ymd0YXJnZXRzOiBia3VzZXJzLFxuXHRcdGJncHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3RpbWVzdGFtcCcsICd0YXJnZXQnXSxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7cXVlcnlVc2VyQmxvY2tzfTtcbiIsICJpbXBvcnQgdHlwZSB7UXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc0FuZExvY2tzUmVzcG9uc2V9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVXNlckxpbmtzJztcbmltcG9ydCB7bWFya0xpbmtzfSBmcm9tICcuL3V0aWwvbWFya0xpbmtzJztcbmltcG9ydCB7cXVlcnlHbG9iYWxVc2VySW5mb30gZnJvbSAnLi91dGlsL3F1ZXJ5R2xvYmFsVXNlckluZm8nO1xuaW1wb3J0IHtxdWVyeVVzZXJCbG9ja3N9IGZyb20gJy4vdXRpbC9xdWVyeVVzZXJCbG9ja3MnO1xuXG5jb25zdCBtYXJrQmxvY2tlZFVzZXIgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IGdlbmVyYXRlVXNlckxpbmtzKCRjb250ZW50KTtcblxuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0Y29uc3QgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHQvLyBHbG9iYWwgTG9jayBxdWVpcmVzXG5cdC8vIE1vdmUgR2xvYmFsIExvY2sgcXVlcmllcyBiZWZvcmUgYmxvY2sgcXVyaWVzLFxuXHQvLyBzaW5jZSB0aGV5IHVzZSBBcnJheSNzcGxpY2UgdG8gY3JlYXRlIGJ1bGsgcXVlcmllcyxcblx0Ly8gYW5kIGl0ZW1zIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBhcnJheSBcInVzZXJzXCIuXG5cdGZvciAoY29uc3QgZ3VpdXNlciBvZiB1c2Vycykge1xuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBxdWVyeUdsb2JhbFVzZXJJbmZvKGd1aXVzZXIpKSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzQW5kTG9ja3NSZXNwb25zZTtcblx0XHRcdFx0bWFya0xpbmtzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBMb2NhbCBhbmQgR2xvYmFsIExvY2sgcXVlaXJlc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5VXNlckJsb2Nrcyhia3VzZXJzKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc0FuZExvY2tzUmVzcG9uc2U7XG5cdFx0XHRcdG1hcmtMaW5rcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmV4cG9ydCB7bWFya0Jsb2NrZWRVc2VyfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkVXNlcn0gZnJvbSAnLi9tYXJrQmxvY2tlZFVzZXInO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya0Jsb2NrZWQoJGNvbnRlbnQpOiB2b2lkIHtcblx0XHRpZiAoaXNJbml0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlzSW5pdCA9IHRydWU7XG5cblx0XHQvLyBPbiB0aGUgZmlyc3QgY2FsbCBhZnRlciBpbml0aWFsIHBhZ2UgbG9hZCwgY29udGFpbmVyIGlzIG13LnV0aWwuJGNvbnRlbnRcblx0XHQvLyBVc2VkIHRvIGxpbWl0IG1haW5zcGFjZSBhY3Rpdml0eSB0byBqdXN0IHRoZSBkaWZmIGRlZmluaXRpb25zXG5cdFx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRcdCRjb250ZW50ID0gJGNvbnRlbnQuZmluZCgnLmRpZmYtdGl0bGUnKTtcblx0XHR9XG5cdFx0Ly8gT24gcGFnZSBsb2FkLCBhbHNvIHVwZGF0ZSB0aGUgbmFtZXNwYWNlIHRhYlxuXHRcdCRjb250ZW50ID0gJGNvbnRlbnQuYWRkKCcjY2EtbnN0YWItdXNlcicpO1xuXG5cdFx0bWFya0Jsb2NrZWRVc2VyKCRjb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgImltcG9ydCB7YWRkSG9va30gZnJvbSAnLi9tb2R1bGVzL2FkZEhvb2snO1xuXG5pZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpKSkge1xuXHRhZGRIb29rKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSx5QkFBMEI7QUFDMUIsSUFBQUMsdUJBQXdCLENBQUMsR0FBRyxDQUFDO0FBQzdCLElBQUFDLFVBQVc7O0FDRlosSUFBQUMsb0JBQW9CQyxRQUFBLGlCQUFBOztBQ0NwQixJQUFNQyw4QkFBOEJBLE1BQWdCO0FBQ25ELFFBQU07SUFBQ0M7RUFBYyxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXZDLFFBQU1DLHVCQUFnQyxDQUFBO0FBRXRDLFdBQUFDLEtBQUEsR0FBQUMsa0JBQThCQyxPQUFPQyxRQUFRUixjQUFjLEdBQUFLLEtBQUFDLGdCQUFBRyxRQUFBSixNQUFHO0FBQTlELFVBQVcsQ0FBQ0ssV0FBV0MsRUFBRSxJQUFBTCxnQkFBQUQsRUFBQTtBQUN4QixRQUFJLENBQVNWLHFCQUFxQmlCLFNBQVNELEVBQUUsR0FBRztBQUMvQztJQUNEO0FBRUFQLHlCQUFvQkEscUJBQW9CSyxNQUFNLElBQUEsR0FBQUksT0FBT1osR0FBR2EsS0FBS0MsYUFBYUwsVUFBVU0sUUFBUSxNQUFNLEdBQUcsQ0FBQyxHQUFDLEdBQUE7RUFDeEc7QUFFQSxTQUFPWjtBQUNSOztBRFhBLElBQU1hLHNCQUFnQ2xCLDRCQUE0QjtBQUVsRSxJQUFNbUIsaUJBQXlCLElBQUlDLE9BQUEsS0FBQU4sT0FDN0JJLG9CQUFvQkcsS0FBSyxHQUFHLEdBQUMsR0FBQSxFQUFBUCxPQUFZbkIsd0JBQXNCLGtCQUFBLEdBQ3BFLEdBQ0Q7QUFJQSxJQUFNO0VBQUMyQjtFQUFlQztBQUFRLElBQUlyQixHQUFHQyxPQUFPQyxJQUFJO0FBQ2hELElBQU1vQixlQUF1QixJQUFJSixPQUFBLEdBQUFOLE9BQVVRLGNBQWNMLFFBQVEsTUFBTSxFQUFFLEdBQUMsU0FBQSxDQUFTO0FBQ25GLElBQU1RLGNBQXNCLElBQUlMLE9BQUEsSUFBQU4sT0FBV1MsVUFBUSxtQkFBQSxDQUFtQjtBQUV0RSxJQUFNRyxvQkFBcUJDLGNBQStDO0FBRXpFLFFBQU1DLFlBQXNDLENBQUM7QUFBQSxNQUFBQyxZQUFBQywyQkFFdkJILFNBQVNJLEtBQUssR0FBRyxDQUFBLEdBQUFDO0FBQUEsTUFBQTtBQUF2QyxTQUFBSCxVQUFBSSxFQUFBLEdBQUEsRUFBQUQsUUFBQUgsVUFBQUssRUFBQSxHQUFBQyxRQUEwQztBQUFBLFVBQUFDLE9BQUFDO0FBQUEsWUFBL0JDLFVBQUFOLE1BQUFPO0FBQ1YsWUFBTUMsV0FBc0NDLEVBQUVILE9BQU87QUFDckQsVUFDQ0UsU0FBU0UsU0FBUyxxQkFBcUIsS0FDdkNGLFNBQVNFLFNBQVMsd0NBQXdDLEtBQzFERixTQUFTRyxPQUFPLE1BQU0sRUFBRUQsU0FBUyxpQkFBaUIsS0FDbERGLFNBQVNHLE9BQU8sTUFBTSxFQUFFRCxTQUFTLGtCQUFrQixHQUNsRDtBQUNEO01BQ0Q7QUFFQSxZQUFNRSxPQUEyQkosU0FBU0ssS0FBSyxNQUFNO0FBQ3JELFVBQUksQ0FBQ0QsTUFBTTtBQUNWO01BQ0Q7QUFDQSxVQUFJMUMsR0FBR2EsS0FBSytCLGNBQWNGLEtBQUszQixRQUFRLHFCQUFxQixFQUFFLENBQUMsR0FBRztBQUNqRTtNQUNEO0FBQ0EsVUFBSTtBQUVILFlBQUksSUFBSW5CLGtCQUFBaUQsTUFBTUgsSUFBSSxFQUFFSSxTQUFTQyxTQUFTRCxNQUFNO0FBQzNDO1FBQ0Q7TUFDRCxRQUFRO0FBQ1AsWUFBSTtBQUVILGNBQUksSUFBSWxELGtCQUFBaUQsTUFBTUUsU0FBU0wsT0FBT0EsSUFBSSxFQUFFSSxTQUFTQyxTQUFTRCxNQUFNO0FBQzNEO1VBQ0Q7UUFDRCxRQUFRO0FBQ1A7UUFDRDtNQUNEO0FBRUEsVUFBSUU7QUFDSixVQUFJMUIsYUFBYTJCLEtBQUtQLElBQUksR0FBRztBQUM1QixjQUFNUSxRQUF5QjVCLGFBQWE2QixLQUFLVCxJQUFJO0FBQ3JETSxvQkFBWUUsTUFBTSxDQUFDO01BQ3BCLFdBQVczQixZQUFZMEIsS0FBS1AsSUFBSSxHQUFHO0FBQ2xDLGNBQU1RLFFBQXlCM0IsWUFBWTRCLEtBQUtULElBQUk7QUFDcERNLG9CQUFZRSxNQUFNLENBQUM7TUFDcEIsT0FBTztBQUNOO01BQ0Q7QUFFQUYsa0JBQVlJLG1CQUFtQkosU0FBUyxFQUFFakMsUUFBUSxNQUFNLEdBQUc7QUFFM0QsWUFBTXNDLGdCQUF3Q3BDLGVBQWVrQyxLQUFLSCxTQUFTO0FBQzNFLFVBQUksQ0FBQ0ssaUJBQWlCLE9BQU9BLGNBQWMsQ0FBQyxNQUFNLFVBQVU7QUFDM0Q7TUFDRDtBQUVBLFVBQUlDLE9BQWVELGNBQWMsQ0FBQyxFQUFFRSxNQUFNLEdBQUcsQ0FBQyxFQUFFQyxZQUFZLElBQUlILGNBQWMsQ0FBQyxFQUFFRSxNQUFNLENBQUM7QUFDeEYsVUFBSXZELEdBQUdhLEtBQUsrQixjQUFjVSxJQUFJLEdBQUc7QUFDaENBLGVBQU9BLEtBQUtFLFlBQVk7TUFDekI7QUFFQSxPQUFBckIsbUJBQUFULFVBQUFRLFFBQVVvQixJQUFJLE9BQUEsUUFBQW5CLHFCQUFBLFNBQUFBLG1CQUFkVCxVQUFBUSxLQUFBLElBQW9CLENBQUE7QUFFbkJSLGdCQUFVNEIsSUFBSSxFQUNiNUIsVUFBVTRCLElBQUksRUFBaUQ5QyxNQUNqRSxJQUFJOEI7SUFDTDtFQUFBLFNBQUFtQixLQUFBO0FBQUE5QixjQUFBK0IsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQTlCLGNBQUFnQyxFQUFBO0VBQUE7QUFFQSxTQUFPakM7QUFDUjs7QUV2RkEsSUFBQWtDLHFCQUF1Qi9ELFFBQUEsaUJBQUE7QUFFdkIsSUFBTWdFLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFdBQUEsR0FBVUYsbUJBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTCxtQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CSixtQkFBQUcsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxTQUFBLEdBQVFOLG1CQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFVBQUEsR0FBU1AsbUJBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSkksSUFBSTtJQUNMLENBQUM7SUFDREMsSUFBQSxHQUFHVCxtQkFBQUcsVUFBUztNQUNYQyxJQUFJO01BQ0pJLElBQUk7SUFDTCxDQUFDO0lBQ0RyQyxJQUFBLEdBQUc2QixtQkFBQUcsVUFBUztNQUNYQyxJQUFJO01BQ0pJLElBQUk7SUFDTCxDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1FLGVBQWVULGdCQUFnQjtBQUVyQyxJQUFNVSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ3pDQSxJQUFNQyxVQUFXQyxPQUFzQjtBQUN0QyxTQUFPQSxLQUFLLElBQUEsSUFBQTlELE9BQVE4RCxDQUFDLElBQUEsR0FBQTlELE9BQVE4RCxDQUFDO0FBQy9CO0FBRUEsSUFBTUMsVUFBV0MsUUFBdUI7QUFDdkMsTUFBSUMsS0FBYUMsS0FBS0MsTUFBTUgsS0FBSyxHQUFHO0FBQ3BDLE1BQUksQ0FBQ0MsSUFBSTtBQUNSLFdBQUEsR0FBQWpFLE9BQVVrRSxLQUFLQyxNQUFNSCxLQUFLLEdBQUcsQ0FBQyxFQUFBaEUsT0FBRzJELFdBQVcsR0FBRyxDQUFDO0VBQ2pEO0FBRUEsTUFBSVMsS0FBYUYsS0FBS0MsTUFBTUYsS0FBSyxFQUFFO0FBQ25DQSxRQUFNO0FBRU4sUUFBTUksS0FBYUgsS0FBS0MsTUFBTUMsS0FBSyxFQUFFO0FBQ3JDQSxRQUFNO0FBRU4sTUFBSUMsSUFBSTtBQUNQLFdBQUEsR0FBQXJFLE9BQVVxRSxNQUFNQSxLQUFLLEtBQUEsSUFBQXJFLE9BQVM2RCxRQUFRTyxFQUFFLENBQUMsSUFBSyxHQUFHLEVBQUFwRSxPQUFHMkQsV0FBVyxHQUFHLENBQUM7RUFDcEU7QUFFQSxTQUFBLEdBQUEzRCxPQUFVb0UsSUFBRSxHQUFBLEVBQUFwRSxPQUFJNkQsUUFBUUksRUFBRSxDQUFDO0FBQzVCO0FBR0EsSUFBTUssVUFBV0MsWUFBMkI7QUFDM0MsUUFBTUMsSUFBc0JELE9BQzFCcEUsUUFBUSxPQUFPLEVBQUUsRUFDakJtQyxNQUFNLDBDQUEwQztBQUVsRCxTQUFPLElBQUltQyxLQUNWQSxLQUFLQyxJQUNKLENBQUVGLEVBQUUsQ0FBQyxHQUNMLENBQUVBLEVBQUUsQ0FBQyxJQUFlLEdBQ3BCLENBQUVBLEVBQUUsQ0FBQyxHQUNMLENBQUVBLEVBQUUsQ0FBQyxHQUNMLENBQUVBLEVBQUUsQ0FBQyxHQUNMLENBQUVBLEVBQUUsQ0FBQyxDQUNOLENBQ0QsRUFBRUcsUUFBUTtBQUNYOztBQ3hDTyxJQUFNQyxnQkFBZ0I7QUFDdEIsSUFBTUMsaUJBQWlCO0FBQ3ZCLElBQU1DLGtCQUFrQjtBQUN4QixJQUFNQyxlQUFlOztBQ0U1QixJQUFNQyxZQUFZQSxDQUFDO0VBQ2xCQztFQUNBbkU7QUFDRCxNQUdZO0FBQUEsTUFBQW9FLGlCQUFBQyxrQkFBQUM7QUFFWCxPQUFBRixrQkFBSUQsU0FBUyxPQUFPLE9BQUEsUUFBQUMsb0JBQUEsVUFBaEJBLGdCQUFtQkcsUUFBUTtBQUFBLFFBQUFDLGFBQUF0RSwyQkFDVmlFLFNBQVMsT0FBTyxFQUFFSSxNQUFBLEdBQUFFO0FBQUEsUUFBQTtBQUF0QyxXQUFBRCxXQUFBbkUsRUFBQSxHQUFBLEVBQUFvRSxTQUFBRCxXQUFBbEUsRUFBQSxHQUFBQyxRQUE4QztBQUFBLGNBQW5DbUUsUUFBQUQsT0FBQTlEO0FBQ1YsY0FBTWdFLGlCQUEwQixPQUFPRCxNQUFNRSxpQkFBaUIsWUFBWUYsTUFBTUUsaUJBQWlCO0FBRWpHLFlBQUlDLFlBQW9CYjtBQUN4QixZQUFJYyxZQUFvQjtBQUN4QixZQUFJSixNQUFNSyxPQUFPQyxXQUFXLElBQUksR0FBRztBQUNsQyxjQUFJLENBQUNMLGdCQUFnQjtBQUNwQkUsd0JBQVlmO1VBQ2I7QUFDQWdCLHNCQUFZakMsV0FBVyxVQUFVO1FBQ2xDLE9BQU87QUFDTixjQUFJLENBQUM4QixnQkFBZ0I7QUFDcEJFLHdCQUFZWjtVQUNiO0FBQ0FhLHNCQUFZN0IsUUFBUU8sUUFBUWtCLE1BQU1LLE1BQU0sSUFBSXZCLFFBQVFrQixNQUFNTyxTQUFTLENBQUM7UUFDckU7QUFFQSxZQUFJQyxNQUFjckMsV0FBVyxTQUFTLEVBQ3BDeEQsUUFBUSxNQUFNeUYsU0FBUyxFQUN2QnpGLFFBQVEsTUFBTXFGLE1BQU1TLEVBQUUsRUFDdEI5RixRQUFRLE1BQU1xRixNQUFNVSxNQUFNLEVBQzFCL0YsUUFBUSxNQUFNNEQsUUFBUVUsS0FBSzBCLElBQUksSUFBSTdCLFFBQVFrQixNQUFNTyxTQUFTLENBQUMsQ0FBQztBQUM5REMsY0FBTVAsaUJBQWlCTyxJQUFJN0YsUUFBUSxNQUFNd0QsV0FBVyxTQUFTLENBQUMsSUFBSXFDLElBQUk3RixRQUFRLE1BQU0sRUFBRTtBQUV0RixjQUFNaUcsU0FBK0J0RixVQUFVMEUsTUFBTTlDLElBQUk7QUFDekQsWUFBSSxDQUFDMEQsUUFBUTtBQUNaO1FBQ0Q7QUFBQSxZQUFBQyxhQUFBckYsMkJBRW9Cb0YsTUFBQSxHQUFBRTtBQUFBLFlBQUE7QUFBcEIsZUFBQUQsV0FBQWxGLEVBQUEsR0FBQSxFQUFBbUYsU0FBQUQsV0FBQWpGLEVBQUEsR0FBQUMsUUFBNEI7QUFBQSxrQkFBakJrRixRQUFBRCxPQUFBN0U7QUFJVjhFLGtCQUFNQyxTQUFTYixTQUFTLEVBQUU1RCxLQUFLLFNBQVN3RSxNQUFNeEUsS0FBSyxPQUFPLElBQUlpRSxHQUFHO1VBQ2xFO1FBQUEsU0FBQW5ELEtBQUE7QUFBQXdELHFCQUFBdkQsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQXdELHFCQUFBdEQsRUFBQTtRQUFBO01BQ0Q7SUFBQSxTQUFBRixLQUFBO0FBQUF5QyxpQkFBQXhDLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUF5QyxpQkFBQXZDLEVBQUE7SUFBQTtFQUNEO0FBR0EsT0FBQW9DLG1CQUFJRixTQUFTLE9BQU8sT0FBQSxRQUFBRSxxQkFBQSxVQUFoQkEsaUJBQW1Cc0IsY0FBYztBQUFBLFFBQUFDLGFBQUExRiwyQkFDaEJpRSxTQUFTLE9BQU8sRUFBRXdCLFlBQUEsR0FBQUU7QUFBQSxRQUFBO0FBQXRDLFdBQUFELFdBQUF2RixFQUFBLEdBQUEsRUFBQXdGLFNBQUFELFdBQUF0RixFQUFBLEdBQUFDLFFBQW9EO0FBQUEsY0FBekNtRSxRQUFBbUIsT0FBQWxGO0FBQ1YsWUFBSWtFLFlBQW9CYjtBQUN4QixZQUFJYyxZQUFvQjtBQUN4QixZQUFJSixNQUFNSyxPQUFPQyxXQUFXLElBQUksR0FBRztBQUNsQ0gsc0JBQVlmO0FBQ1pnQixzQkFBWWpDLFdBQVcsVUFBVTtRQUNsQyxPQUFPO0FBQ05nQyxzQkFBWVo7QUFDWmEsc0JBQVk3QixRQUFRTyxRQUFRa0IsTUFBTUssTUFBTSxJQUFJdkIsUUFBUWtCLE1BQU1PLFNBQVMsQ0FBQztRQUNyRTtBQUVBLFlBQUlDLE1BQWNyQyxXQUFXLGtCQUFrQixFQUM3Q3hELFFBQVEsTUFBTXlGLFNBQVMsRUFDdkJ6RixRQUFRLE1BQU1xRixNQUFNUyxFQUFFLEVBQ3RCOUYsUUFBUSxNQUFNcUYsTUFBTVUsTUFBTSxFQUMxQi9GLFFBQVEsTUFBTTRELFFBQVFVLEtBQUswQixJQUFJLElBQUk3QixRQUFRa0IsTUFBTU8sU0FBUyxDQUFDLENBQUM7QUFDOURDLGNBQU1BLElBQUk3RixRQUFRLE1BQU0sRUFBRTtBQUUxQixjQUFNaUcsU0FBK0J0RixVQUFVMEUsTUFBTW9CLE1BQU07QUFDM0QsWUFBSSxDQUFDUixRQUFRO0FBQ1o7UUFDRDtBQUFBLFlBQUFTLGFBQUE3RiwyQkFFb0JvRixNQUFBLEdBQUFVO0FBQUEsWUFBQTtBQUFwQixlQUFBRCxXQUFBMUYsRUFBQSxHQUFBLEVBQUEyRixTQUFBRCxXQUFBekYsRUFBQSxHQUFBQyxRQUE0QjtBQUFBLGtCQUFqQmtGLFFBQUFPLE9BQUFyRjtBQUlWOEUsa0JBQU1DLFNBQVNiLFNBQVMsRUFBRTVELEtBQUssU0FBU3dFLE1BQU14RSxLQUFLLE9BQU8sSUFBSWlFLEdBQUc7VUFDbEU7UUFBQSxTQUFBbkQsS0FBQTtBQUFBZ0UscUJBQUEvRCxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBZ0UscUJBQUE5RCxFQUFBO1FBQUE7TUFDRDtJQUFBLFNBQUFGLEtBQUE7QUFBQTZELGlCQUFBNUQsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQTZELGlCQUFBM0QsRUFBQTtJQUFBO0VBQ0Q7QUFHQSxPQUFBcUMsbUJBQUlILFNBQVMsT0FBTyxPQUFBLFFBQUFHLHFCQUFBLFVBQWhCQSxpQkFBbUIyQixnQkFBZ0I7QUFBQSxRQUFBQyx1QkFBQUM7QUFDdEMsVUFBTXZFLFFBQUFzRSx3QkFBTy9CLFNBQVMsT0FBTyxFQUFFOEIsb0JBQUEsUUFBQUMsMEJBQUEsU0FBQSxTQUFsQkEsc0JBQWtDRTtBQUMvQyxVQUFNQyxVQUFBRix5QkFBU2hDLFNBQVMsT0FBTyxFQUFFOEIsb0JBQUEsUUFBQUUsMkJBQUEsU0FBQSxTQUFsQkEsdUJBQWtDRTtBQUVqRCxRQUFJLENBQUNBLFVBQVUsQ0FBQ3pFLE1BQU07QUFDckI7SUFDRDtBQUVBLFVBQU1zRCxNQUFjckMsV0FBVyxRQUFRO0FBRXZDLFVBQU15QyxTQUErQnRGLFVBQVU0QixJQUFJO0FBQ25ELFFBQUksQ0FBQzBELFFBQVE7QUFDWjtJQUNEO0FBRUEsVUFBTVQsWUFBWWQ7QUFBQSxRQUFBdUMsYUFBQXBHLDJCQUVFb0YsTUFBQSxHQUFBaUI7QUFBQSxRQUFBO0FBQXBCLFdBQUFELFdBQUFqRyxFQUFBLEdBQUEsRUFBQWtHLFNBQUFELFdBQUFoRyxFQUFBLEdBQUFDLFFBQTRCO0FBQUEsY0FBakJrRixRQUFBYyxPQUFBNUY7QUFJVjhFLGNBQU1DLFNBQVNiLFNBQVMsRUFBRTVELEtBQUssU0FBU3dFLE1BQU14RSxLQUFLLE9BQU8sSUFBSWlFLEdBQUc7TUFDbEU7SUFBQSxTQUFBbkQsS0FBQTtBQUFBdUUsaUJBQUF0RSxFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBdUUsaUJBQUFyRSxFQUFBO0lBQUE7RUFDRDtBQUNEOztBQy9HQSxJQUFBdUUscUJBQXdCckksUUFBQSxpQkFBQTtBQUV4QixJQUFNc0ksT0FBQSxHQUFjRCxtQkFBQUUsV0FBQSxlQUFBeEgsT0FBaUNqQixPQUFPLENBQUU7O0FDRDlELElBQU0wSSxzQkFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFzQixXQUFPQyxTQUFvQjtBQUN0RCxVQUFNQyxTQUF5QztNQUM5Q0MsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTSxDQUFDLGdCQUFnQjtNQUN2Qkw7TUFDQU0sU0FBUztNQUNUQyxRQUFRO0lBQ1Q7QUFFQSxXQUFBLE1BQWFaLElBQUlqSSxJQUFJdUksTUFBTTtFQUM1QixDQUFBO0FBQUEsU0FBQSxTQVpNSixxQkFBQVcsSUFBQTtBQUFBLFdBQUFWLEtBQUFXLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNDTixJQUFNQyxrQkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFiLGtCQUFrQixXQUFPYyxTQUErQjtBQUM3RCxVQUFNWixTQUFxRTtNQUMxRUMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZlUsTUFBTSxDQUFDLFVBQVUsY0FBYztNQUMvQkQ7TUFDQUUsU0FBUztNQUNUQyxRQUFRLENBQUMsTUFBTSxVQUFVLFVBQVUsZ0JBQWdCLGFBQWEsTUFBTTtNQUN0RUMsU0FBUztNQUNUQyxXQUFXTDtNQUNYTSxRQUFRLENBQUMsTUFBTSxVQUFVLFVBQVUsYUFBYSxRQUFRO01BQ3hEYixTQUFTO01BQ1RDLFFBQVE7SUFDVDtBQUVBLFdBQUEsTUFBYVosSUFBSWpJLElBQUl1SSxNQUFNO0VBQzVCLENBQUE7QUFBQSxTQUFBLFNBakJNVSxpQkFBQVMsS0FBQTtBQUFBLFdBQUFSLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNHTixJQUFNVyxrQkFBbUJwSSxjQUEyQjtBQUVuRCxRQUFNQyxZQUFzQ0Ysa0JBQWtCQyxRQUFRO0FBR3RFLFFBQU1xSSxRQUFrQnhKLE9BQU95SixLQUFLckksU0FBUztBQUM3QyxNQUFJLENBQUNvSSxNQUFNdEosUUFBUTtBQUNsQjtFQUNEO0FBRUEsUUFBTXdKLFdBQW9DLENBQUE7QUFNMUMsV0FBQUMsTUFBQSxHQUFBQyxTQUFzQkosT0FBQUcsTUFBQUMsT0FBQTFKLFFBQUF5SixPQUFPO0FBQTdCLFVBQVd6QixVQUFBMEIsT0FBQUQsR0FBQTtBQUNWRCxhQUFTQSxTQUFTeEosTUFBTSxJQUFBK0gsa0NBQUksYUFBMkI7QUFDdEQsVUFBSTtBQUNILGNBQU0xQyxXQUFBLE1BQWtCd0Msb0JBQW9CRyxPQUFPO0FBQ25ENUMsa0JBQVU7VUFBQ0M7VUFBVW5FO1FBQVMsQ0FBQztNQUNoQyxTQUFTeUksT0FBZ0I7QUFDeEJDLGdCQUFRRCxNQUFNLDZCQUE2QkEsS0FBSztNQUNqRDtJQUNELENBQUE7RUFDRDtBQUdBLFdBQVNFLElBQUksR0FBR0EsSUFBSVAsTUFBTXRKLFFBQVE2SixLQUFLO0FBQ3RDLFVBQU1oQixVQUFVUyxNQUFNUSxPQUFPLEdBQUcsRUFBRTtBQUNsQyxRQUFJLENBQUNqQixRQUFRN0ksUUFBUTtBQUNwQjtJQUNEO0FBRUF3SixhQUFTQSxTQUFTeEosTUFBTSxJQUFBK0gsa0NBQUksYUFBMkI7QUFDdEQsVUFBSTtBQUNILGNBQU0xQyxXQUFBLE1BQWtCc0QsZ0JBQWdCRSxPQUFPO0FBQy9DekQsa0JBQVU7VUFBQ0M7VUFBVW5FO1FBQVMsQ0FBQztNQUNoQyxTQUFTeUksT0FBZ0I7QUFDeEJDLGdCQUFRRCxNQUFNLDZCQUE2QkEsS0FBSztNQUNqRDtJQUNELENBQUE7RUFDRDtBQUVBLE9BQUE1QixrQkFBTSxhQUFZO0FBQ2pCLGFBQUFnQyxNQUFBLEdBQUFDLFlBQXNCUixVQUFBTyxNQUFBQyxVQUFBaEssUUFBQStKLE9BQVU7QUFBaEMsWUFBV0UsVUFBQUQsVUFBQUQsR0FBQTtBQUNWLFVBQUk7QUFDSCxjQUFNRSxRQUFRO01BQ2YsUUFBUTtNQUFDO0lBQ1Y7RUFDRCxDQUFBLEVBQUc7QUFDSjs7QUN2REEsSUFBTTtFQUFDQztFQUFVQztBQUFpQixJQUFJM0ssR0FBR0MsT0FBT0MsSUFBSTtBQUVwRCxJQUFNMEssVUFBVUEsTUFBWTtBQUMzQixNQUFJQyxTQUFrQjtBQUV0QjdLLEtBQUc4SyxLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLFlBQVl2SixVQUFnQjtBQUNwRSxRQUFJb0osUUFBUTtBQUNYO0lBQ0Q7QUFDQUEsYUFBUztBQUlULFFBQUlILGFBQWEsVUFBVUMsc0JBQXNCLEdBQUc7QUFDbkRsSixpQkFBV0EsU0FBU0ksS0FBSyxhQUFhO0lBQ3ZDO0FBRUFKLGVBQVdBLFNBQVNzSixJQUFJLGdCQUFnQjtBQUV4Q2xCLG9CQUFnQnBJLFFBQVE7RUFDekIsQ0FBQztBQUNGOztBQ3JCQSxJQUFJLENBQUMsQ0FBQyxRQUFRLFFBQVEsRUFBRWQsU0FBU1gsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLENBQUMsR0FBRztBQUM1RDBLLFVBQVE7QUFDVDsiLAogICJuYW1lcyI6IFsiY29udHJpYnV0aW9uc1BhZ2VBbGlhcyIsICJ1c2VyTmFtZXNwYWNlTnVtYmVycyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzIiwgIndnTmFtZXNwYWNlSWRzIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAidXNlck5hbWVzcGFjZVRpdGxlczIiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJuYW1lc3BhY2UiLCAiaWQiLCAiaW5jbHVkZXMiLCAiY29uY2F0IiwgInV0aWwiLCAiZXNjYXBlUmVnRXhwIiwgInJlcGxhY2UiLCAidXNlck5hbWVzcGFjZVRpdGxlcyIsICJ1c2VyVGl0bGVSZWdleCIsICJSZWdFeHAiLCAiam9pbiIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgImFydGljbGVSZWdleCIsICJzY3JpcHRSZWdleCIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJ1c2VyTGlua3MiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiX3VzZXIiLCAiX3VzZXJMaW5rcyRfdXNlciIsICJlbGVtZW50IiwgInZhbHVlIiwgIiRlbGVtZW50IiwgIiQiLCAiaGFzQ2xhc3MiLCAicGFyZW50IiwgImhyZWYiLCAiYXR0ciIsICJpc0lQdjZBZGRyZXNzIiwgIk13VXJpIiwgImhvc3QiLCAibG9jYXRpb24iLCAicGFnZVRpdGxlIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlckV4ZWNBcnJheSIsICJ1c2VyIiwgInNsaWNlIiwgInRvVXBwZXJDYXNlIiwgImVyciIsICJlIiwgImYiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJpbmZpbml0eSIsICJsb2NhbGl6ZSIsICJlbiIsICJCbG9ja2VkIiwgIkxvY2tlZCIsICJwYXJ0aWFsIiwgInpoIiwgImQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFkZFplcm8iLCAidiIsICJpbkhvdXJzIiwgIm1zIiwgIm1tIiwgIk1hdGgiLCAiZmxvb3IiLCAiaGgiLCAiZGQiLCAicGFyc2VUUyIsICJzdHJpbmciLCAibSIsICJEYXRlIiwgIlVUQyIsICJnZXRUaW1lIiwgInVzZXJsaW5rSW5kZWYiLCAidXNlcmxpbmtMb2NrZWQiLCAidXNlcmxpbmtQYXJ0aWFsIiwgInVzZXJsaW5rVGVtcCIsICJtYXJrTGlua3MiLCAicmVzcG9uc2UiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgIl9yZXNwb25zZSRxdWVyeTIiLCAiX3Jlc3BvbnNlJHF1ZXJ5MyIsICJibG9ja3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiYmxvY2siLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImNsYXNzTmFtZSIsICJibG9ja1RpbWUiLCAiZXhwaXJ5IiwgInN0YXJ0c1dpdGgiLCAidGltZXN0YW1wIiwgInRpcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIiRsaW5rcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICIkbGluayIsICJhZGRDbGFzcyIsICJnbG9iYWxibG9ja3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidGFyZ2V0IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImdsb2JhbHVzZXJpbmZvIiwgIl9yZXNwb25zZSRxdWVyeSRnbG9iYSIsICJfcmVzcG9uc2UkcXVlcnkkZ2xvYmEyIiwgIm5hbWUiLCAibG9ja2VkIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgInF1ZXJ5R2xvYmFsVXNlckluZm8iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJndWl1c2VyIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibWV0YSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlVc2VyQmxvY2tzIiwgIl9yZWYyIiwgImJrdXNlcnMiLCAibGlzdCIsICJia2xpbWl0IiwgImJrcHJvcCIsICJiZ2xpbWl0IiwgImJndGFyZ2V0cyIsICJiZ3Byb3AiLCAiX3gyIiwgIm1hcmtCbG9ja2VkVXNlciIsICJ1c2VycyIsICJrZXlzIiwgInByb21pc2VzIiwgIl9pMiIsICJfdXNlcnMiLCAiZXJyb3IiLCAiY29uc29sZSIsICJpIiwgInNwbGljZSIsICJfaTMiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiYWRkSG9vayIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAibWFya0Jsb2NrZWQiXQp9Cg==
