/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Editform_AiAssisted}
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

// dist/Editform_AiAssisted/Editform_AiAssisted.js
//! src/Editform_AiAssisted/Editform_AiAssisted.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_AiAssisted/modules/constant.ts
var INPUT_ID = "editform_ai_assisted";
//! src/Editform_AiAssisted/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    AiAssisted: (0, import_ext_gadget.localize)({
      en: "This edited content was assisted by artificial intelligence",
      ja: "この編集内容は人工知能による支援を受けています",
      "zh-hans": "此编辑由人工智能（AI）辅助",
      "zh-hant": "此編輯由人工智能（AI）輔助"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Editform_AiAssisted/modules/processVisualEditor.ts
var processVisualEditor = ({
  $body
}) => {
  if (mw.config.get("wgEditFormAiAssistedInstalled")) {
    return;
  }
  const $target = $body.find(".ve-ui-mwSaveDialog-checkboxes");
  if (!$target.length) {
    return;
  }
  mw.config.set("wgEditFormAiAssistedInstalled", true);
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  checkbox.setInputId(INPUT_ID);
  checkbox.on("change", () => {
    var _ve$init$target$saveF, _ve$init$target$saveF2, _ve$init$target$saveF3;
    const changeTag = "AI_assisted";
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag) : originChangeTags.replace(",".concat(changeTag), "");
    };
    let changeTags = "";
    changeTags = generateChangeTags((_ve$init$target$saveF = (_ve$init$target$saveF2 = (_ve$init$target$saveF3 = ve.init.target.saveFields).wpChangeTags) === null || _ve$init$target$saveF2 === void 0 ? void 0 : _ve$init$target$saveF2.call(_ve$init$target$saveF3)) !== null && _ve$init$target$saveF !== void 0 ? _ve$init$target$saveF : "");
    ve.init.target.saveFields.wpChangeTags = () => {
      return changeTags;
    };
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label: getMessage("AiAssisted")
  });
  if ($body.find("#".concat(INPUT_ID)).length) {
    mw.config.set("wgEditFormAiAssistedInstalled", true);
  } else {
    $target.append(checkboxLayout.$element);
  }
};
//! src/Editform_AiAssisted/modules/processWikiEditor.ts
var processWikiEditor = ({
  $body,
  $editForm
}) => {
  if (mw.config.get("wgEditFormAiAssistedInstalled")) {
    return;
  }
  const $target = $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$target.length) {
    return;
  }
  mw.config.set("wgEditFormAiAssistedInstalled", true);
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  checkbox.setInputId(INPUT_ID);
  checkbox.on("change", () => {
    var _$originWpChangeTags$, _$originWpChangeTags$2;
    const changeTag = "AI_assisted";
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag) : originChangeTags.replace(",".concat(changeTag), "");
    };
    let changeTags = "";
    const $wpChangeTags = $("<input>").attr({
      id: "wpChangeTags",
      name: "wpChangeTags",
      type: "hidden",
      value: ""
    });
    $body = $editForm.parents("body");
    const $originWpChangeTags = $body.find("input[name=wpChangeTags]");
    if (!$originWpChangeTags.length) {
      $body.prepend($wpChangeTags);
    }
    changeTags = generateChangeTags((_$originWpChangeTags$ = (_$originWpChangeTags$2 = $originWpChangeTags.val()) === null || _$originWpChangeTags$2 === void 0 ? void 0 : _$originWpChangeTags$2.toString()) !== null && _$originWpChangeTags$ !== void 0 ? _$originWpChangeTags$ : "");
    $originWpChangeTags.val(changeTags);
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label: getMessage("AiAssisted")
  });
  if (!$body.find("#".concat(INPUT_ID)).length) {
    $target.append(checkboxLayout.$element);
  }
};
//! src/Editform_AiAssisted/Editform_AiAssisted.ts
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor({
      $body
    });
  });
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor({
      $body,
      $editForm
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBSei+heWKqee8lui+keeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwgImNvbnN0IElOUFVUX0lEID0gJ2VkaXRmb3JtX2FpX2Fzc2lzdGVkJztcblxuZXhwb3J0IHtJTlBVVF9JRH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFpQXNzaXN0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0ZWQgY29udGVudCB3YXMgYXNzaXN0ZWQgYnkgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UnLFxuXHRcdFx0amE6ICfjgZPjga7nt6jpm4blhoXlrrnjga/kurrlt6Xnn6Xog73jgavjgojjgovmlK/mj7TjgpLlj5fjgZHjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R55Sx5Lq65bel5pm66IO977yIQUnvvInovoXliqknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv55Sx5Lq65bel5pm66IO977yIQUnvvInovJTliqknLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwgKi9cbmltcG9ydCB7SU5QVVRfSUR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnRWRpdEZvcm1BaUFzc2lzdGVkSW5zdGFsbGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkYm9keS5maW5kKCcudmUtdWktbXdTYXZlRGlhbG9nLWNoZWNrYm94ZXMnKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoJ3dnRWRpdEZvcm1BaUFzc2lzdGVkSW5zdGFsbGVkJywgdHJ1ZSk7XG5cblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRjaGVja2JveC5zZXRJbnB1dElkKElOUFVUX0lEKTtcblxuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGNoYW5nZVRhZzogc3RyaW5nID0gJ0FJX2Fzc2lzdGVkJztcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHZlLmluaXQudGFyZ2V0LnNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJyk7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHR2ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0fTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdH0pO1xuXG5cdGlmICgkYm9keS5maW5kKGAjJHtJTlBVVF9JRH1gKS5sZW5ndGgpIHtcblx0XHRtdy5jb25maWcuc2V0KCd3Z0VkaXRGb3JtQWlBc3Npc3RlZEluc3RhbGxlZCcsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdCR0YXJnZXQuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQge0lOUFVUX0lEfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm0/OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnRWRpdEZvcm1BaUFzc2lzdGVkSW5zdGFsbGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KCd3Z0VkaXRGb3JtQWlBc3Npc3RlZEluc3RhbGxlZCcsIHRydWUpO1xuXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0Y2hlY2tib3guc2V0SW5wdXRJZChJTlBVVF9JRCk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBjaGFuZ2VUYWc6IHN0cmluZyA9ICdBSV9hc3Npc3RlZCc7XG5cdFx0Y29uc3QgZ2VuZXJhdGVDaGFuZ2VUYWdzID0gKG9yaWdpbkNoYW5nZVRhZ3M6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gY2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0XHRcdD8gYCR7b3JpZ2luQ2hhbmdlVGFnc30sJHtjaGFuZ2VUYWd9YFxuXHRcdFx0XHQ6IG9yaWdpbkNoYW5nZVRhZ3MucmVwbGFjZShgLCR7Y2hhbmdlVGFnfWAsICcnKTtcblx0XHR9O1xuXG5cdFx0bGV0IGNoYW5nZVRhZ3M6IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgJHdwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9KTtcblx0XHQkYm9keSA9ICgkZWRpdEZvcm0gYXMgSlF1ZXJ5KS5wYXJlbnRzKCdib2R5Jyk7XG5cdFx0Y29uc3QgJG9yaWdpbldwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cENoYW5nZVRhZ3NdJyk7XG5cdFx0aWYgKCEkb3JpZ2luV3BDaGFuZ2VUYWdzLmxlbmd0aCkge1xuXHRcdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0XHR9XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncygkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbCgpPy50b1N0cmluZygpID8/ICcnKTtcblx0XHQkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbChjaGFuZ2VUYWdzKTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdH0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7SU5QVVRfSUR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFNQyxXQUFXOztBQ0FqQixJQUFBQyxvQkFBdUJGLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUcsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsYUFBQSxHQUFZRixrQkFBQUcsVUFBUztNQUNwQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ2JBLElBQU1DLHNCQUFzQkEsQ0FBQztFQUFDQztBQUFL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LFNBQXhCQSx1QkFBMkJZLFNBQVMsT0FBQSxRQUFBYiwwQkFBQSxTQUFBQSx3QkFBSyxFQUFFO0FBQzNFVSx3QkFBb0JFLElBQUkzQixVQUFVO0VBQ25DLENBQUM7QUFFRCxRQUFNTyxpQkFBK0QsSUFBSXRCLEdBQUdDLEdBQUdzQixZQUFZeEIsVUFBVTtJQUNwR3lCLE9BQU87SUFDUEMsT0FBT3JDLFdBQVcsWUFBWTtFQUMvQixDQUFDO0FBRUQsTUFBSSxDQUFDRyxNQUFNSyxLQUFBLElBQUFpQixPQUFTakMsUUFBUSxDQUFFLEVBQUVpQixRQUFRO0FBQ3ZDRixZQUFRK0IsT0FBT0osZUFBZUssUUFBUTtFQUN2QztBQUNEOztBSmhEQSxNQUFBLEdBQUtqRCxtQkFBQWtFLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTdkQsT0FBc0M7QUFDM0VDLEtBQUd1RCxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckQxRCx3QkFBb0I7TUFDbkJDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFREMsS0FBR3VELEtBQUssbUJBQW1CLEVBQUVDLElBQUtuQixlQUFvQjtBQUNyREQsc0JBQWtCO01BQ2pCckM7TUFDQXNDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJJTlBVVF9JRCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWlBc3Npc3RlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICIkYm9keSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAiZmluZCIsICJsZW5ndGgiLCAic2V0IiwgImNoZWNrYm94IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAic2V0SW5wdXRJZCIsICJvbiIsICJfdmUkaW5pdCR0YXJnZXQkc2F2ZUYiLCAiX3ZlJGluaXQkdGFyZ2V0JHNhdmVGMiIsICJfdmUkaW5pdCR0YXJnZXQkc2F2ZUYzIiwgImNoYW5nZVRhZyIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAib3JpZ2luQ2hhbmdlVGFncyIsICJpc1NlbGVjdGVkIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgImNoYW5nZVRhZ3MiLCAidmUiLCAiaW5pdCIsICJ0YXJnZXQiLCAic2F2ZUZpZWxkcyIsICJ3cENoYW5nZVRhZ3MiLCAiY2FsbCIsICJjaGVja2JveExheW91dCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJsYWJlbCIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQyIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICJwYXJlbnRzIiwgIiRvcmlnaW5XcENoYW5nZVRhZ3MiLCAicHJlcGVuZCIsICJ2YWwiLCAidG9TdHJpbmciLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIiwgImhvb2siLCAiYWRkIl0KfQo=
