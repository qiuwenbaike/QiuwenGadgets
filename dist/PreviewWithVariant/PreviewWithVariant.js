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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
    import_vue3.Fragment,
    null,
    [(0, import_vue3.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.enabled,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.enabled = $event)
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
    })],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/PreviewWithVariant/modules/VariantControls.vue
VariantControls_default.render = render;
VariantControls_default.__file = "src\\PreviewWithVariant\\modules\\VariantControls.vue";
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
  root.id = "pwv-area";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9jb25zdGFudC50cyIsICJkaXN0L1ByZXZpZXdXaXRoVmFyaWFudC9zcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvVmFyaWFudENvbnRyb2xzLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcUHJldmlld1dpdGhWYXJpYW50XFxtb2R1bGVzXFxWYXJpYW50Q29udHJvbHMudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL1ZhcmlhbnRDb250cm9scy52dWUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtUHJldmlld1dpdGhWYXJpYW50X19Jbml0aWFsaXplZFwiXG59XG4iLCAiaW1wb3J0ICcuL3Byb2Nlc3NXaWtpRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7VkFSSUFOVFN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFZhcmlhbnRDb250cm9scyBmcm9tICcuL1ZhcmlhbnRDb250cm9scy52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bi50cyc7XG5cbmludGVyZmFjZSBWYXJpYW50Q29udHJvbHNJbnN0YW5jZSB7XG5cdGdldFNlbGVjdGVkVmFyaWFudDogKCkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRlZGl0Rm9ybVxuICovXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlQ29udGVudE1vZGVsLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cblx0Ly8gSXQgaXMgcG9zc2libGUgdGhhdCBhIHVzZXIgd2FudCB0byBwcmV2aWV3IGEgcGFnZSB3aXRoIGEgbm9uLXdpa2l0ZXh0IG1vZHVsZVxuXHQvLyBEbyBub3QgcmV0dXJuIGluIHRoaXMgY2FzZVxuXHRpZiAod2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbGF5b3V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cdGNvbnN0IGluaXRpYWxWYXJpYW50ID0gKHdnVXNlclZhcmlhbnQgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpIGFzIHN0cmluZztcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRyb290LmlkID0gJ3B3di1hcmVhJztcblx0JGxheW91dC5hcHBlbmQocm9vdCk7XG5cdGNvbnN0IGFwcCA9IGNyZWF0ZUFwcChWYXJpYW50Q29udHJvbHMsIHtcblx0XHRpbml0aWFsRW5hYmxlZDogQm9vbGVhbih1cmlWYXJpYW50KSxcblx0XHRpbml0aWFsVmFyaWFudCxcblx0XHR2YXJpYW50czogVkFSSUFOVFMubWFwKCh7ZGF0YSwgbGFiZWx9KSA9PiAoe3ZhbHVlOiBkYXRhLCBsYWJlbH0pKSxcblx0XHRjaGVja2JveExhYmVsOiBnZXRNZXNzYWdlKCdQcmV2aWV3IENoaW5lc2UgdmFyaWFudCBjb252ZXJzaW9uJyksXG5cdFx0c2VsZWN0TGFiZWw6IGdldE1lc3NhZ2UoJ1ByZXZpZXcgdXNpbmcgdGhpcyB2YXJpYW50OiAnKSxcblx0XHRvblZhcmlhbnRDaGFuZ2U6IChzZWxlY3RlZFZhcmlhbnQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0bXcuY29uZmlnLnNldCgnd2dVc2VyVmFyaWFudCcsIHNlbGVjdGVkVmFyaWFudCk7XG5cdFx0XHQvLyBpZiAobXcudXNlci5vcHRpb25zLmdldCgndXNlbGl2ZXByZXZpZXcnKSkge1xuXHRcdFx0Ly8gXHRtYW5pcHVsYXRlVmFyaWFudENvbmZpZygpO1xuXHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdC8vIFx0bWFuaXB1bGF0ZUFjdGlvblVybCgpO1xuXHRcdFx0Ly8gfVxuXHRcdH0sXG5cdH0pO1xuXHRjb25zdCBjb250cm9scyA9IGFwcC5tb3VudChyb290KSBhcyB1bmtub3duIGFzIFZhcmlhbnRDb250cm9sc0luc3RhbmNlO1xuXG5cdGNvbnN0IG1hbmlwdWxhdGVBY3Rpb25VcmwgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRWYXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSBjb250cm9scy5nZXRTZWxlY3RlZFZhcmlhbnQoKTtcblx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdGlmIChzZWxlY3RlZFZhcmlhbnQgJiYgb3JpZ2luYWxBY3Rpb24pIHtcblx0XHRcdCRlZGl0Rm9ybS5hdHRyKFxuXHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0bmV3IE13VXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdFx0dmFyaWFudDogc2VsZWN0ZWRWYXJpYW50LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmdldFJlbGF0aXZlUGF0aCgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0XHRtdy5jb25maWcuc2V0KCd3Z1VzZXJWYXJpYW50JywgY29udHJvbHMuZ2V0U2VsZWN0ZWRWYXJpYW50KCkgfHwgKG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSBhcyBzdHJpbmcpKTtcblx0fTtcblxuXHQkZWRpdEZvcm1cblx0XHQuZmluZCgnaW5wdXRbbmFtZT13cFByZXZpZXddJylcblx0XHQub24oJ2NsaWNrJywgbXcudXNlci5vcHRpb25zLmdldCgndXNlbGl2ZXByZXZpZXcnKSA/IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIDogbWFuaXB1bGF0ZUFjdGlvblVybCk7XG5cblx0JHRlbXBsYXRlU2FuZGJveFByZXZpZXcub24oJ2NsaWNrJywgbWFuaXB1bGF0ZUFjdGlvblVybCk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiIsICJjb25zdCBWQVJJQU5UUzoge1xuXHRkYXRhOiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG59W10gPSBbXG5cdHtcblx0XHRkYXRhOiAnemgnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW5zJyxcblx0XHRsYWJlbDogJ+eugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGFudCcsXG5cdFx0bGFiZWw6ICfnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWNuJyxcblx0XHRsYWJlbDogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGsnLFxuXHRcdGxhYmVsOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1tbycsXG5cdFx0bGFiZWw6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW15Jyxcblx0XHRsYWJlbDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtc2cnLFxuXHRcdGxhYmVsOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC10dycsXG5cdFx0bGFiZWw6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtWQVJJQU5UU307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4Q2hlY2tib3gsIENkeEZpZWxkLCBDZHhTZWxlY3QsIHR5cGUgTWVudUl0ZW1EYXRhfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRpbml0aWFsRW5hYmxlZDogYm9vbGVhbjtcblx0aW5pdGlhbFZhcmlhbnQ6IHN0cmluZztcblx0dmFyaWFudHM6IE1lbnVJdGVtRGF0YVtdO1xuXHRjaGVja2JveExhYmVsOiBzdHJpbmc7XG5cdHNlbGVjdExhYmVsOiBzdHJpbmc7XG5cdG9uVmFyaWFudENoYW5nZTogKHZhcmlhbnQ6IHN0cmluZykgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGVuYWJsZWQgPSByZWYocHJvcHMuaW5pdGlhbEVuYWJsZWQpO1xuY29uc3Qgc2VsZWN0ZWRWYXJpYW50ID0gcmVmPHN0cmluZyB8IG51bGw+KHByb3BzLmluaXRpYWxWYXJpYW50KTtcbmNvbnN0IG1lbnVJdGVtcyA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZhcmlhbnRzKTtcblxud2F0Y2goc2VsZWN0ZWRWYXJpYW50LCAodmFyaWFudCkgPT4ge1xuXHRpZiAodmFyaWFudCAhPT0gbnVsbCkge1xuXHRcdHByb3BzLm9uVmFyaWFudENoYW5nZSh2YXJpYW50KTtcblx0fVxufSk7XG5cbmNvbnN0IGdldFNlbGVjdGVkVmFyaWFudCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4gKGVuYWJsZWQudmFsdWUgPyAoc2VsZWN0ZWRWYXJpYW50LnZhbHVlID8/IHVuZGVmaW5lZCkgOiB1bmRlZmluZWQpO1xuXG5kZWZpbmVFeHBvc2Uoe2dldFNlbGVjdGVkVmFyaWFudH0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwiZW5hYmxlZFwiPnt7IGNoZWNrYm94TGFiZWwgfX08L2NkeC1jaGVja2JveD5cblx0PGNkeC1maWVsZCBjbGFzcz1cInB3di12YXJpYW50LXNlbGVjdFwiPlxuXHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgc2VsZWN0TGFiZWwgfX08L3RlbXBsYXRlPlxuXHRcdDxjZHgtc2VsZWN0IHYtbW9kZWw6c2VsZWN0ZWQ9XCJzZWxlY3RlZFZhcmlhbnRcIiA6bWVudS1pdGVtcz1cIm1lbnVJdGVtc1wiIDpkaXNhYmxlZD1cIiFlbmFibGVkXCIgLz5cblx0PC9jZHgtZmllbGQ+XG48L3RlbXBsYXRlPlxuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIFtcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5lbmFibGVkLFxuICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmVuYWJsZWQpID0gJGV2ZW50KSlcbiAgICB9LCB7XG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkcHJvcHMuY2hlY2tib3hMYWJlbCksIDEgLyogVEVYVCAqLylcbiAgICAgIF0pLFxuICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCJdKSxcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIHsgY2xhc3M6IFwicHd2LXZhcmlhbnQtc2VsZWN0XCIgfSwge1xuICAgICAgbGFiZWw6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5zZWxlY3RMYWJlbCksIDEgLyogVEVYVCAqLylcbiAgICAgIF0pLFxuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4U2VsZWN0XCJdLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgXCJvblVwZGF0ZTpzZWxlY3RlZFwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpID0gJGV2ZW50KSksXG4gICAgICAgICAgXCJtZW51LWl0ZW1zXCI6ICRzZXR1cC5tZW51SXRlbXMsXG4gICAgICAgICAgZGlzYWJsZWQ6ICEkc2V0dXAuZW5hYmxlZFxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJzZWxlY3RlZFwiLCBcIm1lbnUtaXRlbXNcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgIF0pLFxuICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICB9KVxuICBdLCA2NCAvKiBTVEFCTEVfRlJBR01FTlQgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFByZXZpZXdXaXRoVmFyaWFudFxcXFxtb2R1bGVzXFxcXFZhcmlhbnRDb250cm9scy52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxQcmV2aWV3V2l0aFZhcmlhbnRcXFxcbW9kdWxlc1xcXFxWYXJpYW50Q29udHJvbHMudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcUHJldmlld1dpdGhWYXJpYW50XFxcXG1vZHVsZXNcXFxcVmFyaWFudENvbnRyb2xzLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdQcmV2aWV3IENoaW5lc2UgdmFyaWFudCBjb252ZXJzaW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmV2aWV3IENoaW5lc2UgdmFyaWFudCBjb252ZXJzaW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mihOiniOWtl+ivjei9rOaNoicsXG5cdFx0XHQnemgtaGFudCc6ICfpoJDopr3lrZfoqZ7ovYnmj5snLFxuXHRcdH0pLFxuXHRcdCdQcmV2aWV3IHVzaW5nIHRoaXMgdmFyaWFudDogJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmV2aWV3IHVzaW5nIHRoaXMgdmFyaWFudDogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S9v+eUqOivpeWPmOS9k+aYvuekuumihOiniO+8micsXG5cdFx0XHQnemgtaGFudCc6ICfkvb/nlKjoqbLororpq5Tpoa/npLrpoJDopr3vvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuKGZ1bmN0aW9uIHByZXZpZXdXaXRoVmFyaWFudHMoKTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzV2lraUVkaXRvcigkZWRpdEZvcm0pO1xuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTs7QUNDZCxJQUFBQyxxQkFBb0JDLFFBQUEsaUJBQUE7O0FDRnBCLElBQU1DLFdBR0EsQ0FDTDtFQUNDQyxNQUFNO0VBQ05DLE9BQU9DLE9BQU9DLE1BQU0sT0FBTyxLQUFLO0FBQ2pDLEdBQ0E7RUFDQ0gsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixDQUFBOztBQ3RDRCxJQUFBRyxlQUFrRU4sUUFBQSxrQkFBQTtBQUNsRSxJQUFBTyxjQUFtQ1AsUUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxVQUFNUSxRQUFRQztBQVNkLFVBQU1DLFdBQUEsR0FBVUgsWUFBQUksS0FBSUgsTUFBTUksY0FBYztBQUN4QyxVQUFNQyxtQkFBQSxHQUFrQk4sWUFBQUksS0FBbUJILE1BQU1NLGNBQWM7QUFDL0QsVUFBTUMsYUFBQSxHQUFZUixZQUFBUyxVQUFTLE1BQU1SLE1BQU1TLFFBQVE7QUFFL0MsS0FBQSxHQUFBVixZQUFBVyxPQUFNTCxpQkFBa0JNLGFBQVk7QUFDbkMsVUFBSUEsWUFBWSxNQUFNO0FBQ3JCWCxjQUFNWSxnQkFBZ0JELE9BQU87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QUksU0FBUyxDQUFZO0VBQzNHO0FBRUFILFlBQ0VPLEtBQUssdUJBQXVCLEVBQzVCMkIsR0FBRyxTQUFTakMsR0FBR2EsS0FBS0MsUUFBUVosSUFBSSxnQkFBZ0IsSUFBSThCLDBCQUEwQk4sbUJBQW1CO0FBRW5HckIsMEJBQXdCNEIsR0FBRyxTQUFTUCxtQkFBbUI7QUFDeEQ7O0NNbkZDLFNBQVNRLHNCQUE0QjtBQUNyQ2xDLEtBQUdtQyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLckMsZUFBb0I7QUFDckRELHNCQUFrQkMsU0FBUztFQUM1QixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiY29uZmlnS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgIlZBUklBTlRTIiwgImRhdGEiLCAibGFiZWwiLCAid2luZG93IiwgIndnVUxTIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgImVuYWJsZWQiLCAicmVmIiwgImluaXRpYWxFbmFibGVkIiwgInNlbGVjdGVkVmFyaWFudCIsICJpbml0aWFsVmFyaWFudCIsICJtZW51SXRlbXMiLCAiY29tcHV0ZWQiLCAidmFyaWFudHMiLCAid2F0Y2giLCAidmFyaWFudCIsICJvblZhcmlhbnRDaGFuZ2UiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgIl9zZWxlY3RlZFZhcmlhbnQkdmFsdSIsICJ2YWx1ZSIsICJfX2V4cG9zZSIsICJpbXBvcnRfdnVlMyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgIkZyYWdtZW50IiwgImNyZWF0ZVZOb2RlIiwgIm1vZGVsVmFsdWUiLCAiJGV2ZW50IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgImNoZWNrYm94TGFiZWwiLCAiXyIsICJjbGFzcyIsICJzZWxlY3RMYWJlbCIsICJzZWxlY3RlZCIsICJkaXNhYmxlZCIsICJWYXJpYW50Q29udHJvbHNfZGVmYXVsdCIsICJfX2ZpbGUiLCAiVmFyaWFudENvbnRyb2xzX2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2dQYWdlQ29udGVudE1vZGVsIiwgIndnVXNlclZhcmlhbnQiLCAiJHRlbXBsYXRlU2FuZGJveFByZXZpZXciLCAiZmluZCIsICJsZW5ndGgiLCAiJGxheW91dCIsICJzZXQiLCAidXJpVmFyaWFudCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAidXNlciIsICJvcHRpb25zIiwgInJvb3QiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJhcHBlbmQiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJCb29sZWFuIiwgIm1hcCIsICJjb250cm9scyIsICJtb3VudCIsICJtYW5pcHVsYXRlQWN0aW9uVXJsIiwgIm9yaWdpbmFsQWN0aW9uIiwgImF0dHIiLCAiTXdVcmkiLCAiZXh0ZW5kIiwgImdldFJlbGF0aXZlUGF0aCIsICJtYW5pcHVsYXRlVmFyaWFudENvbmZpZyIsICJvbiIsICJwcmV2aWV3V2l0aFZhcmlhbnRzIiwgImhvb2siLCAiYWRkIl0KfQo=
