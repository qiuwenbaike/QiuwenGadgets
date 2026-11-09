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
  var _document$querySelect, _document$querySelect2;
  return {
    key: element.accessKey.toUpperCase(),
    label: (element.getAttribute("aria-label") || element.title || element.textContent || element.value || ((_document$querySelect = (_document$querySelect2 = document.querySelector('label[for="'.concat(element.id, '"]'))) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.textContent) !== null && _document$querySelect !== void 0 ? _document$querySelect : "")).replace(/\s*?\[.+?]$/, "").trim()
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9BY2Nlc3NLZXlDaGVhdHNoZWV0L3NyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L0FwcC52dWUiLCAic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxBY2Nlc3NLZXlDaGVhdHNoZWV0XFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvQXBwLnZ1ZSIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9BY2Nlc3NLZXlDaGVhdHNoZWV0LnRzIiwgInNyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L21vZHVsZXMvZ2V0QWNjZXNzS2V5SXRlbXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeERpYWxvZ30gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuXG5kZWZpbmVQcm9wczx7XG5cdGFjY2Vzc0tleUl0ZW1zOiB7XG5cdFx0a2V5OiBzdHJpbmc7XG5cdFx0bGFiZWw6IHN0cmluZztcblx0fVtdO1xufT4oKTtcblxuY29uc3Qgb3BlbiA9IHJlZihmYWxzZSk7XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRvcGVuLnZhbHVlID0gZmFsc2U7XG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGEgaHJlZj1cIiNcIiBhY2Nlc3NrZXk9XCI/XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgQGNsaWNrLnByZXZlbnQ9XCJvcGVuID0gIW9wZW5cIj57eyBnZXRNZXNzYWdlKCdUZXh0JykgfX08L2E+XG5cdDxjZHgtZGlhbG9nXG5cdFx0di1tb2RlbDpvcGVuPVwib3BlblwiXG5cdFx0OnRpdGxlPVwiZ2V0TWVzc2FnZSgnVGl0bGUnKVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDbG9zZScpfVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAZGVmYXVsdD1cImNsb3NlXCJcblx0PlxuXHRcdDx0YWJsZSBjbGFzcz1cIndpa2l0YWJsZSBhY2Nlc3Mta2V5LWNoZWF0c2hlZXQtdGFibGVcIj5cblx0XHRcdDx0Ym9keT5cblx0XHRcdFx0PHRyIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBhY2Nlc3NLZXlJdGVtc1wiIDprZXk9XCJpbmRleFwiPlxuXHRcdFx0XHRcdDx0aD57eyBpdGVtLmtleSB9fTwvdGg+XG5cdFx0XHRcdFx0PHRkPnt7IGl0ZW0ubGFiZWwgfX08L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4uYWNjZXNzLWtleS1jaGVhdHNoZWV0LXRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHRqYTogJ+mWieOBmOOCiycsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHRUZXh0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ09wZW4gYWNjZXNzIGtleXMgY2hlYXRzaGVldCcsXG5cdFx0XHRqYTogJ+OCouOCr+OCu+OCueOCreODvOOBruODgeODvOODiOOCt+ODvOODiCcsXG5cdFx0XHQnemgtaGFucyc6ICfmmL7npLrplK7nm5jlv6vmjbfplK7mj5DnpLonLFxuXHRcdFx0J3poLWhhbnQnOiAn6aGv56S66Y2155uk5b+r6YCf6Y215o+Q56S6Jyxcblx0XHR9KSxcblx0XHRUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBY2Nlc3Mga2V5cyBjaGVhdHNoZWV0Jyxcblx0XHRcdGphOiAn44Ki44Kv44K744K544Kt44O844Gu44OB44O844OI44K344O844OIJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mUruebmOW/q+aNt+mUruaPkOekuicsXG5cdFx0XHQnemgtaGFudCc6ICfpjbXnm6Tlv6vpgJ/pjbXmj5DnpLonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgd2l0aE1vZGlmaWVycyBhcyBfd2l0aE1vZGlmaWVycywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwid2lraXRhYmxlIGFjY2Vzcy1rZXktY2hlYXRzaGVldC10YWJsZVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImFcIiwge1xuICAgICAgaHJlZjogXCIjXCIsXG4gICAgICBhY2Nlc3NrZXk6IFwiP1wiLFxuICAgICAgc3R5bGU6IHtcImRpc3BsYXlcIjpcIm5vbmVcIn0sXG4gICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9IF93aXRoTW9kaWZpZXJzKCRldmVudCA9PiAoJHNldHVwLm9wZW4gPSAhJHNldHVwLm9wZW4pLCBbXCJwcmV2ZW50XCJdKSlcbiAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdUZXh0JykpLCAxIC8qIFRFWFQgKi8pLFxuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICAgIG9wZW46ICRzZXR1cC5vcGVuLFxuICAgICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgoJHNldHVwLm9wZW4pID0gJGV2ZW50KSksXG4gICAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ1RpdGxlJyksXG4gICAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0Nsb3NlJyl9LFxuICAgICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZVxuICAgIH0sIHtcbiAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRhYmxlXCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGJvZHlcIiwgbnVsbCwgW1xuICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkcHJvcHMuYWNjZXNzS2V5SXRlbXMsIChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInRyXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRoXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoaXRlbS5rZXkpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0ZFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKGl0ZW0ubGFiZWwpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJkZWZhdWx0LWFjdGlvblwiXSlcbiAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxBY2Nlc3NLZXlDaGVhdHNoZWV0XFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEFjY2Vzc0tleUNoZWF0c2hlZXRcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxBY2Nlc3NLZXlDaGVhdHNoZWV0XFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxBY2Nlc3NLZXlDaGVhdHNoZWV0XFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYmY5MzYwZmJcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZXRBY2Nlc3NLZXlJdGVtc30gZnJvbSAnLi9tb2R1bGVzL2dldEFjY2Vzc0tleUl0ZW1zJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLyoqXG4gKiBBZGRzIGFsdCtzaGlmdCs/IGFzIGFuIGFjY2VzcyBrZXkgdG8gc2hvdyBhIGxpc3Qgb2YgYWxsIGRlZmF1bHQgYWNjZXNzIGtleXNcbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBhY2Nlc3NLZXlDaGVhdHNoZWV0KCk6IHZvaWQge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXHRjcmVhdGVBcHAoQXBwLCB7YWNjZXNzS2V5SXRlbXM6IGdldEFjY2Vzc0tleUl0ZW1zKCl9KS5tb3VudChyb290KTtcbn0pO1xuIiwgImludGVyZmFjZSBBY2Nlc3NLZXlJdGVtIHtcblx0a2V5OiBzdHJpbmc7XG5cdGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NLZXlJdGVtcyA9ICgpOiBBY2Nlc3NLZXlJdGVtW10gPT5cblx0Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbYWNjZXNza2V5XScpXS5tYXAoKGVsZW1lbnQpID0+ICh7XG5cdFx0a2V5OiBlbGVtZW50LmFjY2Vzc0tleS50b1VwcGVyQ2FzZSgpLFxuXHRcdGxhYmVsOiAoXG5cdFx0XHRlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8XG5cdFx0XHRlbGVtZW50LnRpdGxlIHx8XG5cdFx0XHRlbGVtZW50LnRleHRDb250ZW50IHx8XG5cdFx0XHQoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSB8fFxuXHRcdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxhYmVsW2Zvcj1cIiR7ZWxlbWVudC5pZH1cIl1gKT8udGV4dENvbnRlbnQgPz8gJycpXG5cdFx0KVxuXHRcdFx0LnJlcGxhY2UoL1xccyo/XFxbLis/XSQvLCAnJylcblx0XHRcdC50cmltKCksXG5cdH0pKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUFBLGVBQXdCQyxRQUFBLGtCQUFBOztBQ0R4QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPRixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsT0FBQSxHQUFNTixrQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsUUFBQSxHQUFPUCxrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZVAsZ0JBQWdCO0FBRXJDLElBQU1RLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7QUQxQkEsSUFBQUMsY0FBa0JaLFFBQUEsS0FBQTs7Ozs7Ozs7Ozs7OztBQVNsQixVQUFNYSxRQUFBLEdBQU9ELFlBQUFFLEtBQUksS0FBSztBQUV0QixVQUFNQyxRQUFRQSxNQUFZO0FBQ3pCRixXQUFLRyxRQUFRO0lBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRWhCQSxJQUFBQyxjQUF3U2pCLFFBQUEsS0FBQTtBQUV4UyxJQUFNa0IsYUFBYTtFQUFFQyxPQUFPO0FBQXdDO0FBRTdELFNBQVNDLE9BQU9DLE1BQU1DLFFBQVFDLFFBQVFDLFFBQVFDLE9BQU9DLFVBQVU7QUFDcEUsVUFBQSxHQUFRVCxZQUFBVSxXQUFXLElBQUEsR0FBR1YsWUFBQVc7SUFBb0JYLFlBQUFZO0lBQVc7SUFBTSxFQUFBLEdBQ3pEWixZQUFBYTtNQUFvQjtNQUFLO1FBQ3ZCQyxNQUFNO1FBQ05DLFdBQVc7UUFDWEMsT0FBTztVQUFDLFdBQVU7UUFBTTtRQUN4QkMsU0FBU1osT0FBTyxDQUFDLE1BQU1BLE9BQU8sQ0FBQyxLQUFBLEdBQUlMLFlBQUFrQixlQUFlQyxZQUFXWixPQUFPWCxPQUFPLENBQUNXLE9BQU9YLE1BQU8sQ0FBQyxTQUFTLENBQUM7TUFDdkc7T0FBQSxHQUFHSSxZQUFBb0IsaUJBQWlCYixPQUFPZCxXQUFXLE1BQU0sQ0FBQztNQUFHOztJQUFZLElBQUEsR0FDNURPLFlBQUFxQixhQUFhZCxPQUFPLFdBQVcsR0FBRztNQUNoQ1gsTUFBTVcsT0FBT1g7TUFDYixpQkFBaUJTLE9BQU8sQ0FBQyxNQUFNQSxPQUFPLENBQUMsSUFBSWMsWUFBWVosT0FBT1gsT0FBUXVCO01BQ3RFRyxPQUFPZixPQUFPZCxXQUFXLE9BQU87TUFDaEMsa0JBQWtCO1FBQUM4QixPQUFPaEIsT0FBT2QsV0FBVyxPQUFPO01BQUM7TUFDcEQsb0JBQW9CO01BQ3BCK0IsV0FBV2pCLE9BQU9UO0lBQ3BCLEdBQUc7TUFDRDJCLFVBQUEsR0FBU3pCLFlBQUEwQixTQUFTLE1BQU0sRUFBQSxHQUN0QjFCLFlBQUFhLG9CQUFvQixTQUFTWixZQUFZLEVBQUEsR0FDdkNELFlBQUFhLG9CQUFvQixTQUFTLE1BQU0sR0FBQSxHQUNoQ2IsWUFBQVUsV0FBVyxJQUFJLElBQUEsR0FBR1YsWUFBQVc7UUFBb0JYLFlBQUFZO1FBQVc7U0FBQSxHQUFNWixZQUFBMkIsWUFBWXJCLE9BQU9zQixnQkFBZ0IsQ0FBQ0MsTUFBTUMsVUFBVTtBQUMxRyxrQkFBQSxHQUFROUIsWUFBQVUsV0FBVyxJQUFBLEdBQUdWLFlBQUFXLG9CQUFvQixNQUFNO1lBQUVqQixLQUFLb0M7VUFBTSxHQUFHLEVBQUEsR0FDOUQ5QixZQUFBYTtZQUFvQjtZQUFNO2FBQUEsR0FBTWIsWUFBQW9CLGlCQUFpQlMsS0FBS25DLEdBQUc7WUFBRzs7VUFBWSxJQUFBLEdBQ3hFTSxZQUFBYTtZQUFvQjtZQUFNO2FBQUEsR0FBTWIsWUFBQW9CLGlCQUFpQlMsS0FBS04sS0FBSztZQUFHOztVQUFZLENBQUEsQ0FDM0U7UUFDSCxDQUFDO1FBQUc7O01BQXdCLEVBQUEsQ0FDN0IsQ0FBQSxDQUNGLENBQUEsQ0FDRjtNQUNEUSxHQUFHOztJQUNMLEdBQUcsR0FBZSxDQUFDLFFBQVEsU0FBUyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ3BEOztFQUF3QjtBQUM3Qjs7QUNuQ2lUQyxZQUFPN0IsU0FBU0E7QUFBTzZCLFlBQU9DLFNBQVM7QUFBb0NELFlBQU9FLFlBQVk7QUFBa0IsSUFBT0MsZUFBUUg7O0FDQ2hiLElBQUFJLGNBQXdCckQsUUFBQSxLQUFBOztBQ0lqQixJQUFNc0Qsb0JBQW9CQSxNQUNoQyxDQUFDLEdBQUdDLFNBQVNDLGlCQUE4QixhQUFhLENBQUMsRUFBRUMsSUFBS0MsYUFBQTtBQUFBLE1BQUFDLHVCQUFBQztBQUFBLFNBQWE7SUFDNUVqRCxLQUFLK0MsUUFBUUcsVUFBVUMsWUFBWTtJQUNuQ3RCLFFBQ0NrQixRQUFRSyxhQUFhLFlBQVksS0FDakNMLFFBQVFuQixTQUNSbUIsUUFBUU0sZUFDUE4sUUFBNkIxQyxXQUFBMkMseUJBQUFDLHlCQUM3QkwsU0FBU1UsY0FBQSxjQUFBQyxPQUE0QlIsUUFBUVMsSUFBRSxJQUFBLENBQUksT0FBQSxRQUFBUCwyQkFBQSxTQUFBLFNBQW5EQSx1QkFBc0RJLGlCQUFBLFFBQUFMLDBCQUFBLFNBQUFBLHdCQUFlLEtBRXJFUyxRQUFRLGVBQWUsRUFBRSxFQUN6QkMsS0FBSztFQUNSO0FBQUEsQ0FBRTs7QURkSCxJQUFBQyxxQkFBc0J0RSxRQUFBLGlCQUFBO0FBS3RCLE1BQUEsR0FBS3NFLG1CQUFBQyxTQUFRLEVBQUVDLEtBQUssU0FBU0Msc0JBQTRCO0FBQ3hELFFBQU1DLE9BQU9uQixTQUFTb0IsY0FBYyxLQUFLO0FBQ3pDcEIsV0FBU3FCLEtBQUtDLE9BQU9ILElBQUk7QUFDekIsR0FBQSxHQUFBckIsWUFBQXlCLFdBQVUxQixjQUFLO0lBQUNQLGdCQUFnQlMsa0JBQWtCO0VBQUMsQ0FBQyxFQUFFeUIsTUFBTUwsSUFBSTtBQUNqRSxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfY29kZXgiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2xvc2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiVGV4dCIsICJUaXRsZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X3Z1ZTIiLCAib3BlbiIsICJyZWYiLCAiY2xvc2UiLCAidmFsdWUiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJjbGFzcyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgIkZyYWdtZW50IiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJocmVmIiwgImFjY2Vzc2tleSIsICJzdHlsZSIsICJvbkNsaWNrIiwgIndpdGhNb2RpZmllcnMiLCAiJGV2ZW50IiwgInRvRGlzcGxheVN0cmluZyIsICJjcmVhdGVWTm9kZSIsICJ0aXRsZSIsICJsYWJlbCIsICJvbkRlZmF1bHQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgInJlbmRlckxpc3QiLCAiYWNjZXNzS2V5SXRlbXMiLCAiaXRlbSIsICJpbmRleCIsICJfIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgImdldEFjY2Vzc0tleUl0ZW1zIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAibWFwIiwgImVsZW1lbnQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiYWNjZXNzS2V5IiwgInRvVXBwZXJDYXNlIiwgImdldEF0dHJpYnV0ZSIsICJ0ZXh0Q29udGVudCIsICJxdWVyeVNlbGVjdG9yIiwgImNvbmNhdCIsICJpZCIsICJyZXBsYWNlIiwgInRyaW0iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEJvZHkiLCAidGhlbiIsICJhY2Nlc3NLZXlDaGVhdHNoZWV0IiwgInJvb3QiLCAiY3JlYXRlRWxlbWVudCIsICJib2R5IiwgImFwcGVuZCIsICJjcmVhdGVBcHAiLCAibW91bnQiXQp9Cg==
