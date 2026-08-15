/**
 * SPDX-License-Identifier: GPL-2.0-only
 * _addText: '{{Gadget Header|license=GPL-2.0-only}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/VariantAlly}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/VariantAllyDialog}
 * @license GPL-2.0-only {@link https://www.qiuwenbaike.cn/wiki/H:GPLV2}
 */

/**
 * VariantAlly
 * Copyright (C) 2023-2024 Diskdance
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
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

// dist/VariantAllyDialog/VariantAllyDialog.js
var _mw$config$get;
var import_vue19 = require("vue");
var import_ext_gadget = require("ext.gadget.VariantAlly");
//! src/VariantAllyDialog/modules/utils.ts
var import_vue = require("vue");
var VALID_VARIANTS = ["zh-cn", "zh-sg", "zh-my", "zh-tw", "zh-hk", "zh-mo"];
var wgUserVariant = (0, import_vue.ref)((_mw$config$get = mw.config.get("wgUserVariant")) !== null && _mw$config$get !== void 0 ? _mw$config$get : "");
function isMobileDevice() {
  return matchMedia("(hover: none), (pointer: coarse)").matches;
}
function getMountPoint() {
  var _document$querySelect, _document$querySelect2;
  switch (mw.config.get("skin")) {
    case "vector-2022":
      return (_document$querySelect = document.querySelectorAll(".mw-page-container")[0]) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.body;
    case "gongbi":
      return (_document$querySelect2 = document.querySelector("#mw-content-block")) !== null && _document$querySelect2 !== void 0 ? _document$querySelect2 : document.body;
    default:
      return document.body;
  }
}
var inferredVariant = (0, import_vue.computed)(() => {
  if (VALID_VARIANTS.includes(wgUserVariant.value)) {
    return wgUserVariant.value;
  }
  return null;
});
function shuffleVariant(last) {
  const targetArray = [...VALID_VARIANTS].filter((i) => {
    return i !== last;
  });
  const randomIndex = Math.floor(Math.random() * targetArray.length);
  return targetArray[randomIndex];
}
var import_vue11 = require("vue");
var import_vue12 = require("vue");
//! src/VariantAllyDialog/composables/useI18n.ts
var import_vue2 = require("vue");
//! src/VariantAllyDialog/messages.json
var messages_default = {
  variants: {
    "zh-cn": "中国大陆简体",
    "zh-sg": "新加坡简体",
    "zh-my": "马来西亚简体",
    "zh-hk": "中國香港繁體",
    "zh-mo": "中國澳門繁體",
    "zh-tw": "中國臺灣繁體"
  },
  hans: {
    space: "",
    close: "关闭",
    "vp.header": "我们支持",
    "vp.header.alt": "记住此变体？",
    "vp.main": "选取内容的语言变体",
    "vp.main.alt": "以后都使用此变体呈现内容",
    "vp.main.ext": "保存您偏好的中文语言变体，以避免显示简繁混杂的内容，提供最佳的阅读体验。",
    "vp.button.ok": "确定",
    "vp.button.other": "其他"
  },
  hant: {
    space: "",
    close: "關閉",
    "vp.header": "我們支援",
    "vp.header.alt": "記住此變體？",
    "vp.main": "選取內容的語言變體",
    "vp.main.alt": "以後都使用此變體呈現內容",
    "vp.main.ext": "儲存您偏好的中文語言變體，以避免顯示簡繁混雜的內容，提供最佳的閱讀體驗。",
    "vp.button.ok": "確定",
    "vp.button.other": "其他"
  }
};
//! src/VariantAllyDialog/composables/useI18n.ts
var i18nVariant = (0, import_vue2.computed)(() => {
  if (wgUserVariant.value === "zh") {
    return Math.random() > 0.5 ? "hans" : "hant";
  }
  if (["zh-hant", "zh-tw", "zh-hk", "zh-mo"].includes(wgUserVariant.value)) {
    return "hant";
  }
  return "hans";
});
function useI18n(key) {
  var _currentMsgsGroup$key;
  const currentMsgsGroup = messages_default[i18nVariant.value];
  return (_currentMsgsGroup$key = currentMsgsGroup[key]) !== null && _currentMsgsGroup$key !== void 0 ? _currentMsgsGroup$key : key;
}
var import_vue5 = require("vue");
var import_vue3 = require("vue");
var VAIcon_default = /* @__PURE__ */ (0, import_vue3.defineComponent)({
  __name: "VAIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue4 = require("vue");
var _hoisted_1 = ["width", "height"];
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 1
};
var _hoisted_4 = {
  key: 2
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("svg", {
    class: "va-icon-button__icon",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: $props.size,
    height: $props.size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true"
  }, [$props.icon === "lang" ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("g", _hoisted_2, [(0, import_vue4.createCommentVNode)(" eslint-disable "), _cache[0] || (_cache[0] = (0, import_vue4.createElementVNode)(
    "path",
    {
      d: "M20 18h-1.44a.61.61 0 01-.4-.12.81.81 0 01-.23-.31L17 15h-5l-1 2.54a.77.77 0 01-.22.3.59.59 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.19 17.19 0 01-5 2.1q.56.82.87 1.38a23.28 23.28 0 005.22-2.51 15.64 15.64 0 003.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 01-2.45 4.45 9.11 9.11 0 01-2.46-4.45z"
    },
    null,
    -1
    /* CACHED */
  )), (0, import_vue4.createCommentVNode)(" eslint-enable ")])) : $props.icon === "close" ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("g", _hoisted_3, [..._cache[1] || (_cache[1] = [(0, import_vue4.createElementVNode)(
    "path",
    {
      d: "m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"
    },
    null,
    -1
    /* CACHED */
  ), (0, import_vue4.createElementVNode)(
    "path",
    {
      d: "M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"
    },
    null,
    -1
    /* CACHED */
  )])])) : ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("g", _hoisted_4, [..._cache[2] || (_cache[2] = [(0, import_vue4.createElementVNode)(
    "path",
    {
      d: "M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"
    },
    null,
    -1
    /* CACHED */
  )])]))], 8, _hoisted_1);
}
//! src/VariantAllyDialog/components/VAIcon.vue
VAIcon_default.render = render;
VAIcon_default.__file = "src\\VariantAllyDialog\\components\\VAIcon.vue";
var VAIcon_default2 = VAIcon_default;
var VAButton_default = /* @__PURE__ */ (0, import_vue5.defineComponent)({
  __name: "VAButton",
  props: {
    icon: {
      type: String,
      required: false
    },
    indicator: {
      type: String,
      required: false
    },
    action: {
      type: String,
      required: false
    },
    weight: {
      type: String,
      required: false
    }
  },
  emits: ["click"],
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {
      VAIcon: VAIcon_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue6 = require("vue");
var _hoisted_12 = {
  key: 1,
  class: "va-button__text"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
    "button",
    {
      class: (0, import_vue6.normalizeClass)(["va-button", {
        "va-button--action-progressive": $props.action === "progressive",
        "va-button--weight-quiet": $props.weight === "quiet"
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    },
    [$props.icon !== void 0 ? ((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)($setup["VAIcon"], {
      key: 0,
      class: "va-button__icon",
      icon: $props.icon,
      size: 20
    }, null, 8, ["icon"])) : (0, import_vue6.createCommentVNode)("v-if", true), _ctx.$slots["default"] ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("span", _hoisted_12, [(0, import_vue6.renderSlot)(_ctx.$slots, "default", {}, void 0, true)])) : (0, import_vue6.createCommentVNode)("v-if", true), $props.indicator !== void 0 ? ((0, import_vue6.openBlock)(), (0, import_vue6.createBlock)($setup["VAIcon"], {
      key: 2,
      class: "va-button__indicator",
      icon: $props.indicator,
      size: 16
    }, null, 8, ["icon"])) : (0, import_vue6.createCommentVNode)("v-if", true)],
    2
    /* CLASS */
  );
}
//! src/VariantAllyDialog/components/VAButton.vue
VAButton_default.render = render2;
VAButton_default.__file = "src\\VariantAllyDialog\\components\\VAButton.vue";
VAButton_default.__scopeId = "data-v-bb7734b1";
var VAButton_default2 = VAButton_default;
var import_vue7 = require("vue");
function render3(_ctx, _cache) {
  return (0, import_vue7.openBlock)(), (0, import_vue7.createBlock)(import_vue7.Transition, {
    name: "va-fade",
    mode: "out-in"
  }, {
    default: (0, import_vue7.withCtx)(() => [(0, import_vue7.renderSlot)(_ctx.$slots, "default", {}, void 0, true)]),
    _: 3
    /* FORWARDED */
  });
}
//! src/VariantAllyDialog/components/VAFadeTransition.vue
var script = {};
script.render = render3;
script.__file = "src\\VariantAllyDialog\\components\\VAFadeTransition.vue";
script.__scopeId = "data-v-bb9c5751";
var VAFadeTransition_default = script;
//! src/VariantAllyDialog/composables/useDefault.ts
var import_vue8 = require("vue");
function useDefault(defaultValue) {
  const realRef = (0, import_vue8.shallowRef)(typeof defaultValue === "function" ? defaultValue() : defaultValue.value);
  (0, import_vue8.watch)(defaultValue, (newValue) => {
    realRef.value = newValue;
  }, {
    deep: true
  });
  return (0, import_vue8.computed)({
    get() {
      return realRef.value;
    },
    set(newValue) {
      realRef.value = newValue;
    }
  });
}
var useDefault_default = useDefault;
//! src/VariantAllyDialog/composables/useModelWrapper.ts
var import_vue9 = require("vue");
function useModelWrapper(props, emit, name = "modelValue") {
  return (0, import_vue9.computed)({
    get() {
      return props[name];
    },
    set(value) {
      emit("update:".concat(name), value);
    }
  });
}
var useModelWrapper_default = useModelWrapper;
//! src/VariantAllyDialog/composables/useShuffledVariant.ts
var import_vue10 = require("vue");
var INTERVAL = 3 * 1e3;
function useShuffledVariant(isFreezed) {
  const result = (0, import_vue10.ref)(shuffleVariant());
  let id;
  (0, import_vue10.watch)(isFreezed, (newValue) => {
    if (newValue) {
      var _inferredVariant$valu;
      clearInterval(id);
      result.value = (_inferredVariant$valu = inferredVariant.value) !== null && _inferredVariant$valu !== void 0 ? _inferredVariant$valu : shuffleVariant();
    } else {
      id = window.setInterval(() => {
        result.value = shuffleVariant(result.value);
      }, INTERVAL);
    }
  }, {
    immediate: true
  });
  return result;
}
var useShuffledVariant_default = useShuffledVariant;
//! src/VariantAllyDialog/composables/useUniqueId.ts
var counter = 0;
function useUniqueId() {
  return "va-".concat(counter++);
}
var useUniqueId_default = useUniqueId;
var VAVariantPrompt_default = /* @__PURE__ */ (0, import_vue11.defineComponent)({
  __name: "VAVariantPrompt",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    autoClose: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue12.ref)(null);
    const titleId = useUniqueId_default();
    const descId = useUniqueId_default();
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    const isVariantNarrowed = useDefault_default(() => inferredVariant.value !== null);
    const shuffledVariant = useShuffledVariant_default(isVariantNarrowed);
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    (0, import_vue12.watch)(prompt, () => {
      const element = prompt.value;
      if (element !== null) {
        element.addEventListener("mouseleave", (ev) => {
          if (ev.buttons === 0 && props.autoClose && !props.disabled) {
            isOpen.value = false;
          }
        });
      }
    });
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      descId,
      isOpen,
      isDisabled,
      isVariantNarrowed,
      shuffledVariant,
      optOutAndClose,
      select,
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get inferredVariant() {
        return inferredVariant;
      },
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      VAButton: VAButton_default2,
      VAFadeTransition: VAFadeTransition_default,
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue13 = require("vue");
var _hoisted_13 = ["lang", "aria-labelledby", "aria-describedby"];
var _hoisted_22 = ["id"];
var _hoisted_32 = ["lang"];
var _hoisted_42 = ["id"];
var _hoisted_5 = {
  class: "va-variant-prompt__options"
};
var _hoisted_6 = {
  class: "va-variant-prompt__footer"
};
var _hoisted_7 = {
  class: "va-para va-para--subtle"
};
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)(import_vue13.Transition, {
    name: "va-variant-prompt",
    appear: ""
  }, {
    default: (0, import_vue13.withCtx)(() => [$props.open ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId,
      "aria-describedby": $setup.descId
    }, [(0, import_vue13.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"]), (0, import_vue13.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt__title va-title"
    }, [(0, import_vue13.createTextVNode)(
      (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.header.alt" : "vp.header")),
      1
      /* TEXT */
    ), _cache[1] || (_cache[1] = (0, import_vue13.createElementVNode)(
      "br",
      null,
      null,
      -1
      /* CACHED */
    )), (0, import_vue13.createVNode)($setup["VAFadeTransition"], null, {
      default: (0, import_vue13.withCtx)(() => [!$setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("span", {
        key: $setup.shuffledVariant,
        lang: "zh-".concat($setup.shuffledVariant),
        class: "va-variant-prompt__title__variant"
      }, (0, import_vue13.toDisplayString)($setup.messages.variants[$setup.shuffledVariant]), 9, _hoisted_32)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    })], 8, _hoisted_22), (0, import_vue13.createElementVNode)("p", {
      id: $setup.descId,
      class: "va-variant-prompt__desc va-para"
    }, (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.main.alt" : "vp.main")), 9, _hoisted_42), (0, import_vue13.createElementVNode)("div", _hoisted_5, [(0, import_vue13.createCommentVNode)(" inferredVariant is non-null, guarded by isVariantNarrowed "), ((0, import_vue13.openBlock)(true), (0, import_vue13.createElementBlock)(
      import_vue13.Fragment,
      null,
      (0, import_vue13.renderList)($setup.isVariantNarrowed && $setup.inferredVariant !== null ? [$setup.inferredVariant] : $setup.VALID_VARIANTS, (variant) => {
        return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
          key: variant,
          class: (0, import_vue13.normalizeClass)(["va-variant-prompt__options__button", {
            "va-variant-prompt__options__button--primary": $setup.isVariantNarrowed
          }]),
          indicator: "arrowNext",
          weight: "quiet",
          action: "progressive",
          lang: variant,
          disabled: $props.disabled,
          onClick: ($event) => $setup.select(variant)
        }, {
          default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
            (0, import_vue13.toDisplayString)($setup.messages.variants[variant]),
            1
            /* TEXT */
          )]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class", "lang", "disabled", "onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), $setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
      key: 0,
      class: "va-variant-prompt__options__button",
      indicator: "arrowNext",
      weight: "quiet",
      action: "progressive",
      disabled: $props.disabled,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.isVariantNarrowed = false)
    }, {
      default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
        (0, import_vue13.toDisplayString)($setup.useI18n("vp.button.other")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])) : (0, import_vue13.createCommentVNode)("v-if", true)]), (0, import_vue13.createElementVNode)("footer", _hoisted_6, [(0, import_vue13.createElementVNode)(
      "p",
      _hoisted_7,
      (0, import_vue13.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_13)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPrompt.vue
VAVariantPrompt_default.render = render4;
VAVariantPrompt_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPrompt.vue";
VAVariantPrompt_default.__scopeId = "data-v-5a44cc75";
var VAVariantPrompt_default2 = VAVariantPrompt_default;
var import_vue16 = require("vue");
var import_vue14 = require("vue");
var VASelect_default = /* @__PURE__ */ (0, import_vue14.defineComponent)({
  __name: "VASelect",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const modelValue = useModelWrapper_default(props, emit);
    const __returned__ = {
      props,
      emit,
      modelValue
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue15 = require("vue");
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue15.withDirectives)(((0, import_vue15.openBlock)(), (0, import_vue15.createElementBlock)(
    "select",
    {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
      class: "va-select"
    },
    [(0, import_vue15.renderSlot)(_ctx.$slots, "default", {}, void 0, true)],
    512
    /* NEED_PATCH */
  )), [[import_vue15.vModelSelect, $setup.modelValue]]);
}
//! src/VariantAllyDialog/components/VASelect.vue
VASelect_default.render = render5;
VASelect_default.__file = "src\\VariantAllyDialog\\components\\VASelect.vue";
VASelect_default.__scopeId = "data-v-c9b46460";
var VASelect_default2 = VASelect_default;
var import_vue17 = require("vue");
var VAVariantPromptMobile_default = /* @__PURE__ */ (0, import_vue16.defineComponent)({
  __name: "VAVariantPromptMobile",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue17.ref)(null);
    const titleId = useUniqueId_default();
    const selectedVariant = useDefault_default(() => {
      var _inferredVariant$valu2;
      return (_inferredVariant$valu2 = inferredVariant.value) !== null && _inferredVariant$valu2 !== void 0 ? _inferredVariant$valu2 : shuffleVariant();
    });
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      selectedVariant,
      isOpen,
      isDisabled,
      optOutAndClose,
      select,
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      VAButton: VAButton_default2,
      VASelect: VASelect_default2,
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue18 = require("vue");
var _hoisted_14 = ["lang", "aria-labelledby"];
var _hoisted_23 = {
  class: "va-variant-prompt-mobile__header"
};
var _hoisted_33 = ["id"];
var _hoisted_43 = {
  class: "va-variant-prompt-mobile__main"
};
var _hoisted_52 = ["value", "lang"];
var _hoisted_62 = {
  class: "va-variant-prompt-mobile__footer"
};
var _hoisted_72 = {
  class: "va-para va-para--subtle"
};
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue18.openBlock)(), (0, import_vue18.createBlock)(import_vue18.Transition, {
    name: "va-variant-prompt-mobile",
    appear: ""
  }, {
    default: (0, import_vue18.withCtx)(() => [$props.open ? ((0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt-mobile",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId
    }, [(0, import_vue18.createElementVNode)("div", _hoisted_23, [(0, import_vue18.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt-mobile__header__title va-title"
    }, (0, import_vue18.toDisplayString)($setup.useI18n("vp.main")), 9, _hoisted_33), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__header__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"])]), (0, import_vue18.createElementVNode)("div", _hoisted_43, [(0, import_vue18.createVNode)($setup["VASelect"], {
      modelValue: $setup.selectedVariant,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedVariant = $event),
      class: "va-variant-prompt-mobile__main__select",
      lang: $setup.selectedVariant,
      disabled: $props.disabled,
      "aria-labelledby": $setup.titleId
    }, {
      default: (0, import_vue18.withCtx)(() => [((0, import_vue18.openBlock)(true), (0, import_vue18.createElementBlock)(
        import_vue18.Fragment,
        null,
        (0, import_vue18.renderList)($setup.VALID_VARIANTS, (variant) => {
          return (0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("option", {
            key: variant,
            value: variant,
            lang: variant
          }, (0, import_vue18.toDisplayString)($setup.messages.variants[variant]), 9, _hoisted_52);
        }),
        128
        /* KEYED_FRAGMENT */
      ))]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "lang", "disabled", "aria-labelledby"]), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__main__action",
      action: "progressive",
      icon: "arrowNext",
      disabled: $props.disabled,
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.select($setup.selectedVariant))
    }, {
      default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createTextVNode)(
        (0, import_vue18.toDisplayString)($setup.useI18n("vp.button.ok")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])]), (0, import_vue18.createElementVNode)("footer", _hoisted_62, [(0, import_vue18.createElementVNode)(
      "p",
      _hoisted_72,
      (0, import_vue18.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_14)) : (0, import_vue18.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPromptMobile.vue
VAVariantPromptMobile_default.render = render6;
VAVariantPromptMobile_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPromptMobile.vue";
VAVariantPromptMobile_default.__scopeId = "data-v-5cc7865b";
var VAVariantPromptMobile_default2 = VAVariantPromptMobile_default;
var import_vue20 = require("vue");
var App_default = /* @__PURE__ */ (0, import_vue19.defineComponent)({
  __name: "App",
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const isOpen = (0, import_vue20.ref)(true);
    const isDisabled = (0, import_vue20.ref)(false);
    const isMobile = isMobileDevice();
    const desktopMountPoint = getMountPoint();
    function setVariant(variant) {
      (0, import_ext_gadget.setLocalVariant)(variant);
      (0, import_ext_gadget.redirect)(variant, {
        forced: true
      });
    }
    addEventListener(isMobile ? "touchmove" : "scroll", () => {
      if (!isDisabled.value) {
        isOpen.value = false;
      }
    });
    function onOptOut() {
      (0, import_ext_gadget.setOptOut)();
    }
    const __returned__ = {
      isOpen,
      isDisabled,
      isMobile,
      desktopMountPoint,
      setVariant,
      onOptOut,
      VAVariantPrompt: VAVariantPrompt_default2,
      VAVariantPromptMobile: VAVariantPromptMobile_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue21 = require("vue");
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
    import_vue21.Fragment,
    null,
    [((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: $setup.desktopMountPoint
    }, [!$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPrompt"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[1] || (_cache[1] = ($event) => $setup.isDisabled = $event),
      "auto-close": false,
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)], 8, ["to"])), (0, import_vue21.createCommentVNode)(" Teleport to body because they are always floated at bottom "), ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: "body"
    }, [$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPromptMobile"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[2] || (_cache[2] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[3] || (_cache[3] = ($event) => $setup.isDisabled = $event),
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)]))],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/VariantAllyDialog/App.vue
App_default.render = render7;
App_default.__file = "src\\VariantAllyDialog\\App.vue";
var App_default2 = App_default;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var import_vue22 = require("vue");
var root = document.createElement("div");
document.body.append(root);
(0, import_vue22.createApp)(App_default2).mount(root);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvQXBwLnZ1ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvbW9kdWxlcy91dGlscy50cyIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdC52dWUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZUkxOG4udHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL21lc3NhZ2VzLmpzb24iLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUljb24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFJY29uLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBQnV0dG9uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBQnV0dG9uLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFGYWRlVHJhbnNpdGlvbi52dWUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZURlZmF1bHQudHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlci50cyIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50LnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VVbmlxdWVJZC50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFTZWxlY3QudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFTZWxlY3QudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFTZWxlY3QudnVlIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9BcHAudnVlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9WYXJpYW50QWxseURpYWxvZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7VmFsaWRWYXJpYW50LCByZWRpcmVjdCwgc2V0TG9jYWxWYXJpYW50LCBzZXRPcHRPdXR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IHtnZXRNb3VudFBvaW50LCBpc01vYmlsZURldmljZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCBWQVZhcmlhbnRQcm9tcHQgZnJvbSAnLi9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdC52dWUnO1xuaW1wb3J0IFZBVmFyaWFudFByb21wdE1vYmlsZSBmcm9tICcuL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSc7XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcblxuY29uc3QgaXNPcGVuID0gcmVmKHRydWUpO1xuY29uc3QgaXNEaXNhYmxlZCA9IHJlZihmYWxzZSk7XG5jb25zdCBpc01vYmlsZSA9IGlzTW9iaWxlRGV2aWNlKCk7XG5jb25zdCBkZXNrdG9wTW91bnRQb2ludCA9IGdldE1vdW50UG9pbnQoKTtcblxuZnVuY3Rpb24gc2V0VmFyaWFudCh2YXJpYW50OiBWYWxpZFZhcmlhbnQpIHtcblx0c2V0TG9jYWxWYXJpYW50KHZhcmlhbnQpO1xuXHRyZWRpcmVjdCh2YXJpYW50LCB7Zm9yY2VkOiB0cnVlfSk7XG59XG5cbi8vIEJyb3dzZXIgc3VwcG9ydDogaU9TIFNhZmFyaSA8IDE1XG4vLyBXb3JrIGFyb3VuZCBTYWZhcmkgZmlyaW5nIHNjcm9sbCBldmVudCBhdCB1bmV4cGVjdGVkIGNvbmRpdGlvbnMgKGUuZy4gcG9wcGluZyB1cCBTZWxlY3QpXG5hZGRFdmVudExpc3RlbmVyKGlzTW9iaWxlID8gJ3RvdWNobW92ZScgOiAnc2Nyb2xsJywgKCkgPT4ge1xuXHRpZiAoIWlzRGlzYWJsZWQudmFsdWUpIHtcblx0XHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0fVxufSk7XG5cbmZ1bmN0aW9uIG9uT3B0T3V0KCkge1xuXHRzZXRPcHRPdXQoKTtcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxUZWxlcG9ydCA6dG89XCJkZXNrdG9wTW91bnRQb2ludFwiPlxuXHRcdDxWQVZhcmlhbnRQcm9tcHRcblx0XHRcdHYtaWY9XCIhaXNNb2JpbGVcIlxuXHRcdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHRcdHYtbW9kZWw6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVkXCJcblx0XHRcdDphdXRvLWNsb3NlPVwiZmFsc2VcIlxuXHRcdFx0QG9wdG91dD1cIm9uT3B0T3V0XCJcblx0XHRcdEBzZWxlY3Q9XCJzZXRWYXJpYW50XCJcblx0XHQvPlxuXHQ8L1RlbGVwb3J0PlxuXG5cdDwhLS0gVGVsZXBvcnQgdG8gYm9keSBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBmbG9hdGVkIGF0IGJvdHRvbSAtLT5cblx0PFRlbGVwb3J0IHRvPVwiYm9keVwiPlxuXHRcdDxWQVZhcmlhbnRQcm9tcHRNb2JpbGVcblx0XHRcdHYtaWY9XCJpc01vYmlsZVwiXG5cdFx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdFx0di1tb2RlbDpkaXNhYmxlZD1cImlzRGlzYWJsZWRcIlxuXHRcdFx0QG9wdG91dD1cIm9uT3B0T3V0XCJcblx0XHRcdEBzZWxlY3Q9XCJzZXRWYXJpYW50XCJcblx0XHQvPlxuXHQ8L1RlbGVwb3J0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS12YXJpYW50LXByb21wdCB7XG5cdC8vIFZlY3RvciAyMDIyIHNwZWNpZmljIGFkanVzdG1lbnRzXG5cdC5za2luLXZlY3Rvci0yMDIyICYge1xuXHRcdC8vIENhbGN1bGF0ZWQgZnJvbSBWZWN0b3IgMjAyMiBzb3VyY2UgY29kZVxuXHRcdEB2ZWN0b3ItMjAyMi1oZWFkZXItaGVpZ2h0OiA1MHB4ICsgMiAqIDhweDtcblx0XHRtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSBAc3BhY2luZy12ZXJ0aWNhbC1kaWFsb2cgLSBAdmVjdG9yLTIwMjItaGVhZGVyLWhlaWdodCk7XG5cblx0XHQudmVjdG9yLXRvYy1hdmFpbGFibGUudmVjdG9yLWZlYXR1cmUtdG9jLXBpbm5lZC1jbGllbnRwcmVmLTEgJixcblx0XHQudmVjdG9yLWZlYXR1cmUtbWFpbi1tZW51LXBpbm5lZC1lbmFibGVkICYge1xuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyMHB4KSBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG5cdFx0XHRcdGxlZnQ6IHVuc2V0O1xuXG5cdFx0XHRcdC8vIENhbGN1bGF0ZWQgZnJvbSBWZWN0b3IgMjAyMiBzb3VyY2UgY29kZVxuXHRcdFx0XHQvLyBJbiB0aGlzIHdpZHRoIHRoaXMgcHJvbXB0IHdpbGwgbm90IG9ic2N1cmUgYXJ0aWNsZSBjb250ZW50XG5cdFx0XHRcdEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmc6IDIuNzVlbTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0oQHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZyAvIDMgKiAyKTtcblx0XHRcdFx0bWF4LXdpZHRoOiBjYWxjKDEyLjI1ZW0gKyAzNnB4KTtcblx0XHRcdFx0cGFkZGluZzogQHNwYWNpbmctMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuXHRcdFx0QHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZzogMy4yNWVtO1xuXHRcdFx0bGVmdDogdW5zZXQ7XG5cdFx0XHRtYXJnaW4tbGVmdDogLShAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nIC8gMyAqIDIpO1xuXHRcdFx0bWF4LXdpZHRoOiBjYWxjKDE1Ljc1ZW0gKyAzNnB4KTtcblx0XHR9XG5cdH1cbn1cbjwvc3R5bGU+XG4uL21vZHVsZXMvdXRpbHNcbiIsICJpbXBvcnQge2NvbXB1dGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcblxuY29uc3QgVkFMSURfVkFSSUFOVFMgPSBbJ3poLWNuJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3JywgJ3poLWhrJywgJ3poLW1vJ10gYXMgY29uc3Q7XG5cbi8vIFdyYXAgd2dVc2VyVmFyaWFudCBpbiBhIHJlZiBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuLy8gSXQgaGFzIG5vIHJlYWN0aXZpdHkgaW4gcHJvZHVjdGlvbi4gKGNoYW5nZXMgdG8gd2dVc2VyVmFyaWFudCB3aWxsIG5vdCBiZSByZWZsZWN0ZWQpXG4vLyB3Z1VzZXJWYXJpYW50IGNhbiBiZSBudWxsLCBzbyBmYWxscyBiYWNrIHRvIGFuIGVtcHR5IHN0cmluZy5cbmNvbnN0IHdnVXNlclZhcmlhbnQgPSByZWYobXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpID8/ICcnKTtcblxuZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKTogYm9vbGVhbiB7XG5cdC8vIEJyb3dzZXIgc3VwcG9ydDpcblx0Ly8gQ2hyb21pdW0gb24gc29tZSBBbmRyb2lkIGRldmljZSAoZS5nLiBTYW1zdW5nKSBoYXMgXCIoaG92ZXI6IGhvdmVyKVwiIHNldFxuXHQvLyBTbyBjaGVjayBwb2ludGVyIHRvZ2V0aGVyXG5cdHJldHVybiBtYXRjaE1lZGlhKCcoaG92ZXI6IG5vbmUpLCAocG9pbnRlcjogY29hcnNlKScpLm1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGdldE1vdW50UG9pbnQoKTogRWxlbWVudCB7XG5cdHN3aXRjaCAobXcuY29uZmlnLmdldCgnc2tpbicpKSB7XG5cdFx0Y2FzZSAndmVjdG9yLTIwMjInOlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1wYWdlLWNvbnRhaW5lcicpWzBdID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0Y2FzZSAnZ29uZ2JpJzpcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctY29udGVudC1ibG9jaycpID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBkb2N1bWVudC5ib2R5O1xuXHR9XG59XG5cbmNvbnN0IGluZmVycmVkVmFyaWFudCA9IGNvbXB1dGVkKCgpID0+IHtcblx0aWYgKChWQUxJRF9WQVJJQU5UUyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXMod2dVc2VyVmFyaWFudC52YWx1ZSkpIHtcblx0XHRyZXR1cm4gd2dVc2VyVmFyaWFudC52YWx1ZSBhcyBWYWxpZFZhcmlhbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59KTtcblxuLyoqXG4gKiBTaHVmZmxlIGJldHdlZW4gYWxsIHZhbGlkIHZhcmlhbnRzLlxuICpcbiAqIEBwYXJhbSBsYXN0IGxhc3Qgc2h1ZmZsZWQgdmFyaWFudCwgdXNlZCB0byBwcmV2ZW50IGR1cGxpY2F0aW9uc1xuICogQHJldHVybnMgc2h1ZmZsZWQgdmFyaWFudFxuICovXG5mdW5jdGlvbiBzaHVmZmxlVmFyaWFudChsYXN0PzogVmFsaWRWYXJpYW50KTogVmFsaWRWYXJpYW50IHtcblx0Y29uc3QgdGFyZ2V0QXJyYXkgPSBbLi4uVkFMSURfVkFSSUFOVFNdLmZpbHRlcigoaSkgPT4ge1xuXHRcdHJldHVybiBpICE9PSBsYXN0O1xuXHR9KTtcblx0Y29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXRBcnJheS5sZW5ndGgpO1xuXHRyZXR1cm4gdGFyZ2V0QXJyYXlbcmFuZG9tSW5kZXhdITtcbn1cblxuZXhwb3J0IHtWQUxJRF9WQVJJQU5UUywgd2dVc2VyVmFyaWFudCwgaXNNb2JpbGVEZXZpY2UsIGdldE1vdW50UG9pbnQsIGluZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1ZBTElEX1ZBUklBTlRTLCBpbmZlcnJlZFZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuaW1wb3J0IHtyZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHVzZUkxOG4sIHtpMThuVmFyaWFudH0gZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlSTE4bic7XG5pbXBvcnQgVkFCdXR0b24gZnJvbSAnLi9WQUJ1dHRvbi52dWUnO1xuaW1wb3J0IFZBRmFkZVRyYW5zaXRpb24gZnJvbSAnLi9WQUZhZGVUcmFuc2l0aW9uLnZ1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB1c2VEZWZhdWx0IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZURlZmF1bHQnO1xuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuaW1wb3J0IHVzZVNodWZmbGVkVmFyaWFudCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VTaHVmZmxlZFZhcmlhbnQnO1xuaW1wb3J0IHVzZVVuaXF1ZUlkIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVVuaXF1ZUlkJztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG5cdGRlZmluZVByb3BzPHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0XHRhdXRvQ2xvc2U/OiBib29sZWFuO1xuXHR9PigpLFxuXHR7XG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdGF1dG9DbG9zZTogZmFsc2UsXG5cdH1cbik7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTpvcGVuJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3VwZGF0ZTpkaXNhYmxlZCcsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICdzZWxlY3QnLCB2YXJpYW50OiBWYWxpZFZhcmlhbnQpOiB2b2lkO1xuXHQoZTogJ29wdG91dCcpOiB2b2lkO1xufT4oKTtcblxuY29uc3QgcHJvbXB0ID0gcmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5jb25zdCB0aXRsZUlkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IGRlc2NJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBpc09wZW4gPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdvcGVuJyk7XG5jb25zdCBpc0Rpc2FibGVkID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnZGlzYWJsZWQnKTtcbmNvbnN0IGlzVmFyaWFudE5hcnJvd2VkID0gdXNlRGVmYXVsdCgoKSA9PiBpbmZlcnJlZFZhcmlhbnQudmFsdWUgIT09IG51bGwpO1xuY29uc3Qgc2h1ZmZsZWRWYXJpYW50ID0gdXNlU2h1ZmZsZWRWYXJpYW50KGlzVmFyaWFudE5hcnJvd2VkKTtcblxuZnVuY3Rpb24gb3B0T3V0QW5kQ2xvc2UoKSB7XG5cdGVtaXQoJ29wdG91dCcpO1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRpc0Rpc2FibGVkLnZhbHVlID0gdHJ1ZTtcblx0ZW1pdCgnc2VsZWN0JywgdmFyaWFudCk7XG59XG5cbndhdGNoKHByb21wdCwgKCkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gcHJvbXB0LnZhbHVlO1xuXHRpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldikgPT4ge1xuXHRcdFx0Ly8gRG8gbm90IGRpc21pc3MgaWYgYW55IGJ1dHRvbiBpcyBwcmVzc2VkIG9yIHRoZSBwcm9tcHQgaXMgZGlzYWJsZWRcblx0XHRcdGlmIChldi5idXR0b25zID09PSAwICYmIHByb3BzLmF1dG9DbG9zZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcblx0XHRcdFx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRyYW5zaXRpb24gbmFtZT1cInZhLXZhcmlhbnQtcHJvbXB0XCIgYXBwZWFyPlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJvcGVuXCJcblx0XHRcdHJlZj1cInByb21wdFwiXG5cdFx0XHQ6bGFuZz1cImB6aC0ke2kxOG5WYXJpYW50fWBcIlxuXHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdFwiXG5cdFx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRcdGFyaWEtbW9kYWw9XCJmYWxzZVwiXG5cdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0XHQ6YXJpYS1kZXNjcmliZWRieT1cImRlc2NJZFwiXG5cdFx0PlxuXHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Nsb3NlXCJcblx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRpY29uPVwiY2xvc2VcIlxuXHRcdFx0XHQ6dGl0bGU9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmFyaWEtbGFiZWw9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRAY2xpY2s9XCJvcHRPdXRBbmRDbG9zZVwiXG5cdFx0XHQvPlxuXHRcdFx0PGgyIDppZD1cInRpdGxlSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZSB2YS10aXRsZVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpIH19PGJyIC8+XG5cdFx0XHRcdDxWQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHR2LWlmPVwiIWlzVmFyaWFudE5hcnJvd2VkXCJcblx0XHRcdFx0XHRcdDprZXk9XCJzaHVmZmxlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdFx0Omxhbmc9XCJgemgtJHtzaHVmZmxlZFZhcmlhbnR9YFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZV9fdmFyaWFudFwiXG5cdFx0XHRcdFx0XHQ+e3sgbWVzc2FnZXMudmFyaWFudHNbc2h1ZmZsZWRWYXJpYW50XSB9fTwvc3BhblxuXHRcdFx0XHRcdD5cblx0XHRcdFx0PC9WQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0PC9oMj5cblx0XHRcdDxwIDppZD1cImRlc2NJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Rlc2MgdmEtcGFyYVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLm1haW4uYWx0JyA6ICd2cC5tYWluJykgfX1cblx0XHRcdDwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiPlxuXHRcdFx0XHQ8IS0tIGluZmVycmVkVmFyaWFudCBpcyBub24tbnVsbCwgZ3VhcmRlZCBieSBpc1ZhcmlhbnROYXJyb3dlZCAtLT5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0di1mb3I9XCJ2YXJpYW50IGluIGlzVmFyaWFudE5hcnJvd2VkICYmIGluZmVycmVkVmFyaWFudCAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBbaW5mZXJyZWRWYXJpYW50XVxuXHRcdFx0XHRcdFx0OiBWQUxJRF9WQVJJQU5UU1wiXG5cdFx0XHRcdFx0OmtleT1cInZhcmlhbnRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiXG5cdFx0XHRcdFx0OmNsYXNzPVwieyd2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uLS1wcmltYXJ5JzogaXNWYXJpYW50TmFycm93ZWR9XCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0Omxhbmc9XCJ2YXJpYW50XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwic2VsZWN0KHZhcmlhbnQpXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt7IG1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdIH19XG5cdFx0XHRcdDwvVkFCdXR0b24+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdHYtaWY9XCJpc1ZhcmlhbnROYXJyb3dlZFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cImlzVmFyaWFudE5hcnJvd2VkID0gZmFsc2VcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAuYnV0dG9uLm90aGVyJykgfX1cblx0XHRcdFx0PC9WQUJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGZvb3RlciBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4uZXh0JykgfX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdDwvVHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdGl0bGUge1xuXHRib3JkZXI6IDA7IC8vIFJlc2V0XG5cdHBhZGRpbmc6IDA7IC8vIFJlc2V0XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cblx0Zm9udC1zaXplOiBAZm9udC1zaXplLXh4LWxhcmdlO1xuXHRmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0LWJvbGQ7XG5cdG1hcmdpbjogQHNwYWNpbmctNTAgQHNwYWNpbmctMDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xufVxuXG4udmEtcGFyYSB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy01MDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXG5cdCYtLXN1YnRsZSB7XG5cdFx0Y29sb3I6IEBjb2xvci1zdWJ0bGU7XG5cdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXgtc21hbGw7XG5cdFx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMzU7XG5cdH1cbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0IHtcblx0Ym94LXNpemluZzogQGJveC1zaXppbmctYmFzZTtcblx0ei1pbmRleDogQHotaW5kZXgtb3ZlcmxheTtcblx0cGFkZGluZzogQHNwYWNpbmctMTAwIEBzcGFjaW5nLTE1MDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZztcblx0Ym90dG9tOiBAc3BhY2luZy12ZXJ0aWNhbC1kaWFsb2c7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZyAqIDIpO1xuXHRtYXgtd2lkdGg6IDE4ZW07XG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXG5cdG92ZXJmbG93OiBhdXRvO1xuXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuXHRib3JkZXI6IEBib3JkZXItYmFzZTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblx0Ym94LXNoYWRvdzogQGJveC1zaGFkb3ctZHJvcC1tZWRpdW07XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc3lzdGVtLXNhbnM7XG5cdGZvbnQtc2l6ZTogMXJlbTsgLy8gUmVzZXRcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDsgLy8gUmVzZXRcblxuXHQmX19jbG9zZSB7XG5cdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHR9XG5cblx0Jl9fdGl0bGUge1xuXHRcdCZfX3ZhcmlhbnQge1xuXHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHR9XG5cdH1cblxuXHQmX19vcHRpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW46IEBzcGFjaW5nLTc1IEBzcGFjaW5nLTA7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yLWJhc2U7XG5cdFx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblxuXHRcdCZfX2J1dHRvbiB7XG5cdFx0XHRmb250LXNpemU6IEBmb250LXNpemUtc21hbGw7XG5cdFx0XHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS1zdWJ0bGU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXG5cdFx0XHQmLS1wcmltYXJ5IHtcblx0XHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHRcdH1cblxuXHRcdFx0Jjpob3Zlcixcblx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKiBQcm9tcHQgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbi52YS12YXJpYW50LXByb21wdC1lbnRlci1hY3RpdmUsXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtYWN0aXZlIHtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHktZmFkZTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb24tbWVkaXVtO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLXN5c3RlbTtcbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LWVudGVyLWZyb20sXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtdG8ge1xuXHRvcGFjaXR5OiAwO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uL21lc3NhZ2VzLmpzb24nO1xuaW1wb3J0IHt3Z1VzZXJWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcblxuLy8gSW50ZXJmYWNlIHZhcmlhbnQgb2YgdmFyaWFudCBwcm9tcHRcbmNvbnN0IGkxOG5WYXJpYW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuXHRpZiAod2dVc2VyVmFyaWFudC52YWx1ZSA9PT0gJ3poJykge1xuXHRcdC8vIE5vIGNvbnZlcnNpb246IHVzZSByYW5kb21seSBzZWxlY3RlZCB2YXJpYW50XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnaGFucycgOiAnaGFudCc7XG5cdH1cblx0aWYgKFsnemgtaGFudCcsICd6aC10dycsICd6aC1oaycsICd6aC1tbyddLmluY2x1ZGVzKHdnVXNlclZhcmlhbnQudmFsdWUpKSB7XG5cdFx0cmV0dXJuICdoYW50Jztcblx0fVxuXG5cdHJldHVybiAnaGFucyc7XG59KTtcblxuZnVuY3Rpb24gdXNlSTE4bihrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdGNvbnN0IGN1cnJlbnRNc2dzR3JvdXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSBtZXNzYWdlc1tpMThuVmFyaWFudC52YWx1ZV07XG5cdHJldHVybiBjdXJyZW50TXNnc0dyb3VwW2tleV0gPz8ga2V5O1xufVxuXG5leHBvcnQge3VzZUkxOG4gYXMgZGVmYXVsdCwgaTE4blZhcmlhbnR9O1xuIiwgIntcblx0XCJ2YXJpYW50c1wiOiB7XG5cdFx0XCJ6aC1jblwiOiBcIuS4reWbveWkp+mZhueugOS9k1wiLFxuXHRcdFwiemgtc2dcIjogXCLmlrDliqDlnaHnroDkvZNcIixcblx0XHRcInpoLW15XCI6IFwi6ams5p2l6KW/5Lqa566A5L2TXCIsXG5cdFx0XCJ6aC1oa1wiOiBcIuS4reWci+mmmea4r+e5gemrlFwiLFxuXHRcdFwiemgtbW9cIjogXCLkuK3lnIvmvrPploDnuYHpq5RcIixcblx0XHRcInpoLXR3XCI6IFwi5Lit5ZyL6Ie654Gj57mB6auUXCJcblx0fSxcblx0XCJoYW5zXCI6IHtcblx0XHRcInNwYWNlXCI6IFwiXCIsXG5cdFx0XCJjbG9zZVwiOiBcIuWFs+mXrVwiLFxuXHRcdFwidnAuaGVhZGVyXCI6IFwi5oiR5Lus5pSv5oyBXCIsXG5cdFx0XCJ2cC5oZWFkZXIuYWx0XCI6IFwi6K6w5L2P5q2k5Y+Y5L2T77yfXCIsXG5cdFx0XCJ2cC5tYWluXCI6IFwi6YCJ5Y+W5YaF5a6555qE6K+t6KiA5Y+Y5L2TXCIsXG5cdFx0XCJ2cC5tYWluLmFsdFwiOiBcIuS7peWQjumDveS9v+eUqOatpOWPmOS9k+WRiOeOsOWGheWuuVwiLFxuXHRcdFwidnAubWFpbi5leHRcIjogXCLkv53lrZjmgqjlgY/lpb3nmoTkuK3mlofor63oqIDlj5jkvZPvvIzku6Xpgb/lhY3mmL7npLrnroDnuYHmt7fmnYLnmoTlhoXlrrnvvIzmj5DkvpvmnIDkvbPnmoTpmIXor7vkvZPpqozjgIJcIixcblx0XHRcInZwLmJ1dHRvbi5va1wiOiBcIuehruWumlwiLFxuXHRcdFwidnAuYnV0dG9uLm90aGVyXCI6IFwi5YW25LuWXCJcblx0fSxcblx0XCJoYW50XCI6IHtcblx0XHRcInNwYWNlXCI6IFwiXCIsXG5cdFx0XCJjbG9zZVwiOiBcIumXnOmWiVwiLFxuXHRcdFwidnAuaGVhZGVyXCI6IFwi5oiR5YCR5pSv5o+0XCIsXG5cdFx0XCJ2cC5oZWFkZXIuYWx0XCI6IFwi6KiY5L2P5q2k6K6K6auU77yfXCIsXG5cdFx0XCJ2cC5tYWluXCI6IFwi6YG45Y+W5YWn5a6555qE6Kqe6KiA6K6K6auUXCIsXG5cdFx0XCJ2cC5tYWluLmFsdFwiOiBcIuS7peW+jOmDveS9v+eUqOatpOiuiumrlOWRiOePvuWFp+WuuVwiLFxuXHRcdFwidnAubWFpbi5leHRcIjogXCLlhLLlrZjmgqjlgY/lpb3nmoTkuK3mlofoqp7oqIDororpq5TvvIzku6Xpgb/lhY3poa/npLrnsKHnuYHmt7fpm5znmoTlhaflrrnvvIzmj5DkvpvmnIDkvbPnmoTplrHoroDpq5TpqZfjgIJcIixcblx0XHRcInZwLmJ1dHRvbi5va1wiOiBcIueiuuWumlwiLFxuXHRcdFwidnAuYnV0dG9uLm90aGVyXCI6IFwi5YW25LuWXCJcblx0fVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsga2V5OiAwIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGtleTogMSB9XG5jb25zdCBfaG9pc3RlZF80ID0geyBrZXk6IDIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInN2Z1wiLCB7XG4gICAgY2xhc3M6IFwidmEtaWNvbi1idXR0b25fX2ljb25cIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIFwieG1sbnM6eGxpbmtcIjogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gICAgd2lkdGg6ICRwcm9wcy5zaXplLFxuICAgIGhlaWdodDogJHByb3BzLnNpemUsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gIH0sIFtcbiAgICAoJHByb3BzLmljb24gPT09ICdsYW5nJylcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImdcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWRpc2FibGUgXCIpLFxuICAgICAgICAgIF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk0yMCAxOGgtMS40NGEuNjEuNjEgMCAwMS0uNC0uMTIuODEuODEgMCAwMS0uMjMtLjMxTDE3IDE1aC01bC0xIDIuNTRhLjc3Ljc3IDAgMDEtLjIyLjMuNTkuNTkgMCAwMS0uNC4xNEg5bDQuNTUtMTEuNDdoMS44OXptLTMuNTMtNC4zMUwxNC44OSA5LjVhMTEuNjIgMTEuNjIgMCAwMS0uMzktMS4yNHEtLjA5LjM3LS4xOS42OWwtLjE5LjU2LTEuNTggNC4xOXptLTYuMy0xLjU4YTEzLjQzIDEzLjQzIDAgMDEtMi45MS0xLjQxIDExLjQ2IDExLjQ2IDAgMDAyLjgxLTUuMzdIMTJWNEg3LjMxYTQgNCAwIDAwLS4yLS41NkM2Ljg3IDIuNzkgNi42IDIgNi42IDJsLTEuNDcuNXMuNC44OS42IDEuNUgwdjEuMzNoMi4xNUExMS4yMyAxMS4yMyAwIDAwNSAxMC43YTE3LjE5IDE3LjE5IDAgMDEtNSAyLjFxLjU2LjgyLjg3IDEuMzhhMjMuMjggMjMuMjggMCAwMDUuMjItMi41MSAxNS42NCAxNS42NCAwIDAwMy41NiAxLjc3ek0zLjYzIDUuMzNoNC45MWE4LjExIDguMTEgMCAwMS0yLjQ1IDQuNDUgOS4xMSA5LjExIDAgMDEtMi40Ni00LjQ1elwiIH0sIG51bGwsIC0xIC8qIENBQ0hFRCAqLykpLFxuICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWVuYWJsZSBcIilcbiAgICAgICAgXSkpXG4gICAgICA6ICgkcHJvcHMuaWNvbiA9PT0gJ2Nsb3NlJylcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF8zLCBbLi4uKF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIm00LjM0IDIuOTMgMTIuNzMgMTIuNzMtMS40MSAxLjQxTDIuOTMgNC4zNXpcIiB9LCBudWxsLCAtMSAvKiBDQUNIRUQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk0xNy4wNyA0LjM0IDQuMzQgMTcuMDdsLTEuNDEtMS40MUwxNS42NiAyLjkzelwiIH0sIG51bGwsIC0xIC8qIENBQ0hFRCAqLylcbiAgICAgICAgICBdKSldKSlcbiAgICAgICAgOiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF80LCBbLi4uKF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk04LjU5IDMuNDIgMTQuMTcgOUgydjJoMTIuMTdsLTUuNTggNS41OUwxMCAxOGw4LTgtOC04elwiIH0sIG51bGwsIC0xIC8qIENBQ0hFRCAqLylcbiAgICAgICAgICBdKSldKSlcbiAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcyB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0ge1xuICBrZXk6IDEsXG4gIGNsYXNzOiBcInZhLWJ1dHRvbl9fdGV4dFwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInZhLWJ1dHRvblwiLCB7XG5cdFx0XHQndmEtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUnOiAkcHJvcHMuYWN0aW9uID09PSAncHJvZ3Jlc3NpdmUnLFxuXHRcdFx0J3ZhLWJ1dHRvbi0td2VpZ2h0LXF1aWV0JzogJHByb3BzLndlaWdodCA9PT0gJ3F1aWV0Jyxcblx0XHR9XSksXG4gICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKF9jdHguJGVtaXQoJ2NsaWNrJykpKVxuICB9LCBbXG4gICAgKCRwcm9wcy5pY29uICE9PSB1bmRlZmluZWQpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUljb25cIl0sIHtcbiAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgY2xhc3M6IFwidmEtYnV0dG9uX19pY29uXCIsXG4gICAgICAgICAgaWNvbjogJHByb3BzLmljb24sXG4gICAgICAgICAgc2l6ZTogMjBcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgIChfY3R4LiRzbG90c1snZGVmYXVsdCddKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgICAgICBdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgKCRwcm9wcy5pbmRpY2F0b3IgIT09IHVuZGVmaW5lZClcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBSWNvblwiXSwge1xuICAgICAgICAgIGtleTogMixcbiAgICAgICAgICBjbGFzczogXCJ2YS1idXR0b25fX2luZGljYXRvclwiLFxuICAgICAgICAgIGljb246ICRwcm9wcy5pbmRpY2F0b3IsXG4gICAgICAgICAgc2l6ZTogMTZcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gIF0sIDIgLyogQ0xBU1MgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiNzczNGIxXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLWZhZGVcIixcbiAgICBtb2RlOiBcIm91dC1pblwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gICAgXSksXG4gICAgXzogMyAvKiBGT1JXQVJERUQgKi9cbiAgfSkpXG59IiwgImNvbnN0IHNjcmlwdCA9IHt9O2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1iYjljNTc1MVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtSZWYsIFdhdGNoU291cmNlLCBjb21wdXRlZCwgc2hhbGxvd1JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVmIHRoYXQsIGNhbiBiZSBpbmRlcGVuZGVudGx5IHVwZGF0ZWQsIGJ1dCB3aGVuIGl0cyBkZWZhdWx0XG4gKiB2YWx1ZSBjaGFuZ2VzLCBpdCBpcyByZXN0b3JlZCB0byBpdHMgKG5ldykgZGVmYXVsdCB2YWx1ZS5cbiAqXG4gKiBVc2VkIGZvciBkZWJ1Z2dpbmcuXG4gKi9cbmZ1bmN0aW9uIHVzZURlZmF1bHQ8VD4oZGVmYXVsdFZhbHVlOiBXYXRjaFNvdXJjZTxUPik6IFJlZjxUPiB7XG5cdGNvbnN0IHJlYWxSZWYgPSBzaGFsbG93UmVmPFQ+KHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0VmFsdWUoKSA6IGRlZmF1bHRWYWx1ZS52YWx1ZSk7XG5cblx0d2F0Y2goXG5cdFx0ZGVmYXVsdFZhbHVlLFxuXHRcdChuZXdWYWx1ZSkgPT4ge1xuXHRcdFx0cmVhbFJlZi52YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdH0sXG5cdFx0e2RlZXA6IHRydWV9XG5cdCk7XG5cblx0cmV0dXJuIGNvbXB1dGVkKHtcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gcmVhbFJlZi52YWx1ZSBhcyBUO1xuXHRcdH0sXG5cdFx0c2V0KG5ld1ZhbHVlKSB7XG5cdFx0XHRyZWFsUmVmLnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0fSxcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURlZmF1bHQ7XG4iLCAiaW1wb3J0IHtXcml0YWJsZUNvbXB1dGVkUmVmLCBjb21wdXRlZH0gZnJvbSAndnVlJztcblxuLyoqXG4gKiBSZXR1cm4gYSBjb21wdXRlZCBwcm9wZXJ0eSB0aGF0IHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcHJvcCB2YWx1ZSB3aGVuIGlzIGFjY2Vzc2VkXG4gKiBhbmQgZmlyZXMgYW4gZXZlbnQgd2hlbiBpcyBzZXQuIFVzZWQgd2l0aCB2LW1vZGVsLlxuICpcbiAqIEBwYXJhbSBwcm9wcyBwcm9wcyBmaWVsZCBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIGVtaXQgZW1pdCBmdW5jdGlvbiBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIG5hbWUgbmFtZSBvZiB0aGUgcHJvcFxuICogQHJldHVybiB3cmFwcGVkIGNvbXB1dGVyIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIHVzZU1vZGVsV3JhcHBlcjxUIGV4dGVuZHMgc3RyaW5nLCBQIGV4dGVuZHMgUmVjb3JkPFQsIHVua25vd24+Pihcblx0cHJvcHM6IFAsXG5cdGVtaXQ6IChldmVudDogYHVwZGF0ZToke1R9YCwgdmFsdWU6IFBbVF0pID0+IHZvaWQsXG5cdG5hbWU6IFQgPSAnbW9kZWxWYWx1ZScgYXMgVFxuKTogV3JpdGFibGVDb21wdXRlZFJlZjxQW1RdPiB7XG5cdHJldHVybiBjb21wdXRlZCh7XG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHByb3BzW25hbWVdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRlbWl0KGB1cGRhdGU6JHtuYW1lfWAsIHZhbHVlKTtcblx0XHR9LFxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kZWxXcmFwcGVyO1xuIiwgImltcG9ydCB7UmVmLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHtpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuXG5jb25zdCBJTlRFUlZBTCA9IDMgKiAxMDAwO1xuXG4vKipcbiAqIFJldHVybiBhIHJlZiB3aGljaCBzaHVmZmxlIGJldHdlZW4gYWxsIHBvc3NpYmxlIHZhcmlhbnRzLlxuICpcbiAqIEBwYXJhbSBpc0ZyZWV6ZWQgc2hvdWxkIHNodWZmbGluZyBwYXVzZSBvciBub3RcbiAqL1xuZnVuY3Rpb24gdXNlU2h1ZmZsZWRWYXJpYW50KGlzRnJlZXplZDogUmVmPGJvb2xlYW4+KTogUmVmPFZhbGlkVmFyaWFudD4ge1xuXHRjb25zdCByZXN1bHQgPSByZWY8VmFsaWRWYXJpYW50PihzaHVmZmxlVmFyaWFudCgpKTtcblx0bGV0IGlkOiBudW1iZXI7XG5cblx0d2F0Y2goXG5cdFx0aXNGcmVlemVkLFxuXHRcdChuZXdWYWx1ZSkgPT4ge1xuXHRcdFx0aWYgKG5ld1ZhbHVlKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIGZyZWV6ZSBhdCBpbmZlcnJlZCB2YXJpYW50IGF0IGEgYmVzdCBlZmZvcnRcblx0XHRcdFx0Ly8gVGhpcyBzaG91bGQgYmUgbW9zdCBjYXNlc1xuXHRcdFx0XHRyZXN1bHQudmFsdWUgPSBpbmZlcnJlZFZhcmlhbnQudmFsdWUgPz8gc2h1ZmZsZVZhcmlhbnQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHRyZXN1bHQudmFsdWUgPSBzaHVmZmxlVmFyaWFudChyZXN1bHQudmFsdWUpO1xuXHRcdFx0XHR9LCBJTlRFUlZBTCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7aW1tZWRpYXRlOiB0cnVlfVxuXHQpO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNodWZmbGVkVmFyaWFudDtcbiIsICJsZXQgY291bnRlciA9IDA7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pcXVlIGVsZW1lbnQgSUQgb24gZWFjaCBjYWxsLlxuICpcbiAqIEByZXR1cm5zIGlkXG4gKi9cbmZ1bmN0aW9uIHVzZVVuaXF1ZUlkKCk6IHN0cmluZyB7XG5cdHJldHVybiBgdmEtJHtjb3VudGVyKyt9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVW5pcXVlSWQ7XG4iLCAiaW1wb3J0IHsgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJsYW5nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCIsIFwiYXJpYS1kZXNjcmliZWRieVwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF8zID0gW1wibGFuZ1wiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtdmFyaWFudC1wcm9tcHRcIixcbiAgICBhcHBlYXI6IFwiXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICgkcHJvcHMub3BlbilcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHJlZjogXCJwcm9tcHRcIixcbiAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5pMThuVmFyaWFudH1gLFxuICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRcIixcbiAgICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgICBcImFyaWEtbW9kYWxcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWQsXG4gICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogJHNldHVwLmRlc2NJZFxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fY2xvc2VcIixcbiAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgIGljb246IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgdGl0bGU6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vcHRPdXRBbmRDbG9zZVxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1widGl0bGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiZGlzYWJsZWRcIl0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgyXCIsIHtcbiAgICAgICAgICAgICAgaWQ6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGUgdmEtdGl0bGVcIlxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnJcIiwgbnVsbCwgbnVsbCwgLTEgLyogQ0FDSEVEICovKSksXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUZhZGVUcmFuc2l0aW9uXCJdLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgKCEkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQpXG4gICAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAkc2V0dXAuc2h1ZmZsZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZzogYHpoLSR7JHNldHVwLnNodWZmbGVkVmFyaWFudH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlX192YXJpYW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1skc2V0dXAuc2h1ZmZsZWRWYXJpYW50XSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzMpKVxuICAgICAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzIpLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwge1xuICAgICAgICAgICAgICBpZDogJHNldHVwLmRlc2NJZCxcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX2Rlc2MgdmEtcGFyYVwiXG4gICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5tYWluLmFsdCcgOiAndnAubWFpbicpKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNCksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBpbmZlcnJlZFZhcmlhbnQgaXMgbm9uLW51bGwsIGd1YXJkZWQgYnkgaXNWYXJpYW50TmFycm93ZWQgXCIpLFxuICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCAmJiAkc2V0dXAuaW5mZXJyZWRWYXJpYW50ICE9PSBudWxsXG5cdFx0XHRcdFx0XHQ/IFskc2V0dXAuaW5mZXJyZWRWYXJpYW50XVxuXHRcdFx0XHRcdFx0OiAkc2V0dXAuVkFMSURfVkFSSUFOVFMsICh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgICAga2V5OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCIsIHsndmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvbi0tcHJpbWFyeSc6ICRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZH1dKSxcbiAgICAgICAgICAgICAgICAgIGluZGljYXRvcjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgICAgICAgICAgICBsYW5nOiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiAoJHNldHVwLnNlbGVjdCh2YXJpYW50KSlcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0pLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF86IDIgLyogRFlOQU1JQyAqL1xuICAgICAgICAgICAgICAgIH0sIDEwMzIgLyogUFJPUFMsIERZTkFNSUNfU0xPVFMgKi8sIFtcImNsYXNzXCIsIFwibGFuZ1wiLCBcImRpc2FibGVkXCIsIFwib25DbGlja1wiXSkpXG4gICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKSxcbiAgICAgICAgICAgICAgKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZClcbiAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yOiBcImFycm93TmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgPSBmYWxzZSkpXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLmJ1dHRvbi5vdGhlcicpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImRpc2FibGVkXCJdKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJmb290ZXJcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF83LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluLmV4dCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi01YTQ0Y2M3NVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG1vZGVsVmFsdWU6IHN0cmluZztcbn0+KCk7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTptb2RlbFZhbHVlJywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG59PigpO1xuXG5jb25zdCBtb2RlbFZhbHVlID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxzZWxlY3Qgdi1tb2RlbD1cIm1vZGVsVmFsdWVcIiBjbGFzcz1cInZhLXNlbGVjdFwiPlxuXHRcdDxzbG90IC8+XG5cdDwvc2VsZWN0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS1zZWxlY3Qge1xuXHQuc2VsZWN0X19oYW5kbGUoKTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0IEBzcGFjaW5nLTc1O1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBAaWNvbi1leHBhbmQ7XG5cdGJhY2tncm91bmQtc2l6ZTogQHNpemUtaWNvbi14LXNtYWxsO1xuXG5cdCY6ZGlzYWJsZWQge1xuXHRcdC5zZWxlY3RfX2hhbmRsZS0tZGlzYWJsZWQoKTtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBAaWNvbi1leHBhbmQtZGlzYWJsZWQ7XG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lLCB3aGljaCBzZXRzIGFuIG9wYWNpdHkgbGVzcyB0aGFuIDEgZm9yIGRpc2FibGVkIHNlbGVjdCBlbGVtZW50cy5cblx0XHRvcGFjaXR5OiBAb3BhY2l0eS1iYXNlO1xuXHRcdGN1cnNvcjogQGN1cnNvci1ub3QtYWxsb3dlZDtcblx0fVxuXG5cdCY6ZW5hYmxlZCB7XG5cdFx0LnNlbGVjdF9faGFuZGxlLS1lbmFibGVkKCk7XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgdk1vZGVsU2VsZWN0IGFzIF92TW9kZWxTZWxlY3QsIHdpdGhEaXJlY3RpdmVzIGFzIF93aXRoRGlyZWN0aXZlcywgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiBfd2l0aERpcmVjdGl2ZXMoKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNlbGVjdFwiLCB7XG4gICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLm1vZGVsVmFsdWUpID0gJGV2ZW50KSksXG4gICAgY2xhc3M6IFwidmEtc2VsZWN0XCJcbiAgfSwgW1xuICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge30sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgXSwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pKSwgW1xuICAgIFtfdk1vZGVsU2VsZWN0LCAkc2V0dXAubW9kZWxWYWx1ZV1cbiAgXSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1jOWI0NjQ2MFwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7VkFMSURfVkFSSUFOVFMsIGluZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuaW1wb3J0IHVzZUkxOG4sIHtpMThuVmFyaWFudH0gZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlSTE4bic7XG5pbXBvcnQgVkFCdXR0b24gZnJvbSAnLi9WQUJ1dHRvbi52dWUnO1xuaW1wb3J0IFZBU2VsZWN0IGZyb20gJy4vVkFTZWxlY3QudnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uL21lc3NhZ2VzLmpzb24nO1xuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgdXNlRGVmYXVsdCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VEZWZhdWx0JztcbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcbmltcG9ydCB1c2VVbmlxdWVJZCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VVbmlxdWVJZCc7XG5cbmNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKFxuXHRkZWZpbmVQcm9wczx7XG5cdFx0b3BlbjogYm9vbGVhbjtcblx0XHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdH0+KCksXG5cdHtcblx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdH1cbik7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTpvcGVuJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3VwZGF0ZTpkaXNhYmxlZCcsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICdzZWxlY3QnLCB2YXJpYW50OiBWYWxpZFZhcmlhbnQpOiB2b2lkO1xuXHQoZTogJ29wdG91dCcpOiB2b2lkO1xufT4oKTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcbmNvbnN0IHByb21wdCA9IHJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuY29uc3QgdGl0bGVJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBzZWxlY3RlZFZhcmlhbnQgPSB1c2VEZWZhdWx0KCgpID0+IGluZmVycmVkVmFyaWFudC52YWx1ZSA/PyBzaHVmZmxlVmFyaWFudCgpKTtcbmNvbnN0IGlzT3BlbiA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ29wZW4nKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdkaXNhYmxlZCcpO1xuXG5mdW5jdGlvbiBvcHRPdXRBbmRDbG9zZSgpIHtcblx0ZW1pdCgnb3B0b3V0Jyk7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QodmFyaWFudDogVmFsaWRWYXJpYW50KSB7XG5cdGlzRGlzYWJsZWQudmFsdWUgPSB0cnVlO1xuXHRlbWl0KCdzZWxlY3QnLCB2YXJpYW50KTtcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxUcmFuc2l0aW9uIG5hbWU9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIiBhcHBlYXI+XG5cdFx0PGRpdlxuXHRcdFx0di1pZj1cIm9wZW5cIlxuXHRcdFx0cmVmPVwicHJvbXB0XCJcblx0XHRcdDpsYW5nPVwiYHpoLSR7aTE4blZhcmlhbnR9YFwiXG5cdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiXG5cdFx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRcdGFyaWEtbW9kYWw9XCJmYWxzZVwiXG5cdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyXCI+XG5cdFx0XHRcdDxoMiA6aWQ9XCJ0aXRsZUlkXCIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fdGl0bGUgdmEtdGl0bGVcIj5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5tYWluJykgfX1cblx0XHRcdFx0PC9oMj5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fY2xvc2VcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRpY29uPVwiY2xvc2VcIlxuXHRcdFx0XHRcdDp0aXRsZT1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHRcdDphcmlhLWxhYmVsPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cIm9wdE91dEFuZENsb3NlXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpblwiPlxuXHRcdFx0XHQ8VkFTZWxlY3Rcblx0XHRcdFx0XHR2LW1vZGVsPVwic2VsZWN0ZWRWYXJpYW50XCJcblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fc2VsZWN0XCJcblx0XHRcdFx0XHQ6bGFuZz1cInNlbGVjdGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdDphcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZUlkXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxvcHRpb24gdi1mb3I9XCJ2YXJpYW50IGluIFZBTElEX1ZBUklBTlRTXCIgOmtleT1cInZhcmlhbnRcIiA6dmFsdWU9XCJ2YXJpYW50XCIgOmxhbmc9XCJ2YXJpYW50XCI+XG5cdFx0XHRcdFx0XHR7eyBtZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSB9fVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQ8L1ZBU2VsZWN0PlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fYWN0aW9uXCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0aWNvbj1cImFycm93TmV4dFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cInNlbGVjdChzZWxlY3RlZFZhcmlhbnQpXCJcblx0XHRcdFx0XHQ+e3sgdXNlSTE4bigndnAuYnV0dG9uLm9rJykgfX08L1ZBQnV0dG9uXG5cdFx0XHRcdD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGZvb3RlciBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fZm9vdGVyXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIj5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5tYWluLmV4dCcpIH19XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdDwvZGl2PlxuXHQ8L1RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXRpdGxlIHtcblx0Ym9yZGVyOiAwOyAvLyBSZXNldFxuXHRwYWRkaW5nOiAwOyAvLyBSZXNldFxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG5cdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14eC1sYXJnZTtcblx0Zm9udC13ZWlnaHQ6IEBmb250LXdlaWdodC1ib2xkO1xuXHRtYXJnaW46IEBzcGFjaW5nLTUwIEBzcGFjaW5nLTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcbn1cblxuLnZhLXBhcmEge1xuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXHRtYXJnaW4tdG9wOiBAc3BhY2luZy01MDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXG5cdCYtLXN1YnRsZSB7XG5cdFx0Y29sb3I6IEBjb2xvci1zdWJ0bGU7XG5cdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXgtc21hbGw7XG5cdFx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMzU7XG5cdH1cbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZSB7XG5cdGJveC1zaXppbmc6IEBib3gtc2l6aW5nLWJhc2U7XG5cdHotaW5kZXg6IEB6LWluZGV4LW92ZXJsYXk7XG5cdHBhZGRpbmc6IEBzcGFjaW5nLTUwIEBzcGFjaW5nLTEwMDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiBAc3BhY2luZy0wO1xuXHRyaWdodDogQHNwYWNpbmctMDtcblx0Ym90dG9tOiBAc3BhY2luZy0wO1xuXHRtYXJnaW46IEBzcGFjaW5nLTAgYXV0bztcblx0d2lkdGg6IDEwMCU7XG5cdG1heC13aWR0aDogNjAwcHg7XG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXG5cdG92ZXJmbG93OiBhdXRvO1xuXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuXHRib3JkZXI6IEBib3JkZXItYmFzZTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblx0Ym94LXNoYWRvdzogQGJveC1zaGFkb3ctZHJvcC1tZWRpdW07XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc3lzdGVtLXNhbnM7XG5cdGZvbnQtc2l6ZTogMXJlbTsgLy8gUmVzZXRcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDsgLy8gUmVzZXRcblxuXHQmX19oZWFkZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdCZfX3RpdGxlIHtcblx0XHRcdGZsZXg6IDE7XG5cdFx0XHRmb250LXNpemU6IEBmb250LXNpemUtbWVkaXVtO1xuXHRcdH1cblxuXHRcdCZfX2Nsb3NlIHtcblx0XHRcdHBhZGRpbmc6IEBzcGFjaW5nLXNob3J0aGFuZC1idXR0b24taWNvbi1vbmx5O1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdFx0fVxuXHR9XG5cblx0Jl9fbWFpbiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRtYXJnaW4tdG9wOiBAc3BhY2luZy0yNTtcblxuXHRcdCZfX3NlbGVjdCB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IEBzcGFjaW5nLTc1O1xuXHRcdFx0ZmxleDogMTtcblx0XHR9XG5cblx0XHQmX19hY3Rpb24ge1xuXHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0fVxuXHR9XG5cblx0Jl9fY2xvc2Uge1xuXHRcdHBhZGRpbmc6IEBzcGFjaW5nLXNob3J0aGFuZC1idXR0b24taWNvbi1vbmx5O1xuXHRcdGZsb2F0OiByaWdodDtcblx0XHRtYXJnaW4tcmlnaHQ6IC0oQHNwYWNpbmctaG9yaXpvbnRhbC1idXR0b24taWNvbi1vbmx5ICsgMXB4KTtcblx0fVxufVxuXG4vKiBQcm9tcHQgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtZW50ZXItYWN0aXZlLFxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1sZWF2ZS1hY3RpdmUge1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBAdHJhbnNpdGlvbi1wcm9wZXJ0eS1sYXlvdXQ7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uLW1lZGl1bTtcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbi1zeXN0ZW07XG59XG5cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtZW50ZXItZnJvbSxcbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtbGVhdmUtdG8ge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59XG48L3N0eWxlPlxuLi4vbW9kdWxlcy91dGlsc1xuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IFtcImxhbmdcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5cIiB9XG5jb25zdCBfaG9pc3RlZF81ID0gW1widmFsdWVcIiwgXCJsYW5nXCJdXG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2Zvb3RlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UcmFuc2l0aW9uLCB7XG4gICAgbmFtZTogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIixcbiAgICBhcHBlYXI6IFwiXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICgkcHJvcHMub3BlbilcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHJlZjogXCJwcm9tcHRcIixcbiAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5pMThuVmFyaWFudH1gLFxuICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIsXG4gICAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJhcmlhLW1vZGFsXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMlwiLCB7XG4gICAgICAgICAgICAgICAgaWQ6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX190aXRsZSB2YS10aXRsZVwiXG4gICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4nKSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzMpLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fY2xvc2VcIixcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vcHRPdXRBbmRDbG9zZVxuICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJ0aXRsZVwiLCBcImFyaWEtbGFiZWxcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQVNlbGVjdFwiXSwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkVmFyaWFudCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX3NlbGVjdFwiLFxuICAgICAgICAgICAgICAgIGxhbmc6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAkc2V0dXAudGl0bGVJZFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAuVkFMSURfVkFSSUFOVFMsICh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwib3B0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgbGFuZzogdmFyaWFudFxuICAgICAgICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzUpKVxuICAgICAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcImxhbmdcIiwgXCJkaXNhYmxlZFwiLCBcImFyaWEtbGFiZWxsZWRieVwiXSksXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgkc2V0dXAuc2VsZWN0KCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpKSlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAuYnV0dG9uLm9rJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJmb290ZXJcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF83LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluLmV4dCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi01Y2M3ODY1YlwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIFRlbGVwb3J0IGFzIF9UZWxlcG9ydCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIFtcbiAgICAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RlbGVwb3J0LCB7IHRvOiAkc2V0dXAuZGVza3RvcE1vdW50UG9pbnQgfSwgW1xuICAgICAgKCEkc2V0dXAuaXNNb2JpbGUpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBVmFyaWFudFByb21wdFwiXSwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICAgICAgICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLmlzRGlzYWJsZWQsXG4gICAgICAgICAgICBcIm9uVXBkYXRlOmRpc2FibGVkXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzRGlzYWJsZWQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICBcImF1dG8tY2xvc2VcIjogZmFsc2UsXG4gICAgICAgICAgICBvbk9wdG91dDogJHNldHVwLm9uT3B0T3V0LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICRzZXR1cC5zZXRWYXJpYW50XG4gICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcImRpc2FibGVkXCJdKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0sIDggLyogUFJPUFMgKi8sIFtcInRvXCJdKSksXG4gICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBUZWxlcG9ydCB0byBib2R5IGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIGZsb2F0ZWQgYXQgYm90dG9tIFwiKSxcbiAgICAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RlbGVwb3J0LCB7IHRvOiBcImJvZHlcIiB9LCBbXG4gICAgICAoJHNldHVwLmlzTW9iaWxlKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQVZhcmlhbnRQcm9tcHRNb2JpbGVcIl0sIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5pc0Rpc2FibGVkLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpkaXNhYmxlZFwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc0Rpc2FibGVkKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgb25PcHRvdXQ6ICRzZXR1cC5vbk9wdE91dCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAkc2V0dXAuc2V0VmFyaWFudFxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSlcbiAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7XG5jcmVhdGVBcHAoQXBwKS5tb3VudChyb290KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFBQSxvQkFBaUVDLFFBQUEsd0JB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TG1ILE1BQU12RyxPQUFPZ0Y7TUFDYixpQkFBaUJsRixPQUFPLENBQUMsTUFBTUEsT0FBTyxDQUFDLElBQUkyQixZQUFZekIsT0FBT2dGLFNBQVV2RDtNQUN4RW1FLFVBQVU1RixPQUFPaUY7TUFDakIscUJBQXFCbkYsT0FBTyxDQUFDLE1BQU1BLE9BQU8sQ0FBQyxJQUFJMkIsWUFBWXpCLE9BQU9pRixhQUFjeEQ7TUFDaEY2SCxVQUFVdEosT0FBT2dKO01BQ2pCTyxVQUFVdkosT0FBTzRJO0lBQ25CLEdBQUcsTUFBTSxHQUFlLENBQUMsUUFBUSxVQUFVLENBQUMsTUFBQSxHQUM1Q00sYUFBQXRJLG9CQUFvQixRQUFRLElBQUksQ0FBQSxDQUNyQyxFQUFBO0lBQ0E7O0VBQXdCO0FBQzdCOztBQ2pDMlM0SSxZQUFPNUosU0FBU3VKO0FBQU9LLFlBQU94SSxTQUFTO0FBQWtDLElBQU95SSxlQUFRRDs7QUNDblksSUFBQUUsZUFBd0JqTixRQUFBLEtBQUE7QUFFeEIsSUFBTWtOLE9BQU9uTSxTQUFTb00sY0FBYyxLQUFLO0FBQ3pDcE0sU0FBU0UsS0FBS21NLE9BQU9GLElBQUk7Q0FBQSxHQUN6QkQsYUFBQUksV0FBVUwsWUFBRyxFQUFFTSxNQUFNSixJQUFJOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImltcG9ydF92dWUiLCAiVkFMSURfVkFSSUFOVFMiLCAid2dVc2VyVmFyaWFudCIsICJyZWYiLCAiX213JGNvbmZpZyRnZXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc01vYmlsZURldmljZSIsICJtYXRjaE1lZGlhIiwgIm1hdGNoZXMiLCAiZ2V0TW91bnRQb2ludCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImJvZHkiLCAicXVlcnlTZWxlY3RvciIsICJpbmZlcnJlZFZhcmlhbnQiLCAiY29tcHV0ZWQiLCAiaW5jbHVkZXMiLCAidmFsdWUiLCAic2h1ZmZsZVZhcmlhbnQiLCAibGFzdCIsICJ0YXJnZXRBcnJheSIsICJmaWx0ZXIiLCAiaSIsICJyYW5kb21JbmRleCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJsZW5ndGgiLCAiaW1wb3J0X3Z1ZTEyIiwgImltcG9ydF92dWUyIiwgIm1lc3NhZ2VzX2RlZmF1bHQiLCAidmFyaWFudHMiLCAiaGFucyIsICJzcGFjZSIsICJjbG9zZSIsICJoYW50IiwgImkxOG5WYXJpYW50IiwgInVzZUkxOG4iLCAia2V5IiwgIl9jdXJyZW50TXNnc0dyb3VwJGtleSIsICJjdXJyZW50TXNnc0dyb3VwIiwgImltcG9ydF92dWU0IiwgIl9ob2lzdGVkXzEiLCAiX2hvaXN0ZWRfMiIsICJfaG9pc3RlZF8zIiwgIl9ob2lzdGVkXzQiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjbGFzcyIsICJ4bWxucyIsICJ3aWR0aCIsICJzaXplIiwgImhlaWdodCIsICJ2aWV3Qm94IiwgImljb24iLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJkIiwgIlZBSWNvbl9kZWZhdWx0IiwgIl9fZmlsZSIsICJWQUljb25fZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTYiLCAiX2hvaXN0ZWRfMTIiLCAicmVuZGVyMiIsICJub3JtYWxpemVDbGFzcyIsICJhY3Rpb24iLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiJGV2ZW50IiwgIiRlbWl0IiwgImNyZWF0ZUJsb2NrIiwgIiRzbG90cyIsICJyZW5kZXJTbG90IiwgImluZGljYXRvciIsICJWQUJ1dHRvbl9kZWZhdWx0IiwgIl9fc2NvcGVJZCIsICJWQUJ1dHRvbl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNyIsICJyZW5kZXIzIiwgIlRyYW5zaXRpb24iLCAibmFtZSIsICJtb2RlIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJfIiwgInNjcmlwdCIsICJWQUZhZGVUcmFuc2l0aW9uX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTgiLCAidXNlRGVmYXVsdCIsICJkZWZhdWx0VmFsdWUiLCAicmVhbFJlZiIsICJzaGFsbG93UmVmIiwgIndhdGNoIiwgIm5ld1ZhbHVlIiwgImRlZXAiLCAic2V0IiwgInVzZURlZmF1bHRfZGVmYXVsdCIsICJpbXBvcnRfdnVlOSIsICJ1c2VNb2RlbFdyYXBwZXIiLCAicHJvcHMiLCAiZW1pdCIsICJjb25jYXQiLCAidXNlTW9kZWxXcmFwcGVyX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTEwIiwgIklOVEVSVkFMIiwgInVzZVNodWZmbGVkVmFyaWFudCIsICJpc0ZyZWV6ZWQiLCAicmVzdWx0IiwgImlkIiwgIl9pbmZlcnJlZFZhcmlhbnQkdmFsdSIsICJjbGVhckludGVydmFsIiwgIndpbmRvdyIsICJzZXRJbnRlcnZhbCIsICJpbW1lZGlhdGUiLCAidXNlU2h1ZmZsZWRWYXJpYW50X2RlZmF1bHQiLCAiY291bnRlciIsICJ1c2VVbmlxdWVJZCIsICJ1c2VVbmlxdWVJZF9kZWZhdWx0IiwgIl9fcHJvcHMiLCAiX19lbWl0IiwgInByb21wdCIsICJ0aXRsZUlkIiwgImRlc2NJZCIsICJpc09wZW4iLCAiaXNEaXNhYmxlZCIsICJpc1ZhcmlhbnROYXJyb3dlZCIsICJzaHVmZmxlZFZhcmlhbnQiLCAib3B0T3V0QW5kQ2xvc2UiLCAic2VsZWN0IiwgInZhcmlhbnQiLCAiZWxlbWVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2IiwgImJ1dHRvbnMiLCAiYXV0b0Nsb3NlIiwgImRpc2FibGVkIiwgImltcG9ydF92dWUxMyIsICJfaG9pc3RlZF8xMyIsICJfaG9pc3RlZF8yMiIsICJfaG9pc3RlZF8zMiIsICJfaG9pc3RlZF80MiIsICJfaG9pc3RlZF81IiwgIl9ob2lzdGVkXzYiLCAiX2hvaXN0ZWRfNyIsICJyZW5kZXI0IiwgImFwcGVhciIsICJvcGVuIiwgImxhbmciLCAicm9sZSIsICJjcmVhdGVWTm9kZSIsICJ0aXRsZSIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgIm1lc3NhZ2VzIiwgIkZyYWdtZW50IiwgInJlbmRlckxpc3QiLCAiX3RvRGlzcGxheVN0cmluZyIsICJWQVZhcmlhbnRQcm9tcHRfZGVmYXVsdCIsICJWQVZhcmlhbnRQcm9tcHRfZGVmYXVsdDIiLCAibW9kZWxWYWx1ZSIsICJpbXBvcnRfdnVlMTUiLCAicmVuZGVyNSIsICJ3aXRoRGlyZWN0aXZlcyIsICJ2TW9kZWxTZWxlY3QiLCAiVkFTZWxlY3RfZGVmYXVsdCIsICJWQVNlbGVjdF9kZWZhdWx0MiIsICJpbXBvcnRfdnVlMTciLCAic2VsZWN0ZWRWYXJpYW50IiwgIl9pbmZlcnJlZFZhcmlhbnQkdmFsdTIiLCAiaW1wb3J0X3Z1ZTE4IiwgIl9ob2lzdGVkXzE0IiwgIl9ob2lzdGVkXzIzIiwgIl9ob2lzdGVkXzMzIiwgIl9ob2lzdGVkXzQzIiwgIl9ob2lzdGVkXzUyIiwgIl9ob2lzdGVkXzYyIiwgIl9ob2lzdGVkXzcyIiwgInJlbmRlcjYiLCAiVkFWYXJpYW50UHJvbXB0TW9iaWxlX2RlZmF1bHQiLCAiVkFWYXJpYW50UHJvbXB0TW9iaWxlX2RlZmF1bHQyIiwgImltcG9ydF92dWUyMCIsICJpc01vYmlsZSIsICJkZXNrdG9wTW91bnRQb2ludCIsICJzZXRWYXJpYW50IiwgInNldExvY2FsVmFyaWFudCIsICJyZWRpcmVjdCIsICJmb3JjZWQiLCAib25PcHRPdXQiLCAic2V0T3B0T3V0IiwgImltcG9ydF92dWUyMSIsICJyZW5kZXI3IiwgIlRlbGVwb3J0IiwgInRvIiwgIm9uT3B0b3V0IiwgIm9uU2VsZWN0IiwgIkFwcF9kZWZhdWx0IiwgIkFwcF9kZWZhdWx0MiIsICJpbXBvcnRfdnVlMjIiLCAicm9vdCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJjcmVhdGVBcHAiLCAibW91bnQiXQp9Cg==
