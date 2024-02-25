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
    case "Import": {
      const userNamePrefixInput = document.querySelectorAll("#mw-import-upload-form input[name=usernamePrefix]")[0];
      userNamePrefixInput.addEventListener("input", () => {
        const logCommentInput = document.querySelectorAll("#mw-import-upload-form input[name=log-comment]")[0];
        const importUploadPrefix = userNamePrefixInput === null || userNamePrefixInput === void 0 ? void 0 : userNamePrefixInput.value;
        const newValue = "导入自[[".concat(importUploadPrefix, ":|此网站]]的同名页面［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]］");
        logCommentInput.value = newValue;
      });
      $body.find("#mw-import-interwiki-form input[name=log-comment]").val("［页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史］");
      $body.find("input[name=assignKnownUsers]").prop("checked", true);
      break;
    }
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
  const configKey = "gadget-Group-user_JS__Initialized";
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9hZGRTdWJwYWdlQW5kTG9nLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvZml4U3VtbWFyeS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9Hcm91cC11c2VyX0pTLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvbGlua1NlYXJjaEVkaXRCdXR0b24udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9sb2FkR2FkZ2V0RWRpdEZvcm0udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydEVkaXRJbnRyby50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL3NtYXJ0TmV3U2VjdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfQUNUSU9OOiBNZWRpYVdpa2lDb25maWdNYXBXZ0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5jb25zdCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUU6IHN0cmluZyB8IGZhbHNlID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKTtcbmNvbnN0IFdHX0NBVEVHT1JJRVM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dDYXRlZ29yaWVzJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1xuXHRJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sXG5cdFdHX0FDVElPTixcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19DQVRFR09SSUVTLFxuXHRXR19OQU1FU1BBQ0VfTlVNQkVSLFxuXHRXR19QQUdFX05BTUUsXG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZycsXG5cdFx0XHRqYTogJ+ODreOCsCcsXG5cdFx0XHQnemgtaGFucyc6ICfml6Xlv5cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pel6KqMJyxcblx0XHR9KSxcblx0XHRTdWJwYWdlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdWJwYWdlJyxcblx0XHRcdGphOiAn5a2Q44Oa44O844K4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtkOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZDpoIHpnaInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX05BTUVTUEFDRV9OVU1CRVIsIFdHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZExvZyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFstMSwgMiwgM10uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLXRiJyxcblx0XHRtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2dzJywge1xuXHRcdFx0cGFnZTogV0dfUEFHRV9OQU1FLFxuXHRcdH0pLFxuXHRcdGdldE1lc3NhZ2UoJ0xvZycpLFxuXHRcdCd0LWxvZydcblx0KTtcbn07XG5cbi8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuY29uc3QgYWRkU3VicGFnZSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFstMSwgMCwgMTRdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC10YicsXG5cdFx0bXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6UHJlZml4SW5kZXgvJHtXR19QQUdFX05BTUV9YCksXG5cdFx0Z2V0TWVzc2FnZSgnU3VicGFnZXMnKSxcblx0XHQndC1zdWJwYWdlJ1xuXHQpO1xufTtcblxuZXhwb3J0IHthZGRMb2csIGFkZFN1YnBhZ2V9O1xuIiwgImltcG9ydCB7V0dfQUNUSU9OLCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBmaXhTdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRzd2l0Y2ggKFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSkge1xuXHRcdGNhc2UgJ0ZpbGVJbXBvcnRlci1TcGVjaWFsUGFnZSc6XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnaW5wdXRbbmFtZT1pbnRlbmRlZFJldmlzaW9uU3VtbWFyeV0nKVxuXHRcdFx0XHQudmFsKFxuXHRcdFx0XHRcdGDlr7zlhaXoh6pbW2NvbW1vbnM6RmlsZTokeyRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnaDIubXctaW1wb3J0ZmlsZS1oZWFkZXItdGl0bGUnKVxuXHRcdFx0XHRcdFx0Lmh0bWwoKX185q2k5aSEXV3vvLvpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+aWh+S7tuiuuOWPr+ivt+WPguingemhtemdouaPj+i/sO+8vWBcblx0XHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0ltcG9ydCc6IHtcblx0XHRcdC8vICNtdy1pbXBvcnQtdXBsb2FkLWZvcm1cblx0XHRcdGNvbnN0IHVzZXJOYW1lUHJlZml4SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XHQnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPXVzZXJuYW1lUHJlZml4XSdcblx0XHRcdClbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcdHVzZXJOYW1lUHJlZml4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGxvZ0NvbW1lbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdFx0JyNtdy1pbXBvcnQtdXBsb2FkLWZvcm0gaW5wdXRbbmFtZT1sb2ctY29tbWVudF0nXG5cdFx0XHRcdClbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcdFx0Y29uc3QgaW1wb3J0VXBsb2FkUHJlZml4ID0gdXNlck5hbWVQcmVmaXhJbnB1dD8udmFsdWU7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbHVlID0gYOWvvOWFpeiHqltbJHtpbXBvcnRVcGxvYWRQcmVmaXh9OnzmraTnvZHnq5ldXeeahOWQjOWQjemhtemdou+8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77y9YDtcblx0XHRcdFx0bG9nQ29tbWVudElucHV0LnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0XHR9KTtcblx0XHRcdC8vICNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm1cblx0XHRcdCRib2R5XG5cdFx0XHRcdC5maW5kKCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtIGlucHV0W25hbWU9bG9nLWNvbW1lbnRdJylcblx0XHRcdFx0LnZhbCgn77y76aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7LvvL0nKTtcblx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9YXNzaWduS25vd25Vc2Vyc10nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Y2FzZSAnTWFzc0VkaXRSZWdleCc6XG5cdFx0XHQkYm9keS5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKS5odG1sKFxuXHRcdFx0XHQkYm9keVxuXHRcdFx0XHRcdC5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKVxuXHRcdFx0XHRcdC50ZXh0KClcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbI1xcLlxcfCguKz8pXV0vZywgJyQxJylcblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdSZXBsYWNlVGV4dCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWRvQW5ub3VuY2VdJykucHJvcCh7XG5cdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRpZiAoV0dfQUNUSU9OID09PSAnZGVsZXRlJykge1xuXHRcdGNvbnN0ICR3cFJlYXNvbjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cFJlYXNvbl0nKTtcblx0XHRpZiAoISR3cFJlYXNvbi5sZW5ndGgpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhdXRvU3VtbWFyeVJlZ0V4cDogUmVnRXhwID0gLyjlhoXlrrl8cGFnZSB3YXMgZW1wdHl8Y29udGVudCBiZWZvcmUgYmxhbmtpbmcgd2FzKS9pO1xuXHRcdGlmIChhdXRvU3VtbWFyeVJlZ0V4cC50ZXN0KFN0cmluZygkd3BSZWFzb24udmFsKCkpKSkge1xuXHRcdFx0JHdwUmVhc29uLnZhbCgnJyk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2ZpeFN1bW1hcnl9O1xuIiwgImltcG9ydCB7YWRkTG9nLCBhZGRTdWJwYWdlfSBmcm9tICcuL21vZHVsZXMvYWRkU3VicGFnZUFuZExvZyc7XG5pbXBvcnQge2ZpeFN1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9maXhTdW1tYXJ5JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bGlua1NlYXJjaEVkaXRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbic7XG5pbXBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybSc7XG5pbXBvcnQge3NtYXJ0RWRpdEludHJvfSBmcm9tICcuL21vZHVsZXMvc21hcnRFZGl0SW50cm8nO1xuaW1wb3J0IHtzbWFydE5ld1NlY3Rpb259IGZyb20gJy4vbW9kdWxlcy9zbWFydE5ld1NlY3Rpb24nO1xuXG4oZnVuY3Rpb24gdXNlckpTKCk6IHZvaWQge1xuXHRjb25zdCBjb25maWdLZXk6IHN0cmluZyA9ICdnYWRnZXQtR3JvdXAtdXNlcl9KU19fSW5pdGlhbGl6ZWQnO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8qIOWKoOi9vee8lui+keeVjOmdouiEmuacrCAqL1xuXHR2b2lkIGxvYWRHYWRnZXRFZGl0Rm9ybSgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOaXpeW/l+KAneiPnOWNlSAqL1xuXHRcdGFkZExvZygpO1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuXHRcdGFkZFN1YnBhZ2UoKTtcblx0XHQvKiDkv67mlLnnvJbovpHmkZjopoEgKi9cblx0XHRmaXhTdW1tYXJ5KCRib2R5KTtcblx0XHQvKiDlnKhbW1NwZWNpYWw6TGlua1NlYXJjaF1d5pi+56S64oCc57yW6L6R4oCd5oyJ6ZKuICovXG5cdFx0bGlua1NlYXJjaEVkaXRCdXR0b24oJGJvZHkpO1xuXHRcdC8qIOe8lui+keaPkOekuu+8iEVkaXRJbnRyb++8iSAqL1xuXHRcdHNtYXJ0RWRpdEludHJvKCRib2R5KTtcblx0XHQvKiDmmbrog73orqjorrrpobXnvJbovpHvvIjmlrDlu7rvvIkgKi9cblx0XHRzbWFydE5ld1NlY3Rpb24oJGJvZHkpO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5leHBvcnQgY29uc3QgbGlua1NlYXJjaEVkaXRCdXR0b24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpICE9PSAnTGlua1NlYXJjaCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJy5tdy1zcGNvbnRlbnQgYVtocmVmXj1cIi93aWtpXCJdJykpIHtcblx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0LmFwcGVuZCgnIO+8iCcsICQoJzxhPicpLmF0dHIoJ2hyZWYnLCBgJHtlbGVtZW50LmhyZWZ9P2FjdGlvbj1lZGl0YCkudGV4dChnZXRNZXNzYWdlKCdFZGl0JykpLCAn77yJJylcblx0XHRcdC5pbnNlcnRBZnRlcihlbGVtZW50KTtcblx0fVxufTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IEVESVRfR0FER0VUUyA9IFsnZXh0LmdhZGdldC5FZGl0Rm9ybScsICdleHQuZ2FkZ2V0LkVkaXRGb3JtX0pTJ107XG5cbmNvbnN0IHVzaW5nRWRpdEZvcm1KUyA9IChnYWRnZXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHR2b2lkIG13LmxvYWRlci51c2luZyhnYWRnZXRzKTtcbn07XG5cbmNvbnN0IGxvYWRHYWRnZXRFZGl0Rm9ybSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTikge1xuXHRcdHVzaW5nRWRpdEZvcm1KUyhFRElUX0dBREdFVFMpO1xuXHR9XG59O1xuXG5leHBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX07XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX0NBVEVHT1JJRVMsIFdHX05BTUVTUEFDRV9OVU1CRVJ9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBzbWFydEVkaXRJbnRybyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFXR19DQVRFR09SSUVTKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQoJy5tdy1lZGl0c2VjdGlvbiwgI2NhLWVkaXQsICNjYS1hZGRzZWN0aW9uJykuZmluZCgnYScpO1xuXHRjb25zdCBhZGRFZGl0SW50cm8gPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICR0YXJnZXQpIHtcblx0XHRcdGVsZW1lbnQuaHJlZiA9IGAke2VsZW1lbnQuaHJlZn0mZWRpdGludHJvPSR7bmFtZX1gO1xuXHRcdH1cblx0fTtcblxuXHRzd2l0Y2ggKFdHX05BTUVTUEFDRV9OVU1CRVIpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpEaXNhbWJpZ19lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCflnKjkuJbkurrniaknKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkJMUF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0V0dfQ0FURUdPUklFUy5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gL+aKl+aXpT9b5oiY5oiwXVvkuonniK1dP1vnibrniqdd54myfOeDiOWjq3xb5oiY5oiwXVvmlpfprKXprKZd6Iux6ZuEfOiLsembhD/mqKFb56+E6IyDXT986Iux6ZuEP+eDiOWjqz985Lq65rCRKOaVmeiCsuWutnxb6Im66JedXVvmnK/ooZNd5a62fOenkVvlrablrbhd5a62fOiLsembhHzmpbfmqKEpfOWFseWSjFvlm73lnItdW+WLi+WLs13nq6B8W+S4g+WFq13kuIBb5YuL5YuzXeeroFvnjbLojrdd5b6X6ICFfFvkuIDnibld562J5Yqf6IejLy50ZXN0KFxuXHRcdFx0XHRcdFx0ZWxlbWVudFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpCTFBfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygn5rGC6Ze755m+56eR5pa56ZKI5a6M5pW05YiX6KGoJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpQb2xpY3lfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDg6XG5cdFx0Y2FzZSAxMjoge1xuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ0NDLUJZLU5DLVNBLTQuMCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6Tm9uQ29tbWVyY2lhbF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChXR19DQVRFR09SSUVTLmluY2x1ZGVzKCdHUEwtMy4wJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpHUEwtMy4wX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFdHX0NBVEVHT1JJRVMuaW5jbHVkZXMoJ0dQTC0yLjAtb3ItbGF0ZXInKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkdQTC0yLjAtb3ItbGF0ZXJfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoV0dfQ0FURUdPUklFUy5pbmNsdWRlcygnTUlU6K645Y+v6K+BJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpNSVRfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkY29weXdhcm46IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNlZGl0cGFnZS1jb3B5d2FybicpO1xuXHRcdFx0Y29uc3QgJGVkaXRpbnRybzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWVkaXRpbnRybycpO1xuXHRcdFx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiAmJiAkY29weXdhcm4gJiYgJGVkaXRpbnRybykge1xuXHRcdFx0XHQkZWRpdGludHJvLmFwcGVuZFRvKCRjb3B5d2Fybik7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c21hcnRFZGl0SW50cm99O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IHNtYXJ0TmV3U2VjdGlvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtbmV3dG9waWN0b29sJykgfHwgIW13LnVzZXIub3B0aW9ucy5nZXQoJ2Rpc2N1c3Npb250b29scy1iZXRhZW5hYmxlJykpIHtcblx0XHRjb25zdCAkY2FUYWxrOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2EtdGFsaycpO1xuXHRcdGlmICgkY2FUYWxrLmhhc0NsYXNzKCduZXcnKSAmJiBXR19OQU1FU1BBQ0VfTlVNQkVSICE9PSAyKSB7XG5cdFx0XHRjb25zdCAkYTogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoJ2E6Zmlyc3QnLCAkY2FUYWxrKTtcblx0XHRcdCRhLmF0dHIoJ2hyZWYnLCBgJHskYS5hdHRyKCdocmVmJyl9JnNlY3Rpb249bmV3YCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3NtYXJ0TmV3U2VjdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxpQ0FBaURILEdBQUdDLE9BQU9DLElBQUksNEJBQTRCO0FBQ2pHLElBQU1FLGdCQUEwQkosR0FBR0MsT0FBT0MsSUFBSSxjQUFjO0FBQzVELElBQU1HLHNCQUE4QkwsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUI7QUFDckUsSUFBTUksZUFBdUJOLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUV2RCxJQUFNSyw4QkFBdUMsQ0FBQyxRQUFRLFFBQVEsRUFBRUMsU0FBU1QsU0FBUzs7QUNObEYsSUFBQVUsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE9BQUEsR0FBTUgsa0JBQUFJLFVBQVM7TUFDZEMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLE1BQUEsR0FBS1Asa0JBQUFJLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFdBQUEsR0FBVVIsa0JBQUFJLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUMxQkEsSUFBTUMsU0FBU0EsTUFBWTtBQUMxQixNQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRWIsU0FBU0gsbUJBQW1CLEdBQUc7QUFDN0M7RUFDRDtBQUVBTCxLQUFHc0IsS0FBS0MsZUFDUCxRQUNBdkIsR0FBR3NCLEtBQUtFLE9BQU8sZ0JBQWdCO0lBQzlCQyxNQUFNbkI7RUFDUCxDQUFDLEdBQ0RhLFdBQVcsS0FBSyxHQUNoQixPQUNEO0FBQ0Q7QUFHQSxJQUFNTyxhQUFhQSxNQUFZO0FBQzlCLE1BQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFbEIsU0FBU0gsbUJBQW1CLEdBQUc7QUFDOUM7RUFDRDtBQUVBTCxLQUFHc0IsS0FBS0MsZUFDUCxRQUNBdkIsR0FBR3NCLEtBQUtFLE9BQUEsdUJBQUFHLE9BQThCckIsWUFBWSxDQUFFLEdBQ3BEYSxXQUFXLFVBQVUsR0FDckIsV0FDRDtBQUNEOztBQzVCQSxJQUFNUyxhQUFjQyxXQUF5QztBQUM1RCxVQUFRMUIsZ0NBQUE7SUFDUCxLQUFLO0FBQ0owQixZQUNFQyxLQUFLLHFDQUFxQyxFQUMxQ0MsSUFBQSxxQkFBQUosT0FDcUJFLE1BQ25CQyxLQUFLLCtCQUErQixFQUNwQ0UsS0FBSyxHQUFDLDBEQUFBLENBQ1Q7QUFDRDtJQUNELEtBQUssVUFBVTtBQUVkLFlBQU1DLHNCQUFzQkMsU0FBU0MsaUJBQ3BDLG1EQUNELEVBQUUsQ0FBQztBQUNIRiwwQkFBb0JHLGlCQUFpQixTQUFTLE1BQU07QUFDbkQsY0FBTUMsa0JBQWtCSCxTQUFTQyxpQkFDaEMsZ0RBQ0QsRUFBRSxDQUFDO0FBQ0gsY0FBTUcscUJBQXFCTCx3QkFBQSxRQUFBQSx3QkFBQSxTQUFBLFNBQUFBLG9CQUFxQk07QUFDaEQsY0FBTUMsV0FBQSxRQUFBYixPQUFtQlcsb0JBQWtCLHFEQUFBO0FBQzNDRCx3QkFBZ0JFLFFBQVFDO01BQ3pCLENBQUM7QUFFRFgsWUFDRUMsS0FBSyxtREFBbUQsRUFDeERDLElBQUkscURBQXFEO0FBQzNERixZQUFNQyxLQUFLLDhCQUE4QixFQUFFVyxLQUFLLFdBQVcsSUFBSTtBQUMvRDtJQUNEO0lBQ0EsS0FBSztBQUNKWixZQUFNQyxLQUFLLGlCQUFpQixFQUFFRSxLQUM3QkgsTUFDRUMsS0FBSyxpQkFBaUIsRUFDdEJZLEtBQUssRUFDTEMsUUFBUSxxQkFBcUIsSUFBSSxDQUNwQztBQUNBO0lBQ0QsS0FBSztBQUNKZCxZQUFNQyxLQUFLLHdCQUF3QixFQUFFVyxLQUFLO1FBQ3pDRyxTQUFTO1FBQ1RDLFVBQVU7TUFDWCxDQUFDO0FBQ0Q7RUFDRjtBQUVBLE1BQUk5QyxjQUFjLFVBQVU7QUFDM0IsVUFBTStDLFlBQW9CakIsTUFBTUMsS0FBSyxzQkFBc0I7QUFDM0QsUUFBSSxDQUFDZ0IsVUFBVUMsUUFBUTtBQUN0QjtJQUNEO0FBRUEsVUFBTUMsb0JBQTRCO0FBQ2xDLFFBQUlBLGtCQUFrQkMsS0FBS0MsT0FBT0osVUFBVWYsSUFBSSxDQUFDLENBQUMsR0FBRztBQUNwRGUsZ0JBQVVmLElBQUksRUFBRTtJQUNqQjtFQUNEO0FBQ0Q7O0FDMURBLElBQUFvQixxQkFBc0J6QyxRQUFBLGlCQUFBOztBQ0FmLElBQU0wQyx1QkFBd0J2QixXQUF5QztBQUM3RSxNQUFJN0IsR0FBR0MsT0FBT0MsSUFBSSw0QkFBNEIsTUFBTSxjQUFjO0FBQ2pFO0VBQ0Q7QUFBQSxNQUFBbUQsWUFBQUMsMkJBRXNCekIsTUFBTUMsS0FBd0IsZ0NBQWdDLENBQUEsR0FBQXlCO0FBQUEsTUFBQTtBQUFwRixTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUF1RjtBQUFBLFlBQTVFQyxVQUFBSixNQUFBaEI7QUFDVnFCLFFBQUUsUUFBUSxFQUNSQyxPQUFPLE1BQU1ELEVBQUUsS0FBSyxFQUFFRSxLQUFLLFFBQUEsR0FBQW5DLE9BQVdnQyxRQUFRSSxNQUFJLGNBQUEsQ0FBYyxFQUFFckIsS0FBS3ZCLFdBQVcsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUMvRjZDLFlBQVlMLE9BQU87SUFDdEI7RUFBQSxTQUFBTSxLQUFBO0FBQUFaLGNBQUFhLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFaLGNBQUFjLEVBQUE7RUFBQTtBQUNEOztBQ1ZBLElBQU1DLGVBQWUsQ0FBQyx1QkFBdUIsd0JBQXdCO0FBRXJFLElBQU1DLGtCQUFtQkMsYUFBcUM7QUFDN0QsT0FBS3RFLEdBQUd1RSxPQUFPQyxNQUFNRixPQUFPO0FBQzdCO0FBRUEsSUFBTUcscUJBQXFCQSxNQUFZO0FBQ3RDLE1BQUlsRSw2QkFBNkI7QUFDaEM4RCxvQkFBZ0JELFlBQVk7RUFDN0I7QUFDRDs7QUNWQSxJQUFNTSxpQkFBa0I3QyxXQUF5QztBQUNoRSxNQUFJLENBQUN6QixlQUFlO0FBQ25CO0VBQ0Q7QUFFQSxRQUFNdUUsVUFBcUM5QyxNQUFNQyxLQUFLLDJDQUEyQyxFQUFFQSxLQUFLLEdBQUc7QUFDM0csUUFBTThDLGVBQWdCQyxVQUF1QjtBQUFBLFFBQUFDLGFBQUF4QiwyQkFDdEJxQixPQUFBLEdBQUFJO0FBQUEsUUFBQTtBQUF0QixXQUFBRCxXQUFBdEIsRUFBQSxHQUFBLEVBQUF1QixTQUFBRCxXQUFBckIsRUFBQSxHQUFBQyxRQUErQjtBQUFBLGNBQXBCQyxVQUFBb0IsT0FBQXhDO0FBQ1ZvQixnQkFBUUksT0FBQSxHQUFBcEMsT0FBVWdDLFFBQVFJLE1BQUksYUFBQSxFQUFBcEMsT0FBY2tELElBQUk7TUFDakQ7SUFBQSxTQUFBWixLQUFBO0FBQUFhLGlCQUFBWixFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBYSxpQkFBQVgsRUFBQTtJQUFBO0VBQ0Q7QUFFQSxVQUFROUQscUJBQUE7SUFDUCxLQUFLO0FBQ0osVUFBSUQsY0FBY0ksU0FBUyxTQUFTLEdBQUc7QUFDdENvRSxxQkFBYSw2QkFBNkI7TUFDM0M7QUFDQSxVQUFJeEUsY0FBY0ksU0FBUyxNQUFNLEdBQUc7QUFDbkNvRSxxQkFBYSx3QkFBd0I7TUFDdEM7QUFDQSxVQUNDeEUsY0FBYzRFLEtBQU1yQixhQUE2QjtBQUNoRCxlQUFPLHdIQUF3SFYsS0FDOUhVLE9BQ0Q7TUFDRCxDQUFDLEdBQ0E7QUFDRGlCLHFCQUFhLHdCQUF3QjtNQUN0QztBQUNBO0lBQ0QsS0FBSztBQUNKLFVBQUl4RSxjQUFjSSxTQUFTLFlBQVksR0FBRztBQUN6Q29FLHFCQUFhLDJCQUEyQjtNQUN6QztBQUNBO0lBQ0QsS0FBSztJQUNMLEtBQUssSUFBSTtBQUNSLFVBQUl4RSxjQUFjSSxTQUFTLGlCQUFpQixHQUFHO0FBQzlDb0UscUJBQWEsa0NBQWtDO01BQ2hEO0FBQ0EsVUFBSXhFLGNBQWNJLFNBQVMsU0FBUyxHQUFHO0FBQ3RDb0UscUJBQWEsNEJBQTRCO01BQzFDO0FBQ0EsVUFBSXhFLGNBQWNJLFNBQVMsa0JBQWtCLEdBQUc7QUFDL0NvRSxxQkFBYSxxQ0FBcUM7TUFDbkQ7QUFDQSxVQUFJeEUsY0FBY0ksU0FBUyxRQUFRLEdBQUc7QUFDckNvRSxxQkFBYSx3QkFBd0I7TUFDdEM7QUFDQSxZQUFNSyxZQUFvQnBELE1BQU1DLEtBQUssb0JBQW9CO0FBQ3pELFlBQU1vRCxhQUFxQnJELE1BQU1DLEtBQUssZUFBZTtBQUNyRCxVQUFJdkIsK0JBQStCMEUsYUFBYUMsWUFBWTtBQUMzREEsbUJBQVdDLFNBQVNGLFNBQVM7TUFDOUI7QUFDQTtJQUNEO0VBQ0Q7QUFDRDs7QUN6REEsSUFBTUcsa0JBQW1CdkQsV0FBeUM7QUFDakUsTUFBSSxDQUFDN0IsR0FBR3FGLEtBQUtDLFFBQVFwRixJQUFJLDhCQUE4QixLQUFLLENBQUNGLEdBQUdxRixLQUFLQyxRQUFRcEYsSUFBSSw0QkFBNEIsR0FBRztBQUMvRyxVQUFNcUYsVUFBa0IxRCxNQUFNQyxLQUFLLFVBQVU7QUFDN0MsUUFBSXlELFFBQVFDLFNBQVMsS0FBSyxLQUFLbkYsd0JBQXdCLEdBQUc7QUFDekQsWUFBTW9GLEtBQWdDN0IsRUFBRSxXQUFXMkIsT0FBTztBQUMxREUsU0FBRzNCLEtBQUssUUFBQSxHQUFBbkMsT0FBVzhELEdBQUczQixLQUFLLE1BQU0sR0FBQyxjQUFBLENBQWM7SUFDakQ7RUFDRDtBQUNEOztDSkZDLFNBQVM0QixTQUFlO0FBQ3hCLFFBQU1DLFlBQW9CO0FBRzFCLE1BQUkzRixHQUFHQyxPQUFPQyxJQUFJeUYsU0FBUyxHQUFHO0FBQzdCO0VBQ0Q7QUFFQTNGLEtBQUdDLE9BQU8yRixJQUFJRCxXQUFXLElBQUk7QUFHN0IsT0FBS2xCLG1CQUFtQjtBQUV4QixRQUFBLEdBQUt0QixtQkFBQTBDLFNBQVEsRUFBRUMsS0FBTWpFLFdBQXlDO0FBRTdEUixXQUFPO0FBRVBLLGVBQVc7QUFFWEUsZUFBV0MsS0FBSztBQUVoQnVCLHlCQUFxQnZCLEtBQUs7QUFFMUI2QyxtQkFBZTdDLEtBQUs7QUFFcEJ1RCxvQkFBZ0J2RCxLQUFLO0VBQ3RCLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUiLCAiV0dfQ0FURUdPUklFUyIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIldHX1BBR0VfTkFNRSIsICJJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04iLCAiaW5jbHVkZXMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiRWRpdCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJMb2ciLCAiU3VicGFnZXMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFkZExvZyIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImdldFVybCIsICJwYWdlIiwgImFkZFN1YnBhZ2UiLCAiY29uY2F0IiwgImZpeFN1bW1hcnkiLCAiJGJvZHkiLCAiZmluZCIsICJ2YWwiLCAiaHRtbCIsICJ1c2VyTmFtZVByZWZpeElucHV0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJsb2dDb21tZW50SW5wdXQiLCAiaW1wb3J0VXBsb2FkUHJlZml4IiwgInZhbHVlIiwgIm5ld1ZhbHVlIiwgInByb3AiLCAidGV4dCIsICJyZXBsYWNlIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAiJHdwUmVhc29uIiwgImxlbmd0aCIsICJhdXRvU3VtbWFyeVJlZ0V4cCIsICJ0ZXN0IiwgIlN0cmluZyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAibGlua1NlYXJjaEVkaXRCdXR0b24iLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAiJCIsICJhcHBlbmQiLCAiYXR0ciIsICJocmVmIiwgImluc2VydEFmdGVyIiwgImVyciIsICJlIiwgImYiLCAiRURJVF9HQURHRVRTIiwgInVzaW5nRWRpdEZvcm1KUyIsICJnYWRnZXRzIiwgImxvYWRlciIsICJ1c2luZyIsICJsb2FkR2FkZ2V0RWRpdEZvcm0iLCAic21hcnRFZGl0SW50cm8iLCAiJHRhcmdldCIsICJhZGRFZGl0SW50cm8iLCAibmFtZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJzb21lIiwgIiRjb3B5d2FybiIsICIkZWRpdGludHJvIiwgImFwcGVuZFRvIiwgInNtYXJ0TmV3U2VjdGlvbiIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiJGNhVGFsayIsICJoYXNDbGFzcyIsICIkYSIsICJ1c2VySlMiLCAiY29uZmlnS2V5IiwgInNldCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
