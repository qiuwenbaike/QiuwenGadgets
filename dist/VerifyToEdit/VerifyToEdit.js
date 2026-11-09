/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LoginToEdit}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/VerifyToEdit}
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

// dist/VerifyToEdit/VerifyToEdit.js
//! src/VerifyToEdit/VerifyToEdit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/VerifyToEdit/modules/initDialog.ts
var import_vue3 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/VerifyToEdit/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Cancel: (0, import_ext_gadget.localize)({
      en: "Remind me later",
      "zh-hans": "暂不认证",
      "zh-hant": "暫不認證"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Help: (0, import_ext_gadget.localize)({
      en: "Get help",
      "zh-hans": "了解详情",
      "zh-hant": "了解詳情"
    }),
    Verify: (0, import_ext_gadget.localize)({
      en: "Verify your mobile phone number",
      "zh-hans": "认证手机号码",
      "zh-hant": "認證行動電話號碼"
    }),
    DialogTitle: (0, import_ext_gadget.localize)({
      en: "Verify your mobile phone number",
      "zh-hans": "完成手机号码认证",
      "zh-hant": "完成行動電話號碼認證"
    }),
    DialogMessage: (0, import_ext_gadget.localize)({
      en: "You have logged in, but your mobile phone number has not been verified yet. In order to prevent vandalism, you must complete phone number verification before starting editing.",
      "zh-hans": "您已登录求闻百科，但您暂未完成手机号码认证。基于减少破坏的目的，在开始编辑前，您必须完成手机号码认证。",
      "zh-hant": "您已登錄求聞百科，但您暫未完成行動電話號碼認證。基於減少破壞的目的，在開始編輯前，您必須完成行動電話號碼認證。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var helpURL = "https://www.qiuwenbaike.cn/wiki/H:RNRS";
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    state: {
      type: Object,
      required: true
    }
  },
  emits: ["update:open"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const emit = __emit;
    const verifyURL = "".concat(mw.util.getUrl("Special:Preferences"), "#mw-input-wprnrshook-module");
    const close = () => {
      emit("update:open", false);
    };
    const verify = () => {
      close();
      location.href = verifyURL;
    };
    const __returned__ = {
      emit,
      helpURL,
      verifyURL,
      close,
      verify,
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
    open: $props.state.open,
    title: $setup.getMessage("DialogTitle"),
    "primary-action": {
      label: $setup.getMessage("Verify"),
      actionType: "progressive"
    },
    "default-action": {
      label: $setup.getMessage("Cancel")
    },
    "use-close-button": true,
    onPrimary: $setup.verify,
    onDefault: $setup.close,
    "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.emit("update:open", $event))
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
    )]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "primary-action", "default-action"]);
}
//! src/VerifyToEdit/App.vue
App_default.render = render;
App_default.__file = "src\\VerifyToEdit\\App.vue";
var App_default2 = App_default;
//! src/VerifyToEdit/modules/initDialog.ts
var {
  skin,
  wgAction
} = mw.config.get();
var isCitizen = skin === "citizen";
var initDialog = () => {
  const state = (0, import_vue3.reactive)({
    open: false
  });
  const root = document.createElement("div");
  document.body.append(root);
  const app = (0, import_vue3.createApp)(App_default2, {
    state,
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
      link.setAttribute("aria-label", getMessage("DialogMessage"));
      if (isCitizen) {
        const editIcon = document.createElement("span");
        editIcon.className = "citizen-ui-icon mw-ui-icon-wikimedia-edit";
        link.replaceChildren(editIcon, getMessage("Edit"));
      } else {
        link.replaceChildren(getMessage("Edit"));
      }
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
//! src/VerifyToEdit/VerifyToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit() {
  const {
    wgUserName
  } = mw.config.get();
  if (!wgUserName) {
    return;
  }
  if ((0, import_ext_gadget2.userIsInGroup)(["bot", "qiuwen", "rnrsverify-confirmed", "rnrsverify-exempt", "steward"])) {
    return;
  }
  initDialog();
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZlcmlmeVRvRWRpdC9WZXJpZnlUb0VkaXQudHMiLCAic3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL2luaXREaWFsb2cudHMiLCAiZGlzdC9WZXJpZnlUb0VkaXQvc3JjL1ZlcmlmeVRvRWRpdC9BcHAudnVlIiwgInNyYy9WZXJpZnlUb0VkaXQvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWZXJpZnlUb0VkaXRcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmVyaWZ5VG9FZGl0L0FwcC52dWUiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keSwgdXNlcklzSW5Hcm91cH0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7aW5pdERpYWxvZ30gZnJvbSAnLi9tb2R1bGVzL2luaXREaWFsb2cnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGxvZ2luVG9FZGl0KCk6IHZvaWQge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHVzZXJJc0luR3JvdXAoWydib3QnLCAncWl1d2VuJywgJ3JucnN2ZXJpZnktY29uZmlybWVkJywgJ3JucnN2ZXJpZnktZXhlbXB0JywgJ3N0ZXdhcmQnXSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpbml0RGlhbG9nKCk7XG59KTtcbiIsICJpbXBvcnQge3R5cGUgQXBwIGFzIFZ1ZUFwcCwgY3JlYXRlQXBwLCByZWFjdGl2ZX0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHtza2luLCB3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBpc0NpdGl6ZW46IGJvb2xlYW4gPSBza2luID09PSAnY2l0aXplbic7XG5cbmludGVyZmFjZSBEaWFsb2dTdGF0ZSB7XG5cdG9wZW46IGJvb2xlYW47XG59XG5cbmNvbnN0IGluaXREaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHN0YXRlOiBEaWFsb2dTdGF0ZSA9IHJlYWN0aXZlKHtvcGVuOiBmYWxzZX0pO1xuXG5cdGNvbnN0IHJvb3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXG5cdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+ID0gY3JlYXRlQXBwKEFwcCwge1xuXHRcdHN0YXRlLFxuXHRcdCdvblVwZGF0ZTpvcGVuJzogKG9wZW46IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHRcdHN0YXRlLm9wZW4gPSBvcGVuO1xuXHRcdH0sXG5cdH0pO1xuXHRhcHAubW91bnQocm9vdCk7XG5cblx0Y29uc3Qgb3BlbkRpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0XHRzdGF0ZS5vcGVuID0gIXN0YXRlLm9wZW47XG5cdH07XG5cblx0Y29uc3QgY2FWaWV3c291cmNlOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2Etdmlld3NvdXJjZScpO1xuXHRpZiAoY2FWaWV3c291cmNlKSB7XG5cdFx0Y2FWaWV3c291cmNlLmlkID0gJ2NhLWVkaXQnO1xuXG5cdFx0Y29uc3QgbGluazogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gY2FWaWV3c291cmNlLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcblx0XHRpZiAobGluaykge1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykpO1xuXG5cdFx0XHRpZiAoaXNDaXRpemVuKSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRJY29uOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGVkaXRJY29uLmNsYXNzTmFtZSA9ICdjaXRpemVuLXVpLWljb24gbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdCc7XG5cdFx0XHRcdGxpbmsucmVwbGFjZUNoaWxkcmVuKGVkaXRJY29uLCBnZXRNZXNzYWdlKCdFZGl0JykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGluay5yZXBsYWNlQ2hpbGRyZW4oZ2V0TWVzc2FnZSgnRWRpdCcpKTtcblx0XHRcdH1cblxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRvcGVuRGlhbG9nKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdG9wZW5EaWFsb2coKTtcblx0fVxufTtcblxuZXhwb3J0IHtpbml0RGlhbG9nfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhEaWFsb2d9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmRlZmluZVByb3BzPHtcblx0c3RhdGU6IHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHR9O1xufT4oKTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0J3VwZGF0ZTpvcGVuJzogW3ZhbHVlOiBib29sZWFuXTtcbn0+KCk7XG5cbmNvbnN0IGhlbHBVUkw6IHN0cmluZyA9ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL0g6Uk5SUyc7XG5jb25zdCB2ZXJpZnlVUkw6IHN0cmluZyA9IGAke213LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlByZWZlcmVuY2VzJyl9I213LWlucHV0LXdwcm5yc2hvb2stbW9kdWxlYDtcblxuY29uc3QgY2xvc2UgPSAoKTogdm9pZCA9PiB7XG5cdGVtaXQoJ3VwZGF0ZTpvcGVuJywgZmFsc2UpO1xufTtcblxuY29uc3QgdmVyaWZ5ID0gKCk6IHZvaWQgPT4ge1xuXHRjbG9zZSgpO1xuXHRsb2NhdGlvbi5ocmVmID0gdmVyaWZ5VVJMO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0Om9wZW49XCJzdGF0ZS5vcGVuXCJcblx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdEaWFsb2dUaXRsZScpXCJcblx0XHQ6cHJpbWFyeS1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ1ZlcmlmeScpLCBhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnfVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDYW5jZWwnKX1cIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QHByaW1hcnk9XCJ2ZXJpZnlcIlxuXHRcdEBkZWZhdWx0PVwiY2xvc2VcIlxuXHRcdEB1cGRhdGU6b3Blbj1cImVtaXQoJ3VwZGF0ZTpvcGVuJywgJGV2ZW50KVwiXG5cdD5cblx0XHQ8cD57eyBnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykgfX08L3A+XG5cdFx0PHRlbXBsYXRlICNmb290ZXItdGV4dD5cblx0XHRcdDxhIDpocmVmPVwiaGVscFVSTFwiPnt7IGdldE1lc3NhZ2UoJ0hlbHAnKSB9fTwvYT5cblx0XHQ8L3RlbXBsYXRlPlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVtaW5kIG1lIGxhdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aaguS4jeiupOivgScsXG5cdFx0XHQnemgtaGFudCc6ICfmmqvkuI3oqo3orYknLFxuXHRcdH0pLFxuXHRcdEVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6LyvJyxcblx0XHR9KSxcblx0XHRIZWxwOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dldCBoZWxwJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S6huino+ivpuaDhScsXG5cdFx0XHQnemgtaGFudCc6ICfkuobop6PoqbPmg4UnLFxuXHRcdH0pLFxuXHRcdFZlcmlmeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdWZXJpZnkgeW91ciBtb2JpbGUgcGhvbmUgbnVtYmVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iupOivgeaJi+acuuWPt+eggScsXG5cdFx0XHQnemgtaGFudCc6ICfoqo3orYnooYzli5Xpm7voqbHomZ/norwnLFxuXHRcdH0pLFxuXHRcdERpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1ZlcmlmeSB5b3VyIG1vYmlsZSBwaG9uZSBudW1iZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6M5oiQ5omL5py65Y+356CB6K6k6K+BJyxcblx0XHRcdCd6aC1oYW50JzogJ+WujOaIkOihjOWLlembu+ipseiZn+eivOiqjeitiScsXG5cdFx0fSksXG5cdFx0RGlhbG9nTWVzc2FnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBsb2dnZWQgaW4sIGJ1dCB5b3VyIG1vYmlsZSBwaG9uZSBudW1iZXIgaGFzIG5vdCBiZWVuIHZlcmlmaWVkIHlldC4gSW4gb3JkZXIgdG8gcHJldmVudCB2YW5kYWxpc20sIHlvdSBtdXN0IGNvbXBsZXRlIHBob25lIG51bWJlciB2ZXJpZmljYXRpb24gYmVmb3JlIHN0YXJ0aW5nIGVkaXRpbmcuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3sueZu+W9leaxgumXu+eZvuenke+8jOS9huaCqOaaguacquWujOaIkOaJi+acuuWPt+eggeiupOivgeOAguWfuuS6juWHj+WwkeegtOWdj+eahOebrueahO+8jOWcqOW8gOWni+e8lui+keWJje+8jOaCqOW/hemhu+WujOaIkOaJi+acuuWPt+eggeiupOivgeOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7LnmbvpjITmsYLogZ7nmb7np5HvvIzkvYbmgqjmmqvmnKrlrozmiJDooYzli5Xpm7voqbHomZ/norzoqo3orYnjgILln7rmlrzmuJvlsJHnoLTlo57nmoTnm67nmoTvvIzlnKjplovlp4vnt6jovK/liY3vvIzmgqjlv4XpoIjlrozmiJDooYzli5Xpm7voqbHomZ/norzoqo3orYnjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICBvcGVuOiAkcHJvcHMuc3RhdGUub3BlbixcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ0RpYWxvZ1RpdGxlJyksXG4gICAgXCJwcmltYXJ5LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdWZXJpZnknKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJ30sXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDYW5jZWwnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgb25QcmltYXJ5OiAkc2V0dXAudmVyaWZ5LFxuICAgIG9uRGVmYXVsdDogJHNldHVwLmNsb3NlLFxuICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoJHNldHVwLmVtaXQoJ3VwZGF0ZTpvcGVuJywgJGV2ZW50KSkpXG4gIH0sIHtcbiAgICBcImZvb3Rlci10ZXh0XCI6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJhXCIsIHsgaHJlZjogJHNldHVwLmhlbHBVUkwgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnSGVscCcpKSwgMSAvKiBURVhUICovKVxuICAgIF0pLFxuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSksIDEgLyogVEVYVCAqLylcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJwcmltYXJ5LWFjdGlvblwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWZXJpZnlUb0VkaXRcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZlcmlmeVRvRWRpdFxcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmVyaWZ5VG9FZGl0XFxcXEFwcC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXFDQyxRQUFBLGlCQUFBOztBQ0FyQyxJQUFBQyxjQUFzREQsUUFBQSxLQUFBOztBQ0N0RCxJQUFBRSxlQUF3QkYsUUFBQSxrQkFBQTs7QUNEeEIsSUFBQUcsb0JBQXVCSCxRQUFBLGlCQUFBO0FBRXZCLElBQU1JLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsT0FBQSxHQUFNTCxrQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLE9BQUEsR0FBTU4sa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxTQUFBLEdBQVFQLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLGNBQUEsR0FBYVIsa0JBQUFHLFVBQVM7TUFDckJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREssZ0JBQUEsR0FBZVQsa0JBQUFHLFVBQVM7TUFDdkJDLElBQUk7TUFDSixXQUNDO01BQ0QsV0FDQztJQUNGLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTU0sZUFBZVQsZ0JBQWdCO0FBRXJDLElBQU1VLGFBQWdE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QkFBU0MsWUFBWTtBQUNyQkgsYUFBS0ksZ0JBQWdCRixVQUFVN0QsV0FBVyxNQUFNLENBQUM7TUFDbEQsT0FBTztBQUNOMkQsYUFBS0ksZ0JBQWdCL0QsV0FBVyxNQUFNLENBQUM7TUFDeEM7QUFFQTJELFdBQUtLLGlCQUFpQixTQUFVQyxXQUE0QjtBQUMzREEsY0FBTUMsZUFBZTtBQUNyQlgsbUJBQVc7TUFDWixDQUFDO0lBQ0Y7RUFDRDtBQUVBLE1BQUksQ0FBQyxRQUFRLFFBQVEsRUFBRVksU0FBUzFCLFFBQVEsR0FBRztBQUMxQ2MsZUFBVztFQUNaO0FBQ0Q7O0FEcERBLE1BQUEsR0FBS3RFLG1CQUFBbUYsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGNBQW9CO0FBQ2hELFFBQU07SUFBQ0M7RUFBVSxJQUFJaEUsR0FBR21DLE9BQU9DLElBQUk7QUFFbkMsTUFBSSxDQUFDNEIsWUFBWTtBQUNoQjtFQUNEO0FBRUEsT0FBQSxHQUFJdEYsbUJBQUF1RixlQUFjLENBQUMsT0FBTyxVQUFVLHdCQUF3QixxQkFBcUIsU0FBUyxDQUFDLEdBQUc7QUFDN0Y7RUFDRDtBQUVBM0IsYUFBVztBQUNaLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF92dWUzIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2FuY2VsIiwgImxvY2FsaXplIiwgImVuIiwgIkVkaXQiLCAiSGVscCIsICJWZXJpZnkiLCAiRGlhbG9nVGl0bGUiLCAiRGlhbG9nTWVzc2FnZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaGVscFVSTCIsICJlbWl0IiwgIl9fZW1pdCIsICJ2ZXJpZnlVUkwiLCAiY29uY2F0IiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImNsb3NlIiwgInZlcmlmeSIsICJsb2NhdGlvbiIsICJocmVmIiwgImltcG9ydF92dWUyIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJvcGVuIiwgInN0YXRlIiwgInRpdGxlIiwgImxhYmVsIiwgImFjdGlvblR5cGUiLCAib25QcmltYXJ5IiwgIm9uRGVmYXVsdCIsICIkZXZlbnQiLCAid2l0aEN0eCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgImRlZmF1bHQiLCAiXyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiQXBwX2RlZmF1bHQyIiwgInNraW4iLCAid2dBY3Rpb24iLCAiY29uZmlnIiwgImdldCIsICJpc0NpdGl6ZW4iLCAiaW5pdERpYWxvZyIsICJyZWFjdGl2ZSIsICJyb290IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiYm9keSIsICJhcHBlbmQiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJvcGVuRGlhbG9nIiwgImNhVmlld3NvdXJjZSIsICJxdWVyeVNlbGVjdG9yIiwgImlkIiwgImxpbmsiLCAic2V0QXR0cmlidXRlIiwgImVkaXRJY29uIiwgImNsYXNzTmFtZSIsICJyZXBsYWNlQ2hpbGRyZW4iLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJpbmNsdWRlcyIsICJnZXRCb2R5IiwgInRoZW4iLCAibG9naW5Ub0VkaXQiLCAid2dVc2VyTmFtZSIsICJ1c2VySXNJbkdyb3VwIl0KfQo=
