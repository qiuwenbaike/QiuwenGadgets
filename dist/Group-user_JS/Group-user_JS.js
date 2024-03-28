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
//! src/Group-user_JS/modules/addLog.ts
var addLog = () => {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  if ([-1, 2, 3].includes(wgNamespaceNumber)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:Logs", {
    page: wgPageName
  }), getMessage("Log"), "t-log");
};
//! src/Group-user_JS/modules/addSubpage.ts
var addSubpage = () => {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  if ([-1, 0, 14].includes(wgNamespaceNumber)) {
    return;
  }
  mw.util.addPortletLink("p-tb", mw.util.getUrl("Special:PrefixIndex/".concat(wgPageName)), getMessage("Subpages"), "t-subpage");
};
//! src/Group-user_JS/modules/fixReason.ts
var fixReason = ($body) => {
  const {
    wgAction
  } = mw.config.get();
  if (wgAction === "delete") {
    const $wpReason = $body.find("input[name=wpReason]");
    if (!$wpReason.length) {
      return;
    }
    const autoReasonRegExp = /(内容|page was empty|content before blanking was)/i;
    if (autoReasonRegExp.test(String($wpReason.val()))) {
      $wpReason.val("");
    }
  }
};
//! src/Group-user_JS/modules/fixSummary.ts
var fixSummary = ($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  switch (wgCanonicalSpecialPageName) {
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
};
//! src/Group-user_JS/Group-user_JS.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Group-user_JS/modules/linkSearchEditButton.ts
var linkSearchEditButton = ($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "LinkSearch") {
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
var loadGadgetEditForm = () => {
  const EDIT_GADGETS = ["ext.gadget.EditForm", "ext.gadget.EditForm_JS"];
  const usingEditFormJS = (gadgets) => {
    void mw.loader.using(gadgets);
  };
  const {
    wgAction
  } = mw.config.get();
  if (["edit", "submit"].includes(wgAction)) {
    usingEditFormJS(EDIT_GADGETS);
  }
};
//! src/Group-user_JS/modules/smartEditIntro.ts
var smartEditIntro = ($body) => {
  const {
    wgAction,
    wgNamespaceNumber,
    wgCategories
  } = mw.config.get();
  if (!wgCategories) {
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
  switch (wgNamespaceNumber) {
    case 0:
      if (wgCategories.includes("全部消歧义页面")) {
        addEditIntro("Template:Disambig_editintro");
      }
      if (wgCategories.includes("在世人物")) {
        addEditIntro("Template:BLP_editintro");
      }
      if (wgCategories.some((element) => {
        return /抗日?[战戰][争爭]?[牺犧]牲|烈士|[战戰][斗鬥鬦]英雄|英雄?模[範范]?|英雄?烈士?|人民(教育家|[艺藝][术術]家|科[学學]家|英雄|楷模)|共和[国國][勋勳]章|[七八]一[勋勳]章[獲获]得者|[一特]等功臣/.test(element);
      })) {
        addEditIntro("Template:BLP_editintro");
      }
      break;
    case 4:
      if (wgCategories.includes("求闻百科方针完整列表")) {
        addEditIntro("Template:Policy_editintro");
      }
      break;
    case 8:
    case 12: {
      if (wgCategories.includes("CC-BY-NC-SA-4.0")) {
        addEditIntro("Template:NonCommercial_editintro");
      }
      if (wgCategories.includes("GPL-3.0")) {
        addEditIntro("Template:GPL-3.0_editintro");
      }
      if (wgCategories.includes("GPL-2.0-or-later")) {
        addEditIntro("Template:GPL-2.0-or-later_editintro");
      }
      if (wgCategories.includes("MIT许可证")) {
        addEditIntro("Template:MIT_editintro");
      }
      const $copywarn = $body.find("#editpage-copywarn");
      const $editintro = $body.find(".mw-editintro");
      if (["edit", "submit"].includes(wgAction) && $copywarn && $editintro) {
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
    const {
      wgNamespaceNumber
    } = mw.config.get();
    if ($caTalk.hasClass("new") && wgNamespaceNumber !== 2) {
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
    fixReason($body);
    fixSummary($body);
    linkSearchEditButton($body);
    smartEditIntro($body);
    smartNewSection($body);
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvYWRkTG9nLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvYWRkU3VicGFnZS50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2ZpeFJlYXNvbi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2ZpeFN1bW1hcnkudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvR3JvdXAtdXNlcl9KUy50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2xpbmtTZWFyY2hFZGl0QnV0dG9uLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvbG9hZEdhZGdldEVkaXRGb3JtLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvc21hcnRFZGl0SW50cm8udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydE5ld1NlY3Rpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZycsXG5cdFx0XHRqYTogJ+ODreOCsCcsXG5cdFx0XHQnemgtaGFucyc6ICfml6Xlv5cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pel6KqMJyxcblx0XHR9KSxcblx0XHRTdWJwYWdlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdWJwYWdlJyxcblx0XHRcdGphOiAn5a2Q44Oa44O844K4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtkOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZDpoIHpnaInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZExvZyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWy0xLCAyLCAzXS5pbmNsdWRlcyh3Z05hbWVzcGFjZU51bWJlcikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLXRiJyxcblx0XHRtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2dzJywge1xuXHRcdFx0cGFnZTogd2dQYWdlTmFtZSxcblx0XHR9KSxcblx0XHRnZXRNZXNzYWdlKCdMb2cnKSxcblx0XHQndC1sb2cnXG5cdCk7XG59O1xuXG5leHBvcnQge2FkZExvZ307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG4vKiDlkJHkvqfovrnmoI/mt7vliqDigJzlrZDpobXpnaLigJ3oj5zljZUgKi9cbmNvbnN0IGFkZFN1YnBhZ2UgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKFstMSwgMCwgMTRdLmluY2x1ZGVzKHdnTmFtZXNwYWNlTnVtYmVyKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0J3AtdGInLFxuXHRcdG13LnV0aWwuZ2V0VXJsKGBTcGVjaWFsOlByZWZpeEluZGV4LyR7d2dQYWdlTmFtZX1gKSxcblx0XHRnZXRNZXNzYWdlKCdTdWJwYWdlcycpLFxuXHRcdCd0LXN1YnBhZ2UnXG5cdCk7XG59O1xuXG5leHBvcnQge2FkZFN1YnBhZ2V9O1xuIiwgImNvbnN0IGZpeFJlYXNvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dBY3Rpb24gPT09ICdkZWxldGUnKSB7XG5cdFx0Y29uc3QgJHdwUmVhc29uOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwUmVhc29uXScpO1xuXHRcdGlmICghJHdwUmVhc29uLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGF1dG9SZWFzb25SZWdFeHA6IFJlZ0V4cCA9IC8o5YaF5a65fHBhZ2Ugd2FzIGVtcHR5fGNvbnRlbnQgYmVmb3JlIGJsYW5raW5nIHdhcykvaTtcblx0XHRpZiAoYXV0b1JlYXNvblJlZ0V4cC50ZXN0KFN0cmluZygkd3BSZWFzb24udmFsKCkpKSkge1xuXHRcdFx0JHdwUmVhc29uLnZhbCgnJyk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2ZpeFJlYXNvbn07XG4iLCAiY29uc3QgZml4U3VtbWFyeSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0c3dpdGNoICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSkge1xuXHRcdGNhc2UgJ0ZpbGVJbXBvcnRlci1TcGVjaWFsUGFnZSc6XG5cdFx0XHQkYm9keVxuXHRcdFx0XHQuZmluZCgnaW5wdXRbbmFtZT1pbnRlbmRlZFJldmlzaW9uU3VtbWFyeV0nKVxuXHRcdFx0XHQudmFsKFxuXHRcdFx0XHRcdGDlr7zlhaXoh6pbW2NvbW1vbnM6RmlsZTokeyRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnaDIubXctaW1wb3J0ZmlsZS1oZWFkZXItdGl0bGUnKVxuXHRcdFx0XHRcdFx0Lmh0bWwoKX185q2k5aSEXV3vvLvpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+aWh+S7tuiuuOWPr+ivt+WPguingemhtemdouaPj+i/sO+8vWBcblx0XHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ0ltcG9ydCc6IHtcblx0XHRcdC8vICNtdy1pbXBvcnQtdXBsb2FkLWZvcm1cblx0XHRcdGNvbnN0IHVzZXJOYW1lUHJlZml4SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XHQnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPXVzZXJuYW1lUHJlZml4XSdcblx0XHRcdClbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcdHVzZXJOYW1lUHJlZml4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGxvZ0NvbW1lbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdFx0JyNtdy1pbXBvcnQtdXBsb2FkLWZvcm0gaW5wdXRbbmFtZT1sb2ctY29tbWVudF0nXG5cdFx0XHRcdClbMF0gYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcdFx0Y29uc3QgaW1wb3J0VXBsb2FkUHJlZml4ID0gdXNlck5hbWVQcmVmaXhJbnB1dD8udmFsdWU7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbHVlID0gYOWvvOWFpeiHqltbJHtpbXBvcnRVcGxvYWRQcmVmaXh9OnzmraTnvZHnq5ldXeeahOWQjOWQjemhtemdou+8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77y9YDtcblx0XHRcdFx0bG9nQ29tbWVudElucHV0LnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0XHR9KTtcblx0XHRcdC8vICNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm1cblx0XHRcdCRib2R5XG5cdFx0XHRcdC5maW5kKCcjbXctaW1wb3J0LWludGVyd2lraS1mb3JtIGlucHV0W25hbWU9bG9nLWNvbW1lbnRdJylcblx0XHRcdFx0LnZhbCgn77y76aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvJvkvZzogIXor7flj4Lop4HmnaXmupDpobXpnaLljoblj7LvvL0nKTtcblx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9YXNzaWduS25vd25Vc2Vyc10nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Y2FzZSAnTWFzc0VkaXRSZWdleCc6XG5cdFx0XHQkYm9keS5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKS5odG1sKFxuXHRcdFx0XHQkYm9keVxuXHRcdFx0XHRcdC5maW5kKCcjd3BTdW1tYXJ5TGFiZWwnKVxuXHRcdFx0XHRcdC50ZXh0KClcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbI1xcLlxcfCguKz8pXV0vZywgJyQxJylcblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdSZXBsYWNlVGV4dCc6XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPWRvQW5ub3VuY2VdJykucHJvcCh7XG5cdFx0XHRcdGNoZWNrZWQ6IGZhbHNlLFxuXHRcdFx0XHRkaXNhYmxlZDogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0YnJlYWs7XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4U3VtbWFyeX07XG4iLCAiaW1wb3J0IHthZGRMb2d9IGZyb20gJy4vbW9kdWxlcy9hZGRMb2cnO1xuaW1wb3J0IHthZGRTdWJwYWdlfSBmcm9tICcuL21vZHVsZXMvYWRkU3VicGFnZSc7XG5pbXBvcnQge2ZpeFJlYXNvbn0gZnJvbSAnLi9tb2R1bGVzL2ZpeFJlYXNvbic7XG5pbXBvcnQge2ZpeFN1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9maXhTdW1tYXJ5JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bGlua1NlYXJjaEVkaXRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9saW5rU2VhcmNoRWRpdEJ1dHRvbic7XG5pbXBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRHYWRnZXRFZGl0Rm9ybSc7XG5pbXBvcnQge3NtYXJ0RWRpdEludHJvfSBmcm9tICcuL21vZHVsZXMvc21hcnRFZGl0SW50cm8nO1xuaW1wb3J0IHtzbWFydE5ld1NlY3Rpb259IGZyb20gJy4vbW9kdWxlcy9zbWFydE5ld1NlY3Rpb24nO1xuXG4oZnVuY3Rpb24gdXNlckpTKCk6IHZvaWQge1xuXHRjb25zdCBjb25maWdLZXk6IHN0cmluZyA9ICdnYWRnZXQtR3JvdXAtdXNlcl9KU19fSW5pdGlhbGl6ZWQnO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8qIOWKoOi9vee8lui+keeVjOmdouiEmuacrCAqL1xuXHR2b2lkIGxvYWRHYWRnZXRFZGl0Rm9ybSgpO1xuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOaXpeW/l+KAneiPnOWNlSAqL1xuXHRcdGFkZExvZygpO1xuXHRcdC8qIOWQkeS+p+i+ueagj+a3u+WKoOKAnOWtkOmhtemdouKAneiPnOWNlSAqL1xuXHRcdGFkZFN1YnBhZ2UoKTtcblx0XHQvKiDkv67mlLnliKDpmaTmkZjopoEgKi9cblx0XHRmaXhSZWFzb24oJGJvZHkpO1xuXHRcdC8qIOS/ruaUuee8lui+keaRmOimgSAqL1xuXHRcdGZpeFN1bW1hcnkoJGJvZHkpO1xuXHRcdC8qIOWcqFtbU3BlY2lhbDpMaW5rU2VhcmNoXV3mmL7npLrigJznvJbovpHigJ3mjInpkq4gKi9cblx0XHRsaW5rU2VhcmNoRWRpdEJ1dHRvbigkYm9keSk7XG5cdFx0Lyog57yW6L6R5o+Q56S677yIRWRpdEludHJv77yJICovXG5cdFx0c21hcnRFZGl0SW50cm8oJGJvZHkpO1xuXHRcdC8qIOaZuuiDveiuqOiuuumhtee8lui+ke+8iOaWsOW7uu+8iSAqL1xuXHRcdHNtYXJ0TmV3U2VjdGlvbigkYm9keSk7XG5cdH0pO1xufSkoKTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGxpbmtTZWFyY2hFZGl0QnV0dG9uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdMaW5rU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignLm13LXNwY29udGVudCBhW2hyZWZePVwiL3dpa2lcIl0nKSkge1xuXHRcdCQoJzxzcGFuPicpXG5cdFx0XHQuYXBwZW5kKCcg77yIJywgJCgnPGE+JykuYXR0cignaHJlZicsIGAke2VsZW1lbnQuaHJlZn0/YWN0aW9uPWVkaXRgKS50ZXh0KGdldE1lc3NhZ2UoJ0VkaXQnKSksICfvvIknKVxuXHRcdFx0Lmluc2VydEFmdGVyKGVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge2xpbmtTZWFyY2hFZGl0QnV0dG9ufTtcbiIsICJjb25zdCBsb2FkR2FkZ2V0RWRpdEZvcm0gPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IEVESVRfR0FER0VUUyA9IFsnZXh0LmdhZGdldC5FZGl0Rm9ybScsICdleHQuZ2FkZ2V0LkVkaXRGb3JtX0pTJ107XG5cdGNvbnN0IHVzaW5nRWRpdEZvcm1KUyA9IChnYWRnZXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKGdhZGdldHMpO1xuXHR9O1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdHVzaW5nRWRpdEZvcm1KUyhFRElUX0dBREdFVFMpO1xuXHR9XG59O1xuXG5leHBvcnQge2xvYWRHYWRnZXRFZGl0Rm9ybX07XG4iLCAiY29uc3Qgc21hcnRFZGl0SW50cm8gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnQ2F0ZWdvcmllc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghd2dDYXRlZ29yaWVzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQoJy5tdy1lZGl0c2VjdGlvbiwgI2NhLWVkaXQsICNjYS1hZGRzZWN0aW9uJykuZmluZCgnYScpO1xuXHRjb25zdCBhZGRFZGl0SW50cm8gPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICR0YXJnZXQpIHtcblx0XHRcdGVsZW1lbnQuaHJlZiA9IGAke2VsZW1lbnQuaHJlZn0mZWRpdGludHJvPSR7bmFtZX1gO1xuXHRcdH1cblx0fTtcblxuXHRzd2l0Y2ggKHdnTmFtZXNwYWNlTnVtYmVyKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpEaXNhbWJpZ19lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ+WcqOS4luS6uueJqScpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6QkxQX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHR3Z0NhdGVnb3JpZXMuc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIC/mipfml6U/W+aImOaIsF1b5LqJ54itXT9b54m654qnXeeJsnzng4jlo6t8W+aImOaIsF1b5paX6ayl6aymXeiLsembhHzoi7Hpm4Q/5qihW+evhOiMg10/fOiLsembhD/ng4jlo6s/fOS6uuawkSjmlZnogrLlrrZ8W+iJuuiXnV1b5pyv6KGTXeWutnznp5Fb5a2m5a24XeWutnzoi7Hpm4R85qW35qihKXzlhbHlkoxb5Zu95ZyLXVvli4vli7Nd56ugfFvkuIPlhatd5LiAW+WLi+WLs13nq6Bb542y6I63XeW+l+iAhXxb5LiA54m5XeetieWKn+iHoy8udGVzdChcblx0XHRcdFx0XHRcdGVsZW1lbnRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6QkxQX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygn5rGC6Ze755m+56eR5pa56ZKI5a6M5pW05YiX6KGoJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpQb2xpY3lfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHRjYXNlIDg6XG5cdFx0Y2FzZSAxMjoge1xuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygnQ0MtQlktTkMtU0EtNC4wJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpOb25Db21tZXJjaWFsX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygnR1BMLTMuMCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6R1BMLTMuMF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ0dQTC0yLjAtb3ItbGF0ZXInKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkdQTC0yLjAtb3ItbGF0ZXJfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCdNSVTorrjlj6/or4EnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOk1JVF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRjb3B5d2FybjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2VkaXRwYWdlLWNvcHl3YXJuJyk7XG5cdFx0XHRjb25zdCAkZWRpdGludHJvOiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctZWRpdGludHJvJyk7XG5cdFx0XHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSAmJiAkY29weXdhcm4gJiYgJGVkaXRpbnRybykge1xuXHRcdFx0XHQkZWRpdGludHJvLmFwcGVuZFRvKCRjb3B5d2Fybik7XG5cdFx0XHR9XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7c21hcnRFZGl0SW50cm99O1xuIiwgImNvbnN0IHNtYXJ0TmV3U2VjdGlvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtbmV3dG9waWN0b29sJykgfHwgIW13LnVzZXIub3B0aW9ucy5nZXQoJ2Rpc2N1c3Npb250b29scy1iZXRhZW5hYmxlJykpIHtcblx0XHRjb25zdCAkY2FUYWxrOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2EtdGFsaycpO1xuXHRcdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdFx0aWYgKCRjYVRhbGsuaGFzQ2xhc3MoJ25ldycpICYmIHdnTmFtZXNwYWNlTnVtYmVyICE9PSAyKSB7XG5cdFx0XHRjb25zdCAkYTogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoJ2E6Zmlyc3QnLCAkY2FUYWxrKTtcblx0XHRcdCRhLmF0dHIoJ2hyZWYnLCBgJHskYS5hdHRyKCdocmVmJyl9JnNlY3Rpb249bmV3YCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3NtYXJ0TmV3U2VjdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE9BQUEsR0FBTUgsa0JBQUFJLFVBQVM7TUFDZEMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLE1BQUEsR0FBS1Asa0JBQUFJLFVBQVM7TUFDYkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFdBQUEsR0FBVVIsa0JBQUFJLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNB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QUFRLEtBQUt1RCxhQUFhQyxZQUFZO0FBQ3JFQSxtQkFBV0MsU0FBU0YsU0FBUztNQUM5QjtBQUNBO0lBQ0Q7RUFDRDtBQUNEOztBQzFEQSxJQUFNRyxrQkFBbUIzRCxXQUF5QztBQUNqRSxNQUFJLENBQUNYLEdBQUd1RSxLQUFLQyxRQUFRdEUsSUFBSSw4QkFBOEIsS0FBSyxDQUFDRixHQUFHdUUsS0FBS0MsUUFBUXRFLElBQUksNEJBQTRCLEdBQUc7QUFDL0csVUFBTXVFLFVBQWtCOUQsTUFBTUcsS0FBSyxVQUFVO0FBQzdDLFVBQU07TUFBQ2hCO0lBQWlCLElBQUlFLEdBQUdDLE9BQU9DLElBQUk7QUFDMUMsUUFBSXVFLFFBQVFDLFNBQVMsS0FBSyxLQUFLNUUsc0JBQXNCLEdBQUc7QUFDdkQsWUFBTTZFLEtBQWdDOUIsRUFBRSxXQUFXNEIsT0FBTztBQUMxREUsU0FBRzVCLEtBQUssUUFBQSxHQUFBdEMsT0FBV2tFLEdBQUc1QixLQUFLLE1BQU0sR0FBQyxjQUFBLENBQWM7SUFDakQ7RUFDRDtBQUNEOztDSkNDLFNBQVM2QixTQUFlO0FBQ3hCLFFBQU1DLFlBQW9CO0FBRzFCLE1BQUk3RSxHQUFHQyxPQUFPQyxJQUFJMkUsU0FBUyxHQUFHO0FBQzdCO0VBQ0Q7QUFFQTdFLEtBQUdDLE9BQU82RSxJQUFJRCxXQUFXLElBQUk7QUFHN0IsT0FBS3hCLG1CQUFtQjtBQUV4QixRQUFBLEdBQUtqQixtQkFBQTJDLFNBQVEsRUFBRUMsS0FBTXJFLFdBQXlDO0FBRTdEZCxXQUFPO0FBRVBXLGVBQVc7QUFFWEUsY0FBVUMsS0FBSztBQUVmUyxlQUFXVCxLQUFLO0FBRWhCMEIseUJBQXFCMUIsS0FBSztBQUUxQmdELG1CQUFlaEQsS0FBSztBQUVwQjJELG9CQUFnQjNELEtBQUs7RUFDdEIsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkVkaXQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiTG9nIiwgIlN1YnBhZ2VzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhZGRMb2ciLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiZ2V0VXJsIiwgInBhZ2UiLCAiYWRkU3VicGFnZSIsICJjb25jYXQiLCAiZml4UmVhc29uIiwgIiRib2R5IiwgIndnQWN0aW9uIiwgIiR3cFJlYXNvbiIsICJmaW5kIiwgImxlbmd0aCIsICJhdXRvUmVhc29uUmVnRXhwIiwgInRlc3QiLCAiU3RyaW5nIiwgInZhbCIsICJmaXhTdW1tYXJ5IiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImh0bWwiLCAidXNlck5hbWVQcmVmaXhJbnB1dCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAibG9nQ29tbWVudElucHV0IiwgImltcG9ydFVwbG9hZFByZWZpeCIsICJ2YWx1ZSIsICJuZXdWYWx1ZSIsICJwcm9wIiwgInRleHQiLCAicmVwbGFjZSIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJsaW5rU2VhcmNoRWRpdEJ1dHRvbiIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICIkIiwgImFwcGVuZCIsICJhdHRyIiwgImhyZWYiLCAiaW5zZXJ0QWZ0ZXIiLCAiZXJyIiwgImUiLCAiZiIsICJsb2FkR2FkZ2V0RWRpdEZvcm0iLCAiRURJVF9HQURHRVRTIiwgInVzaW5nRWRpdEZvcm1KUyIsICJnYWRnZXRzIiwgImxvYWRlciIsICJ1c2luZyIsICJzbWFydEVkaXRJbnRybyIsICJ3Z0NhdGVnb3JpZXMiLCAiJHRhcmdldCIsICJhZGRFZGl0SW50cm8iLCAibmFtZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJzb21lIiwgIiRjb3B5d2FybiIsICIkZWRpdGludHJvIiwgImFwcGVuZFRvIiwgInNtYXJ0TmV3U2VjdGlvbiIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiJGNhVGFsayIsICJoYXNDbGFzcyIsICIkYSIsICJ1c2VySlMiLCAiY29uZmlnS2V5IiwgInNldCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
