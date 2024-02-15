/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-SousPages.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-CleanDeleteReasons.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Group-user_JS}
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

// dist/Group-user_JS/Group-user_JS.js
//! src/Group-user_JS/modules/constant.ts
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
var WG_ACTION = mw.config.get("wgAction");
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName");
var WG_CATEGORIES = mw.config.get("wgCategories");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/Group-user_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Log: (0, import_ext_gadget.localize)({
      en: "Log",
      ja: "ログ",
      "zh-hans": "日志",
      "zh-hant": "日誌"
    }),
    Subpages: (0, import_ext_gadget.localize)({
      en: "Subpage",
      ja: "子ページ",
      "zh-hans": "子页面",
      "zh-hant": "子頁面"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Group-user_JS/modules/addSubpageAndLog.ts
var addLog = () => {
  if ([-1, 2, 3].includes(WG_NAMESPACE_NUMBER)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:Logs", {
    page: WG_PAGE_NAME
  }), getMessage("Log"), "t-log");
};
var addSubpage = () => {
  if ([-1, 0, 14].includes(WG_NAMESPACE_NUMBER)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:PrefixIndex/".concat(WG_PAGE_NAME)), getMessage("Subpages"), "t-subpage");
};
//! src/Group-user_JS/modules/fixSummary.ts
var fixSummary = ($body) => {
  switch (WG_CANONICAL_SPECIAL_PAGE_NAME) {
    case "FileImporter-SpecialPage":
      $body.find("input[name=intendedRevisionSummary]").val("导入自[[commons:File:".concat($body.find("h2.mw-importfile-header-title").html(), "|此处]]［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；文件许可请参见页面描述］"));
      break;
    case "Import":
      $body.find("input[name=usernamePrefix]").val("zhwiki");
      $body.find("#mw-import-upload-form input[name=log-comment]").val("导入自[[zhwiki:|此网站]]的同名页面［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]］");
      $body.find("#mw-import-interwiki-form input[name=log-comment]").val("［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史］");
      $body.find("input[name=assignKnownUsers]").prop("checked", true);
      break;
    case "MassEditRegex":
      $body.find("#wpSummaryLabel").html($body.find("#wpSummaryLabel").text().replace(/\[\[#\.\|(.+?)]]/g, "$1"));
      break;
    case "ReplaceText":
      $body.find("input[name=doAnnounce]").prop({
        checked: false,
        disabled: true
      });
      break;
  }
  if (WG_ACTION === "delete") {
    const $wpReason = $body.find("#wpReason");
    if (!$wpReason.length) {
      return;
    }
    const autoSummaryRegExp = /(内容|page was empty|content before blanking was)/i;
    if (autoSummaryRegExp.test(String($wpReason.val()))) {
      $wpReason.val("");
    }
  }
};
//! src/Group-user_JS/Group-user_JS.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/Group-user_JS/modules/linkSearchEditButton.ts
var linkSearchEditButton = ($body) => {
  if (mw.config.get("wgCanonicalSpecialPageName") !== "LinkSearch") {
    return;
  }
  var _iterator = _createForOfIteratorHelper($body.find('.mw-spcontent a[href^="/wiki"]')), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      $("<span>").append(" （", $("<a>").attr("href", "".concat(element.href, "?action=edit")).text(getMessage("Edit")), "）").insertAfter(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/Group-user_JS/modules/loadGadgetEditForm.ts
var usingEditFormJS = () => {
  void mw.loader.using(["ext.gadget.EditForm", "ext.gadget.EditForm_JS", "ext.gadget.DefaultSummaries"]);
};
var loadGadgetEditForm = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
      usingEditFormJS();
    } else {
      yield mw.loader.using("ext.visualEditor.desktopArticleTarget.init");
      mw.libs["ve"].addPlugin(() => {
        usingEditFormJS();
      });
    }
  });
  return function loadGadgetEditForm2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/Group-user_JS/modules/loadRNRSHashGlobally.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var loadRNRSHashGlobally = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const optionnames = ["rnrsverify", "rnrsverifytime", "rnrsverifyhash"];
    yield mw.loader.using(["mediawiki.api", "mediawiki.ForeignApi"]);
    const localApi = (0, import_ext_gadget2.initMwApi)("loadRNRSHashGlobally");
    const foreignApi = (0, import_ext_gadget2.initMwApi)("loadRNRSHashGlobally", "https://www.qiuwenbaike.cn/api.php");
    const localData = yield localApi.get({
      action: "query",
      meta: "userinfo",
      uiprop: "options"
    });
    const foreignData = yield foreignApi.get({
      action: "query",
      meta: "userinfo",
      uiprop: "options"
    });
    const localOptions = localData["query"].userinfo.options;
    const foreignOptions = foreignData["query"].userinfo.options;
    for (var _i = 0, _optionnames = optionnames; _i < _optionnames.length; _i++) {
      const optionname = _optionnames[_i];
      if (!localOptions[optionname] && foreignOptions[optionname]) {
        yield foreignApi.postWithEditToken({
          action: "globalpreferences",
          optionname,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          optionvalue: foreignOptions[optionname]
        });
      }
    }
  });
  return function loadRNRSHashGlobally2() {
    return _ref2.apply(this, arguments);
  };
}();
//! src/Group-user_JS/modules/smartEditIntro.ts
var smartEditIntro = ($body) => {
  if (!WG_CATEGORIES) {
    return;
  }
  const $target = $body.find(".mw-editsection, #ca-edit, #ca-addsection").find("a");
  const addEditIntro = (name) => {
    var _iterator2 = _createForOfIteratorHelper($target), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
        element.href = "".concat(element.href, "&editintro=").concat(name);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  switch (WG_NAMESPACE_NUMBER) {
    case 0:
      if (WG_CATEGORIES.includes("全部消歧义页面")) {
        addEditIntro("Template:Disambig_editintro");
      }
      if (WG_CATEGORIES.includes("在世人物")) {
        addEditIntro("Template:BLP_editintro");
      }
      if (WG_CATEGORIES.some((element) => {
        return /抗日?[战戰][争爭]?[牺犧]牲|烈士|[战戰][斗鬥鬦]英雄|英雄?模[範范]?|英雄?烈士?|人民(教育家|[艺藝][术術]家|科[学學]家|英雄|楷模)|共和[国國][勋勳]章|[七八]一[勋勳]章[獲获]得者|[一特]等功臣/.test(element);
      })) {
        addEditIntro("Template:BLP_editintro");
      }
      break;
    case 4:
      if (WG_CATEGORIES.includes("求闻百科方针完整列表")) {
        addEditIntro("Template:Policy_editintro");
      }
      break;
    case 8:
    case 12: {
      if (WG_CATEGORIES.includes("CC-BY-NC-SA-4.0")) {
        addEditIntro("Template:NonCommercial_editintro");
      }
      if (WG_CATEGORIES.includes("GPL-3.0")) {
        addEditIntro("Template:GPL-3.0_editintro");
      }
      if (WG_CATEGORIES.includes("GPL-2.0-or-later")) {
        addEditIntro("Template:GPL-2.0-or-later_editintro");
      }
      if (WG_CATEGORIES.includes("MIT许可证")) {
        addEditIntro("Template:MIT_editintro");
      }
      const $copywarn = $body.find("#editpage-copywarn");
      const $editintro = $body.find(".mw-editintro");
      if (IS_WG_EDIT_OR_SUBMIT_ACTION && $copywarn && $editintro) {
        $editintro.appendTo($copywarn);
      }
      break;
    }
  }
};
//! src/Group-user_JS/modules/smartNewSection.ts
var smartNewSection = ($body) => {
  if (!mw.user.options.get("discussiontools-newtopictool") || !mw.user.options.get("discussiontools-betaenable")) {
    const $caTalk = $body.find("#ca-talk");
    if ($caTalk.hasClass("new") && WG_NAMESPACE_NUMBER !== 2) {
      const $a = $("a:first", $caTalk);
      $a.attr("href", "".concat($a.attr("href"), "&section=new"));
    }
  }
};
//! src/Group-user_JS/Group-user_JS.ts
(function userJS() {
  if (mw.config.get("wgUserJSInstalled")) {
    return;
  }
  mw.config.set("wgUserJSInstalled", true);
  void loadGadgetEditForm();
  void (0, import_ext_gadget3.getBody)().then(($body) => {
    addLog();
    addSubpage();
    fixSummary($body);
    linkSearchEditButton($body);
    smartEditIntro($body);
    smartNewSection($body);
  });
  void loadRNRSHashGlobally();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9hZGRTdWJwYWdlQW5kTG9nLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvZml4U3VtbWFyeS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9Hcm91cC11c2VyX0pTLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvbGlua1NlYXJjaEVkaXRCdXR0b24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9sb2FkR2FkZ2V0RWRpdEZvcm0udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9sb2FkUk5SU0hhc2hHbG9iYWxseS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3NtYXJ0RWRpdEludHJvLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvc21hcnROZXdTZWN0aW9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuY29uc3QgV0dfQ0FURUdPUklFUzogc3RyaW5nW10gPSBtdy5jb25maWcuZ2V0KCd3Z0NhdGVnb3JpZXMnKTtcbmNvbnN0IFdHX05BTUVTUEFDRV9OVU1CRVI6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJyk7XG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblxuY29uc3QgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OOiBib29sZWFuID0gWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKFdHX0FDVElPTik7XG5cbmV4cG9ydCB7XG5cdElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTixcblx0V0dfQUNUSU9OLFxuXHRXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUsXG5cdFdHX0NBVEVHT1JJRVMsXG5cdFdHX05BTUVTUEFDRV9OVU1CRVIsXG5cdFdHX1BBR0VfTkFNRSxcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCcsXG5cdFx0XHRqYTogJ+e3qOmbhicsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6LyvJyxcblx0XHR9KSxcblx0XHRMb2c6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nJyxcblx0XHRcdGphOiAn44Ot44KwJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXpeW/lycsXG5cdFx0XHQnemgtaGFudCc6ICfml6XoqownLFxuXHRcdH0pLFxuXHRcdFN1YnBhZ2VzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N1YnBhZ2UnLFxuXHRcdFx0amE6ICflrZDjg5rjg7zjgrgnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Q6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtkOmggemdoicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUiwgV0dfUEFHRV9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYWRkTG9nID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoWy0xLCAyLCAzXS5pbmNsdWRlcyhXR19OQU1FU1BBQ0VfTlVNQkVSKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0J3AtdGInLFxuXHRcdG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkxvZ3MnLCB7XG5cdFx0XHRwYWdlOiBXR19QQUdFX05BTUUsXG5cdFx0fSksXG5cdFx0Z2V0TWVzc2FnZSgnTG9nJyksXG5cdFx0J3QtbG9nJ1xuXHQpO1xufTtcblxuLyog5ZCR5L6n6L655qCP5re75Yqg4oCc5a2Q6aG16Z2i4oCd6I+c5Y2VICovXG5jb25zdCBhZGRTdWJwYWdlID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoWy0xLCAwLCAxNF0uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLXRiJyxcblx0XHRtdy51dGlsLmdldFVybChgU3BlY2lhbDpQcmVmaXhJbmRleC8ke1dHX1BBR0VfTkFNRX1gKSxcblx0XHRnZXRNZXNzYWdlKCdTdWJwYWdlcycpLFxuXHRcdCd0LXN1YnBhZ2UnXG5cdCk7XG59O1xuXG5leHBvcnQge2FkZExvZywgYWRkU3VicGFnZX07XG4iLCAiaW1wb3J0IHtXR19BQ1RJT04sIFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IGZpeFN1bW1hcnkgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdHN3aXRjaCAoV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FKSB7XG5cdFx0Y2FzZSAnRmlsZUltcG9ydGVyLVNwZWNpYWxQYWdlJzpcblx0XHRcdCRib2R5XG5cdFx0XHRcdC5maW5kKCdpbnB1dFtuYW1lPWludGVuZGVkUmV2aXNpb25TdW1tYXJ5XScpXG5cdFx0XHRcdC52YWwoXG5cdFx0XHRcdFx0YOWvvOWFpeiHqltbY29tbW9uczpGaWxlOiR7JGJvZHlcblx0XHRcdFx0XHRcdC5maW5kKCdoMi5tdy1pbXBvcnRmaWxlLWhlYWRlci10aXRsZScpXG5cdFx0XHRcdFx0XHQuaHRtbCgpfXzmraTlpIRdXe+8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5paH5Lu26K645Y+v6K+35Y+C6KeB6aG16Z2i5o+P6L+w77y9YFxuXHRcdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnSW1wb3J0Jzpcblx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9dXNlcm5hbWVQcmVmaXhdJykudmFsKCd6aHdpa2knKTtcblx0XHRcdCRib2R5XG5cdFx0XHRcdC5maW5kKCcjbXctaW1wb3J0LXVwbG9hZC1mb3JtIGlucHV0W25hbWU9bG9nLWNvbW1lbnRdJylcblx0XHRcdFx0LnZhbCgn5a+85YWl6IeqW1t6aHdpa2k6fOatpOe9keermV1d55qE5ZCM5ZCN6aG16Z2i77y76aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvL0nKTtcblx0XHRcdCRib2R5XG5cdFx0XHRcdC5maW5kKCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtIGlucHV0W25hbWU9bG9nLWNvbW1lbnRdJylcblx0XHRcdFx0LnZhbCgn77y76aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7LvvL0nKTtcblx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9YXNzaWduS25vd25Vc2Vyc10nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdNYXNzRWRpdFJlZ2V4Jzpcblx0XHRcdCRib2R5LmZpbmQoJyN3cFN1bW1hcnlMYWJlbCcpLmh0bWwoXG5cdFx0XHRcdCRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJyN3cFN1bW1hcnlMYWJlbCcpXG5cdFx0XHRcdFx0LnRleHQoKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsjXFwuXFx8KC4rPyldXS9nLCAnJDEnKVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ1JlcGxhY2VUZXh0Jzpcblx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9ZG9Bbm5vdW5jZV0nKS5wcm9wKHtcblx0XHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdGlmIChXR19BQ1RJT04gPT09ICdkZWxldGUnKSB7XG5cdFx0Y29uc3QgJHdwUmVhc29uOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjd3BSZWFzb24nKTtcblx0XHRpZiAoISR3cFJlYXNvbi5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhdXRvU3VtbWFyeVJlZ0V4cDogUmVnRXhwID0gLyjlhoXlrrl8cGFnZSB3YXMgZW1wdHl8Y29udGVudCBiZWZvcmUgYmxhbmtpbmcgd2FzKS9pO1xuXHRcdGlmIChhdXRvU3VtbWFyeVJlZ0V4cC50ZXN0KFN0cmluZygkd3BSZWFzb24udmFsKCkpKSkge1xuXHRcdFx0JHdwUmVhc29uLnZhbCgnJyk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2ZpeFN1bW1hcnl9O1xuIiwgImltcG9ydCB7YWRkTG9nLCBhZGRTdWJwYWdlfSBmcm9tICcuL21vZHVsZXMvYWRkU3VicGFnZUFuZExvZyc7XG5pbXBvcnQge2ZpeFN1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9maXhTdW1tYXJ5JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bGlua1NlYXJjaEVkaXRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbic7XG5pbXBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybSc7XG5pbXBvcnQge2xvYWRSTlJTSGFzaEdsb2JhbGx5fSBmcm9tICcuL21vZHVsZXMvbG9hZFJOUlNIYXNoR2xvYmFsbHknO1xuaW1wb3J0IHtzbWFydEVkaXRJbnRyb30gZnJvbSAnLi9tb2R1bGVzL3NtYXJ0RWRpdEludHJvJztcbmltcG9ydCB7c21hcnROZXdTZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvc21hcnROZXdTZWN0aW9uJztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dVc2VySlNJbnN0YWxsZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldCgnd2dVc2VySlNJbnN0YWxsZWQnLCB0cnVlKTtcblxuXHQvKiDliqDovb3nvJbovpHnlYzpnaLohJrmnKwgKi9cblx0dm9pZCBsb2FkR2FkZ2V0RWRpdEZvcm0oKTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQvKiDlkJHkvqfovrnmoI/mt7vliqDigJzml6Xlv5figJ3oj5zljZUgKi9cblx0XHRhZGRMb2coKTtcblx0XHQvKiDlkJHkvqfovrnmoI/mt7vliqDigJzlrZDpobXpnaLigJ3oj5zljZUgKi9cblx0XHRhZGRTdWJwYWdlKCk7XG5cdFx0Lyog5L+u5pS557yW6L6R5pGY6KaBICovXG5cdFx0Zml4U3VtbWFyeSgkYm9keSk7XG5cdFx0Lyog5ZyoW1tTcGVjaWFsOkxpbmtTZWFyY2hdXeaYvuekuuKAnOe8lui+keKAneaMiemSriAqL1xuXHRcdGxpbmtTZWFyY2hFZGl0QnV0dG9uKCRib2R5KTtcblx0XHQvKiDnvJbovpHmj5DnpLrvvIhFZGl0SW50cm/vvIkgKi9cblx0XHRzbWFydEVkaXRJbnRybygkYm9keSk7XG5cdFx0Lyog5pm66IO96K6o6K666aG157yW6L6R77yI5paw5bu677yJICovXG5cdFx0c21hcnROZXdTZWN0aW9uKCRib2R5KTtcblx0fSk7XG5cblx0dm9pZCBsb2FkUk5SU0hhc2hHbG9iYWxseSgpO1xufSkoKTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmV4cG9ydCBjb25zdCBsaW5rU2VhcmNoRWRpdEJ1dHRvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJykgIT09ICdMaW5rU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignLm13LXNwY29udGVudCBhW2hyZWZePVwiL3dpa2lcIl0nKSkge1xuXHRcdCQoJzxzcGFuPicpXG5cdFx0XHQuYXBwZW5kKCcg77yIJywgJCgnPGE+JykuYXR0cignaHJlZicsIGAke2VsZW1lbnQuaHJlZn0/YWN0aW9uPWVkaXRgKS50ZXh0KGdldE1lc3NhZ2UoJ0VkaXQnKSksICfvvIknKVxuXHRcdFx0Lmluc2VydEFmdGVyKGVsZW1lbnQpO1xuXHR9XG59O1xuIiwgImltcG9ydCB7SVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgdXNpbmdFZGl0Rm9ybUpTID0gKCk6IHZvaWQgPT4ge1xuXHR2b2lkIG13LmxvYWRlci51c2luZyhbJ2V4dC5nYWRnZXQuRWRpdEZvcm0nLCAnZXh0LmdhZGdldC5FZGl0Rm9ybV9KUycsICdleHQuZ2FkZ2V0LkRlZmF1bHRTdW1tYXJpZXMnXSk7XG59O1xuXG5jb25zdCBsb2FkR2FkZ2V0RWRpdEZvcm0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlmIChJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04pIHtcblx0XHR1c2luZ0VkaXRGb3JtSlMoKTtcblx0fSBlbHNlIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC52aXN1YWxFZGl0b3IuZGVza3RvcEFydGljbGVUYXJnZXQuaW5pdCcpO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdG13LmxpYnNbJ3ZlJ10uYWRkUGx1Z2luKCgpOiB2b2lkID0+IHtcblx0XHRcdHVzaW5nRWRpdEZvcm1KUygpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX07XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGxvYWRSTlJTSGFzaEdsb2JhbGx5ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBvcHRpb25uYW1lcyA9IFsncm5yc3ZlcmlmeScsICdybnJzdmVyaWZ5dGltZScsICdybnJzdmVyaWZ5aGFzaCddO1xuXG5cdGF3YWl0IG13LmxvYWRlci51c2luZyhbJ21lZGlhd2lraS5hcGknLCAnbWVkaWF3aWtpLkZvcmVpZ25BcGknXSk7XG5cdGNvbnN0IGxvY2FsQXBpID0gaW5pdE13QXBpKCdsb2FkUk5SU0hhc2hHbG9iYWxseScpO1xuXHRjb25zdCBmb3JlaWduQXBpID0gaW5pdE13QXBpKCdsb2FkUk5SU0hhc2hHbG9iYWxseScsICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi9hcGkucGhwJyk7XG5cblx0Ly8gR2V0IHVzZXIgZGF0YVxuXHRjb25zdCBsb2NhbERhdGEgPSBhd2FpdCBsb2NhbEFwaS5nZXQoe2FjdGlvbjogJ3F1ZXJ5JywgbWV0YTogJ3VzZXJpbmZvJywgdWlwcm9wOiAnb3B0aW9ucyd9KTtcblx0Y29uc3QgZm9yZWlnbkRhdGEgPSBhd2FpdCBmb3JlaWduQXBpLmdldCh7YWN0aW9uOiAncXVlcnknLCBtZXRhOiAndXNlcmluZm8nLCB1aXByb3A6ICdvcHRpb25zJ30pO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0Y29uc3QgbG9jYWxPcHRpb25zID0gbG9jYWxEYXRhWydxdWVyeSddLnVzZXJpbmZvLm9wdGlvbnM7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRjb25zdCBmb3JlaWduT3B0aW9ucyA9IGZvcmVpZ25EYXRhWydxdWVyeSddLnVzZXJpbmZvLm9wdGlvbnM7XG5cblx0Ly8gVXBkYXRlIGdsb2JhbCBwcmVmZXJlbmNlc1xuXHRmb3IgKGNvbnN0IG9wdGlvbm5hbWUgb2Ygb3B0aW9ubmFtZXMpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0aWYgKCFsb2NhbE9wdGlvbnNbb3B0aW9ubmFtZV0gJiYgZm9yZWlnbk9wdGlvbnNbb3B0aW9ubmFtZV0pIHtcblx0XHRcdGF3YWl0IGZvcmVpZ25BcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdFx0XHRhY3Rpb246ICdnbG9iYWxwcmVmZXJlbmNlcycsXG5cdFx0XHRcdG9wdGlvbm5hbWUsXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0b3B0aW9udmFsdWU6IGZvcmVpZ25PcHRpb25zW29wdGlvbm5hbWVdIGFzIHN0cmluZyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtsb2FkUk5SU0hhc2hHbG9iYWxseX07XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX0NBVEVHT1JJRVMsIFdHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBzbWFydEVkaXRJbnRybyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFXR19DQVRFR09SSUVTKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQoJy5tdy1lZGl0c2VjdGlvbiwgI2NhLWVkaXQsICNjYS1hZGRzZWN0aW9uJykuZmluZCgnYScpO1xuXHRjb25zdCBhZGRFZGl0SW50cm8gPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICR0YXJnZXQpIHtcblx0XHRcdGVsZW1lbnQuaHJlZiA9IGAke2VsZW1lbnQuaHJlZn0mZWRpdGludHJvPSR7bmFtZX1gO1xuXHRcdH1cblx0fTtcblxuXHRzd2l0Y2ggKFdHX05BTUVTUEFDRV9OVU1CRVIpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpEaXNhbWJpZ19lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCflnKjkuJbkurrniaknKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkJMUF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0V0dfQ0FURUdPUklFUy5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gL+aKl+aXpT9b5oiY5oiwXVvkuonniK1dP1vnibrniqdd54myfOeDiOWjq3xb5oiY5oiwXVvmlpfprKXprKZd6Iux6ZuEfOiLsembhD/mqKFb56+E6IyDXT986Iux6ZuEP+eDiOWjqz985Lq65rCRKOaVmeiCsuWutnxb6Im66JedXVvmnK/ooZNd5a62fOenkVvlrablrbhd5a62fOiLsembhHzmpbfmqKEpfOWFseWSjFvlm73lnItdW+WLi+WLs13nq6B8W+S4g+WFq13kuIBb5YuL5YuzXeeroFvnjbLojrdd5b6X6ICFfFvkuIDnibld562J5Yqf6IejLy50ZXN0KFxuXHRcdFx0XHRcdFx0ZWxlbWVudFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpCTFBfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygn5rGC6Ze755m+56eR5pa56ZKI5a6M5pW05YiX6KGoJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpQb2xpY3lfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDg6XG5cdFx0Y2FzZSAxMjoge1xuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ0NDLUJZLU5DLVNBLTQuMCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6Tm9uQ29tbWVyY2lhbF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCdHUEwtMy4wJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpHUEwtMy4wX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ0dQTC0yLjAtb3ItbGF0ZXInKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkdQTC0yLjAtb3ItbGF0ZXJfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygnTUlU6K645Y+v6K+BJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpNSVRfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkY29weXdhcm46IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNlZGl0cGFnZS1jb3B5d2FybicpO1xuXHRcdFx0Y29uc3QgJGVkaXRpbnRybzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWVkaXRpbnRybycpO1xuXHRcdFx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiAmJiAkY29weXdhcm4gJiYgJGVkaXRpbnRybykge1xuXHRcdFx0XHQkZWRpdGludHJvLmFwcGVuZFRvKCRjb3B5d2Fybik7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c21hcnRFZGl0SW50cm99O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IHNtYXJ0TmV3U2VjdGlvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtbmV3dG9waWN0b29sJykgfHwgIW13LnVzZXIub3B0aW9ucy5nZXQoJ2Rpc2N1c3Npb250b29scy1iZXRhZW5hYmxlJykpIHtcblx0XHRjb25zdCAkY2FUYWxrOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2EtdGFsaycpO1xuXHRcdGlmICgkY2FUYWxrLmhhc0NsYXNzKCduZXcnKSAmJiBXR19OQU1FU1BBQ0VfTlVNQkVSICE9PSAyKSB7XG5cdFx0XHRjb25zdCAkYTogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoJ2E6Zmlyc3QnLCAkY2FUYWxrKTtcblx0XHRcdCRhLmF0dHIoJ2hyZWYnLCBgJHskYS5hdHRyKCdocmVmJyl9JnNlY3Rpb249bmV3YCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3NtYXJ0TmV3U2VjdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUF3Q0MsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQ3RFLElBQU1DLGlDQUFpREgsR0FBR0MsT0FBT0MsSUFBSSw0QkFBNEI7QUFDakcsSUFBTUUsZ0JBQTBCSixHQUFHQyxPQUFPQyxJQUFJLGNBQWM7QUFDNUQsSUFBTUcsc0JBQThCTCxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQjtBQUNyRSxJQUFNSSxlQUF1Qk4sR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBRXZELElBQU1LLDhCQUF1QyxDQUFDLFFBQVEsUUFBUSxFQUFFQyxTQUFTVCxTQUFTOztBQ05sRixJQUFBVSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsT0FBQSxHQUFNSCxrQkFBQUksVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsTUFBQSxHQUFLUCxrQkFBQUksVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsV0FBQSxHQUFVUixrQkFBQUksVUFBUztNQUNsQkMsSUFBSTtNQUNKQyxJQUFJ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QUEsQ0FBYztJQUNqRDtFQUNEO0FBQ0Q7O0NMREMsU0FBU29ELFNBQWU7QUFFeEIsTUFBSTNHLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLEdBQUc7QUFDdkM7RUFDRDtBQUVBRixLQUFHQyxPQUFPMkcsSUFBSSxxQkFBcUIsSUFBSTtBQUd2QyxPQUFLNUMsbUJBQW1CO0FBRXhCLFFBQUEsR0FBS3JCLG1CQUFBa0UsU0FBUSxFQUFFQyxLQUFNakYsV0FBeUM7QUFFN0RSLFdBQU87QUFFUEssZUFBVztBQUVYRSxlQUFXQyxLQUFLO0FBRWhCZSx5QkFBcUJmLEtBQUs7QUFFMUIrRCxtQkFBZS9ELEtBQUs7QUFFcEJ5RSxvQkFBZ0J6RSxLQUFLO0VBQ3RCLENBQUM7QUFFRCxPQUFLMkMscUJBQXFCO0FBQzNCLEdBQUc7IiwKICAibmFtZXMiOiBbIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSIsICJXR19DQVRFR09SSUVTIiwgIldHX05BTUVTUEFDRV9OVU1CRVIiLCAiV0dfUEFHRV9OQU1FIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJFZGl0IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkxvZyIsICJTdWJwYWdlcyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkTG9nIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiZ2V0VXJsIiwgInBhZ2UiLCAiYWRkU3VicGFnZSIsICJjb25jYXQiLCAiZml4U3VtbWFyeSIsICIkYm9keSIsICJmaW5kIiwgInZhbCIsICJodG1sIiwgInByb3AiLCAidGV4dCIsICJyZXBsYWNlIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAiJHdwUmVhc29uIiwgImxlbmd0aCIsICJhdXRvU3VtbWFyeVJlZ0V4cCIsICJ0ZXN0IiwgIlN0cmluZyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAibGlua1NlYXJjaEVkaXRCdXR0b24iLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJCIsICJhcHBlbmQiLCAiYXR0ciIsICJocmVmIiwgImluc2VydEFmdGVyIiwgImVyciIsICJlIiwgImYiLCAidXNpbmdFZGl0Rm9ybUpTIiwgImxvYWRlciIsICJ1c2luZyIsICJsb2FkR2FkZ2V0RWRpdEZvcm0iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJsaWJzIiwgImFkZFBsdWdpbiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImxvYWRSTlJTSGFzaEdsb2JhbGx5IiwgIl9yZWYyIiwgIm9wdGlvbm5hbWVzIiwgImxvY2FsQXBpIiwgImluaXRNd0FwaSIsICJmb3JlaWduQXBpIiwgImxvY2FsRGF0YSIsICJhY3Rpb24iLCAibWV0YSIsICJ1aXByb3AiLCAiZm9yZWlnbkRhdGEiLCAibG9jYWxPcHRpb25zIiwgInVzZXJpbmZvIiwgIm9wdGlvbnMiLCAiZm9yZWlnbk9wdGlvbnMiLCAiX2kiLCAiX29wdGlvbm5hbWVzIiwgIm9wdGlvbm5hbWUiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAib3B0aW9udmFsdWUiLCAic21hcnRFZGl0SW50cm8iLCAiJHRhcmdldCIsICJhZGRFZGl0SW50cm8iLCAibmFtZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJzb21lIiwgIiRjb3B5d2FybiIsICIkZWRpdGludHJvIiwgImFwcGVuZFRvIiwgInNtYXJ0TmV3U2VjdGlvbiIsICJ1c2VyIiwgIiRjYVRhbGsiLCAiaGFzQ2xhc3MiLCAiJGEiLCAidXNlckpTIiwgInNldCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
