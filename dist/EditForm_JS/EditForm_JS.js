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
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    aiAssisted({
      $body
    });
  });
  mw.hook("wikipage.editform").add(($editForm) => {
    aiAssisted({
      $editForm
    });
  });
  const revid = mw.util.getParamValue("preloadrevid");
  if (revid && IS_WG_EDIT_OR_SUBMIT_ACTION) {
    preloadRevid($body);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9haUFzc2lzdGVkLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9tb2R1bGVzL2NsZWFyVW5kb1N1bW1hcnkudHMiLCAic3JjL0VkaXRGb3JtX0pTL21vZHVsZXMvZGlzYWJsZVRpdGxlLnRzIiwgInNyYy9FZGl0Rm9ybV9KUy9FZGl0Rm9ybV9KUy50cyIsICJzcmMvRWRpdEZvcm1fSlMvbW9kdWxlcy9wcmVsb2FkUmV2aWQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19VU0VSX0dST1VQUzogc3RyaW5nW10gPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKSA/PyBbXTtcblxuY29uc3QgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OOiBib29sZWFuID0gWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKFdHX0FDVElPTik7XG5cbmV4cG9ydCB7V0dfUEFHRV9OQU1FLCBXR19VU0VSX0dST1VQUywgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWlBc3Npc3RlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRlZCBjb250ZW50IHdhcyBhc3Npc3RlZCBieSBhcnRpZmljaWFsIGludGVsbGlnZW5jZScsXG5cdFx0XHRqYTogJ+OBk+OBrue3qOmbhuWGheWuueOBr+S6uuW3peefpeiDveOBq+OCiOOCi+aUr+aPtOOCkuWPl+OBkeOBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHnlLHkurrlt6Xmmbrog73vvIhBSe+8iei+heWKqScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/nlLHkurrlt6Xmmbrog73vvIhBSe+8iei8lOWKqScsXG5cdFx0fSksXG5cdFx0UHJldmlldzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQbGVhc2UgcHJldmlldyB0aGUgZWRpdGVkIHRleHQnLFxuXHRcdFx0amE6ICfjg5fjg6zjg5Pjg6Xjg7zjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35YWI6aKE6KeIJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+WFiOmgkOimvScsXG5cdFx0fSksXG5cdFx0UmV2aXNpb25QcmVsb2FkZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29udGVudCBvZiByZXZpc2lvbiAkMSBwcmVsb2FkZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWKoOi9veeJiOacrCQx55qE5YaF5a6544CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3sui8ieWFpeeJiOacrCQx55qE5YWn5a6544CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MgKi9cbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxubGV0IGlzSW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5jb25zdCBhaUFzc2lzdGVkID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5PzogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0aWYgKGlzSW5pdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdGNvbnN0IGlzVmVJbml0OiBib29sZWFuID0gISF2ZS5pbml0O1xuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9IGlzVmVJbml0XG5cdFx0PyAoJGJvZHkgYXMgSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pLmZpbmQoJy52ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlcycpXG5cdFx0OiAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpc0luaXQgPSB0cnVlO1xuXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY2hhbmdlVGFnOiBzdHJpbmcgPSAnQUlfYXNzaXN0ZWQnO1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRpZiAoaXNWZUluaXQpIHtcblx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHZlLmluaXQudGFyZ2V0LnNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJyk7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdFx0dmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR9KTtcblx0XHRcdCRib2R5ID0gKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLnBhcmVudHMoJ2JvZHknKTtcblx0XHRcdGNvbnN0ICRvcmlnaW5XcENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN3cENoYW5nZVRhZ3MnKTtcblx0XHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0XHRcdH1cblx0XHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0XHQkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbChjaGFuZ2VUYWdzKTtcblx0XHR9XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHthaUFzc2lzdGVkfTtcbiIsICJjb25zdCBjbGVhclVuZG9TdW1tYXJ5ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BBdXRvU3VtbWFyeTogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+ID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1cIndwQXV0b1N1bW1hcnlcIl0nKTtcblx0aWYgKCEkd3BBdXRvU3VtbWFyeS5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1bmRvJykpIHtcblx0XHQkd3BBdXRvU3VtbWFyeS52YWwoJycpO1xuXHR9XG59O1xuXG5leHBvcnQge2NsZWFyVW5kb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7V0dfUEFHRV9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZGlzYWJsZVRpdGxlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoJGJvZHkuZmluZCgnI25vLW5ldy10aXRsZScpLmxlbmd0aCAmJiAkYm9keS5maW5kKCcjZWRpdGZvcm0gaW5wdXRbbmFtZT1cIndwU2VjdGlvblwiXScpLnZhbCgpID09PSAnbmV3Jykge1xuXHRcdC8vIOS8oOe7n+aWh+acrOe8lui+keWZqFxuXHRcdGNvbnN0ICR3cFN1bW1hcnk6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN3cFN1bW1hcnknKTtcblx0XHQkd3BTdW1tYXJ5LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0JHdwU3VtbWFyeS52YWwoJycpO1xuXHR9XG5cblx0Y29uc3Qgbm9TZWN0aW9uVGl0bGVQYWdlczogc3RyaW5nW10gPSBbJ1FpdXdlbl90YWxrOuS+teadg+aPkOaKpScsICdRaXV3ZW5fdGFsazrlrZjlup/orqjorrov5YWz5rOo5bqm5o+Q5oqlJ107XG5cdGNvbnN0IG5vU2VjdGlvblRpdGxlUGFnZXNSZWdleDogUmVnRXhwID0gL15RaXV3ZW5fdGFsazrlrZjlup/orqjorrovO1xuXHRpZiAoXG5cdFx0KG5vU2VjdGlvblRpdGxlUGFnZXMuaW5jbHVkZXMoV0dfUEFHRV9OQU1FKSB8fCBub1NlY3Rpb25UaXRsZVBhZ2VzUmVnZXgudGVzdChXR19QQUdFX05BTUUpKSAmJlxuXHRcdG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VjdGlvbicpID09PSAnbmV3J1xuXHQpIHtcblx0XHQvLyDlj6/op4bljJbnvJbovpHlmaggLyDmlrB3aWtpdGV4dOaooeW8j1xuXHRcdG13LnV0aWwuYWRkQ1NTKCdoMi52ZS11aS1pbml0LWRlc2t0b3BBcnRpY2xlVGFyZ2V0LXNlY3Rpb25UaXRsZXtkaXNwbGF5Om5vbmV9Jyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZGlzYWJsZVRpdGxlfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7YWlBc3Npc3RlZH0gZnJvbSAnLi9tb2R1bGVzL2FpQXNzaXN0ZWQnO1xuaW1wb3J0IHtjbGVhclVuZG9TdW1tYXJ5fSBmcm9tICcuL21vZHVsZXMvY2xlYXJVbmRvU3VtbWFyeSc7XG5pbXBvcnQge2Rpc2FibGVUaXRsZX0gZnJvbSAnLi9tb2R1bGVzL2Rpc2FibGVUaXRsZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3ByZWxvYWRSZXZpZH0gZnJvbSAnLi9tb2R1bGVzL3ByZWxvYWRSZXZpZCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIOWIoOmZpOWbnumAgOaXtuiHquWKqOeUn+aIkOeahOe8lui+keaRmOimgVxuXHRjbGVhclVuZG9TdW1tYXJ5KCRib2R5KTtcblx0Ly8g5Zyo5o+Q5Lqk5paw5q616JC95pe277yM6K6p5Li76aKY5qCP5Zyo54m55a6a5oOF5Ya15LiL5aSx5pWIXG5cdGRpc2FibGVUaXRsZSgkYm9keSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdC8vIEFJ6L6F5Yqp57yW6L6R54m55q6K5aOw5piOXG5cdFx0YWlBc3Npc3RlZCh7XG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdC8vIEFJ6L6F5Yqp57yW6L6R54m55q6K5aOw5piOXG5cdFx0YWlBc3Npc3RlZCh7XG5cdFx0XHQkZWRpdEZvcm0sXG5cdFx0fSk7XG5cdH0pO1xuXG5cdC8vIOa6kOS7o+eggee8lui+keWZqOWKoOi9veKAnOe8lui+keivt+axguKAneihpeS4gVxuXHRjb25zdCByZXZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncHJlbG9hZHJldmlkJyk7XG5cdGlmIChyZXZpZCAmJiBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04pIHtcblx0XHRwcmVsb2FkUmV2aWQoJGJvZHkpO1xuXHR9XG59KTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3MgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xuLyoqXG4gKiBQcmVsb2FkIGZ1bmN0aW9uIGZvciBleGlzdGluZyBwYWdlXG4gKi9cbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBwcmVsb2FkUmV2aWQgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHJldmlkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdwcmVsb2FkcmV2aWQnKTtcblxuXHRpZiAoIXJldmlkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYXBpID0gaW5pdE13QXBpKCk7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJldmlkczogTnVtYmVyLnBhcnNlSW50KHJldmlkLCAxMCksXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblxuXHR2b2lkIGFwaS5nZXQocGFyYW1zKS50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0Y29uc3Qge2NvbnRlbnR9ID0gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW47XG5cdFx0aWYgKFxuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykubGVuZ3RoICYmXG5cdFx0XHQkYm9keS5maW5kKCcub28tdWktaWNvbi1oaWdobGlnaHQnKS5oYXNDbGFzcygnb28tdWktaW1hZ2UtcHJvZ3Jlc3NpdmUnKVxuXHRcdCkge1xuXHRcdFx0JGJvZHkuZmluZCgnLm9vLXVpLWljb24taGlnaGxpZ2h0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHR9XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cFRleHRib3gxJykpIHtcblx0XHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BUZXh0Ym94MScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlID0gY29udGVudDtcblx0XHRcdCRib2R5LmZpbmQoJyN3cERpZmYnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnUmV2aXNpb25QcmVsb2FkZWQnKS5yZXBsYWNlKCckMScsIHJldmlkKSwge3R5cGU6ICdzdWNjZXNzJ30pO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3ByZWxvYWRSZXZpZH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxlQUF1QkgsR0FBR0MsT0FBT0MsSUFBSSxZQUFZO0FBQ3ZELElBQU1FLGtCQUFBQyxpQkFBMkJMLEdBQUdDLE9BQU9DLElBQUksY0FBYyxPQUFBLFFBQUFHLG1CQUFBLFNBQUFBLGlCQUFLLENBQUE7QUFFbEUsSUFBTUMsOEJBQXVDLENBQUMsUUFBUSxRQUFRLEVBQUVDLFNBQVNSLFNBQVM7O0FDSmxGLElBQUFTLG9CQUF1QkMsUUFBQSxpQkFBQTtBQUV2QixJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxhQUFBLEdBQVlILGtCQUFBSSxVQUFTO01BQ3BCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTUCxrQkFBQUksVUFBUztNQUNqQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLG9CQUFBLEdBQW1CUixrQkFBQUksVUFBUztNQUMzQkMsSUFBSTtNQUNKLFdB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QUFDdkU1RSxZQUFNTSxLQUFLLFNBQVMsRUFBRTRFLFFBQVEsT0FBTztBQUNyQyxXQUFLeEcsR0FBRzJHLE9BQU96RixXQUFXLG1CQUFtQixFQUFFdUIsUUFBUSxNQUFNMkMsS0FBSyxHQUFHO1FBQUMzQixNQUFNO01BQVMsQ0FBQztJQUN2RjtFQUNELENBQUM7QUFDRjs7QURqQ0EsTUFBQSxHQUFLd0IsbUJBQUEyQixTQUFRLEVBQUVaLEtBQUssU0FBU2EsU0FBU3ZGLE9BQXNDO0FBRTNFZ0QsbUJBQWlCaEQsS0FBSztBQUV0Qm9ELGVBQWFwRCxLQUFLO0FBRWxCdEIsS0FBRzhHLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUVyRDFGLGVBQVc7TUFDVkM7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVEdEIsS0FBRzhHLEtBQUssbUJBQW1CLEVBQUVDLElBQUt4RixlQUFvQjtBQUVyREYsZUFBVztNQUNWRTtJQUNELENBQUM7RUFDRixDQUFDO0FBR0QsUUFBTTZELFFBQVFwRixHQUFHd0UsS0FBS0MsY0FBYyxjQUFjO0FBQ2xELE1BQUlXLFNBQVM5RSw2QkFBNkI7QUFDekM2RSxpQkFBYTdELEtBQUs7RUFDbkI7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19QQUdFX05BTUUiLCAiV0dfVVNFUl9HUk9VUFMiLCAiX213JGNvbmZpZyRnZXQiLCAiSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OIiwgImluY2x1ZGVzIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFpQXNzaXN0ZWQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiUHJldmlldyIsICJSZXZpc2lvblByZWxvYWRlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaXNJbml0IiwgImFpQXNzaXN0ZWQiLCAiJGJvZHkiLCAiJGVkaXRGb3JtIiwgImlzVmVJbml0IiwgInZlIiwgImluaXQiLCAiJHRhcmdldCIsICJmaW5kIiwgImxlbmd0aCIsICJjaGVja2JveCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgIm9uIiwgImNoYW5nZVRhZyIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAib3JpZ2luQ2hhbmdlVGFncyIsICJpc1NlbGVjdGVkIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgImNoYW5nZVRhZ3MiLCAiX3ZlJGluaXQkdGFyZ2V0JHNhdmVGIiwgIl92ZSRpbml0JHRhcmdldCRzYXZlRjIiLCAiX3ZlJGluaXQkdGFyZ2V0JHNhdmVGMyIsICJ0YXJnZXQiLCAic2F2ZUZpZWxkcyIsICJ3cENoYW5nZVRhZ3MiLCAiY2FsbCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQiLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkMiIsICIkd3BDaGFuZ2VUYWdzIiwgIiQiLCAiYXR0ciIsICJpZCIsICJuYW1lIiwgInR5cGUiLCAidmFsdWUiLCAicGFyZW50cyIsICIkb3JpZ2luV3BDaGFuZ2VUYWdzIiwgInByZXBlbmQiLCAidmFsIiwgInRvU3RyaW5nIiwgImNoZWNrYm94TGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImxhYmVsIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJjbGVhclVuZG9TdW1tYXJ5IiwgIiR3cEF1dG9TdW1tYXJ5IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJkaXNhYmxlVGl0bGUiLCAiJHdwU3VtbWFyeSIsICJwcm9wIiwgIm5vU2VjdGlvblRpdGxlUGFnZXMiLCAibm9TZWN0aW9uVGl0bGVQYWdlc1JlZ2V4IiwgInRlc3QiLCAiYWRkQ1NTIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicHJlbG9hZFJldmlkIiwgInJldmlkIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAicmV2aWRzIiwgIk51bWJlciIsICJwYXJzZUludCIsICJmb3JtYXR2ZXJzaW9uIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInRoZW4iLCAicXVlcnkiLCAiY29udGVudCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJoYXNDbGFzcyIsICJ0cmlnZ2VyIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAibm90aWZ5IiwgImdldEJvZHkiLCAiZWRpdEZvcm0iLCAiaG9vayIsICJhZGQiXQp9Cg==
