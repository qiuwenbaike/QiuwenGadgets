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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9jb25zdGFudC50cyIsICJkaXN0L1ByZXZpZXdXaXRoVmFyaWFudC9zcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvVmFyaWFudENvbnRyb2xzLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcUHJldmlld1dpdGhWYXJpYW50XFxtb2R1bGVzXFxWYXJpYW50Q29udHJvbHMudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL1ZhcmlhbnRDb250cm9scy52dWUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtUHJldmlld1dpdGhWYXJpYW50X19Jbml0aWFsaXplZFwiXG59XG4iLCAiaW1wb3J0ICcuL3Byb2Nlc3NXaWtpRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7VkFSSUFOVFN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFZhcmlhbnRDb250cm9scyBmcm9tICcuL1ZhcmlhbnRDb250cm9scy52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bi50cyc7XG5cbmludGVyZmFjZSBWYXJpYW50Q29udHJvbHNJbnN0YW5jZSB7XG5cdGdldFNlbGVjdGVkVmFyaWFudDogKCkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRlZGl0Rm9ybVxuICovXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlQ29udGVudE1vZGVsLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cblx0Ly8gSXQgaXMgcG9zc2libGUgdGhhdCBhIHVzZXIgd2FudCB0byBwcmV2aWV3IGEgcGFnZSB3aXRoIGEgbm9uLXdpa2l0ZXh0IG1vZHVsZVxuXHQvLyBEbyBub3QgcmV0dXJuIGluIHRoaXMgY2FzZVxuXHRpZiAod2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbGF5b3V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cdGNvbnN0IGluaXRpYWxWYXJpYW50ID0gKHdnVXNlclZhcmlhbnQgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpIGFzIHN0cmluZztcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRyb290LmlkID0gJ213LWVkaXRwYWdlLXB3dic7XG5cdCRsYXlvdXQuYXBwZW5kKHJvb3QpO1xuXHRjb25zdCBhcHAgPSBjcmVhdGVBcHAoVmFyaWFudENvbnRyb2xzLCB7XG5cdFx0aW5pdGlhbEVuYWJsZWQ6IEJvb2xlYW4odXJpVmFyaWFudCksXG5cdFx0aW5pdGlhbFZhcmlhbnQsXG5cdFx0dmFyaWFudHM6IFZBUklBTlRTLm1hcCgoe2RhdGEsIGxhYmVsfSkgPT4gKHt2YWx1ZTogZGF0YSwgbGFiZWx9KSksXG5cdFx0Y2hlY2tib3hMYWJlbDogZ2V0TWVzc2FnZSgnUHJldmlldyBDaGluZXNlIHZhcmlhbnQgY29udmVyc2lvbicpLFxuXHRcdHNlbGVjdExhYmVsOiBnZXRNZXNzYWdlKCdQcmV2aWV3IHVzaW5nIHRoaXMgdmFyaWFudDogJyksXG5cdFx0b25WYXJpYW50Q2hhbmdlOiAoc2VsZWN0ZWRWYXJpYW50OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdG13LmNvbmZpZy5zZXQoJ3dnVXNlclZhcmlhbnQnLCBzZWxlY3RlZFZhcmlhbnQpO1xuXHRcdH0sXG5cdH0pO1xuXHRjb25zdCBjb250cm9scyA9IGFwcC5tb3VudChyb290KSBhcyB1bmtub3duIGFzIFZhcmlhbnRDb250cm9sc0luc3RhbmNlO1xuXG5cdGNvbnN0IG1hbmlwdWxhdGVBY3Rpb25VcmwgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRWYXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSBjb250cm9scy5nZXRTZWxlY3RlZFZhcmlhbnQoKTtcblx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdGlmIChzZWxlY3RlZFZhcmlhbnQgJiYgb3JpZ2luYWxBY3Rpb24pIHtcblx0XHRcdCRlZGl0Rm9ybS5hdHRyKFxuXHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0bmV3IE13VXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdFx0dmFyaWFudDogc2VsZWN0ZWRWYXJpYW50LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmdldFJlbGF0aXZlUGF0aCgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0XHRtdy5jb25maWcuc2V0KCd3Z1VzZXJWYXJpYW50JywgY29udHJvbHMuZ2V0U2VsZWN0ZWRWYXJpYW50KCkgfHwgKG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSBhcyBzdHJpbmcpKTtcblx0fTtcblxuXHQkZWRpdEZvcm1cblx0XHQuZmluZCgnaW5wdXRbbmFtZT13cFByZXZpZXddJylcblx0XHQub24oJ2NsaWNrJywgbXcudXNlci5vcHRpb25zLmdldCgndXNlbGl2ZXByZXZpZXcnKSA/IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIDogbWFuaXB1bGF0ZUFjdGlvblVybCk7XG5cblx0JHRlbXBsYXRlU2FuZGJveFByZXZpZXcub24oJ2NsaWNrJywgbWFuaXB1bGF0ZUFjdGlvblVybCk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiIsICJjb25zdCBWQVJJQU5UUzoge1xuXHRkYXRhOiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG59W10gPSBbXG5cdHtcblx0XHRkYXRhOiAnemgnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW5zJyxcblx0XHRsYWJlbDogJ+eugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGFudCcsXG5cdFx0bGFiZWw6ICfnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWNuJyxcblx0XHRsYWJlbDogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGsnLFxuXHRcdGxhYmVsOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1tbycsXG5cdFx0bGFiZWw6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW15Jyxcblx0XHRsYWJlbDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtc2cnLFxuXHRcdGxhYmVsOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC10dycsXG5cdFx0bGFiZWw6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtWQVJJQU5UU307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4Q2hlY2tib3gsIENkeEZpZWxkLCBDZHhTZWxlY3QsIHR5cGUgTWVudUl0ZW1EYXRhfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRpbml0aWFsRW5hYmxlZDogYm9vbGVhbjtcblx0aW5pdGlhbFZhcmlhbnQ6IHN0cmluZztcblx0dmFyaWFudHM6IE1lbnVJdGVtRGF0YVtdO1xuXHRjaGVja2JveExhYmVsOiBzdHJpbmc7XG5cdHNlbGVjdExhYmVsOiBzdHJpbmc7XG5cdG9uVmFyaWFudENoYW5nZTogKHZhcmlhbnQ6IHN0cmluZykgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGVuYWJsZWQgPSByZWYocHJvcHMuaW5pdGlhbEVuYWJsZWQpO1xuY29uc3Qgc2VsZWN0ZWRWYXJpYW50ID0gcmVmPHN0cmluZyB8IG51bGw+KHByb3BzLmluaXRpYWxWYXJpYW50KTtcbmNvbnN0IG1lbnVJdGVtcyA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZhcmlhbnRzKTtcblxud2F0Y2goc2VsZWN0ZWRWYXJpYW50LCAodmFyaWFudCkgPT4ge1xuXHRpZiAodmFyaWFudCAhPT0gbnVsbCkge1xuXHRcdHByb3BzLm9uVmFyaWFudENoYW5nZSh2YXJpYW50KTtcblx0fVxufSk7XG5cbmNvbnN0IGdldFNlbGVjdGVkVmFyaWFudCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4gKGVuYWJsZWQudmFsdWUgPyAoc2VsZWN0ZWRWYXJpYW50LnZhbHVlID8/IHVuZGVmaW5lZCkgOiB1bmRlZmluZWQpO1xuXG5kZWZpbmVFeHBvc2Uoe2dldFNlbGVjdGVkVmFyaWFudH0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGRpdiBpZD1cInB3di1hcmVhXCI+XG5cdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwiZW5hYmxlZFwiIGNsYXNzPVwicHd2LXZhcmlhbnQtc3dpdGNoXCI+e3sgY2hlY2tib3hMYWJlbCB9fTwvY2R4LWNoZWNrYm94PlxuXHRcdDxjZHgtZmllbGQgY2xhc3M9XCJwd3YtdmFyaWFudC1zZWxlY3RcIj5cblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgc2VsZWN0TGFiZWwgfX08L3RlbXBsYXRlPlxuXHRcdFx0PGNkeC1zZWxlY3Qgdi1tb2RlbDpzZWxlY3RlZD1cInNlbGVjdGVkVmFyaWFudFwiIDptZW51LWl0ZW1zPVwibWVudUl0ZW1zXCIgOmRpc2FibGVkPVwiIWVuYWJsZWRcIiAvPlxuXHRcdDwvY2R4LWZpZWxkPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbiNwd3YtYXJlYSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblx0Z2FwOiAwLjc1ZW07XG5cblx0LnB3di12YXJpYW50LXN3aXRjaCxcblx0LnB3di12YXJpYW50LXNlbGVjdCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXHRcdG1hcmdpbjogMDtcblx0XHRmbGV4OiAxIDEgMTAwJTtcblx0fVxuXG5cdC5jZHgtY2hlY2tib3gge1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBpZDogXCJwd3YtYXJlYVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLmVuYWJsZWQsXG4gICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuZW5hYmxlZCkgPSAkZXZlbnQpKSxcbiAgICAgIGNsYXNzOiBcInB3di12YXJpYW50LXN3aXRjaFwiXG4gICAgfSwge1xuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHByb3BzLmNoZWNrYm94TGFiZWwpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSksXG4gICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCB7IGNsYXNzOiBcInB3di12YXJpYW50LXNlbGVjdFwiIH0sIHtcbiAgICAgIGxhYmVsOiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkcHJvcHMuc2VsZWN0TGFiZWwpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeFNlbGVjdFwiXSwge1xuICAgICAgICAgIHNlbGVjdGVkOiAkc2V0dXAuc2VsZWN0ZWRWYXJpYW50LFxuICAgICAgICAgIFwib25VcGRhdGU6c2VsZWN0ZWRcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuc2VsZWN0ZWRWYXJpYW50KSA9ICRldmVudCkpLFxuICAgICAgICAgIFwibWVudS1pdGVtc1wiOiAkc2V0dXAubWVudUl0ZW1zLFxuICAgICAgICAgIGRpc2FibGVkOiAhJHNldHVwLmVuYWJsZWRcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wic2VsZWN0ZWRcIiwgXCJtZW51LWl0ZW1zXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSlcbiAgXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUHJldmlld1dpdGhWYXJpYW50XFxcXG1vZHVsZXNcXFxcVmFyaWFudENvbnRyb2xzLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUHJldmlld1dpdGhWYXJpYW50XFxcXG1vZHVsZXNcXFxcVmFyaWFudENvbnRyb2xzLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxQcmV2aWV3V2l0aFZhcmlhbnRcXFxcbW9kdWxlc1xcXFxWYXJpYW50Q29udHJvbHMudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcUHJldmlld1dpdGhWYXJpYW50XFxcXG1vZHVsZXNcXFxcVmFyaWFudENvbnRyb2xzLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1mMTUzNzQ3ZlwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdQcmV2aWV3IENoaW5lc2UgdmFyaWFudCBjb252ZXJzaW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmV2aWV3IENoaW5lc2UgdmFyaWFudCBjb252ZXJzaW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mihOiniOWtl+ivjei9rOaNoicsXG5cdFx0XHQnemgtaGFudCc6ICfpoJDopr3lrZfoqZ7ovYnmj5snLFxuXHRcdH0pLFxuXHRcdCdQcmV2aWV3IHVzaW5nIHRoaXMgdmFyaWFudDogJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmV2aWV3IHVzaW5nIHRoaXMgdmFyaWFudDogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S9v+eUqOivpeWPmOS9k+aYvuekuumihOiniO+8micsXG5cdFx0XHQnemgtaGFudCc6ICfkvb/nlKjoqbLororpq5Tpoa/npLrpoJDopr3vvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuKGZ1bmN0aW9uIHByZXZpZXdXaXRoVmFyaWFudHMoKTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzV2lraUVkaXRvcigkZWRpdEZvcm0pO1xuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTs7QUNDZCxJQUFBQyxxQkFBb0JDLFFBQUEsaUJBQUE7O0FDRnBCLElBQU1DLFdBR0EsQ0FDTDtFQUNDQyxNQUFNO0VBQ05DLE9BQU9DLE9BQU9DLE1BQU0sT0FBTyxLQUFLO0FBQ2pDLEdBQ0E7RUFDQ0gsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FB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T0FBTztNQUFDb0IsT0FBT3JCO01BQU1DO0lBQUssRUFBRTtJQUNoRTBDLGVBQWVlLFdBQVcsb0NBQW9DO0lBQzlEYixhQUFhYSxXQUFXLDhCQUE4QjtJQUN0RHhDLGlCQUFrQlAscUJBQWtDO0FBQ25EbUQsU0FBR0MsT0FBT1EsSUFBSSxpQkFBaUI1RCxlQUFlO0lBQy9DO0VBQ0QsQ0FBQztBQUNELFFBQU0wRSxXQUFXSixJQUFJSyxNQUFNVCxJQUFJO0FBRS9CLFFBQU1VLHNCQUFzQkEsTUFBWTtBQUN2QyxVQUFNNUUsa0JBQXNDMEUsU0FBU2xFLG1CQUFtQjtBQUN4RSxVQUFNcUUsaUJBQXFDM0IsVUFBVTRCLEtBQUssUUFBUTtBQUNsRSxRQUFJOUUsbUJBQW1CNkUsZ0JBQWdCO0FBQ3RDM0IsZ0JBQVU0QixLQUNULFVBQ0EsSUFBSTVGLG1CQUFBNkYsTUFBTUYsY0FBYyxFQUN0QkcsT0FBTztRQUNQMUUsU0FBU047TUFDVixDQUFDLEVBQ0FpRixnQkFBZ0IsQ0FDbkI7SUFDRDtFQUNEO0FBRUEsUUFBTUMsMEJBQTBCQSxNQUFZO0FBQzNDL0IsT0FBR0MsT0FBT1EsSUFBSSxpQkFBaUJjLFNBQVNsRSxtQkFBbUIsS0FBTTJDLEdBQUdhLEtBQUtDLFFBQVFaLElBQUksU0FBUyxDQUFZO0VBQzNHO0FBRUFILFlBQ0VPLEtBQUssdUJBQXVCLEVBQzVCMEIsR0FBRyxTQUFTaEMsR0FBR2EsS0FBS0MsUUFBUVosSUFBSSxnQkFBZ0IsSUFBSTZCLDBCQUEwQk4sbUJBQW1CO0FBRW5HcEIsMEJBQXdCMkIsR0FBRyxTQUFTUCxtQkFBbUI7QUFDeEQ7O0NNOUVDLFNBQVNRLHNCQUE0QjtBQUNyQ2pDLEtBQUdrQyxLQUFLLG1CQUFtQixFQUFFQyxJQUFLcEMsZUFBb0I7QUFDckRELHNCQUFrQkMsU0FBUztFQUM1QixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsiY29uZmlnS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgIlZBUklBTlRTIiwgImRhdGEiLCAibGFiZWwiLCAid2luZG93IiwgIndnVUxTIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgImVuYWJsZWQiLCAicmVmIiwgImluaXRpYWxFbmFibGVkIiwgInNlbGVjdGVkVmFyaWFudCIsICJpbml0aWFsVmFyaWFudCIsICJtZW51SXRlbXMiLCAiY29tcHV0ZWQiLCAidmFyaWFudHMiLCAid2F0Y2giLCAidmFyaWFudCIsICJvblZhcmlhbnRDaGFuZ2UiLCAiZ2V0U2VsZWN0ZWRWYXJpYW50IiwgIl9zZWxlY3RlZFZhcmlhbnQkdmFsdSIsICJ2YWx1ZSIsICJfX2V4cG9zZSIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImlkIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiY3JlYXRlVk5vZGUiLCAibW9kZWxWYWx1ZSIsICIkZXZlbnQiLCAiY2xhc3MiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY2hlY2tib3hMYWJlbCIsICJfIiwgInNlbGVjdExhYmVsIiwgInNlbGVjdGVkIiwgImRpc2FibGVkIiwgIlZhcmlhbnRDb250cm9sc19kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiVmFyaWFudENvbnRyb2xzX2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2dQYWdlQ29udGVudE1vZGVsIiwgIndnVXNlclZhcmlhbnQiLCAiJHRlbXBsYXRlU2FuZGJveFByZXZpZXciLCAiZmluZCIsICJsZW5ndGgiLCAiJGxheW91dCIsICJzZXQiLCAidXJpVmFyaWFudCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAidXNlciIsICJvcHRpb25zIiwgInJvb3QiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJCb29sZWFuIiwgIm1hcCIsICJjb250cm9scyIsICJtb3VudCIsICJtYW5pcHVsYXRlQWN0aW9uVXJsIiwgIm9yaWdpbmFsQWN0aW9uIiwgImF0dHIiLCAiTXdVcmkiLCAiZXh0ZW5kIiwgImdldFJlbGF0aXZlUGF0aCIsICJtYW5pcHVsYXRlVmFyaWFudENvbmZpZyIsICJvbiIsICJwcmV2aWV3V2l0aFZhcmlhbnRzIiwgImhvb2siLCAiYWRkIl0KfQo=
