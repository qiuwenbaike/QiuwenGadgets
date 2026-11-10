/**
 * SPDX-License-Identifier: MIT + CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 * _addText: '{{Gadget Header|license=MIT|attribution=Diskdance, Lt2818}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PreviewWithVariant}
 * @license MIT {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant.js}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * Copyright Diskdance, Lt2818
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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

// dist/PreviewWithVariant/PreviewWithVariant.js
//! src/PreviewWithVariant/options.json
var configKey = "gadget-PreviewWithVariant__Initialized";
//! src/PreviewWithVariant/modules/processWikiEditor.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/PreviewWithVariant/modules/constant.ts
var VARIANTS = [{
  data: "zh",
  label: window.wgULS("不转换", "不轉換")
}, {
  data: "zh-hans",
  label: "简体"
}, {
  data: "zh-hant",
  label: "繁體"
}, {
  data: "zh-cn",
  label: "中国大陆简体"
}, {
  data: "zh-hk",
  label: "中國香港繁體"
}, {
  data: "zh-mo",
  label: "中國澳門繁體"
}, {
  data: "zh-my",
  label: "马来西亚简体"
}, {
  data: "zh-sg",
  label: "新加坡简体"
}, {
  data: "zh-tw",
  label: "中國臺灣繁體"
}];
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
var VariantControls_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "VariantControls",
  props: {
    initialEnabled: {
      type: Boolean,
      required: true
    },
    initialVariant: {
      type: String,
      required: true
    },
    variants: {
      type: Array,
      required: true
    },
    checkboxLabel: {
      type: String,
      required: true
    },
    selectLabel: {
      type: String,
      required: true
    },
    onVariantChange: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    const props = __props;
    const enabled = (0, import_vue2.ref)(props.initialEnabled);
    const selectedVariant = (0, import_vue2.ref)(props.initialVariant);
    const menuItems = (0, import_vue2.computed)(() => props.variants);
    (0, import_vue2.watch)(selectedVariant, (variant) => {
      if (variant !== null) {
        props.onVariantChange(variant);
      }
    });
    const getSelectedVariant = () => enabled.value ? selectedVariant.value ?? void 0 : void 0;
    __expose({
      getSelectedVariant
    });
    const __returned__ = {
      props,
      enabled,
      selectedVariant,
      menuItems,
      getSelectedVariant,
      get CdxCheckbox() {
        return import_codex.CdxCheckbox;
      },
      get CdxField() {
        return import_codex.CdxField;
      },
      get CdxSelect() {
        return import_codex.CdxSelect;
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
var _hoisted_1 = {
  id: "pwv-area"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", _hoisted_1, [(0, import_vue3.createVNode)($setup["CdxCheckbox"], {
    modelValue: $setup.enabled,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.enabled = $event),
    class: "pwv-variant-switch"
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($props.checkboxLabel),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"]), (0, import_vue3.createVNode)($setup["CdxField"], {
    class: "pwv-variant-select"
  }, {
    label: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($props.selectLabel),
      1
      /* TEXT */
    )]),
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxSelect"], {
      selected: $setup.selectedVariant,
      "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.selectedVariant = $event),
      "menu-items": $setup.menuItems,
      disabled: !$setup.enabled
    }, null, 8, ["selected", "menu-items", "disabled"])]),
    _: 1
    /* STABLE */
  })]);
}
//! src/PreviewWithVariant/modules/VariantControls.vue
VariantControls_default.render = render;
VariantControls_default.__file = "src\\PreviewWithVariant\\modules\\VariantControls.vue";
VariantControls_default.__scopeId = "data-v-f153747f";
var VariantControls_default2 = VariantControls_default;
//! src/PreviewWithVariant/modules/processWikiEditor.ts
var import_vue4 = require("vue");
//! src/PreviewWithVariant/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Preview Chinese variant conversion": (0, import_ext_gadget.localize)({
      en: "Preview Chinese variant conversion",
      "zh-hans": "预览字词转换",
      "zh-hant": "預覽字詞轉換"
    }),
    "Preview using this variant: ": (0, import_ext_gadget.localize)({
      en: "Preview using this variant: ",
      "zh-hans": "使用该变体显示预览：",
      "zh-hant": "使用該變體顯示預覽："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PreviewWithVariant/modules/processWikiEditor.ts
var processWikiEditor = ($editForm) => {
  if (mw.config.get(configKey)) {
    return;
  }
  const {
    wgPageContentModel,
    wgUserVariant
  } = mw.config.get();
  const $templateSandboxPreview = $editForm.find('input[name="wpTemplateSandboxPreview"]');
  if (wgPageContentModel !== "wikitext" && !$templateSandboxPreview.length) {
    return;
  }
  const $layout = $editForm.find(".editCheckboxes .oo-ui-horizontalLayout");
  if (!$layout.length) {
    return;
  }
  mw.config.set(configKey, true);
  const uriVariant = mw.util.getParamValue("variant");
  const initialVariant = wgUserVariant || uriVariant || mw.user.options.get("variant");
  const root = document.createElement("div");
  root.id = "mw-editpage-pwv";
  $layout.append(root);
  const app = (0, import_vue4.createApp)(VariantControls_default2, {
    initialEnabled: Boolean(uriVariant),
    initialVariant,
    variants: VARIANTS.map(({
      data,
      label
    }) => ({
      value: data,
      label
    })),
    checkboxLabel: getMessage("Preview Chinese variant conversion"),
    selectLabel: getMessage("Preview using this variant: "),
    onVariantChange: (selectedVariant) => {
      mw.config.set("wgUserVariant", selectedVariant);
    }
  });
  const controls = app.mount(root);
  const manipulateActionUrl = () => {
    const selectedVariant = controls.getSelectedVariant();
    const originalAction = $editForm.attr("action");
    if (selectedVariant && originalAction) {
      $editForm.attr("action", new import_ext_gadget2.MwUri(originalAction).extend({
        variant: selectedVariant
      }).getRelativePath());
    }
  };
  const manipulateVariantConfig = () => {
    mw.config.set("wgUserVariant", controls.getSelectedVariant() || mw.user.options.get("variant"));
  };
  $editForm.find("input[name=wpPreview]").on("click", mw.user.options.get("uselivepreview") ? manipulateVariantConfig : manipulateActionUrl);
  $templateSandboxPreview.on("click", manipulateActionUrl);
};
//! src/PreviewWithVariant/PreviewWithVariant.ts
(function previewWithVariants() {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor($editForm);
  });
})();

})();

/* </nowiki> */

