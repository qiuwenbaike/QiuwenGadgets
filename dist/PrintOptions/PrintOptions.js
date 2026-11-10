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
    for (const stylesheet of document.styleSheets) {
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

