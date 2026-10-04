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
var import_vue = require("vue");
var import_vue2 = require("vue");
var import_codex = require("@wikimedia/codex");
var AssistedCheckbox_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "AssistedCheckbox",
  props: {
    inputId: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    onChange: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const selected = (0, import_vue2.ref)(false);
    (0, import_vue2.watch)(selected, props.onChange);
    const __returned__ = {
      props,
      selected,
      get CdxCheckbox() {
        return import_codex.CdxCheckbox;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue3 = require("vue");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxCheckbox"], {
    modelValue: $setup.selected,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selected = $event),
    "input-id": $props.inputId
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($props.label),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue", "input-id"]);
}
//! src/Editform_AiAssisted/modules/AssistedCheckbox.vue
AssistedCheckbox_default.render = render;
AssistedCheckbox_default.__file = "src\\Editform_AiAssisted\\modules\\AssistedCheckbox.vue";
var AssistedCheckbox_default2 = AssistedCheckbox_default;
//! src/Editform_AiAssisted/modules/processVisualEditor.ts
var import_vue4 = require("vue");
//! src/Editform_AiAssisted/modules/generateChangeTags.ts
var generateChangeTags = ({
  selected,
  originalChangeTags,
  changeTag: changeTag2
}) => {
  return selected ? "".concat(originalChangeTags, ",").concat(changeTag2) : originalChangeTags.replace(",".concat(changeTag2), "");
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
  const onChange = (selected) => {
    var _saveFields$wpChangeT, _saveFields$wpChangeT2;
    const {
      saveFields
    } = window.ve.init.target;
    const originalChangeTags = (_saveFields$wpChangeT = (_saveFields$wpChangeT2 = saveFields.wpChangeTags) === null || _saveFields$wpChangeT2 === void 0 ? void 0 : _saveFields$wpChangeT2.call(saveFields)) !== null && _saveFields$wpChangeT !== void 0 ? _saveFields$wpChangeT : "";
    saveFields.wpChangeTags = () => generateChangeTags({
      selected,
      originalChangeTags,
      changeTag
    });
  };
  if (!$body.find("#".concat(inputId)).length) {
    const root = document.createElement("div");
    root.id = "mw-editpage-efaa";
    $target.append(root);
    (0, import_vue4.createApp)(AssistedCheckbox_default2, {
      inputId,
      label: getMessage("AiAssisted"),
      onChange
    }).mount(root);
  }
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKeyVe)) {
      mw.config.set(configKeyVe, false);
    }
  });
};
//! src/Editform_AiAssisted/modules/processWikiEditor.ts
var import_vue5 = require("vue");
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
  const onChange = (selected) => {
    var _$wpChangeTags$val$to, _$wpChangeTags$val;
    $wpChangeTags.val(generateChangeTags({
      selected,
      originalChangeTags: (_$wpChangeTags$val$to = (_$wpChangeTags$val = $wpChangeTags.val()) === null || _$wpChangeTags$val === void 0 ? void 0 : _$wpChangeTags$val.toString()) !== null && _$wpChangeTags$val$to !== void 0 ? _$wpChangeTags$val$to : "",
      changeTag
    }));
  };
  if (!$body.find("#".concat(inputId)).length) {
    const root = document.createElement("div");
    root.id = "mw-editpage-efaa";
    $target.append(root);
    (0, import_vue5.createApp)(AssistedCheckbox_default2, {
      inputId,
      label: getMessage("AiAssisted"),
      onChange
    }).mount(root);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24iLCAiZGlzdC9FZGl0Zm9ybV9BaUFzc2lzdGVkL3NyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvQXNzaXN0ZWRDaGVja2JveC52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXEVkaXRmb3JtX0FpQXNzaXN0ZWRcXG1vZHVsZXNcXEFzc2lzdGVkQ2hlY2tib3gudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9Bc3Npc3RlZENoZWNrYm94LnZ1ZSIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9nZW5lcmF0ZUNoYW5nZVRhZ3MudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQUnovoXliqnnvJbovpHnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcigkYm9keSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImNoYW5nZVRhZ1wiOiBcIkFJX2Fzc2lzdGVkXCIsXG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRWRpdGZvcm1fQWlBc3Npc3RlZF9fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2FpX2Fzc2lzdGVkXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Q2R4Q2hlY2tib3h9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0aW5wdXRJZDogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRvbkNoYW5nZTogKHNlbGVjdGVkOiBib29sZWFuKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3Qgc2VsZWN0ZWQgPSByZWYoZmFsc2UpO1xuXG53YXRjaChzZWxlY3RlZCwgcHJvcHMub25DaGFuZ2UpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwic2VsZWN0ZWRcIiA6aW5wdXQtaWQ9XCJpbnB1dElkXCI+e3sgbGFiZWwgfX08L2NkeC1jaGVja2JveD5cbjwvdGVtcGxhdGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICBtb2RlbFZhbHVlOiAkc2V0dXAuc2VsZWN0ZWQsXG4gICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkKSA9ICRldmVudCkpLFxuICAgIFwiaW5wdXQtaWRcIjogJHByb3BzLmlucHV0SWRcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkcHJvcHMubGFiZWwpLCAxIC8qIFRFWFQgKi8pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcImlucHV0LWlkXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFZGl0Zm9ybV9BaUFzc2lzdGVkXFxcXG1vZHVsZXNcXFxcQXNzaXN0ZWRDaGVja2JveC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFZGl0Zm9ybV9BaUFzc2lzdGVkXFxcXG1vZHVsZXNcXFxcQXNzaXN0ZWRDaGVja2JveC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxFZGl0Zm9ybV9BaUFzc2lzdGVkXFxcXG1vZHVsZXNcXFxcQXNzaXN0ZWRDaGVja2JveC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BaUFzc2lzdGVkL29wdGlvbnMuanNvbic7XG5pbXBvcnQgQXNzaXN0ZWRDaGVja2JveCBmcm9tICcuL0Fzc2lzdGVkQ2hlY2tib3gudnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZW5lcmF0ZUNoYW5nZVRhZ3N9IGZyb20gJy4vZ2VuZXJhdGVDaGFuZ2VUYWdzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIHRydWUpO1xuXG5cdGNvbnN0IG9uQ2hhbmdlID0gKHNlbGVjdGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qge3NhdmVGaWVsZHN9ID0gd2luZG93LnZlLmluaXQudGFyZ2V0O1xuXHRcdGNvbnN0IG9yaWdpbmFsQ2hhbmdlVGFncyA9IHNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJztcblx0XHRzYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT5cblx0XHRcdGdlbmVyYXRlQ2hhbmdlVGFncyh7XG5cdFx0XHRcdHNlbGVjdGVkLFxuXHRcdFx0XHRvcmlnaW5hbENoYW5nZVRhZ3MsXG5cdFx0XHRcdGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0XHR9KTtcblx0fTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cm9vdC5pZCA9ICdtdy1lZGl0cGFnZS1lZmFhJztcblx0XHQkdGFyZ2V0LmFwcGVuZChyb290KTtcblx0XHRjcmVhdGVBcHAoQXNzaXN0ZWRDaGVja2JveCwge1xuXHRcdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FpQXNzaXN0ZWQnKSxcblx0XHRcdG9uQ2hhbmdlLFxuXHRcdH0pLm1vdW50KHJvb3QpO1xuXHR9XG5cblx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIGZhbHNlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAoe1xuXHRzZWxlY3RlZCxcblx0b3JpZ2luYWxDaGFuZ2VUYWdzLFxuXHRjaGFuZ2VUYWcsXG59OiB7XG5cdHNlbGVjdGVkOiBib29sZWFuO1xuXHRvcmlnaW5hbENoYW5nZVRhZ3M6IHN0cmluZztcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG59KTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHNlbGVjdGVkID8gYCR7b3JpZ2luYWxDaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gIDogb3JpZ2luYWxDaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlQ2hhbmdlVGFnc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFpQXNzaXN0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0ZWQgY29udGVudCB3YXMgYXNzaXN0ZWQgYnkgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UnLFxuXHRcdFx0amE6ICfjgZPjga7nt6jpm4blhoXlrrnjga/kurrlt6Xnn6Xog73jgavjgojjgovmlK/mj7TjgpLlj5fjgZHjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R55Sx5Lq65bel5pm66IO977yIQUnvvInovoXliqknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv55Sx5Lq65bel5pm66IO977yIQUnvvInovJTliqknLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgJy4vcHJvY2Vzc1dpa2lFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24nO1xuaW1wb3J0IEFzc2lzdGVkQ2hlY2tib3ggZnJvbSAnLi9Bc3Npc3RlZENoZWNrYm94LnZ1ZSc7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2VuZXJhdGVDaGFuZ2VUYWdzfSBmcm9tICcuL2dlbmVyYXRlQ2hhbmdlVGFncyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtPzogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICgkZWRpdEZvcm0gYXMgSlF1ZXJ5KS5maW5kKE9QVElPTlMudGFyZ2V0V2lraUVkaXRvcik7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRsZXQgJHdwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cENoYW5nZVRhZ3NdJyk7XG5cdGlmICghJHdwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHQkd3BDaGFuZ2VUYWdzID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9KTtcblx0XHQkYm9keS5maW5kKCcjZWRpdGZvcm0nKS5hcHBlbmQoJHdwQ2hhbmdlVGFncyk7XG5cdH1cblxuXHRjb25zdCBvbkNoYW5nZSA9IChzZWxlY3RlZDogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRcdCR3cENoYW5nZVRhZ3MudmFsKFxuXHRcdFx0Z2VuZXJhdGVDaGFuZ2VUYWdzKHtcblx0XHRcdFx0c2VsZWN0ZWQsXG5cdFx0XHRcdG9yaWdpbmFsQ2hhbmdlVGFnczogJHdwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyxcblx0XHRcdFx0Y2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0XHRcdH0pXG5cdFx0KTtcblx0fTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cm9vdC5pZCA9ICdtdy1lZGl0cGFnZS1lZmFhJztcblx0XHQkdGFyZ2V0LmFwcGVuZChyb290KTtcblx0XHRjcmVhdGVBcHAoQXNzaXN0ZWRDaGVja2JveCwge1xuXHRcdFx0aW5wdXRJZDogT1BUSU9OUy5pbnB1dElkLFxuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FpQXNzaXN0ZWQnKSxcblx0XHRcdG9uQ2hhbmdlLFxuXHRcdH0pLm1vdW50KHJvb3QpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsWUFBYTtBQUNiLElBQUFDLGNBQWU7QUFDZixJQUFBQyxVQUFXO0FBQ1gsSUFBQUMsZ0JBQWlCO0FBQ2pCLElBQUFDLG1CQUFvQjs7QUNMckIsSUFBQUMsY0FBeUJQLFFBQUEsS0FBQTtBQUN6QixJQUFBUSxlQUEwQlIsUUFBQSxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLFVBQU1TLFFBQVFDO0FBTWQsVUFBTUMsWUFBQSxHQUFXSixZQUFBSyxLQUFJLEtBQUs7QUFFMUIsS0FBQSxHQUFBTCxZQUFBTSxPQUFNRixVQUFVRixNQUFNSyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUNaOUIsSUFBQUMsY0FBb0tmLFFBQUEsS0FBQTtBQUU3SixTQUFTZ0IsT0FBT0MsTUFBTUMsUUFBUUMsUUFBUUMsUUFBUUMsT0FBT0MsVUFBVTtBQUNwRSxVQUFBLEdBQVFQLFlBQUFRLFdBQVcsSUFBQSxHQUFHUixZQUFBUyxhQUFhSixPQUFPLGFBQWEsR0FBRztJQUN4REssWUFBWUwsT0FBT1Q7SUFDbkIsdUJBQXVCTyxPQUFPLENBQUMsTUFBTUEsT0FBTyxDQUFDLElBQUlRLFlBQVlOLE9BQU9ULFdBQVllO0lBQ2hGLFlBQVlQLE9BQU9mO0VBQ3JCLEdBQUc7SUFDRHVCLFVBQUEsR0FBU1osWUFBQWEsU0FBUyxNQUFNLEVBQUEsR0FDdEJiLFlBQUFjO09BQUEsR0FBaUJkLFlBQUFlLGlCQUFpQlgsT0FBT1ksS0FBSztNQUFHOztJQUFZLENBQUEsQ0FDOUQ7SUFDREMsR0FBRzs7RUFDTCxHQUFHLEdBQWUsQ0FBQyxjQUFjLFVBQVUsQ0FBQztBQUM5Qzs7QUNiNlBDLHlCQUFPakIsU0FBU0E7QUFBT2lCLHlCQUFPQyxTQUFTO0FBQTBELElBQU9DLDRCQUFRRjs7QUNFN1csSUFBQUcsY0FBd0JwQyxRQUFBLEtBQUE7O0FDRnhCLElBQU1xQyxxQkFBcUJBLENBQUM7RUFDM0IxQjtFQUNBMkI7RUFDQXJDLFdBQUFzQztBQUNELE1BSWM7QUFDYixTQUFPNUIsV0FBQSxHQUFBNkIsT0FBY0Ysb0JBQWtCLEdBQUEsRUFBQUUsT0FBSUQsVUFBUyxJQUFLRCxtQkFBbUJHLFFBQUEsSUFBQUQsT0FBWUQsVUFBUyxHQUFJLEVBQUU7QUFDeEc7O0FDVkEsSUFBQUcsb0JBQXVCMUMsUUFBQSxpQkFBQTtBQUV2QixJQUFNMkMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsYUFBQSxHQUFZRixrQkFBQUcsVUFBUztNQUNwQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRlhBLElBQU1DLHNCQUF1QkMsV0FBeUM7QUFFckUsTUFBSUMsR0FBR0MsT0FBT0MsSUFBWXBELFdBQVcsR0FBRztBQUN2QztFQUNEO0FBRUEsUUFBTXFELFVBQWtCSixNQUFNSyxLQUFBLElBQUFqQixPQUFpQm5DLGFBQWEsQ0FBRTtBQUM5RCxNQUFJLENBQUNtRCxRQUFRRSxRQUFRO0FBQ3BCO0VBQ0Q7QUFHQUwsS0FBR0MsT0FBT0ssSUFBWXhELGFBQWEsSUFBSTtBQUV2QyxRQUFNVyxXQUFZSCxjQUE0QjtBQUFBLFFBQUFpRCx1QkFBQUM7QUFDN0MsVUFBTTtNQUFDQztJQUFVLElBQUlDLE9BQU9DLEdBQUdDLEtBQUtDO0FBQ3BDLFVBQU01QixzQkFBQXNCLHlCQUFBQyx5QkFBcUJDLFdBQVdLLGtCQUFBLFFBQUFOLDJCQUFBLFNBQUEsU0FBWEEsdUJBQUFPLEtBQUFOLFVBQTBCLE9BQUEsUUFBQUYsMEJBQUEsU0FBQUEsd0JBQUs7QUFDMURFLGVBQVdLLGVBQWUsTUFDekI5QixtQkFBbUI7TUFDbEIxQjtNQUNBMkI7TUFDQXJDO0lBQ0QsQ0FBQztFQUNIO0FBRUEsTUFBSSxDQUFDbUQsTUFBTUssS0FBQSxJQUFBakIsT0FBaUJwQyxPQUFPLENBQUUsRUFBRXNELFFBQVE7QUFDOUMsVUFBTVcsT0FBT0MsU0FBU0MsY0FBYyxLQUFLO0FBQ3pDRixTQUFLRyxLQUFLO0FBQ1ZoQixZQUFRaUIsT0FBT0osSUFBSTtBQUNuQixLQUFBLEdBQUFqQyxZQUFBc0MsV0FBVXZDLDJCQUFrQjtNQUMzQi9CO01BQ0EyQixPQUFPa0IsV0FBVyxZQUFZO01BQzlCbkM7SUFDRCxDQUFDLEVBQUU2RCxNQUFNTixJQUFJO0VBQ2Q7QUFHQWhCLEtBQUd1QixLQUFLLHVCQUF1QixFQUFFQyxJQUFJLE1BQU07QUFDMUMsUUFBSXhCLEdBQUdDLE9BQU9DLElBQVlwRCxXQUFXLEdBQUc7QUFDdkNrRCxTQUFHQyxPQUFPSyxJQUFZeEQsYUFBYSxLQUFLO0lBQ3pDO0VBQ0QsQ0FBQztBQUNGOztBRzdDQSxJQUFBMkUsY0FBd0I5RSxRQUFBLEtBQUE7QUFJeEIsSUFBTStFLG9CQUFvQkEsQ0FBQztFQUFDM0I7RUFBTzRCO0FBQVMsTUFBa0U7QUFFN0csTUFBSTNCLEdBQUdDLE9BQU9DLElBQVlyRCxTQUFTLEdBQUc7QUFDckM7RUFDRDtBQUVBLFFBQU1zRCxVQUFtQndCLFVBQXFCdkIsS0FBYW5ELGdCQUFnQjtBQUMzRSxNQUFJLENBQUNrRCxRQUFRRSxRQUFRO0FBQ3BCO0VBQ0Q7QUFFQUwsS0FBR0MsT0FBT0ssSUFBWXpELFdBQVcsSUFBSTtBQUVyQyxNQUFJK0UsZ0JBQXdCN0IsTUFBTUssS0FBSywwQkFBMEI7QUFDakUsTUFBSSxDQUFDd0IsY0FBY3ZCLFFBQVE7QUFDMUJ1QixvQkFBZ0JDLEVBQUUsU0FBUyxFQUFFQyxLQUFLO01BQ2pDWCxJQUFJO01BQ0pZLE1BQU07TUFDTkMsTUFBTTtNQUNOQyxPQUFPO0lBQ1IsQ0FBQztBQUNEbEMsVUFBTUssS0FBSyxXQUFXLEVBQUVnQixPQUFPUSxhQUFhO0VBQzdDO0FBRUEsUUFBTW5FLFdBQVlILGNBQTRCO0FBQUEsUUFBQTRFLHVCQUFBQztBQUM3Q1Asa0JBQWNRLElBQ2JwRCxtQkFBbUI7TUFDbEIxQjtNQUNBMkIscUJBQUFpRCx5QkFBQUMscUJBQW9CUCxjQUFjUSxJQUFJLE9BQUEsUUFBQUQsdUJBQUEsU0FBQSxTQUFsQkEsbUJBQXFCRSxTQUFTLE9BQUEsUUFBQUgsMEJBQUEsU0FBQUEsd0JBQUs7TUFDdkR0RjtJQUNELENBQUMsQ0FDRjtFQUNEO0FBRUEsTUFBSSxDQUFDbUQsTUFBTUssS0FBQSxJQUFBakIsT0FBaUJwQyxPQUFPLENBQUUsRUFBRXNELFFBQVE7QUFDOUMsVUFBTVcsT0FBT0MsU0FBU0MsY0FBYyxLQUFLO0FBQ3pDRixTQUFLRyxLQUFLO0FBQ1ZoQixZQUFRaUIsT0FBT0osSUFBSTtBQUNuQixLQUFBLEdBQUFTLFlBQUFKLFdBQVV2QywyQkFBa0I7TUFDM0IvQjtNQUNBMkIsT0FBT2tCLFdBQVcsWUFBWTtNQUM5Qm5DO0lBQ0QsQ0FBQyxFQUFFNkQsTUFBTU4sSUFBSTtFQUNkO0FBQ0Q7O0FSNUNBLE1BQUEsR0FBS3RFLG1CQUFBNEYsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFNBQVN6QyxPQUFzQztBQUMzRUMsS0FBR3VCLEtBQUssbUJBQW1CLEVBQUVDLElBQUtHLGVBQW9CO0FBQ3JERCxzQkFBa0I7TUFDakIzQjtNQUNBNEI7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVEM0IsS0FBR3VCLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRDFCLHdCQUFvQkMsS0FBSztFQUMxQixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiY2hhbmdlVGFnIiwgImNvbmZpZ0tleSIsICJjb25maWdLZXlWZSIsICJpbnB1dElkIiwgInRhcmdldENsYXNzVmUiLCAidGFyZ2V0V2lraUVkaXRvciIsICJpbXBvcnRfdnVlMiIsICJpbXBvcnRfY29kZXgiLCAicHJvcHMiLCAiX19wcm9wcyIsICJzZWxlY3RlZCIsICJyZWYiLCAid2F0Y2giLCAib25DaGFuZ2UiLCAiaW1wb3J0X3Z1ZTMiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgIm1vZGVsVmFsdWUiLCAiJGV2ZW50IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgImxhYmVsIiwgIl8iLCAiQXNzaXN0ZWRDaGVja2JveF9kZWZhdWx0IiwgIl9fZmlsZSIsICJBc3Npc3RlZENoZWNrYm94X2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgImdlbmVyYXRlQ2hhbmdlVGFncyIsICJvcmlnaW5hbENoYW5nZVRhZ3MiLCAiY2hhbmdlVGFnMiIsICJjb25jYXQiLCAicmVwbGFjZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWlBc3Npc3RlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICIkYm9keSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAiZmluZCIsICJsZW5ndGgiLCAic2V0IiwgIl9zYXZlRmllbGRzJHdwQ2hhbmdlVCIsICJfc2F2ZUZpZWxkcyR3cENoYW5nZVQyIiwgInNhdmVGaWVsZHMiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgIndwQ2hhbmdlVGFncyIsICJjYWxsIiwgInJvb3QiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJhcHBlbmQiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgImhvb2siLCAiYWRkIiwgImltcG9ydF92dWU1IiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiRlZGl0Rm9ybSIsICIkd3BDaGFuZ2VUYWdzIiwgIiQiLCAiYXR0ciIsICJuYW1lIiwgInR5cGUiLCAidmFsdWUiLCAiXyR3cENoYW5nZVRhZ3MkdmFsJHRvIiwgIl8kd3BDaGFuZ2VUYWdzJHZhbCIsICJ2YWwiLCAidG9TdHJpbmciLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=
