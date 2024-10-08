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
//! src/MarkBlocked/modules/api.ts
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3BhcnNlVGltZS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyIsICJzcmMvTWFya0Jsb2NrZWQvb3B0aW9ucy5qc29uIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FwaS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcy50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2dlbmVyYXRlVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL21hcmtCbG9ja2VkVXNlci50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9hZGRIb29rLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9NYXJrQmxvY2tlZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGluZmluaXR5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2luZmluaXR5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXoOmZkOacnycsXG5cdFx0XHQnemgtaGFudCc6ICfnhKHpmZDmnJ8nLFxuXHRcdH0pLFxuXHRcdEJsb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHRwYXJ0aWFsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3BhcnRpYWwgJyxcblx0XHRcdHpoOiAn6YOo5YiGJyxcblx0XHR9KSxcblx0XHRkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RheScsXG5cdFx0XHR6aDogJ+WkqScsXG5cdFx0fSksXG5cdFx0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdzZWNvbmQnLFxuXHRcdFx0emg6ICfnp5InLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBhZGRaZXJvID0gKHY6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdHJldHVybiB2IDw9IDkgPyBgMCR7dn1gIDogYCR7dn1gO1xufTtcblxuY29uc3QgaW5Ib3VycyA9IChtczogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0bGV0IG1tOiBudW1iZXIgPSBNYXRoLmZsb29yKG1zIC8gNmU0KTtcblx0aWYgKCFtbSkge1xuXHRcdHJldHVybiBgJHtNYXRoLmZsb29yKG1zIC8gMWUzKX0ke2dldE1lc3NhZ2UoJ3MnKX1gO1xuXHR9XG5cblx0bGV0IGhoOiBudW1iZXIgPSBNYXRoLmZsb29yKG1tIC8gNjApO1xuXHRtbSAlPSA2MDtcblxuXHRjb25zdCBkZDogbnVtYmVyID0gTWF0aC5mbG9vcihoaCAvIDI0KTtcblx0aGggJT0gMjQ7XG5cblx0aWYgKGRkKSB7XG5cdFx0cmV0dXJuIGAke2RkICsgKGRkIDwgMTAgPyBgLiR7YWRkWmVybyhoaCl9YCA6ICcnKX0ke2dldE1lc3NhZ2UoJ2QnKX1gO1xuXHR9XG5cblx0cmV0dXJuIGAke2hofToke2FkZFplcm8obW0pfWA7XG59O1xuXG4vLyAyMDA4MTIyNjIyMDYwNSBvciAyMDA4LTAxLTI2VDA2OjM0OjE5WiAtPiBudW1iZXJcbmNvbnN0IHBhcnNlVFMgPSAoc3RyaW5nOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRjb25zdCBtOiBSZWdFeHBNYXRjaEFycmF5ID0gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1xcRC9nLCAnJylcblx0XHQubWF0Y2goLyhcXGRcXGRcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKS8pIGFzIFJlZ0V4cE1hdGNoQXJyYXk7XG5cblx0cmV0dXJuIG5ldyBEYXRlKFxuXHRcdERhdGUuVVRDKFxuXHRcdFx0KyhtWzFdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bMl0gYXMgc3RyaW5nKSAtIDEsXG5cdFx0XHQrKG1bM10gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs0XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzVdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNl0gYXMgc3RyaW5nKVxuXHRcdClcblx0KS5nZXRUaW1lKCk7XG59O1xuXG5leHBvcnQge2luSG91cnMsIHBhcnNlVFN9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fbG9hZGluZ194dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGluayA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua194dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0luZGVmID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rSW5kZWZfeHRBZk9HXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtQYXJ0aWFsID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rUGFydGlhbF94dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1RlbXAgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtUZW1wX3h0QWZPR1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwibG9hZGluZ1wiOiBsb2FkaW5nLFxuICBcInVzZXJsaW5rXCI6IHVzZXJsaW5rLFxuICBcInVzZXJsaW5rSW5kZWZcIjogdXNlcmxpbmtJbmRlZixcbiAgXCJ1c2VybGlua1BhcnRpYWxcIjogdXNlcmxpbmtQYXJ0aWFsLFxuICBcInVzZXJsaW5rVGVtcFwiOiB1c2VybGlua1RlbXBcbn07XG4gICAgICAiLCAie1xuXHRcImNvbnRyaWJ1dGlvbnNQYWdlQWxpYXNcIjogXCJTcGVjaWFsOkNvbnRyaWJ1dGlvbnNcIixcblx0XCJ1c2VyTmFtZXNwYWNlTnVtYmVyc1wiOiBbMiwgM10sXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrQmxvY2tlZC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlSWRzfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgW25hbWVzcGFjZSwgaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRcdGlmICghT1BUSU9OUy51c2VyTmFtZXNwYWNlTnVtYmVycy5pbmNsdWRlcyhpZCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJOYW1lc3BhY2VUaXRsZXNbdXNlck5hbWVzcGFjZVRpdGxlcy5sZW5ndGhdID0gYCR7bXcudXRpbC5lc2NhcGVSZWdFeHAobmFtZXNwYWNlLnJlcGxhY2UoL18vZywgJyAnKSl9OmA7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cblx0cmV0dXJuIHVzZXJOYW1lc3BhY2VUaXRsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9IGZyb20gJy4vZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzJztcbmltcG9ydCB7dXNlcmxpbmt9IGZyb20gJy4uL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcblxuLy8gR2V0IGFsbCBhbGlhc2VzIGZvciB1c2VyOiAmIHVzZXJfdGFsazpcbmNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzKCk7XG4vLyBSZWdFeHAgZm9yIGFsbCB0aXRsZXMgdGhhdCBhcmUgIFVzZXI6fCBVc2VyX3RhbGs6IHwgU3BlY2lhbDpDb250cmlidXRpb25zLyAoZm9yIHVzZXJzY3JpcHRzKVxuY29uc3QgdXNlclRpdGxlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdGBeKCR7dXNlck5hbWVzcGFjZVRpdGxlcy5qb2luKCd8Jyl9fCR7T1BUSU9OUy5jb250cmlidXRpb25zUGFnZUFsaWFzfVxcXFwvKSsoW15cXFxcLyNdKykkYCxcblx0J2knXG4pO1xuXG4vLyBSZWdFeHAgZm9yIGxpbmtzXG4vLyBhcnRpY2xlUmVnZXggYWxzbyBtYXRjaGVzIGV4dGVybmFsIGxpbmtzIGluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIG5vcGluZyB0ZW1wbGF0ZVxuY29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShbXiNdKylgKTtcbmNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShbXiMmXSspYCk7XG5cbmNvbnN0IGdlbmVyYXRlVXNlckxpbmtzID0gKCRjb250ZW50OiBKUXVlcnkpOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IHt9O1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kKCdhJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKFxuXHRcdFx0JGVsZW1lbnQuaGFzQ2xhc3MoJ213LWNoYW5nZXNsaXN0LWRhdGUnKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LWhpc3RvcnktdW5kbycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctcm9sbGJhY2stbGluaycpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhocmVmLnJlcGxhY2UoL14oPzpodHRwcz86XFwvXFwvKS9pLCAnJykpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChuZXcgbXcuVXJpKGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAobmV3IG13LlVyaShsb2NhdGlvbi5ocmVmICsgaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cGFnZVRpdGxlID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhZ2VUaXRsZSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXG5cdFx0Y29uc3QgdXNlckV4ZWNBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IHVzZXJUaXRsZVJlZ2V4LmV4ZWMocGFnZVRpdGxlKTtcblx0XHRpZiAoIXVzZXJFeGVjQXJyYXkgfHwgdHlwZW9mIHVzZXJFeGVjQXJyYXlbMl0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgdXNlcjogc3RyaW5nID0gdXNlckV4ZWNBcnJheVsyXS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdXNlckV4ZWNBcnJheVsyXS5zbGljZSgxKTtcblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKHVzZXIpKSB7XG5cdFx0XHR1c2VyID0gdXNlci50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIC4uL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRlbGVtZW50LmFkZENsYXNzKHVzZXJsaW5rIGFzIHN0cmluZyk7XG5cblx0XHR1c2VyTGlua3NbdXNlcl0gPz89IFtdO1xuXG5cdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pW1xuXHRcdFx0KHVzZXJMaW5rc1t1c2VyXSBhcyAodHlwZW9mIHVzZXJMaW5rcylba2V5b2YgdHlwZW9mIHVzZXJMaW5rc10pLmxlbmd0aFxuXHRcdF0gPSAkZWxlbWVudDsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRyZXR1cm4gdXNlckxpbmtzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc307XG4iLCAiaW1wb3J0IHtpbkhvdXJzLCBwYXJzZVRTfSBmcm9tICcuL3V0aWwvcGFyc2VUaW1lJztcbmltcG9ydCB7bG9hZGluZywgdXNlcmxpbmtJbmRlZiwgdXNlcmxpbmtQYXJ0aWFsLCB1c2VybGlua1RlbXB9IGZyb20gJy4vTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlciA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0JGNvbnRlbnQuYWRkQ2xhc3MobG9hZGluZyBhcyBzdHJpbmcpO1xuXG5cdC8vIEFQSSByZXF1ZXN0XG5cdHR5cGUgUmVzcG9uc2UgPSB7XG5cdFx0cXVlcnk6IHtcblx0XHRcdGJsb2Nrcz86IEFycmF5PHtcblx0XHRcdFx0Ynk6IHN0cmluZztcblx0XHRcdFx0ZXhwaXJ5OiBzdHJpbmc7XG5cdFx0XHRcdHJlYXNvbjogc3RyaW5nO1xuXHRcdFx0XHRyZXN0cmljdGlvbnM6IHN0cmluZyB8IHN0cmluZ1tdO1xuXHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0fT47XG5cdFx0fTtcblx0fTtcblxuXHQvLyBDYWxsYmFjazogcmVjZWl2ZSBkYXRhIGFuZCBtYXJrIGxpbmtzXG5cdGNvbnN0IG1hcmtMaW5rcyA9IChyZXNwb25zZTogUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRpZiAoIXJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdFx0Y29uc3QgaXNQYXJ0aWFsQmxjb2s6IGJvb2xlYW4gPSB0eXBlb2YgYmxvY2sucmVzdHJpY3Rpb25zID09PSAnc3RyaW5nJyAmJiBibG9jay5yZXN0cmljdGlvbnMgIT09ICcnOyAvLyBQYXJ0aWFsIGJsb2NrXG5cblx0XHRcdGxldCBjbGFzc05hbWU6IHN0cmluZyA9IHVzZXJsaW5rUGFydGlhbCBhcyBzdHJpbmc7XG5cdFx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRcdGlmIChibG9jay5leHBpcnkuc3RhcnRzV2l0aCgnaW4nKSkge1xuXHRcdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmxvY2tUaW1lID0gZ2V0TWVzc2FnZSgnaW5maW5pdHknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua1RlbXAgYXMgc3RyaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmxvY2tlZCcpXG5cdFx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdFx0LnJlcGxhY2UoJyQyJywgYmxvY2suYnkpXG5cdFx0XHRcdC5yZXBsYWNlKCckMycsIGJsb2NrLnJlYXNvbilcblx0XHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0XHR0aXAgPSBpc1BhcnRpYWxCbGNvayA/IHRpcC5yZXBsYWNlKCckNScsIGdldE1lc3NhZ2UoJ3BhcnRpYWwnKSkgOiB0aXAucmVwbGFjZSgnJDUnLCAnJyk7XG5cblx0XHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbYmxvY2sudXNlcl07XG5cdFx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHQkbGluay5hZGRDbGFzcyhjbGFzc05hbWUpLmF0dHIoJ3RpdGxlJywgJGxpbmsuYXR0cigndGl0bGUnKSArIHRpcCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyA9IHtcblx0XHRcdFx0Ymt1c2Vycyxcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsaXN0OiAnYmxvY2tzJyxcblx0XHRcdFx0YmtsaW1pdDogMTAwLFxuXHRcdFx0XHRia3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICdyZXN0cmljdGlvbnMnLCAndGltZXN0YW1wJywgJ3VzZXInXSxcblx0XHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHRcdH07XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0XHRtYXJrTGlua3MocmVzcG9uc2UgYXMgUmVzcG9uc2UpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKS50aGVuKCgpID0+IHtcblx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRjb250ZW50LnJlbW92ZUNsYXNzKGxvYWRpbmcgYXMgc3RyaW5nKTtcblx0fSk7XG59O1xuXG5leHBvcnQge21hcmtCbG9ja2VkVXNlcn07XG4iLCAiaW1wb3J0IHttYXJrQmxvY2tlZFVzZXJ9IGZyb20gJy4vbWFya0Jsb2NrZWRVc2VyJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGFkZEhvb2sgPSAoKTogdm9pZCA9PiB7XG5cdGxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtCbG9ja2VkKCRjb250ZW50KTogdm9pZCB7XG5cdFx0aWYgKGlzSW5pdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpc0luaXQgPSB0cnVlO1xuXG5cdFx0Ly8gT24gdGhlIGZpcnN0IGNhbGwgYWZ0ZXIgaW5pdGlhbCBwYWdlIGxvYWQsIGNvbnRhaW5lciBpcyBtdy51dGlsLiRjb250ZW50XG5cdFx0Ly8gVXNlZCB0byBsaW1pdCBtYWluc3BhY2UgYWN0aXZpdHkgdG8ganVzdCB0aGUgZGlmZiBkZWZpbml0aW9uc1xuXHRcdGlmICh3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0XHQkY29udGVudCA9ICRjb250ZW50LmZpbmQoJy5kaWZmLXRpdGxlJyk7XG5cdFx0fVxuXHRcdC8vIE9uIHBhZ2UgbG9hZCwgYWxzbyB1cGRhdGUgdGhlIG5hbWVzcGFjZSB0YWJcblx0XHQkY29udGVudCA9ICRjb250ZW50LmFkZCgnI2NhLW5zdGFiLXVzZXInKTtcblxuXHRcdG1hcmtCbG9ja2VkVXNlcigkY29udGVudCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRIb29rfTtcbiIsICJpbXBvcnQge2FkZEhvb2t9IGZyb20gJy4vbW9kdWxlcy9hZGRIb29rJztcblxuaWYgKCFbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMobXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSkpIHtcblx0YWRkSG9vaygpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFdBQUEsR0FBVUgsa0JBQUFJLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTixrQkFBQUksVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxVQUFBLEdBQVNQLGtCQUFBSSxVQUFTO01BQ2pCQyxJQUFJO01BQ0pHLElBQUk7SUFDTCxDQUFDO0lBQ0RDLElBQUEsR0FBR1Qsa0JBQUFJLFVBQVM7TUFDWEMsSUFBSTtNQUNKRyxJQUFJO0lBQ0wsQ0FBQztJQUNERSxJQUFBLEdBQUdWLGtCQUFBSSxVQUFTO01BQ1hDLElBQUk7TUFDSkcsSUFBSTtJQUNMLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZVQsZ0JBQWdCO0FBRXJDLElBQU1VLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDL0JBLElBQU1DLFVBQVdDLE9BQXNCO0FBQ3RDLFNBQU9BLEtBQUssSUFBQSxJQUFBQyxPQUFRRCxDQUFDLElBQUEsR0FBQUMsT0FBUUQsQ0FBQztBQUMvQjtBQUVBLElBQU1FLFVBQVdDLFFBQXVCO0FBQ3ZDLE1BQUlDLEtBQWFDLEtBQUtDLE1BQU1ILEtBQUssR0FBRztBQUNwQyxNQUFJLENBQUNDLElBQUk7QUFDUixXQUFBLEdBQUFILE9BQVVJLEtBQUtDLE1BQU1ILEtBQUss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QUl4RyxHQUFHQyxPQUFPQyxJQUFJO0FBRXBELElBQU11RyxVQUFVQSxNQUFZO0FBQzNCLE1BQUlDLFNBQWtCO0FBRXRCMUcsS0FBRzJHLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsWUFBWXRGLFVBQWdCO0FBQ3BFLFFBQUltRixRQUFRO0FBQ1g7SUFDRDtBQUNBQSxhQUFTO0FBSVQsUUFBSUgsYUFBYSxVQUFVQyxzQkFBc0IsR0FBRztBQUNuRGpGLGlCQUFXQSxTQUFTSSxLQUFLLGFBQWE7SUFDdkM7QUFFQUosZUFBV0EsU0FBU3FGLElBQUksZ0JBQWdCO0FBRXhDbkQsb0JBQWdCbEMsUUFBUTtFQUN6QixDQUFDO0FBQ0Y7O0FDckJBLElBQUksQ0FBQyxDQUFDLFFBQVEsUUFBUSxFQUFFWixTQUFTWCxHQUFHQyxPQUFPQyxJQUFJLFVBQVUsQ0FBQyxHQUFHO0FBQzVEdUcsVUFBUTtBQUNUOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJpbmZpbml0eSIsICJsb2NhbGl6ZSIsICJlbiIsICJCbG9ja2VkIiwgInBhcnRpYWwiLCAiemgiLCAiZCIsICJzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhZGRaZXJvIiwgInYiLCAiY29uY2F0IiwgImluSG91cnMiLCAibXMiLCAibW0iLCAiTWF0aCIsICJmbG9vciIsICJoaCIsICJkZCIsICJwYXJzZVRTIiwgInN0cmluZyIsICJtIiwgInJlcGxhY2UiLCAibWF0Y2giLCAiRGF0ZSIsICJVVEMiLCAiZ2V0VGltZSIsICJsb2FkaW5nIiwgInVzZXJsaW5rIiwgInVzZXJsaW5rSW5kZWYiLCAidXNlcmxpbmtQYXJ0aWFsIiwgInVzZXJsaW5rVGVtcCIsICJjb250cmlidXRpb25zUGFnZUFsaWFzIiwgInVzZXJOYW1lc3BhY2VOdW1iZXJzIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzIiwgIndnTmFtZXNwYWNlSWRzIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAidXNlck5hbWVzcGFjZVRpdGxlczIiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJuYW1lc3BhY2UiLCAiaWQiLCAiaW5jbHVkZXMiLCAidXRpbCIsICJlc2NhcGVSZWdFeHAiLCAidXNlck5hbWVzcGFjZVRpdGxlcyIsICJ1c2VyVGl0bGVSZWdleCIsICJSZWdFeHAiLCAiam9pbiIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgImFydGljbGVSZWdleCIsICJzY3JpcHRSZWdleCIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJ1c2VyTGlua3MiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAiLCAibiIsICJkb25lIiwgIl91c2VyIiwgIl91c2VyTGlua3MkX3VzZXIiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkZWxlbWVudCIsICIkIiwgImhhc0NsYXNzIiwgInBhcmVudCIsICJocmVmIiwgImF0dHIiLCAiaXNJUHY2QWRkcmVzcyIsICJVcmkiLCAiaG9zdCIsICJsb2NhdGlvbiIsICJwYWdlVGl0bGUiLCAidGVzdCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VyRXhlY0FycmF5IiwgInVzZXIiLCAic2xpY2UiLCAidG9VcHBlckNhc2UiLCAiYWRkQ2xhc3MiLCAiZXJyIiwgImUiLCAiZiIsICJtYXJrQmxvY2tlZFVzZXIiLCAidXNlcnMiLCAia2V5cyIsICJtYXJrTGlua3MiLCAicmVzcG9uc2UiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgImJsb2NrcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJibG9jayIsICJpc1BhcnRpYWxCbGNvayIsICJyZXN0cmljdGlvbnMiLCAiY2xhc3NOYW1lIiwgImJsb2NrVGltZSIsICJleHBpcnkiLCAic3RhcnRzV2l0aCIsICJ0aW1lc3RhbXAiLCAidGlwIiwgImJ5IiwgInJlYXNvbiIsICJub3ciLCAiJGxpbmtzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIiRsaW5rIiwgInByb21pc2VzIiwgImkiLCAiYmt1c2VycyIsICJzcGxpY2UiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgImJrbGltaXQiLCAiYmtwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgImVycm9yIiwgImNvbnNvbGUiLCAiX2kyIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgInRoZW4iLCAicmVtb3ZlQ2xhc3MiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiYWRkSG9vayIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAibWFya0Jsb2NrZWQiXQp9Cg==
