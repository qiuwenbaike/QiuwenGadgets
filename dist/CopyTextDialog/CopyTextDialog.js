/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/CopyTextDialog}
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

// dist/CopyTextDialog/CopyTextDialog.js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/CopyTextDialog/CopyTextDialog.ts
var CopyTextDialog_exports = {};
__export(CopyTextDialog_exports, {
  showCopyTextDialog: () => showCopyTextDialog
});
module.exports = __toCommonJS(CopyTextDialog_exports);
//! src/CopyTextDialog/modules/showCopyTextDialog.ts
var import_vue3 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var CopyTextDialog_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "CopyTextDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    copyLabel: {
      type: String,
      required: true
    },
    closeLabel: {
      type: String,
      required: true
    },
    onCopy: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const close = () => {
      props.onClose();
    };
    const handleOpenChange = (open) => {
      if (!open) {
        close();
      }
    };
    const copy = (text) => {
      void props.onCopy(text);
    };
    const cdxIconCopy = {
      path: "M13 19H1V7h6V1h12v12h-6zm-6-6V9H3v8h8v-4zm2-2h8V3H9z",
      shouldFlip: true
    };
    const __returned__ = {
      props,
      close,
      handleOpenChange,
      copy,
      cdxIconCopy,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxDialog() {
        return import_codex.CdxDialog;
      },
      get CdxIcon() {
        return import_codex.CdxIcon;
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
  class: "util-dialog-copy-list"
};
var _hoisted_2 = {
  key: 0,
  class: "util-dialog-copy-label"
};
var _hoisted_3 = {
  class: "util-dialog-copy-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)($setup["CdxDialog"], {
    open: true,
    title: $props.title,
    "default-action": {
      label: $props.closeLabel
    },
    "use-close-button": true,
    "onUpdate:open": $setup.handleOpenChange,
    onDefault: $setup.close
  }, {
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createElementVNode)("div", _hoisted_1, [((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
      import_vue2.Fragment,
      null,
      (0, import_vue2.renderList)($props.items, (item) => {
        return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", {
          key: item.text,
          class: "util-dialog-copy-item"
        }, [item.label ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "div",
          _hoisted_2,
          (0, import_vue2.toDisplayString)(item.label),
          1
          /* TEXT */
        )) : (0, import_vue2.createCommentVNode)("v-if", true), (0, import_vue2.createElementVNode)(
          "code",
          _hoisted_3,
          (0, import_vue2.toDisplayString)(item.text),
          1
          /* TEXT */
        ), (0, import_vue2.createVNode)($setup["CdxButton"], {
          weight: "normal",
          "aria-label": $props.copyLabel,
          onClick: ($event) => $setup.copy(item.text)
        }, {
          default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createVNode)($setup["CdxIcon"], {
            icon: $setup.cdxIconCopy
          }), (0, import_vue2.createTextVNode)(
            " " + (0, import_vue2.toDisplayString)($props.copyLabel),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["aria-label", "onClick"])]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])]),
    _: 1
    /* STABLE */
  }, 8, ["title", "default-action"]);
}
//! src/CopyTextDialog/modules/CopyTextDialog.vue
CopyTextDialog_default.render = render;
CopyTextDialog_default.__file = "src\\CopyTextDialog\\modules\\CopyTextDialog.vue";
CopyTextDialog_default.__scopeId = "data-v-ab35f56c";
var CopyTextDialog_default2 = CopyTextDialog_default;
//! src/CopyTextDialog/modules/showCopyTextDialog.ts
var showCopyTextDialog = (options) => {
  const root = document.createElement("div");
  document.body.append(root);
  let app = null;
  let closed = false;
  const close = () => {
    var _app;
    if (closed) {
      return;
    }
    closed = true;
    (_app = app) === null || _app === void 0 || _app.unmount();
    root.remove();
  };
  app = (0, import_vue3.createApp)(CopyTextDialog_default2, {
    title: options.title,
    items: options.items,
    copyLabel: options.copyLabel,
    closeLabel: options.closeLabel,
    onCopy: options.onCopy,
    onClose: close
  });
  app.mount(root);
};

})();

/* </nowiki> */

