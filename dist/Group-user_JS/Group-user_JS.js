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
//! src/Group-user_JS/modules/constant.ts
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
    const $wpReason = $body.find("input[name=wpReason]");
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
var import_ext_gadget2 = require("ext.gadget.Util");
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
  void (0, import_ext_gadget2.getBody)().then(($body) => {
    addLog();
    addSubpage();
    fixSummary($body);
    linkSearchEditButton($body);
    smartEditIntro($body);
    smartNewSection($body);
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9hZGRTdWJwYWdlQW5kTG9nLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvZml4U3VtbWFyeS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9Hcm91cC11c2VyX0pTLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvbGlua1NlYXJjaEVkaXRCdXR0b24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9sb2FkR2FkZ2V0RWRpdEZvcm0udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydEVkaXRJbnRyby50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3NtYXJ0TmV3U2VjdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfQUNUSU9OOiBNZWRpYVdpa2lDb25maWdNYXBXZ0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUU6IHN0cmluZyB8IGZhbHNlID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKTtcbmNvbnN0IFdHX0NBVEVHT1JJRVM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dDYXRlZ29yaWVzJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1xuXHRJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19DQVRFR09SSUVTLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZycsXG5cdFx0XHRqYTogJ+ODreOCsCcsXG5cdFx0XHQnemgtaGFucyc6ICfml6Xlv5cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pel6KqMJyxcblx0XHR9KSxcblx0XHRTdWJwYWdlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdWJwYWdlJyxcblx0XHRcdGphOiAn5a2Q44Oa44O844K4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtkOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZDpoIHpnaInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVIsIFdHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZExvZyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFstMSwgMiwgM10uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLXRiJyxcblx0XHRtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2dzJywge1xuXHRcdFx0cGFnZTogV0dfUEFHRV9OQU1FLFxuXHRcdH0pLFxuXHRcdGdldE1lc3NhZ2UoJ0xvZycpLFxuXHRcdCd0LWxvZydcblx0KTtcbn07XG5cbi8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuY29uc3QgYWRkU3VicGFnZSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFstMSwgMCwgMTRdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC10YicsXG5cdFx0bXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6UHJlZml4SW5kZXgvJHtXR19QQUdFX05BTUV9YCksXG5cdFx0Z2V0TWVzc2FnZSgnU3VicGFnZXMnKSxcblx0XHQndC1zdWJwYWdlJ1xuXHQpO1xufTtcblxuZXhwb3J0IHthZGRMb2csIGFkZFN1YnBhZ2V9O1xuIiwgImltcG9ydCB7V0dfQUNUSU9OLCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBmaXhTdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRzd2l0Y2ggKFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSkge1xuXHRcdGNhc2UgJ0ZpbGVJbXBvcnRlci1TcGVjaWFsUGFnZSc6XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnaW5wdXRbbmFtZT1pbnRlbmRlZFJldmlzaW9uU3VtbWFyeV0nKVxuXHRcdFx0XHQudmFsKFxuXHRcdFx0XHRcdGDlr7zlhaXoh6pbW2NvbW1vbnM6RmlsZTokeyRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnaDIubXctaW1wb3J0ZmlsZS1oZWFkZXItdGl0bGUnKVxuXHRcdFx0XHRcdFx0Lmh0bWwoKX185q2k5aSEXV3vvLvpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+aWh+S7tuiuuOWPr+ivt+WPguingemhtemdouaPj+i/sO+8vWBcblx0XHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0ltcG9ydCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXVzZXJuYW1lUHJlZml4XScpLnZhbCgnemh3aWtpJyk7XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XScpXG5cdFx0XHRcdC52YWwoJ+WvvOWFpeiHqltbemh3aWtpOnzmraTnvZHnq5ldXeeahOWQjOWQjemhtemdou+8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77y9Jyk7XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnI213LWltcG9ydC1pbnRlcndpa2ktZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XScpXG5cdFx0XHRcdC52YWwoJ++8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+y77y9Jyk7XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWFzc2lnbktub3duVXNlcnNdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnTWFzc0VkaXRSZWdleCc6XG5cdFx0XHQkYm9keS5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKS5odG1sKFxuXHRcdFx0XHQkYm9keVxuXHRcdFx0XHRcdC5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKVxuXHRcdFx0XHRcdC50ZXh0KClcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbI1xcLlxcfCguKz8pXV0vZywgJyQxJylcblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdSZXBsYWNlVGV4dCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWRvQW5ub3VuY2VdJykucHJvcCh7XG5cdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRpZiAoV0dfQUNUSU9OID09PSAnZGVsZXRlJykge1xuXHRcdGNvbnN0ICR3cFJlYXNvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cFJlYXNvbl0nKTtcblx0XHRpZiAoISR3cFJlYXNvbi5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhdXRvU3VtbWFyeVJlZ0V4cDogUmVnRXhwID0gLyjlhoXlrrl8cGFnZSB3YXMgZW1wdHl8Y29udGVudCBiZWZvcmUgYmxhbmtpbmcgd2FzKS9pO1xuXHRcdGlmIChhdXRvU3VtbWFyeVJlZ0V4cC50ZXN0KFN0cmluZygkd3BSZWFzb24udmFsKCkpKSkge1xuXHRcdFx0JHdwUmVhc29uLnZhbCgnJyk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2ZpeFN1bW1hcnl9O1xuIiwgImltcG9ydCB7YWRkTG9nLCBhZGRTdWJwYWdlfSBmcm9tICcuL21vZHVsZXMvYWRkU3VicGFnZUFuZExvZyc7XG5pbXBvcnQge2ZpeFN1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9maXhTdW1tYXJ5JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bGlua1NlYXJjaEVkaXRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbic7XG5pbXBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybSc7XG5pbXBvcnQge3NtYXJ0RWRpdEludHJvfSBmcm9tICcuL21vZHVsZXMvc21hcnRFZGl0SW50cm8nO1xuaW1wb3J0IHtzbWFydE5ld1NlY3Rpb259IGZyb20gJy4vbW9kdWxlcy9zbWFydE5ld1NlY3Rpb24nO1xuXG4oZnVuY3Rpb24gdXNlckpTKCk6IHZvaWQge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJKU0luc3RhbGxlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KCd3Z1VzZXJKU0luc3RhbGxlZCcsIHRydWUpO1xuXG5cdC8qIOWKoOi9vee8lui+keeVjOmdouiEmuacrCAqL1xuXHR2b2lkIGxvYWRHYWRnZXRFZGl0Rm9ybSgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOaXpeW/l+KAneiPnOWNlSAqL1xuXHRcdGFkZExvZygpO1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuXHRcdGFkZFN1YnBhZ2UoKTtcblx0XHQvKiDkv67mlLnnvJbovpHmkZjopoEgKi9cblx0XHRmaXhTdW1tYXJ5KCRib2R5KTtcblx0XHQvKiDlnKhbW1NwZWNpYWw6TGlua1NlYXJjaF1d5pi+56S64oCc57yW6L6R4oCd5oyJ6ZKuICovXG5cdFx0bGlua1NlYXJjaEVkaXRCdXR0b24oJGJvZHkpO1xuXHRcdC8qIOe8lui+keaPkOekuu+8iEVkaXRJbnRyb++8iSAqL1xuXHRcdHNtYXJ0RWRpdEludHJvKCRib2R5KTtcblx0XHQvKiDmmbrog73orqjorrrpobXnvJbovpHvvIjmlrDlu7rvvIkgKi9cblx0XHRzbWFydE5ld1NlY3Rpb24oJGJvZHkpO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5leHBvcnQgY29uc3QgbGlua1NlYXJjaEVkaXRCdXR0b24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpICE9PSAnTGlua1NlYXJjaCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJy5tdy1zcGNvbnRlbnQgYVtocmVmXj1cIi93aWtpXCJdJykpIHtcblx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0LmFwcGVuZCgnIO+8iCcsICQoJzxhPicpLmF0dHIoJ2hyZWYnLCBgJHtlbGVtZW50LmhyZWZ9P2FjdGlvbj1lZGl0YCkudGV4dChnZXRNZXNzYWdlKCdFZGl0JykpLCAn77yJJylcblx0XHRcdC5pbnNlcnRBZnRlcihlbGVtZW50KTtcblx0fVxufTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IHVzaW5nRWRpdEZvcm1KUyA9ICgpOiB2b2lkID0+IHtcblx0dm9pZCBtdy5sb2FkZXIudXNpbmcoWydleHQuZ2FkZ2V0LkVkaXRGb3JtJywgJ2V4dC5nYWRnZXQuRWRpdEZvcm1fSlMnLCAnZXh0LmdhZGdldC5EZWZhdWx0U3VtbWFyaWVzJ10pO1xufTtcblxuY29uc3QgbG9hZEdhZGdldEVkaXRGb3JtID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRpZiAoSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OKSB7XG5cdFx0dXNpbmdFZGl0Rm9ybUpTKCk7XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmRlc2t0b3BBcnRpY2xlVGFyZ2V0LmluaXQnKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdFx0bXcubGlic1sndmUnXS5hZGRQbHVnaW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0dXNpbmdFZGl0Rm9ybUpTKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bG9hZEdhZGdldEVkaXRGb3JtfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfQ0FURUdPUklFUywgV0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IHNtYXJ0RWRpdEludHJvID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoIVdHX0NBVEVHT1JJRVMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJGJvZHkuZmluZCgnLm13LWVkaXRzZWN0aW9uLCAjY2EtZWRpdCwgI2NhLWFkZHNlY3Rpb24nKS5maW5kKCdhJyk7XG5cdGNvbnN0IGFkZEVkaXRJbnRybyA9IChuYW1lOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJHRhcmdldCkge1xuXHRcdFx0ZWxlbWVudC5ocmVmID0gYCR7ZWxlbWVudC5ocmVmfSZlZGl0aW50cm89JHtuYW1lfWA7XG5cdFx0fVxuXHR9O1xuXG5cdHN3aXRjaCAoV0dfTkFNRVNQQUNFX05VTUJFUikge1xuXHRcdGNhc2UgMDpcblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCflhajpg6jmtojmrafkuYnpobXpnaInKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkRpc2FtYmlnX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ+WcqOS4luS6uueJqScpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6QkxQX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRXR19DQVRFR09SSUVTLnNvbWUoKGVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0XHRcdHJldHVybiAv5oqX5pelP1vmiJjmiLBdW+S6ieeIrV0/W+eJuueKp13nibJ854OI5aOrfFvmiJjmiLBdW+aWl+mspemspl3oi7Hpm4R86Iux6ZuEP+aooVvnr4TojINdP3zoi7Hpm4Q/54OI5aOrP3zkurrmsJEo5pWZ6IKy5a62fFvoibrol51dW+acr+ihk13lrrZ856eRW+WtpuWtuF3lrrZ86Iux6ZuEfOalt+aooSl85YWx5ZKMW+WbveWci11b5YuL5YuzXeeroHxb5LiD5YWrXeS4gFvli4vli7Nd56ugW+eNsuiOt13lvpfogIV8W+S4gOeJuV3nrYnlip/oh6MvLnRlc3QoXG5cdFx0XHRcdFx0XHRlbGVtZW50XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdCkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkJMUF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCfmsYLpl7vnmb7np5HmlrnpkojlrozmlbTliJfooagnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOlBvbGljeV9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgODpcblx0XHRjYXNlIDEyOiB7XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygnQ0MtQlktTkMtU0EtNC4wJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpOb25Db21tZXJjaWFsX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ0dQTC0zLjAnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkdQTC0zLjBfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygnR1BMLTIuMC1vci1sYXRlcicpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6R1BMLTIuMC1vci1sYXRlcl9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCdNSVTorrjlj6/or4EnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOk1JVF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRjb3B5d2FybjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2VkaXRwYWdlLWNvcHl3YXJuJyk7XG5cdFx0XHRjb25zdCAkZWRpdGludHJvOiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctZWRpdGludHJvJyk7XG5cdFx0XHRpZiAoSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OICYmICRjb3B5d2FybiAmJiAkZWRpdGludHJvKSB7XG5cdFx0XHRcdCRlZGl0aW50cm8uYXBwZW5kVG8oJGNvcHl3YXJuKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtzbWFydEVkaXRJbnRyb307XG4iLCAiaW1wb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3Qgc21hcnROZXdTZWN0aW9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoIW13LnVzZXIub3B0aW9ucy5nZXQoJ2Rpc2N1c3Npb250b29scy1uZXd0b3BpY3Rvb2wnKSB8fCAhbXcudXNlci5vcHRpb25zLmdldCgnZGlzY3Vzc2lvbnRvb2xzLWJldGFlbmFibGUnKSkge1xuXHRcdGNvbnN0ICRjYVRhbGs6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjYS10YWxrJyk7XG5cdFx0aWYgKCRjYVRhbGsuaGFzQ2xhc3MoJ25ldycpICYmIFdHX05BTUVTUEFDRV9OVU1CRVIgIT09IDIpIHtcblx0XHRcdGNvbnN0ICRhOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+ID0gJCgnYTpmaXJzdCcsICRjYVRhbGspO1xuXHRcdFx0JGEuYXR0cignaHJlZicsIGAkeyRhLmF0dHIoJ2hyZWYnKX0mc2VjdGlvbj1uZXdgKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c21hcnROZXdTZWN0aW9ufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQXdDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDdEUsSUFBTUMsaUNBQWlESCxHQUFHQyxPQUFPQyxJQUFJLDRCQUE0QjtBQUNqRyxJQUFNRSxnQkFBMEJKLEdBQUdDLE9BQU9DLElBQUksY0FBYztBQUM1RCxJQUFNRyxzQkFBOEJMLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CO0FBQ3JFLElBQU1JLGVBQXVCTixHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFFdkQsSUFBTUssOEJBQXVDLENBQUMsUUFBUSxRQUFRLEVBQUVDLFNBQVNULFNBQVM7O0FDTmxGLElBQUFVLG9CQUF1QkMsUUFBQSxpQkFBQTtBQUV2QixJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxPQUFBLEdBQU1ILGtCQUFBSSxVQUFTO01BQ2RDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxNQUFBLEdB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NEIsR0FBRztBQUMvRyxVQUFNa0YsVUFBa0J2RCxNQUFNQyxLQUFLLFVBQVU7QUFDN0MsUUFBSXNELFFBQVFDLFNBQVMsS0FBSyxLQUFLaEYsd0JBQXdCLEdBQUc7QUFDekQsWUFBTWlGLEtBQWdDakMsRUFBRSxXQUFXK0IsT0FBTztBQUMxREUsU0FBRy9CLEtBQUssUUFBQSxHQUFBNUIsT0FBVzJELEdBQUcvQixLQUFLLE1BQU0sR0FBQyxjQUFBLENBQWM7SUFDakQ7RUFDRDtBQUNEOztDSkZDLFNBQVNnQyxTQUFlO0FBRXhCLE1BQUl2RixHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixHQUFHO0FBQ3ZDO0VBQ0Q7QUFFQUYsS0FBR0MsT0FBT3VGLElBQUkscUJBQXFCLElBQUk7QUFHdkMsT0FBS3hCLG1CQUFtQjtBQUV4QixRQUFBLEdBQUtyQixtQkFBQThDLFNBQVEsRUFBRUMsS0FBTTdELFdBQXlDO0FBRTdEUixXQUFPO0FBRVBLLGVBQVc7QUFFWEUsZUFBV0MsS0FBSztBQUVoQmUseUJBQXFCZixLQUFLO0FBRTFCMEMsbUJBQWUxQyxLQUFLO0FBRXBCb0Qsb0JBQWdCcEQsS0FBSztFQUN0QixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FIiwgIldHX0NBVEVHT1JJRVMiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJXR19QQUdFX05BTUUiLCAiSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OIiwgImluY2x1ZGVzIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkVkaXQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiTG9nIiwgIlN1YnBhZ2VzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhZGRMb2ciLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJnZXRVcmwiLCAicGFnZSIsICJhZGRTdWJwYWdlIiwgImNvbmNhdCIsICJmaXhTdW1tYXJ5IiwgIiRib2R5IiwgImZpbmQiLCAidmFsIiwgImh0bWwiLCAicHJvcCIsICJ0ZXh0IiwgInJlcGxhY2UiLCAiY2hlY2tlZCIsICJkaXNhYmxlZCIsICIkd3BSZWFzb24iLCAibGVuZ3RoIiwgImF1dG9TdW1tYXJ5UmVnRXhwIiwgInRlc3QiLCAiU3RyaW5nIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJsaW5rU2VhcmNoRWRpdEJ1dHRvbiIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkIiwgImFwcGVuZCIsICJhdHRyIiwgImhyZWYiLCAiaW5zZXJ0QWZ0ZXIiLCAiZXJyIiwgImUiLCAiZiIsICJ1c2luZ0VkaXRGb3JtSlMiLCAibG9hZGVyIiwgInVzaW5nIiwgImxvYWRHYWRnZXRFZGl0Rm9ybSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImxpYnMiLCAiYWRkUGx1Z2luIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJzbWFydEVkaXRJbnRybyIsICIkdGFyZ2V0IiwgImFkZEVkaXRJbnRybyIsICJuYW1lIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInNvbWUiLCAiJGNvcHl3YXJuIiwgIiRlZGl0aW50cm8iLCAiYXBwZW5kVG8iLCAic21hcnROZXdTZWN0aW9uIiwgInVzZXIiLCAib3B0aW9ucyIsICIkY2FUYWxrIiwgImhhc0NsYXNzIiwgIiRhIiwgInVzZXJKUyIsICJzZXQiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=
