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
//! src/Editform_AiAssisted/options.json
var configKey = "gadget-Editform_AiAssisted__Initialized";
var changeTag = "AI_assisted";
var inputId = "editform_ai_assisted";
var targetClassVe = "ve-ui-mwSaveDialog-checkboxes";
var targetWikiEditor = ".editCheckboxes .oo-ui-horizontalLayout";
//! src/Editform_AiAssisted/Editform_AiAssisted.ts
var import_ext_gadget2 = require("ext.gadget.Util");
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
var processVisualEditor = ($body) => {
  if (mw.config.get(configKey)) {
    return;
  }
  const $target = $body.find(".".concat(targetClassVe));
  if (!$target.length) {
    return;
  }
  mw.config.set(configKey, true);
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  checkbox.setInputId(inputId);
  checkbox.on("change", () => {
    var _window$ve$init$targe, _window$ve$init$targe2, _window$ve$init$targe3;
    const changeTag2 = changeTag;
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag2) : originChangeTags.replace(",".concat(changeTag2), "");
    };
    let changeTags = "";
    changeTags = generateChangeTags((_window$ve$init$targe = (_window$ve$init$targe2 = (_window$ve$init$targe3 = window.ve.init.target.saveFields).wpChangeTags) === null || _window$ve$init$targe2 === void 0 ? void 0 : _window$ve$init$targe2.call(_window$ve$init$targe3)) !== null && _window$ve$init$targe !== void 0 ? _window$ve$init$targe : "");
    window.ve.init.target.saveFields.wpChangeTags = () => {
      return changeTags;
    };
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label: getMessage("AiAssisted")
  });
  if (!$body.find("#".concat(inputId)).length) {
    $target.append(checkboxLayout.$element);
  }
};
//! src/Editform_AiAssisted/modules/processWikiEditor.ts
var processWikiEditor = ({
  $body,
  $editForm
}) => {
  if (mw.config.get(configKey)) {
    return;
  }
  const $target = $editForm.find(targetWikiEditor);
  if (!$target.length) {
    return;
  }
  mw.config.set(configKey, true);
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  checkbox.setInputId(inputId);
  checkbox.on("change", () => {
    var _$originWpChangeTags$, _$originWpChangeTags$2;
    const changeTag2 = changeTag;
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag2) : originChangeTags.replace(",".concat(changeTag2), "");
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
  if (!$body.find("#".concat(inputId)).length) {
    $target.append(checkboxLayout.$element);
  }
};
//! src/Editform_AiAssisted/Editform_AiAssisted.ts
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor({
      $body,
      $editForm
    });
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor($body);
    mw.hook("ve.activationComplete").add(() => {
      if (mw.config.get(configKey)) {
        mw.config.set(configKey, false);
      }
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL0VkaXRmb3JtX0FpQXNzaXN0ZWQudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkXCIsXG5cdFwiY2hhbmdlVGFnXCI6IFwiQUlfYXNzaXN0ZWRcIixcblx0XCJpbnB1dElkXCI6IFwiZWRpdGZvcm1fYWlfYXNzaXN0ZWRcIixcblx0XCJ0YXJnZXRDbGFzc1ZlXCI6IFwidmUtdWktbXdTYXZlRGlhbG9nLWNoZWNrYm94ZXNcIixcblx0XCJ0YXJnZXRXaWtpRWRpdG9yXCI6IFwiLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0XCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQUnovoXliqnnvJbovpHnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcigkYm9keSk7XG5cblx0XHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWRSBhbmQgTldFXG5cdFx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFpQXNzaXN0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0ZWQgY29udGVudCB3YXMgYXNzaXN0ZWQgYnkgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UnLFxuXHRcdFx0amE6ICfjgZPjga7nt6jpm4blhoXlrrnjga/kurrlt6Xnn6Xog73jgavjgojjgovmlK/mj7TjgpLlj5fjgZHjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R55Sx5Lq65bel5pm66IO977yIQUnvvInovoXliqknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv55Sx5Lq65bel5pm66IO977yIQUnvvInovJTliqknLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0Y2hlY2tib3guc2V0SW5wdXRJZChPUFRJT05TLmlucHV0SWQpO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY2hhbmdlVGFnOiBzdHJpbmcgPSBPUFRJT05TLmNoYW5nZVRhZztcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncyh3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnKTtcblx0XHR3aW5kb3cudmUuaW5pdC50YXJnZXQuc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGFuZ2VUYWdzO1xuXHRcdH07XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm0/OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0Y2hlY2tib3guc2V0SW5wdXRJZChPUFRJT05TLmlucHV0SWQpO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY2hhbmdlVGFnOiBzdHJpbmcgPSBPUFRJT05TLmNoYW5nZVRhZztcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXHRcdCRib2R5ID0gKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLnBhcmVudHMoJ2JvZHknKTtcblx0XHRjb25zdCAkb3JpZ2luV3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQ2hhbmdlVGFnc10nKTtcblx0XHRpZiAoISRvcmlnaW5XcENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0XHQkYm9keS5wcmVwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHRcdH1cblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycpO1xuXHRcdCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKGNoYW5nZVRhZ3MpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FpQXNzaXN0ZWQnKSxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLFlBQWE7QUFDYixJQUFBQyxVQUFXO0FBQ1gsSUFBQUMsZ0JBQWlCO0FBQ2pCLElBQUFD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QVMsR0FBRztBQUNyQ2tCLFdBQUdDLE9BQU9NLElBQVl6QixXQUFXLEtBQUs7TUFDdkM7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJjaGFuZ2VUYWciLCAiaW5wdXRJZCIsICJ0YXJnZXRDbGFzc1ZlIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFpQXNzaXN0ZWQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkdGFyZ2V0IiwgImZpbmQiLCAiY29uY2F0IiwgImxlbmd0aCIsICJzZXQiLCAiY2hlY2tib3giLCAiT08iLCAidWkiLCAiQ2hlY2tib3hJbnB1dFdpZGdldCIsICJzZWxlY3RlZCIsICJzZXRJbnB1dElkIiwgIm9uIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZSIsICJfd2luZG93JHZlJGluaXQkdGFyZ2UyIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTMiLCAiY2hhbmdlVGFnMiIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAib3JpZ2luQ2hhbmdlVGFncyIsICJpc1NlbGVjdGVkIiwgInJlcGxhY2UiLCAiY2hhbmdlVGFncyIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJ0YXJnZXQiLCAic2F2ZUZpZWxkcyIsICJ3cENoYW5nZVRhZ3MiLCAiY2FsbCIsICJjaGVja2JveExheW91dCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJsYWJlbCIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQyIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICJwYXJlbnRzIiwgIiRvcmlnaW5XcENoYW5nZVRhZ3MiLCAicHJlcGVuZCIsICJ2YWwiLCAidG9TdHJpbmciLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIiwgImhvb2siLCAiYWRkIl0KfQo=
