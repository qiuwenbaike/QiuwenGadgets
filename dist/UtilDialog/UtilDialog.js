/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/UtilDialog}
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

// dist/UtilDialog/UtilDialog.js
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
//! src/UtilDialog/UtilDialog.ts
var UtilDialog_exports = {};
__export(UtilDialog_exports, {
  oouiConfirmWithStyle: () => oouiConfirmWithStyle
});
module.exports = __toCommonJS(UtilDialog_exports);
//! src/UtilDialog/modules/oouiConfirmWithStyle.ts
var import_vue3 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/UtilDialog/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Confirm: (0, import_ext_gadget.localize)({
      en: "Confirm",
      ja: "確認",
      "zh-hans": "确认",
      "zh-hant": "確認"
    }),
    Cancel: (0, import_ext_gadget.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "取消",
      "zh-hant": "取消"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var OouiConfirmWithStyle_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "OouiConfirmWithStyle",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    onConfirm: {
      type: Function,
      required: true
    },
    onCancel: {
      type: Function,
      required: true
    }
  },
  emits: ["update:open"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const close = () => {
      emit("update:open", false);
    };
    const confirm = () => {
      close();
      props.onConfirm();
    };
    const cancel = () => {
      close();
      props.onCancel();
    };
    const handleOpenChange = (open) => {
      emit("update:open", open);
      if (!open) {
        props.onCancel();
      }
    };
    const __returned__ = {
      props,
      emit,
      close,
      confirm,
      cancel,
      handleOpenChange,
      get CdxDialog() {
        return import_codex.CdxDialog;
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)($setup["CdxDialog"], {
    open: $props.open,
    title: $props.message,
    "primary-action": {
      label: $setup.getMessage("Confirm"),
      actionType: "progressive"
    },
    "default-action": {
      label: $setup.getMessage("Cancel")
    },
    "use-close-button": true,
    "onUpdate:open": $setup.handleOpenChange,
    onPrimary: $setup.confirm,
    onDefault: $setup.cancel
  }, null, 8, ["open", "title", "primary-action", "default-action"]);
}
//! src/UtilDialog/modules/OouiConfirmWithStyle.vue
OouiConfirmWithStyle_default.render = render;
OouiConfirmWithStyle_default.__file = "src\\UtilDialog\\modules\\OouiConfirmWithStyle.vue";
OouiConfirmWithStyle_default.__scopeId = "data-v-c32fc307";
var OouiConfirmWithStyle_default2 = OouiConfirmWithStyle_default;
//! src/UtilDialog/modules/oouiConfirmWithStyle.ts
var oouiConfirmWithStyle = (message) => new Promise((resolve) => {
  const root = document.createElement("div");
  document.body.append(root);
  let settled = false;
  const settle = (value) => {
    if (settled) {
      return;
    }
    settled = true;
    app.unmount();
    root.remove();
    resolve(value);
  };
  const app = (0, import_vue3.createApp)(OouiConfirmWithStyle_default2, {
    open: true,
    message,
    onConfirm: () => {
      settle(true);
    },
    onCancel: () => {
      settle(false);
    }
  });
  app.mount(root);
});

})();

/* </nowiki> */

