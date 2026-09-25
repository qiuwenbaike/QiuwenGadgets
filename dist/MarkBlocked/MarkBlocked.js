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
//! src/MarkBlocked/options.json
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
var contributionsPageAlias = "Special:Contributions";
var userNamespaceNumbers = [2, 3];
var storageKeyBlocked = "ext.gadget.MarkBlocked_blocked-";
var storageKeyLocked = "ext.gadget.MarkBlocked_locked-";
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
var queryGlobalUserInfo = /* @__PURE__ */ (function() {
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
})();
var queryIPBlocks = /* @__PURE__ */ (function() {
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
})();
var queryUserBlocks = /* @__PURE__ */ (function() {
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
})();
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
  void Promise.all(promises.map((promise) => promise()));
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
        const blockRecords = {};
        var _iterator7 = _createForOfIteratorHelper(bkusers), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const user = _step7.value;
            blockRecords[user] = {
              query: {
                blocks: [],
                globalblocks: []
              }
            };
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        if ((_response$query3 = response["query"]) !== null && _response$query3 !== void 0 && _response$query3.blocks) {
          markLocalBlocks({
            response,
            userLinks
          });
          var _iterator8 = _createForOfIteratorHelper(response["query"].blocks), _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
              const block = _step8.value;
              if (block.user) {
                var _blockRecords$block$u;
                (_blockRecords$block$u = blockRecords[block.user]) === null || _blockRecords$block$u === void 0 || _blockRecords$block$u.query.blocks.push(block);
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
        if ((_response$query4 = response["query"]) !== null && _response$query4 !== void 0 && _response$query4.globalblocks) {
          markGlobalBlocks({
            response,
            userLinks
          });
          var _iterator9 = _createForOfIteratorHelper(response["query"].globalblocks), _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
              const block = _step9.value;
              if (block.target) {
                var _blockRecords$block$t;
                (_blockRecords$block$t = blockRecords[block.target]) === null || _blockRecords$block$t === void 0 || _blockRecords$block$t.query.globalblocks.push(block);
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
        for (var _i2 = 0, _Object$entries = Object.entries(blockRecords); _i2 < _Object$entries.length; _i2++) {
          const [user, value] = _Object$entries[_i2];
          mw.storage.setObject(storageKeyBlocked + user, value, 60 * 60);
        }
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    });
  }
  void Promise.all(promises.map((promise) => promise()));
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
    var _iterator0 = _createForOfIteratorHelper(bkusers), _step0;
    try {
      for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
        let bkip = _step0.value;
        if (!mw.util.isIPv4Address(bkip) && !mw.util.isIPv6Address(bkip)) {
          continue;
        }
        if (mw.util.isIPv6Address(bkip)) {
          bkip = bkip.toUpperCase();
        }
        if (mw.storage.getObject(storageKeyBlocked + bkip)) {
          var _response$query9, _response$query0;
          const response = mw.storage.getObject(storageKeyBlocked + bkip);
          if ((_response$query9 = response["query"]) !== null && _response$query9 !== void 0 && _response$query9.blocks) {
            markLocalBlocks({
              response,
              userLinks
            });
          }
          if ((_response$query0 = response["query"]) !== null && _response$query0 !== void 0 && _response$query0.globalblocks) {
            markGlobalBlocks({
              response,
              userLinks
            });
          }
          continue;
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          try {
            var _response$query1, _response$query10;
            const response = yield queryIPBlocks(bkip);
            if ((_response$query1 = response["query"]) !== null && _response$query1 !== void 0 && _response$query1.blocks) {
              markLocalBlocks({
                response,
                userLinks,
                bkip
              });
              var _iterator1 = _createForOfIteratorHelper(response["query"].blocks), _step1;
              try {
                for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
                  const block = _step1.value;
                  if (block.user) {
                    mw.storage.setObject(storageKeyBlocked + block.user, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator1.e(err);
              } finally {
                _iterator1.f();
              }
            }
            if ((_response$query10 = response["query"]) !== null && _response$query10 !== void 0 && _response$query10.globalblocks) {
              markGlobalBlocks({
                response,
                userLinks,
                bkip
              });
              var _iterator10 = _createForOfIteratorHelper(response["query"].globalblocks), _step10;
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                  const block = _step10.value;
                  if (block.target) {
                    mw.storage.setObject(storageKeyBlocked + block.target, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
          } catch (error) {
            console.error("[MarkBlocked] Ajax error:", error);
          }
        });
      }
    } catch (err) {
      _iterator0.e(err);
    } finally {
      _iterator0.f();
    }
  }
  void Promise.all(promises.map((promise) => promise()));
};
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/MarkBlocked/modules/util/generateUserNamespaceTitles.ts
var generateUserNamespaceTitles = () => {
  const {
    wgNamespaceIds
  } = mw.config.get();
  const userNamespaceTitles2 = [];
  for (var _i3 = 0, _Object$entries2 = Object.entries(wgNamespaceIds); _i3 < _Object$entries2.length; _i3++) {
    const [namespace, id] = _Object$entries2[_i3];
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
  var _iterator11 = _createForOfIteratorHelper($content.find("a")), _step11;
  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
      var _user, _userLinks$_user;
      const element = _step11.value;
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
      if (!pageTitle || typeof pageTitle !== "string") {
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
    _iterator11.e(err);
  } finally {
    _iterator11.f();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcGFyc2VUaW1lLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvbWFya0xpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcXVlcnkudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJzdG9yYWdlS2V5QmxvY2tlZFwiOiBcImV4dC5nYWRnZXQuTWFya0Jsb2NrZWRfYmxvY2tlZC1cIixcblx0XCJzdG9yYWdlS2V5TG9ja2VkXCI6IFwiZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9sb2NrZWQtXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGluZmluaXR5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2luZmluaXR5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXoOmZkOacnycsXG5cdFx0XHQnemgtaGFudCc6ICfnhKHpmZDmnJ8nLFxuXHRcdH0pLFxuXHRcdEJsb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHQnR2xvYmFsbHkgQmxvY2tlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgZ2xvYmFsbHkgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWFqOWfn+WwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15YWo5Z+f5bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHRMb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyBMb2NrZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb5bey5YWo5Z+f6ZSB5a6aJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+W3suWFqOWfn+mOluWumicsXG5cdFx0fSksXG5cdFx0cGFydGlhbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwYXJ0aWFsICcsXG5cdFx0XHR6aDogJ+mDqOWIhicsXG5cdFx0fSksXG5cdFx0ZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkYXknLFxuXHRcdFx0emg6ICflpKknLFxuXHRcdH0pLFxuXHRcdHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnc2Vjb25kJyxcblx0XHRcdHpoOiAn56eSJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgYWRkWmVybyA9ICh2OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gdiA8PSA5ID8gYDAke3Z9YCA6IGAke3Z9YDtcbn07XG5cbmNvbnN0IGluSG91cnMgPSAobXM6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdGxldCBtbTogbnVtYmVyID0gTWF0aC5mbG9vcihtcyAvIDZlNCk7XG5cdGlmICghbW0pIHtcblx0XHRyZXR1cm4gYCR7TWF0aC5mbG9vcihtcyAvIDFlMyl9JHtnZXRNZXNzYWdlKCdzJyl9YDtcblx0fVxuXG5cdGxldCBoaDogbnVtYmVyID0gTWF0aC5mbG9vcihtbSAvIDYwKTtcblx0bW0gJT0gNjA7XG5cblx0Y29uc3QgZGQ6IG51bWJlciA9IE1hdGguZmxvb3IoaGggLyAyNCk7XG5cdGhoICU9IDI0O1xuXG5cdGlmIChkZCkge1xuXHRcdHJldHVybiBgJHtkZCArIChkZCA8IDEwID8gYC4ke2FkZFplcm8oaGgpfWAgOiAnJyl9JHtnZXRNZXNzYWdlKCdkJyl9YDtcblx0fVxuXG5cdHJldHVybiBgJHtoaH06JHthZGRaZXJvKG1tKX1gO1xufTtcblxuLy8gMjAwODEyMjYyMjA2MDUgb3IgMjAwOC0wMS0yNlQwNjozNDoxOVogLT4gbnVtYmVyXG5jb25zdCBwYXJzZVRTID0gKHN0cmluZzogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0Y29uc3QgbTogUmVnRXhwTWF0Y2hBcnJheSA9IHN0cmluZ1xuXHRcdC5yZXBsYWNlKC9cXEQvZywgJycpXG5cdFx0Lm1hdGNoKC8oXFxkXFxkXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkvKSBhcyBSZWdFeHBNYXRjaEFycmF5O1xuXG5cdHJldHVybiBuZXcgRGF0ZShcblx0XHREYXRlLlVUQyhcblx0XHRcdCsobVsxXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzJdIGFzIHN0cmluZykgLSAxLFxuXHRcdFx0KyhtWzNdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNF0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs1XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzZdIGFzIHN0cmluZylcblx0XHQpXG5cdCkuZ2V0VGltZSgpO1xufTtcblxuZXhwb3J0IHtpbkhvdXJzLCBwYXJzZVRTfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0luZGVmID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rSW5kZWZfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtMb2NrZWQgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtMb2NrZWRfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtQYXJ0aWFsID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rUGFydGlhbF94dEFmT0dfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1RlbXAgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtUZW1wX3h0QWZPR19fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwidXNlcmxpbmtJbmRlZlwiOiB1c2VybGlua0luZGVmLFxuICBcInVzZXJsaW5rTG9ja2VkXCI6IHVzZXJsaW5rTG9ja2VkLFxuICBcInVzZXJsaW5rUGFydGlhbFwiOiB1c2VybGlua1BhcnRpYWwsXG4gIFwidXNlcmxpbmtUZW1wXCI6IHVzZXJsaW5rVGVtcFxufTtcbiAgICAgICIsICJpbXBvcnQgdHlwZSB7R2xvYmFsTG9ja3NTdG9yYWdlLCBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2V9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7aW5Ib3VycywgcGFyc2VUU30gZnJvbSAnLi9wYXJzZVRpbWUnO1xuaW1wb3J0IHt1c2VybGlua0luZGVmLCB1c2VybGlua0xvY2tlZCwgdXNlcmxpbmtQYXJ0aWFsLCB1c2VybGlua1RlbXB9IGZyb20gJy4uL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENhbGxiYWNrOiByZWNlaXZlIGRhdGEgYW5kIG1hcmsgbGlua3NcbiAqL1xuXG5jb25zdCBtYXJrR2xvYmFsTG9ja2VkTGlua3MgPSAoe1xuXHRyZXNwb25zZSxcblx0dXNlckxpbmtzLFxufToge1xuXHRyZXNwb25zZTogR2xvYmFsTG9ja3NTdG9yYWdlO1xuXHR1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPjtcbn0pOiB2b2lkID0+IHtcblx0Ly8gR2xvYmFsIGxvY2tzXG5cdGNvbnN0IHVzZXIgPSByZXNwb25zZT8ubmFtZTtcblx0Y29uc3QgbG9ja2VkID0gcmVzcG9uc2U/LmxvY2tlZDtcblxuXHRpZiAoIWxvY2tlZCB8fCAhdXNlcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnTG9ja2VkJyk7XG5cblx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1t1c2VyXTtcblx0aWYgKCEkbGlua3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjbGFzc05hbWUgPSB1c2VybGlua0xvY2tlZCBhcyBzdHJpbmc7XG5cblx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0fVxufTtcblxuY29uc3QgbWFya0xvY2FsQmxvY2tzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcblx0YmtpcCxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG5cdGJraXA/OiBzdHJpbmc7XG59KTogdm9pZCA9PiB7XG5cdC8vIExvY2FsIGJsb2Nrc1xuXHRpZiAoIXJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdGNvbnN0IGlzUGFydGlhbEJsY29rOiBib29sZWFuID0gdHlwZW9mIGJsb2NrLnJlc3RyaWN0aW9ucyA9PT0gJ3N0cmluZycgJiYgYmxvY2sucmVzdHJpY3Rpb25zICE9PSAnJzsgLy8gUGFydGlhbCBibG9ja1xuXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rVGVtcCBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0fVxuXG5cdFx0bGV0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmxvY2tlZCcpXG5cdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdC5yZXBsYWNlKCckMycsIGJsb2NrLnJlYXNvbilcblx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbYmtpcCA/PyBibG9jay51c2VyXTtcblx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgbWFya0dsb2JhbEJsb2NrcyA9ICh7XG5cdHJlc3BvbnNlLFxuXHR1c2VyTGlua3MsXG5cdGJraXAsXG59OiB7XG5cdHJlc3BvbnNlOiBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cdHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+O1xuXHRia2lwPzogc3RyaW5nO1xufSk6IHZvaWQgPT4ge1xuXHQvLyBHbG9iYWwgYmxvY2tzXG5cdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rSW5kZWYgYXMgc3RyaW5nO1xuXHRcdFx0YmxvY2tUaW1lID0gZ2V0TWVzc2FnZSgnaW5maW5pdHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtUZW1wIGFzIHN0cmluZztcblx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHR9XG5cblx0XHRsZXQgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdHbG9iYWxseSBCbG9ja2VkJylcblx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdC5yZXBsYWNlKCckMicsIGJsb2NrLmJ5KVxuXHRcdFx0LnJlcGxhY2UoJyQzJywgYmxvY2sucmVhc29uKVxuXHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0dGlwID0gdGlwLnJlcGxhY2UoJyQ1JywgJycpO1xuXG5cdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tia2lwID8/IGJsb2NrLnRhcmdldF07XG5cdFx0aWYgKCEkbGlua3MpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJGxpbmtzKSB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7bWFya0dsb2JhbExvY2tlZExpbmtzLCBtYXJrTG9jYWxCbG9ja3MsIG1hcmtHbG9iYWxCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya0Jsb2NrZWQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkLCBHbG9iYWxMb2Nrc1N0b3JhZ2UsIFF1ZXJ5R2xvYmFsTG9ja3NSZXNwb25zZX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlHbG9iYWxVc2VySW5mbyA9IGFzeW5jIChndWl1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2UgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRtZXRhOiBbJ2dsb2JhbHVzZXJpbmZvJ10sXG5cdFx0Z3VpdXNlcixcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0Y29uc3Qge1xuXHRcdHF1ZXJ5OiB7XG5cdFx0XHRnbG9iYWx1c2VyaW5mbzoge25hbWUsIGxvY2tlZCA9IGZhbHNlLCBtaXNzaW5nID0gZmFsc2V9LFxuXHRcdH0sXG5cdH0gPSAoYXdhaXQgYXBpLmdldChwYXJhbXMpKSBhcyBRdWVyeUdsb2JhbExvY2tzUmVzcG9uc2U7XG5cblx0Ly8gTWluaWZ5IHJlc3BvbnNlIG9iamVjdFxuXHRjb25zdCByZXNwb25zZTogR2xvYmFsTG9ja3NTdG9yYWdlID0ge25hbWV9O1xuXG5cdGlmIChsb2NrZWQpIHtcblx0XHRyZXNwb25zZS5sb2NrZWQgPSBsb2NrZWQ7XG5cdH1cblxuXHRpZiAobWlzc2luZykge1xuXHRcdHJlc3BvbnNlLm1pc3NpbmcgPSBtaXNzaW5nO1xuXHR9XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlJUEJsb2NrcyA9IGFzeW5jIChia2lwOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyAmIEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogWydibG9ja3MnLCAnZ2xvYmFsYmxvY2tzJ10sXG5cdFx0YmtpcCxcblx0XHRia2xpbWl0OiAxMDAsXG5cdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0YmdpcDogYmtpcCxcblx0XHRiZ2xpbWl0OiAxMDAsXG5cdFx0Ymdwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAndGltZXN0YW1wJywgJ3RhcmdldCddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgcXVlcnlVc2VyQmxvY2tzID0gYXN5bmMgKGJrdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlCbG9ja3NQYXJhbXMgJiBBcGlRdWVyeUdsb2JhbEJsb2Nrc1BhcmFtc1JlZGVmaW5lZCA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6IFsnYmxvY2tzJywgJ2dsb2JhbGJsb2NrcyddLFxuXHRcdGJrdXNlcnMsXG5cdFx0YmtsaW1pdDogMTAwLFxuXHRcdGJrcHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3Jlc3RyaWN0aW9ucycsICd0aW1lc3RhbXAnLCAndXNlciddLFxuXHRcdGJnbGltaXQ6IDEwMCxcblx0XHRiZ3RhcmdldHM6IGJrdXNlcnMsXG5cdFx0Ymdwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAndGltZXN0YW1wJywgJ3RhcmdldCddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtxdWVyeUdsb2JhbFVzZXJJbmZvLCBxdWVyeUlQQmxvY2tzLCBxdWVyeVVzZXJCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB0eXBlIHtHbG9iYWxMb2Nrc1N0b3JhZ2UsIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHttYXJrR2xvYmFsQmxvY2tzLCBtYXJrR2xvYmFsTG9ja2VkTGlua3MsIG1hcmtMb2NhbEJsb2Nrc30gZnJvbSAnLi9tYXJrTGlua3MnO1xuaW1wb3J0IHtxdWVyeUdsb2JhbFVzZXJJbmZvLCBxdWVyeUlQQmxvY2tzLCBxdWVyeVVzZXJCbG9ja3N9IGZyb20gJy4vcXVlcnknO1xuXG5jb25zdCBtYXJrR2xvYmFsTG9ja2VkVXNlckxpbmtzID0gKHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+KSA9PiB7XG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdC8vIEdsb2JhbCBMb2NrIHF1ZXJpZXNcblx0Zm9yIChjb25zdCBndWl1c2VyIG9mIHVzZXJzKSB7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyhndWl1c2VyKSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3MoZ3VpdXNlcikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBndWl1c2VyKSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBndWl1c2VyKSBhcyBHbG9iYWxMb2Nrc1N0b3JhZ2U7XG5cblx0XHRcdGlmIChyZXNwb25zZSkge1xuXHRcdFx0XHRtYXJrR2xvYmFsTG9ja2VkTGlua3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlHbG9iYWxVc2VySW5mbyhndWl1c2VyKTtcblxuXHRcdFx0XHRtYXJrR2xvYmFsTG9ja2VkTGlua3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblxuXHRcdFx0XHQvLyBDYWNoZSBmb3IgMSBkYXlcblx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9ja2VkICsgZ3VpdXNlciwgcmVzcG9uc2UsIDYwICogNjAgKiAyNCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBFcnJvcnMgYXJlIGFscmVhZHkgY2F1Z2h0IGluc2lkZSBlYWNoIHByb21pc2UgZmFjdG9yeVxuXHR2b2lkIFByb21pc2UuYWxsKHByb21pc2VzLm1hcCgocHJvbWlzZSkgPT4gcHJvbWlzZSgpKSk7XG59O1xuXG5jb25zdCBtYXJrQmxvY2tlZFVzZXJMaW5rcyA9ICh1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPikgPT4ge1xuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChjb25zdCB1c2VyIG9mIHVzZXJzKSB7XG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyKSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBtdy5zdG9yYWdlLmdldE9iamVjdChcblx0XHRcdFx0T1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIHVzZXJcblx0XHRcdCkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2NrcyB8fCByZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtHbG9iYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHVzZXJzID0gdXNlcnMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09IHVzZXI7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIExvY2FsIGFuZCBnbG9iYWwgdXNlciBibG9jayBxdWVyaWVzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgcXVlcnlVc2VyQmxvY2tzKGJrdXNlcnMpKSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cdFx0XHRcdGNvbnN0IGJsb2NrUmVjb3JkczogUmVjb3JkPHN0cmluZywgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlPiA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IHVzZXIgb2YgYmt1c2Vycykge1xuXHRcdFx0XHRcdGJsb2NrUmVjb3Jkc1t1c2VyXSA9IHtxdWVyeToge2Jsb2NrczogW10sIGdsb2JhbGJsb2NrczogW119fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdFx0XHRcdFx0aWYgKGJsb2NrLnVzZXIpIHtcblx0XHRcdFx0XHRcdFx0YmxvY2tSZWNvcmRzW2Jsb2NrLnVzZXJdPy5xdWVyeS5ibG9ja3MhLnB1c2goYmxvY2spO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0dsb2JhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRcdGlmIChibG9jay50YXJnZXQpIHtcblx0XHRcdFx0XHRcdFx0YmxvY2tSZWNvcmRzW2Jsb2NrLnRhcmdldF0/LnF1ZXJ5Lmdsb2JhbGJsb2NrcyEucHVzaChibG9jayk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCBbdXNlciwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGJsb2NrUmVjb3JkcykpIHtcblx0XHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgdXNlciwgdmFsdWUsIDYwICogNjApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBFcnJvcnMgYXJlIGFscmVhZHkgY2F1Z2h0IGluc2lkZSBlYWNoIHByb21pc2UgZmFjdG9yeVxuXHR2b2lkIFByb21pc2UuYWxsKHByb21pc2VzLm1hcCgocHJvbWlzZSkgPT4gcHJvbWlzZSgpKSk7XG59O1xuXG5jb25zdCBtYXJrQmxvY2tlZElQTGlua3MgPSAodXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4pID0+IHtcblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGNvbnN0IHVzZXJzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHVzZXJMaW5rcyk7XG5cdGlmICghdXNlcnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Ly8gTG9jYWwgYW5kIGdsb2JhbCBJUCBibG9jayBxdWVyaWVzXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBia3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIWJrdXNlcnMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBia2lwIG9mIGJrdXNlcnMpIHtcblx0XHRcdGlmICghbXcudXRpbC5pc0lQdjRBZGRyZXNzKGJraXApICYmICFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoYmtpcCkpIHtcblx0XHRcdFx0YmtpcCA9IGJraXAudG9VcHBlckNhc2UoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBia2lwKSkge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KFxuXHRcdFx0XHRcdE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBia2lwXG5cdFx0XHRcdCkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0xvY2FsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtHbG9iYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5SVBCbG9ja3MoYmtpcCkpIGFzIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblxuXHRcdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRtYXJrTG9jYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3MsIGJraXB9KTtcblxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGJsb2NrLnVzZXIpIHtcblx0XHRcdFx0XHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgYmxvY2sudXNlciwgcmVzcG9uc2UsIDYwICogNjApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRcdG1hcmtHbG9iYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3MsIGJraXB9KTtcblxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGJsb2NrLnRhcmdldCkge1xuXHRcdFx0XHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBibG9jay50YXJnZXQsIHJlc3BvbnNlLCA2MCAqIDYwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdC8vIEVycm9ycyBhcmUgYWxyZWFkeSBjYXVnaHQgaW5zaWRlIGVhY2ggcHJvbWlzZSBmYWN0b3J5XG5cdHZvaWQgUHJvbWlzZS5hbGwocHJvbWlzZXMubWFwKChwcm9taXNlKSA9PiBwcm9taXNlKCkpKTtcbn07XG5cbmV4cG9ydCB7bWFya0dsb2JhbExvY2tlZFVzZXJMaW5rcywgbWFya0Jsb2NrZWRVc2VyTGlua3MsIG1hcmtCbG9ja2VkSVBMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfSBmcm9tICcuL2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyc7XG5cbi8vIEdldCBhbGwgYWxpYXNlcyBmb3IgdXNlcjogJiB1c2VyX3RhbGs6XG5jb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcygpO1xuLy8gUmVnRXhwIGZvciBhbGwgdGl0bGVzIHRoYXQgYXJlICBVc2VyOnwgVXNlcl90YWxrOiB8IFNwZWNpYWw6Q29udHJpYnV0aW9ucy8gKGZvciB1c2Vyc2NyaXB0cylcbmNvbnN0IHVzZXJUaXRsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRgXigke3VzZXJOYW1lc3BhY2VUaXRsZXMuam9pbignfCcpfXwke09QVElPTlMuY29udHJpYnV0aW9uc1BhZ2VBbGlhc31cXFxcLykrKFteXFxcXC8jXSspJGAsXG5cdCdpJ1xuKTtcblxuLy8gUmVnRXhwIGZvciBsaW5rc1xuLy8gYXJ0aWNsZVJlZ2V4IGFsc28gbWF0Y2hlcyBleHRlcm5hbCBsaW5rcyBpbiBvcmRlciB0byBzdXBwb3J0IHRoZSBub3BpbmcgdGVtcGxhdGVcbmNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oW14jXSspYCk7XG5jb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7d2dTY3JpcHR9XFxcXD90aXRsZT0oW14jJl0rKWApO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KTogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0+IHtcblx0Ly8gRmluZCBhbGwgXCJ1c2VyXCIgbGlua3MgYW5kIHNhdmUgdGhlbSBpbiB1c2VyTGlua3MgOiB7ICd1c2Vycyc6IFs8bGluazE+LCA8bGluazI+LCAuLi5dLCAndXNlcjInOiBbPGxpbmszPiwgPGxpbmszPiwgLi4uXSwgLi4uIH1cblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPSB7fTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnYScpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdC1kYXRlJykgfHxcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdleHQtZGlzY3Vzc2lvbnRvb2xzLWluaXQtdGltZXN0YW1wbGluaycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctaGlzdG9yeS11bmRvJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1yb2xsYmFjay1saW5rJylcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGhyZWYucmVwbGFjZSgvXig/Omh0dHBzPzpcXC9cXC8pL2ksICcnKSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Ly8gTWF5YmUgYWJzb2x1dGUgVVJMXG5cdFx0XHRpZiAobmV3IE13VXJpKGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBNYXliZSByZWxhdGl2ZSBVUkxcblx0XHRcdFx0aWYgKG5ldyBNd1VyaShsb2NhdGlvbi5ocmVmICsgaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdO1xuXHRcdH0gZWxzZSBpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0cGFnZVRpdGxlID0gbWF0Y2hbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghcGFnZVRpdGxlIHx8IHR5cGVvZiBwYWdlVGl0bGUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwYWdlVGl0bGUgPSBkZWNvZGVVUklDb21wb25lbnQocGFnZVRpdGxlKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cblx0XHRjb25zdCB1c2VyRXhlY0FycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gdXNlclRpdGxlUmVnZXguZXhlYyhwYWdlVGl0bGUpO1xuXHRcdGlmICghdXNlckV4ZWNBcnJheSB8fCB0eXBlb2YgdXNlckV4ZWNBcnJheVsyXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCB1c2VyOiBzdHJpbmcgPSB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDEpO1xuXHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3ModXNlcikpIHtcblx0XHRcdHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0dXNlckxpbmtzW3VzZXJdID8/PSBbXTtcblxuXHRcdCh1c2VyTGlua3NbdXNlcl0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKVtcblx0XHRcdCh1c2VyTGlua3NbdXNlcl0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKS5sZW5ndGhcblx0XHRdID0gJGVsZW1lbnQ7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gdXNlckxpbmtzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMgPSAoKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VJZHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gW107XG5cblx0Zm9yIChjb25zdCBbbmFtZXNwYWNlLCBpZF0gb2YgT2JqZWN0LmVudHJpZXMod2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0aWYgKCFPUFRJT05TLnVzZXJOYW1lc3BhY2VOdW1iZXJzLmluY2x1ZGVzKGlkKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlck5hbWVzcGFjZVRpdGxlc1t1c2VyTmFtZXNwYWNlVGl0bGVzLmxlbmd0aF0gPSBgJHttdy51dGlsLmVzY2FwZVJlZ0V4cChuYW1lc3BhY2UucmVwbGFjZSgvXy9nLCAnICcpKX06YDsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdHJldHVybiB1c2VyTmFtZXNwYWNlVGl0bGVzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9O1xuIiwgImltcG9ydCB7bWFya0Jsb2NrZWRJUExpbmtzLCBtYXJrQmxvY2tlZFVzZXJMaW5rcywgbWFya0dsb2JhbExvY2tlZFVzZXJMaW5rc30gZnJvbSAnLi91dGlsL21hcmtVc2VyTGlua3MnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVXNlckxpbmtzJztcblxuY29uc3QgbWFya0Jsb2NrZWRVc2VyID0gKCRjb250ZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Ly8gRmluZCBhbGwgXCJ1c2VyXCIgbGlua3MgYW5kIHNhdmUgdGhlbSBpbiB1c2VyTGlua3MgOiB7ICd1c2Vycyc6IFs8bGluazE+LCA8bGluazI+LCAuLi5dLCAndXNlcjInOiBbPGxpbmszPiwgPGxpbmszPiwgLi4uXSwgLi4uIH1cblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPSBnZW5lcmF0ZVVzZXJMaW5rcygkY29udGVudCk7XG5cblx0bWFya0dsb2JhbExvY2tlZFVzZXJMaW5rcyh1c2VyTGlua3MpO1xuXHRtYXJrQmxvY2tlZFVzZXJMaW5rcyh1c2VyTGlua3MpO1xuXHRtYXJrQmxvY2tlZElQTGlua3ModXNlckxpbmtzKTtcbn07XG5cbmV4cG9ydCB7bWFya0Jsb2NrZWRVc2VyfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkVXNlcn0gZnJvbSAnLi9tYXJrQmxvY2tlZFVzZXInO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya0Jsb2NrZWQoJGNvbnRlbnQpOiB2b2lkIHtcblx0XHRpZiAoaXNJbml0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlzSW5pdCA9IHRydWU7XG5cblx0XHQvLyBPbiB0aGUgZmlyc3QgY2FsbCBhZnRlciBpbml0aWFsIHBhZ2UgbG9hZCwgY29udGFpbmVyIGlzIG13LnV0aWwuJGNvbnRlbnRcblx0XHQvLyBVc2VkIHRvIGxpbWl0IG1haW5zcGFjZSBhY3Rpdml0eSB0byBqdXN0IHRoZSBkaWZmIGRlZmluaXRpb25zXG5cdFx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRcdCRjb250ZW50ID0gJGNvbnRlbnQuZmluZCgnLmRpZmYtdGl0bGUnKTtcblx0XHR9XG5cdFx0Ly8gT24gcGFnZSBsb2FkLCBhbHNvIHVwZGF0ZSB0aGUgbmFtZXNwYWNlIHRhYlxuXHRcdCRjb250ZW50ID0gJGNvbnRlbnQuYWRkKCcjY2EtbnN0YWItdXNlcicpO1xuXG5cdFx0bWFya0Jsb2NrZWRVc2VyKCRjb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgImltcG9ydCB7YWRkSG9va30gZnJvbSAnLi9tb2R1bGVzL2FkZEhvb2snO1xuXG5pZiAoIVsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpKSkge1xuXHRhZGRIb29rKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RUFBQSxTQUFBckosS0FBQTtBQUFBZ0osZ0JBQUEvSSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBZ0osZ0JBQUE5SSxFQUFBO0VBQUE7QUFFQSxTQUFPbEI7QUFDUjs7QUV4RkEsSUFBTW1MLGtCQUFtQnBCLGNBQTJCO0FBRW5ELFFBQU0vSixZQUFzQzhKLGtCQUFrQkMsUUFBUTtBQUV0RS9FLDRCQUEwQmhGLFNBQVM7QUFDbkNxRyx1QkFBcUJyRyxTQUFTO0FBQzlCK0gscUJBQW1CL0gsU0FBUztBQUM3Qjs7QUNSQSxJQUFNO0VBQUNvTDtFQUFVQztBQUFpQixJQUFJN0YsR0FBR3NELE9BQU9oRixJQUFJO0FBRXBELElBQU13SCxVQUFVQSxNQUFZO0FBQzNCLE1BQUlDLFNBQWtCO0FBRXRCL0YsS0FBR2dHLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsWUFBWTNCLFVBQWdCO0FBQ3BFLFFBQUl3QixRQUFRO0FBQ1g7SUFDRDtBQUNBQSxhQUFTO0FBSVQsUUFBSUgsYUFBYSxVQUFVQyxzQkFBc0IsR0FBRztBQUNuRHRCLGlCQUFXQSxTQUFTRSxLQUFLLGFBQWE7SUFDdkM7QUFFQUYsZUFBV0EsU0FBUzBCLElBQUksZ0JBQWdCO0FBRXhDTixvQkFBZ0JwQixRQUFRO0VBQ3pCLENBQUM7QUFDRjs7QUNyQkEsSUFBSSxDQUFDLENBQUMsUUFBUSxRQUFRLEVBQUVYLFNBQVM1RCxHQUFHc0QsT0FBT2hGLElBQUksVUFBVSxDQUFDLEdBQUc7QUFDNUR3SCxVQUFRO0FBQ1Q7IiwKICAibmFtZXMiOiBbImNvbnRyaWJ1dGlvbnNQYWdlQWxpYXMiLCAidXNlck5hbWVzcGFjZU51bWJlcnMiLCAic3RvcmFnZUtleUJsb2NrZWQiLCAic3RvcmFnZUtleUxvY2tlZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImluZmluaXR5IiwgImxvY2FsaXplIiwgImVuIiwgIkJsb2NrZWQiLCAiTG9ja2VkIiwgInBhcnRpYWwiLCAiemgiLCAiZCIsICJzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhZGRaZXJvIiwgInYiLCAiY29uY2F0IiwgImluSG91cnMiLCAibXMiLCAibW0iLCAiTWF0aCIsICJmbG9vciIsICJoaCIsICJkZCIsICJwYXJzZVRTIiwgInN0cmluZyIsICJtIiwgInJlcGxhY2UiLCAibWF0Y2giLCAiRGF0ZSIsICJVVEMiLCAiZ2V0VGltZSIsICJ1c2VybGlua0luZGVmIiwgInVzZXJsaW5rTG9ja2VkIiwgInVzZXJsaW5rUGFydGlhbCIsICJ1c2VybGlua1RlbXAiLCAibWFya0dsb2JhbExvY2tlZExpbmtzIiwgInJlc3BvbnNlIiwgInVzZXJMaW5rcyIsICJ1c2VyIiwgIm5hbWUiLCAibG9ja2VkIiwgInRpcCIsICIkbGlua3MiLCAiY2xhc3NOYW1lIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAiJGxpbmsiLCAidmFsdWUiLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJlcnIiLCAiZSIsICJmIiwgIm1hcmtMb2NhbEJsb2NrcyIsICJia2lwIiwgIl9yZXNwb25zZSRxdWVyeSIsICJibG9ja3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiYmxvY2siLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImJsb2NrVGltZSIsICJleHBpcnkiLCAic3RhcnRzV2l0aCIsICJ0aW1lc3RhbXAiLCAiYnkiLCAicmVhc29uIiwgIm5vdyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJtYXJrR2xvYmFsQmxvY2tzIiwgIl9yZXNwb25zZSRxdWVyeTIiLCAiZ2xvYmFsYmxvY2tzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInRhcmdldCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJxdWVyeUdsb2JhbFVzZXJJbmZvIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZ3VpdXNlciIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgIm1ldGEiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAiZ2xvYmFsdXNlcmluZm8iLCAibWlzc2luZyIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1ZXJ5SVBCbG9ja3MiLCAiX3JlZjIiLCAibGlzdCIsICJia2xpbWl0IiwgImJrcHJvcCIsICJiZ2lwIiwgImJnbGltaXQiLCAiYmdwcm9wIiwgIl94MiIsICJxdWVyeVVzZXJCbG9ja3MiLCAiX3JlZjMiLCAiYmt1c2VycyIsICJiZ3RhcmdldHMiLCAiX3gzIiwgIm1hcmtHbG9iYWxMb2NrZWRVc2VyTGlua3MiLCAidXNlcnMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgInByb21pc2VzIiwgIl9pIiwgIl91c2VycyIsICJtdyIsICJ1dGlsIiwgImlzSVB2NEFkZHJlc3MiLCAiaXNJUHY2QWRkcmVzcyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJzZXRPYmplY3QiLCAiZXJyb3IiLCAiY29uc29sZSIsICJQcm9taXNlIiwgImFsbCIsICJtYXAiLCAicHJvbWlzZSIsICJtYXJrQmxvY2tlZFVzZXJMaW5rcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfcmVzcG9uc2UkcXVlcnk1IiwgIl9yZXNwb25zZSRxdWVyeTYiLCAiX3Jlc3BvbnNlJHF1ZXJ5NyIsICJfcmVzcG9uc2UkcXVlcnk4IiwgImZpbHRlciIsICJlbGVtZW50IiwgImkiLCAic3BsaWNlIiwgIl9yZXNwb25zZSRxdWVyeTMiLCAiX3Jlc3BvbnNlJHF1ZXJ5NCIsICJibG9ja1JlY29yZHMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiX2Jsb2NrUmVjb3JkcyRibG9jayR1IiwgInB1c2giLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiX2Jsb2NrUmVjb3JkcyRibG9jayR0IiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJtYXJrQmxvY2tlZElQTGlua3MiLCAiX2l0ZXJhdG9yMCIsICJfc3RlcDAiLCAidG9VcHBlckNhc2UiLCAiX3Jlc3BvbnNlJHF1ZXJ5OSIsICJfcmVzcG9uc2UkcXVlcnkwIiwgIl9yZXNwb25zZSRxdWVyeTEiLCAiX3Jlc3BvbnNlJHF1ZXJ5MTAiLCAiX2l0ZXJhdG9yMSIsICJfc3RlcDEiLCAiX2l0ZXJhdG9yMTAiLCAiX3N0ZXAxMCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzIiwgIndnTmFtZXNwYWNlSWRzIiwgImNvbmZpZyIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzMiIsICJfaTMiLCAiX09iamVjdCRlbnRyaWVzMiIsICJuYW1lc3BhY2UiLCAiaWQiLCAiaW5jbHVkZXMiLCAiZXNjYXBlUmVnRXhwIiwgInVzZXJOYW1lc3BhY2VUaXRsZXMiLCAidXNlclRpdGxlUmVnZXgiLCAiUmVnRXhwIiwgImpvaW4iLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJhcnRpY2xlUmVnZXgiLCAic2NyaXB0UmVnZXgiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAiX2l0ZXJhdG9yMTEiLCAiZmluZCIsICJfc3RlcDExIiwgIl91c2VyIiwgIl91c2VyTGlua3MkX3VzZXIiLCAiJGVsZW1lbnQiLCAiJCIsICJoYXNDbGFzcyIsICJwYXJlbnQiLCAiaHJlZiIsICJNd1VyaSIsICJob3N0IiwgImxvY2F0aW9uIiwgInBhZ2VUaXRsZSIsICJ0ZXN0IiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJFeGVjQXJyYXkiLCAic2xpY2UiLCAibWFya0Jsb2NrZWRVc2VyIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImFkZEhvb2siLCAiaXNJbml0IiwgImhvb2siLCAiYWRkIiwgIm1hcmtCbG9ja2VkIl0KfQo=
