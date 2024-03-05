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
var _mw$config$get;
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
//! src/EditForm_JS/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_WIKI_ID = mw.config.get("wgWikiID");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
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
  if ((noSectionTitlePages.includes(WG_PAGE_NAME) || noSectionTitlePagesRegex.test(WG_PAGE_NAME)) && mw.util.getParamValue("section") === "new") {
    mw.util.addCSS("h2.ve-ui-init-desktopArticleTarget-sectionTitle{display:none}");
  }
};
//! src/EditForm_JS/EditForm_JS.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/EditForm_JS/modules/introACH.ts
var introACH = () => {
  if (WG_WIKI_ID !== "zhqiuwenbaike") {
    return;
  }
  if (WG_USER_GROUPS.includes("confirmed") || WG_USER_GROUPS.includes("autoconfirmed")) {
    return;
  }
  if (WG_USER_GROUPS.includes("qiuwen") || WG_USER_GROUPS.includes("steward") || WG_USER_GROUPS.includes("senioreditor") || WG_USER_GROUPS.includes("bot") || WG_USER_GROUPS.includes("confirmed")) {
    return;
  }
  if ([0, 6].includes(WG_NAMESPACE_NUMBER)) {
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
  if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
    if (WG_NAMESPACE_NUMBER === 6) {
      location.href = "/wiki/Special:UploadWizard";
    } else if (WG_NAMESPACE_NUMBER === 0) {
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
  const revid = mw.util.getParamValue("preloadrevid");
  if (revid && IS_WG_EDIT_OR_SUBMIT_ACTION) {
    preloadRevid($body);
  }
  const curid = mw.config.get("wgArticleId");
  if (!curid && [0, 6].includes(WG_NAMESPACE_NUMBER)) {
    introACH();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeS50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9kaXNhYmxlVGl0bGUudHMiLCAic3JjL0VkaXRGb3JtX0pTL0VkaXRGb3JtX0pTLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2ludHJvQUNILnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvcHJlbG9hZFJldmlkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX1dJS0lfSUQgPSBtdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfVVNFUl9HUk9VUFM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykgPz8gW107XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1dHX1BBR0VfTkFNRSwgV0dfTkFNRVNQQUNFX05VTUJFUiwgV0dfVVNFUl9HUk9VUFMsIFdHX1dJS0lfSUQsIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn07XG4iLCAiY29uc3QgY2xlYXJVbmRvU3VtbWFyeSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJHdwQXV0b1N1bW1hcnk6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cEF1dG9TdW1tYXJ5XCJdJyk7XG5cdGlmICghJHdwQXV0b1N1bW1hcnkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndW5kbycpKSB7XG5cdFx0JHdwQXV0b1N1bW1hcnkudmFsKCcnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjbGVhclVuZG9TdW1tYXJ5fTtcbiIsICJpbXBvcnQge1dHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IGRpc2FibGVUaXRsZSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCRib2R5LmZpbmQoJyNuby1uZXctdGl0bGUnKS5sZW5ndGggJiYgJGJvZHkuZmluZCgnI2VkaXRmb3JtIGlucHV0W25hbWU9XCJ3cFNlY3Rpb25cIl0nKS52YWwoKSA9PT0gJ25ldycpIHtcblx0XHQvLyDkvKDnu5/mlofmnKznvJbovpHlmahcblx0XHRjb25zdCAkd3BTdW1tYXJ5OiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ1FpdXdlbl90YWxrOuS+teadg+aPkOaKpScsICdRaXV3ZW5fdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL15RaXV3ZW5fdGFsazrlrZjlup/orqjorrovO1xuXHRpZiAoXG5cdFx0KG5vU2VjdGlvblRpdGxlUGFnZXMuaW5jbHVkZXMoV0dfUEFHRV9OQU1FKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdChXR19QQUdFX05BTUUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Y2xlYXJVbmRvU3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnknO1xuaW1wb3J0IHtkaXNhYmxlVGl0bGV9IGZyb20gJy4vbW9kdWxlcy9kaXNhYmxlVGl0bGUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtpbnRyb0FDSH0gZnJvbSAnLi9tb2R1bGVzL2ludHJvQUNIJztcbmltcG9ydCB7cHJlbG9hZFJldmlkfSBmcm9tICcuL21vZHVsZXMvcHJlbG9hZFJldmlkJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Ly8g5Yig6Zmk5Zue6YCA5pe26Ieq5Yqo55Sf5oiQ55qE57yW6L6R5pGY6KaBXG5cdGNsZWFyVW5kb1N1bW1hcnkoJGJvZHkpO1xuXG5cdC8vIOWcqOaPkOS6pOaWsOauteiQveaXtu+8jOiuqeS4u+mimOagj+WcqOeJueWumuaDheWGteS4i+WkseaViFxuXHRkaXNhYmxlVGl0bGUoJGJvZHkpO1xuXG5cdC8vIOa6kOS7o+eggee8lui+keWZqOWKoOi9veKAnOe8lui+keivt+axguKAneihpeS4gVxuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cdGlmIChyZXZpZCAmJiBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04pIHtcblx0XHRwcmVsb2FkUmV2aWQoJGJvZHkpO1xuXHR9XG5cblx0Ly8g5paw55So5oi35byV5a+86Iez5p2h55uu5Yib5bu65ZCR5a+877yIW1tRVzpBRkNdXe+8iVxuXHRjb25zdCBjdXJpZCA9IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdGlmICghY3VyaWQgJiYgWzAsIDZdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0aW50cm9BQ0goKTtcblx0fVxufSk7XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX05BTUVTUEFDRV9OVU1CRVIsIFdHX1VTRVJfR1JPVVBTLCBXR19XSUtJX0lEfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgaW50cm9BQ0ggPSAoKTogdm9pZCA9PiB7XG5cdC8vIERpc2FibGVkIGZvciB3aWtpcyBvdGhlciB0aGFuIHpocWl1d2VuYmFpa2Vcblx0aWYgKFdHX1dJS0lfSUQgIT09ICd6aHFpdXdlbmJhaWtlJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIERpc2FibGVkIGZvciBjb25maXJtZWQgdXNlcnNcblx0aWYgKFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdjb25maXJtZWQnKSB8fCBXR19VU0VSX0dST1VQUy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gRGlzYWJsZWQgZm9yIG9mZmljaWFsIHVzZXJzIGFuZCBleHBlcmllbmNlZCB1c2Vyc1xuXHRpZiAoXG5cdFx0V0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ3FpdXdlbicpIHx8XG5cdFx0V0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ3N0ZXdhcmQnKSB8fFxuXHRcdFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdzZW5pb3JlZGl0b3InKSB8fFxuXHRcdFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdib3QnKSB8fFxuXHRcdFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdjb25maXJtZWQnKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIFwiRWRpdFwiIGJ1dHRvbnNcblx0ICovXG5cdGlmIChbMCwgNl0uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhLXZlLWVkaXQsICNjYS1lZGl0JykpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIElmIHRhbGsgcGFnZSBkb2VzIG5vdCBleGlzdCwgcmVtb3ZlIFwiVGFsayBwYWdlXCIgYnV0dG9uXG5cdCAqL1xuXHRpZiAoXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLXRhbGsnKSAmJlxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYS10YWxrIGEnKVswXSAmJlxuXHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2EtdGFsayBhJylbMF0gYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhyZWYuaW5jbHVkZXMoJ3JlZGxpbms9MScpXG5cdCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS10YWxrJyk/LnJlbW92ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIElmIHBlcm1pc3Npb24gZXJyb3IgYHRpdGxlYmxhY2tsaXN0LXRlbXBvcmFyeWAgZXhpc3RzLFxuXHQgKiByZW1vdmUgdW5uZWNlc3NhcnkgZWxlbWVudHNcblx0ICovXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVibGFja2xpc3QtdGVtcG9yYXJ5JykpIHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBlcm1pc3Npb25zZXJyb3JzdGV4dC13aXRoYWN0aW9uLCAjZmlyc3RIZWFkaW5nJykpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTikge1xuXHRcdGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID09PSA2KSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIElmIGVkaXRpbmcgcGFnZXMgdW5kZXIgYEZpbGU6YCBuYW1lc3BhY2UsXG5cdFx0XHQgKiByZWRpcmVjdCB0byBbW1NwZWNpYWw6VXBsb2FkV2l6YXJkXV1cblx0XHRcdCAqL1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9ICcvd2lraS9TcGVjaWFsOlVwbG9hZFdpemFyZCc7XG5cdFx0fSBlbHNlIGlmIChXR19OQU1FU1BBQ0VfTlVNQkVSID09PSAwKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIElmIGVkaXRpbmcgcGFnZXMgdW5kZXIgbWFpbiBuYW1lc3BhY2UsXG5cdFx0XHQgKiByZWRpcmVjdCB0byBbW1FXOkFDSF1dXG5cdFx0XHQgKi9cblx0XHRcdGxvY2F0aW9uLmhyZWYgPSAnL3dpa2kvUVc6QUNIJztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7aW50cm9BQ0h9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnRWRpdEZvcm1fSlMvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UHJldmlldzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgcHJldmlldyB0aGUgZWRpdGVkIHRleHQnLFxuXHRcdFx0amE6ICfjg5fjg6zjg5Pjg6Xjg7zjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35YWI6aKE6KeIJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WFiOmgkOimvScsXG5cdFx0fSksXG5cdFx0UmV2aXNpb25QcmVsb2FkZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29udGVudCBvZiByZXZpc2lvbiAkMSBwcmVsb2FkZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWKoOi9veeJiOacrCQx55qE5YaF5a6544CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sui8ieWFpeeJiOacrCQx55qE5YWn5a6544CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50ICovXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFByZWxvYWQgY29udGVudHMgZnJvbSBSZXZpc2lvbiBJRCAob2xkaWQpXG4gKi9cbmltcG9ydCB7YXBpfSBmcm9tICcuL3V0aWwvYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJlbG9hZFJldmlkID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cblx0aWYgKCFyZXZpZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJldmlkczogTnVtYmVyLnBhcnNlSW50KHJldmlkLCAxMCksXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblxuXHR2b2lkIGFwaS5nZXQocGFyYW1zKS50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0Y29uc3Qge2NvbnRlbnR9ID0gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW47XG5cdFx0aWYgKFxuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykubGVuZ3RoICYmXG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS5oYXNDbGFzcygnb28tdWktaW1hZ2UtcHJvZ3Jlc3NpdmUnKVxuXHRcdCkge1xuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHR9XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSkge1xuXHRcdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IGNvbnRlbnQ7XG5cdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwRGlmZl0nKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnUmV2aXNpb25QcmVsb2FkZWQnKS5yZXBsYWNlKCckMScsIHJldmlkKSwge3R5cGU6ICdzdWNjZXNzJ30pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3ByZWxvYWRSZXZpZH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUF3Q0MsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQ3RFLElBQU1DLGFBQWFILEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUMzQyxJQUFNRSxzQkFBOEJKLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CO0FBQ3JFLElBQU1HLGVBQXVCTCxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFDdkQsSUFBTUksa0JBQUFDLGlCQUEyQlAsR0FBR0MsT0FBT0MsSUFBSSxjQUFjLE9BQUEsUUFBQUssbUJBQUEsU0FBQUEsaUJBQUssQ0FBQTtBQUVsRSxJQUFNQyw4QkFBdUMsQ0FBQyxRQUFRLFFBQVEsRUFBRUMsU0FBU1YsU0FBUzs7QUNObEYsSUFBTVcsbUJBQW9CQyxXQUF5QztBQUNsRSxRQUFNQyxpQkFBMkNELE1BQU1FLEtBQXVCLDZCQUE2QjtBQUMzRyxNQUFJLENBQUNELGVBQWVFLFFBQVE7QUFDM0I7RUFDRDtBQUVBLE1BQUlkLEdBQUdlLEtBQUtDLGNBQWMsTUFBTSxHQUFHO0FBQ2xDSixtQkFBZUssSUFBSSxFQUFFO0VBQ3RCO0FBQ0Q7O0FDUEEsSUFBTUMsZUFBZ0JQLFdBQXlDO0FBQzlELE1BQUlBLE1BQU1FLEtBQUssZUFBZSxFQUFFQyxVQUFVSCxNQUFNRSxLQUFLLG1DQUFtQyxFQUFFSSxJQUFJLE1BQU0sT0FBTztBQUUxRyxVQUFNRSxhQUFxQlIsTUFBTUUsS0FBSyx1QkFBdUI7QUFDN0RNLGVBQVdDLEtBQUssWUFBWSxJQUFJO0FBQ2hDRCxlQUFXRixJQUFJLEVBQUU7RUFDbEI7QUFFQSxRQUFNSSxzQkFBZ0MsQ0FBQyxvQkFBb0Isd0JBQXdCO0FBQ25GLFFBQU1D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UUFBUXRGLEdBQUdDLE9BQU9DLElBQUksYUFBYTtBQUN6QyxNQUFJLENBQUNvRixTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU3RSxTQUFTTCxtQkFBbUIsR0FBRztBQUNuRHVCLGFBQVM7RUFDVjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1dJS0lfSUQiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJXR19QQUdFX05BTUUiLCAiV0dfVVNFUl9HUk9VUFMiLCAiX213JGNvbmZpZyRnZXQiLCAiSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OIiwgImluY2x1ZGVzIiwgImNsZWFyVW5kb1N1bW1hcnkiLCAiJGJvZHkiLCAiJHdwQXV0b1N1bW1hcnkiLCAiZmluZCIsICJsZW5ndGgiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgInZhbCIsICJkaXNhYmxlVGl0bGUiLCAiJHdwU3VtbWFyeSIsICJwcm9wIiwgIm5vU2VjdGlvblRpdGxlUGFnZXMiLCAibm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4IiwgInRlc3QiLCAiYWRkQ1NTIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImludHJvQUNIIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAicmVtb3ZlIiwgImVyciIsICJlIiwgImYiLCAicXVlcnlTZWxlY3RvciIsICJocmVmIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJsb2NhdGlvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiUHJldmlldyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJSZXZpc2lvblByZWxvYWRlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJlbG9hZFJldmlkIiwgInJldmlkIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInJldmlkcyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiZm9ybWF0dmVyc2lvbiIsICJydnByb3AiLCAicnZzbG90cyIsICJ0aGVuIiwgInF1ZXJ5IiwgImNvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiaGFzQ2xhc3MiLCAidHJpZ2dlciIsICJub3RpZnkiLCAicmVwbGFjZSIsICJ0eXBlIiwgImdldEJvZHkiLCAiZWRpdEZvcm0iLCAiY3VyaWQiXQp9Cg==
