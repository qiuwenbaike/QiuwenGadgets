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
    const getSelectedVariant = () => {
      var _selectedVariant$valu;
      return enabled.value ? (_selectedVariant$valu = selectedVariant.value) !== null && _selectedVariant$valu !== void 0 ? _selectedVariant$valu : void 0 : void 0;
    };
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9jb25zdGFudC50cyIsICJkaXN0L1ByZXZpZXdXaXRoVmFyaWFudC9zcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvVmFyaWFudENvbnRyb2xzLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcUHJldmlld1dpdGhWYXJpYW50XFxtb2R1bGVzXFxWYXJpYW50Q29udHJvbHMudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL1ZhcmlhbnRDb250cm9scy52dWUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtUHJldmlld1dpdGhWYXJpYW50X19Jbml0aWFsaXplZFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7VkFSSUFOVFN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFZhcmlhbnRDb250cm9scyBmcm9tICcuL1ZhcmlhbnRDb250cm9scy52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bi50cyc7XG5cbmludGVyZmFjZSBWYXJpYW50Q29udHJvbHNJbnN0YW5jZSB7XG5cdGdldFNlbGVjdGVkVmFyaWFudDogKCkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRlZGl0Rm9ybVxuICovXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlQ29udGVudE1vZGVsLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cblx0Ly8gSXQgaXMgcG9zc2libGUgdGhhdCBhIHVzZXIgd2FudCB0byBwcmV2aWV3IGEgcGFnZSB3aXRoIGEgbm9uLXdpa2l0ZXh0IG1vZHVsZVxuXHQvLyBEbyBub3QgcmV0dXJuIGluIHRoaXMgY2FzZVxuXHRpZiAod2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbGF5b3V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cdGNvbnN0IGluaXRpYWxWYXJpYW50ID0gKHdnVXNlclZhcmlhbnQgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpIGFzIHN0cmluZztcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQkbGF5b3V0LmFwcGVuZChyb290KTtcblx0Y29uc3QgYXBwID0gY3JlYXRlQXBwKFZhcmlhbnRDb250cm9scywge1xuXHRcdGluaXRpYWxFbmFibGVkOiBCb29sZWFuKHVyaVZhcmlhbnQpLFxuXHRcdGluaXRpYWxWYXJpYW50LFxuXHRcdHZhcmlhbnRzOiBWQVJJQU5UUy5tYXAoKHtkYXRhLCBsYWJlbH0pID0+ICh7dmFsdWU6IGRhdGEsIGxhYmVsfSkpLFxuXHRcdGNoZWNrYm94TGFiZWw6IGdldE1lc3NhZ2UoJ1ByZXZpZXcgQ2hpbmVzZSB2YXJpYW50IGNvbnZlcnNpb24nKSxcblx0XHRzZWxlY3RMYWJlbDogZ2V0TWVzc2FnZSgnUHJldmlldyB1c2luZyB0aGlzIHZhcmlhbnQ6ICcpLFxuXHRcdG9uVmFyaWFudENoYW5nZTogKHNlbGVjdGVkVmFyaWFudDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRtdy5jb25maWcuc2V0KCd3Z1VzZXJWYXJpYW50Jywgc2VsZWN0ZWRWYXJpYW50KTtcblx0XHR9LFxuXHR9KTtcblx0Y29uc3QgY29udHJvbHMgPSBhcHAubW91bnQocm9vdCkgYXMgdW5rbm93biBhcyBWYXJpYW50Q29udHJvbHNJbnN0YW5jZTtcblxuXHRjb25zdCBtYW5pcHVsYXRlQWN0aW9uVXJsID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkVmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gY29udHJvbHMuZ2V0U2VsZWN0ZWRWYXJpYW50KCk7XG5cdFx0Y29uc3Qgb3JpZ2luYWxBY3Rpb246IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlZGl0Rm9ybS5hdHRyKCdhY3Rpb24nKTtcblx0XHRpZiAoc2VsZWN0ZWRWYXJpYW50ICYmIG9yaWdpbmFsQWN0aW9uKSB7XG5cdFx0XHQkZWRpdEZvcm0uYXR0cihcblx0XHRcdFx0J2FjdGlvbicsXG5cdFx0XHRcdG5ldyBNd1VyaShvcmlnaW5hbEFjdGlvbilcblx0XHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IHNlbGVjdGVkVmFyaWFudCxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5nZXRSZWxhdGl2ZVBhdGgoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcgPSAoKTogdm9pZCA9PiB7XG5cdFx0bXcuY29uZmlnLnNldCgnd2dVc2VyVmFyaWFudCcsIGNvbnRyb2xzLmdldFNlbGVjdGVkVmFyaWFudCgpIHx8IChtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykgYXMgc3RyaW5nKSk7XG5cdH07XG5cblx0JGVkaXRGb3JtXG5cdFx0LmZpbmQoJ2lucHV0W25hbWU9d3BQcmV2aWV3XScpXG5cdFx0Lm9uKCdjbGljaycsIG13LnVzZXIub3B0aW9ucy5nZXQoJ3VzZWxpdmVwcmV2aWV3JykgPyBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA6IG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xuXG5cdCR0ZW1wbGF0ZVNhbmRib3hQcmV2aWV3Lm9uKCdjbGljaycsIG1hbmlwdWxhdGVBY3Rpb25VcmwpO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iLCAiY29uc3QgVkFSSUFOVFM6IHtcblx0ZGF0YTogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xufVtdID0gW1xuXHR7XG5cdFx0ZGF0YTogJ3poJyxcblx0XHRsYWJlbDogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGFucycsXG5cdFx0bGFiZWw6ICfnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWhhbnQnLFxuXHRcdGxhYmVsOiAn57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1jbicsXG5cdFx0bGFiZWw6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWhrJyxcblx0XHRsYWJlbDogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtbW8nLFxuXHRcdGxhYmVsOiAn5Lit5ZyL5r6z6ZaA57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1teScsXG5cdFx0bGFiZWw6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLXNnJyxcblx0XHRsYWJlbDogJ+aWsOWKoOWdoeeugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtdHcnLFxuXHRcdGxhYmVsOiAn5Lit5ZyL6Ie654Gj57mB6auUJyxcblx0fSxcbl07XG5cbmV4cG9ydCB7VkFSSUFOVFN9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeENoZWNrYm94LCBDZHhGaWVsZCwgQ2R4U2VsZWN0LCB0eXBlIE1lbnVJdGVtRGF0YX0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge2NvbXB1dGVkLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0aW5pdGlhbEVuYWJsZWQ6IGJvb2xlYW47XG5cdGluaXRpYWxWYXJpYW50OiBzdHJpbmc7XG5cdHZhcmlhbnRzOiBNZW51SXRlbURhdGFbXTtcblx0Y2hlY2tib3hMYWJlbDogc3RyaW5nO1xuXHRzZWxlY3RMYWJlbDogc3RyaW5nO1xuXHRvblZhcmlhbnRDaGFuZ2U6ICh2YXJpYW50OiBzdHJpbmcpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbmFibGVkID0gcmVmKHByb3BzLmluaXRpYWxFbmFibGVkKTtcbmNvbnN0IHNlbGVjdGVkVmFyaWFudCA9IHJlZjxzdHJpbmcgfCBudWxsPihwcm9wcy5pbml0aWFsVmFyaWFudCk7XG5jb25zdCBtZW51SXRlbXMgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy52YXJpYW50cyk7XG5cbndhdGNoKHNlbGVjdGVkVmFyaWFudCwgKHZhcmlhbnQpID0+IHtcblx0aWYgKHZhcmlhbnQgIT09IG51bGwpIHtcblx0XHRwcm9wcy5vblZhcmlhbnRDaGFuZ2UodmFyaWFudCk7XG5cdH1cbn0pO1xuXG5jb25zdCBnZXRTZWxlY3RlZFZhcmlhbnQgPSAoKTogc3RyaW5nIHwgdW5kZWZpbmVkID0+IChlbmFibGVkLnZhbHVlID8gKHNlbGVjdGVkVmFyaWFudC52YWx1ZSA/PyB1bmRlZmluZWQpIDogdW5kZWZpbmVkKTtcblxuZGVmaW5lRXhwb3NlKHtnZXRTZWxlY3RlZFZhcmlhbnR9KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxkaXYgaWQ9XCJwd3YtYXJlYVwiPlxuXHRcdDxjZHgtY2hlY2tib3ggdi1tb2RlbD1cImVuYWJsZWRcIiBjbGFzcz1cInB3di12YXJpYW50LXN3aXRjaFwiPnt7IGNoZWNrYm94TGFiZWwgfX08L2NkeC1jaGVja2JveD5cblx0XHQ8Y2R4LWZpZWxkIGNsYXNzPVwicHd2LXZhcmlhbnQtc2VsZWN0XCI+XG5cdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPnt7IHNlbGVjdExhYmVsIH19PC90ZW1wbGF0ZT5cblx0XHRcdDxjZHgtc2VsZWN0IHYtbW9kZWw6c2VsZWN0ZWQ9XCJzZWxlY3RlZFZhcmlhbnRcIiA6bWVudS1pdGVtcz1cIm1lbnVJdGVtc1wiIDpkaXNhYmxlZD1cIiFlbmFibGVkXCIgLz5cblx0XHQ8L2NkeC1maWVsZD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG4jcHd2LWFyZWEge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5cdGdhcDogMC43NWVtO1xuXG5cdC5wd3YtdmFyaWFudC1zd2l0Y2gsXG5cdC5wd3YtdmFyaWFudC1zZWxlY3Qge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblx0XHRtYXJnaW46IDA7XG5cdFx0ZmxleDogMSAxIDEwMCU7XG5cdH1cblxuXHQuY2R4LWNoZWNrYm94IHtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgaWQ6IFwicHd2LWFyZWFcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5lbmFibGVkLFxuICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmVuYWJsZWQpID0gJGV2ZW50KSksXG4gICAgICBjbGFzczogXCJwd3YtdmFyaWFudC1zd2l0Y2hcIlxuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5jaGVja2JveExhYmVsKSwgMSAvKiBURVhUICovKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pLFxuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgeyBjbGFzczogXCJwd3YtdmFyaWFudC1zZWxlY3RcIiB9LCB7XG4gICAgICBsYWJlbDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHByb3BzLnNlbGVjdExhYmVsKSwgMSAvKiBURVhUICovKVxuICAgICAgXSksXG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhTZWxlY3RcIl0sIHtcbiAgICAgICAgICBzZWxlY3RlZDogJHNldHVwLnNlbGVjdGVkVmFyaWFudCxcbiAgICAgICAgICBcIm9uVXBkYXRlOnNlbGVjdGVkXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkVmFyaWFudCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICBcIm1lbnUtaXRlbXNcIjogJHNldHVwLm1lbnVJdGVtcyxcbiAgICAgICAgICBkaXNhYmxlZDogISRzZXR1cC5lbmFibGVkXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInNlbGVjdGVkXCIsIFwibWVudS1pdGVtc1wiLCBcImRpc2FibGVkXCJdKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0pXG4gIF0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFByZXZpZXdXaXRoVmFyaWFudFxcXFxtb2R1bGVzXFxcXFZhcmlhbnRDb250cm9scy52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFByZXZpZXdXaXRoVmFyaWFudFxcXFxtb2R1bGVzXFxcXFZhcmlhbnRDb250cm9scy52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUHJldmlld1dpdGhWYXJpYW50XFxcXG1vZHVsZXNcXFxcVmFyaWFudENvbnRyb2xzLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFByZXZpZXdXaXRoVmFyaWFudFxcXFxtb2R1bGVzXFxcXFZhcmlhbnRDb250cm9scy52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtZjE1Mzc0N2ZcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnUHJldmlldyBDaGluZXNlIHZhcmlhbnQgY29udmVyc2lvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHJldmlldyBDaGluZXNlIHZhcmlhbnQgY29udmVyc2lvbicsXG5cdFx0XHQnemgtaGFucyc6ICfpooTop4jlrZfor43ovazmjaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCQ6Ka95a2X6Kme6L2J5o+bJyxcblx0XHR9KSxcblx0XHQnUHJldmlldyB1c2luZyB0aGlzIHZhcmlhbnQ6ICc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUHJldmlldyB1c2luZyB0aGlzIHZhcmlhbnQ6ICcsXG5cdFx0XHQnemgtaGFucyc6ICfkvb/nlKjor6Xlj5jkvZPmmL7npLrpooTop4jvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5L2/55So6Kmy6K6K6auU6aGv56S66aCQ6Ka977yaJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzV2lraUVkaXRvcic7XG5cbihmdW5jdGlvbiBwcmV2aWV3V2l0aFZhcmlhbnRzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7O0FDQWQsSUFBQUMscUJBQW9CQyxRQUFBLGlCQUFBOztBQ0RwQixJQUFNQyxXQUdBLENBQ0w7RUFDQ0MsTUFBTTtFQUNOQyxPQUFPQyxPQUFPQyxNQUFNLE9BQU8sS0FBSztBQUNqQyxHQUNBO0VBQ0NILE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixH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QUN0RHhDLGlCQUFrQlAscUJBQWtDO0FBQ25EbUQsU0FBR0MsT0FBT1EsSUFBSSxpQkFBaUI1RCxlQUFlO0lBQy9DO0VBQ0QsQ0FBQztBQUNELFFBQU0wRSxXQUFXSixJQUFJSyxNQUFNVCxJQUFJO0FBRS9CLFFBQU1VLHNCQUFzQkEsTUFBWTtBQUN2QyxVQUFNNUUsa0JBQXNDMEUsU0FBU2xFLG1CQUFtQjtBQUN4RSxVQUFNcUUsaUJBQXFDM0IsVUFBVTRCLEtBQUssUUFBUTtBQUNsRSxRQUFJOUUsbUJBQW1CNkUsZ0JBQWdCO0FBQ3RDM0IsZ0JBQVU0QixLQUNULFVBQ0EsSUFBSTVGLG1CQUFBNkYsTUFBTUYsY0FBYyxFQUN0QkcsT0FBTztRQUNQMUUsU0FBU047TUFDVixDQUFDLEVBQ0FpRixnQkFBZ0IsQ0FDbkI7SUFDRDtFQUNEO0FBRUEsUUFBTUMsMEJBQTBCQSxNQUFZO0FBQzNDL0IsT0FBR0MsT0FBT1EsSUFBSSxpQkFBaUJjLFNBQVNsRSxtQkFBbUIsS0FBTTJDLEdBQUdhLEtBQUtDLFFBQVFaLElBQUksU0FBUyxDQUFZO0VBQzNHO0FBRUFILFlBQ0VPLEtBQUssdUJBQXVCLEVBQzVCMEIsR0FBRyxTQUFTaEMsR0FBR2EsS0FBS0MsUUFBUVosSUFBSSxnQkFBZ0IsSUFBSTZCLDBCQUEwQk4sbUJBQW1CO0FBRW5HcEIsMEJBQXdCMkIsR0FBRyxTQUFTUCxtQkFBbUI7QUFDeEQ7O0NNNUVDLFNBQVNRLHNCQUE0QjtBQUNyQ2pDLEtBQUdrQyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLcEMsZUFBb0I7QUFDckRELHNCQUFrQkMsU0FBUztFQUM1QixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiY29uZmlnS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgIlZBUklBTlRTIiwgImRhdGEiLCAibGFiZWwiLCAid2luZG93IiwgIndnVUxTIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgImVuYWJsZWQiLCAicmVmIiwgImluaXRpYWxFbmFibGVkIiwgInNlbGVjdGVkVmFyaWFudCIsICJpbml0aWFsVmFyaWFudCIsICJtZW51SXRlbXMiLCAiY29tcHV0ZWQiLCAidmFyaWFudHMiLCAid2F0Y2giLCAidmFyaWFudCIsICJvblZhcmlhbnRDaGFuZ2UiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgIl9zZWxlY3RlZFZhcmlhbnQkdmFsdSIsICJ2YWx1ZSIsICJfX2V4cG9zZSIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImlkIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiY3JlYXRlVk5vZGUiLCAibW9kZWxWYWx1ZSIsICIkZXZlbnQiLCAiY2xhc3MiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY2hlY2tib3hMYWJlbCIsICJfIiwgInNlbGVjdExhYmVsIiwgInNlbGVjdGVkIiwgImRpc2FibGVkIiwgIlZhcmlhbnRDb250cm9sc19kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiVmFyaWFudENvbnRyb2xzX2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2dQYWdlQ29udGVudE1vZGVsIiwgIndnVXNlclZhcmlhbnQiLCAiJHRlbXBsYXRlU2FuZGJveFByZXZpZXciLCAiZmluZCIsICJsZW5ndGgiLCAiJGxheW91dCIsICJzZXQiLCAidXJpVmFyaWFudCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAidXNlciIsICJvcHRpb25zIiwgInJvb3QiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJCb29sZWFuIiwgIm1hcCIsICJjb250cm9scyIsICJtb3VudCIsICJtYW5pcHVsYXRlQWN0aW9uVXJsIiwgIm9yaWdpbmFsQWN0aW9uIiwgImF0dHIiLCAiTXdVcmkiLCAiZXh0ZW5kIiwgImdldFJlbGF0aXZlUGF0aCIsICJtYW5pcHVsYXRlVmFyaWFudENvbmZpZyIsICJvbiIsICJwcmV2aWV3V2l0aFZhcmlhbnRzIiwgImhvb2siLCAiYWRkIl0KfQo=
