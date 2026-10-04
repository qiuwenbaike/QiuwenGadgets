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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24iLCAiZGlzdC9FZGl0Zm9ybV9BaUFzc2lzdGVkL3NyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvQXNzaXN0ZWRDaGVja2JveC52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXEVkaXRmb3JtX0FpQXNzaXN0ZWRcXG1vZHVsZXNcXEFzc2lzdGVkQ2hlY2tib3gudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9Bc3Npc3RlZENoZWNrYm94LnZ1ZSIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9nZW5lcmF0ZUNoYW5nZVRhZ3MudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQUnovoXliqnnvJbovpHnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcigkYm9keSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImNoYW5nZVRhZ1wiOiBcIkFJX2Fzc2lzdGVkXCIsXG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRWRpdGZvcm1fQWlBc3Npc3RlZF9fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2FpX2Fzc2lzdGVkXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Q2R4Q2hlY2tib3h9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0aW5wdXRJZDogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRvbkNoYW5nZTogKHNlbGVjdGVkOiBib29sZWFuKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3Qgc2VsZWN0ZWQgPSByZWYoZmFsc2UpO1xuXG53YXRjaChzZWxlY3RlZCwgcHJvcHMub25DaGFuZ2UpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwic2VsZWN0ZWRcIiA6aW5wdXQtaWQ9XCJpbnB1dElkXCI+e3sgbGFiZWwgfX08L2NkeC1jaGVja2JveD5cbjwvdGVtcGxhdGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICBtb2RlbFZhbHVlOiAkc2V0dXAuc2VsZWN0ZWQsXG4gICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkKSA9ICRldmVudCkpLFxuICAgIFwiaW5wdXQtaWRcIjogJHByb3BzLmlucHV0SWRcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkcHJvcHMubGFiZWwpLCAxIC8qIFRFWFQgKi8pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcImlucHV0LWlkXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFZGl0Zm9ybV9BaUFzc2lzdGVkXFxcXG1vZHVsZXNcXFxcQXNzaXN0ZWRDaGVja2JveC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFZGl0Zm9ybV9BaUFzc2lzdGVkXFxcXG1vZHVsZXNcXFxcQXNzaXN0ZWRDaGVja2JveC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxFZGl0Zm9ybV9BaUFzc2lzdGVkXFxcXG1vZHVsZXNcXFxcQXNzaXN0ZWRDaGVja2JveC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BaUFzc2lzdGVkL29wdGlvbnMuanNvbic7XG5pbXBvcnQgQXNzaXN0ZWRDaGVja2JveCBmcm9tICcuL0Fzc2lzdGVkQ2hlY2tib3gudnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZW5lcmF0ZUNoYW5nZVRhZ3N9IGZyb20gJy4vZ2VuZXJhdGVDaGFuZ2VUYWdzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIHRydWUpO1xuXG5cdGNvbnN0IG9uQ2hhbmdlID0gKHNlbGVjdGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qge3NhdmVGaWVsZHN9ID0gd2luZG93LnZlLmluaXQudGFyZ2V0O1xuXHRcdGNvbnN0IG9yaWdpbmFsQ2hhbmdlVGFncyA9IHNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJztcblx0XHRzYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT5cblx0XHRcdGdlbmVyYXRlQ2hhbmdlVGFncyh7XG5cdFx0XHRcdHNlbGVjdGVkLFxuXHRcdFx0XHRvcmlnaW5hbENoYW5nZVRhZ3MsXG5cdFx0XHRcdGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0XHR9KTtcblx0fTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0JHRhcmdldC5hcHBlbmQocm9vdCk7XG5cdFx0Y3JlYXRlQXBwKEFzc2lzdGVkQ2hlY2tib3gsIHtcblx0XHRcdGlucHV0SWQ6IE9QVElPTlMuaW5wdXRJZCxcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdFx0XHRvbkNoYW5nZSxcblx0XHR9KS5tb3VudChyb290KTtcblx0fVxuXG5cdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiY29uc3QgZ2VuZXJhdGVDaGFuZ2VUYWdzID0gKHtcblx0c2VsZWN0ZWQsXG5cdG9yaWdpbmFsQ2hhbmdlVGFncyxcblx0Y2hhbmdlVGFnLFxufToge1xuXHRzZWxlY3RlZDogYm9vbGVhbjtcblx0b3JpZ2luYWxDaGFuZ2VUYWdzOiBzdHJpbmc7XG5cdGNoYW5nZVRhZzogc3RyaW5nO1xufSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBzZWxlY3RlZCA/IGAke29yaWdpbmFsQ2hhbmdlVGFnc30sJHtjaGFuZ2VUYWd9YCA6IG9yaWdpbmFsQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUNoYW5nZVRhZ3N9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBaUFzc2lzdGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdGVkIGNvbnRlbnQgd2FzIGFzc2lzdGVkIGJ5IGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlJyxcblx0XHRcdGphOiAn44GT44Gu57eo6ZuG5YaF5a6544Gv5Lq65bel55+l6IO944Gr44KI44KL5pSv5o+044KS5Y+X44GR44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keeUseS6uuW3peaZuuiDve+8iEFJ77yJ6L6F5YqpJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+eUseS6uuW3peaZuuiDve+8iEFJ77yJ6LyU5YqpJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uJztcbmltcG9ydCBBc3Npc3RlZENoZWNrYm94IGZyb20gJy4vQXNzaXN0ZWRDaGVja2JveC52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dlbmVyYXRlQ2hhbmdlVGFnc30gZnJvbSAnLi9nZW5lcmF0ZUNoYW5nZVRhZ3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0bGV0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRpZiAoISR3cENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0JHdwQ2hhbmdlVGFncyA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0JGJvZHkuZmluZCgnI2VkaXRmb3JtJykuYXBwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHR9XG5cblx0Y29uc3Qgb25DaGFuZ2UgPSAoc2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHQkd3BDaGFuZ2VUYWdzLnZhbChcblx0XHRcdGdlbmVyYXRlQ2hhbmdlVGFncyh7XG5cdFx0XHRcdHNlbGVjdGVkLFxuXHRcdFx0XHRvcmlnaW5hbENoYW5nZVRhZ3M6ICR3cENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycsXG5cdFx0XHRcdGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH07XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdCR0YXJnZXQuYXBwZW5kKHJvb3QpO1xuXHRcdGNyZWF0ZUFwcChBc3Npc3RlZENoZWNrYm94LCB7XG5cdFx0XHRpbnB1dElkOiBPUFRJT05TLmlucHV0SWQsXG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHRcdFx0b25DaGFuZ2UsXG5cdFx0fSkubW91bnQocm9vdCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7QUFDYixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsY0FBZTtBQUNmLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxnQkFBaUI7QUFDakIsSUFBQUMsbUJBQW9COztBQ0xyQixJQUFBQyxjQUF5QlAsUUFBQSxLQUFBO0FB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QUVzRCxRQUFRO0FBQzlDLFVBQU1XLE9BQU9DLFNBQVNDLGNBQWMsS0FBSztBQUN6Q2YsWUFBUWdCLE9BQU9ILElBQUk7QUFDbkIsS0FBQSxHQUFBUSxZQUFBSixXQUFVdEMsMkJBQWtCO01BQzNCL0I7TUFDQTJCLE9BQU9rQixXQUFXLFlBQVk7TUFDOUJuQztJQUNELENBQUMsRUFBRTRELE1BQU1MLElBQUk7RUFDZDtBQUNEOztBUjFDQSxNQUFBLEdBQUt0RSxtQkFBQTRGLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTekMsT0FBc0M7QUFDM0VDLEtBQUdzQixLQUFLLG1CQUFtQixFQUFFQyxJQUFLRyxlQUFvQjtBQUNyREQsc0JBQWtCO01BQ2pCMUI7TUFDQTJCO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRDFCLEtBQUdzQixLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckR6Qix3QkFBb0JDLEtBQUs7RUFDMUIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImNoYW5nZVRhZyIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAiaW5wdXRJZCIsICJ0YXJnZXRDbGFzc1ZlIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiaW1wb3J0X3Z1ZTIiLCAiaW1wb3J0X2NvZGV4IiwgInByb3BzIiwgIl9fcHJvcHMiLCAic2VsZWN0ZWQiLCAicmVmIiwgIndhdGNoIiwgIm9uQ2hhbmdlIiwgImltcG9ydF92dWUzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJtb2RlbFZhbHVlIiwgIiRldmVudCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJsYWJlbCIsICJfIiwgIkFzc2lzdGVkQ2hlY2tib3hfZGVmYXVsdCIsICJfX2ZpbGUiLCAiQXNzaXN0ZWRDaGVja2JveF9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNCIsICJnZW5lcmF0ZUNoYW5nZVRhZ3MiLCAib3JpZ2luYWxDaGFuZ2VUYWdzIiwgImNoYW5nZVRhZzIiLCAiY29uY2F0IiwgInJlcGxhY2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFpQXNzaXN0ZWQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAibXciLCAiY29uZmlnIiwgImdldCIsICIkdGFyZ2V0IiwgImZpbmQiLCAibGVuZ3RoIiwgInNldCIsICJfc2F2ZUZpZWxkcyR3cENoYW5nZVQiLCAiX3NhdmVGaWVsZHMkd3BDaGFuZ2VUMiIsICJzYXZlRmllbGRzIiwgIndpbmRvdyIsICJ2ZSIsICJpbml0IiwgInRhcmdldCIsICJ3cENoYW5nZVRhZ3MiLCAiY2FsbCIsICJyb290IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiYXBwZW5kIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJob29rIiwgImFkZCIsICJpbXBvcnRfdnVlNSIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAiJHdwQ2hhbmdlVGFncyIsICIkIiwgImF0dHIiLCAiaWQiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgIl8kd3BDaGFuZ2VUYWdzJHZhbCR0byIsICJfJHdwQ2hhbmdlVGFncyR2YWwiLCAidmFsIiwgInRvU3RyaW5nIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSJdCn0K
