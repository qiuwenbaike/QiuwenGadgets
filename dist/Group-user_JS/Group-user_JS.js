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
var EDIT_GADGETS = ["ext.gadget.EditForm", "ext.gadget.EditForm_JS"];
var usingEditFormJS = (gadgets) => {
  void mw.loader.using(gadgets);
};
var loadGadgetEditForm = () => {
  if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
    usingEditFormJS(EDIT_GADGETS);
  }
};
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9hZGRTdWJwYWdlQW5kTG9nLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvZml4U3VtbWFyeS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9Hcm91cC11c2VyX0pTLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvbGlua1NlYXJjaEVkaXRCdXR0b24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9sb2FkR2FkZ2V0RWRpdEZvcm0udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydEVkaXRJbnRyby50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3NtYXJ0TmV3U2VjdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfQUNUSU9OOiBNZWRpYVdpa2lDb25maWdNYXBXZ0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUU6IHN0cmluZyB8IGZhbHNlID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKTtcbmNvbnN0IFdHX0NBVEVHT1JJRVM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dDYXRlZ29yaWVzJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1xuXHRJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19DQVRFR09SSUVTLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZycsXG5cdFx0XHRqYTogJ+ODreOCsCcsXG5cdFx0XHQnemgtaGFucyc6ICfml6Xlv5cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pel6KqMJyxcblx0XHR9KSxcblx0XHRTdWJwYWdlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdWJwYWdlJyxcblx0XHRcdGphOiAn5a2Q44Oa44O844K4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtkOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZDpoIHpnaInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVIsIFdHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZExvZyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFstMSwgMiwgM10uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLXRiJyxcblx0XHRtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2dzJywge1xuXHRcdFx0cGFnZTogV0dfUEFHRV9OQU1FLFxuXHRcdH0pLFxuXHRcdGdldE1lc3NhZ2UoJ0xvZycpLFxuXHRcdCd0LWxvZydcblx0KTtcbn07XG5cbi8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuY29uc3QgYWRkU3VicGFnZSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFstMSwgMCwgMTRdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC10YicsXG5cdFx0bXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6UHJlZml4SW5kZXgvJHtXR19QQUdFX05BTUV9YCksXG5cdFx0Z2V0TWVzc2FnZSgnU3VicGFnZXMnKSxcblx0XHQndC1zdWJwYWdlJ1xuXHQpO1xufTtcblxuZXhwb3J0IHthZGRMb2csIGFkZFN1YnBhZ2V9O1xuIiwgImltcG9ydCB7V0dfQUNUSU9OLCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBmaXhTdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRzd2l0Y2ggKFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSkge1xuXHRcdGNhc2UgJ0ZpbGVJbXBvcnRlci1TcGVjaWFsUGFnZSc6XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnaW5wdXRbbmFtZT1pbnRlbmRlZFJldmlzaW9uU3VtbWFyeV0nKVxuXHRcdFx0XHQudmFsKFxuXHRcdFx0XHRcdGDlr7zlhaXoh6pbW2NvbW1vbnM6RmlsZTokeyRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnaDIubXctaW1wb3J0ZmlsZS1oZWFkZXItdGl0bGUnKVxuXHRcdFx0XHRcdFx0Lmh0bWwoKX185q2k5aSEXV3vvLvpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+aWh+S7tuiuuOWPr+ivt+WPguingemhtemdouaPj+i/sO+8vWBcblx0XHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0ltcG9ydCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXVzZXJuYW1lUHJlZml4XScpLnZhbCgnemh3aWtpJyk7XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XScpXG5cdFx0XHRcdC52YWwoJ+WvvOWFpeiHqltbemh3aWtpOnzmraTnvZHnq5ldXeeahOWQjOWQjemhtemdou+8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77y9Jyk7XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnI213LWltcG9ydC1pbnRlcndpa2ktZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XScpXG5cdFx0XHRcdC52YWwoJ++8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+y77y9Jyk7XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWFzc2lnbktub3duVXNlcnNdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnTWFzc0VkaXRSZWdleCc6XG5cdFx0XHQkYm9keS5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKS5odG1sKFxuXHRcdFx0XHQkYm9keVxuXHRcdFx0XHRcdC5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKVxuXHRcdFx0XHRcdC50ZXh0KClcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbI1xcLlxcfCguKz8pXV0vZywgJyQxJylcblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdSZXBsYWNlVGV4dCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWRvQW5ub3VuY2VdJykucHJvcCh7XG5cdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRpZiAoV0dfQUNUSU9OID09PSAnZGVsZXRlJykge1xuXHRcdGNvbnN0ICR3cFJlYXNvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cFJlYXNvbl0nKTtcblx0XHRpZiAoISR3cFJlYXNvbi5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhdXRvU3VtbWFyeVJlZ0V4cDogUmVnRXhwID0gLyjlhoXlrrl8cGFnZSB3YXMgZW1wdHl8Y29udGVudCBiZWZvcmUgYmxhbmtpbmcgd2FzKS9pO1xuXHRcdGlmIChhdXRvU3VtbWFyeVJlZ0V4cC50ZXN0KFN0cmluZygkd3BSZWFzb24udmFsKCkpKSkge1xuXHRcdFx0JHdwUmVhc29uLnZhbCgnJyk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2ZpeFN1bW1hcnl9O1xuIiwgImltcG9ydCB7YWRkTG9nLCBhZGRTdWJwYWdlfSBmcm9tICcuL21vZHVsZXMvYWRkU3VicGFnZUFuZExvZyc7XG5pbXBvcnQge2ZpeFN1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9maXhTdW1tYXJ5JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bGlua1NlYXJjaEVkaXRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbic7XG5pbXBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybSc7XG5pbXBvcnQge3NtYXJ0RWRpdEludHJvfSBmcm9tICcuL21vZHVsZXMvc21hcnRFZGl0SW50cm8nO1xuaW1wb3J0IHtzbWFydE5ld1NlY3Rpb259IGZyb20gJy4vbW9kdWxlcy9zbWFydE5ld1NlY3Rpb24nO1xuXG4oZnVuY3Rpb24gdXNlckpTKCk6IHZvaWQge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJKU0luc3RhbGxlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KCd3Z1VzZXJKU0luc3RhbGxlZCcsIHRydWUpO1xuXG5cdC8qIOWKoOi9vee8lui+keeVjOmdouiEmuacrCAqL1xuXHR2b2lkIGxvYWRHYWRnZXRFZGl0Rm9ybSgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOaXpeW/l+KAneiPnOWNlSAqL1xuXHRcdGFkZExvZygpO1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuXHRcdGFkZFN1YnBhZ2UoKTtcblx0XHQvKiDkv67mlLnnvJbovpHmkZjopoEgKi9cblx0XHRmaXhTdW1tYXJ5KCRib2R5KTtcblx0XHQvKiDlnKhbW1NwZWNpYWw6TGlua1NlYXJjaF1d5pi+56S64oCc57yW6L6R4oCd5oyJ6ZKuICovXG5cdFx0bGlua1NlYXJjaEVkaXRCdXR0b24oJGJvZHkpO1xuXHRcdC8qIOe8lui+keaPkOekuu+8iEVkaXRJbnRyb++8iSAqL1xuXHRcdHNtYXJ0RWRpdEludHJvKCRib2R5KTtcblx0XHQvKiDmmbrog73orqjorrrpobXnvJbovpHvvIjmlrDlu7rvvIkgKi9cblx0XHRzbWFydE5ld1NlY3Rpb24oJGJvZHkpO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5leHBvcnQgY29uc3QgbGlua1NlYXJjaEVkaXRCdXR0b24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpICE9PSAnTGlua1NlYXJjaCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJy5tdy1zcGNvbnRlbnQgYVtocmVmXj1cIi93aWtpXCJdJykpIHtcblx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0LmFwcGVuZCgnIO+8iCcsICQoJzxhPicpLmF0dHIoJ2hyZWYnLCBgJHtlbGVtZW50LmhyZWZ9P2FjdGlvbj1lZGl0YCkudGV4dChnZXRNZXNzYWdlKCdFZGl0JykpLCAn77yJJylcblx0XHRcdC5pbnNlcnRBZnRlcihlbGVtZW50KTtcblx0fVxufTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IEVESVRfR0FER0VUUyA9IFsnZXh0LmdhZGdldC5FZGl0Rm9ybScsICdleHQuZ2FkZ2V0LkVkaXRGb3JtX0pTJ107XG5cbmNvbnN0IHVzaW5nRWRpdEZvcm1KUyA9IChnYWRnZXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHR2b2lkIG13LmxvYWRlci51c2luZyhnYWRnZXRzKTtcbn07XG5cbmNvbnN0IGxvYWRHYWRnZXRFZGl0Rm9ybSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTikge1xuXHRcdHVzaW5nRWRpdEZvcm1KUyhFRElUX0dBREdFVFMpO1xuXHR9XG59O1xuXG5leHBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX07XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX0NBVEVHT1JJRVMsIFdHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBzbWFydEVkaXRJbnRybyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFXR19DQVRFR09SSUVTKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQoJy5tdy1lZGl0c2VjdGlvbiwgI2NhLWVkaXQsICNjYS1hZGRzZWN0aW9uJykuZmluZCgnYScpO1xuXHRjb25zdCBhZGRFZGl0SW50cm8gPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICR0YXJnZXQpIHtcblx0XHRcdGVsZW1lbnQuaHJlZiA9IGAke2VsZW1lbnQuaHJlZn0mZWRpdGludHJvPSR7bmFtZX1gO1xuXHRcdH1cblx0fTtcblxuXHRzd2l0Y2ggKFdHX05BTUVTUEFDRV9OVU1CRVIpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpEaXNhbWJpZ19lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCflnKjkuJbkurrniaknKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkJMUF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0V0dfQ0FURUdPUklFUy5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gL+aKl+aXpT9b5oiY5oiwXVvkuonniK1dP1vnibrniqdd54myfOeDiOWjq3xb5oiY5oiwXVvmlpfprKXprKZd6Iux6ZuEfOiLsembhD/mqKFb56+E6IyDXT986Iux6ZuEP+eDiOWjqz985Lq65rCRKOaVmeiCsuWutnxb6Im66JedXVvmnK/ooZNd5a62fOenkVvlrablrbhd5a62fOiLsembhHzmpbfmqKEpfOWFseWSjFvlm73lnItdW+WLi+WLs13nq6B8W+S4g+WFq13kuIBb5YuL5YuzXeeroFvnjbLojrdd5b6X6ICFfFvkuIDnibld562J5Yqf6IejLy50ZXN0KFxuXHRcdFx0XHRcdFx0ZWxlbWVudFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpCTFBfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygn5rGC6Ze755m+56eR5pa56ZKI5a6M5pW05YiX6KGoJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpQb2xpY3lfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDg6XG5cdFx0Y2FzZSAxMjoge1xuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ0NDLUJZLU5DLVNBLTQuMCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6Tm9uQ29tbWVyY2lhbF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCdHUEwtMy4wJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpHUEwtMy4wX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ0dQTC0yLjAtb3ItbGF0ZXInKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkdQTC0yLjAtb3ItbGF0ZXJfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygnTUlU6K645Y+v6K+BJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpNSVRfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkY29weXdhcm46IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNlZGl0cGFnZS1jb3B5d2FybicpO1xuXHRcdFx0Y29uc3QgJGVkaXRpbnRybzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWVkaXRpbnRybycpO1xuXHRcdFx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiAmJiAkY29weXdhcm4gJiYgJGVkaXRpbnRybykge1xuXHRcdFx0XHQkZWRpdGludHJvLmFwcGVuZFRvKCRjb3B5d2Fybik7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c21hcnRFZGl0SW50cm99O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IHNtYXJ0TmV3U2VjdGlvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtbmV3dG9waWN0b29sJykgfHwgIW13LnVzZXIub3B0aW9ucy5nZXQoJ2Rpc2N1c3Npb250b29scy1iZXRhZW5hYmxlJykpIHtcblx0XHRjb25zdCAkY2FUYWxrOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2EtdGFsaycpO1xuXHRcdGlmICgkY2FUYWxrLmhhc0NsYXNzKCduZXcnKSAmJiBXR19OQU1FU1BBQ0VfTlVNQkVSICE9PSAyKSB7XG5cdFx0XHRjb25zdCAkYTogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoJ2E6Zmlyc3QnLCAkY2FUYWxrKTtcblx0XHRcdCRhLmF0dHIoJ2hyZWYnLCBgJHskYS5hdHRyKCdocmVmJyl9JnNlY3Rpb249bmV3YCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3NtYXJ0TmV3U2VjdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxpQ0FBaURILEdBQUdDLE9BQU9DLElBQUksNEJBQTRCO0FBQ2pHLElBQU1FLGdCQUEwQkosR0FBR0MsT0FBT0MsSUFBSSxjQUFjO0FBQzVELElBQU1HLHNCQUE4QkwsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUI7QUFDckUsSUFBTUksZUFBdUJOLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUV2RCxJQUFNSyw4QkFBdUMsQ0FBQyxRQUFRLFFBQVEsRUFBRUMsU0FBU1QsU0FBUzs7QUNObEYsSUFBQVUsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE9BQUEsR0FBTUgsa0JBQUFJLFVBQVM7TUFDZEMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLE1BQUEsR0FBS1Asa0JBQUFJLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFdBQUEsR0FBVVIsa0JBQUFJLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFL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QmUseUJBQXFCZixLQUFLO0FBRTFCc0MsbUJBQWV0QyxLQUFLO0FBRXBCZ0Qsb0JBQWdCaEQsS0FBSztFQUN0QixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FIiwgIldHX0NBVEVHT1JJRVMiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJXR19QQUdFX05BTUUiLCAiSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OIiwgImluY2x1ZGVzIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkVkaXQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiTG9nIiwgIlN1YnBhZ2VzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhZGRMb2ciLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJnZXRVcmwiLCAicGFnZSIsICJhZGRTdWJwYWdlIiwgImNvbmNhdCIsICJmaXhTdW1tYXJ5IiwgIiRib2R5IiwgImZpbmQiLCAidmFsIiwgImh0bWwiLCAicHJvcCIsICJ0ZXh0IiwgInJlcGxhY2UiLCAiY2hlY2tlZCIsICJkaXNhYmxlZCIsICIkd3BSZWFzb24iLCAibGVuZ3RoIiwgImF1dG9TdW1tYXJ5UmVnRXhwIiwgInRlc3QiLCAiU3RyaW5nIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJsaW5rU2VhcmNoRWRpdEJ1dHRvbiIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkIiwgImFwcGVuZCIsICJhdHRyIiwgImhyZWYiLCAiaW5zZXJ0QWZ0ZXIiLCAiZXJyIiwgImUiLCAiZiIsICJFRElUX0dBREdFVFMiLCAidXNpbmdFZGl0Rm9ybUpTIiwgImdhZGdldHMiLCAibG9hZGVyIiwgInVzaW5nIiwgImxvYWRHYWRnZXRFZGl0Rm9ybSIsICJzbWFydEVkaXRJbnRybyIsICIkdGFyZ2V0IiwgImFkZEVkaXRJbnRybyIsICJuYW1lIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInNvbWUiLCAiJGNvcHl3YXJuIiwgIiRlZGl0aW50cm8iLCAiYXBwZW5kVG8iLCAic21hcnROZXdTZWN0aW9uIiwgInVzZXIiLCAib3B0aW9ucyIsICIkY2FUYWxrIiwgImhhc0NsYXNzIiwgIiRhIiwgInVzZXJKUyIsICJzZXQiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=
