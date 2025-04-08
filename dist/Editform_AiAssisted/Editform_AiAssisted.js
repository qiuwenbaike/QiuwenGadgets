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
//! src/Editform_AiAssisted/options.json
var changeTag = "AI_assisted";
var configKey = "gadget-Editform_AiAssisted__Initialized";
var configKeyVe = "gadget-Editform_AiAssisted__Initialized__VE";
var inputId = "editform_ai_assisted";
var targetClassVe = "ve-ui-mwSaveDialog-checkboxes";
var targetWikiEditor = ".editCheckboxes .oo-ui-horizontalLayout";
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
  if (mw.config.get(configKeyVe)) {
    return;
  }
  const $target = $body.find(".".concat(targetClassVe));
  if (!$target.length) {
    return;
  }
  mw.config.set(configKeyVe, true);
  const checkbox = new OO.ui.CheckboxInputWidget({
    selected: false
  });
  checkbox.setInputId(inputId);
  checkbox.on("change", () => {
    var _saveFields$wpChangeT, _saveFields$wpChangeT2;
    const changeTag2 = changeTag;
    const generateChangeTags = (originChangeTags) => {
      return checkbox.isSelected() ? "".concat(originChangeTags, ",").concat(changeTag2) : originChangeTags.replace(",".concat(changeTag2), "");
    };
    let changeTags = "";
    const {
      saveFields
    } = window.ve.init.target;
    changeTags = generateChangeTags((_saveFields$wpChangeT = (_saveFields$wpChangeT2 = saveFields.wpChangeTags) === null || _saveFields$wpChangeT2 === void 0 ? void 0 : _saveFields$wpChangeT2.call(saveFields)) !== null && _saveFields$wpChangeT !== void 0 ? _saveFields$wpChangeT : "");
    saveFields.wpChangeTags = () => {
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
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKeyVe)) {
      mw.config.set(configKeyVe, false);
    }
  });
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
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFJ6L6F5Yqp57yW6L6R54m55q6K5aOw5piOXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzV2lraUVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHRcdCRlZGl0Rm9ybSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjaGFuZ2VUYWdcIjogXCJBSV9hc3Npc3RlZFwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BaUFzc2lzdGVkX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9haV9hc3Npc3RlZFwiLFxuXHRcInRhcmdldENsYXNzVmVcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBaUFzc2lzdGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdGVkIGNvbnRlbnQgd2FzIGFzc2lzdGVkIGJ5IGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlJyxcblx0XHRcdGphOiAn44GT44Gu57eo6ZuG5YaF5a6544Gv5Lq65bel55+l6IO944Gr44KI44KL5pSv5o+044KS5Y+X44GR44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keeUseS6uuW3peaZuuiDve+8iEFJ77yJ6L6F5YqpJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+eUseS6uuW3peaZuuiDve+8iEFJ77yJ6LyU5YqpJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIHRydWUpO1xuXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0Y2hlY2tib3guc2V0SW5wdXRJZChPUFRJT05TLmlucHV0SWQpO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY2hhbmdlVGFnOiBzdHJpbmcgPSBPUFRJT05TLmNoYW5nZVRhZztcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cdFx0Y29uc3Qge3NhdmVGaWVsZHN9ID0gd2luZG93LnZlLmluaXQudGFyZ2V0O1xuXHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3Moc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnKTtcblx0XHRzYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0fTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdH0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50KTtcblx0fVxuXG5cdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm0/OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0Y2hlY2tib3guc2V0SW5wdXRJZChPUFRJT05TLmlucHV0SWQpO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY2hhbmdlVGFnOiBzdHJpbmcgPSBPUFRJT05TLmNoYW5nZVRhZztcblx0XHRjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAob3JpZ2luQ2hhbmdlVGFnczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGVja2JveC5pc1NlbGVjdGVkKClcblx0XHRcdFx0PyBgJHtvcmlnaW5DaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gXG5cdFx0XHRcdDogb3JpZ2luQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xuXHRcdH07XG5cblx0XHRsZXQgY2hhbmdlVGFnczogc3RyaW5nID0gJyc7XG5cblx0XHRjb25zdCAkd3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRpZDogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0dmFsdWU6ICcnLFxuXHRcdH0pO1xuXHRcdCRib2R5ID0gKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLnBhcmVudHMoJ2JvZHknKTtcblx0XHRjb25zdCAkb3JpZ2luV3BDaGFuZ2VUYWdzOiBKUXVlcnkgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwQ2hhbmdlVGFnc10nKTtcblx0XHRpZiAoISRvcmlnaW5XcENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0XHQkYm9keS5wcmVwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHRcdH1cblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycpO1xuXHRcdCRvcmlnaW5XcENoYW5nZVRhZ3MudmFsKGNoYW5nZVRhZ3MpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FpQXNzaXN0ZWQnKSxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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RUFBRUMsSUFBS0UsZUFBb0I7QUFDckRELHNCQUFrQjtNQUNqQnZDO01BQ0F3QztJQUNELENBQUM7RUFDRixDQUFDO0FBRUR2QyxLQUFHb0MsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEdkMsd0JBQW9CQyxLQUFLO0VBQzFCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJjaGFuZ2VUYWciLCAiY29uZmlnS2V5IiwgImNvbmZpZ0tleVZlIiwgImlucHV0SWQiLCAidGFyZ2V0Q2xhc3NWZSIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBaUFzc2lzdGVkIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIiRib2R5IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJHRhcmdldCIsICJmaW5kIiwgImNvbmNhdCIsICJsZW5ndGgiLCAic2V0IiwgImNoZWNrYm94IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAic2V0SW5wdXRJZCIsICJvbiIsICJfc2F2ZUZpZWxkcyR3cENoYW5nZVQiLCAiX3NhdmVGaWVsZHMkd3BDaGFuZ2VUMiIsICJjaGFuZ2VUYWcyIiwgImdlbmVyYXRlQ2hhbmdlVGFncyIsICJvcmlnaW5DaGFuZ2VUYWdzIiwgImlzU2VsZWN0ZWQiLCAicmVwbGFjZSIsICJjaGFuZ2VUYWdzIiwgInNhdmVGaWVsZHMiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgIndwQ2hhbmdlVGFncyIsICJjYWxsIiwgImNoZWNrYm94TGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImxhYmVsIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJwcmVwZW5kIiwgInZhbCIsICJ0b1N0cmluZyIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iXQp9Cg==
