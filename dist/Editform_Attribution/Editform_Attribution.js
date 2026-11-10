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
for (const [namespaceName, id] of Object.entries(wgNamespaceIds)) {
  if (id === 0) {
    continue;
  }
  VALID_INTERNAL_PREFIX[VALID_INTERNAL_PREFIX.length] = namespaceName;
}
//! src/Editform_Attribution/modules/util/getLink.ts
var escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var createPrefixRegex = (prefixes) => new RegExp(`^:?(?:${prefixes.map(escapeRegex).join("|")}):`, "i");
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
    return `[${encodeURI(decodeURI(link))} ]`;
  }
  if (VALID_INTERWIKI_LINK_REGEX.test(link)) {
    link = `:${link.replace(/^:/, "")}`;
    if (text) {
      return `[[${link}|${text}]]`;
    }
    return `[[${link}]]`;
  }
  if (VALID_INTERNAL_PREFIX_REGEX.test(link)) {
    link = `:${link.replace(/^:/, "")}`;
    if (text) {
      return `[[${link}|${text}]]`;
    }
    return `[[${link}]]`;
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
      props.onChange(newSource, newLicense ?? "");
    });
    const addToSummary = () => {
      if (props.onAdd(source.value, license.value ?? "")) {
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
  const originSummary = $wpSummary.val() ?? "";
  $wpSummary.val(originSummary.trim() ? `${originSummary} ${customSummary}` : customSummary);
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
        const attribution = `${getMessage("Source")}: ${wpSource} (${getMessage("License")}: ${wpLicense}) `;
        if ([getMessage("Replace With License"), getMessage("Other License")].includes(wpLicense)) {
          void (0, import_ext_gadget2.oouiConfirmWithStyle)(getMessage("Please replace placeholder with actual license"));
        }
        appendTextToSummary({
          customSummary: `[${attribution}]`,
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
  if (!$body.find(`#${inputId}`).length) {
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
  if (!$body.find(`#${inputId}`).length) {
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

