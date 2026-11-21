/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NoticeDialog}
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

// dist/NoticeDialog/NoticeDialog.js
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
//! src/NoticeDialog/NoticeDialog.ts
var NoticeDialog_exports = {};
__export(NoticeDialog_exports, {
  showNoticeDialog: () => showNoticeDialog
});
module.exports = __toCommonJS(NoticeDialog_exports);
//! src/NoticeDialog/modules/showNoticeDialog.ts
var import_vue3 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var NoticeDialog_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "NoticeDialog",
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    cancelLabel: {
      type: String,
      required: true
    },
    helpLabel: {
      type: String,
      required: true
    },
    helpURL: {
      type: String,
      required: true
    },
    primary: {
      type: Object,
      required: false
    },
    actions: {
      type: Array,
      required: false
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
    const runAction = (action) => {
      close();
      action.onClick();
    };
    const runPrimary = () => {
      if (!props.primary) {
        return;
      }
      runAction(props.primary);
    };
    const __returned__ = {
      props,
      close,
      handleOpenChange,
      runAction,
      runPrimary,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxDialog() {
        return import_codex.CdxDialog;
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
  key: 0,
  class: "util-dialog-actions"
};
var _hoisted_2 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)($setup["CdxDialog"], {
    open: true,
    title: $props.title,
    "primary-action": $props.primary ? {
      label: $props.primary.label,
      actionType: "progressive"
    } : void 0,
    "default-action": {
      label: $props.cancelLabel
    },
    "use-close-button": true,
    "onUpdate:open": $setup.handleOpenChange,
    onDefault: $setup.close,
    onPrimary: $setup.runPrimary
  }, {
    "footer-text": (0, import_vue2.withCtx)(() => [(0, import_vue2.createElementVNode)("a", {
      href: $props.helpURL
    }, (0, import_vue2.toDisplayString)($props.helpLabel), 9, _hoisted_2)]),
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createElementVNode)(
      "p",
      null,
      (0, import_vue2.toDisplayString)($props.message),
      1
      /* TEXT */
    ), $props.actions && $props.actions.length ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", _hoisted_1, [((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
      import_vue2.Fragment,
      null,
      (0, import_vue2.renderList)($props.actions, (action) => {
        return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)($setup["CdxButton"], {
          key: action.label,
          weight: "normal",
          action: "progressive",
          onClick: ($event) => $setup.runAction(action)
        }, {
          default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createTextVNode)(
            (0, import_vue2.toDisplayString)(action.label),
            1
            /* TEXT */
          )]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])) : (0, import_vue2.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  }, 8, ["title", "primary-action", "default-action"]);
}
//! src/NoticeDialog/modules/NoticeDialog.vue
NoticeDialog_default.render = render;
NoticeDialog_default.__file = "src\\NoticeDialog\\modules\\NoticeDialog.vue";
NoticeDialog_default.__scopeId = "data-v-91b0d22f";
var NoticeDialog_default2 = NoticeDialog_default;
//! src/NoticeDialog/modules/showNoticeDialog.ts
var showNoticeDialog = (options) => {
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
  app = (0, import_vue3.createApp)(NoticeDialog_default2, {
    title: options.title,
    message: options.message,
    cancelLabel: options.cancelLabel,
    helpLabel: options.helpLabel,
    helpURL: options.helpURL,
    primary: options.primary,
    actions: options.actions,
    onClose: close
  });
  app.mount(root);
};

})();

/* </nowiki> */

