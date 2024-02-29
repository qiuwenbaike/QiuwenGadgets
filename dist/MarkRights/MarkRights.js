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
//! src/MarkRights/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    qiuwen: (0, import_ext_gadget.localize)({
      en: "Webmaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    steward: (0, import_ext_gadget.localize)({
      en: "Steward",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    checkuser: (0, import_ext_gadget.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    suppress: (0, import_ext_gadget.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    transwiki: (0, import_ext_gadget.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autoreviewer: (0, import_ext_gadget.localize)({
      en: "Exempted from page patrol",
      "zh-hans": "巡查豁免",
      "zh-hant": "巡查豁免"
    }),
    senioreditor: (0, import_ext_gadget.localize)({
      en: "Senior Editor",
      "zh-hans": "资深编者",
      "zh-hant": "資深編者"
    }),
    eventsponsor: (0, import_ext_gadget.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    bot: (0, import_ext_gadget.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    "ipblock-exempt": (0, import_ext_gadget.localize)({
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
var import_ext_gadget2 = require("ext.gadget.Util");
var groups = {
  // 全站管理型权限
  qiuwen: [],
  steward: [],
  checkuser: [],
  suppress: [],
  sysop: [],
  "interface-admin": [],
  templateeditor: [],
  transwiki: [],
  // 页面管理型权限
  patroller: [],
  autoreviewer: [],
  senioreditor: [],
  // 大量操作型权限
  eventsponsor: [],
  "massmessage-sender": [],
  // 确认权限
  confirmed: [],
  autoconfirmed: [],
  // 机器权限
  bot: [],
  flood: [],
  // 豁免
  "ipblock-exempt": [],
  "rnrsverify-exempt": []
};
var markUserRights = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ($content) {
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
      users = [...new Set(users)];
      if (users.length === 50) {
        queue[queue.length] = users;
        users = [];
      }
    });
    if (users.length > 0) {
      queue[queue.length] = users;
    }
    const getUsername = (url) => {
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
    const done = () => {
      $userLinks.each((_index, element) => {
        var _$element$attr;
        const $element = $(element);
        if ($element.parents("li").find(".gadgets-markrights").length) {
          return;
        }
        const username = getUsername((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
        if (!username) {
          return;
        }
        const $sups = $("<span>").addClass("gadgets-markrights");
        for (const group in groups) {
          var _groups$group;
          if (!Object.hasOwn(groups, group)) {
            continue;
          }
          const groupsGroup = (_groups$group = groups[group]) !== null && _groups$group !== void 0 ? _groups$group : [];
          if (!groupsGroup.includes(username)) {
            continue;
          }
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
        $element.after($sups);
      });
    };
    const api = (0, import_ext_gadget2.initMwApi)("MarkRights/1.1");
    for (var _i = 0, _queue = queue; _i < _queue.length; _i++) {
      var _response$query$users, _response$query;
      const ususers = _queue[_i];
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        list: "users",
        usprop: "groups",
        ususers
      };
      const response = yield api.get(params);
      const _users = (_response$query$users = (_response$query = response["query"]) === null || _response$query === void 0 ? void 0 : _response$query.users) !== null && _response$query$users !== void 0 ? _response$query$users : [];
      var _iterator = _createForOfIteratorHelper(_users), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const user = _step.value;
          if (!user || !user.groups) {
            continue;
          }
          for (const group in groups) {
            if (!Object.hasOwn(groups, group)) {
              continue;
            }
            const groupsGroup = groups[group];
            if (user.groups.includes(group)) {
              groupsGroup[groupsGroup.length] = user.name;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      done();
    }
  });
  return function markUserRights2(_x) {
    return _ref.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvY29yZS50cyIsICJzcmMvTWFya1JpZ2h0cy9NYXJrUmlnaHRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0cWl1d2VuOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1dlYm1hc3RlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnq5nplb8nLFxuXHRcdFx0J3poLWhhbnQnOiAn56uZ6ZW3Jyxcblx0XHR9KSxcblx0XHRzdGV3YXJkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N0ZXdhcmQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6KOB5Yaz5aeU5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ijgeaxuuWnlOWToScsXG5cdFx0fSksXG5cdFx0Y2hlY2t1c2VyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NoZWNrVXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnlKjmiLfmn6XmoLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn55So5oi25p+l5qC4Jyxcblx0XHR9KSxcblx0XHRzdXBwcmVzczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdmVyc2lnaHRlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnm5HnnaPlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn55uj552j5ZOhJyxcblx0XHR9KSxcblx0XHRzeXNvcDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTeXNPcCcsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHQnaW50ZXJmYWNlLWFkbWluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnRlcmZhY2UgQWRtaW5pc3RyYXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfnlYzpnaLnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LuL6Z2i566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHR0ZW1wbGF0ZWVkaXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUZW1wbGF0ZSBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5qih5p2/57yW6L6R5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+aooeadv+e3qOi8r+WToScsXG5cdFx0fSksXG5cdFx0dHJhbnN3aWtpOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ltcG9ydGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvvOWFpeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfljK/lhaXogIUnLFxuXHRcdH0pLFxuXHRcdHBhdHJvbGxlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0YXV0b3Jldmlld2VyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4ZW1wdGVkIGZyb20gcGFnZSBwYXRyb2wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeixgeWFjScsXG5cdFx0fSksXG5cdFx0c2VuaW9yZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlbmlvciBFZGl0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn6LWE5rex57yW6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+izh+a3see3qOiAhScsXG5cdFx0fSksXG5cdFx0ZXZlbnRzcG9uc29yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V2ZW50IFNwb25zb3InLFxuXHRcdFx0J3poLWhhbnMnOiAn5rS75Yqo57uE57uH6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+a0u+WLlee1hOe5lOiAhScsXG5cdFx0fSksXG5cdFx0J21hc3NtZXNzYWdlLXNlbmRlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTWFzc01lc3NhZ2Ugc2VuZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+Wkp+mHj+a2iOaBr+WPkemAgeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICflpKfph4/oqIrmga/lgrPpgIHogIUnLFxuXHRcdH0pLFxuXHRcdGNvbmZpcm1lZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRhdXRvY29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0F1dG8tY29uZmlybWVkIHVzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn6Ieq5Yqo56Gu6K6k55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iHquWLleeiuuiqjeeUqOaIticsXG5cdFx0fSksXG5cdFx0Ym90OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JvdCcsXG5cdFx0XHQnemgtaGFucyc6ICfmnLrlmajkuronLFxuXHRcdFx0J3poLWhhbnQnOiAn5qmf5qKw5Lq6Jyxcblx0XHR9KSxcblx0XHRmbG9vZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGbG9vZGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDnlKjmiLYnLFxuXHRcdH0pLFxuXHRcdCdybnJzdmVyaWZ5LWV4ZW1wdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSByZWFsLW5hbWUgdmVyaWZpY2F0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WunuWQjeWItumqjOivgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICflr6blkI3liLbpqZforYnosYHlhY0nLFxuXHRcdH0pLFxuXHRcdCdpcGJsb2NrLWV4ZW1wdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBJUCBibG9ja3MnLFxuXHRcdFx0J3poLWhhbnMnOiAnSVDlsIHnpoHosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAnSVDlsIHpjpbosYHlhY0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgdHlwZSB7VXNlclJpZ2h0c30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgZ3JvdXBzOiBSZWNvcmQ8VXNlclJpZ2h0cywgc3RyaW5nW10+ID0ge1xuXHQvLyDlhajnq5nnrqHnkIblnovmnYPpmZBcblx0cWl1d2VuOiBbXSxcblx0c3Rld2FyZDogW10sXG5cdGNoZWNrdXNlcjogW10sXG5cdHN1cHByZXNzOiBbXSxcblx0c3lzb3A6IFtdLFxuXHQnaW50ZXJmYWNlLWFkbWluJzogW10sXG5cdHRlbXBsYXRlZWRpdG9yOiBbXSxcblx0dHJhbnN3aWtpOiBbXSxcblx0Ly8g6aG16Z2i566h55CG5Z6L5p2D6ZmQXG5cdHBhdHJvbGxlcjogW10sXG5cdGF1dG9yZXZpZXdlcjogW10sXG5cdHNlbmlvcmVkaXRvcjogW10sXG5cdC8vIOWkp+mHj+aTjeS9nOWei+adg+mZkFxuXHRldmVudHNwb25zb3I6IFtdLFxuXHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogW10sXG5cdC8vIOehruiupOadg+mZkFxuXHRjb25maXJtZWQ6IFtdLFxuXHRhdXRvY29uZmlybWVkOiBbXSxcblx0Ly8g5py65Zmo5p2D6ZmQXG5cdGJvdDogW10sXG5cdGZsb29kOiBbXSxcblx0Ly8g6LGB5YWNXG5cdCdpcGJsb2NrLWV4ZW1wdCc6IFtdLFxuXHQncm5yc3ZlcmlmeS1leGVtcHQnOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXJrVXNlclJpZ2h0cyA9IGFzeW5jICgkY29udGVudDogSlF1ZXJ5KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0ICR1c2VyTGlua3M6IEpRdWVyeSA9ICRjb250ZW50LmZpbmQoJ2EubXctdXNlcmxpbms6bm90KC5tdy1hbm9udXNlcmxpbmspJyk7XG5cdGxldCB1c2Vyczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgcXVldWU6IEFycmF5PHR5cGVvZiB1c2Vycz4gPSBbXTtcblx0JHVzZXJMaW5rcy5lYWNoKChfaW5kZXg6IG51bWJlciwge3RleHRDb250ZW50fToge3RleHRDb250ZW50OiBzdHJpbmcgfCBudWxsfSk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHVzZXJMaW5rVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGV4dENvbnRlbnQ/LnRvU3RyaW5nKCk7XG5cdFx0aWYgKHVzZXJMaW5rVGV4dCkge1xuXHRcdFx0dXNlcnNbdXNlcnMubGVuZ3RoXSA9IHVzZXJMaW5rVGV4dDsgLy8gUmVwbGFjZSBgdXNlcnMucHVzaCh1c2VyTGlua1RleHQpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0fVxuXHRcdHVzZXJzID0gWy4uLm5ldyBTZXQodXNlcnMpXTtcblx0XHRpZiAodXNlcnMubGVuZ3RoID09PSA1MCkge1xuXHRcdFx0cXVldWVbcXVldWUubGVuZ3RoXSA9IHVzZXJzOyAvLyBSZXBsYWNlIGBxdWV1ZS5wdXNoKHVzZXJzKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0dXNlcnMgPSBbXTtcblx0XHR9XG5cdH0pO1xuXHRpZiAodXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB1c2VyczsgLy8gUmVwbGFjZSBgcXVldWUucHVzaCh1c2VycylgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0fVxuXHRjb25zdCBnZXRVc2VybmFtZSA9ICh1cmw6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0aWYgKCF1cmwpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJywgdXJsKTtcblx0XHRjb25zdCBkZWNvZGUgPSAoc3RyaW5nOiBzdHJpbmcsIHJlcGxhY2U6IChfc3RyaW5nOiBzdHJpbmcpID0+IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0XHQoKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVwbGFjZShzdHJpbmcpKTtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdHJldHVybiByZXBsYWNlKHN0cmluZykucmVwbGFjZSgvJSg/IVxcZCspL2csICclMjUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKClcblx0XHRcdCk7XG5cdFx0fTtcblx0XHRpZiAodXNlcm5hbWUpIHtcblx0XHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWUsIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgnVXNlcjonLCAnJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNvbnN0IHVzZXJuYW1lTWF0Y2g6IFJlZ0V4cE1hdGNoQXJyYXkgfCBudWxsID0gdXJsLm1hdGNoKC9cXC93aWtpXFwvVXNlcjooLis/KSQvKTtcblx0XHRpZiAodXNlcm5hbWVNYXRjaD8uWzFdKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlKHVzZXJuYW1lTWF0Y2hbMV0sIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblx0Y29uc3QgZG9uZSA9ICgpOiB2b2lkID0+IHtcblx0XHQkdXNlckxpbmtzLmVhY2goKF9pbmRleDogbnVtYmVyLCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRpZiAoJGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgPSBnZXRVc2VybmFtZSgkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJycpO1xuXHRcdFx0aWYgKCF1c2VybmFtZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkc3VwczogSlF1ZXJ5ID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2dhZGdldHMtbWFya3JpZ2h0cycpO1xuXHRcdFx0Zm9yIChjb25zdCBncm91cCBpbiBncm91cHMpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKGdyb3VwcywgZ3JvdXApKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZ3JvdXBzR3JvdXA6IHN0cmluZ1tdID0gZ3JvdXBzW2dyb3VwIGFzIG5ldmVyXSA/PyBbXTtcblx0XHRcdFx0aWYgKCFncm91cHNHcm91cC5pbmNsdWRlcyh1c2VybmFtZSkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGBnYWRnZXRzLW1hcmtyaWdodHNfXyR7Z3JvdXB9YDtcblx0XHRcdFx0aWYgKCRzdXBzLmZpbmQoJ3N1cCcpLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0JHN1cHMuYXBwZW5kKFxuXHRcdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3FpdXdlblxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3N0ZXdhcmRcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19jaGVja3VzZXJcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zdXBwcmVzc1xuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3N5c29wXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19faW50ZXJmYWNlLWFkbWluXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fdGVtcGxhdGVlZGl0b3Jcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX190cmFuc3dpa2lcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19wYXRyb2xsZXJcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19hdXRvcmV2aWV3ZXJcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zZW5pb3JlZGl0b3Jcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19ldmVudHNwb25zb3Jcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19tYXNzbWVzc2FnZS1zZW5kZXJcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19jb25maXJtZWRcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19hdXRvY29uZmlybWVkXG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fYm90XG5cdFx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fZmxvb2Rcblx0XHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19pcGJsb2NrLWV4ZW1wdFxuXHRcdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3JucnN2ZXJpZnktZXhlbXB0XG5cdFx0XHRcdFx0JCgnPHN1cD4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKGNsYXNzTmFtZSlcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0YWx0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZShncm91cCBhcyBVc2VyUmlnaHRzKSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHQkZWxlbWVudC5hZnRlcigkc3Vwcyk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdNYXJrUmlnaHRzLzEuMScpO1xuXHRmb3IgKGNvbnN0IHVzdXNlcnMgb2YgcXVldWUpIHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdFx0dXN1c2Vycyxcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBfdXNlcnM6IHtncm91cHM6IHN0cmluZzsgbmFtZTogc3RyaW5nfVtdID0gcmVzcG9uc2VbJ3F1ZXJ5J10/LnVzZXJzID8/IFtdO1xuXHRcdGZvciAoY29uc3QgdXNlciBvZiBfdXNlcnMpIHtcblx0XHRcdGlmICghdXNlciB8fCAhdXNlci5ncm91cHMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwIGluIGdyb3Vwcykge1xuXHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24oZ3JvdXBzLCBncm91cCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBncm91cHNHcm91cDogc3RyaW5nW10gPSBncm91cHNbZ3JvdXAgYXMgbmV2ZXJdIGFzIHN0cmluZ1tdO1xuXHRcdFx0XHRpZiAodXNlci5ncm91cHMuaW5jbHVkZXMoZ3JvdXApKSB7XG5cdFx0XHRcdFx0Z3JvdXBzR3JvdXBbZ3JvdXBzR3JvdXAubGVuZ3RoXSA9IHVzZXIubmFtZTsgLy8gUmVwbGFjZSBgZ3JvdXBzR3JvdXAucHVzaCh1c2VyLm5hbWUpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZG9uZSgpO1xuXHR9XG59O1xuIiwgIi8qKlxuICogQGRlc2NyaXB0aW9uIOWcqOacgOi/keS/ruaUueOAgeebkeinhuWIl+ihqOOAgeadoeebruWOhuWPsuiusOW9leetieS9jee9ruS7peeJueauiuagvOW8j+aYvuekuuacieeJueauiuadg+mZkOeahOeUqOaIt1xuICovXG5pbXBvcnQge21hcmtVc2VyUmlnaHRzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbWFya1JpZ2h0cygkY29udGVudCk6IHZvaWQge1xuXHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSA9PT0gJ213LWNvbnRlbnQtdGV4dCcgfHwgJGNvbnRlbnQuaGFzQ2xhc3MoJ213LWNoYW5nZXNsaXN0JykpIHtcblx0XHR2b2lkIG1hcmtVc2VyUmlnaHRzKCRjb250ZW50KTtcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAi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LENBQUNELFFBQVEsQ0FBQ0EsS0FBS3ZFLFFBQVE7QUFDMUI7VUFDRDtBQUNBLHFCQUFXcUMsU0FBU3JDLFFBQVE7QUFDM0IsZ0JBQUksQ0FBQ3VDLE9BQU9DLE9BQU94QyxRQUFRcUMsS0FBSyxHQUFHO0FBQ2xDO1lBQ0Q7QUFDQSxrQkFBTUksY0FBd0J6QyxPQUFPcUMsS0FBYztBQUNuRCxnQkFBSWtDLEtBQUt2RSxPQUFPMEMsU0FBU0wsS0FBSyxHQUFHO0FBQ2hDSSwwQkFBWUEsWUFBWTNCLE1BQU0sSUFBSXlELEtBQUtFO1lBQ3hDO1VBQ0Q7UUFDRDtNQUFBLFNBQUFDLEtBQUE7QUFBQVIsa0JBQUFTLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFSLGtCQUFBVSxFQUFBO01BQUE7QUFDQWhELFdBQUs7SUFDTjtFQUNELENBQUE7QUFBQSxTQUFBLFNBbklhM0IsZ0JBQUE0RSxJQUFBO0FBQUEsV0FBQTNFLEtBQUE0RSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDM0JiNUQsR0FBRzZELEtBQUssa0JBQWtCLEVBQUVDLElBQUksU0FBU0MsV0FBVzlFLFVBQWdCO0FBQ25FLE1BQUlBLFNBQVM4QixLQUFLLElBQUksTUFBTSxxQkFBcUI5QixTQUFTeUMsU0FBUyxnQkFBZ0IsR0FBRztBQUNyRixTQUFLNUMsZUFBZUcsUUFBUTtFQUM3QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInFpdXdlbiIsICJsb2NhbGl6ZSIsICJlbiIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJzZW5pb3JlZGl0b3IiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdyb3VwcyIsICJtYXJrVXNlclJpZ2h0cyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIiRjb250ZW50IiwgIiR1c2VyTGlua3MiLCAiZmluZCIsICJ1c2VycyIsICJxdWV1ZSIsICJlYWNoIiwgIl9pbmRleCIsICJ0ZXh0Q29udGVudCIsICJ1c2VyTGlua1RleHQiLCAidG9TdHJpbmciLCAibGVuZ3RoIiwgIlNldCIsICJnZXRVc2VybmFtZSIsICJ1cmwiLCAidXNlcm5hbWUiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImRlY29kZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlcm5hbWVNYXRjaCIsICJtYXRjaCIsICJkb25lIiwgImVsZW1lbnQiLCAiXyRlbGVtZW50JGF0dHIiLCAiJGVsZW1lbnQiLCAiJCIsICJwYXJlbnRzIiwgImF0dHIiLCAiJHN1cHMiLCAiYWRkQ2xhc3MiLCAiZ3JvdXAiLCAiX2dyb3VwcyRncm91cCIsICJPYmplY3QiLCAiaGFzT3duIiwgImdyb3Vwc0dyb3VwIiwgImluY2x1ZGVzIiwgImNsYXNzTmFtZSIsICJjb25jYXQiLCAiaGFzQ2xhc3MiLCAiYXBwZW5kIiwgImFsdCIsICJ0aXRsZSIsICJhZnRlciIsICJhcGkiLCAiaW5pdE13QXBpIiwgIl9pIiwgIl9xdWV1ZSIsICJfcmVzcG9uc2UkcXVlcnkkdXNlcnMiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgInVzdXNlcnMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInVzcHJvcCIsICJyZXNwb25zZSIsICJnZXQiLCAiX3VzZXJzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAidXNlciIsICJ2YWx1ZSIsICJuYW1lIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImhvb2siLCAiYWRkIiwgIm1hcmtSaWdodHMiXQp9Cg==
