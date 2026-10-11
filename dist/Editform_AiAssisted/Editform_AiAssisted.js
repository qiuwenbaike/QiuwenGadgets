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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvRWRpdGZvcm1fQWlBc3Npc3RlZC50cyIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24iLCAiZGlzdC9FZGl0Zm9ybV9BaUFzc2lzdGVkL3NyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvQXNzaXN0ZWRDaGVja2JveC52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXEVkaXRmb3JtX0FpQXNzaXN0ZWRcXG1vZHVsZXNcXEFzc2lzdGVkQ2hlY2tib3gudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9Bc3Npc3RlZENoZWNrYm94LnZ1ZSIsICJzcmMvRWRpdGZvcm1fQWlBc3Npc3RlZC9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9nZW5lcmF0ZUNoYW5nZVRhZ3MudHMiLCAic3JjL0VkaXRmb3JtX0FpQXNzaXN0ZWQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9BaUFzc2lzdGVkL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQUnovoXliqnnvJbovpHnibnmrorlo7DmmI5cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdFx0JGVkaXRGb3JtLFxuXHRcdH0pO1xuXHR9KTtcblxuXHRtdy5ob29rKCd2ZS5zYXZlRGlhbG9nLnN0YXRlQ2hhbmdlZCcpLmFkZCgoKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1Zpc3VhbEVkaXRvcigkYm9keSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImNoYW5nZVRhZ1wiOiBcIkFJX2Fzc2lzdGVkXCIsXG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUVkaXRmb3JtX0FpQXNzaXN0ZWRfX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRWRpdGZvcm1fQWlBc3Npc3RlZF9fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwidGFyZ2V0Q2xhc3NWZVwiOiBcInZlLXVpLW13U2F2ZURpYWxvZy1jaGVja2JveGVzXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlcyAub28tdWktaG9yaXpvbnRhbExheW91dFwiXG59XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Q2R4Q2hlY2tib3h9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0bGFiZWw6IHN0cmluZztcblx0b25DaGFuZ2U6IChzZWxlY3RlZDogYm9vbGVhbikgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IHNlbGVjdGVkID0gcmVmKGZhbHNlKTtcblxud2F0Y2goc2VsZWN0ZWQsIHByb3BzLm9uQ2hhbmdlKTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtY2hlY2tib3ggdi1tb2RlbD1cInNlbGVjdGVkXCI+e3sgbGFiZWwgfX08L2NkeC1jaGVja2JveD5cbjwvdGVtcGxhdGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICBtb2RlbFZhbHVlOiAkc2V0dXAuc2VsZWN0ZWQsXG4gICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkKSA9ICRldmVudCkpXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHByb3BzLmxhYmVsKSwgMSAvKiBURVhUICovKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEVkaXRmb3JtX0FpQXNzaXN0ZWRcXFxcbW9kdWxlc1xcXFxBc3Npc3RlZENoZWNrYm94LnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEVkaXRmb3JtX0FpQXNzaXN0ZWRcXFxcbW9kdWxlc1xcXFxBc3Npc3RlZENoZWNrYm94LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXEVkaXRmb3JtX0FpQXNzaXN0ZWRcXFxcbW9kdWxlc1xcXFxBc3Npc3RlZENoZWNrYm94LnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0FpQXNzaXN0ZWQvb3B0aW9ucy5qc29uJztcbmltcG9ydCBBc3Npc3RlZENoZWNrYm94IGZyb20gJy4vQXNzaXN0ZWRDaGVja2JveC52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dlbmVyYXRlQ2hhbmdlVGFnc30gZnJvbSAnLi9nZW5lcmF0ZUNoYW5nZVRhZ3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGJvZHkuZmluZChgLiR7T1BUSU9OUy50YXJnZXRDbGFzc1ZlfWApO1xuXHRpZiAoISR0YXJnZXQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgdHJ1ZSk7XG5cblx0Y29uc3Qgb25DaGFuZ2UgPSAoc2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHRjb25zdCB7c2F2ZUZpZWxkc30gPSB3aW5kb3cudmUuaW5pdC50YXJnZXQ7XG5cdFx0Y29uc3Qgb3JpZ2luYWxDaGFuZ2VUYWdzID0gc2F2ZUZpZWxkcy53cENoYW5nZVRhZ3M/LigpID8/ICcnO1xuXHRcdHNhdmVGaWVsZHMud3BDaGFuZ2VUYWdzID0gKCk6IHN0cmluZyA9PlxuXHRcdFx0Z2VuZXJhdGVDaGFuZ2VUYWdzKHtcblx0XHRcdFx0c2VsZWN0ZWQsXG5cdFx0XHRcdG9yaWdpbmFsQ2hhbmdlVGFncyxcblx0XHRcdFx0Y2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0XHRcdH0pO1xuXHR9O1xuXG5cdGlmICghJGJvZHkuZmluZCgnI213LWVkaXRwYWdlLWVmYWEnKS5sZW5ndGgpIHtcblx0XHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cm9vdC5pZCA9ICdtdy1lZGl0cGFnZS1lZmFhJztcblx0XHQkdGFyZ2V0LmFwcGVuZChyb290KTtcblx0XHRjcmVhdGVBcHAoQXNzaXN0ZWRDaGVja2JveCwge1xuXHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ0FpQXNzaXN0ZWQnKSxcblx0XHRcdG9uQ2hhbmdlLFxuXHRcdH0pLm1vdW50KHJvb3QpO1xuXHR9XG5cblx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIGZhbHNlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJjb25zdCBnZW5lcmF0ZUNoYW5nZVRhZ3MgPSAoe1xuXHRzZWxlY3RlZCxcblx0b3JpZ2luYWxDaGFuZ2VUYWdzLFxuXHRjaGFuZ2VUYWcsXG59OiB7XG5cdHNlbGVjdGVkOiBib29sZWFuO1xuXHRvcmlnaW5hbENoYW5nZVRhZ3M6IHN0cmluZztcblx0Y2hhbmdlVGFnOiBzdHJpbmc7XG59KTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHNlbGVjdGVkID8gYCR7b3JpZ2luYWxDaGFuZ2VUYWdzfSwke2NoYW5nZVRhZ31gIDogb3JpZ2luYWxDaGFuZ2VUYWdzLnJlcGxhY2UoYCwke2NoYW5nZVRhZ31gLCAnJyk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlQ2hhbmdlVGFnc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFpQXNzaXN0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBlZGl0ZWQgY29udGVudCB3YXMgYXNzaXN0ZWQgYnkgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UnLFxuXHRcdFx0amE6ICfjgZPjga7nt6jpm4blhoXlrrnjga/kurrlt6Xnn6Xog73jgavjgojjgovmlK/mj7TjgpLlj5fjgZHjgabjgYTjgb7jgZknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k57yW6L6R55Sx5Lq65bel5pm66IO977yIQUnvvInovoXliqknLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k57eo6Lyv55Sx5Lq65bel5pm66IO977yIQUnvvInovJTliqknLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgJy4vcHJvY2Vzc1dpa2lFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQWlBc3Npc3RlZC9vcHRpb25zLmpzb24nO1xuaW1wb3J0IEFzc2lzdGVkQ2hlY2tib3ggZnJvbSAnLi9Bc3Npc3RlZENoZWNrYm94LnZ1ZSc7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2VuZXJhdGVDaGFuZ2VUYWdzfSBmcm9tICcuL2dlbmVyYXRlQ2hhbmdlVGFncyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtPzogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICgkZWRpdEZvcm0gYXMgSlF1ZXJ5KS5maW5kKE9QVElPTlMudGFyZ2V0V2lraUVkaXRvcik7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRsZXQgJHdwQ2hhbmdlVGFnczogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cENoYW5nZVRhZ3NdJyk7XG5cdGlmICghJHdwQ2hhbmdlVGFncy5sZW5ndGgpIHtcblx0XHQkd3BDaGFuZ2VUYWdzID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0aWQ6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdHZhbHVlOiAnJyxcblx0XHR9KTtcblx0XHQkYm9keS5maW5kKCcjZWRpdGZvcm0nKS5hcHBlbmQoJHdwQ2hhbmdlVGFncyk7XG5cdH1cblxuXHRjb25zdCBvbkNoYW5nZSA9IChzZWxlY3RlZDogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRcdCR3cENoYW5nZVRhZ3MudmFsKFxuXHRcdFx0Z2VuZXJhdGVDaGFuZ2VUYWdzKHtcblx0XHRcdFx0c2VsZWN0ZWQsXG5cdFx0XHRcdG9yaWdpbmFsQ2hhbmdlVGFnczogJHdwQ2hhbmdlVGFncy52YWwoKT8udG9TdHJpbmcoKSA/PyAnJyxcblx0XHRcdFx0Y2hhbmdlVGFnOiBPUFRJT05TLmNoYW5nZVRhZyxcblx0XHRcdH0pXG5cdFx0KTtcblx0fTtcblxuXHRpZiAoISRib2R5LmZpbmQoJyNtdy1lZGl0cGFnZS1lZmFhJykubGVuZ3RoKSB7XG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHJvb3QuaWQgPSAnbXctZWRpdHBhZ2UtZWZhYSc7XG5cdFx0JHRhcmdldC5hcHBlbmQocm9vdCk7XG5cdFx0Y3JlYXRlQXBwKEFzc2lzdGVkQ2hlY2tib3gsIHtcblx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdBaUFzc2lzdGVkJyksXG5cdFx0XHRvbkNoYW5nZSxcblx0XHR9KS5tb3VudChyb290KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsWUFBYTtBQUNiLElBQUFDLFlBQWE7QUFDYixJQUFBQyxjQUFlO0FBQ2YsSUFBQUMsZ0JBQWlCO0FBQ2pCLElBQUFDLG1CQUFvQjs7QUNKckIsSUFBQUMsY0FBeUJOLFFBQUEsS0FBQTtBQUN6QixJQUFBTyxlQUEwQlAsUUFBQSxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsVUFBTVEsUUFBUUM7QUFLZCxVQUFNQyxZQUFBLEdBQVdKLFlBQUFLLEtBQUksS0FBSztBQUUxQixLQUFBLEdB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RTZELE1BQU1OLElBQUk7RUFDZDtBQUNEOztBUjNDQSxNQUFBLEdBQUtyRSxtQkFBQTJGLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTekMsT0FBc0M7QUFDM0VDLEtBQUd1QixLQUFLLG1CQUFtQixFQUFFQyxJQUFLRyxlQUFvQjtBQUNyREQsc0JBQWtCO01BQ2pCM0I7TUFDQTRCO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFFRDNCLEtBQUd1QixLQUFLLDRCQUE0QixFQUFFQyxJQUFJLE1BQVk7QUFDckQxQix3QkFBb0JDLEtBQUs7RUFDMUIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImNoYW5nZVRhZyIsICJjb25maWdLZXkiLCAiY29uZmlnS2V5VmUiLCAidGFyZ2V0Q2xhc3NWZSIsICJ0YXJnZXRXaWtpRWRpdG9yIiwgImltcG9ydF92dWUyIiwgImltcG9ydF9jb2RleCIsICJwcm9wcyIsICJfX3Byb3BzIiwgInNlbGVjdGVkIiwgInJlZiIsICJ3YXRjaCIsICJvbkNoYW5nZSIsICJpbXBvcnRfdnVlMyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAibW9kZWxWYWx1ZSIsICIkZXZlbnQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAibGFiZWwiLCAiXyIsICJBc3Npc3RlZENoZWNrYm94X2RlZmF1bHQiLCAiX19maWxlIiwgIkFzc2lzdGVkQ2hlY2tib3hfZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTQiLCAiZ2VuZXJhdGVDaGFuZ2VUYWdzIiwgIm9yaWdpbmFsQ2hhbmdlVGFncyIsICJjaGFuZ2VUYWcyIiwgImNvbmNhdCIsICJyZXBsYWNlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBaUFzc2lzdGVkIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgIiRib2R5IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiJHRhcmdldCIsICJmaW5kIiwgImxlbmd0aCIsICJzZXQiLCAiX3NhdmVGaWVsZHMkd3BDaGFuZ2VUIiwgIl9zYXZlRmllbGRzJHdwQ2hhbmdlVDIiLCAic2F2ZUZpZWxkcyIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJ0YXJnZXQiLCAid3BDaGFuZ2VUYWdzIiwgImNhbGwiLCAicm9vdCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlkIiwgImFwcGVuZCIsICJjcmVhdGVBcHAiLCAibW91bnQiLCAiaG9vayIsICJhZGQiLCAiaW1wb3J0X3Z1ZTUiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIiR3cENoYW5nZVRhZ3MiLCAiJCIsICJhdHRyIiwgIm5hbWUiLCAidHlwZSIsICJ2YWx1ZSIsICJfJHdwQ2hhbmdlVGFncyR2YWwkdG8iLCAiXyR3cENoYW5nZVRhZ3MkdmFsIiwgInZhbCIsICJ0b1N0cmluZyIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iXQp9Cg==
