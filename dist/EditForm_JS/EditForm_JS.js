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
    introACH();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9haUFzc2lzdGVkLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnkudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvZGlzYWJsZVRpdGxlLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9FZGl0Rm9ybV9KUy50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9pbnRyb0FDSC50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9wcmVsb2FkUmV2aWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfV0lLSV9JRCA9IG13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19VU0VSX0dST1VQUzogc3RyaW5nW10gPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKSA/PyBbXTtcblxuY29uc3QgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OOiBib29sZWFuID0gWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKFdHX0FDVElPTik7XG5cbmV4cG9ydCB7V0dfUEFHRV9OQU1FLCBXR19OQU1FU1BBQ0VfTlVNQkVSLCBXR19VU0VSX0dST1VQUywgV0dfV0lLSV9JRCwgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWlBc3Npc3RlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRlZCBjb250ZW50IHdhcyBhc3Npc3RlZCBieSBhcnRpZmljaWFsIGludGVsbGlnZW5jZScsXG5cdFx0XHRqYTogJ+OBk+OBrue3qOmbhuWGheWuueOBr+S6uuW3peefpeiDveOBq+OCiOOCi+aUr+aPtOOCkuWPl+OBkeOBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHnlLHkurrlt6Xmmbrog73vvIhBSe+8iei+heWKqScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/nlLHkurrlt6Xmmbrog73vvIhBSe+8iei8lOWKqScsXG5cdFx0fSksXG5cdFx0UHJldmlldzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgcHJldmlldyB0aGUgZWRpdGVkIHRleHQnLFxuXHRcdFx0amE6ICfjg5fjg6zjg5Pjg6Xjg7zjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35YWI6aKE6KeIJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WFiOmgkOimvScsXG5cdFx0fSksXG5cdFx0UmV2aXNpb25QcmVsb2FkZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29udGVudCBvZiByZXZpc2lvbiAkMSBwcmVsb2FkZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWKoOi9veeJiOacrCQx55qE5YaF5a6544CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sui8ieWFpeeJiOacrCQx55qE5YWn5a6544CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MgKi9cbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5jb25zdCBhaUFzc2lzdGVkID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5PzogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0aWYgKGlzSW5pdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IGlzVmVJbml0OiBib29sZWFuID0gISF2ZS5pbml0O1xuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9IGlzVmVJbml0XG5cdFx0PyAoJGJvZHkgYXMgSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pLmZpbmQoJy52ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlcycpXG5cdFx0OiAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpc0luaXQgPSB0cnVlO1xuXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY2hhbmdlVGFnOiBzdHJpbmcgPSAnQUlfYXNzaXN0ZWQnO1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoaXNWZUluaXQpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHZlLmluaXQudGFyZ2V0LnNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJyk7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0dmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR9KTtcblx0XHRcdCRib2R5ID0gKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLnBhcmVudHMoJ2JvZHknKTtcblx0XHRcdGNvbnN0ICRvcmlnaW5XcENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN3cENoYW5nZVRhZ3MnKTtcblx0XHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0XHRcdH1cblx0XHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0XHQkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbChjaGFuZ2VUYWdzKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHthaUFzc2lzdGVkfTtcbiIsICJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwQXV0b1N1bW1hcnlcIl0nKTtcblx0aWYgKCEkd3BBdXRvU3VtbWFyeS5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1bmRvJykpIHtcblx0XHQkd3BBdXRvU3VtbWFyeS52YWwoJycpO1xuXHR9XG59O1xuXG5leHBvcnQge2NsZWFyVW5kb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7V0dfUEFHRV9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZGlzYWJsZVRpdGxlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoJGJvZHkuZmluZCgnI25vLW5ldy10aXRsZScpLmxlbmd0aCAmJiAkYm9keS5maW5kKCcjZWRpdGZvcm0gaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXScpLnZhbCgpID09PSAnbmV3Jykge1xuXHRcdC8vIOS8oOe7n+aWh+acrOe8lui+keWZqFxuXHRcdGNvbnN0ICR3cFN1bW1hcnk6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN3cFN1bW1hcnknKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ1FpdXdlbl90YWxrOuS+teadg+aPkOaKpScsICdRaXV3ZW5fdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL15RaXV3ZW5fdGFsazrlrZjlup/orqjorrovO1xuXHRpZiAoXG5cdFx0KG5vU2VjdGlvblRpdGxlUGFnZXMuaW5jbHVkZXMoV0dfUEFHRV9OQU1FKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdChXR19QQUdFX05BTUUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfTkFNRVNQQUNFX05VTUJFUn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7YWlBc3Npc3RlZH0gZnJvbSAnLi9tb2R1bGVzL2FpQXNzaXN0ZWQnO1xuaW1wb3J0IHtjbGVhclVuZG9TdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeSc7XG5pbXBvcnQge2Rpc2FibGVUaXRsZX0gZnJvbSAnLi9tb2R1bGVzL2Rpc2FibGVUaXRsZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2ludHJvQUNIfSBmcm9tICcuL21vZHVsZXMvaW50cm9BQ0gnO1xuaW1wb3J0IHtwcmVsb2FkUmV2aWR9IGZyb20gJy4vbW9kdWxlcy9wcmVsb2FkUmV2aWQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHQvLyDliKDpmaTlm57pgIDml7boh6rliqjnlJ/miJDnmoTnvJbovpHmkZjopoFcblx0Y2xlYXJVbmRvU3VtbWFyeSgkYm9keSk7XG5cblx0Ly8g5Zyo5o+Q5Lqk5paw5q616JC95pe277yM6K6p5Li76aKY5qCP5Zyo54m55a6a5oOF5Ya15LiL5aSx5pWIXG5cdGRpc2FibGVUaXRsZSgkYm9keSk7XG5cblx0Ly8g5rqQ5Luj56CB57yW6L6R5Zmo5Yqg6L294oCc57yW6L6R6K+35rGC4oCd6KGl5LiBXG5cdGNvbnN0IHJldmlkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdwcmVsb2FkcmV2aWQnKTtcblx0aWYgKHJldmlkICYmIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTikge1xuXHRcdHByZWxvYWRSZXZpZCgkYm9keSk7XG5cdH1cblxuXHQvLyDmlrDnlKjmiLflvJXlr7zoh7PmnaHnm67liJvlu7rlkJHlr7zvvIhbW1FXOkFGRF1d77yJXG5cdGNvbnN0IGN1cmlkID0gbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKTtcblx0aWYgKCFjdXJpZCAmJiAhWzIsIDMsIDExOF0uaW5jbHVkZXMoV0dfTkFNRVNQQUNFX05VTUJFUikpIHtcblx0XHRpbnRyb0FDSCgpO1xuXHR9XG5cblx0Ly8gQUnovoXliqnnvJbovpHnibnmrorlo7DmmI5cblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdGFpQXNzaXN0ZWQoe1xuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0YWlBc3Npc3RlZCh7XG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblx0fSk7XG59KTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfVVNFUl9HUk9VUFMsIFdHX1dJS0lfSUR9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBpbnRyb0FDSCA9ICgpOiB2b2lkID0+IHtcblx0Ly8gRGlzYWJsZWQgZm9yIHdpa2lzIG90aGVyIHRoYW4gemhxaXV3ZW5iYWlrZVxuXHRpZiAoV0dfV0lLSV9JRCAhPT0gJ3pocWl1d2VuYmFpa2UnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gRGlzYWJsZWQgZm9yIGNvbmZpcm1lZCB1c2Vyc1xuXHRpZiAoV0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ2NvbmZpcm1lZCcpIHx8IFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdhdXRvY29uZmlybWVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogUmVtb3ZlIFwiRWRpdFwiIGJ1dHRvbnNcblx0ICovXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2EtdmUtZWRpdCwgI2NhLWVkaXQnKSkge1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdH1cblxuXHQvKipcblx0ICogSWYgdGFsayBwYWdlIGRvZXMgbm90IGV4aXN0LCByZW1vdmUgXCJUYWxrIHBhZ2VcIiBidXR0b25cblx0ICovXG5cdGlmIChcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2EtdGFsaycpICYmXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NhLXRhbGsgYScpWzBdICYmXG5cdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYS10YWxrIGEnKVswXSBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZi5pbmNsdWRlcygncmVkbGluaz0xJylcblx0KSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLXRhbGsnKT8ucmVtb3ZlKCk7XG5cdH1cblxuXHQvKipcblx0ICogSWYgcGVybWlzc2lvbiBlcnJvciBgdGl0bGVibGFja2xpc3QtdGVtcG9yYXJ5YCBleGlzdHMsXG5cdCAqIHJlbW92ZSB1bm5lY2Vzc2FyeSBlbGVtZW50c1xuXHQgKi9cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZWJsYWNrbGlzdC10ZW1wb3JhcnknKSkge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGVybWlzc2lvbnNlcnJvcnN0ZXh0LXdpdGhhY3Rpb24sICNmaXJzdEhlYWRpbmcnKSkge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmUoKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OKSB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPT09IDYpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogSWYgZWRpdGluZyBwYWdlcyB1bmRlciBgRmlsZTpgIG5hbWVzcGFjZSxcblx0XHRcdCAqIHJlZGlyZWN0IHRvIFNwZWNpYWw6VXBsb2FkV2l6YXJkXG5cdFx0XHQgKi9cblx0XHRcdGxvY2F0aW9uLmhyZWYgPSAnL3dpa2kvU3BlY2lhbDpVcGxvYWRXaXphcmQnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIElmIGVkaXRpbmcgcGFnZXMgdW5kZXIgb3RoZXIgbmFtZXNwYWNlcyxcblx0XHRcdCAqIHJlZGlyZWN0IHRvIFtbUVc6QUNIXV1cblx0XHRcdCAqL1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9ICcvd2lraS9RVzpBQ0gnO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtpbnRyb0FDSH07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbi8qKlxuICogUHJlbG9hZCBmdW5jdGlvbiBmb3IgZXhpc3RpbmcgcGFnZVxuICovXG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcHJlbG9hZFJldmlkID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cblx0aWYgKCFyZXZpZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgpO1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRyZXZpZHM6IE51bWJlci5wYXJzZUludChyZXZpZCwgMTApLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0dm9pZCBhcGkuZ2V0KHBhcmFtcykudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdGNvbnN0IHtjb250ZW50fSA9IHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluO1xuXHRcdGlmIChcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLmxlbmd0aCAmJlxuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykuaGFzQ2xhc3MoJ29vLXVpLWltYWdlLXByb2dyZXNzaXZlJylcblx0XHQpIHtcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fVxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BUZXh0Ym94MScpKSB7XG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwVGV4dGJveDEnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IGNvbnRlbnQ7XG5cdFx0XHQkYm9keS5maW5kKCcjd3BEaWZmJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ1JldmlzaW9uUHJlbG9hZGVkJykucmVwbGFjZSgnJDEnLCByZXZpZCksIHt0eXBlOiAnc3VjY2Vzcyd9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcmVsb2FkUmV2aWR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxhQUFhSCxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDM0MsSUFBTUUsc0JBQThCSixHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQjtBQUNyRSxJQUFNRyxlQUF1QkwsR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBQ3ZE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R0MsT0FBT0MsSUFBSSxhQUFhO0FBQ3pDLE1BQUksQ0FBQ2dJLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUV6SCxTQUFTTCxtQkFBbUIsR0FBRztBQUN6RGdGLGFBQVM7RUFDVjtBQUdBcEYsS0FBR21JLEtBQUssbUJBQW1CLEVBQUVDLElBQUszRyxlQUFvQjtBQUNyREYsZUFBVztNQUNWRTtJQUNELENBQUM7RUFDRixDQUFDO0FBRUR6QixLQUFHbUksS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEN0csZUFBVztNQUNWQztJQUNELENBQUM7RUFDRixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfV0lLSV9JRCIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIldHX1BBR0VfTkFNRSIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04iLCAiaW5jbHVkZXMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWlBc3Npc3RlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJQcmV2aWV3IiwgIlJldmlzaW9uUHJlbG9hZGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpc0luaXQiLCAiYWlBc3Npc3RlZCIsICIkYm9keSIsICIkZWRpdEZvcm0iLCAiaXNWZUluaXQiLCAidmUiLCAiaW5pdCIsICIkdGFyZ2V0IiwgImZpbmQiLCAibGVuZ3RoIiwgImNoZWNrYm94IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAib24iLCAiY2hhbmdlVGFnIiwgImdlbmVyYXRlQ2hhbmdlVGFncyIsICJvcmlnaW5DaGFuZ2VUYWdzIiwgImlzU2VsZWN0ZWQiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAiY2hhbmdlVGFncyIsICJfdmUkaW5pdCR0YXJnZXQkc2F2ZUYiLCAiX3ZlJGluaXQkdGFyZ2V0JHNhdmVGMiIsICJfdmUkaW5pdCR0YXJnZXQkc2F2ZUYzIiwgInRhcmdldCIsICJzYXZlRmllbGRzIiwgIndwQ2hhbmdlVGFncyIsICJjYWxsIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQyIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICJwYXJlbnRzIiwgIiRvcmlnaW5XcENoYW5nZVRhZ3MiLCAicHJlcGVuZCIsICJ2YWwiLCAidG9TdHJpbmciLCAiY2hlY2tib3hMYXlvdXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAibGFiZWwiLCAiYXBwZW5kIiwgIiRlbGVtZW50IiwgImNsZWFyVW5kb1N1bW1hcnkiLCAiJHdwQXV0b1N1bW1hcnkiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImRpc2FibGVUaXRsZSIsICIkd3BTdW1tYXJ5IiwgInByb3AiLCAibm9TZWN0aW9uVGl0bGVQYWdlcyIsICJub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgiLCAidGVzdCIsICJhZGRDU1MiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImludHJvQUNIIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAicmVtb3ZlIiwgImVyciIsICJlIiwgImYiLCAicXVlcnlTZWxlY3RvciIsICJocmVmIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJsb2NhdGlvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicHJlbG9hZFJldmlkIiwgInJldmlkIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAicmV2aWRzIiwgIk51bWJlciIsICJwYXJzZUludCIsICJmb3JtYXR2ZXJzaW9uIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInRoZW4iLCAicXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJoYXNDbGFzcyIsICJ0cmlnZ2VyIiwgIm5vdGlmeSIsICJnZXRCb2R5IiwgImVkaXRGb3JtIiwgImN1cmlkIiwgImhvb2siLCAiYWRkIl0KfQo=
