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
var storageKeyLocked = "ext.gadget.MarkBlocked_isLocked-";
var storageKeyBlocked = "ext.gadget.MarkBlocked_isBlocked-";
var version = "2.0";
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
var userlinkIndef = "MarkBlocked-module__userlinkIndef_xtAfOG__491";
var userlinkLocked = "MarkBlocked-module__userlinkLocked_xtAfOG__491";
var userlinkPartial = "MarkBlocked-module__userlinkPartial_xtAfOG__491";
var userlinkTemp = "MarkBlocked-module__userlinkTemp_xtAfOG__491";
//! src/MarkBlocked/modules/util/markLinks.ts
var markGlobalLockedLinks = ({
  response,
  userLinks
}) => {
  var _response$query, _response$query$globa, _response$query$globa2;
  if (!((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.globaluserinfo)) {
    return;
  }
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
  var _iterator = _createForOfIteratorHelper($links), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const $link = _step.value;
      $link.addClass(className).attr("title", $link.attr("title") + tip);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var markLocalBlocks = ({
  response,
  userLinks,
  bkip
}) => {
  var _response$query2;
  if (!((_response$query2 = response["query"]) !== null && _response$query2 !== void 0 && _response$query2.blocks)) {
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
};
var markGlobalBlocks = ({
  response,
  userLinks,
  bkip
}) => {
  var _response$query3;
  if (!((_response$query3 = response["query"]) !== null && _response$query3 !== void 0 && _response$query3.globalblocks)) {
    return;
  }
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
};
//! src/MarkBlocked/modules/util/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("MarkBlocked/".concat(version));
//! src/MarkBlocked/modules/util/query.ts
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
//! src/MarkBlocked/modules/util/markUserLinks.ts
var markGlobalLockedUserLinks = (userLinks) => {
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  for (var _i = 0, _users = users; _i < _users.length; _i++) {
    const guiuser = _users[_i];
    if (mw.util.isIPv4Address(guiuser) || mw.util.isIPv6Address(guiuser)) {
      continue;
    }
    if (mw.storage.getObject(storageKeyLocked + guiuser)) {
      var _response$query4;
      const response = mw.storage.getObject(storageKeyLocked + guiuser);
      if ((_response$query4 = response["query"]) !== null && _response$query4 !== void 0 && _response$query4.globaluserinfo) {
        markGlobalLockedLinks({
          response,
          userLinks
        });
        continue;
      }
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      try {
        const response = yield queryGlobalUserInfo(guiuser);
        markGlobalLockedLinks({
          response,
          userLinks
        });
        mw.storage.setObject(storageKeyLocked + guiuser, response, 60 * 60 * 24);
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
  })();
};
var markBlockedUserLinks = (userLinks) => {
  let users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  var _iterator6 = _createForOfIteratorHelper(users), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const user = _step6.value;
      if (mw.storage.getObject(storageKeyBlocked + user)) {
        var _response$query7, _response$query8;
        const response = mw.storage.getObject(storageKeyBlocked + user);
        if ((_response$query7 = response["query"]) !== null && _response$query7 !== void 0 && _response$query7.blocks || (_response$query8 = response["query"]) !== null && _response$query8 !== void 0 && _response$query8.globalblocks) {
          var _response$query9, _response$query10;
          if ((_response$query9 = response["query"]) !== null && _response$query9 !== void 0 && _response$query9.blocks) {
            markLocalBlocks({
              response,
              userLinks
            });
          }
          if ((_response$query10 = response["query"]) !== null && _response$query10 !== void 0 && _response$query10.globalblocks) {
            markGlobalBlocks({
              response,
              userLinks
            });
          }
          users = users.filter((element) => {
            return element !== user;
          });
        }
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      try {
        var _response$query5, _response$query6;
        const response = yield queryUserBlocks(bkusers);
        if ((_response$query5 = response["query"]) !== null && _response$query5 !== void 0 && _response$query5.blocks) {
          markLocalBlocks({
            response,
            userLinks
          });
          var _iterator7 = _createForOfIteratorHelper(response["query"].blocks), _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
              const block = _step7.value;
              if (block.user) {
                mw.storage.setObject(storageKeyLocked + block.user, response, 60 * 60);
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
        if ((_response$query6 = response["query"]) !== null && _response$query6 !== void 0 && _response$query6.globalblocks) {
          markGlobalBlocks({
            response,
            userLinks
          });
          var _iterator8 = _createForOfIteratorHelper(response["query"].globalblocks), _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
              const block = _step8.value;
              if (block.target) {
                mw.storage.setObject(storageKeyLocked + block.target, response, 60 * 60);
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    });
  }
  void _asyncToGenerator(function* () {
    for (var _i3 = 0, _promises2 = promises; _i3 < _promises2.length; _i3++) {
      const promise = _promises2[_i3];
      try {
        yield promise();
      } catch {
      }
    }
  })();
};
var markBlockedIPLinks = (userLinks) => {
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  const promises = [];
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 25);
    if (!bkusers.length) {
      continue;
    }
    var _iterator9 = _createForOfIteratorHelper(bkusers), _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
        let bkip = _step9.value;
        if (!mw.util.isIPv4Address(bkip) && !mw.util.isIPv6Address(bkip)) {
          continue;
        }
        if (mw.util.isIPv6Address(bkip)) {
          bkip = bkip.toUpperCase();
        }
        if (mw.storage.getObject(storageKeyBlocked + bkip)) {
          var _response$query11, _response$query12;
          const response = mw.storage.getObject(storageKeyBlocked + bkip);
          if ((_response$query11 = response["query"]) !== null && _response$query11 !== void 0 && _response$query11.blocks) {
            markLocalBlocks({
              response,
              userLinks
            });
          }
          if ((_response$query12 = response["query"]) !== null && _response$query12 !== void 0 && _response$query12.globalblocks) {
            markGlobalBlocks({
              response,
              userLinks
            });
          }
          continue;
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          try {
            var _response$query13, _response$query14;
            const response = yield queryIPBlocks(bkip);
            if ((_response$query13 = response["query"]) !== null && _response$query13 !== void 0 && _response$query13.blocks) {
              markLocalBlocks({
                response,
                userLinks,
                bkip
              });
              var _iterator10 = _createForOfIteratorHelper(response["query"].blocks), _step10;
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                  const block = _step10.value;
                  if (block.user) {
                    mw.storage.setObject(storageKeyLocked + block.user, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
            if ((_response$query14 = response["query"]) !== null && _response$query14 !== void 0 && _response$query14.globalblocks) {
              markGlobalBlocks({
                response,
                userLinks,
                bkip
              });
              var _iterator11 = _createForOfIteratorHelper(response["query"].globalblocks), _step11;
              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                  const block = _step11.value;
                  if (block.target) {
                    mw.storage.setObject(storageKeyLocked + block.target, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }
          } catch (error) {
            console.error("[MarkBlocked] Ajax error:", error);
          }
        });
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
  }
  void _asyncToGenerator(function* () {
    for (var _i4 = 0, _promises3 = promises; _i4 < _promises3.length; _i4++) {
      const promise = _promises3[_i4];
      try {
        yield promise();
      } catch {
      }
    }
  })();
};
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/MarkBlocked/modules/util/generateUserNamespaceTitles.ts
var generateUserNamespaceTitles = () => {
  const {
    wgNamespaceIds
  } = mw.config.get();
  const userNamespaceTitles2 = [];
  for (var _i5 = 0, _Object$entries = Object.entries(wgNamespaceIds); _i5 < _Object$entries.length; _i5++) {
    const [namespace, id] = _Object$entries[_i5];
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
  var _iterator12 = _createForOfIteratorHelper($content.find("a")), _step12;
  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
      var _user, _userLinks$_user;
      const element = _step12.value;
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
      (_userLinks$_user = userLinks[_user = user]) !== null && _userLinks$_user !== void 0 ? _userLinks$_user : userLinks[_user] = [];
      userLinks[user][userLinks[user].length] = $element;
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
  return userLinks;
};
//! src/MarkBlocked/modules/markBlockedUser.ts
var markBlockedUser = ($content) => {
  const userLinks = generateUserLinks($content);
  markGlobalLockedUserLinks(userLinks);
  markBlockedUserLinks(userLinks);
  markBlockedIPLinks(userLinks);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICIuLi8uLi9zcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9pMThuLnRzIiwgIi4uLy4uL3NyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcGFyc2VUaW1lLnRzIiwgIi4uLy4uL3NyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzIiwgIi4uLy4uL3NyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvbWFya0xpbmtzLnRzIiwgIi4uLy4uL3NyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgIi4uLy4uL3NyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcXVlcnkudHMiLCAiLi4vLi4vc3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrVXNlckxpbmtzLnRzIiwgIi4uLy4uL3NyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAiLi4vLi4vc3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMudHMiLCAiLi4vLi4vc3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgIi4uLy4uL3NyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAiLi4vLi4vc3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJzdG9yYWdlS2V5TG9ja2VkXCI6IFwiZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0xvY2tlZC1cIixcblx0XCJzdG9yYWdlS2V5QmxvY2tlZFwiOiBcImV4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNCbG9ja2VkLVwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRpbmZpbml0eTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdpbmZpbml0eScsXG5cdFx0XHQnemgtaGFucyc6ICfml6DpmZDmnJ8nLFxuXHRcdFx0J3poLWhhbnQnOiAn54Sh6ZmQ5pyfJyxcblx0XHR9KSxcblx0XHRCbG9ja2VkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzsgJDVibG9ja2VkICgkMSkgYnkgJDI6ICQzICgkNCBhZ28pJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8m+eUsSQyJDXlsIHnpoEkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yb55SxJDIkNeWwgemOliQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0fSksXG5cdFx0J0dsb2JhbGx5IEJsb2NrZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzsgJDVibG9ja2VkIGdsb2JhbGx5ICgkMSkgYnkgJDI6ICQzICgkNCBhZ28pJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8m+eUsSQyJDXlhajln5/lsIHnpoEkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yb55SxJDIkNeWFqOWfn+WwgemOliQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0fSksXG5cdFx0TG9ja2VkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzsgTG9ja2VkJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8m+W3suWFqOWfn+mUgeWumicsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvlt7Llhajln5/pjpblrponLFxuXHRcdH0pLFxuXHRcdHBhcnRpYWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGFydGlhbCAnLFxuXHRcdFx0emg6ICfpg6jliIYnLFxuXHRcdH0pLFxuXHRcdGQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGF5Jyxcblx0XHRcdHpoOiAn5aSpJyxcblx0XHR9KSxcblx0XHRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3NlY29uZCcsXG5cdFx0XHR6aDogJ+enkicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGFkZFplcm8gPSAodjogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHYgPD0gOSA/IGAwJHt2fWAgOiBgJHt2fWA7XG59O1xuXG5jb25zdCBpbkhvdXJzID0gKG1zOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRsZXQgbW06IG51bWJlciA9IE1hdGguZmxvb3IobXMgLyA2ZTQpO1xuXHRpZiAoIW1tKSB7XG5cdFx0cmV0dXJuIGAke01hdGguZmxvb3IobXMgLyAxZTMpfSR7Z2V0TWVzc2FnZSgncycpfWA7XG5cdH1cblxuXHRsZXQgaGg6IG51bWJlciA9IE1hdGguZmxvb3IobW0gLyA2MCk7XG5cdG1tICU9IDYwO1xuXG5cdGNvbnN0IGRkOiBudW1iZXIgPSBNYXRoLmZsb29yKGhoIC8gMjQpO1xuXHRoaCAlPSAyNDtcblxuXHRpZiAoZGQpIHtcblx0XHRyZXR1cm4gYCR7ZGQgKyAoZGQgPCAxMCA/IGAuJHthZGRaZXJvKGhoKX1gIDogJycpfSR7Z2V0TWVzc2FnZSgnZCcpfWA7XG5cdH1cblxuXHRyZXR1cm4gYCR7aGh9OiR7YWRkWmVybyhtbSl9YDtcbn07XG5cbi8vIDIwMDgxMjI2MjIwNjA1IG9yIDIwMDgtMDEtMjZUMDY6MzQ6MTlaIC0+IG51bWJlclxuY29uc3QgcGFyc2VUUyA9IChzdHJpbmc6IHN0cmluZyk6IG51bWJlciA9PiB7XG5cdGNvbnN0IG06IFJlZ0V4cE1hdGNoQXJyYXkgPSBzdHJpbmdcblx0XHQucmVwbGFjZSgvXFxEL2csICcnKVxuXHRcdC5tYXRjaCgvKFxcZFxcZFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpLykgYXMgUmVnRXhwTWF0Y2hBcnJheTtcblxuXHRyZXR1cm4gbmV3IERhdGUoXG5cdFx0RGF0ZS5VVEMoXG5cdFx0XHQrKG1bMV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVsyXSBhcyBzdHJpbmcpIC0gMSxcblx0XHRcdCsobVszXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzRdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNV0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs2XSBhcyBzdHJpbmcpXG5cdFx0KVxuXHQpLmdldFRpbWUoKTtcbn07XG5cbmV4cG9ydCB7aW5Ib3VycywgcGFyc2VUU307XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtJbmRlZiA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua0luZGVmX3h0QWZPR19fNDkxXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtMb2NrZWQgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtMb2NrZWRfeHRBZk9HX180OTFcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1BhcnRpYWwgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtQYXJ0aWFsX3h0QWZPR19fNDkxXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtUZW1wID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rVGVtcF94dEFmT0dfXzQ5MVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwidXNlcmxpbmtJbmRlZlwiOiB1c2VybGlua0luZGVmLFxuICBcInVzZXJsaW5rTG9ja2VkXCI6IHVzZXJsaW5rTG9ja2VkLFxuICBcInVzZXJsaW5rUGFydGlhbFwiOiB1c2VybGlua1BhcnRpYWwsXG4gIFwidXNlcmxpbmtUZW1wXCI6IHVzZXJsaW5rVGVtcFxufTtcbiAgICAgICIsICJpbXBvcnQgdHlwZSB7UXVlcnlHbG9iYWxMb2Nrc1Jlc3BvbnNlLCBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2V9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7aW5Ib3VycywgcGFyc2VUU30gZnJvbSAnLi9wYXJzZVRpbWUnO1xuaW1wb3J0IHt1c2VybGlua0luZGVmLCB1c2VybGlua0xvY2tlZCwgdXNlcmxpbmtQYXJ0aWFsLCB1c2VybGlua1RlbXB9IGZyb20gJy4uL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENhbGxiYWNrOiByZWNlaXZlIGRhdGEgYW5kIG1hcmsgbGlua3NcbiAqL1xuXG5jb25zdCBtYXJrR2xvYmFsTG9ja2VkTGlua3MgPSAoe1xuXHRyZXNwb25zZSxcblx0dXNlckxpbmtzLFxufToge1xuXHRyZXNwb25zZTogUXVlcnlHbG9iYWxMb2Nrc1Jlc3BvbnNlO1xuXHR1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPjtcbn0pOiB2b2lkID0+IHtcblx0Ly8gR2xvYmFsIGxvY2tzXG5cdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbHVzZXJpbmZvKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdXNlciA9IHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbHVzZXJpbmZvPy5uYW1lO1xuXHRjb25zdCBsb2NrZWQgPSByZXNwb25zZVsncXVlcnknXS5nbG9iYWx1c2VyaW5mbz8ubG9ja2VkO1xuXG5cdGlmICghbG9ja2VkIHx8ICF1c2VyKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdMb2NrZWQnKTtcblxuXHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW3VzZXJdO1xuXHRpZiAoISRsaW5rcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsYXNzTmFtZSA9IHVzZXJsaW5rTG9ja2VkIGFzIHN0cmluZztcblxuXHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHR9XG59O1xuXG5jb25zdCBtYXJrTG9jYWxCbG9ja3MgPSAoe1xuXHRyZXNwb25zZSxcblx0dXNlckxpbmtzLFxuXHRia2lwLFxufToge1xuXHRyZXNwb25zZTogUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXHR1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPjtcblx0YmtpcD86IHN0cmluZztcbn0pOiB2b2lkID0+IHtcblx0Ly8gTG9jYWwgYmxvY2tzXG5cdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0Y29uc3QgaXNQYXJ0aWFsQmxjb2s6IGJvb2xlYW4gPSB0eXBlb2YgYmxvY2sucmVzdHJpY3Rpb25zID09PSAnc3RyaW5nJyAmJiBibG9jay5yZXN0cmljdGlvbnMgIT09ICcnOyAvLyBQYXJ0aWFsIGJsb2NrXG5cblx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSB1c2VybGlua1BhcnRpYWwgYXMgc3RyaW5nO1xuXHRcdGxldCBibG9ja1RpbWU6IHN0cmluZyA9ICcnO1xuXHRcdGlmIChibG9jay5leHBpcnkuc3RhcnRzV2l0aCgnaW4nKSkge1xuXHRcdFx0aWYgKCFpc1BhcnRpYWxCbGNvaykge1xuXHRcdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua0luZGVmIGFzIHN0cmluZztcblx0XHRcdH1cblx0XHRcdGJsb2NrVGltZSA9IGdldE1lc3NhZ2UoJ2luZmluaXR5Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtUZW1wIGFzIHN0cmluZztcblx0XHRcdH1cblx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHR9XG5cblx0XHRsZXQgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdCbG9ja2VkJylcblx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdC5yZXBsYWNlKCckMicsIGJsb2NrLmJ5KVxuXHRcdFx0LnJlcGxhY2UoJyQzJywgYmxvY2sucmVhc29uKVxuXHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0dGlwID0gaXNQYXJ0aWFsQmxjb2sgPyB0aXAucmVwbGFjZSgnJDUnLCBnZXRNZXNzYWdlKCdwYXJ0aWFsJykpIDogdGlwLnJlcGxhY2UoJyQ1JywgJycpO1xuXG5cdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tia2lwID8/IGJsb2NrLnVzZXJdO1xuXHRcdGlmICghJGxpbmtzKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHQkbGluay5hZGRDbGFzcyhjbGFzc05hbWUpLmF0dHIoJ3RpdGxlJywgJGxpbmsuYXR0cigndGl0bGUnKSArIHRpcCk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBtYXJrR2xvYmFsQmxvY2tzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcblx0YmtpcCxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG5cdGJraXA/OiBzdHJpbmc7XG59KTogdm9pZCA9PiB7XG5cdC8vIEdsb2JhbCBibG9ja3Ncblx0aWYgKCFyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5nbG9iYWxibG9ja3MpIHtcblx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSB1c2VybGlua1BhcnRpYWwgYXMgc3RyaW5nO1xuXHRcdGxldCBibG9ja1RpbWU6IHN0cmluZyA9ICcnO1xuXHRcdGlmIChibG9jay5leHBpcnkuc3RhcnRzV2l0aCgnaW4nKSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua1RlbXAgYXMgc3RyaW5nO1xuXHRcdFx0YmxvY2tUaW1lID0gaW5Ib3VycyhwYXJzZVRTKGJsb2NrLmV4cGlyeSkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpO1xuXHRcdH1cblxuXHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0dsb2JhbGx5IEJsb2NrZWQnKVxuXHRcdFx0LnJlcGxhY2UoJyQxJywgYmxvY2tUaW1lKVxuXHRcdFx0LnJlcGxhY2UoJyQyJywgYmxvY2suYnkpXG5cdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHQucmVwbGFjZSgnJDQnLCBpbkhvdXJzKERhdGUubm93KCkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpKTtcblx0XHR0aXAgPSB0aXAucmVwbGFjZSgnJDUnLCAnJyk7XG5cblx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2JraXAgPz8gYmxvY2sudGFyZ2V0XTtcblx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHttYXJrR2xvYmFsTG9ja2VkTGlua3MsIG1hcmtMb2NhbEJsb2NrcywgbWFya0dsb2JhbEJsb2Nrc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrQmxvY2tlZC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7QXBpUXVlcnlHbG9iYWxCbG9ja3NQYXJhbXNSZWRlZmluZWR9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5R2xvYmFsVXNlckluZm8gPSBhc3luYyAoZ3VpdXNlcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bWV0YTogWydnbG9iYWx1c2VyaW5mbyddLFxuXHRcdGd1aXVzZXIsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5jb25zdCBxdWVyeUlQQmxvY2tzID0gYXN5bmMgKGJraXA6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5QmxvY2tzUGFyYW1zICYgQXBpUXVlcnlHbG9iYWxCbG9ja3NQYXJhbXNSZWRlZmluZWQgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiBbJ2Jsb2NrcycsICdnbG9iYWxibG9ja3MnXSxcblx0XHRia2lwLFxuXHRcdGJrbGltaXQ6IDEwMCxcblx0XHRia3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICdyZXN0cmljdGlvbnMnLCAndGltZXN0YW1wJywgJ3VzZXInXSxcblx0XHRiZ2lwOiBia2lwLFxuXHRcdGJnbGltaXQ6IDEwMCxcblx0XHRiZ3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICd0aW1lc3RhbXAnLCAndGFyZ2V0J10sXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5jb25zdCBxdWVyeVVzZXJCbG9ja3MgPSBhc3luYyAoYmt1c2Vyczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyAmIEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogWydibG9ja3MnLCAnZ2xvYmFsYmxvY2tzJ10sXG5cdFx0Ymt1c2Vycyxcblx0XHRia2xpbWl0OiAxMDAsXG5cdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0YmdsaW1pdDogMTAwLFxuXHRcdGJndGFyZ2V0czogYmt1c2Vycyxcblx0XHRiZ3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICd0aW1lc3RhbXAnLCAndGFyZ2V0J10sXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckluZm8sIHF1ZXJ5SVBCbG9ja3MsIHF1ZXJ5VXNlckJsb2Nrc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge1F1ZXJ5R2xvYmFsTG9ja3NSZXNwb25zZSwgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge21hcmtHbG9iYWxCbG9ja3MsIG1hcmtHbG9iYWxMb2NrZWRMaW5rcywgbWFya0xvY2FsQmxvY2tzfSBmcm9tICcuL21hcmtMaW5rcyc7XG5pbXBvcnQge3F1ZXJ5R2xvYmFsVXNlckluZm8sIHF1ZXJ5SVBCbG9ja3MsIHF1ZXJ5VXNlckJsb2Nrc30gZnJvbSAnLi9xdWVyeSc7XG5cbmNvbnN0IG1hcmtHbG9iYWxMb2NrZWRVc2VyTGlua3MgPSAodXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4pID0+IHtcblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Ly8gR2xvYmFsIExvY2sgcXVlcmllc1xuXHRmb3IgKGNvbnN0IGd1aXVzZXIgb2YgdXNlcnMpIHtcblx0XHRpZiAobXcudXRpbC5pc0lQdjRBZGRyZXNzKGd1aXVzZXIpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyhndWl1c2VyKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2tlZCArIGd1aXVzZXIpKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2tlZCArIGd1aXVzZXIpIGFzIFF1ZXJ5R2xvYmFsTG9ja3NSZXNwb25zZTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0XHRtYXJrR2xvYmFsTG9ja2VkTGlua3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5R2xvYmFsVXNlckluZm8oZ3VpdXNlcikpIGFzIFF1ZXJ5R2xvYmFsTG9ja3NSZXNwb25zZTtcblxuXHRcdFx0XHRtYXJrR2xvYmFsTG9ja2VkTGlua3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblxuXHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBndWl1c2VyLCByZXNwb25zZSwgNjAgKiA2MCAqIDI0KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5jb25zdCBtYXJrQmxvY2tlZFVzZXJMaW5rcyA9ICh1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPikgPT4ge1xuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChjb25zdCB1c2VyIG9mIHVzZXJzKSB7XG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyKSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBtdy5zdG9yYWdlLmdldE9iamVjdChcblx0XHRcdFx0T1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIHVzZXJcblx0XHRcdCkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2NrcyB8fCByZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtHbG9iYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHVzZXJzID0gdXNlcnMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09IHVzZXI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIExvY2FsIGFuZCBnbG9iYWwgdXNlciBibG9jayBxdWVyaWVzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgcXVlcnlVc2VyQmxvY2tzKGJrdXNlcnMpKSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrTG9jYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblxuXHRcdFx0XHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRpZiAoYmxvY2sudXNlcikge1xuXHRcdFx0XHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBibG9jay51c2VyLCByZXNwb25zZSwgNjAgKiA2MCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrR2xvYmFsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdFx0aWYgKGJsb2NrLnRhcmdldCkge1xuXHRcdFx0XHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBibG9jay50YXJnZXQsIHJlc3BvbnNlLCA2MCAqIDYwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5jb25zdCBtYXJrQmxvY2tlZElQTGlua3MgPSAodXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4pID0+IHtcblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Ly8gTG9jYWwgYW5kIGdsb2JhbCBJUCBibG9jayBxdWVyaWVzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBia2lwIG9mIGJrdXNlcnMpIHtcblx0XHRcdGlmICghbXcudXRpbC5pc0lQdjRBZGRyZXNzKGJraXApICYmICFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0YmtpcCA9IGJraXAudG9VcHBlckNhc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBia2lwKSkge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KFxuXHRcdFx0XHRcdE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBia2lwXG5cdFx0XHRcdCkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtHbG9iYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5SVBCbG9ja3MoYmtpcCkpIGFzIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblxuXHRcdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRtYXJrTG9jYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3MsIGJraXB9KTtcblxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGJsb2NrLnVzZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBibG9jay51c2VyLCByZXNwb25zZSwgNjAgKiA2MCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdFx0bWFya0dsb2JhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rcywgYmtpcH0pO1xuXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoYmxvY2sudGFyZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9ja2VkICsgYmxvY2sudGFyZ2V0LCByZXNwb25zZSwgNjAgKiA2MCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpO1xufTtcblxuZXhwb3J0IHttYXJrR2xvYmFsTG9ja2VkVXNlckxpbmtzLCBtYXJrQmxvY2tlZFVzZXJMaW5rcywgbWFya0Jsb2NrZWRJUExpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge013VXJpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9IGZyb20gJy4vZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzJztcblxuLy8gR2V0IGFsbCBhbGlhc2VzIGZvciB1c2VyOiAmIHVzZXJfdGFsazpcbmNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzKCk7XG4vLyBSZWdFeHAgZm9yIGFsbCB0aXRsZXMgdGhhdCBhcmUgIFVzZXI6fCBVc2VyX3RhbGs6IHwgU3BlY2lhbDpDb250cmlidXRpb25zLyAoZm9yIHVzZXJzY3JpcHRzKVxuY29uc3QgdXNlclRpdGxlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdGBeKCR7dXNlck5hbWVzcGFjZVRpdGxlcy5qb2luKCd8Jyl9fCR7T1BUSU9OUy5jb250cmlidXRpb25zUGFnZUFsaWFzfVxcXFwvKSsoW15cXFxcLyNdKykkYCxcblx0J2knXG4pO1xuXG4vLyBSZWdFeHAgZm9yIGxpbmtzXG4vLyBhcnRpY2xlUmVnZXggYWxzbyBtYXRjaGVzIGV4dGVybmFsIGxpbmtzIGluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIG5vcGluZyB0ZW1wbGF0ZVxuY29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShbXiNdKylgKTtcbmNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShbXiMmXSspYCk7XG5cbmNvbnN0IGdlbmVyYXRlVXNlckxpbmtzID0gKCRjb250ZW50OiBKUXVlcnkpOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IHt9O1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kKCdhJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKFxuXHRcdFx0JGVsZW1lbnQuaGFzQ2xhc3MoJ213LWNoYW5nZXNsaXN0LWRhdGUnKSB8fFxuXHRcdFx0JGVsZW1lbnQuaGFzQ2xhc3MoJ2V4dC1kaXNjdXNzaW9udG9vbHMtaW5pdC10aW1lc3RhbXBsaW5rJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1oaXN0b3J5LXVuZG8nKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LXJvbGxiYWNrLWxpbmsnKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignaHJlZicpO1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoaHJlZi5yZXBsYWNlKC9eKD86aHR0cHM/OlxcL1xcLykvaSwgJycpKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHQvLyBNYXliZSBhYnNvbHV0ZSBVUkxcblx0XHRcdGlmIChuZXcgTXdVcmkoaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIE1heWJlIHJlbGF0aXZlIFVSTFxuXHRcdFx0XHRpZiAobmV3IE13VXJpKGxvY2F0aW9uLmhyZWYgKyBocmVmKS5ob3N0ICE9PSBsb2NhdGlvbi5ob3N0KSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgcGFnZVRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGFydGljbGVSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gYXJ0aWNsZVJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0cGFnZVRpdGxlID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSBpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0cGFnZVRpdGxlID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwYWdlVGl0bGUgPSBkZWNvZGVVUklDb21wb25lbnQocGFnZVRpdGxlKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cblx0XHRjb25zdCB1c2VyRXhlY0FycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gdXNlclRpdGxlUmVnZXguZXhlYyhwYWdlVGl0bGUpO1xuXHRcdGlmICghdXNlckV4ZWNBcnJheSB8fCB0eXBlb2YgdXNlckV4ZWNBcnJheVsyXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCB1c2VyOiBzdHJpbmcgPSB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDEpO1xuXHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3ModXNlcikpIHtcblx0XHRcdHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0dXNlckxpbmtzW3VzZXJdID8/PSBbXTtcblxuXHRcdCh1c2VyTGlua3NbdXNlcl0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKVtcblx0XHRcdCh1c2VyTGlua3NbdXNlcl0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKS5sZW5ndGhcblx0XHRdID0gJGVsZW1lbnQ7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gdXNlckxpbmtzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMgPSAoKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VJZHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gW107XG5cblx0Zm9yIChjb25zdCBbbmFtZXNwYWNlLCBpZF0gb2YgT2JqZWN0LmVudHJpZXMod2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0aWYgKCFPUFRJT05TLnVzZXJOYW1lc3BhY2VOdW1iZXJzLmluY2x1ZGVzKGlkKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlck5hbWVzcGFjZVRpdGxlc1t1c2VyTmFtZXNwYWNlVGl0bGVzLmxlbmd0aF0gPSBgJHttdy51dGlsLmVzY2FwZVJlZ0V4cChuYW1lc3BhY2UucmVwbGFjZSgvXy9nLCAnICcpKX06YDsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdHJldHVybiB1c2VyTmFtZXNwYWNlVGl0bGVzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9O1xuIiwgImltcG9ydCB7bWFya0Jsb2NrZWRJUExpbmtzLCBtYXJrQmxvY2tlZFVzZXJMaW5rcywgbWFya0dsb2JhbExvY2tlZFVzZXJMaW5rc30gZnJvbSAnLi91dGlsL21hcmtVc2VyTGlua3MnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVXNlckxpbmtzJztcblxuY29uc3QgbWFya0Jsb2NrZWRVc2VyID0gKCRjb250ZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Ly8gRmluZCBhbGwgXCJ1c2VyXCIgbGlua3MgYW5kIHNhdmUgdGhlbSBpbiB1c2VyTGlua3MgOiB7ICd1c2Vycyc6IFs8bGluazE+LCA8bGluazI+LCAuLi5dLCAndXNlcjInOiBbPGxpbmszPiwgPGxpbmszPiwgLi4uXSwgLi4uIH1cblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPSBnZW5lcmF0ZVVzZXJMaW5rcygkY29udGVudCk7XG5cblx0bWFya0dsb2JhbExvY2tlZFVzZXJMaW5rcyh1c2VyTGlua3MpO1xuXHRtYXJrQmxvY2tlZFVzZXJMaW5rcyh1c2VyTGlua3MpO1xuXHRtYXJrQmxvY2tlZElQTGlua3ModXNlckxpbmtzKTtcbn07XG5cbmV4cG9ydCB7bWFya0Jsb2NrZWRVc2VyfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkVXNlcn0gZnJvbSAnLi9tYXJrQmxvY2tlZFVzZXInO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya0Jsb2NrZWQoJGNvbnRlbnQpOiB2b2lkIHtcblx0XHRpZiAoaXNJbml0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlzSW5pdCA9IHRydWU7XG5cblx0XHQvLyBPbiB0aGUgZmlyc3QgY2FsbCBhZnRlciBpbml0aWFsIHBhZ2UgbG9hZCwgY29udGFpbmVyIGlzIG13LnV0aWwuJGNvbnRlbnRcblx0XHQvLyBVc2VkIHRvIGxpbWl0IG1haW5zcGFjZSBhY3Rpdml0eSB0byBqdXN0IHRoZSBkaWZmIGRlZmluaXRpb25zXG5cdFx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRcdCRjb250ZW50ID0gJGNvbnRlbnQuZmluZCgnLmRpZmYtdGl0bGUnKTtcblx0XHR9XG5cdFx0Ly8gT24gcGFnZSBsb2FkLCBhbHNvIHVwZGF0ZSB0aGUgbmFtZXNwYWNlIHRhYlxuXHRcdCRjb250ZW50ID0gJGNvbnRlbnQuYWRkKCcjY2EtbnN0YWItdXNlcicpO1xuXG5cdFx0bWFya0Jsb2NrZWRVc2VyKCRjb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgImltcG9ydCB7YWRkSG9va30gZnJvbSAnLi9tb2R1bGVzL2FkZEhvb2snO1xuXG5pZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpKSkge1xuXHRhZGRIb29rKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSx5QkFBMEI7QUFDMUIsSUFBQUMsdUJBQXdCLENBQUMsR0FBRyxDQUFDO0FBQzdCLElBQUFDLG1CQUFvQjtBQUNwQixJQUFBQyxvQkFBcUI7QUFDckIsSUFBQUMsVUFBVzs7QUNMWixJQUFBQyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsV0FBQSxHQUFVSCxrQkFBQUksVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNOLGtCQUFBSSxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QscUJBQUEsR0FBb0JMLGtCQUFBSSxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFNBQUEsR0FBUVAsa0JBQUFJLFVBQVM7TUFDaEJDLElBQUk7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QWpLLFVBQUFnSyxRQUFVM0osSUFBSSxPQUFBLFFBQUE0SixxQkFBQSxTQUFBQSxtQkFBZGpLLFVBQUFnSyxLQUFBLElBQW9CLENBQUE7QUFFbkJoSyxnQkFBVUssSUFBSSxFQUNiTCxVQUFVSyxJQUFJLEVBQWlEZ0YsTUFDakUsSUFBSTZFO0lBQ0w7RUFBQSxTQUFBOUksS0FBQTtBQUFBeUksZ0JBQUF4SSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBeUksZ0JBQUF2SSxFQUFBO0VBQUE7QUFFQSxTQUFPdEI7QUFDUjs7QUVwRkEsSUFBTWdMLGtCQUFtQnBCLGNBQTJCO0FBRW5ELFFBQU01SixZQUFzQzJKLGtCQUFrQkMsUUFBUTtBQUV0RTNFLDRCQUEwQmpGLFNBQVM7QUFDbkNzRyx1QkFBcUJ0RyxTQUFTO0FBQzlCeUgscUJBQW1CekgsU0FBUztBQUM3Qjs7QUNSQSxJQUFNO0VBQUNpTDtFQUFVQztBQUFpQixJQUFJekYsR0FBR2lELE9BQU8zRSxJQUFJO0FBRXBELElBQU1vSCxVQUFVQSxNQUFZO0FBQzNCLE1BQUlDLFNBQWtCO0FBRXRCM0YsS0FBRzRGLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsWUFBWTNCLFVBQWdCO0FBQ3BFLFFBQUl3QixRQUFRO0FBQ1g7SUFDRDtBQUNBQSxhQUFTO0FBSVQsUUFBSUgsYUFBYSxVQUFVQyxzQkFBc0IsR0FBRztBQUNuRHRCLGlCQUFXQSxTQUFTRSxLQUFLLGFBQWE7SUFDdkM7QUFFQUYsZUFBV0EsU0FBUzBCLElBQUksZ0JBQWdCO0FBRXhDTixvQkFBZ0JwQixRQUFRO0VBQ3pCLENBQUM7QUFDRjs7QUNyQkEsSUFBSSxDQUFDLENBQUMsUUFBUSxRQUFRLEVBQUVYLFNBQVN4RCxHQUFHaUQsT0FBTzNFLElBQUksVUFBVSxDQUFDLEdBQUc7QUFDNURvSCxVQUFRO0FBQ1Q7IiwKICAibmFtZXMiOiBbImNvbnRyaWJ1dGlvbnNQYWdlQWxpYXMiLCAidXNlck5hbWVzcGFjZU51bWJlcnMiLCAic3RvcmFnZUtleUxvY2tlZCIsICJzdG9yYWdlS2V5QmxvY2tlZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImluZmluaXR5IiwgImxvY2FsaXplIiwgImVuIiwgIkJsb2NrZWQiLCAiTG9ja2VkIiwgInBhcnRpYWwiLCAiemgiLCAiZCIsICJzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhZGRaZXJvIiwgInYiLCAiY29uY2F0IiwgImluSG91cnMiLCAibXMiLCAibW0iLCAiTWF0aCIsICJmbG9vciIsICJoaCIsICJkZCIsICJwYXJzZVRTIiwgInN0cmluZyIsICJtIiwgInJlcGxhY2UiLCAibWF0Y2giLCAiRGF0ZSIsICJVVEMiLCAiZ2V0VGltZSIsICJ1c2VybGlua0luZGVmIiwgInVzZXJsaW5rTG9ja2VkIiwgInVzZXJsaW5rUGFydGlhbCIsICJ1c2VybGlua1RlbXAiLCAibWFya0dsb2JhbExvY2tlZExpbmtzIiwgInJlc3BvbnNlIiwgInVzZXJMaW5rcyIsICJfcmVzcG9uc2UkcXVlcnkiLCAiX3Jlc3BvbnNlJHF1ZXJ5JGdsb2JhIiwgIl9yZXNwb25zZSRxdWVyeSRnbG9iYTIiLCAiZ2xvYmFsdXNlcmluZm8iLCAidXNlciIsICJuYW1lIiwgImxvY2tlZCIsICJ0aXAiLCAiJGxpbmtzIiwgImNsYXNzTmFtZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAibiIsICJkb25lIiwgIiRsaW5rIiwgInZhbHVlIiwgImFkZENsYXNzIiwgImF0dHIiLCAiZXJyIiwgImUiLCAiZiIsICJtYXJrTG9jYWxCbG9ja3MiLCAiYmtpcCIsICJfcmVzcG9uc2UkcXVlcnkyIiwgImJsb2NrcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJibG9jayIsICJpc1BhcnRpYWxCbGNvayIsICJyZXN0cmljdGlvbnMiLCAiYmxvY2tUaW1lIiwgImV4cGlyeSIsICJzdGFydHNXaXRoIiwgInRpbWVzdGFtcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIm1hcmtHbG9iYWxCbG9ja3MiLCAiX3Jlc3BvbnNlJHF1ZXJ5MyIsICJnbG9iYWxibG9ja3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidGFyZ2V0IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgInF1ZXJ5R2xvYmFsVXNlckluZm8iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJndWl1c2VyIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibWV0YSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1ZXJ5SVBCbG9ja3MiLCAiX3JlZjIiLCAibGlzdCIsICJia2xpbWl0IiwgImJrcHJvcCIsICJiZ2lwIiwgImJnbGltaXQiLCAiYmdwcm9wIiwgIl94MiIsICJxdWVyeVVzZXJCbG9ja3MiLCAiX3JlZjMiLCAiYmt1c2VycyIsICJiZ3RhcmdldHMiLCAiX3gzIiwgIm1hcmtHbG9iYWxMb2NrZWRVc2VyTGlua3MiLCAidXNlcnMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgInByb21pc2VzIiwgIl9pIiwgIl91c2VycyIsICJtdyIsICJ1dGlsIiwgImlzSVB2NEFkZHJlc3MiLCAiaXNJUHY2QWRkcmVzcyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJfcmVzcG9uc2UkcXVlcnk0IiwgInNldE9iamVjdCIsICJlcnJvciIsICJjb25zb2xlIiwgIl9pMiIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJtYXJrQmxvY2tlZFVzZXJMaW5rcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfcmVzcG9uc2UkcXVlcnk3IiwgIl9yZXNwb25zZSRxdWVyeTgiLCAiX3Jlc3BvbnNlJHF1ZXJ5OSIsICJfcmVzcG9uc2UkcXVlcnkxMCIsICJmaWx0ZXIiLCAiZWxlbWVudCIsICJpIiwgInNwbGljZSIsICJfcmVzcG9uc2UkcXVlcnk1IiwgIl9yZXNwb25zZSRxdWVyeTYiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiX2kzIiwgIl9wcm9taXNlczIiLCAibWFya0Jsb2NrZWRJUExpbmtzIiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgInRvVXBwZXJDYXNlIiwgIl9yZXNwb25zZSRxdWVyeTExIiwgIl9yZXNwb25zZSRxdWVyeTEyIiwgIl9yZXNwb25zZSRxdWVyeTEzIiwgIl9yZXNwb25zZSRxdWVyeTE0IiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAiX2l0ZXJhdG9yMTEiLCAiX3N0ZXAxMSIsICJfaTQiLCAiX3Byb21pc2VzMyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzIiwgIndnTmFtZXNwYWNlSWRzIiwgImNvbmZpZyIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzMiIsICJfaTUiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAibmFtZXNwYWNlIiwgImlkIiwgImluY2x1ZGVzIiwgImVzY2FwZVJlZ0V4cCIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzIiwgInVzZXJUaXRsZVJlZ2V4IiwgIlJlZ0V4cCIsICJqb2luIiwgIndnQXJ0aWNsZVBhdGgiLCAid2dTY3JpcHQiLCAiYXJ0aWNsZVJlZ2V4IiwgInNjcmlwdFJlZ2V4IiwgImdlbmVyYXRlVXNlckxpbmtzIiwgIiRjb250ZW50IiwgIl9pdGVyYXRvcjEyIiwgImZpbmQiLCAiX3N0ZXAxMiIsICJfdXNlciIsICJfdXNlckxpbmtzJF91c2VyIiwgIiRlbGVtZW50IiwgIiQiLCAiaGFzQ2xhc3MiLCAicGFyZW50IiwgImhyZWYiLCAiTXdVcmkiLCAiaG9zdCIsICJsb2NhdGlvbiIsICJwYWdlVGl0bGUiLCAidGVzdCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VyRXhlY0FycmF5IiwgInNsaWNlIiwgIm1hcmtCbG9ja2VkVXNlciIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJhZGRIb29rIiwgImlzSW5pdCIsICJob29rIiwgImFkZCIsICJtYXJrQmxvY2tlZCJdCn0K
