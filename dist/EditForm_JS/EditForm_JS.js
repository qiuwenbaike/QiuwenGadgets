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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeS50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9kaXNhYmxlVGl0bGUudHMiLCAic3JjL0VkaXRGb3JtX0pTL0VkaXRGb3JtX0pTLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2ludHJvQUNILnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvcHJlbG9hZFJldmlkLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX1dJS0lfSUQgPSBtdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfVVNFUl9HUk9VUFM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykgPz8gW107XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1dHX1BBR0VfTkFNRSwgV0dfTkFNRVNQQUNFX05VTUJFUiwgV0dfVVNFUl9HUk9VUFMsIFdHX1dJS0lfSUQsIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn07XG4iLCAiY29uc3QgY2xlYXJVbmRvU3VtbWFyeSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgJHdwQXV0b1N1bW1hcnk6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9XCJ3cEF1dG9TdW1tYXJ5XCJdJyk7XG5cdGlmICghJHdwQXV0b1N1bW1hcnkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndW5kbycpKSB7XG5cdFx0JHdwQXV0b1N1bW1hcnkudmFsKCcnKTtcblx0fVxufTtcblxuZXhwb3J0IHtjbGVhclVuZG9TdW1tYXJ5fTtcbiIsICJpbXBvcnQge1dHX1BBR0VfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IGRpc2FibGVUaXRsZSA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKCRib2R5LmZpbmQoJyNuby1uZXctdGl0bGUnKS5sZW5ndGggJiYgJGJvZHkuZmluZCgnI2VkaXRmb3JtIGlucHV0W25hbWU9XCJ3cFNlY3Rpb25cIl0nKS52YWwoKSA9PT0gJ25ldycpIHtcblx0XHQvLyDkvKDnu5/mlofmnKznvJbovpHlmahcblx0XHRjb25zdCAkd3BTdW1tYXJ5OiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ1FpdXdlbl90YWxrOuS+teadg+aPkOaKpScsICdRaXV3ZW5fdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL15RaXV3ZW5fdGFsazrlrZjlup/orqjorrovO1xuXHRpZiAoXG5cdFx0KG5vU2VjdGlvblRpdGxlUGFnZXMuaW5jbHVkZXMoV0dfUEFHRV9OQU1FKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdChXR19QQUdFX05BTUUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Y2xlYXJVbmRvU3VtbWFyeX0gZnJvbSAnLi9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnknO1xuaW1wb3J0IHtkaXNhYmxlVGl0bGV9IGZyb20gJy4vbW9kdWxlcy9kaXNhYmxlVGl0bGUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtpbnRyb0FDSH0gZnJvbSAnLi9tb2R1bGVzL2ludHJvQUNIJztcbmltcG9ydCB7cHJlbG9hZFJldmlkfSBmcm9tICcuL21vZHVsZXMvcHJlbG9hZFJldmlkJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Ly8g5Yig6Zmk5Zue6YCA5pe26Ieq5Yqo55Sf5oiQ55qE57yW6L6R5pGY6KaBXG5cdGNsZWFyVW5kb1N1bW1hcnkoJGJvZHkpO1xuXG5cdC8vIOWcqOaPkOS6pOaWsOauteiQveaXtu+8jOiuqeS4u+mimOagj+WcqOeJueWumuaDheWGteS4i+WkseaViFxuXHRkaXNhYmxlVGl0bGUoJGJvZHkpO1xuXG5cdC8vIOa6kOS7o+eggee8lui+keWZqOWKoOi9veKAnOe8lui+keivt+axguKAneihpeS4gVxuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cdGlmIChyZXZpZCAmJiBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04pIHtcblx0XHRwcmVsb2FkUmV2aWQoJGJvZHkpO1xuXHR9XG5cblx0Ly8g5paw55So5oi35byV5a+86Iez5p2h55uu5Yib5bu65ZCR5a+877yIW1tRVzpBRkNdXe+8iVxuXHRjb25zdCBjdXJpZCA9IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdGlmICghY3VyaWQgJiYgIVsyLCAzLCAxMThdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0aW50cm9BQ0goKTtcblx0fVxufSk7XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX1VTRVJfR1JPVVBTLCBXR19XSUtJX0lEfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgaW50cm9BQ0ggPSAoKTogdm9pZCA9PiB7XG5cdC8vIERpc2FibGVkIGZvciB3aWtpcyBvdGhlciB0aGFuIHpocWl1d2VuYmFpa2Vcblx0aWYgKFdHX1dJS0lfSUQgIT09ICd6aHFpdXdlbmJhaWtlJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIERpc2FibGVkIGZvciBjb25maXJtZWQgdXNlcnNcblx0aWYgKFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdjb25maXJtZWQnKSB8fCBXR19VU0VSX0dST1VQUy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gRGlzYWJsZWQgZm9yIG9mZmljaWFsIHVzZXJzIGFuZCBleHBlcmllbmNlZCB1c2Vyc1xuXHRpZiAoXG5cdFx0V0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ3FpdXdlbicpIHx8XG5cdFx0V0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ3N0ZXdhcmQnKSB8fFxuXHRcdFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdzZW5pb3JlZGl0b3InKSB8fFxuXHRcdFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdib3QnKSB8fFxuXHRcdFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdjb25maXJtZWQnKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIFwiRWRpdFwiIGJ1dHRvbnNcblx0ICovXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2EtdmUtZWRpdCwgI2NhLWVkaXQnKSkge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdH1cblxuXHQvKipcblx0ICogSWYgdGFsayBwYWdlIGRvZXMgbm90IGV4aXN0LCByZW1vdmUgXCJUYWxrIHBhZ2VcIiBidXR0b25cblx0ICovXG5cdGlmIChcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2EtdGFsaycpICYmXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhLXRhbGsgYScpWzBdICYmXG5cdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYS10YWxrIGEnKVswXSBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZi5pbmNsdWRlcygncmVkbGluaz0xJylcblx0KSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLXRhbGsnKT8ucmVtb3ZlKCk7XG5cdH1cblxuXHQvKipcblx0ICogSWYgcGVybWlzc2lvbiBlcnJvciBgdGl0bGVibGFja2xpc3QtdGVtcG9yYXJ5YCBleGlzdHMsXG5cdCAqIHJlbW92ZSB1bm5lY2Vzc2FyeSBlbGVtZW50c1xuXHQgKi9cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZWJsYWNrbGlzdC10ZW1wb3JhcnknKSkge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGVybWlzc2lvbnNlcnJvcnN0ZXh0LXdpdGhhY3Rpb24sICNmaXJzdEhlYWRpbmcnKSkge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OKSB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDYpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogSWYgZWRpdGluZyBwYWdlcyB1bmRlciBgRmlsZTpgIG5hbWVzcGFjZSxcblx0XHRcdCAqIHJlZGlyZWN0IHRvIFNwZWNpYWw6VXBsb2FkV2l6YXJkXG5cdFx0XHQgKi9cblx0XHRcdGxvY2F0aW9uLmhyZWYgPSAnL3dpa2kvU3BlY2lhbDpVcGxvYWRXaXphcmQnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIElmIGVkaXRpbmcgcGFnZXMgdW5kZXIgb3RoZXIgbmFtZXNwYWNlcyxcblx0XHRcdCAqIHJlZGlyZWN0IHRvIFtbUVc6QUNIXV1cblx0XHRcdCAqL1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9ICcvd2lraS9RVzpBQ0gnO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtpbnRyb0FDSH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFByZXZpZXc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHByZXZpZXcgdGhlIGVkaXRlZCB0ZXh0Jyxcblx0XHRcdGphOiAn44OX44Os44OT44Ol44O844GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+WFiOmihOiniCcsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vlhYjpoJDopr0nLFxuXHRcdH0pLFxuXHRcdFJldmlzaW9uUHJlbG9hZGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbnRlbnQgb2YgcmV2aXNpb24gJDEgcHJlbG9hZGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliqDovb3niYjmnKwkMeeahOWGheWuueOAgicsXG5cdFx0XHQnemgtaGFudCc6ICflt7LovInlhaXniYjmnKwkMeeahOWFp+WuueOAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBQcmVsb2FkIGNvbnRlbnRzIGZyb20gUmV2aXNpb24gSUQgKG9sZGlkKVxuICovXG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcHJlbG9hZFJldmlkID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cblx0aWYgKCFyZXZpZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgpO1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRyZXZpZHM6IE51bWJlci5wYXJzZUludChyZXZpZCwgMTApLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0dm9pZCBhcGkuZ2V0KHBhcmFtcykudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdGNvbnN0IHtjb250ZW50fSA9IHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluO1xuXHRcdGlmIChcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLmxlbmd0aCAmJlxuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykuaGFzQ2xhc3MoJ29vLXVpLWltYWdlLXByb2dyZXNzaXZlJylcblx0XHQpIHtcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fVxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykpIHtcblx0XHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSBjb250ZW50O1xuXHRcdFx0JGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cERpZmZdJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ1JldmlzaW9uUHJlbG9hZGVkJykucmVwbGFjZSgnJDEnLCByZXZpZCksIHt0eXBlOiAnc3VjY2Vzcyd9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcmVsb2FkUmV2aWR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElB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TUFBQ0M7SUFBTyxJQUFJRCxNQUFNRSxNQUFNLENBQUMsRUFBRUMsVUFBVSxDQUFDLEVBQUVDLE1BQU1DO0FBQ3BELFFBQ0NuRSxNQUFNRSxLQUFLLHVCQUF1QixFQUFFQyxVQUNwQ0gsTUFBTUUsS0FBSyx1QkFBdUIsRUFBRWtFLFNBQVMseUJBQXlCLEdBQ3JFO0FBQ0RwRSxZQUFNRSxLQUFLLHVCQUF1QixFQUFFbUUsUUFBUSxPQUFPO0lBQ3BEO0FBQ0EsUUFBSWxELFNBQVNZLGNBQWMsMkJBQTJCLEdBQUc7QUFDdkRaLGVBQVNZLGNBQWMsMkJBQTJCLEVBQTBCTCxRQUFRcUM7QUFDckYvRCxZQUFNRSxLQUFLLG9CQUFvQixFQUFFbUUsUUFBUSxPQUFPO0FBQ2hELFdBQUtoRixHQUFHaUYsT0FBT3pCLFdBQVcsbUJBQW1CLEVBQUUwQixRQUFRLE1BQU10QixLQUFLLEdBQUc7UUFBQ3VCLE1BQU07TUFBUyxDQUFDO0lBQ3ZGO0VBQ0QsQ0FBQztBQUNGOztBSGpDQSxNQUFBLEdBQUsxRCxtQkFBQTJELFNBQVEsRUFBRVosS0FBSyxTQUFTYSxTQUFTMUUsT0FBc0M7QUFFM0VELG1CQUFpQkMsS0FBSztBQUd0Qk8sZUFBYVAsS0FBSztBQUdsQixRQUFNaUQsUUFBUTVELEdBQUdlLEtBQUtDLGNBQWMsY0FBYztBQUNsRCxNQUFJNEMsU0FBU3BELDZCQUE2QjtBQUN6Q21ELGlCQUFhaEQsS0FBSztFQUNuQjtBQUdBLFFBQU0yRSxRQUFRdEYsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO0FBQ3pDLE1BQUksQ0FBQ29GLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU3RSxTQUFTTCxtQkFBbUIsR0FBRztBQUN6RHVCLGFBQVM7RUFDVjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1dJS0lfSUQiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJXR19QQUdFX05BTUUiLCAiV0dfVVNFUl9HUk9VUFMiLCAiX213JGNvbmZpZyRnZXQiLCAiSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OIiwgImluY2x1ZGVzIiwgImNsZWFyVW5kb1N1bW1hcnkiLCAiJGJvZHkiLCAiJHdwQXV0b1N1bW1hcnkiLCAiZmluZCIsICJsZW5ndGgiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgInZhbCIsICJkaXNhYmxlVGl0bGUiLCAiJHdwU3VtbWFyeSIsICJwcm9wIiwgIm5vU2VjdGlvblRpdGxlUGFnZXMiLCAibm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4IiwgInRlc3QiLCAiYWRkQ1NTIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImludHJvQUNIIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAicmVtb3ZlIiwgImVyciIsICJlIiwgImYiLCAicXVlcnlTZWxlY3RvciIsICJocmVmIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJsb2NhdGlvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiUHJldmlldyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJSZXZpc2lvblByZWxvYWRlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInByZWxvYWRSZXZpZCIsICJyZXZpZCIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInJldmlkcyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiZm9ybWF0dmVyc2lvbiIsICJydnByb3AiLCAicnZzbG90cyIsICJ0aGVuIiwgInF1ZXJ5IiwgImNvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiaGFzQ2xhc3MiLCAidHJpZ2dlciIsICJub3RpZnkiLCAicmVwbGFjZSIsICJ0eXBlIiwgImdldEJvZHkiLCAiZWRpdEZvcm0iLCAiY3VyaWQiXQp9Cg==
