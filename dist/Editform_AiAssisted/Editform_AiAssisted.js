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
  return selected ? `${originalChangeTags},${changeTag2}` : originalChangeTags.replace(`,${changeTag2}`, "");
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
  const $target = $body.find(`.${targetClassVe}`);
  if (!$target.length) {
    return;
  }
  mw.config.set(configKeyVe, true);
  const onChange = (selected) => {
    var _saveFields$wpChangeT;
    const {
      saveFields
    } = window.ve.init.target;
    const originalChangeTags = ((_saveFields$wpChangeT = saveFields.wpChangeTags) === null || _saveFields$wpChangeT === void 0 ? void 0 : _saveFields$wpChangeT.call(saveFields)) ?? "";
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
    var _$wpChangeTags$val;
    $wpChangeTags.val(generateChangeTags({
      selected,
      originalChangeTags: ((_$wpChangeTags$val = $wpChangeTags.val()) === null || _$wpChangeTags$val === void 0 ? void 0 : _$wpChangeTags$val.toString()) ?? "",
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

