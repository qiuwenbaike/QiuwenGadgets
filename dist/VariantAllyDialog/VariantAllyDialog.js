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
    /* CACHED */
  )), (0, import_vue2.createCommentVNode)(" eslint-enable ")])) : $props.icon === "close" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_3, [..._cache[1] || (_cache[1] = [(0, import_vue2.createElementVNode)(
    "path",
    {
      d: "m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"
    },
    null,
    -1
    /* CACHED */
  ), (0, import_vue2.createElementVNode)(
    "path",
    {
      d: "M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"
    },
    null,
    -1
    /* CACHED */
  )])])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_4, [..._cache[2] || (_cache[2] = [(0, import_vue2.createElementVNode)(
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL1ZhcmlhbnRBbGx5RGlhbG9nLnRzIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFJY29uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBSWNvbi52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUJ1dHRvbi52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBRmFkZVRyYW5zaXRpb24udnVlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VJMThuLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tZXNzYWdlcy5qc29uIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VVbmlxdWVJZC50cyIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50LnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXIudHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZURlZmF1bHQudHMiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0LnZ1ZSIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdE1vYmlsZS52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQVNlbGVjdC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvQXBwLnZ1ZSJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuY3JlYXRlQXBwKEFwcCkubW91bnQocm9vdCk7XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtzZXRMb2NhbFZhcmlhbnQsIHJlZGlyZWN0LCBWYWxpZFZhcmlhbnQsIHNldE9wdE91dH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQgVkFWYXJpYW50UHJvbXB0IGZyb20gJy4vY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlJztcbmltcG9ydCBWQVZhcmlhbnRQcm9tcHRNb2JpbGUgZnJvbSAnLi9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdE1vYmlsZS52dWUnO1xuaW1wb3J0IHtnZXRNb3VudFBvaW50LCBpc01vYmlsZURldmljZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzJztcblxuY29uc3QgaXNPcGVuID0gcmVmKHRydWUpO1xuY29uc3QgaXNEaXNhYmxlZCA9IHJlZihmYWxzZSk7XG5jb25zdCBpc01vYmlsZSA9IGlzTW9iaWxlRGV2aWNlKCk7XG5jb25zdCBkZXNrdG9wTW91bnRQb2ludCA9IGdldE1vdW50UG9pbnQoKTtcblxuZnVuY3Rpb24gc2V0VmFyaWFudCh2YXJpYW50OiBWYWxpZFZhcmlhbnQpIHtcblx0c2V0TG9jYWxWYXJpYW50KHZhcmlhbnQpO1xuXHRyZWRpcmVjdCh2YXJpYW50LCB7Zm9yY2VkOiB0cnVlfSk7XG59XG5cbi8vIEJyb3dzZXIgc3VwcG9ydDogaU9TIFNhZmFyaSA8IDE1XG4vLyBXb3JrIGFyb3VuZCBTYWZhcmkgZmlyaW5nIHNjcm9sbCBldmVudCBhdCB1bmV4cGVjdGVkIGNvbmRpdGlvbnMgKGUuZy4gcG9wcGluZyB1cCBTZWxlY3QpXG5hZGRFdmVudExpc3RlbmVyKGlzTW9iaWxlID8gJ3RvdWNobW92ZScgOiAnc2Nyb2xsJywgKCkgPT4ge1xuXHRpZiAoIWlzRGlzYWJsZWQudmFsdWUpIHtcblx0XHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0fVxufSk7XG5cbmZ1bmN0aW9uIG9uT3B0T3V0KCkge1xuXHRzZXRPcHRPdXQoKTtcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxUZWxlcG9ydCA6dG89XCJkZXNrdG9wTW91bnRQb2ludFwiPlxuXHRcdDxWQVZhcmlhbnRQcm9tcHRcblx0XHRcdHYtaWY9XCIhaXNNb2JpbGVcIlxuXHRcdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHRcdHYtbW9kZWw6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVkXCJcblx0XHRcdDphdXRvLWNsb3NlPVwiZmFsc2VcIlxuXHRcdFx0QG9wdG91dD1cIm9uT3B0T3V0XCJcblx0XHRcdEBzZWxlY3Q9XCJzZXRWYXJpYW50XCJcblx0XHQvPlxuXHQ8L1RlbGVwb3J0PlxuXG5cdDwhLS0gVGVsZXBvcnQgdG8gYm9keSBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBmbG9hdGVkIGF0IGJvdHRvbSAtLT5cblx0PFRlbGVwb3J0IHRvPVwiYm9keVwiPlxuXHRcdDxWQVZhcmlhbnRQcm9tcHRNb2JpbGVcblx0XHRcdHYtaWY9XCJpc01vYmlsZVwiXG5cdFx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdFx0di1tb2RlbDpkaXNhYmxlZD1cImlzRGlzYWJsZWRcIlxuXHRcdFx0QG9wdG91dD1cIm9uT3B0T3V0XCJcblx0XHRcdEBzZWxlY3Q9XCJzZXRWYXJpYW50XCJcblx0XHQvPlxuXHQ8L1RlbGVwb3J0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS12YXJpYW50LXByb21wdCB7XG5cdC8vIFZlY3RvciAyMDIyIHNwZWNpZmljIGFkanVzdG1lbnRzXG5cdC5za2luLXZlY3Rvci0yMDIyICYge1xuXHRcdC8vIENhbGN1bGF0ZWQgZnJvbSBWZWN0b3IgMjAyMiBzb3VyY2UgY29kZVxuXHRcdEB2ZWN0b3ItMjAyMi1oZWFkZXItaGVpZ2h0OiA1MHB4ICsgMiAqIDhweDtcblx0XHRtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSBAc3BhY2luZy12ZXJ0aWNhbC1kaWFsb2cgLSBAdmVjdG9yLTIwMjItaGVhZGVyLWhlaWdodCk7XG5cblx0XHQudmVjdG9yLXRvYy1hdmFpbGFibGUudmVjdG9yLWZlYXR1cmUtdG9jLXBpbm5lZC1jbGllbnRwcmVmLTEgJixcblx0XHQudmVjdG9yLWZlYXR1cmUtbWFpbi1tZW51LXBpbm5lZC1lbmFibGVkICYge1xuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyMHB4KSBhbmQgKG1heC13aWR0aDogMTY4MHB4KSB7XG5cdFx0XHRcdGxlZnQ6IHVuc2V0O1xuXG5cdFx0XHRcdC8vIENhbGN1bGF0ZWQgZnJvbSBWZWN0b3IgMjAyMiBzb3VyY2UgY29kZVxuXHRcdFx0XHQvLyBJbiB0aGlzIHdpZHRoIHRoaXMgcHJvbXB0IHdpbGwgbm90IG9ic2N1cmUgYXJ0aWNsZSBjb250ZW50XG5cdFx0XHRcdEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmc6IDIuNzVlbTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0oQHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZyAvIDMgKiAyKTtcblx0XHRcdFx0bWF4LXdpZHRoOiBjYWxjKDEyLjI1ZW0gKyAzNnB4KTtcblx0XHRcdFx0cGFkZGluZzogQHNwYWNpbmctMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkge1xuXHRcdFx0QHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZzogMy4yNWVtO1xuXHRcdFx0bGVmdDogdW5zZXQ7XG5cdFx0XHRtYXJnaW4tbGVmdDogLShAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nIC8gMyAqIDIpO1xuXHRcdFx0bWF4LXdpZHRoOiBjYWxjKDE1Ljc1ZW0gKyAzNnB4KTtcblx0XHR9XG5cdH1cbn1cbjwvc3R5bGU+XG4uL21vZHVsZXMvdXRpbHNcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHt0eXBlIFZhbGlkVmFyaWFudH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQgVkFCdXR0b24gZnJvbSAnLi9WQUJ1dHRvbi52dWUnO1xuaW1wb3J0IFZBRmFkZVRyYW5zaXRpb24gZnJvbSAnLi9WQUZhZGVUcmFuc2l0aW9uLnZ1ZSc7XG5pbXBvcnQgdXNlSTE4biwge2kxOG5WYXJpYW50fSBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VJMThuJztcbmltcG9ydCB1c2VVbmlxdWVJZCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VVbmlxdWVJZCc7XG5pbXBvcnQgdXNlU2h1ZmZsZWRWYXJpYW50IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVNodWZmbGVkVmFyaWFudCc7XG5pbXBvcnQge1ZBTElEX1ZBUklBTlRTLCBpbmZlcnJlZFZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uL21lc3NhZ2VzLmpzb24nO1xuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuaW1wb3J0IHVzZURlZmF1bHQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlRGVmYXVsdCc7XG5cbmNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKFxuXHRkZWZpbmVQcm9wczx7XG5cdFx0b3BlbjogYm9vbGVhbjtcblx0XHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdFx0YXV0b0Nsb3NlPzogYm9vbGVhbjtcblx0fT4oKSxcblx0e1xuXHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRhdXRvQ2xvc2U6IGZhbHNlLFxuXHR9XG4pO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0KGU6ICd1cGRhdGU6b3BlbicsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICd1cGRhdGU6ZGlzYWJsZWQnLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAnc2VsZWN0JywgdmFyaWFudDogVmFsaWRWYXJpYW50KTogdm9pZDtcblx0KGU6ICdvcHRvdXQnKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IHByb21wdCA9IHJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuY29uc3QgdGl0bGVJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBkZXNjSWQgPSB1c2VVbmlxdWVJZCgpO1xuY29uc3QgaXNPcGVuID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnb3BlbicpO1xuY29uc3QgaXNEaXNhYmxlZCA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ2Rpc2FibGVkJyk7XG5jb25zdCBpc1ZhcmlhbnROYXJyb3dlZCA9IHVzZURlZmF1bHQoKCkgPT4gaW5mZXJyZWRWYXJpYW50LnZhbHVlICE9PSBudWxsKTtcbmNvbnN0IHNodWZmbGVkVmFyaWFudCA9IHVzZVNodWZmbGVkVmFyaWFudChpc1ZhcmlhbnROYXJyb3dlZCk7XG5cbmZ1bmN0aW9uIG9wdE91dEFuZENsb3NlKCkge1xuXHRlbWl0KCdvcHRvdXQnKTtcblx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdCh2YXJpYW50OiBWYWxpZFZhcmlhbnQpIHtcblx0aXNEaXNhYmxlZC52YWx1ZSA9IHRydWU7XG5cdGVtaXQoJ3NlbGVjdCcsIHZhcmlhbnQpO1xufVxuXG53YXRjaChwcm9tcHQsICgpID0+IHtcblx0Y29uc3QgZWxlbWVudCA9IHByb21wdC52YWx1ZTtcblx0aWYgKGVsZW1lbnQgIT09IG51bGwpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXYpID0+IHtcblx0XHRcdC8vIERvIG5vdCBkaXNtaXNzIGlmIGFueSBidXR0b24gaXMgcHJlc3NlZCBvciB0aGUgcHJvbXB0IGlzIGRpc2FibGVkXG5cdFx0XHRpZiAoZXYuYnV0dG9ucyA9PT0gMCAmJiBwcm9wcy5hdXRvQ2xvc2UgJiYgIXByb3BzLmRpc2FibGVkKSB7XG5cdFx0XHRcdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxUcmFuc2l0aW9uIG5hbWU9XCJ2YS12YXJpYW50LXByb21wdFwiIGFwcGVhcj5cblx0XHQ8ZGl2XG5cdFx0XHR2LWlmPVwib3BlblwiXG5cdFx0XHRyZWY9XCJwcm9tcHRcIlxuXHRcdFx0Omxhbmc9XCJgemgtJHtpMThuVmFyaWFudH1gXCJcblx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRcIlxuXHRcdFx0cm9sZT1cImRpYWxvZ1wiXG5cdFx0XHRhcmlhLW1vZGFsPVwiZmFsc2VcIlxuXHRcdFx0OmFyaWEtbGFiZWxsZWRieT1cInRpdGxlSWRcIlxuXHRcdFx0OmFyaWEtZGVzY3JpYmVkYnk9XCJkZXNjSWRcIlxuXHRcdD5cblx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19jbG9zZVwiXG5cdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0aWNvbj1cImNsb3NlXCJcblx0XHRcdFx0OnRpdGxlPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdDphcmlhLWxhYmVsPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0QGNsaWNrPVwib3B0T3V0QW5kQ2xvc2VcIlxuXHRcdFx0Lz5cblx0XHRcdDxoMiA6aWQ9XCJ0aXRsZUlkXCIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGUgdmEtdGl0bGVcIj5cblx0XHRcdFx0e3sgdXNlSTE4bihpc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5oZWFkZXIuYWx0JyA6ICd2cC5oZWFkZXInKSB9fTxiciAvPlxuXHRcdFx0XHQ8VkFGYWRlVHJhbnNpdGlvbj5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0di1pZj1cIiFpc1ZhcmlhbnROYXJyb3dlZFwiXG5cdFx0XHRcdFx0XHQ6a2V5PVwic2h1ZmZsZWRWYXJpYW50XCJcblx0XHRcdFx0XHRcdDpsYW5nPVwiYHpoLSR7c2h1ZmZsZWRWYXJpYW50fWBcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGVfX3ZhcmlhbnRcIlxuXHRcdFx0XHRcdFx0Pnt7IG1lc3NhZ2VzLnZhcmlhbnRzW3NodWZmbGVkVmFyaWFudF0gfX08L3NwYW5cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdDwvVkFGYWRlVHJhbnNpdGlvbj5cblx0XHRcdDwvaDI+XG5cdFx0XHQ8cCA6aWQ9XCJkZXNjSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19kZXNjIHZhLXBhcmFcIj5cblx0XHRcdFx0e3sgdXNlSTE4bihpc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5tYWluLmFsdCcgOiAndnAubWFpbicpIH19XG5cdFx0XHQ8L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNcIj5cblx0XHRcdFx0PCEtLSBpbmZlcnJlZFZhcmlhbnQgaXMgbm9uLW51bGwsIGd1YXJkZWQgYnkgaXNWYXJpYW50TmFycm93ZWQgLS0+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdHYtZm9yPVwidmFyaWFudCBpbiBpc1ZhcmlhbnROYXJyb3dlZCAmJiBpbmZlcnJlZFZhcmlhbnQgIT09IG51bGxcblx0XHRcdFx0XHRcdD8gW2luZmVycmVkVmFyaWFudF1cblx0XHRcdFx0XHRcdDogVkFMSURfVkFSSUFOVFNcIlxuXHRcdFx0XHRcdDprZXk9XCJ2YXJpYW50XCJcblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIlxuXHRcdFx0XHRcdDpjbGFzcz1cInsndmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvbi0tcHJpbWFyeSc6IGlzVmFyaWFudE5hcnJvd2VkfVwiXG5cdFx0XHRcdFx0aW5kaWNhdG9yPVwiYXJyb3dOZXh0XCJcblx0XHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdFx0YWN0aW9uPVwicHJvZ3Jlc3NpdmVcIlxuXHRcdFx0XHRcdDpsYW5nPVwidmFyaWFudFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cInNlbGVjdCh2YXJpYW50KVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7eyBtZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSB9fVxuXHRcdFx0XHQ8L1ZBQnV0dG9uPlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHR2LWlmPVwiaXNWYXJpYW50TmFycm93ZWRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiXG5cdFx0XHRcdFx0aW5kaWNhdG9yPVwiYXJyb3dOZXh0XCJcblx0XHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdFx0YWN0aW9uPVwicHJvZ3Jlc3NpdmVcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJpc1ZhcmlhbnROYXJyb3dlZCA9IGZhbHNlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLmJ1dHRvbi5vdGhlcicpIH19XG5cdFx0XHRcdDwvVkFCdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxmb290ZXIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fZm9vdGVyXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIj5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5tYWluLmV4dCcpIH19XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdDwvZGl2PlxuXHQ8L1RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXRpdGxlIHtcblx0Ym9yZGVyOiAwOyAvLyBSZXNldFxuXHRwYWRkaW5nOiAwOyAvLyBSZXNldFxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG5cdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14eC1sYXJnZTtcblx0Zm9udC13ZWlnaHQ6IEBmb250LXdlaWdodC1ib2xkO1xuXHRtYXJnaW46IEBzcGFjaW5nLTUwIEBzcGFjaW5nLTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcbn1cblxuLnZhLXBhcmEge1xuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXHRtYXJnaW4tdG9wOiBAc3BhY2luZy01MDtcblx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctNTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcblxuXHQmLS1zdWJ0bGUge1xuXHRcdGNvbG9yOiBAY29sb3Itc3VidGxlO1xuXHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14LXNtYWxsO1xuXHRcdG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLTM1O1xuXHR9XG59XG5cbi52YS12YXJpYW50LXByb21wdCB7XG5cdGJveC1zaXppbmc6IEBib3gtc2l6aW5nLWJhc2U7XG5cdHotaW5kZXg6IEB6LWluZGV4LW92ZXJsYXk7XG5cdHBhZGRpbmc6IEBzcGFjaW5nLTEwMCBAc3BhY2luZy0xNTA7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bGVmdDogQHNwYWNpbmctaG9yaXpvbnRhbC1kaWFsb2c7XG5cdGJvdHRvbTogQHNwYWNpbmctdmVydGljYWwtZGlhbG9nO1xuXHR3aWR0aDogY2FsYygxMDAlIC0gQHNwYWNpbmctaG9yaXpvbnRhbC1kaWFsb2cgKiAyKTtcblx0bWF4LXdpZHRoOiAxOGVtO1xuXHRtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtKTtcblxuXHRvdmVyZmxvdzogYXV0bztcblx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogQGJhY2tncm91bmQtY29sb3ItYmFzZTtcblx0Ym9yZGVyOiBAYm9yZGVyLWJhc2U7XG5cdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cdGJveC1zaGFkb3c6IEBib3gtc2hhZG93LWRyb3AtbWVkaXVtO1xuXHRmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXN5c3RlbS1zYW5zO1xuXHRmb250LXNpemU6IDFyZW07IC8vIFJlc2V0XG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7IC8vIFJlc2V0XG5cblx0Jl9fY2xvc2Uge1xuXHRcdHBhZGRpbmc6IEBzcGFjaW5nLXNob3J0aGFuZC1idXR0b24taWNvbi1vbmx5O1xuXHRcdGZsb2F0OiByaWdodDtcblx0XHRtYXJnaW4tdG9wOiBAc3BhY2luZy01MDtcblx0XHRtYXJnaW4tcmlnaHQ6IC0oQHNwYWNpbmctaG9yaXpvbnRhbC1idXR0b24taWNvbi1vbmx5ICsgMXB4KTtcblx0fVxuXG5cdCZfX3RpdGxlIHtcblx0XHQmX192YXJpYW50IHtcblx0XHRcdGNvbG9yOiBAY29sb3ItcHJvZ3Jlc3NpdmU7XG5cdFx0fVxuXHR9XG5cblx0Jl9fb3B0aW9ucyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0bWFyZ2luOiBAc3BhY2luZy03NSBAc3BhY2luZy0wO1xuXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgQGJvcmRlci1jb2xvci1iYXNlO1xuXHRcdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cblx0XHQmX19idXR0b24ge1xuXHRcdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXNtYWxsO1xuXHRcdFx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogQGJhY2tncm91bmQtY29sb3ItaW50ZXJhY3RpdmUtc3VidGxlO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcblxuXHRcdFx0Ji0tcHJpbWFyeSB7XG5cdFx0XHRcdGNvbG9yOiBAY29sb3ItcHJvZ3Jlc3NpdmU7XG5cdFx0XHR9XG5cblx0XHRcdCY6aG92ZXIsXG5cdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogQGJvcmRlci1jb2xvci10cmFuc3BhcmVudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyogUHJvbXB0IHRyYW5zaXRpb24gZWZmZWN0ICovXG4udmEtdmFyaWFudC1wcm9tcHQtZW50ZXItYWN0aXZlLFxuLnZhLXZhcmlhbnQtcHJvbXB0LWxlYXZlLWFjdGl2ZSB7XG5cdHRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5LWZhZGU7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uLW1lZGl1bTtcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbi1zeXN0ZW07XG59XG5cbi52YS12YXJpYW50LXByb21wdC1lbnRlci1mcm9tLFxuLnZhLXZhcmlhbnQtcHJvbXB0LWxlYXZlLXRvIHtcblx0b3BhY2l0eTogMDtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdXG5jb25zdCBfaG9pc3RlZF8yID0geyBrZXk6IDAgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsga2V5OiAxIH1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGtleTogMiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3ZnXCIsIHtcbiAgICBjbGFzczogXCJ2YS1pY29uLWJ1dHRvbl9faWNvblwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgXCJ4bWxuczp4bGlua1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgICB3aWR0aDogJHByb3BzLnNpemUsXG4gICAgaGVpZ2h0OiAkcHJvcHMuc2l6ZSxcbiAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgfSwgW1xuICAgICgkcHJvcHMuaWNvbiA9PT0gJ2xhbmcnKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBlc2xpbnQtZGlzYWJsZSBcIiksXG4gICAgICAgICAgX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSBfY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwiTTIwIDE4aC0xLjQ0YS42MS42MSAwIDAxLS40LS4xMi44MS44MSAwIDAxLS4yMy0uMzFMMTcgMTVoLTVsLTEgMi41NGEuNzcuNzcgMCAwMS0uMjIuMy41OS41OSAwIDAxLS40LjE0SDlsNC41NS0xMS40N2gxLjg5em0tMy41My00LjMxTDE0Ljg5IDkuNWExMS42MiAxMS42MiAwIDAxLS4zOS0xLjI0cS0uMDkuMzctLjE5LjY5bC0uMTkuNTYtMS41OCA0LjE5em0tNi4zLTEuNThhMTMuNDMgMTMuNDMgMCAwMS0yLjkxLTEuNDEgMTEuNDYgMTEuNDYgMCAwMDIuODEtNS4zN0gxMlY0SDcuMzFhNCA0IDAgMDAtLjItLjU2QzYuODcgMi43OSA2LjYgMiA2LjYgMmwtMS40Ny41cy40Ljg5LjYgMS41SDB2MS4zM2gyLjE1QTExLjIzIDExLjIzIDAgMDA1IDEwLjdhMTcuMTkgMTcuMTkgMCAwMS01IDIuMXEuNTYuODIuODcgMS4zOGEyMy4yOCAyMy4yOCAwIDAwNS4yMi0yLjUxIDE1LjY0IDE1LjY0IDAgMDAzLjU2IDEuNzd6TTMuNjMgNS4zM2g0LjkxYTguMTEgOC4xMSAwIDAxLTIuNDUgNC40NSA5LjExIDkuMTEgMCAwMS0yLjQ2LTQuNDV6XCIgfSwgbnVsbCwgLTEgLyogQ0FDSEVEICovKSksXG4gICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBlc2xpbnQtZW5hYmxlIFwiKVxuICAgICAgICBdKSlcbiAgICAgIDogKCRwcm9wcy5pY29uID09PSAnY2xvc2UnKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzMsIFsuLi4oX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwibTQuMzQgMi45MyAxMi43MyAxMi43My0xLjQxIDEuNDFMMi45MyA0LjM1elwiIH0sIG51bGwsIC0xIC8qIENBQ0hFRCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwiTTE3LjA3IDQuMzQgNC4zNCAxNy4wN2wtMS40MS0xLjQxTDE1LjY2IDIuOTN6XCIgfSwgbnVsbCwgLTEgLyogQ0FDSEVEICovKVxuICAgICAgICAgIF0pKV0pKVxuICAgICAgICA6IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzQsIFsuLi4oX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwiTTguNTkgMy40MiAxNC4xNyA5SDJ2MmgxMi4xN2wtNS41OCA1LjU5TDEwIDE4bDgtOC04LTh6XCIgfSwgbnVsbCwgLTEgLyogQ0FDSEVEICovKVxuICAgICAgICAgIF0pKV0pKVxuICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBSWNvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBSWNvbi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBSWNvbi52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7XG4gIGtleTogMSxcbiAgY2xhc3M6IFwidmEtYnV0dG9uX190ZXh0XCJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJidXR0b25cIiwge1xuICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1widmEtYnV0dG9uXCIsIHtcblx0XHRcdCd2YS1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZSc6ICRwcm9wcy5hY3Rpb24gPT09ICdwcm9ncmVzc2l2ZScsXG5cdFx0XHQndmEtYnV0dG9uLS13ZWlnaHQtcXVpZXQnOiAkcHJvcHMud2VpZ2h0ID09PSAncXVpZXQnLFxuXHRcdH1dKSxcbiAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoX2N0eC4kZW1pdCgnY2xpY2snKSkpXG4gIH0sIFtcbiAgICAoJHByb3BzLmljb24gIT09IHVuZGVmaW5lZClcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBSWNvblwiXSwge1xuICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICBjbGFzczogXCJ2YS1idXR0b25fX2ljb25cIixcbiAgICAgICAgICBpY29uOiAkcHJvcHMuaWNvbixcbiAgICAgICAgICBzaXplOiAyMFxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJpY29uXCJdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgKF9jdHguJHNsb3RzWydkZWZhdWx0J10pXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gICAgICAgIF0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAoJHByb3BzLmluZGljYXRvciAhPT0gdW5kZWZpbmVkKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFJY29uXCJdLCB7XG4gICAgICAgICAga2V5OiAyLFxuICAgICAgICAgIGNsYXNzOiBcInZhLWJ1dHRvbl9faW5kaWNhdG9yXCIsXG4gICAgICAgICAgaWNvbjogJHByb3BzLmluZGljYXRvcixcbiAgICAgICAgICBzaXplOiAxNlxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJpY29uXCJdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgXSwgMiAvKiBDTEFTUyAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYmI3NzM0YjFcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IHJlbmRlclNsb3QgYXMgX3JlbmRlclNsb3QsIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24sIHdpdGhDdHggYXMgX3dpdGhDdHgsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtZmFkZVwiLFxuICAgIG1vZGU6IFwib3V0LWluXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge30sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBdKSxcbiAgICBfOiAzIC8qIEZPUldBUkRFRCAqL1xuICB9KSlcbn0iLCAiY29uc3Qgc2NyaXB0ID0ge307aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFGYWRlVHJhbnNpdGlvbi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiOWM1NzUxXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uL21lc3NhZ2VzLmpzb24nO1xuaW1wb3J0IHt3Z1VzZXJWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcblxuLy8gSW50ZXJmYWNlIHZhcmlhbnQgb2YgdmFyaWFudCBwcm9tcHRcbmNvbnN0IGkxOG5WYXJpYW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuXHRpZiAod2dVc2VyVmFyaWFudC52YWx1ZSA9PT0gJ3poJykge1xuXHRcdC8vIE5vIGNvbnZlcnNpb246IHVzZSByYW5kb21seSBzZWxlY3RlZCB2YXJpYW50XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkgPiAwLjUgPyAnaGFucycgOiAnaGFudCc7XG5cdH1cblx0aWYgKFsnemgtaGFudCcsICd6aC10dycsICd6aC1oaycsICd6aC1tbyddLmluY2x1ZGVzKHdnVXNlclZhcmlhbnQudmFsdWUpKSB7XG5cdFx0cmV0dXJuICdoYW50Jztcblx0fVxuXG5cdHJldHVybiAnaGFucyc7XG59KTtcblxuZnVuY3Rpb24gdXNlSTE4bihrZXk6IHN0cmluZyk6IHN0cmluZyB7XG5cdGNvbnN0IGN1cnJlbnRNc2dzR3JvdXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSBtZXNzYWdlc1tpMThuVmFyaWFudC52YWx1ZV07XG5cdHJldHVybiBjdXJyZW50TXNnc0dyb3VwW2tleV0gPz8ga2V5O1xufVxuXG5leHBvcnQge3VzZUkxOG4gYXMgZGVmYXVsdCwgaTE4blZhcmlhbnR9O1xuIiwgIntcblx0XCJ2YXJpYW50c1wiOiB7XG5cdFx0XCJ6aC1jblwiOiBcIuS4reWbveWkp+mZhueugOS9k1wiLFxuXHRcdFwiemgtc2dcIjogXCLmlrDliqDlnaHnroDkvZNcIixcblx0XHRcInpoLW15XCI6IFwi6ams5p2l6KW/5Lqa566A5L2TXCIsXG5cdFx0XCJ6aC1oa1wiOiBcIuS4reWci+mmmea4r+e5gemrlFwiLFxuXHRcdFwiemgtbW9cIjogXCLkuK3lnIvmvrPploDnuYHpq5RcIixcblx0XHRcInpoLXR3XCI6IFwi5Lit5ZyL6Ie654Gj57mB6auUXCJcblx0fSxcblx0XCJoYW5zXCI6IHtcblx0XHRcInNwYWNlXCI6IFwiXCIsXG5cdFx0XCJjbG9zZVwiOiBcIuWFs+mXrVwiLFxuXHRcdFwidnAuaGVhZGVyXCI6IFwi5oiR5Lus5pSv5oyBXCIsXG5cdFx0XCJ2cC5oZWFkZXIuYWx0XCI6IFwi6K6w5L2P5q2k5Y+Y5L2T77yfXCIsXG5cdFx0XCJ2cC5tYWluXCI6IFwi6YCJ5Y+W5YaF5a6555qE6K+t6KiA5Y+Y5L2TXCIsXG5cdFx0XCJ2cC5tYWluLmFsdFwiOiBcIuS7peWQjumDveS9v+eUqOatpOWPmOS9k+WRiOeOsOWGheWuuVwiLFxuXHRcdFwidnAubWFpbi5leHRcIjogXCLkv53lrZjmgqjlgY/lpb3nmoTkuK3mlofor63oqIDlj5jkvZPvvIzku6Xpgb/lhY3mmL7npLrnroDnuYHmt7fmnYLnmoTlhoXlrrnvvIzmj5DkvpvmnIDkvbPnmoTpmIXor7vkvZPpqozjgIJcIixcblx0XHRcInZwLmJ1dHRvbi5va1wiOiBcIuehruWumlwiLFxuXHRcdFwidnAuYnV0dG9uLm90aGVyXCI6IFwi5YW25LuWXCJcblx0fSxcblx0XCJoYW50XCI6IHtcblx0XHRcInNwYWNlXCI6IFwiXCIsXG5cdFx0XCJjbG9zZVwiOiBcIumXnOmWiVwiLFxuXHRcdFwidnAuaGVhZGVyXCI6IFwi5oiR5YCR5pSv5o+0XCIsXG5cdFx0XCJ2cC5oZWFkZXIuYWx0XCI6IFwi6KiY5L2P5q2k6K6K6auU77yfXCIsXG5cdFx0XCJ2cC5tYWluXCI6IFwi6YG45Y+W5YWn5a6555qE6Kqe6KiA6K6K6auUXCIsXG5cdFx0XCJ2cC5tYWluLmFsdFwiOiBcIuS7peW+jOmDveS9v+eUqOatpOiuiumrlOWRiOePvuWFp+WuuVwiLFxuXHRcdFwidnAubWFpbi5leHRcIjogXCLlhLLlrZjmgqjlgY/lpb3nmoTkuK3mlofoqp7oqIDororpq5TvvIzku6Xpgb/lhY3poa/npLrnsKHnuYHmt7fpm5znmoTlhaflrrnvvIzmj5DkvpvmnIDkvbPnmoTplrHoroDpq5TpqZfjgIJcIixcblx0XHRcInZwLmJ1dHRvbi5va1wiOiBcIueiuuWumlwiLFxuXHRcdFwidnAuYnV0dG9uLm90aGVyXCI6IFwi5YW25LuWXCJcblx0fVxufVxuIiwgImltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmfSBmcm9tICd2dWUnO1xuXG5jb25zdCBWQUxJRF9WQVJJQU5UUyA9IFsnemgtY24nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnLCAnemgtaGsnLCAnemgtbW8nXSBhcyBjb25zdDtcblxuLy8gV3JhcCB3Z1VzZXJWYXJpYW50IGluIGEgcmVmIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG4vLyBJdCBoYXMgbm8gcmVhY3Rpdml0eSBpbiBwcm9kdWN0aW9uLiAoY2hhbmdlcyB0byB3Z1VzZXJWYXJpYW50IHdpbGwgbm90IGJlIHJlZmxlY3RlZClcbi8vIHdnVXNlclZhcmlhbnQgY2FuIGJlIG51bGwsIHNvIGZhbGxzIGJhY2sgdG8gYW4gZW1wdHkgc3RyaW5nLlxuY29uc3Qgd2dVc2VyVmFyaWFudCA9IHJlZihtdy5jb25maWcuZ2V0KCd3Z1VzZXJWYXJpYW50JykgPz8gJycpO1xuXG5mdW5jdGlvbiBpc01vYmlsZURldmljZSgpOiBib29sZWFuIHtcblx0Ly8gQnJvd3NlciBzdXBwb3J0OlxuXHQvLyBDaHJvbWl1bSBvbiBzb21lIEFuZHJvaWQgZGV2aWNlIChlLmcuIFNhbXN1bmcpIGhhcyBcIihob3ZlcjogaG92ZXIpXCIgc2V0XG5cdC8vIFNvIGNoZWNrIHBvaW50ZXIgdG9nZXRoZXJcblx0cmV0dXJuIG1hdGNoTWVkaWEoJyhob3Zlcjogbm9uZSksIChwb2ludGVyOiBjb2Fyc2UpJykubWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gZ2V0TW91bnRQb2ludCgpOiBFbGVtZW50IHtcblx0c3dpdGNoIChtdy5jb25maWcuZ2V0KCdza2luJykpIHtcblx0XHRjYXNlICd2ZWN0b3ItMjAyMic6XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm13LXBhZ2UtY29udGFpbmVyJylbMF0gPz8gZG9jdW1lbnQuYm9keTtcblx0XHRjYXNlICdnb25nYmknOlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1jb250ZW50LWJsb2NrJykgPz8gZG9jdW1lbnQuYm9keTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmJvZHk7XG5cdH1cbn1cblxuY29uc3QgaW5mZXJyZWRWYXJpYW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuXHRpZiAoKFZBTElEX1ZBUklBTlRTIGFzIFJlYWRvbmx5QXJyYXk8c3RyaW5nPikuaW5jbHVkZXMod2dVc2VyVmFyaWFudC52YWx1ZSkpIHtcblx0XHRyZXR1cm4gd2dVc2VyVmFyaWFudC52YWx1ZSBhcyBWYWxpZFZhcmlhbnQ7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59KTtcblxuLyoqXG4gKiBTaHVmZmxlIGJldHdlZW4gYWxsIHZhbGlkIHZhcmlhbnRzLlxuICpcbiAqIEBwYXJhbSBsYXN0IGxhc3Qgc2h1ZmZsZWQgdmFyaWFudCwgdXNlZCB0byBwcmV2ZW50IGR1cGxpY2F0aW9uc1xuICogQHJldHVybnMgc2h1ZmZsZWQgdmFyaWFudFxuICovXG5mdW5jdGlvbiBzaHVmZmxlVmFyaWFudChsYXN0PzogVmFsaWRWYXJpYW50KTogVmFsaWRWYXJpYW50IHtcblx0Y29uc3QgdGFyZ2V0QXJyYXkgPSBbLi4uVkFMSURfVkFSSUFOVFNdLmZpbHRlcigoaSkgPT4ge1xuXHRcdHJldHVybiBpICE9PSBsYXN0O1xuXHR9KTtcblx0Y29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0YXJnZXRBcnJheS5sZW5ndGgpO1xuXHRyZXR1cm4gdGFyZ2V0QXJyYXlbcmFuZG9tSW5kZXhdITtcbn1cblxuZXhwb3J0IHtWQUxJRF9WQVJJQU5UUywgd2dVc2VyVmFyaWFudCwgaXNNb2JpbGVEZXZpY2UsIGdldE1vdW50UG9pbnQsIGluZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9O1xuIiwgImxldCBjb3VudGVyID0gMDtcblxuLyoqXG4gKiBSZXR1cm4gYSB1bmlxdWUgZWxlbWVudCBJRCBvbiBlYWNoIGNhbGwuXG4gKlxuICogQHJldHVybnMgaWRcbiAqL1xuZnVuY3Rpb24gdXNlVW5pcXVlSWQoKTogc3RyaW5nIHtcblx0cmV0dXJuIGB2YS0ke2NvdW50ZXIrK31gO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VVbmlxdWVJZDtcbiIsICJpbXBvcnQge1JlZiwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IHtpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcblxuY29uc3QgSU5URVJWQUwgPSAzICogMTAwMDtcblxuLyoqXG4gKiBSZXR1cm4gYSByZWYgd2hpY2ggc2h1ZmZsZSBiZXR3ZWVuIGFsbCBwb3NzaWJsZSB2YXJpYW50cy5cbiAqXG4gKiBAcGFyYW0gaXNGcmVlemVkIHNob3VsZCBzaHVmZmxpbmcgcGF1c2Ugb3Igbm90XG4gKi9cbmZ1bmN0aW9uIHVzZVNodWZmbGVkVmFyaWFudChpc0ZyZWV6ZWQ6IFJlZjxib29sZWFuPik6IFJlZjxWYWxpZFZhcmlhbnQ+IHtcblx0Y29uc3QgcmVzdWx0ID0gcmVmPFZhbGlkVmFyaWFudD4oc2h1ZmZsZVZhcmlhbnQoKSk7XG5cdGxldCBpZDogbnVtYmVyO1xuXG5cdHdhdGNoKFxuXHRcdGlzRnJlZXplZCxcblx0XHQobmV3VmFsdWUpID0+IHtcblx0XHRcdGlmIChuZXdWYWx1ZSkge1xuXHRcdFx0XHRjbGVhckludGVydmFsKGlkKTtcblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBmcmVlemUgYXQgaW5mZXJyZWQgdmFyaWFudCBhdCBhIGJlc3QgZWZmb3J0XG5cdFx0XHRcdC8vIFRoaXMgc2hvdWxkIGJlIG1vc3QgY2FzZXNcblx0XHRcdFx0cmVzdWx0LnZhbHVlID0gaW5mZXJyZWRWYXJpYW50LnZhbHVlID8/IHNodWZmbGVWYXJpYW50KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0cmVzdWx0LnZhbHVlID0gc2h1ZmZsZVZhcmlhbnQocmVzdWx0LnZhbHVlKTtcblx0XHRcdFx0fSwgSU5URVJWQUwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0e2ltbWVkaWF0ZTogdHJ1ZX1cblx0KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTaHVmZmxlZFZhcmlhbnQ7XG4iLCAiaW1wb3J0IHtXcml0YWJsZUNvbXB1dGVkUmVmLCBjb21wdXRlZH0gZnJvbSAndnVlJztcblxuLyoqXG4gKiBSZXR1cm4gYSBjb21wdXRlZCBwcm9wZXJ0eSB0aGF0IHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcHJvcCB2YWx1ZSB3aGVuIGlzIGFjY2Vzc2VkXG4gKiBhbmQgZmlyZXMgYW4gZXZlbnQgd2hlbiBpcyBzZXQuIFVzZWQgd2l0aCB2LW1vZGVsLlxuICpcbiAqIEBwYXJhbSBwcm9wcyBwcm9wcyBmaWVsZCBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIGVtaXQgZW1pdCBmdW5jdGlvbiBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIG5hbWUgbmFtZSBvZiB0aGUgcHJvcFxuICogQHJldHVybiB3cmFwcGVkIGNvbXB1dGVyIHByb3BlcnR5XG4gKi9cbmZ1bmN0aW9uIHVzZU1vZGVsV3JhcHBlcjxUIGV4dGVuZHMgc3RyaW5nLCBQIGV4dGVuZHMgUmVjb3JkPFQsIHVua25vd24+Pihcblx0cHJvcHM6IFAsXG5cdGVtaXQ6IChldmVudDogYHVwZGF0ZToke1R9YCwgdmFsdWU6IFBbVF0pID0+IHZvaWQsXG5cdG5hbWU6IFQgPSAnbW9kZWxWYWx1ZScgYXMgVFxuKTogV3JpdGFibGVDb21wdXRlZFJlZjxQW1RdPiB7XG5cdHJldHVybiBjb21wdXRlZCh7XG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHByb3BzW25hbWVdO1xuXHRcdH0sXG5cdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRlbWl0KGB1cGRhdGU6JHtuYW1lfWAsIHZhbHVlKTtcblx0XHR9LFxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTW9kZWxXcmFwcGVyO1xuIiwgImltcG9ydCB7UmVmLCBXYXRjaFNvdXJjZSwgY29tcHV0ZWQsIHNoYWxsb3dSZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuXG4vKipcbiAqIENyZWF0ZSBhIHJlZiB0aGF0LCBjYW4gYmUgaW5kZXBlbmRlbnRseSB1cGRhdGVkLCBidXQgd2hlbiBpdHMgZGVmYXVsdFxuICogdmFsdWUgY2hhbmdlcywgaXQgaXMgcmVzdG9yZWQgdG8gaXRzIChuZXcpIGRlZmF1bHQgdmFsdWUuXG4gKlxuICogVXNlZCBmb3IgZGVidWdnaW5nLlxuICovXG5mdW5jdGlvbiB1c2VEZWZhdWx0PFQ+KGRlZmF1bHRWYWx1ZTogV2F0Y2hTb3VyY2U8VD4pOiBSZWY8VD4ge1xuXHRjb25zdCByZWFsUmVmID0gc2hhbGxvd1JlZjxUPih0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdFZhbHVlKCkgOiBkZWZhdWx0VmFsdWUudmFsdWUpO1xuXG5cdHdhdGNoKFxuXHRcdGRlZmF1bHRWYWx1ZSxcblx0XHQobmV3VmFsdWUpID0+IHtcblx0XHRcdHJlYWxSZWYudmFsdWUgPSBuZXdWYWx1ZTtcblx0XHR9LFxuXHRcdHtkZWVwOiB0cnVlfVxuXHQpO1xuXG5cdHJldHVybiBjb21wdXRlZCh7XG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHJlYWxSZWYudmFsdWUgYXMgVDtcblx0XHR9LFxuXHRcdHNldChuZXdWYWx1ZSkge1xuXHRcdFx0cmVhbFJlZi52YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdH0sXG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEZWZhdWx0O1xuIiwgImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gW1wibGFuZ1wiLCBcImFyaWEtbGFiZWxsZWRieVwiLCBcImFyaWEtZGVzY3JpYmVkYnlcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcImxhbmdcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNcIiB9XG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fZm9vdGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLXZhcmlhbnQtcHJvbXB0XCIsXG4gICAgYXBwZWFyOiBcIlwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAoJHByb3BzLm9wZW4pXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICByZWY6IFwicHJvbXB0XCIsXG4gICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuaTE4blZhcmlhbnR9YCxcbiAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0XCIsXG4gICAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJhcmlhLW1vZGFsXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6ICRzZXR1cC5kZXNjSWRcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX2Nsb3NlXCIsXG4gICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICBpY29uOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAub3B0T3V0QW5kQ2xvc2VcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInRpdGxlXCIsIFwiYXJpYS1sYWJlbFwiLCBcImRpc2FibGVkXCJdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMlwiLCB7XG4gICAgICAgICAgICAgIGlkOiAkc2V0dXAudGl0bGVJZCxcbiAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlIHZhLXRpdGxlXCJcbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5oZWFkZXIuYWx0JyA6ICd2cC5oZWFkZXInKSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICAgIF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJyXCIsIG51bGwsIG51bGwsIC0xIC8qIENBQ0hFRCAqLykpLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFGYWRlVHJhbnNpdGlvblwiXSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICghJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkKVxuICAgICAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJHNldHVwLnNodWZmbGVkVmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5zaHVmZmxlZFZhcmlhbnR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZV9fdmFyaWFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbJHNldHVwLnNodWZmbGVkVmFyaWFudF0pLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF8zKSlcbiAgICAgICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8yKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIHtcbiAgICAgICAgICAgICAgaWQ6ICRzZXR1cC5kZXNjSWQsXG4gICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19kZXNjIHZhLXBhcmFcIlxuICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgPyAndnAubWFpbi5hbHQnIDogJ3ZwLm1haW4nKSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzQpLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF81LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgaW5mZXJyZWRWYXJpYW50IGlzIG5vbi1udWxsLCBndWFyZGVkIGJ5IGlzVmFyaWFudE5hcnJvd2VkIFwiKSxcbiAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgJiYgJHNldHVwLmluZmVycmVkVmFyaWFudCAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBbJHNldHVwLmluZmVycmVkVmFyaWFudF1cblx0XHRcdFx0XHRcdDogJHNldHVwLlZBTElEX1ZBUklBTlRTLCAodmFyaWFudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICAgIGtleTogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1widmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiLCB7J3ZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b24tLXByaW1hcnknOiAkc2V0dXAuaXNWYXJpYW50TmFycm93ZWR9XSksXG4gICAgICAgICAgICAgICAgICBpbmRpY2F0b3I6IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgICAgbGFuZzogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5zZWxlY3QodmFyaWFudCkpXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfOiAyIC8qIERZTkFNSUMgKi9cbiAgICAgICAgICAgICAgICB9LCAxMDMyIC8qIFBST1BTLCBEWU5BTUlDX1NMT1RTICovLCBbXCJjbGFzc1wiLCBcImxhbmdcIiwgXCJkaXNhYmxlZFwiLCBcIm9uQ2xpY2tcIl0pKVxuICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSksXG4gICAgICAgICAgICAgICgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQpXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvcjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID0gZmFsc2UpKVxuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5idXR0b24ub3RoZXInKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZm9vdGVyXCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNywgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbi5leHQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9KSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNWE0NGNjNzVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IFZBQnV0dG9uIGZyb20gJy4vVkFCdXR0b24udnVlJztcbmltcG9ydCBWQVNlbGVjdCBmcm9tICcuL1ZBU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgdXNlSTE4biwge2kxOG5WYXJpYW50fSBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VJMThuJztcbmltcG9ydCB1c2VVbmlxdWVJZCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VVbmlxdWVJZCc7XG5pbXBvcnQge1ZBTElEX1ZBUklBTlRTLCBpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcbmltcG9ydCB1c2VEZWZhdWx0IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZURlZmF1bHQnO1xuXG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhcblx0ZGVmaW5lUHJvcHM8e1xuXHRcdG9wZW46IGJvb2xlYW47XG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHR9PigpLFxuXHR7XG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHR9XG4pO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0KGU6ICd1cGRhdGU6b3BlbicsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICd1cGRhdGU6ZGlzYWJsZWQnLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAnc2VsZWN0JywgdmFyaWFudDogVmFsaWRWYXJpYW50KTogdm9pZDtcblx0KGU6ICdvcHRvdXQnKTogdm9pZDtcbn0+KCk7XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgVFM2MTMzXG5jb25zdCBwcm9tcHQgPSByZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbmNvbnN0IHRpdGxlSWQgPSB1c2VVbmlxdWVJZCgpO1xuY29uc3Qgc2VsZWN0ZWRWYXJpYW50ID0gdXNlRGVmYXVsdCgoKSA9PiBpbmZlcnJlZFZhcmlhbnQudmFsdWUgPz8gc2h1ZmZsZVZhcmlhbnQoKSk7XG5jb25zdCBpc09wZW4gPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdvcGVuJyk7XG5jb25zdCBpc0Rpc2FibGVkID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnZGlzYWJsZWQnKTtcblxuZnVuY3Rpb24gb3B0T3V0QW5kQ2xvc2UoKSB7XG5cdGVtaXQoJ29wdG91dCcpO1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRpc0Rpc2FibGVkLnZhbHVlID0gdHJ1ZTtcblx0ZW1pdCgnc2VsZWN0JywgdmFyaWFudCk7XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8VHJhbnNpdGlvbiBuYW1lPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIgYXBwZWFyPlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJvcGVuXCJcblx0XHRcdHJlZj1cInByb21wdFwiXG5cdFx0XHQ6bGFuZz1cImB6aC0ke2kxOG5WYXJpYW50fWBcIlxuXHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIlxuXHRcdFx0cm9sZT1cImRpYWxvZ1wiXG5cdFx0XHRhcmlhLW1vZGFsPVwiZmFsc2VcIlxuXHRcdFx0OmFyaWEtbGFiZWxsZWRieT1cInRpdGxlSWRcIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlclwiPlxuXHRcdFx0XHQ8aDIgOmlkPVwidGl0bGVJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX3RpdGxlIHZhLXRpdGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbicpIH19XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX2Nsb3NlXCJcblx0XHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdFx0aWNvbj1cImNsb3NlXCJcblx0XHRcdFx0XHQ6dGl0bGU9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0XHQ6YXJpYS1sYWJlbD1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJvcHRPdXRBbmRDbG9zZVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5cIj5cblx0XHRcdFx0PFZBU2VsZWN0XG5cdFx0XHRcdFx0di1tb2RlbD1cInNlbGVjdGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX3NlbGVjdFwiXG5cdFx0XHRcdFx0Omxhbmc9XCJzZWxlY3RlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uIHYtZm9yPVwidmFyaWFudCBpbiBWQUxJRF9WQVJJQU5UU1wiIDprZXk9XCJ2YXJpYW50XCIgOnZhbHVlPVwidmFyaWFudFwiIDpsYW5nPVwidmFyaWFudFwiPlxuXHRcdFx0XHRcdFx0e3sgbWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0gfX1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0PC9WQVNlbGVjdD5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX2FjdGlvblwiXG5cdFx0XHRcdFx0YWN0aW9uPVwicHJvZ3Jlc3NpdmVcIlxuXHRcdFx0XHRcdGljb249XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJzZWxlY3Qoc2VsZWN0ZWRWYXJpYW50KVwiXG5cdFx0XHRcdFx0Pnt7IHVzZUkxOG4oJ3ZwLmJ1dHRvbi5vaycpIH19PC9WQUJ1dHRvblxuXHRcdFx0XHQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxmb290ZXIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2Zvb3RlclwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbi5leHQnKSB9fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQ8L2Rpdj5cblx0PC9UcmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS10aXRsZSB7XG5cdGJvcmRlcjogMDsgLy8gUmVzZXRcblx0cGFkZGluZzogMDsgLy8gUmVzZXRcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuXHRmb250LXNpemU6IEBmb250LXNpemUteHgtbGFyZ2U7XG5cdGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtYm9sZDtcblx0bWFyZ2luOiBAc3BhY2luZy01MCBAc3BhY2luZy0wO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG59XG5cbi52YS1wYXJhIHtcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblx0bWFyZ2luLXRvcDogQHNwYWNpbmctNTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcblxuXHQmLS1zdWJ0bGUge1xuXHRcdGNvbG9yOiBAY29sb3Itc3VidGxlO1xuXHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14LXNtYWxsO1xuXHRcdG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLTM1O1xuXHR9XG59XG5cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUge1xuXHRib3gtc2l6aW5nOiBAYm94LXNpemluZy1iYXNlO1xuXHR6LWluZGV4OiBAei1pbmRleC1vdmVybGF5O1xuXHRwYWRkaW5nOiBAc3BhY2luZy01MCBAc3BhY2luZy0xMDA7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bGVmdDogQHNwYWNpbmctMDtcblx0cmlnaHQ6IEBzcGFjaW5nLTA7XG5cdGJvdHRvbTogQHNwYWNpbmctMDtcblx0bWFyZ2luOiBAc3BhY2luZy0wIGF1dG87XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtKTtcblxuXHRvdmVyZmxvdzogYXV0bztcblx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogQGJhY2tncm91bmQtY29sb3ItYmFzZTtcblx0Ym9yZGVyOiBAYm9yZGVyLWJhc2U7XG5cdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cdGJveC1zaGFkb3c6IEBib3gtc2hhZG93LWRyb3AtbWVkaXVtO1xuXHRmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXN5c3RlbS1zYW5zO1xuXHRmb250LXNpemU6IDFyZW07IC8vIFJlc2V0XG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7IC8vIFJlc2V0XG5cblx0Jl9faGVhZGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHQmX190aXRsZSB7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLW1lZGl1bTtcblx0XHR9XG5cblx0XHQmX19jbG9zZSB7XG5cdFx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHRcdH1cblx0fVxuXG5cdCZfX21haW4ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0bWFyZ2luLXRvcDogQHNwYWNpbmctMjU7XG5cblx0XHQmX19zZWxlY3Qge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiBAc3BhY2luZy03NTtcblx0XHRcdGZsZXg6IDE7XG5cdFx0fVxuXG5cdFx0Jl9fYWN0aW9uIHtcblx0XHRcdGZsZXgtc2hyaW5rOiAwO1xuXHRcdH1cblx0fVxuXG5cdCZfX2Nsb3NlIHtcblx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdH1cbn1cblxuLyogUHJvbXB0IHRyYW5zaXRpb24gZWZmZWN0ICovXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWVudGVyLWFjdGl2ZSxcbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtbGVhdmUtYWN0aXZlIHtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHktbGF5b3V0O1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiBAdHJhbnNpdGlvbi1kdXJhdGlvbi1tZWRpdW07XG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24tc3lzdGVtO1xufVxuXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWVudGVyLWZyb20sXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWxlYXZlLXRvIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xufVxuPC9zdHlsZT5cbi4uL21vZHVsZXMvdXRpbHNcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0bW9kZWxWYWx1ZTogc3RyaW5nO1xufT4oKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IG1vZGVsVmFsdWUgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PHNlbGVjdCB2LW1vZGVsPVwibW9kZWxWYWx1ZVwiIGNsYXNzPVwidmEtc2VsZWN0XCI+XG5cdFx0PHNsb3QgLz5cblx0PC9zZWxlY3Q+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXNlbGVjdCB7XG5cdC5zZWxlY3RfX2hhbmRsZSgpO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgQHNwYWNpbmctNzU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtaW1hZ2U6IEBpY29uLWV4cGFuZDtcblx0YmFja2dyb3VuZC1zaXplOiBAc2l6ZS1pY29uLXgtc21hbGw7XG5cblx0JjpkaXNhYmxlZCB7XG5cdFx0LnNlbGVjdF9faGFuZGxlLS1kaXNhYmxlZCgpO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IEBpY29uLWV4cGFuZC1kaXNhYmxlZDtcblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUsIHdoaWNoIHNldHMgYW4gb3BhY2l0eSBsZXNzIHRoYW4gMSBmb3IgZGlzYWJsZWQgc2VsZWN0IGVsZW1lbnRzLlxuXHRcdG9wYWNpdHk6IEBvcGFjaXR5LWJhc2U7XG5cdFx0Y3Vyc29yOiBAY3Vyc29yLW5vdC1hbGxvd2VkO1xuXHR9XG5cblx0JjplbmFibGVkIHtcblx0XHQuc2VsZWN0X19oYW5kbGUtLWVuYWJsZWQoKTtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCB2TW9kZWxTZWxlY3QgYXMgX3ZNb2RlbFNlbGVjdCwgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIF93aXRoRGlyZWN0aXZlcygoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic2VsZWN0XCIsIHtcbiAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAubW9kZWxWYWx1ZSkgPSAkZXZlbnQpKSxcbiAgICBjbGFzczogXCJ2YS1zZWxlY3RcIlxuICB9LCBbXG4gICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICBdLCA1MTIgLyogTkVFRF9QQVRDSCAqLykpLCBbXG4gICAgW192TW9kZWxTZWxlY3QsICRzZXR1cC5tb2RlbFZhbHVlXVxuICBdKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWM5YjQ2NDYwXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJsYW5nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdXG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluXCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IFtcInZhbHVlXCIsIFwibGFuZ1wiXVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19mb290ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIsXG4gICAgYXBwZWFyOiBcIlwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAoJHByb3BzLm9wZW4pXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICByZWY6IFwicHJvbXB0XCIsXG4gICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuaTE4blZhcmlhbnR9YCxcbiAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiLFxuICAgICAgICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgICAgICAgIFwiYXJpYS1tb2RhbFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAkc2V0dXAudGl0bGVJZFxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaDJcIiwge1xuICAgICAgICAgICAgICAgIGlkOiAkc2V0dXAudGl0bGVJZCxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fdGl0bGUgdmEtdGl0bGVcIlxuICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluJykpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF8zKSxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX2Nsb3NlXCIsXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAub3B0T3V0QW5kQ2xvc2VcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1widGl0bGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFTZWxlY3RcIl0sIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuc2VsZWN0ZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19zZWxlY3RcIixcbiAgICAgICAgICAgICAgICBsYW5nOiAkc2V0dXAuc2VsZWN0ZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWRcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLlZBTElEX1ZBUklBTlRTLCAodmFyaWFudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcIm9wdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgIGxhbmc6IHZhcmlhbnRcbiAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0pLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF81KSlcbiAgICAgICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIiwgXCJsYW5nXCIsIFwiZGlzYWJsZWRcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIl0pLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX2FjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoJHNldHVwLnNlbGVjdCgkc2V0dXAuc2VsZWN0ZWRWYXJpYW50KSkpXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLmJ1dHRvbi5vaycpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImRpc2FibGVkXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZm9vdGVyXCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNywgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbi5leHQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9KSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNWNjNzg2NWJcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBUZWxlcG9ydCBhcyBfVGVsZXBvcnQsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBbXG4gICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UZWxlcG9ydCwgeyB0bzogJHNldHVwLmRlc2t0b3BNb3VudFBvaW50IH0sIFtcbiAgICAgICghJHNldHVwLmlzTW9iaWxlKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQVZhcmlhbnRQcm9tcHRcIl0sIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5pc0Rpc2FibGVkLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpkaXNhYmxlZFwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc0Rpc2FibGVkKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgXCJhdXRvLWNsb3NlXCI6IGZhbHNlLFxuICAgICAgICAgICAgb25PcHRvdXQ6ICRzZXR1cC5vbk9wdE91dCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAkc2V0dXAuc2V0VmFyaWFudFxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdLCA4IC8qIFBST1BTICovLCBbXCJ0b1wiXSkpLFxuICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgVGVsZXBvcnQgdG8gYm9keSBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBmbG9hdGVkIGF0IGJvdHRvbSBcIiksXG4gICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UZWxlcG9ydCwgeyB0bzogXCJib2R5XCIgfSwgW1xuICAgICAgKCRzZXR1cC5pc01vYmlsZSlcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFWYXJpYW50UHJvbXB0TW9iaWxlXCJdLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuaXNEaXNhYmxlZCxcbiAgICAgICAgICAgIFwib25VcGRhdGU6ZGlzYWJsZWRcIjogX2NhY2hlWzNdIHx8IChfY2FjaGVbM10gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNEaXNhYmxlZCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIG9uT3B0b3V0OiAkc2V0dXAub25PcHRPdXQsXG4gICAgICAgICAgICBvblNlbGVjdDogJHNldHVwLnNldFZhcmlhbnRcbiAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwiZGlzYWJsZWRcIl0pKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSkpXG4gIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZUFBd0JDLFFBQUEs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QWpLLGFBQWEzQixPQUFPLHVCQUF1QixHQUFHO01BQzNEUCxLQUFLO01BQ0x5SixNQUFNbEosT0FBTzJIO01BQ2IsaUJBQWlCN0gsT0FBTyxDQUFDLE1BQU1BLE9BQU8sQ0FBQyxJQUFJMkIsWUFBWXpCLE9BQU8ySCxTQUFVbEc7TUFDeEU4RyxVQUFVdkksT0FBTzRIO01BQ2pCLHFCQUFxQjlILE9BQU8sQ0FBQyxNQUFNQSxPQUFPLENBQUMsSUFBSTJCLFlBQVl6QixPQUFPNEgsYUFBY25HO01BQ2hGdUssVUFBVWhNLE9BQU8wTDtNQUNqQk8sVUFBVWpNLE9BQU9zTDtJQUNuQixHQUFHLE1BQU0sR0FBZSxDQUFDLFFBQVEsVUFBVSxDQUFDLE1BQUEsR0FDNUNNLGFBQUFoTCxvQkFBb0IsUUFBUSxJQUFJLENBQUEsQ0FDckMsRUFBQTtJQUNBOztFQUF3QjtBQUM3Qjs7QUNqQzJTc0wsWUFBT3RNLFNBQVNpTTtBQUFPSyxZQUFPbEwsU0FBUztBQUFrQyxJQUFPbUwsZUFBUUQ7O0F6QkduWSxJQUFNRSxPQUFPbkksU0FBU29JLGNBQWMsS0FBSztBQUN6Q3BJLFNBQVNFLEtBQUttSSxPQUFPRixJQUFJO0NBQUEsR0FDekJuTixhQUFBc04sV0FBVUosWUFBRyxFQUFFSyxNQUFNSixJQUFJOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfdnVlMjIiLCAicmVxdWlyZSIsICJpbXBvcnRfdnVlMjAiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X3Z1ZTEyIiwgImltcG9ydF92dWUyIiwgIl9ob2lzdGVkXzEiLCAiX2hvaXN0ZWRfMiIsICJrZXkiLCAiX2hvaXN0ZWRfMyIsICJfaG9pc3RlZF80IiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiY2xhc3MiLCAieG1sbnMiLCAid2lkdGgiLCAic2l6ZSIsICJoZWlnaHQiLCAidmlld0JveCIsICJpY29uIiwgImNyZWF0ZUNvbW1lbnRWTm9kZSIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiZCIsICJWQUljb25fZGVmYXVsdCIsICJfX2ZpbGUiLCAiVkFJY29uX2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgIl9ob2lzdGVkXzEyIiwgInJlbmRlcjIiLCAibm9ybWFsaXplQ2xhc3MiLCAiYWN0aW9uIiwgIndlaWdodCIsICJvbkNsaWNrIiwgIiRldmVudCIsICIkZW1pdCIsICJjcmVhdGVCbG9jayIsICIkc2xvdHMiLCAicmVuZGVyU2xvdCIsICJpbmRpY2F0b3IiLCAiVkFCdXR0b25fZGVmYXVsdCIsICJfX3Njb3BlSWQiLCAiVkFCdXR0b25fZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTUiLCAicmVuZGVyMyIsICJUcmFuc2l0aW9uIiwgIm5hbWUiLCAibW9kZSIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiXyIsICJzY3JpcHQiLCAiVkFGYWRlVHJhbnNpdGlvbl9kZWZhdWx0IiwgImltcG9ydF92dWU3IiwgIm1lc3NhZ2VzX2RlZmF1bHQiLCAidmFyaWFudHMiLCAiaGFucyIsICJzcGFjZSIsICJjbG9zZSIsICJoYW50IiwgImltcG9ydF92dWU2IiwgIlZBTElEX1ZBUklBTlRTIiwgIndnVXNlclZhcmlhbnQiLCAicmVmIiwgIl9tdyRjb25maWckZ2V0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaXNNb2JpbGVEZXZpY2UiLCAibWF0Y2hNZWRpYSIsICJtYXRjaGVzIiwgImdldE1vdW50UG9pbnQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJib2R5IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW5mZXJyZWRWYXJpYW50IiwgImNvbXB1dGVkIiwgImluY2x1ZGVzIiwgInZhbHVlIiwgInNodWZmbGVWYXJpYW50IiwgImxhc3QiLCAidGFyZ2V0QXJyYXkiLCAiZmlsdGVyIiwgImkiLCAicmFuZG9tSW5kZXgiLCAiTWF0aCIsICJmbG9vciIsICJyYW5kb20iLCAibGVuZ3RoIiwgImkxOG5WYXJpYW50IiwgInVzZUkxOG4iLCAiX2N1cnJlbnRNc2dzR3JvdXAka2V5IiwgImN1cnJlbnRNc2dzR3JvdXAiLCAiY291bnRlciIsICJ1c2VVbmlxdWVJZCIsICJjb25jYXQiLCAidXNlVW5pcXVlSWRfZGVmYXVsdCIsICJpbXBvcnRfdnVlOCIsICJJTlRFUlZBTCIsICJ1c2VTaHVmZmxlZFZhcmlhbnQiLCAiaXNGcmVlemVkIiwgInJlc3VsdCIsICJpZCIsICJ3YXRjaCIsICJuZXdWYWx1ZSIsICJfaW5mZXJyZWRWYXJpYW50JHZhbHUiLCAiY2xlYXJJbnRlcnZhbCIsICJ3aW5kb3ciLCAic2V0SW50ZXJ2YWwiLCAiaW1tZWRpYXRlIiwgInVzZVNodWZmbGVkVmFyaWFudF9kZWZhdWx0IiwgImltcG9ydF92dWU5IiwgInVzZU1vZGVsV3JhcHBlciIsICJwcm9wcyIsICJlbWl0IiwgInNldCIsICJ1c2VNb2RlbFdyYXBwZXJfZGVmYXVsdCIsICJpbXBvcnRfdnVlMTAiLCAidXNlRGVmYXVsdCIsICJkZWZhdWx0VmFsdWUiLCAicmVhbFJlZiIsICJzaGFsbG93UmVmIiwgImRlZXAiLCAidXNlRGVmYXVsdF9kZWZhdWx0IiwgIl9fcHJvcHMiLCAiX19lbWl0IiwgInByb21wdCIsICJ0aXRsZUlkIiwgImRlc2NJZCIsICJpc09wZW4iLCAiaXNEaXNhYmxlZCIsICJpc1ZhcmlhbnROYXJyb3dlZCIsICJzaHVmZmxlZFZhcmlhbnQiLCAib3B0T3V0QW5kQ2xvc2UiLCAic2VsZWN0IiwgInZhcmlhbnQiLCAiZWxlbWVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2IiwgImJ1dHRvbnMiLCAiYXV0b0Nsb3NlIiwgImRpc2FibGVkIiwgImltcG9ydF92dWUxMyIsICJfaG9pc3RlZF8xMyIsICJfaG9pc3RlZF8yMiIsICJfaG9pc3RlZF8zMiIsICJfaG9pc3RlZF80MiIsICJfaG9pc3RlZF81IiwgIl9ob2lzdGVkXzYiLCAiX2hvaXN0ZWRfNyIsICJyZW5kZXI0IiwgImFwcGVhciIsICJvcGVuIiwgImxhbmciLCAicm9sZSIsICJjcmVhdGVWTm9kZSIsICJ0aXRsZSIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgIm1lc3NhZ2VzIiwgIkZyYWdtZW50IiwgInJlbmRlckxpc3QiLCAiX3RvRGlzcGxheVN0cmluZyIsICJWQVZhcmlhbnRQcm9tcHRfZGVmYXVsdCIsICJWQVZhcmlhbnRQcm9tcHRfZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTE3IiwgIm1vZGVsVmFsdWUiLCAiaW1wb3J0X3Z1ZTE1IiwgInJlbmRlcjUiLCAid2l0aERpcmVjdGl2ZXMiLCAidk1vZGVsU2VsZWN0IiwgIlZBU2VsZWN0X2RlZmF1bHQiLCAiVkFTZWxlY3RfZGVmYXVsdDIiLCAic2VsZWN0ZWRWYXJpYW50IiwgIl9pbmZlcnJlZFZhcmlhbnQkdmFsdTIiLCAiaW1wb3J0X3Z1ZTE4IiwgIl9ob2lzdGVkXzE0IiwgIl9ob2lzdGVkXzIzIiwgIl9ob2lzdGVkXzMzIiwgIl9ob2lzdGVkXzQzIiwgIl9ob2lzdGVkXzUyIiwgIl9ob2lzdGVkXzYyIiwgIl9ob2lzdGVkXzcyIiwgInJlbmRlcjYiLCAiVkFWYXJpYW50UHJvbXB0TW9iaWxlX2RlZmF1bHQiLCAiVkFWYXJpYW50UHJvbXB0TW9iaWxlX2RlZmF1bHQyIiwgImlzTW9iaWxlIiwgImRlc2t0b3BNb3VudFBvaW50IiwgInNldFZhcmlhbnQiLCAic2V0TG9jYWxWYXJpYW50IiwgInJlZGlyZWN0IiwgImZvcmNlZCIsICJvbk9wdE91dCIsICJzZXRPcHRPdXQiLCAiaW1wb3J0X3Z1ZTIxIiwgInJlbmRlcjciLCAiVGVsZXBvcnQiLCAidG8iLCAib25PcHRvdXQiLCAib25TZWxlY3QiLCAiQXBwX2RlZmF1bHQiLCAiQXBwX2RlZmF1bHQyIiwgInJvb3QiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAiY3JlYXRlQXBwIiwgIm1vdW50Il0KfQo=
