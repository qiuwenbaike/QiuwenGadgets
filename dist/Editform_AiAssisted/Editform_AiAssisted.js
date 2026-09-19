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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9nZW5lcmF0ZUNoYW5nZVRhZ3MudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFJ6L6F5Yqp57yW6L6R54m55q6K5aOw5piOXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzV2lraUVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHRcdCRlZGl0Rm9ybSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJjaGFuZ2VUYWdcIjogXCJBSV9hc3Npc3RlZFwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BaUFzc2lzdGVkX19Jbml0aWFsaXplZFwiLFxuXHRcImNvbmZpZ0tleVZlXCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkX19WRVwiLFxuXHRcImlucHV0SWRcIjogXCJlZGl0Zm9ybV9haV9hc3Npc3RlZFwiLFxuXHRcInRhcmdldENsYXNzVmVcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlc1wiLFxuXHRcInRhcmdldFdpa2lFZGl0b3JcIjogXCIuZWRpdENoZWNrYm94ZXMgLm9vLXVpLWhvcml6b250YWxMYXlvdXRcIlxufVxuIiwgImNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9ICh7XG5cdGNoZWNrYm94LFxuXHRvcmlnaW5hbENoYW5nZVRhZ3MsXG5cdGNoYW5nZVRhZyxcbn06IHtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0Y2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ7XG5cdG9yaWdpbmFsQ2hhbmdlVGFnczogc3RyaW5nO1xuXHRjaGFuZ2VUYWc6IHN0cmluZztcbn0pOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gY2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0PyBgJHtvcmlnaW5hbENoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHQ6IG9yaWdpbmFsQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUNoYW5nZVRhZ3N9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBaUFzc2lzdGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdGVkIGNvbnRlbnQgd2FzIGFzc2lzdGVkIGJ5IGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlJyxcblx0XHRcdGphOiAn44GT44Gu57eo6ZuG5YaF5a6544Gv5Lq65bel55+l6IO944Gr44KI44KL5pSv5o+044KS5Y+X44GR44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keeUseS6uuW3peaZuuiDve+8iEFJ77yJ6L6F5YqpJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+eUseS6uuW3peaZuuiDve+8iEFJ77yJ6LyU5YqpJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVDaGFuZ2VUYWdzfSBmcm9tICcuL2dlbmVyYXRlQ2hhbmdlVGFncyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkYm9keS5maW5kKGAuJHtPUFRJT05TLnRhcmdldENsYXNzVmV9YCk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCB0cnVlKTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjMwNCwgVFMyNTAzXG5cdGNvbnN0IGNoZWNrYm94OiBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQoe1xuXHRcdHNlbGVjdGVkOiBmYWxzZSxcblx0fSk7XG5cblx0Y2hlY2tib3guc2V0SW5wdXRJZChPUFRJT05TLmlucHV0SWQpO1xuXG5cdGNoZWNrYm94Lm9uKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qge3NhdmVGaWVsZHN9ID0gd2luZG93LnZlLmluaXQudGFyZ2V0O1xuXHRcdGNvbnN0IG9yaWdpbmFsQ2hhbmdlVGFncyA9IHNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJztcblx0XHRjb25zdCBuZXdDaGFuZ2VUYWdzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGdlbmVyYXRlQ2hhbmdlVGFncyh7XG5cdFx0XHRcdGNoZWNrYm94LFxuXHRcdFx0XHRvcmlnaW5hbENoYW5nZVRhZ3MsXG5cdFx0XHRcdGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdHNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzID0gKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3Q2hhbmdlVGFncz8uKCkgPz8gJyc7XG5cdFx0fTtcblx0fSk7XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDQsIFRTMjUwM1xuXHRjb25zdCBjaGVja2JveExheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoY2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FpQXNzaXN0ZWQnKSxcblx0fSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0JHRhcmdldC5hcHBlbmQoY2hlY2tib3hMYXlvdXQuJGVsZW1lbnQpO1xuXHR9XG5cblx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIGZhbHNlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZUNoYW5nZVRhZ3N9IGZyb20gJy4vZ2VuZXJhdGVDaGFuZ2VUYWdzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoeyRib2R5LCAkZWRpdEZvcm19OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+OyAkZWRpdEZvcm0/OiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gKCRlZGl0Rm9ybSBhcyBKUXVlcnkpLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0LCBUUzI1MDNcblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRjaGVja2JveC5zZXRJbnB1dElkKE9QVElPTlMuaW5wdXRJZCk7XG5cblx0bGV0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRpZiAoISR3cENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0JHdwQ2hhbmdlVGFncyA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0JGJvZHkuZmluZCgnI2VkaXRmb3JtJykuYXBwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHR9XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHQkd3BDaGFuZ2VUYWdzLnZhbChcblx0XHRcdGdlbmVyYXRlQ2hhbmdlVGFncyh7XG5cdFx0XHRcdGNoZWNrYm94LFxuXHRcdFx0XHRvcmlnaW5hbENoYW5nZVRhZ3M6ICR3cENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycsXG5cdFx0XHRcdGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0pO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0LCBUUzI1MDNcblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdH0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsWUFBYTtBQUNiLElBQUFDLFlBQWE7QUFDYixJQUFBQyxjQUFlO0FBQ2YsSUFBQUMsVUFBVztBQUNYLElBQUFDLGdCQUFpQjtBQUNqQixJQUFBQyxtQkFBb0I7O0FDTnJCLElBQU1DLHFCQUFxQkEsQ0FBQztFQUMzQkM7RUFDQUM7RUFDQVIsV0FBQVM7QUFDRCxNQUtjO0FBQ2IsU0FBT0YsU0FBU0csV0FBVyxJQUFBLEdBQUFDLE9BQ3JCSCxvQkFBa0IsR0FBQSxFQUFBRyxPQUFJRixVQUFTLElBQ2xDRCxtQkFBbUJJLFFBQUEsSUFBQUQsT0FBWUYsVUFBUyxHQUFJLEVBQUU7QUFDbEQ7O0FDYkEsSUFBQUksb0JBQXVCZCxRQUFBLGlCQUFBO0FBRXZCLElBQU1lLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLGFBQUEsR0FBWUYsa0JBQUFHLFVBQVM7TUFDcEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNiQSxJQUFNQyxzQkFBdUJDLFdBQXlDO0FBRXJFLE1BQUlDLEdBQUdDLE9BQU9D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R2lCLFlBQVkxQyxVQUFVO0lBQ3BHMkMsT0FBTztJQUNQQyxPQUFPL0IsV0FBVyxZQUFZO0VBQy9CLENBQUM7QUFFRCxNQUFJLENBQUNHLE1BQU1LLEtBQUEsSUFBQWpCLE9BQWlCUixPQUFPLENBQUUsRUFBRTBCLFFBQVE7QUFDOUNGLFlBQVF5QixPQUFPSixlQUFlSyxRQUFRO0VBQ3ZDO0FBQ0Q7O0FML0NBLE1BQUEsR0FBS3ZELG1CQUFBdUUsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFNBQVNoRCxPQUFzQztBQUMzRUMsS0FBRzhCLEtBQUssbUJBQW1CLEVBQUVDLElBQUtFLGVBQW9CO0FBQ3JERCxzQkFBa0I7TUFDakJqQztNQUNBa0M7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVEakMsS0FBRzhCLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRGpDLHdCQUFvQkMsS0FBSztFQUMxQixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiY2hhbmdlVGFnIiwgImNvbmZpZ0tleSIsICJjb25maWdLZXlWZSIsICJpbnB1dElkIiwgInRhcmdldENsYXNzVmUiLCAidGFyZ2V0V2lraUVkaXRvciIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAiY2hlY2tib3giLCAib3JpZ2luYWxDaGFuZ2VUYWdzIiwgImNoYW5nZVRhZzIiLCAiaXNTZWxlY3RlZCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWlBc3Npc3RlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICIkYm9keSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAiZmluZCIsICJsZW5ndGgiLCAic2V0IiwgIk9PIiwgInVpIiwgIkNoZWNrYm94SW5wdXRXaWRnZXQiLCAic2VsZWN0ZWQiLCAic2V0SW5wdXRJZCIsICJvbiIsICJfc2F2ZUZpZWxkcyR3cENoYW5nZVQiLCAiX3NhdmVGaWVsZHMkd3BDaGFuZ2VUMiIsICJzYXZlRmllbGRzIiwgIndpbmRvdyIsICJ2ZSIsICJpbml0IiwgInRhcmdldCIsICJ3cENoYW5nZVRhZ3MiLCAiY2FsbCIsICJuZXdDaGFuZ2VUYWdzIiwgIl9uZXdDaGFuZ2VUYWdzIiwgImNoZWNrYm94TGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImxhYmVsIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgIl8kd3BDaGFuZ2VUYWdzJHZhbCR0byIsICJfJHdwQ2hhbmdlVGFncyR2YWwiLCAidmFsIiwgInRvU3RyaW5nIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSJdCn0K
