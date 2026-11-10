/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=Diskdance, et. al.}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PreviewWithVariant2017}
 * @license MIT {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-PreviewWithVariant2017.js}
 */

/**
 * Copyright Diskdance
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

// dist/PreviewWithVariant2017/PreviewWithVariant2017.js
//! src/PreviewWithVariant2017/PreviewWithVariant2017.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/PreviewWithVariant2017/options.json
var configKey = "gadget-PreviewWithVariant2017__Initialized";
//! src/PreviewWithVariant2017/modules/constant.ts
var DATA = [{
  var: "zh",
  htmlLang: "zh",
  msg: "pwv-2017-zh"
}, {
  var: "zh-hans",
  htmlLang: "zh-Hans",
  msg: "pwv-2017-zh-hans"
}, {
  var: "zh-hant",
  htmlLang: "zh-Hant",
  msg: "pwv-2017-zh-hant"
}, {
  var: "zh-cn",
  htmlLang: "zh-Hans-CN",
  msg: "pwv-2017-zh-cn"
}, {
  var: "zh-hk",
  htmlLang: "zh-Hant-HK",
  msg: "pwv-2017-zh-hk"
}, {
  var: "zh-mo",
  htmlLang: "zh-Hant-MO",
  msg: "pwv-2017-zh-mo"
}, {
  var: "zh-my",
  htmlLang: "zh-Hans-MY",
  msg: "pwv-2017-zh-my"
}, {
  var: "zh-sg",
  htmlLang: "zh-Hans-SG",
  msg: "pwv-2017-zh-sg"
}, {
  var: "zh-tw",
  htmlLang: "zh-Hant-TW",
  msg: "pwv-2017-zh-tw"
}];
//! src/PreviewWithVariant2017/modules/messages.ts
var PWV2017messages = () => {
  mw.messages.set({
    "pwv-2017-caption": window.wgULS("选择语言变体", "選擇語言變體"),
    "pwv-2017-loading": window.wgULS("正在加载预览…", "正在載入預覽…"),
    "pwv-2017-retry": window.wgULS("重试", "重試"),
    "pwv-2017-zh": window.wgULS("不转换", "不轉換"),
    "pwv-2017-zh-hans": "简体",
    "pwv-2017-zh-hant": "繁體",
    "pwv-2017-zh-cn": "中国大陆简体",
    "pwv-2017-zh-hk": "中國香港繁體",
    "pwv-2017-zh-mo": "中國澳門繁體",
    "pwv-2017-zh-my": "马来西亚简体",
    "pwv-2017-zh-sg": "新加坡简体",
    "pwv-2017-zh-tw": "中國臺灣繁體"
  });
};
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
var Preview_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "Preview",
  props: {
    initialVariant: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    },
    variants: {
      type: Array,
      required: true
    },
    fetchPreview: {
      type: Function,
      required: true
    },
    getErrorMessage: {
      type: Function,
      required: true
    },
    onPreviewStart: {
      type: Function,
      required: true
    },
    onPreviewEnd: {
      type: Function,
      required: true
    },
    onShowPreview: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    const props = __props;
    const selectedVariant = (0, import_vue2.ref)(props.initialVariant);
    const activeVariant = (0, import_vue2.ref)(props.initialVariant);
    const previewNode = (0, import_vue2.ref)(null);
    const loading = (0, import_vue2.ref)(false);
    const errorMessage = (0, import_vue2.ref)("");
    const failedVariant = (0, import_vue2.ref)();
    const menuItems = (0, import_vue2.computed)(() => props.variants);
    const previews = /* @__PURE__ */ new Map();
    const pendingRequests = /* @__PURE__ */ new Map();
    const loadingMessage = mw.msg("pwv-2017-loading");
    const retryLabel = mw.msg("pwv-2017-retry");
    const loadVariant = (variant) => {
      const cachedPreview = previews.get(variant);
      if (cachedPreview !== void 0) {
        previewNode.value = cachedPreview;
        activeVariant.value = variant;
        errorMessage.value = "";
        return Promise.resolve(true);
      }
      const pendingRequest = pendingRequests.get(variant);
      if (pendingRequest) {
        return pendingRequest;
      }
      errorMessage.value = "";
      failedVariant.value = void 0;
      loading.value = true;
      const request = props.fetchPreview(variant).then((node) => {
        previews.set(variant, node);
        previewNode.value = node;
        activeVariant.value = variant;
        return true;
      }).catch((error) => {
        errorMessage.value = props.getErrorMessage(error);
        failedVariant.value = variant;
        selectedVariant.value = activeVariant.value;
        return false;
      }).finally(() => {
        loading.value = false;
        pendingRequests.delete(variant);
      });
      pendingRequests.set(variant, request);
      return request;
    };
    (0, import_vue2.watch)(selectedVariant, (variant) => {
      if (variant !== activeVariant.value) {
        void loadVariant(variant);
      }
    });
    (0, import_vue2.watch)(previewNode, (node) => {
      previewNode.value = node;
    }, {
      flush: "post"
    });
    const retry = () => {
      if (failedVariant.value) {
        selectedVariant.value = failedVariant.value;
        void loadVariant(failedVariant.value);
      }
    };
    const preview = async () => {
      props.onPreviewStart();
      try {
        await loadVariant(selectedVariant.value);
        props.onShowPreview();
      } finally {
        props.onPreviewEnd();
      }
    };
    const invalidate = () => {
      previews.clear();
      previewNode.value = null;
      errorMessage.value = "";
      failedVariant.value = void 0;
      activeVariant.value = selectedVariant.value;
    };
    __expose({
      invalidate,
      preview
    });
    const __returned__ = {
      props,
      selectedVariant,
      activeVariant,
      previewNode,
      loading,
      errorMessage,
      failedVariant,
      menuItems,
      previews,
      pendingRequests,
      loadingMessage,
      retryLabel,
      loadVariant,
      retry,
      preview,
      invalidate,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxField() {
        return import_codex.CdxField;
      },
      get CdxMessage() {
        return import_codex.CdxMessage;
      },
      get CdxProgressBar() {
        return import_codex.CdxProgressBar;
      },
      get CdxSelect() {
        return import_codex.CdxSelect;
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
  class: "pwv-2017-preview"
};
var _hoisted_2 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", _hoisted_1, [(0, import_vue3.createVNode)($setup["CdxField"], null, {
    label: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($props.caption),
      1
      /* TEXT */
    )]),
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxSelect"], {
      selected: $setup.selectedVariant,
      "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.selectedVariant = $event),
      "menu-items": $setup.menuItems,
      disabled: $setup.loading
    }, null, 8, ["selected", "menu-items", "disabled"])]),
    _: 1
    /* STABLE */
  }), $setup.loading ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxProgressBar"], {
    key: 0,
    "aria-label": $setup.loadingMessage,
    inline: true
  }, null, 8, ["aria-label"])) : (0, import_vue3.createCommentVNode)("v-if", true), $setup.errorMessage ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxMessage"], {
    key: 1,
    type: "error"
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.errorMessage) + " ",
      1
      /* TEXT */
    ), (0, import_vue3.createVNode)($setup["CdxButton"], {
      disabled: $setup.loading,
      onClick: $setup.retry
    }, {
      default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
        (0, import_vue3.toDisplayString)($setup.retryLabel),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])]),
    _: 1
    /* STABLE */
  })) : (0, import_vue3.createCommentVNode)("v-if", true), (0, import_vue3.createCommentVNode)(" eslint-disable-next-line vue/no-v-html --- content of previewNode is from a trusted source "), (0, import_vue3.createElementVNode)("div", {
    class: "pwv-2017-preview__content",
    innerHTML: $setup.previewNode
  }, null, 8, _hoisted_2)]);
}
//! src/PreviewWithVariant2017/modules/Preview.vue
Preview_default.render = render;
Preview_default.__file = "src\\PreviewWithVariant2017\\modules\\Preview.vue";
Preview_default.__scopeId = "data-v-a8871ef3";
var Preview_default2 = Preview_default;
//! src/PreviewWithVariant2017/modules/processVisualEditor.ts
var import_vue4 = require("vue");
PWV2017messages();
var processVisualEditor = () => {
  const {
    skin,
    wgUserLanguage,
    wgUserVariant
  } = mw.config.get();
  let variant = wgUserVariant ?? "zh";
  const visualEditor = window.ve;
  const constructDocument = (title, wikitext, categories) => {
    var _DATA$find;
    const $result = $("<div>").addClass("mw-body mw-body-content");
    if (skin === "vector") {
      $result.addClass("vector-body");
    }
    $result.append($("<h1>").addClass("firstHeading").html(title), $("<div>").addClass(`mw-content-${mw.config.get("wgVisualEditor").pageLanguageDir}`).attr("lang", ((_DATA$find = DATA.find((item) => item.var === variant)) === null || _DATA$find === void 0 ? void 0 : _DATA$find.htmlLang) ?? variant).html(wikitext), $.parseHTML(categories));
    const $preview = $result;
    mw.hook("wikipage.content").fire($preview);
    const previewElement = $preview[0];
    if (previewElement) {
      visualEditor.targetLinksToNewWindow(previewElement);
    }
    return $preview.prop("outerHTML") ?? "";
  };
  const process = () => {
    const {
      target
    } = visualEditor.init;
    const {
      saveDialog
    } = target;
    const root = document.createElement("div");
    root.className = "pwv-2017-variant";
    saveDialog.previewPanel.$element.append(root);
    const fetchPreview = async (requestedVariant) => {
      variant = requestedVariant;
      const response = await target.getContentApi().post({
        action: "parse",
        disableeditsection: true,
        errorformat: "html",
        errorlang: wgUserLanguage,
        errorsuselocal: true,
        formatversion: "2",
        prop: ["text", "indicators", "displaytitle", "categorieshtml", "parsewarningshtml"],
        pst: true,
        preview: true,
        title: target.getPageName(),
        text: target.getDocToSave(),
        uselang: wgUserLanguage,
        variant: requestedVariant
      });
      return constructDocument(response.parse.displaytitle, response.parse.text, response.parse.categorieshtml);
    };
    const app = (0, import_vue4.createApp)(Preview_default2, {
      initialVariant: variant,
      caption: mw.msg("pwv-2017-caption"),
      variants: DATA.map((item) => ({
        value: item.var,
        label: mw.msg(item.msg)
      })),
      fetchPreview,
      getErrorMessage: (error) => target.getContentApi().getErrorMessage(error),
      onPreviewStart: () => {
        target.emit("savePreview");
        saveDialog.pushPending();
      },
      onPreviewEnd: () => saveDialog.popPending(),
      onShowPreview: () => saveDialog.swapPanel("preview")
    });
    const instance = app.mount(root);
    target.saveDialog.off("preview", "onSaveDialogPreview", target);
    target.saveDialog.on("preview", () => {
      target.getSurface().getModel().getDocument().once("transact", instance.invalidate);
      void instance.preview();
    });
    mw.hook("ve.activationComplete").add(() => {
      if (mw.config.get(configKey)) {
        mw.config.set(configKey, false);
      }
    });
  };
  if (!mw.config.get(configKey)) {
    process();
    mw.config.set(configKey, true);
  }
};
//! src/PreviewWithVariant2017/PreviewWithVariant2017.ts
void (0, import_ext_gadget.getBody)().then(() => {
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor();
  });
});

})();

/* </nowiki> */

