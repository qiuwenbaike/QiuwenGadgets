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
var isInit = false;
var processVisualEditor = ({
  $body
}) => {
  if (isInit) {
    return;
  }
  const $target = $body.find(".ve-ui-mwSaveDialog-checkboxes");
  if (!$target.length) {
    return;
  }
  isInit = true;
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
  if (!$body.find("#".concat(INPUT_ID)).length) {
    $target.append(checkboxLayout.$element);
  }
};
//! src/Editform_AiAssisted/modules/processWikiEditor.ts
var isInit2 = false;
var processWikiEditor = ({
  $body,
  $editForm
}) => {
  if (isInit2) {
    return;
  }
  const $target = $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$target.length) {
    return;
  }
  isInit2 = true;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5pbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBSei+heWKqee8lui+keeJueauiuWjsOaYjlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwgImNvbnN0IElOUFVUX0lEID0gJ2VkaXRmb3JtX2FpX2Fzc2lzdGVkJztcblxuZXhwb3J0IHtJTlBVVF9JRH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFpQXNzaXN0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0ZWQgY29udGVudCB3YXMgYXNzaXN0ZWQgYnkgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UnLFxuXHRcdFx0amE6ICfjgZPjga7nt6jpm4blhoXlrrnjga/kurrlt6Xnn6Xog73jgavjgojjgovmlK/mj7TjgpLlj5fjgZHjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R55Sx5Lq65bel5pm66IO977yIQUnvvInovoXliqknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv55Sx5Lq65bel5pm66IO977yIQUnvvInovJTliqknLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50LCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwgKi9cbmltcG9ydCB7SU5QVVRfSUR9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5sZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0aWYgKGlzSW5pdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy52ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlcycpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aXNJbml0ID0gdHJ1ZTtcblxuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGNoZWNrYm94LnNldElucHV0SWQoSU5QVVRfSUQpO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY2hhbmdlVGFnOiBzdHJpbmcgPSAnQUlfYXNzaXN0ZWQnO1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3ModmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnKTtcblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNFxuXHRcdHZlLmluaXQudGFyZ2V0LnNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzID0gKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gY2hhbmdlVGFncztcblx0XHR9O1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FpQXNzaXN0ZWQnKSxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtJTlBVVF9JRH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0IHtJTlBVVF9JRH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmxldCBpc0luaXQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm0/OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdGlmIChpc0luaXQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpc0luaXQgPSB0cnVlO1xuXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0Y2hlY2tib3guc2V0SW5wdXRJZChJTlBVVF9JRCk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBjaGFuZ2VUYWc6IHN0cmluZyA9ICdBSV9hc3Npc3RlZCc7XG5cdFx0Y29uc3QgZ2VuZXJhdGVDaGFuZ2VUYWdzID0gKG9yaWdpbkNoYW5nZVRhZ3M6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gY2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0XHRcdD8gYCR7b3JpZ2luQ2hhbmdlVGFnc30sJHtjaGFuZ2VUYWd9YFxuXHRcdFx0XHQ6IG9yaWdpbkNoYW5nZVRhZ3MucmVwbGFjZShgLCR7Y2hhbmdlVGFnfWAsICcnKTtcblx0XHR9O1xuXG5cdFx0bGV0IGNoYW5nZVRhZ3M6IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgJHdwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9KTtcblx0XHQkYm9keSA9ICgkZWRpdEZvcm0gYXMgSlF1ZXJ5KS5wYXJlbnRzKCdib2R5Jyk7XG5cdFx0Y29uc3QgJG9yaWdpbldwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cENoYW5nZVRhZ3NdJyk7XG5cdFx0aWYgKCEkb3JpZ2luV3BDaGFuZ2VUYWdzLmxlbmd0aCkge1xuXHRcdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0XHR9XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncygkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbCgpPy50b1N0cmluZygpID8/ICcnKTtcblx0XHQkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbChjaGFuZ2VUYWdzKTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdH0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7SU5QVVRfSUR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFNQyxXQUFXOztBQ0FqQixJQUFBQyxvQkFBdUJGLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUcsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsYUFBQSxHQUFZRixrQkFBQUcsVUFBUztNQUNwQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ2JBLElBQUlDLFNBQWtCO0FBRXRCLElBQU1DLHNCQUFzQkEsQ0FBQztFQUFDQztBQUFLLE1BQThDO0FBQ2hGLE1BQUlGLFFBQVE7QUFDWDtFQUNEO0FBRUEsUUFBTUcsVUFBa0JELE1BQU1FLEtBQUssZ0NBQWdDO0FBQ25FLE1BQUksQ0FBQ0QsUUFBUUUsUUFBUTtBQUNwQjtFQUNEO0FBRUFMLFdBQVM7QUFFVCxRQUFNTSxXQUFzQyxJQUFJQyxHQUFHQyxHQUFHQyxvQkFBb0I7SUFDekVDLFVBQVU7RUFDWCxDQUFDO0FBRURKLFdBQVNLLFdBQVdyQixRQUFRO0FBRTVCZ0IsV0FBU00s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QUFTcEQsT0FBc0M7QUFDM0VxRCxLQUFHQyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckR4RCx3QkFBb0I7TUFDbkJDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRHFELEtBQUdDLEtBQUssbUJBQW1CLEVBQUVDLElBQUtwQixlQUFvQjtBQUNyREQsc0JBQWtCO01BQ2pCbEM7TUFDQW1DO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJJTlBVVF9JRCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWlBc3Npc3RlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaXNJbml0IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAiJHRhcmdldCIsICJmaW5kIiwgImxlbmd0aCIsICJjaGVja2JveCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgInNldElucHV0SWQiLCAib24iLCAiX3ZlJGluaXQkdGFyZ2V0JHNhdmVGIiwgIl92ZSRpbml0JHRhcmdldCRzYXZlRjIiLCAiX3ZlJGluaXQkdGFyZ2V0JHNhdmVGMyIsICJjaGFuZ2VUYWciLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgIm9yaWdpbkNoYW5nZVRhZ3MiLCAiaXNTZWxlY3RlZCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJjaGFuZ2VUYWdzIiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgInNhdmVGaWVsZHMiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAiY2hlY2tib3hMYXlvdXQiLCAiRmllbGRMYXlvdXQiLCAiYWxpZ24iLCAibGFiZWwiLCAiYXBwZW5kIiwgIiRlbGVtZW50IiwgImlzSW5pdDIiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQyIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICJwYXJlbnRzIiwgIiRvcmlnaW5XcENoYW5nZVRhZ3MiLCAicHJlcGVuZCIsICJ2YWwiLCAidG9TdHJpbmciLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIiwgIm13IiwgImhvb2siLCAiYWRkIl0KfQo=
