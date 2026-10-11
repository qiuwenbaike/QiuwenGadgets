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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvQXBwLnZ1ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvbW9kdWxlcy91dGlscy50cyIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdC52dWUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZUkxOG4udHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL21lc3NhZ2VzLmpzb24iLCAic2ZjLXRlbXBsYXRlOkU6XFxDb2Rlc1xcUWl1d2VuXFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUljb24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFJY29uLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RTpcXENvZGVzXFxRaXV3ZW5cXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBQnV0dG9uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBQnV0dG9uLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RTpcXENvZGVzXFxRaXV3ZW5cXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFGYWRlVHJhbnNpdGlvbi52dWUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZURlZmF1bHQudHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlci50cyIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50LnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VVbmlxdWVJZC50cyIsICJzZmMtdGVtcGxhdGU6RTpcXENvZGVzXFxRaXV3ZW5cXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFTZWxlY3QudnVlIiwgInNmYy10ZW1wbGF0ZTpFOlxcQ29kZXNcXFFpdXdlblxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFTZWxlY3QudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFTZWxlY3QudnVlIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RTpcXENvZGVzXFxRaXV3ZW5cXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlIiwgInNmYy10ZW1wbGF0ZTpFOlxcQ29kZXNcXFFpdXdlblxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9BcHAudnVlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9WYXJpYW50QWxseURpYWxvZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7VmFsaWRWYXJpYW50LCByZWRpcmVjdCwgc2V0TG9jYWxWYXJpYW50LCBzZXRPcHRPdXR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IHtnZXRNb3VudFBvaW50LCBpc01vYmlsZURldmljZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCBWQVZhcmlhbnRQcm9tcHQgZnJvbSAnLi9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdC52dWUnO1xuaW1wb3J0IFZBVmFyaWFudFByb21wdE1vYmlsZSBmcm9tICcuL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSc7XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcblxuY29uc3QgaXNPcGVuID0gcmVmKHRydWUpO1xuY29uc3QgaXNEaXNhYmxlZCA9IHJlZihmYWxzZSk7XG5jb25zdCBpc01vYmlsZSA9IGlzTW9iaWxlRGV2aWNlKCk7XG5jb25zdCBkZXNrdG9wTW91bnRQb2ludCA9IGdldE1vdW50UG9pbnQoKTtcblxuZnVuY3Rpb24gc2V0VmFyaWFudCh2YXJpYW50OiBWYWxpZFZhcmlhbnQpIHtcblx0c2V0TG9jYWxWYXJpYW50KHZhcmlhbnQpO1xuXHRyZWRpcmVjdCh2YXJpYW50LCB7Zm9yY2VkOiB0cnVlfSk7XG59XG5cbi8vIEJyb3dzZXIgc3VwcG9ydDogaU9TIFNhZmFyaSA8IDE1XG4vLyBXb3JrIGFyb3VuZCBTYWZhcmkgZmlyaW5nIHNjcm9sbCBldmVudCBhdCB1bmV4cGVjdGVkIGNvbmRpdGlvbnMgKGUuZy4gcG9wcGluZyB1cCBTZWxlY3QpXG5hZGRFdmVudExpc3RlbmVyKGlzTW9iaWxlID8gJ3RvdWNobW92ZScgOiAnc2Nyb2xsJywgKCkgPT4ge1xuXHRpZiAoIWlzRGlzYWJsZWQudmFsdWUpIHtcblx0XHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0fVxufSk7XG5cbmZ1bmN0aW9uIG9uT3B0T3V0KCkge1xuXHRzZXRPcHRPdXQoKTtcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxUZWxlcG9ydCA6dG89XCJkZXNrdG9wTW91bnRQb2ludFwiPlxuXHRcdDxWQVZhcmlhbnRQcm9tcHRcblx0XHRcdHYtaWY9XCIhaXNNb2JpbGVcIlxuXHRcdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHRcdHYtbW9kZWw6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVkXCJcblx0XHRcdDphdXRvLWNsb3NlPVwiZmFsc2VcIlxuXHRcdFx0QG9wdG91dD1cIm9uT3B0T3V0XCJcblx0XHRcdEBzZWxlY3Q9XCJzZXRWYXJpYW50XCJcblx0XHQvPlxuXHQ8L1RlbGVwb3J0PlxuXG5cdDwhLS0gVGVsZXBvcnQgdG8gYm9keSBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBmbG9hdGVkIGF0IGJvdHRvbSAtLT5cblx0PFRlbGVwb3J0IHRvPVwiYm9keVwiPlxuXHRcdDxWQVZhcmlhbnRQcm9tcHRNb2JpbGVcblx0XHRcdHYtaWY9XCJpc01vYmlsZVwiXG5cdFx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdFx0di1tb2RlbDpkaXNhYmxlZD1cImlzRGlzYWJsZWRcIlxuXHRcdFx0QG9wdG91dD1cIm9uT3B0T3V0XCJcblx0XHRcdEBzZWxlY3Q9XCJzZXRWYXJpYW50XCJcblx0XHQvPlxuXHQ8L1RlbGVwb3J0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS12YXJpYW50LXByb21wdCB7XG5cdC8vIFZlY3RvciAyMDIyIHNwZWNpZmljIGFkanVzdG1lbnRzXG5cdC5za2luLXZlY3Rvci0yMDIyICYge1xuXHRcdC8vIENhbGN1bGF0ZWQgZnJvbSBWZWN0b3IgMjAyMiBzb3VyY2UgY29kZVxuXHRcdEB2ZWN0b3ItMjAyMi1oZWFkZXItaGVpZ2h0OiA1MHB4ICsgMiAqIDhweDtcblx0XHRtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSBAc3BhY2luZy12ZXJ0aWNhbC1kaWFsb2cgLSBAdmVjdG9yLTIwMjItaGVhZGVyLWhlaWdodCk7XG5cblx0XHQudmVjdG9yLXRvYy1hdmFpbGFibGUudmVjdG9yLWZlYXR1cmUtdG9jLXBpbm5lZC1jbGllbnRwcmVmLTEgJixcblx0XHQudmVjdG9yLWZlYXR1cmUtbWFpbi1tZW51LXBpbm5lZC1lbmFibGVkICYge1xuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyMHB4KSBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG5cdFx0XHRcdGxlZnQ6IHVuc2V0O1xuXG5cdFx0XHRcdC8vIENhbGN1bGF0ZWQgZnJvbSBWZWN0b3IgMjAyMiBzb3VyY2UgY29kZVxuXHRcdFx0XHQvLyBJbiB0aGlzIHdpZHRoIHRoaXMgcHJvbXB0IHdpbGwgbm90IG9ic2N1cmUgYXJ0aWNsZSBjb250ZW50XG5cdFx0XHRcdEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmc6IDIuNzVlbTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0oQHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZyAvIDMgKiAyKTtcblx0XHRcdFx0bWF4LXdpZHRoOiBjYWxjKDEyLjI1ZW0gKyAzNnB4KTtcblx0XHRcdFx0cGFkZGluZzogQHNwYWNpbmctMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuXHRcdFx0QHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZzogMy4yNWVtO1xuXHRcdFx0bGVmdDogdW5zZXQ7XG5cdFx0XHRtYXJnaW4tbGVmdDogLShAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nIC8gMyAqIDIpO1xuXHRcdFx0bWF4LXdpZHRoOiBjYWxjKDE1Ljc1ZW0gKyAzNnB4KTtcblx0XHR9XG5cdH1cbn1cbjwvc3R5bGU+XG4uL21vZHVsZXMvdXRpbHNcbiIsICJpbXBvcnQge2NvbXB1dGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcblxuY29uc3QgVkFMSURfVkFSSUFOVFMgPSBbJ3poLWNuJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3JywgJ3poLWhrJywgJ3poLW1vJ10gYXMgY29uc3Q7XG5cbi8vIFdyYXAgd2dVc2VyVmFyaWFudCBpbiBhIHJlZiBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuLy8gSXQgaGFzIG5vIHJlYWN0aXZpdHkgaW4gcHJvZHVjdGlvbi4gKGNoYW5nZXMgdG8gd2dVc2VyVmFyaWFudCB3aWxsIG5vdCBiZSByZWZsZWN0ZWQpXG4vLyB3Z1VzZXJWYXJpYW50IGNhbiBiZSBudWxsLCBzbyBmYWxscyBiYWNrIHRvIGFuIGVtcHR5IHN0cmluZy5cbmNvbnN0IHdnVXNlclZhcmlhbnQgPSByZWYobXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpID8/ICcnKTtcblxuZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKTogYm9vbGVhbiB7XG5cdC8vIEJyb3dzZXIgc3VwcG9ydDpcblx0Ly8gQ2hyb21pdW0gb24gc29tZSBBbmRyb2lkIGRldmljZSAoZS5nLiBTYW1zdW5nKSBoYXMgXCIoaG92ZXI6IGhvdmVyKVwiIHNldFxuXHQvLyBTbyBjaGVjayBwb2ludGVyIHRvZ2V0aGVyXG5cdHJldHVybiBtYXRjaE1lZGlhKCcoaG92ZXI6IG5vbmUpLCAocG9pbnRlcjogY29hcnNlKScpLm1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGdldE1vdW50UG9pbnQoKTogRWxlbWVudCB7XG5cdHN3aXRjaCAobXcuY29uZmlnLmdldCgnc2tpbicpKSB7XG5cdFx0Y2FzZSAndmVjdG9yLTIwMjInOlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1wYWdlLWNvbnRhaW5lcicpWzBdID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0Y2FzZSAnZ29uZ2JpJzpcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctY29udGVudC1ibG9jaycpID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBkb2N1bWVudC5ib2R5O1xuXHR9XG59XG5cbmNvbnN0IGluZmVycmVkVmFyaWFudCA9IGNvbXB1dGVkKCgpID0+IHtcblx0aWYgKChWQUxJRF9WQVJJQU5UUyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXMod2dVc2VyVmFyaWFudC52YWx1ZSkpIHtcblx0XHRyZXR1cm4gd2dVc2VyVmFyaWFudC52YWx1ZSBhcyBWYWxpZFZhcmlhbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59KTtcblxuLyoqXG4gKiBTaHVmZmxlIGJldHdlZW4gYWxsIHZhbGlkIHZhcmlhbnRzLlxuICpcbiAqIEBwYXJhbSBsYXN0IGxhc3Qgc2h1ZmZsZWQgdmFyaWFudCwgdXNlZCB0byBwcmV2ZW50IGR1cGxpY2F0aW9uc1xuICogQHJldHVybnMgc2h1ZmZsZWQgdmFyaWFudFxuICovXG5mdW5jdGlvbiBzaHVmZmxlVmFyaWFudChsYXN0PzogVmFsaWRWYXJpYW50KTogVmFsaWRWYXJpYW50IHtcblx0Y29uc3QgdGFyZ2V0QXJyYXkgPSBbLi4uVkFMSURfVkFSSUFOVFNdLmZpbHRlcigoaSkgPT4ge1xuXHRcdHJldHVybiBpICE9PSBsYXN0O1xuXHR9KTtcblx0Y29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXRBcnJheS5sZW5ndGgpO1xuXHRyZXR1cm4gdGFyZ2V0QXJyYXlbcmFuZG9tSW5kZXhdITtcbn1cblxuZXhwb3J0IHtWQUxJRF9WQVJJQU5UUywgd2dVc2VyVmFyaWFudCwgaXNNb2JpbGVEZXZpY2UsIGdldE1vdW50UG9pbnQsIGluZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1ZBTElEX1ZBUklBTlRTLCBpbmZlcnJlZFZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuaW1wb3J0IHtyZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHVzZUkxOG4sIHtpMThuVmFyaWFudH0gZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlSTE4bic7XG5pbXBvcnQgVkFCdXR0b24gZnJvbSAnLi9WQUJ1dHRvbi52dWUnO1xuaW1wb3J0IFZBRmFkZVRyYW5zaXRpb24gZnJvbSAnLi9WQUZhZGVUcmFuc2l0aW9uLnZ1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB1c2VEZWZhdWx0IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZURlZmF1bHQnO1xuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuaW1wb3J0IHVzZVNodWZmbGVkVmFyaWFudCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VTaHVmZmxlZFZhcmlhbnQnO1xuaW1wb3J0IHVzZVVuaXF1ZUlkIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVVuaXF1ZUlkJztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG5cdGRlZmluZVByb3BzPHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0XHRhdXRvQ2xvc2U/OiBib29sZWFuO1xuXHR9PigpLFxuXHR7XG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdGF1dG9DbG9zZTogZmFsc2UsXG5cdH1cbik7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTpvcGVuJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3VwZGF0ZTpkaXNhYmxlZCcsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICdzZWxlY3QnLCB2YXJpYW50OiBWYWxpZFZhcmlhbnQpOiB2b2lkO1xuXHQoZTogJ29wdG91dCcpOiB2b2lkO1xufT4oKTtcblxuY29uc3QgcHJvbXB0ID0gcmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5jb25zdCB0aXRsZUlkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IGRlc2NJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBpc09wZW4gPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdvcGVuJyk7XG5jb25zdCBpc0Rpc2FibGVkID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnZGlzYWJsZWQnKTtcbmNvbnN0IGlzVmFyaWFudE5hcnJvd2VkID0gdXNlRGVmYXVsdCgoKSA9PiBpbmZlcnJlZFZhcmlhbnQudmFsdWUgIT09IG51bGwpO1xuY29uc3Qgc2h1ZmZsZWRWYXJpYW50ID0gdXNlU2h1ZmZsZWRWYXJpYW50KGlzVmFyaWFudE5hcnJvd2VkKTtcblxuZnVuY3Rpb24gb3B0T3V0QW5kQ2xvc2UoKSB7XG5cdGVtaXQoJ29wdG91dCcpO1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRpc0Rpc2FibGVkLnZhbHVlID0gdHJ1ZTtcblx0ZW1pdCgnc2VsZWN0JywgdmFyaWFudCk7XG59XG5cbndhdGNoKHByb21wdCwgKCkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gcHJvbXB0LnZhbHVlO1xuXHRpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldikgPT4ge1xuXHRcdFx0Ly8gRG8gbm90IGRpc21pc3MgaWYgYW55IGJ1dHRvbiBpcyBwcmVzc2VkIG9yIHRoZSBwcm9tcHQgaXMgZGlzYWJsZWRcblx0XHRcdGlmIChldi5idXR0b25zID09PSAwICYmIHByb3BzLmF1dG9DbG9zZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcblx0XHRcdFx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRyYW5zaXRpb24gbmFtZT1cInZhLXZhcmlhbnQtcHJvbXB0XCIgYXBwZWFyPlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJvcGVuXCJcblx0XHRcdHJlZj1cInByb21wdFwiXG5cdFx0XHQ6bGFuZz1cImB6aC0ke2kxOG5WYXJpYW50fWBcIlxuXHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdFwiXG5cdFx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRcdGFyaWEtbW9kYWw9XCJmYWxzZVwiXG5cdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0XHQ6YXJpYS1kZXNjcmliZWRieT1cImRlc2NJZFwiXG5cdFx0PlxuXHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Nsb3NlXCJcblx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRpY29uPVwiY2xvc2VcIlxuXHRcdFx0XHQ6dGl0bGU9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmFyaWEtbGFiZWw9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRAY2xpY2s9XCJvcHRPdXRBbmRDbG9zZVwiXG5cdFx0XHQvPlxuXHRcdFx0PGgyIDppZD1cInRpdGxlSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZSB2YS10aXRsZVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpIH19PGJyIC8+XG5cdFx0XHRcdDxWQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHR2LWlmPVwiIWlzVmFyaWFudE5hcnJvd2VkXCJcblx0XHRcdFx0XHRcdDprZXk9XCJzaHVmZmxlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdFx0Omxhbmc9XCJgemgtJHtzaHVmZmxlZFZhcmlhbnR9YFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZV9fdmFyaWFudFwiXG5cdFx0XHRcdFx0XHQ+e3sgbWVzc2FnZXMudmFyaWFudHNbc2h1ZmZsZWRWYXJpYW50XSB9fTwvc3BhblxuXHRcdFx0XHRcdD5cblx0XHRcdFx0PC9WQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0PC9oMj5cblx0XHRcdDxwIDppZD1cImRlc2NJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Rlc2MgdmEtcGFyYVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLm1haW4uYWx0JyA6ICd2cC5tYWluJykgfX1cblx0XHRcdDwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiPlxuXHRcdFx0XHQ8IS0tIGluZmVycmVkVmFyaWFudCBpcyBub24tbnVsbCwgZ3VhcmRlZCBieSBpc1ZhcmlhbnROYXJyb3dlZCAtLT5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0di1mb3I9XCJ2YXJpYW50IGluIGlzVmFyaWFudE5hcnJvd2VkICYmIGluZmVycmVkVmFyaWFudCAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBbaW5mZXJyZWRWYXJpYW50XVxuXHRcdFx0XHRcdFx0OiBWQUxJRF9WQVJJQU5UU1wiXG5cdFx0XHRcdFx0OmtleT1cInZhcmlhbnRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiXG5cdFx0XHRcdFx0OmNsYXNzPVwieyd2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uLS1wcmltYXJ5JzogaXNWYXJpYW50TmFycm93ZWR9XCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0Omxhbmc9XCJ2YXJpYW50XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwic2VsZWN0KHZhcmlhbnQpXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt7IG1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdIH19XG5cdFx0XHRcdDwvVkFCdXR0b24+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdHYtaWY9XCJpc1ZhcmlhbnROYXJyb3dlZFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cImlzVmFyaWFudE5hcnJvd2VkID0gZmFsc2VcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAuYnV0dG9uLm90aGVyJykgfX1cblx0XHRcdFx0PC9WQUJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGZvb3RlciBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4uZXh0JykgfX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdDwvVHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdGl0bGUge1xuXHRib3JkZXI6IDA7IC8vIFJlc2V0XG5cdHBhZGRpbmc6IDA7IC8vIFJlc2V0XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cblx0Zm9udC1zaXplOiBAZm9udC1zaXplLXh4LWxhcmdlO1xuXHRmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0LWJvbGQ7XG5cdG1hcmdpbjogQHNwYWNpbmctNTAgQHNwYWNpbmctMDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xufVxuXG4udmEtcGFyYSB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy01MDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXG5cdCYtLXN1YnRsZSB7XG5cdFx0Y29sb3I6IEBjb2xvci1zdWJ0bGU7XG5cdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXgtc21hbGw7XG5cdFx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMzU7XG5cdH1cbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0IHtcblx0Ym94LXNpemluZzogQGJveC1zaXppbmctYmFzZTtcblx0ei1pbmRleDogQHotaW5kZXgtb3ZlcmxheTtcblx0cGFkZGluZzogQHNwYWNpbmctMTAwIEBzcGFjaW5nLTE1MDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZztcblx0Ym90dG9tOiBAc3BhY2luZy12ZXJ0aWNhbC1kaWFsb2c7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZyAqIDIpO1xuXHRtYXgtd2lkdGg6IDE4ZW07XG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXG5cdG92ZXJmbG93OiBhdXRvO1xuXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuXHRib3JkZXI6IEBib3JkZXItYmFzZTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblx0Ym94LXNoYWRvdzogQGJveC1zaGFkb3ctZHJvcC1tZWRpdW07XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc3lzdGVtLXNhbnM7XG5cdGZvbnQtc2l6ZTogMXJlbTsgLy8gUmVzZXRcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDsgLy8gUmVzZXRcblxuXHQmX19jbG9zZSB7XG5cdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHR9XG5cblx0Jl9fdGl0bGUge1xuXHRcdCZfX3ZhcmlhbnQge1xuXHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHR9XG5cdH1cblxuXHQmX19vcHRpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW46IEBzcGFjaW5nLTc1IEBzcGFjaW5nLTA7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yLWJhc2U7XG5cdFx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblxuXHRcdCZfX2J1dHRvbiB7XG5cdFx0XHRmb250LXNpemU6IEBmb250LXNpemUtc21hbGw7XG5cdFx0XHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS1zdWJ0bGU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXG5cdFx0XHQmLS1wcmltYXJ5IHtcblx0XHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHRcdH1cblxuXHRcdFx0Jjpob3Zlcixcblx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKiBQcm9tcHQgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbi52YS12YXJpYW50LXByb21wdC1lbnRlci1hY3RpdmUsXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtYWN0aXZlIHtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHktZmFkZTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb24tbWVkaXVtO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLXN5c3RlbTtcbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LWVudGVyLWZyb20sXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtdG8ge1xuXHRvcGFjaXR5OiAwO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uL21lc3NhZ2VzLmpzb24nO1xuaW1wb3J0IHt3Z1VzZXJWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcblxuLy8gSW50ZXJmYWNlIHZhcmlhbnQgb2YgdmFyaWFudCBwcm9tcHRcbmNvbnN0IGkxOG5WYXJpYW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuXHRpZiAod2dVc2VyVmFyaWFudC52YWx1ZSA9PT0gJ3poJykge1xuXHRcdC8vIE5vIGNvbnZlcnNpb246IHVzZSByYW5kb21seSBzZWxlY3RlZCB2YXJpYW50XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnaGFucycgOiAnaGFudCc7XG5cdH1cblx0aWYgKFsnemgtaGFudCcsICd6aC10dycsICd6aC1oaycsICd6aC1tbyddLmluY2x1ZGVzKHdnVXNlclZhcmlhbnQudmFsdWUpKSB7XG5cdFx0cmV0dXJuICdoYW50Jztcblx0fVxuXG5cdHJldHVybiAnaGFucyc7XG59KTtcblxuZnVuY3Rpb24gdXNlSTE4bihrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdGNvbnN0IGN1cnJlbnRNc2dzR3JvdXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSBtZXNzYWdlc1tpMThuVmFyaWFudC52YWx1ZV07XG5cdHJldHVybiBjdXJyZW50TXNnc0dyb3VwW2tleV0gPz8ga2V5O1xufVxuXG5leHBvcnQge3VzZUkxOG4gYXMgZGVmYXVsdCwgaTE4blZhcmlhbnR9O1xuIiwgIntcblx0XCJ2YXJpYW50c1wiOiB7XG5cdFx0XCJ6aC1jblwiOiBcIuS4reWbveWkp+mZhueugOS9k1wiLFxuXHRcdFwiemgtc2dcIjogXCLmlrDliqDlnaHnroDkvZNcIixcblx0XHRcInpoLW15XCI6IFwi6ams5p2l6KW/5Lqa566A5L2TXCIsXG5cdFx0XCJ6aC1oa1wiOiBcIuS4reWci+mmmea4r+e5gemrlFwiLFxuXHRcdFwiemgtbW9cIjogXCLkuK3lnIvmvrPploDnuYHpq5RcIixcblx0XHRcInpoLXR3XCI6IFwi5Lit5ZyL6Ie654Gj57mB6auUXCJcblx0fSxcblx0XCJoYW5zXCI6IHtcblx0XHRcInNwYWNlXCI6IFwiXCIsXG5cdFx0XCJjbG9zZVwiOiBcIuWFs+mXrVwiLFxuXHRcdFwidnAuaGVhZGVyXCI6IFwi5oiR5Lus5pSv5oyBXCIsXG5cdFx0XCJ2cC5oZWFkZXIuYWx0XCI6IFwi6K6w5L2P5q2k5Y+Y5L2T77yfXCIsXG5cdFx0XCJ2cC5tYWluXCI6IFwi6YCJ5Y+W5YaF5a6555qE6K+t6KiA5Y+Y5L2TXCIsXG5cdFx0XCJ2cC5tYWluLmFsdFwiOiBcIuS7peWQjumDveS9v+eUqOatpOWPmOS9k+WRiOeOsOWGheWuuVwiLFxuXHRcdFwidnAubWFpbi5leHRcIjogXCLkv53lrZjmgqjlgY/lpb3nmoTkuK3mlofor63oqIDlj5jkvZPvvIzku6Xpgb/lhY3mmL7npLrnroDnuYHmt7fmnYLnmoTlhoXlrrnvvIzmj5DkvpvmnIDkvbPnmoTpmIXor7vkvZPpqozjgIJcIixcblx0XHRcInZwLmJ1dHRvbi5va1wiOiBcIuehruWumlwiLFxuXHRcdFwidnAuYnV0dG9uLm90aGVyXCI6IFwi5YW25LuWXCJcblx0fSxcblx0XCJoYW50XCI6IHtcblx0XHRcInNwYWNlXCI6IFwiXCIsXG5cdFx0XCJjbG9zZVwiOiBcIumXnOmWiVwiLFxuXHRcdFwidnAuaGVhZGVyXCI6IFwi5oiR5YCR5pSv5o+0XCIsXG5cdFx0XCJ2cC5oZWFkZXIuYWx0XCI6IFwi6KiY5L2P5q2k6K6K6auU77yfXCIsXG5cdFx0XCJ2cC5tYWluXCI6IFwi6YG45Y+W5YWn5a6555qE6Kqe6KiA6K6K6auUXCIsXG5cdFx0XCJ2cC5tYWluLmFsdFwiOiBcIuS7peW+jOmDveS9v+eUqOatpOiuiumrlOWRiOePvuWFp+WuuVwiLFxuXHRcdFwidnAubWFpbi5leHRcIjogXCLlhLLlrZjmgqjlgY/lpb3nmoTkuK3mlofoqp7oqIDororpq5TvvIzku6Xpgb/lhY3poa/npLrnsKHnuYHmt7fpm5znmoTlhaflrrnvvIzmj5DkvpvmnIDkvbPnmoTplrHoroDpq5TpqZfjgIJcIixcblx0XHRcInZwLmJ1dHRvbi5va1wiOiBcIueiuuWumlwiLFxuXHRcdFwidnAuYnV0dG9uLm90aGVyXCI6IFwi5YW25LuWXCJcblx0fVxufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsga2V5OiAwIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGtleTogMSB9XG5jb25zdCBfaG9pc3RlZF80ID0geyBrZXk6IDIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInN2Z1wiLCB7XG4gICAgY2xhc3M6IFwidmEtaWNvbi1idXR0b25fX2ljb25cIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIFwieG1sbnM6eGxpbmtcIjogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gICAgd2lkdGg6ICRwcm9wcy5zaXplLFxuICAgIGhlaWdodDogJHByb3BzLnNpemUsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gIH0sIFtcbiAgICAoJHByb3BzLmljb24gPT09ICdsYW5nJylcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImdcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWRpc2FibGUgXCIpLFxuICAgICAgICAgIF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk0yMCAxOGgtMS40NGEuNjEuNjEgMCAwMS0uNC0uMTIuODEuODEgMCAwMS0uMjMtLjMxTDE3IDE1aC01bC0xIDIuNTRhLjc3Ljc3IDAgMDEtLjIyLjMuNTkuNTkgMCAwMS0uNC4xNEg5bDQuNTUtMTEuNDdoMS44OXptLTMuNTMtNC4zMUwxNC44OSA5LjVhMTEuNjIgMTEuNjIgMCAwMS0uMzktMS4yNHEtLjA5LjM3LS4xOS42OWwtLjE5LjU2LTEuNTggNC4xOXptLTYuMy0xLjU4YTEzLjQzIDEzLjQzIDAgMDEtMi45MS0xLjQxIDExLjQ2IDExLjQ2IDAgMDAyLjgxLTUuMzdIMTJWNEg3LjMxYTQgNCAwIDAwLS4yLS41NkM2Ljg3IDIuNzkgNi42IDIgNi42IDJsLTEuNDcuNXMuNC44OS42IDEuNUgwdjEuMzNoMi4xNUExMS4yMyAxMS4yMyAwIDAwNSAxMC43YTE3LjE5IDE3LjE5IDAgMDEtNSAyLjFxLjU2LjgyLjg3IDEuMzhhMjMuMjggMjMuMjggMCAwMDUuMjItMi41MSAxNS42NCAxNS42NCAwIDAwMy41NiAxLjc3ek0zLjYzIDUuMzNoNC45MWE4LjExIDguMTEgMCAwMS0yLjQ1IDQuNDUgOS4xMSA5LjExIDAgMDEtMi40Ni00LjQ1elwiIH0sIG51bGwsIC0xIC8qIENBQ0hFRCAqLykpLFxuICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWVuYWJsZSBcIilcbiAgICAgICAgXSkpXG4gICAgICA6ICgkcHJvcHMuaWNvbiA9PT0gJ2Nsb3NlJylcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF8zLCBbLi4uKF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIm00LjM0IDIuOTMgMTIuNzMgMTIuNzMtMS40MSAxLjQxTDIuOTMgNC4zNXpcIiB9LCBudWxsLCAtMSAvKiBDQUNIRUQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk0xNy4wNyA0LjM0IDQuMzQgMTcuMDdsLTEuNDEtMS40MUwxNS42NiAyLjkzelwiIH0sIG51bGwsIC0xIC8qIENBQ0hFRCAqLylcbiAgICAgICAgICBdKSldKSlcbiAgICAgICAgOiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF80LCBbLi4uKF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk04LjU5IDMuNDIgMTQuMTcgOUgydjJoMTIuMTdsLTUuNTggNS41OUwxMCAxOGw4LTgtOC04elwiIH0sIG51bGwsIC0xIC8qIENBQ0hFRCAqLylcbiAgICAgICAgICBdKSldKSlcbiAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBSWNvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFJY29uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFJY29uLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHJlbmRlclNsb3QgYXMgX3JlbmRlclNsb3QsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHtcbiAga2V5OiAxLFxuICBjbGFzczogXCJ2YS1idXR0b25fX3RleHRcIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImJ1dHRvblwiLCB7XG4gICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJ2YS1idXR0b25cIiwge1xuXHRcdFx0J3ZhLWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJzogJHByb3BzLmFjdGlvbiA9PT0gJ3Byb2dyZXNzaXZlJyxcblx0XHRcdCd2YS1idXR0b24tLXdlaWdodC1xdWlldCc6ICRwcm9wcy53ZWlnaHQgPT09ICdxdWlldCcsXG5cdFx0fV0pLFxuICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+IChfY3R4LiRlbWl0KCdjbGljaycpKSlcbiAgfSwgW1xuICAgICgkcHJvcHMuaWNvbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFJY29uXCJdLCB7XG4gICAgICAgICAga2V5OiAwLFxuICAgICAgICAgIGNsYXNzOiBcInZhLWJ1dHRvbl9faWNvblwiLFxuICAgICAgICAgIGljb246ICRwcm9wcy5pY29uLFxuICAgICAgICAgIHNpemU6IDIwXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImljb25cIl0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAoX2N0eC4kc2xvdHNbJ2RlZmF1bHQnXSlcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge30sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICAgICAgXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICgkcHJvcHMuaW5kaWNhdG9yICE9PSB1bmRlZmluZWQpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUljb25cIl0sIHtcbiAgICAgICAgICBrZXk6IDIsXG4gICAgICAgICAgY2xhc3M6IFwidmEtYnV0dG9uX19pbmRpY2F0b3JcIixcbiAgICAgICAgICBpY29uOiAkcHJvcHMuaW5kaWNhdG9yLFxuICAgICAgICAgIHNpemU6IDE2XG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImljb25cIl0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICBdLCAyIC8qIENMQVNTICovKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1iYjc3MzRiMVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UcmFuc2l0aW9uLCB7XG4gICAgbmFtZTogXCJ2YS1mYWRlXCIsXG4gICAgbW9kZTogXCJvdXQtaW5cIlxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIF0pLFxuICAgIF86IDMgLyogRk9SV0FSREVEICovXG4gIH0pKVxufSIsICJjb25zdCBzY3JpcHQgPSB7fTtpbXBvcnQgXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFGYWRlVHJhbnNpdGlvbi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiOWM1NzUxXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge1JlZiwgV2F0Y2hTb3VyY2UsIGNvbXB1dGVkLCBzaGFsbG93UmVmLCB3YXRjaH0gZnJvbSAndnVlJztcblxuLyoqXG4gKiBDcmVhdGUgYSByZWYgdGhhdCwgY2FuIGJlIGluZGVwZW5kZW50bHkgdXBkYXRlZCwgYnV0IHdoZW4gaXRzIGRlZmF1bHRcbiAqIHZhbHVlIGNoYW5nZXMsIGl0IGlzIHJlc3RvcmVkIHRvIGl0cyAobmV3KSBkZWZhdWx0IHZhbHVlLlxuICpcbiAqIFVzZWQgZm9yIGRlYnVnZ2luZy5cbiAqL1xuZnVuY3Rpb24gdXNlRGVmYXVsdDxUPihkZWZhdWx0VmFsdWU6IFdhdGNoU291cmNlPFQ+KTogUmVmPFQ+IHtcblx0Y29uc3QgcmVhbFJlZiA9IHNoYWxsb3dSZWY8VD4odHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRWYWx1ZSgpIDogZGVmYXVsdFZhbHVlLnZhbHVlKTtcblxuXHR3YXRjaChcblx0XHRkZWZhdWx0VmFsdWUsXG5cdFx0KG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHRyZWFsUmVmLnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0fSxcblx0XHR7ZGVlcDogdHJ1ZX1cblx0KTtcblxuXHRyZXR1cm4gY29tcHV0ZWQoe1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiByZWFsUmVmLnZhbHVlIGFzIFQ7XG5cdFx0fSxcblx0XHRzZXQobmV3VmFsdWUpIHtcblx0XHRcdHJlYWxSZWYudmFsdWUgPSBuZXdWYWx1ZTtcblx0XHR9LFxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRGVmYXVsdDtcbiIsICJpbXBvcnQge1dyaXRhYmxlQ29tcHV0ZWRSZWYsIGNvbXB1dGVkfSBmcm9tICd2dWUnO1xuXG4vKipcbiAqIFJldHVybiBhIGNvbXB1dGVkIHByb3BlcnR5IHRoYXQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBwcm9wIHZhbHVlIHdoZW4gaXMgYWNjZXNzZWRcbiAqIGFuZCBmaXJlcyBhbiBldmVudCB3aGVuIGlzIHNldC4gVXNlZCB3aXRoIHYtbW9kZWwuXG4gKlxuICogQHBhcmFtIHByb3BzIHByb3BzIGZpZWxkIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0gZW1pdCBlbWl0IGZ1bmN0aW9uIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0gbmFtZSBuYW1lIG9mIHRoZSBwcm9wXG4gKiBAcmV0dXJuIHdyYXBwZWQgY29tcHV0ZXIgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gdXNlTW9kZWxXcmFwcGVyPFQgZXh0ZW5kcyBzdHJpbmcsIFAgZXh0ZW5kcyBSZWNvcmQ8VCwgdW5rbm93bj4+KFxuXHRwcm9wczogUCxcblx0ZW1pdDogKGV2ZW50OiBgdXBkYXRlOiR7VH1gLCB2YWx1ZTogUFtUXSkgPT4gdm9pZCxcblx0bmFtZTogVCA9ICdtb2RlbFZhbHVlJyBhcyBUXG4pOiBXcml0YWJsZUNvbXB1dGVkUmVmPFBbVF0+IHtcblx0cmV0dXJuIGNvbXB1dGVkKHtcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gcHJvcHNbbmFtZV07XG5cdFx0fSxcblx0XHRzZXQodmFsdWUpIHtcblx0XHRcdGVtaXQoYHVwZGF0ZToke25hbWV9YCwgdmFsdWUpO1xuXHRcdH0sXG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNb2RlbFdyYXBwZXI7XG4iLCAiaW1wb3J0IHtSZWYsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2luZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuaW1wb3J0IHt0eXBlIFZhbGlkVmFyaWFudH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5cbmNvbnN0IElOVEVSVkFMID0gMyAqIDEwMDA7XG5cbi8qKlxuICogUmV0dXJuIGEgcmVmIHdoaWNoIHNodWZmbGUgYmV0d2VlbiBhbGwgcG9zc2libGUgdmFyaWFudHMuXG4gKlxuICogQHBhcmFtIGlzRnJlZXplZCBzaG91bGQgc2h1ZmZsaW5nIHBhdXNlIG9yIG5vdFxuICovXG5mdW5jdGlvbiB1c2VTaHVmZmxlZFZhcmlhbnQoaXNGcmVlemVkOiBSZWY8Ym9vbGVhbj4pOiBSZWY8VmFsaWRWYXJpYW50PiB7XG5cdGNvbnN0IHJlc3VsdCA9IHJlZjxWYWxpZFZhcmlhbnQ+KHNodWZmbGVWYXJpYW50KCkpO1xuXHRsZXQgaWQ6IG51bWJlcjtcblxuXHR3YXRjaChcblx0XHRpc0ZyZWV6ZWQsXG5cdFx0KG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHRpZiAobmV3VmFsdWUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZnJlZXplIGF0IGluZmVycmVkIHZhcmlhbnQgYXQgYSBiZXN0IGVmZm9ydFxuXHRcdFx0XHQvLyBUaGlzIHNob3VsZCBiZSBtb3N0IGNhc2VzXG5cdFx0XHRcdHJlc3VsdC52YWx1ZSA9IGluZmVycmVkVmFyaWFudC52YWx1ZSA/PyBzaHVmZmxlVmFyaWFudCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZSA9IHNodWZmbGVWYXJpYW50KHJlc3VsdC52YWx1ZSk7XG5cdFx0XHRcdH0sIElOVEVSVkFMKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtpbW1lZGlhdGU6IHRydWV9XG5cdCk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2h1ZmZsZWRWYXJpYW50O1xuIiwgImxldCBjb3VudGVyID0gMDtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bmlxdWUgZWxlbWVudCBJRCBvbiBlYWNoIGNhbGwuXG4gKlxuICogQHJldHVybnMgaWRcbiAqL1xuZnVuY3Rpb24gdXNlVW5pcXVlSWQoKTogc3RyaW5nIHtcblx0cmV0dXJuIGB2YS0ke2NvdW50ZXIrK31gO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VVbmlxdWVJZDtcbiIsICJpbXBvcnQgeyBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24gfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IFtcImxhbmdcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJhcmlhLWRlc2NyaWJlZGJ5XCJdXG5jb25zdCBfaG9pc3RlZF8yID0gW1wiaWRcIl1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJsYW5nXCJdXG5jb25zdCBfaG9pc3RlZF80ID0gW1wiaWRcIl1cbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zXCIgfVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX2Zvb3RlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UcmFuc2l0aW9uLCB7XG4gICAgbmFtZTogXCJ2YS12YXJpYW50LXByb21wdFwiLFxuICAgIGFwcGVhcjogXCJcIlxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgKCRwcm9wcy5vcGVuKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgcmVmOiBcInByb21wdFwiLFxuICAgICAgICAgICAgbGFuZzogYHpoLSR7JHNldHVwLmkxOG5WYXJpYW50fWAsXG4gICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdFwiLFxuICAgICAgICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgICAgICAgIFwiYXJpYS1tb2RhbFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAkc2V0dXAudGl0bGVJZCxcbiAgICAgICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiAkc2V0dXAuZGVzY0lkXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19jbG9zZVwiLFxuICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICB0aXRsZTogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgb25DbGljazogJHNldHVwLm9wdE91dEFuZENsb3NlXG4gICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJ0aXRsZVwiLCBcImFyaWEtbGFiZWxcIiwgXCJkaXNhYmxlZFwiXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaDJcIiwge1xuICAgICAgICAgICAgICBpZDogJHNldHVwLnRpdGxlSWQsXG4gICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZSB2YS10aXRsZVwiXG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgPyAndnAuaGVhZGVyLmFsdCcgOiAndnAuaGVhZGVyJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgICBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9IF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJiclwiLCBudWxsLCBudWxsLCAtMSAvKiBDQUNIRUQgKi8pKSxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBRmFkZVRyYW5zaXRpb25cIl0sIG51bGwsIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAoISRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZClcbiAgICAgICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICRzZXR1cC5zaHVmZmxlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuc2h1ZmZsZWRWYXJpYW50fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGVfX3ZhcmlhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzWyRzZXR1cC5zaHVmZmxlZFZhcmlhbnRdKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfMykpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMiksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCB7XG4gICAgICAgICAgICAgIGlkOiAkc2V0dXAuZGVzY0lkLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fZGVzYyB2YS1wYXJhXCJcbiAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLm1haW4uYWx0JyA6ICd2cC5tYWluJykpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF80KSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNSwgW1xuICAgICAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGluZmVycmVkVmFyaWFudCBpcyBub24tbnVsbCwgZ3VhcmRlZCBieSBpc1ZhcmlhbnROYXJyb3dlZCBcIiksXG4gICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkICYmICRzZXR1cC5pbmZlcnJlZFZhcmlhbnQgIT09IG51bGxcblx0XHRcdFx0XHRcdD8gWyRzZXR1cC5pbmZlcnJlZFZhcmlhbnRdXG5cdFx0XHRcdFx0XHQ6ICRzZXR1cC5WQUxJRF9WQVJJQU5UUywgKHZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIiwgeyd2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uLS1wcmltYXJ5JzogJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkfV0pLFxuICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yOiBcImFycm93TmV4dFwiLFxuICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICAgIGxhbmc6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkc2V0dXAuc2VsZWN0KHZhcmlhbnQpKVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXzogMiAvKiBEWU5BTUlDICovXG4gICAgICAgICAgICAgICAgfSwgMTAzMiAvKiBQUk9QUywgRFlOQU1JQ19TTE9UUyAqLywgW1wiY2xhc3NcIiwgXCJsYW5nXCIsIFwiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCJdKSlcbiAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpLFxuICAgICAgICAgICAgICAoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkKVxuICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3I6IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA9IGZhbHNlKSlcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAuYnV0dG9uLm90aGVyJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiZGlzYWJsZWRcIl0pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImZvb3RlclwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzcsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4uZXh0JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEpKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTVhNDRjYzc1XCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0bW9kZWxWYWx1ZTogc3RyaW5nO1xufT4oKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IG1vZGVsVmFsdWUgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PHNlbGVjdCB2LW1vZGVsPVwibW9kZWxWYWx1ZVwiIGNsYXNzPVwidmEtc2VsZWN0XCI+XG5cdFx0PHNsb3QgLz5cblx0PC9zZWxlY3Q+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXNlbGVjdCB7XG5cdC5zZWxlY3RfX2hhbmRsZSgpO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgQHNwYWNpbmctNzU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtaW1hZ2U6IEBpY29uLWV4cGFuZDtcblx0YmFja2dyb3VuZC1zaXplOiBAc2l6ZS1pY29uLXgtc21hbGw7XG5cblx0JjpkaXNhYmxlZCB7XG5cdFx0LnNlbGVjdF9faGFuZGxlLS1kaXNhYmxlZCgpO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IEBpY29uLWV4cGFuZC1kaXNhYmxlZDtcblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUsIHdoaWNoIHNldHMgYW4gb3BhY2l0eSBsZXNzIHRoYW4gMSBmb3IgZGlzYWJsZWQgc2VsZWN0IGVsZW1lbnRzLlxuXHRcdG9wYWNpdHk6IEBvcGFjaXR5LWJhc2U7XG5cdFx0Y3Vyc29yOiBAY3Vyc29yLW5vdC1hbGxvd2VkO1xuXHR9XG5cblx0JjplbmFibGVkIHtcblx0XHQuc2VsZWN0X19oYW5kbGUtLWVuYWJsZWQoKTtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCB2TW9kZWxTZWxlY3QgYXMgX3ZNb2RlbFNlbGVjdCwgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIF93aXRoRGlyZWN0aXZlcygoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic2VsZWN0XCIsIHtcbiAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAubW9kZWxWYWx1ZSkgPSAkZXZlbnQpKSxcbiAgICBjbGFzczogXCJ2YS1zZWxlY3RcIlxuICB9LCBbXG4gICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICBdLCA1MTIgLyogTkVFRF9QQVRDSCAqLykpLCBbXG4gICAgW192TW9kZWxTZWxlY3QsICRzZXR1cC5tb2RlbFZhbHVlXVxuICBdKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWM5YjQ2NDYwXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtWQUxJRF9WQVJJQU5UUywgaW5mZXJyZWRWYXJpYW50LCBzaHVmZmxlVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5pbXBvcnQgdXNlSTE4biwge2kxOG5WYXJpYW50fSBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VJMThuJztcbmltcG9ydCBWQUJ1dHRvbiBmcm9tICcuL1ZBQnV0dG9uLnZ1ZSc7XG5pbXBvcnQgVkFTZWxlY3QgZnJvbSAnLi9WQVNlbGVjdC52dWUnO1xuaW1wb3J0IHt0eXBlIFZhbGlkVmFyaWFudH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbWVzc2FnZXMuanNvbic7XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB1c2VEZWZhdWx0IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZURlZmF1bHQnO1xuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuaW1wb3J0IHVzZVVuaXF1ZUlkIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVVuaXF1ZUlkJztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG5cdGRlZmluZVByb3BzPHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0fT4oKSxcblx0e1xuXHRcdGRpc2FibGVkOiBmYWxzZSxcblx0fVxuKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm9wZW4nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAndXBkYXRlOmRpc2FibGVkJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3NlbGVjdCcsIHZhcmlhbnQ6IFZhbGlkVmFyaWFudCk6IHZvaWQ7XG5cdChlOiAnb3B0b3V0Jyk6IHZvaWQ7XG59PigpO1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuY29uc3QgcHJvbXB0ID0gcmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5jb25zdCB0aXRsZUlkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IHNlbGVjdGVkVmFyaWFudCA9IHVzZURlZmF1bHQoKCkgPT4gaW5mZXJyZWRWYXJpYW50LnZhbHVlID8/IHNodWZmbGVWYXJpYW50KCkpO1xuY29uc3QgaXNPcGVuID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnb3BlbicpO1xuY29uc3QgaXNEaXNhYmxlZCA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ2Rpc2FibGVkJyk7XG5cbmZ1bmN0aW9uIG9wdE91dEFuZENsb3NlKCkge1xuXHRlbWl0KCdvcHRvdXQnKTtcblx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdCh2YXJpYW50OiBWYWxpZFZhcmlhbnQpIHtcblx0aXNEaXNhYmxlZC52YWx1ZSA9IHRydWU7XG5cdGVtaXQoJ3NlbGVjdCcsIHZhcmlhbnQpO1xufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRyYW5zaXRpb24gbmFtZT1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiIGFwcGVhcj5cblx0XHQ8ZGl2XG5cdFx0XHR2LWlmPVwib3BlblwiXG5cdFx0XHRyZWY9XCJwcm9tcHRcIlxuXHRcdFx0Omxhbmc9XCJgemgtJHtpMThuVmFyaWFudH1gXCJcblx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCJcblx0XHRcdHJvbGU9XCJkaWFsb2dcIlxuXHRcdFx0YXJpYS1tb2RhbD1cImZhbHNlXCJcblx0XHRcdDphcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZUlkXCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJcIj5cblx0XHRcdFx0PGgyIDppZD1cInRpdGxlSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX190aXRsZSB2YS10aXRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4nKSB9fVxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX19jbG9zZVwiXG5cdFx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRcdGljb249XCJjbG9zZVwiXG5cdFx0XHRcdFx0OnRpdGxlPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdFx0OmFyaWEtbGFiZWw9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwib3B0T3V0QW5kQ2xvc2VcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluXCI+XG5cdFx0XHRcdDxWQVNlbGVjdFxuXHRcdFx0XHRcdHYtbW9kZWw9XCJzZWxlY3RlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19zZWxlY3RcIlxuXHRcdFx0XHRcdDpsYW5nPVwic2VsZWN0ZWRWYXJpYW50XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0OmFyaWEtbGFiZWxsZWRieT1cInRpdGxlSWRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PG9wdGlvbiB2LWZvcj1cInZhcmlhbnQgaW4gVkFMSURfVkFSSUFOVFNcIiA6a2V5PVwidmFyaWFudFwiIDp2YWx1ZT1cInZhcmlhbnRcIiA6bGFuZz1cInZhcmlhbnRcIj5cblx0XHRcdFx0XHRcdHt7IG1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdIH19XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdDwvVkFTZWxlY3Q+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19hY3Rpb25cIlxuXHRcdFx0XHRcdGFjdGlvbj1cInByb2dyZXNzaXZlXCJcblx0XHRcdFx0XHRpY29uPVwiYXJyb3dOZXh0XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwic2VsZWN0KHNlbGVjdGVkVmFyaWFudClcIlxuXHRcdFx0XHRcdD57eyB1c2VJMThuKCd2cC5idXR0b24ub2snKSB9fTwvVkFCdXR0b25cblx0XHRcdFx0PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Zm9vdGVyIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19mb290ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4uZXh0JykgfX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdDwvVHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdGl0bGUge1xuXHRib3JkZXI6IDA7IC8vIFJlc2V0XG5cdHBhZGRpbmc6IDA7IC8vIFJlc2V0XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cblx0Zm9udC1zaXplOiBAZm9udC1zaXplLXh4LWxhcmdlO1xuXHRmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0LWJvbGQ7XG5cdG1hcmdpbjogQHNwYWNpbmctNTAgQHNwYWNpbmctMDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xufVxuXG4udmEtcGFyYSB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cblx0Ji0tc3VidGxlIHtcblx0XHRjb2xvcjogQGNvbG9yLXN1YnRsZTtcblx0XHRmb250LXNpemU6IEBmb250LXNpemUteC1zbWFsbDtcblx0XHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy0zNTtcblx0fVxufVxuXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlIHtcblx0Ym94LXNpemluZzogQGJveC1zaXppbmctYmFzZTtcblx0ei1pbmRleDogQHotaW5kZXgtb3ZlcmxheTtcblx0cGFkZGluZzogQHNwYWNpbmctNTAgQHNwYWNpbmctMTAwO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IEBzcGFjaW5nLTA7XG5cdHJpZ2h0OiBAc3BhY2luZy0wO1xuXHRib3R0b206IEBzcGFjaW5nLTA7XG5cdG1hcmdpbjogQHNwYWNpbmctMCBhdXRvO1xuXHR3aWR0aDogMTAwJTtcblx0bWF4LXdpZHRoOiA2MDBweDtcblx0bWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDJlbSk7XG5cblx0b3ZlcmZsb3c6IGF1dG87XG5cdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5cdGJvcmRlcjogQGJvcmRlci1iYXNlO1xuXHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXHRib3gtc2hhZG93OiBAYm94LXNoYWRvdy1kcm9wLW1lZGl1bTtcblx0Zm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zeXN0ZW0tc2Fucztcblx0Zm9udC1zaXplOiAxcmVtOyAvLyBSZXNldFxuXHRsaW5lLWhlaWdodDogbm9ybWFsOyAvLyBSZXNldFxuXG5cdCZfX2hlYWRlciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0Jl9fdGl0bGUge1xuXHRcdFx0ZmxleDogMTtcblx0XHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1tZWRpdW07XG5cdFx0fVxuXG5cdFx0Jl9fY2xvc2Uge1xuXHRcdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IC0oQHNwYWNpbmctaG9yaXpvbnRhbC1idXR0b24taWNvbi1vbmx5ICsgMXB4KTtcblx0XHR9XG5cdH1cblxuXHQmX19tYWluIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdG1hcmdpbi10b3A6IEBzcGFjaW5nLTI1O1xuXG5cdFx0Jl9fc2VsZWN0IHtcblx0XHRcdG1hcmdpbi1yaWdodDogQHNwYWNpbmctNzU7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdH1cblxuXHRcdCZfX2FjdGlvbiB7XG5cdFx0XHRmbGV4LXNocmluazogMDtcblx0XHR9XG5cdH1cblxuXHQmX19jbG9zZSB7XG5cdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHR9XG59XG5cbi8qIFByb21wdCB0cmFuc2l0aW9uIGVmZmVjdCAqL1xuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1lbnRlci1hY3RpdmUsXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWxlYXZlLWFjdGl2ZSB7XG5cdHRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5LWxheW91dDtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb24tbWVkaXVtO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLXN5c3RlbTtcbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1lbnRlci1mcm9tLFxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1sZWF2ZS10byB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cbjwvc3R5bGU+XG4uLi9tb2R1bGVzL3V0aWxzXG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24sIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gW1wibGFuZ1wiLCBcImFyaWEtbGFiZWxsZWRieVwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0gW1wiaWRcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpblwiIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSBbXCJ2YWx1ZVwiLCBcImxhbmdcIl1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fZm9vdGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiLFxuICAgIGFwcGVhcjogXCJcIlxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgKCRwcm9wcy5vcGVuKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgcmVmOiBcInByb21wdFwiLFxuICAgICAgICAgICAgbGFuZzogYHpoLSR7JHNldHVwLmkxOG5WYXJpYW50fWAsXG4gICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIixcbiAgICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgICBcImFyaWEtbW9kYWxcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWRcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgyXCIsIHtcbiAgICAgICAgICAgICAgICBpZDogJHNldHVwLnRpdGxlSWQsXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX3RpdGxlIHZhLXRpdGxlXCJcbiAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbicpKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfMyksXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX19jbG9zZVwiLFxuICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgb25DbGljazogJHNldHVwLm9wdE91dEFuZENsb3NlXG4gICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInRpdGxlXCIsIFwiYXJpYS1sYWJlbFwiLCBcImRpc2FibGVkXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBU2VsZWN0XCJdLCB7XG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogJHNldHVwLnNlbGVjdGVkVmFyaWFudCxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuc2VsZWN0ZWRWYXJpYW50KSA9ICRldmVudCkpLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgbGFuZzogJHNldHVwLnNlbGVjdGVkVmFyaWFudCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5WQUxJRF9WQVJJQU5UUywgKHZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJvcHRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgICBsYW5nOiB2YXJpYW50XG4gICAgICAgICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNSkpXG4gICAgICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJtb2RlbFZhbHVlXCIsIFwibGFuZ1wiLCBcImRpc2FibGVkXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdKSxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImFycm93TmV4dFwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCRzZXR1cC5zZWxlY3QoJHNldHVwLnNlbGVjdGVkVmFyaWFudCkpKVxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5idXR0b24ub2snKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImZvb3RlclwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzcsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4uZXh0JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEpKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTVjYzc4NjViXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgVGVsZXBvcnQgYXMgX1RlbGVwb3J0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgW1xuICAgIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVGVsZXBvcnQsIHsgdG86ICRzZXR1cC5kZXNrdG9wTW91bnRQb2ludCB9LCBbXG4gICAgICAoISRzZXR1cC5pc01vYmlsZSlcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFWYXJpYW50UHJvbXB0XCJdLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuaXNEaXNhYmxlZCxcbiAgICAgICAgICAgIFwib25VcGRhdGU6ZGlzYWJsZWRcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNEaXNhYmxlZCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIFwiYXV0by1jbG9zZVwiOiBmYWxzZSxcbiAgICAgICAgICAgIG9uT3B0b3V0OiAkc2V0dXAub25PcHRPdXQsXG4gICAgICAgICAgICBvblNlbGVjdDogJHNldHVwLnNldFZhcmlhbnRcbiAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwiZGlzYWJsZWRcIl0pKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSwgOCAvKiBQUk9QUyAqLywgW1widG9cIl0pKSxcbiAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIFRlbGVwb3J0IHRvIGJvZHkgYmVjYXVzZSB0aGV5IGFyZSBhbHdheXMgZmxvYXRlZCBhdCBib3R0b20gXCIpLFxuICAgIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVGVsZXBvcnQsIHsgdG86IFwiYm9keVwiIH0sIFtcbiAgICAgICgkc2V0dXAuaXNNb2JpbGUpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBVmFyaWFudFByb21wdE1vYmlsZVwiXSwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICAgICAgICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLmlzRGlzYWJsZWQsXG4gICAgICAgICAgICBcIm9uVXBkYXRlOmRpc2FibGVkXCI6IF9jYWNoZVszXSB8fCAoX2NhY2hlWzNdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzRGlzYWJsZWQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICBvbk9wdG91dDogJHNldHVwLm9uT3B0T3V0LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICRzZXR1cC5zZXRWYXJpYW50XG4gICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcImRpc2FibGVkXCJdKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pKVxuICBdLCA2NCAvKiBTVEFCTEVfRlJBR01FTlQgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcbmNyZWF0ZUFwcChBcHApLm1vdW50KHJvb3QpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFhM0IsT0FBTyx1QkFBdUIsR0FBRztNQUMzRFosS0FBSztNQUNMbUgsTUFBTXZHLE9BQU9nRjtNQUNiLGlCQUFpQmxGLE9BQU8sQ0FBQyxNQUFNQSxPQUFPLENBQUMsSUFBSTJCLFlBQVl6QixPQUFPZ0YsU0FBVXZEO01BQ3hFbUUsVUFBVTVGLE9BQU9pRjtNQUNqQixxQkFBcUJuRixPQUFPLENBQUMsTUFBTUEsT0FBTyxDQUFDLElBQUkyQixZQUFZekIsT0FBT2lGLGFBQWN4RDtNQUNoRjZILFVBQVV0SixPQUFPZ0o7TUFDakJPLFVBQVV2SixPQUFPNEk7SUFDbkIsR0FBRyxNQUFNLEdBQWUsQ0FBQyxRQUFRLFVBQVUsQ0FBQyxNQUFBLEdBQzVDTSxhQUFBdEksb0JBQW9CLFFBQVEsSUFBSSxDQUFBLENBQ3JDLEVBQUE7SUFDQTs7RUFBd0I7QUFDN0I7O0FDakMyUzRJLFlBQU81SixTQUFTdUo7QUFBT0ssWUFBT3hJLFNBQVM7QUFBa0MsSUFBT3lJLGVBQVFEOztBQ0NuWSxJQUFBRSxlQUF3QmpOLFFBQUEsS0FBQTtBQUV4QixJQUFNa04sT0FBT25NLFNBQVNvTSxjQUFjLEtBQUs7QUFDekNwTSxTQUFTRSxLQUFLbU0sT0FBT0YsSUFBSTtDQUFBLEdBQ3pCRCxhQUFBSSxXQUFVTCxZQUFHLEVBQUVNLE1BQU1KLElBQUk7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiaW1wb3J0X3Z1ZSIsICJWQUxJRF9WQVJJQU5UUyIsICJ3Z1VzZXJWYXJpYW50IiwgInJlZiIsICJfbXckY29uZmlnJGdldCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlzTW9iaWxlRGV2aWNlIiwgIm1hdGNoTWVkaWEiLCAibWF0Y2hlcyIsICJnZXRNb3VudFBvaW50IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiYm9keSIsICJxdWVyeVNlbGVjdG9yIiwgImluZmVycmVkVmFyaWFudCIsICJjb21wdXRlZCIsICJpbmNsdWRlcyIsICJ2YWx1ZSIsICJzaHVmZmxlVmFyaWFudCIsICJsYXN0IiwgInRhcmdldEFycmF5IiwgImZpbHRlciIsICJpIiwgInJhbmRvbUluZGV4IiwgIk1hdGgiLCAiZmxvb3IiLCAicmFuZG9tIiwgImxlbmd0aCIsICJpbXBvcnRfdnVlMTIiLCAiaW1wb3J0X3Z1ZTIiLCAibWVzc2FnZXNfZGVmYXVsdCIsICJ2YXJpYW50cyIsICJoYW5zIiwgInNwYWNlIiwgImNsb3NlIiwgImhhbnQiLCAiaTE4blZhcmlhbnQiLCAidXNlSTE4biIsICJrZXkiLCAiX2N1cnJlbnRNc2dzR3JvdXAka2V5IiwgImN1cnJlbnRNc2dzR3JvdXAiLCAiaW1wb3J0X3Z1ZTQiLCAiX2hvaXN0ZWRfMSIsICJfaG9pc3RlZF8yIiwgIl9ob2lzdGVkXzMiLCAiX2hvaXN0ZWRfNCIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgImNsYXNzIiwgInhtbG5zIiwgIndpZHRoIiwgInNpemUiLCAiaGVpZ2h0IiwgInZpZXdCb3giLCAiaWNvbiIsICJjcmVhdGVDb21tZW50Vk5vZGUiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImQiLCAiVkFJY29uX2RlZmF1bHQiLCAiX19maWxlIiwgIlZBSWNvbl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNiIsICJfaG9pc3RlZF8xMiIsICJyZW5kZXIyIiwgIm5vcm1hbGl6ZUNsYXNzIiwgImFjdGlvbiIsICJ3ZWlnaHQiLCAib25DbGljayIsICIkZXZlbnQiLCAiJGVtaXQiLCAiY3JlYXRlQmxvY2siLCAiJHNsb3RzIiwgInJlbmRlclNsb3QiLCAiaW5kaWNhdG9yIiwgIlZBQnV0dG9uX2RlZmF1bHQiLCAiX19zY29wZUlkIiwgIlZBQnV0dG9uX2RlZmF1bHQyIiwgImltcG9ydF92dWU3IiwgInJlbmRlcjMiLCAiVHJhbnNpdGlvbiIsICJuYW1lIiwgIm1vZGUiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgIl8iLCAic2NyaXB0IiwgIlZBRmFkZVRyYW5zaXRpb25fZGVmYXVsdCIsICJpbXBvcnRfdnVlOCIsICJ1c2VEZWZhdWx0IiwgImRlZmF1bHRWYWx1ZSIsICJyZWFsUmVmIiwgInNoYWxsb3dSZWYiLCAid2F0Y2giLCAibmV3VmFsdWUiLCAiZGVlcCIsICJzZXQiLCAidXNlRGVmYXVsdF9kZWZhdWx0IiwgImltcG9ydF92dWU5IiwgInVzZU1vZGVsV3JhcHBlciIsICJwcm9wcyIsICJlbWl0IiwgImNvbmNhdCIsICJ1c2VNb2RlbFdyYXBwZXJfZGVmYXVsdCIsICJpbXBvcnRfdnVlMTAiLCAiSU5URVJWQUwiLCAidXNlU2h1ZmZsZWRWYXJpYW50IiwgImlzRnJlZXplZCIsICJyZXN1bHQiLCAiaWQiLCAiX2luZmVycmVkVmFyaWFudCR2YWx1IiwgImNsZWFySW50ZXJ2YWwiLCAid2luZG93IiwgInNldEludGVydmFsIiwgImltbWVkaWF0ZSIsICJ1c2VTaHVmZmxlZFZhcmlhbnRfZGVmYXVsdCIsICJjb3VudGVyIiwgInVzZVVuaXF1ZUlkIiwgInVzZVVuaXF1ZUlkX2RlZmF1bHQiLCAiX19wcm9wcyIsICJfX2VtaXQiLCAicHJvbXB0IiwgInRpdGxlSWQiLCAiZGVzY0lkIiwgImlzT3BlbiIsICJpc0Rpc2FibGVkIiwgImlzVmFyaWFudE5hcnJvd2VkIiwgInNodWZmbGVkVmFyaWFudCIsICJvcHRPdXRBbmRDbG9zZSIsICJzZWxlY3QiLCAidmFyaWFudCIsICJlbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXYiLCAiYnV0dG9ucyIsICJhdXRvQ2xvc2UiLCAiZGlzYWJsZWQiLCAiaW1wb3J0X3Z1ZTEzIiwgIl9ob2lzdGVkXzEzIiwgIl9ob2lzdGVkXzIyIiwgIl9ob2lzdGVkXzMyIiwgIl9ob2lzdGVkXzQyIiwgIl9ob2lzdGVkXzUiLCAiX2hvaXN0ZWRfNiIsICJfaG9pc3RlZF83IiwgInJlbmRlcjQiLCAiYXBwZWFyIiwgIm9wZW4iLCAibGFuZyIsICJyb2xlIiwgImNyZWF0ZVZOb2RlIiwgInRpdGxlIiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAibWVzc2FnZXMiLCAiRnJhZ21lbnQiLCAicmVuZGVyTGlzdCIsICJfdG9EaXNwbGF5U3RyaW5nIiwgIlZBVmFyaWFudFByb21wdF9kZWZhdWx0IiwgIlZBVmFyaWFudFByb21wdF9kZWZhdWx0MiIsICJtb2RlbFZhbHVlIiwgImltcG9ydF92dWUxNSIsICJyZW5kZXI1IiwgIndpdGhEaXJlY3RpdmVzIiwgInZNb2RlbFNlbGVjdCIsICJWQVNlbGVjdF9kZWZhdWx0IiwgIlZBU2VsZWN0X2RlZmF1bHQyIiwgImltcG9ydF92dWUxNyIsICJzZWxlY3RlZFZhcmlhbnQiLCAiX2luZmVycmVkVmFyaWFudCR2YWx1MiIsICJpbXBvcnRfdnVlMTgiLCAiX2hvaXN0ZWRfMTQiLCAiX2hvaXN0ZWRfMjMiLCAiX2hvaXN0ZWRfMzMiLCAiX2hvaXN0ZWRfNDMiLCAiX2hvaXN0ZWRfNTIiLCAiX2hvaXN0ZWRfNjIiLCAiX2hvaXN0ZWRfNzIiLCAicmVuZGVyNiIsICJWQVZhcmlhbnRQcm9tcHRNb2JpbGVfZGVmYXVsdCIsICJWQVZhcmlhbnRQcm9tcHRNb2JpbGVfZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTIwIiwgImlzTW9iaWxlIiwgImRlc2t0b3BNb3VudFBvaW50IiwgInNldFZhcmlhbnQiLCAic2V0TG9jYWxWYXJpYW50IiwgInJlZGlyZWN0IiwgImZvcmNlZCIsICJvbk9wdE91dCIsICJzZXRPcHRPdXQiLCAiaW1wb3J0X3Z1ZTIxIiwgInJlbmRlcjciLCAiVGVsZXBvcnQiLCAidG8iLCAib25PcHRvdXQiLCAib25TZWxlY3QiLCAiQXBwX2RlZmF1bHQiLCAiQXBwX2RlZmF1bHQyIiwgImltcG9ydF92dWUyMiIsICJyb290IiwgImNyZWF0ZUVsZW1lbnQiLCAiYXBwZW5kIiwgImNyZWF0ZUFwcCIsICJtb3VudCJdCn0K
