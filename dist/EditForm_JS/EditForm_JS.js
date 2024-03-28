/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js/edit.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EditForm_JS}
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

// dist/EditForm_JS/EditForm_JS.js
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
//! src/EditForm_JS/modules/clearUndoSummary.ts
var clearUndoSummary = ($body) => {
  const $wpAutoSummary = $body.find('input[name="wpAutoSummary"]');
  if (!$wpAutoSummary.length) {
    return;
  }
  if (mw.util.getParamValue("undo")) {
    $wpAutoSummary.val("");
  }
};
//! src/EditForm_JS/modules/disableTitle.ts
var disableTitle = ($body) => {
  if ($body.find("#no-new-title").length && $body.find('#editform input[name="wpSection"]').val() === "new") {
    const $wpSummary = $body.find("input[name=wpSummary]");
    $wpSummary.prop("disabled", true);
    $wpSummary.val("");
  }
  const noSectionTitlePages = ["Qiuwen_talk:侵权提报", "Qiuwen_talk:存废讨论/关注度提报"];
  const noSectionTitlePagesRegex = /^Qiuwen_talk:存废讨论/;
  const {
    wgPageName
  } = mw.config.get();
  if ((noSectionTitlePages.includes(wgPageName) || noSectionTitlePagesRegex.test(wgPageName)) && mw.util.getParamValue("section") === "new") {
    mw.util.addCSS("h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}");
  }
};
//! src/EditForm_JS/EditForm_JS.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/EditForm_JS/modules/introACH.ts
var introACH = () => {
  const {
    wgAction,
    wgArticleId,
    wgWikiID,
    wgUserGroups,
    wgNamespaceNumber
  } = mw.config.get();
  if (wgWikiID !== "zhqiuwenbaike") {
    return;
  }
  if (wgArticleId) {
    return;
  }
  if (![0, 6].includes(wgNamespaceNumber)) {
    return;
  }
  if (!wgUserGroups || wgUserGroups.includes("confirmed") || wgUserGroups.includes("autoconfirmed")) {
    return;
  }
  if (wgUserGroups.includes("qiuwen") || wgUserGroups.includes("steward") || wgUserGroups.includes("senioreditor") || wgUserGroups.includes("bot") || wgUserGroups.includes("confirmed")) {
    return;
  }
  if ([0, 6].includes(wgNamespaceNumber)) {
    var _iterator = _createForOfIteratorHelper(document.querySelectorAll("#ca-ve-edit, #ca-edit")), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        element.remove();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  if (document.querySelector("#ca-talk") && document.querySelectorAll("#ca-talk a")[0] && document.querySelectorAll("#ca-talk a")[0].href.includes("redlink=1")) {
    var _document$querySelect;
    (_document$querySelect = document.querySelector("#ca-talk")) === null || _document$querySelect === void 0 || _document$querySelect.remove();
  }
  if (document.querySelector("#titleblacklist-temporary")) {
    var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll(".permissionserrorstext-withaction, #firstHeading")), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
        element.remove();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  if (["edit", "submit"].includes(wgAction)) {
    if (wgNamespaceNumber === 6) {
      location.href = "/wiki/Special:UploadWizard";
    } else if (wgNamespaceNumber === 0) {
      location.href = "/wiki/QW:ACH";
    }
  }
};
//! src/EditForm_JS/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("EditForm_JS/2.0");
//! src/EditForm_JS/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Preview: (0, import_ext_gadget2.localize)({
      en: "Please preview the edited text",
      ja: "プレビューしてください",
      "zh-hans": "请先预览",
      "zh-hant": "請先預覽"
    }),
    RevisionPreloaded: (0, import_ext_gadget2.localize)({
      en: "Content of revision $1 preloaded.",
      "zh-hans": "已加载版本$1的内容。",
      "zh-hant": "已載入版本$1的內容。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EditForm_JS/modules/preloadRevid.ts
var preloadRevid = ($body) => {
  const revid = mw.util.getParamValue("preloadrevid");
  if (!revid) {
    return;
  }
  const {
    wgAction
  } = mw.config.get();
  if (!["edit", "submit"].includes(wgAction)) {
    return;
  }
  const params = {
    action: "query",
    format: "json",
    prop: "revisions",
    revids: Number.parseInt(revid, 10),
    formatversion: "2",
    rvprop: "content",
    rvslots: "main"
  };
  void api.get(params).then(({
    query
  }) => {
    const {
      content
    } = query.pages[0].revisions[0].slots.main;
    if ($body.find(".oo-ui-icon-highlight").length && $body.find(".oo-ui-icon-highlight").hasClass("oo-ui-image-progressive")) {
      $body.find(".oo-ui-icon-highlight").trigger("click");
    }
    if (document.querySelector("textarea[name=wpTextbox1]")) {
      document.querySelector("textarea[name=wpTextbox1]").value = content;
      $body.find("input[name=wpDiff]").trigger("click");
      void mw.notify(getMessage("RevisionPreloaded").replace("$1", revid), {
        type: "success"
      });
    }
  });
};
//! src/EditForm_JS/EditForm_JS.ts
void (0, import_ext_gadget3.getBody)().then(function editForm($body) {
  clearUndoSummary($body);
  disableTitle($body);
  preloadRevid($body);
  introACH();
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeS50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9kaXNhYmxlVGl0bGUudHMiLCAic3JjL0VkaXRGb3JtX0pTL0VkaXRGb3JtX0pTLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2ludHJvQUNILnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvcHJlbG9hZFJldmlkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwQXV0b1N1bW1hcnlcIl0nKTtcblx0aWYgKCEkd3BBdXRvU3VtbWFyeS5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1bmRvJykpIHtcblx0XHQkd3BBdXRvU3VtbWFyeS52YWwoJycpO1xuXHR9XG59O1xuXG5leHBvcnQge2NsZWFyVW5kb1N1bW1hcnl9O1xuIiwgImNvbnN0IGRpc2FibGVUaXRsZSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCRib2R5LmZpbmQoJyNuby1uZXctdGl0bGUnKS5sZW5ndGggJiYgJGJvZHkuZmluZCgnI2VkaXRmb3JtIGlucHV0W25hbWU9XCJ3cFNlY3Rpb25cIl0nKS52YWwoKSA9PT0gJ25ldycpIHtcblx0XHQvLyDkvKDnu5/mlofmnKznvJbovpHlmahcblx0XHRjb25zdCAkd3BTdW1tYXJ5OiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ1FpdXdlbl90YWxrOuS+teadg+aPkOaKpScsICdRaXV3ZW5fdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL15RaXV3ZW5fdGFsazrlrZjlup/orqjorrovO1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQobm9TZWN0aW9uVGl0bGVQYWdlcy5pbmNsdWRlcyh3Z1BhZ2VOYW1lKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdCh3Z1BhZ2VOYW1lKSkgJiZcblx0XHRtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3NlY3Rpb24nKSA9PT0gJ25ldydcblx0KSB7XG5cdFx0Ly8g5Y+v6KeG5YyW57yW6L6R5ZmoIC8g5pawd2lraXRleHTmqKHlvI9cblx0XHRtdy51dGlsLmFkZENTUygnaDIudmUtdWktaW5pdC1kZXNrdG9wQXJ0aWNsZVRhcmdldC1zZWN0aW9uVGl0bGV7ZGlzcGxheTpub25lfScpO1xuXHR9XG59O1xuXG5leHBvcnQge2Rpc2FibGVUaXRsZX07XG4iLCAiaW1wb3J0IHtjbGVhclVuZG9TdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeSc7XG5pbXBvcnQge2Rpc2FibGVUaXRsZX0gZnJvbSAnLi9tb2R1bGVzL2Rpc2FibGVUaXRsZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2ludHJvQUNIfSBmcm9tICcuL21vZHVsZXMvaW50cm9BQ0gnO1xuaW1wb3J0IHtwcmVsb2FkUmV2aWR9IGZyb20gJy4vbW9kdWxlcy9wcmVsb2FkUmV2aWQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHQvLyDliKDpmaTlm57pgIDml7boh6rliqjnlJ/miJDnmoTnvJbovpHmkZjopoFcblx0Y2xlYXJVbmRvU3VtbWFyeSgkYm9keSk7XG5cblx0Ly8g5Zyo5o+Q5Lqk5paw5q616JC95pe277yM6K6p5Li76aKY5qCP5Zyo54m55a6a5oOF5Ya15LiL5aSx5pWIXG5cdGRpc2FibGVUaXRsZSgkYm9keSk7XG5cblx0Ly8g5rqQ5Luj56CB57yW6L6R5Zmo5Yqg6L294oCc57yW6L6R6K+35rGC4oCd6KGl5LiBXG5cdHByZWxvYWRSZXZpZCgkYm9keSk7XG5cblx0Ly8g5paw55So5oi35byV5a+86Iez5p2h55uu5Yib5bu65ZCR5a+877yIW1tRVzpBRkNdXe+8iVxuXHRpbnRyb0FDSCgpO1xufSk7XG4iLCAiY29uc3QgaW50cm9BQ0ggPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnV2lraUlELCB3Z1VzZXJHcm91cHMsIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHQvLyBEaXNhYmxlZCBmb3Igd2lraXMgb3RoZXIgdGhhbiB6aHFpdXdlbmJhaWtlXG5cdGlmICh3Z1dpa2lJRCAhPT0gJ3pocWl1d2VuYmFpa2UnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gRGlzYWJsZWQgZm9yIGV4aXN0aW5nIHBhZ2Uocylcblx0aWYgKHdnQXJ0aWNsZUlkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gRGlzYWJsZWQgZm9yIG5vbi1jb250ZW50IG5hbWVzcGFjZXNcblx0aWYgKCFbMCwgNl0uaW5jbHVkZXMod2dOYW1lc3BhY2VOdW1iZXIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gRGlzYWJsZWQgZm9yIGNvbmZpcm1lZCB1c2Vyc1xuXHRpZiAoIXdnVXNlckdyb3VwcyB8fCB3Z1VzZXJHcm91cHMuaW5jbHVkZXMoJ2NvbmZpcm1lZCcpIHx8IHdnVXNlckdyb3Vwcy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gRGlzYWJsZWQgZm9yIG9mZmljaWFsIHVzZXJzIGFuZCBleHBlcmllbmNlZCB1c2Vyc1xuXHRpZiAoXG5cdFx0d2dVc2VyR3JvdXBzLmluY2x1ZGVzKCdxaXV3ZW4nKSB8fFxuXHRcdHdnVXNlckdyb3Vwcy5pbmNsdWRlcygnc3Rld2FyZCcpIHx8XG5cdFx0d2dVc2VyR3JvdXBzLmluY2x1ZGVzKCdzZW5pb3JlZGl0b3InKSB8fFxuXHRcdHdnVXNlckdyb3Vwcy5pbmNsdWRlcygnYm90JykgfHxcblx0XHR3Z1VzZXJHcm91cHMuaW5jbHVkZXMoJ2NvbmZpcm1lZCcpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmUgXCJFZGl0XCIgYnV0dG9uc1xuXHQgKi9cblx0aWYgKFswLCA2XS5pbmNsdWRlcyh3Z05hbWVzcGFjZU51bWJlcikpIHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhLXZlLWVkaXQsICNjYS1lZGl0JykpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIElmIHRhbGsgcGFnZSBkb2VzIG5vdCBleGlzdCwgcmVtb3ZlIFwiVGFsayBwYWdlXCIgYnV0dG9uXG5cdCAqL1xuXHRpZiAoXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLXRhbGsnKSAmJlxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYS10YWxrIGEnKVswXSAmJlxuXHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2EtdGFsayBhJylbMF0gYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhyZWYuaW5jbHVkZXMoJ3JlZGxpbms9MScpXG5cdCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS10YWxrJyk/LnJlbW92ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIElmIHBlcm1pc3Npb24gZXJyb3IgYHRpdGxlYmxhY2tsaXN0LXRlbXBvcmFyeWAgZXhpc3RzLFxuXHQgKiByZW1vdmUgdW5uZWNlc3NhcnkgZWxlbWVudHNcblx0ICovXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVibGFja2xpc3QtdGVtcG9yYXJ5JykpIHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBlcm1pc3Npb25zZXJyb3JzdGV4dC13aXRoYWN0aW9uLCAjZmlyc3RIZWFkaW5nJykpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikpIHtcblx0XHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDYpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogSWYgZWRpdGluZyBwYWdlcyB1bmRlciBgRmlsZTpgIG5hbWVzcGFjZSxcblx0XHRcdCAqIHJlZGlyZWN0IHRvIFtbU3BlY2lhbDpVcGxvYWRXaXphcmRdXVxuXHRcdFx0ICovXG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gJy93aWtpL1NwZWNpYWw6VXBsb2FkV2l6YXJkJztcblx0XHR9IGVsc2UgaWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIElmIGVkaXRpbmcgcGFnZXMgdW5kZXIgbWFpbiBuYW1lc3BhY2UsXG5cdFx0XHQgKiByZWRpcmVjdCB0byBbW1FXOkFDSF1dXG5cdFx0XHQgKi9cblx0XHRcdGxvY2F0aW9uLmhyZWYgPSAnL3dpa2kvUVc6QUNIJztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7aW50cm9BQ0h9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnRWRpdEZvcm1fSlMvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UHJldmlldzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgcHJldmlldyB0aGUgZWRpdGVkIHRleHQnLFxuXHRcdFx0amE6ICfjg5fjg6zjg5Pjg6Xjg7zjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35YWI6aKE6KeIJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WFiOmgkOimvScsXG5cdFx0fSksXG5cdFx0UmV2aXNpb25QcmVsb2FkZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29udGVudCBvZiByZXZpc2lvbiAkMSBwcmVsb2FkZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWKoOi9veeJiOacrCQx55qE5YaF5a6544CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sui8ieWFpeeJiOacrCQx55qE5YWn5a6544CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50ICovXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFByZWxvYWQgY29udGVudHMgZnJvbSBSZXZpc2lvbiBJRCAob2xkaWQpXG4gKi9cbmltcG9ydCB7YXBpfSBmcm9tICcuL3V0aWwvYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJlbG9hZFJldmlkID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cblx0aWYgKCFyZXZpZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCFbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMod2dBY3Rpb24pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cmV2aWRzOiBOdW1iZXIucGFyc2VJbnQocmV2aWQsIDEwKSxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdHZvaWQgYXBpLmdldChwYXJhbXMpLnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRjb25zdCB7Y29udGVudH0gPSBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbjtcblx0XHRpZiAoXG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS5sZW5ndGggJiZcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLmhhc0NsYXNzKCdvby11aS1pbWFnZS1wcm9ncmVzc2l2ZScpXG5cdFx0KSB7XG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdH1cblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpKSB7XG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlID0gY29udGVudDtcblx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BEaWZmXScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdSZXZpc2lvblByZWxvYWRlZCcpLnJlcGxhY2UoJyQxJywgcmV2aWQpLCB7dHlwZTogJ3N1Y2Nlc3MnfSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJlbG9hZFJldmlkfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsbUJBQW9CQyxXQUF5QztBQUNsRSxRQUFNQyxpQkFBMkNELE1BQU1FLEtBQXVCLDZCQUE2QjtBQUMzRyxNQUFJLENBQUNELGVBQWVFLFFBQVE7QUFDM0I7RUFDRDtBQUVBLE1BQUlDLEdBQUdDLEtBQUtDLGNBQWMsTUFBTSxHQUFHO0FBQ2xDTCxtQkFBZU0sSUFBSSxFQUFFO0VBQ3RCO0FBQ0Q7O0FDVEEsSUFBTUMsZUFBZ0JSLFdBQXlDO0FBQzlELE1BQUlBLE1BQU1FLEtBQUssZUFBZSxFQUFFQyxVQUFVSCxNQUFNRSxLQUFLLG1DQUFtQyxFQUFFSyxJQUFJLE1BQU0sT0FBTztBQUUxRyxVQUFNRSxhQUFxQlQsTUFBTUUsS0FBSyx1QkFBdUI7QUFDN0RPLGVBQVdDLEtBQUssWUFBWSxJQUFJO0FBQ2hDRCxlQUFXRixJQUFJLEVBQUU7RUFDbEI7QUFFQSxRQUFNSSxzQkFBZ0MsQ0FBQyxvQkFBb0Isd0JB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TCxRQUFRcUM7QUFDckZ6RSxZQUFNRSxLQUFLLG9CQUFvQixFQUFFNkUsUUFBUSxPQUFPO0FBQ2hELFdBQUszRSxHQUFHNEUsT0FBT3RCLFdBQVcsbUJBQW1CLEVBQUV1QixRQUFRLE1BQU1wQixLQUFLLEdBQUc7UUFBQ3FCLE1BQU07TUFBUyxDQUFDO0lBQ3ZGO0VBQ0QsQ0FBQztBQUNGOztBSnZDQSxNQUFBLEdBQUsvRCxtQkFBQWdFLFNBQVEsRUFBRVosS0FBSyxTQUFTYSxTQUFTcEYsT0FBc0M7QUFFM0VELG1CQUFpQkMsS0FBSztBQUd0QlEsZUFBYVIsS0FBSztBQUdsQjRELGVBQWE1RCxLQUFLO0FBR2xCcUIsV0FBUztBQUNWLENBQUM7IiwKICAibmFtZXMiOiBbImNsZWFyVW5kb1N1bW1hcnkiLCAiJGJvZHkiLCAiJHdwQXV0b1N1bW1hcnkiLCAiZmluZCIsICJsZW5ndGgiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgInZhbCIsICJkaXNhYmxlVGl0bGUiLCAiJHdwU3VtbWFyeSIsICJwcm9wIiwgIm5vU2VjdGlvblRpdGxlUGFnZXMiLCAibm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4IiwgIndnUGFnZU5hbWUiLCAiY29uZmlnIiwgImdldCIsICJpbmNsdWRlcyIsICJ0ZXN0IiwgImFkZENTUyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJpbnRyb0FDSCIsICJ3Z0FjdGlvbiIsICJ3Z0FydGljbGVJZCIsICJ3Z1dpa2lJRCIsICJ3Z1VzZXJHcm91cHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJyZW1vdmUiLCAiZXJyIiwgImUiLCAiZiIsICJxdWVyeVNlbGVjdG9yIiwgImhyZWYiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImxvY2F0aW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJQcmV2aWV3IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIlJldmlzaW9uUHJlbG9hZGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcmVsb2FkUmV2aWQiLCAicmV2aWQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAicmV2aWRzIiwgIk51bWJlciIsICJwYXJzZUludCIsICJmb3JtYXR2ZXJzaW9uIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInRoZW4iLCAicXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJoYXNDbGFzcyIsICJ0cmlnZ2VyIiwgIm5vdGlmeSIsICJyZXBsYWNlIiwgInR5cGUiLCAiZ2V0Qm9keSIsICJlZGl0Rm9ybSJdCn0K
