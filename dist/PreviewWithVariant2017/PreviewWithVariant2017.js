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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgImRpc3QvUHJldmlld1dpdGhWYXJpYW50MjAxNy9zcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL1ByZXZpZXcudnVlIiwgInNmYy10ZW1wbGF0ZTpFOlxcQ29kZXNcXFFpdXdlblxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxQcmV2aWV3V2l0aFZhcmlhbnQyMDE3XFxtb2R1bGVzXFxQcmV2aWV3LnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L21vZHVsZXMvUHJldmlldy52dWUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoKTogdm9pZCA9PiB7XG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKCk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1QcmV2aWV3V2l0aFZhcmlhbnQyMDE3X19Jbml0aWFsaXplZFwiXG59XG4iLCAiY29uc3QgREFUQSA9IFtcblx0e3ZhcjogJ3poJywgaHRtbExhbmc6ICd6aCcsIG1zZzogJ3B3di0yMDE3LXpoJ30sXG5cdHt2YXI6ICd6aC1oYW5zJywgaHRtbExhbmc6ICd6aC1IYW5zJywgbXNnOiAncHd2LTIwMTctemgtaGFucyd9LFxuXHR7dmFyOiAnemgtaGFudCcsIGh0bWxMYW5nOiAnemgtSGFudCcsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnQnfSxcblx0e3ZhcjogJ3poLWNuJywgaHRtbExhbmc6ICd6aC1IYW5zLUNOJywgbXNnOiAncHd2LTIwMTctemgtY24nfSxcblx0e3ZhcjogJ3poLWhrJywgaHRtbExhbmc6ICd6aC1IYW50LUhLJywgbXNnOiAncHd2LTIwMTctemgtaGsnfSxcblx0e3ZhcjogJ3poLW1vJywgaHRtbExhbmc6ICd6aC1IYW50LU1PJywgbXNnOiAncHd2LTIwMTctemgtbW8nfSxcblx0e3ZhcjogJ3poLW15JywgaHRtbExhbmc6ICd6aC1IYW5zLU1ZJywgbXNnOiAncHd2LTIwMTctemgtbXknfSxcblx0e3ZhcjogJ3poLXNnJywgaHRtbExhbmc6ICd6aC1IYW5zLVNHJywgbXNnOiAncHd2LTIwMTctemgtc2cnfSxcblx0e3ZhcjogJ3poLXR3JywgaHRtbExhbmc6ICd6aC1IYW50LVRXJywgbXNnOiAncHd2LTIwMTctemgtdHcnfSxcbl07XG5cbmV4cG9ydCB7REFUQX07XG4iLCAiY29uc3QgUFdWMjAxN21lc3NhZ2VzID0gKCkgPT4ge1xuXHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdCdwd3YtMjAxNy1jYXB0aW9uJzogd2luZG93LndnVUxTKCfpgInmi6nor63oqIDlj5jkvZMnLCAn6YG45pOH6Kqe6KiA6K6K6auUJyksXG5cdFx0J3B3di0yMDE3LWxvYWRpbmcnOiB3aW5kb3cud2dVTFMoJ+ato+WcqOWKoOi9vemihOiniOKApicsICfmraPlnKjovInlhaXpoJDopr3igKYnKSxcblx0XHQncHd2LTIwMTctcmV0cnknOiB3aW5kb3cud2dVTFMoJ+mHjeivlScsICfph43oqaYnKSxcblx0XHQncHd2LTIwMTctemgnOiB3aW5kb3cud2dVTFMoJ+S4jei9rOaNoicsICfkuI3ovYnmj5snKSxcblx0XHQncHd2LTIwMTctemgtaGFucyc6ICfnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oYW50JzogJ+e5gemrlCcsXG5cdFx0J3B3di0yMDE3LXpoLWNuJzogJ+S4reWbveWkp+mZhueugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLWhrJzogJ+S4reWci+mmmea4r+e5gemrlCcsXG5cdFx0J3B3di0yMDE3LXpoLW1vJzogJ+S4reWci+a+s+mWgOe5gemrlCcsXG5cdFx0J3B3di0yMDE3LXpoLW15JzogJ+mprOadpeilv+S6mueugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLXNnJzogJ+aWsOWKoOWdoeeugOS9kycsXG5cdFx0J3B3di0yMDE3LXpoLXR3JzogJ+S4reWci+iHuueBo+e5gemrlCcsXG5cdH0pO1xufTtcblxuZXhwb3J0IHtQV1YyMDE3bWVzc2FnZXN9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RmllbGQsIENkeE1lc3NhZ2UsIENkeFByb2dyZXNzQmFyLCBDZHhTZWxlY3R9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcblxuaW50ZXJmYWNlIFZhcmlhbnRPcHRpb24ge1xuXHR2YWx1ZTogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0aW5pdGlhbFZhcmlhbnQ6IHN0cmluZztcblx0Y2FwdGlvbjogc3RyaW5nO1xuXHR2YXJpYW50czogVmFyaWFudE9wdGlvbltdO1xuXHRmZXRjaFByZXZpZXc6ICh2YXJpYW50OiBzdHJpbmcpID0+IFByb21pc2U8SFRNTEVsZW1lbnQ+O1xuXHRnZXRFcnJvck1lc3NhZ2U6IChlcnJvcjogdW5rbm93bikgPT4gc3RyaW5nO1xuXHRvblByZXZpZXdTdGFydDogKCkgPT4gdm9pZDtcblx0b25QcmV2aWV3RW5kOiAoKSA9PiB2b2lkO1xuXHRvblNob3dQcmV2aWV3OiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3Qgc2VsZWN0ZWRWYXJpYW50ID0gcmVmKHByb3BzLmluaXRpYWxWYXJpYW50KTtcbmNvbnN0IGFjdGl2ZVZhcmlhbnQgPSByZWYocHJvcHMuaW5pdGlhbFZhcmlhbnQpO1xuY29uc3QgcHJldmlld05vZGUgPSByZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbmNvbnN0IGxvYWRpbmcgPSByZWYoZmFsc2UpO1xuY29uc3QgZXJyb3JNZXNzYWdlID0gcmVmKCcnKTtcbmNvbnN0IGZhaWxlZFZhcmlhbnQgPSByZWY8c3RyaW5nPigpO1xuY29uc3QgbWVudUl0ZW1zID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudmFyaWFudHMpO1xuY29uc3QgcHJldmlld3MgPSBuZXcgTWFwPHN0cmluZywgSFRNTEVsZW1lbnQ+KCk7XG5jb25zdCBwZW5kaW5nUmVxdWVzdHMgPSBuZXcgTWFwPHN0cmluZywgUHJvbWlzZTxib29sZWFuPj4oKTtcbmNvbnN0IGxvYWRpbmdNZXNzYWdlID0gbXcubXNnKCdwd3YtMjAxNy1sb2FkaW5nJyk7XG5jb25zdCByZXRyeUxhYmVsID0gbXcubXNnKCdwd3YtMjAxNy1yZXRyeScpO1xuXG5jb25zdCBsb2FkVmFyaWFudCA9ICh2YXJpYW50OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcblx0Y29uc3QgY2FjaGVkUHJldmlldyA9IHByZXZpZXdzLmdldCh2YXJpYW50KTtcblx0aWYgKGNhY2hlZFByZXZpZXcgIT09IHVuZGVmaW5lZCkge1xuXHRcdHByZXZpZXdOb2RlLnZhbHVlID0gY2FjaGVkUHJldmlldztcblx0XHRhY3RpdmVWYXJpYW50LnZhbHVlID0gdmFyaWFudDtcblx0XHRlcnJvck1lc3NhZ2UudmFsdWUgPSAnJztcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuXHR9XG5cblx0Y29uc3QgcGVuZGluZ1JlcXVlc3QgPSBwZW5kaW5nUmVxdWVzdHMuZ2V0KHZhcmlhbnQpO1xuXHRpZiAocGVuZGluZ1JlcXVlc3QpIHtcblx0XHRyZXR1cm4gcGVuZGluZ1JlcXVlc3Q7XG5cdH1cblxuXHRlcnJvck1lc3NhZ2UudmFsdWUgPSAnJztcblx0ZmFpbGVkVmFyaWFudC52YWx1ZSA9IHVuZGVmaW5lZDtcblx0bG9hZGluZy52YWx1ZSA9IHRydWU7XG5cdGNvbnN0IHJlcXVlc3QgPSBwcm9wc1xuXHRcdC5mZXRjaFByZXZpZXcodmFyaWFudClcblx0XHQudGhlbigobm9kZSkgPT4ge1xuXHRcdFx0cHJldmlld3Muc2V0KHZhcmlhbnQsIG5vZGUpO1xuXHRcdFx0cHJldmlld05vZGUudmFsdWUgPSBub2RlO1xuXHRcdFx0YWN0aXZlVmFyaWFudC52YWx1ZSA9IHZhcmlhbnQ7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9KVxuXHRcdC5jYXRjaCgoZXJyb3I6IHVua25vd24pID0+IHtcblx0XHRcdGVycm9yTWVzc2FnZS52YWx1ZSA9IHByb3BzLmdldEVycm9yTWVzc2FnZShlcnJvcik7XG5cdFx0XHRmYWlsZWRWYXJpYW50LnZhbHVlID0gdmFyaWFudDtcblx0XHRcdHNlbGVjdGVkVmFyaWFudC52YWx1ZSA9IGFjdGl2ZVZhcmlhbnQudmFsdWU7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSlcblx0XHQuZmluYWxseSgoKSA9PiB7XG5cdFx0XHRsb2FkaW5nLnZhbHVlID0gZmFsc2U7XG5cdFx0XHRwZW5kaW5nUmVxdWVzdHMuZGVsZXRlKHZhcmlhbnQpO1xuXHRcdH0pO1xuXHRwZW5kaW5nUmVxdWVzdHMuc2V0KHZhcmlhbnQsIHJlcXVlc3QpO1xuXHRyZXR1cm4gcmVxdWVzdDtcbn07XG5cbndhdGNoKHNlbGVjdGVkVmFyaWFudCwgKHZhcmlhbnQpID0+IHtcblx0aWYgKHZhcmlhbnQgIT09IGFjdGl2ZVZhcmlhbnQudmFsdWUpIHtcblx0XHR2b2lkIGxvYWRWYXJpYW50KHZhcmlhbnQpO1xuXHR9XG59KTtcblxud2F0Y2goXG5cdHByZXZpZXdOb2RlLFxuXHQobm9kZSkgPT4ge1xuXHRcdHByZXZpZXdOb2RlLnZhbHVlID0gbm9kZTtcblx0fSxcblx0e2ZsdXNoOiAncG9zdCd9XG4pO1xuXG5jb25zdCByZXRyeSA9ICgpOiB2b2lkID0+IHtcblx0aWYgKGZhaWxlZFZhcmlhbnQudmFsdWUpIHtcblx0XHRzZWxlY3RlZFZhcmlhbnQudmFsdWUgPSBmYWlsZWRWYXJpYW50LnZhbHVlO1xuXHRcdHZvaWQgbG9hZFZhcmlhbnQoZmFpbGVkVmFyaWFudC52YWx1ZSk7XG5cdH1cbn07XG5cbmNvbnN0IHByZXZpZXcgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHByb3BzLm9uUHJldmlld1N0YXJ0KCk7XG5cdHRyeSB7XG5cdFx0YXdhaXQgbG9hZFZhcmlhbnQoc2VsZWN0ZWRWYXJpYW50LnZhbHVlKTtcblx0XHRwcm9wcy5vblNob3dQcmV2aWV3KCk7XG5cdH0gZmluYWxseSB7XG5cdFx0cHJvcHMub25QcmV2aWV3RW5kKCk7XG5cdH1cbn07XG5cbmNvbnN0IGludmFsaWRhdGUgPSAoKTogdm9pZCA9PiB7XG5cdHByZXZpZXdzLmNsZWFyKCk7XG5cdHByZXZpZXdOb2RlLnZhbHVlID0gbnVsbDtcblx0ZXJyb3JNZXNzYWdlLnZhbHVlID0gJyc7XG5cdGZhaWxlZFZhcmlhbnQudmFsdWUgPSB1bmRlZmluZWQ7XG5cdGFjdGl2ZVZhcmlhbnQudmFsdWUgPSBzZWxlY3RlZFZhcmlhbnQudmFsdWU7XG59O1xuXG5kZWZpbmVFeHBvc2Uoe2ludmFsaWRhdGUsIHByZXZpZXd9KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJwd3YtMjAxNy1wcmV2aWV3XCI+XG5cdFx0PGNkeC1maWVsZD5cblx0XHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgY2FwdGlvbiB9fTwvdGVtcGxhdGU+XG5cdFx0XHQ8Y2R4LXNlbGVjdCB2LW1vZGVsOnNlbGVjdGVkPVwic2VsZWN0ZWRWYXJpYW50XCIgOm1lbnUtaXRlbXM9XCJtZW51SXRlbXNcIiA6ZGlzYWJsZWQ9XCJsb2FkaW5nXCIgLz5cblx0XHQ8L2NkeC1maWVsZD5cblx0XHQ8Y2R4LXByb2dyZXNzLWJhciB2LWlmPVwibG9hZGluZ1wiIDphcmlhLWxhYmVsPVwibG9hZGluZ01lc3NhZ2VcIiA6aW5saW5lPVwidHJ1ZVwiIC8+XG5cdFx0PGNkeC1tZXNzYWdlIHYtaWY9XCJlcnJvck1lc3NhZ2VcIiB0eXBlPVwiZXJyb3JcIj5cblx0XHRcdHt7IGVycm9yTWVzc2FnZSB9fVxuXHRcdFx0PGNkeC1idXR0b24gOmRpc2FibGVkPVwibG9hZGluZ1wiIEBjbGljaz1cInJldHJ5XCI+e3sgcmV0cnlMYWJlbCB9fTwvY2R4LWJ1dHRvbj5cblx0XHQ8L2NkeC1tZXNzYWdlPlxuXHRcdDwhLS0gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby12LWh0bWwgLS0tIGNvbnRlbnQgb2YgcHJldmlld05vZGUgaXMgZnJvbSBhIHRydXN0ZWQgc291cmNlIC0tPlxuXHRcdDxkaXYgY2xhc3M9XCJwd3YtMjAxNy1wcmV2aWV3X19jb250ZW50XCIgdi1odG1sPVwicHJldmlld05vZGVcIiAvPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxuLnB3di0yMDE3LXByZXZpZXcge1xuXHQucHd2LTIwMTctcHJldmlld19fY29udGVudCAuZmlyc3RIZWFkaW5nIHtcblx0XHRtYXJnaW4tdG9wOiAwO1xuXHR9XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInB3di0yMDE3LXByZXZpZXdcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0gW1wiaW5uZXJIVE1MXCJdXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIG51bGwsIHtcbiAgICAgIGxhYmVsOiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkcHJvcHMuY2FwdGlvbiksIDEgLyogVEVYVCAqLylcbiAgICAgIF0pLFxuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4U2VsZWN0XCJdLCB7XG4gICAgICAgICAgc2VsZWN0ZWQ6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgXCJvblVwZGF0ZTpzZWxlY3RlZFwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpID0gJGV2ZW50KSksXG4gICAgICAgICAgXCJtZW51LWl0ZW1zXCI6ICRzZXR1cC5tZW51SXRlbXMsXG4gICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5sb2FkaW5nXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInNlbGVjdGVkXCIsIFwibWVudS1pdGVtc1wiLCBcImRpc2FibGVkXCJdKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0pLFxuICAgICgkc2V0dXAubG9hZGluZylcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeFByb2dyZXNzQmFyXCJdLCB7XG4gICAgICAgICAga2V5OiAwLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAubG9hZGluZ01lc3NhZ2UsXG4gICAgICAgICAgaW5saW5lOiB0cnVlXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIl0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAoJHNldHVwLmVycm9yTWVzc2FnZSlcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeE1lc3NhZ2VcIl0sIHtcbiAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgdHlwZTogXCJlcnJvclwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmVycm9yTWVzc2FnZSkgKyBcIiBcIiwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5sb2FkaW5nLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAucmV0cnlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAucmV0cnlMYWJlbCksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICB9KSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL25vLXYtaHRtbCAtLS0gY29udGVudCBvZiBwcmV2aWV3Tm9kZSBpcyBmcm9tIGEgdHJ1c3RlZCBzb3VyY2UgXCIpLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IFwicHd2LTIwMTctcHJldmlld19fY29udGVudFwiLFxuICAgICAgaW5uZXJIVE1MOiAkc2V0dXAucHJldmlld05vZGVcbiAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8yKVxuICBdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFByZXZpZXdXaXRoVmFyaWFudDIwMTdcXFxcbW9kdWxlc1xcXFxQcmV2aWV3LnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxQcmV2aWV3V2l0aFZhcmlhbnQyMDE3XFxcXG1vZHVsZXNcXFxcUHJldmlldy52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxQcmV2aWV3V2l0aFZhcmlhbnQyMDE3XFxcXG1vZHVsZXNcXFxcUHJldmlldy52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxQcmV2aWV3V2l0aFZhcmlhbnQyMDE3XFxcXG1vZHVsZXNcXFxcUHJldmlldy52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCAnLi9wcm9jZXNzVmlzdWFsRWRpdG9yLmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtEQVRBfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7UFdWMjAxN21lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vUHJldmlldy52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5cbmludGVyZmFjZSBQcmV2aWV3SW5zdGFuY2Uge1xuXHRpbnZhbGlkYXRlOiAoKSA9PiB2b2lkO1xuXHRwcmV2aWV3OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5QV1YyMDE3bWVzc2FnZXMoKTtcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3NraW4sIHdnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IHZhcmlhbnQgPSB3Z1VzZXJWYXJpYW50ID8/ICd6aCc7XG5cdGNvbnN0IHZpc3VhbEVkaXRvciA9IHdpbmRvdy52ZTtcblxuXHRjb25zdCBjb25zdHJ1Y3REb2N1bWVudCA9ICh0aXRsZTogc3RyaW5nLCB3aWtpdGV4dDogc3RyaW5nLCBjYXRlZ29yaWVzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdGNvbnN0ICRyZXN1bHQgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdtdy1ib2R5IG13LWJvZHktY29udGVudCcpO1xuXG5cdFx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0XHQkcmVzdWx0LmFkZENsYXNzKCd2ZWN0b3ItYm9keScpO1xuXHRcdH1cblxuXHRcdCRyZXN1bHQuYXBwZW5kKFxuXHRcdFx0JCgnPGgxPicpLmFkZENsYXNzKCdmaXJzdEhlYWRpbmcnKS5odG1sKHRpdGxlKSxcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdGBtdy1jb250ZW50LSR7KG13LmNvbmZpZy5nZXQoJ3dnVmlzdWFsRWRpdG9yJykgYXMge3BhZ2VMYW5ndWFnZURpcjogc3RyaW5nfSkucGFnZUxhbmd1YWdlRGlyfWBcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXR0cignbGFuZycsIERBVEEuZmluZCgoaXRlbSkgPT4gaXRlbS52YXIgPT09IHZhcmlhbnQpPy5odG1sTGFuZyA/PyB2YXJpYW50KVxuXHRcdFx0XHQuaHRtbCh3aWtpdGV4dCksXG5cdFx0XHQkLnBhcnNlSFRNTChjYXRlZ29yaWVzKVxuXHRcdCk7XG5cblx0XHRjb25zdCAkcHJldmlldyA9ICRyZXN1bHQ7XG5cdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJHByZXZpZXcpO1xuXHRcdGNvbnN0IHByZXZpZXdFbGVtZW50ID0gJHByZXZpZXdbMF07XG5cdFx0aWYgKHByZXZpZXdFbGVtZW50KSB7XG5cdFx0XHR2aXN1YWxFZGl0b3IudGFyZ2V0TGlua3NUb05ld1dpbmRvdyhwcmV2aWV3RWxlbWVudCk7XG5cdFx0fVxuXHRcdHJldHVybiAkcHJldmlldy5wcm9wKCdvdXRlckhUTUwnKSA/PyAnJztcblx0fTtcblxuXHRjb25zdCBwcm9jZXNzID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHt0YXJnZXR9ID0gdmlzdWFsRWRpdG9yLmluaXQ7XG5cdFx0Y29uc3Qge3NhdmVEaWFsb2d9ID0gdGFyZ2V0O1xuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRyb290LmNsYXNzTmFtZSA9ICdwd3YtMjAxNy12YXJpYW50Jztcblx0XHRzYXZlRGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5hcHBlbmQocm9vdCk7XG5cblx0XHRjb25zdCBmZXRjaFByZXZpZXcgPSBhc3luYyAocmVxdWVzdGVkVmFyaWFudDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcblx0XHRcdHZhcmlhbnQgPSByZXF1ZXN0ZWRWYXJpYW50O1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0YXJnZXQuZ2V0Q29udGVudEFwaSgpLnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogWyd0ZXh0JywgJ2luZGljYXRvcnMnLCAnZGlzcGxheXRpdGxlJywgJ2NhdGVnb3JpZXNodG1sJywgJ3BhcnNld2FybmluZ3NodG1sJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0cHJldmlldzogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6IHRhcmdldC5nZXRQYWdlTmFtZSgpLFxuXHRcdFx0XHR0ZXh0OiB0YXJnZXQuZ2V0RG9jVG9TYXZlKCksXG5cdFx0XHRcdHVzZWxhbmc6IHdnVXNlckxhbmd1YWdlLFxuXHRcdFx0XHR2YXJpYW50OiByZXF1ZXN0ZWRWYXJpYW50LFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBjb25zdHJ1Y3REb2N1bWVudChyZXNwb25zZS5wYXJzZS5kaXNwbGF5dGl0bGUsIHJlc3BvbnNlLnBhcnNlLnRleHQsIHJlc3BvbnNlLnBhcnNlLmNhdGVnb3JpZXNodG1sKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgYXBwID0gY3JlYXRlQXBwKFByZXZpZXcsIHtcblx0XHRcdGluaXRpYWxWYXJpYW50OiB2YXJpYW50LFxuXHRcdFx0Y2FwdGlvbjogbXcubXNnKCdwd3YtMjAxNy1jYXB0aW9uJyksXG5cdFx0XHR2YXJpYW50czogREFUQS5tYXAoKGl0ZW0pID0+ICh7dmFsdWU6IGl0ZW0udmFyLCBsYWJlbDogbXcubXNnKGl0ZW0ubXNnKX0pKSxcblx0XHRcdGZldGNoUHJldmlldyxcblx0XHRcdGdldEVycm9yTWVzc2FnZTogKGVycm9yOiB1bmtub3duKSA9PiB0YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksXG5cdFx0XHRvblByZXZpZXdTdGFydDogKCkgPT4ge1xuXHRcdFx0XHR0YXJnZXQuZW1pdCgnc2F2ZVByZXZpZXcnKTtcblx0XHRcdFx0c2F2ZURpYWxvZy5wdXNoUGVuZGluZygpO1xuXHRcdFx0fSxcblx0XHRcdG9uUHJldmlld0VuZDogKCkgPT4gc2F2ZURpYWxvZy5wb3BQZW5kaW5nKCksXG5cdFx0XHRvblNob3dQcmV2aWV3OiAoKSA9PiBzYXZlRGlhbG9nLnN3YXBQYW5lbCgncHJldmlldycpLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGluc3RhbmNlID0gYXBwLm1vdW50KHJvb3QpIGFzIHVua25vd24gYXMgUHJldmlld0luc3RhbmNlO1xuXG5cdFx0dGFyZ2V0LnNhdmVEaWFsb2cub2ZmKCdwcmV2aWV3JywgJ29uU2F2ZURpYWxvZ1ByZXZpZXcnLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5zYXZlRGlhbG9nLm9uKCdwcmV2aWV3JywgKCkgPT4ge1xuXHRcdFx0dGFyZ2V0LmdldFN1cmZhY2UoKS5nZXRNb2RlbCgpLmdldERvY3VtZW50KCkub25jZSgndHJhbnNhY3QnLCBpbnN0YW5jZS5pbnZhbGlkYXRlKTtcblx0XHRcdHZvaWQgaW5zdGFuY2UucHJldmlldygpO1xuXHRcdH0pO1xuXG5cdFx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0aWYgKCFtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHByb2Nlc3MoKTtcblx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxZQUFhOztBQ0RkLElBQU1DLE9BQU8sQ0FDWjtFQUFDQyxLQUFLO0VBQU1DLFVBQVU7RUFBTUMsS0FBSztBQUFhLEdBQzlDO0VBQUNGLEtBQUs7RUFBV0MsVUFBVTtFQUFXQyxLQUFLO0FBQWtCLEdBQzdEO0VBQUNGLEtBQUs7RUFBV0MsVUFBVTtFQUFXQyxLQUFLO0FBQWtCLEdBQzdEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLEdBQzVEO0VBQUNGLEtBQUs7RUFBU0MsVUFBVTtFQUFjQyxLQUFLO0FBQWdCLENBQUE7O0FDVDdELElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QkMsS0FBR0MsU0FBU0MsSUFBSTtJQUNmLG9CQUFvQkMsT0FBT0MsTUFBTSxVQUFVLFFBQVE7SUFDbkQsb0JBQW9CRCxPQUFPQyxNQUFNLFdBQVcsU0FBUztJQUNyRCxrQkFBa0JELE9BQU9DLE1BQU0sTUFBTSxJQUFJO0lBQ3pDLGVB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UixXQUFXLElBQUk7RUFDdEM7QUFDRDs7QVB2R0EsTUFBQSxHQUFLRixrQkFBQWlMLFNBQVEsRUFBRXRJLEtBQUssTUFBWTtBQUMvQm5DLEtBQUdzSCxLQUFLLDRCQUE0QixFQUFFa0QsSUFBSSxNQUFZO0FBQ3JENUUsd0JBQW9CO0VBQ3JCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImNvbmZpZ0tleSIsICJEQVRBIiwgInZhciIsICJodG1sTGFuZyIsICJtc2ciLCAiUFdWMjAxN21lc3NhZ2VzIiwgIm13IiwgIm1lc3NhZ2VzIiwgInNldCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAic2VsZWN0ZWRWYXJpYW50IiwgInJlZiIsICJpbml0aWFsVmFyaWFudCIsICJhY3RpdmVWYXJpYW50IiwgInByZXZpZXdOb2RlIiwgImxvYWRpbmciLCAiZXJyb3JNZXNzYWdlIiwgImZhaWxlZFZhcmlhbnQiLCAibWVudUl0ZW1zIiwgImNvbXB1dGVkIiwgInZhcmlhbnRzIiwgInByZXZpZXdzIiwgIk1hcCIsICJwZW5kaW5nUmVxdWVzdHMiLCAibG9hZGluZ01lc3NhZ2UiLCAicmV0cnlMYWJlbCIsICJsb2FkVmFyaWFudCIsICJ2YXJpYW50IiwgImNhY2hlZFByZXZpZXciLCAiZ2V0IiwgInZhbHVlIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJwZW5kaW5nUmVxdWVzdCIsICJyZXF1ZXN0IiwgImZldGNoUHJldmlldyIsICJ0aGVuIiwgIm5vZGUiLCAiY2F0Y2giLCAiZXJyb3IiLCAiZ2V0RXJyb3JNZXNzYWdlIiwgImZpbmFsbHkiLCAiZGVsZXRlIiwgIndhdGNoIiwgImZsdXNoIiwgInJldHJ5IiwgInByZXZpZXciLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJvblByZXZpZXdTdGFydCIsICJvblNob3dQcmV2aWV3IiwgIm9uUHJldmlld0VuZCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW52YWxpZGF0ZSIsICJjbGVhciIsICJfX2V4cG9zZSIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjcmVhdGVWTm9kZSIsICJsYWJlbCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY2FwdGlvbiIsICJkZWZhdWx0IiwgInNlbGVjdGVkIiwgIiRldmVudCIsICJkaXNhYmxlZCIsICJfIiwgImNyZWF0ZUJsb2NrIiwgImtleSIsICJpbmxpbmUiLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgInR5cGUiLCAib25DbGljayIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiaW5uZXJIVE1MIiwgIlByZXZpZXdfZGVmYXVsdCIsICJfX2ZpbGUiLCAiUHJldmlld19kZWZhdWx0MiIsICJpbXBvcnRfdnVlNCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgInNraW4iLCAid2dVc2VyTGFuZ3VhZ2UiLCAid2dVc2VyVmFyaWFudCIsICJjb25maWciLCAidmlzdWFsRWRpdG9yIiwgInZlIiwgImNvbnN0cnVjdERvY3VtZW50IiwgInRpdGxlIiwgIndpa2l0ZXh0IiwgImNhdGVnb3JpZXMiLCAiX0RBVEEkZmluZCRodG1sTGFuZyIsICJfREFUQSRmaW5kIiwgIl8kcHJldmlldyRwcm9wIiwgIiRyZXN1bHQiLCAiJCIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiaHRtbCIsICJjb25jYXQiLCAicGFnZUxhbmd1YWdlRGlyIiwgImF0dHIiLCAiZmluZCIsICJpdGVtIiwgInBhcnNlSFRNTCIsICIkcHJldmlldyIsICJob29rIiwgImZpcmUiLCAicHJldmlld0VsZW1lbnQiLCAidGFyZ2V0TGlua3NUb05ld1dpbmRvdyIsICJwcm9wIiwgInByb2Nlc3MiLCAidGFyZ2V0IiwgImluaXQiLCAic2F2ZURpYWxvZyIsICJyb290IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInByZXZpZXdQYW5lbCIsICIkZWxlbWVudCIsICJfcmVmMiIsICJyZXF1ZXN0ZWRWYXJpYW50IiwgInJlc3BvbnNlIiwgImdldENvbnRlbnRBcGkiLCAicG9zdCIsICJhY3Rpb24iLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgImVycm9yZm9ybWF0IiwgImVycm9ybGFuZyIsICJlcnJvcnN1c2Vsb2NhbCIsICJmb3JtYXR2ZXJzaW9uIiwgInBzdCIsICJnZXRQYWdlTmFtZSIsICJ0ZXh0IiwgImdldERvY1RvU2F2ZSIsICJ1c2VsYW5nIiwgInBhcnNlIiwgImRpc3BsYXl0aXRsZSIsICJjYXRlZ29yaWVzaHRtbCIsICJfeCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgIm1hcCIsICJlbWl0IiwgInB1c2hQZW5kaW5nIiwgInBvcFBlbmRpbmciLCAic3dhcFBhbmVsIiwgImluc3RhbmNlIiwgIm1vdW50IiwgIm9mZiIsICJvbiIsICJnZXRTdXJmYWNlIiwgImdldE1vZGVsIiwgImdldERvY3VtZW50IiwgIm9uY2UiLCAiYWRkIiwgImdldEJvZHkiXQp9Cg==
