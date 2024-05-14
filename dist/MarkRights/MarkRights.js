/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-MarkRights.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MarkRights}
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

// dist/MarkRights/MarkRights.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
//! src/MarkRights/options.json
var version = 2;
//! src/MarkRights/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("MarkRights/".concat(version));
//! src/MarkRights/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    qiuwen: (0, import_ext_gadget2.localize)({
      en: "Webmaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    steward: (0, import_ext_gadget2.localize)({
      en: "Steward",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    checkuser: (0, import_ext_gadget2.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    suppress: (0, import_ext_gadget2.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget2.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget2.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget2.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    transwiki: (0, import_ext_gadget2.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget2.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autoreviewer: (0, import_ext_gadget2.localize)({
      en: "Exempted from page patrol",
      "zh-hans": "巡查豁免",
      "zh-hant": "巡查豁免"
    }),
    senioreditor: (0, import_ext_gadget2.localize)({
      en: "Senior Editor",
      "zh-hans": "资深编者",
      "zh-hant": "資深編者"
    }),
    eventsponsor: (0, import_ext_gadget2.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget2.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget2.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget2.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    bot: (0, import_ext_gadget2.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget2.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget2.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    "ipblock-exempt": (0, import_ext_gadget2.localize)({
      en: "Exempted from IP blocks",
      "zh-hans": "IP封禁豁免",
      "zh-hant": "IP封鎖豁免"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkRights/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var userGroupMap = /* @__PURE__ */ new Map();
var globalUserGroupMap = /* @__PURE__ */ new Map();
var getUsername = (url) => {
  if (!url) {
    return "";
  }
  const username = mw.util.getParamValue("title", url);
  const decode = (string, replace) => {
    return decodeURIComponent((() => {
      try {
        return decodeURIComponent(replace(string));
      } catch {
        return replace(string).replace(/%(?!\d+)/g, "%25");
      }
    })());
  };
  if (username) {
    return decode(username, (string) => {
      return string.replace("User:", "").replace(/_/g, " ");
    });
  }
  const usernameMatch = url.match(/\/wiki\/User:(.+?)$/);
  if (usernameMatch !== null && usernameMatch !== void 0 && usernameMatch[1]) {
    return decode(usernameMatch[1], (string) => {
      return string.replace(/_/g, " ");
    });
  }
  return "";
};
var queryUserGroups = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (ususers) {
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups"
    };
    const response = yield api.post(params);
    return response;
  });
  return function queryUserGroups2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var queryGlobalUserGroups = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (user) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: "globaluserinfo",
      guiuser: user,
      guiprop: "groups"
    };
    const response = yield api.post(params);
    return response;
  });
  return function queryGlobalUserGroups2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var done = ($userLinks) => {
  $userLinks.each((_index, element) => {
    var _$element$attr, _userGroupMap$get, _globalUserGroupMap$g;
    const $element = $(element);
    if ($element.parents("li").find(".gadgets-markrights").length) {
      return;
    }
    const username = getUsername((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
    if (!username) {
      return;
    }
    const groups = (_userGroupMap$get = userGroupMap.get(username)) !== null && _userGroupMap$get !== void 0 ? _userGroupMap$get : [];
    const globalGroups = (_globalUserGroupMap$g = globalUserGroupMap.get(username)) !== null && _globalUserGroupMap$g !== void 0 ? _globalUserGroupMap$g : [];
    if (!groups) {
      return;
    }
    const $sups = $("<span>").addClass("gadgets-markrights");
    var _iterator = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)([...groups, ...globalGroups])), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const group = _step.value;
        const className = "gadgets-markrights__".concat(group);
        if ($sups.find("sup").hasClass(className)) {
          return;
        }
        $sups.append(
          // The following classes are used here:
          // * gadget-markrights__qiuwen
          // * gadget-markrights__steward
          // * gadget-markrights__checkuser
          // * gadget-markrights__suppress
          // * gadget-markrights__sysop
          // * gadget-markrights__interface-admin
          // * gadget-markrights__templateeditor
          // * gadget-markrights__transwiki
          // * gadget-markrights__patroller
          // * gadget-markrights__autoreviewer
          // * gadget-markrights__senioreditor
          // * gadget-markrights__eventsponsor
          // * gadget-markrights__massmessage-sender
          // * gadget-markrights__confirmed
          // * gadget-markrights__autoconfirmed
          // * gadget-markrights__bot
          // * gadget-markrights__flood
          // * gadget-markrights__ipblock-exempt
          // * gadget-markrights__rnrsverify-exempt
          $("<sup>").addClass(className).attr({
            alt: getMessage(group),
            title: getMessage(group)
          })
        );
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    $element.after($sups);
  });
};
var markUserRights = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($content) {
    const $userLinks = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
    let users = [];
    const queue = [];
    $userLinks.each((_index, {
      textContent
    }) => {
      const userLinkText = textContent === null || textContent === void 0 ? void 0 : textContent.toString();
      if (userLinkText) {
        users[users.length] = userLinkText;
      }
      users = (0, import_ext_gadget3.uniqueArray)(users);
      if (users.length === 50) {
        queue[queue.length] = users;
        users = [];
      }
    });
    if (users.length > 0) {
      queue[queue.length] = users;
    }
    for (var _i = 0, _queue = queue; _i < _queue.length; _i++) {
      const ususers = _queue[_i];
      try {
        const queryUserResponse = yield queryUserGroups(ususers);
        const {
          users: queryUsers
        } = queryUserResponse["query"];
        var _iterator2 = _createForOfIteratorHelper(queryUsers), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const user = _step2.value;
            if (!user || !user.groups) {
              continue;
            }
            userGroupMap.set(user.name, user.groups.filter((element) => {
              return element !== "*";
            }));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _iterator3 = _createForOfIteratorHelper(ususers), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const user = _step3.value;
            const queryGlobalUserInfoResponse = yield queryGlobalUserGroups(user);
            if (queryGlobalUserInfoResponse["query"] && queryGlobalUserInfoResponse["query"].globaluserinfo) {
              const {
                groups: globalgroups
              } = queryGlobalUserInfoResponse["query"].globaluserinfo;
              globalUserGroupMap.set(user, globalgroups);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        done($userLinks);
      } catch {
      }
    }
  });
  return function markUserRights2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/MarkRights/MarkRights.ts
mw.hook("wikipage.content").add(function markRights($content) {
  if ($content.attr("id") === "mw-content-text" || $content.hasClass("mw-changeslist")) {
    void markUserRights($content);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvb3B0aW9ucy5qc29uIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2NvcmUudHMiLCAic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcInZlcnNpb25cIjogMi4wXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrUmlnaHRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHFpdXdlbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWJtYXN0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ6ZW/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ermemVtycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdHRyYW5zd2lraTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbXBvcnRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflr7zlhaXogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yyv5YWl6ICFJyxcblx0XHR9KSxcblx0XHRwYXRyb2xsZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdGF1dG9yZXZpZXdlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHBhZ2UgcGF0cm9sJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdH0pLFxuXHRcdHNlbmlvcmVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZW5pb3IgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+i1hOa3see8luiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfos4fmt7Hnt6jogIUnLFxuXHRcdH0pLFxuXHRcdGV2ZW50c3BvbnNvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFdmVudCBTcG9uc29yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+a0u+WKqOe7hOe7h+iAhScsXG5cdFx0XHQnemgtaGFudCc6ICfmtLvli5XntYTnuZTogIUnLFxuXHRcdH0pLFxuXHRcdCdtYXNzbWVzc2FnZS1zZW5kZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ01hc3NNZXNzYWdlIHNlbmRlcicsXG5cdFx0XHQnemgtaGFucyc6ICflpKfph4/mtojmga/lj5HpgIHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5aSn6YeP6KiK5oGv5YKz6YCB6ICFJyxcblx0XHR9KSxcblx0XHRjb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0YXV0b2NvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBdXRvLWNvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iHquWKqOehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfoh6rli5Xnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGJvdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCb3QnLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo5Lq6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOS6uicsXG5cdFx0fSksXG5cdFx0Zmxvb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmxvb2RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw55So5oi2Jyxcblx0XHR9KSxcblx0XHQncm5yc3ZlcmlmeS1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcmVhbC1uYW1lIHZlcmlmaWNhdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrp7lkI3liLbpqozor4HosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a+m5ZCN5Yi26amX6K2J6LGB5YWNJyxcblx0XHR9KSxcblx0XHQnaXBibG9jay1leGVtcHQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gSVAgYmxvY2tzJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bCB56aB6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bCB6Y6W6LGB5YWNJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHVzZXJHcm91cE1hcCA9IG5ldyBNYXAoKTtcbmNvbnN0IGdsb2JhbFVzZXJHcm91cE1hcCA9IG5ldyBNYXAoKTtcblxuY29uc3QgZ2V0VXNlcm5hbWUgPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRpZiAoIXVybCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIHVybCk7XG5cblx0Y29uc3QgZGVjb2RlID0gKHN0cmluZzogc3RyaW5nLCByZXBsYWNlOiAoX3N0cmluZzogc3RyaW5nKSA9PiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG5cdFx0XHQoKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXBsYWNlKHN0cmluZykpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZShzdHJpbmcpLnJlcGxhY2UoLyUoPyFcXGQrKS9nLCAnJTI1Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKClcblx0XHQpO1xuXHR9O1xuXG5cdGlmICh1c2VybmFtZSkge1xuXHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWUsIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoJ1VzZXI6JywgJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHR9KTtcblx0fVxuXHRjb25zdCB1c2VybmFtZU1hdGNoOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHVybC5tYXRjaCgvXFwvd2lraVxcL1VzZXI6KC4rPykkLyk7XG5cdGlmICh1c2VybmFtZU1hdGNoPy5bMV0pIHtcblx0XHRyZXR1cm4gZGVjb2RlKHVzZXJuYW1lTWF0Y2hbMV0sIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gJyc7XG59O1xuXG5jb25zdCBxdWVyeVVzZXJHcm91cHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdHVzdXNlcnMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBxdWVyeUdsb2JhbFVzZXJHcm91cHMgPSBhc3luYyAodXNlcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdG1ldGE6ICdnbG9iYWx1c2VyaW5mbycsXG5cdFx0Z3VpdXNlcjogdXNlcixcblx0XHRndWlwcm9wOiAnZ3JvdXBzJyxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGRvbmUgPSAoJHVzZXJMaW5rczogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQkdXNlckxpbmtzLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmICgkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyA9IGdldFVzZXJuYW1lKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJyk7XG5cdFx0aWYgKCF1c2VybmFtZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBncm91cHMgPSAodXNlckdyb3VwTWFwLmdldCh1c2VybmFtZSkgYXMgc3RyaW5nW10gfCB1bmRlZmluZWQpID8/IFtdO1xuXHRcdGNvbnN0IGdsb2JhbEdyb3VwcyA9IChnbG9iYWxVc2VyR3JvdXBNYXAuZ2V0KHVzZXJuYW1lKSBhcyBzdHJpbmdbXSB8IHVuZGVmaW5lZCkgPz8gW107XG5cdFx0aWYgKCFncm91cHMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgJHN1cHM6IEpRdWVyeSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdnYWRnZXRzLW1hcmtyaWdodHMnKTtcblx0XHRmb3IgKGNvbnN0IGdyb3VwIG9mIHVuaXF1ZUFycmF5KFsuLi5ncm91cHMsIC4uLmdsb2JhbEdyb3Vwc10pKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGBnYWRnZXRzLW1hcmtyaWdodHNfXyR7Z3JvdXB9YDtcblx0XHRcdGlmICgkc3Vwcy5maW5kKCdzdXAnKS5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRzdXBzLmFwcGVuZChcblx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3FpdXdlblxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zdGV3YXJkXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2NoZWNrdXNlclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zdXBwcmVzc1xuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zeXNvcFxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19pbnRlcmZhY2UtYWRtaW5cblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fdGVtcGxhdGVlZGl0b3Jcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fdHJhbnN3aWtpXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3BhdHJvbGxlclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19hdXRvcmV2aWV3ZXJcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fc2VuaW9yZWRpdG9yXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2V2ZW50c3BvbnNvclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19tYXNzbWVzc2FnZS1zZW5kZXJcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fY29uZmlybWVkXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2F1dG9jb25maXJtZWRcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fYm90XG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2Zsb29kXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2lwYmxvY2stZXhlbXB0XG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3JucnN2ZXJpZnktZXhlbXB0XG5cdFx0XHRcdCQoJzxzdXA+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuXHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdGFsdDogZ2V0TWVzc2FnZShncm91cCBhcyBVc2VyUmlnaHRzKSxcblx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHQkZWxlbWVudC5hZnRlcigkc3Vwcyk7XG5cdH0pO1xufTtcblxuY29uc3QgbWFya1VzZXJSaWdodHMgPSBhc3luYyAoJGNvbnRlbnQ6IEpRdWVyeSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCAkdXNlckxpbmtzOiBKUXVlcnkgPSAkY29udGVudC5maW5kKCdhLm13LXVzZXJsaW5rOm5vdCgubXctYW5vbnVzZXJsaW5rKScpO1xuXHRsZXQgdXNlcnM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHF1ZXVlOiBBcnJheTx0eXBlb2YgdXNlcnM+ID0gW107XG5cblx0JHVzZXJMaW5rcy5lYWNoKChfaW5kZXg6IG51bWJlciwge3RleHRDb250ZW50fToge3RleHRDb250ZW50OiBzdHJpbmcgfCBudWxsfSk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHVzZXJMaW5rVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGV4dENvbnRlbnQ/LnRvU3RyaW5nKCk7XG5cdFx0aWYgKHVzZXJMaW5rVGV4dCkge1xuXHRcdFx0dXNlcnNbdXNlcnMubGVuZ3RoXSA9IHVzZXJMaW5rVGV4dDsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0fVxuXG5cdFx0Ly8g55So5oi35ZCN5YiX6KGo5Y676YeNXG5cdFx0dXNlcnMgPSB1bmlxdWVBcnJheSh1c2Vycyk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cblx0XHRpZiAodXNlcnMubGVuZ3RoID09PSA1MCkge1xuXHRcdFx0cXVldWVbcXVldWUubGVuZ3RoXSA9IHVzZXJzOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRcdHVzZXJzID0gW107XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAodXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB1c2VyczsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRmb3IgKGNvbnN0IHVzdXNlcnMgb2YgcXVldWUpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcXVlcnlVc2VyUmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJHcm91cHModXN1c2Vycyk7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0XHRjb25zdCB7dXNlcnM6IHF1ZXJ5VXNlcnN9OiB7dXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W119ID0gcXVlcnlVc2VyUmVzcG9uc2VbJ3F1ZXJ5J107XG5cblx0XHRcdGZvciAoY29uc3QgdXNlciBvZiBxdWVyeVVzZXJzKSB7XG5cdFx0XHRcdGlmICghdXNlciB8fCAhdXNlci5ncm91cHMpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR1c2VyR3JvdXBNYXAuc2V0KFxuXHRcdFx0XHRcdHVzZXIubmFtZSxcblx0XHRcdFx0XHR1c2VyLmdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIHVzdXNlcnMpIHtcblx0XHRcdFx0Y29uc3QgcXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlID0gYXdhaXQgcXVlcnlHbG9iYWxVc2VyR3JvdXBzKHVzZXIpO1xuXHRcdFx0XHRpZiAocXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlWydxdWVyeSddICYmIHF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZVsncXVlcnknXS5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0XHRcdGNvbnN0IHtncm91cHM6IGdsb2JhbGdyb3Vwc306IHtncm91cHM6IHN0cmluZ1tdfSA9IHF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZVsncXVlcnknXVxuXHRcdFx0XHRcdFx0Lmdsb2JhbHVzZXJpbmZvIGFzIHtncm91cHM6IHN0cmluZ1tdfTtcblx0XHRcdFx0XHRnbG9iYWxVc2VyR3JvdXBNYXAuc2V0KHVzZXIsIGdsb2JhbGdyb3Vwcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZG9uZSgkdXNlckxpbmtzKTtcblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG5cbmV4cG9ydCB7bWFya1VzZXJSaWdodHN9O1xuIiwgIi8qKlxuICogQGRlc2NyaXB0aW9uIOWcqOacgOi/keS/ruaUueOAgeebkeinhuWIl+ihqOOAgeadoeebruWOhuWPsuiusOW9leetieS9jee9ruS7peeJueauiuagvOW8j+aYvuekuuacieeJueauiuadg+mZkOeahOeUqOaIt1xuICovXG5pbXBvcnQge21hcmtVc2VyUmlnaHRzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya1JpZ2h0cygkY29udGVudCk6IHZvaWQge1xuXHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSA9PT0gJ213LWNvbnRlbnQtdGV4dCcgfHwgJGNvbnRlbnQuaGFzQ2xhc3MoJ213LWNoYW5nZXNsaXN0JykpIHtcblx0XHR2b2lkIG1hcmtVc2VyUmlnaHRzKCRjb250ZW50KTtcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxjQUFBQyxPQUFnQ0wsT0FBTyxDQUFFOztBQ0g3RCxJQUFBTSxxQkFBdUJKLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUssa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixtQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNMLG1CQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFlBQUEsR0FBV04sbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsV0FBQSxHQUFVUCxtQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxRQUFBLEdBQU9SLG1CQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxvQkFBQSxHQUFtQkosbUJBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREssaUJBQUEsR0FBZ0JULG1CQUFBRyxVQUFTO01BQ3hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RNLFlBQUEsR0FBV1YsbUJBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRE8sWUFBQSxHQUFXWCxtQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEUSxlQUFBLEdBQWNaLG1CQUFBRyxVQUFTO01BQ3RCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RTLGVBQUEsR0FBY2IsbUJBQUFHLFVBQVM7TUFDdEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFUsZUFBQSxHQUFjZCxtQkFBQUcsVUFBUztNQUN0QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHVCQUFBLEdBQXNCSixtQkFBQUcsVUFBUztNQUM5QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEVyxZQUFBLEdBQVdmLG1CQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RZLGdCQUFBLEdBQWVoQixtQkFBQUcsVUFBUztNQUN2QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEYSxNQUFBLEdBQUtqQixtQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RjLFFBQUEsR0FBT2xCLG1CQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxzQkFBQSxHQUFxQkosbUJBQUFHLFVBQVM7TUFDN0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxtQkFBQSxHQUFrQkosbUJBQUFHLFVBQVM7TUFDMUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTWUsZUFBZWxCLGdCQUFnQjtBQUVyQyxJQUFNbUIsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUN2R0EsSUFBQUMscUJBQTBCMUIsUUFBQSxpQkFBQTtBQUUxQixJQUFNMkIsZUFBZSxvQkFBSUMsSUFBSTtBQUM3QixJQUFNQyxxQkFBcUIsb0JBQUlELElBQUk7QUFFbkMsSUFBTUUsY0FBZUMsU0FBd0I7QUFDNUMsTUFBSSxDQUFDQSxLQUFLO0FBQ1QsV0FBTztFQUNSO0FBRUEsUUFBTUMsV0FBMEJDLEdBQUdDLEtBQUtDLGNBQWMsU0FBU0osR0FBRztBQUVsRSxRQUFNSyxTQUFTQSxDQUFDQyxRQUFnQkMsWUFBaUQ7QUFDaEYsV0FBT0Msb0JBQ0wsTUFBYztBQUNkLFVBQUk7QUFDSCxlQUFPQSxtQkFBbUJELFFBQVFELE1BQU0sQ0FBQztNQUMxQyxRQUFRO0FBQ1AsZUFBT0MsUUFBUUQsTUFBTSxFQUFFQyxRQUFRLGFBQWEsS0FBSztNQUNsRDtJQUNELEdBQUcsQ0FDSjtFQUNEO0FBRUEsTUFBSU4sVUFBVTtBQUNiLFdBQU9JLE9BQU9KLFVBQVdLLFlBQTJCO0FBQ25ELGFBQU9BLE9BQU9DLFFBQVEsU0FBUyxFQUFFLEVBQUVBLFFBQVEsTUFBTSxHQUFHO0lBQ3JELENBQUM7RUFDRjtBQUNBLFFBQU1FLGdCQUF5Q1QsSUFBSVUsTUFBTSxxQkFBcUI7QUFDOUUsTUFBSUQsa0JBQUEsUUFBQUEsa0JBQUEsVUFBQUEsY0FBZ0IsQ0FBQyxHQUFHO0FBQ3ZCLFdBQU9KLE9BQU9JLGNBQWMsQ0FBQyxHQUFJSCxZQUEyQjtBQUMzRCxhQUFPQSxPQUFPQyxRQUFRLE1BQU0sR0FBRztJQUNoQyxDQUFDO0VBQ0Y7QUFDQSxTQUFPO0FBQ1I7QUFFQSxJQUFNSSxrQkFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFrQixXQUFPQyxTQUErQjtBQUM3RCxVQUFNQyxTQUE4QjtNQUNuQ0Q7TUFDQUUsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOQyxRQUFRO0lBQ1Q7QUFDQSxVQUFNQyxXQUFBLE1BQWlCbkQsSUFBSW9ELEtBQUtQLE1BQU07QUFFdEMsV0FBT007RUFDUixDQUFBO0FBQUEsU0FBQSxTQVpNVixpQkFBQVksSUFBQTtBQUFBLFdBQUFYLEtBQUFZLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWNOLElBQU1DLHdCQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQWQsa0JBQXdCLFdBQU9lLE1BQWlCO0FBQ3JELFVBQU1iLFNBQVM7TUFDZEMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZlcsTUFBTTtNQUNOQyxTQUFTRjtNQUNURyxTQUFTO0lBQ1Y7QUFDQSxVQUFNVixXQUFBLE1BQWlCbkQsSUFBSW9ELEtBQUtQLE1BQU07QUFFdEMsV0FBT007RUFDUixDQUFBO0FBQUEsU0FBQSxTQVpNSyx1QkFBQU0sS0FBQTtBQUFBLFdBQUFMLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWNOLElBQU1RLE9BQVFDLGdCQUEwQztBQUN2REEsYUFBV0MsS0FBSyxDQUFDQyxRQUFnQkMsWUFBK0I7QUFBQSxRQUFBQyxnQkFBQUMsbUJBQUFDO0FBQy9ELFVBQU1DLFdBQW1CQyxFQUFFTCxPQUFPO0FBQ2xDLFFBQUlJLFNBQVNFLFFBQVEsSUFBSSxFQUFFQyxLQUFLLHFCQUFxQixFQUFFQyxRQUFRO0FBQzlEO0lBQ0Q7QUFDQSxVQUFNNUMsV0FBbUJGLGFBQUF1QyxpQkFBWUcsU0FBU0ssS0FBSyxNQUFNLE9BQUEsUUFBQVIsbUJBQUEsU0FBQUEsaUJBQUssRUFBRTtBQUNoRSxRQUFJLENBQUNyQyxVQUFVO0FBQ2Q7SUFDRDtBQUNBLFVBQU04QyxVQUFBUixvQkFBVTNDLGFBQWFvRCxJQUFJL0MsUUFBUSxPQUFBLFFBQUFzQyxzQkFBQSxTQUFBQSxvQkFBOEIsQ0FBQTtBQUN2RSxVQUFNVSxnQkFBQVQsd0JBQWdCMUMsbUJBQW1Ca0QsSUFBSS9DLFFBQVEsT0FBQSxRQUFBdUMsMEJBQUEsU0FBQUEsd0JBQThCLENBQUE7QUFDbkYsUUFBSSxDQUFDTyxRQUFRO0FBQ1o7SUFDRDtBQUNBLFVBQU1HLFFBQWdCUixFQUFFLFFBQVEsRUFBRVMsU0FBUyxvQkFBb0I7QUFBQSxRQUFBQyxZQUFBQyw0QkFDcEQsR0FBUzFELG1CQUFBMkQsYUFBWSxDQUFDLEdBQUdQLFFBQVEsR0FBR0UsWUFBWSxDQUFDLENBQUEsR0FBQU07QUFBQSxRQUFBO0FBQTVELFdBQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUF4QixRQUErRDtBQUFBLGNBQXBEeUIsUUFBQUgsTUFBQUk7QUFDVixjQUFNQyxZQUFBLHVCQUFBeEYsT0FBMkNzRixLQUFLO0FBQ3RELFlBQUlSLE1BQU1OLEtBQUssS0FBSyxFQUFFaUIsU0FBU0QsU0FBUyxHQUFHO0FBQzFDO1FBQ0Q7QUFDQVYsY0FBTVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXFCTHBCLEVBQUUsT0FBTyxFQUNQUyxTQUFTUyxTQUFTLEVBQ2xCZCxLQUFLO1lBQ0xpQixLQUFLdEUsV0FBV2lFLEtBQW1CO1lBQ25DTSxPQUFPdkUsV0FBV2lFLEtBQW1CO1VBQ3RDLENBQUM7UUFDSDtNQUNEO0lBQUEsU0FBQU8sS0FBQTtBQUFBYixnQkFBQWMsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQWIsZ0JBQUFlLEVBQUE7SUFBQTtBQUNBMUIsYUFBUzJCLE1BQU1sQixLQUFLO0VBQ3JCLENBQUM7QUFDRjtBQUVBLElBQU1tQixpQkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUF6RCxrQkFBaUIsV0FBTzBELFVBQW9DO0FBQ2pFLFVBQU1yQyxhQUFxQnFDLFNBQVMzQixLQUFLLHFDQUFxQztBQUM5RSxRQUFJNEIsUUFBa0IsQ0FBQTtBQUN0QixVQUFNQyxRQUE2QixDQUFBO0FBRW5DdkMsZUFBV0MsS0FBSyxDQUFDQyxRQUFnQjtNQUFDc0M7SUFBVyxNQUEwQztBQUN0RixZQUFNQyxlQUFtQ0QsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQSxTQUFBQSxZQUFhRSxTQUFTO0FBQy9ELFVBQUlELGNBQWM7QUFDakJILGNBQU1BLE1BQU0zQixNQUFNLElBQUk4QjtNQUN2QjtBQUdBSCxlQUFBLEdBQVE3RSxtQkFBQTJELGFBQVlrQixLQUFLO0FBRXpCLFVBQUlBLE1BQU0zQixXQUFXLElBQUk7QUFDeEI0QixjQUFNQSxNQUFNNUIsTUFBTSxJQUFJMkI7QUFDdEJBLGdCQUFRLENBQUE7TUFDVDtJQUNELENBQUM7QUFFRCxRQUFJQSxNQUFNM0IsU0FBUyxHQUFHO0FBQ3JCNEIsWUFBTUEsTUFBTTVCLE1BQU0sSUFBSTJCO0lBQ3ZCO0FBRUEsYUFBQUssS0FBQSxHQUFBQyxTQUFzQkwsT0FBQUksS0FBQUMsT0FBQWpDLFFBQUFnQyxNQUFPO0FBQTdCLFlBQVcvRCxVQUFBZ0UsT0FBQUQsRUFBQTtBQUNWLFVBQUk7QUFDSCxjQUFNRSxvQkFBQSxNQUEwQnBFLGdCQUFnQkcsT0FBTztBQUV2RCxjQUFNO1VBQUMwRCxPQUFPUTtRQUFVLElBQWlERCxrQkFBa0IsT0FBTztBQUFBLFlBQUFFLGFBQUE1QiwyQkFFL0UyQixVQUFBLEdBQUFFO0FBQUEsWUFBQTtBQUFuQixlQUFBRCxXQUFBekIsRUFBQSxHQUFBLEVBQUEwQixTQUFBRCxXQUFBeEIsRUFBQSxHQUFBeEIsUUFBK0I7QUFBQSxrQkFBcEJMLE9BQUFzRCxPQUFBdkI7QUFDVixnQkFBSSxDQUFDL0IsUUFBUSxDQUFDQSxLQUFLbUIsUUFBUTtBQUMxQjtZQUNEO0FBQ0FuRCx5QkFBYXVGLElBQ1p2RCxLQUFLd0QsTUFDTHhELEtBQUttQixPQUFPc0MsT0FBUWhELGFBQVk7QUFDL0IscUJBQU9BLFlBQVk7WUFDcEIsQ0FBQyxDQUNGO1VBQ0Q7UUFBQSxTQUFBNEIsS0FBQTtBQUFBZ0IscUJBQUFmLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUFnQixxQkFBQWQsRUFBQTtRQUFBO0FBQUEsWUFBQW1CLGFBQUFqQywyQkFFbUJ2QyxPQUFBLEdBQUF5RTtBQUFBLFlBQUE7QUFBbkIsZUFBQUQsV0FBQTlCLEVBQUEsR0FBQSxFQUFBK0IsU0FBQUQsV0FBQTdCLEVBQUEsR0FBQXhCLFFBQTRCO0FBQUEsa0JBQWpCTCxPQUFBMkQsT0FBQTVCO0FBQ1Ysa0JBQU02Qiw4QkFBQSxNQUFvQzlELHNCQUFzQkUsSUFBSTtBQUNwRSxnQkFBSTRELDRCQUE0QixPQUFPLEtBQUtBLDRCQUE0QixPQUFPLEVBQUVDLGdCQUFnQjtBQUNoRyxvQkFBTTtnQkFBQzFDLFFBQVEyQztjQUFZLElBQXdCRiw0QkFBNEIsT0FBTyxFQUNwRkM7QUFDRjNGLGlDQUFtQnFGLElBQUl2RCxNQUFNOEQsWUFBWTtZQUMxQztVQUNEO1FBQUEsU0FBQXpCLEtBQUE7QUFBQXFCLHFCQUFBcEIsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQXFCLHFCQUFBbkIsRUFBQTtRQUFBO0FBRUFsQyxhQUFLQyxVQUFVO01BQ2hCLFFBQVE7TUFBQztJQUNWO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0F0RE1tQyxnQkFBQXNCLEtBQUE7QUFBQSxXQUFBckIsTUFBQTlDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUN0SE52QixHQUFHMEYsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxXQUFXdkIsVUFBZ0I7QUFDbkUsTUFBSUEsU0FBU3pCLEtBQUssSUFBSSxNQUFNLHFCQUFxQnlCLFNBQVNWLFNBQVMsZ0JBQWdCLEdBQUc7QUFDckYsU0FBS1EsZUFBZUUsUUFBUTtFQUM3QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInFpdXdlbiIsICJsb2NhbGl6ZSIsICJlbiIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJzZW5pb3JlZGl0b3IiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInVzZXJHcm91cE1hcCIsICJNYXAiLCAiZ2xvYmFsVXNlckdyb3VwTWFwIiwgImdldFVzZXJuYW1lIiwgInVybCIsICJ1c2VybmFtZSIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiZGVjb2RlIiwgInN0cmluZyIsICJyZXBsYWNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VybmFtZU1hdGNoIiwgIm1hdGNoIiwgInF1ZXJ5VXNlckdyb3VwcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVzdXNlcnMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInVzcHJvcCIsICJyZXNwb25zZSIsICJwb3N0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAiX3JlZjIiLCAidXNlciIsICJtZXRhIiwgImd1aXVzZXIiLCAiZ3VpcHJvcCIsICJfeDIiLCAiZG9uZSIsICIkdXNlckxpbmtzIiwgImVhY2giLCAiX2luZGV4IiwgImVsZW1lbnQiLCAiXyRlbGVtZW50JGF0dHIiLCAiX3VzZXJHcm91cE1hcCRnZXQiLCAiX2dsb2JhbFVzZXJHcm91cE1hcCRnIiwgIiRlbGVtZW50IiwgIiQiLCAicGFyZW50cyIsICJmaW5kIiwgImxlbmd0aCIsICJhdHRyIiwgImdyb3VwcyIsICJnZXQiLCAiZ2xvYmFsR3JvdXBzIiwgIiRzdXBzIiwgImFkZENsYXNzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJ1bmlxdWVBcnJheSIsICJfc3RlcCIsICJzIiwgIm4iLCAiZ3JvdXAiLCAidmFsdWUiLCAiY2xhc3NOYW1lIiwgImhhc0NsYXNzIiwgImFwcGVuZCIsICJhbHQiLCAidGl0bGUiLCAiZXJyIiwgImUiLCAiZiIsICJhZnRlciIsICJtYXJrVXNlclJpZ2h0cyIsICJfcmVmMyIsICIkY29udGVudCIsICJ1c2VycyIsICJxdWV1ZSIsICJ0ZXh0Q29udGVudCIsICJ1c2VyTGlua1RleHQiLCAidG9TdHJpbmciLCAiX2kiLCAiX3F1ZXVlIiwgInF1ZXJ5VXNlclJlc3BvbnNlIiwgInF1ZXJ5VXNlcnMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAic2V0IiwgIm5hbWUiLCAiZmlsdGVyIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZSIsICJnbG9iYWx1c2VyaW5mbyIsICJnbG9iYWxncm91cHMiLCAiX3gzIiwgImhvb2siLCAiYWRkIiwgIm1hcmtSaWdodHMiXQp9Cg==
