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
var WG_ACTION = mw.config.get("wgAction");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9haUFzc2lzdGVkLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnkudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvZGlzYWJsZVRpdGxlLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9FZGl0Rm9ybV9KUy50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9wcmVsb2FkUmV2aWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19VU0VSX0dST1VQUzogc3RyaW5nW10gPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKSA/PyBbXTtcblxuY29uc3QgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OOiBib29sZWFuID0gWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKFdHX0FDVElPTik7XG5cbmV4cG9ydCB7V0dfUEFHRV9OQU1FLCBXR19VU0VSX0dST1VQUywgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWlBc3Npc3RlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRlZCBjb250ZW50IHdhcyBhc3Npc3RlZCBieSBhcnRpZmljaWFsIGludGVsbGlnZW5jZScsXG5cdFx0XHRqYTogJ+OBk+OBrue3qOmbhuWGheWuueOBr+S6uuW3peefpeiDveOBq+OCiOOCi+aUr+aPtOOCkuWPl+OBkeOBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHnlLHkurrlt6Xmmbrog73vvIhBSe+8iei+heWKqScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/nlLHkurrlt6Xmmbrog73vvIhBSe+8iei8lOWKqScsXG5cdFx0fSksXG5cdFx0UHJldmlldzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgcHJldmlldyB0aGUgZWRpdGVkIHRleHQnLFxuXHRcdFx0amE6ICfjg5fjg6zjg5Pjg6Xjg7zjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35YWI6aKE6KeIJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WFiOmgkOimvScsXG5cdFx0fSksXG5cdFx0UmV2aXNpb25QcmVsb2FkZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29udGVudCBvZiByZXZpc2lvbiAkMSBwcmVsb2FkZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWKoOi9veeJiOacrCQx55qE5YaF5a6544CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sui8ieWFpeeJiOacrCQx55qE5YWn5a6544CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MgKi9cbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5jb25zdCBhaUFzc2lzdGVkID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5PzogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0aWYgKGlzSW5pdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IGlzVmVJbml0OiBib29sZWFuID0gISF2ZS5pbml0O1xuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9IGlzVmVJbml0XG5cdFx0PyAoJGJvZHkgYXMgSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pLmZpbmQoJy52ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlcycpXG5cdFx0OiAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpc0luaXQgPSB0cnVlO1xuXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY2hhbmdlVGFnOiBzdHJpbmcgPSAnQUlfYXNzaXN0ZWQnO1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoaXNWZUluaXQpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHZlLmluaXQudGFyZ2V0LnNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJyk7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0dmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR9KTtcblx0XHRcdCRib2R5ID0gKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLnBhcmVudHMoJ2JvZHknKTtcblx0XHRcdGNvbnN0ICRvcmlnaW5XcENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN3cENoYW5nZVRhZ3MnKTtcblx0XHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0XHRcdH1cblx0XHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0XHQkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbChjaGFuZ2VUYWdzKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHthaUFzc2lzdGVkfTtcbiIsICJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwQXV0b1N1bW1hcnlcIl0nKTtcblx0aWYgKCEkd3BBdXRvU3VtbWFyeS5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1bmRvJykpIHtcblx0XHQkd3BBdXRvU3VtbWFyeS52YWwoJycpO1xuXHR9XG59O1xuXG5leHBvcnQge2NsZWFyVW5kb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7V0dfUEFHRV9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZGlzYWJsZVRpdGxlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoJGJvZHkuZmluZCgnI25vLW5ldy10aXRsZScpLmxlbmd0aCAmJiAkYm9keS5maW5kKCcjZWRpdGZvcm0gaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXScpLnZhbCgpID09PSAnbmV3Jykge1xuXHRcdC8vIOS8oOe7n+aWh+acrOe8lui+keWZqFxuXHRcdGNvbnN0ICR3cFN1bW1hcnk6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN3cFN1bW1hcnknKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ1FpdXdlbl90YWxrOuS+teadg+aPkOaKpScsICdRaXV3ZW5fdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL15RaXV3ZW5fdGFsazrlrZjlup/orqjorrovO1xuXHRpZiAoXG5cdFx0KG5vU2VjdGlvblRpdGxlUGFnZXMuaW5jbHVkZXMoV0dfUEFHRV9OQU1FKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdChXR19QQUdFX05BTUUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7YWlBc3Npc3RlZH0gZnJvbSAnLi9tb2R1bGVzL2FpQXNzaXN0ZWQnO1xuaW1wb3J0IHtjbGVhclVuZG9TdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeSc7XG5pbXBvcnQge2Rpc2FibGVUaXRsZX0gZnJvbSAnLi9tb2R1bGVzL2Rpc2FibGVUaXRsZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3ByZWxvYWRSZXZpZH0gZnJvbSAnLi9tb2R1bGVzL3ByZWxvYWRSZXZpZCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIOWIoOmZpOWbnumAgOaXtuiHquWKqOeUn+aIkOeahOe8lui+keaRmOimgVxuXHRjbGVhclVuZG9TdW1tYXJ5KCRib2R5KTtcblxuXHQvLyDlnKjmj5DkuqTmlrDmrrXokL3ml7bvvIzorqnkuLvpopjmoI/lnKjnibnlrprmg4XlhrXkuIvlpLHmlYhcblx0ZGlzYWJsZVRpdGxlKCRib2R5KTtcblxuXHQvLyDmupDku6PnoIHnvJbovpHlmajliqDovb3igJznvJbovpHor7fmsYLigJ3ooaXkuIFcblx0Y29uc3QgcmV2aWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3ByZWxvYWRyZXZpZCcpO1xuXHRpZiAocmV2aWQgJiYgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OKSB7XG5cdFx0cHJlbG9hZFJldmlkKCRib2R5KTtcblx0fVxuXG5cdC8vIEFJ6L6F5Yqp57yW6L6R54m55q6K5aOw5piOXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRhaUFzc2lzdGVkKHtcblx0XHRcdCRlZGl0Rm9ybSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdGFpQXNzaXN0ZWQoe1xuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbi8qKlxuICogUHJlbG9hZCBmdW5jdGlvbiBmb3IgZXhpc3RpbmcgcGFnZVxuICovXG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcHJlbG9hZFJldmlkID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cblx0aWYgKCFyZXZpZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgpO1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRyZXZpZHM6IE51bWJlci5wYXJzZUludChyZXZpZCwgMTApLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0dm9pZCBhcGkuZ2V0KHBhcmFtcykudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdGNvbnN0IHtjb250ZW50fSA9IHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluO1xuXHRcdGlmIChcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLmxlbmd0aCAmJlxuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykuaGFzQ2xhc3MoJ29vLXVpLWltYWdlLXByb2dyZXNzaXZlJylcblx0XHQpIHtcblx0XHRcdCRib2R5LmZpbmQoJy5vby11aS1pY29uLWhpZ2hsaWdodCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0fVxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BUZXh0Ym94MScpKSB7XG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwVGV4dGJveDEnKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IGNvbnRlbnQ7XG5cdFx0XHQkYm9keS5maW5kKCcjd3BEaWZmJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ1JldmlzaW9uUHJlbG9hZGVkJykucmVwbGFjZSgnJDEnLCByZXZpZCksIHt0eXBlOiAnc3VjY2Vzcyd9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcmVsb2FkUmV2aWR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQXdDQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDdEUsSUFBTUMsZUFBdUJILEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUN2RCxJQUFNRSxrQkFBQUMsaUJBQTJCTCxHQUFHQyxPQUFPQyxJQUFJLGNBQWMsT0FBQSxRQUFBRyxtQkFBQSxTQUFBQSxpQkFBSyxDQUFBO0FBRWxFLElBQU1DLDhCQUF1QyxDQUFDLFFBQVEsUUFBUSxFQUFFQyxTQUFTUixTQUFTOztBQ0psRixJQUFBUyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsYUFBQSxHQUFZSCxrQkFBQUksVUFBUztNQUNwQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFVBQUEsR0FBU1Asa0JBQUFJLFVBQVM7TUFDakJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxvQkFBQSxHQUFtQlIsa0JBQUFJLFVBQVM7TUFDM0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FB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LE9BQU87QUFDckMsV0FBS3hHLEdBQUcyRyxPQUFPekYsV0FBVyxtQkFBbUIsRUFBRXVCLFFBQVEsTUFBTTJDLEtBQUssR0FBRztRQUFDM0IsTUFBTTtNQUFTLENBQUM7SUFDdkY7RUFDRCxDQUFDO0FBQ0Y7O0FEakNBLE1BQUEsR0FBS3dCLG1CQUFBMkIsU0FBUSxFQUFFWixLQUFLLFNBQVNhLFNBQVN2RixPQUFzQztBQUUzRWdELG1CQUFpQmhELEtBQUs7QUFHdEJvRCxlQUFhcEQsS0FBSztBQUdsQixRQUFNOEQsUUFBUXBGLEdBQUd3RSxLQUFLQyxjQUFjLGNBQWM7QUFDbEQsTUFBSVcsU0FBUzlFLDZCQUE2QjtBQUN6QzZFLGlCQUFhN0QsS0FBSztFQUNuQjtBQUdBdEIsS0FBRzhHLEtBQUssbUJBQW1CLEVBQUVDLElBQUt4RixlQUFvQjtBQUNyREYsZUFBVztNQUNWRTtJQUNELENBQUM7RUFDRixDQUFDO0FBRUR2QixLQUFHOEcsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEMUYsZUFBVztNQUNWQztJQUNELENBQUM7RUFDRixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfUEFHRV9OQU1FIiwgIldHX1VTRVJfR1JPVVBTIiwgIl9tdyRjb25maWckZ2V0IiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJBaUFzc2lzdGVkIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIlByZXZpZXciLCAiUmV2aXNpb25QcmVsb2FkZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImlzSW5pdCIsICJhaUFzc2lzdGVkIiwgIiRib2R5IiwgIiRlZGl0Rm9ybSIsICJpc1ZlSW5pdCIsICJ2ZSIsICJpbml0IiwgIiR0YXJnZXQiLCAiZmluZCIsICJsZW5ndGgiLCAiY2hlY2tib3giLCAiT08iLCAidWkiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJvbiIsICJjaGFuZ2VUYWciLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgIm9yaWdpbkNoYW5nZVRhZ3MiLCAiaXNTZWxlY3RlZCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJjaGFuZ2VUYWdzIiwgIl92ZSRpbml0JHRhcmdldCRzYXZlRiIsICJfdmUkaW5pdCR0YXJnZXQkc2F2ZUYyIiwgIl92ZSRpbml0JHRhcmdldCRzYXZlRjMiLCAidGFyZ2V0IiwgInNhdmVGaWVsZHMiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJwcmVwZW5kIiwgInZhbCIsICJ0b1N0cmluZyIsICJjaGVja2JveExheW91dCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJsYWJlbCIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiY2xlYXJVbmRvU3VtbWFyeSIsICIkd3BBdXRvU3VtbWFyeSIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiZGlzYWJsZVRpdGxlIiwgIiR3cFN1bW1hcnkiLCAicHJvcCIsICJub1NlY3Rpb25UaXRsZVBhZ2VzIiwgIm5vU2VjdGlvblRpdGxlUGFnZXNSZWdleCIsICJ0ZXN0IiwgImFkZENTUyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInByZWxvYWRSZXZpZCIsICJyZXZpZCIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInJldmlkcyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiZm9ybWF0dmVyc2lvbiIsICJydnByb3AiLCAicnZzbG90cyIsICJ0aGVuIiwgInF1ZXJ5IiwgImNvbnRlbnQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiaGFzQ2xhc3MiLCAidHJpZ2dlciIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIm5vdGlmeSIsICJnZXRCb2R5IiwgImVkaXRGb3JtIiwgImhvb2siLCAiYWRkIl0KfQo=
