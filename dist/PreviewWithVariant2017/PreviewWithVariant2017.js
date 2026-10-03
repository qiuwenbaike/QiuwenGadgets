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
var className = "pwv-2017-variant";
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
    root.className = className;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvUHJldmlld1dpdGhWYXJpYW50MjAxNy50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9vcHRpb25zLmpzb24iLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgImRpc3QvUHJldmlld1dpdGhWYXJpYW50MjAxNy9zcmMvUHJldmlld1dpdGhWYXJpYW50MjAxNy9tb2R1bGVzL1ByZXZpZXcudnVlIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxQcmV2aWV3V2l0aFZhcmlhbnQyMDE3XFxtb2R1bGVzXFxQcmV2aWV3LnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9QcmV2aWV3V2l0aFZhcmlhbnQyMDE3L21vZHVsZXMvUHJldmlldy52dWUiLCAic3JjL1ByZXZpZXdXaXRoVmFyaWFudDIwMTcvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoKTogdm9pZCA9PiB7XG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKCk7XG5cdH0pO1xufSk7XG4iLCAie1xuXHRcImNsYXNzTmFtZVwiOiBcInB3di0yMDE3LXZhcmlhbnRcIixcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtUHJldmlld1dpdGhWYXJpYW50MjAxN19fSW5pdGlhbGl6ZWRcIlxufVxuIiwgImNvbnN0IERBVEEgPSBbXG5cdHt2YXI6ICd6aCcsIGh0bWxMYW5nOiAnemgnLCBtc2c6ICdwd3YtMjAxNy16aCd9LFxuXHR7dmFyOiAnemgtaGFucycsIGh0bWxMYW5nOiAnemgtSGFucycsIG1zZzogJ3B3di0yMDE3LXpoLWhhbnMnfSxcblx0e3ZhcjogJ3poLWhhbnQnLCBodG1sTGFuZzogJ3poLUhhbnQnLCBtc2c6ICdwd3YtMjAxNy16aC1oYW50J30sXG5cdHt2YXI6ICd6aC1jbicsIGh0bWxMYW5nOiAnemgtSGFucy1DTicsIG1zZzogJ3B3di0yMDE3LXpoLWNuJ30sXG5cdHt2YXI6ICd6aC1oaycsIGh0bWxMYW5nOiAnemgtSGFudC1ISycsIG1zZzogJ3B3di0yMDE3LXpoLWhrJ30sXG5cdHt2YXI6ICd6aC1tbycsIGh0bWxMYW5nOiAnemgtSGFudC1NTycsIG1zZzogJ3B3di0yMDE3LXpoLW1vJ30sXG5cdHt2YXI6ICd6aC1teScsIGh0bWxMYW5nOiAnemgtSGFucy1NWScsIG1zZzogJ3B3di0yMDE3LXpoLW15J30sXG5cdHt2YXI6ICd6aC1zZycsIGh0bWxMYW5nOiAnemgtSGFucy1TRycsIG1zZzogJ3B3di0yMDE3LXpoLXNnJ30sXG5cdHt2YXI6ICd6aC10dycsIGh0bWxMYW5nOiAnemgtSGFudC1UVycsIG1zZzogJ3B3di0yMDE3LXpoLXR3J30sXG5dO1xuXG5leHBvcnQge0RBVEF9O1xuIiwgImNvbnN0IFBXVjIwMTdtZXNzYWdlcyA9ICgpID0+IHtcblx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHQncHd2LTIwMTctY2FwdGlvbic6IHdpbmRvdy53Z1VMUygn6YCJ5oup6K+t6KiA5Y+Y5L2TJywgJ+mBuOaTh+iqnuiogOiuiumrlCcpLFxuXHRcdCdwd3YtMjAxNy1sb2FkaW5nJzogd2luZG93LndnVUxTKCfmraPlnKjliqDovb3pooTop4jigKYnLCAn5q2j5Zyo6LyJ5YWl6aCQ6Ka94oCmJyksXG5cdFx0J3B3di0yMDE3LXJldHJ5Jzogd2luZG93LndnVUxTKCfph43or5UnLCAn6YeN6KmmJyksXG5cdFx0J3B3di0yMDE3LXpoJzogd2luZG93LndnVUxTKCfkuI3ovazmjaInLCAn5LiN6L2J5o+bJyksXG5cdFx0J3B3di0yMDE3LXpoLWhhbnMnOiAn566A5L2TJyxcblx0XHQncHd2LTIwMTctemgtaGFudCc6ICfnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1jbic6ICfkuK3lm73lpKfpmYbnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1oayc6ICfkuK3lnIvpppnmuK/nuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1tbyc6ICfkuK3lnIvmvrPploDnuYHpq5QnLFxuXHRcdCdwd3YtMjAxNy16aC1teSc6ICfpqazmnaXopb/kuprnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC1zZyc6ICfmlrDliqDlnaHnroDkvZMnLFxuXHRcdCdwd3YtMjAxNy16aC10dyc6ICfkuK3lnIvoh7rngaPnuYHpq5QnLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7UFdWMjAxN21lc3NhZ2VzfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b24sIENkeEZpZWxkLCBDZHhNZXNzYWdlLCBDZHhQcm9ncmVzc0JhciwgQ2R4U2VsZWN0fSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5cbmludGVyZmFjZSBWYXJpYW50T3B0aW9uIHtcblx0dmFsdWU6IHN0cmluZztcblx0bGFiZWw6IHN0cmluZztcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdGluaXRpYWxWYXJpYW50OiBzdHJpbmc7XG5cdGNhcHRpb246IHN0cmluZztcblx0dmFyaWFudHM6IFZhcmlhbnRPcHRpb25bXTtcblx0ZmV0Y2hQcmV2aWV3OiAodmFyaWFudDogc3RyaW5nKSA9PiBQcm9taXNlPEhUTUxFbGVtZW50Pjtcblx0Z2V0RXJyb3JNZXNzYWdlOiAoZXJyb3I6IHVua25vd24pID0+IHN0cmluZztcblx0b25QcmV2aWV3U3RhcnQ6ICgpID0+IHZvaWQ7XG5cdG9uUHJldmlld0VuZDogKCkgPT4gdm9pZDtcblx0b25TaG93UHJldmlldzogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IHNlbGVjdGVkVmFyaWFudCA9IHJlZihwcm9wcy5pbml0aWFsVmFyaWFudCk7XG5jb25zdCBhY3RpdmVWYXJpYW50ID0gcmVmKHByb3BzLmluaXRpYWxWYXJpYW50KTtcbmNvbnN0IHByZXZpZXdOb2RlID0gcmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5jb25zdCBsb2FkaW5nID0gcmVmKGZhbHNlKTtcbmNvbnN0IGVycm9yTWVzc2FnZSA9IHJlZignJyk7XG5jb25zdCBmYWlsZWRWYXJpYW50ID0gcmVmPHN0cmluZz4oKTtcbmNvbnN0IG1lbnVJdGVtcyA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZhcmlhbnRzKTtcbmNvbnN0IHByZXZpZXdzID0gbmV3IE1hcDxzdHJpbmcsIEhUTUxFbGVtZW50PigpO1xuY29uc3QgcGVuZGluZ1JlcXVlc3RzID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8Ym9vbGVhbj4+KCk7XG5jb25zdCBsb2FkaW5nTWVzc2FnZSA9IG13Lm1zZygncHd2LTIwMTctbG9hZGluZycpO1xuY29uc3QgcmV0cnlMYWJlbCA9IG13Lm1zZygncHd2LTIwMTctcmV0cnknKTtcblxuY29uc3QgbG9hZFZhcmlhbnQgPSAodmFyaWFudDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG5cdGNvbnN0IGNhY2hlZFByZXZpZXcgPSBwcmV2aWV3cy5nZXQodmFyaWFudCk7XG5cdGlmIChjYWNoZWRQcmV2aWV3ICE9PSB1bmRlZmluZWQpIHtcblx0XHRwcmV2aWV3Tm9kZS52YWx1ZSA9IGNhY2hlZFByZXZpZXc7XG5cdFx0YWN0aXZlVmFyaWFudC52YWx1ZSA9IHZhcmlhbnQ7XG5cdFx0ZXJyb3JNZXNzYWdlLnZhbHVlID0gJyc7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcblx0fVxuXG5cdGNvbnN0IHBlbmRpbmdSZXF1ZXN0ID0gcGVuZGluZ1JlcXVlc3RzLmdldCh2YXJpYW50KTtcblx0aWYgKHBlbmRpbmdSZXF1ZXN0KSB7XG5cdFx0cmV0dXJuIHBlbmRpbmdSZXF1ZXN0O1xuXHR9XG5cblx0ZXJyb3JNZXNzYWdlLnZhbHVlID0gJyc7XG5cdGZhaWxlZFZhcmlhbnQudmFsdWUgPSB1bmRlZmluZWQ7XG5cdGxvYWRpbmcudmFsdWUgPSB0cnVlO1xuXHRjb25zdCByZXF1ZXN0ID0gcHJvcHNcblx0XHQuZmV0Y2hQcmV2aWV3KHZhcmlhbnQpXG5cdFx0LnRoZW4oKG5vZGUpID0+IHtcblx0XHRcdHByZXZpZXdzLnNldCh2YXJpYW50LCBub2RlKTtcblx0XHRcdHByZXZpZXdOb2RlLnZhbHVlID0gbm9kZTtcblx0XHRcdGFjdGl2ZVZhcmlhbnQudmFsdWUgPSB2YXJpYW50O1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG5cdFx0XHRlcnJvck1lc3NhZ2UudmFsdWUgPSBwcm9wcy5nZXRFcnJvck1lc3NhZ2UoZXJyb3IpO1xuXHRcdFx0ZmFpbGVkVmFyaWFudC52YWx1ZSA9IHZhcmlhbnQ7XG5cdFx0XHRzZWxlY3RlZFZhcmlhbnQudmFsdWUgPSBhY3RpdmVWYXJpYW50LnZhbHVlO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0pXG5cdFx0LmZpbmFsbHkoKCkgPT4ge1xuXHRcdFx0bG9hZGluZy52YWx1ZSA9IGZhbHNlO1xuXHRcdFx0cGVuZGluZ1JlcXVlc3RzLmRlbGV0ZSh2YXJpYW50KTtcblx0XHR9KTtcblx0cGVuZGluZ1JlcXVlc3RzLnNldCh2YXJpYW50LCByZXF1ZXN0KTtcblx0cmV0dXJuIHJlcXVlc3Q7XG59O1xuXG53YXRjaChzZWxlY3RlZFZhcmlhbnQsICh2YXJpYW50KSA9PiB7XG5cdGlmICh2YXJpYW50ICE9PSBhY3RpdmVWYXJpYW50LnZhbHVlKSB7XG5cdFx0dm9pZCBsb2FkVmFyaWFudCh2YXJpYW50KTtcblx0fVxufSk7XG5cbndhdGNoKFxuXHRwcmV2aWV3Tm9kZSxcblx0KG5vZGUpID0+IHtcblx0XHRwcmV2aWV3Tm9kZS52YWx1ZSA9IG5vZGU7XG5cdH0sXG5cdHtmbHVzaDogJ3Bvc3QnfVxuKTtcblxuY29uc3QgcmV0cnkgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChmYWlsZWRWYXJpYW50LnZhbHVlKSB7XG5cdFx0c2VsZWN0ZWRWYXJpYW50LnZhbHVlID0gZmFpbGVkVmFyaWFudC52YWx1ZTtcblx0XHR2b2lkIGxvYWRWYXJpYW50KGZhaWxlZFZhcmlhbnQudmFsdWUpO1xuXHR9XG59O1xuXG5jb25zdCBwcmV2aWV3ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRwcm9wcy5vblByZXZpZXdTdGFydCgpO1xuXHR0cnkge1xuXHRcdGF3YWl0IGxvYWRWYXJpYW50KHNlbGVjdGVkVmFyaWFudC52YWx1ZSk7XG5cdFx0cHJvcHMub25TaG93UHJldmlldygpO1xuXHR9IGZpbmFsbHkge1xuXHRcdHByb3BzLm9uUHJldmlld0VuZCgpO1xuXHR9XG59O1xuXG5jb25zdCBpbnZhbGlkYXRlID0gKCk6IHZvaWQgPT4ge1xuXHRwcmV2aWV3cy5jbGVhcigpO1xuXHRwcmV2aWV3Tm9kZS52YWx1ZSA9IG51bGw7XG5cdGVycm9yTWVzc2FnZS52YWx1ZSA9ICcnO1xuXHRmYWlsZWRWYXJpYW50LnZhbHVlID0gdW5kZWZpbmVkO1xuXHRhY3RpdmVWYXJpYW50LnZhbHVlID0gc2VsZWN0ZWRWYXJpYW50LnZhbHVlO1xufTtcblxuZGVmaW5lRXhwb3NlKHtpbnZhbGlkYXRlLCBwcmV2aWV3fSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicHd2LTIwMTctcHJldmlld1wiPlxuXHRcdDxjZHgtZmllbGQ+XG5cdFx0XHQ8dGVtcGxhdGUgI2xhYmVsPnt7IGNhcHRpb24gfX08L3RlbXBsYXRlPlxuXHRcdFx0PGNkeC1zZWxlY3Qgdi1tb2RlbDpzZWxlY3RlZD1cInNlbGVjdGVkVmFyaWFudFwiIDptZW51LWl0ZW1zPVwibWVudUl0ZW1zXCIgOmRpc2FibGVkPVwibG9hZGluZ1wiIC8+XG5cdFx0PC9jZHgtZmllbGQ+XG5cdFx0PGNkeC1wcm9ncmVzcy1iYXIgdi1pZj1cImxvYWRpbmdcIiA6YXJpYS1sYWJlbD1cImxvYWRpbmdNZXNzYWdlXCIgOmlubGluZT1cInRydWVcIiAvPlxuXHRcdDxjZHgtbWVzc2FnZSB2LWlmPVwiZXJyb3JNZXNzYWdlXCIgdHlwZT1cImVycm9yXCI+XG5cdFx0XHR7eyBlcnJvck1lc3NhZ2UgfX1cblx0XHRcdDxjZHgtYnV0dG9uIDpkaXNhYmxlZD1cImxvYWRpbmdcIiBAY2xpY2s9XCJyZXRyeVwiPnt7IHJldHJ5TGFiZWwgfX08L2NkeC1idXR0b24+XG5cdFx0PC9jZHgtbWVzc2FnZT5cblx0XHQ8IS0tIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvbm8tdi1odG1sIC0tLSBjb250ZW50IG9mIHByZXZpZXdOb2RlIGlzIGZyb20gYSB0cnVzdGVkIHNvdXJjZSAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwicHd2LTIwMTctcHJldmlld19fY29udGVudFwiIHYtaHRtbD1cInByZXZpZXdOb2RlXCIgLz5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbi5wd3YtMjAxNy1wcmV2aWV3IHtcblx0LnB3di0yMDE3LXByZXZpZXdfX2NvbnRlbnQgLmZpcnN0SGVhZGluZyB7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJwd3YtMjAxNy1wcmV2aWV3XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IFtcImlubmVySFRNTFwiXVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEZpZWxkXCJdLCBudWxsLCB7XG4gICAgICBsYWJlbDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHByb3BzLmNhcHRpb24pLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeFNlbGVjdFwiXSwge1xuICAgICAgICAgIHNlbGVjdGVkOiAkc2V0dXAuc2VsZWN0ZWRWYXJpYW50LFxuICAgICAgICAgIFwib25VcGRhdGU6c2VsZWN0ZWRcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuc2VsZWN0ZWRWYXJpYW50KSA9ICRldmVudCkpLFxuICAgICAgICAgIFwibWVudS1pdGVtc1wiOiAkc2V0dXAubWVudUl0ZW1zLFxuICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAubG9hZGluZ1xuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJzZWxlY3RlZFwiLCBcIm1lbnUtaXRlbXNcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgIF0pLFxuICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICB9KSxcbiAgICAoJHNldHVwLmxvYWRpbmcpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhQcm9ncmVzc0JhclwiXSwge1xuICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLmxvYWRpbmdNZXNzYWdlLFxuICAgICAgICAgIGlubGluZTogdHJ1ZVxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJhcmlhLWxhYmVsXCJdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgKCRzZXR1cC5lcnJvck1lc3NhZ2UpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhNZXNzYWdlXCJdLCB7XG4gICAgICAgICAga2V5OiAxLFxuICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5lcnJvck1lc3NhZ2UpICsgXCIgXCIsIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAubG9hZGluZyxcbiAgICAgICAgICAgICAgb25DbGljazogJHNldHVwLnJldHJ5XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnJldHJ5TGFiZWwpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgfSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby12LWh0bWwgLS0tIGNvbnRlbnQgb2YgcHJldmlld05vZGUgaXMgZnJvbSBhIHRydXN0ZWQgc291cmNlIFwiKSxcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBcInB3di0yMDE3LXByZXZpZXdfX2NvbnRlbnRcIixcbiAgICAgIGlubmVySFRNTDogJHNldHVwLnByZXZpZXdOb2RlXG4gICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMilcbiAgXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUHJldmlld1dpdGhWYXJpYW50MjAxN1xcXFxtb2R1bGVzXFxcXFByZXZpZXcudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxQcmV2aWV3V2l0aFZhcmlhbnQyMDE3XFxcXG1vZHVsZXNcXFxcUHJldmlldy52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcUHJldmlld1dpdGhWYXJpYW50MjAxN1xcXFxtb2R1bGVzXFxcXFByZXZpZXcudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcUHJldmlld1dpdGhWYXJpYW50MjAxN1xcXFxtb2R1bGVzXFxcXFByZXZpZXcudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgJy4vcHJvY2Vzc1Zpc3VhbEVkaXRvci5sZXNzJztcbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7REFUQX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge1BXVjIwMTdtZXNzYWdlc30gZnJvbSAnLi9tZXNzYWdlcyc7XG5pbXBvcnQgUHJldmlldyBmcm9tICcuL1ByZXZpZXcudnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuXG5pbnRlcmZhY2UgUHJldmlld0luc3RhbmNlIHtcblx0aW52YWxpZGF0ZTogKCkgPT4gdm9pZDtcblx0cHJldmlldzogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuUFdWMjAxN21lc3NhZ2VzKCk7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHtza2luLCB3Z1VzZXJMYW5ndWFnZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCB2YXJpYW50ID0gd2dVc2VyVmFyaWFudCA/PyAnemgnO1xuXHRjb25zdCB2aXN1YWxFZGl0b3IgPSB3aW5kb3cudmU7XG5cblx0Y29uc3QgY29uc3RydWN0RG9jdW1lbnQgPSAodGl0bGU6IHN0cmluZywgd2lraXRleHQ6IHN0cmluZywgY2F0ZWdvcmllczogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRjb25zdCAkcmVzdWx0ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnbXctYm9keSBtdy1ib2R5LWNvbnRlbnQnKTtcblxuXHRcdGlmIChza2luID09PSAndmVjdG9yJykge1xuXHRcdFx0JHJlc3VsdC5hZGRDbGFzcygndmVjdG9yLWJvZHknKTtcblx0XHR9XG5cblx0XHQkcmVzdWx0LmFwcGVuZChcblx0XHRcdCQoJzxoMT4nKS5hZGRDbGFzcygnZmlyc3RIZWFkaW5nJykuaHRtbCh0aXRsZSksXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRgbXctY29udGVudC0keyhtdy5jb25maWcuZ2V0KCd3Z1Zpc3VhbEVkaXRvcicpIGFzIHtwYWdlTGFuZ3VhZ2VEaXI6IHN0cmluZ30pLnBhZ2VMYW5ndWFnZURpcn1gXG5cdFx0XHRcdClcblx0XHRcdFx0LmF0dHIoJ2xhbmcnLCBEQVRBLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmFyID09PSB2YXJpYW50KT8uaHRtbExhbmcgPz8gdmFyaWFudClcblx0XHRcdFx0Lmh0bWwod2lraXRleHQpLFxuXHRcdFx0JC5wYXJzZUhUTUwoY2F0ZWdvcmllcylcblx0XHQpO1xuXG5cdFx0Y29uc3QgJHByZXZpZXcgPSAkcmVzdWx0O1xuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRwcmV2aWV3KTtcblx0XHRjb25zdCBwcmV2aWV3RWxlbWVudCA9ICRwcmV2aWV3WzBdO1xuXHRcdGlmIChwcmV2aWV3RWxlbWVudCkge1xuXHRcdFx0dmlzdWFsRWRpdG9yLnRhcmdldExpbmtzVG9OZXdXaW5kb3cocHJldmlld0VsZW1lbnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gJHByZXZpZXcucHJvcCgnb3V0ZXJIVE1MJykgPz8gJyc7XG5cdH07XG5cblx0Y29uc3QgcHJvY2VzcyA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCB7dGFyZ2V0fSA9IHZpc3VhbEVkaXRvci5pbml0O1xuXHRcdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblx0XHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cm9vdC5jbGFzc05hbWUgPSBPUFRJT05TLmNsYXNzTmFtZTtcblx0XHRzYXZlRGlhbG9nLnByZXZpZXdQYW5lbC4kZWxlbWVudC5hcHBlbmQocm9vdCk7XG5cblx0XHRjb25zdCBmZXRjaFByZXZpZXcgPSBhc3luYyAocmVxdWVzdGVkVmFyaWFudDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcblx0XHRcdHZhcmlhbnQgPSByZXF1ZXN0ZWRWYXJpYW50O1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0YXJnZXQuZ2V0Q29udGVudEFwaSgpLnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0ZXJyb3Jmb3JtYXQ6ICdodG1sJyxcblx0XHRcdFx0ZXJyb3JsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0XHRcdFx0ZXJyb3JzdXNlbG9jYWw6IHRydWUsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogWyd0ZXh0JywgJ2luZGljYXRvcnMnLCAnZGlzcGxheXRpdGxlJywgJ2NhdGVnb3JpZXNodG1sJywgJ3BhcnNld2FybmluZ3NodG1sJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0cHJldmlldzogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6IHRhcmdldC5nZXRQYWdlTmFtZSgpLFxuXHRcdFx0XHR0ZXh0OiB0YXJnZXQuZ2V0RG9jVG9TYXZlKCksXG5cdFx0XHRcdHVzZWxhbmc6IHdnVXNlckxhbmd1YWdlLFxuXHRcdFx0XHR2YXJpYW50OiByZXF1ZXN0ZWRWYXJpYW50LFxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBjb25zdHJ1Y3REb2N1bWVudChyZXNwb25zZS5wYXJzZS5kaXNwbGF5dGl0bGUsIHJlc3BvbnNlLnBhcnNlLnRleHQsIHJlc3BvbnNlLnBhcnNlLmNhdGVnb3JpZXNodG1sKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgYXBwID0gY3JlYXRlQXBwKFByZXZpZXcsIHtcblx0XHRcdGluaXRpYWxWYXJpYW50OiB2YXJpYW50LFxuXHRcdFx0Y2FwdGlvbjogbXcubXNnKCdwd3YtMjAxNy1jYXB0aW9uJyksXG5cdFx0XHR2YXJpYW50czogREFUQS5tYXAoKGl0ZW0pID0+ICh7dmFsdWU6IGl0ZW0udmFyLCBsYWJlbDogbXcubXNnKGl0ZW0ubXNnKX0pKSxcblx0XHRcdGZldGNoUHJldmlldyxcblx0XHRcdGdldEVycm9yTWVzc2FnZTogKGVycm9yOiB1bmtub3duKSA9PiB0YXJnZXQuZ2V0Q29udGVudEFwaSgpLmdldEVycm9yTWVzc2FnZShlcnJvciksXG5cdFx0XHRvblByZXZpZXdTdGFydDogKCkgPT4ge1xuXHRcdFx0XHR0YXJnZXQuZW1pdCgnc2F2ZVByZXZpZXcnKTtcblx0XHRcdFx0c2F2ZURpYWxvZy5wdXNoUGVuZGluZygpO1xuXHRcdFx0fSxcblx0XHRcdG9uUHJldmlld0VuZDogKCkgPT4gc2F2ZURpYWxvZy5wb3BQZW5kaW5nKCksXG5cdFx0XHRvblNob3dQcmV2aWV3OiAoKSA9PiBzYXZlRGlhbG9nLnN3YXBQYW5lbCgncHJldmlldycpLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGluc3RhbmNlID0gYXBwLm1vdW50KHJvb3QpIGFzIHVua25vd24gYXMgUHJldmlld0luc3RhbmNlO1xuXG5cdFx0dGFyZ2V0LnNhdmVEaWFsb2cub2ZmKCdwcmV2aWV3JywgJ29uU2F2ZURpYWxvZ1ByZXZpZXcnLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5zYXZlRGlhbG9nLm9uKCdwcmV2aWV3JywgKCkgPT4ge1xuXHRcdFx0dGFyZ2V0LmdldFN1cmZhY2UoKS5nZXRNb2RlbCgpLmdldERvY3VtZW50KCkub25jZSgndHJhbnNhY3QnLCBpbnN0YW5jZS5pbnZhbGlkYXRlKTtcblx0XHRcdHZvaWQgaW5zdGFuY2UucHJldmlldygpO1xuXHRcdH0pO1xuXG5cdFx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0aWYgKCFtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHByb2Nlc3MoKTtcblx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsWUFBYTs7QUNGZCxJQUFNQyxPQUFPLENBQ1o7RUFBQ0MsS0FBSztFQUFNQyxVQUFVO0VBQU1DLEtBQUs7QUFBYSxHQUM5QztFQUFDRixLQUFLO0VBQVdDLFVBQVU7RUFBV0MsS0FBSztBQUFrQixHQUM3RDtFQUFDRixLQUFLO0VBQVdDLFVBQVU7RUFBV0MsS0FBSztBQUFrQixHQUM3RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixHQUM1RDtFQUFDRixLQUFLO0VBQVNDLFVBQVU7RUFBY0MsS0FBSztBQUFnQixDQUFBOztBQ1Q3RCxJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0JDLEtBQUdDLFNBQVNDLElBQUk7SUFDZixvQkFBb0JDLE9BQU9DLE1BQU0sVUFBVSxRQUFRO0lBQ25ELG9CQUFvQkQsT0FBT0MsTUFBTSxXQUFX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QVlsQyxTQUFTLEdBQUc7QUFDdENpSSxZQUFRO0FBQ1IzSCxPQUFHZ0csT0FBTzlGLElBQVlSLFdBQVcsSUFBSTtFQUN0QztBQUNEOztBUHZHQSxNQUFBLEdBQUtILGtCQUFBaUwsU0FBUSxFQUFFckksS0FBSyxNQUFZO0FBQy9CbkMsS0FBR3NILEtBQUssNEJBQTRCLEVBQUVpRCxJQUFJLE1BQVk7QUFDckQzRSx3QkFBb0I7RUFDckIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiY2xhc3NOYW1lIiwgImNvbmZpZ0tleSIsICJEQVRBIiwgInZhciIsICJodG1sTGFuZyIsICJtc2ciLCAiUFdWMjAxN21lc3NhZ2VzIiwgIm13IiwgIm1lc3NhZ2VzIiwgInNldCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAic2VsZWN0ZWRWYXJpYW50IiwgInJlZiIsICJpbml0aWFsVmFyaWFudCIsICJhY3RpdmVWYXJpYW50IiwgInByZXZpZXdOb2RlIiwgImxvYWRpbmciLCAiZXJyb3JNZXNzYWdlIiwgImZhaWxlZFZhcmlhbnQiLCAibWVudUl0ZW1zIiwgImNvbXB1dGVkIiwgInZhcmlhbnRzIiwgInByZXZpZXdzIiwgIk1hcCIsICJwZW5kaW5nUmVxdWVzdHMiLCAibG9hZGluZ01lc3NhZ2UiLCAicmV0cnlMYWJlbCIsICJsb2FkVmFyaWFudCIsICJ2YXJpYW50IiwgImNhY2hlZFByZXZpZXciLCAiZ2V0IiwgInZhbHVlIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJwZW5kaW5nUmVxdWVzdCIsICJyZXF1ZXN0IiwgImZldGNoUHJldmlldyIsICJ0aGVuIiwgIm5vZGUiLCAiY2F0Y2giLCAiZXJyb3IiLCAiZ2V0RXJyb3JNZXNzYWdlIiwgImZpbmFsbHkiLCAiZGVsZXRlIiwgIndhdGNoIiwgImZsdXNoIiwgInJldHJ5IiwgInByZXZpZXciLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJvblByZXZpZXdTdGFydCIsICJvblNob3dQcmV2aWV3IiwgIm9uUHJldmlld0VuZCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW52YWxpZGF0ZSIsICJjbGVhciIsICJfX2V4cG9zZSIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjcmVhdGVWTm9kZSIsICJsYWJlbCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY2FwdGlvbiIsICJkZWZhdWx0IiwgInNlbGVjdGVkIiwgIiRldmVudCIsICJkaXNhYmxlZCIsICJfIiwgImNyZWF0ZUJsb2NrIiwgImtleSIsICJpbmxpbmUiLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgInR5cGUiLCAib25DbGljayIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiaW5uZXJIVE1MIiwgIlByZXZpZXdfZGVmYXVsdCIsICJfX2ZpbGUiLCAiUHJldmlld19kZWZhdWx0MiIsICJpbXBvcnRfdnVlNCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgInNraW4iLCAid2dVc2VyTGFuZ3VhZ2UiLCAid2dVc2VyVmFyaWFudCIsICJjb25maWciLCAidmlzdWFsRWRpdG9yIiwgInZlIiwgImNvbnN0cnVjdERvY3VtZW50IiwgInRpdGxlIiwgIndpa2l0ZXh0IiwgImNhdGVnb3JpZXMiLCAiX0RBVEEkZmluZCRodG1sTGFuZyIsICJfREFUQSRmaW5kIiwgIl8kcHJldmlldyRwcm9wIiwgIiRyZXN1bHQiLCAiJCIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiaHRtbCIsICJjb25jYXQiLCAicGFnZUxhbmd1YWdlRGlyIiwgImF0dHIiLCAiZmluZCIsICJpdGVtIiwgInBhcnNlSFRNTCIsICIkcHJldmlldyIsICJob29rIiwgImZpcmUiLCAicHJldmlld0VsZW1lbnQiLCAidGFyZ2V0TGlua3NUb05ld1dpbmRvdyIsICJwcm9wIiwgInByb2Nlc3MiLCAidGFyZ2V0IiwgImluaXQiLCAic2F2ZURpYWxvZyIsICJyb290IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAicHJldmlld1BhbmVsIiwgIiRlbGVtZW50IiwgIl9yZWYyIiwgInJlcXVlc3RlZFZhcmlhbnQiLCAicmVzcG9uc2UiLCAiZ2V0Q29udGVudEFwaSIsICJwb3N0IiwgImFjdGlvbiIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAiZXJyb3Jmb3JtYXQiLCAiZXJyb3JsYW5nIiwgImVycm9yc3VzZWxvY2FsIiwgImZvcm1hdHZlcnNpb24iLCAicHN0IiwgImdldFBhZ2VOYW1lIiwgInRleHQiLCAiZ2V0RG9jVG9TYXZlIiwgInVzZWxhbmciLCAicGFyc2UiLCAiZGlzcGxheXRpdGxlIiwgImNhdGVnb3JpZXNodG1sIiwgIl94IiwgImFwcCIsICJjcmVhdGVBcHAiLCAibWFwIiwgImVtaXQiLCAicHVzaFBlbmRpbmciLCAicG9wUGVuZGluZyIsICJzd2FwUGFuZWwiLCAiaW5zdGFuY2UiLCAibW91bnQiLCAib2ZmIiwgIm9uIiwgImdldFN1cmZhY2UiLCAiZ2V0TW9kZWwiLCAiZ2V0RG9jdW1lbnQiLCAib25jZSIsICJhZGQiLCAiZ2V0Qm9keSJdCn0K
