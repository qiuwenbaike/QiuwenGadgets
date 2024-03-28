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
//! src/Group-user_JS/modules/addSubpageAndLog.ts
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvYWRkU3VicGFnZUFuZExvZy50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2ZpeFJlYXNvbi50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2ZpeFN1bW1hcnkudHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvR3JvdXAtdXNlcl9KUy50cyIsICJzcmMvR3JvdXAtdXNlcl9KUy9tb2R1bGVzL2xpbmtTZWFyY2hFZGl0QnV0dG9uLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvbG9hZEdhZGdldEVkaXRGb3JtLnRzIiwgInNyYy9Hcm91cC11c2VyX0pTL21vZHVsZXMvc21hcnRFZGl0SW50cm8udHMiLCAic3JjL0dyb3VwLXVzZXJfSlMvbW9kdWxlcy9zbWFydE5ld1NlY3Rpb24udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZycsXG5cdFx0XHRqYTogJ+ODreOCsCcsXG5cdFx0XHQnemgtaGFucyc6ICfml6Xlv5cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pel6KqMJyxcblx0XHR9KSxcblx0XHRTdWJwYWdlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdWJwYWdlJyxcblx0XHRcdGphOiAn5a2Q44Oa44O844K4Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtkOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICflrZDpoIHpnaInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGFkZExvZyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWy0xLCAyLCAzXS5pbmNsdWRlcyh3Z05hbWVzcGFjZU51bWJlcikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdCdwLXRiJyxcblx0XHRtdy51dGlsLmdldFVybCgnU3BlY2lhbDpMb2dzJywge1xuXHRcdFx0cGFnZTogd2dQYWdlTmFtZSxcblx0XHR9KSxcblx0XHRnZXRNZXNzYWdlKCdMb2cnKSxcblx0XHQndC1sb2cnXG5cdCk7XG59O1xuXG4vKiDlkJHkvqfovrnmoI/mt7vliqDigJzlrZDpobXpnaLigJ3oj5zljZUgKi9cbmNvbnN0IGFkZFN1YnBhZ2UgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKFstMSwgMCwgMTRdLmluY2x1ZGVzKHdnTmFtZXNwYWNlTnVtYmVyKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0J3AtdGInLFxuXHRcdG13LnV0aWwuZ2V0VXJsKGBTcGVjaWFsOlByZWZpeEluZGV4LyR7d2dQYWdlTmFtZX1gKSxcblx0XHRnZXRNZXNzYWdlKCdTdWJwYWdlcycpLFxuXHRcdCd0LXN1YnBhZ2UnXG5cdCk7XG59O1xuXG5leHBvcnQge2FkZExvZywgYWRkU3VicGFnZX07XG4iLCAiY29uc3QgZml4UmVhc29uID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ2RlbGV0ZScpIHtcblx0XHRjb25zdCAkd3BSZWFzb246IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BSZWFzb25dJyk7XG5cdFx0aWYgKCEkd3BSZWFzb24ubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYXV0b1JlYXNvblJlZ0V4cDogUmVnRXhwID0gLyjlhoXlrrl8cGFnZSB3YXMgZW1wdHl8Y29udGVudCBiZWZvcmUgYmxhbmtpbmcgd2FzKS9pO1xuXHRcdGlmIChhdXRvUmVhc29uUmVnRXhwLnRlc3QoU3RyaW5nKCR3cFJlYXNvbi52YWwoKSkpKSB7XG5cdFx0XHQkd3BSZWFzb24udmFsKCcnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7Zml4UmVhc29ufTtcbiIsICJjb25zdCBmaXhTdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRzd2l0Y2ggKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lKSB7XG5cdFx0Y2FzZSAnRmlsZUltcG9ydGVyLVNwZWNpYWxQYWdlJzpcblx0XHRcdCRib2R5XG5cdFx0XHRcdC5maW5kKCdpbnB1dFtuYW1lPWludGVuZGVkUmV2aXNpb25TdW1tYXJ5XScpXG5cdFx0XHRcdC52YWwoXG5cdFx0XHRcdFx0YOWvvOWFpeiHqltbY29tbW9uczpGaWxlOiR7JGJvZHlcblx0XHRcdFx0XHRcdC5maW5kKCdoMi5tdy1pbXBvcnRmaWxlLWhlYWRlci10aXRsZScpXG5cdFx0XHRcdFx0XHQuaHRtbCgpfXzmraTlpIRdXe+8u+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5paH5Lu26K645Y+v6K+35Y+C6KeB6aG16Z2i5o+P6L+w77y9YFxuXHRcdFx0XHQpO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnSW1wb3J0Jzoge1xuXHRcdFx0Ly8gI213LWltcG9ydC11cGxvYWQtZm9ybVxuXHRcdFx0Y29uc3QgdXNlck5hbWVQcmVmaXhJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdCcjbXctaW1wb3J0LXVwbG9hZC1mb3JtIGlucHV0W25hbWU9dXNlcm5hbWVQcmVmaXhdJ1xuXHRcdFx0KVswXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdFx0dXNlck5hbWVQcmVmaXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcblx0XHRcdFx0Y29uc3QgbG9nQ29tbWVudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdFx0XHQnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XSdcblx0XHRcdFx0KVswXSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdFx0XHRjb25zdCBpbXBvcnRVcGxvYWRQcmVmaXggPSB1c2VyTmFtZVByZWZpeElucHV0Py52YWx1ZTtcblx0XHRcdFx0Y29uc3QgbmV3VmFsdWUgPSBg5a+85YWl6IeqW1ske2ltcG9ydFVwbG9hZFByZWZpeH06fOatpOe9keermV1d55qE5ZCM5ZCN6aG16Z2i77y76aG16Z2i5paH5a2X5Y6f6K645Y+v77yaW1tjYy1ieS1zYTo0LjB8Q0MgQlktU0EgNC4wXV3vvL1gO1xuXHRcdFx0XHRsb2dDb21tZW50SW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gI213LWltcG9ydC1pbnRlcndpa2ktZm9ybVxuXHRcdFx0JGJvZHlcblx0XHRcdFx0LmZpbmQoJyNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm0gaW5wdXRbbmFtZT1sb2ctY29tbWVudF0nKVxuXHRcdFx0XHQudmFsKCfvvLvpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsu+8vScpO1xuXHRcdFx0JGJvZHkuZmluZCgnaW5wdXRbbmFtZT1hc3NpZ25Lbm93blVzZXJzXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRjYXNlICdNYXNzRWRpdFJlZ2V4Jzpcblx0XHRcdCRib2R5LmZpbmQoJyN3cFN1bW1hcnlMYWJlbCcpLmh0bWwoXG5cdFx0XHRcdCRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJyN3cFN1bW1hcnlMYWJlbCcpXG5cdFx0XHRcdFx0LnRleHQoKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsjXFwuXFx8KC4rPyldXS9nLCAnJDEnKVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ1JlcGxhY2VUZXh0Jzpcblx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9ZG9Bbm5vdW5jZV0nKS5wcm9wKHtcblx0XHRcdFx0Y2hlY2tlZDogZmFsc2UsXG5cdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0XHRicmVhaztcblx0fVxufTtcblxuZXhwb3J0IHtmaXhTdW1tYXJ5fTtcbiIsICJpbXBvcnQge2FkZExvZywgYWRkU3VicGFnZX0gZnJvbSAnLi9tb2R1bGVzL2FkZFN1YnBhZ2VBbmRMb2cnO1xuaW1wb3J0IHtmaXhSZWFzb259IGZyb20gJy4vbW9kdWxlcy9maXhSZWFzb24nO1xuaW1wb3J0IHtmaXhTdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvZml4U3VtbWFyeSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2xpbmtTZWFyY2hFZGl0QnV0dG9ufSBmcm9tICcuL21vZHVsZXMvbGlua1NlYXJjaEVkaXRCdXR0b24nO1xuaW1wb3J0IHtsb2FkR2FkZ2V0RWRpdEZvcm19IGZyb20gJy4vbW9kdWxlcy9sb2FkR2FkZ2V0RWRpdEZvcm0nO1xuaW1wb3J0IHtzbWFydEVkaXRJbnRyb30gZnJvbSAnLi9tb2R1bGVzL3NtYXJ0RWRpdEludHJvJztcbmltcG9ydCB7c21hcnROZXdTZWN0aW9ufSBmcm9tICcuL21vZHVsZXMvc21hcnROZXdTZWN0aW9uJztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0Y29uc3QgY29uZmlnS2V5OiBzdHJpbmcgPSAnZ2FkZ2V0LUdyb3VwLXVzZXJfSlNfX0luaXRpYWxpemVkJztcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KGNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoY29uZmlnS2V5LCB0cnVlKTtcblxuXHQvKiDliqDovb3nvJbovpHnlYzpnaLohJrmnKwgKi9cblx0dm9pZCBsb2FkR2FkZ2V0RWRpdEZvcm0oKTtcblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHQvKiDlkJHkvqfovrnmoI/mt7vliqDigJzml6Xlv5figJ3oj5zljZUgKi9cblx0XHRhZGRMb2coKTtcblx0XHQvKiDlkJHkvqfovrnmoI/mt7vliqDigJzlrZDpobXpnaLigJ3oj5zljZUgKi9cblx0XHRhZGRTdWJwYWdlKCk7XG5cdFx0Lyog5L+u5pS55Yig6Zmk5pGY6KaBICovXG5cdFx0Zml4UmVhc29uKCRib2R5KTtcblx0XHQvKiDkv67mlLnnvJbovpHmkZjopoEgKi9cblx0XHRmaXhTdW1tYXJ5KCRib2R5KTtcblx0XHQvKiDlnKhbW1NwZWNpYWw6TGlua1NlYXJjaF1d5pi+56S64oCc57yW6L6R4oCd5oyJ6ZKuICovXG5cdFx0bGlua1NlYXJjaEVkaXRCdXR0b24oJGJvZHkpO1xuXHRcdC8qIOe8lui+keaPkOekuu+8iEVkaXRJbnRyb++8iSAqL1xuXHRcdHNtYXJ0RWRpdEludHJvKCRib2R5KTtcblx0XHQvKiDmmbrog73orqjorrrpobXnvJbovpHvvIjmlrDlu7rvvIkgKi9cblx0XHRzbWFydE5ld1NlY3Rpb24oJGJvZHkpO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBsaW5rU2VhcmNoRWRpdEJ1dHRvbiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnTGlua1NlYXJjaCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJy5tdy1zcGNvbnRlbnQgYVtocmVmXj1cIi93aWtpXCJdJykpIHtcblx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0LmFwcGVuZCgnIO+8iCcsICQoJzxhPicpLmF0dHIoJ2hyZWYnLCBgJHtlbGVtZW50LmhyZWZ9P2FjdGlvbj1lZGl0YCkudGV4dChnZXRNZXNzYWdlKCdFZGl0JykpLCAn77yJJylcblx0XHRcdC5pbnNlcnRBZnRlcihlbGVtZW50KTtcblx0fVxufTtcblxuZXhwb3J0IHtsaW5rU2VhcmNoRWRpdEJ1dHRvbn07XG4iLCAiY29uc3QgbG9hZEdhZGdldEVkaXRGb3JtID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBFRElUX0dBREdFVFMgPSBbJ2V4dC5nYWRnZXQuRWRpdEZvcm0nLCAnZXh0LmdhZGdldC5FZGl0Rm9ybV9KUyddO1xuXHRjb25zdCB1c2luZ0VkaXRGb3JtSlMgPSAoZ2FkZ2V0czogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkID0+IHtcblx0XHR2b2lkIG13LmxvYWRlci51c2luZyhnYWRnZXRzKTtcblx0fTtcblx0Y29uc3Qge3dnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikpIHtcblx0XHR1c2luZ0VkaXRGb3JtSlMoRURJVF9HQURHRVRTKTtcblx0fVxufTtcblxuZXhwb3J0IHtsb2FkR2FkZ2V0RWRpdEZvcm19O1xuIiwgImNvbnN0IHNtYXJ0RWRpdEludHJvID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z0NhdGVnb3JpZXN9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIXdnQ2F0ZWdvcmllcykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYm9keS5maW5kKCcubXctZWRpdHNlY3Rpb24sICNjYS1lZGl0LCAjY2EtYWRkc2VjdGlvbicpLmZpbmQoJ2EnKTtcblx0Y29uc3QgYWRkRWRpdEludHJvID0gKG5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkdGFyZ2V0KSB7XG5cdFx0XHRlbGVtZW50LmhyZWYgPSBgJHtlbGVtZW50LmhyZWZ9JmVkaXRpbnRybz0ke25hbWV9YDtcblx0XHR9XG5cdH07XG5cblx0c3dpdGNoICh3Z05hbWVzcGFjZU51bWJlcikge1xuXHRcdGNhc2UgMDpcblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ+WFqOmDqOa2iOatp+S5iemhtemdoicpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6RGlzYW1iaWdfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCflnKjkuJbkurrniaknKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkJMUF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0d2dDYXRlZ29yaWVzLnNvbWUoKGVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0XHRcdHJldHVybiAv5oqX5pelP1vmiJjmiLBdW+S6ieeIrV0/W+eJuueKp13nibJ854OI5aOrfFvmiJjmiLBdW+aWl+mspemspl3oi7Hpm4R86Iux6ZuEP+aooVvnr4TojINdP3zoi7Hpm4Q/54OI5aOrP3zkurrmsJEo5pWZ6IKy5a62fFvoibrol51dW+acr+ihk13lrrZ856eRW+WtpuWtuF3lrrZ86Iux6ZuEfOalt+aooSl85YWx5ZKMW+WbveWci11b5YuL5YuzXeeroHxb5LiD5YWrXeS4gFvli4vli7Nd56ugW+eNsuiOt13lvpfogIV8W+S4gOeJuV3nrYnlip/oh6MvLnRlc3QoXG5cdFx0XHRcdFx0XHRlbGVtZW50XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdCkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkJMUF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ+axgumXu+eZvuenkeaWuemSiOWujOaVtOWIl+ihqCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6UG9saWN5X2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSA4OlxuXHRcdGNhc2UgMTI6IHtcblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ0NDLUJZLU5DLVNBLTQuMCcpKSB7XG5cdFx0XHRcdGFkZEVkaXRJbnRybygnVGVtcGxhdGU6Tm9uQ29tbWVyY2lhbF9lZGl0aW50cm8nKTtcblx0XHRcdH1cblx0XHRcdGlmICh3Z0NhdGVnb3JpZXMuaW5jbHVkZXMoJ0dQTC0zLjAnKSkge1xuXHRcdFx0XHRhZGRFZGl0SW50cm8oJ1RlbXBsYXRlOkdQTC0zLjBfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2dDYXRlZ29yaWVzLmluY2x1ZGVzKCdHUEwtMi4wLW9yLWxhdGVyJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpHUEwtMi4wLW9yLWxhdGVyX2VkaXRpbnRybycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdnQ2F0ZWdvcmllcy5pbmNsdWRlcygnTUlU6K645Y+v6K+BJykpIHtcblx0XHRcdFx0YWRkRWRpdEludHJvKCdUZW1wbGF0ZTpNSVRfZWRpdGludHJvJyk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkY29weXdhcm46IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNlZGl0cGFnZS1jb3B5d2FybicpO1xuXHRcdFx0Y29uc3QgJGVkaXRpbnRybzogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LWVkaXRpbnRybycpO1xuXHRcdFx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikgJiYgJGNvcHl3YXJuICYmICRlZGl0aW50cm8pIHtcblx0XHRcdFx0JGVkaXRpbnRyby5hcHBlbmRUbygkY29weXdhcm4pO1xuXHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3NtYXJ0RWRpdEludHJvfTtcbiIsICJjb25zdCBzbWFydE5ld1NlY3Rpb24gPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmICghbXcudXNlci5vcHRpb25zLmdldCgnZGlzY3Vzc2lvbnRvb2xzLW5ld3RvcGljdG9vbCcpIHx8ICFtdy51c2VyLm9wdGlvbnMuZ2V0KCdkaXNjdXNzaW9udG9vbHMtYmV0YWVuYWJsZScpKSB7XG5cdFx0Y29uc3QgJGNhVGFsazogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2NhLXRhbGsnKTtcblx0XHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRcdGlmICgkY2FUYWxrLmhhc0NsYXNzKCduZXcnKSAmJiB3Z05hbWVzcGFjZU51bWJlciAhPT0gMikge1xuXHRcdFx0Y29uc3QgJGE6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkKCdhOmZpcnN0JywgJGNhVGFsayk7XG5cdFx0XHQkYS5hdHRyKCdocmVmJywgYCR7JGEuYXR0cignaHJlZicpfSZzZWN0aW9uPW5ld2ApO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtzbWFydE5ld1NlY3Rpb259O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUF1QkMsUUFBQSxpQkFBQTtBQUV2QixJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxPQUFBLEdBQU1ILGtCQUFBSSxVQUFTO01BQ2RDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxNQUFBLEdBQUtQLGtCQUFBSSxVQUFTO01BQ2JDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxXQUFBLEdBQVVSLGtCQUFBSSxVQUFTO01BQ2xCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZVAsZ0JBQWdCO0FBRXJDLElBQU1RLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDM0JBLElBQU1DLFNBQVNBLE1BQVk7QUFDMUIsUUFBTTtJQUFDQztJQUFtQkM7RUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJ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QUNYLEdBQUd1RSxLQUFLQyxRQUFRdEUsSUFBSSw4QkFBOEIsS0FBSyxDQUFDRixHQUFHdUUsS0FBS0MsUUFBUXRFLElBQUksNEJBQTRCLEdBQUc7QUFDL0csVUFBTXVFLFVBQWtCOUQsTUFBTUcsS0FBSyxVQUFVO0FBQzdDLFVBQU07TUFBQ2hCO0lBQWlCLElBQUlFLEdBQUdDLE9BQU9DLElBQUk7QUFDMUMsUUFBSXVFLFFBQVFDLFNBQVMsS0FBSyxLQUFLNUUsc0JBQXNCLEdBQUc7QUFDdkQsWUFBTTZFLEtBQWdDOUIsRUFBRSxXQUFXNEIsT0FBTztBQUMxREUsU0FBRzVCLEtBQUssUUFBQSxHQUFBdEMsT0FBV2tFLEdBQUc1QixLQUFLLE1BQU0sR0FBQyxjQUFBLENBQWM7SUFDakQ7RUFDRDtBQUNEOztDSkFDLFNBQVM2QixTQUFlO0FBQ3hCLFFBQU1DLFlBQW9CO0FBRzFCLE1BQUk3RSxHQUFHQyxPQUFPQyxJQUFJMkUsU0FBUyxHQUFHO0FBQzdCO0VBQ0Q7QUFFQTdFLEtBQUdDLE9BQU82RSxJQUFJRCxXQUFXLElBQUk7QUFHN0IsT0FBS3hCLG1CQUFtQjtBQUV4QixRQUFBLEdBQUtqQixtQkFBQTJDLFNBQVEsRUFBRUMsS0FBTXJFLFdBQXlDO0FBRTdEZCxXQUFPO0FBRVBXLGVBQVc7QUFFWEUsY0FBVUMsS0FBSztBQUVmUyxlQUFXVCxLQUFLO0FBRWhCMEIseUJBQXFCMUIsS0FBSztBQUUxQmdELG1CQUFlaEQsS0FBSztBQUVwQjJELG9CQUFnQjNELEtBQUs7RUFDdEIsQ0FBQztBQUNGLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkVkaXQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiTG9nIiwgIlN1YnBhZ2VzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhZGRMb2ciLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiZ2V0VXJsIiwgInBhZ2UiLCAiYWRkU3VicGFnZSIsICJjb25jYXQiLCAiZml4UmVhc29uIiwgIiRib2R5IiwgIndnQWN0aW9uIiwgIiR3cFJlYXNvbiIsICJmaW5kIiwgImxlbmd0aCIsICJhdXRvUmVhc29uUmVnRXhwIiwgInRlc3QiLCAiU3RyaW5nIiwgInZhbCIsICJmaXhTdW1tYXJ5IiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgImh0bWwiLCAidXNlck5hbWVQcmVmaXhJbnB1dCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAibG9nQ29tbWVudElucHV0IiwgImltcG9ydFVwbG9hZFByZWZpeCIsICJ2YWx1ZSIsICJuZXdWYWx1ZSIsICJwcm9wIiwgInRleHQiLCAicmVwbGFjZSIsICJjaGVja2VkIiwgImRpc2FibGVkIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJsaW5rU2VhcmNoRWRpdEJ1dHRvbiIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICIkIiwgImFwcGVuZCIsICJhdHRyIiwgImhyZWYiLCAiaW5zZXJ0QWZ0ZXIiLCAiZXJyIiwgImUiLCAiZiIsICJsb2FkR2FkZ2V0RWRpdEZvcm0iLCAiRURJVF9HQURHRVRTIiwgInVzaW5nRWRpdEZvcm1KUyIsICJnYWRnZXRzIiwgImxvYWRlciIsICJ1c2luZyIsICJzbWFydEVkaXRJbnRybyIsICJ3Z0NhdGVnb3JpZXMiLCAiJHRhcmdldCIsICJhZGRFZGl0SW50cm8iLCAibmFtZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJzb21lIiwgIiRjb3B5d2FybiIsICIkZWRpdGludHJvIiwgImFwcGVuZFRvIiwgInNtYXJ0TmV3U2VjdGlvbiIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiJGNhVGFsayIsICJoYXNDbGFzcyIsICIkYSIsICJ1c2VySlMiLCAiY29uZmlnS2V5IiwgInNldCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
