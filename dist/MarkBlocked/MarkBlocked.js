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
//! src/MarkBlocked/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    infinity: (0, import_ext_gadget.localize)({
      en: "infinity",
      "zh-hans": "无限期",
      "zh-hant": "無限期"
    }),
    Blocked: (0, import_ext_gadget.localize)({
      en: "; $5blocked ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5封鎖$1：$3（$4前）"
    }),
    "Globally Blocked": (0, import_ext_gadget.localize)({
      en: "; $5blocked globally ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5全域封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5全域封鎖$1：$3（$4前）"
    }),
    Locked: (0, import_ext_gadget.localize)({
      en: "; Locked",
      "zh-hans": "；已全域锁定",
      "zh-hant": "；已全域鎖定"
    }),
    partial: (0, import_ext_gadget.localize)({
      en: "partial ",
      zh: "部分"
    }),
    d: (0, import_ext_gadget.localize)({
      en: "day",
      zh: "天"
    }),
    s: (0, import_ext_gadget.localize)({
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
var loading = "MarkBlocked-module__loading_xtAfOG";
var userlink = "MarkBlocked-module__userlink_xtAfOG";
var userlinkIndef = "MarkBlocked-module__userlinkIndef_xtAfOG";
var userlinkLock = "MarkBlocked-module__userlinkLock_xtAfOG";
var userlinkPartial = "MarkBlocked-module__userlinkPartial_xtAfOG";
var userlinkTemp = "MarkBlocked-module__userlinkTemp_xtAfOG";
//! src/MarkBlocked/options.json
var contributionsPageAlias = "Special:Contributions";
var userNamespaceNumbers = [2, 3];
var version = "2.0";
//! src/MarkBlocked/modules/util/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("MarkBlocked/".concat(version));
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var import_ext_gadget3 = require("ext.gadget.Util");
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
        if (new import_ext_gadget3.MwUri(href).host !== location.host) {
          continue;
        }
      } catch {
        try {
          if (new import_ext_gadget3.MwUri(location.href + href).host !== location.host) {
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
      $element.addClass(userlink);
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
//! src/MarkBlocked/modules/markBlockedUser.ts
var markBlockedUser = ($content) => {
  const userLinks = generateUserLinks($content);
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  $content.addClass(loading);
  const markLinks = (response) => {
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
      const className = userlinkLock;
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
  const promises = [];
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        list: ["blocks", "globalblocks"],
        bkusers,
        bgtargets: bkusers,
        bklimit: 100,
        bglimit: 100,
        bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
        bgprop: ["by", "expiry", "reason", "timestamp"],
        smaxage: 600,
        maxage: 600
      };
      try {
        const response = yield api.get(params);
        markLinks(response);
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    });
  }
  for (var _i2 = 0, _users = users; _i2 < _users.length; _i2++) {
    const guiuser = _users[_i2];
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        meta: ["globaluserinfo"],
        guiuser,
        smaxage: 600,
        maxage: 600
      };
      try {
        const response = yield api.get(params);
        markLinks(response);
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
  })().then(() => {
    $content.removeClass(loading);
  });
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3BhcnNlVGltZS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyIsICJzcmMvTWFya0Jsb2NrZWQvb3B0aW9ucy5qc29uIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aW5maW5pdHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnaW5maW5pdHknLFxuXHRcdFx0J3poLWhhbnMnOiAn5peg6ZmQ5pyfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eEoemZkOacnycsXG5cdFx0fSksXG5cdFx0QmxvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdCdHbG9iYWxseSBCbG9ja2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCBnbG9iYWxseSAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15YWo5Z+f5bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlhajln5/lsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdExvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7IExvY2tlZCcsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvlt7Llhajln5/plIHlrponLFxuXHRcdFx0J3poLWhhbnQnOiAn77yb5bey5YWo5Z+f6Y6W5a6aJyxcblx0XHR9KSxcblx0XHRwYXJ0aWFsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3BhcnRpYWwgJyxcblx0XHRcdHpoOiAn6YOo5YiGJyxcblx0XHR9KSxcblx0XHRkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RheScsXG5cdFx0XHR6aDogJ+WkqScsXG5cdFx0fSksXG5cdFx0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdzZWNvbmQnLFxuXHRcdFx0emg6ICfnp5InLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBhZGRaZXJvID0gKHY6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdHJldHVybiB2IDw9IDkgPyBgMCR7dn1gIDogYCR7dn1gO1xufTtcblxuY29uc3QgaW5Ib3VycyA9IChtczogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0bGV0IG1tOiBudW1iZXIgPSBNYXRoLmZsb29yKG1zIC8gNmU0KTtcblx0aWYgKCFtbSkge1xuXHRcdHJldHVybiBgJHtNYXRoLmZsb29yKG1zIC8gMWUzKX0ke2dldE1lc3NhZ2UoJ3MnKX1gO1xuXHR9XG5cblx0bGV0IGhoOiBudW1iZXIgPSBNYXRoLmZsb29yKG1tIC8gNjApO1xuXHRtbSAlPSA2MDtcblxuXHRjb25zdCBkZDogbnVtYmVyID0gTWF0aC5mbG9vcihoaCAvIDI0KTtcblx0aGggJT0gMjQ7XG5cblx0aWYgKGRkKSB7XG5cdFx0cmV0dXJuIGAke2RkICsgKGRkIDwgMTAgPyBgLiR7YWRkWmVybyhoaCl9YCA6ICcnKX0ke2dldE1lc3NhZ2UoJ2QnKX1gO1xuXHR9XG5cblx0cmV0dXJuIGAke2hofToke2FkZFplcm8obW0pfWA7XG59O1xuXG4vLyAyMDA4MTIyNjIyMDYwNSBvciAyMDA4LTAxLTI2VDA2OjM0OjE5WiAtPiBudW1iZXJcbmNvbnN0IHBhcnNlVFMgPSAoc3RyaW5nOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRjb25zdCBtOiBSZWdFeHBNYXRjaEFycmF5ID0gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1xcRC9nLCAnJylcblx0XHQubWF0Y2goLyhcXGRcXGRcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKS8pIGFzIFJlZ0V4cE1hdGNoQXJyYXk7XG5cblx0cmV0dXJuIG5ldyBEYXRlKFxuXHRcdERhdGUuVVRDKFxuXHRcdFx0KyhtWzFdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bMl0gYXMgc3RyaW5nKSAtIDEsXG5cdFx0XHQrKG1bM10gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs0XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzVdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNl0gYXMgc3RyaW5nKVxuXHRcdClcblx0KS5nZXRUaW1lKCk7XG59O1xuXG5leHBvcnQge2luSG91cnMsIHBhcnNlVFN9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fbG9hZGluZ194dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGluayA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua194dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0luZGVmID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rSW5kZWZfeHRBZk9HXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtMb2NrID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rTG9ja194dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1BhcnRpYWwgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtQYXJ0aWFsX3h0QWZPR1wiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rVGVtcCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua1RlbXBfeHRBZk9HXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJsb2FkaW5nXCI6IGxvYWRpbmcsXG4gIFwidXNlcmxpbmtcIjogdXNlcmxpbmssXG4gIFwidXNlcmxpbmtJbmRlZlwiOiB1c2VybGlua0luZGVmLFxuICBcInVzZXJsaW5rTG9ja1wiOiB1c2VybGlua0xvY2ssXG4gIFwidXNlcmxpbmtQYXJ0aWFsXCI6IHVzZXJsaW5rUGFydGlhbCxcbiAgXCJ1c2VybGlua1RlbXBcIjogdXNlcmxpbmtUZW1wXG59O1xuICAgICAgIiwgIntcblx0XCJjb250cmlidXRpb25zUGFnZUFsaWFzXCI6IFwiU3BlY2lhbDpDb250cmlidXRpb25zXCIsXG5cdFwidXNlck5hbWVzcGFjZU51bWJlcnNcIjogWzIsIDNdLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya0Jsb2NrZWQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge013VXJpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9IGZyb20gJy4vZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzJztcbmltcG9ydCB7dXNlcmxpbmt9IGZyb20gJy4uL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcblxuLy8gR2V0IGFsbCBhbGlhc2VzIGZvciB1c2VyOiAmIHVzZXJfdGFsazpcbmNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzKCk7XG4vLyBSZWdFeHAgZm9yIGFsbCB0aXRsZXMgdGhhdCBhcmUgIFVzZXI6fCBVc2VyX3RhbGs6IHwgU3BlY2lhbDpDb250cmlidXRpb25zLyAoZm9yIHVzZXJzY3JpcHRzKVxuY29uc3QgdXNlclRpdGxlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdGBeKCR7dXNlck5hbWVzcGFjZVRpdGxlcy5qb2luKCd8Jyl9fCR7T1BUSU9OUy5jb250cmlidXRpb25zUGFnZUFsaWFzfVxcXFwvKSsoW15cXFxcLyNdKykkYCxcblx0J2knXG4pO1xuXG4vLyBSZWdFeHAgZm9yIGxpbmtzXG4vLyBhcnRpY2xlUmVnZXggYWxzbyBtYXRjaGVzIGV4dGVybmFsIGxpbmtzIGluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIG5vcGluZyB0ZW1wbGF0ZVxuY29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShbXiNdKylgKTtcbmNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShbXiMmXSspYCk7XG5cbmNvbnN0IGdlbmVyYXRlVXNlckxpbmtzID0gKCRjb250ZW50OiBKUXVlcnkpOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IHt9O1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kKCdhJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKFxuXHRcdFx0JGVsZW1lbnQuaGFzQ2xhc3MoJ213LWNoYW5nZXNsaXN0LWRhdGUnKSB8fFxuXHRcdFx0JGVsZW1lbnQuaGFzQ2xhc3MoJ2V4dC1kaXNjdXNzaW9udG9vbHMtaW5pdC10aW1lc3RhbXBsaW5rJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1oaXN0b3J5LXVuZG8nKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LXJvbGxiYWNrLWxpbmsnKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignaHJlZicpO1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoaHJlZi5yZXBsYWNlKC9eKD86aHR0cHM/OlxcL1xcLykvaSwgJycpKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHQvLyBNYXliZSBhYnNvbHV0ZSBVUkxcblx0XHRcdGlmIChuZXcgTXdVcmkoaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIE1heWJlIHJlbGF0aXZlIFVSTFxuXHRcdFx0XHRpZiAobmV3IE13VXJpKGxvY2F0aW9uLmhyZWYgKyBocmVmKS5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgcGFnZVRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0cGFnZVRpdGxlID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSBpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0cGFnZVRpdGxlID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwYWdlVGl0bGUgPSBkZWNvZGVVUklDb21wb25lbnQocGFnZVRpdGxlKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cblx0XHRjb25zdCB1c2VyRXhlY0FycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gdXNlclRpdGxlUmVnZXguZXhlYyhwYWdlVGl0bGUpO1xuXHRcdGlmICghdXNlckV4ZWNBcnJheSB8fCB0eXBlb2YgdXNlckV4ZWNBcnJheVsyXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCB1c2VyOiBzdHJpbmcgPSB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDEpO1xuXHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3ModXNlcikpIHtcblx0XHRcdHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgLi4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0JGVsZW1lbnQuYWRkQ2xhc3ModXNlcmxpbmsgYXMgc3RyaW5nKTtcblxuXHRcdHVzZXJMaW5rc1t1c2VyXSA/Pz0gW107XG5cblx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSlbXG5cdFx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSkubGVuZ3RoXG5cdFx0XSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdHJldHVybiB1c2VyTGlua3M7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlckxpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBbXTtcblxuXHRmb3IgKGNvbnN0IFtuYW1lc3BhY2UsIGlkXSBvZiBPYmplY3QuZW50cmllcyh3Z05hbWVzcGFjZUlkcykpIHtcblx0XHRpZiAoIU9QVElPTlMudXNlck5hbWVzcGFjZU51bWJlcnMuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR1c2VyTmFtZXNwYWNlVGl0bGVzW3VzZXJOYW1lc3BhY2VUaXRsZXMubGVuZ3RoXSA9IGAke213LnV0aWwuZXNjYXBlUmVnRXhwKG5hbWVzcGFjZS5yZXBsYWNlKC9fL2csICcgJykpfTpgOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdHJldHVybiB1c2VyTmFtZXNwYWNlVGl0bGVzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9O1xuIiwgImltcG9ydCB7aW5Ib3VycywgcGFyc2VUU30gZnJvbSAnLi91dGlsL3BhcnNlVGltZSc7XG5pbXBvcnQge2xvYWRpbmcsIHVzZXJsaW5rLCB1c2VybGlua0luZGVmLCB1c2VybGlua0xvY2ssIHVzZXJsaW5rUGFydGlhbCwgdXNlcmxpbmtUZW1wfSBmcm9tICcuL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL3V0aWwvYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlciA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0JGNvbnRlbnQuYWRkQ2xhc3MobG9hZGluZyBhcyBzdHJpbmcpO1xuXG5cdC8vIEFQSSByZXF1ZXN0XG5cdHR5cGUgUmVzcG9uc2UgPSB7XG5cdFx0cXVlcnk6IHtcblx0XHRcdGJsb2Nrcz86IEFycmF5PHtcblx0XHRcdFx0Ynk6IHN0cmluZztcblx0XHRcdFx0ZXhwaXJ5OiBzdHJpbmc7XG5cdFx0XHRcdHJlYXNvbjogc3RyaW5nO1xuXHRcdFx0XHRyZXN0cmljdGlvbnM6IHN0cmluZyB8IHN0cmluZ1tdO1xuXHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0fT47XG5cdFx0XHRnbG9iYWxibG9ja3M/OiBBcnJheTx7XG5cdFx0XHRcdGJ5OiBzdHJpbmc7XG5cdFx0XHRcdGV4cGlyeTogc3RyaW5nO1xuXHRcdFx0XHRyZWFzb246IHN0cmluZztcblx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdHRhcmdldDogc3RyaW5nO1xuXHRcdFx0fT47XG5cdFx0XHRnbG9iYWx1c2VyaW5mbz86IHtcblx0XHRcdFx0bmFtZT86IHN0cmluZztcblx0XHRcdFx0bG9ja2VkPzogYm9vbGVhbjtcblx0XHRcdH07XG5cdFx0fTtcblx0fTtcblxuXHQvLyBDYWxsYmFjazogcmVjZWl2ZSBkYXRhIGFuZCBtYXJrIGxpbmtzXG5cdGNvbnN0IG1hcmtMaW5rcyA9IChyZXNwb25zZTogUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdFx0Y29uc3QgaXNQYXJ0aWFsQmxjb2s6IGJvb2xlYW4gPSB0eXBlb2YgYmxvY2sucmVzdHJpY3Rpb25zID09PSAnc3RyaW5nJyAmJiBibG9jay5yZXN0cmljdGlvbnMgIT09ICcnOyAvLyBQYXJ0aWFsIGJsb2NrXG5cblx0XHRcdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRcdFx0bGV0IGJsb2NrVGltZTogc3RyaW5nID0gJyc7XG5cdFx0XHRcdGlmIChibG9jay5leHBpcnkuc3RhcnRzV2l0aCgnaW4nKSkge1xuXHRcdFx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rSW5kZWYgYXMgc3RyaW5nO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rVGVtcCBhcyBzdHJpbmc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0Jsb2NrZWQnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0XHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdFx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2Jsb2NrLnVzZXJdO1xuXHRcdFx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSB1c2VybGlua1BhcnRpYWwgYXMgc3RyaW5nO1xuXHRcdFx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRcdFx0aWYgKGJsb2NrLmV4cGlyeS5zdGFydHNXaXRoKCdpbicpKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHRcdFx0YmxvY2tUaW1lID0gZ2V0TWVzc2FnZSgnaW5maW5pdHknKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua1RlbXAgYXMgc3RyaW5nO1xuXHRcdFx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0dsb2JhbGx5IEJsb2NrZWQnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0XHRcdHRpcCA9IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdFx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2Jsb2NrLnRhcmdldF07XG5cdFx0XHRcdGlmICghJGxpbmtzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0Y29uc3QgdXNlciA9IHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbHVzZXJpbmZvPy5uYW1lO1xuXHRcdFx0Y29uc3QgbG9ja2VkID0gcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsdXNlcmluZm8/LmxvY2tlZDtcblxuXHRcdFx0aWYgKCFsb2NrZWQgfHwgIXVzZXIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0xvY2tlZCcpO1xuXG5cdFx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW3VzZXJdO1xuXHRcdFx0aWYgKCEkbGlua3MpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSB1c2VybGlua0xvY2sgYXMgc3RyaW5nO1xuXG5cdFx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0dHlwZSBCZ3Byb3AgPSAnYWRkcmVzcycgfCAnYnknIHwgJ2V4cGlyeScgfCAnaWQnIHwgJ3JhbmdlJyB8ICdyZWFzb24nIHwgJ3RhcmdldCcgfCAndGltZXN0YW1wJztcblxuXHR0eXBlIEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkID0gT21pdDxBcGlRdWVyeUdsb2JhbEJsb2Nrc1BhcmFtcywgJ2JncHJvcCc+ICYge1xuXHRcdGJndGFyZ2V0cz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXHRcdGJncHJvcD86IEJncHJvcCB8IEJncHJvcFtdO1xuXHR9O1xuXG5cdC8vIExvY2FsIGFuZCBHbG9iYWwgTG9ja1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlCbG9ja3NQYXJhbXMgJiBBcGlRdWVyeUdsb2JhbEJsb2Nrc1BhcmFtc1JlZGVmaW5lZCA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsaXN0OiBbJ2Jsb2NrcycsICdnbG9iYWxibG9ja3MnXSxcblx0XHRcdFx0Ymt1c2Vycyxcblx0XHRcdFx0Ymd0YXJnZXRzOiBia3VzZXJzLFxuXHRcdFx0XHRia2xpbWl0OiAxMDAsXG5cdFx0XHRcdGJnbGltaXQ6IDEwMCxcblx0XHRcdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0XHRcdGJncHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3RpbWVzdGFtcCddLFxuXHRcdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRcdG1heGFnZTogNjAwLFxuXHRcdFx0fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRcdG1hcmtMaW5rcyhyZXNwb25zZSBhcyBSZXNwb25zZSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBHbG9iYWwgTG9ja1xuXHRmb3IgKGNvbnN0IGd1aXVzZXIgb2YgdXNlcnMpIHtcblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2UgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0bWV0YTogWydnbG9iYWx1c2VyaW5mbyddLFxuXHRcdFx0XHRndWl1c2VyLFxuXHRcdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRcdG1heGFnZTogNjAwLFxuXHRcdFx0fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRcdG1hcmtMaW5rcyhyZXNwb25zZSBhcyBSZXNwb25zZSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0JGNvbnRlbnQucmVtb3ZlQ2xhc3MobG9hZGluZyBhcyBzdHJpbmcpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7bWFya0Jsb2NrZWRVc2VyfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkVXNlcn0gZnJvbSAnLi9tYXJrQmxvY2tlZFVzZXInO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya0Jsb2NrZWQoJGNvbnRlbnQpOiB2b2lkIHtcblx0XHRpZiAoaXNJbml0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlzSW5pdCA9IHRydWU7XG5cblx0XHQvLyBPbiB0aGUgZmlyc3QgY2FsbCBhZnRlciBpbml0aWFsIHBhZ2UgbG9hZCwgY29udGFpbmVyIGlzIG13LnV0aWwuJGNvbnRlbnRcblx0XHQvLyBVc2VkIHRvIGxpbWl0IG1haW5zcGFjZSBhY3Rpdml0eSB0byBqdXN0IHRoZSBkaWZmIGRlZmluaXRpb25zXG5cdFx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRcdCRjb250ZW50ID0gJGNvbnRlbnQuZmluZCgnLmRpZmYtdGl0bGUnKTtcblx0XHR9XG5cdFx0Ly8gT24gcGFnZSBsb2FkLCBhbHNvIHVwZGF0ZSB0aGUgbmFtZXNwYWNlIHRhYlxuXHRcdCRjb250ZW50ID0gJGNvbnRlbnQuYWRkKCcjY2EtbnN0YWItdXNlcicpO1xuXG5cdFx0bWFya0Jsb2NrZWRVc2VyKCRjb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgImltcG9ydCB7YWRkSG9va30gZnJvbSAnLi9tb2R1bGVzL2FkZEhvb2snO1xuXG5pZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpKSkge1xuXHRhZGRIb29rKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsV0FBQSxHQUFVSCxrQkFBQUksVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNOLGtCQUFBSSxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QscUJBQUEsR0FBb0JMLGtCQUFBSSxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFNBQUEsR0FBUVAsa0JBQUFJLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsVUFBQSxHQUFTUixrQkFBQUks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RCxVQUFBRCxHQUFBO0FBQ1YsVUFBSTtBQUNILGNBQU1FLFFBQVE7TUFDZixRQUFRO01BQUM7SUFDVjtFQUNELENBQUEsRUFBRyxFQUFFQyxLQUFLLE1BQU07QUFJZnBHLGFBQVNxRyxZQUFZM0ksT0FBaUI7RUFDdkMsQ0FBQztBQUNGOztBQzNOQSxJQUFNO0VBQUM0STtFQUFVQztBQUFpQixJQUFJOUgsR0FBR0MsT0FBT0MsSUFBSTtBQUVwRCxJQUFNNkgsVUFBVUEsTUFBWTtBQUMzQixNQUFJQyxTQUFrQjtBQUV0QmhJLEtBQUdpSSxLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLFlBQVk1RyxVQUFnQjtBQUNwRSxRQUFJeUcsUUFBUTtBQUNYO0lBQ0Q7QUFDQUEsYUFBUztBQUlULFFBQUlILGFBQWEsVUFBVUMsc0JBQXNCLEdBQUc7QUFDbkR2RyxpQkFBV0EsU0FBU0ksS0FBSyxhQUFhO0lBQ3ZDO0FBRUFKLGVBQVdBLFNBQVMyRyxJQUFJLGdCQUFnQjtBQUV4Q3pFLG9CQUFnQmxDLFFBQVE7RUFDekIsQ0FBQztBQUNGOztBQ3JCQSxJQUFJLENBQUMsQ0FBQyxRQUFRLFFBQVEsRUFBRVosU0FBU1gsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLENBQUMsR0FBRztBQUM1RDZILFVBQVE7QUFDVDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiaW5maW5pdHkiLCAibG9jYWxpemUiLCAiZW4iLCAiQmxvY2tlZCIsICJMb2NrZWQiLCAicGFydGlhbCIsICJ6aCIsICJkIiwgInMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFkZFplcm8iLCAidiIsICJjb25jYXQiLCAiaW5Ib3VycyIsICJtcyIsICJtbSIsICJNYXRoIiwgImZsb29yIiwgImhoIiwgImRkIiwgInBhcnNlVFMiLCAic3RyaW5nIiwgIm0iLCAicmVwbGFjZSIsICJtYXRjaCIsICJEYXRlIiwgIlVUQyIsICJnZXRUaW1lIiwgImxvYWRpbmciLCAidXNlcmxpbmsiLCAidXNlcmxpbmtJbmRlZiIsICJ1c2VybGlua0xvY2siLCAidXNlcmxpbmtQYXJ0aWFsIiwgInVzZXJsaW5rVGVtcCIsICJjb250cmlidXRpb25zUGFnZUFsaWFzIiwgInVzZXJOYW1lc3BhY2VOdW1iZXJzIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInVzZXJOYW1lc3BhY2VUaXRsZXMyIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAibmFtZXNwYWNlIiwgImlkIiwgImluY2x1ZGVzIiwgInV0aWwiLCAiZXNjYXBlUmVnRXhwIiwgInVzZXJOYW1lc3BhY2VUaXRsZXMiLCAidXNlclRpdGxlUmVnZXgiLCAiUmVnRXhwIiwgImpvaW4iLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJhcnRpY2xlUmVnZXgiLCAic2NyaXB0UmVnZXgiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAidXNlckxpbmtzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwIiwgIm4iLCAiZG9uZSIsICJfdXNlciIsICJfdXNlckxpbmtzJF91c2VyIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJGVsZW1lbnQiLCAiJCIsICJoYXNDbGFzcyIsICJwYXJlbnQiLCAiaHJlZiIsICJhdHRyIiwgImlzSVB2NkFkZHJlc3MiLCAiTXdVcmkiLCAiaG9zdCIsICJsb2NhdGlvbiIsICJwYWdlVGl0bGUiLCAidGVzdCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VyRXhlY0FycmF5IiwgInVzZXIiLCAic2xpY2UiLCAidG9VcHBlckNhc2UiLCAiYWRkQ2xhc3MiLCAiZXJyIiwgImUiLCAiZiIsICJtYXJrQmxvY2tlZFVzZXIiLCAidXNlcnMiLCAia2V5cyIsICJtYXJrTGlua3MiLCAicmVzcG9uc2UiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgIl9yZXNwb25zZSRxdWVyeTIiLCAiX3Jlc3BvbnNlJHF1ZXJ5MyIsICJibG9ja3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiYmxvY2siLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImNsYXNzTmFtZSIsICJibG9ja1RpbWUiLCAiZXhwaXJ5IiwgInN0YXJ0c1dpdGgiLCAidGltZXN0YW1wIiwgInRpcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIiRsaW5rcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICIkbGluayIsICJnbG9iYWxibG9ja3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidGFyZ2V0IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImdsb2JhbHVzZXJpbmZvIiwgIl9yZXNwb25zZSRxdWVyeSRnbG9iYSIsICJfcmVzcG9uc2UkcXVlcnkkZ2xvYmEyIiwgIm5hbWUiLCAibG9ja2VkIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInByb21pc2VzIiwgImkiLCAiYmt1c2VycyIsICJzcGxpY2UiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgImJndGFyZ2V0cyIsICJia2xpbWl0IiwgImJnbGltaXQiLCAiYmtwcm9wIiwgImJncHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJlcnJvciIsICJjb25zb2xlIiwgIl9pMiIsICJfdXNlcnMiLCAiZ3VpdXNlciIsICJtZXRhIiwgIl9pMyIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJ0aGVuIiwgInJlbW92ZUNsYXNzIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImFkZEhvb2siLCAiaXNJbml0IiwgImhvb2siLCAiYWRkIiwgIm1hcmtCbG9ja2VkIl0KfQo=
