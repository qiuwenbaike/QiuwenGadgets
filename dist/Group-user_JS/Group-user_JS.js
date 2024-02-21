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
      $body.find("input[name=wpSummary]Label").html($body.find("input[name=wpSummary]Label").text().replace(/\[\[#\.\|(.+?)]]/g, "$1"));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9hZGRTdWJwYWdlQW5kTG9nLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvZml4U3VtbWFyeS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9Hcm91cC11c2VyX0pTLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvbGlua1NlYXJjaEVkaXRCdXR0b24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9sb2FkR2FkZ2V0RWRpdEZvcm0udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydEVkaXRJbnRyby50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3NtYXJ0TmV3U2VjdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfQUNUSU9OOiBNZWRpYVdpa2lDb25maWdNYXBXZ0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUU6IHN0cmluZyB8IGZhbHNlID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKTtcbmNvbnN0IFdHX0NBVEVHT1JJRVM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dDYXRlZ29yaWVzJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1xuXHRJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19DQVRFR09SSUVTLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZycsXG5cdFx0XHRqYTogJ+ODreOCsCcsXG5cdFx0XHQnemgtaGFucyc6ICfml6Xlv5cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pel6KqMJyxcblx0XHR9KSxcblx0XHRTdWJwYWdlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdWJwYWdlJyxcblx0XHRcdGphOiAn5a2Q44Oa44O844K4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtkOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZDpoIHpnaInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVIsIFdHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZExvZyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFstMSwgMiwgM10uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLXRiJyxcblx0XHRtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2dzJywge1xuXHRcdFx0cGFnZTogV0dfUEFHRV9OQU1FLFxuXHRcdH0pLFxuXHRcdGdldE1lc3NhZ2UoJ0xvZycpLFxuXHRcdCd0LWxvZydcblx0KTtcbn07XG5cbi8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuY29uc3QgYWRkU3VicGFnZSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFstMSwgMCwgMTRdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC10YicsXG5cdFx0bXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6UHJlZml4SW5kZXgvJHtXR19QQUdFX05BTUV9YCksXG5cdFx0Z2V0TWVzc2FnZSgnU3VicGFnZXMnKSxcblx0XHQndC1zdWJwYWdlJ1xuXHQpO1xufTtcblxuZXhwb3J0IHthZGRMb2csIGFkZFN1YnBhZ2V9O1xuIiwgImltcG9ydCB7V0dfQUNUSU9OLCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBmaXhTdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRzd2l0Y2ggKFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSkge1xuXHRcdGNhc2UgJ0ZpbGVJbXBvcnRlci1TcGVjaWFsUGFnZSc6XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnaW5wdXRbbmFtZT1pbnRlbmRlZFJldmlzaW9uU3VtbWFyeV0nKVxuXHRcdFx0XHQudmFsKFxuXHRcdFx0XHRcdGDlr7zlhaXoh6pbW2NvbW1vbnM6RmlsZTokeyRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnaDIubXctaW1wb3J0ZmlsZS1oZWFkZXItdGl0bGUnKVxuXHRcdFx0XHRcdFx0Lmh0bWwoKX185q2k5aSEXV3vvLvpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+aWh+S7tuiuuOWPr+ivt+WPguingemhtemdouaPj+i/sO+8vWBcblx0XHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0ltcG9ydCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXVzZXJuYW1lUHJlZml4XScpLnZhbCgnemh3aWtpJyk7XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XScpXG5cdFx0XHRcdC52YWwoJ+WvvOWFpeiHqltbemh3aWtpOnzmraTnvZHnq5ldXeeahOWQjOWQjemhtemdou+8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77y9Jyk7XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnI213LWltcG9ydC1pbnRlcndpa2ktZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XScpXG5cdFx0XHRcdC52YWwoJ++8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+y77y9Jyk7XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWFzc2lnbktub3duVXNlcnNdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnTWFzc0VkaXRSZWdleCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV1MYWJlbCcpLmh0bWwoXG5cdFx0XHRcdCRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XUxhYmVsJylcblx0XHRcdFx0XHQudGV4dCgpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyNcXC5cXHwoLis/KV1dL2csICckMScpXG5cdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnUmVwbGFjZVRleHQnOlxuXHRcdFx0JGJvZHkuZmluZCgnaW5wdXRbbmFtZT1kb0Fubm91bmNlXScpLnByb3Aoe1xuXHRcdFx0XHRjaGVja2VkOiBmYWxzZSxcblx0XHRcdFx0ZGlzYWJsZWQ6IHRydWUsXG5cdFx0XHR9KTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0aWYgKFdHX0FDVElPTiA9PT0gJ2RlbGV0ZScpIHtcblx0XHRjb25zdCAkd3BSZWFzb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BSZWFzb25dJyk7XG5cdFx0aWYgKCEkd3BSZWFzb24ubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYXV0b1N1bW1hcnlSZWdFeHA6IFJlZ0V4cCA9IC8o5YaF5a65fHBhZ2Ugd2FzIGVtcHR5fGNvbnRlbnQgYmVmb3JlIGJsYW5raW5nIHdhcykvaTtcblx0XHRpZiAoYXV0b1N1bW1hcnlSZWdFeHAudGVzdChTdHJpbmcoJHdwUmVhc29uLnZhbCgpKSkpIHtcblx0XHRcdCR3cFJlYXNvbi52YWwoJycpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtmaXhTdW1tYXJ5fTtcbiIsICJpbXBvcnQge2FkZExvZywgYWRkU3VicGFnZX0gZnJvbSAnLi9tb2R1bGVzL2FkZFN1YnBhZ2VBbmRMb2cnO1xuaW1wb3J0IHtmaXhTdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvZml4U3VtbWFyeSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2xpbmtTZWFyY2hFZGl0QnV0dG9ufSBmcm9tICcuL21vZHVsZXMvbGlua1NlYXJjaEVkaXRCdXR0b24nO1xuaW1wb3J0IHtsb2FkR2FkZ2V0RWRpdEZvcm19IGZyb20gJy4vbW9kdWxlcy9sb2FkR2FkZ2V0RWRpdEZvcm0nO1xuaW1wb3J0IHtzbWFydEVkaXRJbnRyb30gZnJvbSAnLi9tb2R1bGVzL3NtYXJ0RWRpdEludHJvJztcbmltcG9ydCB7c21hcnROZXdTZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvc21hcnROZXdTZWN0aW9uJztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dVc2VySlNJbnN0YWxsZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldCgnd2dVc2VySlNJbnN0YWxsZWQnLCB0cnVlKTtcblxuXHQvKiDliqDovb3nvJbovpHnlYzpnaLohJrmnKwgKi9cblx0dm9pZCBsb2FkR2FkZ2V0RWRpdEZvcm0oKTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQvKiDlkJHkvqfovrnmoI/mt7vliqDigJzml6Xlv5figJ3oj5zljZUgKi9cblx0XHRhZGRMb2coKTtcblx0XHQvKiDlkJHkvqfovrnmoI/mt7vliqDigJzlrZDpobXpnaLigJ3oj5zljZUgKi9cblx0XHRhZGRTdWJwYWdlKCk7XG5cdFx0Lyog5L+u5pS557yW6L6R5pGY6KaBICovXG5cdFx0Zml4U3VtbWFyeSgkYm9keSk7XG5cdFx0Lyog5ZyoW1tTcGVjaWFsOkxpbmtTZWFyY2hdXeaYvuekuuKAnOe8lui+keKAneaMiemSriAqL1xuXHRcdGxpbmtTZWFyY2hFZGl0QnV0dG9uKCRib2R5KTtcblx0XHQvKiDnvJbovpHmj5DnpLrvvIhFZGl0SW50cm/vvIkgKi9cblx0XHRzbWFydEVkaXRJbnRybygkYm9keSk7XG5cdFx0Lyog5pm66IO96K6o6K666aG157yW6L6R77yI5paw5bu677yJICovXG5cdFx0c21hcnROZXdTZWN0aW9uKCRib2R5KTtcblx0fSk7XG59KSgpO1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuZXhwb3J0IGNvbnN0IGxpbmtTZWFyY2hFZGl0QnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKSAhPT0gJ0xpbmtTZWFyY2gnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KCcubXctc3Bjb250ZW50IGFbaHJlZl49XCIvd2lraVwiXScpKSB7XG5cdFx0JCgnPHNwYW4+Jylcblx0XHRcdC5hcHBlbmQoJyDvvIgnLCAkKCc8YT4nKS5hdHRyKCdocmVmJywgYCR7ZWxlbWVudC5ocmVmfT9hY3Rpb249ZWRpdGApLnRleHQoZ2V0TWVzc2FnZSgnRWRpdCcpKSwgJ++8iScpXG5cdFx0XHQuaW5zZXJ0QWZ0ZXIoZWxlbWVudCk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT059IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCB1c2luZ0VkaXRGb3JtSlMgPSAoKTogdm9pZCA9PiB7XG5cdHZvaWQgbXcubG9hZGVyLnVzaW5nKFsnZXh0LmdhZGdldC5FZGl0Rm9ybScsICdleHQuZ2FkZ2V0LkVkaXRGb3JtX0pTJywgJ2V4dC5nYWRnZXQuRGVmYXVsdFN1bW1hcmllcyddKTtcbn07XG5cbmNvbnN0IGxvYWRHYWRnZXRFZGl0Rm9ybSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTikge1xuXHRcdHVzaW5nRWRpdEZvcm1KUygpO1xuXHR9IGVsc2Uge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5kZXNrdG9wQXJ0aWNsZVRhcmdldC5pbml0Jyk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtY2FsbFxuXHRcdG13LmxpYnNbJ3ZlJ10uYWRkUGx1Z2luKCgpOiB2b2lkID0+IHtcblx0XHRcdHVzaW5nRWRpdEZvcm1KUygpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX07XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX0NBVEVHT1JJRVMsIFdHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBzbWFydEVkaXRJbnRybyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFXR19DQVRFR09SSUVTKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQoJy5tdy1lZGl0c2VjdGlvbiwgI2NhLWVkaXQsICNjYS1hZGRzZWN0aW9uJykuZmluZCgnYScpO1xuXHRjb25zdCBhZGRFZGl0SW50cm8gPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICR0YXJnZXQpIHtcblx0XHRcdGVsZW1lbnQuaHJlZiA9IGAke2VsZW1lbnQuaHJlZn0mZWRpdGludHJvPSR7bmFtZX1gO1xuXHRcdH1cblx0fTtcblxuXHRzd2l0Y2ggKFdHX05BTUVTUEFDRV9OVU1CRVIpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpEaXNhbWJpZ19lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCflnKjkuJbkurrniaknKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkJMUF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0V0dfQ0FURUdPUklFUy5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gL+aKl+aXpT9b5oiY5oiwXVvkuonniK1dP1vnibrniqdd54myfOeDiOWjq3xb5oiY5oiwXVvmlpfprKXprKZd6Iux6ZuEfOiLsembhD/mqKFb56+E6IyDXT986Iux6ZuEP+eDiOWjqz985Lq65rCRKOaVmeiCsuWutnxb6Im66JedXVvmnK/ooZNd5a62fOenkVvlrablrbhd5a62fOiLsembhHzmpbfmqKEpfOWFseWSjFvlm73lnItdW+WLi+WLs13nq6B8W+S4g+WFq13kuIBb5YuL5YuzXeeroFvnjbLojrdd5b6X6ICFfFvkuIDnibld562J5Yqf6IejLy50ZXN0KFxuXHRcdFx0XHRcdFx0ZWxlbWVudFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpCTFBfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygn5rGC6Ze755m+56eR5pa56ZKI5a6M5pW05YiX6KGoJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpQb2xpY3lfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDg6XG5cdFx0Y2FzZSAxMjoge1xuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ0NDLUJZLU5DLVNBLTQuMCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6Tm9uQ29tbWVyY2lhbF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCdHUEwtMy4wJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpHUEwtMy4wX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ0dQTC0yLjAtb3ItbGF0ZXInKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkdQTC0yLjAtb3ItbGF0ZXJfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygnTUlU6K645Y+v6K+BJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpNSVRfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkY29weXdhcm46IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNlZGl0cGFnZS1jb3B5d2FybicpO1xuXHRcdFx0Y29uc3QgJGVkaXRpbnRybzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWVkaXRpbnRybycpO1xuXHRcdFx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiAmJiAkY29weXdhcm4gJiYgJGVkaXRpbnRybykge1xuXHRcdFx0XHQkZWRpdGludHJvLmFwcGVuZFRvKCRjb3B5d2Fybik7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c21hcnRFZGl0SW50cm99O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IHNtYXJ0TmV3U2VjdGlvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtbmV3dG9waWN0b29sJykgfHwgIW13LnVzZXIub3B0aW9ucy5nZXQoJ2Rpc2N1c3Npb250b29scy1iZXRhZW5hYmxlJykpIHtcblx0XHRjb25zdCAkY2FUYWxrOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2EtdGFsaycpO1xuXHRcdGlmICgkY2FUYWxrLmhhc0NsYXNzKCduZXcnKSAmJiBXR19OQU1FU1BBQ0VfTlVNQkVSICE9PSAyKSB7XG5cdFx0XHRjb25zdCAkYTogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoJ2E6Zmlyc3QnLCAkY2FUYWxrKTtcblx0XHRcdCRhLmF0dHIoJ2hyZWYnLCBgJHskYS5hdHRyKCdocmVmJyl9JnNlY3Rpb249bmV3YCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3NtYXJ0TmV3U2VjdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUF3Q0MsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQ3RFLElBQU1DLGlDQUFpREgsR0FBR0MsT0FBT0MsSUFBSSw0QkFBNEI7QUFDakcsSUFBTUUsZ0JBQTBCSixHQUFHQyxPQUFPQyxJQUFJLGNBQWM7QUFDNUQsSUFBTUcsc0JBQThCTCxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQjtBQUNyRSxJQUFNSSxlQUF1Qk4sR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBRXZELElBQU1LLDhCQUF1QyxDQUFDLFFBQVEsUUFBUSxFQUFFQyxTQUFTVCxTQUFTOztBQ05sRixJQUFBVSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsT0FBQSxHQUFNSCxrQkFBQUksVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJ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S0FBS0MsUUFBUWpGLElBQUksNEJBQTRCLEdBQUc7QUFDL0csVUFBTWtGLFVBQWtCdkQsTUFBTUMsS0FBSyxVQUFVO0FBQzdDLFFBQUlzRCxRQUFRQyxTQUFTLEtBQUssS0FBS2hGLHdCQUF3QixHQUFHO0FBQ3pELFlBQU1pRixLQUFnQ2pDLEVBQUUsV0FBVytCLE9BQU87QUFDMURFLFNBQUcvQixLQUFLLFFBQUEsR0FBQTVCLE9BQVcyRCxHQUFHL0IsS0FBSyxNQUFNLEdBQUMsY0FBQSxDQUFjO0lBQ2pEO0VBQ0Q7QUFDRDs7Q0pGQyxTQUFTZ0MsU0FBZTtBQUV4QixNQUFJdkYsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsR0FBRztBQUN2QztFQUNEO0FBRUFGLEtBQUdDLE9BQU91RixJQUFJLHFCQUFxQixJQUFJO0FBR3ZDLE9BQUt4QixtQkFBbUI7QUFFeEIsUUFBQSxHQUFLckIsbUJBQUE4QyxTQUFRLEVBQUVDLEtBQU03RCxXQUF5QztBQUU3RFIsV0FBTztBQUVQSyxlQUFXO0FBRVhFLGVBQVdDLEtBQUs7QUFFaEJlLHlCQUFxQmYsS0FBSztBQUUxQjBDLG1CQUFlMUMsS0FBSztBQUVwQm9ELG9CQUFnQnBELEtBQUs7RUFDdEIsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSIsICJXR19DQVRFR09SSUVTIiwgIldHX05BTUVTUEFDRV9OVU1CRVIiLCAiV0dfUEFHRV9OQU1FIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJFZGl0IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkxvZyIsICJTdWJwYWdlcyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkTG9nIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiZ2V0VXJsIiwgInBhZ2UiLCAiYWRkU3VicGFnZSIsICJjb25jYXQiLCAiZml4U3VtbWFyeSIsICIkYm9keSIsICJmaW5kIiwgInZhbCIsICJodG1sIiwgInByb3AiLCAidGV4dCIsICJyZXBsYWNlIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAiJHdwUmVhc29uIiwgImxlbmd0aCIsICJhdXRvU3VtbWFyeVJlZ0V4cCIsICJ0ZXN0IiwgIlN0cmluZyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAibGlua1NlYXJjaEVkaXRCdXR0b24iLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJCIsICJhcHBlbmQiLCAiYXR0ciIsICJocmVmIiwgImluc2VydEFmdGVyIiwgImVyciIsICJlIiwgImYiLCAidXNpbmdFZGl0Rm9ybUpTIiwgImxvYWRlciIsICJ1c2luZyIsICJsb2FkR2FkZ2V0RWRpdEZvcm0iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJsaWJzIiwgImFkZFBsdWdpbiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAic21hcnRFZGl0SW50cm8iLCAiJHRhcmdldCIsICJhZGRFZGl0SW50cm8iLCAibmFtZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJzb21lIiwgIiRjb3B5d2FybiIsICIkZWRpdGludHJvIiwgImFwcGVuZFRvIiwgInNtYXJ0TmV3U2VjdGlvbiIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiJGNhVGFsayIsICJoYXNDbGFzcyIsICIkYSIsICJ1c2VySlMiLCAic2V0IiwgImdldEJvZHkiLCAidGhlbiJdCn0K
