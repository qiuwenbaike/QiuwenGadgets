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
var _hoisted_3 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M20 18h-1.44a.61.61 0 01-.4-.12.81.81 0 01-.23-.31L17 15h-5l-1 2.54a.77.77 0 01-.22.3.59.59 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.19 17.19 0 01-5 2.1q.56.82.87 1.38a23.28 23.28 0 005.22-2.51 15.64 15.64 0 003.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 01-2.45 4.45 9.11 9.11 0 01-2.46-4.45z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4 = {
  key: 1
};
var _hoisted_5 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_6 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_7 = [_hoisted_5, _hoisted_6];
var _hoisted_8 = {
  key: 2
};
var _hoisted_9 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("svg", {
    class: "va-icon-button__icon",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: $props.size,
    height: $props.size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true"
  }, [$props.icon === "lang" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_2, [(0, import_vue2.createCommentVNode)(" eslint-disable "), _hoisted_3, (0, import_vue2.createCommentVNode)(" eslint-enable ")])) : $props.icon === "close" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_4, [..._hoisted_7])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_8, [..._hoisted_10]))], 8, _hoisted_1);
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
var _withScopeId = (n) => ((0, import_vue13.pushScopeId)("data-v-5a44cc75"), n = n(), (0, import_vue13.popScopeId)(), n);
var _hoisted_13 = ["lang", "aria-labelledby", "aria-describedby"];
var _hoisted_22 = ["id"];
var _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0, import_vue13.createElementVNode)(
  "br",
  null,
  null,
  -1
  /* HOISTED */
));
var _hoisted_42 = ["lang"];
var _hoisted_52 = ["id"];
var _hoisted_62 = {
  class: "va-variant-prompt__options"
};
var _hoisted_72 = {
  class: "va-variant-prompt__footer"
};
var _hoisted_82 = {
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
    ), _hoisted_32, (0, import_vue13.createVNode)($setup["VAFadeTransition"], null, {
      default: (0, import_vue13.withCtx)(() => [!$setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("span", {
        key: $setup.shuffledVariant,
        lang: "zh-".concat($setup.shuffledVariant),
        class: "va-variant-prompt__title__variant"
      }, (0, import_vue13.toDisplayString)($setup.messages.variants[$setup.shuffledVariant]), 9, _hoisted_42)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    })], 8, _hoisted_22), (0, import_vue13.createElementVNode)("p", {
      id: $setup.descId,
      class: "va-variant-prompt__desc va-para"
    }, (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.main.alt" : "vp.main")), 9, _hoisted_52), (0, import_vue13.createElementVNode)("div", _hoisted_62, [(0, import_vue13.createCommentVNode)(" inferredVariant is non-null, guarded by isVariantNarrowed "), ((0, import_vue13.openBlock)(true), (0, import_vue13.createElementBlock)(
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
    }, 8, ["disabled"])) : (0, import_vue13.createCommentVNode)("v-if", true)]), (0, import_vue13.createElementVNode)("footer", _hoisted_72, [(0, import_vue13.createElementVNode)(
      "p",
      _hoisted_82,
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
var _hoisted_53 = ["value", "lang"];
var _hoisted_63 = {
  class: "va-variant-prompt-mobile__footer"
};
var _hoisted_73 = {
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
          }, (0, import_vue18.toDisplayString)($setup.messages.variants[variant]), 9, _hoisted_53);
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
    }, 8, ["disabled"])]), (0, import_vue18.createElementVNode)("footer", _hoisted_63, [(0, import_vue18.createElementVNode)(
      "p",
      _hoisted_73,
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL1ZhcmlhbnRBbGx5RGlhbG9nLnRzIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFJY29uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBSWNvbi52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUJ1dHRvbi52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBRmFkZVRyYW5zaXRpb24udnVlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VJMThuLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tZXNzYWdlcy5qc29uIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VVbmlxdWVJZC50cyIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50LnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXIudHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZURlZmF1bHQudHMiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0LnZ1ZSIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdE1vYmlsZS52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQVNlbGVjdC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvQXBwLnZ1ZSJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuY3JlYXRlQXBwKEFwcCkubW91bnQocm9vdCk7XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtzZXRMb2NhbFZhcmlhbnQsIHJlZGlyZWN0LCBWYWxpZFZhcmlhbnQsIHNldE9wdE91dH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQgVkFWYXJpYW50UHJvbXB0IGZyb20gJy4vY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlJztcbmltcG9ydCBWQVZhcmlhbnRQcm9tcHRNb2JpbGUgZnJvbSAnLi9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdE1vYmlsZS52dWUnO1xuaW1wb3J0IHtnZXRNb3VudFBvaW50LCBpc01vYmlsZURldmljZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzJztcblxuY29uc3QgaXNPcGVuID0gcmVmKHRydWUpO1xuY29uc3QgaXNEaXNhYmxlZCA9IHJlZihmYWxzZSk7XG5jb25zdCBpc01vYmlsZSA9IGlzTW9iaWxlRGV2aWNlKCk7XG5jb25zdCBkZXNrdG9wTW91bnRQb2ludCA9IGdldE1vdW50UG9pbnQoKTtcblxuZnVuY3Rpb24gc2V0VmFyaWFudCh2YXJpYW50OiBWYWxpZFZhcmlhbnQpIHtcblx0c2V0TG9jYWxWYXJpYW50KHZhcmlhbnQpO1xuXHRyZWRpcmVjdCh2YXJpYW50LCB7Zm9yY2VkOiB0cnVlfSk7XG59XG5cbi8vIEJyb3dzZXIgc3VwcG9ydDogaU9TIFNhZmFyaSA8IDE1XG4vLyBXb3JrIGFyb3VuZCBTYWZhcmkgZmlyaW5nIHNjcm9sbCBldmVudCBhdCB1bmV4cGVjdGVkIGNvbmRpdGlvbnMgKGUuZy4gcG9wcGluZyB1cCBTZWxlY3QpXG5hZGRFdmVudExpc3RlbmVyKGlzTW9iaWxlID8gJ3RvdWNobW92ZScgOiAnc2Nyb2xsJywgKCkgPT4ge1xuXHRpZiAoIWlzRGlzYWJsZWQudmFsdWUpIHtcblx0XHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0fVxufSk7XG5cbmZ1bmN0aW9uIG9uT3B0T3V0KCkge1xuXHRzZXRPcHRPdXQoKTtcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxUZWxlcG9ydCA6dG89XCJkZXNrdG9wTW91bnRQb2ludFwiPlxuXHRcdDxWQVZhcmlhbnRQcm9tcHRcblx0XHRcdHYtaWY9XCIhaXNNb2JpbGVcIlxuXHRcdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHRcdHYtbW9kZWw6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVkXCJcblx0XHRcdDphdXRvLWNsb3NlPVwiZmFsc2VcIlxuXHRcdFx0QG9wdG91dD1cIm9uT3B0T3V0XCJcblx0XHRcdEBzZWxlY3Q9XCJzZXRWYXJpYW50XCJcblx0XHQvPlxuXHQ8L1RlbGVwb3J0PlxuXG5cdDwhLS0gVGVsZXBvcnQgdG8gYm9keSBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBmbG9hdGVkIGF0IGJvdHRvbSAtLT5cblx0PFRlbGVwb3J0IHRvPVwiYm9keVwiPlxuXHRcdDxWQVZhcmlhbnRQcm9tcHRNb2JpbGVcblx0XHRcdHYtaWY9XCJpc01vYmlsZVwiXG5cdFx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdFx0di1tb2RlbDpkaXNhYmxlZD1cImlzRGlzYWJsZWRcIlxuXHRcdFx0QG9wdG91dD1cIm9uT3B0T3V0XCJcblx0XHRcdEBzZWxlY3Q9XCJzZXRWYXJpYW50XCJcblx0XHQvPlxuXHQ8L1RlbGVwb3J0PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS12YXJpYW50LXByb21wdCB7XG5cdC8vIFZlY3RvciAyMDIyIHNwZWNpZmljIGFkanVzdG1lbnRzXG5cdC5za2luLXZlY3Rvci0yMDIyICYge1xuXHRcdC8vIENhbGN1bGF0ZWQgZnJvbSBWZWN0b3IgMjAyMiBzb3VyY2UgY29kZVxuXHRcdEB2ZWN0b3ItMjAyMi1oZWFkZXItaGVpZ2h0OiA1MHB4ICsgMiAqIDhweDtcblx0XHRtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSBAc3BhY2luZy12ZXJ0aWNhbC1kaWFsb2cgLSBAdmVjdG9yLTIwMjItaGVhZGVyLWhlaWdodCk7XG5cblx0XHQudmVjdG9yLXRvYy1hdmFpbGFibGUudmVjdG9yLWZlYXR1cmUtdG9jLXBpbm5lZC1jbGllbnRwcmVmLTEgJixcblx0XHQudmVjdG9yLWZlYXR1cmUtbWFpbi1tZW51LXBpbm5lZC1lbmFibGVkICYge1xuXHRcdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG5cdFx0XHRcdGxlZnQ6IHVuc2V0O1xuXG5cdFx0XHRcdC8vIENhbGN1bGF0ZWQgZnJvbSBWZWN0b3IgMjAyMiBzb3VyY2UgY29kZVxuXHRcdFx0XHQvLyBJbiB0aGlzIHdpZHRoIHRoaXMgcHJvbXB0IHdpbGwgbm90IG9ic2N1cmUgYXJ0aWNsZSBjb250ZW50XG5cdFx0XHRcdEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmc6IDIuNzVlbTtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IC0oQHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZyAvIDMgKiAyKTtcblx0XHRcdFx0bWF4LXdpZHRoOiBjYWxjKDEyLjI1ZW0gKyAzNnB4KTtcblx0XHRcdFx0cGFkZGluZzogQHNwYWNpbmctMTAwO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuXHRcdFx0QHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZzogMy4yNWVtO1xuXHRcdFx0bGVmdDogdW5zZXQ7XG5cdFx0XHRtYXJnaW4tbGVmdDogLShAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nIC8gMyAqIDIpO1xuXHRcdFx0bWF4LXdpZHRoOiBjYWxjKDE1Ljc1ZW0gKyAzNnB4KTtcblx0XHR9XG5cdH1cbn1cbjwvc3R5bGU+XG4uL21vZHVsZXMvdXRpbHNcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHt0eXBlIFZhbGlkVmFyaWFudH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQgVkFCdXR0b24gZnJvbSAnLi9WQUJ1dHRvbi52dWUnO1xuaW1wb3J0IFZBRmFkZVRyYW5zaXRpb24gZnJvbSAnLi9WQUZhZGVUcmFuc2l0aW9uLnZ1ZSc7XG5pbXBvcnQgdXNlSTE4biwge2kxOG5WYXJpYW50fSBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VJMThuJztcbmltcG9ydCB1c2VVbmlxdWVJZCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VVbmlxdWVJZCc7XG5pbXBvcnQgdXNlU2h1ZmZsZWRWYXJpYW50IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVNodWZmbGVkVmFyaWFudCc7XG5pbXBvcnQge1ZBTElEX1ZBUklBTlRTLCBpbmZlcnJlZFZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJy4uL21lc3NhZ2VzLmpzb24nO1xuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuaW1wb3J0IHVzZURlZmF1bHQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlRGVmYXVsdCc7XG5cbmNvbnN0IHByb3BzID0gd2l0aERlZmF1bHRzKFxuXHRkZWZpbmVQcm9wczx7XG5cdFx0b3BlbjogYm9vbGVhbjtcblx0XHRkaXNhYmxlZD86IGJvb2xlYW47XG5cdFx0YXV0b0Nsb3NlPzogYm9vbGVhbjtcblx0fT4oKSxcblx0e1xuXHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRhdXRvQ2xvc2U6IGZhbHNlLFxuXHR9XG4pO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0KGU6ICd1cGRhdGU6b3BlbicsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICd1cGRhdGU6ZGlzYWJsZWQnLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAnc2VsZWN0JywgdmFyaWFudDogVmFsaWRWYXJpYW50KTogdm9pZDtcblx0KGU6ICdvcHRvdXQnKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IHByb21wdCA9IHJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuY29uc3QgdGl0bGVJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBkZXNjSWQgPSB1c2VVbmlxdWVJZCgpO1xuY29uc3QgaXNPcGVuID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnb3BlbicpO1xuY29uc3QgaXNEaXNhYmxlZCA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ2Rpc2FibGVkJyk7XG5jb25zdCBpc1ZhcmlhbnROYXJyb3dlZCA9IHVzZURlZmF1bHQoKCkgPT4gaW5mZXJyZWRWYXJpYW50LnZhbHVlICE9PSBudWxsKTtcbmNvbnN0IHNodWZmbGVkVmFyaWFudCA9IHVzZVNodWZmbGVkVmFyaWFudChpc1ZhcmlhbnROYXJyb3dlZCk7XG5cbmZ1bmN0aW9uIG9wdE91dEFuZENsb3NlKCkge1xuXHRlbWl0KCdvcHRvdXQnKTtcblx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdCh2YXJpYW50OiBWYWxpZFZhcmlhbnQpIHtcblx0aXNEaXNhYmxlZC52YWx1ZSA9IHRydWU7XG5cdGVtaXQoJ3NlbGVjdCcsIHZhcmlhbnQpO1xufVxuXG53YXRjaChwcm9tcHQsICgpID0+IHtcblx0Y29uc3QgZWxlbWVudCA9IHByb21wdC52YWx1ZTtcblx0aWYgKGVsZW1lbnQgIT09IG51bGwpIHtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXYpID0+IHtcblx0XHRcdC8vIERvIG5vdCBkaXNtaXNzIGlmIGFueSBidXR0b24gaXMgcHJlc3NlZCBvciB0aGUgcHJvbXB0IGlzIGRpc2FibGVkXG5cdFx0XHRpZiAoZXYuYnV0dG9ucyA9PT0gMCAmJiBwcm9wcy5hdXRvQ2xvc2UgJiYgIXByb3BzLmRpc2FibGVkKSB7XG5cdFx0XHRcdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxUcmFuc2l0aW9uIG5hbWU9XCJ2YS12YXJpYW50LXByb21wdFwiIGFwcGVhcj5cblx0XHQ8ZGl2XG5cdFx0XHR2LWlmPVwib3BlblwiXG5cdFx0XHRyZWY9XCJwcm9tcHRcIlxuXHRcdFx0Omxhbmc9XCJgemgtJHtpMThuVmFyaWFudH1gXCJcblx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRcIlxuXHRcdFx0cm9sZT1cImRpYWxvZ1wiXG5cdFx0XHRhcmlhLW1vZGFsPVwiZmFsc2VcIlxuXHRcdFx0OmFyaWEtbGFiZWxsZWRieT1cInRpdGxlSWRcIlxuXHRcdFx0OmFyaWEtZGVzY3JpYmVkYnk9XCJkZXNjSWRcIlxuXHRcdD5cblx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19jbG9zZVwiXG5cdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0aWNvbj1cImNsb3NlXCJcblx0XHRcdFx0OnRpdGxlPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdDphcmlhLWxhYmVsPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0QGNsaWNrPVwib3B0T3V0QW5kQ2xvc2VcIlxuXHRcdFx0Lz5cblx0XHRcdDxoMiA6aWQ9XCJ0aXRsZUlkXCIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGUgdmEtdGl0bGVcIj5cblx0XHRcdFx0e3sgdXNlSTE4bihpc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5oZWFkZXIuYWx0JyA6ICd2cC5oZWFkZXInKSB9fTxiciAvPlxuXHRcdFx0XHQ8VkFGYWRlVHJhbnNpdGlvbj5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0di1pZj1cIiFpc1ZhcmlhbnROYXJyb3dlZFwiXG5cdFx0XHRcdFx0XHQ6a2V5PVwic2h1ZmZsZWRWYXJpYW50XCJcblx0XHRcdFx0XHRcdDpsYW5nPVwiYHpoLSR7c2h1ZmZsZWRWYXJpYW50fWBcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGVfX3ZhcmlhbnRcIlxuXHRcdFx0XHRcdFx0Pnt7IG1lc3NhZ2VzLnZhcmlhbnRzW3NodWZmbGVkVmFyaWFudF0gfX08L3NwYW5cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdDwvVkFGYWRlVHJhbnNpdGlvbj5cblx0XHRcdDwvaDI+XG5cdFx0XHQ8cCA6aWQ9XCJkZXNjSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19kZXNjIHZhLXBhcmFcIj5cblx0XHRcdFx0e3sgdXNlSTE4bihpc1ZhcmlhbnROYXJyb3dlZCA/ICd2cC5tYWluLmFsdCcgOiAndnAubWFpbicpIH19XG5cdFx0XHQ8L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNcIj5cblx0XHRcdFx0PCEtLSBpbmZlcnJlZFZhcmlhbnQgaXMgbm9uLW51bGwsIGd1YXJkZWQgYnkgaXNWYXJpYW50TmFycm93ZWQgLS0+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdHYtZm9yPVwidmFyaWFudCBpbiBpc1ZhcmlhbnROYXJyb3dlZCAmJiBpbmZlcnJlZFZhcmlhbnQgIT09IG51bGxcblx0XHRcdFx0XHRcdD8gW2luZmVycmVkVmFyaWFudF1cblx0XHRcdFx0XHRcdDogVkFMSURfVkFSSUFOVFNcIlxuXHRcdFx0XHRcdDprZXk9XCJ2YXJpYW50XCJcblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIlxuXHRcdFx0XHRcdDpjbGFzcz1cInsndmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvbi0tcHJpbWFyeSc6IGlzVmFyaWFudE5hcnJvd2VkfVwiXG5cdFx0XHRcdFx0aW5kaWNhdG9yPVwiYXJyb3dOZXh0XCJcblx0XHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdFx0YWN0aW9uPVwicHJvZ3Jlc3NpdmVcIlxuXHRcdFx0XHRcdDpsYW5nPVwidmFyaWFudFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cInNlbGVjdCh2YXJpYW50KVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7eyBtZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSB9fVxuXHRcdFx0XHQ8L1ZBQnV0dG9uPlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHR2LWlmPVwiaXNWYXJpYW50TmFycm93ZWRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiXG5cdFx0XHRcdFx0aW5kaWNhdG9yPVwiYXJyb3dOZXh0XCJcblx0XHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdFx0YWN0aW9uPVwicHJvZ3Jlc3NpdmVcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJpc1ZhcmlhbnROYXJyb3dlZCA9IGZhbHNlXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLmJ1dHRvbi5vdGhlcicpIH19XG5cdFx0XHRcdDwvVkFCdXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxmb290ZXIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fZm9vdGVyXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIj5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5tYWluLmV4dCcpIH19XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdDwvZGl2PlxuXHQ8L1RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXRpdGxlIHtcblx0Ym9yZGVyOiAwOyAvLyBSZXNldFxuXHRwYWRkaW5nOiAwOyAvLyBSZXNldFxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG5cdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14eC1sYXJnZTtcblx0Zm9udC13ZWlnaHQ6IEBmb250LXdlaWdodC1ib2xkO1xuXHRtYXJnaW46IEBzcGFjaW5nLTUwIEBzcGFjaW5nLTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcbn1cblxuLnZhLXBhcmEge1xuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXHRtYXJnaW4tdG9wOiBAc3BhY2luZy01MDtcblx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctNTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcblxuXHQmLS1zdWJ0bGUge1xuXHRcdGNvbG9yOiBAY29sb3Itc3VidGxlO1xuXHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14LXNtYWxsO1xuXHRcdG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLTM1O1xuXHR9XG59XG5cbi52YS12YXJpYW50LXByb21wdCB7XG5cdGJveC1zaXppbmc6IEBib3gtc2l6aW5nLWJhc2U7XG5cdHotaW5kZXg6IEB6LWluZGV4LW92ZXJsYXk7XG5cdHBhZGRpbmc6IEBzcGFjaW5nLTEwMCBAc3BhY2luZy0xNTA7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bGVmdDogQHNwYWNpbmctaG9yaXpvbnRhbC1kaWFsb2c7XG5cdGJvdHRvbTogQHNwYWNpbmctdmVydGljYWwtZGlhbG9nO1xuXHR3aWR0aDogY2FsYygxMDAlIC0gQHNwYWNpbmctaG9yaXpvbnRhbC1kaWFsb2cgKiAyKTtcblx0bWF4LXdpZHRoOiAxOGVtO1xuXHRtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtKTtcblxuXHRvdmVyZmxvdzogYXV0bztcblx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogQGJhY2tncm91bmQtY29sb3ItYmFzZTtcblx0Ym9yZGVyOiBAYm9yZGVyLWJhc2U7XG5cdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cdGJveC1zaGFkb3c6IEBib3gtc2hhZG93LWRyb3AtbWVkaXVtO1xuXHRmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXN5c3RlbS1zYW5zO1xuXHRmb250LXNpemU6IDFyZW07IC8vIFJlc2V0XG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7IC8vIFJlc2V0XG5cblx0Jl9fY2xvc2Uge1xuXHRcdHBhZGRpbmc6IEBzcGFjaW5nLXNob3J0aGFuZC1idXR0b24taWNvbi1vbmx5O1xuXHRcdGZsb2F0OiByaWdodDtcblx0XHRtYXJnaW4tdG9wOiBAc3BhY2luZy01MDtcblx0XHRtYXJnaW4tcmlnaHQ6IC0oQHNwYWNpbmctaG9yaXpvbnRhbC1idXR0b24taWNvbi1vbmx5ICsgMXB4KTtcblx0fVxuXG5cdCZfX3RpdGxlIHtcblx0XHQmX192YXJpYW50IHtcblx0XHRcdGNvbG9yOiBAY29sb3ItcHJvZ3Jlc3NpdmU7XG5cdFx0fVxuXHR9XG5cblx0Jl9fb3B0aW9ucyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0bWFyZ2luOiBAc3BhY2luZy03NSBAc3BhY2luZy0wO1xuXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgQGJvcmRlci1jb2xvci1iYXNlO1xuXHRcdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cblx0XHQmX19idXR0b24ge1xuXHRcdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXNtYWxsO1xuXHRcdFx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogQGJhY2tncm91bmQtY29sb3ItaW50ZXJhY3RpdmUtc3VidGxlO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMDtcblxuXHRcdFx0Ji0tcHJpbWFyeSB7XG5cdFx0XHRcdGNvbG9yOiBAY29sb3ItcHJvZ3Jlc3NpdmU7XG5cdFx0XHR9XG5cblx0XHRcdCY6aG92ZXIsXG5cdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdGJvcmRlci1jb2xvcjogQGJvcmRlci1jb2xvci10cmFuc3BhcmVudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyogUHJvbXB0IHRyYW5zaXRpb24gZWZmZWN0ICovXG4udmEtdmFyaWFudC1wcm9tcHQtZW50ZXItYWN0aXZlLFxuLnZhLXZhcmlhbnQtcHJvbXB0LWxlYXZlLWFjdGl2ZSB7XG5cdHRyYW5zaXRpb24tcHJvcGVydHk6IEB0cmFuc2l0aW9uLXByb3BlcnR5LWZhZGU7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uLW1lZGl1bTtcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbi1zeXN0ZW07XG59XG5cbi52YS12YXJpYW50LXByb21wdC1lbnRlci1mcm9tLFxuLnZhLXZhcmlhbnQtcHJvbXB0LWxlYXZlLXRvIHtcblx0b3BhY2l0eTogMDtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IFtcIndpZHRoXCIsIFwiaGVpZ2h0XCJdXG5jb25zdCBfaG9pc3RlZF8yID0geyBrZXk6IDAgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwiTTIwIDE4aC0xLjQ0YS42MS42MSAwIDAxLS40LS4xMi44MS44MSAwIDAxLS4yMy0uMzFMMTcgMTVoLTVsLTEgMi41NGEuNzcuNzcgMCAwMS0uMjIuMy41OS41OSAwIDAxLS40LjE0SDlsNC41NS0xMS40N2gxLjg5em0tMy41My00LjMxTDE0Ljg5IDkuNWExMS42MiAxMS42MiAwIDAxLS4zOS0xLjI0cS0uMDkuMzctLjE5LjY5bC0uMTkuNTYtMS41OCA0LjE5em0tNi4zLTEuNThhMTMuNDMgMTMuNDMgMCAwMS0yLjkxLTEuNDEgMTEuNDYgMTEuNDYgMCAwMDIuODEtNS4zN0gxMlY0SDcuMzFhNCA0IDAgMDAtLjItLjU2QzYuODcgMi43OSA2LjYgMiA2LjYgMmwtMS40Ny41cy40Ljg5LjYgMS41SDB2MS4zM2gyLjE1QTExLjIzIDExLjIzIDAgMDA1IDEwLjdhMTcuMTkgMTcuMTkgMCAwMS01IDIuMXEuNTYuODIuODcgMS4zOGEyMy4yOCAyMy4yOCAwIDAwNS4yMi0yLjUxIDE1LjY0IDE1LjY0IDAgMDAzLjU2IDEuNzd6TTMuNjMgNS4zM2g0LjkxYTguMTEgOC4xMSAwIDAxLTIuNDUgNC40NSA5LjExIDkuMTEgMCAwMS0yLjQ2LTQuNDV6XCIgfSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLylcbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGtleTogMSB9XG5jb25zdCBfaG9pc3RlZF81ID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJtNC4zNCAyLjkzIDEyLjczIDEyLjczLTEuNDEgMS40MUwyLjkzIDQuMzV6XCIgfSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLylcbmNvbnN0IF9ob2lzdGVkXzYgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk0xNy4wNyA0LjM0IDQuMzQgMTcuMDdsLTEuNDEtMS40MUwxNS42NiAyLjkzelwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pXG5jb25zdCBfaG9pc3RlZF83ID0gW1xuICBfaG9pc3RlZF81LFxuICBfaG9pc3RlZF82XG5dXG5jb25zdCBfaG9pc3RlZF84ID0geyBrZXk6IDIgfVxuY29uc3QgX2hvaXN0ZWRfOSA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwiTTguNTkgMy40MiAxNC4xNyA5SDJ2MmgxMi4xN2wtNS41OCA1LjU5TDEwIDE4bDgtOC04LTh6XCIgfSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLylcbmNvbnN0IF9ob2lzdGVkXzEwID0gW1xuICBfaG9pc3RlZF85XG5dXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3ZnXCIsIHtcbiAgICBjbGFzczogXCJ2YS1pY29uLWJ1dHRvbl9faWNvblwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgXCJ4bWxuczp4bGlua1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgICB3aWR0aDogJHByb3BzLnNpemUsXG4gICAgaGVpZ2h0OiAkcHJvcHMuc2l6ZSxcbiAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgfSwgW1xuICAgICgkcHJvcHMuaWNvbiA9PT0gJ2xhbmcnKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBlc2xpbnQtZGlzYWJsZSBcIiksXG4gICAgICAgICAgX2hvaXN0ZWRfMyxcbiAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGVzbGludC1lbmFibGUgXCIpXG4gICAgICAgIF0pKVxuICAgICAgOiAoJHByb3BzLmljb24gPT09ICdjbG9zZScpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImdcIiwgX2hvaXN0ZWRfNCwgWy4uLl9ob2lzdGVkXzddKSlcbiAgICAgICAgOiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF84LCBbLi4uX2hvaXN0ZWRfMTBdKSlcbiAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi1iYjc3MzRiMVwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0ge1xuICBrZXk6IDEsXG4gIGNsYXNzOiBcInZhLWJ1dHRvbl9fdGV4dFwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInZhLWJ1dHRvblwiLCB7XG5cdFx0XHQndmEtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUnOiAkcHJvcHMuYWN0aW9uID09PSAncHJvZ3Jlc3NpdmUnLFxuXHRcdFx0J3ZhLWJ1dHRvbi0td2VpZ2h0LXF1aWV0JzogJHByb3BzLndlaWdodCA9PT0gJ3F1aWV0Jyxcblx0XHR9XSksXG4gICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKF9jdHguJGVtaXQoJ2NsaWNrJykpKVxuICB9LCBbXG4gICAgKCRwcm9wcy5pY29uICE9PSB1bmRlZmluZWQpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUljb25cIl0sIHtcbiAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgY2xhc3M6IFwidmEtYnV0dG9uX19pY29uXCIsXG4gICAgICAgICAgaWNvbjogJHByb3BzLmljb24sXG4gICAgICAgICAgc2l6ZTogMjBcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgIChfY3R4LiRzbG90c1snZGVmYXVsdCddKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgICAgICBdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgKCRwcm9wcy5pbmRpY2F0b3IgIT09IHVuZGVmaW5lZClcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBSWNvblwiXSwge1xuICAgICAgICAgIGtleTogMixcbiAgICAgICAgICBjbGFzczogXCJ2YS1idXR0b25fX2luZGljYXRvclwiLFxuICAgICAgICAgIGljb246ICRwcm9wcy5pbmRpY2F0b3IsXG4gICAgICAgICAgc2l6ZTogMTZcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gIF0sIDIgLyogQ0xBU1MgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiNzczNGIxXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLWZhZGVcIixcbiAgICBtb2RlOiBcIm91dC1pblwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gICAgXSksXG4gICAgXzogMyAvKiBGT1JXQVJERUQgKi9cbiAgfSkpXG59IiwgImNvbnN0IHNjcmlwdCA9IHt9O2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1iYjljNTc1MVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB7d2dVc2VyVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5cbi8vIEludGVyZmFjZSB2YXJpYW50IG9mIHZhcmlhbnQgcHJvbXB0XG5jb25zdCBpMThuVmFyaWFudCA9IGNvbXB1dGVkKCgpID0+IHtcblx0aWYgKHdnVXNlclZhcmlhbnQudmFsdWUgPT09ICd6aCcpIHtcblx0XHQvLyBObyBjb252ZXJzaW9uOiB1c2UgcmFuZG9tbHkgc2VsZWN0ZWQgdmFyaWFudFxuXHRcdHJldHVybiBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hhbnMnIDogJ2hhbnQnO1xuXHR9XG5cdGlmIChbJ3poLWhhbnQnLCAnemgtdHcnLCAnemgtaGsnLCAnemgtbW8nXS5pbmNsdWRlcyh3Z1VzZXJWYXJpYW50LnZhbHVlKSkge1xuXHRcdHJldHVybiAnaGFudCc7XG5cdH1cblxuXHRyZXR1cm4gJ2hhbnMnO1xufSk7XG5cbmZ1bmN0aW9uIHVzZUkxOG4oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCBjdXJyZW50TXNnc0dyb3VwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gbWVzc2FnZXNbaTE4blZhcmlhbnQudmFsdWVdO1xuXHRyZXR1cm4gY3VycmVudE1zZ3NHcm91cFtrZXldID8/IGtleTtcbn1cblxuZXhwb3J0IHt1c2VJMThuIGFzIGRlZmF1bHQsIGkxOG5WYXJpYW50fTtcbiIsICJ7XG5cdFwidmFyaWFudHNcIjoge1xuXHRcdFwiemgtY25cIjogXCLkuK3lm73lpKfpmYbnroDkvZNcIixcblx0XHRcInpoLXNnXCI6IFwi5paw5Yqg5Z2h566A5L2TXCIsXG5cdFx0XCJ6aC1teVwiOiBcIumprOadpeilv+S6mueugOS9k1wiLFxuXHRcdFwiemgtaGtcIjogXCLkuK3lnIvpppnmuK/nuYHpq5RcIixcblx0XHRcInpoLW1vXCI6IFwi5Lit5ZyL5r6z6ZaA57mB6auUXCIsXG5cdFx0XCJ6aC10d1wiOiBcIuS4reWci+iHuueBo+e5gemrlFwiXG5cdH0sXG5cdFwiaGFuc1wiOiB7XG5cdFx0XCJzcGFjZVwiOiBcIlwiLFxuXHRcdFwiY2xvc2VcIjogXCLlhbPpl61cIixcblx0XHRcInZwLmhlYWRlclwiOiBcIuaIkeS7rOaUr+aMgVwiLFxuXHRcdFwidnAuaGVhZGVyLmFsdFwiOiBcIuiusOS9j+atpOWPmOS9k++8n1wiLFxuXHRcdFwidnAubWFpblwiOiBcIumAieWPluWGheWuueeahOivreiogOWPmOS9k1wiLFxuXHRcdFwidnAubWFpbi5hbHRcIjogXCLku6XlkI7pg73kvb/nlKjmraTlj5jkvZPlkYjnjrDlhoXlrrlcIixcblx0XHRcInZwLm1haW4uZXh0XCI6IFwi5L+d5a2Y5oKo5YGP5aW955qE5Lit5paH6K+t6KiA5Y+Y5L2T77yM5Lul6YG/5YWN5pi+56S6566A57mB5re35p2C55qE5YaF5a6577yM5o+Q5L6b5pyA5L2z55qE6ZiF6K+75L2T6aqM44CCXCIsXG5cdFx0XCJ2cC5idXR0b24ub2tcIjogXCLnoa7lrppcIixcblx0XHRcInZwLmJ1dHRvbi5vdGhlclwiOiBcIuWFtuS7llwiXG5cdH0sXG5cdFwiaGFudFwiOiB7XG5cdFx0XCJzcGFjZVwiOiBcIlwiLFxuXHRcdFwiY2xvc2VcIjogXCLpl5zplolcIixcblx0XHRcInZwLmhlYWRlclwiOiBcIuaIkeWAkeaUr+aPtFwiLFxuXHRcdFwidnAuaGVhZGVyLmFsdFwiOiBcIuiomOS9j+atpOiuiumrlO+8n1wiLFxuXHRcdFwidnAubWFpblwiOiBcIumBuOWPluWFp+WuueeahOiqnuiogOiuiumrlFwiLFxuXHRcdFwidnAubWFpbi5hbHRcIjogXCLku6Xlvozpg73kvb/nlKjmraTororpq5TlkYjnj77lhaflrrlcIixcblx0XHRcInZwLm1haW4uZXh0XCI6IFwi5YSy5a2Y5oKo5YGP5aW955qE5Lit5paH6Kqe6KiA6K6K6auU77yM5Lul6YG/5YWN6aGv56S657Ch57mB5re36Zuc55qE5YWn5a6577yM5o+Q5L6b5pyA5L2z55qE6Zax6K6A6auU6amX44CCXCIsXG5cdFx0XCJ2cC5idXR0b24ub2tcIjogXCLnorrlrppcIixcblx0XHRcInZwLmJ1dHRvbi5vdGhlclwiOiBcIuWFtuS7llwiXG5cdH1cbn1cbiIsICJpbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZn0gZnJvbSAndnVlJztcblxuY29uc3QgVkFMSURfVkFSSUFOVFMgPSBbJ3poLWNuJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3JywgJ3poLWhrJywgJ3poLW1vJ10gYXMgY29uc3Q7XG5cbi8vIFdyYXAgd2dVc2VyVmFyaWFudCBpbiBhIHJlZiBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuLy8gSXQgaGFzIG5vIHJlYWN0aXZpdHkgaW4gcHJvZHVjdGlvbi4gKGNoYW5nZXMgdG8gd2dVc2VyVmFyaWFudCB3aWxsIG5vdCBiZSByZWZsZWN0ZWQpXG4vLyB3Z1VzZXJWYXJpYW50IGNhbiBiZSBudWxsLCBzbyBmYWxscyBiYWNrIHRvIGFuIGVtcHR5IHN0cmluZy5cbmNvbnN0IHdnVXNlclZhcmlhbnQgPSByZWYobXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpID8/ICcnKTtcblxuZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKTogYm9vbGVhbiB7XG5cdC8vIEJyb3dzZXIgc3VwcG9ydDpcblx0Ly8gQ2hyb21pdW0gb24gc29tZSBBbmRyb2lkIGRldmljZSAoZS5nLiBTYW1zdW5nKSBoYXMgXCIoaG92ZXI6IGhvdmVyKVwiIHNldFxuXHQvLyBTbyBjaGVjayBwb2ludGVyIHRvZ2V0aGVyXG5cdHJldHVybiBtYXRjaE1lZGlhKCcoaG92ZXI6IG5vbmUpLCAocG9pbnRlcjogY29hcnNlKScpLm1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGdldE1vdW50UG9pbnQoKTogRWxlbWVudCB7XG5cdHN3aXRjaCAobXcuY29uZmlnLmdldCgnc2tpbicpKSB7XG5cdFx0Y2FzZSAndmVjdG9yLTIwMjInOlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1wYWdlLWNvbnRhaW5lcicpWzBdID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0Y2FzZSAnZ29uZ2JpJzpcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctY29udGVudC1ibG9jaycpID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBkb2N1bWVudC5ib2R5O1xuXHR9XG59XG5cbmNvbnN0IGluZmVycmVkVmFyaWFudCA9IGNvbXB1dGVkKCgpID0+IHtcblx0aWYgKChWQUxJRF9WQVJJQU5UUyBhcyBSZWFkb25seUFycmF5PHN0cmluZz4pLmluY2x1ZGVzKHdnVXNlclZhcmlhbnQudmFsdWUpKSB7XG5cdFx0cmV0dXJuIHdnVXNlclZhcmlhbnQudmFsdWUgYXMgVmFsaWRWYXJpYW50O1xuXHR9XG5cdHJldHVybiBudWxsO1xufSk7XG5cbi8qKlxuICogU2h1ZmZsZSBiZXR3ZWVuIGFsbCB2YWxpZCB2YXJpYW50cy5cbiAqXG4gKiBAcGFyYW0gbGFzdCBsYXN0IHNodWZmbGVkIHZhcmlhbnQsIHVzZWQgdG8gcHJldmVudCBkdXBsaWNhdGlvbnNcbiAqIEByZXR1cm5zIHNodWZmbGVkIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gc2h1ZmZsZVZhcmlhbnQobGFzdD86IFZhbGlkVmFyaWFudCk6IFZhbGlkVmFyaWFudCB7XG5cdGNvbnN0IHRhcmdldEFycmF5ID0gWy4uLlZBTElEX1ZBUklBTlRTXS5maWx0ZXIoKGkpID0+IHtcblx0XHRyZXR1cm4gaSAhPT0gbGFzdDtcblx0fSk7XG5cdGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGFyZ2V0QXJyYXkubGVuZ3RoKTtcblx0cmV0dXJuIHRhcmdldEFycmF5W3JhbmRvbUluZGV4XSE7XG59XG5cbmV4cG9ydCB7VkFMSURfVkFSSUFOVFMsIHdnVXNlclZhcmlhbnQsIGlzTW9iaWxlRGV2aWNlLCBnZXRNb3VudFBvaW50LCBpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fTtcbiIsICJsZXQgY291bnRlciA9IDA7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pcXVlIGVsZW1lbnQgSUQgb24gZWFjaCBjYWxsLlxuICpcbiAqIEByZXR1cm5zIGlkXG4gKi9cbmZ1bmN0aW9uIHVzZVVuaXF1ZUlkKCk6IHN0cmluZyB7XG5cdHJldHVybiBgdmEtJHtjb3VudGVyKyt9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVW5pcXVlSWQ7XG4iLCAiaW1wb3J0IHtSZWYsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCB7aW5mZXJyZWRWYXJpYW50LCBzaHVmZmxlVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5cbmNvbnN0IElOVEVSVkFMID0gMyAqIDEwMDA7XG5cbi8qKlxuICogUmV0dXJuIGEgcmVmIHdoaWNoIHNodWZmbGUgYmV0d2VlbiBhbGwgcG9zc2libGUgdmFyaWFudHMuXG4gKlxuICogQHBhcmFtIGlzRnJlZXplZCBzaG91bGQgc2h1ZmZsaW5nIHBhdXNlIG9yIG5vdFxuICovXG5mdW5jdGlvbiB1c2VTaHVmZmxlZFZhcmlhbnQoaXNGcmVlemVkOiBSZWY8Ym9vbGVhbj4pOiBSZWY8VmFsaWRWYXJpYW50PiB7XG5cdGNvbnN0IHJlc3VsdCA9IHJlZjxWYWxpZFZhcmlhbnQ+KHNodWZmbGVWYXJpYW50KCkpO1xuXHRsZXQgaWQ6IG51bWJlcjtcblxuXHR3YXRjaChcblx0XHRpc0ZyZWV6ZWQsXG5cdFx0KG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHRpZiAobmV3VmFsdWUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZnJlZXplIGF0IGluZmVycmVkIHZhcmlhbnQgYXQgYSBiZXN0IGVmZm9ydFxuXHRcdFx0XHQvLyBUaGlzIHNob3VsZCBiZSBtb3N0IGNhc2VzXG5cdFx0XHRcdHJlc3VsdC52YWx1ZSA9IGluZmVycmVkVmFyaWFudC52YWx1ZSA/PyBzaHVmZmxlVmFyaWFudCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZSA9IHNodWZmbGVWYXJpYW50KHJlc3VsdC52YWx1ZSk7XG5cdFx0XHRcdH0sIElOVEVSVkFMKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtpbW1lZGlhdGU6IHRydWV9XG5cdCk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2h1ZmZsZWRWYXJpYW50O1xuIiwgImltcG9ydCB7V3JpdGFibGVDb21wdXRlZFJlZiwgY29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5cbi8qKlxuICogUmV0dXJuIGEgY29tcHV0ZWQgcHJvcGVydHkgdGhhdCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHByb3AgdmFsdWUgd2hlbiBpcyBhY2Nlc3NlZFxuICogYW5kIGZpcmVzIGFuIGV2ZW50IHdoZW4gaXMgc2V0LiBVc2VkIHdpdGggdi1tb2RlbC5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgcHJvcHMgZmllbGQgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSBlbWl0IGVtaXQgZnVuY3Rpb24gb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgdGhlIHByb3BcbiAqIEByZXR1cm4gd3JhcHBlZCBjb21wdXRlciBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiB1c2VNb2RlbFdyYXBwZXI8VCBleHRlbmRzIHN0cmluZywgUCBleHRlbmRzIFJlY29yZDxULCB1bmtub3duPj4oXG5cdHByb3BzOiBQLFxuXHRlbWl0OiAoZXZlbnQ6IGB1cGRhdGU6JHtUfWAsIHZhbHVlOiBQW1RdKSA9PiB2b2lkLFxuXHRuYW1lOiBUID0gJ21vZGVsVmFsdWUnIGFzIFRcbik6IFdyaXRhYmxlQ29tcHV0ZWRSZWY8UFtUXT4ge1xuXHRyZXR1cm4gY29tcHV0ZWQoe1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiBwcm9wc1tuYW1lXTtcblx0XHR9LFxuXHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0ZW1pdChgdXBkYXRlOiR7bmFtZX1gLCB2YWx1ZSk7XG5cdFx0fSxcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vZGVsV3JhcHBlcjtcbiIsICJpbXBvcnQge1JlZiwgV2F0Y2hTb3VyY2UsIGNvbXB1dGVkLCBzaGFsbG93UmVmLCB3YXRjaH0gZnJvbSAndnVlJztcblxuLyoqXG4gKiBDcmVhdGUgYSByZWYgdGhhdCwgY2FuIGJlIGluZGVwZW5kZW50bHkgdXBkYXRlZCwgYnV0IHdoZW4gaXRzIGRlZmF1bHRcbiAqIHZhbHVlIGNoYW5nZXMsIGl0IGlzIHJlc3RvcmVkIHRvIGl0cyAobmV3KSBkZWZhdWx0IHZhbHVlLlxuICpcbiAqIFVzZWQgZm9yIGRlYnVnZ2luZy5cbiAqL1xuZnVuY3Rpb24gdXNlRGVmYXVsdDxUPihkZWZhdWx0VmFsdWU6IFdhdGNoU291cmNlPFQ+KTogUmVmPFQ+IHtcblx0Y29uc3QgcmVhbFJlZiA9IHNoYWxsb3dSZWY8VD4odHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRWYWx1ZSgpIDogZGVmYXVsdFZhbHVlLnZhbHVlKTtcblxuXHR3YXRjaChcblx0XHRkZWZhdWx0VmFsdWUsXG5cdFx0KG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHRyZWFsUmVmLnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0fSxcblx0XHR7ZGVlcDogdHJ1ZX1cblx0KTtcblxuXHRyZXR1cm4gY29tcHV0ZWQoe1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiByZWFsUmVmLnZhbHVlO1xuXHRcdH0sXG5cdFx0c2V0KG5ld1ZhbHVlKSB7XG5cdFx0XHRyZWFsUmVmLnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0fSxcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURlZmF1bHQ7XG4iLCAiaW1wb3J0IHsgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTVhNDRjYzc1XCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJsYW5nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCIsIFwiYXJpYS1kZXNjcmliZWRieVwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF8zID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJiclwiLCBudWxsLCBudWxsLCAtMSAvKiBIT0lTVEVEICovKSlcbmNvbnN0IF9ob2lzdGVkXzQgPSBbXCJsYW5nXCJdXG5jb25zdCBfaG9pc3RlZF81ID0gW1wiaWRcIl1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zXCIgfVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX2Zvb3RlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzggPSB7IGNsYXNzOiBcInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UcmFuc2l0aW9uLCB7XG4gICAgbmFtZTogXCJ2YS12YXJpYW50LXByb21wdFwiLFxuICAgIGFwcGVhcjogXCJcIlxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgKCRwcm9wcy5vcGVuKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgcmVmOiBcInByb21wdFwiLFxuICAgICAgICAgICAgbGFuZzogYHpoLSR7JHNldHVwLmkxOG5WYXJpYW50fWAsXG4gICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdFwiLFxuICAgICAgICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgICAgICAgIFwiYXJpYS1tb2RhbFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAkc2V0dXAudGl0bGVJZCxcbiAgICAgICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiAkc2V0dXAuZGVzY0lkXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19jbG9zZVwiLFxuICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICB0aXRsZTogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgb25DbGljazogJHNldHVwLm9wdE91dEFuZENsb3NlXG4gICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJ0aXRsZVwiLCBcImFyaWEtbGFiZWxcIiwgXCJkaXNhYmxlZFwiXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaDJcIiwge1xuICAgICAgICAgICAgICBpZDogJHNldHVwLnRpdGxlSWQsXG4gICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZSB2YS10aXRsZVwiXG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgPyAndnAuaGVhZGVyLmFsdCcgOiAndnAuaGVhZGVyJykpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgICBfaG9pc3RlZF8zLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFGYWRlVHJhbnNpdGlvblwiXSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICghJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkKVxuICAgICAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJHNldHVwLnNodWZmbGVkVmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5zaHVmZmxlZFZhcmlhbnR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZV9fdmFyaWFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbJHNldHVwLnNodWZmbGVkVmFyaWFudF0pLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF80KSlcbiAgICAgICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8yKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIHtcbiAgICAgICAgICAgICAgaWQ6ICRzZXR1cC5kZXNjSWQsXG4gICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19kZXNjIHZhLXBhcmFcIlxuICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgPyAndnAubWFpbi5hbHQnIDogJ3ZwLm1haW4nKSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzUpLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgaW5mZXJyZWRWYXJpYW50IGlzIG5vbi1udWxsLCBndWFyZGVkIGJ5IGlzVmFyaWFudE5hcnJvd2VkIFwiKSxcbiAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgJiYgJHNldHVwLmluZmVycmVkVmFyaWFudCAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBbJHNldHVwLmluZmVycmVkVmFyaWFudF1cblx0XHRcdFx0XHRcdDogJHNldHVwLlZBTElEX1ZBUklBTlRTLCAodmFyaWFudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICAgIGtleTogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1widmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiLCB7J3ZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b24tLXByaW1hcnknOiAkc2V0dXAuaXNWYXJpYW50TmFycm93ZWR9XSksXG4gICAgICAgICAgICAgICAgICBpbmRpY2F0b3I6IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgICAgbGFuZzogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5zZWxlY3QodmFyaWFudCkpXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfOiAyIC8qIERZTkFNSUMgKi9cbiAgICAgICAgICAgICAgICB9LCAxMDMyIC8qIFBST1BTLCBEWU5BTUlDX1NMT1RTICovLCBbXCJjbGFzc1wiLCBcImxhbmdcIiwgXCJkaXNhYmxlZFwiLCBcIm9uQ2xpY2tcIl0pKVxuICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSksXG4gICAgICAgICAgICAgICgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQpXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvcjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID0gZmFsc2UpKVxuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5idXR0b24ub3RoZXInKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZm9vdGVyXCIsIF9ob2lzdGVkXzcsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfOCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbi5leHQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9KSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0LnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNWE0NGNjNzVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IFZBQnV0dG9uIGZyb20gJy4vVkFCdXR0b24udnVlJztcbmltcG9ydCBWQVNlbGVjdCBmcm9tICcuL1ZBU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgdXNlSTE4biwge2kxOG5WYXJpYW50fSBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VJMThuJztcbmltcG9ydCB1c2VVbmlxdWVJZCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VVbmlxdWVJZCc7XG5pbXBvcnQge1ZBTElEX1ZBUklBTlRTLCBpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcbmltcG9ydCB1c2VEZWZhdWx0IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZURlZmF1bHQnO1xuXG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhcblx0ZGVmaW5lUHJvcHM8e1xuXHRcdG9wZW46IGJvb2xlYW47XG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHR9PigpLFxuXHR7XG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHR9XG4pO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0KGU6ICd1cGRhdGU6b3BlbicsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICd1cGRhdGU6ZGlzYWJsZWQnLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAnc2VsZWN0JywgdmFyaWFudDogVmFsaWRWYXJpYW50KTogdm9pZDtcblx0KGU6ICdvcHRvdXQnKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IHByb21wdCA9IHJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuY29uc3QgdGl0bGVJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBzZWxlY3RlZFZhcmlhbnQgPSB1c2VEZWZhdWx0KCgpID0+IGluZmVycmVkVmFyaWFudC52YWx1ZSA/PyBzaHVmZmxlVmFyaWFudCgpKTtcbmNvbnN0IGlzT3BlbiA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ29wZW4nKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdkaXNhYmxlZCcpO1xuXG5mdW5jdGlvbiBvcHRPdXRBbmRDbG9zZSgpIHtcblx0ZW1pdCgnb3B0b3V0Jyk7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QodmFyaWFudDogVmFsaWRWYXJpYW50KSB7XG5cdGlzRGlzYWJsZWQudmFsdWUgPSB0cnVlO1xuXHRlbWl0KCdzZWxlY3QnLCB2YXJpYW50KTtcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxUcmFuc2l0aW9uIG5hbWU9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIiBhcHBlYXI+XG5cdFx0PGRpdlxuXHRcdFx0di1pZj1cIm9wZW5cIlxuXHRcdFx0cmVmPVwicHJvbXB0XCJcblx0XHRcdDpsYW5nPVwiYHpoLSR7aTE4blZhcmlhbnR9YFwiXG5cdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiXG5cdFx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRcdGFyaWEtbW9kYWw9XCJmYWxzZVwiXG5cdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyXCI+XG5cdFx0XHRcdDxoMiA6aWQ9XCJ0aXRsZUlkXCIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fdGl0bGUgdmEtdGl0bGVcIj5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5tYWluJykgfX1cblx0XHRcdFx0PC9oMj5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fY2xvc2VcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRpY29uPVwiY2xvc2VcIlxuXHRcdFx0XHRcdDp0aXRsZT1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHRcdDphcmlhLWxhYmVsPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cIm9wdE91dEFuZENsb3NlXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpblwiPlxuXHRcdFx0XHQ8VkFTZWxlY3Rcblx0XHRcdFx0XHR2LW1vZGVsPVwic2VsZWN0ZWRWYXJpYW50XCJcblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fc2VsZWN0XCJcblx0XHRcdFx0XHQ6bGFuZz1cInNlbGVjdGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdDphcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZUlkXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxvcHRpb24gdi1mb3I9XCJ2YXJpYW50IGluIFZBTElEX1ZBUklBTlRTXCIgOmtleT1cInZhcmlhbnRcIiA6dmFsdWU9XCJ2YXJpYW50XCIgOmxhbmc9XCJ2YXJpYW50XCI+XG5cdFx0XHRcdFx0XHR7eyBtZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSB9fVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQ8L1ZBU2VsZWN0PlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fYWN0aW9uXCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0aWNvbj1cImFycm93TmV4dFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cInNlbGVjdChzZWxlY3RlZFZhcmlhbnQpXCJcblx0XHRcdFx0XHQ+e3sgdXNlSTE4bigndnAuYnV0dG9uLm9rJykgfX08L1ZBQnV0dG9uXG5cdFx0XHRcdD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGZvb3RlciBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fZm9vdGVyXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIj5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5tYWluLmV4dCcpIH19XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdDwvZGl2PlxuXHQ8L1RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXRpdGxlIHtcblx0Ym9yZGVyOiAwOyAvLyBSZXNldFxuXHRwYWRkaW5nOiAwOyAvLyBSZXNldFxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG5cdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14eC1sYXJnZTtcblx0Zm9udC13ZWlnaHQ6IEBmb250LXdlaWdodC1ib2xkO1xuXHRtYXJnaW46IEBzcGFjaW5nLTUwIEBzcGFjaW5nLTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcbn1cblxuLnZhLXBhcmEge1xuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXHRtYXJnaW4tdG9wOiBAc3BhY2luZy01MDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXG5cdCYtLXN1YnRsZSB7XG5cdFx0Y29sb3I6IEBjb2xvci1zdWJ0bGU7XG5cdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXgtc21hbGw7XG5cdFx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMzU7XG5cdH1cbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZSB7XG5cdGJveC1zaXppbmc6IEBib3gtc2l6aW5nLWJhc2U7XG5cdHotaW5kZXg6IEB6LWluZGV4LW92ZXJsYXk7XG5cdHBhZGRpbmc6IEBzcGFjaW5nLTUwIEBzcGFjaW5nLTEwMDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiBAc3BhY2luZy0wO1xuXHRyaWdodDogQHNwYWNpbmctMDtcblx0Ym90dG9tOiBAc3BhY2luZy0wO1xuXHRtYXJnaW46IEBzcGFjaW5nLTAgYXV0bztcblx0d2lkdGg6IDEwMCU7XG5cdG1heC13aWR0aDogNjAwcHg7XG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXG5cdG92ZXJmbG93OiBhdXRvO1xuXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuXHRib3JkZXI6IEBib3JkZXItYmFzZTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblx0Ym94LXNoYWRvdzogQGJveC1zaGFkb3ctZHJvcC1tZWRpdW07XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc3lzdGVtLXNhbnM7XG5cdGZvbnQtc2l6ZTogMXJlbTsgLy8gUmVzZXRcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDsgLy8gUmVzZXRcblxuXHQmX19oZWFkZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdCZfX3RpdGxlIHtcblx0XHRcdGZsZXg6IDE7XG5cdFx0XHRmb250LXNpemU6IEBmb250LXNpemUtbWVkaXVtO1xuXHRcdH1cblxuXHRcdCZfX2Nsb3NlIHtcblx0XHRcdHBhZGRpbmc6IEBzcGFjaW5nLXNob3J0aGFuZC1idXR0b24taWNvbi1vbmx5O1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdFx0fVxuXHR9XG5cblx0Jl9fbWFpbiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRtYXJnaW4tdG9wOiBAc3BhY2luZy0yNTtcblxuXHRcdCZfX3NlbGVjdCB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IEBzcGFjaW5nLTc1O1xuXHRcdFx0ZmxleDogMTtcblx0XHR9XG5cblx0XHQmX19hY3Rpb24ge1xuXHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0fVxuXHR9XG5cblx0Jl9fY2xvc2Uge1xuXHRcdHBhZGRpbmc6IEBzcGFjaW5nLXNob3J0aGFuZC1idXR0b24taWNvbi1vbmx5O1xuXHRcdGZsb2F0OiByaWdodDtcblx0XHRtYXJnaW4tcmlnaHQ6IC0oQHNwYWNpbmctaG9yaXpvbnRhbC1idXR0b24taWNvbi1vbmx5ICsgMXB4KTtcblx0fVxufVxuXG4vKiBQcm9tcHQgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtZW50ZXItYWN0aXZlLFxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1sZWF2ZS1hY3RpdmUge1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBAdHJhbnNpdGlvbi1wcm9wZXJ0eS1sYXlvdXQ7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uLW1lZGl1bTtcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbi1zeXN0ZW07XG59XG5cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtZW50ZXItZnJvbSxcbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtbGVhdmUtdG8ge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59XG48L3N0eWxlPlxuLi4vbW9kdWxlcy91dGlsc1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgdXNlTW9kZWxXcmFwcGVyIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlcic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRtb2RlbFZhbHVlOiBzdHJpbmc7XG59PigpO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0KGU6ICd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xufT4oKTtcblxuY29uc3QgbW9kZWxWYWx1ZSA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8c2VsZWN0IHYtbW9kZWw9XCJtb2RlbFZhbHVlXCIgY2xhc3M9XCJ2YS1zZWxlY3RcIj5cblx0XHQ8c2xvdCAvPlxuXHQ8L3NlbGVjdD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtc2VsZWN0IHtcblx0LnNlbGVjdF9faGFuZGxlKCk7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodCBAc3BhY2luZy03NTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1pbWFnZTogQGljb24tZXhwYW5kO1xuXHRiYWNrZ3JvdW5kLXNpemU6IEBzaXplLWljb24teC1zbWFsbDtcblxuXHQmOmRpc2FibGVkIHtcblx0XHQuc2VsZWN0X19oYW5kbGUtLWRpc2FibGVkKCk7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogQGljb24tZXhwYW5kLWRpc2FibGVkO1xuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSwgd2hpY2ggc2V0cyBhbiBvcGFjaXR5IGxlc3MgdGhhbiAxIGZvciBkaXNhYmxlZCBzZWxlY3QgZWxlbWVudHMuXG5cdFx0b3BhY2l0eTogQG9wYWNpdHktYmFzZTtcblx0XHRjdXJzb3I6IEBjdXJzb3Itbm90LWFsbG93ZWQ7XG5cdH1cblxuXHQmOmVuYWJsZWQge1xuXHRcdC5zZWxlY3RfX2hhbmRsZS0tZW5hYmxlZCgpO1xuXHR9XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IHJlbmRlclNsb3QgYXMgX3JlbmRlclNsb3QsIHZNb2RlbFNlbGVjdCBhcyBfdk1vZGVsU2VsZWN0LCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gX3dpdGhEaXJlY3RpdmVzKChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzZWxlY3RcIiwge1xuICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5tb2RlbFZhbHVlKSA9ICRldmVudCkpLFxuICAgIGNsYXNzOiBcInZhLXNlbGVjdFwiXG4gIH0sIFtcbiAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gIF0sIDUxMiAvKiBORUVEX1BBVENIICovKSksIFtcbiAgICBbX3ZNb2RlbFNlbGVjdCwgJHNldHVwLm1vZGVsVmFsdWVdXG4gIF0pXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYzliNDY0NjBcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNWNjNzg2NWJcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IFtcImxhbmdcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5cIiB9XG5jb25zdCBfaG9pc3RlZF81ID0gW1widmFsdWVcIiwgXCJsYW5nXCJdXG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2Zvb3RlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UcmFuc2l0aW9uLCB7XG4gICAgbmFtZTogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIixcbiAgICBhcHBlYXI6IFwiXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICgkcHJvcHMub3BlbilcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHJlZjogXCJwcm9tcHRcIixcbiAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5pMThuVmFyaWFudH1gLFxuICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIsXG4gICAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJhcmlhLW1vZGFsXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMlwiLCB7XG4gICAgICAgICAgICAgICAgaWQ6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX190aXRsZSB2YS10aXRsZVwiXG4gICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4nKSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzMpLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fY2xvc2VcIixcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vcHRPdXRBbmRDbG9zZVxuICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJ0aXRsZVwiLCBcImFyaWEtbGFiZWxcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQVNlbGVjdFwiXSwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkVmFyaWFudCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX3NlbGVjdFwiLFxuICAgICAgICAgICAgICAgIGxhbmc6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAkc2V0dXAudGl0bGVJZFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAuVkFMSURfVkFSSUFOVFMsICh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwib3B0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgbGFuZzogdmFyaWFudFxuICAgICAgICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzUpKVxuICAgICAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcImxhbmdcIiwgXCJkaXNhYmxlZFwiLCBcImFyaWEtbGFiZWxsZWRieVwiXSksXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgkc2V0dXAuc2VsZWN0KCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpKSlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAuYnV0dG9uLm9rJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJmb290ZXJcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF83LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluLmV4dCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi01Y2M3ODY1YlwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIFRlbGVwb3J0IGFzIF9UZWxlcG9ydCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIFtcbiAgICAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RlbGVwb3J0LCB7IHRvOiAkc2V0dXAuZGVza3RvcE1vdW50UG9pbnQgfSwgW1xuICAgICAgKCEkc2V0dXAuaXNNb2JpbGUpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBVmFyaWFudFByb21wdFwiXSwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICAgICAgICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLmlzRGlzYWJsZWQsXG4gICAgICAgICAgICBcIm9uVXBkYXRlOmRpc2FibGVkXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzRGlzYWJsZWQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICBcImF1dG8tY2xvc2VcIjogZmFsc2UsXG4gICAgICAgICAgICBvbk9wdG91dDogJHNldHVwLm9uT3B0T3V0LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICRzZXR1cC5zZXRWYXJpYW50XG4gICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcImRpc2FibGVkXCJdKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0sIDggLyogUFJPUFMgKi8sIFtcInRvXCJdKSksXG4gICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBUZWxlcG9ydCB0byBib2R5IGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIGZsb2F0ZWQgYXQgYm90dG9tIFwiKSxcbiAgICAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RlbGVwb3J0LCB7IHRvOiBcImJvZHlcIiB9LCBbXG4gICAgICAoJHNldHVwLmlzTW9iaWxlKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQVZhcmlhbnRQcm9tcHRNb2JpbGVcIl0sIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5pc0Rpc2FibGVkLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpkaXNhYmxlZFwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc0Rpc2FibGVkKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgb25PcHRvdXQ6ICRzZXR1cC5vbk9wdE91dCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAkc2V0dXAuc2V0VmFyaWFudFxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSlcbiAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxlQUF3QkMsUUFBQSxLQUFBOztBQ0N4QixJQUFBQyxlQUFrQkQsUUFBQSxLQUFBO0FBQ2xCLElBQUFFLG9CQUFpRUYsUUFBQSx3QkFBQTs7QUNEakUsSUFBQUcsZUFBeUJILFFBQUEsS0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHpCLElBQUFJLGNBQXlLSixRQUFBLEtBQUE7QUFFekssSUFBTUssYUFBYSxDQUFDLFNBQVMsUUFBUTtBQUNyQyxJQUFNQyxhQUFhO0VBQUVDLEtBQUs7QUFBRTtBQUM1QixJQUFNQyxhQUEwQixvQkFBQUosWUFBQUs7RUFBb0I7RUFBUTtJQUFFQyxHQUFHO0VBQWdoQjtFQUFHO0VBQU07O0FBQWdCO0FBQzFtQixJQUFNQyxhQUFhO0VBQUVKLEtBQUs7QUFBRTtBQUM1QixJQUFNSyxhQUEwQixvQkFB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TzBILGFBQWNuRztNQUNoRjJLLFVBQVVsTSxPQUFPNEw7TUFDakJPLFVBQVVuTSxPQUFPd0w7SUFDbkIsR0FBRyxNQUFNLEdBQWUsQ0FBQyxRQUFRLFVBQVUsQ0FBQyxNQUFBLEdBQzVDTSxhQUFBbEwsb0JBQW9CLFFBQVEsSUFBSSxDQUFBLENBQ3JDLEVBQUE7SUFDQTs7RUFBd0I7QUFDN0I7O0FDakMyU3dMLFlBQU94TSxTQUFTbU07QUFBT0ssWUFBT3RMLFNBQVM7QUFBa0MsSUFBT3VMLGVBQVFEOztBekJHblksSUFBTUUsT0FBT3ZJLFNBQVN3SSxjQUFjLEtBQUs7QUFDekN4SSxTQUFTRSxLQUFLdUksT0FBT0YsSUFBSTtDQUFBLEdBQ3pCN04sYUFBQWdPLFdBQVVKLFlBQUcsRUFBRUssTUFBTUosSUFBSTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3Z1ZTIyIiwgInJlcXVpcmUiLCAiaW1wb3J0X3Z1ZTIwIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF92dWUxMiIsICJpbXBvcnRfdnVlMiIsICJfaG9pc3RlZF8xIiwgIl9ob2lzdGVkXzIiLCAia2V5IiwgIl9ob2lzdGVkXzMiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImQiLCAiX2hvaXN0ZWRfNCIsICJfaG9pc3RlZF81IiwgIl9ob2lzdGVkXzYiLCAiX2hvaXN0ZWRfNyIsICJfaG9pc3RlZF84IiwgIl9ob2lzdGVkXzkiLCAiX2hvaXN0ZWRfMTAiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjbGFzcyIsICJ4bWxucyIsICJ3aWR0aCIsICJzaXplIiwgImhlaWdodCIsICJ2aWV3Qm94IiwgImljb24iLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgIlZBSWNvbl9kZWZhdWx0IiwgIl9fZmlsZSIsICJWQUljb25fZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTQiLCAiX2hvaXN0ZWRfMTIiLCAicmVuZGVyMiIsICJub3JtYWxpemVDbGFzcyIsICJhY3Rpb24iLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiJGV2ZW50IiwgIiRlbWl0IiwgImNyZWF0ZUJsb2NrIiwgIiRzbG90cyIsICJyZW5kZXJTbG90IiwgImluZGljYXRvciIsICJWQUJ1dHRvbl9kZWZhdWx0IiwgIl9fc2NvcGVJZCIsICJWQUJ1dHRvbl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNSIsICJyZW5kZXIzIiwgIlRyYW5zaXRpb24iLCAibmFtZSIsICJtb2RlIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJfIiwgInNjcmlwdCIsICJWQUZhZGVUcmFuc2l0aW9uX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTciLCAibWVzc2FnZXNfZGVmYXVsdCIsICJ2YXJpYW50cyIsICJoYW5zIiwgInNwYWNlIiwgImNsb3NlIiwgImhhbnQiLCAiaW1wb3J0X3Z1ZTYiLCAiVkFMSURfVkFSSUFOVFMiLCAid2dVc2VyVmFyaWFudCIsICJyZWYiLCAiX213JGNvbmZpZyRnZXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc01vYmlsZURldmljZSIsICJtYXRjaE1lZGlhIiwgIm1hdGNoZXMiLCAiZ2V0TW91bnRQb2ludCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImJvZHkiLCAicXVlcnlTZWxlY3RvciIsICJpbmZlcnJlZFZhcmlhbnQiLCAiY29tcHV0ZWQiLCAiaW5jbHVkZXMiLCAidmFsdWUiLCAic2h1ZmZsZVZhcmlhbnQiLCAibGFzdCIsICJ0YXJnZXRBcnJheSIsICJmaWx0ZXIiLCAiaSIsICJyYW5kb21JbmRleCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJsZW5ndGgiLCAiaTE4blZhcmlhbnQiLCAidXNlSTE4biIsICJfY3VycmVudE1zZ3NHcm91cCRrZXkiLCAiY3VycmVudE1zZ3NHcm91cCIsICJjb3VudGVyIiwgInVzZVVuaXF1ZUlkIiwgImNvbmNhdCIsICJ1c2VVbmlxdWVJZF9kZWZhdWx0IiwgImltcG9ydF92dWU4IiwgIklOVEVSVkFMIiwgInVzZVNodWZmbGVkVmFyaWFudCIsICJpc0ZyZWV6ZWQiLCAicmVzdWx0IiwgImlkIiwgIndhdGNoIiwgIm5ld1ZhbHVlIiwgIl9pbmZlcnJlZFZhcmlhbnQkdmFsdSIsICJjbGVhckludGVydmFsIiwgIndpbmRvdyIsICJzZXRJbnRlcnZhbCIsICJpbW1lZGlhdGUiLCAidXNlU2h1ZmZsZWRWYXJpYW50X2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTkiLCAidXNlTW9kZWxXcmFwcGVyIiwgInByb3BzIiwgImVtaXQiLCAic2V0IiwgInVzZU1vZGVsV3JhcHBlcl9kZWZhdWx0IiwgImltcG9ydF92dWUxMCIsICJ1c2VEZWZhdWx0IiwgImRlZmF1bHRWYWx1ZSIsICJyZWFsUmVmIiwgInNoYWxsb3dSZWYiLCAiZGVlcCIsICJ1c2VEZWZhdWx0X2RlZmF1bHQiLCAiX19wcm9wcyIsICJfX2VtaXQiLCAicHJvbXB0IiwgInRpdGxlSWQiLCAiZGVzY0lkIiwgImlzT3BlbiIsICJpc0Rpc2FibGVkIiwgImlzVmFyaWFudE5hcnJvd2VkIiwgInNodWZmbGVkVmFyaWFudCIsICJvcHRPdXRBbmRDbG9zZSIsICJzZWxlY3QiLCAidmFyaWFudCIsICJlbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXYiLCAiYnV0dG9ucyIsICJhdXRvQ2xvc2UiLCAiZGlzYWJsZWQiLCAiaW1wb3J0X3Z1ZTEzIiwgIl93aXRoU2NvcGVJZCIsICJuIiwgInB1c2hTY29wZUlkIiwgInBvcFNjb3BlSWQiLCAiX2hvaXN0ZWRfMTMiLCAiX2hvaXN0ZWRfMjIiLCAiX2hvaXN0ZWRfMzIiLCAiX2hvaXN0ZWRfNDIiLCAiX2hvaXN0ZWRfNTIiLCAiX2hvaXN0ZWRfNjIiLCAiX2hvaXN0ZWRfNzIiLCAiX2hvaXN0ZWRfODIiLCAicmVuZGVyNCIsICJhcHBlYXIiLCAib3BlbiIsICJsYW5nIiwgInJvbGUiLCAiY3JlYXRlVk5vZGUiLCAidGl0bGUiLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJtZXNzYWdlcyIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgIlZBVmFyaWFudFByb21wdF9kZWZhdWx0IiwgIlZBVmFyaWFudFByb21wdF9kZWZhdWx0MiIsICJpbXBvcnRfdnVlMTciLCAibW9kZWxWYWx1ZSIsICJpbXBvcnRfdnVlMTUiLCAicmVuZGVyNSIsICJ3aXRoRGlyZWN0aXZlcyIsICJ2TW9kZWxTZWxlY3QiLCAiVkFTZWxlY3RfZGVmYXVsdCIsICJWQVNlbGVjdF9kZWZhdWx0MiIsICJzZWxlY3RlZFZhcmlhbnQiLCAiX2luZmVycmVkVmFyaWFudCR2YWx1MiIsICJpbXBvcnRfdnVlMTgiLCAiX2hvaXN0ZWRfMTQiLCAiX2hvaXN0ZWRfMjMiLCAiX2hvaXN0ZWRfMzMiLCAiX2hvaXN0ZWRfNDMiLCAiX2hvaXN0ZWRfNTMiLCAiX2hvaXN0ZWRfNjMiLCAiX2hvaXN0ZWRfNzMiLCAicmVuZGVyNiIsICJWQVZhcmlhbnRQcm9tcHRNb2JpbGVfZGVmYXVsdCIsICJWQVZhcmlhbnRQcm9tcHRNb2JpbGVfZGVmYXVsdDIiLCAiaXNNb2JpbGUiLCAiZGVza3RvcE1vdW50UG9pbnQiLCAic2V0VmFyaWFudCIsICJzZXRMb2NhbFZhcmlhbnQiLCAicmVkaXJlY3QiLCAiZm9yY2VkIiwgIm9uT3B0T3V0IiwgInNldE9wdE91dCIsICJpbXBvcnRfdnVlMjEiLCAicmVuZGVyNyIsICJUZWxlcG9ydCIsICJ0byIsICJvbk9wdG91dCIsICJvblNlbGVjdCIsICJBcHBfZGVmYXVsdCIsICJBcHBfZGVmYXVsdDIiLCAicm9vdCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJjcmVhdGVBcHAiLCAibW91bnQiXQp9Cg==
