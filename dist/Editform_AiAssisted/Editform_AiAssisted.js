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
    var _saveFields$wpChangeT, _saveFields$wpChangeT2;
    const {
      saveFields
    } = window.ve.init.target;
    const originalChangeTags = (_saveFields$wpChangeT = (_saveFields$wpChangeT2 = saveFields.wpChangeTags) === null || _saveFields$wpChangeT2 === void 0 ? void 0 : _saveFields$wpChangeT2.call(saveFields)) !== null && _saveFields$wpChangeT !== void 0 ? _saveFields$wpChangeT : "";
    const newChangeTags = () => {
      return generateChangeTags({
        checkbox,
        originalChangeTags,
        changeTag
      });
    };
    saveFields.wpChangeTags = () => {
      var _newChangeTags;
      return (_newChangeTags = newChangeTags === null || newChangeTags === void 0 ? void 0 : newChangeTags()) !== null && _newChangeTags !== void 0 ? _newChangeTags : "";
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
    $body.find("#editform").append($wpChangeTags);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9nZW5lcmF0ZUNoYW5nZVRhZ3MudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFJ6L6F5Yqp57yW6L6R54m55q6K5aOw5piOXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzV2lraUVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHRcdCRlZGl0Rm9ybSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjaGFuZ2VUYWdcIjogXCJBSV9hc3Npc3RlZFwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BaUFzc2lzdGVkX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9haV9hc3Npc3RlZFwiLFxuXHRcInRhcmdldENsYXNzVmVcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9ICh7XG5cdGNoZWNrYm94LFxuXHRvcmlnaW5hbENoYW5nZVRhZ3MsXG5cdGNoYW5nZVRhZyxcbn06IHtcblx0Y2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ7XG5cdG9yaWdpbmFsQ2hhbmdlVGFnczogc3RyaW5nO1xuXHRjaGFuZ2VUYWc6IHN0cmluZztcbn0pOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gY2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0PyBgJHtvcmlnaW5hbENoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHQ6IG9yaWdpbmFsQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUNoYW5nZVRhZ3N9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBaUFzc2lzdGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdGVkIGNvbnRlbnQgd2FzIGFzc2lzdGVkIGJ5IGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlJyxcblx0XHRcdGphOiAn44GT44Gu57eo6ZuG5YaF5a6544Gv5Lq65bel55+l6IO944Gr44KI44KL5pSv5o+044KS5Y+X44GR44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keeUseS6uuW3peaZuuiDve+8iEFJ77yJ6L6F5YqpJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+eUseS6uuW3peaZuuiDve+8iEFJ77yJ6LyU5YqpJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVDaGFuZ2VUYWdzfSBmcm9tICcuL2dlbmVyYXRlQ2hhbmdlVGFncyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkYm9keS5maW5kKGAuJHtPUFRJT05TLnRhcmdldENsYXNzVmV9YCk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCB0cnVlKTtcblxuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGNoZWNrYm94LnNldElucHV0SWQoT1BUSU9OUy5pbnB1dElkKTtcblxuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHtzYXZlRmllbGRzfSA9IHdpbmRvdy52ZS5pbml0LnRhcmdldDtcblx0XHRjb25zdCBvcmlnaW5hbENoYW5nZVRhZ3MgPSBzYXZlRmllbGRzLndwQ2hhbmdlVGFncz8uKCkgPz8gJyc7XG5cdFx0Y29uc3QgbmV3Q2hhbmdlVGFncyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBnZW5lcmF0ZUNoYW5nZVRhZ3Moe1xuXHRcdFx0XHRjaGVja2JveCxcblx0XHRcdFx0b3JpZ2luYWxDaGFuZ2VUYWdzLFxuXHRcdFx0XHRjaGFuZ2VUYWc6IE9QVElPTlMuY2hhbmdlVGFnLFxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRzYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIG5ld0NoYW5nZVRhZ3M/LigpID8/ICcnO1xuXHRcdH07XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCk7XG5cdH1cblxuXHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BaUFzc2lzdGVkL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlQ2hhbmdlVGFnc30gZnJvbSAnLi9nZW5lcmF0ZUNoYW5nZVRhZ3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRjaGVja2JveC5zZXRJbnB1dElkKE9QVElPTlMuaW5wdXRJZCk7XG5cblx0bGV0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRpZiAoISR3cENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0JHdwQ2hhbmdlVGFncyA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0JGJvZHkuZmluZCgnI2VkaXRmb3JtJykuYXBwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHR9XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHQkd3BDaGFuZ2VUYWdzLnZhbChcblx0XHRcdGdlbmVyYXRlQ2hhbmdlVGFncyh7XG5cdFx0XHRcdGNoZWNrYm94LFxuXHRcdFx0XHRvcmlnaW5hbENoYW5nZVRhZ3M6ICR3cENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycsXG5cdFx0XHRcdGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnN0IGNoZWNrYm94TGF5b3V0OiBPTy51aS5GaWVsZExheW91dDxPTy51aS5DaGVja2JveElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHR9KTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHQkdGFyZ2V0LmFwcGVuZChjaGVja2JveExheW91dC4kZWxlbWVudCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7QUFDYixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsY0FBZTtBQUNmLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxnQkFBaUI7QUFDakIsSUFBQUMsbUJBQW9COztBQ05yQixJQUFNQyxxQkFBcUJBLENBQUM7RUFDM0JDO0VBQ0FDO0VBQ0FSLFdBQUFTO0FBQ0QsTUFJYztBQUNiLFNBQU9GLFNBQVNHLFdBQVcsSUFBQSxHQUFBQyxPQUNyQkgsb0JBQWtCLEdBQUEsRUFBQUcsT0FBSUYsVUFBUyxJQUNsQ0QsbUJBQW1CSSxRQUFBLElBQUFELE9BQVlGLFVBQVMsR0FBSSxFQUFFO0FBQ2xEOztBQ1pBLElBQUFJLG9CQUF1QmQsUUFBQSxpQkFBQTtBQUV2QixJQUFNZSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxhQUFBLEdBQVlGLGtCQUFBRyxVQUFTO01BQ3BCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDYkEsSUFBTUMsc0JBQXVCQyxXQUF5QztBQUVyRSxNQUFJQyxHQUFHQyxPQUFPQyxJQUFZeEIsV0FBVyxHQUFHO0FBQ3ZDO0VBQ0Q7QUFFQSxRQUFNeUIsVUFBa0JKLE1BQU1LLEtBQUEsSUFBQWpCLE9BQWlCUCxhQUFhLENBQUU7QUFDOUQsTUFBSSxDQUFDdUIsUUFBUUUsUUFBUTtBQUNwQjtFQUNEO0FBR0FMLEtBQUdDLE9BQU9LLElBQVk1QixhQUFhLElBQUk7QUFFdkMsUUFBTUssV0FBc0MsSUFBSXdC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QUt2RCxtQkFBQXVFLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTaEQsT0FBc0M7QUFDM0VDLEtBQUc4QixLQUFLLG1CQUFtQixFQUFFQyxJQUFLRSxlQUFvQjtBQUNyREQsc0JBQWtCO01BQ2pCakM7TUFDQWtDO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRGpDLEtBQUc4QixLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckRqQyx3QkFBb0JDLEtBQUs7RUFDMUIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImNoYW5nZVRhZyIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiaW5wdXRJZCIsICJ0YXJnZXRDbGFzc1ZlIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgImNoZWNrYm94IiwgIm9yaWdpbmFsQ2hhbmdlVGFncyIsICJjaGFuZ2VUYWcyIiwgImlzU2VsZWN0ZWQiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFpQXNzaXN0ZWQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkdGFyZ2V0IiwgImZpbmQiLCAibGVuZ3RoIiwgInNldCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgInNldElucHV0SWQiLCAib24iLCAiX3NhdmVGaWVsZHMkd3BDaGFuZ2VUIiwgIl9zYXZlRmllbGRzJHdwQ2hhbmdlVDIiLCAic2F2ZUZpZWxkcyIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJ0YXJnZXQiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAibmV3Q2hhbmdlVGFncyIsICJfbmV3Q2hhbmdlVGFncyIsICJjaGVja2JveExheW91dCIsICJGaWVsZExheW91dCIsICJhbGlnbiIsICJsYWJlbCIsICJhcHBlbmQiLCAiJGVsZW1lbnQiLCAiaG9vayIsICJhZGQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgImlkIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICJfJHdwQ2hhbmdlVGFncyR2YWwkdG8iLCAiXyR3cENoYW5nZVRhZ3MkdmFsIiwgInZhbCIsICJ0b1N0cmluZyIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iXQp9Cg==
