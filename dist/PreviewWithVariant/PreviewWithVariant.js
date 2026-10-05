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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yLnRzIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQvbW9kdWxlcy9jb25zdGFudC50cyIsICJkaXN0L1ByZXZpZXdXaXRoVmFyaWFudC9zcmMvUHJldmlld1dpdGhWYXJpYW50L21vZHVsZXMvVmFyaWFudENvbnRyb2xzLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcUHJldmlld1dpdGhWYXJpYW50XFxtb2R1bGVzXFxWYXJpYW50Q29udHJvbHMudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL1ZhcmlhbnRDb250cm9scy52dWUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudC9QcmV2aWV3V2l0aFZhcmlhbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtUHJldmlld1dpdGhWYXJpYW50X19Jbml0aWFsaXplZFwiXG59XG4iLCAiaW1wb3J0ICcuL3Byb2Nlc3NXaWtpRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtNd1VyaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7VkFSSUFOVFN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFZhcmlhbnRDb250cm9scyBmcm9tICcuL1ZhcmlhbnRDb250cm9scy52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bi50cyc7XG5cbmludGVyZmFjZSBWYXJpYW50Q29udHJvbHNJbnN0YW5jZSB7XG5cdGdldFNlbGVjdGVkVmFyaWFudDogKCkgPT4gc3RyaW5nIHwgdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBZGQgYSBcIlByZXZpZXcgd2l0aCB2YXJpYW50XCIgb3B0aW9uIHRvIHRoZSBlZGl0IGZvcm0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRlZGl0Rm9ybVxuICovXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlQ29udGVudE1vZGVsLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgJHRlbXBsYXRlU2FuZGJveFByZXZpZXc6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPVwid3BUZW1wbGF0ZVNhbmRib3hQcmV2aWV3XCJdJyk7XG5cblx0Ly8gSXQgaXMgcG9zc2libGUgdGhhdCBhIHVzZXIgd2FudCB0byBwcmV2aWV3IGEgcGFnZSB3aXRoIGEgbm9uLXdpa2l0ZXh0IG1vZHVsZVxuXHQvLyBEbyBub3QgcmV0dXJuIGluIHRoaXMgY2FzZVxuXHRpZiAod2dQYWdlQ29udGVudE1vZGVsICE9PSAnd2lraXRleHQnICYmICEkdGVtcGxhdGVTYW5kYm94UHJldmlldy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkbGF5b3V0OiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzIC5vby11aS1ob3Jpem9udGFsTGF5b3V0Jyk7XG5cdGlmICghJGxheW91dC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCB1cmlWYXJpYW50OiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd2YXJpYW50Jyk7XG5cdGNvbnN0IGluaXRpYWxWYXJpYW50ID0gKHdnVXNlclZhcmlhbnQgfHwgdXJpVmFyaWFudCB8fCBtdy51c2VyLm9wdGlvbnMuZ2V0KCd2YXJpYW50JykpIGFzIHN0cmluZztcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRyb290LmlkID0gJ213LWVkaXRwYWdlLXB3dic7XG5cdCRsYXlvdXQuYXBwZW5kKHJvb3QpO1xuXHRjb25zdCBhcHAgPSBjcmVhdGVBcHAoVmFyaWFudENvbnRyb2xzLCB7XG5cdFx0aW5pdGlhbEVuYWJsZWQ6IEJvb2xlYW4odXJpVmFyaWFudCksXG5cdFx0aW5pdGlhbFZhcmlhbnQsXG5cdFx0dmFyaWFudHM6IFZBUklBTlRTLm1hcCgoe2RhdGEsIGxhYmVsfSkgPT4gKHt2YWx1ZTogZGF0YSwgbGFiZWx9KSksXG5cdFx0Y2hlY2tib3hMYWJlbDogZ2V0TWVzc2FnZSgnUHJldmlldyBDaGluZXNlIHZhcmlhbnQgY29udmVyc2lvbicpLFxuXHRcdHNlbGVjdExhYmVsOiBnZXRNZXNzYWdlKCdQcmV2aWV3IHVzaW5nIHRoaXMgdmFyaWFudDogJyksXG5cdFx0b25WYXJpYW50Q2hhbmdlOiAoc2VsZWN0ZWRWYXJpYW50OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdG13LmNvbmZpZy5zZXQoJ3dnVXNlclZhcmlhbnQnLCBzZWxlY3RlZFZhcmlhbnQpO1xuXHRcdH0sXG5cdH0pO1xuXHRjb25zdCBjb250cm9scyA9IGFwcC5tb3VudChyb290KSBhcyB1bmtub3duIGFzIFZhcmlhbnRDb250cm9sc0luc3RhbmNlO1xuXG5cdGNvbnN0IG1hbmlwdWxhdGVBY3Rpb25VcmwgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0ZWRWYXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSBjb250cm9scy5nZXRTZWxlY3RlZFZhcmlhbnQoKTtcblx0XHRjb25zdCBvcmlnaW5hbEFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVkaXRGb3JtLmF0dHIoJ2FjdGlvbicpO1xuXHRcdGlmIChzZWxlY3RlZFZhcmlhbnQgJiYgb3JpZ2luYWxBY3Rpb24pIHtcblx0XHRcdCRlZGl0Rm9ybS5hdHRyKFxuXHRcdFx0XHQnYWN0aW9uJyxcblx0XHRcdFx0bmV3IE13VXJpKG9yaWdpbmFsQWN0aW9uKVxuXHRcdFx0XHRcdC5leHRlbmQoe1xuXHRcdFx0XHRcdFx0dmFyaWFudDogc2VsZWN0ZWRWYXJpYW50LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmdldFJlbGF0aXZlUGF0aCgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBtYW5pcHVsYXRlVmFyaWFudENvbmZpZyA9ICgpOiB2b2lkID0+IHtcblx0XHRtdy5jb25maWcuc2V0KCd3Z1VzZXJWYXJpYW50JywgY29udHJvbHMuZ2V0U2VsZWN0ZWRWYXJpYW50KCkgfHwgKG13LnVzZXIub3B0aW9ucy5nZXQoJ3ZhcmlhbnQnKSBhcyBzdHJpbmcpKTtcblx0fTtcblxuXHQkZWRpdEZvcm1cblx0XHQuZmluZCgnaW5wdXRbbmFtZT13cFByZXZpZXddJylcblx0XHQub24oJ2NsaWNrJywgbXcudXNlci5vcHRpb25zLmdldCgndXNlbGl2ZXByZXZpZXcnKSA/IG1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIDogbWFuaXB1bGF0ZUFjdGlvblVybCk7XG5cblx0JHRlbXBsYXRlU2FuZGJveFByZXZpZXcub24oJ2NsaWNrJywgbWFuaXB1bGF0ZUFjdGlvblVybCk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiIsICJjb25zdCBWQVJJQU5UUzoge1xuXHRkYXRhOiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG59W10gPSBbXG5cdHtcblx0XHRkYXRhOiAnemgnLFxuXHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1oYW5zJyxcblx0XHRsYWJlbDogJ+eugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGFudCcsXG5cdFx0bGFiZWw6ICfnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLWNuJyxcblx0XHRsYWJlbDogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtaGsnLFxuXHRcdGxhYmVsOiAn5Lit5ZyL6aaZ5riv57mB6auUJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC1tbycsXG5cdFx0bGFiZWw6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHR9LFxuXHR7XG5cdFx0ZGF0YTogJ3poLW15Jyxcblx0XHRsYWJlbDogJ+mprOadpeilv+S6mueugOS9kycsXG5cdH0sXG5cdHtcblx0XHRkYXRhOiAnemgtc2cnLFxuXHRcdGxhYmVsOiAn5paw5Yqg5Z2h566A5L2TJyxcblx0fSxcblx0e1xuXHRcdGRhdGE6ICd6aC10dycsXG5cdFx0bGFiZWw6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtWQVJJQU5UU307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4Q2hlY2tib3gsIENkeEZpZWxkLCBDZHhTZWxlY3QsIHR5cGUgTWVudUl0ZW1EYXRhfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRpbml0aWFsRW5hYmxlZDogYm9vbGVhbjtcblx0aW5pdGlhbFZhcmlhbnQ6IHN0cmluZztcblx0dmFyaWFudHM6IE1lbnVJdGVtRGF0YVtdO1xuXHRjaGVja2JveExhYmVsOiBzdHJpbmc7XG5cdHNlbGVjdExhYmVsOiBzdHJpbmc7XG5cdG9uVmFyaWFudENoYW5nZTogKHZhcmlhbnQ6IHN0cmluZykgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGVuYWJsZWQgPSByZWYocHJvcHMuaW5pdGlhbEVuYWJsZWQpO1xuY29uc3Qgc2VsZWN0ZWRWYXJpYW50ID0gcmVmPHN0cmluZyB8IG51bGw+KHByb3BzLmluaXRpYWxWYXJpYW50KTtcbmNvbnN0IG1lbnVJdGVtcyA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZhcmlhbnRzKTtcblxud2F0Y2goc2VsZWN0ZWRWYXJpYW50LCAodmFyaWFudCkgPT4ge1xuXHRpZiAodmFyaWFudCAhPT0gbnVsbCkge1xuXHRcdHByb3BzLm9uVmFyaWFudENoYW5nZSh2YXJpYW50KTtcblx0fVxufSk7XG5cbmNvbnN0IGdldFNlbGVjdGVkVmFyaWFudCA9ICgpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4gKGVuYWJsZWQudmFsdWUgPyAoc2VsZWN0ZWRWYXJpYW50LnZhbHVlID8/IHVuZGVmaW5lZCkgOiB1bmRlZmluZWQpO1xuXG5kZWZpbmVFeHBvc2Uoe2dldFNlbGVjdGVkVmFyaWFudH0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGRpdiBpZD1cInB3di1hcmVhXCI+XG5cdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwiZW5hYmxlZFwiIGNsYXNzPVwicHd2LXZhcmlhbnQtc3dpdGNoXCI+e3sgY2hlY2tib3hMYWJlbCB9fTwvY2R4LWNoZWNrYm94PlxuXHRcdDxjZHgtZmllbGQgY2xhc3M9XCJwd3YtdmFyaWFudC1zZWxlY3RcIj5cblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgc2VsZWN0TGFiZWwgfX08L3RlbXBsYXRlPlxuXHRcdFx0PGNkeC1zZWxlY3Qgdi1tb2RlbDpzZWxlY3RlZD1cInNlbGVjdGVkVmFyaWFudFwiIDptZW51LWl0ZW1zPVwibWVudUl0ZW1zXCIgOmRpc2FibGVkPVwiIWVuYWJsZWRcIiAvPlxuXHRcdDwvY2R4LWZpZWxkPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbiNwd3YtYXJlYSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblx0Z2FwOiAwLjc1ZW07XG5cblx0LnB3di12YXJpYW50LXN3aXRjaCxcblx0LnB3di12YXJpYW50LXNlbGVjdCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXHRcdGZsZXgtYmFzaXM6IGNvbnRlbnQ7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cblx0LmNkeC1jaGVja2JveCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGlkOiBcInB3di1hcmVhXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeENoZWNrYm94XCJdLCB7XG4gICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuZW5hYmxlZCxcbiAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5lbmFibGVkKSA9ICRldmVudCkpLFxuICAgICAgY2xhc3M6IFwicHd2LXZhcmlhbnQtc3dpdGNoXCJcbiAgICB9LCB7XG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkcHJvcHMuY2hlY2tib3hMYWJlbCksIDEgLyogVEVYVCAqLylcbiAgICAgIF0pLFxuICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCJdKSxcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIHsgY2xhc3M6IFwicHd2LXZhcmlhbnQtc2VsZWN0XCIgfSwge1xuICAgICAgbGFiZWw6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5zZWxlY3RMYWJlbCksIDEgLyogVEVYVCAqLylcbiAgICAgIF0pLFxuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4U2VsZWN0XCJdLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgXCJvblVwZGF0ZTpzZWxlY3RlZFwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpID0gJGV2ZW50KSksXG4gICAgICAgICAgXCJtZW51LWl0ZW1zXCI6ICRzZXR1cC5tZW51SXRlbXMsXG4gICAgICAgICAgZGlzYWJsZWQ6ICEkc2V0dXAuZW5hYmxlZFxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJzZWxlY3RlZFwiLCBcIm1lbnUtaXRlbXNcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgIF0pLFxuICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICB9KVxuICBdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxQcmV2aWV3V2l0aFZhcmlhbnRcXFxcbW9kdWxlc1xcXFxWYXJpYW50Q29udHJvbHMudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxQcmV2aWV3V2l0aFZhcmlhbnRcXFxcbW9kdWxlc1xcXFxWYXJpYW50Q29udHJvbHMudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFByZXZpZXdXaXRoVmFyaWFudFxcXFxtb2R1bGVzXFxcXFZhcmlhbnRDb250cm9scy52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxQcmV2aWV3V2l0aFZhcmlhbnRcXFxcbW9kdWxlc1xcXFxWYXJpYW50Q29udHJvbHMudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWYxNTM3NDdmXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1ByZXZpZXcgQ2hpbmVzZSB2YXJpYW50IGNvbnZlcnNpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1ByZXZpZXcgQ2hpbmVzZSB2YXJpYW50IGNvbnZlcnNpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn6aKE6KeI5a2X6K+N6L2s5o2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mgkOimveWtl+ipnui9ieaPmycsXG5cdFx0fSksXG5cdFx0J1ByZXZpZXcgdXNpbmcgdGhpcyB2YXJpYW50OiAnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1ByZXZpZXcgdXNpbmcgdGhpcyB2YXJpYW50OiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5L2/55So6K+l5Y+Y5L2T5pi+56S66aKE6KeI77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+S9v+eUqOipsuiuiumrlOmhr+ekuumgkOimve+8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3InO1xuXG4oZnVuY3Rpb24gcHJldmlld1dpdGhWYXJpYW50cygpOiB2b2lkIHtcblx0bXcuaG9vaygnd2lraXBhZ2UuZWRpdGZvcm0nKS5hZGQoKCRlZGl0Rm9ybSk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NXaWtpRWRpdG9yKCRlZGl0Rm9ybSk7XG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhOztBQ0NkLElBQUFDLHFCQUFvQkMsUUFBQSxpQkFBQTs7QUNGcEIsSUFBTUMsV0FHQSxDQUNMO0VBQ0NDLE1BQU07RUFDTkMsT0FBT0MsT0FBT0MsTUFBTSxPQUFPLEtBQUs7QUFDakMsR0FDQTtFQUNDSCxNQUFNO0VBQ05DLE9BQU87QUFDUixHQUNBO0VBQ0NELE1BQU07RUFDTkMsT0FBTztBQUNSLEdBQ0E7RUFDQ0QsTUFBTTtFQUNOQyxPQUFPO0FBQ1IsR0FDQTtFQUNDRCxNQUFNO0VBQ05DLE9B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SUFBSyxPQUFPO01BQUNvQixPQUFPckI7TUFBTUM7SUFBSyxFQUFFO0lBQ2hFMEMsZUFBZWUsV0FBVyxvQ0FBb0M7SUFDOURiLGFBQWFhLFdBQVcsOEJBQThCO0lBQ3REeEMsaUJBQWtCUCxxQkFBa0M7QUFDbkRtRCxTQUFHQyxPQUFPUSxJQUFJLGlCQUFpQjVELGVBQWU7SUFDL0M7RUFDRCxDQUFDO0FBQ0QsUUFBTTBFLFdBQVdKLElBQUlLLE1BQU1ULElBQUk7QUFFL0IsUUFBTVUsc0JBQXNCQSxNQUFZO0FBQ3ZDLFVBQU01RSxrQkFBc0MwRSxTQUFTbEUsbUJBQW1CO0FBQ3hFLFVBQU1xRSxpQkFBcUMzQixVQUFVNEIsS0FBSyxRQUFRO0FBQ2xFLFFBQUk5RSxtQkFBbUI2RSxnQkFBZ0I7QUFDdEMzQixnQkFBVTRCLEtBQ1QsVUFDQSxJQUFJNUYsbUJBQUE2RixNQUFNRixjQUFjLEVBQ3RCRyxPQUFPO1FBQ1AxRSxTQUFTTjtNQUNWLENBQUMsRUFDQWlGLGdCQUFnQixDQUNuQjtJQUNEO0VBQ0Q7QUFFQSxRQUFNQywwQkFBMEJBLE1BQVk7QUFDM0MvQixPQUFHQyxPQUFPUSxJQUFJLGlCQUFpQmMsU0FBU2xFLG1CQUFtQixLQUFNMkMsR0FBR2EsS0FBS0MsUUFBUVosSUFBSSxTQUFTLENBQVk7RUFDM0c7QUFFQUgsWUFDRU8sS0FBSyx1QkFBdUIsRUFDNUIwQixHQUFHLFNBQVNoQyxHQUFHYSxLQUFLQyxRQUFRWixJQUFJLGdCQUFnQixJQUFJNkIsMEJBQTBCTixtQkFBbUI7QUFFbkdwQiwwQkFBd0IyQixHQUFHLFNBQVNQLG1CQUFtQjtBQUN4RDs7Q005RUMsU0FBU1Esc0JBQTRCO0FBQ3JDakMsS0FBR2tDLEtBQUssbUJBQW1CLEVBQUVDLElBQUtwQyxlQUFvQjtBQUNyREQsc0JBQWtCQyxTQUFTO0VBQzVCLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiVkFSSUFOVFMiLCAiZGF0YSIsICJsYWJlbCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW5hYmxlZCIsICJyZWYiLCAiaW5pdGlhbEVuYWJsZWQiLCAic2VsZWN0ZWRWYXJpYW50IiwgImluaXRpYWxWYXJpYW50IiwgIm1lbnVJdGVtcyIsICJjb21wdXRlZCIsICJ2YXJpYW50cyIsICJ3YXRjaCIsICJ2YXJpYW50IiwgIm9uVmFyaWFudENoYW5nZSIsICJnZXRTZWxlY3RlZFZhcmlhbnQiLCAiX3NlbGVjdGVkVmFyaWFudCR2YWx1IiwgInZhbHVlIiwgIl9fZXhwb3NlIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiaWQiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjcmVhdGVWTm9kZSIsICJtb2RlbFZhbHVlIiwgIiRldmVudCIsICJjbGFzcyIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJjaGVja2JveExhYmVsIiwgIl8iLCAic2VsZWN0TGFiZWwiLCAic2VsZWN0ZWQiLCAiZGlzYWJsZWQiLCAiVmFyaWFudENvbnRyb2xzX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJWYXJpYW50Q29udHJvbHNfZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAid2dVc2VyVmFyaWFudCIsICIkdGVtcGxhdGVTYW5kYm94UHJldmlldyIsICJmaW5kIiwgImxlbmd0aCIsICIkbGF5b3V0IiwgInNldCIsICJ1cmlWYXJpYW50IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAicm9vdCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgIkJvb2xlYW4iLCAibWFwIiwgImNvbnRyb2xzIiwgIm1vdW50IiwgIm1hbmlwdWxhdGVBY3Rpb25VcmwiLCAib3JpZ2luYWxBY3Rpb24iLCAiYXR0ciIsICJNd1VyaSIsICJleHRlbmQiLCAiZ2V0UmVsYXRpdmVQYXRoIiwgIm1hbmlwdWxhdGVWYXJpYW50Q29uZmlnIiwgIm9uIiwgInByZXZpZXdXaXRoVmFyaWFudHMiLCAiaG9vayIsICJhZGQiXQp9Cg==
