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
  const $targetElement = $body.find(".".concat(targetClassVe));
  if (!$targetElement.length) {
    return;
  }
  const {
    target
  } = window.ve.init;
  const {
    saveDialog,
    saveFields
  } = target;
  const {
    $saveCheckboxes
  } = saveDialog;
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
    changeTags = generateChangeTags((_saveFields$wpChangeT = (_saveFields$wpChangeT2 = saveFields.wpChangeTags) === null || _saveFields$wpChangeT2 === void 0 ? void 0 : _saveFields$wpChangeT2.call(saveFields)) !== null && _saveFields$wpChangeT !== void 0 ? _saveFields$wpChangeT : "");
    saveFields.wpChangeTags = () => {
      return changeTags;
    };
  });
  const checkboxLayout = new OO.ui.FieldLayout(checkbox, {
    align: "inline",
    label: getMessage("AiAssisted")
  });
  if (!saveDialog.$element.find("#".concat(inputId)).length) {
    $saveCheckboxes.append(checkboxLayout.$element);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFJ6L6F5Yqp57yW6L6R54m55q6K5aOw5piOXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzV2lraUVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHRcdCRlZGl0Rm9ybSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjaGFuZ2VUYWdcIjogXCJBSV9hc3Npc3RlZFwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BaUFzc2lzdGVkX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9haV9hc3Npc3RlZFwiLFxuXHRcInRhcmdldENsYXNzVmVcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBaUFzc2lzdGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdGVkIGNvbnRlbnQgd2FzIGFzc2lzdGVkIGJ5IGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlJyxcblx0XHRcdGphOiAn44GT44Gu57eo6ZuG5YaF5a6544Gv5Lq65bel55+l6IO944Gr44KI44KL5pSv5o+044KS5Y+X44GR44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keeUseS6uuW3peaZuuiDve+8iEFJ77yJ6L6F5YqpJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+eUseS6uuW3peaZuuiDve+8iEFJ77yJ6LyU5YqpJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXRFbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKGAuJHtPUFRJT05TLnRhcmdldENsYXNzVmV9YCk7XG5cdGlmICghJHRhcmdldEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3Qge3NhdmVEaWFsb2csIHNhdmVGaWVsZHN9ID0gdGFyZ2V0O1xuXHRjb25zdCB7JHNhdmVDaGVja2JveGVzfSA9IHNhdmVEaWFsb2c7XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgdHJ1ZSk7XG5cblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRjaGVja2JveC5zZXRJbnB1dElkKE9QVElPTlMuaW5wdXRJZCk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBjaGFuZ2VUYWc6IHN0cmluZyA9IE9QVElPTlMuY2hhbmdlVGFnO1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJyk7XG5cdFx0c2F2ZUZpZWxkcy53cENoYW5nZVRhZ3MgPSAoKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBjaGFuZ2VUYWdzO1xuXHRcdH07XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblxuXHRpZiAoIXNhdmVEaWFsb2cuJGVsZW1lbnQuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCRzYXZlQ2hlY2tib3hlcy5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xuXHR9XG5cblx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIGZhbHNlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRjaGVja2JveC5zZXRJbnB1dElkKE9QVElPTlMuaW5wdXRJZCk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBjaGFuZ2VUYWc6IHN0cmluZyA9IE9QVElPTlMuY2hhbmdlVGFnO1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblxuXHRcdGNvbnN0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0JGJvZHkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkucGFyZW50cygnYm9keScpO1xuXHRcdGNvbnN0ICRvcmlnaW5XcENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRcdGlmICghJG9yaWdpbldwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHRcdCRib2R5LnByZXBlbmQoJHdwQ2hhbmdlVGFncyk7XG5cdFx0fVxuXHRcdGNoYW5nZVRhZ3MgPSBnZW5lcmF0ZUNoYW5nZVRhZ3MoJG9yaWdpbldwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyk7XG5cdFx0JG9yaWdpbldwQ2hhbmdlVGFncy52YWwoY2hhbmdlVGFncyk7XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7QUFDYixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsY0FBZTtBQUNmLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxnQkFBaUI7QUFDakIsSUFBQUMsbUJBQW9COztBQ05yQixJQUFBQyxvQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsYUFBQSxHQUFZRixrQkFBQUcsVUFBUztNQUNwQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ2RBLElBQU1DLHNCQUF1QkMsV0FBeUM7QUFFckUsTUFBSUMsR0FBR0MsT0FBT0MsSUFBWWpCLFdBQVcsR0FBRztBQUN2QztFQUNEO0FBRUEsUUFBTWtCLGlCQUF5QkosTUFBTUssS0FBQSxJQUFBQyxPQUFpQmxCLGFBQWEsQ0FBRTtBQUNyRSxNQUFJLENBQUNnQixlQUFlRyxRQUFRO0FBQzNCO0VBQ0Q7QUFFQSxRQUFNO0lBQUNDO0VBQU0sSUFBSUMsT0FBT0MsR0FBR0M7QUFDM0IsUUFBTTtJQUFDQztJQUFZQztFQUFVLElBQUlMO0FBQ2pDLFFBQU07SUFBQ007RUFBZSxJQUFJRjtBQUcxQlgsS0FBR0MsT0FBT2EsSUFBWTdCLGFBQWEsSUFBSTtBQUV2QyxRQUFNOEIsV0FBc0MsSUFBSUMsR0FBR0MsR0FBR0Msb0JBQW9CO0lBQ3pFQyxVQUFVO0VBQ1gsQ0FBQztBQUVESixXQUFTSyxXQUFtQmxDLE9BQU87QUFFbkM2QixXQUFTTSxH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RUQsTUFBSSxDQUFDRyxNQUFNSyxLQUFBLElBQUFDLE9BQWlCbkIsT0FBTyxDQUFFLEVBQUVvQixRQUFRO0FBQzlDb0MsWUFBUUwsT0FBT0wsZUFBZUksUUFBUTtFQUN2QztBQUNEOztBSmhEQSxNQUFBLEdBQUt2RCxtQkFBQTRFLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTNUQsT0FBc0M7QUFDM0VDLEtBQUdzQyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLRSxlQUFvQjtBQUNyREQsc0JBQWtCO01BQ2pCekM7TUFDQTBDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRHpDLEtBQUdzQyxLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckR6Qyx3QkFBb0JDLEtBQUs7RUFDMUIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImNoYW5nZVRhZyIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiaW5wdXRJZCIsICJ0YXJnZXRDbGFzc1ZlIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFpQXNzaXN0ZWQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkdGFyZ2V0RWxlbWVudCIsICJmaW5kIiwgImNvbmNhdCIsICJsZW5ndGgiLCAidGFyZ2V0IiwgIndpbmRvdyIsICJ2ZSIsICJpbml0IiwgInNhdmVEaWFsb2ciLCAic2F2ZUZpZWxkcyIsICIkc2F2ZUNoZWNrYm94ZXMiLCAic2V0IiwgImNoZWNrYm94IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAic2V0SW5wdXRJZCIsICJvbiIsICJfc2F2ZUZpZWxkcyR3cENoYW5nZVQiLCAiX3NhdmVGaWVsZHMkd3BDaGFuZ2VUMiIsICJjaGFuZ2VUYWcyIiwgImdlbmVyYXRlQ2hhbmdlVGFncyIsICJvcmlnaW5DaGFuZ2VUYWdzIiwgImlzU2VsZWN0ZWQiLCAicmVwbGFjZSIsICJjaGFuZ2VUYWdzIiwgIndwQ2hhbmdlVGFncyIsICJjYWxsIiwgImNoZWNrYm94TGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImxhYmVsIiwgIiRlbGVtZW50IiwgImFwcGVuZCIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAiJHRhcmdldCIsICJfJG9yaWdpbldwQ2hhbmdlVGFncyQiLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkMiIsICIkd3BDaGFuZ2VUYWdzIiwgIiQiLCAiYXR0ciIsICJpZCIsICJuYW1lIiwgInR5cGUiLCAidmFsdWUiLCAicGFyZW50cyIsICIkb3JpZ2luV3BDaGFuZ2VUYWdzIiwgInByZXBlbmQiLCAidmFsIiwgInRvU3RyaW5nIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSJdCn0K
