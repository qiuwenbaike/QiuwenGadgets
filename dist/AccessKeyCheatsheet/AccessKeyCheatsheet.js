/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Guarapiranga/accessKeysCheatSheet.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AccessKeyCheatsheet}
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

// dist/AccessKeyCheatsheet/AccessKeyCheatsheet.js
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/AccessKeyCheatsheet/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Text: (0, import_ext_gadget.localize)({
      en: "Open access keys cheatsheet",
      ja: "アクセスキーのチートシート",
      "zh-hans": "显示键盘快捷键提示",
      "zh-hant": "顯示鍵盤快速鍵提示"
    }),
    Title: (0, import_ext_gadget.localize)({
      en: "Access keys cheatsheet",
      ja: "アクセスキーのチートシート",
      "zh-hans": "键盘快捷键提示",
      "zh-hant": "鍵盤快速鍵提示"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var import_vue2 = require("vue");
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    accessKeyItems: {
      type: Array,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const open = (0, import_vue2.ref)(false);
    const close = () => {
      open.value = false;
    };
    const __returned__ = {
      open,
      close,
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
var import_vue3 = require("vue");
var _hoisted_1 = {
  class: "wikitable access-key-cheatsheet-table"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
    import_vue3.Fragment,
    null,
    [(0, import_vue3.createElementVNode)(
      "a",
      {
        href: "#",
        accesskey: "?",
        style: {
          "display": "none"
        },
        onClick: _cache[0] || (_cache[0] = (0, import_vue3.withModifiers)(($event) => $setup.open = !$setup.open, ["prevent"]))
      },
      (0, import_vue3.toDisplayString)($setup.getMessage("Text")),
      1
      /* TEXT */
    ), (0, import_vue3.createVNode)($setup["CdxDialog"], {
      open: $setup.open,
      "onUpdate:open": _cache[1] || (_cache[1] = ($event) => $setup.open = $event),
      title: $setup.getMessage("Title"),
      "default-action": {
        label: $setup.getMessage("Close")
      },
      "use-close-button": true,
      onDefault: $setup.close
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)("table", _hoisted_1, [(0, import_vue3.createElementVNode)("tbody", null, [((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
        import_vue3.Fragment,
        null,
        (0, import_vue3.renderList)($props.accessKeyItems, (item, index) => {
          return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("tr", {
            key: index
          }, [(0, import_vue3.createElementVNode)(
            "th",
            null,
            (0, import_vue3.toDisplayString)(item.key),
            1
            /* TEXT */
          ), (0, import_vue3.createElementVNode)(
            "td",
            null,
            (0, import_vue3.toDisplayString)(item.label),
            1
            /* TEXT */
          )]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))])])]),
      _: 1
      /* STABLE */
    }, 8, ["open", "title", "default-action"])],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/AccessKeyCheatsheet/App.vue
App_default.render = render;
App_default.__file = "src\\AccessKeyCheatsheet\\App.vue";
App_default.__scopeId = "data-v-bf9360fb";
var App_default2 = App_default;
//! src/AccessKeyCheatsheet/AccessKeyCheatsheet.ts
var import_vue4 = require("vue");
//! src/AccessKeyCheatsheet/modules/getAccessKeyItems.ts
var getAccessKeyItems = () => [...document.querySelectorAll("[accesskey]")].map((element) => {
  var _document$querySelect;
  return {
    key: element.accessKey.toUpperCase(),
    label: (element.getAttribute("aria-label") || element.title || element.textContent || element.value || (((_document$querySelect = document.querySelector(`label[for="${element.id}"]`)) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.textContent) ?? "")).replace(/\s*?\[.+?]$/, "").trim()
  };
});
//! src/AccessKeyCheatsheet/AccessKeyCheatsheet.ts
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(function accessKeyCheatsheet() {
  const root = document.createElement("div");
  document.body.append(root);
  (0, import_vue4.createApp)(App_default2, {
    accessKeyItems: getAccessKeyItems()
  }).mount(root);
});

})();

/* </nowiki> */

