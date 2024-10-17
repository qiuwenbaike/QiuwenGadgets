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
var userlinkPartial = "MarkBlocked-module__userlinkPartial_xtAfOG";
var userlinkTemp = "MarkBlocked-module__userlinkTemp_xtAfOG";
//! src/MarkBlocked/options.json
var contributionsPageAlias = "Special:Contributions";
var userNamespaceNumbers = [2, 3];
var version = "2.0";
//! src/MarkBlocked/modules/util/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("MarkBlocked/".concat(version));
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
      if ($element.hasClass("mw-changeslist-date") || $element.parent("span").hasClass("mw-history-undo") || $element.parent("span").hasClass("mw-rollback-link")) {
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
        if (new mw.Uri(href).host !== location.host) {
          continue;
        }
      } catch {
        try {
          if (new mw.Uri(location.href + href).host !== location.host) {
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
    var _response$query;
    if (!((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.blocks)) {
      return;
    }
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
  };
  const promises = [];
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      const params = {
        bkusers,
        action: "query",
        format: "json",
        formatversion: "2",
        list: "blocks",
        bklimit: 100,
        bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"],
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
    for (var _i2 = 0, _promises = promises; _i2 < _promises.length; _i2++) {
      const promise = _promises[_i2];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3BhcnNlVGltZS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyIsICJzcmMvTWFya0Jsb2NrZWQvb3B0aW9ucy5qc29uIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aW5maW5pdHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnaW5maW5pdHknLFxuXHRcdFx0J3poLWhhbnMnOiAn5peg6ZmQ5pyfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eEoemZkOacnycsXG5cdFx0fSksXG5cdFx0QmxvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdHBhcnRpYWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFydGlhbCAnLFxuXHRcdFx0emg6ICfpg6jliIYnLFxuXHRcdH0pLFxuXHRcdGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGF5Jyxcblx0XHRcdHpoOiAn5aSpJyxcblx0XHR9KSxcblx0XHRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3NlY29uZCcsXG5cdFx0XHR6aDogJ+enkicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGFkZFplcm8gPSAodjogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHYgPD0gOSA/IGAwJHt2fWAgOiBgJHt2fWA7XG59O1xuXG5jb25zdCBpbkhvdXJzID0gKG1zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRsZXQgbW06IG51bWJlciA9IE1hdGguZmxvb3IobXMgLyA2ZTQpO1xuXHRpZiAoIW1tKSB7XG5cdFx0cmV0dXJuIGAke01hdGguZmxvb3IobXMgLyAxZTMpfSR7Z2V0TWVzc2FnZSgncycpfWA7XG5cdH1cblxuXHRsZXQgaGg6IG51bWJlciA9IE1hdGguZmxvb3IobW0gLyA2MCk7XG5cdG1tICU9IDYwO1xuXG5cdGNvbnN0IGRkOiBudW1iZXIgPSBNYXRoLmZsb29yKGhoIC8gMjQpO1xuXHRoaCAlPSAyNDtcblxuXHRpZiAoZGQpIHtcblx0XHRyZXR1cm4gYCR7ZGQgKyAoZGQgPCAxMCA/IGAuJHthZGRaZXJvKGhoKX1gIDogJycpfSR7Z2V0TWVzc2FnZSgnZCcpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7aGh9OiR7YWRkWmVybyhtbSl9YDtcbn07XG5cbi8vIDIwMDgxMjI2MjIwNjA1IG9yIDIwMDgtMDEtMjZUMDY6MzQ6MTlaIC0+IG51bWJlclxuY29uc3QgcGFyc2VUUyA9IChzdHJpbmc6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdGNvbnN0IG06IFJlZ0V4cE1hdGNoQXJyYXkgPSBzdHJpbmdcblx0XHQucmVwbGFjZSgvXFxEL2csICcnKVxuXHRcdC5tYXRjaCgvKFxcZFxcZFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpLykgYXMgUmVnRXhwTWF0Y2hBcnJheTtcblxuXHRyZXR1cm4gbmV3IERhdGUoXG5cdFx0RGF0ZS5VVEMoXG5cdFx0XHQrKG1bMV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVsyXSBhcyBzdHJpbmcpIC0gMSxcblx0XHRcdCsobVszXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzRdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs2XSBhcyBzdHJpbmcpXG5cdFx0KVxuXHQpLmdldFRpbWUoKTtcbn07XG5cbmV4cG9ydCB7aW5Ib3VycywgcGFyc2VUU307XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgbG9hZGluZyA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX19sb2FkaW5nX3h0QWZPR1wiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rX3h0QWZPR1wiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rSW5kZWYgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtJbmRlZl94dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1BhcnRpYWwgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtQYXJ0aWFsX3h0QWZPR1wiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rVGVtcCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua1RlbXBfeHRBZk9HXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJsb2FkaW5nXCI6IGxvYWRpbmcsXG4gIFwidXNlcmxpbmtcIjogdXNlcmxpbmssXG4gIFwidXNlcmxpbmtJbmRlZlwiOiB1c2VybGlua0luZGVmLFxuICBcInVzZXJsaW5rUGFydGlhbFwiOiB1c2VybGlua1BhcnRpYWwsXG4gIFwidXNlcmxpbmtUZW1wXCI6IHVzZXJsaW5rVGVtcFxufTtcbiAgICAgICIsICJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYE1hcmtCbG9ja2VkLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMgPSAoKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VJZHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gW107XG5cblx0Zm9yIChjb25zdCBbbmFtZXNwYWNlLCBpZF0gb2YgT2JqZWN0LmVudHJpZXMod2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0aWYgKCFPUFRJT05TLnVzZXJOYW1lc3BhY2VOdW1iZXJzLmluY2x1ZGVzKGlkKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlck5hbWVzcGFjZVRpdGxlc1t1c2VyTmFtZXNwYWNlVGl0bGVzLmxlbmd0aF0gPSBgJHttdy51dGlsLmVzY2FwZVJlZ0V4cChuYW1lc3BhY2UucmVwbGFjZSgvXy9nLCAnICcpKX06YDsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRyZXR1cm4gdXNlck5hbWVzcGFjZVRpdGxlcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc30gZnJvbSAnLi9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMnO1xuaW1wb3J0IHt1c2VybGlua30gZnJvbSAnLi4vTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MnO1xuXG4vLyBHZXQgYWxsIGFsaWFzZXMgZm9yIHVzZXI6ICYgdXNlcl90YWxrOlxuY29uc3QgdXNlck5hbWVzcGFjZVRpdGxlczogc3RyaW5nW10gPSBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMoKTtcbi8vIFJlZ0V4cCBmb3IgYWxsIHRpdGxlcyB0aGF0IGFyZSAgVXNlcjp8IFVzZXJfdGFsazogfCBTcGVjaWFsOkNvbnRyaWJ1dGlvbnMvIChmb3IgdXNlcnNjcmlwdHMpXG5jb25zdCB1c2VyVGl0bGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChcblx0YF4oJHt1c2VyTmFtZXNwYWNlVGl0bGVzLmpvaW4oJ3wnKX18JHtPUFRJT05TLmNvbnRyaWJ1dGlvbnNQYWdlQWxpYXN9XFxcXC8pKyhbXlxcXFwvI10rKSRgLFxuXHQnaSdcbik7XG5cbi8vIFJlZ0V4cCBmb3IgbGlua3Ncbi8vIGFydGljbGVSZWdleCBhbHNvIG1hdGNoZXMgZXh0ZXJuYWwgbGlua3MgaW4gb3JkZXIgdG8gc3VwcG9ydCB0aGUgbm9waW5nIHRlbXBsYXRlXG5jb25zdCB7d2dBcnRpY2xlUGF0aCwgd2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgYXJ0aWNsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGAke3dnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyl9KFteI10rKWApO1xuY29uc3Qgc2NyaXB0UmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3dnU2NyaXB0fVxcXFw/dGl0bGU9KFteIyZdKylgKTtcblxuY29uc3QgZ2VuZXJhdGVVc2VyTGlua3MgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0ge307XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRjb250ZW50LmZpbmQoJ2EnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QtZGF0ZScpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctaGlzdG9yeS11bmRvJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1yb2xsYmFjay1saW5rJylcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGhyZWYucmVwbGFjZSgvXig/Omh0dHBzPzpcXC9cXC8pL2ksICcnKSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0aWYgKG5ldyBtdy5VcmkoaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChuZXcgbXcuVXJpKGxvY2F0aW9uLmhyZWYgKyBocmVmKS5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgcGFnZVRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0cGFnZVRpdGxlID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSBpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0cGFnZVRpdGxlID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwYWdlVGl0bGUgPSBkZWNvZGVVUklDb21wb25lbnQocGFnZVRpdGxlKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cblx0XHRjb25zdCB1c2VyRXhlY0FycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gdXNlclRpdGxlUmVnZXguZXhlYyhwYWdlVGl0bGUpO1xuXHRcdGlmICghdXNlckV4ZWNBcnJheSB8fCB0eXBlb2YgdXNlckV4ZWNBcnJheVsyXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCB1c2VyOiBzdHJpbmcgPSB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDEpO1xuXHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3ModXNlcikpIHtcblx0XHRcdHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgLi4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0JGVsZW1lbnQuYWRkQ2xhc3ModXNlcmxpbmsgYXMgc3RyaW5nKTtcblxuXHRcdHVzZXJMaW5rc1t1c2VyXSA/Pz0gW107XG5cblx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSlbXG5cdFx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSkubGVuZ3RoXG5cdFx0XSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXG5cdHJldHVybiB1c2VyTGlua3M7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlckxpbmtzfTtcbiIsICJpbXBvcnQge2luSG91cnMsIHBhcnNlVFN9IGZyb20gJy4vdXRpbC9wYXJzZVRpbWUnO1xuaW1wb3J0IHtsb2FkaW5nLCB1c2VybGlua0luZGVmLCB1c2VybGlua1BhcnRpYWwsIHVzZXJsaW5rVGVtcH0gZnJvbSAnLi9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi91dGlsL2FwaSc7XG5pbXBvcnQge2dlbmVyYXRlVXNlckxpbmtzfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBtYXJrQmxvY2tlZFVzZXIgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IGdlbmVyYXRlVXNlckxpbmtzKCRjb250ZW50KTtcblxuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0Y29uc3QgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdCRjb250ZW50LmFkZENsYXNzKGxvYWRpbmcgYXMgc3RyaW5nKTtcblxuXHQvLyBBUEkgcmVxdWVzdFxuXHR0eXBlIFJlc3BvbnNlID0ge1xuXHRcdHF1ZXJ5OiB7XG5cdFx0XHRibG9ja3M/OiBBcnJheTx7XG5cdFx0XHRcdGJ5OiBzdHJpbmc7XG5cdFx0XHRcdGV4cGlyeTogc3RyaW5nO1xuXHRcdFx0XHRyZWFzb246IHN0cmluZztcblx0XHRcdFx0cmVzdHJpY3Rpb25zOiBzdHJpbmcgfCBzdHJpbmdbXTtcblx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdH0+O1xuXHRcdH07XG5cdH07XG5cblx0Ly8gQ2FsbGJhY2s6IHJlY2VpdmUgZGF0YSBhbmQgbWFyayBsaW5rc1xuXHRjb25zdCBtYXJrTGlua3MgPSAocmVzcG9uc2U6IFJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdGNvbnN0IGlzUGFydGlhbEJsY29rOiBib29sZWFuID0gdHlwZW9mIGJsb2NrLnJlc3RyaWN0aW9ucyA9PT0gJ3N0cmluZycgJiYgYmxvY2sucmVzdHJpY3Rpb25zICE9PSAnJzsgLy8gUGFydGlhbCBibG9ja1xuXG5cdFx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSB1c2VybGlua1BhcnRpYWwgYXMgc3RyaW5nO1xuXHRcdFx0bGV0IGJsb2NrVGltZTogc3RyaW5nID0gJyc7XG5cdFx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdFx0aWYgKCFpc1BhcnRpYWxCbGNvaykge1xuXHRcdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rSW5kZWYgYXMgc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrVGltZSA9IGdldE1lc3NhZ2UoJ2luZmluaXR5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtUZW1wIGFzIHN0cmluZztcblx0XHRcdFx0fVxuXHRcdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0Jsb2NrZWQnKVxuXHRcdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIGJsb2NrLmJ5KVxuXHRcdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdFx0dGlwID0gaXNQYXJ0aWFsQmxjb2sgPyB0aXAucmVwbGFjZSgnJDUnLCBnZXRNZXNzYWdlKCdwYXJ0aWFsJykpIDogdGlwLnJlcGxhY2UoJyQ1JywgJycpO1xuXG5cdFx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2Jsb2NrLnVzZXJdO1xuXHRcdFx0aWYgKCEkbGlua3MpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJGxpbmtzKSB7XG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlCbG9ja3NQYXJhbXMgPSB7XG5cdFx0XHRcdGJrdXNlcnMsXG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0bGlzdDogJ2Jsb2NrcycsXG5cdFx0XHRcdGJrbGltaXQ6IDEwMCxcblx0XHRcdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0XHR9O1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRcdFx0bWFya0xpbmtzKHJlc3BvbnNlIGFzIFJlc3BvbnNlKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHQkY29udGVudC5yZW1vdmVDbGFzcyhsb2FkaW5nIGFzIHN0cmluZyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHttYXJrQmxvY2tlZFVzZXJ9O1xuIiwgImltcG9ydCB7bWFya0Jsb2NrZWRVc2VyfSBmcm9tICcuL21hcmtCbG9ja2VkVXNlcic7XG5cbmNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBhZGRIb29rID0gKCk6IHZvaWQgPT4ge1xuXHRsZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBtYXJrQmxvY2tlZCgkY29udGVudCk6IHZvaWQge1xuXHRcdGlmIChpc0luaXQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aXNJbml0ID0gdHJ1ZTtcblxuXHRcdC8vIE9uIHRoZSBmaXJzdCBjYWxsIGFmdGVyIGluaXRpYWwgcGFnZSBsb2FkLCBjb250YWluZXIgaXMgbXcudXRpbC4kY29udGVudFxuXHRcdC8vIFVzZWQgdG8gbGltaXQgbWFpbnNwYWNlIGFjdGl2aXR5IHRvIGp1c3QgdGhlIGRpZmYgZGVmaW5pdGlvbnNcblx0XHRpZiAod2dBY3Rpb24gPT09ICd2aWV3JyAmJiB3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdFx0JGNvbnRlbnQgPSAkY29udGVudC5maW5kKCcuZGlmZi10aXRsZScpO1xuXHRcdH1cblx0XHQvLyBPbiBwYWdlIGxvYWQsIGFsc28gdXBkYXRlIHRoZSBuYW1lc3BhY2UgdGFiXG5cdFx0JGNvbnRlbnQgPSAkY29udGVudC5hZGQoJyNjYS1uc3RhYi11c2VyJyk7XG5cblx0XHRtYXJrQmxvY2tlZFVzZXIoJGNvbnRlbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkSG9va307XG4iLCAiaW1wb3J0IHthZGRIb29rfSBmcm9tICcuL21vZHVsZXMvYWRkSG9vayc7XG5cbmlmICghWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykpKSB7XG5cdGFkZEhvb2soKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUF1QkMsUUFBQSxpQkFBQTtBQUV2QixJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxXQUFBLEdBQVVILGtCQUFBSSxVQUFTO01BQ2xCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU04sa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsVUFBQSxHQUFTUCxrQkFBQUksVUFBUztNQUNqQkMsSUFBSTtNQUNKRyxJQUFJO0lBQ0wsQ0FBQztJQUNEQyxJQUFBLEdBQUdULGtCQUFBSSxVQUFTO01BQ1hDLElBQUk7TUFDSkcsSUFBSTtJQUNMLENBQUM7SUFDREUsSUFBQSxHQUFHVixrQkFBQUksVUFBUztNQUNYQyxJQUFJO01BQ0pHLElBQUk7SUFDTCxDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVULGdCQUFnQjtBQUVyQyxJQUFNVSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQy9CQSxJQUFNQyxVQUFXQyxPQUFzQjtBQUN0QyxTQUFPQSxLQUFLLElBQUEsSUFBQUMsT0FBUUQsQ0FBQyxJQUFBLEdBQUFDLE9BQVFELENBQUM7QUFDL0I7QUFFQSxJQUFNRSxVQUFXQyxRQUF1QjtBQUN2QyxNQUFJQyxLQUFhQyxLQUFLQyxNQUFNSCxLQUFLLEdBQUc7QUFDcEMsTUFBSSxDQUFDQyxJQUFJO0FBQ1IsV0FBQSxHQUFBSCxPQUFVSSxLQUFL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QUFVQztBQUFpQixJQUFJeEcsR0FBR0MsT0FBT0MsSUFBSTtBQUVwRCxJQUFNdUcsVUFBVUEsTUFBWTtBQUMzQixNQUFJQyxTQUFrQjtBQUV0QjFHLEtBQUcyRyxLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLFlBQVl0RixVQUFnQjtBQUNwRSxRQUFJbUYsUUFBUTtBQUNYO0lBQ0Q7QUFDQUEsYUFBUztBQUlULFFBQUlILGFBQWEsVUFBVUMsc0JBQXNCLEdBQUc7QUFDbkRqRixpQkFBV0EsU0FBU0ksS0FBSyxhQUFhO0lBQ3ZDO0FBRUFKLGVBQVdBLFNBQVNxRixJQUFJLGdCQUFnQjtBQUV4Q25ELG9CQUFnQmxDLFFBQVE7RUFDekIsQ0FBQztBQUNGOztBQ3JCQSxJQUFJLENBQUMsQ0FBQyxRQUFRLFFBQVEsRUFBRVosU0FBU1gsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLENBQUMsR0FBRztBQUM1RHVHLFVBQVE7QUFDVDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiaW5maW5pdHkiLCAibG9jYWxpemUiLCAiZW4iLCAiQmxvY2tlZCIsICJwYXJ0aWFsIiwgInpoIiwgImQiLCAicyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkWmVybyIsICJ2IiwgImNvbmNhdCIsICJpbkhvdXJzIiwgIm1zIiwgIm1tIiwgIk1hdGgiLCAiZmxvb3IiLCAiaGgiLCAiZGQiLCAicGFyc2VUUyIsICJzdHJpbmciLCAibSIsICJyZXBsYWNlIiwgIm1hdGNoIiwgIkRhdGUiLCAiVVRDIiwgImdldFRpbWUiLCAibG9hZGluZyIsICJ1c2VybGluayIsICJ1c2VybGlua0luZGVmIiwgInVzZXJsaW5rUGFydGlhbCIsICJ1c2VybGlua1RlbXAiLCAiY29udHJpYnV0aW9uc1BhZ2VBbGlhcyIsICJ1c2VyTmFtZXNwYWNlTnVtYmVycyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInVzZXJOYW1lc3BhY2VUaXRsZXMyIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAibmFtZXNwYWNlIiwgImlkIiwgImluY2x1ZGVzIiwgInV0aWwiLCAiZXNjYXBlUmVnRXhwIiwgInVzZXJOYW1lc3BhY2VUaXRsZXMiLCAidXNlclRpdGxlUmVnZXgiLCAiUmVnRXhwIiwgImpvaW4iLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJhcnRpY2xlUmVnZXgiLCAic2NyaXB0UmVnZXgiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAidXNlckxpbmtzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwIiwgIm4iLCAiZG9uZSIsICJfdXNlciIsICJfdXNlckxpbmtzJF91c2VyIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJGVsZW1lbnQiLCAiJCIsICJoYXNDbGFzcyIsICJwYXJlbnQiLCAiaHJlZiIsICJhdHRyIiwgImlzSVB2NkFkZHJlc3MiLCAiVXJpIiwgImhvc3QiLCAibG9jYXRpb24iLCAicGFnZVRpdGxlIiwgInRlc3QiLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlckV4ZWNBcnJheSIsICJ1c2VyIiwgInNsaWNlIiwgInRvVXBwZXJDYXNlIiwgImFkZENsYXNzIiwgImVyciIsICJlIiwgImYiLCAibWFya0Jsb2NrZWRVc2VyIiwgInVzZXJzIiwgImtleXMiLCAibWFya0xpbmtzIiwgInJlc3BvbnNlIiwgIl9yZXNwb25zZSRxdWVyeSIsICJibG9ja3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiYmxvY2siLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImNsYXNzTmFtZSIsICJibG9ja1RpbWUiLCAiZXhwaXJ5IiwgInN0YXJ0c1dpdGgiLCAidGltZXN0YW1wIiwgInRpcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIiRsaW5rcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICIkbGluayIsICJwcm9taXNlcyIsICJpIiwgImJrdXNlcnMiLCAic3BsaWNlIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJia2xpbWl0IiwgImJrcHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJlcnJvciIsICJjb25zb2xlIiwgIl9pMiIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJ0aGVuIiwgInJlbW92ZUNsYXNzIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImFkZEhvb2siLCAiaXNJbml0IiwgImhvb2siLCAiYWRkIiwgIm1hcmtCbG9ja2VkIl0KfQo=
