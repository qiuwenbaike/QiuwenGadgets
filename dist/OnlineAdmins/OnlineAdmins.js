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
  userTalkLink.textContent = getMessage("(") + getMessage("Talk") + getMessage(")");
  const userTalkLinkWrap = document.createElement("span");
  userTalkLinkWrap.className = talkPageLink;
  userTalkLinkWrap.append(userTalkLink);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9vcHRpb25zLmpzb24iLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy91dGlsL3F1ZXJ5LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvdXRpbC9nZXRBZG1pbnMudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy91dGlsL3Nhbml0aXplLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL3VzZXJMaW5rLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50cyIsICJzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvY29tcG9uZW50cy9vbmxpbmVBZG1pbnNMaXN0LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9kb0NsaWNrLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvT25saW5lQWRtaW5zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0Lk9ubGluZUFkbWluc19nZXRBZG1pbnNcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgT25saW5lQWRtaW5zLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlSZWNlbnRDaGFuZ2VzID0gYXN5bmMgKHJjc3RhcnQ6IHN0cmluZywgcmNlbmQ6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmVjZW50Q2hhbmdlc1BhcmFtcyA9IHtcblx0XHRyY3N0YXJ0LFxuXHRcdHJjZW5kLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3JlY2VudGNoYW5nZXMnLFxuXHRcdHJjcHJvcDogJ3VzZXInLFxuXHRcdHJjc2hvdzogWychYm90JywgJyFhbm9uJ10sXG5cdFx0cmNsaW1pdDogNTAwLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlMb2dFdmVudHMgPSBhc3luYyAobGVzdGFydDogc3RyaW5nLCBsZWVuZDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0bGVzdGFydCxcblx0XHRsZWVuZCxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdGxlcHJvcDogJ3VzZXInLFxuXHRcdGxlbGltaXQ6IDUwMCxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5VXNlclByb3BzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHtxdWVyeVJlY2VudENoYW5nZXMsIHF1ZXJ5TG9nRXZlbnRzLCBxdWVyeVVzZXJQcm9wc307XG4iLCAiY29uc3QgQkxBQ0tfTElTVDogc3RyaW5nW10gPSBbJ+a7peeUqOi/h+a7pOWZqCddO1xuXG5leHBvcnQge0JMQUNLX0xJU1R9O1xuIiwgImltcG9ydCB7cXVlcnlMb2dFdmVudHMsIHF1ZXJ5UmVjZW50Q2hhbmdlcywgcXVlcnlVc2VyUHJvcHN9IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHtCTEFDS19MSVNUfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBnZXRBZG1pbnMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHN0ZXdhcmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBzeXNvcHM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHBhdHJvbGxlcnM6IHN0cmluZ1tdID0gW107XG5cblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRjb25zdCB0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgcmNzdGFydDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXG5cdC8vIFF1ZXJ5IHVzZXJzIGhhcyBsb2cvZWRpdCByZWNvcmQgaW4gcmVjZW50IDMwIG1pbnV0ZXNcblx0dGltZS5zZXRNaW51dGVzKHRpbWUuZ2V0TWludXRlcygpIC0gMzApOyAvLyDmnIDov5Hmm7TmlLkzMOWIhumSn+WGheeahOe8lui+keeUqOaIt1xuXHRjb25zdCByY2VuZDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVjZW50Y2hhbmdlcyA9IGF3YWl0IHF1ZXJ5UmVjZW50Q2hhbmdlcyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiByZWNlbnRjaGFuZ2VzWydxdWVyeSddLnJlY2VudGNoYW5nZXMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0dXNlcnNbdXNlcnMubGVuZ3RoXSA9IHVzZXI7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBsb2dldmVudHMgPSBhd2FpdCBxdWVyeUxvZ0V2ZW50cyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiBsb2dldmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzIGFzIHt1c2VyOiBzdHJpbmd9W10pIHtcblx0XHRcdHVzZXJzW3VzZXJzLmxlbmd0aF0gPSB1c2VyO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXG5cdHVzZXJzID0gdW5pcXVlQXJyYXkodXNlcnMpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cblx0Ly8gR2VuZXJhdGluZyBxdWVyeSBwcm9taXNlc1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgdXN1c2VycyA9IHVzZXJzLnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCF1c3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlVc2VyUHJvcHModXN1c2Vycyk7XG5cblx0XHRcdGZvciAoY29uc3Qge2dyb3VwcywgbmFtZX0gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10udXNlcnMgYXMge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXSkge1xuXHRcdFx0XHQvLyByZW1vdmUgYm90c1xuXHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdib3QnKSB8fCBCTEFDS19MSVNULmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyByZW1vdmUgbG9ncyB3aXRoIG5vIHVzZXIgbmFtZXNcblx0XHRcdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzdGV3YXJkJykpIHtcblx0XHRcdFx0XHRzdGV3YXJkc1tzdGV3YXJkcy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N5c29wJykpIHtcblx0XHRcdFx0XHRzeXNvcHNbc3lzb3BzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygncGF0cm9sbGVyJykpIHtcblx0XHRcdFx0XHRwYXRyb2xsZXJzW3BhdHJvbGxlcnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4ge3N0ZXdhcmRzLCBzeXNvcHMsIHBhdHJvbGxlcnN9O1xufTtcblxuZXhwb3J0IHtnZXRBZG1pbnN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRUYWxrOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RhbGsnLFxuXHRcdFx0amE6ICfnlZnoqIAnLFxuXHRcdFx0emg6ICfnlZnoqIAnLFxuXHRcdH0pLFxuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdCcgKCQxIG9ubGluZSk6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCQxIG9ubGluZSk6Jyxcblx0XHRcdGphOiAn77yIJDHkurrjgqrjg7Pjg6njgqTjg7PkuK3vvInvvJonLFxuXHRcdFx0J3poLWhhbnMnOiAn77yIJDHkuKrlnKjnur/vvInvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn77yIJDHlgIvlnKjnt5rvvInvvJonLFxuXHRcdH0pLFxuXHRcdFBhdHJvbGxlcnM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVycycsXG5cdFx0XHRqYTogJ+W3oeWbnuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRTdGV3YXJkczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkcycsXG5cdFx0XHRqYTogJ+OCueODgeODpeODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHROb09ubGluZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlcmUgYXJlIG5vIGhpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZScsXG5cdFx0XHRqYTogJ+ePvuWcqOOAgemrmOaoqemZkOWIqeeUqOiAheOBr+OCquODs+ODqeOCpOODs+OBq+OBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICfnm67liY3msqHmnInnq5nliqHkurrlkZjlnKjnur8nLFxuXHRcdFx0J3poLWhhbnQnOiAn55uu5YmN5rKS5pyJ56uZ5YuZ5Lq65ZOh5Zyo57eaJyxcblx0XHR9KSxcblx0XHRPbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT25saW5lIGFkbWlucycsXG5cdFx0XHRqYTogJ+OCquODs+ODqeOCpOODs+OBrumrmOaoqemZkOWIqeeUqOiAhScsXG5cdFx0XHQnemgtaGFucyc6ICflnKjnur/nq5nliqHkurrlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ea5LiK56uZ5YuZ5Lq65ZOhJyxcblx0XHR9KSxcblx0XHRPbmxpbmVXaXRoaW4zME1pbnV0ZXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSGlnaCBwcml2aWxlZ2UgdXNlcnMgb25saW5lIHdpdGhpbiAzMCBtaW51dGVzOicsXG5cdFx0XHRqYTogJzMw5YiG5Lul5YaF44Gr44Kq44Oz44Op44Kk44Oz44Gn6auY5qip6ZmQ5Yip55So6ICF77yaJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4i+mdouaYr+acgOi/kTMw5YiG6ZKf5YaF5Zyo57q/55qE56uZ5Yqh5Lq65ZGY77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4i+mdouaYr+acgOi/kTMw5YiG6ZCY5YWn55qE57ea5LiK56uZ5YuZ5Lq65ZOh77yaJyxcblx0XHR9KSxcblx0XHRTeXNPcHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRtaW5zJyxcblx0XHRcdGphOiAn566h55CG6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgc2VjdGlvbiA9IFwiT25saW5lQWRtaW5zLW1vZHVsZV9fc2VjdGlvbl9XUzlJR2FfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uTGlzdCA9IFwiT25saW5lQWRtaW5zLW1vZHVsZV9fc2VjdGlvbkxpc3RfV1M5SUdhX180MTAwXCI7XG5leHBvcnQgY29uc3QgdGFsa1BhZ2VMaW5rID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX190YWxrUGFnZUxpbmtfV1M5SUdhX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJzZWN0aW9uXCI6IHNlY3Rpb24sXG4gIFwic2VjdGlvbkxpc3RcIjogc2VjdGlvbkxpc3QsXG4gIFwidGFsa1BhZ2VMaW5rXCI6IHRhbGtQYWdlTGlua1xufTtcbiAgICAgICIsICJjb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xuXG5leHBvcnQge3Nhbml0aXplfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtzYW5pdGl6ZX0gZnJvbSAnLi4vdXRpbC9zYW5pdGl6ZSc7XG5pbXBvcnQge3RhbGtQYWdlTGlua30gZnJvbSAnLi9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3MnO1xuXG5pbnRlcmZhY2UgVXNlckxpbmtQcm9wcyB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZXJMaW5rID0gKHt1c2VyTmFtZX06IFVzZXJMaW5rUHJvcHMpID0+IHtcblx0Y29uc3QgdXNlck5hbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHR1c2VyTmFtZUxpbmsuaHJlZiA9IG13LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApO1xuXHR1c2VyTmFtZUxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG5cdHVzZXJOYW1lTGluay5yZWwgPSBbJ25vb3BlbmVyJywgJ25vcmVmZXJyZXInXS5qb2luKCcgJyk7XG5cdHVzZXJOYW1lTGluay50ZXh0Q29udGVudCA9IHNhbml0aXplKHVzZXJOYW1lKTtcblxuXHRjb25zdCB1c2VyVGFsa0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdHVzZXJUYWxrTGluay5ocmVmID0gbXcudXRpbC5nZXRVcmwoYFVzZXJfdGFsazoke3Nhbml0aXplKHVzZXJOYW1lKX1gKTtcblx0dXNlclRhbGtMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuXHR1c2VyVGFsa0xpbmsucmVsID0gWydub29wZW5lcicsICdub3JlZmVycmVyJ10uam9pbignICcpO1xuXHR1c2VyVGFsa0xpbmsudGV4dENvbnRlbnQgPSBnZXRNZXNzYWdlKCcoJykgKyBnZXRNZXNzYWdlKCdUYWxrJykgKyBnZXRNZXNzYWdlKCcpJyk7XG5cblx0Y29uc3QgdXNlclRhbGtMaW5rV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0dXNlclRhbGtMaW5rV3JhcC5jbGFzc05hbWUgPSB0YWxrUGFnZUxpbms7XG5cdHVzZXJUYWxrTGlua1dyYXAuYXBwZW5kKHVzZXJUYWxrTGluayk7XG5cblx0Y29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdGl0ZW0uYXBwZW5kKHVzZXJOYW1lTGluaywgJyAnLCB1c2VyVGFsa0xpbmtXcmFwKTtcblxuXHRyZXR1cm4gaXRlbTtcbn07XG5cbmV4cG9ydCB7dXNlckxpbmt9O1xuIiwgImltcG9ydCB7c2VjdGlvbiwgc2VjdGlvbkxpc3R9IGZyb20gJy4vT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3VzZXJMaW5rfSBmcm9tICcuL3VzZXJMaW5rJztcblxuaW50ZXJmYWNlIEdyb3VwTGlzdFByb3BzIHtcblx0Z3JvdXBOYW1lOiBzdHJpbmc7XG5cdHVzZXJOYW1lczogc3RyaW5nW107XG59XG5cbmNvbnN0IGdyb3VwTGlzdCA9ICh7Z3JvdXBOYW1lLCB1c2VyTmFtZXN9OiBHcm91cExpc3RQcm9wcyk6IEhUTUxFbGVtZW50IHwgQ29tbWVudCA9PiB7XG5cdGlmIChncm91cE5hbWUgJiYgdXNlck5hbWVzLmxlbmd0aCkge1xuXHRcdGNvbnN0IGdyb3VwTmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGdyb3VwTmFtZVRpdGxlLnRleHRDb250ZW50ID0gZ3JvdXBOYW1lO1xuXG5cdFx0Y29uc3Qgb25saW5lVXNlck51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRvbmxpbmVVc2VyTnVtYmVyLnRleHRDb250ZW50ID0gZ2V0TWVzc2FnZSgnICgkMSBvbmxpbmUpOicpLnJlcGxhY2UoJyQxJywgU3RyaW5nKHVzZXJOYW1lcy5sZW5ndGgpKTtcblxuXHRcdGNvbnN0IHVzZXJOYW1lTGlua3MgPSB1c2VyTmFtZXMubWFwKCh1c2VyTmFtZSkgPT4ge1xuXHRcdFx0cmV0dXJuIHVzZXJMaW5rKHt1c2VyTmFtZX0pO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3Qgc2VjdGlvblVzZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblx0XHRzZWN0aW9uVXNlckxpc3QuY2xhc3NOYW1lID0gc2VjdGlvbkxpc3Q7XG5cdFx0c2VjdGlvblVzZXJMaXN0LmFwcGVuZCguLi51c2VyTmFtZUxpbmtzKTtcblxuXHRcdGNvbnN0IGdyb3VwTGlzdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRncm91cExpc3RXcmFwLmNsYXNzTmFtZSA9IHNlY3Rpb247XG5cdFx0Z3JvdXBMaXN0V3JhcC5hcHBlbmQoZ3JvdXBOYW1lVGl0bGUsIG9ubGluZVVzZXJOdW1iZXIsIHNlY3Rpb25Vc2VyTGlzdCk7XG5cblx0XHRyZXR1cm4gZ3JvdXBMaXN0V3JhcDtcblx0fVxuXG5cdGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblx0cmV0dXJuIGNvbW1lbnQ7XG59O1xuXG5leHBvcnQge2dyb3VwTGlzdH07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7Z3JvdXBMaXN0fSBmcm9tICcuL2dyb3VwTGlzdCc7XG5cbmludGVyZmFjZSBPbmxpbmVBZG1pbnNMaXN0UHJvcHMge1xuXHRzdGV3YXJkczogc3RyaW5nW107XG5cdHN5c29wczogc3RyaW5nW107XG5cdHBhdHJvbGxlcnM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBvbmxpbmVBZG1pbnNMaXN0ID0gKHtzdGV3YXJkcywgc3lzb3BzLCBwYXRyb2xsZXJzfTogT25saW5lQWRtaW5zTGlzdFByb3BzKSA9PiB7XG5cdGNvbnN0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0bGlzdFRpdGxlLnRleHRDb250ZW50ID0gZ2V0TWVzc2FnZSgnT25saW5lV2l0aGluMzBNaW51dGVzJyk7XG5cblx0Y29uc3QgbGlzdFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bGlzdFdyYXAuYXBwZW5kKGxpc3RUaXRsZSk7XG5cblx0aWYgKHN0ZXdhcmRzLmxlbmd0aCkge1xuXHRcdGNvbnN0IHN0ZXdhcmRMaXN0ID0gZ3JvdXBMaXN0KHtncm91cE5hbWU6IGdldE1lc3NhZ2UoJ1N0ZXdhcmRzJyksIHVzZXJOYW1lczogc3Rld2FyZHN9KTtcblx0XHRsaXN0V3JhcC5hcHBlbmQoc3Rld2FyZExpc3QpO1xuXHR9XG5cblx0aWYgKHN5c29wcy5sZW5ndGgpIHtcblx0XHRjb25zdCBzeXNPcExpc3QgPSBncm91cExpc3Qoe2dyb3VwTmFtZTogZ2V0TWVzc2FnZSgnU3lzT3BzJyksIHVzZXJOYW1lczogc3lzb3BzfSk7XG5cdFx0bGlzdFdyYXAuYXBwZW5kKHN5c09wTGlzdCk7XG5cdH1cblxuXHRpZiAocGF0cm9sbGVycy5sZW5ndGgpIHtcblx0XHRjb25zdCBwYXRyb2xsZXJMaXN0ID0gZ3JvdXBMaXN0KHtncm91cE5hbWU6IGdldE1lc3NhZ2UoJ1BhdHJvbGxlcnMnKSwgdXNlck5hbWVzOiBwYXRyb2xsZXJzfSk7XG5cdFx0bGlzdFdyYXAuYXBwZW5kKHBhdHJvbGxlckxpc3QpO1xuXHR9XG5cblx0cmV0dXJuIGxpc3RXcmFwO1xufTtcblxuZXhwb3J0IHtvbmxpbmVBZG1pbnNMaXN0fTtcbiIsICJpbXBvcnQge2dldEFkbWluc30gZnJvbSAnLi91dGlsL2dldEFkbWlucyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge29ubGluZUFkbWluc0xpc3R9IGZyb20gJy4vY29tcG9uZW50cy9vbmxpbmVBZG1pbnNMaXN0JztcblxuY29uc3QgZG9DbGljayA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0Y29uc3Qgbm90aWZ5ID0gKGVsZW1lbnQ6IHN0cmluZyB8IEpRdWVyeTxIVE1MRWxlbWVudD4sIHR5cGU6ICdlcnJvcicgfCAnaW5mbycgfCAnc3VjY2VzcycgfCAnd2FybicgPSAnaW5mbycpID0+IHtcblx0XHRyZXR1cm4gbXcubm90aWZ5KGVsZW1lbnQsIHtcblx0XHRcdHRhZzogJ29ubGluZUFkbWlucycsXG5cdFx0XHR0eXBlLFxuXHRcdH0pO1xuXHR9O1xuXG5cdHRyeSB7XG5cdFx0Y29uc3Qge3N0ZXdhcmRzLCBzeXNvcHMsIHBhdHJvbGxlcnN9ID0gYXdhaXQgZ2V0QWRtaW5zKCk7XG5cblx0XHRpZiAoc3Rld2FyZHMubGVuZ3RoICsgc3lzb3BzLmxlbmd0aCArIHBhdHJvbGxlcnMubGVuZ3RoKSB7XG5cdFx0XHRub3RpZnkoJCgnPGRpdj4nKS5hcHBlbmQob25saW5lQWRtaW5zTGlzdCh7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc30pKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5vdGlmeShnZXRNZXNzYWdlKCdOb09ubGluZScpLCAnd2FybicpO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0bm90aWZ5KGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSwgJ2Vycm9yJyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZG9DbGlja307XG4iLCAiaW1wb3J0IHtkb0NsaWNrfSBmcm9tICcuL21vZHVsZXMvZG9DbGljayc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoKTogdm9pZCA9PiB7XG5cdC8vIENyZWF0ZSBwb3J0bGV0IGxpbmtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIGdldE1lc3NhZ2UoJ09ubGluZScpLCAndC1vbmxpbmVhZG1pbicpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBCaW5kIGNsaWNrIGxpc3RlbmVyXG5cdCQoZWxlbWVudClcblx0XHQuZmluZCgnYScpXG5cdFx0Lm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0dm9pZCBkb0NsaWNrKGV2ZW50KTtcblx0XHR9KTtcbn07XG5cbiQoYWRkUG9ydGxldExpbmspO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxnQkFBQUMsT0FBa0NMLE9BQU8sQ0FBRTs7QUNEL0QsSUFBTU0scUJBQUEsNEJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBcUIsV0FBT0MsU0FBaUJDLE9BQWtCO0FBQ3BFLFVBQU1DLFNBQXNDO01BQzNDRjtNQUNBQztNQUNBRSxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNO01BQ05DLFFBQVE7TUFDUkMsUUFBUSxDQUFDLFFBQVEsT0FBTztNQUN4QkMsU0FBUztNQUNUQyxTQUFTO01B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Q3hEZ0YsZUFBT0ksRUFBRSxPQUFPLEVBQUU1QixPQUFPYyxpQkFBaUI7VUFBQ3pGO1VBQVVDO1VBQVFDO1FBQVUsQ0FBQyxDQUFDLENBQUM7TUFDM0UsT0FBTztBQUNOaUcsZUFBT2hELFdBQVcsVUFBVSxHQUFHLE1BQU07TUFDdEM7SUFDRCxRQUFRO0FBQ1BnRCxhQUFPaEQsV0FBVyxlQUFlLEdBQUcsT0FBTztJQUM1QztFQUNELENBQUE7QUFBQSxTQUFBLFNBckJNNEMsU0FBQVMsS0FBQTtBQUFBLFdBQUFSLE1BQUFuSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FDRE4sSUFBTTJILGlCQUFpQkEsTUFBWTtBQUVsQyxRQUFNQyxZQUFtQzVDLFNBQVM2QyxjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1QLFVBQWdDbkMsR0FBR0MsS0FBS3VDLGVBQWVDLFdBQVcsS0FBS3ZELFdBQVcsUUFBUSxHQUFHLGVBQWU7QUFDbEgsTUFBSSxDQUFDaUQsU0FBUztBQUNiO0VBQ0Q7QUFHQUcsSUFBRUgsT0FBTyxFQUNQUSxLQUFLLEdBQUcsRUFDUkMsR0FBRyxTQUFVWixXQUFVO0FBQ3ZCLFNBQUtGLFFBQVFFLEtBQUs7RUFDbkIsQ0FBQztBQUNIO0FBRUFNLEVBQUVFLGNBQWM7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJxdWVyeVJlY2VudENoYW5nZXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJyY3N0YXJ0IiwgInJjZW5kIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJyY3Byb3AiLCAicmNzaG93IiwgInJjbGltaXQiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlMb2dFdmVudHMiLCAiX3JlZjIiLCAibGVzdGFydCIsICJsZWVuZCIsICJsZXByb3AiLCAibGVsaW1pdCIsICJfeDMiLCAiX3g0IiwgInF1ZXJ5VXNlclByb3BzIiwgIl9yZWYzIiwgInVzdXNlcnMiLCAidXNwcm9wIiwgIl94NSIsICJCTEFDS19MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRBZG1pbnMiLCAiX3JlZjQiLCAic3Rld2FyZHMiLCAic3lzb3BzIiwgInBhdHJvbGxlcnMiLCAidXNlcnMiLCAicHJvbWlzZXMiLCAidGltZSIsICJEYXRlIiwgInRvSVNPU3RyaW5nIiwgInNldE1pbnV0ZXMiLCAiZ2V0TWludXRlcyIsICJyZWNlbnRjaGFuZ2VzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ1c2VyIiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImxvZ2V2ZW50cyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJ1bmlxdWVBcnJheSIsICJpIiwgInNwbGljZSIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJncm91cHMiLCAibmFtZSIsICJpbmNsdWRlcyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlRhbGsiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiUGF0cm9sbGVycyIsICJTdGV3YXJkcyIsICJOb09ubGluZSIsICJPbmxpbmUiLCAiT25saW5lV2l0aGluMzBNaW51dGVzIiwgIlN5c09wcyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2VjdGlvbiIsICJzZWN0aW9uTGlzdCIsICJ0YWxrUGFnZUxpbmsiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAidXNlckxpbmsiLCAidXNlck5hbWUiLCAidXNlck5hbWVMaW5rIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiaHJlZiIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJ0YXJnZXQiLCAicmVsIiwgImpvaW4iLCAidGV4dENvbnRlbnQiLCAidXNlclRhbGtMaW5rIiwgInVzZXJUYWxrTGlua1dyYXAiLCAiY2xhc3NOYW1lIiwgImFwcGVuZCIsICJpdGVtIiwgImdyb3VwTGlzdCIsICJncm91cE5hbWUiLCAidXNlck5hbWVzIiwgImdyb3VwTmFtZVRpdGxlIiwgIm9ubGluZVVzZXJOdW1iZXIiLCAiU3RyaW5nIiwgInVzZXJOYW1lTGlua3MiLCAibWFwIiwgInNlY3Rpb25Vc2VyTGlzdCIsICJncm91cExpc3RXcmFwIiwgImNvbW1lbnQiLCAiY3JlYXRlQ29tbWVudCIsICJvbmxpbmVBZG1pbnNMaXN0IiwgImxpc3RUaXRsZSIsICJsaXN0V3JhcCIsICJzdGV3YXJkTGlzdCIsICJzeXNPcExpc3QiLCAicGF0cm9sbGVyTGlzdCIsICJkb0NsaWNrIiwgIl9yZWY2IiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIm5vdGlmeSIsICJlbGVtZW50IiwgInR5cGUiLCAidGFnIiwgIiQiLCAiX3g2IiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRJZCIsICJxdWVyeVNlbGVjdG9yIiwgImZpbmQiLCAib24iXQp9Cg==
