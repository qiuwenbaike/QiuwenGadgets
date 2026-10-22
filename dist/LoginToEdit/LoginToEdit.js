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
      "zh-hans": "暂不登录账号",
      "zh-hant": "暫不登入賬號"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
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
    "primary-action": {
      label: $setup.getMessage("Login"),
      actionType: "progressive"
    },
    "default-action": {
      label: $setup.getMessage("Cancel")
    },
    "use-close-button": true,
    onPrimary: $setup.login,
    onDefault: $setup.close,
    "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.emit("update:open", $event))
  }, {
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
    })])]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "primary-action", "default-action"]);
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
var initDialog = ($body) => {
  const state = (0, import_vue3.reactive)({
    open: false
  });
  const root = document.createElement("div");
  $body.append(root);
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
  const $caViewsource = $body.find("#ca-viewsource");
  if ($caViewsource.length) {
    const editIcon = isCitizen ? '<span class="citizen-ui-icon mw-ui-icon-wikimedia-edit"></span>' : "";
    $caViewsource.attr("id", "ca-edit").find("a").attr("aria-label", getMessage("DialogMessage")).html(editIcon + getMessage("Edit")).on("click", (event) => {
      event.preventDefault();
      openDialog();
    });
  }
  if (["edit", "submit"].includes(wgAction)) {
    openDialog();
  }
};
//! src/LoginToEdit/LoginToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  initDialog($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ2luVG9FZGl0L0xvZ2luVG9FZGl0LnRzIiwgInNyYy9Mb2dpblRvRWRpdC9tb2R1bGVzL2luaXREaWFsb2cudHMiLCAiZGlzdC9Mb2dpblRvRWRpdC9zcmMvTG9naW5Ub0VkaXQvQXBwLnZ1ZSIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxMb2dpblRvRWRpdFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9Mb2dpblRvRWRpdC9BcHAudnVlIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdERpYWxvZygkYm9keSk7XG59KTtcbiIsICJpbXBvcnQge3R5cGUgQXBwIGFzIFZ1ZUFwcCwgY3JlYXRlQXBwLCByZWFjdGl2ZX0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHtza2luLCB3Z0FjdGlvbiwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBpc0NpdGl6ZW46IGJvb2xlYW4gPSBza2luID09PSAnY2l0aXplbic7XG5jb25zdCBsb2dpblVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6VXNlckxvZ2luJywge1xuXHRyZXR1cm50bzogd2dQYWdlTmFtZSxcbn0pO1xuY29uc3QgcmVnaXN0ZXJVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkNyZWF0ZUFjY291bnQnLCB7XG5cdHJldHVybnRvOiB3Z1BhZ2VOYW1lLFxufSk7XG5cbmludGVyZmFjZSBEaWFsb2dTdGF0ZSB7XG5cdG9wZW46IGJvb2xlYW47XG59XG5cbmNvbnN0IGluaXREaWFsb2cgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHN0YXRlOiBEaWFsb2dTdGF0ZSA9IHJlYWN0aXZlKHtvcGVuOiBmYWxzZX0pO1xuXG5cdGNvbnN0IHJvb3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdCRib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCB0cmlnZ2VyTG9naW4gPSAoKTogdm9pZCA9PiB7XG5cdFx0bG9jYXRpb24uaHJlZiA9IGxvZ2luVVJMO1xuXHR9O1xuXG5cdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+ID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdHN0YXRlLFxuXHRcdGxvZ2luVVJMLFxuXHRcdHJlZ2lzdGVyVVJMLFxuXHRcdHRyaWdnZXJMb2dpbixcblx0XHQnb25VcGRhdGU6b3Blbic6IChvcGVuOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRzdGF0ZS5vcGVuID0gb3Blbjtcblx0XHR9LFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xuXG5cdGNvbnN0IG9wZW5EaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdFx0c3RhdGUub3BlbiA9ICFzdGF0ZS5vcGVuO1xuXHR9O1xuXG5cdGNvbnN0ICRjYVZpZXdzb3VyY2U6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjYS12aWV3c291cmNlJyk7XG5cdGlmICgkY2FWaWV3c291cmNlLmxlbmd0aCkge1xuXHRcdGNvbnN0IGVkaXRJY29uOiBzdHJpbmcgPSBpc0NpdGl6ZW4gPyAnPHNwYW4gY2xhc3M9XCJjaXRpemVuLXVpLWljb24gbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdFwiPjwvc3Bhbj4nIDogJyc7XG5cdFx0JGNhVmlld3NvdXJjZVxuXHRcdFx0LmF0dHIoJ2lkJywgJ2NhLWVkaXQnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWwnLCBnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykpXG5cdFx0XHQuaHRtbChlZGl0SWNvbiArIGdldE1lc3NhZ2UoJ0VkaXQnKSlcblx0XHRcdC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG9wZW5EaWFsb2coKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikpIHtcblx0XHRvcGVuRGlhbG9nKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7aW5pdERpYWxvZ307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhEaWFsb2d9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRzdGF0ZToge1xuXHRcdG9wZW46IGJvb2xlYW47XG5cdH07XG5cdGxvZ2luVVJMOiBzdHJpbmc7XG5cdHJlZ2lzdGVyVVJMOiBzdHJpbmc7XG5cdHRyaWdnZXJMb2dpbjogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdCd1cGRhdGU6b3Blbic6IFt2YWx1ZTogYm9vbGVhbl07XG59PigpO1xuXG5jb25zdCBjbG9zZSA9ICgpOiB2b2lkID0+IHtcblx0ZW1pdCgndXBkYXRlOm9wZW4nLCBmYWxzZSk7XG59O1xuXG5jb25zdCBsb2dpbiA9ICgpOiB2b2lkID0+IHtcblx0Y2xvc2UoKTtcblx0cHJvcHMudHJpZ2dlckxvZ2luKCk7XG59O1xuXG5jb25zdCByZWdpc3RlciA9ICgpOiB2b2lkID0+IHtcblx0Y2xvc2UoKTtcblx0bG9jYXRpb24uaHJlZiA9IHByb3BzLnJlZ2lzdGVyVVJMO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0Om9wZW49XCJzdGF0ZS5vcGVuXCJcblx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdEaWFsb2dUaXRsZScpXCJcblx0XHQ6cHJpbWFyeS1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0xvZ2luJyksIGFjdGlvblR5cGU6ICdwcm9ncmVzc2l2ZSd9XCJcblx0XHQ6ZGVmYXVsdC1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0NhbmNlbCcpfVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAcHJpbWFyeT1cImxvZ2luXCJcblx0XHRAZGVmYXVsdD1cImNsb3NlXCJcblx0XHRAdXBkYXRlOm9wZW49XCJlbWl0KCd1cGRhdGU6b3BlbicsICRldmVudClcIlxuXHQ+XG5cdFx0PHA+e3sgZ2V0TWVzc2FnZSgnRGlhbG9nTWVzc2FnZScpIH19PC9wPlxuXHRcdDxkaXYgY2xhc3M9XCJsb2dpbi10by1lZGl0X19yZWdpc3RlclwiPlxuXHRcdFx0PGNkeC1idXR0b24gd2VpZ2h0PVwibm9ybWFsXCIgYWN0aW9uPVwicHJvZ3Jlc3NpdmVcIiBAY2xpY2s9XCJyZWdpc3RlclwiPlxuXHRcdFx0XHR7eyBnZXRNZXNzYWdlKCdSZWdpc3RlcicpIH19XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvY2R4LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5sb2dpbi10by1lZGl0X19yZWdpc3RlciB7XG5cdG1hcmdpbi10b3A6IDAuNzVyZW07XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdGphOiAn44Kt44Oj44Oz44K744OrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aaguS4jeeZu+W9lei0puWPtycsXG5cdFx0XHQnemgtaGFudCc6ICfmmqvkuI3nmbvlhaXos6zomZ8nLFxuXHRcdH0pLFxuXHRcdEVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCcsXG5cdFx0XHRqYTogJ+e3qOmbhicsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6LyvJyxcblx0XHR9KSxcblx0XHRMb2dpbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODsycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZXlt7LmnInotKblj7cnLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWl5bey5pyJ6LOs6JmfJyxcblx0XHR9KSxcblx0XHRSZWdpc3RlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWdpc3RlcicsXG5cdFx0XHRqYTogJ+OCouOCq+OCpuODs+ODiOOCkuS9nOaIkCcsXG5cdFx0XHQnemgtaGFucyc6ICfms6jlhozmlrDnmoTotKblj7cnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ki75YaK5paw55qE6LOs6JmfJyxcblx0XHR9KSxcblx0XHREaWFsb2dUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXZWxjb21lIHRvIFFpdXdlbiBCYWlrZSEnLFxuXHRcdFx0amE6ICfmsYLogZ7nmb7np5HjgbjjgojjgYbjgZPjgZ3vvIEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5qyi6L+O5p2l5Yiw5rGC6Ze755m+56eR77yBJyxcblx0XHRcdCd6aC1oYW50JzogJ+atoei/juS+huWIsOaxguiBnueZvuenke+8gScsXG5cdFx0fSksXG5cdFx0RGlhbG9nTWVzc2FnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBub3QgeWV0IGxvZ2dlZCBpbi4gUmVnaXN0ZXIgYW5kIGxvZyBpbiB0byB5b3VyIGFjY291bnQgdG8gY29udHJpYnV0ZS4nLFxuXHRcdFx0amE6ICfjgYLjgarjgZ/jga/jgb7jgaDmsYLogZ7nmb7np5Hjgavjg63jgrDjgqTjg7PjgZfjgabjgYTjgb7jgZvjgpPjgILjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJDjgZfjgIHjg63jgrDjgqTjg7PjgZfjgabmsYLogZ7nmb7np5HjgpLmlLnlloTjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo5bCa5pyq55m75b2V5rGC6Ze755m+56eR44CC5oKo5Y+v5Lul5rOo5YaM5bm255m75b2V6LSm5Y+377yM5biu5Yqp5a6M5ZaE5rGC6Ze755m+56eR44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOWwmuacqueZu+mMhOaxguiBnueZvuenkeOAguaCqOWPr+S7peazqOWGiuS4pueZu+mMhOizrOiZn++8jOW5q+WKqeWujOWWhOaxguiBnueZvuenkeOAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJsb2dpbi10by1lZGl0X19yZWdpc3RlclwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICBvcGVuOiAkcHJvcHMuc3RhdGUub3BlbixcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ0RpYWxvZ1RpdGxlJyksXG4gICAgXCJwcmltYXJ5LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdMb2dpbicpLCBhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnfSxcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0NhbmNlbCcpfSxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZSxcbiAgICBvblByaW1hcnk6ICRzZXR1cC5sb2dpbixcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZSxcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCRzZXR1cC5lbWl0KCd1cGRhdGU6b3BlbicsICRldmVudCkpKVxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnRGlhbG9nTWVzc2FnZScpKSwgMSAvKiBURVhUICovKSxcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgd2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5yZWdpc3RlclxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdSZWdpc3RlcicpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcInByaW1hcnktYWN0aW9uXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXExvZ2luVG9FZGl0XFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXExvZ2luVG9FZGl0XFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcTG9naW5Ub0VkaXRcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXExvZ2luVG9FZGl0XFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtY2I0YWEzY2RcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQUFDLGNBQXNERCxRQUFBLEtBQUE7O0FDQ3RELElBQUFFLGVBQW1DRixRQUFBLGtCQUFBOztBQ0RuQyxJQUFBRyxvQkFBdUJILFFBQUEsaUJBQUE7QUFFdkIsSUFBTUksa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLE9BQUEsR0FBTU4sa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFFBQUEsR0FBT1Asa0JBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFdBQUEsR0FBVVIsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxjQUFBLEdBQWFULGtCQUFBRyxVQUFTO01BQ3JCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREssZ0JBQUEsR0FBZVYsa0JBQUFHLFVBQVM7TUFDdkJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNTSxlQUFlVixnQkFBZ0I7QUFFckMsSUFBTVcsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FEM0NB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T0E7SUFDZDtFQUNELENBQUM7QUFDRHdDLE1BQUlFLE1BQU1OLElBQUk7QUFFZCxRQUFNTyxhQUFhQSxNQUFZO0FBQzlCMUMsVUFBTUQsT0FBTyxDQUFDQyxNQUFNRDtFQUNyQjtBQUVBLFFBQU00QyxnQkFBd0JWLE1BQU1XLEtBQUssZ0JBQWdCO0FBQ3pELE1BQUlELGNBQWNFLFFBQVE7QUFDekIsVUFBTUMsV0FBbUJuQixZQUFZLG9FQUFvRTtBQUN6R2dCLGtCQUNFSSxLQUFLLE1BQU0sU0FBUyxFQUNwQkgsS0FBSyxHQUFHLEVBQ1JHLEtBQUssY0FBY3pFLFdBQVcsZUFBZSxDQUFDLEVBQzlDMEUsS0FBS0YsV0FBV3hFLFdBQVcsTUFBTSxDQUFDLEVBQ2xDMkUsR0FBRyxTQUFVQyxXQUFtQztBQUNoREEsWUFBTUMsZUFBZTtBQUNyQlQsaUJBQVc7SUFDWixDQUFDO0VBQ0g7QUFFQSxNQUFJLENBQUMsUUFBUSxRQUFRLEVBQUVVLFNBQVM5QixRQUFRLEdBQUc7QUFDMUNvQixlQUFXO0VBQ1o7QUFDRDs7QUR4REEsTUFBQSxHQUFLcEYsbUJBQUErRixTQUFRLEVBQUVDLEtBQUssU0FBU0MsWUFBWXRCLE9BQXNDO0FBQzlFLFFBQU07SUFBQ3VCO0VBQVUsSUFBSWhDLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsTUFBSThCLFlBQVk7QUFDZjtFQUNEO0FBRUF4QixhQUFXQyxLQUFLO0FBQ2pCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF92dWUzIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2FuY2VsIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkVkaXQiLCAiTG9naW4iLCAiUmVnaXN0ZXIiLCAiRGlhbG9nVGl0bGUiLCAiRGlhbG9nTWVzc2FnZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvcHMiLCAiX19wcm9wcyIsICJlbWl0IiwgIl9fZW1pdCIsICJjbG9zZSIsICJsb2dpbiIsICJ0cmlnZ2VyTG9naW4iLCAicmVnaXN0ZXIiLCAibG9jYXRpb24iLCAiaHJlZiIsICJyZWdpc3RlclVSTCIsICJpbXBvcnRfdnVlMiIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJvcGVuIiwgInN0YXRlIiwgInRpdGxlIiwgImxhYmVsIiwgImFjdGlvblR5cGUiLCAib25QcmltYXJ5IiwgIm9uRGVmYXVsdCIsICIkZXZlbnQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAid2VpZ2h0IiwgImFjdGlvbiIsICJvbkNsaWNrIiwgImNyZWF0ZVRleHRWTm9kZSIsICJfIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgInNraW4iLCAid2dBY3Rpb24iLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlzQ2l0aXplbiIsICJsb2dpblVSTCIsICJ1dGlsIiwgImdldFVybCIsICJyZXR1cm50byIsICJpbml0RGlhbG9nIiwgIiRib2R5IiwgInJlYWN0aXZlIiwgInJvb3QiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJhcHBlbmQiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJvcGVuRGlhbG9nIiwgIiRjYVZpZXdzb3VyY2UiLCAiZmluZCIsICJsZW5ndGgiLCAiZWRpdEljb24iLCAiYXR0ciIsICJodG1sIiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImluY2x1ZGVzIiwgImdldEJvZHkiLCAidGhlbiIsICJsb2dpblRvRWRpdCIsICJ3Z1VzZXJOYW1lIl0KfQo=
