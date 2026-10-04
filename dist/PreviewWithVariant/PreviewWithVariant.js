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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9jb25zdGFudC50cyIsICJkaXN0L1ByZXZpZXdXaXRoVmFyaWFudC9zcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvVmFyaWFudENvbnRyb2xzLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcUHJldmlld1dpdGhWYXJpYW50XFxtb2R1bGVzXFxWYXJpYW50Q29udHJvbHMudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL1ZhcmlhbnRDb250cm9scy52dWUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtUHJldmlld1dpdGhWYXJpYW50X19Jbml0aWFsaXplZFwiXG59XG4iLCAiaW1wb3J0ICcuL3Byb2Nlc3NXaWtpRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7VkFSSUFOVFN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFZhcmlhbnRDb250cm9scyBmcm9tICcuL1ZhcmlhbnRDb250cm9scy52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bi50cyc7XG5cbmludGVyZmFjZSBWYXJpYW50Q29udHJvbHNJbnN0YW5jZSB7XG5cdGdldFNlbGVjdGVkVmFyaWFudDogKCkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRlZGl0Rm9ybVxuICovXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlQ29udGVudE1vZGVsLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cblx0Ly8gSXQgaXMgcG9zc2libGUgdGhhdCBhIHVzZXIgd2FudCB0byBwcmV2aWV3IGEgcGFnZSB3aXRoIGEgbm9uLXdpa2l0ZXh0IG1vZHVsZVxuXHQvLyBEbyBub3QgcmV0dXJuIGluIHRoaXMgY2FzZVxuXHRpZiAod2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbGF5b3V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cdGNvbnN0IGluaXRpYWxWYXJpYW50ID0gKHdnVXNlclZhcmlhbnQgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpIGFzIHN0cmluZztcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRyb290LmlkID0gJ3B3di1hcmVhJztcblx0JGxheW91dC5hcHBlbmQocm9vdCk7XG5cdGNvbnN0IGFwcCA9IGNyZWF0ZUFwcChWYXJpYW50Q29udHJvbHMsIHtcblx0XHRpbml0aWFsRW5hYmxlZDogQm9vbGVhbih1cmlWYXJpYW50KSxcblx0XHRpbml0aWFsVmFyaWFudCxcblx0XHR2YXJpYW50czogVkFSSUFOVFMubWFwKCh7ZGF0YSwgbGFiZWx9KSA9PiAoe3ZhbHVlOiBkYXRhLCBsYWJlbH0pKSxcblx0XHRjaGVja2JveExhYmVsOiBnZXRNZXNzYWdlKCdQcmV2aWV3IENoaW5lc2UgdmFyaWFudCBjb252ZXJzaW9uJyksXG5cdFx0c2VsZWN0TGFiZWw6IGdldE1lc3NhZ2UoJ1ByZXZpZXcgdXNpbmcgdGhpcyB2YXJpYW50OiAnKSxcblx0XHRvblZhcmlhbnRDaGFuZ2U6IChzZWxlY3RlZFZhcmlhbnQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0bXcuY29uZmlnLnNldCgnd2dVc2VyVmFyaWFudCcsIHNlbGVjdGVkVmFyaWFudCk7XG5cdFx0fSxcblx0fSk7XG5cdGNvbnN0IGNvbnRyb2xzID0gYXBwLm1vdW50KHJvb3QpIGFzIHVua25vd24gYXMgVmFyaWFudENvbnRyb2xzSW5zdGFuY2U7XG5cblx0Y29uc3QgbWFuaXB1bGF0ZUFjdGlvblVybCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBzZWxlY3RlZFZhcmlhbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGNvbnRyb2xzLmdldFNlbGVjdGVkVmFyaWFudCgpO1xuXHRcdGNvbnN0IG9yaWdpbmFsQWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWRpdEZvcm0uYXR0cignYWN0aW9uJyk7XG5cdFx0aWYgKHNlbGVjdGVkVmFyaWFudCAmJiBvcmlnaW5hbEFjdGlvbikge1xuXHRcdFx0JGVkaXRGb3JtLmF0dHIoXG5cdFx0XHRcdCdhY3Rpb24nLFxuXHRcdFx0XHRuZXcgTXdVcmkob3JpZ2luYWxBY3Rpb24pXG5cdFx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0XHR2YXJpYW50OiBzZWxlY3RlZFZhcmlhbnQsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZ2V0UmVsYXRpdmVQYXRoKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnID0gKCk6IHZvaWQgPT4ge1xuXHRcdG13LmNvbmZpZy5zZXQoJ3dnVXNlclZhcmlhbnQnLCBjb250cm9scy5nZXRTZWxlY3RlZFZhcmlhbnQoKSB8fCAobXcudXNlci5vcHRpb25zLmdldCgndmFyaWFudCcpIGFzIHN0cmluZykpO1xuXHR9O1xuXG5cdCRlZGl0Rm9ybVxuXHRcdC5maW5kKCdpbnB1dFtuYW1lPXdwUHJldmlld10nKVxuXHRcdC5vbignY2xpY2snLCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2VsaXZlcHJldmlldycpID8gbWFuaXB1bGF0ZVZhcmlhbnRDb25maWcgOiBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcblxuXHQkdGVtcGxhdGVTYW5kYm94UHJldmlldy5vbignY2xpY2snLCBtYW5pcHVsYXRlQWN0aW9uVXJsKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIiwgImNvbnN0IFZBUklBTlRTOiB7XG5cdGRhdGE6IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcbn1bXSA9IFtcblx0e1xuXHRcdGRhdGE6ICd6aCcsXG5cdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5LiN6L2s5o2iJywgJ+S4jei9ieaPmycpLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWhhbnMnLFxuXHRcdGxhYmVsOiAn566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW50Jyxcblx0XHRsYWJlbDogJ+e5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtY24nLFxuXHRcdGxhYmVsOiAn5Lit5Zu95aSn6ZmG566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oaycsXG5cdFx0bGFiZWw6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW1vJyxcblx0XHRsYWJlbDogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtbXknLFxuXHRcdGxhYmVsOiAn6ams5p2l6KW/5Lqa566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1zZycsXG5cdFx0bGFiZWw6ICfmlrDliqDlnaHnroDkvZMnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLXR3Jyxcblx0XHRsYWJlbDogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH0sXG5dO1xuXG5leHBvcnQge1ZBUklBTlRTfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhDaGVja2JveCwgQ2R4RmllbGQsIENkeFNlbGVjdCwgdHlwZSBNZW51SXRlbURhdGF9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdGluaXRpYWxFbmFibGVkOiBib29sZWFuO1xuXHRpbml0aWFsVmFyaWFudDogc3RyaW5nO1xuXHR2YXJpYW50czogTWVudUl0ZW1EYXRhW107XG5cdGNoZWNrYm94TGFiZWw6IHN0cmluZztcblx0c2VsZWN0TGFiZWw6IHN0cmluZztcblx0b25WYXJpYW50Q2hhbmdlOiAodmFyaWFudDogc3RyaW5nKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3QgZW5hYmxlZCA9IHJlZihwcm9wcy5pbml0aWFsRW5hYmxlZCk7XG5jb25zdCBzZWxlY3RlZFZhcmlhbnQgPSByZWY8c3RyaW5nIHwgbnVsbD4ocHJvcHMuaW5pdGlhbFZhcmlhbnQpO1xuY29uc3QgbWVudUl0ZW1zID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudmFyaWFudHMpO1xuXG53YXRjaChzZWxlY3RlZFZhcmlhbnQsICh2YXJpYW50KSA9PiB7XG5cdGlmICh2YXJpYW50ICE9PSBudWxsKSB7XG5cdFx0cHJvcHMub25WYXJpYW50Q2hhbmdlKHZhcmlhbnQpO1xuXHR9XG59KTtcblxuY29uc3QgZ2V0U2VsZWN0ZWRWYXJpYW50ID0gKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiAoZW5hYmxlZC52YWx1ZSA/IChzZWxlY3RlZFZhcmlhbnQudmFsdWUgPz8gdW5kZWZpbmVkKSA6IHVuZGVmaW5lZCk7XG5cbmRlZmluZUV4cG9zZSh7Z2V0U2VsZWN0ZWRWYXJpYW50fSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJlbmFibGVkXCI+e3sgY2hlY2tib3hMYWJlbCB9fTwvY2R4LWNoZWNrYm94PlxuXHQ8Y2R4LWZpZWxkIGNsYXNzPVwicHd2LXZhcmlhbnQtc2VsZWN0XCI+XG5cdFx0PHRlbXBsYXRlICNsYWJlbD57eyBzZWxlY3RMYWJlbCB9fTwvdGVtcGxhdGU+XG5cdFx0PGNkeC1zZWxlY3Qgdi1tb2RlbDpzZWxlY3RlZD1cInNlbGVjdGVkVmFyaWFudFwiIDptZW51LWl0ZW1zPVwibWVudUl0ZW1zXCIgOmRpc2FibGVkPVwiIWVuYWJsZWRcIiAvPlxuXHQ8L2NkeC1maWVsZD5cbjwvdGVtcGxhdGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgW1xuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLmVuYWJsZWQsXG4gICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuZW5hYmxlZCkgPSAkZXZlbnQpKVxuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5jaGVja2JveExhYmVsKSwgMSAvKiBURVhUICovKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pLFxuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgeyBjbGFzczogXCJwd3YtdmFyaWFudC1zZWxlY3RcIiB9LCB7XG4gICAgICBsYWJlbDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHByb3BzLnNlbGVjdExhYmVsKSwgMSAvKiBURVhUICovKVxuICAgICAgXSksXG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhTZWxlY3RcIl0sIHtcbiAgICAgICAgICBzZWxlY3RlZDogJHNldHVwLnNlbGVjdGVkVmFyaWFudCxcbiAgICAgICAgICBcIm9uVXBkYXRlOnNlbGVjdGVkXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkVmFyaWFudCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICBcIm1lbnUtaXRlbXNcIjogJHNldHVwLm1lbnVJdGVtcyxcbiAgICAgICAgICBkaXNhYmxlZDogISRzZXR1cC5lbmFibGVkXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInNlbGVjdGVkXCIsIFwibWVudS1pdGVtc1wiLCBcImRpc2FibGVkXCJdKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0pXG4gIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUHJldmlld1dpdGhWYXJpYW50XFxcXG1vZHVsZXNcXFxcVmFyaWFudENvbnRyb2xzLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFByZXZpZXdXaXRoVmFyaWFudFxcXFxtb2R1bGVzXFxcXFZhcmlhbnRDb250cm9scy52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxQcmV2aWV3V2l0aFZhcmlhbnRcXFxcbW9kdWxlc1xcXFxWYXJpYW50Q29udHJvbHMudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1ByZXZpZXcgQ2hpbmVzZSB2YXJpYW50IGNvbnZlcnNpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1ByZXZpZXcgQ2hpbmVzZSB2YXJpYW50IGNvbnZlcnNpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn6aKE6KeI5a2X6K+N6L2s5o2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mgkOimveWtl+ipnui9ieaPmycsXG5cdFx0fSksXG5cdFx0J1ByZXZpZXcgdXNpbmcgdGhpcyB2YXJpYW50OiAnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1ByZXZpZXcgdXNpbmcgdGhpcyB2YXJpYW50OiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5L2/55So6K+l5Y+Y5L2T5pi+56S66aKE6KeI77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+S9v+eUqOipsuiuiumrlOmhr+ekuumgkOimve+8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4oZnVuY3Rpb24gcHJldmlld1dpdGhWYXJpYW50cygpOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKCRlZGl0Rm9ybSk7XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhOztBQ0NkLElBQUFDLHFCQUFvQkMsUUFBQSxpQkFBQTs7QUNGcEIsSUFBTUMsV0FHQSxDQUNMO0VBQ0NDLE1BQU07RUFDTkMsT0FBT0MsT0FBT0MsTUFBTSxPQUFPLEtBQUs7QUFDakMsR0FDQTtFQUNDSCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLENBQUE7O0FDdENELElBQUFHLGVBQWtFTixRQUFBLGtCQUFBO0FBQ2xFLElBQUFPLGNBQW1DUCxRQUFBLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLFVBQU1RLFFBQVFDO0FBU2QsVUFBTUMsV0FBQSxHQUFVSCxZQUFBSSxLQUFJSCxNQUFNSSxjQUFjO0FBQ3hDLFVBQU1DLG1CQUFBLEdBQWtCTixZQUFBSSxLQUFtQkgsTUFBTU0sY0FBYztBQUMvRCxVQUFNQyxhQUFBLEdBQVlSLFlBQUFTLFVBQVMsTUFBTVIsTUFBTVMsUUFBUTtBQUUvQyxLQUFBLEdBQUFWLFlBQUFXLE9BQU1MLGlCQUFrQk0sYUFBWTtBQUNuQyxVQUFJQSxZQUFZLE1BQU07QUFDckJYLGNBQU1ZLGdCQUFnQkQsT0FBTztNQUM5QjtJQUNELENBQUM7QUFFRCxVQUFNRSxxQkFBcUJBLE1BQUE7QUFBQSxVQUFBQztBQUFBLGFBQTJCWixRQUFRYSxTQUFBRCx3QkFBU1QsZ0JBQWdCVSxXQUFBLFFBQUFELDBCQUFBLFNBQUFBLHdCQUFTLFNBQWE7SUFBQTtBQUU3R0UsYUFBYTtNQUFDSDtJQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmpDLElBQUFJLGNBQXNPekIsUUFBQSxLQUFBO0FBRS9OLFNBQVMwQixPQUFPQyxNQUFNQyxRQUFRQyxRQUFRQyxRQUFRQyxPQUFPQyxVQUFVO0FBQ3BFLFVBQUEsR0FBUVAsWUFBQVEsV0FBVyxJQUFBLEdBQUdSLFlBQUFTO0lBQW9CVCxZQUFBVTtJQUFXO0lBQU0sRUFBQSxHQUN6RFYsWUFBQVcsYUFBYU4sT0FBTyxhQUFhLEdBQUc7TUFDbENPLFlBQVlQLE9BQU9wQjtNQUNuQix1QkFBdUJrQixPQUFPLENBQUMsTUFBTUEsT0FBTyxDQUFDLElBQUlVLFlBQVlSLE9BQU9wQixVQUFXNEI7SUFDakYsR0FBRztNQUNEQyxVQUFBLEdBQVNkLFlBQUFlLFNBQVMsTUFBTSxFQUFBLEdBQ3RCZixZQUFBZ0I7U0FBQSxHQUFpQmhCLFlBQUFpQixpQkFBaUJiLE9BQU9jLGFBQWE7UUFBRzs7TUFBWSxDQUFBLENBQ3RFO01BQ0RDLEdBQUc7O0lBQ0wsR0FBRyxHQUFlLENBQUMsWUFBWSxDQUFDLElBQUEsR0FDaENuQixZQUFBVyxhQUFhTixPQUFPLFVBQVUsR0FBRztNQUFFZSxPQUFPO0lBQXFCLEdBQUc7TUFDaEUxQyxRQUFBLEdBQU9zQixZQUFBZSxTQUFTLE1BQU0sRUFBQSxHQUNwQmYsWUFBQWdCO1NBQUEsR0FBaUJoQixZQUFBaUIsaUJBQWlCYixPQUFPaUIsV0FBVztRQUFHOztNQUFZLENBQUEsQ0FDcEU7TUFDRFAsVUFBQSxHQUFTZCxZQUFBZSxTQUFTLE1BQU0sRUFBQSxHQUN0QmYsWUFBQVcsYUFBYU4sT0FBTyxXQUFXLEdBQUc7UUFDaENpQixVQUFVakIsT0FBT2pCO1FBQ2pCLHFCQUFxQmUsT0FBTyxDQUFDLE1BQU1BLE9BQU8sQ0FBQyxJQUFJVSxZQUFZUixPQUFPakIsa0JBQW1CeUI7UUFDckYsY0FBY1IsT0FBT2Y7UUFDckJpQyxVQUFVLENBQUNsQixPQUFPcEI7TUFDcEIsR0FBRyxNQUFNLEdBQWUsQ0FBQyxZQUFZLGNBQWMsVUFBVSxDQUFDLENBQUEsQ0FDL0Q7TUFDRGtDLEdBQUc7O0lBQ0wsQ0FBQyxDQUFBO0lBQ0E7O0VBQXdCO0FBQzdCOztBQzVCeVBLLHdCQUFPdkIsU0FBU0E7QUFBT3VCLHdCQUFPQyxTQUFTO0FBQXdELElBQU9DLDJCQUFRRjs7QUpLdlcsSUFBQUcsY0FBd0JwRCxRQUFBLEtBQUE7O0FLTHhCLElBQUFxRCxvQkFBdUJyRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1zRCxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLHVDQUFBLEdBQXNDRCxrQkFBQUUsVUFBUztNQUM5Q0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGlDQUFBLEdBQWdDSCxrQkFBQUUsVUFBUztNQUN4Q0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlSCxnQkFBZ0I7QUFFckMsSUFBTUksYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUxKQSxJQUFNQyxvQkFBcUJDLGVBQXlDO0FBRW5FLE1BQUlDLEdBQUdDLE9BQU9DLElBQVlsRSxTQUFTLEdBQUc7QUFDckM7RUFDRDtBQUVBLFFBQU07SUFBQ21FO0lBQW9CQztFQUFhLElBQUlKLEdBQUdDLE9BQU9DLElBQUk7QUFDMUQsUUFBTUcsMEJBQWtDTixVQUFVTyxLQUFLLHdDQUF3QztBQUkvRixNQUFJSCx1QkFBdUIsY0FBYyxDQUFDRSx3QkFBd0JFLFFBQVE7QUFDekU7RUFDRDtBQUVBLFFBQU1DLFVBQWtCVCxVQUFVTyxLQUFLLHlDQUF5QztBQUNoRixNQUFJLENBQUNFLFFBQVFELFFBQVE7QUFDcEI7RUFDRDtBQUVBUCxLQUFHQyxPQUFPUSxJQUFZekUsV0FBVyxJQUFJO0FBRXJDLFFBQU0wRSxhQUE0QlYsR0FBR1csS0FBS0MsY0FBYyxTQUFTO0FBQ2pFLFFBQU01RCxpQkFBa0JvRCxpQkFBaUJNLGNBQWNWLEdBQUdhLEtBQUtDLFFBQVFaLElBQUksU0FBUztBQUNwRixRQUFNYSxPQUFPQyxTQUFTQyxjQUFjLEtBQUs7QUFDekNGLE9BQUtHLEtBQUs7QUFDVlYsVUFBUVcsT0FBT0osSUFBSTtBQUNuQixRQUFNSyxPQUFBLEdBQU05QixZQUFBK0IsV0FBVWhDLDBCQUFpQjtJQUN0Q3ZDLGdCQUFnQndFLFFBQVFaLFVBQVU7SUFDbEMxRDtJQUNBRyxVQUFVaEIsU0FBU29GLElBQUksQ0FBQztNQUFDbkY7TUFBTUM7SUFBSyxPQUFPO01BQUNvQixPQUFPckI7TUFBTUM7SUFBSyxFQUFFO0lBQ2hFd0MsZUFBZWUsV0FBVyxvQ0FBb0M7SUFDOURaLGFBQWFZLFdBQVcsOEJBQThCO0lBQ3REdEMsaUJBQWtCUCxxQkFBa0M7QUFDbkRpRCxTQUFHQyxPQUFPUSxJQUFJLGlCQUFpQjFELGVBQWU7SUFDL0M7RUFDRCxDQUFDO0FBQ0QsUUFBTXlFLFdBQVdKLElBQUlLLE1BQU1WLElBQUk7QUFFL0IsUUFBTVcsc0JBQXNCQSxNQUFZO0FBQ3ZDLFVBQU0zRSxrQkFBc0N5RSxTQUFTakUsbUJBQW1CO0FBQ3hFLFVBQU1vRSxpQkFBcUM1QixVQUFVNkIsS0FBSyxRQUFRO0FBQ2xFLFFBQUk3RSxtQkFBbUI0RSxnQkFBZ0I7QUFDdEM1QixnQkFBVTZCLEtBQ1QsVUFDQSxJQUFJM0YsbUJBQUE0RixNQUFNRixjQUFjLEVBQ3RCRyxPQUFPO1FBQ1B6RSxTQUFTTjtNQUNWLENBQUMsRUFDQWdGLGdCQUFnQixDQUNuQjtJQUNEO0VBQ0Q7QUFFQSxRQUFNQywwQkFBMEJBLE1BQVk7QUFDM0NoQyxPQUFHQyxPQUFPUSxJQUFJLGlCQUFpQmUsU0FBU2pFLG1CQUFtQixLQUFNeUMsR0FBR2EsS0FBS0MsUUFBUVosSUFBSSxTQUFTLENBQVk7RUFDM0c7QUFFQUgsWUFDRU8sS0FBSyx1QkFBdUIsRUFDNUIyQixHQUFHLFNBQVNqQyxHQUFHYSxLQUFLQyxRQUFRWixJQUFJLGdCQUFnQixJQUFJOEIsMEJBQTBCTixtQkFBbUI7QUFFbkdyQiwwQkFBd0I0QixHQUFHLFNBQVNQLG1CQUFtQjtBQUN4RDs7Q005RUMsU0FBU1Esc0JBQTRCO0FBQ3JDbEMsS0FBR21DLEtBQUssbUJBQW1CLEVBQUVDLElBQUtyQyxlQUFvQjtBQUNyREQsc0JBQWtCQyxTQUFTO0VBQzVCLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiVkFSSUFOVFMiLCAiZGF0YSIsICJsYWJlbCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW5hYmxlZCIsICJyZWYiLCAiaW5pdGlhbEVuYWJsZWQiLCAic2VsZWN0ZWRWYXJpYW50IiwgImluaXRpYWxWYXJpYW50IiwgIm1lbnVJdGVtcyIsICJjb21wdXRlZCIsICJ2YXJpYW50cyIsICJ3YXRjaCIsICJ2YXJpYW50IiwgIm9uVmFyaWFudENoYW5nZSIsICJnZXRTZWxlY3RlZFZhcmlhbnQiLCAiX3NlbGVjdGVkVmFyaWFudCR2YWx1IiwgInZhbHVlIiwgIl9fZXhwb3NlIiwgImltcG9ydF92dWUzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiRnJhZ21lbnQiLCAiY3JlYXRlVk5vZGUiLCAibW9kZWxWYWx1ZSIsICIkZXZlbnQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY2hlY2tib3hMYWJlbCIsICJfIiwgImNsYXNzIiwgInNlbGVjdExhYmVsIiwgInNlbGVjdGVkIiwgImRpc2FibGVkIiwgIlZhcmlhbnRDb250cm9sc19kZWZhdWx0IiwgIl9fZmlsZSIsICJWYXJpYW50Q29udHJvbHNfZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAid2dVc2VyVmFyaWFudCIsICIkdGVtcGxhdGVTYW5kYm94UHJldmlldyIsICJmaW5kIiwgImxlbmd0aCIsICIkbGF5b3V0IiwgInNldCIsICJ1cmlWYXJpYW50IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAicm9vdCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlkIiwgImFwcGVuZCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgIkJvb2xlYW4iLCAibWFwIiwgImNvbnRyb2xzIiwgIm1vdW50IiwgIm1hbmlwdWxhdGVBY3Rpb25VcmwiLCAib3JpZ2luYWxBY3Rpb24iLCAiYXR0ciIsICJNd1VyaSIsICJleHRlbmQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgIm1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIiwgIm9uIiwgInByZXZpZXdXaXRoVmFyaWFudHMiLCAiaG9vayIsICJhZGQiXQp9Cg==
