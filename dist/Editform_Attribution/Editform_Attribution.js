/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Editform_Attribution}
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

// dist/Editform_Attribution/Editform_Attribution.js
//! src/Editform_Attribution/Editform_Attribution.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/Editform_Attribution/options.json
var configKey = "gadget-Editform_Attribution__Initialized";
var configKeyVe = "gadget-Editform_Attribution__Initialized__VE";
var inputId = "editform_attribution";
var targetWikiEditor = ".editCheckboxes";
//! src/Editform_Attribution/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Add to Edit Summary": (0, import_ext_gadget.localize)({
      en: "Add to Edit Summary",
      "zh-hans": "添加至编辑摘要",
      "zh-hant": "添加至編輯摘要"
    }),
    Source: (0, import_ext_gadget.localize)({
      en: "Source",
      "zh-hans": "内容来源",
      "zh-hant": "內容來源"
    }),
    License: (0, import_ext_gadget.localize)({
      en: "License",
      "zh-hans": "许可证",
      "zh-hant": "許可證"
    }),
    "Other License": (0, import_ext_gadget.localize)({
      en: "Other license",
      "zh-hans": "其他许可证",
      "zh-hant": "其他許可證"
    }),
    "Please Claim Sources and Licenses": (0, import_ext_gadget.localize)({
      en: "If edit content adds any third-party content, please add the source and license of the third-party content separately to the editing summary.",
      "zh-hans": "若您向编辑内容中添加了第三方撰写的内容，请将相关第三方内容的来源、许可条款在编辑摘要中分条声明",
      "zh-hant": "若您向編輯內容中添加了第三方撰写的內容，請將相关第三方內容的來源、許可條款在編輯摘要中分條聲明"
    }),
    "Replace With License": (0, import_ext_gadget.localize)({
      en: " (Replace with license name and URL)",
      "zh-hans": "（请替换为许可证名称和网址）",
      "zh-hant": "（請替換爲許可證名稱和網址）"
    }),
    "Please replace placeholder with actual license": (0, import_ext_gadget.localize)({
      en: "Please replace placeholder with actual license.",
      "zh-hans": "请将占位符替换为实际许可证。",
      "zh-hant": "請將占位符替換爲實際許可證。"
    }),
    "License is missing": (0, import_ext_gadget.localize)({
      en: "License is missing!",
      "zh-hans": "请选择对应的许可证！",
      "zh-hant": "請選擇對應的許可證！"
    }),
    "Source is missing": (0, import_ext_gadget.localize)({
      en: "Source is missing!",
      "zh-hans": "请填写对应的来源！",
      "zh-hant": "請填寫對應的來源！"
    }),
    "Both source and License are missing": (0, import_ext_gadget.localize)({
      en: "Both source and License are missing!",
      "zh-hans": "请填写对应的来源，并选择对应的许可证！",
      "zh-hant": "請填寫對應的來源，並選擇對應的許可證！"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Editform_Attribution/modules/constant.ts
var {
  wgNamespaceIds
} = mw.config.get();
var LICENSES = [{
  label: "CC BY-SA 4.0",
  data: "cc-by-sa:4.0"
}, {
  label: "CC BY-SA 3.0",
  data: "cc-by-sa:3.0"
}, {
  label: "CC BY-SA 3.0 CN",
  data: "cc-by-sa:3.0/cn"
}, {
  label: "CC BY 4.0",
  data: "cc-by:4.0"
}, {
  label: "CC BY 3.0",
  data: "cc-by:3.0"
}, {
  label: "CC BY 3.0 CN",
  data: "cc-by:3.0/cn"
}, {
  label: "CC0-1.0",
  data: "cc-zero:1.0"
}, {
  label: "KOGL Type I: Attribution",
  data: "https://www.kogl.or.kr/info/licenseType1.do"
}, {
  label: getMessage("Other License"),
  data: getMessage("Replace With License")
}];
var VALID_INTERWIKI_PREFIX = ["cc-by", "cc-by-sa", "cc-zero", "cc0", "commons", "enwiki", "incubator", "incubator-wp-mnc", "incubator-wt-mnc", "iso639-3", "lexemes", "licence", "licencewiki", "license", "login", "loginqiuwenbaike", "loginwiki", "mediawikiwiki", "mozillawiki", "mw", "oldwikisource", "pmid", "qiuwenbaike", "rev", "testwikidata", "v", "voy", "wiki", "wikibooks", "wikidata", "wikifunctions", "wikinews", "wikipedia", "wikiquote", "wikisource", "wikiversity", "wikivoyage", "wikt", "wiktionary", "zhqiuwenbaike", "zhwiki", "zhwikisource", "zhwikivoyage"];
var VALID_INTERNAL_PREFIX = [];
for (_i = 0, _Object$entries = Object.entries(wgNamespaceIds); _i < _Object$entries.length; _i++) {
  const [namespaceName, id] = _Object$entries[_i];
  if (id === 0) {
    continue;
  }
  VALID_INTERNAL_PREFIX[VALID_INTERNAL_PREFIX.length] = namespaceName;
}
var _i;
var _Object$entries;
//! src/Editform_Attribution/modules/util/getLink.ts
var escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var createPrefixRegex = (prefixes) => new RegExp("^:?(?:".concat(prefixes.map(escapeRegex).join("|"), "):"), "i");
var VALID_INTERWIKI_LINK_REGEX = createPrefixRegex(VALID_INTERWIKI_PREFIX);
var VALID_INTERNAL_PREFIX_REGEX = createPrefixRegex(VALID_INTERNAL_PREFIX);
var getLink = ({
  link,
  text
}) => {
  if ([getMessage("Replace With License"), getMessage("Other License")].includes(link) || text && [getMessage("Replace With License"), getMessage("Other License")].includes(text)) {
    return getMessage("Replace With License");
  }
  if (link.startsWith("[[") && link.endsWith("]]")) {
    return link;
  }
  if (link.startsWith("http://") || link.startsWith("https://")) {
    return "[".concat(encodeURI(decodeURI(link)), " ]");
  }
  if (VALID_INTERWIKI_LINK_REGEX.test(link)) {
    link = ":".concat(link.replace(/^:/, ""));
    if (text) {
      return "[[".concat(link, "|").concat(text, "]]");
    }
    return "[[".concat(link, "]]");
  }
  if (VALID_INTERNAL_PREFIX_REGEX.test(link)) {
    link = ":".concat(link.replace(/^:/, ""));
    if (text) {
      return "[[".concat(link, "|").concat(text, "]]");
    }
    return "[[".concat(link, "]]");
  }
  return link;
};
//! src/Editform_Attribution/modules/util/getLicense.ts
var getLicense = (license) => {
  const selected = LICENSES.find(({
    data
  }) => data === license);
  return selected ? getLink({
    link: selected.data,
    text: selected.label
  }) : "";
};
var updateWpLicense = ({
  $body,
  license
}) => {
  let $wpLicense = $body.find("input[name=wpLicense]");
  if (!$wpLicense.length) {
    $wpLicense = $("<input>").attr({
      id: "wpLicense",
      name: "wpLicense",
      type: "hidden",
      value: ""
    }).prependTo($body);
  }
  $wpLicense.val(getLicense(license));
};
//! src/Editform_Attribution/modules/util/getSource.ts
var getSource = (source) => source ? getLink({
  link: source
}) : "";
var updateWpSource = ({
  $body,
  source
}) => {
  let $wpSource = $body.find("input[name=wpSource]");
  if (!$wpSource.length) {
    $wpSource = $("<input>").attr({
      id: "wpSource",
      name: "wpSource",
      type: "hidden",
      value: ""
    }).prependTo($body);
  }
  $wpSource.val(getSource(source));
};
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
var AttributionForm_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "AttributionForm",
  props: {
    onChange: {
      type: Function,
      required: true
    },
    onAdd: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const source = (0, import_vue2.ref)("");
    const license = (0, import_vue2.ref)(null);
    const licenseItems = (0, import_vue2.computed)(() => LICENSES.map(({
      data,
      label
    }) => ({
      value: data,
      label
    })));
    (0, import_vue2.watch)([source, license], ([newSource, newLicense]) => {
      props.onChange(newSource, newLicense !== null && newLicense !== void 0 ? newLicense : "");
    });
    const addToSummary = () => {
      var _license$value;
      if (props.onAdd(source.value, (_license$value = license.value) !== null && _license$value !== void 0 ? _license$value : "")) {
        source.value = "";
        license.value = null;
      }
    };
    const __returned__ = {
      props,
      source,
      license,
      licenseItems,
      addToSummary,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxField() {
        return import_codex.CdxField;
      },
      get CdxSelect() {
        return import_codex.CdxSelect;
      },
      get CdxTextInput() {
        return import_codex.CdxTextInput;
      },
      get getMessage() {
        return getMessage;
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
  class: "editform-attribution"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("fieldset", _hoisted_1, [(0, import_vue3.createElementVNode)(
    "legend",
    null,
    (0, import_vue3.toDisplayString)($setup.getMessage("Please Claim Sources and Licenses")),
    1
    /* TEXT */
  ), (0, import_vue3.createVNode)($setup["CdxField"], null, {
    label: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.getMessage("Source")),
      1
      /* TEXT */
    )]),
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxTextInput"], {
      modelValue: $setup.source,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.source = $event),
      placeholder: $setup.getMessage("Source")
    }, null, 8, ["modelValue", "placeholder"])]),
    _: 1
    /* STABLE */
  }), (0, import_vue3.createVNode)($setup["CdxField"], null, {
    label: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.getMessage("License")),
      1
      /* TEXT */
    )]),
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxSelect"], {
      selected: $setup.license,
      "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.license = $event),
      "menu-items": $setup.licenseItems,
      "default-label": $setup.getMessage("License")
    }, null, 8, ["selected", "menu-items", "default-label"])]),
    _: 1
    /* STABLE */
  }), (0, import_vue3.createVNode)($setup["CdxButton"], {
    type: "button",
    weight: "primary",
    onClick: $setup.addToSummary
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.getMessage("Add to Edit Summary")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  })]);
}
//! src/Editform_Attribution/modules/AttributionForm.vue
AttributionForm_default.render = render;
AttributionForm_default.__file = "src\\Editform_Attribution\\modules\\AttributionForm.vue";
AttributionForm_default.__scopeId = "data-v-87a8a10e";
var AttributionForm_default2 = AttributionForm_default;
//! src/Editform_Attribution/modules/util/appendTextToSummary.ts
var appendTextToSummary = ({
  customSummary,
  $wpSummary
}) => {
  var _$wpSummary$val;
  const originSummary = (_$wpSummary$val = $wpSummary.val()) !== null && _$wpSummary$val !== void 0 ? _$wpSummary$val : "";
  $wpSummary.val(originSummary.trim() ? "".concat(originSummary, " ").concat(customSummary) : customSummary);
};
//! src/Editform_Attribution/modules/util/mountAttributionForm.ts
var import_vue4 = require("vue");
var import_ext_gadget2 = require("ext.gadget.Util");
var mountAttributionForm = ({
  root,
  $body,
  $wpSummary
}) => {
  const updateHiddenFields = (source, license) => {
    updateWpSource({
      $body,
      source
    });
    updateWpLicense({
      $body,
      license
    });
  };
  (0, import_vue4.createApp)(AttributionForm_default2, {
    onChange: updateHiddenFields,
    onAdd: (source, license) => {
      updateHiddenFields(source, license);
      const wpSource = getSource(source);
      const wpLicense = getLicense(license);
      if (wpSource.length && wpLicense.length) {
        const attribution = "".concat(getMessage("Source"), ": ").concat(wpSource, " (").concat(getMessage("License"), ": ").concat(wpLicense, ") ");
        if ([getMessage("Replace With License"), getMessage("Other License")].includes(wpLicense)) {
          void (0, import_ext_gadget2.oouiConfirmWithStyle)(getMessage("Please replace placeholder with actual license"));
        }
        appendTextToSummary({
          customSummary: "[".concat(attribution, "]"),
          $wpSummary
        });
        return true;
      }
      if (!wpSource.length && wpLicense.length) {
        void (0, import_ext_gadget2.oouiConfirmWithStyle)(getMessage("Source is missing"));
      } else if (wpSource.length && !wpLicense.length) {
        void (0, import_ext_gadget2.oouiConfirmWithStyle)(getMessage("License is missing"));
      } else {
        void (0, import_ext_gadget2.oouiConfirmWithStyle)(getMessage("Both source and License are missing"));
      }
      return false;
    }
  }).mount(root);
};
//! src/Editform_Attribution/modules/processVisualEditor.ts
var processVisualEditor = ({
  $body
}) => {
  if (mw.config.get(configKeyVe)) {
    return;
  }
  const {
    target
  } = window.ve.init;
  const {
    saveDialog
  } = target;
  const {
    $saveOptions
  } = saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  mw.config.set(configKeyVe, true);
  if (!$body.find("#".concat(inputId)).length) {
    const root = document.createElement("div");
    root.id = inputId;
    $saveOptions.append(root);
    mountAttributionForm({
      root,
      $body,
      $wpSummary: target.saveDialog.editSummaryInput.$input
    });
  }
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKeyVe)) {
      mw.config.set(configKeyVe, false);
    }
  });
};
//! src/Editform_Attribution/modules/processWikiEditor.ts
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
  if (!$body.find("#".concat(inputId)).length) {
    const root = document.createElement("div");
    root.id = inputId;
    $target.after(root);
    mountAttributionForm({
      root,
      $body,
      $wpSummary: $editForm.find("input[name=wpSummary]")
    });
  }
};
//! src/Editform_Attribution/Editform_Attribution.ts
void (0, import_ext_gadget3.getBody)().then(function editForm($body) {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor({
      $body,
      $editForm
    });
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor({
      $body
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldExpbmsudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZXRMaWNlbnNlLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0U291cmNlLnRzIiwgImRpc3QvRWRpdGZvcm1fQXR0cmlidXRpb24vc3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvQXR0cmlidXRpb25Gb3JtLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcRWRpdGZvcm1fQXR0cmlidXRpb25cXG1vZHVsZXNcXEF0dHJpYnV0aW9uRm9ybS52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9BdHRyaWJ1dGlvbkZvcm0udnVlIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvYXBwZW5kVGV4dFRvU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL21vdW50QXR0cmlidXRpb25Gb3JtLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g56ys5LiJ5pa55p2l5rqQ54m55q6K5aOw5piOXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzV2lraUVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHRcdCRlZGl0Rm9ybSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoeyRib2R5fSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BdHRyaWJ1dGlvbl9fSW5pdGlhbGl6ZWRcIixcblx0XCJjb25maWdLZXlWZVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BdHRyaWJ1dGlvbl9fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlc1wiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdBZGQgdG8gRWRpdCBTdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQgdG8gRWRpdCBTdW1tYXJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+a3u+WKoOiHs+e8lui+keaRmOimgScsXG5cdFx0XHQnemgtaGFudCc6ICfmt7vliqDoh7Pnt6jovK/mkZjopoEnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdGhlciBsaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7luiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5boqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIGVkaXQgY29udGVudCBhZGRzIGFueSB0aGlyZC1wYXJ0eSBjb250ZW50LCBwbGVhc2UgYWRkIHRoZSBzb3VyY2UgYW5kIGxpY2Vuc2Ugb2YgdGhlIHRoaXJkLXBhcnR5IGNvbnRlbnQgc2VwYXJhdGVseSB0byB0aGUgZWRpdGluZyBzdW1tYXJ5LicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmgqjlkJHnvJbovpHlhoXlrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhoXlrrnvvIzor7flsIbnm7jlhbPnrKzkuInmlrnlhoXlrrnnmoTmnaXmupDjgIHorrjlj6/mnaHmrL7lnKjnvJbovpHmkZjopoHkuK3liIbmnaHlo7DmmI4nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Iul5oKo5ZCR57eo6Lyv5YWn5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YWn5a6577yM6KuL5bCH55u45YWz56ys5LiJ5pa55YWn5a6555qE5L6G5rqQ44CB6Kix5Y+v5qKd5qy+5Zyo57eo6Lyv5pGY6KaB5Lit5YiG5qKd6IGy5piOJyxcblx0XHR9KSxcblx0XHQnUmVwbGFjZSBXaXRoIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoUmVwbGFjZSB3aXRoIGxpY2Vuc2UgbmFtZSBhbmQgVVJMKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvIjor7fmm7/mjaLkuLrorrjlj6/or4HlkI3np7DlkoznvZHlnYDvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yI6KuL5pu/5o+b54iy6Kix5Y+v6K2J5ZCN56ix5ZKM57ay5Z2A77yJJyxcblx0XHR9KSxcblx0XHQnUGxlYXNlIHJlcGxhY2UgcGxhY2Vob2xkZXIgd2l0aCBhY3R1YWwgbGljZW5zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHJlcGxhY2UgcGxhY2Vob2xkZXIgd2l0aCBhY3R1YWwgbGljZW5zZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35bCG5Y2g5L2N56ym5pu/5o2i5Li65a6e6ZmF6K645Y+v6K+B44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+Wwh+WNoOS9jeespuabv+aPm+eIsuWvpumam+ioseWPr+itieOAgicsXG5cdFx0fSksXG5cdFx0J0xpY2Vuc2UgaXMgbWlzc2luZyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZSBpcyBtaXNzaW5nIScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fpgInmi6nlr7nlupTnmoTorrjlj6/or4HvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6YG45pOH5bCN5oeJ55qE6Kix5Y+v6K2J77yBJyxcblx0XHR9KSxcblx0XHQnU291cmNlIGlzIG1pc3NpbmcnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZSBpcyBtaXNzaW5nIScsXG5cdFx0XHQnemgtaGFucyc6ICfor7floavlhpnlr7nlupTnmoTmnaXmupDvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5aGr5a+r5bCN5oeJ55qE5L6G5rqQ77yBJyxcblx0XHR9KSxcblx0XHQnQm90aCBzb3VyY2UgYW5kIExpY2Vuc2UgYXJlIG1pc3NpbmcnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JvdGggc291cmNlIGFuZCBMaWNlbnNlIGFyZSBtaXNzaW5nIScsXG5cdFx0XHQnemgtaGFucyc6ICfor7floavlhpnlr7nlupTnmoTmnaXmupDvvIzlubbpgInmi6nlr7nlupTnmoTorrjlj6/or4HvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5aGr5a+r5bCN5oeJ55qE5L6G5rqQ77yM5Lim6YG45pOH5bCN5oeJ55qE6Kix5Y+v6K2J77yBJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VJZHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnk6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2NjLXplcm86MS4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpLFxuXHRcdGRhdGE6IGdldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksXG5cdH0sXG5dO1xuXG5jb25zdCBWQUxJRF9JTlRFUldJS0lfUFJFRklYID0gW1xuXHQnY2MtYnknLFxuXHQnY2MtYnktc2EnLFxuXHQnY2MtemVybycsXG5cdCdjYzAnLFxuXHQnY29tbW9ucycsXG5cdCdlbndpa2knLFxuXHQnaW5jdWJhdG9yJyxcblx0J2luY3ViYXRvci13cC1tbmMnLFxuXHQnaW5jdWJhdG9yLXd0LW1uYycsXG5cdCdpc282MzktMycsXG5cdCdsZXhlbWVzJyxcblx0J2xpY2VuY2UnLFxuXHQnbGljZW5jZXdpa2knLFxuXHQnbGljZW5zZScsXG5cdCdsb2dpbicsXG5cdCdsb2dpbnFpdXdlbmJhaWtlJyxcblx0J2xvZ2lud2lraScsXG5cdCdtZWRpYXdpa2l3aWtpJyxcblx0J21vemlsbGF3aWtpJyxcblx0J213Jyxcblx0J29sZHdpa2lzb3VyY2UnLFxuXHQncG1pZCcsXG5cdCdxaXV3ZW5iYWlrZScsXG5cdCdyZXYnLFxuXHQndGVzdHdpa2lkYXRhJyxcblx0J3YnLFxuXHQndm95Jyxcblx0J3dpa2knLFxuXHQnd2lraWJvb2tzJyxcblx0J3dpa2lkYXRhJyxcblx0J3dpa2lmdW5jdGlvbnMnLFxuXHQnd2lraW5ld3MnLFxuXHQnd2lraXBlZGlhJyxcblx0J3dpa2lxdW90ZScsXG5cdCd3aWtpc291cmNlJyxcblx0J3dpa2l2ZXJzaXR5Jyxcblx0J3dpa2l2b3lhZ2UnLFxuXHQnd2lrdCcsXG5cdCd3aWt0aW9uYXJ5Jyxcblx0J3pocWl1d2VuYmFpa2UnLFxuXHQnemh3aWtpJyxcblx0J3pod2lraXNvdXJjZScsXG5cdCd6aHdpa2l2b3lhZ2UnLFxuXTtcblxuY29uc3QgVkFMSURfSU5URVJOQUxfUFJFRklYOiBzdHJpbmdbXSA9IFtdO1xuXG5mb3IgKGNvbnN0IFtuYW1lc3BhY2VOYW1lLCBpZF0gb2YgT2JqZWN0LmVudHJpZXMod2dOYW1lc3BhY2VJZHMpKSB7XG5cdGlmIChpZCA9PT0gMCkge1xuXHRcdGNvbnRpbnVlO1xuXHR9XG5cdFZBTElEX0lOVEVSTkFMX1BSRUZJWFtWQUxJRF9JTlRFUk5BTF9QUkVGSVgubGVuZ3RoXSA9IG5hbWVzcGFjZU5hbWU7XG59XG5cbmV4cG9ydCB7TElDRU5TRVMsIFZBTElEX0lOVEVSV0lLSV9QUkVGSVgsIFZBTElEX0lOVEVSTkFMX1BSRUZJWH07XG4iLCAiaW1wb3J0IHtWQUxJRF9JTlRFUk5BTF9QUkVGSVgsIFZBTElEX0lOVEVSV0lLSV9QUkVGSVh9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGVzY2FwZVJlZ2V4ID0gKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgPT4gdmFsdWUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbmNvbnN0IGNyZWF0ZVByZWZpeFJlZ2V4ID0gKHByZWZpeGVzOiBzdHJpbmdbXSk6IFJlZ0V4cCA9PlxuXHRuZXcgUmVnRXhwKGBeOj8oPzoke3ByZWZpeGVzLm1hcChlc2NhcGVSZWdleCkuam9pbignfCcpfSk6YCwgJ2knKTtcbmNvbnN0IFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYID0gY3JlYXRlUHJlZml4UmVnZXgoVkFMSURfSU5URVJXSUtJX1BSRUZJWCk7XG5jb25zdCBWQUxJRF9JTlRFUk5BTF9QUkVGSVhfUkVHRVggPSBjcmVhdGVQcmVmaXhSZWdleChWQUxJRF9JTlRFUk5BTF9QUkVGSVgpO1xuXG5jb25zdCBnZXRMaW5rID0gKHtsaW5rLCB0ZXh0fToge2xpbms6IHN0cmluZzsgdGV4dD86IHN0cmluZ30pOiBzdHJpbmcgPT4ge1xuXHQvLyDlvZPorrjlj6/or4HpgInmi6nigJzoh6rlrprkuYnigJ3vvIzov5Tlm57ljaDkvY3nrKZcblx0aWYgKFxuXHRcdFtnZXRNZXNzYWdlKCdSZXBsYWNlIFdpdGggTGljZW5zZScpLCBnZXRNZXNzYWdlKCdPdGhlciBMaWNlbnNlJyldLmluY2x1ZGVzKGxpbmspIHx8XG5cdFx0KHRleHQgJiYgW2dldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksIGdldE1lc3NhZ2UoJ090aGVyIExpY2Vuc2UnKV0uaW5jbHVkZXModGV4dCkpXG5cdCkge1xuXHRcdHJldHVybiBnZXRNZXNzYWdlKCdSZXBsYWNlIFdpdGggTGljZW5zZScpO1xuXHR9XG5cblx0Ly8g5b2T6ZO+5o6l5pys6Lqr5bCx5piv5pyJ5pWI55qE5YaF6YOo6ZO+5o6l77yM5L2G5LiN5pivSW50ZXJ3aWtp6ZO+5o6l5pe2XG5cdGlmIChsaW5rLnN0YXJ0c1dpdGgoJ1tbJykgJiYgbGluay5lbmRzV2l0aCgnXV0nKSkge1xuXHRcdHJldHVybiBsaW5rO1xuXHR9XG5cblx0Ly8g5b2T6ZO+5o6l5pys6Lqr5bCx5piv5pyJ5pWI55qEVVJM5pe2XG5cdGlmIChsaW5rLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKSB8fCBsaW5rLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcblx0XHRyZXR1cm4gYFske2VuY29kZVVSSShkZWNvZGVVUkkobGluaykpfSBdYDsgLy8g5b2T6ZO+5o6l5LiN5piv5pyJ5pWI55qESW50ZXJ3aWtp6ZO+5o6l5pe277yM6L+U5Zue57yW56CB5ZCO55qE6ZO+5o6lXG5cdH1cblxuXHRpZiAoVkFMSURfSU5URVJXSUtJX0xJTktfUkVHRVgudGVzdChsaW5rKSkge1xuXHRcdGxpbmsgPSBgOiR7bGluay5yZXBsYWNlKC9eOi8sICcnKX1gOyAvLyDlpoLmnpzpk77mjqXmmK/mnInmlYjnmoRJbnRlcndpa2npk77mjqXvvIzliJnlnKjlvIDlpLTmt7vliqDlhpLlj7fku6XpmLLmraLlroPooqvop6PmnpDkuLrlhoXpg6jpk77mjqVcblx0XHRpZiAodGV4dCkge1xuXHRcdFx0cmV0dXJuIGBbWyR7bGlua318JHt0ZXh0fV1dYDtcblx0XHR9XG5cdFx0cmV0dXJuIGBbWyR7bGlua31dXWA7XG5cdH1cblxuXHRpZiAoVkFMSURfSU5URVJOQUxfUFJFRklYX1JFR0VYLnRlc3QobGluaykpIHtcblx0XHRsaW5rID0gYDoke2xpbmsucmVwbGFjZSgvXjovLCAnJyl9YDsgLy8g5aaC5p6c6ZO+5o6l5piv5pyJ5pWI55qE5YaF6YOo6ZO+5o6l77yM5YiZ5Zyo5byA5aS05re75Yqg5YaS5Y+35Lul6Ziy5q2i5a6D6KKr6Kej5p6Q5Li65YaF6YOo6ZO+5o6lXG5cdFx0aWYgKHRleHQpIHtcblx0XHRcdHJldHVybiBgW1ske2xpbmt9fCR7dGV4dH1dXWA7XG5cdFx0fVxuXHRcdHJldHVybiBgW1ske2xpbmt9XV1gO1xuXHR9XG5cblx0cmV0dXJuIGxpbms7IC8vIOW9k+mTvuaOpeS4jeaYr+mTvuaOpeaXtu+8jOi/lOWbnuWOn+aWh1xufTtcblxuZXhwb3J0IHtnZXRMaW5rfTtcbiIsICJpbXBvcnQge0xJQ0VOU0VTfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQge2dldExpbmt9IGZyb20gJy4vZ2V0TGluayc7XG5cbmNvbnN0IGdldExpY2Vuc2UgPSAobGljZW5zZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Y29uc3Qgc2VsZWN0ZWQgPSBMSUNFTlNFUy5maW5kKCh7ZGF0YX0pID0+IGRhdGEgPT09IGxpY2Vuc2UpO1xuXHRyZXR1cm4gc2VsZWN0ZWQgPyBnZXRMaW5rKHtsaW5rOiBzZWxlY3RlZC5kYXRhLCB0ZXh0OiBzZWxlY3RlZC5sYWJlbH0pIDogJyc7XG59O1xuXG5jb25zdCB1cGRhdGVXcExpY2Vuc2UgPSAoeyRib2R5LCBsaWNlbnNlfTogeyRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBsaWNlbnNlOiBzdHJpbmd9KTogdm9pZCA9PiB7XG5cdGxldCAkd3BMaWNlbnNlID0gJGJvZHkuZmluZDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cExpY2Vuc2VdJyk7XG5cdGlmICghJHdwTGljZW5zZS5sZW5ndGgpIHtcblx0XHQkd3BMaWNlbnNlID0gJDxIVE1MSW5wdXRFbGVtZW50PignPGlucHV0PicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGlkOiAnd3BMaWNlbnNlJyxcblx0XHRcdFx0bmFtZTogJ3dwTGljZW5zZScsXG5cdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR9KVxuXHRcdFx0LnByZXBlbmRUbygkYm9keSk7XG5cdH1cblx0JHdwTGljZW5zZS52YWwoZ2V0TGljZW5zZShsaWNlbnNlKSk7XG59O1xuXG5leHBvcnQge2dldExpY2Vuc2UsIHVwZGF0ZVdwTGljZW5zZX07XG4iLCAiaW1wb3J0IHtnZXRMaW5rfSBmcm9tICcuL2dldExpbmsnO1xuXG5jb25zdCBnZXRTb3VyY2UgPSAoc291cmNlOiBzdHJpbmcpOiBzdHJpbmcgPT4gKHNvdXJjZSA/IGdldExpbmsoe2xpbms6IHNvdXJjZX0pIDogJycpO1xuXG5jb25zdCB1cGRhdGVXcFNvdXJjZSA9ICh7JGJvZHksIHNvdXJjZX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjsgc291cmNlOiBzdHJpbmd9KTogdm9pZCA9PiB7XG5cdGxldCAkd3BTb3VyY2UgPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwU291cmNlXScpO1xuXHRpZiAoISR3cFNvdXJjZS5sZW5ndGgpIHtcblx0XHQkd3BTb3VyY2UgPSAkPEhUTUxJbnB1dEVsZW1lbnQ+KCc8aW5wdXQ+Jylcblx0XHRcdC5hdHRyKHtcblx0XHRcdFx0aWQ6ICd3cFNvdXJjZScsXG5cdFx0XHRcdG5hbWU6ICd3cFNvdXJjZScsXG5cdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHR2YWx1ZTogJycsXG5cdFx0XHR9KVxuXHRcdFx0LnByZXBlbmRUbygkYm9keSk7XG5cdH1cblx0JHdwU291cmNlLnZhbChnZXRTb3VyY2Uoc291cmNlKSk7XG59O1xuXG5leHBvcnQge2dldFNvdXJjZSwgdXBkYXRlV3BTb3VyY2V9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RmllbGQsIENkeFNlbGVjdCwgQ2R4VGV4dElucHV0fSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge0xJQ0VOU0VTfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG9uQ2hhbmdlOiAoc291cmNlOiBzdHJpbmcsIGxpY2Vuc2U6IHN0cmluZykgPT4gdm9pZDtcblx0b25BZGQ6IChzb3VyY2U6IHN0cmluZywgbGljZW5zZTogc3RyaW5nKSA9PiBib29sZWFuO1xufT4oKTtcblxuY29uc3Qgc291cmNlID0gcmVmKCcnKTtcbmNvbnN0IGxpY2Vuc2UgPSByZWY8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5jb25zdCBsaWNlbnNlSXRlbXMgPSBjb21wdXRlZCgoKSA9PiBMSUNFTlNFUy5tYXAoKHtkYXRhLCBsYWJlbH0pID0+ICh7dmFsdWU6IGRhdGEsIGxhYmVsfSkpKTtcblxud2F0Y2goW3NvdXJjZSwgbGljZW5zZV0sIChbbmV3U291cmNlLCBuZXdMaWNlbnNlXSkgPT4ge1xuXHRwcm9wcy5vbkNoYW5nZShuZXdTb3VyY2UsIG5ld0xpY2Vuc2UgPz8gJycpO1xufSk7XG5cbmNvbnN0IGFkZFRvU3VtbWFyeSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKHByb3BzLm9uQWRkKHNvdXJjZS52YWx1ZSwgbGljZW5zZS52YWx1ZSA/PyAnJykpIHtcblx0XHRzb3VyY2UudmFsdWUgPSAnJztcblx0XHRsaWNlbnNlLnZhbHVlID0gbnVsbDtcblx0fVxufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxmaWVsZHNldCBjbGFzcz1cImVkaXRmb3JtLWF0dHJpYnV0aW9uXCI+XG5cdFx0PGxlZ2VuZD57eyBnZXRNZXNzYWdlKCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnKSB9fTwvbGVnZW5kPlxuXHRcdDxjZHgtZmllbGQ+XG5cdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPnt7IGdldE1lc3NhZ2UoJ1NvdXJjZScpIH19PC90ZW1wbGF0ZT5cblx0XHRcdDxjZHgtdGV4dC1pbnB1dCB2LW1vZGVsPVwic291cmNlXCIgOnBsYWNlaG9sZGVyPVwiZ2V0TWVzc2FnZSgnU291cmNlJylcIiAvPlxuXHRcdDwvY2R4LWZpZWxkPlxuXHRcdDxjZHgtZmllbGQ+XG5cdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPnt7IGdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSB9fTwvdGVtcGxhdGU+XG5cdFx0XHQ8Y2R4LXNlbGVjdCB2LW1vZGVsOnNlbGVjdGVkPVwibGljZW5zZVwiIDptZW51LWl0ZW1zPVwibGljZW5zZUl0ZW1zXCIgOmRlZmF1bHQtbGFiZWw9XCJnZXRNZXNzYWdlKCdMaWNlbnNlJylcIiAvPlxuXHRcdDwvY2R4LWZpZWxkPlxuXHRcdDxjZHgtYnV0dG9uIHR5cGU9XCJidXR0b25cIiB3ZWlnaHQ9XCJwcmltYXJ5XCIgQGNsaWNrPVwiYWRkVG9TdW1tYXJ5XCI+XG5cdFx0XHR7eyBnZXRNZXNzYWdlKCdBZGQgdG8gRWRpdCBTdW1tYXJ5JykgfX1cblx0XHQ8L2NkeC1idXR0b24+XG5cdDwvZmllbGRzZXQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4uZWRpdGZvcm0tYXR0cmlidXRpb24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNXJlbTtcblx0cGFkZGluZzogMC43ODU3ZW07XG59XG5cbi5lZGl0Zm9ybS1hdHRyaWJ1dGlvbiA+IGxlZ2VuZCB7XG5cdGZsb2F0OiBsZWZ0O1xuXHR3aWR0aDogMTAwJTtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZWRpdGZvcm0tYXR0cmlidXRpb25cIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZmllbGRzZXRcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJsZWdlbmRcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnUGxlYXNlIENsYWltIFNvdXJjZXMgYW5kIExpY2Vuc2VzJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgbGFiZWw6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdTb3VyY2UnKSksIDEgLyogVEVYVCAqLylcbiAgICAgIF0pLFxuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4VGV4dElucHV0XCJdLCB7XG4gICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLnNvdXJjZSxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuc291cmNlKSA9ICRldmVudCkpLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiAkc2V0dXAuZ2V0TWVzc2FnZSgnU291cmNlJylcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcInBsYWNlaG9sZGVyXCJdKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0pLFxuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgbGFiZWw6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdMaWNlbnNlJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeFNlbGVjdFwiXSwge1xuICAgICAgICAgIHNlbGVjdGVkOiAkc2V0dXAubGljZW5zZSxcbiAgICAgICAgICBcIm9uVXBkYXRlOnNlbGVjdGVkXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgoJHNldHVwLmxpY2Vuc2UpID0gJGV2ZW50KSksXG4gICAgICAgICAgXCJtZW51LWl0ZW1zXCI6ICRzZXR1cC5saWNlbnNlSXRlbXMsXG4gICAgICAgICAgXCJkZWZhdWx0LWxhYmVsXCI6ICRzZXR1cC5nZXRNZXNzYWdlKCdMaWNlbnNlJylcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wic2VsZWN0ZWRcIiwgXCJtZW51LWl0ZW1zXCIsIFwiZGVmYXVsdC1sYWJlbFwiXSlcbiAgICAgIF0pLFxuICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICB9KSxcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgd2VpZ2h0OiBcInByaW1hcnlcIixcbiAgICAgIG9uQ2xpY2s6ICRzZXR1cC5hZGRUb1N1bW1hcnlcbiAgICB9LCB7XG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQWRkIHRvIEVkaXQgU3VtbWFyeScpKSwgMSAvKiBURVhUICovKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0pXG4gIF0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEVkaXRmb3JtX0F0dHJpYnV0aW9uXFxcXG1vZHVsZXNcXFxcQXR0cmlidXRpb25Gb3JtLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRWRpdGZvcm1fQXR0cmlidXRpb25cXFxcbW9kdWxlc1xcXFxBdHRyaWJ1dGlvbkZvcm0udnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEVkaXRmb3JtX0F0dHJpYnV0aW9uXFxcXG1vZHVsZXNcXFxcQXR0cmlidXRpb25Gb3JtLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXEVkaXRmb3JtX0F0dHJpYnV0aW9uXFxcXG1vZHVsZXNcXFxcQXR0cmlidXRpb25Gb3JtLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi04N2E4YTEwZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiY29uc3QgYXBwZW5kVGV4dFRvU3VtbWFyeSA9ICh7Y3VzdG9tU3VtbWFyeSwgJHdwU3VtbWFyeX06IHtjdXN0b21TdW1tYXJ5OiBzdHJpbmc7ICR3cFN1bW1hcnk6IEpRdWVyeX0pOiB2b2lkID0+IHtcblx0Y29uc3Qgb3JpZ2luU3VtbWFyeTogc3RyaW5nID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblxuXHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7Y3VzdG9tU3VtbWFyeX1gIDogY3VzdG9tU3VtbWFyeSk7XG59O1xuXG5leHBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9O1xuIiwgImltcG9ydCB7Z2V0TGljZW5zZSwgdXBkYXRlV3BMaWNlbnNlfSBmcm9tICcuL2dldExpY2Vuc2UnO1xuaW1wb3J0IHtnZXRTb3VyY2UsIHVwZGF0ZVdwU291cmNlfSBmcm9tICcuL2dldFNvdXJjZSc7XG5pbXBvcnQgQXR0cmlidXRpb25Gb3JtIGZyb20gJy4uL0F0dHJpYnV0aW9uRm9ybS52dWUnO1xuaW1wb3J0IHthcHBlbmRUZXh0VG9TdW1tYXJ5fSBmcm9tICcuL2FwcGVuZFRleHRUb1N1bW1hcnknO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgbW91bnRBdHRyaWJ1dGlvbkZvcm0gPSAoe1xuXHRyb290LFxuXHQkYm9keSxcblx0JHdwU3VtbWFyeSxcbn06IHtcblx0cm9vdDogSFRNTEVsZW1lbnQ7XG5cdCRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHQkd3BTdW1tYXJ5OiBKUXVlcnk7XG59KTogdm9pZCA9PiB7XG5cdGNvbnN0IHVwZGF0ZUhpZGRlbkZpZWxkcyA9IChzb3VyY2U6IHN0cmluZywgbGljZW5zZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0dXBkYXRlV3BTb3VyY2UoeyRib2R5LCBzb3VyY2V9KTtcblx0XHR1cGRhdGVXcExpY2Vuc2UoeyRib2R5LCBsaWNlbnNlfSk7XG5cdH07XG5cblx0Y3JlYXRlQXBwKEF0dHJpYnV0aW9uRm9ybSwge1xuXHRcdG9uQ2hhbmdlOiB1cGRhdGVIaWRkZW5GaWVsZHMsXG5cdFx0b25BZGQ6IChzb3VyY2U6IHN0cmluZywgbGljZW5zZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0XHR1cGRhdGVIaWRkZW5GaWVsZHMoc291cmNlLCBsaWNlbnNlKTtcblxuXHRcdFx0Y29uc3Qgd3BTb3VyY2UgPSBnZXRTb3VyY2Uoc291cmNlKTtcblx0XHRcdGNvbnN0IHdwTGljZW5zZSA9IGdldExpY2Vuc2UobGljZW5zZSk7XG5cblx0XHRcdGlmICh3cFNvdXJjZS5sZW5ndGggJiYgd3BMaWNlbnNlLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBhdHRyaWJ1dGlvbiA9IGAke2dldE1lc3NhZ2UoJ1NvdXJjZScpfTogJHt3cFNvdXJjZX0gKCR7Z2V0TWVzc2FnZSgnTGljZW5zZScpfTogJHt3cExpY2Vuc2V9KSBgO1xuXG5cdFx0XHRcdGlmIChbZ2V0TWVzc2FnZSgnUmVwbGFjZSBXaXRoIExpY2Vuc2UnKSwgZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpXS5pbmNsdWRlcyh3cExpY2Vuc2UpKSB7XG5cdFx0XHRcdFx0dm9pZCBvb3VpQ29uZmlybVdpdGhTdHlsZShnZXRNZXNzYWdlKCdQbGVhc2UgcmVwbGFjZSBwbGFjZWhvbGRlciB3aXRoIGFjdHVhbCBsaWNlbnNlJykpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXBwZW5kVGV4dFRvU3VtbWFyeSh7XG5cdFx0XHRcdFx0Y3VzdG9tU3VtbWFyeTogYFske2F0dHJpYnV0aW9ufV1gLFxuXHRcdFx0XHRcdCR3cFN1bW1hcnksXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCF3cFNvdXJjZS5sZW5ndGggJiYgd3BMaWNlbnNlLmxlbmd0aCkge1xuXHRcdFx0XHR2b2lkIG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ1NvdXJjZSBpcyBtaXNzaW5nJykpO1xuXHRcdFx0fSBlbHNlIGlmICh3cFNvdXJjZS5sZW5ndGggJiYgIXdwTGljZW5zZS5sZW5ndGgpIHtcblx0XHRcdFx0dm9pZCBvb3VpQ29uZmlybVdpdGhTdHlsZShnZXRNZXNzYWdlKCdMaWNlbnNlIGlzIG1pc3NpbmcnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ0JvdGggc291cmNlIGFuZCBMaWNlbnNlIGFyZSBtaXNzaW5nJykpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0fSkubW91bnQocm9vdCk7XG59O1xuXG5leHBvcnQge21vdW50QXR0cmlidXRpb25Gb3JtfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7bW91bnRBdHRyaWJ1dGlvbkZvcm19IGZyb20gJy4vdXRpbC9tb3VudEF0dHJpYnV0aW9uRm9ybSc7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoeyRib2R5fTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pn0pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSBzYXZlRGlhbG9nO1xuXHRpZiAoISRzYXZlT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCB0cnVlKTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cm9vdC5pZCA9IE9QVElPTlMuaW5wdXRJZDtcblx0XHQkc2F2ZU9wdGlvbnMuYXBwZW5kKHJvb3QpO1xuXHRcdG1vdW50QXR0cmlidXRpb25Gb3JtKHtcblx0XHRcdHJvb3QsXG5cdFx0XHQkYm9keSxcblx0XHRcdCR3cFN1bW1hcnk6IHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0LFxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIGZhbHNlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRWRpdGZvcm1fQXR0cmlidXRpb24vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7bW91bnRBdHRyaWJ1dGlvbkZvcm19IGZyb20gJy4vdXRpbC9tb3VudEF0dHJpYnV0aW9uRm9ybSc7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKHskYm9keSwgJGVkaXRGb3JtfTogeyRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjsgJGVkaXRGb3JtOiBKUXVlcnl9KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoT1BUSU9OUy50YXJnZXRXaWtpRWRpdG9yKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGlmICghJGJvZHkuZmluZChgIyR7T1BUSU9OUy5pbnB1dElkfWApLmxlbmd0aCkge1xuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRyb290LmlkID0gT1BUSU9OUy5pbnB1dElkO1xuXHRcdCR0YXJnZXQuYWZ0ZXIocm9vdCk7XG5cdFx0bW91bnRBdHRyaWJ1dGlvbkZvcm0oe1xuXHRcdFx0cm9vdCxcblx0XHRcdCRib2R5LFxuXHRcdFx0JHdwU3VtbWFyeTogJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtc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QWpCLE9BQWlCakMsT0FBTyxDQUFFLEVBQUV3QixRQUFRO0FBQzlDLFVBQU0yRixPQUFPZ0IsU0FBU0MsY0FBYyxLQUFLO0FBQ3pDakIsU0FBS3pGLEtBQWExQjtBQUNsQjRJLFlBQVFDLE1BQU0xQixJQUFJO0FBQ2xCRCx5QkFBcUI7TUFDcEJDO01BQ0EvRDtNQUNBd0QsWUFBWStCLFVBQVV6RixLQUFLLHVCQUF1QjtJQUNuRCxDQUFDO0VBQ0Y7QUFDRDs7QWJuQkEsTUFBQSxHQUFLdEQsbUJBQUFrSixTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBUzVGLE9BQXNDO0FBQzNFeEMsS0FBRzRILEtBQUssbUJBQW1CLEVBQUVDLElBQUtFLGVBQW9CO0FBQ3JERCxzQkFBa0I7TUFDakJ0RjtNQUNBdUY7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUVEL0gsS0FBRzRILEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRGQsd0JBQW9CO01BQUN2RTtJQUFLLENBQUM7RUFDNUIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImNvbmZpZ0tleSIsICJjb25maWdLZXlWZSIsICJpbnB1dElkIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgIlNvdXJjZSIsICJMaWNlbnNlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJ3Z05hbWVzcGFjZUlkcyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIkxJQ0VOU0VTIiwgImxhYmVsIiwgImRhdGEiLCAiVkFMSURfSU5URVJXSUtJX1BSRUZJWCIsICJWQUxJRF9JTlRFUk5BTF9QUkVGSVgiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJuYW1lc3BhY2VOYW1lIiwgImlkIiwgImVzY2FwZVJlZ2V4IiwgInZhbHVlIiwgInJlcGxhY2UiLCAiY3JlYXRlUHJlZml4UmVnZXgiLCAicHJlZml4ZXMiLCAiUmVnRXhwIiwgImNvbmNhdCIsICJtYXAiLCAiam9pbiIsICJWQUxJRF9JTlRFUldJS0lfTElOS19SRUdFWCIsICJWQUxJRF9JTlRFUk5BTF9QUkVGSVhfUkVHRVgiLCAiZ2V0TGluayIsICJsaW5rIiwgInRleHQiLCAiaW5jbHVkZXMiLCAic3RhcnRzV2l0aCIsICJlbmRzV2l0aCIsICJlbmNvZGVVUkkiLCAiZGVjb2RlVVJJIiwgInRlc3QiLCAiZ2V0TGljZW5zZSIsICJsaWNlbnNlIiwgInNlbGVjdGVkIiwgImZpbmQiLCAidXBkYXRlV3BMaWNlbnNlIiwgIiRib2R5IiwgIiR3cExpY2Vuc2UiLCAiJCIsICJhdHRyIiwgIm5hbWUiLCAidHlwZSIsICJwcmVwZW5kVG8iLCAidmFsIiwgImdldFNvdXJjZSIsICJzb3VyY2UiLCAidXBkYXRlV3BTb3VyY2UiLCAiJHdwU291cmNlIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgInJlZiIsICJsaWNlbnNlSXRlbXMiLCAiY29tcHV0ZWQiLCAid2F0Y2giLCAibmV3U291cmNlIiwgIm5ld0xpY2Vuc2UiLCAib25DaGFuZ2UiLCAiYWRkVG9TdW1tYXJ5IiwgIl9saWNlbnNlJHZhbHVlIiwgIm9uQWRkIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgIndpdGhDdHgiLCAiY3JlYXRlVGV4dFZOb2RlIiwgImRlZmF1bHQiLCAibW9kZWxWYWx1ZSIsICIkZXZlbnQiLCAicGxhY2Vob2xkZXIiLCAiXyIsICJ3ZWlnaHQiLCAib25DbGljayIsICJBdHRyaWJ1dGlvbkZvcm1fZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIkF0dHJpYnV0aW9uRm9ybV9kZWZhdWx0MiIsICJhcHBlbmRUZXh0VG9TdW1tYXJ5IiwgImN1c3RvbVN1bW1hcnkiLCAiJHdwU3VtbWFyeSIsICJfJHdwU3VtbWFyeSR2YWwiLCAib3JpZ2luU3VtbWFyeSIsICJ0cmltIiwgImltcG9ydF92dWU0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJtb3VudEF0dHJpYnV0aW9uRm9ybSIsICJyb290IiwgInVwZGF0ZUhpZGRlbkZpZWxkcyIsICJjcmVhdGVBcHAiLCAid3BTb3VyY2UiLCAid3BMaWNlbnNlIiwgImF0dHJpYnV0aW9uIiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgIm1vdW50IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAidGFyZ2V0IiwgIndpbmRvdyIsICJ2ZSIsICJpbml0IiwgInNhdmVEaWFsb2ciLCAiJHNhdmVPcHRpb25zIiwgInNldCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAiJHRhcmdldCIsICJhZnRlciIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iXQp9Cg==
