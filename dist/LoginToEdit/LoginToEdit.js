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
//! src/AjaxLogin/options.json
var loginElementSelector = 'a:has(.ajaxlogin-mount-point),#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"],.mainpage-top-menu>li:nth-child(2) a';
var configKey = "gadget-AjaxLogin__Initialized";
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
    const $element = $(loginElementSelector);
    if ($element.length && mw.config.get(configKey) === true) {
      $element.trigger("click");
    } else {
      location.href = loginURL;
    }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ2luVG9FZGl0L0xvZ2luVG9FZGl0LnRzIiwgInNyYy9BamF4TG9naW4vb3B0aW9ucy5qc29uIiwgInNyYy9Mb2dpblRvRWRpdC9tb2R1bGVzL2luaXREaWFsb2cudHMiLCAiZGlzdC9Mb2dpblRvRWRpdC9zcmMvTG9naW5Ub0VkaXQvQXBwLnZ1ZSIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpFOlxcQ29kZXNcXFFpdXdlblxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxMb2dpblRvRWRpdFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9Mb2dpblRvRWRpdC9BcHAudnVlIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdERpYWxvZygkYm9keSk7XG59KTtcbiIsICJ7XG5cdFwibG9naW5FbGVtZW50U2VsZWN0b3JcIjogXCJhOmhhcyguYWpheGxvZ2luLW1vdW50LXBvaW50KSwjcHQtbG9naW4+YSwudmVjdG9yLXVzZXItbWVudS1sb2dpbj5hLCN1c2VyLXRvb2xzPmFbaHJlZio9XFxcIlNwZWNpYWxcXFwiXSwubWFpbnBhZ2UtdG9wLW1lbnU+bGk6bnRoLWNoaWxkKDIpIGFcIixcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtQWpheExvZ2luX19Jbml0aWFsaXplZFwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9BamF4TG9naW4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHAsIHJlYWN0aXZlfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9BcHAudnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3Qge3NraW4sIHdnQWN0aW9uLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IHNraW4gPT09ICdjaXRpemVuJztcbmNvbnN0IGxvZ2luVVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpVc2VyTG9naW4nLCB7XG5cdHJldHVybnRvOiB3Z1BhZ2VOYW1lLFxufSk7XG5jb25zdCByZWdpc3RlclVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6Q3JlYXRlQWNjb3VudCcsIHtcblx0cmV0dXJudG86IHdnUGFnZU5hbWUsXG59KTtcblxuaW50ZXJmYWNlIERpYWxvZ1N0YXRlIHtcblx0b3BlbjogYm9vbGVhbjtcbn1cblxuY29uc3QgaW5pdERpYWxvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qgc3RhdGU6IERpYWxvZ1N0YXRlID0gcmVhY3RpdmUoe29wZW46IGZhbHNlfSk7XG5cblx0Y29uc3Qgcm9vdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0JGJvZHkuYXBwZW5kKHJvb3QpO1xuXG5cdGNvbnN0IHRyaWdnZXJMb2dpbiA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoT1BUSU9OUy5sb2dpbkVsZW1lbnRTZWxlY3Rvcik7XG5cdFx0aWYgKCRlbGVtZW50Lmxlbmd0aCAmJiBtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSA9PT0gdHJ1ZSkge1xuXHRcdFx0JGVsZW1lbnQudHJpZ2dlcignY2xpY2snKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9IGxvZ2luVVJMO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRzdGF0ZSxcblx0XHRsb2dpblVSTCxcblx0XHRyZWdpc3RlclVSTCxcblx0XHR0cmlnZ2VyTG9naW4sXG5cdFx0J29uVXBkYXRlOm9wZW4nOiAob3BlbjogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRcdFx0c3RhdGUub3BlbiA9IG9wZW47XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcblxuXHRjb25zdCBvcGVuRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRcdHN0YXRlLm9wZW4gPSAhc3RhdGUub3Blbjtcblx0fTtcblxuXHRjb25zdCAkY2FWaWV3c291cmNlOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2Etdmlld3NvdXJjZScpO1xuXHRpZiAoJGNhVmlld3NvdXJjZS5sZW5ndGgpIHtcblx0XHRjb25zdCBlZGl0SWNvbjogc3RyaW5nID0gaXNDaXRpemVuID8gJzxzcGFuIGNsYXNzPVwiY2l0aXplbi11aS1pY29uIG13LXVpLWljb24td2lraW1lZGlhLWVkaXRcIj48L3NwYW4+JyA6ICcnO1xuXHRcdCRjYVZpZXdzb3VyY2Vcblx0XHRcdC5hdHRyKCdpZCcsICdjYS1lZGl0Jylcblx0XHRcdC5maW5kKCdhJylcblx0XHRcdC5hdHRyKCdhcmlhLWxhYmVsJywgZ2V0TWVzc2FnZSgnRGlhbG9nTWVzc2FnZScpKVxuXHRcdFx0Lmh0bWwoZWRpdEljb24gKyBnZXRNZXNzYWdlKCdFZGl0JykpXG5cdFx0XHQub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRvcGVuRGlhbG9nKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGlmIChbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMod2dBY3Rpb24pKSB7XG5cdFx0b3BlbkRpYWxvZygpO1xuXHR9XG59O1xuXG5leHBvcnQge2luaXREaWFsb2d9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RGlhbG9nfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0c3RhdGU6IHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHR9O1xuXHRsb2dpblVSTDogc3RyaW5nO1xuXHRyZWdpc3RlclVSTDogc3RyaW5nO1xuXHR0cmlnZ2VyTG9naW46ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbdmFsdWU6IGJvb2xlYW5dO1xufT4oKTtcblxuY29uc3QgY2xvc2UgPSAoKTogdm9pZCA9PiB7XG5cdGVtaXQoJ3VwZGF0ZTpvcGVuJywgZmFsc2UpO1xufTtcblxuY29uc3QgbG9naW4gPSAoKTogdm9pZCA9PiB7XG5cdGNsb3NlKCk7XG5cdHByb3BzLnRyaWdnZXJMb2dpbigpO1xufTtcblxuY29uc3QgcmVnaXN0ZXIgPSAoKTogdm9pZCA9PiB7XG5cdGNsb3NlKCk7XG5cdGxvY2F0aW9uLmhyZWYgPSBwcm9wcy5yZWdpc3RlclVSTDtcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdDpvcGVuPVwic3RhdGUub3BlblwiXG5cdFx0OnRpdGxlPVwiZ2V0TWVzc2FnZSgnRGlhbG9nVGl0bGUnKVwiXG5cdFx0OnByaW1hcnktYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdMb2dpbicpLCBhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnfVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDYW5jZWwnKX1cIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QHByaW1hcnk9XCJsb2dpblwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiZW1pdCgndXBkYXRlOm9wZW4nLCAkZXZlbnQpXCJcblx0PlxuXHRcdDxwPnt7IGdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSB9fTwvcD5cblx0XHQ8ZGl2IGNsYXNzPVwibG9naW4tdG8tZWRpdF9fcmVnaXN0ZXJcIj5cblx0XHRcdDxjZHgtYnV0dG9uIHdlaWdodD1cIm5vcm1hbFwiIGFjdGlvbj1cInByb2dyZXNzaXZlXCIgQGNsaWNrPVwicmVnaXN0ZXJcIj5cblx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgnUmVnaXN0ZXInKSB9fVxuXHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4ubG9naW4tdG8tZWRpdF9fcmVnaXN0ZXIge1xuXHRtYXJnaW4tdG9wOiAwLjc1cmVtO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICfmmoLkuI3nmbvlvZXotKblj7cnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pqr5LiN55m75YWl6LOs6JmfJyxcblx0XHR9KSxcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0amE6ICfnt6jpm4YnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0TG9naW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5bey5pyJ6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeW3suacieizrOiZnycsXG5cdFx0fSksXG5cdFx0UmVnaXN0ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVnaXN0ZXInLFxuXHRcdFx0amE6ICfjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rOo5YaM5paw55qE6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+iou+WGiuaWsOeahOizrOiZnycsXG5cdFx0fSksXG5cdFx0RGlhbG9nVGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VsY29tZSB0byBRaXV3ZW4gQmFpa2UhJyxcblx0XHRcdGphOiAn5rGC6IGe55m+56eR44G444KI44GG44GT44Gd77yBJyxcblx0XHRcdCd6aC1oYW5zJzogJ+asoui/juadpeWIsOaxgumXu+eZvuenke+8gScsXG5cdFx0XHQnemgtaGFudCc6ICfmraHov47kvobliLDmsYLogZ7nmb7np5HvvIEnLFxuXHRcdH0pLFxuXHRcdERpYWxvZ01lc3NhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgbm90IHlldCBsb2dnZWQgaW4uIFJlZ2lzdGVyIGFuZCBsb2cgaW4gdG8geW91ciBhY2NvdW50IHRvIGNvbnRyaWJ1dGUuJyxcblx0XHRcdGphOiAn44GC44Gq44Gf44Gv44G+44Gg5rGC6IGe55m+56eR44Gr44Ot44Kw44Kk44Oz44GX44Gm44GE44G+44Gb44KT44CC44Ki44Kr44Km44Oz44OI44KS5L2c5oiQ44GX44CB44Ot44Kw44Kk44Oz44GX44Gm5rGC6IGe55m+56eR44KS5pS55ZaE44GZ44KL44GT44Go44GM44Gn44GN44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOWwmuacqueZu+W9leaxgumXu+eZvuenkeOAguaCqOWPr+S7peazqOWGjOW5tueZu+W9lei0puWPt++8jOW4ruWKqeWujOWWhOaxgumXu+eZvuenkeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjlsJrmnKrnmbvpjITmsYLogZ7nmb7np5HjgILmgqjlj6/ku6Xms6jlhorkuKbnmbvpjITos6zomZ/vvIzluavliqnlrozlloTmsYLogZ7nmb7np5HjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwibG9naW4tdG8tZWRpdF9fcmVnaXN0ZXJcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHByb3BzLnN0YXRlLm9wZW4sXG4gICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdEaWFsb2dUaXRsZScpLFxuICAgIFwicHJpbWFyeS1hY3Rpb25cIjoge2xhYmVsOiAkc2V0dXAuZ2V0TWVzc2FnZSgnTG9naW4nKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJ30sXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDYW5jZWwnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgb25QcmltYXJ5OiAkc2V0dXAubG9naW4sXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2xvc2UsXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgkc2V0dXAuZW1pdCgndXBkYXRlOm9wZW4nLCAkZXZlbnQpKSlcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSksIDEgLyogVEVYVCAqLyksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAucmVnaXN0ZXJcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnUmVnaXN0ZXInKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJwcmltYXJ5LWFjdGlvblwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXExvZ2luVG9FZGl0XFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcTG9naW5Ub0VkaXRcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXExvZ2luVG9FZGl0XFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxMb2dpblRvRWRpdFxcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWNiNGFhM2NkXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyx1QkFBd0I7QUFDeEIsSUFBQUMsWUFBYTs7QUNEZCxJQUFBQyxjQUFzREgsUUFBQSxLQUFBOztBQ0F0RCxJQUFBSSxlQUFtQ0osUUFBQSxrQkFBQTs7QUNEbkMsSUFBQUssb0JBQXVCTCxRQUFBLGlCQUFBO0FBRXZCLElBQU1NLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FB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ekIsVUFBTVEsV0FBbUJ0QixZQUFZLG9FQUFvRTtBQUN6R29CLGtCQUNFRyxLQUFLLE1BQU0sU0FBUyxFQUNwQkYsS0FBSyxHQUFHLEVBQ1JFLEtBQUssY0FBYzVFLFdBQVcsZUFBZSxDQUFDLEVBQzlDNkUsS0FBS0YsV0FBVzNFLFdBQVcsTUFBTSxDQUFDLEVBQ2xDOEUsR0FBRyxTQUFVQyxXQUFtQztBQUNoREEsWUFBTUMsZUFBZTtBQUNyQlIsaUJBQVc7SUFDWixDQUFDO0VBQ0g7QUFFQSxNQUFJLENBQUMsUUFBUSxRQUFRLEVBQUVTLFNBQVNqQyxRQUFRLEdBQUc7QUFDMUN3QixlQUFXO0VBQ1o7QUFDRDs7QUY5REEsTUFBQSxHQUFLMUYsbUJBQUFvRyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsWUFBWXpCLE9BQXNDO0FBQzlFLFFBQU07SUFBQzBCO0VBQVUsSUFBSW5DLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsTUFBSWlDLFlBQVk7QUFDZjtFQUNEO0FBRUEzQixhQUFXQyxLQUFLO0FBQ2pCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImxvZ2luRWxlbWVudFNlbGVjdG9yIiwgImNvbmZpZ0tleSIsICJpbXBvcnRfdnVlMyIsICJpbXBvcnRfY29kZXgiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNhbmNlbCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJFZGl0IiwgIkxvZ2luIiwgIlJlZ2lzdGVyIiwgIkRpYWxvZ1RpdGxlIiwgIkRpYWxvZ01lc3NhZ2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAiY2xvc2UiLCAibG9naW4iLCAidHJpZ2dlckxvZ2luIiwgInJlZ2lzdGVyIiwgImxvY2F0aW9uIiwgImhyZWYiLCAicmVnaXN0ZXJVUkwiLCAiaW1wb3J0X3Z1ZTIiLCAiX2hvaXN0ZWRfMSIsICJjbGFzcyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAib3BlbiIsICJzdGF0ZSIsICJ0aXRsZSIsICJsYWJlbCIsICJhY3Rpb25UeXBlIiwgIm9uUHJpbWFyeSIsICJvbkRlZmF1bHQiLCAiJGV2ZW50IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgIndlaWdodCIsICJhY3Rpb24iLCAib25DbGljayIsICJjcmVhdGVUZXh0Vk5vZGUiLCAiXyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIkFwcF9kZWZhdWx0MiIsICJza2luIiwgIndnQWN0aW9uIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc0NpdGl6ZW4iLCAibG9naW5VUkwiLCAidXRpbCIsICJnZXRVcmwiLCAicmV0dXJudG8iLCAiaW5pdERpYWxvZyIsICIkYm9keSIsICJyZWFjdGl2ZSIsICJyb290IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiYXBwZW5kIiwgIiRlbGVtZW50IiwgIiQiLCAibGVuZ3RoIiwgInRyaWdnZXIiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJvcGVuRGlhbG9nIiwgIiRjYVZpZXdzb3VyY2UiLCAiZmluZCIsICJlZGl0SWNvbiIsICJhdHRyIiwgImh0bWwiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaW5jbHVkZXMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImxvZ2luVG9FZGl0IiwgIndnVXNlck5hbWUiXQp9Cg==
