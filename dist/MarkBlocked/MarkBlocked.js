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
var userlinkLocked = "MarkBlocked-module__userlinkLocked_xtAfOG";
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
        bklimit: 100,
        bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
        bglimit: 100,
        bgtargets: bkusers,
        bgprop: ["by", "expiry", "reason", "timestamp", "target"],
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3BhcnNlVGltZS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyIsICJzcmMvTWFya0Jsb2NrZWQvb3B0aW9ucy5qc29uIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aW5maW5pdHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnaW5maW5pdHknLFxuXHRcdFx0J3poLWhhbnMnOiAn5peg6ZmQ5pyfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eEoemZkOacnycsXG5cdFx0fSksXG5cdFx0QmxvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdCdHbG9iYWxseSBCbG9ja2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCBnbG9iYWxseSAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15YWo5Z+f5bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlhajln5/lsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdExvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7IExvY2tlZCcsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvlt7Llhajln5/plIHlrponLFxuXHRcdFx0J3poLWhhbnQnOiAn77yb5bey5YWo5Z+f6Y6W5a6aJyxcblx0XHR9KSxcblx0XHRwYXJ0aWFsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3BhcnRpYWwgJyxcblx0XHRcdHpoOiAn6YOo5YiGJyxcblx0XHR9KSxcblx0XHRkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RheScsXG5cdFx0XHR6aDogJ+WkqScsXG5cdFx0fSksXG5cdFx0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdzZWNvbmQnLFxuXHRcdFx0emg6ICfnp5InLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBhZGRaZXJvID0gKHY6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdHJldHVybiB2IDw9IDkgPyBgMCR7dn1gIDogYCR7dn1gO1xufTtcblxuY29uc3QgaW5Ib3VycyA9IChtczogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0bGV0IG1tOiBudW1iZXIgPSBNYXRoLmZsb29yKG1zIC8gNmU0KTtcblx0aWYgKCFtbSkge1xuXHRcdHJldHVybiBgJHtNYXRoLmZsb29yKG1zIC8gMWUzKX0ke2dldE1lc3NhZ2UoJ3MnKX1gO1xuXHR9XG5cblx0bGV0IGhoOiBudW1iZXIgPSBNYXRoLmZsb29yKG1tIC8gNjApO1xuXHRtbSAlPSA2MDtcblxuXHRjb25zdCBkZDogbnVtYmVyID0gTWF0aC5mbG9vcihoaCAvIDI0KTtcblx0aGggJT0gMjQ7XG5cblx0aWYgKGRkKSB7XG5cdFx0cmV0dXJuIGAke2RkICsgKGRkIDwgMTAgPyBgLiR7YWRkWmVybyhoaCl9YCA6ICcnKX0ke2dldE1lc3NhZ2UoJ2QnKX1gO1xuXHR9XG5cblx0cmV0dXJuIGAke2hofToke2FkZFplcm8obW0pfWA7XG59O1xuXG4vLyAyMDA4MTIyNjIyMDYwNSBvciAyMDA4LTAxLTI2VDA2OjM0OjE5WiAtPiBudW1iZXJcbmNvbnN0IHBhcnNlVFMgPSAoc3RyaW5nOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRjb25zdCBtOiBSZWdFeHBNYXRjaEFycmF5ID0gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1xcRC9nLCAnJylcblx0XHQubWF0Y2goLyhcXGRcXGRcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKS8pIGFzIFJlZ0V4cE1hdGNoQXJyYXk7XG5cblx0cmV0dXJuIG5ldyBEYXRlKFxuXHRcdERhdGUuVVRDKFxuXHRcdFx0KyhtWzFdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bMl0gYXMgc3RyaW5nKSAtIDEsXG5cdFx0XHQrKG1bM10gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs0XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzVdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNl0gYXMgc3RyaW5nKVxuXHRcdClcblx0KS5nZXRUaW1lKCk7XG59O1xuXG5leHBvcnQge2luSG91cnMsIHBhcnNlVFN9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fbG9hZGluZ194dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGluayA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua194dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0luZGVmID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rSW5kZWZfeHRBZk9HXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtMb2NrZWQgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtMb2NrZWRfeHRBZk9HXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtQYXJ0aWFsID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rUGFydGlhbF94dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1RlbXAgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtUZW1wX3h0QWZPR1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwibG9hZGluZ1wiOiBsb2FkaW5nLFxuICBcInVzZXJsaW5rXCI6IHVzZXJsaW5rLFxuICBcInVzZXJsaW5rSW5kZWZcIjogdXNlcmxpbmtJbmRlZixcbiAgXCJ1c2VybGlua0xvY2tlZFwiOiB1c2VybGlua0xvY2tlZCxcbiAgXCJ1c2VybGlua1BhcnRpYWxcIjogdXNlcmxpbmtQYXJ0aWFsLFxuICBcInVzZXJsaW5rVGVtcFwiOiB1c2VybGlua1RlbXBcbn07XG4gICAgICAiLCAie1xuXHRcImNvbnRyaWJ1dGlvbnNQYWdlQWxpYXNcIjogXCJTcGVjaWFsOkNvbnRyaWJ1dGlvbnNcIixcblx0XCJ1c2VyTmFtZXNwYWNlTnVtYmVyc1wiOiBbMiwgM10sXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrQmxvY2tlZC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TXdVcml9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc30gZnJvbSAnLi9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMnO1xuaW1wb3J0IHt1c2VybGlua30gZnJvbSAnLi4vTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MnO1xuXG4vLyBHZXQgYWxsIGFsaWFzZXMgZm9yIHVzZXI6ICYgdXNlcl90YWxrOlxuY29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMoKTtcbi8vIFJlZ0V4cCBmb3IgYWxsIHRpdGxlcyB0aGF0IGFyZSAgVXNlcjp8IFVzZXJfdGFsazogfCBTcGVjaWFsOkNvbnRyaWJ1dGlvbnMvIChmb3IgdXNlcnNjcmlwdHMpXG5jb25zdCB1c2VyVGl0bGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChcblx0YF4oJHt1c2VyTmFtZXNwYWNlVGl0bGVzLmpvaW4oJ3wnKX18JHtPUFRJT05TLmNvbnRyaWJ1dGlvbnNQYWdlQWxpYXN9XFxcXC8pKyhbXlxcXFwvI10rKSRgLFxuXHQnaSdcbik7XG5cbi8vIFJlZ0V4cCBmb3IgbGlua3Ncbi8vIGFydGljbGVSZWdleCBhbHNvIG1hdGNoZXMgZXh0ZXJuYWwgbGlua3MgaW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgbm9waW5nIHRlbXBsYXRlXG5jb25zdCB7d2dBcnRpY2xlUGF0aCwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KFteI10rKWApO1xuY29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3dnU2NyaXB0fVxcXFw/dGl0bGU9KFteIyZdKylgKTtcblxuY29uc3QgZ2VuZXJhdGVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0ge307XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJ2EnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QtZGF0ZScpIHx8XG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnZXh0LWRpc2N1c3Npb250b29scy1pbml0LXRpbWVzdGFtcGxpbmsnKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LWhpc3RvcnktdW5kbycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctcm9sbGJhY2stbGluaycpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhocmVmLnJlcGxhY2UoL14oPzpodHRwcz86XFwvXFwvKS9pLCAnJykpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdC8vIE1heWJlIGFic29sdXRlIFVSTFxuXHRcdFx0aWYgKG5ldyBNd1VyaShocmVmKS5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gTWF5YmUgcmVsYXRpdmUgVVJMXG5cdFx0XHRcdGlmIChuZXcgTXdVcmkobG9jYXRpb24uaHJlZiArIGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBwYWdlVGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRwYWdlVGl0bGUgPSBtYXRjaFsxXSBhcyBzdHJpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHBhZ2VUaXRsZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWdlVGl0bGUpLnJlcGxhY2UoL18vZywgJyAnKTtcblxuXHRcdGNvbnN0IHVzZXJFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSB1c2VyVGl0bGVSZWdleC5leGVjKHBhZ2VUaXRsZSk7XG5cdFx0aWYgKCF1c2VyRXhlY0FycmF5IHx8IHR5cGVvZiB1c2VyRXhlY0FycmF5WzJdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0bGV0IHVzZXI6IHN0cmluZyA9IHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHVzZXJFeGVjQXJyYXlbMl0uc2xpY2UoMSk7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyh1c2VyKSkge1xuXHRcdFx0dXNlciA9IHVzZXIudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cblx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHQvLyAqIHNlZSAuLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHQkZWxlbWVudC5hZGRDbGFzcyh1c2VybGluayBhcyBzdHJpbmcpO1xuXG5cdFx0dXNlckxpbmtzW3VzZXJdID8/PSBbXTtcblxuXHRcdCh1c2VyTGlua3NbdXNlcl0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKVtcblx0XHRcdCh1c2VyTGlua3NbdXNlcl0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKS5sZW5ndGhcblx0XHRdID0gJGVsZW1lbnQ7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlSWRzfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgW25hbWVzcGFjZSwgaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRcdGlmICghT1BUSU9OUy51c2VyTmFtZXNwYWNlTnVtYmVycy5pbmNsdWRlcyhpZCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJOYW1lc3BhY2VUaXRsZXNbdXNlck5hbWVzcGFjZVRpdGxlcy5sZW5ndGhdID0gYCR7bXcudXRpbC5lc2NhcGVSZWdFeHAobmFtZXNwYWNlLnJlcGxhY2UoL18vZywgJyAnKSl9OmA7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cblx0cmV0dXJuIHVzZXJOYW1lc3BhY2VUaXRsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc307XG4iLCAiaW1wb3J0IHtpbkhvdXJzLCBwYXJzZVRTfSBmcm9tICcuL3V0aWwvcGFyc2VUaW1lJztcbmltcG9ydCB7bG9hZGluZywgdXNlcmxpbmtJbmRlZiwgdXNlcmxpbmtMb2NrZWQsIHVzZXJsaW5rUGFydGlhbCwgdXNlcmxpbmtUZW1wfSBmcm9tICcuL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL3V0aWwvYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlciA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0JGNvbnRlbnQuYWRkQ2xhc3MobG9hZGluZyBhcyBzdHJpbmcpO1xuXG5cdC8vIEFQSSByZXF1ZXN0XG5cdHR5cGUgUmVzcG9uc2UgPSB7XG5cdFx0cXVlcnk6IHtcblx0XHRcdGJsb2Nrcz86IEFycmF5PHtcblx0XHRcdFx0Ynk6IHN0cmluZztcblx0XHRcdFx0ZXhwaXJ5OiBzdHJpbmc7XG5cdFx0XHRcdHJlYXNvbjogc3RyaW5nO1xuXHRcdFx0XHRyZXN0cmljdGlvbnM6IHN0cmluZyB8IHN0cmluZ1tdO1xuXHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0fT47XG5cdFx0XHRnbG9iYWxibG9ja3M/OiBBcnJheTx7XG5cdFx0XHRcdGJ5OiBzdHJpbmc7XG5cdFx0XHRcdGV4cGlyeTogc3RyaW5nO1xuXHRcdFx0XHRyZWFzb246IHN0cmluZztcblx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdHRhcmdldDogc3RyaW5nO1xuXHRcdFx0fT47XG5cdFx0XHRnbG9iYWx1c2VyaW5mbz86IHtcblx0XHRcdFx0bmFtZT86IHN0cmluZztcblx0XHRcdFx0bG9ja2VkPzogYm9vbGVhbjtcblx0XHRcdH07XG5cdFx0fTtcblx0fTtcblxuXHQvLyBDYWxsYmFjazogcmVjZWl2ZSBkYXRhIGFuZCBtYXJrIGxpbmtzXG5cdGNvbnN0IG1hcmtMaW5rcyA9IChyZXNwb25zZTogUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdFx0Y29uc3QgaXNQYXJ0aWFsQmxjb2s6IGJvb2xlYW4gPSB0eXBlb2YgYmxvY2sucmVzdHJpY3Rpb25zID09PSAnc3RyaW5nJyAmJiBibG9jay5yZXN0cmljdGlvbnMgIT09ICcnOyAvLyBQYXJ0aWFsIGJsb2NrXG5cblx0XHRcdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRcdFx0bGV0IGJsb2NrVGltZTogc3RyaW5nID0gJyc7XG5cdFx0XHRcdGlmIChibG9jay5leHBpcnkuc3RhcnRzV2l0aCgnaW4nKSkge1xuXHRcdFx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rSW5kZWYgYXMgc3RyaW5nO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rVGVtcCBhcyBzdHJpbmc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0Jsb2NrZWQnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0XHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdFx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2Jsb2NrLnVzZXJdO1xuXHRcdFx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSB1c2VybGlua1BhcnRpYWwgYXMgc3RyaW5nO1xuXHRcdFx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRcdFx0aWYgKGJsb2NrLmV4cGlyeS5zdGFydHNXaXRoKCdpbicpKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHRcdFx0YmxvY2tUaW1lID0gZ2V0TWVzc2FnZSgnaW5maW5pdHknKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua1RlbXAgYXMgc3RyaW5nO1xuXHRcdFx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0dsb2JhbGx5IEJsb2NrZWQnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0XHRcdHRpcCA9IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdFx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2Jsb2NrLnRhcmdldF07XG5cdFx0XHRcdGlmICghJGxpbmtzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0Y29uc3QgdXNlciA9IHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbHVzZXJpbmZvPy5uYW1lO1xuXHRcdFx0Y29uc3QgbG9ja2VkID0gcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsdXNlcmluZm8/LmxvY2tlZDtcblxuXHRcdFx0aWYgKCFsb2NrZWQgfHwgIXVzZXIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0xvY2tlZCcpO1xuXG5cdFx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW3VzZXJdO1xuXHRcdFx0aWYgKCEkbGlua3MpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjbGFzc05hbWUgPSB1c2VybGlua0xvY2tlZCBhcyBzdHJpbmc7XG5cblx0XHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJGxpbmtzKSB7XG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHR0eXBlIEJncHJvcCA9ICdhZGRyZXNzJyB8ICdieScgfCAnZXhwaXJ5JyB8ICdpZCcgfCAncmFuZ2UnIHwgJ3JlYXNvbicgfCAndGFyZ2V0JyB8ICd0aW1lc3RhbXAnO1xuXG5cdHR5cGUgQXBpUXVlcnlHbG9iYWxCbG9ja3NQYXJhbXNSZWRlZmluZWQgPSBPbWl0PEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zLCAnYmdwcm9wJz4gJiB7XG5cdFx0Ymd0YXJnZXRzPzogc3RyaW5nIHwgc3RyaW5nW107XG5cdFx0Ymdwcm9wPzogQmdwcm9wIHwgQmdwcm9wW107XG5cdH07XG5cblx0Ly8gTG9jYWwgYW5kIEdsb2JhbCBMb2NrXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyAmIEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdGxpc3Q6IFsnYmxvY2tzJywgJ2dsb2JhbGJsb2NrcyddLFxuXHRcdFx0XHRia3VzZXJzLFxuXHRcdFx0XHRia2xpbWl0OiAxMDAsXG5cdFx0XHRcdGJrcHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3Jlc3RyaWN0aW9ucycsICd0aW1lc3RhbXAnLCAndXNlciddLFxuXHRcdFx0XHRiZ2xpbWl0OiAxMDAsXG5cdFx0XHRcdGJndGFyZ2V0czogYmt1c2Vycyxcblx0XHRcdFx0Ymdwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAndGltZXN0YW1wJywgJ3RhcmdldCddLFxuXHRcdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRcdG1heGFnZTogNjAwLFxuXHRcdFx0fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRcdG1hcmtMaW5rcyhyZXNwb25zZSBhcyBSZXNwb25zZSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBHbG9iYWwgTG9ja1xuXHRmb3IgKGNvbnN0IGd1aXVzZXIgb2YgdXNlcnMpIHtcblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2UgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0bWV0YTogWydnbG9iYWx1c2VyaW5mbyddLFxuXHRcdFx0XHRndWl1c2VyLFxuXHRcdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRcdG1heGFnZTogNjAwLFxuXHRcdFx0fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRcdG1hcmtMaW5rcyhyZXNwb25zZSBhcyBSZXNwb25zZSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0JGNvbnRlbnQucmVtb3ZlQ2xhc3MobG9hZGluZyBhcyBzdHJpbmcpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7bWFya0Jsb2NrZWRVc2VyfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkVXNlcn0gZnJvbSAnLi9tYXJrQmxvY2tlZFVzZXInO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya0Jsb2NrZWQoJGNvbnRlbnQpOiB2b2lkIHtcblx0XHRpZiAoaXNJbml0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlzSW5pdCA9IHRydWU7XG5cblx0XHQvLyBPbiB0aGUgZmlyc3QgY2FsbCBhZnRlciBpbml0aWFsIHBhZ2UgbG9hZCwgY29udGFpbmVyIGlzIG13LnV0aWwuJGNvbnRlbnRcblx0XHQvLyBVc2VkIHRvIGxpbWl0IG1haW5zcGFjZSBhY3Rpdml0eSB0byBqdXN0IHRoZSBkaWZmIGRlZmluaXRpb25zXG5cdFx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRcdCRjb250ZW50ID0gJGNvbnRlbnQuZmluZCgnLmRpZmYtdGl0bGUnKTtcblx0XHR9XG5cdFx0Ly8gT24gcGFnZSBsb2FkLCBhbHNvIHVwZGF0ZSB0aGUgbmFtZXNwYWNlIHRhYlxuXHRcdCRjb250ZW50ID0gJGNvbnRlbnQuYWRkKCcjY2EtbnN0YWItdXNlcicpO1xuXG5cdFx0bWFya0Jsb2NrZWRVc2VyKCRjb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgImltcG9ydCB7YWRkSG9va30gZnJvbSAnLi9tb2R1bGVzL2FkZEhvb2snO1xuXG5pZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpKSkge1xuXHRhZGRIb29rKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsV0FBQSxHQUFVSCxrQkFBQUksVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNOLGtCQUFBSSxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QscUJBQUEsR0FBb0JMLGtCQUFBSSxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFNBQUEsR0FBUVAsa0JBQUFJLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsVUFBQSxH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QVU7QUFBaEMsWUFBV0UsVUFBQUQsVUFBQUQsR0FBQTtBQUNWLFVBQUk7QUFDSCxjQUFNRSxRQUFRO01BQ2YsUUFBUTtNQUFDO0lBQ1Y7RUFDRCxDQUFBLEVBQUcsRUFBRUMsS0FBSyxNQUFNO0FBSWZwRyxhQUFTcUcsWUFBWTNJLE9BQWlCO0VBQ3ZDLENBQUM7QUFDRjs7QUMzTkEsSUFBTTtFQUFDNEk7RUFBVUM7QUFBaUIsSUFBSTlILEdBQUdDLE9BQU9DLElBQUk7QUFFcEQsSUFBTTZILFVBQVVBLE1BQVk7QUFDM0IsTUFBSUMsU0FBa0I7QUFFdEJoSSxLQUFHaUksS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxZQUFZNUcsVUFBZ0I7QUFDcEUsUUFBSXlHLFFBQVE7QUFDWDtJQUNEO0FBQ0FBLGFBQVM7QUFJVCxRQUFJSCxhQUFhLFVBQVVDLHNCQUFzQixHQUFHO0FBQ25EdkcsaUJBQVdBLFNBQVNJLEtBQUssYUFBYTtJQUN2QztBQUVBSixlQUFXQSxTQUFTMkcsSUFBSSxnQkFBZ0I7QUFFeEN6RSxvQkFBZ0JsQyxRQUFRO0VBQ3pCLENBQUM7QUFDRjs7QUNyQkEsSUFBSSxDQUFDLENBQUMsUUFBUSxRQUFRLEVBQUVaLFNBQVNYLEdBQUdDLE9BQU9DLElBQUksVUFBVSxDQUFDLEdBQUc7QUFDNUQ2SCxVQUFRO0FBQ1Q7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImluZmluaXR5IiwgImxvY2FsaXplIiwgImVuIiwgIkJsb2NrZWQiLCAiTG9ja2VkIiwgInBhcnRpYWwiLCAiemgiLCAiZCIsICJzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhZGRaZXJvIiwgInYiLCAiY29uY2F0IiwgImluSG91cnMiLCAibXMiLCAibW0iLCAiTWF0aCIsICJmbG9vciIsICJoaCIsICJkZCIsICJwYXJzZVRTIiwgInN0cmluZyIsICJtIiwgInJlcGxhY2UiLCAibWF0Y2giLCAiRGF0ZSIsICJVVEMiLCAiZ2V0VGltZSIsICJsb2FkaW5nIiwgInVzZXJsaW5rIiwgInVzZXJsaW5rSW5kZWYiLCAidXNlcmxpbmtMb2NrZWQiLCAidXNlcmxpbmtQYXJ0aWFsIiwgInVzZXJsaW5rVGVtcCIsICJjb250cmlidXRpb25zUGFnZUFsaWFzIiwgInVzZXJOYW1lc3BhY2VOdW1iZXJzIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInVzZXJOYW1lc3BhY2VUaXRsZXMyIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAibmFtZXNwYWNlIiwgImlkIiwgImluY2x1ZGVzIiwgInV0aWwiLCAiZXNjYXBlUmVnRXhwIiwgInVzZXJOYW1lc3BhY2VUaXRsZXMiLCAidXNlclRpdGxlUmVnZXgiLCAiUmVnRXhwIiwgImpvaW4iLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJhcnRpY2xlUmVnZXgiLCAic2NyaXB0UmVnZXgiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAidXNlckxpbmtzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwIiwgIm4iLCAiZG9uZSIsICJfdXNlciIsICJfdXNlckxpbmtzJF91c2VyIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJGVsZW1lbnQiLCAiJCIsICJoYXNDbGFzcyIsICJwYXJlbnQiLCAiaHJlZiIsICJhdHRyIiwgImlzSVB2NkFkZHJlc3MiLCAiTXdVcmkiLCAiaG9zdCIsICJsb2NhdGlvbiIsICJwYWdlVGl0bGUiLCAidGVzdCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VyRXhlY0FycmF5IiwgInVzZXIiLCAic2xpY2UiLCAidG9VcHBlckNhc2UiLCAiYWRkQ2xhc3MiLCAiZXJyIiwgImUiLCAiZiIsICJtYXJrQmxvY2tlZFVzZXIiLCAidXNlcnMiLCAia2V5cyIsICJtYXJrTGlua3MiLCAicmVzcG9uc2UiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgIl9yZXNwb25zZSRxdWVyeTIiLCAiX3Jlc3BvbnNlJHF1ZXJ5MyIsICJibG9ja3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiYmxvY2siLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImNsYXNzTmFtZSIsICJibG9ja1RpbWUiLCAiZXhwaXJ5IiwgInN0YXJ0c1dpdGgiLCAidGltZXN0YW1wIiwgInRpcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIiRsaW5rcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICIkbGluayIsICJnbG9iYWxibG9ja3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidGFyZ2V0IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImdsb2JhbHVzZXJpbmZvIiwgIl9yZXNwb25zZSRxdWVyeSRnbG9iYSIsICJfcmVzcG9uc2UkcXVlcnkkZ2xvYmEyIiwgIm5hbWUiLCAibG9ja2VkIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInByb21pc2VzIiwgImkiLCAiYmt1c2VycyIsICJzcGxpY2UiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgImJrbGltaXQiLCAiYmtwcm9wIiwgImJnbGltaXQiLCAiYmd0YXJnZXRzIiwgImJncHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJlcnJvciIsICJjb25zb2xlIiwgIl9pMiIsICJfdXNlcnMiLCAiZ3VpdXNlciIsICJtZXRhIiwgIl9pMyIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJ0aGVuIiwgInJlbW92ZUNsYXNzIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImFkZEhvb2siLCAiaXNJbml0IiwgImhvb2siLCAiYWRkIiwgIm1hcmtCbG9ja2VkIl0KfQo=
