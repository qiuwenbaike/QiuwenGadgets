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
//! src/EditForm_JS/modules/constant.ts
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
var WG_ACTION = mw.config.get("wgAction");
var WG_WIKI_ID = mw.config.get("wgWikiID");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/EditForm_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    AiAssisted: (0, import_ext_gadget.localize)({
      en: "This edited content was assisted by artificial intelligence",
      ja: "この編集内容は人工知能による支援を受けています",
      "zh-hans": "此编辑由人工智能（AI）辅助",
      "zh-hant": "此編輯由人工智能（AI）輔助"
    }),
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
//! src/EditForm_JS/modules/aiAssisted.ts
var isInit = false;
var aiAssisted = ({
  $body,
  $editForm
}) => {
  if (isInit) {
    return;
  }
  const isVeInit = !!ve.init;
  const $target = isVeInit ? $body.find(".ve-ui-mwSaveDialog-checkboxes") : $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$target.length) {
    return;
  }
  isInit = true;
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  checkbox.on("change", () => {
    const changeTag = "AI_assisted";
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag) : originChangeTags.replace(",".concat(changeTag), "");
    };
    let changeTags = "";
    if (isVeInit) {
      var _ve$init$target$saveF, _ve$init$target$saveF2, _ve$init$target$saveF3;
      changeTags = generateChangeTags((_ve$init$target$saveF = (_ve$init$target$saveF2 = (_ve$init$target$saveF3 = ve.init.target.saveFields).wpChangeTags) === null || _ve$init$target$saveF2 === void 0 ? void 0 : _ve$init$target$saveF2.call(_ve$init$target$saveF3)) !== null && _ve$init$target$saveF !== void 0 ? _ve$init$target$saveF : "");
      ve.init.target.saveFields.wpChangeTags = () => {
        return changeTags;
      };
    } else {
      var _$originWpChangeTags$, _$originWpChangeTags$2;
      const $wpChangeTags = $("<input>").attr({
        id: "wpChangeTags",
        name: "wpChangeTags",
        type: "hidden",
        value: ""
      });
      $body = $editForm.parents("body");
      const $originWpChangeTags = $body.find("#wpChangeTags");
      if (!$originWpChangeTags.length) {
        $body.prepend($wpChangeTags);
      }
      changeTags = generateChangeTags((_$originWpChangeTags$ = (_$originWpChangeTags$2 = $originWpChangeTags.val()) === null || _$originWpChangeTags$2 === void 0 ? void 0 : _$originWpChangeTags$2.toString()) !== null && _$originWpChangeTags$ !== void 0 ? _$originWpChangeTags$ : "");
      $originWpChangeTags.val(changeTags);
    }
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label: getMessage("AiAssisted")
  });
  $target.append(checkboxLayout.$element);
};
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
    const $wpSummary = $body.find("#wpSummary");
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
//! src/EditForm_JS/modules/introAFC.ts
var introAFC = () => {
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
    if (document.querySelector("#wpTextbox1")) {
      document.querySelector("#wpTextbox1").value = content;
      $body.find("#wpDiff").trigger("click");
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
    introAFC();
  }
  mw.hook("wikipage.editform").add(($editForm) => {
    aiAssisted({
      $editForm
    });
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    aiAssisted({
      $body
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9haUFzc2lzdGVkLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnkudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvZGlzYWJsZVRpdGxlLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9FZGl0Rm9ybV9KUy50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9pbnRyb0FGQy50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9wcmVsb2FkUmV2aWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfV0lLSV9JRCA9IG13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19VU0VSX0dST1VQUzogc3RyaW5nW10gPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKSA/PyBbXTtcblxuY29uc3QgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OOiBib29sZWFuID0gWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKFdHX0FDVElPTik7XG5cbmV4cG9ydCB7V0dfUEFHRV9OQU1FLCBXR19OQU1FU1BBQ0VfTlVNQkVSLCBXR19VU0VSX0dST1VQUywgV0dfV0lLSV9JRCwgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWlBc3Npc3RlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRlZCBjb250ZW50IHdhcyBhc3Npc3RlZCBieSBhcnRpZmljaWFsIGludGVsbGlnZW5jZScsXG5cdFx0XHRqYTogJ+OBk+OBrue3qOmbhuWGheWuueOBr+S6uuW3peefpeiDveOBq+OCiOOCi+aUr+aPtOOCkuWPl+OBkeOBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHnlLHkurrlt6Xmmbrog73vvIhBSe+8iei+heWKqScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/nlLHkurrlt6Xmmbrog73vvIhBSe+8iei8lOWKqScsXG5cdFx0fSksXG5cdFx0UHJldmlldzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgcHJldmlldyB0aGUgZWRpdGVkIHRleHQnLFxuXHRcdFx0amE6ICfjg5fjg6zjg5Pjg6Xjg7zjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35YWI6aKE6KeIJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WFiOmgkOimvScsXG5cdFx0fSksXG5cdFx0UmV2aXNpb25QcmVsb2FkZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29udGVudCBvZiByZXZpc2lvbiAkMSBwcmVsb2FkZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWKoOi9veeJiOacrCQx55qE5YaF5a6544CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sui8ieWFpeeJiOacrCQx55qE5YWn5a6544CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MgKi9cbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5jb25zdCBhaUFzc2lzdGVkID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5PzogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0aWYgKGlzSW5pdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IGlzVmVJbml0OiBib29sZWFuID0gISF2ZS5pbml0O1xuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9IGlzVmVJbml0XG5cdFx0PyAoJGJvZHkgYXMgSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pLmZpbmQoJy52ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlcycpXG5cdFx0OiAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpc0luaXQgPSB0cnVlO1xuXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY2hhbmdlVGFnOiBzdHJpbmcgPSAnQUlfYXNzaXN0ZWQnO1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoaXNWZUluaXQpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHZlLmluaXQudGFyZ2V0LnNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJyk7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0dmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR9KTtcblx0XHRcdCRib2R5ID0gKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLnBhcmVudHMoJ2JvZHknKTtcblx0XHRcdGNvbnN0ICRvcmlnaW5XcENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN3cENoYW5nZVRhZ3MnKTtcblx0XHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0XHRcdH1cblx0XHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0XHQkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbChjaGFuZ2VUYWdzKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHthaUFzc2lzdGVkfTtcbiIsICJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwQXV0b1N1bW1hcnlcIl0nKTtcblx0aWYgKCEkd3BBdXRvU3VtbWFyeS5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1bmRvJykpIHtcblx0XHQkd3BBdXRvU3VtbWFyeS52YWwoJycpO1xuXHR9XG59O1xuXG5leHBvcnQge2NsZWFyVW5kb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7V0dfUEFHRV9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZGlzYWJsZVRpdGxlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoJGJvZHkuZmluZCgnI25vLW5ldy10aXRsZScpLmxlbmd0aCAmJiAkYm9keS5maW5kKCcjZWRpdGZvcm0gaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXScpLnZhbCgpID09PSAnbmV3Jykge1xuXHRcdC8vIOS8oOe7n+aWh+acrOe8lui+keWZqFxuXHRcdGNvbnN0ICR3cFN1bW1hcnk6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN3cFN1bW1hcnknKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ1FpdXdlbl90YWxrOuS+teadg+aPkOaKpScsICdRaXV3ZW5fdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL15RaXV3ZW5fdGFsazrlrZjlup/orqjorrovO1xuXHRpZiAoXG5cdFx0KG5vU2VjdGlvblRpdGxlUGFnZXMuaW5jbHVkZXMoV0dfUEFHRV9OQU1FKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdChXR19QQUdFX05BTUUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7YWlBc3Npc3RlZH0gZnJvbSAnLi9tb2R1bGVzL2FpQXNzaXN0ZWQnO1xuaW1wb3J0IHtjbGVhclVuZG9TdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeSc7XG5pbXBvcnQge2Rpc2FibGVUaXRsZX0gZnJvbSAnLi9tb2R1bGVzL2Rpc2FibGVUaXRsZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2ludHJvQUZDfSBmcm9tICcuL21vZHVsZXMvaW50cm9BRkMnO1xuaW1wb3J0IHtwcmVsb2FkUmV2aWR9IGZyb20gJy4vbW9kdWxlcy9wcmVsb2FkUmV2aWQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHQvLyDliKDpmaTlm57pgIDml7boh6rliqjnlJ/miJDnmoTnvJbovpHmkZjopoFcblx0Y2xlYXJVbmRvU3VtbWFyeSgkYm9keSk7XG5cblx0Ly8g5Zyo5o+Q5Lqk5paw5q616JC95pe277yM6K6p5Li76aKY5qCP5Zyo54m55a6a5oOF5Ya15LiL5aSx5pWIXG5cdGRpc2FibGVUaXRsZSgkYm9keSk7XG5cblx0Ly8g5rqQ5Luj56CB57yW6L6R5Zmo5Yqg6L294oCc57yW6L6R6K+35rGC4oCd6KGl5LiBXG5cdGNvbnN0IHJldmlkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdwcmVsb2FkcmV2aWQnKTtcblx0aWYgKHJldmlkICYmIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTikge1xuXHRcdHByZWxvYWRSZXZpZCgkYm9keSk7XG5cdH1cblxuXHQvLyDmlrDnlKjmiLflvJXlr7zoh7PmnaHnm67liJvlu7rlkJHlr7zvvIhbW1FXOkFGQ11d77yJXG5cdGNvbnN0IGN1cmlkID0gbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKTtcblx0aWYgKCFjdXJpZCAmJiAhWzIsIDMsIDExOF0uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRpbnRyb0FGQygpO1xuXHR9XG5cblx0Ly8gQUnovoXliqnnvJbovpHnibnmrorlo7DmmI5cblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdGFpQXNzaXN0ZWQoe1xuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0YWlBc3Npc3RlZCh7XG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblx0fSk7XG59KTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfVVNFUl9HUk9VUFMsIFdHX1dJS0lfSUR9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBpbnRyb0FGQyA9ICgpOiB2b2lkID0+IHtcblx0Ly8gRGlzYWJsZWQgZm9yIHdpa2lzIG90aGVyIHRoYW4gemhxaXV3ZW5iYWlrZVxuXHRpZiAoV0dfV0lLSV9JRCAhPT0gJ3pocWl1d2VuYmFpa2UnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gRGlzYWJsZWQgZm9yIGNvbmZpcm1lZCB1c2Vyc1xuXHRpZiAoV0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ2NvbmZpcm1lZCcpIHx8IFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdhdXRvY29uZmlybWVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIFwiRWRpdFwiIGJ1dHRvbnNcblx0ICovXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2EtdmUtZWRpdCwgI2NhLWVkaXQnKSkge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdH1cblxuXHQvKipcblx0ICogSWYgdGFsayBwYWdlIGRvZXMgbm90IGV4aXN0LCByZW1vdmUgXCJUYWxrIHBhZ2VcIiBidXR0b25cblx0ICovXG5cdGlmIChcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2EtdGFsaycpICYmXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhLXRhbGsgYScpWzBdICYmXG5cdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYS10YWxrIGEnKVswXSBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZi5pbmNsdWRlcygncmVkbGluaz0xJylcblx0KSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLXRhbGsnKT8ucmVtb3ZlKCk7XG5cdH1cblxuXHQvKipcblx0ICogSWYgcGVybWlzc2lvbiBlcnJvciBgdGl0bGVibGFja2xpc3QtdGVtcG9yYXJ5YCBleGlzdHMsXG5cdCAqIHJlbW92ZSB1bm5lY2Vzc2FyeSBlbGVtZW50c1xuXHQgKi9cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZWJsYWNrbGlzdC10ZW1wb3JhcnknKSkge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGVybWlzc2lvbnNlcnJvcnN0ZXh0LXdpdGhhY3Rpb24sICNmaXJzdEhlYWRpbmcnKSkge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OKSB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDYpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogSWYgZWRpdGluZyBwYWdlcyB1bmRlciBgRmlsZTpgIG5hbWVzcGFjZSxcblx0XHRcdCAqIHJlZGlyZWN0IHRvIFNwZWNpYWw6VXBsb2FkV2l6YXJkXG5cdFx0XHQgKi9cblx0XHRcdGxvY2F0aW9uLmhyZWYgPSAnL3dpa2kvU3BlY2lhbDpVcGxvYWRXaXphcmQnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIElmIGVkaXRpbmcgcGFnZXMgdW5kZXIgb3RoZXIgbmFtZXNwYWNlcyxcblx0XHRcdCAqIHJlZGlyZWN0IHRvIFtbUVc6QUNIXV1cblx0XHRcdCAqL1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9ICcvd2lraS9RVzpBQ0gnO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtpbnRyb0FGQ307XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUHJlbG9hZCBjb250ZW50cyBmcm9tIFJldmlzaW9uIElEIChvbGRpZClcbiAqL1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHByZWxvYWRSZXZpZCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3QgcmV2aWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ByZWxvYWRyZXZpZCcpO1xuXG5cdGlmICghcmV2aWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoKTtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cmV2aWRzOiBOdW1iZXIucGFyc2VJbnQocmV2aWQsIDEwKSxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdHZvaWQgYXBpLmdldChwYXJhbXMpLnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRjb25zdCB7Y29udGVudH0gPSBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbjtcblx0XHRpZiAoXG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS5sZW5ndGggJiZcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLmhhc0NsYXNzKCdvby11aS1pbWFnZS1wcm9ncmVzc2l2ZScpXG5cdFx0KSB7XG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdH1cblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwVGV4dGJveDEnKSkge1xuXHRcdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cFRleHRib3gxJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSBjb250ZW50O1xuXHRcdFx0JGJvZHkuZmluZCgnI3dwRGlmZicpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdSZXZpc2lvblByZWxvYWRlZCcpLnJlcGxhY2UoJyQxJywgcmV2aWQpLCB7dHlwZTogJ3N1Y2Nlc3MnfSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJlbG9hZFJldmlkfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQXdDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDdEUsSUFBTUMsYUFBYUgsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQzNDLElBQU1FLHNCQUE4QkosR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUI7QUFDckUsSUFBTUcsZUFBdUJMLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUN2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QUdDLE9BQU9DLElBQUksYUFBYTtBQUN6QyxNQUFJLENBQUNnSSxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFekgsU0FBU0wsbUJBQW1CLEdBQUc7QUFDekRnRixhQUFTO0VBQ1Y7QUFHQXBGLEtBQUdtSSxLQUFLLG1CQUFtQixFQUFFQyxJQUFLM0csZUFBb0I7QUFDckRGLGVBQVc7TUFDVkU7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVEekIsS0FBR21JLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRDdHLGVBQVc7TUFDVkM7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1dJS0lfSUQiLCAiV0dfTkFNRVNQQUNFX05VTUJFUiIsICJXR19QQUdFX05BTUUiLCAiV0dfVVNFUl9HUk9VUFMiLCAiX213JGNvbmZpZyRnZXQiLCAiSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OIiwgImluY2x1ZGVzIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFpQXNzaXN0ZWQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiUHJldmlldyIsICJSZXZpc2lvblByZWxvYWRlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaXNJbml0IiwgImFpQXNzaXN0ZWQiLCAiJGJvZHkiLCAiJGVkaXRGb3JtIiwgImlzVmVJbml0IiwgInZlIiwgImluaXQiLCAiJHRhcmdldCIsICJmaW5kIiwgImxlbmd0aCIsICJjaGVja2JveCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIm9uIiwgImNoYW5nZVRhZyIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAib3JpZ2luQ2hhbmdlVGFncyIsICJpc1NlbGVjdGVkIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgImNoYW5nZVRhZ3MiLCAiX3ZlJGluaXQkdGFyZ2V0JHNhdmVGIiwgIl92ZSRpbml0JHRhcmdldCRzYXZlRjIiLCAiX3ZlJGluaXQkdGFyZ2V0JHNhdmVGMyIsICJ0YXJnZXQiLCAic2F2ZUZpZWxkcyIsICJ3cENoYW5nZVRhZ3MiLCAiY2FsbCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQiLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkMiIsICIkd3BDaGFuZ2VUYWdzIiwgIiQiLCAiYXR0ciIsICJpZCIsICJuYW1lIiwgInR5cGUiLCAidmFsdWUiLCAicGFyZW50cyIsICIkb3JpZ2luV3BDaGFuZ2VUYWdzIiwgInByZXBlbmQiLCAidmFsIiwgInRvU3RyaW5nIiwgImNoZWNrYm94TGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImxhYmVsIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJjbGVhclVuZG9TdW1tYXJ5IiwgIiR3cEF1dG9TdW1tYXJ5IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJkaXNhYmxlVGl0bGUiLCAiJHdwU3VtbWFyeSIsICJwcm9wIiwgIm5vU2VjdGlvblRpdGxlUGFnZXMiLCAibm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4IiwgInRlc3QiLCAiYWRkQ1NTIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbnRyb0FGQyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInJlbW92ZSIsICJlcnIiLCAiZSIsICJmIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaHJlZiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAibG9jYXRpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInByZWxvYWRSZXZpZCIsICJyZXZpZCIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInJldmlkcyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiZm9ybWF0dmVyc2lvbiIsICJydnByb3AiLCAicnZzbG90cyIsICJ0aGVuIiwgInF1ZXJ5IiwgImNvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiaGFzQ2xhc3MiLCAidHJpZ2dlciIsICJub3RpZnkiLCAiZ2V0Qm9keSIsICJlZGl0Rm9ybSIsICJjdXJpZCIsICJob29rIiwgImFkZCJdCn0K
