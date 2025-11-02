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
var storageKeyLocked = "ext.gadget.MarkBlocked_locked-";
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
var userlinkIndef = "MarkBlocked-module__userlinkIndef_xtAfOG__4100";
var userlinkLocked = "MarkBlocked-module__userlinkLocked_xtAfOG__4100";
var userlinkPartial = "MarkBlocked-module__userlinkPartial_xtAfOG__4100";
var userlinkTemp = "MarkBlocked-module__userlinkTemp_xtAfOG__4100";
//! src/MarkBlocked/modules/util/markLinks.ts
var markGlobalLockedLinks = ({
  response,
  userLinks
}) => {
  const user = response === null || response === void 0 ? void 0 : response.name;
  const locked = response === null || response === void 0 ? void 0 : response.locked;
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
  var _response$query2;
  if (!((_response$query2 = response["query"]) !== null && _response$query2 !== void 0 && _response$query2.globalblocks)) {
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
    const {
      query: {
        globaluserinfo: {
          name,
          locked = false,
          missing = false
        }
      }
    } = yield api.get(params);
    const response = {
      name
    };
    if (locked) {
      response.locked = locked;
    }
    if (missing) {
      response.missing = missing;
    }
    return response;
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
      const response = mw.storage.getObject(storageKeyLocked + guiuser);
      if (response) {
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
        var _response$query5, _response$query6;
        const response = mw.storage.getObject(storageKeyBlocked + user);
        if ((_response$query5 = response["query"]) !== null && _response$query5 !== void 0 && _response$query5.blocks || (_response$query6 = response["query"]) !== null && _response$query6 !== void 0 && _response$query6.globalblocks) {
          var _response$query7, _response$query8;
          if ((_response$query7 = response["query"]) !== null && _response$query7 !== void 0 && _response$query7.blocks) {
            markLocalBlocks({
              response,
              userLinks
            });
          }
          if ((_response$query8 = response["query"]) !== null && _response$query8 !== void 0 && _response$query8.globalblocks) {
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
        var _response$query3, _response$query4;
        const response = yield queryUserBlocks(bkusers);
        if ((_response$query3 = response["query"]) !== null && _response$query3 !== void 0 && _response$query3.blocks) {
          markLocalBlocks({
            response,
            userLinks
          });
          var _iterator7 = _createForOfIteratorHelper(response["query"].blocks), _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
              const block = _step7.value;
              if (block.user) {
                mw.storage.setObject(storageKeyBlocked + block.user, response, 60 * 60);
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
        if ((_response$query4 = response["query"]) !== null && _response$query4 !== void 0 && _response$query4.globalblocks) {
          markGlobalBlocks({
            response,
            userLinks
          });
          var _iterator8 = _createForOfIteratorHelper(response["query"].globalblocks), _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
              const block = _step8.value;
              if (block.target) {
                mw.storage.setObject(storageKeyBlocked + block.target, response, 60 * 60);
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
          var _response$query9, _response$query10;
          const response = mw.storage.getObject(storageKeyBlocked + bkip);
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
          continue;
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          try {
            var _response$query11, _response$query12;
            const response = yield queryIPBlocks(bkip);
            if ((_response$query11 = response["query"]) !== null && _response$query11 !== void 0 && _response$query11.blocks) {
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
                    mw.storage.setObject(storageKeyBlocked + block.user, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
            if ((_response$query12 = response["query"]) !== null && _response$query12 !== void 0 && _response$query12.globalblocks) {
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
                    mw.storage.setObject(storageKeyBlocked + block.target, response, 60 * 60);
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
//! src/MarkBlocked/modules/util/clearOldKeys.ts
var clearOldKeys = () => {
  if (mw.storage.getObject("ext.gadget.MarkBlocked_oldKeysCleared")) {
    return;
  }
  for (const key in localStorage) {
    if (Object.hasOwn(localStorage, key)) {
      if (key.startsWith("ext.gadget.MarkBlocked_isLocked-") || key.startsWith("_EXPIRY_ext.gadget.MarkBlocked_isLocked-")) {
        localStorage.removeItem(key);
      }
    }
  }
  mw.storage.setObject("ext.gadget.MarkBlocked_oldKeysCleared", true);
};
//! src/MarkBlocked/MarkBlocked.ts
if (!["edit", "submit"].includes(mw.config.get("wgAction"))) {
  addHook();
}
if (!mw.storage.getObject("ext.gadget.MarkBlocked_oldKeysCleared")) {
  void clearOldKeys();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcGFyc2VUaW1lLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvbWFya0xpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcXVlcnkudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9jbGVhck9sZEtleXMudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJzdG9yYWdlS2V5TG9ja2VkXCI6IFwiZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9sb2NrZWQtXCIsXG5cdFwic3RvcmFnZUtleUJsb2NrZWRcIjogXCJleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX2lzQmxvY2tlZC1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0aW5maW5pdHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnaW5maW5pdHknLFxuXHRcdFx0J3poLWhhbnMnOiAn5peg6ZmQ5pyfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eEoemZkOacnycsXG5cdFx0fSksXG5cdFx0QmxvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdCdHbG9iYWxseSBCbG9ja2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7ICQ1YmxvY2tlZCBnbG9iYWxseSAoJDEpIGJ5ICQyOiAkMyAoJDQgYWdvKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvnlLEkMiQ15YWo5Z+f5bCB56aBJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+eUsSQyJDXlhajln5/lsIHpjpYkMe+8miQz77yIJDTliY3vvIknLFxuXHRcdH0pLFxuXHRcdExvY2tlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc7IExvY2tlZCcsXG5cdFx0XHQnemgtaGFucyc6ICfvvJvlt7Llhajln5/plIHlrponLFxuXHRcdFx0J3poLWhhbnQnOiAn77yb5bey5YWo5Z+f6Y6W5a6aJyxcblx0XHR9KSxcblx0XHRwYXJ0aWFsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3BhcnRpYWwgJyxcblx0XHRcdHpoOiAn6YOo5YiGJyxcblx0XHR9KSxcblx0XHRkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RheScsXG5cdFx0XHR6aDogJ+WkqScsXG5cdFx0fSksXG5cdFx0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdzZWNvbmQnLFxuXHRcdFx0emg6ICfnp5InLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBhZGRaZXJvID0gKHY6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdHJldHVybiB2IDw9IDkgPyBgMCR7dn1gIDogYCR7dn1gO1xufTtcblxuY29uc3QgaW5Ib3VycyA9IChtczogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0bGV0IG1tOiBudW1iZXIgPSBNYXRoLmZsb29yKG1zIC8gNmU0KTtcblx0aWYgKCFtbSkge1xuXHRcdHJldHVybiBgJHtNYXRoLmZsb29yKG1zIC8gMWUzKX0ke2dldE1lc3NhZ2UoJ3MnKX1gO1xuXHR9XG5cblx0bGV0IGhoOiBudW1iZXIgPSBNYXRoLmZsb29yKG1tIC8gNjApO1xuXHRtbSAlPSA2MDtcblxuXHRjb25zdCBkZDogbnVtYmVyID0gTWF0aC5mbG9vcihoaCAvIDI0KTtcblx0aGggJT0gMjQ7XG5cblx0aWYgKGRkKSB7XG5cdFx0cmV0dXJuIGAke2RkICsgKGRkIDwgMTAgPyBgLiR7YWRkWmVybyhoaCl9YCA6ICcnKX0ke2dldE1lc3NhZ2UoJ2QnKX1gO1xuXHR9XG5cblx0cmV0dXJuIGAke2hofToke2FkZFplcm8obW0pfWA7XG59O1xuXG4vLyAyMDA4MTIyNjIyMDYwNSBvciAyMDA4LTAxLTI2VDA2OjM0OjE5WiAtPiBudW1iZXJcbmNvbnN0IHBhcnNlVFMgPSAoc3RyaW5nOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRjb25zdCBtOiBSZWdFeHBNYXRjaEFycmF5ID0gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1xcRC9nLCAnJylcblx0XHQubWF0Y2goLyhcXGRcXGRcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKS8pIGFzIFJlZ0V4cE1hdGNoQXJyYXk7XG5cblx0cmV0dXJuIG5ldyBEYXRlKFxuXHRcdERhdGUuVVRDKFxuXHRcdFx0KyhtWzFdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bMl0gYXMgc3RyaW5nKSAtIDEsXG5cdFx0XHQrKG1bM10gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs0XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzVdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNl0gYXMgc3RyaW5nKVxuXHRcdClcblx0KS5nZXRUaW1lKCk7XG59O1xuXG5leHBvcnQge2luSG91cnMsIHBhcnNlVFN9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rSW5kZWYgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtJbmRlZl94dEFmT0dfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0xvY2tlZCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua0xvY2tlZF94dEFmT0dfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1BhcnRpYWwgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtQYXJ0aWFsX3h0QWZPR19fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHVzZXJsaW5rVGVtcCA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua1RlbXBfeHRBZk9HX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJ1c2VybGlua0luZGVmXCI6IHVzZXJsaW5rSW5kZWYsXG4gIFwidXNlcmxpbmtMb2NrZWRcIjogdXNlcmxpbmtMb2NrZWQsXG4gIFwidXNlcmxpbmtQYXJ0aWFsXCI6IHVzZXJsaW5rUGFydGlhbCxcbiAgXCJ1c2VybGlua1RlbXBcIjogdXNlcmxpbmtUZW1wXG59O1xuICAgICAgIiwgImltcG9ydCB0eXBlIHtHbG9iYWxMb2Nrc1N0b3JhZ2UsIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtpbkhvdXJzLCBwYXJzZVRTfSBmcm9tICcuL3BhcnNlVGltZSc7XG5pbXBvcnQge3VzZXJsaW5rSW5kZWYsIHVzZXJsaW5rTG9ja2VkLCB1c2VybGlua1BhcnRpYWwsIHVzZXJsaW5rVGVtcH0gZnJvbSAnLi4vTWFya0Jsb2NrZWQubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQ2FsbGJhY2s6IHJlY2VpdmUgZGF0YSBhbmQgbWFyayBsaW5rc1xuICovXG5cbmNvbnN0IG1hcmtHbG9iYWxMb2NrZWRMaW5rcyA9ICh7XG5cdHJlc3BvbnNlLFxuXHR1c2VyTGlua3MsXG59OiB7XG5cdHJlc3BvbnNlOiBHbG9iYWxMb2Nrc1N0b3JhZ2U7XG5cdHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+O1xufSk6IHZvaWQgPT4ge1xuXHQvLyBHbG9iYWwgbG9ja3Ncblx0Y29uc3QgdXNlciA9IHJlc3BvbnNlPy5uYW1lO1xuXHRjb25zdCBsb2NrZWQgPSByZXNwb25zZT8ubG9ja2VkO1xuXG5cdGlmICghbG9ja2VkIHx8ICF1c2VyKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdMb2NrZWQnKTtcblxuXHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW3VzZXJdO1xuXHRpZiAoISRsaW5rcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsYXNzTmFtZSA9IHVzZXJsaW5rTG9ja2VkIGFzIHN0cmluZztcblxuXHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHR9XG59O1xuXG5jb25zdCBtYXJrTG9jYWxCbG9ja3MgPSAoe1xuXHRyZXNwb25zZSxcblx0dXNlckxpbmtzLFxuXHRia2lwLFxufToge1xuXHRyZXNwb25zZTogUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXHR1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPjtcblx0YmtpcD86IHN0cmluZztcbn0pOiB2b2lkID0+IHtcblx0Ly8gTG9jYWwgYmxvY2tzXG5cdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0Y29uc3QgaXNQYXJ0aWFsQmxjb2s6IGJvb2xlYW4gPSB0eXBlb2YgYmxvY2sucmVzdHJpY3Rpb25zID09PSAnc3RyaW5nJyAmJiBibG9jay5yZXN0cmljdGlvbnMgIT09ICcnOyAvLyBQYXJ0aWFsIGJsb2NrXG5cblx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSB1c2VybGlua1BhcnRpYWwgYXMgc3RyaW5nO1xuXHRcdGxldCBibG9ja1RpbWU6IHN0cmluZyA9ICcnO1xuXHRcdGlmIChibG9jay5leHBpcnkuc3RhcnRzV2l0aCgnaW4nKSkge1xuXHRcdFx0aWYgKCFpc1BhcnRpYWxCbGNvaykge1xuXHRcdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua0luZGVmIGFzIHN0cmluZztcblx0XHRcdH1cblx0XHRcdGJsb2NrVGltZSA9IGdldE1lc3NhZ2UoJ2luZmluaXR5Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtUZW1wIGFzIHN0cmluZztcblx0XHRcdH1cblx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHR9XG5cblx0XHRsZXQgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdCbG9ja2VkJylcblx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdC5yZXBsYWNlKCckMicsIGJsb2NrLmJ5KVxuXHRcdFx0LnJlcGxhY2UoJyQzJywgYmxvY2sucmVhc29uKVxuXHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0dGlwID0gaXNQYXJ0aWFsQmxjb2sgPyB0aXAucmVwbGFjZSgnJDUnLCBnZXRNZXNzYWdlKCdwYXJ0aWFsJykpIDogdGlwLnJlcGxhY2UoJyQ1JywgJycpO1xuXG5cdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tia2lwID8/IGJsb2NrLnVzZXJdO1xuXHRcdGlmICghJGxpbmtzKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHQkbGluay5hZGRDbGFzcyhjbGFzc05hbWUpLmF0dHIoJ3RpdGxlJywgJGxpbmsuYXR0cigndGl0bGUnKSArIHRpcCk7XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBtYXJrR2xvYmFsQmxvY2tzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcblx0YmtpcCxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG5cdGJraXA/OiBzdHJpbmc7XG59KTogdm9pZCA9PiB7XG5cdC8vIEdsb2JhbCBibG9ja3Ncblx0aWYgKCFyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5nbG9iYWxibG9ja3MpIHtcblx0XHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSB1c2VybGlua1BhcnRpYWwgYXMgc3RyaW5nO1xuXHRcdGxldCBibG9ja1RpbWU6IHN0cmluZyA9ICcnO1xuXHRcdGlmIChibG9jay5leHBpcnkuc3RhcnRzV2l0aCgnaW4nKSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbGFzc05hbWUgPSB1c2VybGlua1RlbXAgYXMgc3RyaW5nO1xuXHRcdFx0YmxvY2tUaW1lID0gaW5Ib3VycyhwYXJzZVRTKGJsb2NrLmV4cGlyeSkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpO1xuXHRcdH1cblxuXHRcdGxldCB0aXA6IHN0cmluZyA9IGdldE1lc3NhZ2UoJ0dsb2JhbGx5IEJsb2NrZWQnKVxuXHRcdFx0LnJlcGxhY2UoJyQxJywgYmxvY2tUaW1lKVxuXHRcdFx0LnJlcGxhY2UoJyQyJywgYmxvY2suYnkpXG5cdFx0XHQucmVwbGFjZSgnJDMnLCBibG9jay5yZWFzb24pXG5cdFx0XHQucmVwbGFjZSgnJDQnLCBpbkhvdXJzKERhdGUubm93KCkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpKTtcblx0XHR0aXAgPSB0aXAucmVwbGFjZSgnJDUnLCAnJyk7XG5cblx0XHRjb25zdCAkbGlua3M6IEpRdWVyeVtdIHwgdW5kZWZpbmVkID0gdXNlckxpbmtzW2JraXAgPz8gYmxvY2sudGFyZ2V0XTtcblx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHttYXJrR2xvYmFsTG9ja2VkTGlua3MsIG1hcmtMb2NhbEJsb2NrcywgbWFya0dsb2JhbEJsb2Nrc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrQmxvY2tlZC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7QXBpUXVlcnlHbG9iYWxCbG9ja3NQYXJhbXNSZWRlZmluZWQsIEdsb2JhbExvY2tzU3RvcmFnZSwgUXVlcnlHbG9iYWxMb2Nrc1Jlc3BvbnNlfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeUdsb2JhbFVzZXJJbmZvID0gYXN5bmMgKGd1aXVzZXI6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZSA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdG1ldGE6IFsnZ2xvYmFsdXNlcmluZm8nXSxcblx0XHRndWl1c2VyLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRjb25zdCB7XG5cdFx0cXVlcnk6IHtcblx0XHRcdGdsb2JhbHVzZXJpbmZvOiB7bmFtZSwgbG9ja2VkID0gZmFsc2UsIG1pc3NpbmcgPSBmYWxzZX0sXG5cdFx0fSxcblx0fSA9IChhd2FpdCBhcGkuZ2V0KHBhcmFtcykpIGFzIFF1ZXJ5R2xvYmFsTG9ja3NSZXNwb25zZTtcblxuXHQvLyBNaW5pZnkgcmVzcG9uc2Ugb2JqZWN0XG5cdGNvbnN0IHJlc3BvbnNlOiBHbG9iYWxMb2Nrc1N0b3JhZ2UgPSB7bmFtZX07XG5cblx0aWYgKGxvY2tlZCkge1xuXHRcdHJlc3BvbnNlLmxvY2tlZCA9IGxvY2tlZDtcblx0fVxuXG5cdGlmIChtaXNzaW5nKSB7XG5cdFx0cmVzcG9uc2UubWlzc2luZyA9IG1pc3Npbmc7XG5cdH1cblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBxdWVyeUlQQmxvY2tzID0gYXN5bmMgKGJraXA6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5QmxvY2tzUGFyYW1zICYgQXBpUXVlcnlHbG9iYWxCbG9ja3NQYXJhbXNSZWRlZmluZWQgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiBbJ2Jsb2NrcycsICdnbG9iYWxibG9ja3MnXSxcblx0XHRia2lwLFxuXHRcdGJrbGltaXQ6IDEwMCxcblx0XHRia3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICdyZXN0cmljdGlvbnMnLCAndGltZXN0YW1wJywgJ3VzZXInXSxcblx0XHRiZ2lwOiBia2lwLFxuXHRcdGJnbGltaXQ6IDEwMCxcblx0XHRiZ3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICd0aW1lc3RhbXAnLCAndGFyZ2V0J10sXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5jb25zdCBxdWVyeVVzZXJCbG9ja3MgPSBhc3luYyAoYmt1c2Vyczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyAmIEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogWydibG9ja3MnLCAnZ2xvYmFsYmxvY2tzJ10sXG5cdFx0Ymt1c2Vycyxcblx0XHRia2xpbWl0OiAxMDAsXG5cdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0YmdsaW1pdDogMTAwLFxuXHRcdGJndGFyZ2V0czogYmt1c2Vycyxcblx0XHRiZ3Byb3A6IFsnYnknLCAnZXhwaXJ5JywgJ3JlYXNvbicsICd0aW1lc3RhbXAnLCAndGFyZ2V0J10sXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdHJldHVybiBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG59O1xuXG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckluZm8sIHF1ZXJ5SVBCbG9ja3MsIHF1ZXJ5VXNlckJsb2Nrc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge0dsb2JhbExvY2tzU3RvcmFnZSwgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge21hcmtHbG9iYWxCbG9ja3MsIG1hcmtHbG9iYWxMb2NrZWRMaW5rcywgbWFya0xvY2FsQmxvY2tzfSBmcm9tICcuL21hcmtMaW5rcyc7XG5pbXBvcnQge3F1ZXJ5R2xvYmFsVXNlckluZm8sIHF1ZXJ5SVBCbG9ja3MsIHF1ZXJ5VXNlckJsb2Nrc30gZnJvbSAnLi9xdWVyeSc7XG5cbmNvbnN0IG1hcmtHbG9iYWxMb2NrZWRVc2VyTGlua3MgPSAodXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4pID0+IHtcblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Ly8gR2xvYmFsIExvY2sgcXVlcmllc1xuXHRmb3IgKGNvbnN0IGd1aXVzZXIgb2YgdXNlcnMpIHtcblx0XHRpZiAobXcudXRpbC5pc0lQdjRBZGRyZXNzKGd1aXVzZXIpIHx8IG13LnV0aWwuaXNJUHY2QWRkcmVzcyhndWl1c2VyKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2tlZCArIGd1aXVzZXIpKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUxvY2tlZCArIGd1aXVzZXIpIGFzIEdsb2JhbExvY2tzU3RvcmFnZTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlKSB7XG5cdFx0XHRcdG1hcmtHbG9iYWxMb2NrZWRMaW5rcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeUdsb2JhbFVzZXJJbmZvKGd1aXVzZXIpO1xuXG5cdFx0XHRcdG1hcmtHbG9iYWxMb2NrZWRMaW5rcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXG5cdFx0XHRcdC8vIENhY2hlIGZvciAxIGRheVxuXHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBndWl1c2VyLCByZXNwb25zZSwgNjAgKiA2MCAqIDI0KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH0pKCk7XG59O1xuXG5jb25zdCBtYXJrQmxvY2tlZFVzZXJMaW5rcyA9ICh1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPikgPT4ge1xuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChjb25zdCB1c2VyIG9mIHVzZXJzKSB7XG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyKSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBtdy5zdG9yYWdlLmdldE9iamVjdChcblx0XHRcdFx0T1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIHVzZXJcblx0XHRcdCkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2NrcyB8fCByZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtHbG9iYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHVzZXJzID0gdXNlcnMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09IHVzZXI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIExvY2FsIGFuZCBnbG9iYWwgdXNlciBibG9jayBxdWVyaWVzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgcXVlcnlVc2VyQmxvY2tzKGJrdXNlcnMpKSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrTG9jYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblxuXHRcdFx0XHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRpZiAoYmxvY2sudXNlcikge1xuXHRcdFx0XHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgYmxvY2sudXNlciwgcmVzcG9uc2UsIDYwICogNjApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0dsb2JhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRcdGlmIChibG9jay50YXJnZXQpIHtcblx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJsb2NrLnRhcmdldCwgcmVzcG9uc2UsIDYwICogNjApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmNvbnN0IG1hcmtCbG9ja2VkSVBMaW5rcyA9ICh1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPikgPT4ge1xuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0Y29uc3QgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHQvLyBMb2NhbCBhbmQgZ2xvYmFsIElQIGJsb2NrIHF1ZXJpZXNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGJrdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghYmt1c2Vycy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGJraXAgb2YgYmt1c2Vycykge1xuXHRcdFx0aWYgKCFtdy51dGlsLmlzSVB2NEFkZHJlc3MoYmtpcCkgJiYgIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhia2lwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhia2lwKSkge1xuXHRcdFx0XHRia2lwID0gYmtpcC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJraXApKSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoXG5cdFx0XHRcdFx0T1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJraXBcblx0XHRcdFx0KSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrTG9jYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0dsb2JhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgcXVlcnlJUEJsb2Nrcyhia2lwKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rcywgYmtpcH0pO1xuXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoYmxvY2sudXNlcikge1xuXHRcdFx0XHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBibG9jay51c2VyLCByZXNwb25zZSwgNjAgKiA2MCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdFx0bWFya0dsb2JhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rcywgYmtpcH0pO1xuXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoYmxvY2sudGFyZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJsb2NrLnRhcmdldCwgcmVzcG9uc2UsIDYwICogNjApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmV4cG9ydCB7bWFya0dsb2JhbExvY2tlZFVzZXJMaW5rcywgbWFya0Jsb2NrZWRVc2VyTGlua3MsIG1hcmtCbG9ja2VkSVBMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfSBmcm9tICcuL2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyc7XG5cbi8vIEdldCBhbGwgYWxpYXNlcyBmb3IgdXNlcjogJiB1c2VyX3RhbGs6XG5jb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcygpO1xuLy8gUmVnRXhwIGZvciBhbGwgdGl0bGVzIHRoYXQgYXJlICBVc2VyOnwgVXNlcl90YWxrOiB8IFNwZWNpYWw6Q29udHJpYnV0aW9ucy8gKGZvciB1c2Vyc2NyaXB0cylcbmNvbnN0IHVzZXJUaXRsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRgXigke3VzZXJOYW1lc3BhY2VUaXRsZXMuam9pbignfCcpfXwke09QVElPTlMuY29udHJpYnV0aW9uc1BhZ2VBbGlhc31cXFxcLykrKFteXFxcXC8jXSspJGAsXG5cdCdpJ1xuKTtcblxuLy8gUmVnRXhwIGZvciBsaW5rc1xuLy8gYXJ0aWNsZVJlZ2V4IGFsc28gbWF0Y2hlcyBleHRlcm5hbCBsaW5rcyBpbiBvcmRlciB0byBzdXBwb3J0IHRoZSBub3BpbmcgdGVtcGxhdGVcbmNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oW14jXSspYCk7XG5jb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7d2dTY3JpcHR9XFxcXD90aXRsZT0oW14jJl0rKWApO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KTogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0+IHtcblx0Ly8gRmluZCBhbGwgXCJ1c2VyXCIgbGlua3MgYW5kIHNhdmUgdGhlbSBpbiB1c2VyTGlua3MgOiB7ICd1c2Vycyc6IFs8bGluazE+LCA8bGluazI+LCAuLi5dLCAndXNlcjInOiBbPGxpbmszPiwgPGxpbmszPiwgLi4uXSwgLi4uIH1cblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPSB7fTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnYScpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdC1kYXRlJykgfHxcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdleHQtZGlzY3Vzc2lvbnRvb2xzLWluaXQtdGltZXN0YW1wbGluaycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctaGlzdG9yeS11bmRvJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1yb2xsYmFjay1saW5rJylcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGhyZWYucmVwbGFjZSgvXig/Omh0dHBzPzpcXC9cXC8pL2ksICcnKSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Ly8gTWF5YmUgYWJzb2x1dGUgVVJMXG5cdFx0XHRpZiAobmV3IE13VXJpKGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBNYXliZSByZWxhdGl2ZSBVUkxcblx0XHRcdFx0aWYgKG5ldyBNd1VyaShsb2NhdGlvbi5ocmVmICsgaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cGFnZVRpdGxlID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhZ2VUaXRsZSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXG5cdFx0Y29uc3QgdXNlckV4ZWNBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IHVzZXJUaXRsZVJlZ2V4LmV4ZWMocGFnZVRpdGxlKTtcblx0XHRpZiAoIXVzZXJFeGVjQXJyYXkgfHwgdHlwZW9mIHVzZXJFeGVjQXJyYXlbMl0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgdXNlcjogc3RyaW5nID0gdXNlckV4ZWNBcnJheVsyXS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdXNlckV4ZWNBcnJheVsyXS5zbGljZSgxKTtcblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKHVzZXIpKSB7XG5cdFx0XHR1c2VyID0gdXNlci50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdHVzZXJMaW5rc1t1c2VyXSA/Pz0gW107XG5cblx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSlbXG5cdFx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSkubGVuZ3RoXG5cdFx0XSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlSWRzfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgW25hbWVzcGFjZSwgaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRcdGlmICghT1BUSU9OUy51c2VyTmFtZXNwYWNlTnVtYmVycy5pbmNsdWRlcyhpZCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJOYW1lc3BhY2VUaXRsZXNbdXNlck5hbWVzcGFjZVRpdGxlcy5sZW5ndGhdID0gYCR7bXcudXRpbC5lc2NhcGVSZWdFeHAobmFtZXNwYWNlLnJlcGxhY2UoL18vZywgJyAnKSl9OmA7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gdXNlck5hbWVzcGFjZVRpdGxlcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkSVBMaW5rcywgbWFya0Jsb2NrZWRVc2VyTGlua3MsIG1hcmtHbG9iYWxMb2NrZWRVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9tYXJrVXNlckxpbmtzJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlciA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdG1hcmtHbG9iYWxMb2NrZWRVc2VyTGlua3ModXNlckxpbmtzKTtcblx0bWFya0Jsb2NrZWRVc2VyTGlua3ModXNlckxpbmtzKTtcblx0bWFya0Jsb2NrZWRJUExpbmtzKHVzZXJMaW5rcyk7XG59O1xuXG5leHBvcnQge21hcmtCbG9ja2VkVXNlcn07XG4iLCAiaW1wb3J0IHttYXJrQmxvY2tlZFVzZXJ9IGZyb20gJy4vbWFya0Jsb2NrZWRVc2VyJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGFkZEhvb2sgPSAoKTogdm9pZCA9PiB7XG5cdGxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtCbG9ja2VkKCRjb250ZW50KTogdm9pZCB7XG5cdFx0aWYgKGlzSW5pdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpc0luaXQgPSB0cnVlO1xuXG5cdFx0Ly8gT24gdGhlIGZpcnN0IGNhbGwgYWZ0ZXIgaW5pdGlhbCBwYWdlIGxvYWQsIGNvbnRhaW5lciBpcyBtdy51dGlsLiRjb250ZW50XG5cdFx0Ly8gVXNlZCB0byBsaW1pdCBtYWluc3BhY2UgYWN0aXZpdHkgdG8ganVzdCB0aGUgZGlmZiBkZWZpbml0aW9uc1xuXHRcdGlmICh3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0XHQkY29udGVudCA9ICRjb250ZW50LmZpbmQoJy5kaWZmLXRpdGxlJyk7XG5cdFx0fVxuXHRcdC8vIE9uIHBhZ2UgbG9hZCwgYWxzbyB1cGRhdGUgdGhlIG5hbWVzcGFjZSB0YWJcblx0XHQkY29udGVudCA9ICRjb250ZW50LmFkZCgnI2NhLW5zdGFiLXVzZXInKTtcblxuXHRcdG1hcmtCbG9ja2VkVXNlcigkY29udGVudCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRIb29rfTtcbiIsICJjb25zdCBjbGVhck9sZEtleXMgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9vbGRLZXlzQ2xlYXJlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBrZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG5cdFx0aWYgKE9iamVjdC5oYXNPd24obG9jYWxTdG9yYWdlLCBrZXkpKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1sb25lbHktaWZcblx0XHRcdGlmIChcblx0XHRcdFx0a2V5LnN0YXJ0c1dpdGgoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNMb2NrZWQtJykgfHxcblx0XHRcdFx0a2V5LnN0YXJ0c1dpdGgoJ19FWFBJUllfZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0xvY2tlZC0nKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIChcblx0XHRcdC8vIFx0a2V5LnN0YXJ0c1dpdGgoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNCbG9ja2VkLScpIHx8XG5cdFx0XHQvLyBcdGtleS5zdGFydHNXaXRoKCdfRVhQSVJZX2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNCbG9ja2VkLScpXG5cdFx0XHQvLyApIHtcblx0XHRcdC8vIFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHRcdC8vIH1cblx0XHR9XG5cdH1cblxuXHRtdy5zdG9yYWdlLnNldE9iamVjdCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9vbGRLZXlzQ2xlYXJlZCcsIHRydWUpO1xufTtcblxuZXhwb3J0IHtjbGVhck9sZEtleXN9O1xuIiwgImltcG9ydCB7YWRkSG9va30gZnJvbSAnLi9tb2R1bGVzL2FkZEhvb2snO1xuaW1wb3J0IHtjbGVhck9sZEtleXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NsZWFyT2xkS2V5cyc7XG5cbmlmICghWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykpKSB7XG5cdGFkZEhvb2soKTtcbn1cblxuLy8gYWRkIGEgb25lLXRpbWUgZnVuY3Rpb24gdG8gY2xlYXIgb2xkIGxvY2FsU3RvcmFnZSBrZXlzXG5pZiAoIW13LnN0b3JhZ2UuZ2V0T2JqZWN0KCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX29sZEtleXNDbGVhcmVkJykpIHtcblx0dm9pZCBjbGVhck9sZEtleXMoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHlCQUEwQjtBQUMxQixJQUFBQyx1QkFBd0IsQ0FBQyxHQUFHLENBQUM7QUFDN0IsSUFBQUMsbUJBQW9CO0FBQ3BCLElBQUFDLG9CQUFxQjtBQUNyQixJQUFBQyxV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bkR0QixpQkFBV0EsU0FBU0UsS0FBSyxhQUFhO0lBQ3ZDO0FBRUFGLGVBQVdBLFNBQVMwQixJQUFJLGdCQUFnQjtBQUV4Q04sb0JBQWdCcEIsUUFBUTtFQUN6QixDQUFDO0FBQ0Y7O0FDdkJBLElBQU00QixlQUFlQSxNQUFZO0FBQ2hDLE1BQUk5RixHQUFHSSxRQUFRQyxVQUFVLHVDQUF1QyxHQUFHO0FBQ2xFO0VBQ0Q7QUFFQSxhQUFXdEgsT0FBT2dOLGNBQWM7QUFDL0IsUUFBSXJHLE9BQU9zRyxPQUFPRCxjQUFjaE4sR0FBRyxHQUFHO0FBRXJDLFVBQ0NBLElBQUl1RCxXQUFXLGtDQUFrQyxLQUNqRHZELElBQUl1RCxXQUFXLDBDQUEwQyxHQUN4RDtBQUNEeUoscUJBQWFFLFdBQVdsTixHQUFHO01BQzVCO0lBUUQ7RUFDRDtBQUVBaUgsS0FBR0ksUUFBUUUsVUFBVSx5Q0FBeUMsSUFBSTtBQUNuRTs7QUN0QkEsSUFBSSxDQUFDLENBQUMsUUFBUSxRQUFRLEVBQUVpRCxTQUFTdkQsR0FBR2dELE9BQU8xRSxJQUFJLFVBQVUsQ0FBQyxHQUFHO0FBQzVEbUgsVUFBUTtBQUNUO0FBR0EsSUFBSSxDQUFDekYsR0FBR0ksUUFBUUMsVUFBVSx1Q0FBdUMsR0FBRztBQUNuRSxPQUFLeUYsYUFBYTtBQUNuQjsiLAogICJuYW1lcyI6IFsiY29udHJpYnV0aW9uc1BhZ2VBbGlhcyIsICJ1c2VyTmFtZXNwYWNlTnVtYmVycyIsICJzdG9yYWdlS2V5TG9ja2VkIiwgInN0b3JhZ2VLZXlCbG9ja2VkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiaW5maW5pdHkiLCAibG9jYWxpemUiLCAiZW4iLCAiQmxvY2tlZCIsICJMb2NrZWQiLCAicGFydGlhbCIsICJ6aCIsICJkIiwgInMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFkZFplcm8iLCAidiIsICJjb25jYXQiLCAiaW5Ib3VycyIsICJtcyIsICJtbSIsICJNYXRoIiwgImZsb29yIiwgImhoIiwgImRkIiwgInBhcnNlVFMiLCAic3RyaW5nIiwgIm0iLCAicmVwbGFjZSIsICJtYXRjaCIsICJEYXRlIiwgIlVUQyIsICJnZXRUaW1lIiwgInVzZXJsaW5rSW5kZWYiLCAidXNlcmxpbmtMb2NrZWQiLCAidXNlcmxpbmtQYXJ0aWFsIiwgInVzZXJsaW5rVGVtcCIsICJtYXJrR2xvYmFsTG9ja2VkTGlua3MiLCAicmVzcG9uc2UiLCAidXNlckxpbmtzIiwgInVzZXIiLCAibmFtZSIsICJsb2NrZWQiLCAidGlwIiwgIiRsaW5rcyIsICJjbGFzc05hbWUiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiZG9uZSIsICIkbGluayIsICJ2YWx1ZSIsICJhZGRDbGFzcyIsICJhdHRyIiwgImVyciIsICJlIiwgImYiLCAibWFya0xvY2FsQmxvY2tzIiwgImJraXAiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgImJsb2NrcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJibG9jayIsICJpc1BhcnRpYWxCbGNvayIsICJyZXN0cmljdGlvbnMiLCAiYmxvY2tUaW1lIiwgImV4cGlyeSIsICJzdGFydHNXaXRoIiwgInRpbWVzdGFtcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIm1hcmtHbG9iYWxCbG9ja3MiLCAiX3Jlc3BvbnNlJHF1ZXJ5MiIsICJnbG9iYWxibG9ja3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidGFyZ2V0IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgInF1ZXJ5R2xvYmFsVXNlckluZm8iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJndWl1c2VyIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibWV0YSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeSIsICJnbG9iYWx1c2VyaW5mbyIsICJtaXNzaW5nIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlJUEJsb2NrcyIsICJfcmVmMiIsICJsaXN0IiwgImJrbGltaXQiLCAiYmtwcm9wIiwgImJnaXAiLCAiYmdsaW1pdCIsICJiZ3Byb3AiLCAiX3gyIiwgInF1ZXJ5VXNlckJsb2NrcyIsICJfcmVmMyIsICJia3VzZXJzIiwgImJndGFyZ2V0cyIsICJfeDMiLCAibWFya0dsb2JhbExvY2tlZFVzZXJMaW5rcyIsICJ1c2VycyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAicHJvbWlzZXMiLCAiX2kiLCAiX3VzZXJzIiwgIm13IiwgInV0aWwiLCAiaXNJUHY0QWRkcmVzcyIsICJpc0lQdjZBZGRyZXNzIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgInNldE9iamVjdCIsICJlcnJvciIsICJjb25zb2xlIiwgIl9pMiIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJtYXJrQmxvY2tlZFVzZXJMaW5rcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfcmVzcG9uc2UkcXVlcnk1IiwgIl9yZXNwb25zZSRxdWVyeTYiLCAiX3Jlc3BvbnNlJHF1ZXJ5NyIsICJfcmVzcG9uc2UkcXVlcnk4IiwgImZpbHRlciIsICJlbGVtZW50IiwgImkiLCAic3BsaWNlIiwgIl9yZXNwb25zZSRxdWVyeTMiLCAiX3Jlc3BvbnNlJHF1ZXJ5NCIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJfaTMiLCAiX3Byb21pc2VzMiIsICJtYXJrQmxvY2tlZElQTGlua3MiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAidG9VcHBlckNhc2UiLCAiX3Jlc3BvbnNlJHF1ZXJ5OSIsICJfcmVzcG9uc2UkcXVlcnkxMCIsICJfcmVzcG9uc2UkcXVlcnkxMSIsICJfcmVzcG9uc2UkcXVlcnkxMiIsICJfaXRlcmF0b3IxMCIsICJfc3RlcDEwIiwgIl9pdGVyYXRvcjExIiwgIl9zdGVwMTEiLCAiX2k0IiwgIl9wcm9taXNlczMiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJjb25maWciLCAidXNlck5hbWVzcGFjZVRpdGxlczIiLCAiX2k1IiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgIm5hbWVzcGFjZSIsICJpZCIsICJpbmNsdWRlcyIsICJlc2NhcGVSZWdFeHAiLCAidXNlck5hbWVzcGFjZVRpdGxlcyIsICJ1c2VyVGl0bGVSZWdleCIsICJSZWdFeHAiLCAiam9pbiIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgImFydGljbGVSZWdleCIsICJzY3JpcHRSZWdleCIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJfaXRlcmF0b3IxMiIsICJmaW5kIiwgIl9zdGVwMTIiLCAiX3VzZXIiLCAiX3VzZXJMaW5rcyRfdXNlciIsICIkZWxlbWVudCIsICIkIiwgImhhc0NsYXNzIiwgInBhcmVudCIsICJocmVmIiwgIk13VXJpIiwgImhvc3QiLCAibG9jYXRpb24iLCAicGFnZVRpdGxlIiwgInRlc3QiLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlckV4ZWNBcnJheSIsICJzbGljZSIsICJtYXJrQmxvY2tlZFVzZXIiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiYWRkSG9vayIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAibWFya0Jsb2NrZWQiLCAiY2xlYXJPbGRLZXlzIiwgImxvY2FsU3RvcmFnZSIsICJoYXNPd24iLCAicmVtb3ZlSXRlbSJdCn0K
