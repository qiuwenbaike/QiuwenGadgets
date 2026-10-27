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
    const preview = /* @__PURE__ */ (function() {
      var _ref = _asyncToGenerator(function* () {
        props.onPreviewStart();
        try {
          yield loadVariant(selectedVariant.value);
          props.onShowPreview();
        } finally {
          props.onPreviewEnd();
        }
      });
      return function preview2() {
        return _ref.apply(this, arguments);
      };
    })();
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
  let variant = wgUserVariant !== null && wgUserVariant !== void 0 ? wgUserVariant : "zh";
  const visualEditor = window.ve;
  const constructDocument = (title, wikitext, categories) => {
    var _DATA$find$htmlLang, _DATA$find, _$preview$prop;
    const $result = $("<div>").addClass("mw-body mw-body-content");
    if (skin === "vector") {
      $result.addClass("vector-body");
    }
    $result.append($("<h1>").addClass("firstHeading").html(title), $("<div>").addClass("mw-content-".concat(mw.config.get("wgVisualEditor").pageLanguageDir)).attr("lang", (_DATA$find$htmlLang = (_DATA$find = DATA.find((item) => item.var === variant)) === null || _DATA$find === void 0 ? void 0 : _DATA$find.htmlLang) !== null && _DATA$find$htmlLang !== void 0 ? _DATA$find$htmlLang : variant).html(wikitext), $.parseHTML(categories));
    const $preview = $result;
    mw.hook("wikipage.content").fire($preview);
    const previewElement = $preview[0];
    if (previewElement) {
      visualEditor.targetLinksToNewWindow(previewElement);
    }
    return (_$preview$prop = $preview.prop("outerHTML")) !== null && _$preview$prop !== void 0 ? _$preview$prop : "";
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
    const fetchPreview = /* @__PURE__ */ (function() {
      var _ref2 = _asyncToGenerator(function* (requestedVariant) {
        variant = requestedVariant;
        const response = yield target.getContentApi().post({
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
      });
      return function fetchPreview2(_x) {
        return _ref2.apply(this, arguments);
      };
    })();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgImRpc3QvUHJldmlld1dpdGhWYXJpYW50MjAxNy9zcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL1ByZXZpZXcudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxQcmV2aWV3V2l0aFZhcmlhbnQyMDE3XFxtb2R1bGVzXFxQcmV2aWV3LnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L21vZHVsZXMvUHJldmlldy52dWUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoKTogdm9pZCA9PiB7XG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKCk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnQyMDE3X19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgREFUQSA9IFtcblx0e3ZhcjogJ3poJywgaHRtbExhbmc6ICd6aCcsIG1zZzogJ3B3di0yMDE3LXpoJ30sXG5cdHt2YXI6ICd6aC1oYW5zJywgaHRtbExhbmc6ICd6aC1IYW5zJywgbXNnOiAncHd2LTIwMTctemgtaGFucyd9LFxuXHR7dmFyOiAnemgtaGFudCcsIGh0bWxMYW5nOiAnemgtSGFudCcsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnQnfSxcblx0e3ZhcjogJ3poLWNuJywgaHRtbExhbmc6ICd6aC1IYW5zLUNOJywgbXNnOiAncHd2LTIwMTctemgtY24nfSxcblx0e3ZhcjogJ3poLWhrJywgaHRtbExhbmc6ICd6aC1IYW50LUhLJywgbXNnOiAncHd2LTIwMTctemgtaGsnfSxcblx0e3ZhcjogJ3poLW1vJywgaHRtbExhbmc6ICd6aC1IYW50LU1PJywgbXNnOiAncHd2LTIwMTctemgtbW8nfSxcblx0e3ZhcjogJ3poLW15JywgaHRtbExhbmc6ICd6aC1IYW5zLU1ZJywgbXNnOiAncHd2LTIwMTctemgtbXknfSxcblx0e3ZhcjogJ3poLXNnJywgaHRtbExhbmc6ICd6aC1IYW5zLVNHJywgbXNnOiAncHd2LTIwMTctemgtc2cnfSxcblx0e3ZhcjogJ3poLXR3JywgaHRtbExhbmc6ICd6aC1IYW50LVRXJywgbXNnOiAncHd2LTIwMTctemgtdHcnfSxcbl07XG5cbmV4cG9ydCB7REFUQX07XG4iLCAiY29uc3QgUFdWMjAxN21lc3NhZ2VzID0gKCkgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdwd3YtMjAxNy1jYXB0aW9uJzogd2luZG93LndnVUxTKCfpgInmi6nor63oqIDlj5jkvZMnLCAn6YG45pOH6Kqe6KiA6K6K6auUJyksXG5cdFx0J3B3di0yMDE3LWxvYWRpbmcnOiB3aW5kb3cud2dVTFMoJ+ato+WcqOWKoOi9vemihOiniOKApicsICfmraPlnKjovInlhaXpoJDopr3igKYnKSxcblx0XHQncHd2LTIwMTctcmV0cnknOiB3aW5kb3cud2dVTFMoJ+mHjeivlScsICfph43oqaYnKSxcblx0XHQncHd2LTIwMTctemgnOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0XHQncHd2LTIwMTctemgtaGFucyc6ICfnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oYW50JzogJ+e5gemrlCcsXG5cdFx0J3B3di0yMDE3LXpoLWNuJzogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLWhrJzogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdFx0J3B3di0yMDE3LXpoLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0J3B3di0yMDE3LXpoLW15JzogJ+mprOadpeilv+S6mueugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLXNnJzogJ+aWsOWKoOWdoeeugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLXR3JzogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH0pO1xufTtcblxuZXhwb3J0IHtQV1YyMDE3bWVzc2FnZXN9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RmllbGQsIENkeE1lc3NhZ2UsIENkeFByb2dyZXNzQmFyLCBDZHhTZWxlY3R9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcblxuaW50ZXJmYWNlIFZhcmlhbnRPcHRpb24ge1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0aW5pdGlhbFZhcmlhbnQ6IHN0cmluZztcblx0Y2FwdGlvbjogc3RyaW5nO1xuXHR2YXJpYW50czogVmFyaWFudE9wdGlvbltdO1xuXHRmZXRjaFByZXZpZXc6ICh2YXJpYW50OiBzdHJpbmcpID0+IFByb21pc2U8SFRNTEVsZW1lbnQ+O1xuXHRnZXRFcnJvck1lc3NhZ2U6IChlcnJvcjogdW5rbm93bikgPT4gc3RyaW5nO1xuXHRvblByZXZpZXdTdGFydDogKCkgPT4gdm9pZDtcblx0b25QcmV2aWV3RW5kOiAoKSA9PiB2b2lkO1xuXHRvblNob3dQcmV2aWV3OiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3Qgc2VsZWN0ZWRWYXJpYW50ID0gcmVmKHByb3BzLmluaXRpYWxWYXJpYW50KTtcbmNvbnN0IGFjdGl2ZVZhcmlhbnQgPSByZWYocHJvcHMuaW5pdGlhbFZhcmlhbnQpO1xuY29uc3QgcHJldmlld05vZGUgPSByZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbmNvbnN0IGxvYWRpbmcgPSByZWYoZmFsc2UpO1xuY29uc3QgZXJyb3JNZXNzYWdlID0gcmVmKCcnKTtcbmNvbnN0IGZhaWxlZFZhcmlhbnQgPSByZWY8c3RyaW5nPigpO1xuY29uc3QgbWVudUl0ZW1zID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudmFyaWFudHMpO1xuY29uc3QgcHJldmlld3MgPSBuZXcgTWFwPHN0cmluZywgSFRNTEVsZW1lbnQ+KCk7XG5jb25zdCBwZW5kaW5nUmVxdWVzdHMgPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxib29sZWFuPj4oKTtcbmNvbnN0IGxvYWRpbmdNZXNzYWdlID0gbXcubXNnKCdwd3YtMjAxNy1sb2FkaW5nJyk7XG5jb25zdCByZXRyeUxhYmVsID0gbXcubXNnKCdwd3YtMjAxNy1yZXRyeScpO1xuXG5jb25zdCBsb2FkVmFyaWFudCA9ICh2YXJpYW50OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcblx0Y29uc3QgY2FjaGVkUHJldmlldyA9IHByZXZpZXdzLmdldCh2YXJpYW50KTtcblx0aWYgKGNhY2hlZFByZXZpZXcgIT09IHVuZGVmaW5lZCkge1xuXHRcdHByZXZpZXdOb2RlLnZhbHVlID0gY2FjaGVkUHJldmlldztcblx0XHRhY3RpdmVWYXJpYW50LnZhbHVlID0gdmFyaWFudDtcblx0XHRlcnJvck1lc3NhZ2UudmFsdWUgPSAnJztcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuXHR9XG5cblx0Y29uc3QgcGVuZGluZ1JlcXVlc3QgPSBwZW5kaW5nUmVxdWVzdHMuZ2V0KHZhcmlhbnQpO1xuXHRpZiAocGVuZGluZ1JlcXVlc3QpIHtcblx0XHRyZXR1cm4gcGVuZGluZ1JlcXVlc3Q7XG5cdH1cblxuXHRlcnJvck1lc3NhZ2UudmFsdWUgPSAnJztcblx0ZmFpbGVkVmFyaWFudC52YWx1ZSA9IHVuZGVmaW5lZDtcblx0bG9hZGluZy52YWx1ZSA9IHRydWU7XG5cdGNvbnN0IHJlcXVlc3QgPSBwcm9wc1xuXHRcdC5mZXRjaFByZXZpZXcodmFyaWFudClcblx0XHQudGhlbigobm9kZSkgPT4ge1xuXHRcdFx0cHJldmlld3Muc2V0KHZhcmlhbnQsIG5vZGUpO1xuXHRcdFx0cHJldmlld05vZGUudmFsdWUgPSBub2RlO1xuXHRcdFx0YWN0aXZlVmFyaWFudC52YWx1ZSA9IHZhcmlhbnQ7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcblx0XHRcdGVycm9yTWVzc2FnZS52YWx1ZSA9IHByb3BzLmdldEVycm9yTWVzc2FnZShlcnJvcik7XG5cdFx0XHRmYWlsZWRWYXJpYW50LnZhbHVlID0gdmFyaWFudDtcblx0XHRcdHNlbGVjdGVkVmFyaWFudC52YWx1ZSA9IGFjdGl2ZVZhcmlhbnQudmFsdWU7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSlcblx0XHQuZmluYWxseSgoKSA9PiB7XG5cdFx0XHRsb2FkaW5nLnZhbHVlID0gZmFsc2U7XG5cdFx0XHRwZW5kaW5nUmVxdWVzdHMuZGVsZXRlKHZhcmlhbnQpO1xuXHRcdH0pO1xuXHRwZW5kaW5nUmVxdWVzdHMuc2V0KHZhcmlhbnQsIHJlcXVlc3QpO1xuXHRyZXR1cm4gcmVxdWVzdDtcbn07XG5cbndhdGNoKHNlbGVjdGVkVmFyaWFudCwgKHZhcmlhbnQpID0+IHtcblx0aWYgKHZhcmlhbnQgIT09IGFjdGl2ZVZhcmlhbnQudmFsdWUpIHtcblx0XHR2b2lkIGxvYWRWYXJpYW50KHZhcmlhbnQpO1xuXHR9XG59KTtcblxud2F0Y2goXG5cdHByZXZpZXdOb2RlLFxuXHQobm9kZSkgPT4ge1xuXHRcdHByZXZpZXdOb2RlLnZhbHVlID0gbm9kZTtcblx0fSxcblx0e2ZsdXNoOiAncG9zdCd9XG4pO1xuXG5jb25zdCByZXRyeSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKGZhaWxlZFZhcmlhbnQudmFsdWUpIHtcblx0XHRzZWxlY3RlZFZhcmlhbnQudmFsdWUgPSBmYWlsZWRWYXJpYW50LnZhbHVlO1xuXHRcdHZvaWQgbG9hZFZhcmlhbnQoZmFpbGVkVmFyaWFudC52YWx1ZSk7XG5cdH1cbn07XG5cbmNvbnN0IHByZXZpZXcgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHByb3BzLm9uUHJldmlld1N0YXJ0KCk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgbG9hZFZhcmlhbnQoc2VsZWN0ZWRWYXJpYW50LnZhbHVlKTtcblx0XHRwcm9wcy5vblNob3dQcmV2aWV3KCk7XG5cdH0gZmluYWxseSB7XG5cdFx0cHJvcHMub25QcmV2aWV3RW5kKCk7XG5cdH1cbn07XG5cbmNvbnN0IGludmFsaWRhdGUgPSAoKTogdm9pZCA9PiB7XG5cdHByZXZpZXdzLmNsZWFyKCk7XG5cdHByZXZpZXdOb2RlLnZhbHVlID0gbnVsbDtcblx0ZXJyb3JNZXNzYWdlLnZhbHVlID0gJyc7XG5cdGZhaWxlZFZhcmlhbnQudmFsdWUgPSB1bmRlZmluZWQ7XG5cdGFjdGl2ZVZhcmlhbnQudmFsdWUgPSBzZWxlY3RlZFZhcmlhbnQudmFsdWU7XG59O1xuXG5kZWZpbmVFeHBvc2Uoe2ludmFsaWRhdGUsIHByZXZpZXd9KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJwd3YtMjAxNy1wcmV2aWV3XCI+XG5cdFx0PGNkeC1maWVsZD5cblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgY2FwdGlvbiB9fTwvdGVtcGxhdGU+XG5cdFx0XHQ8Y2R4LXNlbGVjdCB2LW1vZGVsOnNlbGVjdGVkPVwic2VsZWN0ZWRWYXJpYW50XCIgOm1lbnUtaXRlbXM9XCJtZW51SXRlbXNcIiA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCIgLz5cblx0XHQ8L2NkeC1maWVsZD5cblx0XHQ8Y2R4LXByb2dyZXNzLWJhciB2LWlmPVwibG9hZGluZ1wiIDphcmlhLWxhYmVsPVwibG9hZGluZ01lc3NhZ2VcIiA6aW5saW5lPVwidHJ1ZVwiIC8+XG5cdFx0PGNkeC1tZXNzYWdlIHYtaWY9XCJlcnJvck1lc3NhZ2VcIiB0eXBlPVwiZXJyb3JcIj5cblx0XHRcdHt7IGVycm9yTWVzc2FnZSB9fVxuXHRcdFx0PGNkeC1idXR0b24gOmRpc2FibGVkPVwibG9hZGluZ1wiIEBjbGljaz1cInJldHJ5XCI+e3sgcmV0cnlMYWJlbCB9fTwvY2R4LWJ1dHRvbj5cblx0XHQ8L2NkeC1tZXNzYWdlPlxuXHRcdDwhLS0gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby12LWh0bWwgLS0tIGNvbnRlbnQgb2YgcHJldmlld05vZGUgaXMgZnJvbSBhIHRydXN0ZWQgc291cmNlIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJwd3YtMjAxNy1wcmV2aWV3X19jb250ZW50XCIgdi1odG1sPVwicHJldmlld05vZGVcIiAvPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5wd3YtMjAxNy1wcmV2aWV3IHtcblx0LnB3di0yMDE3LXByZXZpZXdfX2NvbnRlbnQgOmRlZXAoLmZpcnN0SGVhZGluZykge1xuXHRcdG1hcmdpbi10b3A6IDA7XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwicHd2LTIwMTctcHJldmlld1wiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSBbXCJpbm5lckhUTUxcIl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhGaWVsZFwiXSwgbnVsbCwge1xuICAgICAgbGFiZWw6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5jYXB0aW9uKSwgMSAvKiBURVhUICovKVxuICAgICAgXSksXG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhTZWxlY3RcIl0sIHtcbiAgICAgICAgICBzZWxlY3RlZDogJHNldHVwLnNlbGVjdGVkVmFyaWFudCxcbiAgICAgICAgICBcIm9uVXBkYXRlOnNlbGVjdGVkXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkVmFyaWFudCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICBcIm1lbnUtaXRlbXNcIjogJHNldHVwLm1lbnVJdGVtcyxcbiAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLmxvYWRpbmdcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wic2VsZWN0ZWRcIiwgXCJtZW51LWl0ZW1zXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSksXG4gICAgKCRzZXR1cC5sb2FkaW5nKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4UHJvZ3Jlc3NCYXJcIl0sIHtcbiAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5sb2FkaW5nTWVzc2FnZSxcbiAgICAgICAgICBpbmxpbmU6IHRydWVcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiYXJpYS1sYWJlbFwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICgkc2V0dXAuZXJyb3JNZXNzYWdlKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4TWVzc2FnZVwiXSwge1xuICAgICAgICAgIGtleTogMSxcbiAgICAgICAgICB0eXBlOiBcImVycm9yXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZXJyb3JNZXNzYWdlKSArIFwiIFwiLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLmxvYWRpbmcsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5yZXRyeVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5yZXRyeUxhYmVsKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImRpc2FibGVkXCJdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvbm8tdi1odG1sIC0tLSBjb250ZW50IG9mIHByZXZpZXdOb2RlIGlzIGZyb20gYSB0cnVzdGVkIHNvdXJjZSBcIiksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCB7XG4gICAgICBjbGFzczogXCJwd3YtMjAxNy1wcmV2aWV3X19jb250ZW50XCIsXG4gICAgICBpbm5lckhUTUw6ICRzZXR1cC5wcmV2aWV3Tm9kZVxuICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzIpXG4gIF0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFByZXZpZXdXaXRoVmFyaWFudDIwMTdcXFxcbW9kdWxlc1xcXFxQcmV2aWV3LnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUHJldmlld1dpdGhWYXJpYW50MjAxN1xcXFxtb2R1bGVzXFxcXFByZXZpZXcudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFByZXZpZXdXaXRoVmFyaWFudDIwMTdcXFxcbW9kdWxlc1xcXFxQcmV2aWV3LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFByZXZpZXdXaXRoVmFyaWFudDIwMTdcXFxcbW9kdWxlc1xcXFxQcmV2aWV3LnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1hODg3MWVmM1wiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0ICcuL3Byb2Nlc3NWaXN1YWxFZGl0b3IubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0RBVEF9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtQV1YyMDE3bWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi9QcmV2aWV3LnZ1ZSc7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcblxuaW50ZXJmYWNlIFByZXZpZXdJbnN0YW5jZSB7XG5cdGludmFsaWRhdGU6ICgpID0+IHZvaWQ7XG5cdHByZXZpZXc6ICgpID0+IFByb21pc2U8dm9pZD47XG59XG5cblBXVjIwMTdtZXNzYWdlcygpO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7c2tpbiwgd2dVc2VyTGFuZ3VhZ2UsIHdnVXNlclZhcmlhbnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRsZXQgdmFyaWFudCA9IHdnVXNlclZhcmlhbnQgPz8gJ3poJztcblx0Y29uc3QgdmlzdWFsRWRpdG9yID0gd2luZG93LnZlO1xuXG5cdGNvbnN0IGNvbnN0cnVjdERvY3VtZW50ID0gKHRpdGxlOiBzdHJpbmcsIHdpa2l0ZXh0OiBzdHJpbmcsIGNhdGVnb3JpZXM6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0Y29uc3QgJHJlc3VsdCA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ213LWJvZHkgbXctYm9keS1jb250ZW50Jyk7XG5cblx0XHRpZiAoc2tpbiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRcdCRyZXN1bHQuYWRkQ2xhc3MoJ3ZlY3Rvci1ib2R5Jyk7XG5cdFx0fVxuXG5cdFx0JHJlc3VsdC5hcHBlbmQoXG5cdFx0XHQkKCc8aDE+JykuYWRkQ2xhc3MoJ2ZpcnN0SGVhZGluZycpLmh0bWwodGl0bGUpLFxuXHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoXG5cdFx0XHRcdFx0YG13LWNvbnRlbnQtJHsobXcuY29uZmlnLmdldCgnd2dWaXN1YWxFZGl0b3InKSBhcyB7cGFnZUxhbmd1YWdlRGlyOiBzdHJpbmd9KS5wYWdlTGFuZ3VhZ2VEaXJ9YFxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hdHRyKCdsYW5nJywgREFUQS5maW5kKChpdGVtKSA9PiBpdGVtLnZhciA9PT0gdmFyaWFudCk/Lmh0bWxMYW5nID8/IHZhcmlhbnQpXG5cdFx0XHRcdC5odG1sKHdpa2l0ZXh0KSxcblx0XHRcdCQucGFyc2VIVE1MKGNhdGVnb3JpZXMpXG5cdFx0KTtcblxuXHRcdGNvbnN0ICRwcmV2aWV3ID0gJHJlc3VsdDtcblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcHJldmlldyk7XG5cdFx0Y29uc3QgcHJldmlld0VsZW1lbnQgPSAkcHJldmlld1swXTtcblx0XHRpZiAocHJldmlld0VsZW1lbnQpIHtcblx0XHRcdHZpc3VhbEVkaXRvci50YXJnZXRMaW5rc1RvTmV3V2luZG93KHByZXZpZXdFbGVtZW50KTtcblx0XHR9XG5cdFx0cmV0dXJuICRwcmV2aWV3LnByb3AoJ291dGVySFRNTCcpID8/ICcnO1xuXHR9O1xuXG5cdGNvbnN0IHByb2Nlc3MgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qge3RhcmdldH0gPSB2aXN1YWxFZGl0b3IuaW5pdDtcblx0XHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHJvb3QuY2xhc3NOYW1lID0gJ3B3di0yMDE3LXZhcmlhbnQnO1xuXHRcdHNhdmVEaWFsb2cucHJldmlld1BhbmVsLiRlbGVtZW50LmFwcGVuZChyb290KTtcblxuXHRcdGNvbnN0IGZldGNoUHJldmlldyA9IGFzeW5jIChyZXF1ZXN0ZWRWYXJpYW50OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuXHRcdFx0dmFyaWFudCA9IHJlcXVlc3RlZFZhcmlhbnQ7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHRhcmdldC5nZXRDb250ZW50QXBpKCkucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0ZGlzYWJsZWVkaXRzZWN0aW9uOiB0cnVlLFxuXHRcdFx0XHRlcnJvcmZvcm1hdDogJ2h0bWwnLFxuXHRcdFx0XHRlcnJvcmxhbmc6IHdnVXNlckxhbmd1YWdlLFxuXHRcdFx0XHRlcnJvcnN1c2Vsb2NhbDogdHJ1ZSxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiBbJ3RleHQnLCAnaW5kaWNhdG9ycycsICdkaXNwbGF5dGl0bGUnLCAnY2F0ZWdvcmllc2h0bWwnLCAncGFyc2V3YXJuaW5nc2h0bWwnXSxcblx0XHRcdFx0cHN0OiB0cnVlLFxuXHRcdFx0XHRwcmV2aWV3OiB0cnVlLFxuXHRcdFx0XHR0aXRsZTogdGFyZ2V0LmdldFBhZ2VOYW1lKCksXG5cdFx0XHRcdHRleHQ6IHRhcmdldC5nZXREb2NUb1NhdmUoKSxcblx0XHRcdFx0dXNlbGFuZzogd2dVc2VyTGFuZ3VhZ2UsXG5cdFx0XHRcdHZhcmlhbnQ6IHJlcXVlc3RlZFZhcmlhbnQsXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGNvbnN0cnVjdERvY3VtZW50KHJlc3BvbnNlLnBhcnNlLmRpc3BsYXl0aXRsZSwgcmVzcG9uc2UucGFyc2UudGV4dCwgcmVzcG9uc2UucGFyc2UuY2F0ZWdvcmllc2h0bWwpO1xuXHRcdH07XG5cblx0XHRjb25zdCBhcHAgPSBjcmVhdGVBcHAoUHJldmlldywge1xuXHRcdFx0aW5pdGlhbFZhcmlhbnQ6IHZhcmlhbnQsXG5cdFx0XHRjYXB0aW9uOiBtdy5tc2coJ3B3di0yMDE3LWNhcHRpb24nKSxcblx0XHRcdHZhcmlhbnRzOiBEQVRBLm1hcCgoaXRlbSkgPT4gKHt2YWx1ZTogaXRlbS52YXIsIGxhYmVsOiBtdy5tc2coaXRlbS5tc2cpfSkpLFxuXHRcdFx0ZmV0Y2hQcmV2aWV3LFxuXHRcdFx0Z2V0RXJyb3JNZXNzYWdlOiAoZXJyb3I6IHVua25vd24pID0+IHRhcmdldC5nZXRDb250ZW50QXBpKCkuZ2V0RXJyb3JNZXNzYWdlKGVycm9yKSxcblx0XHRcdG9uUHJldmlld1N0YXJ0OiAoKSA9PiB7XG5cdFx0XHRcdHRhcmdldC5lbWl0KCdzYXZlUHJldmlldycpO1xuXHRcdFx0XHRzYXZlRGlhbG9nLnB1c2hQZW5kaW5nKCk7XG5cdFx0XHR9LFxuXHRcdFx0b25QcmV2aWV3RW5kOiAoKSA9PiBzYXZlRGlhbG9nLnBvcFBlbmRpbmcoKSxcblx0XHRcdG9uU2hvd1ByZXZpZXc6ICgpID0+IHNhdmVEaWFsb2cuc3dhcFBhbmVsKCdwcmV2aWV3JyksXG5cdFx0fSk7XG5cdFx0Y29uc3QgaW5zdGFuY2UgPSBhcHAubW91bnQocm9vdCkgYXMgdW5rbm93biBhcyBQcmV2aWV3SW5zdGFuY2U7XG5cblx0XHR0YXJnZXQuc2F2ZURpYWxvZy5vZmYoJ3ByZXZpZXcnLCAnb25TYXZlRGlhbG9nUHJldmlldycsIHRhcmdldCk7XG5cdFx0dGFyZ2V0LnNhdmVEaWFsb2cub24oJ3ByZXZpZXcnLCAoKSA9PiB7XG5cdFx0XHR0YXJnZXQuZ2V0U3VyZmFjZSgpLmdldE1vZGVsKCkuZ2V0RG9jdW1lbnQoKS5vbmNlKCd0cmFuc2FjdCcsIGluc3RhbmNlLmludmFsaWRhdGUpO1xuXHRcdFx0dm9pZCBpbnN0YW5jZS5wcmV2aWV3KCk7XG5cdFx0fSk7XG5cblx0XHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRpZiAoIW13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cHJvY2VzcygpO1xuXHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLFlBQWE7O0FDRGQsSUFBTUMsT0FBTyxDQUNaO0VBQUNDLEtBQUs7RUFBTUMsVUFBVTtFQUFNQyxLQUFLO0FBQWEsR0FDOUM7RUFBQ0YsS0FBSztFQUFXQyxVQUFVO0VBQVdDLEtBQUs7QUFBa0IsR0FDN0Q7RUFBQ0YsS0FBSztFQUFXQyxVQUFVO0VBQVdDLEtBQUs7QUFBa0IsR0FDN0Q7RUFBQ0YsS0FBSztFQUFTQyxVQUFVO0VBQWNDLEtBQUs7QUFBZ0IsR0FDNUQ7RUFBQ0YsS0FBSztFQUFTQyxVQUFVO0VBQWNDLEtBQUs7QUFBZ0IsR0FDNUQ7RUFBQ0YsS0FBSztFQUFTQyxVQUFVO0VBQWNDLEtBQUs7QUFBZ0IsR0FDNUQ7RUFBQ0YsS0FBSztFQUFTQyxVQUFVO0VBQWNDLEtBQUs7QUFBZ0IsR0FDNUQ7RUFBQ0YsS0FBSztFQUFTQyxVQUFVO0VBQWNDLEtBQUs7QUFBZ0IsR0FDNUQ7RUFBQ0YsS0FBSztFQUFTQyxVQUFVO0VBQWNDLEtBQUs7QUFBZ0IsQ0FBQTs7QUNUN0QsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCQyxLQUFHQyxTQUFTQyxJQUFJO0lBQ2Ysb0JBQW9CQyxPQUFPQyxNQUFNLFVBQVUsUUFBUTtJQUNuRCxvQkFBb0JELE9BQU9DLE1BQU0sV0FBVyxT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R2lHLE9BQU9yRSxJQUFZbEMsU0FBUyxHQUFHO0FBQ3RDa0ksWUFBUTtBQUNSNUgsT0FBR2lHLE9BQU8vRixJQUFZUixXQUFXLElBQUk7RUFDdEM7QUFDRDs7QVB2R0EsTUFBQSxHQUFLRixrQkFBQWtMLFNBQVEsRUFBRXZJLEtBQUssTUFBWTtBQUMvQm5DLEtBQUd1SCxLQUFLLDRCQUE0QixFQUFFa0QsSUFBSSxNQUFZO0FBQ3JENUUsd0JBQW9CO0VBQ3JCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImNvbmZpZ0tleSIsICJEQVRBIiwgInZhciIsICJodG1sTGFuZyIsICJtc2ciLCAiUFdWMjAxN21lc3NhZ2VzIiwgIm13IiwgIm1lc3NhZ2VzIiwgInNldCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAic2VsZWN0ZWRWYXJpYW50IiwgInJlZiIsICJpbml0aWFsVmFyaWFudCIsICJhY3RpdmVWYXJpYW50IiwgInByZXZpZXdOb2RlIiwgImxvYWRpbmciLCAiZXJyb3JNZXNzYWdlIiwgImZhaWxlZFZhcmlhbnQiLCAibWVudUl0ZW1zIiwgImNvbXB1dGVkIiwgInZhcmlhbnRzIiwgInByZXZpZXdzIiwgIk1hcCIsICJwZW5kaW5nUmVxdWVzdHMiLCAibG9hZGluZ01lc3NhZ2UiLCAicmV0cnlMYWJlbCIsICJsb2FkVmFyaWFudCIsICJ2YXJpYW50IiwgImNhY2hlZFByZXZpZXciLCAiZ2V0IiwgInZhbHVlIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJwZW5kaW5nUmVxdWVzdCIsICJyZXF1ZXN0IiwgImZldGNoUHJldmlldyIsICJ0aGVuIiwgIm5vZGUiLCAiY2F0Y2giLCAiZXJyb3IiLCAiZ2V0RXJyb3JNZXNzYWdlIiwgImZpbmFsbHkiLCAiZGVsZXRlIiwgIndhdGNoIiwgImZsdXNoIiwgInJldHJ5IiwgInByZXZpZXciLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJvblByZXZpZXdTdGFydCIsICJvblNob3dQcmV2aWV3IiwgIm9uUHJldmlld0VuZCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW52YWxpZGF0ZSIsICJjbGVhciIsICJfX2V4cG9zZSIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjcmVhdGVWTm9kZSIsICJsYWJlbCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY2FwdGlvbiIsICJkZWZhdWx0IiwgInNlbGVjdGVkIiwgIiRldmVudCIsICJkaXNhYmxlZCIsICJfIiwgImNyZWF0ZUJsb2NrIiwgImtleSIsICJpbmxpbmUiLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgInR5cGUiLCAib25DbGljayIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiaW5uZXJIVE1MIiwgIlByZXZpZXdfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIlByZXZpZXdfZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJza2luIiwgIndnVXNlckxhbmd1YWdlIiwgIndnVXNlclZhcmlhbnQiLCAiY29uZmlnIiwgInZpc3VhbEVkaXRvciIsICJ2ZSIsICJjb25zdHJ1Y3REb2N1bWVudCIsICJ0aXRsZSIsICJ3aWtpdGV4dCIsICJjYXRlZ29yaWVzIiwgIl9EQVRBJGZpbmQkaHRtbExhbmciLCAiX0RBVEEkZmluZCIsICJfJHByZXZpZXckcHJvcCIsICIkcmVzdWx0IiwgIiQiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgImh0bWwiLCAiY29uY2F0IiwgInBhZ2VMYW5ndWFnZURpciIsICJhdHRyIiwgImZpbmQiLCAiaXRlbSIsICJwYXJzZUhUTUwiLCAiJHByZXZpZXciLCAiaG9vayIsICJmaXJlIiwgInByZXZpZXdFbGVtZW50IiwgInRhcmdldExpbmtzVG9OZXdXaW5kb3ciLCAicHJvcCIsICJwcm9jZXNzIiwgInRhcmdldCIsICJpbml0IiwgInNhdmVEaWFsb2ciLCAicm9vdCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJwcmV2aWV3UGFuZWwiLCAiJGVsZW1lbnQiLCAiX3JlZjIiLCAicmVxdWVzdGVkVmFyaWFudCIsICJyZXNwb25zZSIsICJnZXRDb250ZW50QXBpIiwgInBvc3QiLCAiYWN0aW9uIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJlcnJvcmZvcm1hdCIsICJlcnJvcmxhbmciLCAiZXJyb3JzdXNlbG9jYWwiLCAiZm9ybWF0dmVyc2lvbiIsICJwc3QiLCAiZ2V0UGFnZU5hbWUiLCAidGV4dCIsICJnZXREb2NUb1NhdmUiLCAidXNlbGFuZyIsICJwYXJzZSIsICJkaXNwbGF5dGl0bGUiLCAiY2F0ZWdvcmllc2h0bWwiLCAiX3giLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJtYXAiLCAiZW1pdCIsICJwdXNoUGVuZGluZyIsICJwb3BQZW5kaW5nIiwgInN3YXBQYW5lbCIsICJpbnN0YW5jZSIsICJtb3VudCIsICJvZmYiLCAib24iLCAiZ2V0U3VyZmFjZSIsICJnZXRNb2RlbCIsICJnZXREb2N1bWVudCIsICJvbmNlIiwgImFkZCIsICJnZXRCb2R5Il0KfQo=
