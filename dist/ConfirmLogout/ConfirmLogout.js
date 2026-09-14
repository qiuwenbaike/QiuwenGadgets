/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ConfirmLogout}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

// dist/ConfirmLogout/ConfirmLogout.js
//! src/ConfirmLogout/options.json
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var logoutElementSelector = '#ca-cb-logout>a,#topbar>a[href*="UserLogout"],#pt-logout>a';
var logoutElementSelectorOfVector2022StickyHeader = "#pt-logout-sticky-header>a";
var version = "3.0";
//! src/ConfirmLogout/modules/util/refreshEventListener.ts
var import_ext_gadget = require("ext.gadget.FilterAlteredClicks");
var refreshEventListener = ($element, clickListener2) => {
  const hoverListener = () => {
    $element.off("click");
    $element.on("click", (0, import_ext_gadget.filterAlteredClicks)(clickListener2));
  };
  const hoverListenerWithDebounce = mw.util.debounce(hoverListener, 200, true);
  $element.on("mouseover touchstart", {
    passive: true
  }, hoverListenerWithDebounce);
};
//! src/ConfirmLogout/modules/addListener.ts
var {
  skin
} = mw.config.get();
var clickListener = (openConfirmDialog, event) => {
  event.preventDefault();
  openConfirmDialog();
};
var addListener = ($element, openConfirmDialog) => {
  var _$body$get;
  refreshEventListener($element, (event) => {
    clickListener(openConfirmDialog, event);
  });
  if (skin !== "vector-2022") {
    return;
  }
  const $body = $element.parents("body");
  const observerCallback = (_mutations, observer) => {
    if (!$body.hasClass("vector-sticky-header-visible")) {
      return;
    }
    const SELECTOR = logoutElementSelectorOfVector2022StickyHeader;
    const element = document.querySelector(SELECTOR);
    if (!element) {
      return;
    }
    const elementClone = element.cloneNode(true);
    element.replaceWith(elementClone);
    refreshEventListener($body.find(SELECTOR), (event) => {
      clickListener(openConfirmDialog, event);
    });
    observer.disconnect();
  };
  const mutationObserver = new MutationObserver(observerCallback);
  mutationObserver.observe((_$body$get = $body.get(0)) !== null && _$body$get !== void 0 ? _$body$get : document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  });
};
//! src/ConfirmLogout/ConfirmLogout.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/ConfirmLogout/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget2.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    Confirm: (0, import_ext_gadget2.localize)({
      en: "Confirm logout?",
      ja: "ログアウトしますか？",
      "zh-hans": "您确定要退出吗？",
      "zh-hant": "您確定要登出嗎？"
    }),
    ConfirmAction: (0, import_ext_gadget2.localize)({
      en: "Confirm",
      ja: "確認",
      "zh-hans": "确认",
      "zh-hant": "確認"
    }),
    Cancel: (0, import_ext_gadget2.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "取消",
      "zh-hant": "取消"
    }),
    Succeed: (0, import_ext_gadget2.localize)({
      en: "Logout succeed. Refreshing...",
      ja: "ログアウトに成功しました。再読み込みします...",
      "zh-hans": "退出成功，即将刷新页面……",
      "zh-hant": "登出成功，即將重新載入……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ConfirmLogout/modules/showConfirmDialog.ts
var import_vue3 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    state: {
      type: Object,
      required: true
    },
    onConfirm: {
      type: Function,
      required: true
    },
    message: {
      type: String,
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
    const __returned__ = {
      props,
      emit,
      close,
      confirm,
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
    title: $props.message,
    "primary-action": {
      label: $setup.getMessage("ConfirmAction"),
      actionType: "progressive"
    },
    "default-action": {
      label: $setup.getMessage("Cancel")
    },
    "use-close-button": true,
    onPrimary: $setup.confirm,
    onDefault: $setup.close,
    "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.emit("update:open", $event))
  }, null, 8, ["open", "title", "primary-action", "default-action"]);
}
//! src/ConfirmLogout/App.vue
App_default.render = render;
App_default.__file = "src\\ConfirmLogout\\App.vue";
var App_default2 = App_default;
//! src/ConfirmLogout/modules/showConfirmDialog.ts
var showConfirmDialog = (onConfirm, $body, message) => {
  const state = (0, import_vue3.reactive)({
    open: false
  });
  const root = document.createElement("div");
  $body.append(root);
  const app = (0, import_vue3.createApp)(App_default2, {
    state,
    onConfirm,
    message,
    "onUpdate:open": (open) => {
      state.open = open;
    }
  });
  app.mount(root);
  return () => {
    state.open = true;
  };
};
//! src/ConfirmLogout/ConfirmLogout.ts
var import_ext_gadget7 = require("ext.gadget.Toastify");
//! src/ConfirmLogout/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("ConfirmLogout/".concat(version));
//! src/ConfirmLogout/modules/util/logout.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var logout = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (toastifyInstance) {
    yield api.postWithEditToken({
      action: "logout"
    });
    toastifyInstance.hideToast();
    (0, import_ext_gadget4.toastify)({
      text: getMessage("Succeed")
    }, "success");
    location.reload();
  });
  return function logout2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/ConfirmLogout/modules/util/showError.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[ConfirmLogout] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget5.toastify)({
    text: getMessage("Network error")
  }, "error");
};
//! src/ConfirmLogout/modules/tryLogout.ts
var tryLogout = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (toastifyInstance) {
    try {
      yield logout(toastifyInstance);
    } catch (error) {
      showError(error, toastifyInstance);
    }
  });
  return function tryLogout2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/ConfirmLogout/ConfirmLogout.ts
var {
  wgUserName
} = mw.config.get();
void (0, import_ext_gadget6.getBody)().then(function confirmLogout($body) {
  if (!wgUserName) {
    return;
  }
  const $element = $body.find(logoutElementSelector);
  if (!$element.length) {
    return;
  }
  const openConfirmDialog = showConfirmDialog(() => {
    const toastifyInstance = (0, import_ext_gadget7.toastify)({
      text: mw.message("logging-out-notify").parse(),
      duration: -1
    }, "info");
    void tryLogout(toastifyInstance);
  }, $body, getMessage("Confirm"));
  addListener($element, openConfirmDialog);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbmZpcm1Mb2dvdXQvb3B0aW9ucy5qc29uIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9yZWZyZXNoRXZlbnRMaXN0ZW5lci50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L0NvbmZpcm1Mb2dvdXQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvc2hvd0NvbmZpcm1EaWFsb2cudHMiLCAiZGlzdC9Db25maXJtTG9nb3V0L3NyYy9Db25maXJtTG9nb3V0L0FwcC52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXENvbmZpcm1Mb2dvdXRcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvQ29uZmlybUxvZ291dC9BcHAudnVlIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvYXBpLnRzIiwgInNyYy9Db25maXJtTG9nb3V0L21vZHVsZXMvdXRpbC9sb2dvdXQudHMiLCAic3JjL0NvbmZpcm1Mb2dvdXQvbW9kdWxlcy91dGlsL3Nob3dFcnJvci50cyIsICJzcmMvQ29uZmlybUxvZ291dC9tb2R1bGVzL3RyeUxvZ291dC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImxvZ291dEVsZW1lbnRTZWxlY3RvclwiOiBcIiNjYS1jYi1sb2dvdXQ+YSwjdG9wYmFyPmFbaHJlZio9XFxcIlVzZXJMb2dvdXRcXFwiXSwjcHQtbG9nb3V0PmFcIixcblx0XCJsb2dvdXRFbGVtZW50U2VsZWN0b3JPZlZlY3RvcjIwMjJTdGlja3lIZWFkZXJcIjogXCIjcHQtbG9nb3V0LXN0aWNreS1oZWFkZXI+YVwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcblxuY29uc3QgcmVmcmVzaEV2ZW50TGlzdGVuZXIgPSAoJGVsZW1lbnQ6IEpRdWVyeSwgY2xpY2tMaXN0ZW5lcjogKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRjb25zdCBob3Zlckxpc3RlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdCRlbGVtZW50Lm9mZignY2xpY2snKTtcblx0XHQkZWxlbWVudC5vbignY2xpY2snLCBmaWx0ZXJBbHRlcmVkQ2xpY2tzKGNsaWNrTGlzdGVuZXIpKTtcblx0fTtcblx0Y29uc3QgaG92ZXJMaXN0ZW5lcldpdGhEZWJvdW5jZTogdHlwZW9mIGhvdmVyTGlzdGVuZXIgPSBtdy51dGlsLmRlYm91bmNlKGhvdmVyTGlzdGVuZXIsIDIwMCwgdHJ1ZSk7XG5cblx0JGVsZW1lbnQub24oJ21vdXNlb3ZlciB0b3VjaHN0YXJ0Jywge3Bhc3NpdmU6IHRydWV9LCBob3Zlckxpc3RlbmVyV2l0aERlYm91bmNlKTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaEV2ZW50TGlzdGVuZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7cmVmcmVzaEV2ZW50TGlzdGVuZXJ9IGZyb20gJy4vdXRpbC9yZWZyZXNoRXZlbnRMaXN0ZW5lcic7XG5cbmNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgY2xpY2tMaXN0ZW5lciA9IChvcGVuQ29uZmlybURpYWxvZzogKCkgPT4gdm9pZCwgZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdG9wZW5Db25maXJtRGlhbG9nKCk7XG59O1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICgkZWxlbWVudDogSlF1ZXJ5LCBvcGVuQ29uZmlybURpYWxvZzogKCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRyZWZyZXNoRXZlbnRMaXN0ZW5lcigkZWxlbWVudCwgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGNsaWNrTGlzdGVuZXIob3BlbkNvbmZpcm1EaWFsb2csIGV2ZW50KTtcblx0fSk7XG5cblx0aWYgKHNraW4gIT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkZWxlbWVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0Y29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChfbXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdLCBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcik6IHZvaWQgPT4ge1xuXHRcdGlmICghJGJvZHkuaGFzQ2xhc3MoJ3ZlY3Rvci1zdGlja3ktaGVhZGVyLXZpc2libGUnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IFNFTEVDVE9SOiBzdHJpbmcgPSBPUFRJT05TLmxvZ291dEVsZW1lbnRTZWxlY3Rvck9mVmVjdG9yMjAyMlN0aWNreUhlYWRlcjtcblx0XHRjb25zdCBlbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SKTtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50Q2xvbmU6IE5vZGUgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHRlbGVtZW50LnJlcGxhY2VXaXRoKGVsZW1lbnRDbG9uZSk7XG5cblx0XHRyZWZyZXNoRXZlbnRMaXN0ZW5lcigkYm9keS5maW5kKFNFTEVDVE9SKSwgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y2xpY2tMaXN0ZW5lcihvcGVuQ29uZmlybURpYWxvZywgZXZlbnQpO1xuXHRcdH0pO1xuXHRcdG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0fTtcblx0Y29uc3QgbXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2spO1xuXHRtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoJGJvZHkuZ2V0KDApID8/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ10sXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL21vZHVsZXMvYWRkTGlzdGVuZXInO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3Nob3dDb25maXJtRGlhbG9nfSBmcm9tICcuL21vZHVsZXMvc2hvd0NvbmZpcm1EaWFsb2cnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5pbXBvcnQge3RyeUxvZ291dH0gZnJvbSAnLi9tb2R1bGVzL3RyeUxvZ291dCc7XG5cbmNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBjb25maXJtTG9nb3V0KCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoIXdnVXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZChPUFRJT05TLmxvZ291dEVsZW1lbnRTZWxlY3Rvcik7XG5cdGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgb3BlbkNvbmZpcm1EaWFsb2cgPSBzaG93Q29uZmlybURpYWxvZyhcblx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBtdy5tZXNzYWdlKCdsb2dnaW5nLW91dC1ub3RpZnknKS5wYXJzZSgpLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXHRcdFx0dm9pZCB0cnlMb2dvdXQodG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0fSxcblx0XHQkYm9keSxcblx0XHRnZXRNZXNzYWdlKCdDb25maXJtJylcblx0KTtcblxuXHRhZGRMaXN0ZW5lcigkZWxlbWVudCwgb3BlbkNvbmZpcm1EaWFsb2cpO1xufSk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdENvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybSBsb2dvdXQ/Jyxcblx0XHRcdGphOiAn44Ot44Kw44Ki44Km44OI44GX44G+44GZ44GL77yfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOehruWumuimgemAgOWHuuWQl++8nycsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjnorrlrpropoHnmbvlh7rll47vvJ8nLFxuXHRcdH0pLFxuXHRcdENvbmZpcm1BY3Rpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybScsXG5cdFx0XHRqYTogJ+eiuuiqjScsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqQnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqNJyxcblx0XHR9KSxcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdGphOiAn44Kt44Oj44Oz44K744OrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WPlua2iCcsXG5cdFx0XHQnemgtaGFudCc6ICflj5bmtognLFxuXHRcdH0pLFxuXHRcdFN1Y2NlZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nb3V0IHN1Y2NlZWQuIFJlZnJlc2hpbmcuLi4nLFxuXHRcdFx0amE6ICfjg63jgrDjgqLjgqbjg4jjgavmiJDlip/jgZfjgb7jgZfjgZ/jgILlho3oqq3jgb/ovrzjgb/jgZfjgb7jgZkuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6YCA5Ye65oiQ5Yqf77yM5Y2z5bCG5Yi35paw6aG16Z2i4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WHuuaIkOWKn++8jOWNs+Wwh+mHjeaWsOi8ieWFpeKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHAsIHJlYWN0aXZlfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9BcHAudnVlJztcblxuaW50ZXJmYWNlIENvbmZpcm1EaWFsb2dTdGF0ZSB7XG5cdG9wZW46IGJvb2xlYW47XG59XG5cbmNvbnN0IHNob3dDb25maXJtRGlhbG9nID0gKG9uQ29uZmlybTogKCkgPT4gdm9pZCwgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+LCBtZXNzYWdlOiBzdHJpbmcpOiAoKCkgPT4gdm9pZCkgPT4ge1xuXHRjb25zdCBzdGF0ZTogQ29uZmlybURpYWxvZ1N0YXRlID0gcmVhY3RpdmUoe29wZW46IGZhbHNlfSk7XG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0JGJvZHkuYXBwZW5kKHJvb3QpO1xuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRzdGF0ZSxcblx0XHRvbkNvbmZpcm0sXG5cdFx0bWVzc2FnZSxcblx0XHQnb25VcGRhdGU6b3Blbic6IChvcGVuOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRzdGF0ZS5vcGVuID0gb3Blbjtcblx0XHR9LFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xuXG5cdHJldHVybiAoKTogdm9pZCA9PiB7XG5cdFx0c3RhdGUub3BlbiA9IHRydWU7XG5cdH07XG59O1xuXG5leHBvcnQge3Nob3dDb25maXJtRGlhbG9nfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhEaWFsb2d9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRzdGF0ZToge1xuXHRcdG9wZW46IGJvb2xlYW47XG5cdH07XG5cdG9uQ29uZmlybTogKCkgPT4gdm9pZDtcblx0bWVzc2FnZTogc3RyaW5nO1xufT4oKTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0J3VwZGF0ZTpvcGVuJzogW3ZhbHVlOiBib29sZWFuXTtcbn0+KCk7XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcbn07XG5cbmNvbnN0IGNvbmZpcm0gPSAoKTogdm9pZCA9PiB7XG5cdGNsb3NlKCk7XG5cdHByb3BzLm9uQ29uZmlybSgpO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0Om9wZW49XCJzdGF0ZS5vcGVuXCJcblx0XHQ6dGl0bGU9XCJtZXNzYWdlXCJcblx0XHQ6cHJpbWFyeS1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0NvbmZpcm1BY3Rpb24nKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJ31cIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cIntsYWJlbDogZ2V0TWVzc2FnZSgnQ2FuY2VsJyl9XCJcblx0XHQ6dXNlLWNsb3NlLWJ1dHRvbj1cInRydWVcIlxuXHRcdEBwcmltYXJ5PVwiY29uZmlybVwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiZW1pdCgndXBkYXRlOm9wZW4nLCAkZXZlbnQpXCJcblx0Lz5cbjwvdGVtcGxhdGU+XG4iLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRwcm9wcy5zdGF0ZS5vcGVuLFxuICAgIHRpdGxlOiAkcHJvcHMubWVzc2FnZSxcbiAgICBcInByaW1hcnktYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0NvbmZpcm1BY3Rpb24nKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJ30sXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDYW5jZWwnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgb25QcmltYXJ5OiAkc2V0dXAuY29uZmlybSxcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZSxcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCRzZXR1cC5lbWl0KCd1cGRhdGU6b3BlbicsICRldmVudCkpKVxuICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJwcmltYXJ5LWFjdGlvblwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxDb25maXJtTG9nb3V0XFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxDb25maXJtTG9nb3V0XFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxDb25maXJtTG9nb3V0XFxcXEFwcC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQ29uZmlybUxvZ291dC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBsb2dvdXQgPSBhc3luYyAodG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdGFjdGlvbjogJ2xvZ291dCcsXG5cdH0pO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1N1Y2NlZWQnKSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuZXhwb3J0IHtsb2dvdXR9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yOiB1bmtub3duLCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlKTogdm9pZCA9PiB7XG5cdGNvbnNvbGUuZXJyb3IoJ1tDb25maXJtTG9nb3V0XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdH0sXG5cdFx0J2Vycm9yJ1xuXHQpO1xufTtcblxuZXhwb3J0IHtzaG93RXJyb3J9O1xuIiwgImltcG9ydCB7bG9nb3V0fSBmcm9tICcuL3V0aWwvbG9nb3V0JztcbmltcG9ydCB7c2hvd0Vycm9yfSBmcm9tICcuL3V0aWwvc2hvd0Vycm9yJztcblxuY29uc3QgdHJ5TG9nb3V0ID0gYXN5bmMgKHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBsb2dvdXQodG9hc3RpZnlJbnN0YW5jZSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0c2hvd0Vycm9yKGVycm9yLCB0b2FzdGlmeUluc3RhbmNlKTtcblx0fVxufTtcblxuZXhwb3J0IHt0cnlMb2dvdXR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHdCQUF5QjtBQUN6QixJQUFBQyxnREFBaUQ7QUFDakQsSUFBQUMsVUFBVzs7QUNIWixJQUFBQyxvQkFBa0NDLFFBQUEsZ0NBQUE7QUFFbEMsSUFBTUMsdUJBQXVCQSxDQUFDQyxVQUFrQkMsbUJBQTREO0FBQzNHLFFBQU1DLGdCQUFnQkEsTUFBWTtBQUNqQ0YsYUFBU0csSUFBSSxPQUFPO0FBQ3BCSCxhQUFTSSxHQUFHLFVBQUEsR0FBU1Asa0JBQUFRLHFCQUFvQkosY0FBYSxDQUFDO0VBQ3hEO0FBQ0EsUUFBTUssNEJBQWtEQyxHQUFHQyxLQUFLQyxTQUFTUCxlQUFlLEtBQUssSUFBSTtBQUVqR0YsV0FBU0ksR0FBRyx3QkFBd0I7SUFBQ00sU0FBUztFQUFJLEdBQUdKLHlCQUF5QjtBQUMvRTs7QUNQQSxJQUFNO0VBQUNLO0FBQUksSUFBSUosR0FBR0ssT0FBT0MsSUFBSTtBQUU3QixJQUFNQyxnQkFBZ0JBLENBQUNDLG1CQUErQkMsVUFBbUM7QUFDeEZBLFFBQU1DLGVBQWU7QUFDckJGLG9CQUFrQjtBQUNuQjtBQUVBLElBQU1HLGNBQWNBLENBQUNsQixVQUFrQmUsc0JBQXdDO0FBQUEsTUFBQUk7QUFDOUVwQix1QkFBcUJDLFVBQVdnQixXQUFtQztBQUNsRUYsa0JBQWNDLG1CQUFtQkMsS0FBSztFQUN2QyxDQUFDO0FBRUQsTUFBSUwsU0FBUyxlQUFlO0FBQzNCO0VBQ0Q7QUFFQSxRQUFNUyxRQUFpQ3BCLFNBQVNxQixRQUFRLE1BQU07QUFFOUQsUUFBTUMsbUJBQW1CQSxDQUFDQyxZQUE4QkMsYUFBcUM7QUFD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dEVsZW1lbnRTZWxlY3RvciIsICJsb2dvdXRFbGVtZW50U2VsZWN0b3JPZlZlY3RvcjIwMjJTdGlja3lIZWFkZXIiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInJlZnJlc2hFdmVudExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImNsaWNrTGlzdGVuZXIyIiwgImhvdmVyTGlzdGVuZXIiLCAib2ZmIiwgIm9uIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAiaG92ZXJMaXN0ZW5lcldpdGhEZWJvdW5jZSIsICJtdyIsICJ1dGlsIiwgImRlYm91bmNlIiwgInBhc3NpdmUiLCAic2tpbiIsICJjb25maWciLCAiZ2V0IiwgImNsaWNrTGlzdGVuZXIiLCAib3BlbkNvbmZpcm1EaWFsb2ciLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiYWRkTGlzdGVuZXIiLCAiXyRib2R5JGdldCIsICIkYm9keSIsICJwYXJlbnRzIiwgIm9ic2VydmVyQ2FsbGJhY2siLCAiX211dGF0aW9ucyIsICJvYnNlcnZlciIsICJoYXNDbGFzcyIsICJTRUxFQ1RPUiIsICJlbGVtZW50IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudENsb25lIiwgImNsb25lTm9kZSIsICJyZXBsYWNlV2l0aCIsICJmaW5kIiwgImRpc2Nvbm5lY3QiLCAibXV0YXRpb25PYnNlcnZlciIsICJNdXRhdGlvbk9ic2VydmVyIiwgIm9ic2VydmUiLCAiZG9jdW1lbnRFbGVtZW50IiwgImF0dHJpYnV0ZXMiLCAiYXR0cmlidXRlRmlsdGVyIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvbmZpcm0iLCAiQ29uZmlybUFjdGlvbiIsICJDYW5jZWwiLCAiU3VjY2VlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X3Z1ZTMiLCAiaW1wb3J0X2NvZGV4IiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAiY2xvc2UiLCAiY29uZmlybSIsICJvbkNvbmZpcm0iLCAiaW1wb3J0X3Z1ZTIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgIm9wZW4iLCAic3RhdGUiLCAidGl0bGUiLCAibWVzc2FnZSIsICJsYWJlbCIsICJhY3Rpb25UeXBlIiwgIm9uUHJpbWFyeSIsICJvbkRlZmF1bHQiLCAiJGV2ZW50IiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJBcHBfZGVmYXVsdDIiLCAic2hvd0NvbmZpcm1EaWFsb2ciLCAicmVhY3RpdmUiLCAicm9vdCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImxvZ291dCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYWN0aW9uIiwgImhpZGVUb2FzdCIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInNob3dFcnJvciIsICJlcnJvciIsICJjb25zb2xlIiwgInRyeUxvZ291dCIsICJfcmVmMiIsICJfeDIiLCAid2dVc2VyTmFtZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiY29uZmlybUxvZ291dCIsICJsZW5ndGgiLCAicGFyc2UiLCAiZHVyYXRpb24iXQp9Cg==
