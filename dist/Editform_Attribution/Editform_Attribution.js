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
var getLink = ({
  link,
  text
}) => {
  const VALID_INTERWIKI_LINK_REGEX = new RegExp("^:?(".concat(VALID_INTERWIKI_PREFIX.join("|"), ")"), "i");
  const VALID_INTERNAL_PREFIX_REGEX = new RegExp("^:?(".concat(VALID_INTERNAL_PREFIX.join("|"), ")"), "i");
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
  var _$body$find;
  const $wpLicense = (_$body$find = $body.find("input[name=wpLicense]")) !== null && _$body$find !== void 0 ? _$body$find : $("<input>").attr({
    id: "wpLicense",
    name: "wpLicense",
    type: "hidden",
    value: ""
  }).prependTo($body);
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
  var _$body$find2;
  const $wpSource = (_$body$find2 = $body.find("input[name=wpSource]")) !== null && _$body$find2 !== void 0 ? _$body$find2 : $("<input>").attr({
    id: "wpSource",
    name: "wpSource",
    type: "hidden",
    value: ""
  }).prependTo($body);
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
      } else if (!wpSource.length && wpLicense.length) {
        void (0, import_ext_gadget2.oouiConfirmWithStyle)(getMessage("Source is missing"));
      } else if (wpSource.length && !wpLicense.length) {
        void (0, import_ext_gadget2.oouiConfirmWithStyle)(getMessage("License is missing"));
      } else {
        void (0, import_ext_gadget2.oouiConfirmWithStyle)(getMessage("Both source and License are missing"));
      }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL0VkaXRmb3JtX0F0dHJpYnV0aW9uLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL2dldExpbmsudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvdXRpbC9nZXRMaWNlbnNlLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvZ2V0U291cmNlLnRzIiwgImRpc3QvRWRpdGZvcm1fQXR0cmlidXRpb24vc3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvQXR0cmlidXRpb25Gb3JtLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcRWRpdGZvcm1fQXR0cmlidXRpb25cXG1vZHVsZXNcXEF0dHJpYnV0aW9uRm9ybS52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy9BdHRyaWJ1dGlvbkZvcm0udnVlIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3V0aWwvYXBwZW5kVGV4dFRvU3VtbWFyeS50cyIsICJzcmMvRWRpdGZvcm1fQXR0cmlidXRpb24vbW9kdWxlcy91dGlsL21vdW50QXR0cmlidXRpb25Gb3JtLnRzIiwgInNyYy9FZGl0Zm9ybV9BdHRyaWJ1dGlvbi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiLCAic3JjL0VkaXRmb3JtX0F0dHJpYnV0aW9uL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g56ys5LiJ5pa55p2l5rqQ54m55q6K5aOw5piOXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lmhvb2soJ3dpa2lwYWdlLmVkaXRmb3JtJykuYWRkKCgkZWRpdEZvcm0pOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzV2lraUVkaXRvcih7XG5cdFx0XHQkYm9keSxcblx0XHRcdCRlZGl0Rm9ybSxcblx0XHR9KTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoeyRib2R5fSk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BdHRyaWJ1dGlvbl9fSW5pdGlhbGl6ZWRcIixcblx0XCJjb25maWdLZXlWZVwiOiBcImdhZGdldC1FZGl0Zm9ybV9BdHRyaWJ1dGlvbl9fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwiaW5wdXRJZFwiOiBcImVkaXRmb3JtX2F0dHJpYnV0aW9uXCIsXG5cdFwidGFyZ2V0V2lraUVkaXRvclwiOiBcIi5lZGl0Q2hlY2tib3hlc1wiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdBZGQgdG8gRWRpdCBTdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZGQgdG8gRWRpdCBTdW1tYXJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+a3u+WKoOiHs+e8lui+keaRmOimgScsXG5cdFx0XHQnemgtaGFudCc6ICfmt7vliqDoh7Pnt6jovK/mkZjopoEnLFxuXHRcdH0pLFxuXHRcdFNvdXJjZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb3VyY2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YaF5a655p2l5rqQJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFp+WuueS+hua6kCcsXG5cdFx0fSksXG5cdFx0TGljZW5zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICfoqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBMaWNlbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPdGhlciBsaWNlbnNlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7luiuuOWPr+ivgScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5boqLHlj6/orYknLFxuXHRcdH0pLFxuXHRcdCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0lmIGVkaXQgY29udGVudCBhZGRzIGFueSB0aGlyZC1wYXJ0eSBjb250ZW50LCBwbGVhc2UgYWRkIHRoZSBzb3VyY2UgYW5kIGxpY2Vuc2Ugb2YgdGhlIHRoaXJkLXBhcnR5IGNvbnRlbnQgc2VwYXJhdGVseSB0byB0aGUgZWRpdGluZyBzdW1tYXJ5LicsXG5cdFx0XHQnemgtaGFucyc6ICfoi6XmgqjlkJHnvJbovpHlhoXlrrnkuK3mt7vliqDkuobnrKzkuInmlrnmkrDlhpnnmoTlhoXlrrnvvIzor7flsIbnm7jlhbPnrKzkuInmlrnlhoXlrrnnmoTmnaXmupDjgIHorrjlj6/mnaHmrL7lnKjnvJbovpHmkZjopoHkuK3liIbmnaHlo7DmmI4nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Iul5oKo5ZCR57eo6Lyv5YWn5a655Lit5re75Yqg5LqG56ys5LiJ5pa55pKw5YaZ55qE5YWn5a6577yM6KuL5bCH55u45YWz56ys5LiJ5pa55YWn5a6555qE5L6G5rqQ44CB6Kix5Y+v5qKd5qy+5Zyo57eo6Lyv5pGY6KaB5Lit5YiG5qKd6IGy5piOJyxcblx0XHR9KSxcblx0XHQnUmVwbGFjZSBXaXRoIExpY2Vuc2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoUmVwbGFjZSB3aXRoIGxpY2Vuc2UgbmFtZSBhbmQgVVJMKScsXG5cdFx0XHQnemgtaGFucyc6ICfvvIjor7fmm7/mjaLkuLrorrjlj6/or4HlkI3np7DlkoznvZHlnYDvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn77yI6KuL5pu/5o+b54iy6Kix5Y+v6K2J5ZCN56ix5ZKM57ay5Z2A77yJJyxcblx0XHR9KSxcblx0XHQnUGxlYXNlIHJlcGxhY2UgcGxhY2Vob2xkZXIgd2l0aCBhY3R1YWwgbGljZW5zZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHJlcGxhY2UgcGxhY2Vob2xkZXIgd2l0aCBhY3R1YWwgbGljZW5zZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+35bCG5Y2g5L2N56ym5pu/5o2i5Li65a6e6ZmF6K645Y+v6K+B44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+Wwh+WNoOS9jeespuabv+aPm+eIsuWvpumam+ioseWPr+itieOAgicsXG5cdFx0fSksXG5cdFx0J0xpY2Vuc2UgaXMgbWlzc2luZyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGljZW5zZSBpcyBtaXNzaW5nIScsXG5cdFx0XHQnemgtaGFucyc6ICfor7fpgInmi6nlr7nlupTnmoTorrjlj6/or4HvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL6YG45pOH5bCN5oeJ55qE6Kix5Y+v6K2J77yBJyxcblx0XHR9KSxcblx0XHQnU291cmNlIGlzIG1pc3NpbmcnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NvdXJjZSBpcyBtaXNzaW5nIScsXG5cdFx0XHQnemgtaGFucyc6ICfor7floavlhpnlr7nlupTnmoTmnaXmupDvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5aGr5a+r5bCN5oeJ55qE5L6G5rqQ77yBJyxcblx0XHR9KSxcblx0XHQnQm90aCBzb3VyY2UgYW5kIExpY2Vuc2UgYXJlIG1pc3NpbmcnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JvdGggc291cmNlIGFuZCBMaWNlbnNlIGFyZSBtaXNzaW5nIScsXG5cdFx0XHQnemgtaGFucyc6ICfor7floavlhpnlr7nlupTnmoTmnaXmupDvvIzlubbpgInmi6nlr7nlupTnmoTorrjlj6/or4HvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KuL5aGr5a+r5bCN5oeJ55qE5L6G5rqQ77yM5Lim6YG45pOH5bCN5oeJ55qE6Kix5Y+v6K2J77yBJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VJZHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBMSUNFTlNFUyA9IFtcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlktU0EgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnktc2E6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgNC4wJyxcblx0XHRkYXRhOiAnY2MtYnk6NC4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MgQlkgMy4wIENOJyxcblx0XHRkYXRhOiAnY2MtYnk6My4wL2NuJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnQ0MwLTEuMCcsXG5cdFx0ZGF0YTogJ2NjLXplcm86MS4wJyxcblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnS09HTCBUeXBlIEk6IEF0dHJpYnV0aW9uJyxcblx0XHRkYXRhOiAnaHR0cHM6Ly93d3cua29nbC5vci5rci9pbmZvL2xpY2Vuc2VUeXBlMS5kbycsXG5cdH0sXG5cdHtcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpLFxuXHRcdGRhdGE6IGdldE1lc3NhZ2UoJ1JlcGxhY2UgV2l0aCBMaWNlbnNlJyksXG5cdH0sXG5dO1xuXG5jb25zdCBWQUxJRF9JTlRFUldJS0lfUFJFRklYID0gW1xuXHQnY2MtYnknLFxuXHQnY2MtYnktc2EnLFxuXHQnY2MtemVybycsXG5cdCdjYzAnLFxuXHQnY29tbW9ucycsXG5cdCdlbndpa2knLFxuXHQnaW5jdWJhdG9yJyxcblx0J2luY3ViYXRvci13cC1tbmMnLFxuXHQnaW5jdWJhdG9yLXd0LW1uYycsXG5cdCdpc282MzktMycsXG5cdCdsZXhlbWVzJyxcblx0J2xpY2VuY2UnLFxuXHQnbGljZW5jZXdpa2knLFxuXHQnbGljZW5zZScsXG5cdCdsb2dpbicsXG5cdCdsb2dpbnFpdXdlbmJhaWtlJyxcblx0J2xvZ2lud2lraScsXG5cdCdtZWRpYXdpa2l3aWtpJyxcblx0J21vemlsbGF3aWtpJyxcblx0J213Jyxcblx0J29sZHdpa2lzb3VyY2UnLFxuXHQncG1pZCcsXG5cdCdxaXV3ZW5iYWlrZScsXG5cdCdyZXYnLFxuXHQndGVzdHdpa2lkYXRhJyxcblx0J3YnLFxuXHQndm95Jyxcblx0J3dpa2knLFxuXHQnd2lraWJvb2tzJyxcblx0J3dpa2lkYXRhJyxcblx0J3dpa2lmdW5jdGlvbnMnLFxuXHQnd2lraW5ld3MnLFxuXHQnd2lraXBlZGlhJyxcblx0J3dpa2lxdW90ZScsXG5cdCd3aWtpc291cmNlJyxcblx0J3dpa2l2ZXJzaXR5Jyxcblx0J3dpa2l2b3lhZ2UnLFxuXHQnd2lrdCcsXG5cdCd3aWt0aW9uYXJ5Jyxcblx0J3pocWl1d2VuYmFpa2UnLFxuXHQnemh3aWtpJyxcblx0J3pod2lraXNvdXJjZScsXG5cdCd6aHdpa2l2b3lhZ2UnLFxuXTtcblxuY29uc3QgVkFMSURfSU5URVJOQUxfUFJFRklYOiBzdHJpbmdbXSA9IFtdO1xuXG5mb3IgKGNvbnN0IFtuYW1lc3BhY2VOYW1lLCBpZF0gb2YgT2JqZWN0LmVudHJpZXMod2dOYW1lc3BhY2VJZHMpKSB7XG5cdGlmIChpZCA9PT0gMCkge1xuXHRcdGNvbnRpbnVlO1xuXHR9XG5cdFZBTElEX0lOVEVSTkFMX1BSRUZJWFtWQUxJRF9JTlRFUk5BTF9QUkVGSVgubGVuZ3RoXSA9IG5hbWVzcGFjZU5hbWU7XG59XG5cbmV4cG9ydCB7TElDRU5TRVMsIFZBTElEX0lOVEVSV0lLSV9QUkVGSVgsIFZBTElEX0lOVEVSTkFMX1BSRUZJWH07XG4iLCAiaW1wb3J0IHtWQUxJRF9JTlRFUk5BTF9QUkVGSVgsIFZBTElEX0lOVEVSV0lLSV9QUkVGSVh9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldExpbmsgPSAoe2xpbmssIHRleHR9OiB7bGluazogc3RyaW5nOyB0ZXh0Pzogc3RyaW5nfSk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYID0gbmV3IFJlZ0V4cChgXjo/KCR7VkFMSURfSU5URVJXSUtJX1BSRUZJWC5qb2luKCd8Jyl9KWAsICdpJyk7XG5cdGNvbnN0IFZBTElEX0lOVEVSTkFMX1BSRUZJWF9SRUdFWCA9IG5ldyBSZWdFeHAoYF46Pygke1ZBTElEX0lOVEVSTkFMX1BSRUZJWC5qb2luKCd8Jyl9KWAsICdpJyk7XG5cblx0Ly8g5b2T6K645Y+v6K+B6YCJ5oup4oCc6Ieq5a6a5LmJ4oCd77yM6L+U5Zue5Y2g5L2N56ymXG5cdGlmIChcblx0XHRbZ2V0TWVzc2FnZSgnUmVwbGFjZSBXaXRoIExpY2Vuc2UnKSwgZ2V0TWVzc2FnZSgnT3RoZXIgTGljZW5zZScpXS5pbmNsdWRlcyhsaW5rKSB8fFxuXHRcdCh0ZXh0ICYmIFtnZXRNZXNzYWdlKCdSZXBsYWNlIFdpdGggTGljZW5zZScpLCBnZXRNZXNzYWdlKCdPdGhlciBMaWNlbnNlJyldLmluY2x1ZGVzKHRleHQpKVxuXHQpIHtcblx0XHRyZXR1cm4gZ2V0TWVzc2FnZSgnUmVwbGFjZSBXaXRoIExpY2Vuc2UnKTtcblx0fVxuXG5cdC8vIOW9k+mTvuaOpeacrOi6q+WwseaYr+acieaViOeahOWGhemDqOmTvuaOpe+8jOS9huS4jeaYr0ludGVyd2lraemTvuaOpeaXtlxuXHRpZiAobGluay5zdGFydHNXaXRoKCdbWycpICYmIGxpbmsuZW5kc1dpdGgoJ11dJykpIHtcblx0XHRyZXR1cm4gbGluaztcblx0fVxuXG5cdC8vIOW9k+mTvuaOpeacrOi6q+WwseaYr+acieaViOeahFVSTOaXtlxuXHRpZiAobGluay5zdGFydHNXaXRoKCdodHRwOi8vJykgfHwgbGluay5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XG5cdFx0cmV0dXJuIGBbJHtlbmNvZGVVUkkoZGVjb2RlVVJJKGxpbmspKX0gXWA7IC8vIOW9k+mTvuaOpeS4jeaYr+acieaViOeahEludGVyd2lraemTvuaOpeaXtu+8jOi/lOWbnue8lueggeWQjueahOmTvuaOpVxuXHR9XG5cblx0aWYgKFZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYLnRlc3QobGluaykpIHtcblx0XHRsaW5rID0gYDoke2xpbmsucmVwbGFjZSgvXjovLCAnJyl9YDsgLy8g5aaC5p6c6ZO+5o6l5piv5pyJ5pWI55qESW50ZXJ3aWtp6ZO+5o6l77yM5YiZ5Zyo5byA5aS05re75Yqg5YaS5Y+35Lul6Ziy5q2i5a6D6KKr6Kej5p6Q5Li65YaF6YOo6ZO+5o6lXG5cdFx0aWYgKHRleHQpIHtcblx0XHRcdHJldHVybiBgW1ske2xpbmt9fCR7dGV4dH1dXWA7XG5cdFx0fVxuXHRcdHJldHVybiBgW1ske2xpbmt9XV1gO1xuXHR9XG5cblx0aWYgKFZBTElEX0lOVEVSTkFMX1BSRUZJWF9SRUdFWC50ZXN0KGxpbmspKSB7XG5cdFx0bGluayA9IGA6JHtsaW5rLnJlcGxhY2UoL146LywgJycpfWA7IC8vIOWmguaenOmTvuaOpeaYr+acieaViOeahOWGhemDqOmTvuaOpe+8jOWImeWcqOW8gOWktOa3u+WKoOWGkuWPt+S7pemYsuatouWug+iiq+ino+aekOS4uuWGhemDqOmTvuaOpVxuXHRcdGlmICh0ZXh0KSB7XG5cdFx0XHRyZXR1cm4gYFtbJHtsaW5rfXwke3RleHR9XV1gO1xuXHRcdH1cblx0XHRyZXR1cm4gYFtbJHtsaW5rfV1dYDtcblx0fVxuXG5cdHJldHVybiBsaW5rOyAvLyDlvZPpk77mjqXkuI3mmK/pk77mjqXml7bvvIzov5Tlm57ljp/mlodcbn07XG5cbmV4cG9ydCB7Z2V0TGlua307XG4iLCAiaW1wb3J0IHtMSUNFTlNFU30gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRMaW5rfSBmcm9tICcuL2dldExpbmsnO1xuXG5jb25zdCBnZXRMaWNlbnNlID0gKGxpY2Vuc2U6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHNlbGVjdGVkID0gTElDRU5TRVMuZmluZCgoe2RhdGF9KSA9PiBkYXRhID09PSBsaWNlbnNlKTtcblx0cmV0dXJuIHNlbGVjdGVkID8gZ2V0TGluayh7bGluazogc2VsZWN0ZWQuZGF0YSwgdGV4dDogc2VsZWN0ZWQubGFiZWx9KSA6ICcnO1xufTtcblxuY29uc3QgdXBkYXRlV3BMaWNlbnNlID0gKHskYm9keSwgbGljZW5zZX06IHskYm9keTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgbGljZW5zZTogc3RyaW5nfSk6IHZvaWQgPT4ge1xuXHRjb25zdCAkd3BMaWNlbnNlID1cblx0XHQkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwTGljZW5zZV0nKSA/P1xuXHRcdCQoJzxpbnB1dD4nKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRpZDogJ3dwTGljZW5zZScsXG5cdFx0XHRcdG5hbWU6ICd3cExpY2Vuc2UnLFxuXHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0fSlcblx0XHRcdC5wcmVwZW5kVG8oJGJvZHkpO1xuXHQkd3BMaWNlbnNlLnZhbChnZXRMaWNlbnNlKGxpY2Vuc2UpKTtcbn07XG5cbmV4cG9ydCB7Z2V0TGljZW5zZSwgdXBkYXRlV3BMaWNlbnNlfTtcbiIsICJpbXBvcnQge2dldExpbmt9IGZyb20gJy4vZ2V0TGluayc7XG5cbmNvbnN0IGdldFNvdXJjZSA9IChzb3VyY2U6IHN0cmluZyk6IHN0cmluZyA9PiAoc291cmNlID8gZ2V0TGluayh7bGluazogc291cmNlfSkgOiAnJyk7XG5cbmNvbnN0IHVwZGF0ZVdwU291cmNlID0gKHskYm9keSwgc291cmNlfTogeyRib2R5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBzb3VyY2U6IHN0cmluZ30pOiB2b2lkID0+IHtcblx0Y29uc3QgJHdwU291cmNlID1cblx0XHQkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwU291cmNlXScpID8/XG5cdFx0JCgnPGlucHV0PicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGlkOiAnd3BTb3VyY2UnLFxuXHRcdFx0XHRuYW1lOiAnd3BTb3VyY2UnLFxuXHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0dmFsdWU6ICcnLFxuXHRcdFx0fSlcblx0XHRcdC5wcmVwZW5kVG8oJGJvZHkpO1xuXHQkd3BTb3VyY2UudmFsKGdldFNvdXJjZShzb3VyY2UpKTtcbn07XG5cbmV4cG9ydCB7Z2V0U291cmNlLCB1cGRhdGVXcFNvdXJjZX07XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhGaWVsZCwgQ2R4U2VsZWN0LCBDZHhUZXh0SW5wdXR9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7TElDRU5TRVN9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b25DaGFuZ2U6IChzb3VyY2U6IHN0cmluZywgbGljZW5zZTogc3RyaW5nKSA9PiB2b2lkO1xuXHRvbkFkZDogKHNvdXJjZTogc3RyaW5nLCBsaWNlbnNlOiBzdHJpbmcpID0+IGJvb2xlYW47XG59PigpO1xuXG5jb25zdCBzb3VyY2UgPSByZWYoJycpO1xuY29uc3QgbGljZW5zZSA9IHJlZjxzdHJpbmcgfCBudWxsPihudWxsKTtcbmNvbnN0IGxpY2Vuc2VJdGVtcyA9IGNvbXB1dGVkKCgpID0+IExJQ0VOU0VTLm1hcCgoe2RhdGEsIGxhYmVsfSkgPT4gKHt2YWx1ZTogZGF0YSwgbGFiZWx9KSkpO1xuXG53YXRjaChbc291cmNlLCBsaWNlbnNlXSwgKFtuZXdTb3VyY2UsIG5ld0xpY2Vuc2VdKSA9PiB7XG5cdHByb3BzLm9uQ2hhbmdlKG5ld1NvdXJjZSwgbmV3TGljZW5zZSA/PyAnJyk7XG59KTtcblxuY29uc3QgYWRkVG9TdW1tYXJ5ID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAocHJvcHMub25BZGQoc291cmNlLnZhbHVlLCBsaWNlbnNlLnZhbHVlID8/ICcnKSkge1xuXHRcdHNvdXJjZS52YWx1ZSA9ICcnO1xuXHRcdGxpY2Vuc2UudmFsdWUgPSBudWxsO1xuXHR9XG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGZpZWxkc2V0IGNsYXNzPVwiZWRpdGZvcm0tYXR0cmlidXRpb25cIj5cblx0XHQ8bGVnZW5kPnt7IGdldE1lc3NhZ2UoJ1BsZWFzZSBDbGFpbSBTb3VyY2VzIGFuZCBMaWNlbnNlcycpIH19PC9sZWdlbmQ+XG5cdFx0PGNkeC1maWVsZD5cblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgZ2V0TWVzc2FnZSgnU291cmNlJykgfX08L3RlbXBsYXRlPlxuXHRcdFx0PGNkeC10ZXh0LWlucHV0IHYtbW9kZWw9XCJzb3VyY2VcIiA6cGxhY2Vob2xkZXI9XCJnZXRNZXNzYWdlKCdTb3VyY2UnKVwiIC8+XG5cdFx0PC9jZHgtZmllbGQ+XG5cdFx0PGNkeC1maWVsZD5cblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgZ2V0TWVzc2FnZSgnTGljZW5zZScpIH19PC90ZW1wbGF0ZT5cblx0XHRcdDxjZHgtc2VsZWN0IHYtbW9kZWw6c2VsZWN0ZWQ9XCJsaWNlbnNlXCIgOm1lbnUtaXRlbXM9XCJsaWNlbnNlSXRlbXNcIiA6ZGVmYXVsdC1sYWJlbD1cImdldE1lc3NhZ2UoJ0xpY2Vuc2UnKVwiIC8+XG5cdFx0PC9jZHgtZmllbGQ+XG5cdFx0PGNkeC1idXR0b24gdHlwZT1cImJ1dHRvblwiIHdlaWdodD1cInByaW1hcnlcIiBAY2xpY2s9XCJhZGRUb1N1bW1hcnlcIj5cblx0XHRcdHt7IGdldE1lc3NhZ2UoJ0FkZCB0byBFZGl0IFN1bW1hcnknKSB9fVxuXHRcdDwvY2R4LWJ1dHRvbj5cblx0PC9maWVsZHNldD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5lZGl0Zm9ybS1hdHRyaWJ1dGlvbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC41cmVtO1xuXHRwYWRkaW5nOiAwLjc4NTdlbTtcbn1cblxuLmVkaXRmb3JtLWF0dHJpYnV0aW9uID4gbGVnZW5kIHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHdpZHRoOiAxMDAlO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJlZGl0Zm9ybS1hdHRyaWJ1dGlvblwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJmaWVsZHNldFwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxlZ2VuZFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdQbGVhc2UgQ2xhaW0gU291cmNlcyBhbmQgTGljZW5zZXMnKSksIDEgLyogVEVYVCAqLyksXG4gICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICBsYWJlbDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ1NvdXJjZScpKSwgMSAvKiBURVhUICovKVxuICAgICAgXSksXG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhUZXh0SW5wdXRcIl0sIHtcbiAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuc291cmNlLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5zb3VyY2UpID0gJGV2ZW50KSksXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICRzZXR1cC5nZXRNZXNzYWdlKCdTb3VyY2UnKVxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCIsIFwicGxhY2Vob2xkZXJcIl0pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSksXG4gICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICBsYWJlbDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0xpY2Vuc2UnKSksIDEgLyogVEVYVCAqLylcbiAgICAgIF0pLFxuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4U2VsZWN0XCJdLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6ICRzZXR1cC5saWNlbnNlLFxuICAgICAgICAgIFwib25VcGRhdGU6c2VsZWN0ZWRcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAubGljZW5zZSkgPSAkZXZlbnQpKSxcbiAgICAgICAgICBcIm1lbnUtaXRlbXNcIjogJHNldHVwLmxpY2Vuc2VJdGVtcyxcbiAgICAgICAgICBcImRlZmF1bHQtbGFiZWxcIjogJHNldHVwLmdldE1lc3NhZ2UoJ0xpY2Vuc2UnKVxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJzZWxlY3RlZFwiLCBcIm1lbnUtaXRlbXNcIiwgXCJkZWZhdWx0LWxhYmVsXCJdKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0pLFxuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICB3ZWlnaHQ6IFwicHJpbWFyeVwiLFxuICAgICAgb25DbGljazogJHNldHVwLmFkZFRvU3VtbWFyeVxuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdBZGQgdG8gRWRpdCBTdW1tYXJ5JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSlcbiAgXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRWRpdGZvcm1fQXR0cmlidXRpb25cXFxcbW9kdWxlc1xcXFxBdHRyaWJ1dGlvbkZvcm0udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFZGl0Zm9ybV9BdHRyaWJ1dGlvblxcXFxtb2R1bGVzXFxcXEF0dHJpYnV0aW9uRm9ybS52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRWRpdGZvcm1fQXR0cmlidXRpb25cXFxcbW9kdWxlc1xcXFxBdHRyaWJ1dGlvbkZvcm0udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcRWRpdGZvcm1fQXR0cmlidXRpb25cXFxcbW9kdWxlc1xcXFxBdHRyaWJ1dGlvbkZvcm0udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTg3YThhMTBlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJjb25zdCBhcHBlbmRUZXh0VG9TdW1tYXJ5ID0gKHtjdXN0b21TdW1tYXJ5LCAkd3BTdW1tYXJ5fToge2N1c3RvbVN1bW1hcnk6IHN0cmluZzsgJHdwU3VtbWFyeTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXG5cdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtjdXN0b21TdW1tYXJ5fWAgOiBjdXN0b21TdW1tYXJ5KTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kVGV4dFRvU3VtbWFyeX07XG4iLCAiaW1wb3J0IHtnZXRMaWNlbnNlLCB1cGRhdGVXcExpY2Vuc2V9IGZyb20gJy4vZ2V0TGljZW5zZSc7XG5pbXBvcnQge2dldFNvdXJjZSwgdXBkYXRlV3BTb3VyY2V9IGZyb20gJy4vZ2V0U291cmNlJztcbmltcG9ydCBBdHRyaWJ1dGlvbkZvcm0gZnJvbSAnLi4vQXR0cmlidXRpb25Gb3JtLnZ1ZSc7XG5pbXBvcnQge2FwcGVuZFRleHRUb1N1bW1hcnl9IGZyb20gJy4vYXBwZW5kVGV4dFRvU3VtbWFyeSc7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge29vdWlDb25maXJtV2l0aFN0eWxlfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBtb3VudEF0dHJpYnV0aW9uRm9ybSA9ICh7XG5cdHJvb3QsXG5cdCRib2R5LFxuXHQkd3BTdW1tYXJ5LFxufToge1xuXHRyb290OiBIVE1MRWxlbWVudDtcblx0JGJvZHk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdCR3cFN1bW1hcnk6IEpRdWVyeTtcbn0pOiB2b2lkID0+IHtcblx0Y29uc3QgdXBkYXRlSGlkZGVuRmllbGRzID0gKHNvdXJjZTogc3RyaW5nLCBsaWNlbnNlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHR1cGRhdGVXcFNvdXJjZSh7JGJvZHksIHNvdXJjZX0pO1xuXHRcdHVwZGF0ZVdwTGljZW5zZSh7JGJvZHksIGxpY2Vuc2V9KTtcblx0fTtcblxuXHRjcmVhdGVBcHAoQXR0cmlidXRpb25Gb3JtLCB7XG5cdFx0b25DaGFuZ2U6IHVwZGF0ZUhpZGRlbkZpZWxkcyxcblx0XHRvbkFkZDogKHNvdXJjZTogc3RyaW5nLCBsaWNlbnNlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdHVwZGF0ZUhpZGRlbkZpZWxkcyhzb3VyY2UsIGxpY2Vuc2UpO1xuXG5cdFx0XHRjb25zdCB3cFNvdXJjZSA9IGdldFNvdXJjZShzb3VyY2UpO1xuXHRcdFx0Y29uc3Qgd3BMaWNlbnNlID0gZ2V0TGljZW5zZShsaWNlbnNlKTtcblxuXHRcdFx0aWYgKHdwU291cmNlLmxlbmd0aCAmJiB3cExpY2Vuc2UubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IGF0dHJpYnV0aW9uID0gYCR7Z2V0TWVzc2FnZSgnU291cmNlJyl9OiAke3dwU291cmNlfSAoJHtnZXRNZXNzYWdlKCdMaWNlbnNlJyl9OiAke3dwTGljZW5zZX0pIGA7XG5cblx0XHRcdFx0aWYgKFtnZXRNZXNzYWdlKCdSZXBsYWNlIFdpdGggTGljZW5zZScpLCBnZXRNZXNzYWdlKCdPdGhlciBMaWNlbnNlJyldLmluY2x1ZGVzKHdwTGljZW5zZSkpIHtcblx0XHRcdFx0XHR2b2lkIG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ1BsZWFzZSByZXBsYWNlIHBsYWNlaG9sZGVyIHdpdGggYWN0dWFsIGxpY2Vuc2UnKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhcHBlbmRUZXh0VG9TdW1tYXJ5KHtcblx0XHRcdFx0XHRjdXN0b21TdW1tYXJ5OiBgWyR7YXR0cmlidXRpb259XWAsXG5cdFx0XHRcdFx0JHdwU3VtbWFyeSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKCF3cFNvdXJjZS5sZW5ndGggJiYgd3BMaWNlbnNlLmxlbmd0aCkge1xuXHRcdFx0XHR2b2lkIG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ1NvdXJjZSBpcyBtaXNzaW5nJykpO1xuXHRcdFx0fSBlbHNlIGlmICh3cFNvdXJjZS5sZW5ndGggJiYgIXdwTGljZW5zZS5sZW5ndGgpIHtcblx0XHRcdFx0dm9pZCBvb3VpQ29uZmlybVdpdGhTdHlsZShnZXRNZXNzYWdlKCdMaWNlbnNlIGlzIG1pc3NpbmcnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG9vdWlDb25maXJtV2l0aFN0eWxlKGdldE1lc3NhZ2UoJ0JvdGggc291cmNlIGFuZCBMaWNlbnNlIGFyZSBtaXNzaW5nJykpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH0pLm1vdW50KHJvb3QpO1xufTtcblxuZXhwb3J0IHttb3VudEF0dHJpYnV0aW9uRm9ybX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge21vdW50QXR0cmlidXRpb25Gb3JtfSBmcm9tICcuL3V0aWwvbW91bnRBdHRyaWJ1dGlvbkZvcm0nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cdGNvbnN0IHskc2F2ZU9wdGlvbnN9ID0gc2F2ZURpYWxvZztcblx0aWYgKCEkc2F2ZU9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgdHJ1ZSk7XG5cblx0aWYgKCEkYm9keS5maW5kKGAjJHtPUFRJT05TLmlucHV0SWR9YCkubGVuZ3RoKSB7XG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHJvb3QuaWQgPSBPUFRJT05TLmlucHV0SWQ7XG5cdFx0JHNhdmVPcHRpb25zLmFwcGVuZChyb290KTtcblx0XHRtb3VudEF0dHJpYnV0aW9uRm9ybSh7XG5cdFx0XHRyb290LFxuXHRcdFx0JGJvZHksXG5cdFx0XHQkd3BTdW1tYXJ5OiB0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dCxcblx0XHR9KTtcblx0fVxuXG5cdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX0F0dHJpYnV0aW9uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge21vdW50QXR0cmlidXRpb25Gb3JtfSBmcm9tICcuL3V0aWwvbW91bnRBdHRyaWJ1dGlvbkZvcm0nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICh7JGJvZHksICRlZGl0Rm9ybX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47ICRlZGl0Rm9ybTogSlF1ZXJ5fSk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKE9QVElPTlMudGFyZ2V0V2lraUVkaXRvcik7XG5cdGlmICghJHRhcmdldC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRpZiAoISRib2R5LmZpbmQoYCMke09QVElPTlMuaW5wdXRJZH1gKS5sZW5ndGgpIHtcblx0XHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cm9vdC5pZCA9IE9QVElPTlMuaW5wdXRJZDtcblx0XHQkdGFyZ2V0LmFmdGVyKHJvb3QpO1xuXHRcdG1vdW50QXR0cmlidXRpb25Gb3JtKHtcblx0XHRcdHJvb3QsXG5cdFx0XHQkYm9keSxcblx0XHRcdCR3cFN1bW1hcnk6ICRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsWUFBYTtBQUNiLElBQUFDLGNBQWU7QUFDZixJQUFBQyxVQUFXO0FBQ1gsSUFBQUMsbUJBQW9COztBQ0pyQixJQUFBQyxvQkFBdUJMLFFBQUEsaUJBQUE7QUFFdkIsSUFBTU0sa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTix3QkFBQSxHQUF1QkQsa0JBQUFFLFVBQVM7TUFDL0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRSixrQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lB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ICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImNvbmZpZ0tleSIsICJjb25maWdLZXlWZSIsICJpbnB1dElkIiwgInRhcmdldFdpa2lFZGl0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgIlNvdXJjZSIsICJMaWNlbnNlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJ3Z05hbWVzcGFjZUlkcyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIkxJQ0VOU0VTIiwgImxhYmVsIiwgImRhdGEiLCAiVkFMSURfSU5URVJXSUtJX1BSRUZJWCIsICJWQUxJRF9JTlRFUk5BTF9QUkVGSVgiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJuYW1lc3BhY2VOYW1lIiwgImlkIiwgImdldExpbmsiLCAibGluayIsICJ0ZXh0IiwgIlZBTElEX0lOVEVSV0lLSV9MSU5LX1JFR0VYIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAiam9pbiIsICJWQUxJRF9JTlRFUk5BTF9QUkVGSVhfUkVHRVgiLCAiaW5jbHVkZXMiLCAic3RhcnRzV2l0aCIsICJlbmRzV2l0aCIsICJlbmNvZGVVUkkiLCAiZGVjb2RlVVJJIiwgInRlc3QiLCAicmVwbGFjZSIsICJnZXRMaWNlbnNlIiwgImxpY2Vuc2UiLCAic2VsZWN0ZWQiLCAiZmluZCIsICJ1cGRhdGVXcExpY2Vuc2UiLCAiJGJvZHkiLCAiXyRib2R5JGZpbmQiLCAiJHdwTGljZW5zZSIsICIkIiwgImF0dHIiLCAibmFtZSIsICJ0eXBlIiwgInZhbHVlIiwgInByZXBlbmRUbyIsICJ2YWwiLCAiZ2V0U291cmNlIiwgInNvdXJjZSIsICJ1cGRhdGVXcFNvdXJjZSIsICJfJGJvZHkkZmluZDIiLCAiJHdwU291cmNlIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgInJlZiIsICJsaWNlbnNlSXRlbXMiLCAiY29tcHV0ZWQiLCAibWFwIiwgIndhdGNoIiwgIm5ld1NvdXJjZSIsICJuZXdMaWNlbnNlIiwgIm9uQ2hhbmdlIiwgImFkZFRvU3VtbWFyeSIsICJfbGljZW5zZSR2YWx1ZSIsICJvbkFkZCIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJjcmVhdGVWTm9kZSIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJkZWZhdWx0IiwgIm1vZGVsVmFsdWUiLCAiJGV2ZW50IiwgInBsYWNlaG9sZGVyIiwgIl8iLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiQXR0cmlidXRpb25Gb3JtX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJBdHRyaWJ1dGlvbkZvcm1fZGVmYXVsdDIiLCAiYXBwZW5kVGV4dFRvU3VtbWFyeSIsICJjdXN0b21TdW1tYXJ5IiwgIiR3cFN1bW1hcnkiLCAiXyR3cFN1bW1hcnkkdmFsIiwgIm9yaWdpblN1bW1hcnkiLCAidHJpbSIsICJpbXBvcnRfdnVlNCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAibW91bnRBdHRyaWJ1dGlvbkZvcm0iLCAicm9vdCIsICJ1cGRhdGVIaWRkZW5GaWVsZHMiLCAiY3JlYXRlQXBwIiwgIndwU291cmNlIiwgIndwTGljZW5zZSIsICJhdHRyaWJ1dGlvbiIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJtb3VudCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgInRhcmdldCIsICJ3aW5kb3ciLCAidmUiLCAiaW5pdCIsICJzYXZlRGlhbG9nIiwgIiRzYXZlT3B0aW9ucyIsICJzZXQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAiZWRpdFN1bW1hcnlJbnB1dCIsICIkaW5wdXQiLCAiaG9vayIsICJhZGQiLCAicHJvY2Vzc1dpa2lFZGl0b3IiLCAiJGVkaXRGb3JtIiwgIiR0YXJnZXQiLCAiYWZ0ZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIl0KfQo=
