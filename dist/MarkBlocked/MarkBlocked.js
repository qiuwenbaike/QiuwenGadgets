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
    var _iterator10 = _createForOfIteratorHelper(bkusers), _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
        let bkip = _step10.value;
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
              var _iterator11 = _createForOfIteratorHelper(response["query"].blocks), _step11;
              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                  const block = _step11.value;
                  if (block.user) {
                    mw.storage.setObject(storageKeyBlocked + block.user, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }
            if ((_response$query12 = response["query"]) !== null && _response$query12 !== void 0 && _response$query12.globalblocks) {
              markGlobalBlocks({
                response,
                userLinks,
                bkip
              });
              var _iterator12 = _createForOfIteratorHelper(response["query"].globalblocks), _step12;
              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                  const block = _step12.value;
                  if (block.target) {
                    mw.storage.setObject(storageKeyBlocked + block.target, response, 60 * 60);
                  }
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            }
          } catch (error) {
            console.error("[MarkBlocked] Ajax error:", error);
          }
        });
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
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
  var _iterator13 = _createForOfIteratorHelper($content.find("a")), _step13;
  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
      var _user, _userLinks$_user;
      const element = _step13.value;
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
    _iterator13.e(err);
  } finally {
    _iterator13.f();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL29wdGlvbnMuanNvbiIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcGFyc2VUaW1lLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvbWFya0xpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvcXVlcnkudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9tYXJrVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXMudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvbWFya0Jsb2NrZWRVc2VyLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FkZEhvb2sudHMiLCAic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvdXRpbC9jbGVhck9sZEtleXMudHMiLCAic3JjL01hcmtCbG9ja2VkL01hcmtCbG9ja2VkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29udHJpYnV0aW9uc1BhZ2VBbGlhc1wiOiBcIlNwZWNpYWw6Q29udHJpYnV0aW9uc1wiLFxuXHRcInVzZXJOYW1lc3BhY2VOdW1iZXJzXCI6IFsyLCAzXSxcblx0XCJzdG9yYWdlS2V5QmxvY2tlZFwiOiBcImV4dC5nYWRnZXQuTWFya0Jsb2NrZWRfYmxvY2tlZC1cIixcblx0XCJzdG9yYWdlS2V5TG9ja2VkXCI6IFwiZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9sb2NrZWQtXCIsXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGluZmluaXR5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2luZmluaXR5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXoOmZkOacnycsXG5cdFx0XHQnemgtaGFudCc6ICfnhKHpmZDmnJ8nLFxuXHRcdH0pLFxuXHRcdEJsb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHQnR2xvYmFsbHkgQmxvY2tlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgZ2xvYmFsbHkgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWFqOWfn+WwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15YWo5Z+f5bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHRMb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyBMb2NrZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb5bey5YWo5Z+f6ZSB5a6aJyxcblx0XHRcdCd6aC1oYW50JzogJ++8m+W3suWFqOWfn+mOluWumicsXG5cdFx0fSksXG5cdFx0cGFydGlhbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwYXJ0aWFsICcsXG5cdFx0XHR6aDogJ+mDqOWIhicsXG5cdFx0fSksXG5cdFx0ZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkYXknLFxuXHRcdFx0emg6ICflpKknLFxuXHRcdH0pLFxuXHRcdHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnc2Vjb25kJyxcblx0XHRcdHpoOiAn56eSJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgYWRkWmVybyA9ICh2OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gdiA8PSA5ID8gYDAke3Z9YCA6IGAke3Z9YDtcbn07XG5cbmNvbnN0IGluSG91cnMgPSAobXM6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdGxldCBtbTogbnVtYmVyID0gTWF0aC5mbG9vcihtcyAvIDZlNCk7XG5cdGlmICghbW0pIHtcblx0XHRyZXR1cm4gYCR7TWF0aC5mbG9vcihtcyAvIDFlMyl9JHtnZXRNZXNzYWdlKCdzJyl9YDtcblx0fVxuXG5cdGxldCBoaDogbnVtYmVyID0gTWF0aC5mbG9vcihtbSAvIDYwKTtcblx0bW0gJT0gNjA7XG5cblx0Y29uc3QgZGQ6IG51bWJlciA9IE1hdGguZmxvb3IoaGggLyAyNCk7XG5cdGhoICU9IDI0O1xuXG5cdGlmIChkZCkge1xuXHRcdHJldHVybiBgJHtkZCArIChkZCA8IDEwID8gYC4ke2FkZFplcm8oaGgpfWAgOiAnJyl9JHtnZXRNZXNzYWdlKCdkJyl9YDtcblx0fVxuXG5cdHJldHVybiBgJHtoaH06JHthZGRaZXJvKG1tKX1gO1xufTtcblxuLy8gMjAwODEyMjYyMjA2MDUgb3IgMjAwOC0wMS0yNlQwNjozNDoxOVogLT4gbnVtYmVyXG5jb25zdCBwYXJzZVRTID0gKHN0cmluZzogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0Y29uc3QgbTogUmVnRXhwTWF0Y2hBcnJheSA9IHN0cmluZ1xuXHRcdC5yZXBsYWNlKC9cXEQvZywgJycpXG5cdFx0Lm1hdGNoKC8oXFxkXFxkXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkvKSBhcyBSZWdFeHBNYXRjaEFycmF5O1xuXG5cdHJldHVybiBuZXcgRGF0ZShcblx0XHREYXRlLlVUQyhcblx0XHRcdCsobVsxXSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzJdIGFzIHN0cmluZykgLSAxLFxuXHRcdFx0KyhtWzNdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNF0gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs1XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzZdIGFzIHN0cmluZylcblx0XHQpXG5cdCkuZ2V0VGltZSgpO1xufTtcblxuZXhwb3J0IHtpbkhvdXJzLCBwYXJzZVRTfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01hcmtCbG9ja2VkL21vZHVsZXMvTWFya0Jsb2NrZWQubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0luZGVmID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rSW5kZWZfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtMb2NrZWQgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtMb2NrZWRfeHRBZk9HX180MTAwXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtQYXJ0aWFsID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rUGFydGlhbF94dEFmT0dfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1RlbXAgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtUZW1wX3h0QWZPR19fNDEwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwidXNlcmxpbmtJbmRlZlwiOiB1c2VybGlua0luZGVmLFxuICBcInVzZXJsaW5rTG9ja2VkXCI6IHVzZXJsaW5rTG9ja2VkLFxuICBcInVzZXJsaW5rUGFydGlhbFwiOiB1c2VybGlua1BhcnRpYWwsXG4gIFwidXNlcmxpbmtUZW1wXCI6IHVzZXJsaW5rVGVtcFxufTtcbiAgICAgICIsICJpbXBvcnQgdHlwZSB7R2xvYmFsTG9ja3NTdG9yYWdlLCBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2V9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7aW5Ib3VycywgcGFyc2VUU30gZnJvbSAnLi9wYXJzZVRpbWUnO1xuaW1wb3J0IHt1c2VybGlua0luZGVmLCB1c2VybGlua0xvY2tlZCwgdXNlcmxpbmtQYXJ0aWFsLCB1c2VybGlua1RlbXB9IGZyb20gJy4uL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENhbGxiYWNrOiByZWNlaXZlIGRhdGEgYW5kIG1hcmsgbGlua3NcbiAqL1xuXG5jb25zdCBtYXJrR2xvYmFsTG9ja2VkTGlua3MgPSAoe1xuXHRyZXNwb25zZSxcblx0dXNlckxpbmtzLFxufToge1xuXHRyZXNwb25zZTogR2xvYmFsTG9ja3NTdG9yYWdlO1xuXHR1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPjtcbn0pOiB2b2lkID0+IHtcblx0Ly8gR2xvYmFsIGxvY2tzXG5cdGNvbnN0IHVzZXIgPSByZXNwb25zZT8ubmFtZTtcblx0Y29uc3QgbG9ja2VkID0gcmVzcG9uc2U/LmxvY2tlZDtcblxuXHRpZiAoIWxvY2tlZCB8fCAhdXNlcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnTG9ja2VkJyk7XG5cblx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1t1c2VyXTtcblx0aWYgKCEkbGlua3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjbGFzc05hbWUgPSB1c2VybGlua0xvY2tlZCBhcyBzdHJpbmc7XG5cblx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0fVxufTtcblxuY29uc3QgbWFya0xvY2FsQmxvY2tzID0gKHtcblx0cmVzcG9uc2UsXG5cdHVzZXJMaW5rcyxcblx0YmtpcCxcbn06IHtcblx0cmVzcG9uc2U6IFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblx0dXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT47XG5cdGJraXA/OiBzdHJpbmc7XG59KTogdm9pZCA9PiB7XG5cdC8vIExvY2FsIGJsb2Nrc1xuXHRpZiAoIXJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdGNvbnN0IGlzUGFydGlhbEJsY29rOiBib29sZWFuID0gdHlwZW9mIGJsb2NrLnJlc3RyaWN0aW9ucyA9PT0gJ3N0cmluZycgJiYgYmxvY2sucmVzdHJpY3Rpb25zICE9PSAnJzsgLy8gUGFydGlhbCBibG9ja1xuXG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGlmICghaXNQYXJ0aWFsQmxjb2spIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtJbmRlZiBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBnZXRNZXNzYWdlKCdpbmZpbml0eScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rVGVtcCBhcyBzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRibG9ja1RpbWUgPSBpbkhvdXJzKHBhcnNlVFMoYmxvY2suZXhwaXJ5KSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSk7XG5cdFx0fVxuXG5cdFx0bGV0IHRpcDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnQmxvY2tlZCcpXG5cdFx0XHQucmVwbGFjZSgnJDEnLCBibG9ja1RpbWUpXG5cdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdC5yZXBsYWNlKCckMycsIGJsb2NrLnJlYXNvbilcblx0XHRcdC5yZXBsYWNlKCckNCcsIGluSG91cnMoRGF0ZS5ub3coKSAtIHBhcnNlVFMoYmxvY2sudGltZXN0YW1wKSkpO1xuXHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdGNvbnN0ICRsaW5rczogSlF1ZXJ5W10gfCB1bmRlZmluZWQgPSB1c2VyTGlua3NbYmtpcCA/PyBibG9jay51c2VyXTtcblx0XHRpZiAoISRsaW5rcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCAkbGluayBvZiAkbGlua3MpIHtcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JGxpbmsuYWRkQ2xhc3MoY2xhc3NOYW1lKS5hdHRyKCd0aXRsZScsICRsaW5rLmF0dHIoJ3RpdGxlJykgKyB0aXApO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgbWFya0dsb2JhbEJsb2NrcyA9ICh7XG5cdHJlc3BvbnNlLFxuXHR1c2VyTGlua3MsXG5cdGJraXAsXG59OiB7XG5cdHJlc3BvbnNlOiBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cdHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+O1xuXHRia2lwPzogc3RyaW5nO1xufSk6IHZvaWQgPT4ge1xuXHQvLyBHbG9iYWwgYmxvY2tzXG5cdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gdXNlcmxpbmtQYXJ0aWFsIGFzIHN0cmluZztcblx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoYmxvY2suZXhwaXJ5LnN0YXJ0c1dpdGgoJ2luJykpIHtcblx0XHRcdGNsYXNzTmFtZSA9IHVzZXJsaW5rSW5kZWYgYXMgc3RyaW5nO1xuXHRcdFx0YmxvY2tUaW1lID0gZ2V0TWVzc2FnZSgnaW5maW5pdHknKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2xhc3NOYW1lID0gdXNlcmxpbmtUZW1wIGFzIHN0cmluZztcblx0XHRcdGJsb2NrVGltZSA9IGluSG91cnMocGFyc2VUUyhibG9jay5leHBpcnkpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKTtcblx0XHR9XG5cblx0XHRsZXQgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdHbG9iYWxseSBCbG9ja2VkJylcblx0XHRcdC5yZXBsYWNlKCckMScsIGJsb2NrVGltZSlcblx0XHRcdC5yZXBsYWNlKCckMicsIGJsb2NrLmJ5KVxuXHRcdFx0LnJlcGxhY2UoJyQzJywgYmxvY2sucmVhc29uKVxuXHRcdFx0LnJlcGxhY2UoJyQ0JywgaW5Ib3VycyhEYXRlLm5vdygpIC0gcGFyc2VUUyhibG9jay50aW1lc3RhbXApKSk7XG5cdFx0dGlwID0gdGlwLnJlcGxhY2UoJyQ1JywgJycpO1xuXG5cdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tia2lwID8/IGJsb2NrLnRhcmdldF07XG5cdFx0aWYgKCEkbGlua3MpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgJGxpbmsgb2YgJGxpbmtzKSB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIC4vTWFya2Jsb2NrZWQubW9kdWxlLmxlc3Ncblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7bWFya0dsb2JhbExvY2tlZExpbmtzLCBtYXJrTG9jYWxCbG9ja3MsIG1hcmtHbG9iYWxCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya0Jsb2NrZWQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkLCBHbG9iYWxMb2Nrc1N0b3JhZ2UsIFF1ZXJ5R2xvYmFsTG9ja3NSZXNwb25zZX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlHbG9iYWxVc2VySW5mbyA9IGFzeW5jIChndWl1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2UgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRtZXRhOiBbJ2dsb2JhbHVzZXJpbmZvJ10sXG5cdFx0Z3VpdXNlcixcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0Y29uc3Qge1xuXHRcdHF1ZXJ5OiB7XG5cdFx0XHRnbG9iYWx1c2VyaW5mbzoge25hbWUsIGxvY2tlZCA9IGZhbHNlLCBtaXNzaW5nID0gZmFsc2V9LFxuXHRcdH0sXG5cdH0gPSAoYXdhaXQgYXBpLmdldChwYXJhbXMpKSBhcyBRdWVyeUdsb2JhbExvY2tzUmVzcG9uc2U7XG5cblx0Ly8gTWluaWZ5IHJlc3BvbnNlIG9iamVjdFxuXHRjb25zdCByZXNwb25zZTogR2xvYmFsTG9ja3NTdG9yYWdlID0ge25hbWV9O1xuXG5cdGlmIChsb2NrZWQpIHtcblx0XHRyZXNwb25zZS5sb2NrZWQgPSBsb2NrZWQ7XG5cdH1cblxuXHRpZiAobWlzc2luZykge1xuXHRcdHJlc3BvbnNlLm1pc3NpbmcgPSBtaXNzaW5nO1xuXHR9XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlJUEJsb2NrcyA9IGFzeW5jIChia2lwOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUJsb2Nrc1BhcmFtcyAmIEFwaVF1ZXJ5R2xvYmFsQmxvY2tzUGFyYW1zUmVkZWZpbmVkID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogWydibG9ja3MnLCAnZ2xvYmFsYmxvY2tzJ10sXG5cdFx0YmtpcCxcblx0XHRia2xpbWl0OiAxMDAsXG5cdFx0Ymtwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAncmVzdHJpY3Rpb25zJywgJ3RpbWVzdGFtcCcsICd1c2VyJ10sXG5cdFx0YmdpcDogYmtpcCxcblx0XHRiZ2xpbWl0OiAxMDAsXG5cdFx0Ymdwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAndGltZXN0YW1wJywgJ3RhcmdldCddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuY29uc3QgcXVlcnlVc2VyQmxvY2tzID0gYXN5bmMgKGJrdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlCbG9ja3NQYXJhbXMgJiBBcGlRdWVyeUdsb2JhbEJsb2Nrc1BhcmFtc1JlZGVmaW5lZCA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6IFsnYmxvY2tzJywgJ2dsb2JhbGJsb2NrcyddLFxuXHRcdGJrdXNlcnMsXG5cdFx0YmtsaW1pdDogMTAwLFxuXHRcdGJrcHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3Jlc3RyaWN0aW9ucycsICd0aW1lc3RhbXAnLCAndXNlciddLFxuXHRcdGJnbGltaXQ6IDEwMCxcblx0XHRiZ3RhcmdldHM6IGJrdXNlcnMsXG5cdFx0Ymdwcm9wOiBbJ2J5JywgJ2V4cGlyeScsICdyZWFzb24nLCAndGltZXN0YW1wJywgJ3RhcmdldCddLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRyZXR1cm4gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xufTtcblxuZXhwb3J0IHtxdWVyeUdsb2JhbFVzZXJJbmZvLCBxdWVyeUlQQmxvY2tzLCBxdWVyeVVzZXJCbG9ja3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB0eXBlIHtHbG9iYWxMb2Nrc1N0b3JhZ2UsIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHttYXJrR2xvYmFsQmxvY2tzLCBtYXJrR2xvYmFsTG9ja2VkTGlua3MsIG1hcmtMb2NhbEJsb2Nrc30gZnJvbSAnLi9tYXJrTGlua3MnO1xuaW1wb3J0IHtxdWVyeUdsb2JhbFVzZXJJbmZvLCBxdWVyeUlQQmxvY2tzLCBxdWVyeVVzZXJCbG9ja3N9IGZyb20gJy4vcXVlcnknO1xuXG5jb25zdCBtYXJrR2xvYmFsTG9ja2VkVXNlckxpbmtzID0gKHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+KSA9PiB7XG5cdC8vIENvbnZlcnQgdXNlcnMgaW50byBhcnJheVxuXHRjb25zdCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdC8vIEdsb2JhbCBMb2NrIHF1ZXJpZXNcblx0Zm9yIChjb25zdCBndWl1c2VyIG9mIHVzZXJzKSB7XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY0QWRkcmVzcyhndWl1c2VyKSB8fCBtdy51dGlsLmlzSVB2NkFkZHJlc3MoZ3VpdXNlcikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBndWl1c2VyKSkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlMb2NrZWQgKyBndWl1c2VyKSBhcyBHbG9iYWxMb2Nrc1N0b3JhZ2U7XG5cblx0XHRcdGlmIChyZXNwb25zZSkge1xuXHRcdFx0XHRtYXJrR2xvYmFsTG9ja2VkTGlua3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlHbG9iYWxVc2VySW5mbyhndWl1c2VyKTtcblxuXHRcdFx0XHRtYXJrR2xvYmFsTG9ja2VkTGlua3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblxuXHRcdFx0XHQvLyBDYWNoZSBmb3IgMSBkYXlcblx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5TG9ja2VkICsgZ3VpdXNlciwgcmVzcG9uc2UsIDYwICogNjAgKiAyNCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdbTWFya0Jsb2NrZWRdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9KSgpO1xufTtcblxuY29uc3QgbWFya0Jsb2NrZWRVc2VyTGlua3MgPSAodXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4pID0+IHtcblx0Ly8gQ29udmVydCB1c2VycyBpbnRvIGFycmF5XG5cdGxldCB1c2Vyczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh1c2VyTGlua3MpO1xuXHRpZiAoIXVzZXJzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgdXNlciBvZiB1c2Vycykge1xuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXlCbG9ja2VkICsgdXNlcikpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoXG5cdFx0XHRcdE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyB1c2VyXG5cdFx0XHQpIGFzIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MgfHwgcmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5nbG9iYWxibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrR2xvYmFsQmxvY2tzKHtyZXNwb25zZSwgdXNlckxpbmtzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1c2VycyA9IHVzZXJzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSB1c2VyO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBMb2NhbCBhbmQgZ2xvYmFsIHVzZXIgYmxvY2sgcXVlcmllc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYmt1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCFia3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0IHF1ZXJ5VXNlckJsb2Nrcyhia3VzZXJzKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXHRcdFx0XHRjb25zdCBibG9ja1JlY29yZHM6IFJlY29yZDxzdHJpbmcsIFF1ZXJ5TG9jYWxBbmRHbG9iYWxCbG9ja3NSZXNwb25zZT4gPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIGJrdXNlcnMpIHtcblx0XHRcdFx0XHRibG9ja1JlY29yZHNbdXNlcl0gPSB7cXVlcnk6IHtibG9ja3M6IFtdLCBnbG9iYWxibG9ja3M6IFtdfX07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiByZXNwb25zZVsncXVlcnknXS5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdGlmIChibG9jay51c2VyKSB7XG5cdFx0XHRcdFx0XHRcdGJsb2NrUmVjb3Jkc1tibG9jay51c2VyXT8ucXVlcnkuYmxvY2tzIS5wdXNoKGJsb2NrKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdG1hcmtHbG9iYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblxuXHRcdFx0XHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdFx0XHRpZiAoYmxvY2sudGFyZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdGJsb2NrUmVjb3Jkc1tibG9jay50YXJnZXRdPy5xdWVyeS5nbG9iYWxibG9ja3MhLnB1c2goYmxvY2spO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoY29uc3QgW3VzZXIsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhibG9ja1JlY29yZHMpKSB7XG5cdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIHVzZXIsIHZhbHVlLCA2MCAqIDYwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmNvbnN0IG1hcmtCbG9ja2VkSVBMaW5rcyA9ICh1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPikgPT4ge1xuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0Y29uc3QgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHQvLyBMb2NhbCBhbmQgZ2xvYmFsIElQIGJsb2NrIHF1ZXJpZXNcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGJrdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpO1xuXHRcdGlmICghYmt1c2Vycy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGJraXAgb2YgYmt1c2Vycykge1xuXHRcdFx0aWYgKCFtdy51dGlsLmlzSVB2NEFkZHJlc3MoYmtpcCkgJiYgIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhia2lwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhia2lwKSkge1xuXHRcdFx0XHRia2lwID0gYmtpcC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJraXApKSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoXG5cdFx0XHRcdFx0T1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJraXBcblx0XHRcdFx0KSBhcyBRdWVyeUxvY2FsQW5kR2xvYmFsQmxvY2tzUmVzcG9uc2U7XG5cblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRtYXJrTG9jYWxCbG9ja3Moe3Jlc3BvbnNlLCB1c2VyTGlua3N9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXT8uZ2xvYmFsYmxvY2tzKSB7XG5cdFx0XHRcdFx0bWFya0dsb2JhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rc30pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgcXVlcnlJUEJsb2Nrcyhia2lwKSkgYXMgUXVlcnlMb2NhbEFuZEdsb2JhbEJsb2Nrc1Jlc3BvbnNlO1xuXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddPy5ibG9ja3MpIHtcblx0XHRcdFx0XHRcdG1hcmtMb2NhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rcywgYmtpcH0pO1xuXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmJsb2Nrcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoYmxvY2sudXNlcikge1xuXHRcdFx0XHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleUJsb2NrZWQgKyBibG9jay51c2VyLCByZXNwb25zZSwgNjAgKiA2MCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10/Lmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdFx0bWFya0dsb2JhbEJsb2Nrcyh7cmVzcG9uc2UsIHVzZXJMaW5rcywgYmtpcH0pO1xuXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHJlc3BvbnNlWydxdWVyeSddLmdsb2JhbGJsb2Nrcykge1xuXHRcdFx0XHRcdFx0XHRpZiAoYmxvY2sudGFyZ2V0KSB7XG5cdFx0XHRcdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5QmxvY2tlZCArIGJsb2NrLnRhcmdldCwgcmVzcG9uc2UsIDYwICogNjApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tNYXJrQmxvY2tlZF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKTtcbn07XG5cbmV4cG9ydCB7bWFya0dsb2JhbExvY2tlZFVzZXJMaW5rcywgbWFya0Jsb2NrZWRVc2VyTGlua3MsIG1hcmtCbG9ja2VkSVBMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfSBmcm9tICcuL2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyc7XG5cbi8vIEdldCBhbGwgYWxpYXNlcyBmb3IgdXNlcjogJiB1c2VyX3RhbGs6XG5jb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IGdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcygpO1xuLy8gUmVnRXhwIGZvciBhbGwgdGl0bGVzIHRoYXQgYXJlICBVc2VyOnwgVXNlcl90YWxrOiB8IFNwZWNpYWw6Q29udHJpYnV0aW9ucy8gKGZvciB1c2Vyc2NyaXB0cylcbmNvbnN0IHVzZXJUaXRsZVJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKFxuXHRgXigke3VzZXJOYW1lc3BhY2VUaXRsZXMuam9pbignfCcpfXwke09QVElPTlMuY29udHJpYnV0aW9uc1BhZ2VBbGlhc31cXFxcLykrKFteXFxcXC8jXSspJGAsXG5cdCdpJ1xuKTtcblxuLy8gUmVnRXhwIGZvciBsaW5rc1xuLy8gYXJ0aWNsZVJlZ2V4IGFsc28gbWF0Y2hlcyBleHRlcm5hbCBsaW5rcyBpbiBvcmRlciB0byBzdXBwb3J0IHRoZSBub3BpbmcgdGVtcGxhdGVcbmNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBhcnRpY2xlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7d2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKX0oW14jXSspYCk7XG5jb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXiR7d2dTY3JpcHR9XFxcXD90aXRsZT0oW14jJl0rKWApO1xuXG5jb25zdCBnZW5lcmF0ZVVzZXJMaW5rcyA9ICgkY29udGVudDogSlF1ZXJ5KTogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0+IHtcblx0Ly8gRmluZCBhbGwgXCJ1c2VyXCIgbGlua3MgYW5kIHNhdmUgdGhlbSBpbiB1c2VyTGlua3MgOiB7ICd1c2Vycyc6IFs8bGluazE+LCA8bGluazI+LCAuLi5dLCAndXNlcjInOiBbPGxpbmszPiwgPGxpbmszPiwgLi4uXSwgLi4uIH1cblx0Y29uc3QgdXNlckxpbmtzOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPSB7fTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGNvbnRlbnQuZmluZCgnYScpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdC1kYXRlJykgfHxcblx0XHRcdCRlbGVtZW50Lmhhc0NsYXNzKCdleHQtZGlzY3Vzc2lvbnRvb2xzLWluaXQtdGltZXN0YW1wbGluaycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctaGlzdG9yeS11bmRvJykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnc3BhbicpLmhhc0NsYXNzKCdtdy1yb2xsYmFjay1saW5rJylcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGhyZWYucmVwbGFjZSgvXig/Omh0dHBzPzpcXC9cXC8pL2ksICcnKSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Ly8gTWF5YmUgYWJzb2x1dGUgVVJMXG5cdFx0XHRpZiAobmV3IE13VXJpKGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBNYXliZSByZWxhdGl2ZSBVUkxcblx0XHRcdFx0aWYgKG5ldyBNd1VyaShsb2NhdGlvbi5ocmVmICsgaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cGFnZVRpdGxlID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhZ2VUaXRsZSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXG5cdFx0Y29uc3QgdXNlckV4ZWNBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IHVzZXJUaXRsZVJlZ2V4LmV4ZWMocGFnZVRpdGxlKTtcblx0XHRpZiAoIXVzZXJFeGVjQXJyYXkgfHwgdHlwZW9mIHVzZXJFeGVjQXJyYXlbMl0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgdXNlcjogc3RyaW5nID0gdXNlckV4ZWNBcnJheVsyXS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdXNlckV4ZWNBcnJheVsyXS5zbGljZSgxKTtcblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKHVzZXIpKSB7XG5cdFx0XHR1c2VyID0gdXNlci50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdHVzZXJMaW5rc1t1c2VyXSA/Pz0gW107XG5cblx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSlbXG5cdFx0XHQodXNlckxpbmtzW3VzZXJdIGFzICh0eXBlb2YgdXNlckxpbmtzKVtrZXlvZiB0eXBlb2YgdXNlckxpbmtzXSkubGVuZ3RoXG5cdFx0XSA9ICRlbGVtZW50OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlSWRzfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgW25hbWVzcGFjZSwgaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRcdGlmICghT1BUSU9OUy51c2VyTmFtZXNwYWNlTnVtYmVycy5pbmNsdWRlcyhpZCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJOYW1lc3BhY2VUaXRsZXNbdXNlck5hbWVzcGFjZVRpdGxlcy5sZW5ndGhdID0gYCR7bXcudXRpbC5lc2NhcGVSZWdFeHAobmFtZXNwYWNlLnJlcGxhY2UoL18vZywgJyAnKSl9OmA7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gdXNlck5hbWVzcGFjZVRpdGxlcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzfTtcbiIsICJpbXBvcnQge21hcmtCbG9ja2VkSVBMaW5rcywgbWFya0Jsb2NrZWRVc2VyTGlua3MsIG1hcmtHbG9iYWxMb2NrZWRVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9tYXJrVXNlckxpbmtzJztcbmltcG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVVzZXJMaW5rcyc7XG5cbmNvbnN0IG1hcmtCbG9ja2VkVXNlciA9ICgkY29udGVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIEZpbmQgYWxsIFwidXNlclwiIGxpbmtzIGFuZCBzYXZlIHRoZW0gaW4gdXNlckxpbmtzIDogeyAndXNlcnMnOiBbPGxpbmsxPiwgPGxpbmsyPiwgLi4uXSwgJ3VzZXIyJzogWzxsaW5rMz4sIDxsaW5rMz4sIC4uLl0sIC4uLiB9XG5cdGNvbnN0IHVzZXJMaW5rczogUmVjb3JkPHN0cmluZywgSlF1ZXJ5W10+ID0gZ2VuZXJhdGVVc2VyTGlua3MoJGNvbnRlbnQpO1xuXG5cdG1hcmtHbG9iYWxMb2NrZWRVc2VyTGlua3ModXNlckxpbmtzKTtcblx0bWFya0Jsb2NrZWRVc2VyTGlua3ModXNlckxpbmtzKTtcblx0bWFya0Jsb2NrZWRJUExpbmtzKHVzZXJMaW5rcyk7XG59O1xuXG5leHBvcnQge21hcmtCbG9ja2VkVXNlcn07XG4iLCAiaW1wb3J0IHttYXJrQmxvY2tlZFVzZXJ9IGZyb20gJy4vbWFya0Jsb2NrZWRVc2VyJztcblxuY29uc3Qge3dnQWN0aW9uLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGFkZEhvb2sgPSAoKTogdm9pZCA9PiB7XG5cdGxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtCbG9ja2VkKCRjb250ZW50KTogdm9pZCB7XG5cdFx0aWYgKGlzSW5pdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpc0luaXQgPSB0cnVlO1xuXG5cdFx0Ly8gT24gdGhlIGZpcnN0IGNhbGwgYWZ0ZXIgaW5pdGlhbCBwYWdlIGxvYWQsIGNvbnRhaW5lciBpcyBtdy51dGlsLiRjb250ZW50XG5cdFx0Ly8gVXNlZCB0byBsaW1pdCBtYWluc3BhY2UgYWN0aXZpdHkgdG8ganVzdCB0aGUgZGlmZiBkZWZpbml0aW9uc1xuXHRcdGlmICh3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0XHQkY29udGVudCA9ICRjb250ZW50LmZpbmQoJy5kaWZmLXRpdGxlJyk7XG5cdFx0fVxuXHRcdC8vIE9uIHBhZ2UgbG9hZCwgYWxzbyB1cGRhdGUgdGhlIG5hbWVzcGFjZSB0YWJcblx0XHQkY29udGVudCA9ICRjb250ZW50LmFkZCgnI2NhLW5zdGFiLXVzZXInKTtcblxuXHRcdG1hcmtCbG9ja2VkVXNlcigkY29udGVudCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRIb29rfTtcbiIsICJjb25zdCBjbGVhck9sZEtleXMgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9vbGRLZXlzQ2xlYXJlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBrZXkgaW4gbG9jYWxTdG9yYWdlKSB7XG5cdFx0aWYgKE9iamVjdC5oYXNPd24obG9jYWxTdG9yYWdlLCBrZXkpKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1sb25lbHktaWZcblx0XHRcdGlmIChcblx0XHRcdFx0a2V5LnN0YXJ0c1dpdGgoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNMb2NrZWQtJykgfHxcblx0XHRcdFx0a2V5LnN0YXJ0c1dpdGgoJ19FWFBJUllfZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9pc0xvY2tlZC0nKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIChcblx0XHRcdC8vIFx0a2V5LnN0YXJ0c1dpdGgoJ2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNCbG9ja2VkLScpIHx8XG5cdFx0XHQvLyBcdGtleS5zdGFydHNXaXRoKCdfRVhQSVJZX2V4dC5nYWRnZXQuTWFya0Jsb2NrZWRfaXNCbG9ja2VkLScpXG5cdFx0XHQvLyApIHtcblx0XHRcdC8vIFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcblx0XHRcdC8vIH1cblx0XHR9XG5cdH1cblxuXHRtdy5zdG9yYWdlLnNldE9iamVjdCgnZXh0LmdhZGdldC5NYXJrQmxvY2tlZF9vbGRLZXlzQ2xlYXJlZCcsIHRydWUpO1xufTtcblxuZXhwb3J0IHtjbGVhck9sZEtleXN9O1xuIiwgImltcG9ydCB7YWRkSG9va30gZnJvbSAnLi9tb2R1bGVzL2FkZEhvb2snO1xuaW1wb3J0IHtjbGVhck9sZEtleXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NsZWFyT2xkS2V5cyc7XG5cbmlmICghWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykpKSB7XG5cdGFkZEhvb2soKTtcbn1cblxuLy8gYWRkIGEgb25lLXRpbWUgZnVuY3Rpb24gdG8gY2xlYXIgb2xkIGxvY2FsU3RvcmFnZSBrZXlzXG5pZiAoIW13LnN0b3JhZ2UuZ2V0T2JqZWN0KCdleHQuZ2FkZ2V0Lk1hcmtCbG9ja2VkX29sZEtleXNDbGVhcmVkJykpIHtcblx0dm9pZCBjbGVhck9sZEtleXMoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHlCQUEwQjtBQUMxQixJQUFBQyx1QkFBd0IsQ0FBQyxHQUFHLENBQUM7QUFDN0IsSUFBQUMsb0JBQXFCO0FBQ3JCLElBQUFDLG1CQUFvQjtBQUNwQixJQUFBQyxVQUFXOztBQ0xaLElBQUFDLG9CQUF1QkMsUUFBQSxpQkFBQTtBQUV2QixJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxXQUFBLEdBQVVILGtCQUFBSSxVQUFTO01BQ2xCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU04sa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxxQkFBQSxHQUFvQkwsa0JBQUFJLFVBQVM7TUFDNUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsU0FBQSxHQUFRUCxrQkFBQUksVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxVQUFBLEdBQVNSLGtCQUFBSSxVQUFTO01BQ2pCQyxJQUFJO01BQ0pJLElBQUk7SUFDTCxDQUFDO0lBQ0RDLElBQUEsR0FBR1Ysa0JBQUFJLFVBQVM7TUFDWEMsSUFBSTtNQUNKSSxJQUFJO0lBQ0wsQ0FBQztJQUNERSxJQUFBLEdBQUdYLGtCQUFBSSxVQUFTO01BQ1hDLElBQUk7TUFDSkksSUFBSTtJQUNMLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZVYsZ0JBQWdCO0FBRXJD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UztBQUlULFFBQUlILGFBQWEsVUFBVUMsc0JBQXNCLEdBQUc7QUFDbkR0QixpQkFBV0EsU0FBU0UsS0FBSyxhQUFhO0lBQ3ZDO0FBRUFGLGVBQVdBLFNBQVMwQixJQUFJLGdCQUFnQjtBQUV4Q04sb0JBQWdCcEIsUUFBUTtFQUN6QixDQUFDO0FBQ0Y7O0FDdkJBLElBQU00QixlQUFlQSxNQUFZO0FBQ2hDLE1BQUl0RyxHQUFHSSxRQUFRQyxVQUFVLHVDQUF1QyxHQUFHO0FBQ2xFO0VBQ0Q7QUFFQSxhQUFXdEgsT0FBT3dOLGNBQWM7QUFDL0IsUUFBSTdHLE9BQU84RyxPQUFPRCxjQUFjeE4sR0FBRyxHQUFHO0FBRXJDLFVBQ0NBLElBQUl1RCxXQUFXLGtDQUFrQyxLQUNqRHZELElBQUl1RCxXQUFXLDBDQUEwQyxHQUN4RDtBQUNEaUsscUJBQWFFLFdBQVcxTixHQUFHO01BQzVCO0lBUUQ7RUFDRDtBQUVBaUgsS0FBR0ksUUFBUUUsVUFBVSx5Q0FBeUMsSUFBSTtBQUNuRTs7QUN0QkEsSUFBSSxDQUFDLENBQUMsUUFBUSxRQUFRLEVBQUV5RCxTQUFTL0QsR0FBR3lELE9BQU9uRixJQUFJLFVBQVUsQ0FBQyxHQUFHO0FBQzVEMkgsVUFBUTtBQUNUO0FBR0EsSUFBSSxDQUFDakcsR0FBR0ksUUFBUUMsVUFBVSx1Q0FBdUMsR0FBRztBQUNuRSxPQUFLaUcsYUFBYTtBQUNuQjsiLAogICJuYW1lcyI6IFsiY29udHJpYnV0aW9uc1BhZ2VBbGlhcyIsICJ1c2VyTmFtZXNwYWNlTnVtYmVycyIsICJzdG9yYWdlS2V5QmxvY2tlZCIsICJzdG9yYWdlS2V5TG9ja2VkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiaW5maW5pdHkiLCAibG9jYWxpemUiLCAiZW4iLCAiQmxvY2tlZCIsICJMb2NrZWQiLCAicGFydGlhbCIsICJ6aCIsICJkIiwgInMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFkZFplcm8iLCAidiIsICJjb25jYXQiLCAiaW5Ib3VycyIsICJtcyIsICJtbSIsICJNYXRoIiwgImZsb29yIiwgImhoIiwgImRkIiwgInBhcnNlVFMiLCAic3RyaW5nIiwgIm0iLCAicmVwbGFjZSIsICJtYXRjaCIsICJEYXRlIiwgIlVUQyIsICJnZXRUaW1lIiwgInVzZXJsaW5rSW5kZWYiLCAidXNlcmxpbmtMb2NrZWQiLCAidXNlcmxpbmtQYXJ0aWFsIiwgInVzZXJsaW5rVGVtcCIsICJtYXJrR2xvYmFsTG9ja2VkTGlua3MiLCAicmVzcG9uc2UiLCAidXNlckxpbmtzIiwgInVzZXIiLCAibmFtZSIsICJsb2NrZWQiLCAidGlwIiwgIiRsaW5rcyIsICJjbGFzc05hbWUiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiZG9uZSIsICIkbGluayIsICJ2YWx1ZSIsICJhZGRDbGFzcyIsICJhdHRyIiwgImVyciIsICJlIiwgImYiLCAibWFya0xvY2FsQmxvY2tzIiwgImJraXAiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgImJsb2NrcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJibG9jayIsICJpc1BhcnRpYWxCbGNvayIsICJyZXN0cmljdGlvbnMiLCAiYmxvY2tUaW1lIiwgImV4cGlyeSIsICJzdGFydHNXaXRoIiwgInRpbWVzdGFtcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIm1hcmtHbG9iYWxCbG9ja3MiLCAiX3Jlc3BvbnNlJHF1ZXJ5MiIsICJnbG9iYWxibG9ja3MiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidGFyZ2V0IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgInF1ZXJ5R2xvYmFsVXNlckluZm8iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJndWl1c2VyIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibWV0YSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeSIsICJnbG9iYWx1c2VyaW5mbyIsICJtaXNzaW5nIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlJUEJsb2NrcyIsICJfcmVmMiIsICJsaXN0IiwgImJrbGltaXQiLCAiYmtwcm9wIiwgImJnaXAiLCAiYmdsaW1pdCIsICJiZ3Byb3AiLCAiX3gyIiwgInF1ZXJ5VXNlckJsb2NrcyIsICJfcmVmMyIsICJia3VzZXJzIiwgImJndGFyZ2V0cyIsICJfeDMiLCAibWFya0dsb2JhbExvY2tlZFVzZXJMaW5rcyIsICJ1c2VycyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAicHJvbWlzZXMiLCAiX2kiLCAiX3VzZXJzIiwgIm13IiwgInV0aWwiLCAiaXNJUHY0QWRkcmVzcyIsICJpc0lQdjZBZGRyZXNzIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgInNldE9iamVjdCIsICJlcnJvciIsICJjb25zb2xlIiwgIl9pMiIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJtYXJrQmxvY2tlZFVzZXJMaW5rcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJfcmVzcG9uc2UkcXVlcnk1IiwgIl9yZXNwb25zZSRxdWVyeTYiLCAiX3Jlc3BvbnNlJHF1ZXJ5NyIsICJfcmVzcG9uc2UkcXVlcnk4IiwgImZpbHRlciIsICJlbGVtZW50IiwgImkiLCAic3BsaWNlIiwgIl9yZXNwb25zZSRxdWVyeTMiLCAiX3Jlc3BvbnNlJHF1ZXJ5NCIsICJibG9ja1JlY29yZHMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiX2Jsb2NrUmVjb3JkcyRibG9jayR1IiwgInB1c2giLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiX2Jsb2NrUmVjb3JkcyRibG9jayR0IiwgIl9pMyIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJfaTQiLCAiX3Byb21pc2VzMiIsICJtYXJrQmxvY2tlZElQTGlua3MiLCAiX2l0ZXJhdG9yMTAiLCAiX3N0ZXAxMCIsICJ0b1VwcGVyQ2FzZSIsICJfcmVzcG9uc2UkcXVlcnk5IiwgIl9yZXNwb25zZSRxdWVyeTEwIiwgIl9yZXNwb25zZSRxdWVyeTExIiwgIl9yZXNwb25zZSRxdWVyeTEyIiwgIl9pdGVyYXRvcjExIiwgIl9zdGVwMTEiLCAiX2l0ZXJhdG9yMTIiLCAiX3N0ZXAxMiIsICJfaTUiLCAiX3Byb21pc2VzMyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzIiwgIndnTmFtZXNwYWNlSWRzIiwgImNvbmZpZyIsICJ1c2VyTmFtZXNwYWNlVGl0bGVzMiIsICJfaTYiLCAiX09iamVjdCRlbnRyaWVzMiIsICJuYW1lc3BhY2UiLCAiaWQiLCAiaW5jbHVkZXMiLCAiZXNjYXBlUmVnRXhwIiwgInVzZXJOYW1lc3BhY2VUaXRsZXMiLCAidXNlclRpdGxlUmVnZXgiLCAiUmVnRXhwIiwgImpvaW4iLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJhcnRpY2xlUmVnZXgiLCAic2NyaXB0UmVnZXgiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAiX2l0ZXJhdG9yMTMiLCAiZmluZCIsICJfc3RlcDEzIiwgIl91c2VyIiwgIl91c2VyTGlua3MkX3VzZXIiLCAiJGVsZW1lbnQiLCAiJCIsICJoYXNDbGFzcyIsICJwYXJlbnQiLCAiaHJlZiIsICJNd1VyaSIsICJob3N0IiwgImxvY2F0aW9uIiwgInBhZ2VUaXRsZSIsICJ0ZXN0IiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVzZXJFeGVjQXJyYXkiLCAic2xpY2UiLCAibWFya0Jsb2NrZWRVc2VyIiwgIndnQWN0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImFkZEhvb2siLCAiaXNJbml0IiwgImhvb2siLCAiYWRkIiwgIm1hcmtCbG9ja2VkIiwgImNsZWFyT2xkS2V5cyIsICJsb2NhbFN0b3JhZ2UiLCAiaGFzT3duIiwgInJlbW92ZUl0ZW0iXQp9Cg==
