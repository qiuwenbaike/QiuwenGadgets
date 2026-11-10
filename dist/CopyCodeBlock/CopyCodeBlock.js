/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Nardog/CopyCodeBlock.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/CopyCodeBlock}
 * @author Nardog (main author); 安忆 <i@anyi.in> (copyText.ts)
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
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
 * SPDX-License-Identifier: MIT
 *
 * The "copy" icon from @wikimedia/codex-icons
 *
 * @license MIT
 */

/**
 * Copyright (c) 2011-2022 Wikimedia Design & OOUI team and other contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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

// dist/CopyCodeBlock/CopyCodeBlock.js
//! src/CopyCodeBlock/modules/CopyCodeBlock.module.less
var button = "CopyCodeBlock-module__button_74i1Da__4100";
var codeBlock = "CopyCodeBlock-module__codeBlock_74i1Da__4100";
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/CopyCodeBlock/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Copy: (0, import_ext_gadget.localize)({
      en: "Copy to clipboard",
      ja: "クリップボードにコピー",
      "zh-hans": "复制至剪贴板",
      "zh-hant": "拷貝至剪貼簿"
    }),
    Copied: (0, import_ext_gadget.localize)({
      en: "Copied",
      ja: "コピーが成功しました",
      "zh-hans": "已复制",
      "zh-hant": "已拷貝"
    }),
    Failed: (0, import_ext_gadget.localize)({
      en: "Copy failed",
      ja: "コピーに失敗しました",
      "zh-hans": "复制失败",
      "zh-hant": "拷貝失敗"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/CopyCodeBlock/modules/copyText.ts
var copyText = async (text) => {
  const copyWithExecCommand = () => {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "true");
    helper.style.position = "fixed";
    helper.style.top = "-9999px";
    helper.style.left = "-9999px";
    document.body.append(helper);
    try {
      helper.select();
      if (!document.execCommand("copy")) {
        throw new Error('document.execCommand("copy") failed');
      }
    } finally {
      helper.remove();
    }
  };
  const copy = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (error) {
        try {
          copyWithExecCommand();
          return;
        } catch (fallbackError) {
          console.error("[CopyCodeBlock] Clipboard API and fallback copy failed:", error, fallbackError);
          throw fallbackError;
        }
      }
    }
    copyWithExecCommand();
  };
  try {
    await copy();
    void mw.notify(getMessage("Copied"), {
      type: "success",
      tag: "CopyCodeBlock"
    });
  } catch (error) {
    console.error("[CopyCodeBlock] Failed to copy text:", error);
    void mw.notify(getMessage("Failed"), {
      type: "error",
      tag: "CopyCodeBlock"
    });
  }
};
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const cdxIconCopy = {
      path: "M13 19H1V7h6V1h12v12h-6zm-6-6V9H3v8h8v-4zm2-2h8V3H9z",
      shouldFlip: true
    };
    const __returned__ = {
      props,
      cdxIconCopy,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxIcon() {
        return import_codex.CdxIcon;
      },
      get copyText() {
        return copyText;
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
  return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)($setup["CdxButton"], {
    weight: "quiet",
    "aria-label": $setup.getMessage("Copy"),
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.copyText($setup.props.text))
  }, {
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createVNode)($setup["CdxIcon"], {
      icon: $setup.cdxIconCopy
    })]),
    _: 1
    /* STABLE */
  }, 8, ["aria-label"]);
}
//! src/CopyCodeBlock/App.vue
App_default.render = render;
App_default.__file = "src\\CopyCodeBlock\\App.vue";
App_default.__scopeId = "data-v-3c962e51";
var App_default2 = App_default;
//! src/CopyCodeBlock/modules/addButton.ts
var import_vue3 = require("vue");
var import_ext_gadget2 = require("ext.gadget.Tippy");
var addButton = ($pres) => {
  for (const pre of $pres) {
    pre.classList.add(codeBlock);
    if (pre.querySelector(`.${button}`)) {
      continue;
    }
    const wrapper = document.createElement("span");
    wrapper.className = button;
    pre.append(wrapper);
    const app = (0, import_vue3.createApp)(App_default2, {
      text: pre.textContent ?? ""
    });
    app.mount(wrapper);
    (0, import_ext_gadget2.tippy)(wrapper, {
      arrow: true,
      content: getMessage("Copy"),
      placement: "bottom"
    });
  }
};
//! src/CopyCodeBlock/CopyCodeBlock.ts
mw.hook("wikipage.content").add(function copyCodeBlock($content) {
  const $pres = $content.find("pre");
  if (!$pres.length) {
    return;
  }
  addButton($pres);
});

})();

/* </nowiki> */

