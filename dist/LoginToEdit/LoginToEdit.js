/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LoginToEdit}
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

// dist/LoginToEdit/LoginToEdit.js
//! src/LoginToEdit/LoginToEdit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/LoginToEdit/modules/initDialog.ts
var import_vue3 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/LoginToEdit/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Cancel: (0, import_ext_gadget.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "暂不登录或注册账号",
      "zh-hant": "暫不登入或註冊賬號"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Help: (0, import_ext_gadget.localize)({
      en: "Get help",
      "zh-hans": "了解详情",
      "zh-hant": "了解詳情"
    }),
    Login: (0, import_ext_gadget.localize)({
      en: "Login",
      ja: "ログイン",
      "zh-hans": "登录已有账号",
      "zh-hant": "登入已有賬號"
    }),
    Register: (0, import_ext_gadget.localize)({
      en: "Register",
      ja: "アカウントを作成",
      "zh-hans": "注册新的账号",
      "zh-hant": "註冊新的賬號"
    }),
    DialogTitle: (0, import_ext_gadget.localize)({
      en: "Welcome to Qiuwen Baike!",
      ja: "求聞百科へようこそ！",
      "zh-hans": "欢迎来到求闻百科！",
      "zh-hant": "歡迎來到求聞百科！"
    }),
    DialogMessage: (0, import_ext_gadget.localize)({
      en: "You have not yet logged in. Register and log in to your account to contribute.",
      ja: "あなたはまだ求聞百科にログインしていません。アカウントを作成し、ログインして求聞百科を改善することができます。",
      "zh-hans": "您尚未登录求闻百科。您可以注册并登录账号，帮助完善求闻百科。",
      "zh-hant": "您尚未登錄求聞百科。您可以注冊並登錄賬號，幫助完善求聞百科。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var helpURL = "https://www.qiuwenbaike.cn/wiki/H:LOGIN";
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    state: {
      type: Object,
      required: true
    },
    loginURL: {
      type: String,
      required: true
    },
    registerURL: {
      type: String,
      required: true
    },
    triggerLogin: {
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
    const login = () => {
      close();
      props.triggerLogin();
    };
    const register = () => {
      close();
      location.href = props.registerURL;
    };
    const __returned__ = {
      props,
      emit,
      helpURL,
      close,
      login,
      register,
      get CdxButton() {
        return import_codex.CdxButton;
      },
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
var _hoisted_1 = {
  class: "login-to-edit__register"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)($setup["CdxDialog"], {
    open: $props.state.open,
    title: $setup.getMessage("DialogTitle"),
    "default-action": {
      label: $setup.getMessage("Cancel")
    },
    "primary-action": void 0,
    "use-close-button": true,
    "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.emit("update:open", $event)),
    onDefault: $setup.close,
    onPrimary: ($event) => void 0
  }, {
    "footer-text": (0, import_vue2.withCtx)(() => [(0, import_vue2.createElementVNode)(
      "a",
      {
        href: $setup.helpURL
      },
      (0, import_vue2.toDisplayString)($setup.getMessage("Help")),
      1
      /* TEXT */
    )]),
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createElementVNode)(
      "p",
      null,
      (0, import_vue2.toDisplayString)($setup.getMessage("DialogMessage")),
      1
      /* TEXT */
    ), (0, import_vue2.createElementVNode)("div", _hoisted_1, [(0, import_vue2.createVNode)($setup["CdxButton"], {
      weight: "normal",
      action: "progressive",
      onClick: $setup.register
    }, {
      default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createTextVNode)(
        (0, import_vue2.toDisplayString)($setup.getMessage("Register")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }), (0, import_vue2.createVNode)($setup["CdxButton"], {
      weight: "normal",
      action: "progressive",
      onClick: $setup.login
    }, {
      default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createTextVNode)(
        (0, import_vue2.toDisplayString)($setup.getMessage("Login")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    })])]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "default-action"]);
}
//! src/LoginToEdit/App.vue
App_default.render = render;
App_default.__file = "src\\LoginToEdit\\App.vue";
App_default.__scopeId = "data-v-cb4aa3cd";
var App_default2 = App_default;
//! src/LoginToEdit/modules/initDialog.ts
var {
  skin,
  wgAction,
  wgPageName
} = mw.config.get();
var isCitizen = skin === "citizen";
var loginURL = mw.util.getUrl("Special:UserLogin", {
  returnto: wgPageName
});
var registerURL = mw.util.getUrl("Special:CreateAccount", {
  returnto: wgPageName
});
var initDialog = () => {
  const state = (0, import_vue3.reactive)({
    open: false
  });
  const root = document.createElement("div");
  document.body.append(root);
  const triggerLogin = () => {
    location.href = loginURL;
  };
  const app = (0, import_vue3.createApp)(App_default2, {
    state,
    loginURL,
    registerURL,
    triggerLogin,
    "onUpdate:open": (open) => {
      state.open = open;
    }
  });
  app.mount(root);
  const openDialog = () => {
    state.open = !state.open;
  };
  const caViewsource = document.querySelector("#ca-viewsource");
  if (caViewsource) {
    caViewsource.id = "ca-edit";
    const link = caViewsource.querySelector("a");
    if (link) {
      link.replaceChildren();
      link.setAttribute("aria-label", getMessage("DialogMessage"));
      if (isCitizen) {
        const editIcon = document.createElement("span");
        editIcon.className = "citizen-ui-icon mw-ui-icon-wikimedia-edit";
        link.append(editIcon);
      }
      link.append(getMessage("Edit"));
      link.addEventListener("click", (event) => {
        event.preventDefault();
        openDialog();
      });
    }
  }
  if (["edit", "submit"].includes(wgAction)) {
    openDialog();
  }
};
//! src/LoginToEdit/LoginToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit() {
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  initDialog();
});

})();

/* </nowiki> */

