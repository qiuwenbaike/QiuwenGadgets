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
//! src/Editform_AiAssisted/modules/generateChangeTags.ts
var generateChangeTags = ({
  checkbox,
  originalChangeTags,
  changeTag: changeTag2
}) => {
  return checkbox.isSelected() ? "".concat(originalChangeTags, ",").concat(changeTag2) : originalChangeTags.replace(",".concat(changeTag2), "");
};
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
    const {
      saveFields
    } = window.ve.init.target;
    saveFields.wpChangeTags = () => {
      var _saveFields$wpChangeT, _saveFields$wpChangeT2;
      return generateChangeTags({
        checkbox,
        originalChangeTags: (_saveFields$wpChangeT = (_saveFields$wpChangeT2 = saveFields.wpChangeTags) === null || _saveFields$wpChangeT2 === void 0 ? void 0 : _saveFields$wpChangeT2.call(saveFields)) !== null && _saveFields$wpChangeT !== void 0 ? _saveFields$wpChangeT : "",
        changeTag
      });
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
  let $wpChangeTags = $body.find("input[name=wpChangeTags]");
  if (!$wpChangeTags.length) {
    $wpChangeTags = $("<input>").attr({
      id: "wpChangeTags",
      name: "wpChangeTags",
      type: "hidden",
      value: ""
    });
    $body.prepend($wpChangeTags);
  }
  checkbox.on("change", () => {
    var _$wpChangeTags$val$to, _$wpChangeTags$val;
    $wpChangeTags.val(generateChangeTags({
      checkbox,
      originalChangeTags: (_$wpChangeTags$val$to = (_$wpChangeTags$val = $wpChangeTags.val()) === null || _$wpChangeTags$val === void 0 ? void 0 : _$wpChangeTags$val.toString()) !== null && _$wpChangeTags$val$to !== void 0 ? _$wpChangeTags$val$to : "",
      changeTag
    }));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9nZW5lcmF0ZUNoYW5nZVRhZ3MudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFJ6L6F5Yqp57yW6L6R54m55q6K5aOw5piOXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzV2lraUVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHRcdCRlZGl0Rm9ybSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjaGFuZ2VUYWdcIjogXCJBSV9hc3Npc3RlZFwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BaUFzc2lzdGVkX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9haV9hc3Npc3RlZFwiLFxuXHRcInRhcmdldENsYXNzVmVcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9ICh7XG5cdGNoZWNrYm94LFxuXHRvcmlnaW5hbENoYW5nZVRhZ3MsXG5cdGNoYW5nZVRhZyxcbn06IHtcblx0Y2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ7XG5cdG9yaWdpbmFsQ2hhbmdlVGFnczogc3RyaW5nO1xuXHRjaGFuZ2VUYWc6IHN0cmluZztcbn0pOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gY2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0PyBgJHtvcmlnaW5hbENoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHQ6IG9yaWdpbmFsQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUNoYW5nZVRhZ3N9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBaUFzc2lzdGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdGVkIGNvbnRlbnQgd2FzIGFzc2lzdGVkIGJ5IGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlJyxcblx0XHRcdGphOiAn44GT44Gu57eo6ZuG5YaF5a6544Gv5Lq65bel55+l6IO944Gr44KI44KL5pSv5o+044KS5Y+X44GR44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keeUseS6uuW3peaZuuiDve+8iEFJ77yJ6L6F5YqpJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+eUseS6uuW3peaZuuiDve+8iEFJ77yJ6LyU5YqpJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVDaGFuZ2VUYWdzfSBmcm9tICcuL2dlbmVyYXRlQ2hhbmdlVGFncyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkYm9keS5maW5kKGAuJHtPUFRJT05TLnRhcmdldENsYXNzVmV9YCk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCB0cnVlKTtcblxuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGNoZWNrYm94LnNldElucHV0SWQoT1BUSU9OUy5pbnB1dElkKTtcblxuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHtzYXZlRmllbGRzfSA9IHdpbmRvdy52ZS5pbml0LnRhcmdldDtcblx0XHRzYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGdlbmVyYXRlQ2hhbmdlVGFncyh7XG5cdFx0XHRcdGNoZWNrYm94LFxuXHRcdFx0XHRvcmlnaW5hbENoYW5nZVRhZ3M6IHNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJyxcblx0XHRcdFx0Y2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0XHRcdH0pO1xuXHRcdH07XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCk7XG5cdH1cblxuXHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BaUFzc2lzdGVkL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlQ2hhbmdlVGFnc30gZnJvbSAnLi9nZW5lcmF0ZUNoYW5nZVRhZ3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRjaGVja2JveC5zZXRJbnB1dElkKE9QVElPTlMuaW5wdXRJZCk7XG5cblx0bGV0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRpZiAoISR3cENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0JHdwQ2hhbmdlVGFncyA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0fVxuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0JHdwQ2hhbmdlVGFncy52YWwoXG5cdFx0XHRnZW5lcmF0ZUNoYW5nZVRhZ3Moe1xuXHRcdFx0XHRjaGVja2JveCxcblx0XHRcdFx0b3JpZ2luYWxDaGFuZ2VUYWdzOiAkd3BDaGFuZ2VUYWdzLnZhbCgpPy50b1N0cmluZygpID8/ICcnLFxuXHRcdFx0XHRjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9KTtcblxuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FpQXNzaXN0ZWQnKSxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxR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ImNvbmZpZ0tleSIsICJjb25maWdLZXlWZSIsICJpbnB1dElkIiwgInRhcmdldENsYXNzVmUiLCAidGFyZ2V0V2lraUVkaXRvciIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAiY2hlY2tib3giLCAib3JpZ2luYWxDaGFuZ2VUYWdzIiwgImNoYW5nZVRhZzIiLCAiaXNTZWxlY3RlZCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWlBc3Npc3RlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICIkYm9keSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAiZmluZCIsICJsZW5ndGgiLCAic2V0IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAic2V0SW5wdXRJZCIsICJvbiIsICJzYXZlRmllbGRzIiwgIndpbmRvdyIsICJ2ZSIsICJpbml0IiwgInRhcmdldCIsICJ3cENoYW5nZVRhZ3MiLCAiX3NhdmVGaWVsZHMkd3BDaGFuZ2VUIiwgIl9zYXZlRmllbGRzJHdwQ2hhbmdlVDIiLCAiY2FsbCIsICJjaGVja2JveExheW91dCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJsYWJlbCIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiaG9vayIsICJhZGQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICJwcmVwZW5kIiwgIl8kd3BDaGFuZ2VUYWdzJHZhbCR0byIsICJfJHdwQ2hhbmdlVGFncyR2YWwiLCAidmFsIiwgInRvU3RyaW5nIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSJdCn0K
