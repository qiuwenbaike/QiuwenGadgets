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
var import_ext_gadget2 = require("ext.gadget.Util");
var getAccessKeyItems = ($body) => [...$body.find("[accesskey]")].map((element) => ({
  key: element.accessKey.toUpperCase(),
  label: (element.getAttribute("aria-label") || element.title || element.textContent || element.value || $body.find('label[for="'.concat(element.id, '"]')).text()).replace(/\s*?\[.+?]$/, "").trim()
}));
void (0, import_ext_gadget2.getBody)().then(function accessKeyCheatsheet($body) {
  const root = document.createElement("div");
  $body.append(root);
  (0, import_vue4.createApp)(App_default2, {
    accessKeyItems: getAccessKeyItems($body)
  }).mount(root);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9BY2Nlc3NLZXlDaGVhdHNoZWV0L3NyYy9BY2Nlc3NLZXlDaGVhdHNoZWV0L0FwcC52dWUiLCAic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxBY2Nlc3NLZXlDaGVhdHNoZWV0XFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL0FjY2Vzc0tleUNoZWF0c2hlZXQvQXBwLnZ1ZSIsICJzcmMvQWNjZXNzS2V5Q2hlYXRzaGVldC9BY2Nlc3NLZXlDaGVhdHNoZWV0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhEaWFsb2d9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcblxuZGVmaW5lUHJvcHM8e1xuXHRhY2Nlc3NLZXlJdGVtczoge1xuXHRcdGtleTogc3RyaW5nO1xuXHRcdGxhYmVsOiBzdHJpbmc7XG5cdH1bXTtcbn0+KCk7XG5cbmNvbnN0IG9wZW4gPSByZWYoZmFsc2UpO1xuXG5jb25zdCBjbG9zZSA9ICgpOiB2b2lkID0+IHtcblx0b3Blbi52YWx1ZSA9IGZhbHNlO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxhIGhyZWY9XCIjXCIgYWNjZXNza2V5PVwiP1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIEBjbGljay5wcmV2ZW50PVwib3BlbiA9ICFvcGVuXCI+e3sgZ2V0TWVzc2FnZSgnVGV4dCcpIH19PC9hPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdHYtbW9kZWw6b3Blbj1cIm9wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ1RpdGxlJylcIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cIntsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKX1cIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdD5cblx0XHQ8dGFibGUgY2xhc3M9XCJ3aWtpdGFibGUgYWNjZXNzLWtleS1jaGVhdHNoZWV0LXRhYmxlXCI+XG5cdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdDx0ciB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gYWNjZXNzS2V5SXRlbXNcIiA6a2V5PVwiaW5kZXhcIj5cblx0XHRcdFx0XHQ8dGg+e3sgaXRlbS5rZXkgfX08L3RoPlxuXHRcdFx0XHRcdDx0ZD57eyBpdGVtLmxhYmVsIH19PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdDwvdGJvZHk+XG5cdFx0PC90YWJsZT5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLmFjY2Vzcy1rZXktY2hlYXRzaGVldC10YWJsZSB7XG5cdHdpZHRoOiAxMDAlO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6ZetJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWiScsXG5cdFx0fSksXG5cdFx0VGV4dDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPcGVuIGFjY2VzcyBrZXlzIGNoZWF0c2hlZXQnLFxuXHRcdFx0amE6ICfjgqLjgq/jgrvjgrnjgq3jg7zjga7jg4Hjg7zjg4jjgrfjg7zjg4gnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66ZSu55uY5b+r5o236ZSu5o+Q56S6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuumNteebpOW/q+mAn+mNteaPkOekuicsXG5cdFx0fSksXG5cdFx0VGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWNjZXNzIGtleXMgY2hlYXRzaGVldCcsXG5cdFx0XHRqYTogJ+OCouOCr+OCu+OCueOCreODvOOBruODgeODvOODiOOCt+ODvOODiCcsXG5cdFx0XHQnemgtaGFucyc6ICfplK7nm5jlv6vmjbfplK7mj5DnpLonLFxuXHRcdFx0J3poLWhhbnQnOiAn6Y2155uk5b+r6YCf6Y215o+Q56S6Jyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIHdpdGhNb2RpZmllcnMgYXMgX3dpdGhNb2RpZmllcnMsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcIndpa2l0YWJsZSBhY2Nlc3Mta2V5LWNoZWF0c2hlZXQtdGFibGVcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJhXCIsIHtcbiAgICAgIGhyZWY6IFwiI1wiLFxuICAgICAgYWNjZXNza2V5OiBcIj9cIixcbiAgICAgIHN0eWxlOiB7XCJkaXNwbGF5XCI6XCJub25lXCJ9LFxuICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSBfd2l0aE1vZGlmaWVycygkZXZlbnQgPT4gKCRzZXR1cC5vcGVuID0gISRzZXR1cC5vcGVuKSwgW1wicHJldmVudFwiXSkpXG4gICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnVGV4dCcpKSwgMSAvKiBURVhUICovKSxcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgICBvcGVuOiAkc2V0dXAub3BlbixcbiAgICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5vcGVuKSA9ICRldmVudCkpLFxuICAgICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdUaXRsZScpLFxuICAgICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDbG9zZScpfSxcbiAgICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgICAgb25EZWZhdWx0OiAkc2V0dXAuY2xvc2VcbiAgICB9LCB7XG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0YWJsZVwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInRib2R5XCIsIG51bGwsIFtcbiAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHByb3BzLmFjY2Vzc0tleUl0ZW1zLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ0aFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKGl0ZW0ua2V5KSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidGRcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZyhpdGVtLmxhYmVsKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pXG4gIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcQWNjZXNzS2V5Q2hlYXRzaGVldFxcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxBY2Nlc3NLZXlDaGVhdHNoZWV0XFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcQWNjZXNzS2V5Q2hlYXRzaGVldFxcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcQWNjZXNzS2V5Q2hlYXRzaGVldFxcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJmOTM2MGZiXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSc7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuaW50ZXJmYWNlIEFjY2Vzc0tleUl0ZW0ge1xuXHRrZXk6IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcbn1cblxuY29uc3QgZ2V0QWNjZXNzS2V5SXRlbXMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogQWNjZXNzS2V5SXRlbVtdID0+XG5cdFsuLi4kYm9keS5maW5kKCdbYWNjZXNza2V5XScpXS5tYXAoKGVsZW1lbnQpID0+ICh7XG5cdFx0a2V5OiBlbGVtZW50LmFjY2Vzc0tleS50b1VwcGVyQ2FzZSgpLFxuXHRcdGxhYmVsOiAoXG5cdFx0XHRlbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIHx8XG5cdFx0XHRlbGVtZW50LnRpdGxlIHx8XG5cdFx0XHRlbGVtZW50LnRleHRDb250ZW50IHx8XG5cdFx0XHQoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSB8fFxuXHRcdFx0JGJvZHkuZmluZChgbGFiZWxbZm9yPVwiJHtlbGVtZW50LmlkfVwiXWApLnRleHQoKVxuXHRcdClcblx0XHRcdC5yZXBsYWNlKC9cXHMqP1xcWy4rP10kLywgJycpXG5cdFx0XHQudHJpbSgpLFxuXHR9KSk7XG5cbi8qKlxuICogQWRkcyBhbHQrc2hpZnQrPyBhcyBhbiBhY2Nlc3Mga2V5IHRvIHNob3cgYSBsaXN0IG9mIGFsbCBkZWZhdWx0IGFjY2VzcyBrZXlzXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gYWNjZXNzS2V5Q2hlYXRzaGVldCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHQkYm9keS5hcHBlbmQocm9vdCk7XG5cdGNyZWF0ZUFwcChBcHAsIHthY2Nlc3NLZXlJdGVtczogZ2V0QWNjZXNzS2V5SXRlbXMoJGJvZHkpfSkubW91bnQocm9vdCk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUFBLGVBQXdCQyxRQUFBLGtCQUFBOztBQ0R4QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPRixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsT0FBQSxHQUFNTixrQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsUUFBQSxHQUFPUCxrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZVAsZ0JBQWdCO0FBRXJDLElBQU1RLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7QUQxQkEsSUFBQUMsY0FBa0JaLFFBQUEsS0FBQTs7Ozs7Ozs7Ozs7OztBQVNsQixVQUFNYSxRQUFBLEdBQU9ELFlBQUFFLEtBQUksS0FBSztBQUV0QixVQUFNQyxRQUFRQSxNQUFZO0FBQ3pCRixXQUFLRyxRQUFRO0lBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRWhCQSxJQUFBQyxjQUF3U2pCLFFBQUEsS0FBQTtBQUV4UyxJQUFNa0IsYUFBYTtFQUFFQyxPQUFPO0FBQXdDO0FBRTdELFNB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Y0FBSztJQUFDUCxnQkFBZ0JVLGtCQUFrQkMsS0FBSztFQUFDLENBQUMsRUFBRXFCLE1BQU1MLElBQUk7QUFDdEUsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2NvZGV4IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNsb3NlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIlRleHQiLCAiVGl0bGUiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF92dWUyIiwgIm9wZW4iLCAicmVmIiwgImNsb3NlIiwgInZhbHVlIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJGcmFnbWVudCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiaHJlZiIsICJhY2Nlc3NrZXkiLCAic3R5bGUiLCAib25DbGljayIsICJ3aXRoTW9kaWZpZXJzIiwgIiRldmVudCIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAidGl0bGUiLCAibGFiZWwiLCAib25EZWZhdWx0IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJyZW5kZXJMaXN0IiwgImFjY2Vzc0tleUl0ZW1zIiwgIml0ZW0iLCAiaW5kZXgiLCAiXyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIkFwcF9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0QWNjZXNzS2V5SXRlbXMiLCAiJGJvZHkiLCAiZmluZCIsICJtYXAiLCAiZWxlbWVudCIsICJhY2Nlc3NLZXkiLCAidG9VcHBlckNhc2UiLCAiZ2V0QXR0cmlidXRlIiwgInRleHRDb250ZW50IiwgImNvbmNhdCIsICJpZCIsICJ0ZXh0IiwgInJlcGxhY2UiLCAidHJpbSIsICJnZXRCb2R5IiwgInRoZW4iLCAiYWNjZXNzS2V5Q2hlYXRzaGVldCIsICJyb290IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiYXBwZW5kIiwgImNyZWF0ZUFwcCIsICJtb3VudCJdCn0K
