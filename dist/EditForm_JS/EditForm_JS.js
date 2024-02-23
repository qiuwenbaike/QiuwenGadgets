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
    if (mw.config.get("wgNamespaceNumber") === 6) {
      location.href = "/wiki/Special:UploadWizard";
    } else {
      location.href = "/wiki/QW:ACH";
    }
  }
};
//! src/EditForm_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Preview: (0, import_ext_gadget.localize)({
      en: "Please preview the edited text",
      ja: "プレビューしてください",
      "zh-hans": "请先预览",
      "zh-hant": "請先預覽"
    }),
    RevisionPreloaded: (0, import_ext_gadget.localize)({
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
var import_ext_gadget2 = require("ext.gadget.Util");
var preloadRevid = ($body) => {
  const revid = mw.util.getParamValue("preloadrevid");
  if (!revid) {
    return;
  }
  const api = (0, import_ext_gadget2.initMwApi)();
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
  if (!curid && ![2, 3, 118].includes(WG_NAMESPACE_NUMBER)) {
    introACH();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeS50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9kaXNhYmxlVGl0bGUudHMiLCAic3JjL0VkaXRGb3JtX0pTL0VkaXRGb3JtX0pTLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2ludHJvQUNILnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvcHJlbG9hZFJldmlkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX1dJS0lfSUQgPSBtdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfVVNFUl9HUk9VUFM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykgPz8gW107XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1dHX1BBR0VfTkFNRSwgV0dfTkFNRVNQQUNFX05VTUJFUiwgV0dfVVNFUl9HUk9VUFMsIFdHX1dJS0lfSUQsIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn07XG4iLCAiY29uc3QgY2xlYXJVbmRvU3VtbWFyeSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJHdwQXV0b1N1bW1hcnk6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cEF1dG9TdW1tYXJ5XCJdJyk7XG5cdGlmICghJHdwQXV0b1N1bW1hcnkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndW5kbycpKSB7XG5cdFx0JHdwQXV0b1N1bW1hcnkudmFsKCcnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjbGVhclVuZG9TdW1tYXJ5fTtcbiIsICJpbXBvcnQge1dHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IGRpc2FibGVUaXRsZSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCRib2R5LmZpbmQoJyNuby1uZXctdGl0bGUnKS5sZW5ndGggJiYgJGJvZHkuZmluZCgnI2VkaXRmb3JtIGlucHV0W25hbWU9XCJ3cFNlY3Rpb25cIl0nKS52YWwoKSA9PT0gJ25ldycpIHtcblx0XHQvLyDkvKDnu5/mlofmnKznvJbovpHlmahcblx0XHRjb25zdCAkd3BTdW1tYXJ5OiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ1FpdXdlbl90YWxrOuS+teadg+aPkOaKpScsICdRaXV3ZW5fdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL15RaXV3ZW5fdGFsazrlrZjlup/orqjorrovO1xuXHRpZiAoXG5cdFx0KG5vU2VjdGlvblRpdGxlUGFnZXMuaW5jbHVkZXMoV0dfUEFHRV9OQU1FKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdChXR19QQUdFX05BTUUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Y2xlYXJVbmRvU3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnknO1xuaW1wb3J0IHtkaXNhYmxlVGl0bGV9IGZyb20gJy4vbW9kdWxlcy9kaXNhYmxlVGl0bGUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtpbnRyb0FDSH0gZnJvbSAnLi9tb2R1bGVzL2ludHJvQUNIJztcbmltcG9ydCB7cHJlbG9hZFJldmlkfSBmcm9tICcuL21vZHVsZXMvcHJlbG9hZFJldmlkJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Ly8g5Yig6Zmk5Zue6YCA5pe26Ieq5Yqo55Sf5oiQ55qE57yW6L6R5pGY6KaBXG5cdGNsZWFyVW5kb1N1bW1hcnkoJGJvZHkpO1xuXG5cdC8vIOWcqOaPkOS6pOaWsOauteiQveaXtu+8jOiuqeS4u+mimOagj+WcqOeJueWumuaDheWGteS4i+WkseaViFxuXHRkaXNhYmxlVGl0bGUoJGJvZHkpO1xuXG5cdC8vIOa6kOS7o+eggee8lui+keWZqOWKoOi9veKAnOe8lui+keivt+axguKAneihpeS4gVxuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cdGlmIChyZXZpZCAmJiBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04pIHtcblx0XHRwcmVsb2FkUmV2aWQoJGJvZHkpO1xuXHR9XG5cblx0Ly8g5paw55So5oi35byV5a+86Iez5p2h55uu5Yib5bu65ZCR5a+877yIW1tRVzpBRkNdXe+8iVxuXHRjb25zdCBjdXJpZCA9IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdGlmICghY3VyaWQgJiYgIVsyLCAzLCAxMThdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0aW50cm9BQ0goKTtcblx0fVxufSk7XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX1VTRVJfR1JPVVBTLCBXR19XSUtJX0lEfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgaW50cm9BQ0ggPSAoKTogdm9pZCA9PiB7XG5cdC8vIERpc2FibGVkIGZvciB3aWtpcyBvdGhlciB0aGFuIHpocWl1d2VuYmFpa2Vcblx0aWYgKFdHX1dJS0lfSUQgIT09ICd6aHFpdXdlbmJhaWtlJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIERpc2FibGVkIGZvciBjb25maXJtZWQgdXNlcnNcblx0aWYgKFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdjb25maXJtZWQnKSB8fCBXR19VU0VSX0dST1VQUy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZSBcIkVkaXRcIiBidXR0b25zXG5cdCAqL1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhLXZlLWVkaXQsICNjYS1lZGl0JykpIHtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIElmIHRhbGsgcGFnZSBkb2VzIG5vdCBleGlzdCwgcmVtb3ZlIFwiVGFsayBwYWdlXCIgYnV0dG9uXG5cdCAqL1xuXHRpZiAoXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLXRhbGsnKSAmJlxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYS10YWxrIGEnKVswXSAmJlxuXHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2EtdGFsayBhJylbMF0gYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhyZWYuaW5jbHVkZXMoJ3JlZGxpbms9MScpXG5cdCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS10YWxrJyk/LnJlbW92ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIElmIHBlcm1pc3Npb24gZXJyb3IgYHRpdGxlYmxhY2tsaXN0LXRlbXBvcmFyeWAgZXhpc3RzLFxuXHQgKiByZW1vdmUgdW5uZWNlc3NhcnkgZWxlbWVudHNcblx0ICovXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGVibGFja2xpc3QtdGVtcG9yYXJ5JykpIHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBlcm1pc3Npb25zZXJyb3JzdGV4dC13aXRoYWN0aW9uLCAjZmlyc3RIZWFkaW5nJykpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTikge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSA2KSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIElmIGVkaXRpbmcgcGFnZXMgdW5kZXIgYEZpbGU6YCBuYW1lc3BhY2UsXG5cdFx0XHQgKiByZWRpcmVjdCB0byBTcGVjaWFsOlVwbG9hZFdpemFyZFxuXHRcdFx0ICovXG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gJy93aWtpL1NwZWNpYWw6VXBsb2FkV2l6YXJkJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBJZiBlZGl0aW5nIHBhZ2VzIHVuZGVyIG90aGVyIG5hbWVzcGFjZXMsXG5cdFx0XHQgKiByZWRpcmVjdCB0byBbW1FXOkFDSF1dXG5cdFx0XHQgKi9cblx0XHRcdGxvY2F0aW9uLmhyZWYgPSAnL3dpa2kvUVc6QUNIJztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7aW50cm9BQ0h9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRQcmV2aWV3OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BsZWFzZSBwcmV2aWV3IHRoZSBlZGl0ZWQgdGV4dCcsXG5cdFx0XHRqYTogJ+ODl+ODrOODk+ODpeODvOOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtaGFucyc6ICfor7flhYjpooTop4gnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5YWI6aCQ6Ka9Jyxcblx0XHR9KSxcblx0XHRSZXZpc2lvblByZWxvYWRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb250ZW50IG9mIHJldmlzaW9uICQxIHByZWxvYWRlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yqg6L2954mI5pysJDHnmoTlhoXlrrnjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey6LyJ5YWl54mI5pysJDHnmoTlhaflrrnjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUHJlbG9hZCBjb250ZW50cyBmcm9tIFJldmlzaW9uIElEIChvbGRpZClcbiAqL1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHByZWxvYWRSZXZpZCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcmV2aWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ByZWxvYWRyZXZpZCcpO1xuXG5cdGlmICghcmV2aWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoKTtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cmV2aWRzOiBOdW1iZXIucGFyc2VJbnQocmV2aWQsIDEwKSxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdHZvaWQgYXBpLmdldChwYXJhbXMpLnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRjb25zdCB7Y29udGVudH0gPSBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbjtcblx0XHRpZiAoXG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS5sZW5ndGggJiZcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLmhhc0NsYXNzKCdvby11aS1pbWFnZS1wcm9ncmVzc2l2ZScpXG5cdFx0KSB7XG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdH1cblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpKSB7XG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlID0gY29udGVudDtcblx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BEaWZmXScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdSZXZpc2lvblByZWxvYWRlZCcpLnJlcGxhY2UoJyQxJywgcmV2aWQpLCB7dHlwZTogJ3N1Y2Nlc3MnfSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJlbG9hZFJldmlkfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQXdDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDdEUsSUFBTUMsYUFBYUgsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQzNDLElBQU1FLHNCQUE4QkosR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUI7QUFDckUsSUFBTUcsZUFBdUJMLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUN2RCxJQUFNSSxrQkFBQUMsaUJBQTJCUCxHQUFHQyxPQUFPQyxJQUFJLGNBQWMsT0FBQSxRQUFBSyxtQkFBQSxTQUFBQSxpQkFBSyxDQUFBO0FBRWxFLElBQU1DLDhCQUF1QyxDQUFDLFFBQVEsUUFBUSxFQUFFQyxTQUFTVixTQUFTOztBQ05sRixJQUFNVyxtQkFBb0JDLFdBQXlDO0FBQ2xFLFFBQU1D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MUQsbUJBQUEyRCxTQUFRLEVBQUVaLEtBQUssU0FBU2EsU0FBUzFFLE9BQXNDO0FBRTNFRCxtQkFBaUJDLEtBQUs7QUFHdEJPLGVBQWFQLEtBQUs7QUFHbEIsUUFBTWlELFFBQVE1RCxHQUFHZSxLQUFLQyxjQUFjLGNBQWM7QUFDbEQsTUFBSTRDLFNBQVNwRCw2QkFBNkI7QUFDekNtRCxpQkFBYWhELEtBQUs7RUFDbkI7QUFHQSxRQUFNMkUsUUFBUXRGLEdBQUdDLE9BQU9DLElBQUksYUFBYTtBQUN6QyxNQUFJLENBQUNvRixTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFN0UsU0FBU0wsbUJBQW1CLEdBQUc7QUFDekR1QixhQUFTO0VBQ1Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19XSUtJX0lEIiwgIldHX05BTUVTUEFDRV9OVU1CRVIiLCAiV0dfUEFHRV9OQU1FIiwgIldHX1VTRVJfR1JPVVBTIiwgIl9tdyRjb25maWckZ2V0IiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJjbGVhclVuZG9TdW1tYXJ5IiwgIiRib2R5IiwgIiR3cEF1dG9TdW1tYXJ5IiwgImZpbmQiLCAibGVuZ3RoIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJ2YWwiLCAiZGlzYWJsZVRpdGxlIiwgIiR3cFN1bW1hcnkiLCAicHJvcCIsICJub1NlY3Rpb25UaXRsZVBhZ2VzIiwgIm5vU2VjdGlvblRpdGxlUGFnZXNSZWdleCIsICJ0ZXN0IiwgImFkZENTUyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJpbnRyb0FDSCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgInJlbW92ZSIsICJlcnIiLCAiZSIsICJmIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaHJlZiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAibG9jYXRpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlByZXZpZXciLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiUmV2aXNpb25QcmVsb2FkZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJwcmVsb2FkUmV2aWQiLCAicmV2aWQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJyZXZpZHMiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgImZvcm1hdHZlcnNpb24iLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAidGhlbiIsICJxdWVyeSIsICJjb250ZW50IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImhhc0NsYXNzIiwgInRyaWdnZXIiLCAibm90aWZ5IiwgInJlcGxhY2UiLCAidHlwZSIsICJnZXRCb2R5IiwgImVkaXRGb3JtIiwgImN1cmlkIl0KfQo=
