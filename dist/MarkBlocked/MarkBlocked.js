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
        for (var _i3 = 0, _Object$entries = Object.entries(blockRecords); _i3 < _Object$entries.length; _i3++) {
          const [user, value] = _Object$entries[_i3];
          mw.storage.setObject(storageKeyBlocked + user, value, 60 * 60);
        }
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    });
  }
  void _asyncToGenerator(function* () {
    for (var _i4 = 0, _promises2 = promises; _i4 < _promises2.length; _i4++) {
      const promise = _promises2[_i4];
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
  void _asyncToGenerator(function* () {
    for (var _i5 = 0, _promises3 = promises; _i5 < _promises3.length; _i5++) {
      const promise = _promises3[_i5];
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
  for (var _i6 = 0, _Object$entries2 = Object.entries(wgNamespaceIds); _i6 < _Object$entries2.length; _i6++) {
    const [namespace, id] = _Object$entries2[_i6];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcGFyc2VUaW1lLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvbWFya0xpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcXVlcnkudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9jbGVhck9sZEtleXMudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJzdG9yYWdlS2V5QmxvY2tlZFwiOiBcImV4dC5nYWRnZXQuTWFya0Jsb2NrZWRfYmxvY2tlZC1cIixcblx0XCJzdG9yYWdlS2V5TG9ja2VkXCI6IFwiZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9sb2NrZWQtXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGluZmluaXR5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2luZmluaXR5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXoOmZkOacnycsXG5cdFx0XHQnemgtaGFudCc6ICfnhKHpmZDmnJ8nLFxuXHRcdH0pLFxuXHRcdEJsb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHQnR2xvYmFsbHkgQmxvY2tlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgZ2xvYmFsbHkgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWFqOWfn+WwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15YWo5Z+f5bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHRMb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyBMb2NrZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb5bey5YWo5Z+f6ZSB5a6aJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+W3suWFqOWfn+mOluWumicsXG5cdFx0fSksXG5cdFx0cGFydGlhbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwYXJ0aWFsICcsXG5cdFx0XHR6aDogJ+mDqOWIhicsXG5cdFx0fSksXG5cdFx0ZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkYXknLFxuXHRcdFx0emg6ICflpKknLFxuXHRcdH0pLFxuXHRcdHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnc2Vjb25kJyxcblx0XHRcdHpoOiAn56eSJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgYWRkWmVybyA9ICh2OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gdiA8PSA5ID8gYDAke3Z9YCA6IGAke3Z9YDtcbn07XG5cbmNvbnN0IGluSG91cnMgPSAobXM6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdGxldCBtbTogbnVtYmVyID0gTWF0aC5mbG9vcihtcyAvIDZlNCk7XG5cdGlmICghbW0pIHtcblx0XHRyZXR1cm4gYCR7TWF0aC5mbG9vcihtcyAvIDFlMyl9JHtnZXRNZXNzYWdlKCdzJyl9YDtcblx0fVxuXG5cdGxldCBoaDogbnVtYmVyID0gTWF0aC5mbG9vcihtbSAvIDYwKTtcblx0bW0gJT0gNjA7XG5cblx0Y29uc3QgZGQ6IG51bWJlciA9IE1hdGguZmxvb3IoaGggLyAyNCk7XG5cdGhoICU9IDI0O1xuXG5cdGlmIChkZCkge1xuXHRcdHJldHVybiBgJHtkZCArIChkZCA8IDEwID8gYC4ke2FkZFplcm8oaGgpfWAgOiAnJyl9JHtnZXRNZXNzYWdlKCdkJyl9YDtcblx0fVxuXG5cdHJldHVybiBgJHtoaH06JHthZGRaZXJvKG1tKX1gO1xufTtcblxuLy8gMjAwODEyMjYyMjA2MDUgb3IgMjAwOC0wMS0yNlQwNjozNDoxOVogLT4gbnVtYmVyXG5jb25zdCBwYXJzZVRTID0gKHN0cmluZzogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0Y29uc3QgbTogUmVnRXhwTWF0Y2hBcnJheSA9IHN0cmluZ1xuXHRcdC5yZXBsYWNlKC9cXEQvZywgJycpXG5cdFx0Lm1hdGNoKC8oXFxkXFxkXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkvKSBhcyBSZWdFeHBNYXRjaEFycmF5O1xuXG5cdHJldHVybiBuZXcgRGF0ZShcblx0XHREYXRlLlVUQyhcblx0XHRcdCsobVsxXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzJdIGFzIHN0cmluZykgLSAxLFxuXHRcdFx0KyhtWzNdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNF0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs1XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzZdIGFzIHN0cmluZylcblx0XHQpXG5cdCkuZ2V0VGltZSgpO1xufTtcblxuZXhwb3J0IHtpbkhvdXJzLCBwYXJzZVRTfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0luZGVmID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rSW5kZWZfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtMb2NrZWQgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtMb2NrZWRfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtQYXJ0aWFsID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rUGFydGlhbF94dEFmT0dfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1RlbXAgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtUZW1wX3h0QWZPR19fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwidXNlcmxpbmtJbmRlZlwiOiB1c2VybGlua0luZGVmLFxuICBcInVzZXJsaW5rTG9ja2VkXCI6IHVzZXJsaW5rTG9ja2VkLFxuICBcInVzZXJsaW5rUGFydGlhbFwiOiB1c2VybGlua1BhcnRpYWwsXG4gIFwidXNlcmxpbmtUZW1wXCI6IHVzZXJsaW5rVGVtcFxufTtcbiAgICAgICIsICJpbXBvcnQgdHlwZSB7R2xvYmFsTG9ja3NTdG9yYWdlLCBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2V9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7aW5Ib3VycywgcGFyc2VUU30gZnJvbSAnLi9wYXJzZVRpbWUnO1xuaW1wb3J0IHt1c2VybGlua0luZGVmLCB1c2VybGlua0xvY2tlZCwgdXNlcmxpbmtQYXJ0aWFsLCB1c2VybGlua1RlbXB9IGZyb20gJy4uL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENhbGxiYWNrOiByZWNlaXZlIGRhdGEgYW5kIG1hcmsgbGlua3NcbiAqL1xuXG5jb25zdCBtYXJrR2xvYmFsTG9ja2VkTGlua3MgPSAoe1xuXHRyZXNwb25zZSxcblx0dXNlckxpbmtzLFxufToge1xuXHRyZXNwb25zZTogR2xvYmFsTG9ja3NTdG9yYWdlO1xuXHR1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPjtcbn0pOiB2b2lkID0+IHtcblx0Ly8gR2xvYmFsIGxvY2tzXG5cdGNvbnN0IHVzZXIgPSByZXNwb25zZT8ubmFtZTtcblx0Y29uc3QgbG9ja2VkID0gcmVzcG9uc2U/LmxvY2tlZDtcblxuXHRpZiAoIWxvY2tlZCB8fCAhdXNlcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnTG9ja2VkJyk7XG5cblx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1t1c2VyXTtcblx0aWYgKCEkbGlua3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjbGFzc05hbWUgPSB1c2VybGlua0xvY2tlZCBhcyBzdHJpbmc7XG5cblx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0fVxufTtcblxuY29uc3QgbWFya0xvY2FsQmxvY2tzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcblx0YmtpcCxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG5cdGJraXA/OiBzdHJpbmc7XG59KTogdm9pZCA9PiB7XG5cdC8vIExvY2FsIGJsb2Nrc1xuXHRpZiAoIXJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdGNvbnN0IGlzUGFydGlhbEJsY29rOiBib29sZWFuID0gdHlwZW9mIGJsb2NrLnJlc3RyaWN0aW9ucyA9PT0gJ3N0cmluZycgJiYgYmxvY2sucmVzdHJpY3Rpb25zICE9PSAnJzsgLy8gUGFydGlhbCBibG9ja1xuXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rVGVtcCBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0fVxuXG5cdFx0bGV0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmxvY2tlZCcpXG5cdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdC5yZXBsYWNlKCckMycsIGJsb2NrLnJlYXNvbilcblx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbYmtpcCA/PyBibG9jay51c2VyXTtcblx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgbWFya0dsb2JhbEJsb2NrcyA9ICh7XG5cdHJlc3BvbnNlLFxuXHR1c2VyTGlua3MsXG5cdGJraXAsXG59OiB7XG5cdHJlc3BvbnNlOiBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cdHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+O1xuXHRia2lwPzogc3RyaW5nO1xufSk6IHZvaWQgPT4ge1xuXHQvLyBHbG9iYWwgYmxvY2tzXG5cdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rSW5kZWYgYXMgc3RyaW5nO1xuXHRcdFx0YmxvY2tUaW1lID0gZ2V0TWVzc2FnZSgnaW5maW5pdHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtUZW1wIGFzIHN0cmluZztcblx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHR9XG5cblx0XHRsZXQgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdHbG9iYWxseSBCbG9ja2VkJylcblx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdC5yZXBsYWNlKCckMicsIGJsb2NrLmJ5KVxuXHRcdFx0LnJlcGxhY2UoJyQzJywgYmxvY2sucmVhc29uKVxuXHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0dGlwID0gdGlwLnJlcGxhY2UoJyQ1JywgJycpO1xuXG5cdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tia2lwID8/IGJsb2NrLnRhcmdldF07XG5cdFx0aWYgKCEkbGlua3MpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJGxpbmtzKSB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7bWFya0dsb2JhbExvY2tlZExpbmtzLCBtYXJrTG9jYWxCbG9ja3MsIG1hcmtHbG9iYWxCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya0Jsb2NrZWQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkLCBHbG9iYWxMb2Nrc1N0b3JhZ2UsIFF1ZXJ5R2xvYmFsTG9ja3NSZXNwb25zZX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlHbG9iYWxVc2VySW5mbyA9IGFzeW5jIChndWl1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2UgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRtZXRhOiBbJ2dsb2JhbHVzZXJpbmZvJ10sXG5cdFx0Z3VpdXNlcixcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0Y29uc3Qge1xuXHRcdHF1ZXJ5OiB7XG5cdFx0XHRnbG9iYWx1c2VyaW5mbzoge25hbWUsIGxvY2tlZCA9IGZhbHNlLCBtaXNzaW5nID0gZmFsc2V9LFxuXHRcdH0sXG5cdH0gPSAoYXdhaXQgYXBpLmdldChwYXJhbXMpKSBhcyBRdWVyeUdsb2JhbExvY2tzUmVzcG9uc2U7XG5cblx0Ly8gTWluaWZ5IHJlc3BvbnNlIG9iamVjdFxuXHRjb25zdCByZXNwb25zZTogR2xvYmFsTG9ja3NTdG9yYWdlID0ge25hbWV9O1xuXG5cdGlmIChsb2NrZWQpIHtcblx0XHRyZXNwb25zZS5sb2NrZWQgPSBsb2NrZWQ7XG5cdH1cblxuXHRpZiAobWlzc2luZykge1xuXHRcdHJlc3BvbnNlLm1pc3NpbmcgPSBtaXNzaW5nO1xuXHR9XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlJUEJsb2NrcyA9IGFzeW5jIChia2lwOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyAmIEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogWydibG9ja3MnLCAnZ2xvYmFsYmxvY2tzJ10sXG5cdFx0YmtpcCxcblx0XHRia2xpbWl0OiAxMDAsXG5cdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0YmdpcDogYmtpcCxcblx0XHRiZ2xpbWl0OiAxMDAsXG5cdFx0Ymdwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAndGltZXN0YW1wJywgJ3RhcmdldCddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgcXVlcnlVc2VyQmxvY2tzID0gYXN5bmMgKGJrdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlCbG9ja3NQYXJhbXMgJiBBcGlRdWVyeUdsb2JhbEJsb2Nrc1BhcmFtc1JlZGVmaW5lZCA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6IFsnYmxvY2tzJywgJ2dsb2JhbGJsb2NrcyddLFxuXHRcdGJrdXNlcnMsXG5cdFx0YmtsaW1pdDogMTAwLFxuXHRcdGJrcHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3Jlc3RyaWN0aW9ucycsICd0aW1lc3RhbXAnLCAndXNlciddLFxuXHRcdGJnbGltaXQ6IDEwMCxcblx0XHRiZ3RhcmdldHM6IGJrdXNlcnMsXG5cdFx0Ymdwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAndGltZXN0YW1wJywgJ3RhcmdldCddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtxdWVyeUdsb2JhbFVzZXJJbmZvLCBxdWVyeUlQQmxvY2tzLCBxdWVyeVVzZXJCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB0eXBlIHtHbG9iYWxMb2Nrc1N0b3JhZ2UsIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHttYXJrR2xvYmFsQmxvY2tzLCBtYXJrR2xvYmFsTG9ja2VkTGlua3MsIG1hcmtMb2NhbEJsb2Nrc30gZnJvbSAnLi9tYXJrTGlua3MnO1xuaW1wb3J0IHtxdWVyeUdsb2JhbFVzZXJJbmZvLCBxdWVyeUlQQmxvY2tzLCBxdWVyeVVzZXJCbG9ja3N9IGZyb20gJy4vcXVlcnknO1xuXG5jb25zdCBtYXJrR2xvYmFsTG9ja2VkVXNlckxpbmtzID0gKHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+KSA9PiB7XG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdC8vIEdsb2JhbCBMb2NrIHF1ZXJpZXNcblx0Zm9yIChjb25zdCBndWl1c2VyIG9mIHVzZXJzKSB7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyhndWl1c2VyKSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3MoZ3VpdXNlcikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBndWl1c2VyKSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBndWl1c2VyKSBhcyBHbG9iYWxMb2Nrc1N0b3JhZ2U7XG5cblx0XHRcdGlmIChyZXNwb25zZSkge1xuXHRcdFx0XHRtYXJrR2xvYmFsTG9ja2VkTGlua3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlHbG9iYWxVc2VySW5mbyhndWl1c2VyKTtcblxuXHRcdFx0XHRtYXJrR2xvYmFsTG9ja2VkTGlua3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblxuXHRcdFx0XHQvLyBDYWNoZSBmb3IgMSBkYXlcblx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9ja2VkICsgZ3VpdXNlciwgcmVzcG9uc2UsIDYwICogNjAgKiAyNCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpO1xufTtcblxuY29uc3QgbWFya0Jsb2NrZWRVc2VyTGlua3MgPSAodXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4pID0+IHtcblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGxldCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgdXNlciBvZiB1c2Vycykge1xuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgdXNlcikpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoXG5cdFx0XHRcdE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyXG5cdFx0XHQpIGFzIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MgfHwgcmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrR2xvYmFsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1c2VycyA9IHVzZXJzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSB1c2VyO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBMb2NhbCBhbmQgZ2xvYmFsIHVzZXIgYmxvY2sgcXVlcmllc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5VXNlckJsb2Nrcyhia3VzZXJzKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXHRcdFx0XHRjb25zdCBibG9ja1JlY29yZHM6IFJlY29yZDxzdHJpbmcsIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZT4gPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIGJrdXNlcnMpIHtcblx0XHRcdFx0XHRibG9ja1JlY29yZHNbdXNlcl0gPSB7cXVlcnk6IHtibG9ja3M6IFtdLCBnbG9iYWxibG9ja3M6IFtdfX07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdGlmIChibG9jay51c2VyKSB7XG5cdFx0XHRcdFx0XHRcdGJsb2NrUmVjb3Jkc1tibG9jay51c2VyXT8ucXVlcnkuYmxvY2tzIS5wdXNoKGJsb2NrKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtHbG9iYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblxuXHRcdFx0XHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRpZiAoYmxvY2sudGFyZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdGJsb2NrUmVjb3Jkc1tibG9jay50YXJnZXRdPy5xdWVyeS5nbG9iYWxibG9ja3MhLnB1c2goYmxvY2spO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoY29uc3QgW3VzZXIsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhibG9ja1JlY29yZHMpKSB7XG5cdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIHVzZXIsIHZhbHVlLCA2MCAqIDYwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmNvbnN0IG1hcmtCbG9ja2VkSVBMaW5rcyA9ICh1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPikgPT4ge1xuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0Y29uc3QgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHQvLyBMb2NhbCBhbmQgZ2xvYmFsIElQIGJsb2NrIHF1ZXJpZXNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGJrdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghYmt1c2Vycy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGJraXAgb2YgYmt1c2Vycykge1xuXHRcdFx0aWYgKCFtdy51dGlsLmlzSVB2NEFkZHJlc3MoYmtpcCkgJiYgIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhia2lwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhia2lwKSkge1xuXHRcdFx0XHRia2lwID0gYmtpcC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJraXApKSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoXG5cdFx0XHRcdFx0T1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJraXBcblx0XHRcdFx0KSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrTG9jYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0dsb2JhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgcXVlcnlJUEJsb2Nrcyhia2lwKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rcywgYmtpcH0pO1xuXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoYmxvY2sudXNlcikge1xuXHRcdFx0XHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBibG9jay51c2VyLCByZXNwb25zZSwgNjAgKiA2MCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdFx0bWFya0dsb2JhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rcywgYmtpcH0pO1xuXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoYmxvY2sudGFyZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJsb2NrLnRhcmdldCwgcmVzcG9uc2UsIDYwICogNjApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmV4cG9ydCB7bWFya0dsb2JhbExvY2tlZFVzZXJMaW5rcywgbWFya0Jsb2NrZWRVc2VyTGlua3MsIG1hcmtCbG9ja2VkSVBMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfSBmcm9tICcuL2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyc7XG5cbi8vIEdldCBhbGwgYWxpYXNlcyBmb3IgdXNlcjogJiB1c2VyX3RhbGs6XG5jb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcygpO1xuLy8gUmVnRXhwIGZvciBhbGwgdGl0bGVzIHRoYXQgYXJlICBVc2VyOnwgVXNlcl90YWxrOiB8IFNwZWNpYWw6Q29udHJpYnV0aW9ucy8gKGZvciB1c2Vyc2NyaXB0cylcbmNvbnN0IHVzZXJUaXRsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRgXigke3VzZXJOYW1lc3BhY2VUaXRsZXMuam9pbignfCcpfXwke09QVElPTlMuY29udHJpYnV0aW9uc1BhZ2VBbGlhc31cXFxcLykrKFteXFxcXC8jXSspJGAsXG5cdCdpJ1xuKTtcblxuLy8gUmVnRXhwIGZvciBsaW5rc1xuLy8gYXJ0aWNsZVJlZ2V4IGFsc28gbWF0Y2hlcyBleHRlcm5hbCBsaW5rcyBpbiBvcmRlciB0byBzdXBwb3J0IHRoZSBub3BpbmcgdGVtcGxhdGVcbmNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oW14jXSspYCk7XG5jb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7d2dTY3JpcHR9XFxcXD90aXRsZT0oW14jJl0rKWApO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KTogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0+IHtcblx0Ly8gRmluZCBhbGwgXCJ1c2VyXCIgbGlua3MgYW5kIHNhdmUgdGhlbSBpbiB1c2VyTGlua3MgOiB7ICd1c2Vycyc6IFs8bGluazE+LCA8bGluazI+LCAuLi5dLCAndXNlcjInOiBbPGxpbmszPiwgPGxpbmszPiwgLi4uXSwgLi4uIH1cblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPSB7fTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnYScpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdC1kYXRlJykgfHxcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdleHQtZGlzY3Vzc2lvbnRvb2xzLWluaXQtdGltZXN0YW1wbGluaycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctaGlzdG9yeS11bmRvJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1yb2xsYmFjay1saW5rJylcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGhyZWYucmVwbGFjZSgvXig/Omh0dHBzPzpcXC9cXC8pL2ksICcnKSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Ly8gTWF5YmUgYWJzb2x1dGUgVVJMXG5cdFx0XHRpZiAobmV3IE13VXJpKGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBNYXliZSByZWxhdGl2ZSBVUkxcblx0XHRcdFx0aWYgKG5ldyBNd1VyaShsb2NhdGlvbi5ocmVmICsgaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdO1xuXHRcdH0gZWxzZSBpZiAoc2NyaXB0UmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IHNjcmlwdFJlZ2V4LmV4ZWMoaHJlZikgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0cGFnZVRpdGxlID0gbWF0Y2hbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghcGFnZVRpdGxlIHx8IHR5cGVvZiBwYWdlVGl0bGUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwYWdlVGl0bGUgPSBkZWNvZGVVUklDb21wb25lbnQocGFnZVRpdGxlKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cblx0XHRjb25zdCB1c2VyRXhlY0FycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gdXNlclRpdGxlUmVnZXguZXhlYyhwYWdlVGl0bGUpO1xuXHRcdGlmICghdXNlckV4ZWNBcnJheSB8fCB0eXBlb2YgdXNlckV4ZWNBcnJheVsyXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCB1c2VyOiBzdHJpbmcgPSB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB1c2VyRXhlY0FycmF5WzJdLnNsaWNlKDEpO1xuXHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3ModXNlcikpIHtcblx0XHRcdHVzZXIgPSB1c2VyLnRvVXBwZXJDYXNlKCk7XG5cdFx0fVxuXG5cdFx0dXNlckxpbmtzW3VzZXJdID8/PSBbXTtcblxuXHRcdCh1c2VyTGlua3NbdXNlcl0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKVtcblx0XHRcdCh1c2VyTGlua3NbdXNlcl0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKS5sZW5ndGhcblx0XHRdID0gJGVsZW1lbnQ7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gdXNlckxpbmtzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMgPSAoKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VJZHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gW107XG5cblx0Zm9yIChjb25zdCBbbmFtZXNwYWNlLCBpZF0gb2YgT2JqZWN0LmVudHJpZXMod2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0aWYgKCFPUFRJT05TLnVzZXJOYW1lc3BhY2VOdW1iZXJzLmluY2x1ZGVzKGlkKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dXNlck5hbWVzcGFjZVRpdGxlc1t1c2VyTmFtZXNwYWNlVGl0bGVzLmxlbmd0aF0gPSBgJHttdy51dGlsLmVzY2FwZVJlZ0V4cChuYW1lc3BhY2UucmVwbGFjZSgvXy9nLCAnICcpKX06YDsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdHJldHVybiB1c2VyTmFtZXNwYWNlVGl0bGVzO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9O1xuIiwgImltcG9ydCB7bWFya0Jsb2NrZWRJUExpbmtzLCBtYXJrQmxvY2tlZFVzZXJMaW5rcywgbWFya0dsb2JhbExvY2tlZFVzZXJMaW5rc30gZnJvbSAnLi91dGlsL21hcmtVc2VyTGlua3MnO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJMaW5rc30gZnJvbSAnLi91dGlsL2dlbmVyYXRlVXNlckxpbmtzJztcblxuY29uc3QgbWFya0Jsb2NrZWRVc2VyID0gKCRjb250ZW50OiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Ly8gRmluZCBhbGwgXCJ1c2VyXCIgbGlua3MgYW5kIHNhdmUgdGhlbSBpbiB1c2VyTGlua3MgOiB7ICd1c2Vycyc6IFs8bGluazE+LCA8bGluazI+LCAuLi5dLCAndXNlcjInOiBbPGxpbmszPiwgPGxpbmszPiwgLi4uXSwgLi4uIH1cblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPSBnZW5lcmF0ZVVzZXJMaW5rcygkY29udGVudCk7XG5cblx0bWFya0dsb2JhbExvY2tlZFVzZXJMaW5rcyh1c2VyTGlua3MpO1xuXHRtYXJrQmxvY2tlZFVzZXJMaW5rcyh1c2VyTGlua3MpO1xuXHRtYXJrQmxvY2tlZElQTGlua3ModXNlckxpbmtzKTtcbn07XG5cbmV4cG9ydCB7bWFya0Jsb2NrZWRVc2VyfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkVXNlcn0gZnJvbSAnLi9tYXJrQmxvY2tlZFVzZXInO1xuXG5jb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgYWRkSG9vayA9ICgpOiB2b2lkID0+IHtcblx0bGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya0Jsb2NrZWQoJGNvbnRlbnQpOiB2b2lkIHtcblx0XHRpZiAoaXNJbml0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlzSW5pdCA9IHRydWU7XG5cblx0XHQvLyBPbiB0aGUgZmlyc3QgY2FsbCBhZnRlciBpbml0aWFsIHBhZ2UgbG9hZCwgY29udGFpbmVyIGlzIG13LnV0aWwuJGNvbnRlbnRcblx0XHQvLyBVc2VkIHRvIGxpbWl0IG1haW5zcGFjZSBhY3Rpdml0eSB0byBqdXN0IHRoZSBkaWZmIGRlZmluaXRpb25zXG5cdFx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRcdCRjb250ZW50ID0gJGNvbnRlbnQuZmluZCgnLmRpZmYtdGl0bGUnKTtcblx0XHR9XG5cdFx0Ly8gT24gcGFnZSBsb2FkLCBhbHNvIHVwZGF0ZSB0aGUgbmFtZXNwYWNlIHRhYlxuXHRcdCRjb250ZW50ID0gJGNvbnRlbnQuYWRkKCcjY2EtbnN0YWItdXNlcicpO1xuXG5cdFx0bWFya0Jsb2NrZWRVc2VyKCRjb250ZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhvb2t9O1xuIiwgImNvbnN0IGNsZWFyT2xkS2V5cyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX29sZEtleXNDbGVhcmVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGtleSBpbiBsb2NhbFN0b3JhZ2UpIHtcblx0XHRpZiAoT2JqZWN0Lmhhc093bihsb2NhbFN0b3JhZ2UsIGtleSkpIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWxvbmVseS1pZlxuXHRcdFx0aWYgKFxuXHRcdFx0XHRrZXkuc3RhcnRzV2l0aCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0xvY2tlZC0nKSB8fFxuXHRcdFx0XHRrZXkuc3RhcnRzV2l0aCgnX0VYUElSWV9leHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX2lzTG9ja2VkLScpXG5cdFx0XHQpIHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaWYgKFxuXHRcdFx0Ly8gXHRrZXkuc3RhcnRzV2l0aCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0Jsb2NrZWQtJykgfHxcblx0XHRcdC8vIFx0a2V5LnN0YXJ0c1dpdGgoJ19FWFBJUllfZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0Jsb2NrZWQtJylcblx0XHRcdC8vICkge1xuXHRcdFx0Ly8gXHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuXHRcdFx0Ly8gfVxuXHRcdH1cblx0fVxuXG5cdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX29sZEtleXNDbGVhcmVkJywgdHJ1ZSk7XG59O1xuXG5leHBvcnQge2NsZWFyT2xkS2V5c307XG4iLCAiaW1wb3J0IHthZGRIb29rfSBmcm9tICcuL21vZHVsZXMvYWRkSG9vayc7XG5pbXBvcnQge2NsZWFyT2xkS2V5c30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2xlYXJPbGRLZXlzJztcblxuaWYgKCFbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMobXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSkpIHtcblx0YWRkSG9vaygpO1xufVxuXG4vLyBhZGQgYSBvbmUtdGltZSBmdW5jdGlvbiB0byBjbGVhciBvbGQgbG9jYWxTdG9yYWdlIGtleXNcbmlmICghbXcuc3RvcmFnZS5nZXRPYmplY3QoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfb2xkS2V5c0NsZWFyZWQnKSkge1xuXHR2b2lkIGNsZWFyT2xkS2V5cygpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEseUJBQTBCO0FBQzFCLElBQUFDLHVCQUF3QixDQUFDLEdBQUcsQ0FBQztBQUM3QixJQUFBQyxvQkFBcUI7QUFDckIsSUFBQUMsbUJBQW9CO0FBQ3BCLElBQUFDLFVBQVc7O0FDTFosSUFBQUMsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFdBQUEsR0FBVUgsa0JBQUFJLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTixrQkFBQUksVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CTCxrQkFBQUksVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxTQUFBLEdBQVFQLGtCQUFBSSxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFVBQUEsR0FBU1Isa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFDSkksSUFBSTtJQUNMLENBQUM7SUFDREMsSUFBQSxHQUFHVixrQkFBQUksVUFBUztNQUNYQyxJQUFJO01BQ0pJLElBQUk7SUFDTCxDQUFDO0lBQ0RFLElBQUEsR0FBR1gsa0JBQUFJLFVBQVM7TUFDWEMsSUFB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QzNCLE1BQUlDLFNBQWtCO0FBRXRCbEcsS0FBR21HLEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsWUFBWTNCLFVBQWdCO0FBQ3BFLFFBQUl3QixRQUFRO0FBQ1g7SUFDRDtBQUNBQSxhQUFTO0FBSVQsUUFBSUgsYUFBYSxVQUFVQyxzQkFBc0IsR0FBRztBQUNuRHRCLGlCQUFXQSxTQUFTRSxLQUFLLGFBQWE7SUFDdkM7QUFFQUYsZUFBV0EsU0FBUzBCLElBQUksZ0JBQWdCO0FBRXhDTixvQkFBZ0JwQixRQUFRO0VBQ3pCLENBQUM7QUFDRjs7QUN2QkEsSUFBTTRCLGVBQWVBLE1BQVk7QUFDaEMsTUFBSXRHLEdBQUdJLFFBQVFDLFVBQVUsdUNBQXVDLEdBQUc7QUFDbEU7RUFDRDtBQUVBLGFBQVd0SCxPQUFPd04sY0FBYztBQUMvQixRQUFJN0csT0FBTzhHLE9BQU9ELGNBQWN4TixHQUFHLEdBQUc7QUFFckMsVUFDQ0EsSUFBSXVELFdBQVcsa0NBQWtDLEtBQ2pEdkQsSUFBSXVELFdBQVcsMENBQTBDLEdBQ3hEO0FBQ0RpSyxxQkFBYUUsV0FBVzFOLEdBQUc7TUFDNUI7SUFRRDtFQUNEO0FBRUFpSCxLQUFHSSxRQUFRRSxVQUFVLHlDQUF5QyxJQUFJO0FBQ25FOztBQ3RCQSxJQUFJLENBQUMsQ0FBQyxRQUFRLFFBQVEsRUFBRXlELFNBQVMvRCxHQUFHeUQsT0FBT25GLElBQUksVUFBVSxDQUFDLEdBQUc7QUFDNUQySCxVQUFRO0FBQ1Q7QUFHQSxJQUFJLENBQUNqRyxHQUFHSSxRQUFRQyxVQUFVLHVDQUF1QyxHQUFHO0FBQ25FLE9BQUtpRyxhQUFhO0FBQ25COyIsCiAgIm5hbWVzIjogWyJjb250cmlidXRpb25zUGFnZUFsaWFzIiwgInVzZXJOYW1lc3BhY2VOdW1iZXJzIiwgInN0b3JhZ2VLZXlCbG9ja2VkIiwgInN0b3JhZ2VLZXlMb2NrZWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJpbmZpbml0eSIsICJsb2NhbGl6ZSIsICJlbiIsICJCbG9ja2VkIiwgIkxvY2tlZCIsICJwYXJ0aWFsIiwgInpoIiwgImQiLCAicyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkWmVybyIsICJ2IiwgImNvbmNhdCIsICJpbkhvdXJzIiwgIm1zIiwgIm1tIiwgIk1hdGgiLCAiZmxvb3IiLCAiaGgiLCAiZGQiLCAicGFyc2VUUyIsICJzdHJpbmciLCAibSIsICJyZXBsYWNlIiwgIm1hdGNoIiwgIkRhdGUiLCAiVVRDIiwgImdldFRpbWUiLCAidXNlcmxpbmtJbmRlZiIsICJ1c2VybGlua0xvY2tlZCIsICJ1c2VybGlua1BhcnRpYWwiLCAidXNlcmxpbmtUZW1wIiwgIm1hcmtHbG9iYWxMb2NrZWRMaW5rcyIsICJyZXNwb25zZSIsICJ1c2VyTGlua3MiLCAidXNlciIsICJuYW1lIiwgImxvY2tlZCIsICJ0aXAiLCAiJGxpbmtzIiwgImNsYXNzTmFtZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAibiIsICJkb25lIiwgIiRsaW5rIiwgInZhbHVlIiwgImFkZENsYXNzIiwgImF0dHIiLCAiZXJyIiwgImUiLCAiZiIsICJtYXJrTG9jYWxCbG9ja3MiLCAiYmtpcCIsICJfcmVzcG9uc2UkcXVlcnkiLCAiYmxvY2tzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImJsb2NrIiwgImlzUGFydGlhbEJsY29rIiwgInJlc3RyaWN0aW9ucyIsICJibG9ja1RpbWUiLCAiZXhwaXJ5IiwgInN0YXJ0c1dpdGgiLCAidGltZXN0YW1wIiwgImJ5IiwgInJlYXNvbiIsICJub3ciLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibWFya0dsb2JhbEJsb2NrcyIsICJfcmVzcG9uc2UkcXVlcnkyIiwgImdsb2JhbGJsb2NrcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ0YXJnZXQiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAicXVlcnlHbG9iYWxVc2VySW5mbyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImd1aXVzZXIiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJtZXRhIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInF1ZXJ5IiwgImdsb2JhbHVzZXJpbmZvIiwgIm1pc3NpbmciLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWVyeUlQQmxvY2tzIiwgIl9yZWYyIiwgImxpc3QiLCAiYmtsaW1pdCIsICJia3Byb3AiLCAiYmdpcCIsICJiZ2xpbWl0IiwgImJncHJvcCIsICJfeDIiLCAicXVlcnlVc2VyQmxvY2tzIiwgIl9yZWYzIiwgImJrdXNlcnMiLCAiYmd0YXJnZXRzIiwgIl94MyIsICJtYXJrR2xvYmFsTG9ja2VkVXNlckxpbmtzIiwgInVzZXJzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJwcm9taXNlcyIsICJfaSIsICJfdXNlcnMiLCAibXciLCAidXRpbCIsICJpc0lQdjRBZGRyZXNzIiwgImlzSVB2NkFkZHJlc3MiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAic2V0T2JqZWN0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX2kyIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgIm1hcmtCbG9ja2VkVXNlckxpbmtzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIl9yZXNwb25zZSRxdWVyeTUiLCAiX3Jlc3BvbnNlJHF1ZXJ5NiIsICJfcmVzcG9uc2UkcXVlcnk3IiwgIl9yZXNwb25zZSRxdWVyeTgiLCAiZmlsdGVyIiwgImVsZW1lbnQiLCAiaSIsICJzcGxpY2UiLCAiX3Jlc3BvbnNlJHF1ZXJ5MyIsICJfcmVzcG9uc2UkcXVlcnk0IiwgImJsb2NrUmVjb3JkcyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJfYmxvY2tSZWNvcmRzJGJsb2NrJHUiLCAicHVzaCIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJfYmxvY2tSZWNvcmRzJGJsb2NrJHQiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgIl9pNCIsICJfcHJvbWlzZXMyIiwgIm1hcmtCbG9ja2VkSVBMaW5rcyIsICJfaXRlcmF0b3IwIiwgIl9zdGVwMCIsICJ0b1VwcGVyQ2FzZSIsICJfcmVzcG9uc2UkcXVlcnk5IiwgIl9yZXNwb25zZSRxdWVyeTAiLCAiX3Jlc3BvbnNlJHF1ZXJ5MSIsICJfcmVzcG9uc2UkcXVlcnkxMCIsICJfaXRlcmF0b3IxIiwgIl9zdGVwMSIsICJfaXRlcmF0b3IxMCIsICJfc3RlcDEwIiwgIl9pNSIsICJfcHJvbWlzZXMzIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMiLCAid2dOYW1lc3BhY2VJZHMiLCAiY29uZmlnIiwgInVzZXJOYW1lc3BhY2VUaXRsZXMyIiwgIl9pNiIsICJfT2JqZWN0JGVudHJpZXMyIiwgIm5hbWVzcGFjZSIsICJpZCIsICJpbmNsdWRlcyIsICJlc2NhcGVSZWdFeHAiLCAidXNlck5hbWVzcGFjZVRpdGxlcyIsICJ1c2VyVGl0bGVSZWdleCIsICJSZWdFeHAiLCAiam9pbiIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgImFydGljbGVSZWdleCIsICJzY3JpcHRSZWdleCIsICJnZW5lcmF0ZVVzZXJMaW5rcyIsICIkY29udGVudCIsICJfaXRlcmF0b3IxMSIsICJmaW5kIiwgIl9zdGVwMTEiLCAiX3VzZXIiLCAiX3VzZXJMaW5rcyRfdXNlciIsICIkZWxlbWVudCIsICIkIiwgImhhc0NsYXNzIiwgInBhcmVudCIsICJocmVmIiwgIk13VXJpIiwgImhvc3QiLCAibG9jYXRpb24iLCAicGFnZVRpdGxlIiwgInRlc3QiLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlckV4ZWNBcnJheSIsICJzbGljZSIsICJtYXJrQmxvY2tlZFVzZXIiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiYWRkSG9vayIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAibWFya0Jsb2NrZWQiLCAiY2xlYXJPbGRLZXlzIiwgImxvY2FsU3RvcmFnZSIsICJoYXNPd24iLCAicmVtb3ZlSXRlbSJdCn0K
