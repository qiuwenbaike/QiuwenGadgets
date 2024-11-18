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
var targetClass = "ve-ui-mwSaveDialog-checkboxes";
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
var processVisualEditor = ({
  $body
}) => {
  if (mw.config.get(configKey)) {
    return;
  }
  const $target = $body.find(".".concat(targetClass));
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
  const $target = $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
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
    processVisualEditor({
      $body
    });
    mw.hook("ve.activationComplete").add(() => {
      if (mw.config.get(configKey)) {
        mw.config.set(configKey, false);
      }
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL0VkaXRmb3JtX0FpQXNzaXN0ZWQudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvci50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkXCIsXG5cdFwiY2hhbmdlVGFnXCI6IFwiQUlfYXNzaXN0ZWRcIixcblx0XCJpbnB1dElkXCI6IFwiZWRpdGZvcm1fYWlfYXNzaXN0ZWRcIixcblx0XCJ0YXJnZXRDbGFzc1wiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQUnovoXliqnnvJbovpHnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHR9KTtcblxuXHRcdC8vIFN3aXRjaGluZyBiZXR3ZWVuIFZFIGFuZCBOV0UsIHJlcXVpcmVzIHRvIGJlIHJlaW5pdGlhbGl6ZWRcblx0XHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWlBc3Npc3RlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGVkaXRlZCBjb250ZW50IHdhcyBhc3Npc3RlZCBieSBhcnRpZmljaWFsIGludGVsbGlnZW5jZScsXG5cdFx0XHRqYTogJ+OBk+OBrue3qOmbhuWGheWuueOBr+S6uuW3peefpeiDveOBq+OCiOOCi+aUr+aPtOOCkuWPl+OBkeOBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTnvJbovpHnlLHkurrlt6Xmmbrog73vvIhBSe+8iei+heWKqScsXG5cdFx0XHQnemgtaGFudCc6ICfmraTnt6jovK/nlLHkurrlt6Xmmbrog73vvIhBSe+8iei8lOWKqScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BaUFzc2lzdGVkL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAkYm9keS5maW5kKGAuJHtPUFRJT05TLnRhcmdldENsYXNzfWApO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgY2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGZhbHNlLFxuXHR9KTtcblxuXHRjaGVja2JveC5zZXRJbnB1dElkKE9QVElPTlMuaW5wdXRJZCk7XG5cblx0Y2hlY2tib3gub24oJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBjaGFuZ2VUYWc6IHN0cmluZyA9IE9QVElPTlMuY2hhbmdlVGFnO1xuXHRcdGNvbnN0IGdlbmVyYXRlQ2hhbmdlVGFncyA9IChvcmlnaW5DaGFuZ2VUYWdzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoZWNrYm94LmlzU2VsZWN0ZWQoKVxuXHRcdFx0XHQ/IGAke29yaWdpbkNoYW5nZVRhZ3N9LCR7Y2hhbmdlVGFnfWBcblx0XHRcdFx0OiBvcmlnaW5DaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG5cdFx0fTtcblxuXHRcdGxldCBjaGFuZ2VUYWdzOiBzdHJpbmcgPSAnJztcblx0XHRjaGFuZ2VUYWdzID0gZ2VuZXJhdGVDaGFuZ2VUYWdzKHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncz8uKCkgPz8gJycpO1xuXHRcdHdpbmRvdy52ZS5pbml0LnRhcmdldC5zYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIGNoYW5nZVRhZ3M7XG5cdFx0fTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdH0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCBjaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KHtcblx0XHRzZWxlY3RlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGNoZWNrYm94LnNldElucHV0SWQoT1BUSU9OUy5pbnB1dElkKTtcblxuXHRjaGVja2JveC5vbignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGNoYW5nZVRhZzogc3RyaW5nID0gT1BUSU9OUy5jaGFuZ2VUYWc7XG5cdFx0Y29uc3QgZ2VuZXJhdGVDaGFuZ2VUYWdzID0gKG9yaWdpbkNoYW5nZVRhZ3M6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gY2hlY2tib3guaXNTZWxlY3RlZCgpXG5cdFx0XHRcdD8gYCR7b3JpZ2luQ2hhbmdlVGFnc30sJHtjaGFuZ2VUYWd9YFxuXHRcdFx0XHQ6IG9yaWdpbkNoYW5nZVRhZ3MucmVwbGFjZShgLCR7Y2hhbmdlVGFnfWAsICcnKTtcblx0XHR9O1xuXG5cdFx0bGV0IGNoYW5nZVRhZ3M6IHN0cmluZyA9ICcnO1xuXG5cdFx0Y29uc3QgJHdwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9KTtcblx0XHQkYm9keSA9ICgkZWRpdEZvcm0gYXMgSlF1ZXJ5KS5wYXJlbnRzKCdib2R5Jyk7XG5cdFx0Y29uc3QgJG9yaWdpbldwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cENoYW5nZVRhZ3NdJyk7XG5cdFx0aWYgKCEkb3JpZ2luV3BDaGFuZ2VUYWdzLmxlbmd0aCkge1xuXHRcdFx0JGJvZHkucHJlcGVuZCgkd3BDaGFuZ2VUYWdzKTtcblx0XHR9XG5cdFx0Y2hhbmdlVGFncyA9IGdlbmVyYXRlQ2hhbmdlVGFncygkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbCgpPy50b1N0cmluZygpID8/ICcnKTtcblx0XHQkb3JpZ2luV3BDaGFuZ2VUYWdzLnZhbChjaGFuZ2VUYWdzKTtcblx0fSk7XG5cblx0Y29uc3QgY2hlY2tib3hMYXlvdXQ6IE9PLnVpLkZpZWxkTGF5b3V0PE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQ+ID0gbmV3IE9PLnVpLkZpZWxkTGF5b3V0KGNoZWNrYm94LCB7XG5cdFx0YWxpZ246ICdpbmxpbmUnLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdH0pO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdCR0YXJnZXQuYXBwZW5kKGNoZWNrYm94TGF5b3V0LiRlbGVtZW50KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFDYixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsVUFBVztBQUNYLElBQUFDLGNBQWU7O0FDSGhCLElBQUFDLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNEdEIsSUFBQUMs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QVl4QixXQUFXLEtBQUs7TUFDdkM7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJjaGFuZ2VUYWciLCAiaW5wdXRJZCIsICJ0YXJnZXRDbGFzcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWlBc3Npc3RlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICIkYm9keSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAiZmluZCIsICJjb25jYXQiLCAibGVuZ3RoIiwgInNldCIsICJjaGVja2JveCIsICJPTyIsICJ1aSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgInNldElucHV0SWQiLCAib24iLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlIiwgIl93aW5kb3ckdmUkaW5pdCR0YXJnZTIiLCAiX3dpbmRvdyR2ZSRpbml0JHRhcmdlMyIsICJjaGFuZ2VUYWcyIiwgImdlbmVyYXRlQ2hhbmdlVGFncyIsICJvcmlnaW5DaGFuZ2VUYWdzIiwgImlzU2VsZWN0ZWQiLCAicmVwbGFjZSIsICJjaGFuZ2VUYWdzIiwgIndpbmRvdyIsICJ2ZSIsICJpbml0IiwgInRhcmdldCIsICJzYXZlRmllbGRzIiwgIndwQ2hhbmdlVGFncyIsICJjYWxsIiwgImNoZWNrYm94TGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImxhYmVsIiwgImFwcGVuZCIsICIkZWxlbWVudCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAiXyRvcmlnaW5XcENoYW5nZVRhZ3MkIiwgIl8kb3JpZ2luV3BDaGFuZ2VUYWdzJDIiLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgInBhcmVudHMiLCAiJG9yaWdpbldwQ2hhbmdlVGFncyIsICJwcmVwZW5kIiwgInZhbCIsICJ0b1N0cmluZyIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iLCAiaG9vayIsICJhZGQiXQp9Cg==
