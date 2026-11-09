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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ2luVG9FZGl0L0xvZ2luVG9FZGl0LnRzIiwgInNyYy9Mb2dpblRvRWRpdC9tb2R1bGVzL2luaXREaWFsb2cudHMiLCAiZGlzdC9Mb2dpblRvRWRpdC9zcmMvTG9naW5Ub0VkaXQvQXBwLnZ1ZSIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxMb2dpblRvRWRpdFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9Mb2dpblRvRWRpdC9BcHAudnVlIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdERpYWxvZygpO1xufSk7XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcCwgcmVhY3RpdmV9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcC52dWUnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCB7c2tpbiwgd2dBY3Rpb24sIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgaXNDaXRpemVuOiBib29sZWFuID0gc2tpbiA9PT0gJ2NpdGl6ZW4nO1xuY29uc3QgbG9naW5VUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlVzZXJMb2dpbicsIHtcblx0cmV0dXJudG86IHdnUGFnZU5hbWUsXG59KTtcbmNvbnN0IHJlZ2lzdGVyVVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpDcmVhdGVBY2NvdW50Jywge1xuXHRyZXR1cm50bzogd2dQYWdlTmFtZSxcbn0pO1xuXG5pbnRlcmZhY2UgRGlhbG9nU3RhdGUge1xuXHRvcGVuOiBib29sZWFuO1xufVxuXG5jb25zdCBpbml0RGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBzdGF0ZTogRGlhbG9nU3RhdGUgPSByZWFjdGl2ZSh7b3BlbjogZmFsc2V9KTtcblxuXHRjb25zdCByb290OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCB0cmlnZ2VyTG9naW4gPSAoKTogdm9pZCA9PiB7XG5cdFx0bG9jYXRpb24uaHJlZiA9IGxvZ2luVVJMO1xuXHR9O1xuXG5cdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+ID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdHN0YXRlLFxuXHRcdGxvZ2luVVJMLFxuXHRcdHJlZ2lzdGVyVVJMLFxuXHRcdHRyaWdnZXJMb2dpbixcblx0XHQnb25VcGRhdGU6b3Blbic6IChvcGVuOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRzdGF0ZS5vcGVuID0gb3Blbjtcblx0XHR9LFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xuXG5cdGNvbnN0IG9wZW5EaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdFx0c3RhdGUub3BlbiA9ICFzdGF0ZS5vcGVuO1xuXHR9O1xuXG5cdGNvbnN0IGNhVmlld3NvdXJjZTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLXZpZXdzb3VyY2UnKTtcblx0aWYgKGNhVmlld3NvdXJjZSkge1xuXHRcdGNhVmlld3NvdXJjZS5pZCA9ICdjYS1lZGl0JztcblxuXHRcdGNvbnN0IGxpbms6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9IGNhVmlld3NvdXJjZS5xdWVyeVNlbGVjdG9yKCdhJyk7XG5cdFx0aWYgKGxpbmspIHtcblx0XHRcdGxpbmsucmVwbGFjZUNoaWxkcmVuKCk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSk7XG5cblx0XHRcdGlmIChpc0NpdGl6ZW4pIHtcblx0XHRcdFx0Y29uc3QgZWRpdEljb246IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0ZWRpdEljb24uY2xhc3NOYW1lID0gJ2NpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0Jztcblx0XHRcdFx0bGluay5hcHBlbmQoZWRpdEljb24pO1xuXHRcdFx0fVxuXG5cdFx0XHRsaW5rLmFwcGVuZChnZXRNZXNzYWdlKCdFZGl0JykpO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRvcGVuRGlhbG9nKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdG9wZW5EaWFsb2coKTtcblx0fVxufTtcblxuZXhwb3J0IHtpbml0RGlhbG9nfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b24sIENkeERpYWxvZ30gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdHN0YXRlOiB7XG5cdFx0b3BlbjogYm9vbGVhbjtcblx0fTtcblx0bG9naW5VUkw6IHN0cmluZztcblx0cmVnaXN0ZXJVUkw6IHN0cmluZztcblx0dHJpZ2dlckxvZ2luOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0J3VwZGF0ZTpvcGVuJzogW3ZhbHVlOiBib29sZWFuXTtcbn0+KCk7XG5cbmNvbnN0IGhlbHBVUkw6IHN0cmluZyA9ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL0g6TE9HSU4nO1xuXG5jb25zdCBjbG9zZSA9ICgpOiB2b2lkID0+IHtcblx0ZW1pdCgndXBkYXRlOm9wZW4nLCBmYWxzZSk7XG59O1xuXG5jb25zdCBsb2dpbiA9ICgpOiB2b2lkID0+IHtcblx0Y2xvc2UoKTtcblx0cHJvcHMudHJpZ2dlckxvZ2luKCk7XG59O1xuXG5jb25zdCByZWdpc3RlciA9ICgpOiB2b2lkID0+IHtcblx0Y2xvc2UoKTtcblx0bG9jYXRpb24uaHJlZiA9IHByb3BzLnJlZ2lzdGVyVVJMO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0Om9wZW49XCJzdGF0ZS5vcGVuXCJcblx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdEaWFsb2dUaXRsZScpXCJcblx0XHQ6ZGVmYXVsdC1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0NhbmNlbCcpfVwiXG5cdFx0OnByaW1hcnktYWN0aW9uPVwidW5kZWZpbmVkXCJcblx0XHQ6dXNlLWNsb3NlLWJ1dHRvbj1cInRydWVcIlxuXHRcdEB1cGRhdGU6b3Blbj1cImVtaXQoJ3VwZGF0ZTpvcGVuJywgJGV2ZW50KVwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdFx0QHByaW1hcnk9XCJ1bmRlZmluZWRcIlxuXHQ+XG5cdFx0PHA+e3sgZ2V0TWVzc2FnZSgnRGlhbG9nTWVzc2FnZScpIH19PC9wPlxuXHRcdDxkaXYgY2xhc3M9XCJsb2dpbi10by1lZGl0X19yZWdpc3RlclwiPlxuXHRcdFx0PGNkeC1idXR0b24gd2VpZ2h0PVwibm9ybWFsXCIgYWN0aW9uPVwicHJvZ3Jlc3NpdmVcIiBAY2xpY2s9XCJyZWdpc3RlclwiPlxuXHRcdFx0XHR7eyBnZXRNZXNzYWdlKCdSZWdpc3RlcicpIH19XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0XHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJub3JtYWxcIiBhY3Rpb249XCJwcm9ncmVzc2l2ZVwiIEBjbGljaz1cImxvZ2luXCI+XG5cdFx0XHRcdHt7IGdldE1lc3NhZ2UoJ0xvZ2luJykgfX1cblx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHQ8L2Rpdj5cblx0XHQ8dGVtcGxhdGUgI2Zvb3Rlci10ZXh0PlxuXHRcdFx0PGEgOmhyZWY9XCJoZWxwVVJMXCI+e3sgZ2V0TWVzc2FnZSgnSGVscCcpIH19PC9hPlxuXHRcdDwvdGVtcGxhdGU+XG5cdDwvY2R4LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5sb2dpbi10by1lZGl0X19yZWdpc3RlciB7XG5cdG1hcmdpbi10b3A6IDAuNzVyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gY2VudGVyO1xuXHRnYXA6IDFlbTtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYW5jZWwnLFxuXHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0J3poLWhhbnMnOiAn5pqC5LiN55m75b2V5oiW5rOo5YaM6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+aaq+S4jeeZu+WFpeaIluiou+WGiuizrOiZnycsXG5cdFx0fSksXG5cdFx0RWRpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0Jyxcblx0XHRcdGphOiAn57eo6ZuGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK8nLFxuXHRcdH0pLFxuXHRcdEhlbHA6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnR2V0IGhlbHAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LqG6Kej6K+m5oOFJyxcblx0XHRcdCd6aC1oYW50JzogJ+S6huino+ips+aDhScsXG5cdFx0fSksXG5cdFx0TG9naW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5bey5pyJ6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeW3suacieizrOiZnycsXG5cdFx0fSksXG5cdFx0UmVnaXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVnaXN0ZXInLFxuXHRcdFx0amE6ICfjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rOo5YaM5paw55qE6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iou+WGiuaWsOeahOizrOiZnycsXG5cdFx0fSksXG5cdFx0RGlhbG9nVGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VsY29tZSB0byBRaXV3ZW4gQmFpa2UhJyxcblx0XHRcdGphOiAn5rGC6IGe55m+56eR44G444KI44GG44GT44Gd77yBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+asoui/juadpeWIsOaxgumXu+eZvuenke+8gScsXG5cdFx0XHQnemgtaGFudCc6ICfmraHov47kvobliLDmsYLogZ7nmb7np5HvvIEnLFxuXHRcdH0pLFxuXHRcdERpYWxvZ01lc3NhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgbm90IHlldCBsb2dnZWQgaW4uIFJlZ2lzdGVyIGFuZCBsb2cgaW4gdG8geW91ciBhY2NvdW50IHRvIGNvbnRyaWJ1dGUuJyxcblx0XHRcdGphOiAn44GC44Gq44Gf44Gv44G+44Gg5rGC6IGe55m+56eR44Gr44Ot44Kw44Kk44Oz44GX44Gm44GE44G+44Gb44KT44CC44Ki44Kr44Km44Oz44OI44KS5L2c5oiQ44GX44CB44Ot44Kw44Kk44Oz44GX44Gm5rGC6IGe55m+56eR44KS5pS55ZaE44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOWwmuacqueZu+W9leaxgumXu+eZvuenkeOAguaCqOWPr+S7peazqOWGjOW5tueZu+W9lei0puWPt++8jOW4ruWKqeWujOWWhOaxgumXu+eZvuenkeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjlsJrmnKrnmbvpjITmsYLogZ7nmb7np5HjgILmgqjlj6/ku6Xms6jlhorkuKbnmbvpjITos6zomZ/vvIzluavliqnlrozlloTmsYLogZ7nmb7np5HjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwibG9naW4tdG8tZWRpdF9fcmVnaXN0ZXJcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHByb3BzLnN0YXRlLm9wZW4sXG4gICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdEaWFsb2dUaXRsZScpLFxuICAgIFwiZGVmYXVsdC1hY3Rpb25cIjoge2xhYmVsOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ2FuY2VsJyl9LFxuICAgIFwicHJpbWFyeS1hY3Rpb25cIjogdW5kZWZpbmVkLFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoJHNldHVwLmVtaXQoJ3VwZGF0ZTpvcGVuJywgJGV2ZW50KSkpLFxuICAgIG9uRGVmYXVsdDogJHNldHVwLmNsb3NlLFxuICAgIG9uUHJpbWFyeTogJGV2ZW50ID0+ICh1bmRlZmluZWQpXG4gIH0sIHtcbiAgICBcImZvb3Rlci10ZXh0XCI6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJhXCIsIHsgaHJlZjogJHNldHVwLmhlbHBVUkwgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnSGVscCcpKSwgMSAvKiBURVhUICovKVxuICAgIF0pLFxuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSksIDEgLyogVEVYVCAqLyksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAucmVnaXN0ZXJcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnUmVnaXN0ZXInKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICB9KSxcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAubG9naW5cbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnTG9naW4nKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJkZWZhdWx0LWFjdGlvblwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcTG9naW5Ub0VkaXRcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcTG9naW5Ub0VkaXRcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxMb2dpblRvRWRpdFxcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcTG9naW5Ub0VkaXRcXFxcQXBwLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1jYjRhYTNjZFwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNBdEIsSUFBQUMsY0FBc0RELFFBQUEsS0FBQTs7QUNDdEQsSUFBQUUsZUFBbUNGLFFBQUEsa0JBQUE7O0FDRG5DLElBQUFHLG9CQUF1QkgsUUFBQSxpQkFBQTtBQUV2QixJQUFNSSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsT0FBQSxHQUFNTixrQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsT0FBQSxHQUFNUCxrQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLFFBQUEsR0FBT1Isa0JBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLFdBQUEsR0FBVVQsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFX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TTtBQUNUQSxXQUFLQyxnQkFBZ0I7QUFDckJELFdBQUtFLGFBQWEsY0FBYzFFLFdBQVcsZUFBZSxDQUFDO0FBRTNELFVBQUlxRCxXQUFXO0FBQ2QsY0FBTXNCLFdBQTRCZCxTQUFTQyxjQUFjLE1BQU07QUFDL0RhLGlCQUFTQyxZQUFZO0FBQ3JCSixhQUFLUixPQUFPVyxRQUFRO01BQ3JCO0FBRUFILFdBQUtSLE9BQU9oRSxXQUFXLE1BQU0sQ0FBQztBQUM5QndFLFdBQUtLLGlCQUFpQixTQUFVQyxXQUE0QjtBQUMzREEsY0FBTUMsZUFBZTtBQUNyQlgsbUJBQVc7TUFDWixDQUFDO0lBQ0Y7RUFDRDtBQUVBLE1BQUksQ0FBQyxRQUFRLFFBQVEsRUFBRVksU0FBU2hDLFFBQVEsR0FBRztBQUMxQ29CLGVBQVc7RUFDWjtBQUNEOztBRGpFQSxNQUFBLEdBQUtyRixtQkFBQWtHLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxjQUFvQjtBQUNoRCxRQUFNO0lBQUNDO0VBQVUsSUFBSWxDLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsTUFBSWdDLFlBQVk7QUFDZjtFQUNEO0FBRUExQixhQUFXO0FBQ1osQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X3Z1ZTMiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDYW5jZWwiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiRWRpdCIsICJIZWxwIiwgIkxvZ2luIiwgIlJlZ2lzdGVyIiwgIkRpYWxvZ1RpdGxlIiwgIkRpYWxvZ01lc3NhZ2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImhlbHBVUkwiLCAicHJvcHMiLCAiX19wcm9wcyIsICJlbWl0IiwgIl9fZW1pdCIsICJjbG9zZSIsICJsb2dpbiIsICJ0cmlnZ2VyTG9naW4iLCAicmVnaXN0ZXIiLCAibG9jYXRpb24iLCAiaHJlZiIsICJyZWdpc3RlclVSTCIsICJpbXBvcnRfdnVlMiIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJvcGVuIiwgInN0YXRlIiwgInRpdGxlIiwgImxhYmVsIiwgIiRldmVudCIsICJvbkRlZmF1bHQiLCAib25QcmltYXJ5IiwgIndpdGhDdHgiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJkZWZhdWx0IiwgImNyZWF0ZVZOb2RlIiwgIndlaWdodCIsICJhY3Rpb24iLCAib25DbGljayIsICJjcmVhdGVUZXh0Vk5vZGUiLCAiXyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIkFwcF9kZWZhdWx0MiIsICJza2luIiwgIndnQWN0aW9uIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc0NpdGl6ZW4iLCAibG9naW5VUkwiLCAidXRpbCIsICJnZXRVcmwiLCAicmV0dXJudG8iLCAiaW5pdERpYWxvZyIsICJyZWFjdGl2ZSIsICJyb290IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiYm9keSIsICJhcHBlbmQiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJvcGVuRGlhbG9nIiwgImNhVmlld3NvdXJjZSIsICJxdWVyeVNlbGVjdG9yIiwgImlkIiwgImxpbmsiLCAicmVwbGFjZUNoaWxkcmVuIiwgInNldEF0dHJpYnV0ZSIsICJlZGl0SWNvbiIsICJjbGFzc05hbWUiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJpbmNsdWRlcyIsICJnZXRCb2R5IiwgInRoZW4iLCAibG9naW5Ub0VkaXQiLCAid2dVc2VyTmFtZSJdCn0K
