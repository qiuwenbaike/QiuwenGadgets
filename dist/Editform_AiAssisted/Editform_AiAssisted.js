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
var targetClassVe = "ve-ui-mwSaveDialog-checkboxes";
var targetWikiEditor = ".editCheckboxes .oo-ui-horizontalLayout";
var import_vue = require("vue");
var import_vue2 = require("vue");
var import_codex = require("@wikimedia/codex");
var AssistedCheckbox_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "AssistedCheckbox",
  props: {
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
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selected = $event)
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($props.label),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"]);
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
  if (!$body.find("#mw-editpage-efaa").length) {
    const root = document.createElement("div");
    root.id = "mw-editpage-efaa";
    $target.append(root);
    (0, import_vue4.createApp)(AssistedCheckbox_default2, {
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
  if (!$body.find("#mw-editpage-efaa").length) {
    const root = document.createElement("div");
    root.id = "mw-editpage-efaa";
    $target.append(root);
    (0, import_vue5.createApp)(AssistedCheckbox_default2, {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24iLCAiZGlzdC9FZGl0Zm9ybV9BaUFzc2lzdGVkL3NyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvQXNzaXN0ZWRDaGVja2JveC52dWUiLCAic2ZjLXRlbXBsYXRlOkU6XFxDb2Rlc1xcUWl1d2VuXFxRaXV3ZW5HYWRnZXRzXFxzcmNcXEVkaXRmb3JtX0FpQXNzaXN0ZWRcXG1vZHVsZXNcXEFzc2lzdGVkQ2hlY2tib3gudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9Bc3Npc3RlZENoZWNrYm94LnZ1ZSIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9nZW5lcmF0ZUNoYW5nZVRhZ3MudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQUnovoXliqnnvJbovpHnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcigkYm9keSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImNoYW5nZVRhZ1wiOiBcIkFJX2Fzc2lzdGVkXCIsXG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRWRpdGZvcm1fQWlBc3Npc3RlZF9fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Q2R4Q2hlY2tib3h9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0bGFiZWw6IHN0cmluZztcblx0b25DaGFuZ2U6IChzZWxlY3RlZDogYm9vbGVhbikgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IHNlbGVjdGVkID0gcmVmKGZhbHNlKTtcblxud2F0Y2goc2VsZWN0ZWQsIHByb3BzLm9uQ2hhbmdlKTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtY2hlY2tib3ggdi1tb2RlbD1cInNlbGVjdGVkXCI+e3sgbGFiZWwgfX08L2NkeC1jaGVja2JveD5cbjwvdGVtcGxhdGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICBtb2RlbFZhbHVlOiAkc2V0dXAuc2VsZWN0ZWQsXG4gICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkKSA9ICRldmVudCkpXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHByb3BzLmxhYmVsKSwgMSAvKiBURVhUICovKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRWRpdGZvcm1fQWlBc3Npc3RlZFxcXFxtb2R1bGVzXFxcXEFzc2lzdGVkQ2hlY2tib3gudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFZGl0Zm9ybV9BaUFzc2lzdGVkXFxcXG1vZHVsZXNcXFxcQXNzaXN0ZWRDaGVja2JveC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxFZGl0Zm9ybV9BaUFzc2lzdGVkXFxcXG1vZHVsZXNcXFxcQXNzaXN0ZWRDaGVja2JveC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9FZGl0Zm9ybV9BaUFzc2lzdGVkL29wdGlvbnMuanNvbic7XG5pbXBvcnQgQXNzaXN0ZWRDaGVja2JveCBmcm9tICcuL0Fzc2lzdGVkQ2hlY2tib3gudnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZW5lcmF0ZUNoYW5nZVRhZ3N9IGZyb20gJy4vZ2VuZXJhdGVDaGFuZ2VUYWdzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3NWZX1gKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIHRydWUpO1xuXG5cdGNvbnN0IG9uQ2hhbmdlID0gKHNlbGVjdGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qge3NhdmVGaWVsZHN9ID0gd2luZG93LnZlLmluaXQudGFyZ2V0O1xuXHRcdGNvbnN0IG9yaWdpbmFsQ2hhbmdlVGFncyA9IHNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzPy4oKSA/PyAnJztcblx0XHRzYXZlRmllbGRzLndwQ2hhbmdlVGFncyA9ICgpOiBzdHJpbmcgPT5cblx0XHRcdGdlbmVyYXRlQ2hhbmdlVGFncyh7XG5cdFx0XHRcdHNlbGVjdGVkLFxuXHRcdFx0XHRvcmlnaW5hbENoYW5nZVRhZ3MsXG5cdFx0XHRcdGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0XHR9KTtcblx0fTtcblxuXHRpZiAoISRib2R5LmZpbmQoJyNtdy1lZGl0cGFnZS1lZmFhJykubGVuZ3RoKSB7XG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHJvb3QuaWQgPSAnbXctZWRpdHBhZ2UtZWZhYSc7XG5cdFx0JHRhcmdldC5hcHBlbmQocm9vdCk7XG5cdFx0Y3JlYXRlQXBwKEFzc2lzdGVkQ2hlY2tib3gsIHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdFx0XHRvbkNoYW5nZSxcblx0XHR9KS5tb3VudChyb290KTtcblx0fVxuXG5cdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiY29uc3QgZ2VuZXJhdGVDaGFuZ2VUYWdzID0gKHtcblx0c2VsZWN0ZWQsXG5cdG9yaWdpbmFsQ2hhbmdlVGFncyxcblx0Y2hhbmdlVGFnLFxufToge1xuXHRzZWxlY3RlZDogYm9vbGVhbjtcblx0b3JpZ2luYWxDaGFuZ2VUYWdzOiBzdHJpbmc7XG5cdGNoYW5nZVRhZzogc3RyaW5nO1xufSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBzZWxlY3RlZCA/IGAke29yaWdpbmFsQ2hhbmdlVGFnc30sJHtjaGFuZ2VUYWd9YCA6IG9yaWdpbmFsQ2hhbmdlVGFncy5yZXBsYWNlKGAsJHtjaGFuZ2VUYWd9YCwgJycpO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUNoYW5nZVRhZ3N9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBaUFzc2lzdGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgZWRpdGVkIGNvbnRlbnQgd2FzIGFzc2lzdGVkIGJ5IGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlJyxcblx0XHRcdGphOiAn44GT44Gu57eo6ZuG5YaF5a6544Gv5Lq65bel55+l6IO944Gr44KI44KL5pSv5o+044KS5Y+X44GR44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOe8lui+keeUseS6uuW3peaZuuiDve+8iEFJ77yJ6L6F5YqpJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOe3qOi8r+eUseS6uuW3peaZuuiDve+8iEFJ77yJ6LyU5YqpJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICcuL3Byb2Nlc3NXaWtpRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uJztcbmltcG9ydCBBc3Npc3RlZENoZWNrYm94IGZyb20gJy4vQXNzaXN0ZWRDaGVja2JveC52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dlbmVyYXRlQ2hhbmdlVGFnc30gZnJvbSAnLi9nZW5lcmF0ZUNoYW5nZVRhZ3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybT86IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0OiBKUXVlcnkgPSAoJGVkaXRGb3JtIGFzIEpRdWVyeSkuZmluZChPUFRJT05TLnRhcmdldFdpa2lFZGl0b3IpO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0bGV0ICR3cENoYW5nZVRhZ3M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BDaGFuZ2VUYWdzXScpO1xuXHRpZiAoISR3cENoYW5nZVRhZ3MubGVuZ3RoKSB7XG5cdFx0JHdwQ2hhbmdlVGFncyA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdGlkOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHR2YWx1ZTogJycsXG5cdFx0fSk7XG5cdFx0JGJvZHkuZmluZCgnI2VkaXRmb3JtJykuYXBwZW5kKCR3cENoYW5nZVRhZ3MpO1xuXHR9XG5cblx0Y29uc3Qgb25DaGFuZ2UgPSAoc2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHQkd3BDaGFuZ2VUYWdzLnZhbChcblx0XHRcdGdlbmVyYXRlQ2hhbmdlVGFncyh7XG5cdFx0XHRcdHNlbGVjdGVkLFxuXHRcdFx0XHRvcmlnaW5hbENoYW5nZVRhZ3M6ICR3cENoYW5nZVRhZ3MudmFsKCk/LnRvU3RyaW5nKCkgPz8gJycsXG5cdFx0XHRcdGNoYW5nZVRhZzogT1BUSU9OUy5jaGFuZ2VUYWcsXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH07XG5cblx0aWYgKCEkYm9keS5maW5kKCcjbXctZWRpdHBhZ2UtZWZhYScpLmxlbmd0aCkge1xuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRyb290LmlkID0gJ213LWVkaXRwYWdlLWVmYWEnO1xuXHRcdCR0YXJnZXQuYXBwZW5kKHJvb3QpO1xuXHRcdGNyZWF0ZUFwcChBc3Npc3RlZENoZWNrYm94LCB7XG5cdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnQWlBc3Npc3RlZCcpLFxuXHRcdFx0b25DaGFuZ2UsXG5cdFx0fSkubW91bnQocm9vdCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7QUFDYixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsY0FBZTtBQUNmLElBQUFDLGdCQUFpQjtBQUNqQixJQUFBQyxtQkFBb0I7O0FDSnJCLElBQUFDLGNBQXlCTixRQUFBLEtBQUE7QUFDekIsSUFBQU8sZUFBMEJQLFFBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLFVBQU1RLFFBQVFDO0FBS2QsVUFBTUMsWUFBQSxHQUFXSixZQUFBSyxLQUFJLEtBQUs7QUFFMUIsS0FB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LEVBQUU2RCxNQUFNTixJQUFJO0VBQ2Q7QUFDRDs7QVIzQ0EsTUFBQSxHQUFLckUsbUJBQUEyRixTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBU3pDLE9BQXNDO0FBQzNFQyxLQUFHdUIsS0FBSyxtQkFBbUIsRUFBRUMsSUFBS0csZUFBb0I7QUFDckRELHNCQUFrQjtNQUNqQjNCO01BQ0E0QjtJQUNELENBQUM7RUFDRixDQUFDO0FBRUQzQixLQUFHdUIsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEMUIsd0JBQW9CQyxLQUFLO0VBQzFCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJjaGFuZ2VUYWciLCAiY29uZmlnS2V5IiwgImNvbmZpZ0tleVZlIiwgInRhcmdldENsYXNzVmUiLCAidGFyZ2V0V2lraUVkaXRvciIsICJpbXBvcnRfdnVlMiIsICJpbXBvcnRfY29kZXgiLCAicHJvcHMiLCAiX19wcm9wcyIsICJzZWxlY3RlZCIsICJyZWYiLCAid2F0Y2giLCAib25DaGFuZ2UiLCAiaW1wb3J0X3Z1ZTMiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgIm1vZGVsVmFsdWUiLCAiJGV2ZW50IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgImxhYmVsIiwgIl8iLCAiQXNzaXN0ZWRDaGVja2JveF9kZWZhdWx0IiwgIl9fZmlsZSIsICJBc3Npc3RlZENoZWNrYm94X2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgImdlbmVyYXRlQ2hhbmdlVGFncyIsICJvcmlnaW5hbENoYW5nZVRhZ3MiLCAiY2hhbmdlVGFnMiIsICJjb25jYXQiLCAicmVwbGFjZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQWlBc3Npc3RlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICIkYm9keSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIiR0YXJnZXQiLCAiZmluZCIsICJsZW5ndGgiLCAic2V0IiwgIl9zYXZlRmllbGRzJHdwQ2hhbmdlVCIsICJfc2F2ZUZpZWxkcyR3cENoYW5nZVQyIiwgInNhdmVGaWVsZHMiLCAid2luZG93IiwgInZlIiwgImluaXQiLCAidGFyZ2V0IiwgIndwQ2hhbmdlVGFncyIsICJjYWxsIiwgInJvb3QiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJhcHBlbmQiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgImhvb2siLCAiYWRkIiwgImltcG9ydF92dWU1IiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiRlZGl0Rm9ybSIsICIkd3BDaGFuZ2VUYWdzIiwgIiQiLCAiYXR0ciIsICJuYW1lIiwgInR5cGUiLCAidmFsdWUiLCAiXyR3cENoYW5nZVRhZ3MkdmFsJHRvIiwgIl8kd3BDaGFuZ2VUYWdzJHZhbCIsICJ2YWwiLCAidG9TdHJpbmciLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=
