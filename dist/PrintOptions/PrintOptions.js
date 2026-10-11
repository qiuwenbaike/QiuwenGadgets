/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-PrintOptions.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PrintOptions}
 * @author Derk-Jan Hartman, English Wikipedia Contributors and Qiuwen Baike Contributors.
 */

/**
 * Print options is a Gadget writen by Derk-Jan Hartman
 *
 * Licensed MIT and/or CC-BY-SA-4.0
 *
 * Copyright (c) 2010-2017 Derk-Jan Hartman
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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

// dist/PrintOptions/PrintOptions.js
//! src/PrintOptions/PrintOptions.ts
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/PrintOptions/modules/installPrintOptions.ts
var import_vue4 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/PrintOptions/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Enhanced: (0, import_ext_gadget.localize)({
      en: "Hide interface elements",
      ja: "インターフェース要素を非表示",
      "zh-hans": "隐藏界面元素",
      "zh-hant": "隱藏介面元素"
    }),
    NoImages: (0, import_ext_gadget.localize)({
      en: "Hide images",
      ja: "画像を非表示",
      "zh-hans": "隐藏图片",
      "zh-hant": "隱藏圖片"
    }),
    NoReferences: (0, import_ext_gadget.localize)({
      en: "Hide references",
      ja: "脚注を非表示",
      "zh-hans": "隐藏参考文献",
      "zh-hant": "隱藏參考文獻"
    }),
    NoTableOfContents: (0, import_ext_gadget.localize)({
      en: "Hide table of contents",
      ja: "目次を非表示",
      "zh-hans": "隐藏目录",
      "zh-hant": "隱藏目錄"
    }),
    NoBackground: (0, import_ext_gadget.localize)({
      en: "Remove backgrounds (your browser may override this setting)",
      ja: "背景を削除（ブラウザーがこの設定を上書きする場合があります）",
      "zh-hans": "移除背景（您的浏览器或可以覆盖本设置）",
      "zh-hant": "移除背景（您的瀏覽器或可覆蓋此設定）"
    }),
    BlackText: (0, import_ext_gadget.localize)({
      en: "Force all text to black",
      ja: "すべての文字を黒にする",
      "zh-hans": "强制将所有文字设置为黑色",
      "zh-hant": "強制將所有文字設定為黑色"
    }),
    Print: (0, import_ext_gadget.localize)({
      en: "Print",
      ja: "印刷",
      "zh-hans": "打印",
      "zh-hant": "列印"
    }),
    "Print this page": (0, import_ext_gadget.localize)({
      en: "Print this page",
      ja: "このページを印刷に",
      "zh-hans": "打印此页面",
      "zh-hant": "列印此頁面"
    }),
    Cancel: (0, import_ext_gadget.localize)({
      en: "Cancel",
      ja: "キャンセル",
      zh: "取消"
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
    state: {
      type: Object,
      required: true
    }
  },
  emits: ["update:open", "print"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const options = (0, import_vue2.reactive)({
      enhanced: true,
      noimages: false,
      norefs: false,
      notoc: false,
      nobackground: false,
      blacktext: true
    });
    const print = () => {
      const selectedOptions = {
        ...options
      };
      emit("update:open", false);
      window.setTimeout(() => emit("print", selectedOptions), 300);
    };
    const __returned__ = {
      props,
      emit,
      options,
      print,
      get CdxCheckbox() {
        return import_codex.CdxCheckbox;
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
var import_vue3 = require("vue");
var _hoisted_1 = {
  class: "print-options"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxDialog"], {
    open: $setup.props.state.open,
    title: $setup.getMessage("Print this page"),
    "primary-action": {
      label: $setup.getMessage("Print"),
      actionType: "progressive"
    },
    "default-action": {
      label: $setup.getMessage("Cancel")
    },
    "use-close-button": true,
    "onUpdate:open": _cache[6] || (_cache[6] = ($event) => $setup.emit("update:open", $event)),
    onDefault: _cache[7] || (_cache[7] = ($event) => $setup.emit("update:open", false)),
    onPrimary: $setup.print
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)("div", _hoisted_1, [(0, import_vue3.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.options.enhanced,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.options.enhanced = $event)
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.getMessage("Enhanced")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]), (0, import_vue3.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.options.noimages,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.options.noimages = $event)
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.getMessage("NoImages")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]), (0, import_vue3.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.options.norefs,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.options.norefs = $event)
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.getMessage("NoReferences")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]), (0, import_vue3.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.options.notoc,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.options.notoc = $event)
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.getMessage("NoTableOfContents")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]), (0, import_vue3.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.options.nobackground,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.options.nobackground = $event)
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.getMessage("NoBackground")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]), (0, import_vue3.createVNode)($setup["CdxCheckbox"], {
      modelValue: $setup.options.blacktext,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.options.blacktext = $event)
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.getMessage("BlackText")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"])])]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "primary-action", "default-action"]);
}
//! src/PrintOptions/App.vue
App_default.render = render;
App_default.__file = "src\\PrintOptions\\App.vue";
App_default.__scopeId = "data-v-b590411e";
var App_default2 = App_default;
//! src/PrintOptions/modules/applyPrintStyles.ts
var applyPrintStyles = ({
  enhanced,
  noimages,
  norefs,
  notoc,
  nobackground,
  blacktext
}) => {
  if (!enhanced) {
    var _iterator = _createForOfIteratorHelper(document.styleSheets), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const stylesheet = _step.value;
        const {
          media
        } = stylesheet;
        if (!media) {
          continue;
        }
        if (media.mediaText && media.mediaText.includes("print")) {
          if (!media.mediaText.includes("screen")) {
            stylesheet.disabled = true;
          }
        } else if (media.mediaText && media.mediaText.includes("screen") && !media.mediaText.includes("print")) {
          try {
            media.appendMedium("print");
          } catch {
            media.mediaText += ",print";
          }
        }
        let rules;
        try {
          rules = stylesheet.cssRules;
        } catch {
          mw.log.warn("Not possible to correct stylesheet due to cross origin restrictions.");
          continue;
        }
        if (!rules) {
          continue;
        }
        for (let index = 0; index < rules.length; index++) {
          const rule = rules[index];
          if (!rule || rule.type !== CSSRule.MEDIA_RULE) {
            continue;
          }
          const mediaRule = rule;
          const hasPrint = Array.from(mediaRule.media).includes("print");
          const hasScreen = Array.from(mediaRule.media).includes("screen");
          if (hasPrint && !hasScreen) {
            stylesheet.deleteRule(index);
            index--;
          } else if (hasScreen && !hasPrint) {
            try {
              mediaRule.media.appendMedium("print");
            } catch {
              mediaRule.media.mediaText += ",print";
            }
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  let printStyle = "";
  if (noimages) {
    printStyle += "img,.thumb{display:none}";
  }
  if (norefs) {
    printStyle += '.mw-headline[id="References"],ol.references,.reference{display:none}';
  }
  if (notoc) {
    printStyle += "#toc,.toc{display:none}";
  }
  if (nobackground) {
    printStyle += "*{background:none !important}";
  }
  if (blacktext) {
    printStyle += "*{color:#000 !important}";
  }
  if (printStyle) {
    var _document$querySelect;
    (_document$querySelect = document.querySelector("#printStyle")) === null || _document$querySelect === void 0 || _document$querySelect.remove();
    const styleTag = document.createElement("style");
    styleTag.id = "printStyle";
    styleTag.media = "print";
    styleTag.append(document.createTextNode(printStyle));
    document.head.append(styleTag);
  }
};
//! src/PrintOptions/modules/printPage.ts
var printPage = ($body, options) => {
  applyPrintStyles(options);
  const $footerLink = $body.find("div.printfooter a");
  $footerLink.text(decodeURI($footerLink.text()));
  window.print();
};
//! src/PrintOptions/modules/installPrintOptions.ts
var installPrintOptions = ($body) => {
  const printLink = $body.find("#t-print a").get(0);
  if (!printLink) {
    return;
  }
  const state = (0, import_vue4.reactive)({
    open: false
  });
  const root = document.createElement("div");
  $body.append(root);
  const app = (0, import_vue4.createApp)(App_default2, {
    state,
    "onUpdate:open": (open) => {
      state.open = open;
    },
    onPrint: (options) => {
      printPage($body, options);
    }
  });
  app.mount(root);
  printLink.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    state.open = true;
  }, true);
};
//! src/PrintOptions/PrintOptions.ts
void (0, import_ext_gadget2.getBody)().then(function printOptionsLoad($body) {
  if (mw.config.get("wgNamespaceNumber") < 0) {
    return;
  }
  setTimeout(() => installPrintOptions($body), 0);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByaW50T3B0aW9ucy9QcmludE9wdGlvbnMudHMiLCAic3JjL1ByaW50T3B0aW9ucy9tb2R1bGVzL2luc3RhbGxQcmludE9wdGlvbnMudHMiLCAiZGlzdC9QcmludE9wdGlvbnMvc3JjL1ByaW50T3B0aW9ucy9BcHAudnVlIiwgInNyYy9QcmludE9wdGlvbnMvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxQcmludE9wdGlvbnNcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvUHJpbnRPcHRpb25zL0FwcC52dWUiLCAic3JjL1ByaW50T3B0aW9ucy9tb2R1bGVzL2FwcGx5UHJpbnRTdHlsZXMudHMiLCAic3JjL1ByaW50T3B0aW9ucy9tb2R1bGVzL3ByaW50UGFnZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtpbnN0YWxsUHJpbnRPcHRpb25zfSBmcm9tICcuL21vZHVsZXMvaW5zdGFsbFByaW50T3B0aW9ucyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gcHJpbnRPcHRpb25zTG9hZCgkYm9keSkge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gVGhpcyBjYW4gYmUgYmVmb3JlIHRoZSBjbGljayBsaXN0ZW5lciBieSBNVyBpcyBpbnN0YWxsZWQuIEluc3RlYWQsXG5cdC8vIHJlLWFkZCBvdXJzZWx2ZXMgdG8gdGhlIGJhY2sgb2YgdGhlIGRvY3VtZW50LnJlYWR5IGxpc3Rcblx0Ly8gdXNlIGFuIGFzeW5jaHJvbm91cyB0aW1lb3V0IHRvIGRvIHRoaXMuXG5cdHNldFRpbWVvdXQoKCkgPT4gaW5zdGFsbFByaW50T3B0aW9ucygkYm9keSksIDApO1xufSk7XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcCwgcmVhY3RpdmV9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcC52dWUnO1xuaW1wb3J0IHR5cGUge1ByaW50T3B0aW9uc30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3ByaW50UGFnZX0gZnJvbSAnLi9wcmludFBhZ2UnO1xuXG5jb25zdCBpbnN0YWxsUHJpbnRPcHRpb25zID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCBwcmludExpbmsgPSAkYm9keS5maW5kKCcjdC1wcmludCBhJykuZ2V0KDApO1xuXHRpZiAoIXByaW50TGluaykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHN0YXRlID0gcmVhY3RpdmUoe29wZW46IGZhbHNlfSk7XG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0JGJvZHkuYXBwZW5kKHJvb3QpO1xuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRzdGF0ZSxcblx0XHQnb25VcGRhdGU6b3Blbic6IChvcGVuOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRzdGF0ZS5vcGVuID0gb3Blbjtcblx0XHR9LFxuXHRcdG9uUHJpbnQ6IChvcHRpb25zOiBQcmludE9wdGlvbnMpOiB2b2lkID0+IHtcblx0XHRcdHByaW50UGFnZSgkYm9keSwgb3B0aW9ucyk7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcblxuXHRwcmludExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHQnY2xpY2snLFxuXHRcdChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c3RhdGUub3BlbiA9IHRydWU7XG5cdFx0fSxcblx0XHR0cnVlXG5cdCk7XG59O1xuXG5leHBvcnQge2luc3RhbGxQcmludE9wdGlvbnN9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeENoZWNrYm94LCBDZHhEaWFsb2d9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHR5cGUge1ByaW50T3B0aW9uc30gZnJvbSAnLi9tb2R1bGVzL3R5cGVzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtyZWFjdGl2ZX0gZnJvbSAndnVlJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdHN0YXRlOiB7XG5cdFx0b3BlbjogYm9vbGVhbjtcblx0fTtcbn0+KCk7XG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdCd1cGRhdGU6b3Blbic6IFt2YWx1ZTogYm9vbGVhbl07XG5cdHByaW50OiBbb3B0aW9uczogUHJpbnRPcHRpb25zXTtcbn0+KCk7XG5cbmNvbnN0IG9wdGlvbnMgPSByZWFjdGl2ZTxQcmludE9wdGlvbnM+KHtcblx0ZW5oYW5jZWQ6IHRydWUsXG5cdG5vaW1hZ2VzOiBmYWxzZSxcblx0bm9yZWZzOiBmYWxzZSxcblx0bm90b2M6IGZhbHNlLFxuXHRub2JhY2tncm91bmQ6IGZhbHNlLFxuXHRibGFja3RleHQ6IHRydWUsXG59KTtcblxuY29uc3QgcHJpbnQgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHNlbGVjdGVkT3B0aW9uczogUHJpbnRPcHRpb25zID0gey4uLm9wdGlvbnN9O1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcblx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4gZW1pdCgncHJpbnQnLCBzZWxlY3RlZE9wdGlvbnMpLCAzMDApO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0Om9wZW49XCJwcm9wcy5zdGF0ZS5vcGVuXCJcblx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdQcmludCB0aGlzIHBhZ2UnKVwiXG5cdFx0OnByaW1hcnktYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdQcmludCcpLCBhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnfVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDYW5jZWwnKX1cIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiZW1pdCgndXBkYXRlOm9wZW4nLCAkZXZlbnQpXCJcblx0XHRAZGVmYXVsdD1cImVtaXQoJ3VwZGF0ZTpvcGVuJywgZmFsc2UpXCJcblx0XHRAcHJpbWFyeT1cInByaW50XCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJwcmludC1vcHRpb25zXCI+XG5cdFx0XHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJvcHRpb25zLmVuaGFuY2VkXCI+e3sgZ2V0TWVzc2FnZSgnRW5oYW5jZWQnKSB9fTwvY2R4LWNoZWNrYm94PlxuXHRcdFx0PGNkeC1jaGVja2JveCB2LW1vZGVsPVwib3B0aW9ucy5ub2ltYWdlc1wiPnt7IGdldE1lc3NhZ2UoJ05vSW1hZ2VzJykgfX08L2NkeC1jaGVja2JveD5cblx0XHRcdDxjZHgtY2hlY2tib3ggdi1tb2RlbD1cIm9wdGlvbnMubm9yZWZzXCI+e3sgZ2V0TWVzc2FnZSgnTm9SZWZlcmVuY2VzJykgfX08L2NkeC1jaGVja2JveD5cblx0XHRcdDxjZHgtY2hlY2tib3ggdi1tb2RlbD1cIm9wdGlvbnMubm90b2NcIj57eyBnZXRNZXNzYWdlKCdOb1RhYmxlT2ZDb250ZW50cycpIH19PC9jZHgtY2hlY2tib3g+XG5cdFx0XHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJvcHRpb25zLm5vYmFja2dyb3VuZFwiPnt7IGdldE1lc3NhZ2UoJ05vQmFja2dyb3VuZCcpIH19PC9jZHgtY2hlY2tib3g+XG5cdFx0XHQ8Y2R4LWNoZWNrYm94IHYtbW9kZWw9XCJvcHRpb25zLmJsYWNrdGV4dFwiPnt7IGdldE1lc3NhZ2UoJ0JsYWNrVGV4dCcpIH19PC9jZHgtY2hlY2tib3g+XG5cdFx0PC9kaXY+XG5cdDwvY2R4LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5wcmludC1vcHRpb25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjVyZW07XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRFbmhhbmNlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdIaWRlIGludGVyZmFjZSBlbGVtZW50cycsXG5cdFx0XHRqYTogJ+OCpOODs+OCv+ODvOODleOCp+ODvOOCueimgee0oOOCkumdnuihqOekuicsXG5cdFx0XHQnemgtaGFucyc6ICfpmpDol4/nlYzpnaLlhYPntKAnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zqx6JeP5LuL6Z2i5YWD57SgJyxcblx0XHR9KSxcblx0XHROb0ltYWdlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdIaWRlIGltYWdlcycsXG5cdFx0XHRqYTogJ+eUu+WDj+OCkumdnuihqOekuicsXG5cdFx0XHQnemgtaGFucyc6ICfpmpDol4/lm77niYcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zqx6JeP5ZyW54mHJyxcblx0XHR9KSxcblx0XHROb1JlZmVyZW5jZXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSGlkZSByZWZlcmVuY2VzJyxcblx0XHRcdGphOiAn6ISa5rOo44KS6Z2e6KGo56S6Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+makOiXj+WPguiAg+aWh+eMricsXG5cdFx0XHQnemgtaGFudCc6ICfpmrHol4/lj4PogIPmlofnjbsnLFxuXHRcdH0pLFxuXHRcdE5vVGFibGVPZkNvbnRlbnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0hpZGUgdGFibGUgb2YgY29udGVudHMnLFxuXHRcdFx0amE6ICfnm67mrKHjgpLpnZ7ooajnpLonLFxuXHRcdFx0J3poLWhhbnMnOiAn6ZqQ6JeP55uu5b2VJyxcblx0XHRcdCd6aC1oYW50JzogJ+maseiXj+ebrumMhCcsXG5cdFx0fSksXG5cdFx0Tm9CYWNrZ3JvdW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlbW92ZSBiYWNrZ3JvdW5kcyAoeW91ciBicm93c2VyIG1heSBvdmVycmlkZSB0aGlzIHNldHRpbmcpJyxcblx0XHRcdGphOiAn6IOM5pmv44KS5YmK6Zmk77yI44OW44Op44Km44K244O844GM44GT44Gu6Kit5a6a44KS5LiK5pu444GN44GZ44KL5aC05ZCI44GM44GC44KK44G+44GZ77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+enu+mZpOiDjOaZr++8iOaCqOeahOa1j+iniOWZqOaIluWPr+S7peimhuebluacrOiuvue9ru+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfnp7vpmaTog4zmma/vvIjmgqjnmoTngI/opr3lmajmiJblj6/opobok4vmraToqK3lrprvvIknLFxuXHRcdH0pLFxuXHRcdEJsYWNrVGV4dDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGb3JjZSBhbGwgdGV4dCB0byBibGFjaycsXG5cdFx0XHRqYTogJ+OBmeOBueOBpuOBruaWh+Wtl+OCkum7kuOBq+OBmeOCiycsXG5cdFx0XHQnemgtaGFucyc6ICflvLrliLblsIbmiYDmnInmloflrZforr7nva7kuLrpu5HoibInLFxuXHRcdFx0J3poLWhhbnQnOiAn5by35Yi25bCH5omA5pyJ5paH5a2X6Kit5a6a54K66buR6ImyJyxcblx0XHR9KSxcblx0XHRQcmludDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmludCcsXG5cdFx0XHRqYTogJ+WNsOWItycsXG5cdFx0XHQnemgtaGFucyc6ICfmiZPljbAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YiX5Y2wJyxcblx0XHR9KSxcblx0XHQnUHJpbnQgdGhpcyBwYWdlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQcmludCB0aGlzIHBhZ2UnLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjgpLljbDliLfjgasnLFxuXHRcdFx0J3poLWhhbnMnOiAn5omT5Y2w5q2k6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIl+WNsOatpOmggemdoicsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHR6aDogJ+WPlua2iCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJwcmludC1vcHRpb25zXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRzZXR1cC5wcm9wcy5zdGF0ZS5vcGVuLFxuICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnUHJpbnQgdGhpcyBwYWdlJyksXG4gICAgXCJwcmltYXJ5LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdQcmludCcpLCBhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnfSxcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0NhbmNlbCcpfSxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZSxcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzZdIHx8IChfY2FjaGVbNl0gPSAkZXZlbnQgPT4gKCRzZXR1cC5lbWl0KCd1cGRhdGU6b3BlbicsICRldmVudCkpKSxcbiAgICBvbkRlZmF1bHQ6IF9jYWNoZVs3XSB8fCAoX2NhY2hlWzddID0gJGV2ZW50ID0+ICgkc2V0dXAuZW1pdCgndXBkYXRlOm9wZW4nLCBmYWxzZSkpKSxcbiAgICBvblByaW1hcnk6ICRzZXR1cC5wcmludFxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5vcHRpb25zLmVuaGFuY2VkLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5vcHRpb25zLmVuaGFuY2VkKSA9ICRldmVudCkpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0VuaGFuY2VkJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSksXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5vcHRpb25zLm5vaW1hZ2VzLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5vcHRpb25zLm5vaW1hZ2VzKSA9ICRldmVudCkpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ05vSW1hZ2VzJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSksXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5vcHRpb25zLm5vcmVmcyxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAkZXZlbnQgPT4gKCgkc2V0dXAub3B0aW9ucy5ub3JlZnMpID0gJGV2ZW50KSlcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnTm9SZWZlcmVuY2VzJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSksXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5vcHRpb25zLm5vdG9jLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICRldmVudCA9PiAoKCRzZXR1cC5vcHRpb25zLm5vdG9jKSA9ICRldmVudCkpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ05vVGFibGVPZkNvbnRlbnRzJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSksXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5vcHRpb25zLm5vYmFja2dyb3VuZCxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzRdIHx8IChfY2FjaGVbNF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAub3B0aW9ucy5ub2JhY2tncm91bmQpID0gJGV2ZW50KSlcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnTm9CYWNrZ3JvdW5kJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSksXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhDaGVja2JveFwiXSwge1xuICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5vcHRpb25zLmJsYWNrdGV4dCxcbiAgICAgICAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzVdIHx8IChfY2FjaGVbNV0gPSAkZXZlbnQgPT4gKCgkc2V0dXAub3B0aW9ucy5ibGFja3RleHQpID0gJGV2ZW50KSlcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQmxhY2tUZXh0JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwicHJpbWFyeS1hY3Rpb25cIiwgXCJkZWZhdWx0LWFjdGlvblwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUHJpbnRPcHRpb25zXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFByaW50T3B0aW9uc1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFByaW50T3B0aW9uc1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcUHJpbnRPcHRpb25zXFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYjU5MDQxMWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB0eXBlIHtQcmludE9wdGlvbnN9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBhcHBseVByaW50U3R5bGVzID0gKHtlbmhhbmNlZCwgbm9pbWFnZXMsIG5vcmVmcywgbm90b2MsIG5vYmFja2dyb3VuZCwgYmxhY2t0ZXh0fTogUHJpbnRPcHRpb25zKTogdm9pZCA9PiB7XG5cdGlmICghZW5oYW5jZWQpIHtcblx0XHRmb3IgKGNvbnN0IHN0eWxlc2hlZXQgb2YgZG9jdW1lbnQuc3R5bGVTaGVldHMpIHtcblx0XHRcdGNvbnN0IHttZWRpYX0gPSBzdHlsZXNoZWV0O1xuXHRcdFx0aWYgKCFtZWRpYSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG1lZGlhLm1lZGlhVGV4dCAmJiBtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3ByaW50JykpIHtcblx0XHRcdFx0aWYgKCFtZWRpYS5tZWRpYVRleHQuaW5jbHVkZXMoJ3NjcmVlbicpKSB7XG5cdFx0XHRcdFx0c3R5bGVzaGVldC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAobWVkaWEubWVkaWFUZXh0ICYmIG1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygnc2NyZWVuJykgJiYgIW1lZGlhLm1lZGlhVGV4dC5pbmNsdWRlcygncHJpbnQnKSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdG1lZGlhLmFwcGVuZE1lZGl1bSgncHJpbnQnKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0bWVkaWEubWVkaWFUZXh0ICs9ICcscHJpbnQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGxldCBydWxlczogQ1NTUnVsZUxpc3QgfCBudWxsO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cnVsZXMgPSBzdHlsZXNoZWV0LmNzc1J1bGVzO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdG13LmxvZy53YXJuKCdOb3QgcG9zc2libGUgdG8gY29ycmVjdCBzdHlsZXNoZWV0IGR1ZSB0byBjcm9zcyBvcmlnaW4gcmVzdHJpY3Rpb25zLicpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFydWxlcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJ1bGVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0XHRjb25zdCBydWxlID0gcnVsZXNbaW5kZXhdO1xuXHRcdFx0XHRpZiAoIXJ1bGUgfHwgcnVsZS50eXBlICE9PSBDU1NSdWxlLk1FRElBX1JVTEUpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IG1lZGlhUnVsZSA9IHJ1bGUgYXMgQ1NTTWVkaWFSdWxlO1xuXHRcdFx0XHRjb25zdCBoYXNQcmludCA9IEFycmF5LmZyb20obWVkaWFSdWxlLm1lZGlhKS5pbmNsdWRlcygncHJpbnQnKTtcblx0XHRcdFx0Y29uc3QgaGFzU2NyZWVuID0gQXJyYXkuZnJvbShtZWRpYVJ1bGUubWVkaWEpLmluY2x1ZGVzKCdzY3JlZW4nKTtcblx0XHRcdFx0aWYgKGhhc1ByaW50ICYmICFoYXNTY3JlZW4pIHtcblx0XHRcdFx0XHRzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH0gZWxzZSBpZiAoaGFzU2NyZWVuICYmICFoYXNQcmludCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRtZWRpYVJ1bGUubWVkaWEuYXBwZW5kTWVkaXVtKCdwcmludCcpO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0bWVkaWFSdWxlLm1lZGlhLm1lZGlhVGV4dCArPSAnLHByaW50Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRsZXQgcHJpbnRTdHlsZSA9ICcnO1xuXHRpZiAobm9pbWFnZXMpIHtcblx0XHRwcmludFN0eWxlICs9ICdpbWcsLnRodW1ie2Rpc3BsYXk6bm9uZX0nO1xuXHR9XG5cdGlmIChub3JlZnMpIHtcblx0XHRwcmludFN0eWxlICs9ICcubXctaGVhZGxpbmVbaWQ9XCJSZWZlcmVuY2VzXCJdLG9sLnJlZmVyZW5jZXMsLnJlZmVyZW5jZXtkaXNwbGF5Om5vbmV9Jztcblx0fVxuXHRpZiAobm90b2MpIHtcblx0XHRwcmludFN0eWxlICs9ICcjdG9jLC50b2N7ZGlzcGxheTpub25lfSc7XG5cdH1cblx0aWYgKG5vYmFja2dyb3VuZCkge1xuXHRcdHByaW50U3R5bGUgKz0gJyp7YmFja2dyb3VuZDpub25lICFpbXBvcnRhbnR9Jztcblx0fVxuXHRpZiAoYmxhY2t0ZXh0KSB7XG5cdFx0cHJpbnRTdHlsZSArPSAnKntjb2xvcjojMDAwICFpbXBvcnRhbnR9Jztcblx0fVxuXG5cdGlmIChwcmludFN0eWxlKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50U3R5bGUnKT8ucmVtb3ZlKCk7XG5cdFx0Y29uc3Qgc3R5bGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdHN0eWxlVGFnLmlkID0gJ3ByaW50U3R5bGUnO1xuXHRcdHN0eWxlVGFnLm1lZGlhID0gJ3ByaW50Jztcblx0XHRzdHlsZVRhZy5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJpbnRTdHlsZSkpO1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHN0eWxlVGFnKTtcblx0fVxufTtcblxuZXhwb3J0IHthcHBseVByaW50U3R5bGVzfTtcbiIsICJpbXBvcnQgdHlwZSB7UHJpbnRPcHRpb25zfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7YXBwbHlQcmludFN0eWxlc30gZnJvbSAnLi9hcHBseVByaW50U3R5bGVzJztcblxuY29uc3QgcHJpbnRQYWdlID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Piwgb3B0aW9uczogUHJpbnRPcHRpb25zKTogdm9pZCA9PiB7XG5cdGFwcGx5UHJpbnRTdHlsZXMob3B0aW9ucyk7XG5cdGNvbnN0ICRmb290ZXJMaW5rID0gJGJvZHkuZmluZCgnZGl2LnByaW50Zm9vdGVyIGEnKTtcblx0JGZvb3RlckxpbmsudGV4dChkZWNvZGVVUkkoJGZvb3RlckxpbmsudGV4dCgpKSk7XG5cdHdpbmRvdy5wcmludCgpO1xufTtcblxuZXhwb3J0IHtwcmludFBhZ2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNBdEIsSUFBQUMsY0FBc0RELFFBQUEsS0FBQTs7QUNDdEQsSUFBQUUsZUFBcUNGLFFBQUEsa0JBQUE7O0FDRHJDLElBQUFHLG9CQUF1QkgsUUFBQSxpQkFBQTtBQUV2QixJQUFNSSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxXQUFBLEdBQVVGLGtCQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsV0FBQSxHQUFVTixrQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLGVBQUEsR0FBY1Asa0JBQUFHLFVBQVM7TUFDdEJDLElBQUk7TUFDSkMsSUFBSTtNQUNK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b3J0X2NvZGV4IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJFbmhhbmNlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJOb0ltYWdlcyIsICJOb1JlZmVyZW5jZXMiLCAiTm9UYWJsZU9mQ29udGVudHMiLCAiTm9CYWNrZ3JvdW5kIiwgIkJsYWNrVGV4dCIsICJQcmludCIsICJDYW5jZWwiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAib3B0aW9ucyIsICJyZWFjdGl2ZSIsICJlbmhhbmNlZCIsICJub2ltYWdlcyIsICJub3JlZnMiLCAibm90b2MiLCAibm9iYWNrZ3JvdW5kIiwgImJsYWNrdGV4dCIsICJwcmludCIsICJzZWxlY3RlZE9wdGlvbnMiLCAid2luZG93IiwgInNldFRpbWVvdXQiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJjbGFzcyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAib3BlbiIsICJzdGF0ZSIsICJ0aXRsZSIsICJsYWJlbCIsICJhY3Rpb25UeXBlIiwgIiRldmVudCIsICJvbkRlZmF1bHQiLCAib25QcmltYXJ5IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiY3JlYXRlVk5vZGUiLCAibW9kZWxWYWx1ZSIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgIl8iLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAiYXBwbHlQcmludFN0eWxlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZG9jdW1lbnQiLCAic3R5bGVTaGVldHMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAic3R5bGVzaGVldCIsICJ2YWx1ZSIsICJtZWRpYSIsICJtZWRpYVRleHQiLCAiaW5jbHVkZXMiLCAiZGlzYWJsZWQiLCAiYXBwZW5kTWVkaXVtIiwgInJ1bGVzIiwgImNzc1J1bGVzIiwgIm13IiwgImxvZyIsICJ3YXJuIiwgImluZGV4IiwgImxlbmd0aCIsICJydWxlIiwgInR5cGUiLCAiQ1NTUnVsZSIsICJNRURJQV9SVUxFIiwgIm1lZGlhUnVsZSIsICJoYXNQcmludCIsICJBcnJheSIsICJmcm9tIiwgImhhc1NjcmVlbiIsICJkZWxldGVSdWxlIiwgImVyciIsICJlIiwgImYiLCAicHJpbnRTdHlsZSIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAicXVlcnlTZWxlY3RvciIsICJyZW1vdmUiLCAic3R5bGVUYWciLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJhcHBlbmQiLCAiY3JlYXRlVGV4dE5vZGUiLCAiaGVhZCIsICJwcmludFBhZ2UiLCAiJGJvZHkiLCAiJGZvb3RlckxpbmsiLCAiZmluZCIsICJ0ZXh0IiwgImRlY29kZVVSSSIsICJpbnN0YWxsUHJpbnRPcHRpb25zIiwgInByaW50TGluayIsICJnZXQiLCAicm9vdCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgIm9uUHJpbnQiLCAibW91bnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJzdG9wUHJvcGFnYXRpb24iLCAicHJldmVudERlZmF1bHQiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInByaW50T3B0aW9uc0xvYWQiLCAiY29uZmlnIl0KfQo=
