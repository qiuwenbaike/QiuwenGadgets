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
//! src/VariantAllyDialog/VariantAllyDialog.ts
var import_vue22 = require("vue");
var import_vue19 = require("vue");
var import_vue20 = require("vue");
var import_ext_gadget = require("ext.gadget.VariantAlly");
var import_vue11 = require("vue");
var import_vue12 = require("vue");
var import_vue3 = require("vue");
var import_vue = require("vue");
var VAIcon_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
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
var import_vue2 = require("vue");
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
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("svg", {
    class: "va-icon-button__icon",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: $props.size,
    height: $props.size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true"
  }, [$props.icon === "lang" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_2, [(0, import_vue2.createCommentVNode)(" eslint-disable "), _cache[0] || (_cache[0] = (0, import_vue2.createElementVNode)(
    "path",
    {
      d: "M20 18h-1.44a.61.61 0 01-.4-.12.81.81 0 01-.23-.31L17 15h-5l-1 2.54a.77.77 0 01-.22.3.59.59 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.19 17.19 0 01-5 2.1q.56.82.87 1.38a23.28 23.28 0 005.22-2.51 15.64 15.64 0 003.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 01-2.45 4.45 9.11 9.11 0 01-2.46-4.45z"
    },
    null,
    -1
    /* HOISTED */
  )), (0, import_vue2.createCommentVNode)(" eslint-enable ")])) : $props.icon === "close" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_3, _cache[1] || (_cache[1] = [(0, import_vue2.createElementVNode)(
    "path",
    {
      d: "m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"
    },
    null,
    -1
    /* HOISTED */
  ), (0, import_vue2.createElementVNode)(
    "path",
    {
      d: "M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"
    },
    null,
    -1
    /* HOISTED */
  )]))) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_4, _cache[2] || (_cache[2] = [(0, import_vue2.createElementVNode)(
    "path",
    {
      d: "M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"
    },
    null,
    -1
    /* HOISTED */
  )])))], 8, _hoisted_1);
}
//! src/VariantAllyDialog/components/VAIcon.vue
VAIcon_default.render = render;
VAIcon_default.__file = "src\\VariantAllyDialog\\components\\VAIcon.vue";
var VAIcon_default2 = VAIcon_default;
var VAButton_default = /* @__PURE__ */ (0, import_vue3.defineComponent)({
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
var import_vue4 = require("vue");
var _hoisted_12 = {
  key: 1,
  class: "va-button__text"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
    "button",
    {
      class: (0, import_vue4.normalizeClass)(["va-button", {
        "va-button--action-progressive": $props.action === "progressive",
        "va-button--weight-quiet": $props.weight === "quiet"
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    },
    [$props.icon !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 0,
      class: "va-button__icon",
      icon: $props.icon,
      size: 20
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true), _ctx.$slots["default"] ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("span", _hoisted_12, [(0, import_vue4.renderSlot)(_ctx.$slots, "default", {}, void 0, true)])) : (0, import_vue4.createCommentVNode)("v-if", true), $props.indicator !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 2,
      class: "va-button__indicator",
      icon: $props.indicator,
      size: 16
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true)],
    2
    /* CLASS */
  );
}
//! src/VariantAllyDialog/components/VAButton.vue
VAButton_default.render = render2;
VAButton_default.__file = "src\\VariantAllyDialog\\components\\VAButton.vue";
VAButton_default.__scopeId = "data-v-bb7734b1";
var VAButton_default2 = VAButton_default;
var import_vue5 = require("vue");
function render3(_ctx, _cache) {
  return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(import_vue5.Transition, {
    name: "va-fade",
    mode: "out-in"
  }, {
    default: (0, import_vue5.withCtx)(() => [(0, import_vue5.renderSlot)(_ctx.$slots, "default", {}, void 0, true)]),
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
//! src/VariantAllyDialog/composables/useI18n.ts
var import_vue7 = require("vue");
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
//! src/VariantAllyDialog/modules/utils.ts
var import_vue6 = require("vue");
var VALID_VARIANTS = ["zh-cn", "zh-sg", "zh-my", "zh-tw", "zh-hk", "zh-mo"];
var wgUserVariant = (0, import_vue6.ref)((_mw$config$get = mw.config.get("wgUserVariant")) !== null && _mw$config$get !== void 0 ? _mw$config$get : "");
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
var inferredVariant = (0, import_vue6.computed)(() => {
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
//! src/VariantAllyDialog/composables/useI18n.ts
var i18nVariant = (0, import_vue7.computed)(() => {
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
//! src/VariantAllyDialog/composables/useUniqueId.ts
var counter = 0;
function useUniqueId() {
  return "va-".concat(counter++);
}
var useUniqueId_default = useUniqueId;
//! src/VariantAllyDialog/composables/useShuffledVariant.ts
var import_vue8 = require("vue");
var INTERVAL = 3 * 1e3;
function useShuffledVariant(isFreezed) {
  const result = (0, import_vue8.ref)(shuffleVariant());
  let id;
  (0, import_vue8.watch)(isFreezed, (newValue) => {
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
//! src/VariantAllyDialog/composables/useDefault.ts
var import_vue10 = require("vue");
function useDefault(defaultValue) {
  const realRef = (0, import_vue10.shallowRef)(typeof defaultValue === "function" ? defaultValue() : defaultValue.value);
  (0, import_vue10.watch)(defaultValue, (newValue) => {
    realRef.value = newValue;
  }, {
    deep: true
  });
  return (0, import_vue10.computed)({
    get() {
      return realRef.value;
    },
    set(newValue) {
      realRef.value = newValue;
    }
  });
}
var useDefault_default = useDefault;
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
      VAButton: VAButton_default2,
      VAFadeTransition: VAFadeTransition_default,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get inferredVariant() {
        return inferredVariant;
      },
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
      /* HOISTED */
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
var import_vue17 = require("vue");
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
      VAButton: VAButton_default2,
      VASelect: VASelect_default2,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
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
var root = document.createElement("div");
document.body.append(root);
(0, import_vue22.createApp)(App_default2).mount(root);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL1ZhcmlhbnRBbGx5RGlhbG9nLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9BcHAudnVlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdC52dWUiLCAiZDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBSWNvbi52dWU/dHlwZT10ZW1wbGF0ZSIsICIuLi8uLi9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUljb24udnVlIiwgImQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZSIsICIuLi8uLi9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUJ1dHRvbi52dWUiLCAiZDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9dGVtcGxhdGUiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFGYWRlVHJhbnNpdGlvbi52dWUiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZUkxOG4udHMiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL21lc3NhZ2VzLmpzb24iLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL21vZHVsZXMvdXRpbHMudHMiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZVVuaXF1ZUlkLnRzIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VTaHVmZmxlZFZhcmlhbnQudHMiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlci50cyIsICIuLi8uLi9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlRGVmYXVsdC50cyIsICJkOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXRlbXBsYXRlIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdC52dWUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJkOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFTZWxlY3QudnVlP3R5cGU9dGVtcGxhdGUiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFTZWxlY3QudnVlIiwgImQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGUiLCAiLi4vLi4vc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJkOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgIi4uLy4uL3NyYy9WYXJpYW50QWxseURpYWxvZy9BcHAudnVlIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7XG5jcmVhdGVBcHAoQXBwKS5tb3VudChyb290KTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3NldExvY2FsVmFyaWFudCwgcmVkaXJlY3QsIFZhbGlkVmFyaWFudCwgc2V0T3B0T3V0fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQVZhcmlhbnRQcm9tcHQgZnJvbSAnLi9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdC52dWUnO1xuaW1wb3J0IFZBVmFyaWFudFByb21wdE1vYmlsZSBmcm9tICcuL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSc7XG5pbXBvcnQge2dldE1vdW50UG9pbnQsIGlzTW9iaWxlRGV2aWNlfSBmcm9tICcuL21vZHVsZXMvdXRpbHMnO1xuXG5jb25zdCBpc09wZW4gPSByZWYodHJ1ZSk7XG5jb25zdCBpc0Rpc2FibGVkID0gcmVmKGZhbHNlKTtcbmNvbnN0IGlzTW9iaWxlID0gaXNNb2JpbGVEZXZpY2UoKTtcbmNvbnN0IGRlc2t0b3BNb3VudFBvaW50ID0gZ2V0TW91bnRQb2ludCgpO1xuXG5mdW5jdGlvbiBzZXRWYXJpYW50KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRzZXRMb2NhbFZhcmlhbnQodmFyaWFudCk7XG5cdHJlZGlyZWN0KHZhcmlhbnQsIHtmb3JjZWQ6IHRydWV9KTtcbn1cblxuLy8gQnJvd3NlciBzdXBwb3J0OiBpT1MgU2FmYXJpIDwgMTVcbi8vIFdvcmsgYXJvdW5kIFNhZmFyaSBmaXJpbmcgc2Nyb2xsIGV2ZW50IGF0IHVuZXhwZWN0ZWQgY29uZGl0aW9ucyAoZS5nLiBwb3BwaW5nIHVwIFNlbGVjdClcbmFkZEV2ZW50TGlzdGVuZXIoaXNNb2JpbGUgPyAndG91Y2htb3ZlJyA6ICdzY3JvbGwnLCAoKSA9PiB7XG5cdGlmICghaXNEaXNhYmxlZC52YWx1ZSkge1xuXHRcdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gb25PcHRPdXQoKSB7XG5cdHNldE9wdE91dCgpO1xufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRlbGVwb3J0IDp0bz1cImRlc2t0b3BNb3VudFBvaW50XCI+XG5cdFx0PFZBVmFyaWFudFByb21wdFxuXHRcdFx0di1pZj1cIiFpc01vYmlsZVwiXG5cdFx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdFx0di1tb2RlbDpkaXNhYmxlZD1cImlzRGlzYWJsZWRcIlxuXHRcdFx0OmF1dG8tY2xvc2U9XCJmYWxzZVwiXG5cdFx0XHRAb3B0b3V0PVwib25PcHRPdXRcIlxuXHRcdFx0QHNlbGVjdD1cInNldFZhcmlhbnRcIlxuXHRcdC8+XG5cdDwvVGVsZXBvcnQ+XG5cblx0PCEtLSBUZWxlcG9ydCB0byBib2R5IGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIGZsb2F0ZWQgYXQgYm90dG9tIC0tPlxuXHQ8VGVsZXBvcnQgdG89XCJib2R5XCI+XG5cdFx0PFZBVmFyaWFudFByb21wdE1vYmlsZVxuXHRcdFx0di1pZj1cImlzTW9iaWxlXCJcblx0XHRcdHYtbW9kZWw6b3Blbj1cImlzT3BlblwiXG5cdFx0XHR2LW1vZGVsOmRpc2FibGVkPVwiaXNEaXNhYmxlZFwiXG5cdFx0XHRAb3B0b3V0PVwib25PcHRPdXRcIlxuXHRcdFx0QHNlbGVjdD1cInNldFZhcmlhbnRcIlxuXHRcdC8+XG5cdDwvVGVsZXBvcnQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXZhcmlhbnQtcHJvbXB0IHtcblx0Ly8gVmVjdG9yIDIwMjIgc3BlY2lmaWMgYWRqdXN0bWVudHNcblx0LnNraW4tdmVjdG9yLTIwMjIgJiB7XG5cdFx0Ly8gQ2FsY3VsYXRlZCBmcm9tIFZlY3RvciAyMDIyIHNvdXJjZSBjb2RlXG5cdFx0QHZlY3Rvci0yMDIyLWhlYWRlci1oZWlnaHQ6IDUwcHggKyAyICogOHB4O1xuXHRcdG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIEBzcGFjaW5nLXZlcnRpY2FsLWRpYWxvZyAtIEB2ZWN0b3ItMjAyMi1oZWFkZXItaGVpZ2h0KTtcblxuXHRcdC52ZWN0b3ItdG9jLWF2YWlsYWJsZS52ZWN0b3ItZmVhdHVyZS10b2MtcGlubmVkLWNsaWVudHByZWYtMSAmLFxuXHRcdC52ZWN0b3ItZmVhdHVyZS1tYWluLW1lbnUtcGlubmVkLWVuYWJsZWQgJiB7XG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblx0XHRcdFx0bGVmdDogdW5zZXQ7XG5cblx0XHRcdFx0Ly8gQ2FsY3VsYXRlZCBmcm9tIFZlY3RvciAyMDIyIHNvdXJjZSBjb2RlXG5cdFx0XHRcdC8vIEluIHRoaXMgd2lkdGggdGhpcyBwcm9tcHQgd2lsbCBub3Qgb2JzY3VyZSBhcnRpY2xlIGNvbnRlbnRcblx0XHRcdFx0QHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZzogMi43NWVtO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogLShAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nIC8gMyAqIDIpO1xuXHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTIuMjVlbSArIDM2cHgpO1xuXHRcdFx0XHRwYWRkaW5nOiBAc3BhY2luZy0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG5cdFx0XHRAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nOiAzLjI1ZW07XG5cdFx0XHRsZWZ0OiB1bnNldDtcblx0XHRcdG1hcmdpbi1sZWZ0OiAtKEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmcgLyAzICogMik7XG5cdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTUuNzVlbSArIDM2cHgpO1xuXHRcdH1cblx0fVxufVxuPC9zdHlsZT5cbi4vbW9kdWxlcy91dGlsc1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQUJ1dHRvbiBmcm9tICcuL1ZBQnV0dG9uLnZ1ZSc7XG5pbXBvcnQgVkFGYWRlVHJhbnNpdGlvbiBmcm9tICcuL1ZBRmFkZVRyYW5zaXRpb24udnVlJztcbmltcG9ydCB1c2VJMThuLCB7aTE4blZhcmlhbnR9IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZUkxOG4nO1xuaW1wb3J0IHVzZVVuaXF1ZUlkIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVVuaXF1ZUlkJztcbmltcG9ydCB1c2VTaHVmZmxlZFZhcmlhbnQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50JztcbmltcG9ydCB7VkFMSURfVkFSSUFOVFMsIGluZmVycmVkVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbWVzc2FnZXMuanNvbic7XG5pbXBvcnQgdXNlTW9kZWxXcmFwcGVyIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlcic7XG5pbXBvcnQgdXNlRGVmYXVsdCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VEZWZhdWx0JztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG5cdGRlZmluZVByb3BzPHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0XHRhdXRvQ2xvc2U/OiBib29sZWFuO1xuXHR9PigpLFxuXHR7XG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdGF1dG9DbG9zZTogZmFsc2UsXG5cdH1cbik7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTpvcGVuJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3VwZGF0ZTpkaXNhYmxlZCcsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICdzZWxlY3QnLCB2YXJpYW50OiBWYWxpZFZhcmlhbnQpOiB2b2lkO1xuXHQoZTogJ29wdG91dCcpOiB2b2lkO1xufT4oKTtcblxuY29uc3QgcHJvbXB0ID0gcmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5jb25zdCB0aXRsZUlkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IGRlc2NJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBpc09wZW4gPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdvcGVuJyk7XG5jb25zdCBpc0Rpc2FibGVkID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnZGlzYWJsZWQnKTtcbmNvbnN0IGlzVmFyaWFudE5hcnJvd2VkID0gdXNlRGVmYXVsdCgoKSA9PiBpbmZlcnJlZFZhcmlhbnQudmFsdWUgIT09IG51bGwpO1xuY29uc3Qgc2h1ZmZsZWRWYXJpYW50ID0gdXNlU2h1ZmZsZWRWYXJpYW50KGlzVmFyaWFudE5hcnJvd2VkKTtcblxuZnVuY3Rpb24gb3B0T3V0QW5kQ2xvc2UoKSB7XG5cdGVtaXQoJ29wdG91dCcpO1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRpc0Rpc2FibGVkLnZhbHVlID0gdHJ1ZTtcblx0ZW1pdCgnc2VsZWN0JywgdmFyaWFudCk7XG59XG5cbndhdGNoKHByb21wdCwgKCkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gcHJvbXB0LnZhbHVlO1xuXHRpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldikgPT4ge1xuXHRcdFx0Ly8gRG8gbm90IGRpc21pc3MgaWYgYW55IGJ1dHRvbiBpcyBwcmVzc2VkIG9yIHRoZSBwcm9tcHQgaXMgZGlzYWJsZWRcblx0XHRcdGlmIChldi5idXR0b25zID09PSAwICYmIHByb3BzLmF1dG9DbG9zZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcblx0XHRcdFx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRyYW5zaXRpb24gbmFtZT1cInZhLXZhcmlhbnQtcHJvbXB0XCIgYXBwZWFyPlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJvcGVuXCJcblx0XHRcdHJlZj1cInByb21wdFwiXG5cdFx0XHQ6bGFuZz1cImB6aC0ke2kxOG5WYXJpYW50fWBcIlxuXHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdFwiXG5cdFx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRcdGFyaWEtbW9kYWw9XCJmYWxzZVwiXG5cdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0XHQ6YXJpYS1kZXNjcmliZWRieT1cImRlc2NJZFwiXG5cdFx0PlxuXHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Nsb3NlXCJcblx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRpY29uPVwiY2xvc2VcIlxuXHRcdFx0XHQ6dGl0bGU9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmFyaWEtbGFiZWw9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRAY2xpY2s9XCJvcHRPdXRBbmRDbG9zZVwiXG5cdFx0XHQvPlxuXHRcdFx0PGgyIDppZD1cInRpdGxlSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZSB2YS10aXRsZVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpIH19PGJyIC8+XG5cdFx0XHRcdDxWQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHR2LWlmPVwiIWlzVmFyaWFudE5hcnJvd2VkXCJcblx0XHRcdFx0XHRcdDprZXk9XCJzaHVmZmxlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdFx0Omxhbmc9XCJgemgtJHtzaHVmZmxlZFZhcmlhbnR9YFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZV9fdmFyaWFudFwiXG5cdFx0XHRcdFx0XHQ+e3sgbWVzc2FnZXMudmFyaWFudHNbc2h1ZmZsZWRWYXJpYW50XSB9fTwvc3BhblxuXHRcdFx0XHRcdD5cblx0XHRcdFx0PC9WQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0PC9oMj5cblx0XHRcdDxwIDppZD1cImRlc2NJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Rlc2MgdmEtcGFyYVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLm1haW4uYWx0JyA6ICd2cC5tYWluJykgfX1cblx0XHRcdDwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiPlxuXHRcdFx0XHQ8IS0tIGluZmVycmVkVmFyaWFudCBpcyBub24tbnVsbCwgZ3VhcmRlZCBieSBpc1ZhcmlhbnROYXJyb3dlZCAtLT5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0di1mb3I9XCJ2YXJpYW50IGluIGlzVmFyaWFudE5hcnJvd2VkICYmIGluZmVycmVkVmFyaWFudCAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBbaW5mZXJyZWRWYXJpYW50XVxuXHRcdFx0XHRcdFx0OiBWQUxJRF9WQVJJQU5UU1wiXG5cdFx0XHRcdFx0OmtleT1cInZhcmlhbnRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiXG5cdFx0XHRcdFx0OmNsYXNzPVwieyd2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uLS1wcmltYXJ5JzogaXNWYXJpYW50TmFycm93ZWR9XCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0Omxhbmc9XCJ2YXJpYW50XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwic2VsZWN0KHZhcmlhbnQpXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt7IG1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdIH19XG5cdFx0XHRcdDwvVkFCdXR0b24+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdHYtaWY9XCJpc1ZhcmlhbnROYXJyb3dlZFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cImlzVmFyaWFudE5hcnJvd2VkID0gZmFsc2VcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAuYnV0dG9uLm90aGVyJykgfX1cblx0XHRcdFx0PC9WQUJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGZvb3RlciBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4uZXh0JykgfX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdDwvVHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdGl0bGUge1xuXHRib3JkZXI6IDA7IC8vIFJlc2V0XG5cdHBhZGRpbmc6IDA7IC8vIFJlc2V0XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cblx0Zm9udC1zaXplOiBAZm9udC1zaXplLXh4LWxhcmdlO1xuXHRmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0LWJvbGQ7XG5cdG1hcmdpbjogQHNwYWNpbmctNTAgQHNwYWNpbmctMDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xufVxuXG4udmEtcGFyYSB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy01MDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXG5cdCYtLXN1YnRsZSB7XG5cdFx0Y29sb3I6IEBjb2xvci1zdWJ0bGU7XG5cdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXgtc21hbGw7XG5cdFx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMzU7XG5cdH1cbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0IHtcblx0Ym94LXNpemluZzogQGJveC1zaXppbmctYmFzZTtcblx0ei1pbmRleDogQHotaW5kZXgtb3ZlcmxheTtcblx0cGFkZGluZzogQHNwYWNpbmctMTAwIEBzcGFjaW5nLTE1MDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZztcblx0Ym90dG9tOiBAc3BhY2luZy12ZXJ0aWNhbC1kaWFsb2c7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZyAqIDIpO1xuXHRtYXgtd2lkdGg6IDE4ZW07XG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXG5cdG92ZXJmbG93OiBhdXRvO1xuXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuXHRib3JkZXI6IEBib3JkZXItYmFzZTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblx0Ym94LXNoYWRvdzogQGJveC1zaGFkb3ctZHJvcC1tZWRpdW07XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc3lzdGVtLXNhbnM7XG5cdGZvbnQtc2l6ZTogMXJlbTsgLy8gUmVzZXRcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDsgLy8gUmVzZXRcblxuXHQmX19jbG9zZSB7XG5cdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHR9XG5cblx0Jl9fdGl0bGUge1xuXHRcdCZfX3ZhcmlhbnQge1xuXHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHR9XG5cdH1cblxuXHQmX19vcHRpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW46IEBzcGFjaW5nLTc1IEBzcGFjaW5nLTA7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yLWJhc2U7XG5cdFx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblxuXHRcdCZfX2J1dHRvbiB7XG5cdFx0XHRmb250LXNpemU6IEBmb250LXNpemUtc21hbGw7XG5cdFx0XHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS1zdWJ0bGU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXG5cdFx0XHQmLS1wcmltYXJ5IHtcblx0XHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHRcdH1cblxuXHRcdFx0Jjpob3Zlcixcblx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKiBQcm9tcHQgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbi52YS12YXJpYW50LXByb21wdC1lbnRlci1hY3RpdmUsXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtYWN0aXZlIHtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHktZmFkZTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb24tbWVkaXVtO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLXN5c3RlbTtcbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LWVudGVyLWZyb20sXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtdG8ge1xuXHRvcGFjaXR5OiAwO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGtleTogMCB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBrZXk6IDEgfVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsga2V5OiAyIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzdmdcIiwge1xuICAgIGNsYXNzOiBcInZhLWljb24tYnV0dG9uX19pY29uXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBcInhtbG5zOnhsaW5rXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICAgIHdpZHRoOiAkcHJvcHMuc2l6ZSxcbiAgICBoZWlnaHQ6ICRwcm9wcy5zaXplLFxuICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICB9LCBbXG4gICAgKCRwcm9wcy5pY29uID09PSAnbGFuZycpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGVzbGludC1kaXNhYmxlIFwiKSxcbiAgICAgICAgICBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9IF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNMjAgMThoLTEuNDRhLjYxLjYxIDAgMDEtLjQtLjEyLjgxLjgxIDAgMDEtLjIzLS4zMUwxNyAxNWgtNWwtMSAyLjU0YS43Ny43NyAwIDAxLS4yMi4zLjU5LjU5IDAgMDEtLjQuMTRIOWw0LjU1LTExLjQ3aDEuODl6bS0zLjUzLTQuMzFMMTQuODkgOS41YTExLjYyIDExLjYyIDAgMDEtLjM5LTEuMjRxLS4wOS4zNy0uMTkuNjlsLS4xOS41Ni0xLjU4IDQuMTl6bS02LjMtMS41OGExMy40MyAxMy40MyAwIDAxLTIuOTEtMS40MSAxMS40NiAxMS40NiAwIDAwMi44MS01LjM3SDEyVjRINy4zMWE0IDQgMCAwMC0uMi0uNTZDNi44NyAyLjc5IDYuNiAyIDYuNiAybC0xLjQ3LjVzLjQuODkuNiAxLjVIMHYxLjMzaDIuMTVBMTEuMjMgMTEuMjMgMCAwMDUgMTAuN2ExNy4xOSAxNy4xOSAwIDAxLTUgMi4xcS41Ni44Mi44NyAxLjM4YTIzLjI4IDIzLjI4IDAgMDA1LjIyLTIuNTEgMTUuNjQgMTUuNjQgMCAwMDMuNTYgMS43N3pNMy42MyA1LjMzaDQuOTFhOC4xMSA4LjExIDAgMDEtMi40NSA0LjQ1IDkuMTEgOS4xMSAwIDAxLTIuNDYtNC40NXpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKSksXG4gICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBlc2xpbnQtZW5hYmxlIFwiKVxuICAgICAgICBdKSlcbiAgICAgIDogKCRwcm9wcy5pY29uID09PSAnY2xvc2UnKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzMsIF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIm00LjM0IDIuOTMgMTIuNzMgMTIuNzMtMS40MSAxLjQxTDIuOTMgNC4zNXpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNMTcuMDcgNC4zNCA0LjM0IDE3LjA3bC0xLjQxLTEuNDFMMTUuNjYgMi45M3pcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuICAgICAgICAgIF0pKSlcbiAgICAgICAgOiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF80LCBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9IFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNOC41OSAzLjQyIDE0LjE3IDlIMnYyaDEyLjE3bC01LjU4IDUuNTlMMTAgMThsOC04LTgtOHpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuICAgICAgICAgIF0pKSlcbiAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcyB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0ge1xuICBrZXk6IDEsXG4gIGNsYXNzOiBcInZhLWJ1dHRvbl9fdGV4dFwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInZhLWJ1dHRvblwiLCB7XG5cdFx0XHQndmEtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUnOiAkcHJvcHMuYWN0aW9uID09PSAncHJvZ3Jlc3NpdmUnLFxuXHRcdFx0J3ZhLWJ1dHRvbi0td2VpZ2h0LXF1aWV0JzogJHByb3BzLndlaWdodCA9PT0gJ3F1aWV0Jyxcblx0XHR9XSksXG4gICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKF9jdHguJGVtaXQoJ2NsaWNrJykpKVxuICB9LCBbXG4gICAgKCRwcm9wcy5pY29uICE9PSB1bmRlZmluZWQpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUljb25cIl0sIHtcbiAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgY2xhc3M6IFwidmEtYnV0dG9uX19pY29uXCIsXG4gICAgICAgICAgaWNvbjogJHByb3BzLmljb24sXG4gICAgICAgICAgc2l6ZTogMjBcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgIChfY3R4LiRzbG90c1snZGVmYXVsdCddKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgICAgICBdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgKCRwcm9wcy5pbmRpY2F0b3IgIT09IHVuZGVmaW5lZClcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBSWNvblwiXSwge1xuICAgICAgICAgIGtleTogMixcbiAgICAgICAgICBjbGFzczogXCJ2YS1idXR0b25fX2luZGljYXRvclwiLFxuICAgICAgICAgIGljb246ICRwcm9wcy5pbmRpY2F0b3IsXG4gICAgICAgICAgc2l6ZTogMTZcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gIF0sIDIgLyogQ0xBU1MgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiNzczNGIxXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLWZhZGVcIixcbiAgICBtb2RlOiBcIm91dC1pblwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gICAgXSksXG4gICAgXzogMyAvKiBGT1JXQVJERUQgKi9cbiAgfSkpXG59IiwgImNvbnN0IHNjcmlwdCA9IHt9O2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1iYjljNTc1MVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB7d2dVc2VyVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5cbi8vIEludGVyZmFjZSB2YXJpYW50IG9mIHZhcmlhbnQgcHJvbXB0XG5jb25zdCBpMThuVmFyaWFudCA9IGNvbXB1dGVkKCgpID0+IHtcblx0aWYgKHdnVXNlclZhcmlhbnQudmFsdWUgPT09ICd6aCcpIHtcblx0XHQvLyBObyBjb252ZXJzaW9uOiB1c2UgcmFuZG9tbHkgc2VsZWN0ZWQgdmFyaWFudFxuXHRcdHJldHVybiBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hhbnMnIDogJ2hhbnQnO1xuXHR9XG5cdGlmIChbJ3poLWhhbnQnLCAnemgtdHcnLCAnemgtaGsnLCAnemgtbW8nXS5pbmNsdWRlcyh3Z1VzZXJWYXJpYW50LnZhbHVlKSkge1xuXHRcdHJldHVybiAnaGFudCc7XG5cdH1cblxuXHRyZXR1cm4gJ2hhbnMnO1xufSk7XG5cbmZ1bmN0aW9uIHVzZUkxOG4oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCBjdXJyZW50TXNnc0dyb3VwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gbWVzc2FnZXNbaTE4blZhcmlhbnQudmFsdWVdO1xuXHRyZXR1cm4gY3VycmVudE1zZ3NHcm91cFtrZXldID8/IGtleTtcbn1cblxuZXhwb3J0IHt1c2VJMThuIGFzIGRlZmF1bHQsIGkxOG5WYXJpYW50fTtcbiIsICJ7XG5cdFwidmFyaWFudHNcIjoge1xuXHRcdFwiemgtY25cIjogXCLkuK3lm73lpKfpmYbnroDkvZNcIixcblx0XHRcInpoLXNnXCI6IFwi5paw5Yqg5Z2h566A5L2TXCIsXG5cdFx0XCJ6aC1teVwiOiBcIumprOadpeilv+S6mueugOS9k1wiLFxuXHRcdFwiemgtaGtcIjogXCLkuK3lnIvpppnmuK/nuYHpq5RcIixcblx0XHRcInpoLW1vXCI6IFwi5Lit5ZyL5r6z6ZaA57mB6auUXCIsXG5cdFx0XCJ6aC10d1wiOiBcIuS4reWci+iHuueBo+e5gemrlFwiXG5cdH0sXG5cdFwiaGFuc1wiOiB7XG5cdFx0XCJzcGFjZVwiOiBcIlwiLFxuXHRcdFwiY2xvc2VcIjogXCLlhbPpl61cIixcblx0XHRcInZwLmhlYWRlclwiOiBcIuaIkeS7rOaUr+aMgVwiLFxuXHRcdFwidnAuaGVhZGVyLmFsdFwiOiBcIuiusOS9j+atpOWPmOS9k++8n1wiLFxuXHRcdFwidnAubWFpblwiOiBcIumAieWPluWGheWuueeahOivreiogOWPmOS9k1wiLFxuXHRcdFwidnAubWFpbi5hbHRcIjogXCLku6XlkI7pg73kvb/nlKjmraTlj5jkvZPlkYjnjrDlhoXlrrlcIixcblx0XHRcInZwLm1haW4uZXh0XCI6IFwi5L+d5a2Y5oKo5YGP5aW955qE5Lit5paH6K+t6KiA5Y+Y5L2T77yM5Lul6YG/5YWN5pi+56S6566A57mB5re35p2C55qE5YaF5a6577yM5o+Q5L6b5pyA5L2z55qE6ZiF6K+75L2T6aqM44CCXCIsXG5cdFx0XCJ2cC5idXR0b24ub2tcIjogXCLnoa7lrppcIixcblx0XHRcInZwLmJ1dHRvbi5vdGhlclwiOiBcIuWFtuS7llwiXG5cdH0sXG5cdFwiaGFudFwiOiB7XG5cdFx0XCJzcGFjZVwiOiBcIlwiLFxuXHRcdFwiY2xvc2VcIjogXCLpl5zplolcIixcblx0XHRcInZwLmhlYWRlclwiOiBcIuaIkeWAkeaUr+aPtFwiLFxuXHRcdFwidnAuaGVhZGVyLmFsdFwiOiBcIuiomOS9j+atpOiuiumrlO+8n1wiLFxuXHRcdFwidnAubWFpblwiOiBcIumBuOWPluWFp+WuueeahOiqnuiogOiuiumrlFwiLFxuXHRcdFwidnAubWFpbi5hbHRcIjogXCLku6Xlvozpg73kvb/nlKjmraTororpq5TlkYjnj77lhaflrrlcIixcblx0XHRcInZwLm1haW4uZXh0XCI6IFwi5YSy5a2Y5oKo5YGP5aW955qE5Lit5paH6Kqe6KiA6K6K6auU77yM5Lul6YG/5YWN6aGv56S657Ch57mB5re36Zuc55qE5YWn5a6577yM5o+Q5L6b5pyA5L2z55qE6Zax6K6A6auU6amX44CCXCIsXG5cdFx0XCJ2cC5idXR0b24ub2tcIjogXCLnorrlrppcIixcblx0XHRcInZwLmJ1dHRvbi5vdGhlclwiOiBcIuWFtuS7llwiXG5cdH1cbn1cbiIsICJpbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZn0gZnJvbSAndnVlJztcblxuY29uc3QgVkFMSURfVkFSSUFOVFMgPSBbJ3poLWNuJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3JywgJ3poLWhrJywgJ3poLW1vJ10gYXMgY29uc3Q7XG5cbi8vIFdyYXAgd2dVc2VyVmFyaWFudCBpbiBhIHJlZiBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuLy8gSXQgaGFzIG5vIHJlYWN0aXZpdHkgaW4gcHJvZHVjdGlvbi4gKGNoYW5nZXMgdG8gd2dVc2VyVmFyaWFudCB3aWxsIG5vdCBiZSByZWZsZWN0ZWQpXG4vLyB3Z1VzZXJWYXJpYW50IGNhbiBiZSBudWxsLCBzbyBmYWxscyBiYWNrIHRvIGFuIGVtcHR5IHN0cmluZy5cbmNvbnN0IHdnVXNlclZhcmlhbnQgPSByZWYobXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpID8/ICcnKTtcblxuZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKTogYm9vbGVhbiB7XG5cdC8vIEJyb3dzZXIgc3VwcG9ydDpcblx0Ly8gQ2hyb21pdW0gb24gc29tZSBBbmRyb2lkIGRldmljZSAoZS5nLiBTYW1zdW5nKSBoYXMgXCIoaG92ZXI6IGhvdmVyKVwiIHNldFxuXHQvLyBTbyBjaGVjayBwb2ludGVyIHRvZ2V0aGVyXG5cdHJldHVybiBtYXRjaE1lZGlhKCcoaG92ZXI6IG5vbmUpLCAocG9pbnRlcjogY29hcnNlKScpLm1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGdldE1vdW50UG9pbnQoKTogRWxlbWVudCB7XG5cdHN3aXRjaCAobXcuY29uZmlnLmdldCgnc2tpbicpKSB7XG5cdFx0Y2FzZSAndmVjdG9yLTIwMjInOlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1wYWdlLWNvbnRhaW5lcicpWzBdID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0Y2FzZSAnZ29uZ2JpJzpcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctY29udGVudC1ibG9jaycpID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBkb2N1bWVudC5ib2R5O1xuXHR9XG59XG5cbmNvbnN0IGluZmVycmVkVmFyaWFudCA9IGNvbXB1dGVkKCgpID0+IHtcblx0aWYgKChWQUxJRF9WQVJJQU5UUyBhcyBSZWFkb25seUFycmF5PHN0cmluZz4pLmluY2x1ZGVzKHdnVXNlclZhcmlhbnQudmFsdWUpKSB7XG5cdFx0cmV0dXJuIHdnVXNlclZhcmlhbnQudmFsdWUgYXMgVmFsaWRWYXJpYW50O1xuXHR9XG5cdHJldHVybiBudWxsO1xufSk7XG5cbi8qKlxuICogU2h1ZmZsZSBiZXR3ZWVuIGFsbCB2YWxpZCB2YXJpYW50cy5cbiAqXG4gKiBAcGFyYW0gbGFzdCBsYXN0IHNodWZmbGVkIHZhcmlhbnQsIHVzZWQgdG8gcHJldmVudCBkdXBsaWNhdGlvbnNcbiAqIEByZXR1cm5zIHNodWZmbGVkIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gc2h1ZmZsZVZhcmlhbnQobGFzdD86IFZhbGlkVmFyaWFudCk6IFZhbGlkVmFyaWFudCB7XG5cdGNvbnN0IHRhcmdldEFycmF5ID0gWy4uLlZBTElEX1ZBUklBTlRTXS5maWx0ZXIoKGkpID0+IHtcblx0XHRyZXR1cm4gaSAhPT0gbGFzdDtcblx0fSk7XG5cdGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGFyZ2V0QXJyYXkubGVuZ3RoKTtcblx0cmV0dXJuIHRhcmdldEFycmF5W3JhbmRvbUluZGV4XSE7XG59XG5cbmV4cG9ydCB7VkFMSURfVkFSSUFOVFMsIHdnVXNlclZhcmlhbnQsIGlzTW9iaWxlRGV2aWNlLCBnZXRNb3VudFBvaW50LCBpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fTtcbiIsICJsZXQgY291bnRlciA9IDA7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pcXVlIGVsZW1lbnQgSUQgb24gZWFjaCBjYWxsLlxuICpcbiAqIEByZXR1cm5zIGlkXG4gKi9cbmZ1bmN0aW9uIHVzZVVuaXF1ZUlkKCk6IHN0cmluZyB7XG5cdHJldHVybiBgdmEtJHtjb3VudGVyKyt9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVW5pcXVlSWQ7XG4iLCAiaW1wb3J0IHtSZWYsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCB7aW5mZXJyZWRWYXJpYW50LCBzaHVmZmxlVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5cbmNvbnN0IElOVEVSVkFMID0gMyAqIDEwMDA7XG5cbi8qKlxuICogUmV0dXJuIGEgcmVmIHdoaWNoIHNodWZmbGUgYmV0d2VlbiBhbGwgcG9zc2libGUgdmFyaWFudHMuXG4gKlxuICogQHBhcmFtIGlzRnJlZXplZCBzaG91bGQgc2h1ZmZsaW5nIHBhdXNlIG9yIG5vdFxuICovXG5mdW5jdGlvbiB1c2VTaHVmZmxlZFZhcmlhbnQoaXNGcmVlemVkOiBSZWY8Ym9vbGVhbj4pOiBSZWY8VmFsaWRWYXJpYW50PiB7XG5cdGNvbnN0IHJlc3VsdCA9IHJlZjxWYWxpZFZhcmlhbnQ+KHNodWZmbGVWYXJpYW50KCkpO1xuXHRsZXQgaWQ6IG51bWJlcjtcblxuXHR3YXRjaChcblx0XHRpc0ZyZWV6ZWQsXG5cdFx0KG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHRpZiAobmV3VmFsdWUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZnJlZXplIGF0IGluZmVycmVkIHZhcmlhbnQgYXQgYSBiZXN0IGVmZm9ydFxuXHRcdFx0XHQvLyBUaGlzIHNob3VsZCBiZSBtb3N0IGNhc2VzXG5cdFx0XHRcdHJlc3VsdC52YWx1ZSA9IGluZmVycmVkVmFyaWFudC52YWx1ZSA/PyBzaHVmZmxlVmFyaWFudCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZSA9IHNodWZmbGVWYXJpYW50KHJlc3VsdC52YWx1ZSk7XG5cdFx0XHRcdH0sIElOVEVSVkFMKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtpbW1lZGlhdGU6IHRydWV9XG5cdCk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2h1ZmZsZWRWYXJpYW50O1xuIiwgImltcG9ydCB7V3JpdGFibGVDb21wdXRlZFJlZiwgY29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5cbi8qKlxuICogUmV0dXJuIGEgY29tcHV0ZWQgcHJvcGVydHkgdGhhdCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHByb3AgdmFsdWUgd2hlbiBpcyBhY2Nlc3NlZFxuICogYW5kIGZpcmVzIGFuIGV2ZW50IHdoZW4gaXMgc2V0LiBVc2VkIHdpdGggdi1tb2RlbC5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgcHJvcHMgZmllbGQgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSBlbWl0IGVtaXQgZnVuY3Rpb24gb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgdGhlIHByb3BcbiAqIEByZXR1cm4gd3JhcHBlZCBjb21wdXRlciBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiB1c2VNb2RlbFdyYXBwZXI8VCBleHRlbmRzIHN0cmluZywgUCBleHRlbmRzIFJlY29yZDxULCB1bmtub3duPj4oXG5cdHByb3BzOiBQLFxuXHRlbWl0OiAoZXZlbnQ6IGB1cGRhdGU6JHtUfWAsIHZhbHVlOiBQW1RdKSA9PiB2b2lkLFxuXHRuYW1lOiBUID0gJ21vZGVsVmFsdWUnIGFzIFRcbik6IFdyaXRhYmxlQ29tcHV0ZWRSZWY8UFtUXT4ge1xuXHRyZXR1cm4gY29tcHV0ZWQoe1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiBwcm9wc1tuYW1lXTtcblx0XHR9LFxuXHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0ZW1pdChgdXBkYXRlOiR7bmFtZX1gLCB2YWx1ZSk7XG5cdFx0fSxcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vZGVsV3JhcHBlcjtcbiIsICJpbXBvcnQge1JlZiwgV2F0Y2hTb3VyY2UsIGNvbXB1dGVkLCBzaGFsbG93UmVmLCB3YXRjaH0gZnJvbSAndnVlJztcblxuLyoqXG4gKiBDcmVhdGUgYSByZWYgdGhhdCwgY2FuIGJlIGluZGVwZW5kZW50bHkgdXBkYXRlZCwgYnV0IHdoZW4gaXRzIGRlZmF1bHRcbiAqIHZhbHVlIGNoYW5nZXMsIGl0IGlzIHJlc3RvcmVkIHRvIGl0cyAobmV3KSBkZWZhdWx0IHZhbHVlLlxuICpcbiAqIFVzZWQgZm9yIGRlYnVnZ2luZy5cbiAqL1xuZnVuY3Rpb24gdXNlRGVmYXVsdDxUPihkZWZhdWx0VmFsdWU6IFdhdGNoU291cmNlPFQ+KTogUmVmPFQ+IHtcblx0Y29uc3QgcmVhbFJlZiA9IHNoYWxsb3dSZWY8VD4odHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRWYWx1ZSgpIDogZGVmYXVsdFZhbHVlLnZhbHVlKTtcblxuXHR3YXRjaChcblx0XHRkZWZhdWx0VmFsdWUsXG5cdFx0KG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHRyZWFsUmVmLnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0fSxcblx0XHR7ZGVlcDogdHJ1ZX1cblx0KTtcblxuXHRyZXR1cm4gY29tcHV0ZWQoe1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiByZWFsUmVmLnZhbHVlO1xuXHRcdH0sXG5cdFx0c2V0KG5ld1ZhbHVlKSB7XG5cdFx0XHRyZWFsUmVmLnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0fSxcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURlZmF1bHQ7XG4iLCAiaW1wb3J0IHsgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJsYW5nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCIsIFwiYXJpYS1kZXNjcmliZWRieVwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF8zID0gW1wibGFuZ1wiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtdmFyaWFudC1wcm9tcHRcIixcbiAgICBhcHBlYXI6IFwiXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICgkcHJvcHMub3BlbilcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHJlZjogXCJwcm9tcHRcIixcbiAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5pMThuVmFyaWFudH1gLFxuICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRcIixcbiAgICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgICBcImFyaWEtbW9kYWxcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWQsXG4gICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogJHNldHVwLmRlc2NJZFxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fY2xvc2VcIixcbiAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgIGljb246IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgdGl0bGU6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vcHRPdXRBbmRDbG9zZVxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1widGl0bGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiZGlzYWJsZWRcIl0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgyXCIsIHtcbiAgICAgICAgICAgICAgaWQ6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGUgdmEtdGl0bGVcIlxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnJcIiwgbnVsbCwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLykpLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFGYWRlVHJhbnNpdGlvblwiXSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICghJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkKVxuICAgICAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJHNldHVwLnNodWZmbGVkVmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5zaHVmZmxlZFZhcmlhbnR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZV9fdmFyaWFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbJHNldHVwLnNodWZmbGVkVmFyaWFudF0pLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF8zKSlcbiAgICAgICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8yKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIHtcbiAgICAgICAgICAgICAgaWQ6ICRzZXR1cC5kZXNjSWQsXG4gICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19kZXNjIHZhLXBhcmFcIlxuICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgPyAndnAubWFpbi5hbHQnIDogJ3ZwLm1haW4nKSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzQpLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF81LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgaW5mZXJyZWRWYXJpYW50IGlzIG5vbi1udWxsLCBndWFyZGVkIGJ5IGlzVmFyaWFudE5hcnJvd2VkIFwiKSxcbiAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgJiYgJHNldHVwLmluZmVycmVkVmFyaWFudCAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBbJHNldHVwLmluZmVycmVkVmFyaWFudF1cblx0XHRcdFx0XHRcdDogJHNldHVwLlZBTElEX1ZBUklBTlRTLCAodmFyaWFudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICAgIGtleTogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1widmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiLCB7J3ZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b24tLXByaW1hcnknOiAkc2V0dXAuaXNWYXJpYW50TmFycm93ZWR9XSksXG4gICAgICAgICAgICAgICAgICBpbmRpY2F0b3I6IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgICAgbGFuZzogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5zZWxlY3QodmFyaWFudCkpXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfOiAyIC8qIERZTkFNSUMgKi9cbiAgICAgICAgICAgICAgICB9LCAxMDMyIC8qIFBST1BTLCBEWU5BTUlDX1NMT1RTICovLCBbXCJjbGFzc1wiLCBcImxhbmdcIiwgXCJkaXNhYmxlZFwiLCBcIm9uQ2xpY2tcIl0pKVxuICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSksXG4gICAgICAgICAgICAgICgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQpXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvcjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID0gZmFsc2UpKVxuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5idXR0b24ub3RoZXInKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZm9vdGVyXCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNywgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbi5leHQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9KSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNWE0NGNjNzVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IFZBQnV0dG9uIGZyb20gJy4vVkFCdXR0b24udnVlJztcbmltcG9ydCBWQVNlbGVjdCBmcm9tICcuL1ZBU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgdXNlSTE4biwge2kxOG5WYXJpYW50fSBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VJMThuJztcbmltcG9ydCB1c2VVbmlxdWVJZCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VVbmlxdWVJZCc7XG5pbXBvcnQge1ZBTElEX1ZBUklBTlRTLCBpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcbmltcG9ydCB1c2VEZWZhdWx0IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZURlZmF1bHQnO1xuXG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhcblx0ZGVmaW5lUHJvcHM8e1xuXHRcdG9wZW46IGJvb2xlYW47XG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHR9PigpLFxuXHR7XG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHR9XG4pO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0KGU6ICd1cGRhdGU6b3BlbicsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICd1cGRhdGU6ZGlzYWJsZWQnLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAnc2VsZWN0JywgdmFyaWFudDogVmFsaWRWYXJpYW50KTogdm9pZDtcblx0KGU6ICdvcHRvdXQnKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IHByb21wdCA9IHJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuY29uc3QgdGl0bGVJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBzZWxlY3RlZFZhcmlhbnQgPSB1c2VEZWZhdWx0KCgpID0+IGluZmVycmVkVmFyaWFudC52YWx1ZSA/PyBzaHVmZmxlVmFyaWFudCgpKTtcbmNvbnN0IGlzT3BlbiA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ29wZW4nKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdkaXNhYmxlZCcpO1xuXG5mdW5jdGlvbiBvcHRPdXRBbmRDbG9zZSgpIHtcblx0ZW1pdCgnb3B0b3V0Jyk7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QodmFyaWFudDogVmFsaWRWYXJpYW50KSB7XG5cdGlzRGlzYWJsZWQudmFsdWUgPSB0cnVlO1xuXHRlbWl0KCdzZWxlY3QnLCB2YXJpYW50KTtcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxUcmFuc2l0aW9uIG5hbWU9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIiBhcHBlYXI+XG5cdFx0PGRpdlxuXHRcdFx0di1pZj1cIm9wZW5cIlxuXHRcdFx0cmVmPVwicHJvbXB0XCJcblx0XHRcdDpsYW5nPVwiYHpoLSR7aTE4blZhcmlhbnR9YFwiXG5cdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiXG5cdFx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRcdGFyaWEtbW9kYWw9XCJmYWxzZVwiXG5cdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyXCI+XG5cdFx0XHRcdDxoMiA6aWQ9XCJ0aXRsZUlkXCIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fdGl0bGUgdmEtdGl0bGVcIj5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5tYWluJykgfX1cblx0XHRcdFx0PC9oMj5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fY2xvc2VcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRpY29uPVwiY2xvc2VcIlxuXHRcdFx0XHRcdDp0aXRsZT1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHRcdDphcmlhLWxhYmVsPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cIm9wdE91dEFuZENsb3NlXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpblwiPlxuXHRcdFx0XHQ8VkFTZWxlY3Rcblx0XHRcdFx0XHR2LW1vZGVsPVwic2VsZWN0ZWRWYXJpYW50XCJcblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fc2VsZWN0XCJcblx0XHRcdFx0XHQ6bGFuZz1cInNlbGVjdGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdDphcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZUlkXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxvcHRpb24gdi1mb3I9XCJ2YXJpYW50IGluIFZBTElEX1ZBUklBTlRTXCIgOmtleT1cInZhcmlhbnRcIiA6dmFsdWU9XCJ2YXJpYW50XCIgOmxhbmc9XCJ2YXJpYW50XCI+XG5cdFx0XHRcdFx0XHR7eyBtZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSB9fVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQ8L1ZBU2VsZWN0PlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fYWN0aW9uXCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0aWNvbj1cImFycm93TmV4dFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cInNlbGVjdChzZWxlY3RlZFZhcmlhbnQpXCJcblx0XHRcdFx0XHQ+e3sgdXNlSTE4bigndnAuYnV0dG9uLm9rJykgfX08L1ZBQnV0dG9uXG5cdFx0XHRcdD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGZvb3RlciBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fZm9vdGVyXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIj5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5tYWluLmV4dCcpIH19XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdDwvZGl2PlxuXHQ8L1RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXRpdGxlIHtcblx0Ym9yZGVyOiAwOyAvLyBSZXNldFxuXHRwYWRkaW5nOiAwOyAvLyBSZXNldFxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG5cdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14eC1sYXJnZTtcblx0Zm9udC13ZWlnaHQ6IEBmb250LXdlaWdodC1ib2xkO1xuXHRtYXJnaW46IEBzcGFjaW5nLTUwIEBzcGFjaW5nLTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcbn1cblxuLnZhLXBhcmEge1xuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXHRtYXJnaW4tdG9wOiBAc3BhY2luZy01MDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXG5cdCYtLXN1YnRsZSB7XG5cdFx0Y29sb3I6IEBjb2xvci1zdWJ0bGU7XG5cdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXgtc21hbGw7XG5cdFx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMzU7XG5cdH1cbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZSB7XG5cdGJveC1zaXppbmc6IEBib3gtc2l6aW5nLWJhc2U7XG5cdHotaW5kZXg6IEB6LWluZGV4LW92ZXJsYXk7XG5cdHBhZGRpbmc6IEBzcGFjaW5nLTUwIEBzcGFjaW5nLTEwMDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiBAc3BhY2luZy0wO1xuXHRyaWdodDogQHNwYWNpbmctMDtcblx0Ym90dG9tOiBAc3BhY2luZy0wO1xuXHRtYXJnaW46IEBzcGFjaW5nLTAgYXV0bztcblx0d2lkdGg6IDEwMCU7XG5cdG1heC13aWR0aDogNjAwcHg7XG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXG5cdG92ZXJmbG93OiBhdXRvO1xuXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuXHRib3JkZXI6IEBib3JkZXItYmFzZTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblx0Ym94LXNoYWRvdzogQGJveC1zaGFkb3ctZHJvcC1tZWRpdW07XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc3lzdGVtLXNhbnM7XG5cdGZvbnQtc2l6ZTogMXJlbTsgLy8gUmVzZXRcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDsgLy8gUmVzZXRcblxuXHQmX19oZWFkZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdCZfX3RpdGxlIHtcblx0XHRcdGZsZXg6IDE7XG5cdFx0XHRmb250LXNpemU6IEBmb250LXNpemUtbWVkaXVtO1xuXHRcdH1cblxuXHRcdCZfX2Nsb3NlIHtcblx0XHRcdHBhZGRpbmc6IEBzcGFjaW5nLXNob3J0aGFuZC1idXR0b24taWNvbi1vbmx5O1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdFx0fVxuXHR9XG5cblx0Jl9fbWFpbiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRtYXJnaW4tdG9wOiBAc3BhY2luZy0yNTtcblxuXHRcdCZfX3NlbGVjdCB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IEBzcGFjaW5nLTc1O1xuXHRcdFx0ZmxleDogMTtcblx0XHR9XG5cblx0XHQmX19hY3Rpb24ge1xuXHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0fVxuXHR9XG5cblx0Jl9fY2xvc2Uge1xuXHRcdHBhZGRpbmc6IEBzcGFjaW5nLXNob3J0aGFuZC1idXR0b24taWNvbi1vbmx5O1xuXHRcdGZsb2F0OiByaWdodDtcblx0XHRtYXJnaW4tcmlnaHQ6IC0oQHNwYWNpbmctaG9yaXpvbnRhbC1idXR0b24taWNvbi1vbmx5ICsgMXB4KTtcblx0fVxufVxuXG4vKiBQcm9tcHQgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtZW50ZXItYWN0aXZlLFxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1sZWF2ZS1hY3RpdmUge1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBAdHJhbnNpdGlvbi1wcm9wZXJ0eS1sYXlvdXQ7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uLW1lZGl1bTtcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbi1zeXN0ZW07XG59XG5cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtZW50ZXItZnJvbSxcbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtbGVhdmUtdG8ge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59XG48L3N0eWxlPlxuLi4vbW9kdWxlcy91dGlsc1xuIiwgImltcG9ydCB7IHJlbmRlclNsb3QgYXMgX3JlbmRlclNsb3QsIHZNb2RlbFNlbGVjdCBhcyBfdk1vZGVsU2VsZWN0LCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gX3dpdGhEaXJlY3RpdmVzKChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzZWxlY3RcIiwge1xuICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5tb2RlbFZhbHVlKSA9ICRldmVudCkpLFxuICAgIGNsYXNzOiBcInZhLXNlbGVjdFwiXG4gIH0sIFtcbiAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gIF0sIDUxMiAvKiBORUVEX1BBVENIICovKSksIFtcbiAgICBbX3ZNb2RlbFNlbGVjdCwgJHNldHVwLm1vZGVsVmFsdWVdXG4gIF0pXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYzliNDY0NjBcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IFtcImxhbmdcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5cIiB9XG5jb25zdCBfaG9pc3RlZF81ID0gW1widmFsdWVcIiwgXCJsYW5nXCJdXG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2Zvb3RlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UcmFuc2l0aW9uLCB7XG4gICAgbmFtZTogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIixcbiAgICBhcHBlYXI6IFwiXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICgkcHJvcHMub3BlbilcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHJlZjogXCJwcm9tcHRcIixcbiAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5pMThuVmFyaWFudH1gLFxuICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIsXG4gICAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJhcmlhLW1vZGFsXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMlwiLCB7XG4gICAgICAgICAgICAgICAgaWQ6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX190aXRsZSB2YS10aXRsZVwiXG4gICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4nKSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzMpLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fY2xvc2VcIixcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vcHRPdXRBbmRDbG9zZVxuICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJ0aXRsZVwiLCBcImFyaWEtbGFiZWxcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQVNlbGVjdFwiXSwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkVmFyaWFudCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX3NlbGVjdFwiLFxuICAgICAgICAgICAgICAgIGxhbmc6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAkc2V0dXAudGl0bGVJZFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAuVkFMSURfVkFSSUFOVFMsICh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwib3B0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgbGFuZzogdmFyaWFudFxuICAgICAgICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzUpKVxuICAgICAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcImxhbmdcIiwgXCJkaXNhYmxlZFwiLCBcImFyaWEtbGFiZWxsZWRieVwiXSksXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgkc2V0dXAuc2VsZWN0KCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpKSlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAuYnV0dG9uLm9rJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJmb290ZXJcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF83LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluLmV4dCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi01Y2M3ODY1YlwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIFRlbGVwb3J0IGFzIF9UZWxlcG9ydCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIFtcbiAgICAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RlbGVwb3J0LCB7IHRvOiAkc2V0dXAuZGVza3RvcE1vdW50UG9pbnQgfSwgW1xuICAgICAgKCEkc2V0dXAuaXNNb2JpbGUpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBVmFyaWFudFByb21wdFwiXSwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICAgICAgICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLmlzRGlzYWJsZWQsXG4gICAgICAgICAgICBcIm9uVXBkYXRlOmRpc2FibGVkXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzRGlzYWJsZWQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICBcImF1dG8tY2xvc2VcIjogZmFsc2UsXG4gICAgICAgICAgICBvbk9wdG91dDogJHNldHVwLm9uT3B0T3V0LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICRzZXR1cC5zZXRWYXJpYW50XG4gICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcImRpc2FibGVkXCJdKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0sIDggLyogUFJPUFMgKi8sIFtcInRvXCJdKSksXG4gICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBUZWxlcG9ydCB0byBib2R5IGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIGZsb2F0ZWQgYXQgYm90dG9tIFwiKSxcbiAgICAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RlbGVwb3J0LCB7IHRvOiBcImJvZHlcIiB9LCBbXG4gICAgICAoJHNldHVwLmlzTW9iaWxlKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQVZhcmlhbnRQcm9tcHRNb2JpbGVcIl0sIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5pc0Rpc2FibGVkLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpkaXNhYmxlZFwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc0Rpc2FibGVkKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgb25PcHRvdXQ6ICRzZXR1cC5vbk9wdE91dCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAkc2V0dXAuc2V0VmFyaWFudFxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSlcbiAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxlQUF3QkMsUUFBQSxLQUFBOztBQ0N4QixJQUFBQyxlQUFrQkQsUUFBQSxLQUFBO0FBQ2xCLElBQUFFLG9CQUFpRUYsUUFBQSx3QkFBQTs7QUNEakUsSUFBQUcsZUFBeUJILFFBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHpCLElBQUFJLGNBQXlLSixRQUFBLEtBQUE7QUFFekssSUFBTUssYUFBYSxDQUFDLFNBQVMsUUFBUTtBQUNyQyxJQUFNQyxhQUFhO0VBQUVDLEtBQUs7QUFBRTtBQUM1QixJQUFNQyxhQUFhO0VBQUVELEtBQUs7QUFBRTtBQUM1QixJQUFNRSxhQUFhO0VBQUVGLEtBQUs7QUFBRTtBQUVyQixTQUFTRyxPQUFPQyxNQUFNQyxRQUFRQyxRQUFRQyxRQUFRQyxPQUFPQyxVQUFVO0FBQ3BFLFVBQUEsR0FBUVosWUFBQWEsV0FB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QU9yTSxTQUFTZ007QUFBT0ssWUFBT2pMLFNBQVM7QUFBa0MsSUFBT2tMLGVBQVFEOztBeEJHblksSUFBTUUsT0FBT2xJLFNBQVNtSSxjQUFjLEtBQUs7QUFDekNuSSxTQUFTRSxLQUFLa0ksT0FBT0YsSUFBSTtDQUFBLEdBQ3pCbE4sYUFBQXFOLFdBQVVKLFlBQUcsRUFBRUssTUFBTUosSUFBSTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3Z1ZTIyIiwgInJlcXVpcmUiLCAiaW1wb3J0X3Z1ZTIwIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF92dWUxMiIsICJpbXBvcnRfdnVlMiIsICJfaG9pc3RlZF8xIiwgIl9ob2lzdGVkXzIiLCAia2V5IiwgIl9ob2lzdGVkXzMiLCAiX2hvaXN0ZWRfNCIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgImNsYXNzIiwgInhtbG5zIiwgIndpZHRoIiwgInNpemUiLCAiaGVpZ2h0IiwgInZpZXdCb3giLCAiaWNvbiIsICJjcmVhdGVDb21tZW50Vk5vZGUiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImQiLCAiVkFJY29uX2RlZmF1bHQiLCAiX19maWxlIiwgIlZBSWNvbl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNCIsICJfaG9pc3RlZF8xMiIsICJyZW5kZXIyIiwgIm5vcm1hbGl6ZUNsYXNzIiwgImFjdGlvbiIsICJ3ZWlnaHQiLCAib25DbGljayIsICIkZXZlbnQiLCAiJGVtaXQiLCAiY3JlYXRlQmxvY2siLCAiJHNsb3RzIiwgInJlbmRlclNsb3QiLCAiaW5kaWNhdG9yIiwgIlZBQnV0dG9uX2RlZmF1bHQiLCAiX19zY29wZUlkIiwgIlZBQnV0dG9uX2RlZmF1bHQyIiwgImltcG9ydF92dWU1IiwgInJlbmRlcjMiLCAiVHJhbnNpdGlvbiIsICJuYW1lIiwgIm1vZGUiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgIl8iLCAic2NyaXB0IiwgIlZBRmFkZVRyYW5zaXRpb25fZGVmYXVsdCIsICJpbXBvcnRfdnVlNyIsICJtZXNzYWdlc19kZWZhdWx0IiwgInZhcmlhbnRzIiwgImhhbnMiLCAic3BhY2UiLCAiY2xvc2UiLCAiaGFudCIsICJpbXBvcnRfdnVlNiIsICJWQUxJRF9WQVJJQU5UUyIsICJ3Z1VzZXJWYXJpYW50IiwgInJlZiIsICJfbXckY29uZmlnJGdldCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlzTW9iaWxlRGV2aWNlIiwgIm1hdGNoTWVkaWEiLCAibWF0Y2hlcyIsICJnZXRNb3VudFBvaW50IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiYm9keSIsICJxdWVyeVNlbGVjdG9yIiwgImluZmVycmVkVmFyaWFudCIsICJjb21wdXRlZCIsICJpbmNsdWRlcyIsICJ2YWx1ZSIsICJzaHVmZmxlVmFyaWFudCIsICJsYXN0IiwgInRhcmdldEFycmF5IiwgImZpbHRlciIsICJpIiwgInJhbmRvbUluZGV4IiwgIk1hdGgiLCAiZmxvb3IiLCAicmFuZG9tIiwgImxlbmd0aCIsICJpMThuVmFyaWFudCIsICJ1c2VJMThuIiwgIl9jdXJyZW50TXNnc0dyb3VwJGtleSIsICJjdXJyZW50TXNnc0dyb3VwIiwgImNvdW50ZXIiLCAidXNlVW5pcXVlSWQiLCAiY29uY2F0IiwgInVzZVVuaXF1ZUlkX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTgiLCAiSU5URVJWQUwiLCAidXNlU2h1ZmZsZWRWYXJpYW50IiwgImlzRnJlZXplZCIsICJyZXN1bHQiLCAiaWQiLCAid2F0Y2giLCAibmV3VmFsdWUiLCAiX2luZmVycmVkVmFyaWFudCR2YWx1IiwgImNsZWFySW50ZXJ2YWwiLCAid2luZG93IiwgInNldEludGVydmFsIiwgImltbWVkaWF0ZSIsICJ1c2VTaHVmZmxlZFZhcmlhbnRfZGVmYXVsdCIsICJpbXBvcnRfdnVlOSIsICJ1c2VNb2RlbFdyYXBwZXIiLCAicHJvcHMiLCAiZW1pdCIsICJzZXQiLCAidXNlTW9kZWxXcmFwcGVyX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTEwIiwgInVzZURlZmF1bHQiLCAiZGVmYXVsdFZhbHVlIiwgInJlYWxSZWYiLCAic2hhbGxvd1JlZiIsICJkZWVwIiwgInVzZURlZmF1bHRfZGVmYXVsdCIsICJfX3Byb3BzIiwgIl9fZW1pdCIsICJwcm9tcHQiLCAidGl0bGVJZCIsICJkZXNjSWQiLCAiaXNPcGVuIiwgImlzRGlzYWJsZWQiLCAiaXNWYXJpYW50TmFycm93ZWQiLCAic2h1ZmZsZWRWYXJpYW50IiwgIm9wdE91dEFuZENsb3NlIiwgInNlbGVjdCIsICJ2YXJpYW50IiwgImVsZW1lbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldiIsICJidXR0b25zIiwgImF1dG9DbG9zZSIsICJkaXNhYmxlZCIsICJpbXBvcnRfdnVlMTMiLCAiX2hvaXN0ZWRfMTMiLCAiX2hvaXN0ZWRfMjIiLCAiX2hvaXN0ZWRfMzIiLCAiX2hvaXN0ZWRfNDIiLCAiX2hvaXN0ZWRfNSIsICJfaG9pc3RlZF82IiwgIl9ob2lzdGVkXzciLCAicmVuZGVyNCIsICJhcHBlYXIiLCAib3BlbiIsICJsYW5nIiwgInJvbGUiLCAiY3JlYXRlVk5vZGUiLCAidGl0bGUiLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJtZXNzYWdlcyIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgIlZBVmFyaWFudFByb21wdF9kZWZhdWx0IiwgIlZBVmFyaWFudFByb21wdF9kZWZhdWx0MiIsICJpbXBvcnRfdnVlMTciLCAibW9kZWxWYWx1ZSIsICJpbXBvcnRfdnVlMTUiLCAicmVuZGVyNSIsICJ3aXRoRGlyZWN0aXZlcyIsICJ2TW9kZWxTZWxlY3QiLCAiVkFTZWxlY3RfZGVmYXVsdCIsICJWQVNlbGVjdF9kZWZhdWx0MiIsICJzZWxlY3RlZFZhcmlhbnQiLCAiX2luZmVycmVkVmFyaWFudCR2YWx1MiIsICJpbXBvcnRfdnVlMTgiLCAiX2hvaXN0ZWRfMTQiLCAiX2hvaXN0ZWRfMjMiLCAiX2hvaXN0ZWRfMzMiLCAiX2hvaXN0ZWRfNDMiLCAiX2hvaXN0ZWRfNTIiLCAiX2hvaXN0ZWRfNjIiLCAiX2hvaXN0ZWRfNzIiLCAicmVuZGVyNiIsICJWQVZhcmlhbnRQcm9tcHRNb2JpbGVfZGVmYXVsdCIsICJWQVZhcmlhbnRQcm9tcHRNb2JpbGVfZGVmYXVsdDIiLCAiaXNNb2JpbGUiLCAiZGVza3RvcE1vdW50UG9pbnQiLCAic2V0VmFyaWFudCIsICJzZXRMb2NhbFZhcmlhbnQiLCAicmVkaXJlY3QiLCAiZm9yY2VkIiwgIm9uT3B0T3V0IiwgInNldE9wdE91dCIsICJpbXBvcnRfdnVlMjEiLCAicmVuZGVyNyIsICJUZWxlcG9ydCIsICJ0byIsICJvbk9wdG91dCIsICJvblNlbGVjdCIsICJBcHBfZGVmYXVsdCIsICJBcHBfZGVmYXVsdDIiLCAicm9vdCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJjcmVhdGVBcHAiLCAibW91bnQiXQp9Cg==
