/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:燃灯/foldRef.js}
 * @base {@link https://zh.wikipedia.org/wiki/User:燃灯/foldRef.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/FoldRef}
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

// dist/FoldRef/FoldRef.js
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/FoldRef/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Expand: (0, import_ext_gadget.localize)({
      en: "Expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var ExpandButton_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "ExpandButton",
  props: {
    onExpand: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const __returned__ = {
      props,
      get CdxButton() {
        return import_codex.CdxButton;
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
var import_vue2 = require("vue");
var _hoisted_1 = {
  class: "fold-ref-expand"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", _hoisted_1, [(0, import_vue2.createVNode)($setup["CdxButton"], {
    weight: "normal",
    onClick: $setup.props.onExpand
  }, {
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createTextVNode)(
      (0, import_vue2.toDisplayString)($setup.getMessage("Expand")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["onClick"])]);
}
//! src/FoldRef/modules/ExpandButton.vue
ExpandButton_default.render = render;
ExpandButton_default.__file = "src\\FoldRef\\modules\\ExpandButton.vue";
ExpandButton_default.__scopeId = "data-v-4b453060";
var ExpandButton_default2 = ExpandButton_default;
//! src/FoldRef/modules/util/processElement.ts
var import_vue3 = require("vue");
//! src/FoldRef/modules/FoldRef.module.less
var refarea = "FoldRef-module__refarea_FNkcvW__4100";
//! src/FoldRef/modules/util/processElement.ts
var processElement = (element) => {
  const refFolder = document.createElement("div");
  refFolder.className = refarea;
  element.before(refFolder);
  refFolder.append(element);
  const expandRoot = document.createElement("div");
  refFolder.after(expandRoot);
  const app = (0, import_vue3.createApp)(ExpandButton_default2, {
    onExpand: () => {
      refFolder.classList.remove(refarea);
      app.unmount();
      expandRoot.remove();
    }
  });
  app.mount(expandRoot);
};
//! src/FoldRef/modules/core.ts
var foldRef = () => {
  const $foldRef = document.querySelectorAll(".mw-references-wrap,.refbegin");
  for (const element of $foldRef) {
    var _element$parentElemen, _element$parentElemen2;
    if ((_element$parentElemen = element.parentElement) !== null && _element$parentElemen !== void 0 && _element$parentElemen.classList.contains(refarea) || (_element$parentElemen2 = element.parentElement) !== null && _element$parentElemen2 !== void 0 && (_element$parentElemen2 = _element$parentElemen2.parentElement) !== null && _element$parentElemen2 !== void 0 && _element$parentElemen2.classList.contains(refarea)) {
      continue;
    }
    const height = element.clientHeight ?? 0;
    if (!height || height <= window.innerHeight * 0.9) {
      continue;
    }
    processElement(element);
  }
};
//! src/FoldRef/FoldRef.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var {
  wgNamespaceNumber
} = mw.config.get();
if (wgNamespaceNumber === 0) {
  void (0, import_ext_gadget2.getBody)().then(() => {
    foldRef();
  });
}

})();

/* </nowiki> */

