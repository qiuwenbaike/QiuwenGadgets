/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Vanished_user_1929210/js/OnlineAdmins.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/OnlineAdmins}
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

// dist/OnlineAdmins/OnlineAdmins.js
//! src/OnlineAdmins/options.json
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
var version = "2.0";
//! src/OnlineAdmins/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("OnlineAdmins/".concat(version));
//! src/OnlineAdmins/modules/util/query.ts
var queryRecentChanges = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (rcstart, rcend) {
    const params = {
      rcstart,
      rcend,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "recentchanges",
      rcprop: "user",
      rcshow: ["!bot", "!anon"],
      rclimit: 500,
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryRecentChanges2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();
var queryLogEvents = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (lestart, leend) {
    const params = {
      lestart,
      leend,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "logevents",
      leprop: "user",
      lelimit: 500,
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryLogEvents2(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})();
var queryUserProps = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (ususers) {
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryUserProps2(_x5) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/OnlineAdmins/modules/constant.ts
var BLACK_LIST = ["滥用过滤器"];
//! src/OnlineAdmins/modules/util/getAdmins.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var getAdmins = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* () {
    const stewards = [];
    const sysops = [];
    const patrollers = [];
    let users = [];
    const promises = [];
    const time = /* @__PURE__ */ new Date();
    const rcstart = time.toISOString();
    time.setMinutes(time.getMinutes() - 30);
    const rcend = time.toISOString();
    try {
      const recentchanges = yield queryRecentChanges(rcstart, rcend);
      var _iterator = _createForOfIteratorHelper(recentchanges["query"].recentchanges), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const {
            user
          } = _step.value;
          users[users.length] = user;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } catch {
    }
    try {
      const logevents = yield queryLogEvents(rcstart, rcend);
      var _iterator2 = _createForOfIteratorHelper(logevents["query"].logevents), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const {
            user
          } = _step2.value;
          users[users.length] = user;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } catch {
    }
    users = (0, import_ext_gadget2.uniqueArray)(users);
    for (let i = 0; i < users.length; i++) {
      const ususers = users.splice(0, 25);
      if (!ususers.length) {
        continue;
      }
      promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
        const response = yield queryUserProps(ususers);
        var _iterator3 = _createForOfIteratorHelper(response["query"].users), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const {
              groups,
              name
            } = _step3.value;
            if (groups.includes("bot") || BLACK_LIST.includes(name)) {
              continue;
            }
            if (!name) {
              continue;
            }
            if (groups.includes("steward")) {
              stewards[stewards.length] = name;
            }
            if (groups.includes("sysop")) {
              sysops[sysops.length] = name;
            }
            if (groups.includes("patroller")) {
              patrollers[patrollers.length] = name;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      });
    }
    for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
      const promise = _promises[_i];
      try {
        yield promise();
      } catch {
      }
    }
    return {
      stewards,
      sysops,
      patrollers
    };
  });
  return function getAdmins2() {
    return _ref4.apply(this, arguments);
  };
})();
//! src/OnlineAdmins/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Talk: (0, import_ext_gadget3.localize)({
      en: "Talk",
      ja: "留言",
      zh: "留言"
    }),
    "(": (0, import_ext_gadget3.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget3.localize)({
      en: ")",
      zh: "）"
    }),
    " ($1 online):": (0, import_ext_gadget3.localize)({
      en: " ($1 online):",
      ja: "（$1人オンライン中）：",
      "zh-hans": "（$1个在线）：",
      "zh-hant": "（$1個在線）："
    }),
    Patrollers: (0, import_ext_gadget3.localize)({
      en: "Patrollers",
      ja: "巡回者",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    Stewards: (0, import_ext_gadget3.localize)({
      en: "Stewards",
      ja: "スチュワード",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    "Network error": (0, import_ext_gadget3.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    NoOnline: (0, import_ext_gadget3.localize)({
      en: "Currently there are no high privilege users online",
      ja: "現在、高権限利用者はオンラインにいません",
      "zh-hans": "目前没有站务人员在线",
      "zh-hant": "目前沒有站務人員在線"
    }),
    Online: (0, import_ext_gadget3.localize)({
      en: "Online admins",
      ja: "オンラインの高権限利用者",
      "zh-hans": "在线站务人员",
      "zh-hant": "線上站務人員"
    }),
    OnlineWithin30Minutes: (0, import_ext_gadget3.localize)({
      en: "High privilege users online within 30 minutes:",
      ja: "30分以内にオンラインで高権限利用者：",
      "zh-hans": "下面是最近30分钟内在线的站务人员：",
      "zh-hant": "下面是最近30分鐘內的線上站務人員："
    }),
    SysOps: (0, import_ext_gadget3.localize)({
      en: "Admins",
      ja: "管理者",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/OnlineAdmins/modules/components/OnlineAdmins.module.less
var section = "OnlineAdmins-module__section_WS9IGa__4100";
var sectionList = "OnlineAdmins-module__sectionList_WS9IGa__4100";
var talkPageLink = "OnlineAdmins-module__talkPageLink_WS9IGa__4100";
//! src/OnlineAdmins/modules/util/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};
//! src/OnlineAdmins/modules/components/userLink.ts
var userLink = ({
  userName
}) => {
  const userNameLink = document.createElement("a");
  userNameLink.href = mw.util.getUrl("User:".concat(sanitize(userName)));
  userNameLink.target = "_blank";
  userNameLink.rel = ["noopener", "noreferrer"].join(" ");
  userNameLink.textContent = sanitize(userName);
  const userTalkLink = document.createElement("a");
  userTalkLink.href = mw.util.getUrl("User_talk:".concat(sanitize(userName)));
  userTalkLink.target = "_blank";
  userTalkLink.rel = ["noopener", "noreferrer"].join(" ");
  userTalkLink.textContent = getMessage("Talk");
  const userTalkLinkWrap = document.createElement("span");
  userTalkLinkWrap.className = talkPageLink;
  userTalkLinkWrap.append(getMessage("("), userTalkLink, getMessage(")"));
  const item = document.createElement("li");
  item.append(userNameLink, " ", userTalkLinkWrap);
  return item;
};
//! src/OnlineAdmins/modules/components/groupList.ts
var groupList = ({
  groupName,
  userNames
}) => {
  if (groupName && userNames.length) {
    const groupNameTitle = document.createElement("span");
    groupNameTitle.textContent = groupName;
    const onlineUserNumber = document.createElement("span");
    onlineUserNumber.textContent = getMessage(" ($1 online):").replace("$1", String(userNames.length));
    const userNameLinks = userNames.map((userName) => {
      return userLink({
        userName
      });
    });
    const sectionUserList = document.createElement("ul");
    sectionUserList.className = sectionList;
    sectionUserList.append(...userNameLinks);
    const groupListWrap = document.createElement("div");
    groupListWrap.className = section;
    groupListWrap.append(groupNameTitle, onlineUserNumber, sectionUserList);
    return groupListWrap;
  }
  const comment = document.createComment("");
  return comment;
};
//! src/OnlineAdmins/modules/components/onlineAdminsList.ts
var onlineAdminsList = ({
  stewards,
  sysops,
  patrollers
}) => {
  const listTitle = document.createElement("p");
  listTitle.textContent = getMessage("OnlineWithin30Minutes");
  const listWrap = document.createElement("div");
  listWrap.append(listTitle);
  if (stewards.length) {
    const stewardList = groupList({
      groupName: getMessage("Stewards"),
      userNames: stewards
    });
    listWrap.append(stewardList);
  }
  if (sysops.length) {
    const sysOpList = groupList({
      groupName: getMessage("SysOps"),
      userNames: sysops
    });
    listWrap.append(sysOpList);
  }
  if (patrollers.length) {
    const patrollerList = groupList({
      groupName: getMessage("Patrollers"),
      userNames: patrollers
    });
    listWrap.append(patrollerList);
  }
  return listWrap;
};
//! src/OnlineAdmins/modules/doClick.ts
var doClick = /* @__PURE__ */ (function() {
  var _ref6 = _asyncToGenerator(function* (event) {
    event.preventDefault();
    const notify = (element, type = "info") => {
      return mw.notify(element, {
        tag: "onlineAdmins",
        type
      });
    };
    try {
      const {
        stewards,
        sysops,
        patrollers
      } = yield getAdmins();
      if (stewards.length + sysops.length + patrollers.length) {
        notify($("<div>").append(onlineAdminsList({
          stewards,
          sysops,
          patrollers
        })));
      } else {
        notify(getMessage("NoOnline"), "warn");
      }
    } catch {
      notify(getMessage("Network error"), "error");
    }
  });
  return function doClick2(_x6) {
    return _ref6.apply(this, arguments);
  };
})();
//! src/OnlineAdmins/OnlineAdmins.ts
var addPortletLink = () => {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", getMessage("Online"), "t-onlineadmin");
  if (!element) {
    return;
  }
  $(element).find("a").on("click", (event) => {
    void doClick(event);
  });
};
$(addPortletLink);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9vcHRpb25zLmpzb24iLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy91dGlsL3F1ZXJ5LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvdXRpbC9nZXRBZG1pbnMudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy91dGlsL3Nhbml0aXplLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL3VzZXJMaW5rLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50cyIsICJzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvY29tcG9uZW50cy9vbmxpbmVBZG1pbnNMaXN0LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9kb0NsaWNrLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvT25saW5lQWRtaW5zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0Lk9ubGluZUFkbWluc19nZXRBZG1pbnNcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgT25saW5lQWRtaW5zLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlSZWNlbnRDaGFuZ2VzID0gYXN5bmMgKHJjc3RhcnQ6IHN0cmluZywgcmNlbmQ6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmVjZW50Q2hhbmdlc1BhcmFtcyA9IHtcblx0XHRyY3N0YXJ0LFxuXHRcdHJjZW5kLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3JlY2VudGNoYW5nZXMnLFxuXHRcdHJjcHJvcDogJ3VzZXInLFxuXHRcdHJjc2hvdzogWychYm90JywgJyFhbm9uJ10sXG5cdFx0cmNsaW1pdDogNTAwLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlMb2dFdmVudHMgPSBhc3luYyAobGVzdGFydDogc3RyaW5nLCBsZWVuZDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0bGVzdGFydCxcblx0XHRsZWVuZCxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdGxlcHJvcDogJ3VzZXInLFxuXHRcdGxlbGltaXQ6IDUwMCxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5VXNlclByb3BzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHtxdWVyeVJlY2VudENoYW5nZXMsIHF1ZXJ5TG9nRXZlbnRzLCBxdWVyeVVzZXJQcm9wc307XG4iLCAiY29uc3QgQkxBQ0tfTElTVDogc3RyaW5nW10gPSBbJ+a7peeUqOi/h+a7pOWZqCddO1xuXG5leHBvcnQge0JMQUNLX0xJU1R9O1xuIiwgImltcG9ydCB7cXVlcnlMb2dFdmVudHMsIHF1ZXJ5UmVjZW50Q2hhbmdlcywgcXVlcnlVc2VyUHJvcHN9IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHtCTEFDS19MSVNUfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBnZXRBZG1pbnMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHN0ZXdhcmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBzeXNvcHM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHBhdHJvbGxlcnM6IHN0cmluZ1tdID0gW107XG5cblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRjb25zdCB0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgcmNzdGFydDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXG5cdC8vIFF1ZXJ5IHVzZXJzIGhhcyBsb2cvZWRpdCByZWNvcmQgaW4gcmVjZW50IDMwIG1pbnV0ZXNcblx0dGltZS5zZXRNaW51dGVzKHRpbWUuZ2V0TWludXRlcygpIC0gMzApOyAvLyDmnIDov5Hmm7TmlLkzMOWIhumSn+WGheeahOe8lui+keeUqOaIt1xuXHRjb25zdCByY2VuZDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVjZW50Y2hhbmdlcyA9IGF3YWl0IHF1ZXJ5UmVjZW50Q2hhbmdlcyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiByZWNlbnRjaGFuZ2VzWydxdWVyeSddLnJlY2VudGNoYW5nZXMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0dXNlcnNbdXNlcnMubGVuZ3RoXSA9IHVzZXI7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBsb2dldmVudHMgPSBhd2FpdCBxdWVyeUxvZ0V2ZW50cyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiBsb2dldmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzIGFzIHt1c2VyOiBzdHJpbmd9W10pIHtcblx0XHRcdHVzZXJzW3VzZXJzLmxlbmd0aF0gPSB1c2VyO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXG5cdHVzZXJzID0gdW5pcXVlQXJyYXkodXNlcnMpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cblx0Ly8gR2VuZXJhdGluZyBxdWVyeSBwcm9taXNlc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdXN1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCF1c3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlVc2VyUHJvcHModXN1c2Vycyk7XG5cblx0XHRcdGZvciAoY29uc3Qge2dyb3VwcywgbmFtZX0gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10udXNlcnMgYXMge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXSkge1xuXHRcdFx0XHQvLyByZW1vdmUgYm90c1xuXHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdib3QnKSB8fCBCTEFDS19MSVNULmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyByZW1vdmUgbG9ncyB3aXRoIG5vIHVzZXIgbmFtZXNcblx0XHRcdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzdGV3YXJkJykpIHtcblx0XHRcdFx0XHRzdGV3YXJkc1tzdGV3YXJkcy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N5c29wJykpIHtcblx0XHRcdFx0XHRzeXNvcHNbc3lzb3BzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygncGF0cm9sbGVyJykpIHtcblx0XHRcdFx0XHRwYXRyb2xsZXJzW3BhdHJvbGxlcnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4ge3N0ZXdhcmRzLCBzeXNvcHMsIHBhdHJvbGxlcnN9O1xufTtcblxuZXhwb3J0IHtnZXRBZG1pbnN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRUYWxrOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RhbGsnLFxuXHRcdFx0amE6ICfnlZnoqIAnLFxuXHRcdFx0emg6ICfnlZnoqIAnLFxuXHRcdH0pLFxuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdCcgKCQxIG9ubGluZSk6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCQxIG9ubGluZSk6Jyxcblx0XHRcdGphOiAn77yIJDHkurrjgqrjg7Pjg6njgqTjg7PkuK3vvInvvJonLFxuXHRcdFx0J3poLWhhbnMnOiAn77yIJDHkuKrlnKjnur/vvInvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn77yIJDHlgIvlnKjnt5rvvInvvJonLFxuXHRcdH0pLFxuXHRcdFBhdHJvbGxlcnM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVycycsXG5cdFx0XHRqYTogJ+W3oeWbnuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRTdGV3YXJkczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkcycsXG5cdFx0XHRqYTogJ+OCueODgeODpeODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHROb09ubGluZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlcmUgYXJlIG5vIGhpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZScsXG5cdFx0XHRqYTogJ+ePvuWcqOOAgemrmOaoqemZkOWIqeeUqOiAheOBr+OCquODs+ODqeOCpOODs+OBq+OBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICfnm67liY3msqHmnInnq5nliqHkurrlkZjlnKjnur8nLFxuXHRcdFx0J3poLWhhbnQnOiAn55uu5YmN5rKS5pyJ56uZ5YuZ5Lq65ZOh5Zyo57eaJyxcblx0XHR9KSxcblx0XHRPbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT25saW5lIGFkbWlucycsXG5cdFx0XHRqYTogJ+OCquODs+ODqeOCpOODs+OBrumrmOaoqemZkOWIqeeUqOiAhScsXG5cdFx0XHQnemgtaGFucyc6ICflnKjnur/nq5nliqHkurrlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ea5LiK56uZ5YuZ5Lq65ZOhJyxcblx0XHR9KSxcblx0XHRPbmxpbmVXaXRoaW4zME1pbnV0ZXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSGlnaCBwcml2aWxlZ2UgdXNlcnMgb25saW5lIHdpdGhpbiAzMCBtaW51dGVzOicsXG5cdFx0XHRqYTogJzMw5YiG5Lul5YaF44Gr44Kq44Oz44Op44Kk44Oz44Gn6auY5qip6ZmQ5Yip55So6ICF77yaJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4i+mdouaYr+acgOi/kTMw5YiG6ZKf5YaF5Zyo57q/55qE56uZ5Yqh5Lq65ZGY77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4i+mdouaYr+acgOi/kTMw5YiG6ZCY5YWn55qE57ea5LiK56uZ5YuZ5Lq65ZOh77yaJyxcblx0XHR9KSxcblx0XHRTeXNPcHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRtaW5zJyxcblx0XHRcdGphOiAn566h55CG6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgc2VjdGlvbiA9IFwiT25saW5lQWRtaW5zLW1vZHVsZV9fc2VjdGlvbl9XUzlJR2FfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uTGlzdCA9IFwiT25saW5lQWRtaW5zLW1vZHVsZV9fc2VjdGlvbkxpc3RfV1M5SUdhX180MTAwXCI7XG5leHBvcnQgY29uc3QgdGFsa1BhZ2VMaW5rID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX190YWxrUGFnZUxpbmtfV1M5SUdhX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJzZWN0aW9uXCI6IHNlY3Rpb24sXG4gIFwic2VjdGlvbkxpc3RcIjogc2VjdGlvbkxpc3QsXG4gIFwidGFsa1BhZ2VMaW5rXCI6IHRhbGtQYWdlTGlua1xufTtcbiAgICAgICIsICJjb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xuXG5leHBvcnQge3Nhbml0aXplfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtzYW5pdGl6ZX0gZnJvbSAnLi4vdXRpbC9zYW5pdGl6ZSc7XG5pbXBvcnQge3RhbGtQYWdlTGlua30gZnJvbSAnLi9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3MnO1xuXG5pbnRlcmZhY2UgVXNlckxpbmtQcm9wcyB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZXJMaW5rID0gKHt1c2VyTmFtZX06IFVzZXJMaW5rUHJvcHMpID0+IHtcblx0Y29uc3QgdXNlck5hbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHR1c2VyTmFtZUxpbmsuaHJlZiA9IG13LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApO1xuXHR1c2VyTmFtZUxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cdHVzZXJOYW1lTGluay5yZWwgPSBbJ25vb3BlbmVyJywgJ25vcmVmZXJyZXInXS5qb2luKCcgJyk7XG5cdHVzZXJOYW1lTGluay50ZXh0Q29udGVudCA9IHNhbml0aXplKHVzZXJOYW1lKTtcblxuXHRjb25zdCB1c2VyVGFsa0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdHVzZXJUYWxrTGluay5ocmVmID0gbXcudXRpbC5nZXRVcmwoYFVzZXJfdGFsazoke3Nhbml0aXplKHVzZXJOYW1lKX1gKTtcblx0dXNlclRhbGtMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXHR1c2VyVGFsa0xpbmsucmVsID0gWydub29wZW5lcicsICdub3JlZmVycmVyJ10uam9pbignICcpO1xuXHR1c2VyVGFsa0xpbmsudGV4dENvbnRlbnQgPSBnZXRNZXNzYWdlKCdUYWxrJyk7XG5cblx0Y29uc3QgdXNlclRhbGtMaW5rV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0dXNlclRhbGtMaW5rV3JhcC5jbGFzc05hbWUgPSB0YWxrUGFnZUxpbms7XG5cdHVzZXJUYWxrTGlua1dyYXAuYXBwZW5kKGdldE1lc3NhZ2UoJygnKSwgdXNlclRhbGtMaW5rLCBnZXRNZXNzYWdlKCcpJykpO1xuXG5cdGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRpdGVtLmFwcGVuZCh1c2VyTmFtZUxpbmssICcgJywgdXNlclRhbGtMaW5rV3JhcCk7XG5cblx0cmV0dXJuIGl0ZW07XG59O1xuXG5leHBvcnQge3VzZXJMaW5rfTtcbiIsICJpbXBvcnQge3NlY3Rpb24sIHNlY3Rpb25MaXN0fSBmcm9tICcuL09ubGluZUFkbWlucy5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt1c2VyTGlua30gZnJvbSAnLi91c2VyTGluayc7XG5cbmludGVyZmFjZSBHcm91cExpc3RQcm9wcyB7XG5cdGdyb3VwTmFtZTogc3RyaW5nO1xuXHR1c2VyTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBncm91cExpc3QgPSAoe2dyb3VwTmFtZSwgdXNlck5hbWVzfTogR3JvdXBMaXN0UHJvcHMpOiBIVE1MRWxlbWVudCB8IENvbW1lbnQgPT4ge1xuXHRpZiAoZ3JvdXBOYW1lICYmIHVzZXJOYW1lcy5sZW5ndGgpIHtcblx0XHRjb25zdCBncm91cE5hbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRncm91cE5hbWVUaXRsZS50ZXh0Q29udGVudCA9IGdyb3VwTmFtZTtcblxuXHRcdGNvbnN0IG9ubGluZVVzZXJOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0b25saW5lVXNlck51bWJlci50ZXh0Q29udGVudCA9IGdldE1lc3NhZ2UoJyAoJDEgb25saW5lKTonKS5yZXBsYWNlKCckMScsIFN0cmluZyh1c2VyTmFtZXMubGVuZ3RoKSk7XG5cblx0XHRjb25zdCB1c2VyTmFtZUxpbmtzID0gdXNlck5hbWVzLm1hcCgodXNlck5hbWUpID0+IHtcblx0XHRcdHJldHVybiB1c2VyTGluayh7dXNlck5hbWV9KTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IHNlY3Rpb25Vc2VyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdFx0c2VjdGlvblVzZXJMaXN0LmNsYXNzTmFtZSA9IHNlY3Rpb25MaXN0O1xuXHRcdHNlY3Rpb25Vc2VyTGlzdC5hcHBlbmQoLi4udXNlck5hbWVMaW5rcyk7XG5cblx0XHRjb25zdCBncm91cExpc3RXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0Z3JvdXBMaXN0V3JhcC5jbGFzc05hbWUgPSBzZWN0aW9uO1xuXHRcdGdyb3VwTGlzdFdyYXAuYXBwZW5kKGdyb3VwTmFtZVRpdGxlLCBvbmxpbmVVc2VyTnVtYmVyLCBzZWN0aW9uVXNlckxpc3QpO1xuXG5cdFx0cmV0dXJuIGdyb3VwTGlzdFdyYXA7XG5cdH1cblxuXHRjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cdHJldHVybiBjb21tZW50O1xufTtcblxuZXhwb3J0IHtncm91cExpc3R9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge2dyb3VwTGlzdH0gZnJvbSAnLi9ncm91cExpc3QnO1xuXG5pbnRlcmZhY2UgT25saW5lQWRtaW5zTGlzdFByb3BzIHtcblx0c3Rld2FyZHM6IHN0cmluZ1tdO1xuXHRzeXNvcHM6IHN0cmluZ1tdO1xuXHRwYXRyb2xsZXJzOiBzdHJpbmdbXTtcbn1cblxuY29uc3Qgb25saW5lQWRtaW5zTGlzdCA9ICh7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc306IE9ubGluZUFkbWluc0xpc3RQcm9wcykgPT4ge1xuXHRjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IGdldE1lc3NhZ2UoJ09ubGluZVdpdGhpbjMwTWludXRlcycpO1xuXG5cdGNvbnN0IGxpc3RXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGxpc3RXcmFwLmFwcGVuZChsaXN0VGl0bGUpO1xuXG5cdGlmIChzdGV3YXJkcy5sZW5ndGgpIHtcblx0XHRjb25zdCBzdGV3YXJkTGlzdCA9IGdyb3VwTGlzdCh7Z3JvdXBOYW1lOiBnZXRNZXNzYWdlKCdTdGV3YXJkcycpLCB1c2VyTmFtZXM6IHN0ZXdhcmRzfSk7XG5cdFx0bGlzdFdyYXAuYXBwZW5kKHN0ZXdhcmRMaXN0KTtcblx0fVxuXG5cdGlmIChzeXNvcHMubGVuZ3RoKSB7XG5cdFx0Y29uc3Qgc3lzT3BMaXN0ID0gZ3JvdXBMaXN0KHtncm91cE5hbWU6IGdldE1lc3NhZ2UoJ1N5c09wcycpLCB1c2VyTmFtZXM6IHN5c29wc30pO1xuXHRcdGxpc3RXcmFwLmFwcGVuZChzeXNPcExpc3QpO1xuXHR9XG5cblx0aWYgKHBhdHJvbGxlcnMubGVuZ3RoKSB7XG5cdFx0Y29uc3QgcGF0cm9sbGVyTGlzdCA9IGdyb3VwTGlzdCh7Z3JvdXBOYW1lOiBnZXRNZXNzYWdlKCdQYXRyb2xsZXJzJyksIHVzZXJOYW1lczogcGF0cm9sbGVyc30pO1xuXHRcdGxpc3RXcmFwLmFwcGVuZChwYXRyb2xsZXJMaXN0KTtcblx0fVxuXG5cdHJldHVybiBsaXN0V3JhcDtcbn07XG5cbmV4cG9ydCB7b25saW5lQWRtaW5zTGlzdH07XG4iLCAiaW1wb3J0IHtnZXRBZG1pbnN9IGZyb20gJy4vdXRpbC9nZXRBZG1pbnMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtvbmxpbmVBZG1pbnNMaXN0fSBmcm9tICcuL2NvbXBvbmVudHMvb25saW5lQWRtaW5zTGlzdCc7XG5cbmNvbnN0IGRvQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50PEhUTUxBbmNob3JFbGVtZW50Pik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGNvbnN0IG5vdGlmeSA9IChlbGVtZW50OiBzdHJpbmcgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+LCB0eXBlOiAnZXJyb3InIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm4nID0gJ2luZm8nKSA9PiB7XG5cdFx0cmV0dXJuIG13Lm5vdGlmeShlbGVtZW50LCB7XG5cdFx0XHR0YWc6ICdvbmxpbmVBZG1pbnMnLFxuXHRcdFx0dHlwZSxcblx0XHR9KTtcblx0fTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHtzdGV3YXJkcywgc3lzb3BzLCBwYXRyb2xsZXJzfSA9IGF3YWl0IGdldEFkbWlucygpO1xuXG5cdFx0aWYgKHN0ZXdhcmRzLmxlbmd0aCArIHN5c29wcy5sZW5ndGggKyBwYXRyb2xsZXJzLmxlbmd0aCkge1xuXHRcdFx0bm90aWZ5KCQoJzxkaXY+JykuYXBwZW5kKG9ubGluZUFkbWluc0xpc3Qoe3N0ZXdhcmRzLCBzeXNvcHMsIHBhdHJvbGxlcnN9KSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3RpZnkoZ2V0TWVzc2FnZSgnTm9PbmxpbmUnKSwgJ3dhcm4nKTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdG5vdGlmeShnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksICdlcnJvcicpO1xuXHR9XG59O1xuXG5leHBvcnQge2RvQ2xpY2t9O1xuIiwgImltcG9ydCB7ZG9DbGlja30gZnJvbSAnLi9tb2R1bGVzL2RvQ2xpY2snO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBnZXRNZXNzYWdlKCdPbmxpbmUnKSwgJ3Qtb25saW5lYWRtaW4nKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHQkKGVsZW1lbnQpXG5cdFx0LmZpbmQoJ2EnKVxuXHRcdC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgZG9DbGljayhldmVudCk7XG5cdFx0fSk7XG59O1xuXG4kKGFkZFBvcnRsZXRMaW5rKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsZ0JBQUFDLE9BQWtDTCxPQUFPLENBQUU7O0FDRC9ELElBQU1NLHFCQUFBLDRCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQXFCLFdBQU9DLFNBQWlCQyxPQUFrQjtBQUNwRSxVQUFNQyxTQUFzQztNQUMzQ0Y7TUFDQUM7TUFDQUUsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOQyxRQUFRO01BQ1JDLFFBQVEsQ0FBQyxRQUFRLE9BQU87TUFDeEJDLFNBQVM7TUFDVEMsU0FBUztNQUNU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QUFDeERnRixlQUFPSSxFQUFFLE9BQU8sRUFBRTVCLE9BQU9jLGlCQUFpQjtVQUFDekY7VUFBVUM7VUFBUUM7UUFBVSxDQUFDLENBQUMsQ0FBQztNQUMzRSxPQUFPO0FBQ05pRyxlQUFPaEQsV0FBVyxVQUFVLEdBQUcsTUFBTTtNQUN0QztJQUNELFFBQVE7QUFDUGdELGFBQU9oRCxXQUFXLGVBQWUsR0FBRyxPQUFPO0lBQzVDO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FyQk00QyxTQUFBUyxLQUFBO0FBQUEsV0FBQVIsTUFBQW5ILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTs7QUNETixJQUFNMkgsaUJBQWlCQSxNQUFZO0FBRWxDLFFBQU1DLFlBQW1DNUMsU0FBUzZDLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTVAsVUFBZ0NuQyxHQUFHQyxLQUFLdUMsZUFBZUMsV0FBVyxLQUFLdkQsV0FBVyxRQUFRLEdBQUcsZUFBZTtBQUNsSCxNQUFJLENBQUNpRCxTQUFTO0FBQ2I7RUFDRDtBQUdBRyxJQUFFSCxPQUFPLEVBQ1BRLEtBQUssR0FBRyxFQUNSQyxHQUFHLFNBQVVaLFdBQVU7QUFDdkIsU0FBS0YsUUFBUUUsS0FBSztFQUNuQixDQUFDO0FBQ0g7QUFFQU0sRUFBRUUsY0FBYzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgInF1ZXJ5UmVjZW50Q2hhbmdlcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInJjc3RhcnQiLCAicmNlbmQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInJjcHJvcCIsICJyY3Nob3ciLCAicmNsaW1pdCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXNwb25zZSIsICJnZXQiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWVyeUxvZ0V2ZW50cyIsICJfcmVmMiIsICJsZXN0YXJ0IiwgImxlZW5kIiwgImxlcHJvcCIsICJsZWxpbWl0IiwgIl94MyIsICJfeDQiLCAicXVlcnlVc2VyUHJvcHMiLCAiX3JlZjMiLCAidXN1c2VycyIsICJ1c3Byb3AiLCAiX3g1IiwgIkJMQUNLX0xJU1QiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEFkbWlucyIsICJfcmVmNCIsICJzdGV3YXJkcyIsICJzeXNvcHMiLCAicGF0cm9sbGVycyIsICJ1c2VycyIsICJwcm9taXNlcyIsICJ0aW1lIiwgIkRhdGUiLCAidG9JU09TdHJpbmciLCAic2V0TWludXRlcyIsICJnZXRNaW51dGVzIiwgInJlY2VudGNoYW5nZXMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInVzZXIiLCAidmFsdWUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAibG9nZXZlbnRzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInVuaXF1ZUFycmF5IiwgImkiLCAic3BsaWNlIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImdyb3VwcyIsICJuYW1lIiwgImluY2x1ZGVzIiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAiVGFsayIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJQYXRyb2xsZXJzIiwgIlN0ZXdhcmRzIiwgIk5vT25saW5lIiwgIk9ubGluZSIsICJPbmxpbmVXaXRoaW4zME1pbnV0ZXMiLCAiU3lzT3BzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzZWN0aW9uIiwgInNlY3Rpb25MaXN0IiwgInRhbGtQYWdlTGluayIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJ1c2VyTGluayIsICJ1c2VyTmFtZSIsICJ1c2VyTmFtZUxpbmsiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgInRhcmdldCIsICJyZWwiLCAiam9pbiIsICJ0ZXh0Q29udGVudCIsICJ1c2VyVGFsa0xpbmsiLCAidXNlclRhbGtMaW5rV3JhcCIsICJjbGFzc05hbWUiLCAiYXBwZW5kIiwgIml0ZW0iLCAiZ3JvdXBMaXN0IiwgImdyb3VwTmFtZSIsICJ1c2VyTmFtZXMiLCAiZ3JvdXBOYW1lVGl0bGUiLCAib25saW5lVXNlck51bWJlciIsICJTdHJpbmciLCAidXNlck5hbWVMaW5rcyIsICJtYXAiLCAic2VjdGlvblVzZXJMaXN0IiwgImdyb3VwTGlzdFdyYXAiLCAiY29tbWVudCIsICJjcmVhdGVDb21tZW50IiwgIm9ubGluZUFkbWluc0xpc3QiLCAibGlzdFRpdGxlIiwgImxpc3RXcmFwIiwgInN0ZXdhcmRMaXN0IiwgInN5c09wTGlzdCIsICJwYXRyb2xsZXJMaXN0IiwgImRvQ2xpY2siLCAiX3JlZjYiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAibm90aWZ5IiwgImVsZW1lbnQiLCAidHlwZSIsICJ0YWciLCAiJCIsICJfeDYiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldElkIiwgInF1ZXJ5U2VsZWN0b3IiLCAiZmluZCIsICJvbiJdCn0K
