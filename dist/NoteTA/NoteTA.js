/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-noteTA.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-noteTA.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NoteTA}
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

// dist/NoteTA/NoteTA.js
//! src/NoteTA/modules/util/ApiRetryFailError.ts
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
var ApiRetryFailError = class extends Error {
  errors;
  constructor(errors) {
    super("Api calls failed ".concat(errors.length, " time(s) in a row."));
    this.name = "ApiRetryFailError";
    this.errors = [...errors];
  }
};
//! src/NoteTA/options.json
var version = "2.0";
//! src/NoteTA/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("NoteTA/".concat(version));
//! src/NoteTA/modules/parseWikitext.ts
var parseWithRetry = (args, count = 3, previousErrors = []) => {
  if (!count) {
    return $.Deferred().reject(new ApiRetryFailError(previousErrors));
  }
  const deferred = $.Deferred();
  void api.parse(...args).then((response) => {
    void deferred.resolve(response);
  }).catch((error) => {
    console.error(error);
    if (error && typeof error === "object" && "stack" in error) {
      previousErrors[previousErrors.length] = error.stack;
    } else {
      previousErrors[previousErrors.length] = String(error);
    }
    parseWithRetry(args, --count, previousErrors).then((newResponse) => {
      void deferred.resolve(newResponse);
    }).catch((newError) => {
      void deferred.reject(newError);
    });
  });
  return deferred;
};
var parseWikitext = (...args) => {
  return parseWithRetry(args);
};
//! src/NoteTA/modules/viewer.ts
var import_vue3 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/NoteTA/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ApiRetryFailError: (0, import_ext_gadget2.localize)({
      en: "Api calls failed $1 time(s) in a row. Errors: ",
      "zh-hans": "Api 调用连续失败 $1 次，$1 次调用的错误分别为：",
      "zh-hant": "Api 調用連續失敗 $1 次，$1 次調用的錯誤分別為："
    }),
    Loading: (0, import_ext_gadget2.localize)({
      en: "Loading...",
      "zh-hans": "正在加载……",
      "zh-hant": "正在載入……"
    }),
    Title: (0, import_ext_gadget2.localize)({
      en: "NoteTA",
      "zh-hans": "字词转换",
      "zh-hant": "字詞轉換"
    }),
    Close: (0, import_ext_gadget2.localize)({
      en: "Close",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Retry: (0, import_ext_gadget2.localize)({
      en: "Retry",
      "zh-hans": "重试",
      "zh-hant": "重試"
    }),
    ExpandCollapse: (0, import_ext_gadget2.localize)({
      en: "Show or hide content",
      "zh-hans": "显示/隐藏内容",
      "zh-hant": "顯示/隱藏內容"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var ViewerDialog_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "ViewerDialog",
  props: {
    state: {
      type: Object,
      required: true
    },
    onRetry: {
      type: Function,
      required: true
    }
  },
  emits: ["update:open"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const close = () => {
      emit("update:open", false);
    };
    const __returned__ = {
      props,
      emit,
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
var import_vue2 = require("vue");
var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 1,
  class: "x-noteTA-viewer-output"
};
var _hoisted_3 = {
  class: "error"
};
var _hoisted_4 = {
  key: 0
};
var _hoisted_5 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)($setup["CdxDialog"], {
    open: $props.state.open,
    title: $setup.getMessage("Title"),
    "default-action": {
      label: $setup.getMessage("Close")
    },
    "primary-action": $props.state.retryable ? {
      label: $setup.getMessage("Retry"),
      actionType: "progressive"
    } : void 0,
    "use-close-button": true,
    "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.emit("update:open", $event)),
    onDefault: $setup.close,
    onPrimary: $setup.props.onRetry
  }, {
    default: (0, import_vue2.withCtx)(() => [$props.state.loading ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      "p",
      _hoisted_1,
      (0, import_vue2.toDisplayString)($setup.getMessage("Loading")),
      1
      /* TEXT */
    )) : $props.state.errorMessage ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", _hoisted_2, [(0, import_vue2.createElementVNode)(
      "p",
      _hoisted_3,
      (0, import_vue2.toDisplayString)($props.state.errorMessage),
      1
      /* TEXT */
    ), $props.state.errors.length ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("ol", _hoisted_4, [((0, import_vue2.openBlock)(true), (0, import_vue2.createElementBlock)(
      import_vue2.Fragment,
      null,
      (0, import_vue2.renderList)($props.state.errors, (error, index) => {
        return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
          "li",
          {
            key: index
          },
          (0, import_vue2.toDisplayString)(error),
          1
          /* TEXT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))])) : (0, import_vue2.createCommentVNode)("v-if", true)])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)(
      import_vue2.Fragment,
      {
        key: 2
      },
      [(0, import_vue2.createCommentVNode)(" MediaWiki's parser returns sanitized HTML for this output. "), (0, import_vue2.createCommentVNode)(" eslint-disable-next-line vue/no-v-html "), (0, import_vue2.createElementVNode)("div", {
        class: "x-noteTA-viewer-output",
        innerHTML: $props.state.output
      }, null, 8, _hoisted_5)],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    ))]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "default-action", "primary-action", "onPrimary"]);
}
//! src/NoteTA/modules/ViewerDialog.vue
ViewerDialog_default.render = render;
ViewerDialog_default.__file = "src\\NoteTA\\modules\\ViewerDialog.vue";
ViewerDialog_default.__scopeId = "data-v-76b996d0";
var ViewerDialog_default2 = ViewerDialog_default;
//! src/NoteTA/modules/util/assert.ts
function assert(value, valueName) {
  if (!value) {
    throw new Error("Assert Fail, ".concat(valueName, " == false."));
  }
}
//! src/NoteTA/modules/util/convertCollapsible.ts
var convertCollapsibles = (html) => {
  const template = document.createElement("template");
  template.innerHTML = html;
  var _iterator = _createForOfIteratorHelper(template.content.querySelectorAll(".mw-collapsible")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const collapsible = _step.value;
      const details = document.createElement("details");
      details.open = !collapsible.classList.contains("mw-collapsed");
      var _iterator2 = _createForOfIteratorHelper(collapsible.classList), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const className = _step2.value;
          if (!["mw-collapsible", "mw-collapsed"].includes(className)) {
            details.classList.add(className);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(collapsible.attributes), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const attribute = _step3.value;
          if (attribute.name !== "class") {
            details.setAttribute(attribute.name, attribute.value);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      const summary = document.createElement("summary");
      const heading = collapsible.querySelector(":scope > .mw-collapsible-heading, :scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > h6, :scope > dl, :scope > dt");
      if (heading) {
        while (heading.firstChild) {
          summary.append(heading.firstChild);
        }
        heading.remove();
      } else {
        summary.textContent = getMessage("ExpandCollapse");
      }
      details.append(summary, ...collapsible.childNodes);
      collapsible.replaceWith(details);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return template.innerHTML;
};
//! src/NoteTA/modules/initViewMap.ts
var viewerMap = /* @__PURE__ */ new Map();
//! src/NoteTA/modules/viewer.ts
var getViewer = ($body, hash) => {
  if (viewerMap.has(hash)) {
    const storedViewer = viewerMap.get(hash);
    assert(storedViewer, "viewer");
    return storedViewer;
  }
  const $targetElement = $body.find("#noteTA-".concat(hash));
  if (!$targetElement.length) {
    throw new Error(`Can't get Element "#noteTA-`.concat(hash, '".'));
  }
  const {
    wgPageName,
    wgUserVariant
  } = mw.config.get();
  class NoteTAViewer {
    state;
    app;
    root;
    dataIsLoaded;
    executePromise;
    static noteTAParseText;
    constructor() {
      this.state = (0, import_vue3.reactive)({
        open: false,
        loading: false,
        output: "",
        errorMessage: "",
        errors: [],
        retryable: false
      });
      this.dataIsLoaded = false;
      this.root = document.createElement("div");
      $body.append(this.root);
      this.app = (0, import_vue3.createApp)(ViewerDialog_default2, {
        state: this.state,
        "onUpdate:open": (open) => {
          this.state.open = open;
        },
        onRetry: () => {
          this.doExecuteWrap();
        }
      });
      this.app.mount(this.root);
    }
    open() {
      this.state.open = true;
      this.doExecuteWrap();
    }
    destroy() {
      this.app.unmount();
      this.root.remove();
    }
    static getNoteTAParseText() {
      if (NoteTAViewer.noteTAParseText) {
        return $.Deferred().resolve(NoteTAViewer.noteTAParseText);
      }
      const $noteTAtitle = $targetElement.find(".noteTA-title");
      const actualTitle = wgPageName.replace(/_/g, " ");
      let wikitext = "";
      const titleDeferred = $.Deferred();
      if ($noteTAtitle.length) {
        const titleConv = $noteTAtitle.attr("data-noteta-code");
        assert(titleConv, "titleConv");
        let titleDesc = $noteTAtitle.attr("data-noteta-desc");
        if (titleDesc) {
          titleDesc = "（".concat(titleDesc, "）");
        } else {
          titleDesc = "";
        }
        wikitext += '<span style="float:right">{{edit|'.concat(actualTitle, "|section=0}}</span>\n");
        wikitext += "; 本文使用[[Help:字词转换处理|标题手工转换]]\n";
        wikitext += "* 转换标题为：-{D|".concat(titleConv, "}-").concat(titleDesc, "\n");
        wikitext += "* 实际标题为：-{R|".concat(actualTitle, "}-；当前显示为：-{|").concat(titleConv, "}-\n");
        void titleDeferred.resolve();
      } else {
        parseWikitext("{{noteTA/multititle|".concat(actualTitle, "}}"), {
          title: actualTitle,
          variant: "zh"
        }).then((resultHtml) => {
          const $multiTitle = $($.parseHTML(resultHtml)).find(".noteTA-multititle");
          if ($multiTitle.length) {
            wikitext += "; 本文[[Help:字词转换处理|标题可能经过转换]]\n* 转换标题为：";
            const textVariant = {};
            const variantText = {};
            var _iterator4 = _createForOfIteratorHelper($multiTitle.children()), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                const element = _step4.value;
                const $element = $(element);
                const variant = $element.attr("data-noteta-multititle-variant");
                assert(variant, "variant");
                const text = $element.text().trim();
                variantText[variant] = text;
                const textVariantArray = textVariant[text];
                if (textVariantArray) {
                  textVariantArray[textVariantArray.length] = variant;
                } else {
                  textVariant[text] = [variant];
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            const titleConverted = variantText[wgUserVariant];
            const multiTitle = [];
            for (var _i = 0, _Object$values = Object.values(variantText); _i < _Object$values.length; _i++) {
              const text = _Object$values[_i];
              if (text === null || text === void 0) {
                continue;
              }
              const variants = textVariant[text];
              if (!variants) {
                continue;
              }
              var _iterator5 = _createForOfIteratorHelper(variants), _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  const variant = _step5.value;
                  variantText[variant] = null;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              const variantsName = variants.map((variant) => "-{R|{{MediaWiki:Variantname-".concat(variant, "}}}-")).join("、");
              const variantTitleDesc = "".concat(variantsName, "：-{R|").concat(text, "}-");
              if (!multiTitle.includes(variantTitleDesc)) {
                multiTitle[multiTitle.length] = variantTitleDesc;
              }
            }
            const subItemSeparator = "\n** ";
            wikitext += "".concat(subItemSeparator).concat(multiTitle.join(subItemSeparator));
            wikitext += "\n* 实际标题为：-{R|".concat(actualTitle, "}-；当前显示为：-{R|").concat(titleConverted, "}-\n");
          }
          void titleDeferred.resolve();
        }).catch((error) => {
          void titleDeferred.reject(error);
        });
      }
      const deferred = $.Deferred();
      titleDeferred.then(() => {
        const $noteTAgroups = $targetElement.find(".noteTA-group > *[data-noteta-group]");
        var _iterator6 = _createForOfIteratorHelper($noteTAgroups), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const element = _step6.value;
            const $element = $(element);
            switch ($element.attr("data-noteta-group-source")) {
              case "template":
                wikitext += "{{CGroup/".concat($element.attr("data-noteta-group"), "}}\n");
                break;
              case "module":
                wikitext += "{{#invoke:CGroupViewer|dialog|".concat($element.attr("data-noteta-group"), "}}\n");
                break;
              case "none":
                wikitext += "; 本文使用的公共转换组“".concat($element.attr("data-noteta-group"), "”尚未创建\n");
                wikitext += "* {{edit|Module:CGroup/".concat($element.attr("data-noteta-group"), "|创建公共转换组“").concat($element.attr("data-noteta-group"), "”}}\n");
                break;
              default:
                wikitext += "; 未知公共转换组“".concat($element.attr("data-noteta-group"), "”来源“").concat($element.attr("data-noteta-group-source"), "”\n");
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        const $noteTAlocal = $targetElement.find(".noteTA-local");
        if ($noteTAlocal.length) {
          wikitext += '<span style="float:right">{{edit|'.concat(actualTitle, "|section=0}}</span>\n");
          wikitext += "; 本文使用[[Help:字词转换处理|全文手工转换]]\n";
          const $noteTAlocals = $noteTAlocal.children("*[data-noteta-code]");
          var _iterator7 = _createForOfIteratorHelper($noteTAlocals), _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
              const element = _step7.value;
              const $element = $(element);
              let localDesc = $element.attr("data-noteta-desc");
              if (localDesc) {
                localDesc = "（".concat(localDesc, "）");
              } else {
                localDesc = "";
              }
              const localConv = $element.attr("data-noteta-code");
              wikitext += "* -{D|".concat(localConv, "}-").concat(localDesc, "当前显示为：-{").concat(localConv, "}-\n");
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }
        wikitext += "{{noteTA/footer}}\n";
        NoteTAViewer.noteTAParseText = wikitext;
        void deferred.resolve(wikitext);
      }).catch((error) => {
        void deferred.reject(error);
      });
      return deferred;
    }
    doExecute() {
      if (this.dataIsLoaded) {
        return $.Deferred().resolve();
      }
      const deferred = $.Deferred();
      this.state.loading = true;
      this.state.errorMessage = "";
      this.state.errors = [];
      this.state.retryable = false;
      NoteTAViewer.getNoteTAParseText().then((wikitext) => parseWikitext(wikitext, {
        title: "Template:CGroup/-",
        variant: wgUserVariant
      })).then((parsedHtml) => {
        this.state.output = convertCollapsibles(parsedHtml);
        this.dataIsLoaded = true;
        void deferred.resolve(parsedHtml);
      }).catch((error) => {
        if (error instanceof ApiRetryFailError) {
          this.state.errorMessage = getMessage("ApiRetryFailError").replace(/\$1/g, error.errors.length.toString());
          this.state.errors = error.errors;
          this.state.retryable = true;
        } else {
          this.state.errorMessage = String(error);
        }
        void deferred.reject(error);
      }).always(() => {
        this.state.loading = false;
      });
      return deferred;
    }
    doExecuteWrap() {
      if (this.dataIsLoaded || this.executePromise) {
        return;
      }
      this.executePromise = this.doExecute();
      this.executePromise.always(() => {
        delete this.executePromise;
      });
    }
  }
  const viewer = new NoteTAViewer();
  viewerMap.set(hash, viewer);
  return viewer;
};
var resetAllViewer = () => {
  var _iterator8 = _createForOfIteratorHelper(viewerMap.values()), _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
      const viewer = _step8.value;
      viewer.destroy();
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  viewerMap.clear();
};
//! src/NoteTA/modules/initGlobalMethods.ts
var portletId;
var initGlobalMethods = ($body) => {
  const globalMethods = {
    init() {
    },
    deInit() {
    }
  };
  const {
    skin
  } = mw.config.get();
  if (skin === "vector") {
    portletId = "p-noteTA";
    let $noteTATab;
    globalMethods.init = () => {
      if ($noteTATab || !portletId) {
        return;
      }
      const noteTATab = mw.util.addPortlet(portletId);
      if (!noteTATab) {
        return;
      }
      $noteTATab = $(noteTATab);
      $noteTATab.removeClass("mw-portlet-".concat(portletId)).addClass(["mw-portlet-".concat(portletId.replace("p-", "")), "vector-menu-tabs", "vector-menu-tabs-legacy"]);
      $body.find("#p-variants").after($noteTATab);
    };
    globalMethods.deInit = () => {
      if (!$noteTATab) {
        return;
      }
      $noteTATab.find("ul").empty();
      if (portletId) {
        mw.util.hidePortlet(portletId);
      }
    };
  } else if (skin === "vector-2022") {
    portletId = "p-associated-pages";
    globalMethods.deInit = () => {
      $body.find("x-noteTA-viewer").remove();
    };
  }
  return globalMethods;
};
//! src/NoteTA/NoteTA.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/NoteTA/modules/util/generatePortletLink.ts
var generatePortletLink = (hash) => {
  if (!portletId) {
    return;
  }
  const portletLink = mw.util.addPortletLink(portletId, "#", "汉/漢", "ca-noteTA-".concat(hash));
  if (!portletLink) {
    return;
  }
  portletLink.classList.add("ca-noteTA");
  const $portletLink = $(portletLink).addClass("x-noteTA-viewer");
  const link = $portletLink.find("a").empty()[0];
  if (!link) {
    return;
  }
  const label = document.createElement("div");
  const labels = [["hans", "汉"], ["hant", "漢"]];
  for (var _i2 = 0, _labels = labels; _i2 < _labels.length; _i2++) {
    const [variant, text] = _labels[_i2];
    const span = document.createElement("span");
    span.classList.add("x-noteTA-viewer__label", "x-noteTA-viewer__label-".concat(variant));
    span.textContent = text;
    label.append(span);
  }
  link.append(label);
  return $portletLink;
};
//! src/NoteTA/NoteTA.ts
mw.hook("wikipage.content").add(function noteTA($content) {
  const $body = $content.parents("body");
  resetAllViewer();
  const globalMethods = initGlobalMethods($body);
  globalMethods.deInit();
  globalMethods.init();
  var _iterator9 = _createForOfIteratorHelper($body.find(".mw-indicator[id^=mw-indicator-noteTA-]")), _step9;
  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
      const element = _step9.value;
      const hash = element.id.replace(/^mw-indicator-noteTA-/, "");
      let $element = $(element);
      if (portletId) {
        $element.hide();
        const $portletLink = generatePortletLink(hash);
        if (!$portletLink) {
          continue;
        }
        $element = $portletLink;
      }
      const openerListener = (event) => {
        if (!(0, import_ext_gadget3.checkA11yConfirmKey)(event)) {
          return;
        }
        event.preventDefault();
        getViewer($body, hash).open();
      };
      $element.on("click", openerListener);
      $element.on("keydown", openerListener);
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHMiLCAic3JjL05vdGVUQS9vcHRpb25zLmpzb24iLCAic3JjL05vdGVUQS9tb2R1bGVzL2FwaS50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvcGFyc2VXaWtpdGV4dC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvdmlld2VyLnRzIiwgImRpc3QvTm90ZVRBL3NyYy9Ob3RlVEEvbW9kdWxlcy9WaWV3ZXJEaWFsb2cudnVlIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxOb3RlVEFcXG1vZHVsZXNcXFZpZXdlckRpYWxvZy52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvTm90ZVRBL21vZHVsZXMvVmlld2VyRGlhbG9nLnZ1ZSIsICJzcmMvTm90ZVRBL21vZHVsZXMvdXRpbC9hc3NlcnQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvY29udmVydENvbGxhcHNpYmxlLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0Vmlld01hcC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdEdsb2JhbE1ldGhvZHMudHMiLCAic3JjL05vdGVUQS9Ob3RlVEEudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVQb3J0bGV0TGluay50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY2xhc3MgQXBpUmV0cnlGYWlsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHB1YmxpYyByZWFkb25seSBlcnJvcnM6IHN0cmluZ1tdO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihlcnJvcnM6IHN0cmluZ1tdKSB7XG5cdFx0c3VwZXIoYEFwaSBjYWxscyBmYWlsZWQgJHtlcnJvcnMubGVuZ3RofSB0aW1lKHMpIGluIGEgcm93LmApO1xuXHRcdHRoaXMubmFtZSA9ICdBcGlSZXRyeUZhaWxFcnJvcic7XG5cdFx0dGhpcy5lcnJvcnMgPSBbLi4uZXJyb3JzXTtcblx0fVxufVxuXG5leHBvcnQge0FwaVJldHJ5RmFpbEVycm9yfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImltcG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fSBmcm9tICcuL3BhcnNlV2lraXRleHQnO1xuaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcCwgcmVhY3RpdmV9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IE5vdGVUQURpYWxvZyBmcm9tICcuL1ZpZXdlckRpYWxvZy52dWUnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJy4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtjb252ZXJ0Q29sbGFwc2libGVzfSBmcm9tICcuL3V0aWwvY29udmVydENvbGxhcHNpYmxlLnRzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dmlld2VyTWFwfSBmcm9tICcuL2luaXRWaWV3TWFwJztcblxuaW50ZXJmYWNlIFZpZXdlclN0YXRlIHtcblx0b3BlbjogYm9vbGVhbjtcblx0bG9hZGluZzogYm9vbGVhbjtcblx0b3V0cHV0OiBzdHJpbmc7XG5cdGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXHRlcnJvcnM6IHN0cmluZ1tdO1xuXHRyZXRyeWFibGU6IGJvb2xlYW47XG59XG5cbmNvbnN0IGdldFZpZXdlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4sIGhhc2g6IHN0cmluZyk6IHR5cGVvZiB2aWV3ZXIgPT4ge1xuXHRpZiAodmlld2VyTWFwLmhhcyhoYXNoKSkge1xuXHRcdGNvbnN0IHN0b3JlZFZpZXdlciA9IHZpZXdlck1hcC5nZXQoaGFzaCk7XG5cdFx0YXNzZXJ0KHN0b3JlZFZpZXdlciwgJ3ZpZXdlcicpO1xuXG5cdFx0cmV0dXJuIHN0b3JlZFZpZXdlcjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXRFbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKGAjbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdldCBFbGVtZW50IFwiI25vdGVUQS0ke2hhc2h9XCIuYCk7XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y2xhc3MgTm90ZVRBVmlld2VyIHtcblx0XHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBWaWV3ZXJTdGF0ZTtcblx0XHRwcml2YXRlIHJlYWRvbmx5IGFwcDogVnVlQXBwPEVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgcm9vdDogSFRNTEVsZW1lbnQ7XG5cdFx0cHJpdmF0ZSBkYXRhSXNMb2FkZWQ6IGJvb2xlYW47XG5cdFx0cHJpdmF0ZSBleGVjdXRlUHJvbWlzZT86IEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPjtcblx0XHRwcml2YXRlIHN0YXRpYyBub3RlVEFQYXJzZVRleHQ6IHN0cmluZztcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHRoaXMuc3RhdGUgPSByZWFjdGl2ZTxWaWV3ZXJTdGF0ZT4oe1xuXHRcdFx0XHRvcGVuOiBmYWxzZSxcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdG91dHB1dDogJycsXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogJycsXG5cdFx0XHRcdGVycm9yczogW10sXG5cdFx0XHRcdHJldHJ5YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdCRib2R5LmFwcGVuZCh0aGlzLnJvb3QpO1xuXHRcdFx0dGhpcy5hcHAgPSBjcmVhdGVBcHAoTm90ZVRBRGlhbG9nLCB7XG5cdFx0XHRcdHN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdFx0XHQnb25VcGRhdGU6b3Blbic6IChvcGVuOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5vcGVuID0gb3Blbjtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25SZXRyeTogKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmFwcC5tb3VudCh0aGlzLnJvb3QpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5zdGF0ZS5vcGVuID0gdHJ1ZTtcblx0XHRcdHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5hcHAudW5tb3VudCgpO1xuXHRcdFx0dGhpcy5yb290LnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGdldE5vdGVUQVBhcnNlVGV4dCgpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+IHtcblx0XHRcdGlmIChOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPHN0cmluZz4oKS5yZXNvbHZlKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkbm90ZVRBdGl0bGU6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtdGl0bGUnKTtcblx0XHRcdGNvbnN0IGFjdHVhbFRpdGxlOiBzdHJpbmcgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0XHRcdGNvbnN0IHRpdGxlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHRpZiAoJG5vdGVUQXRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCB0aXRsZUNvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdGFzc2VydCh0aXRsZUNvbnYsICd0aXRsZUNvbnYnKTtcblxuXHRcdFx0XHRsZXQgdGl0bGVEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRpZiAodGl0bGVEZXNjKSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gYO+8iCR7dGl0bGVEZXNjfe+8iWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOaJi+W3pei9rOaNol1dXFxuJztcblx0XHRcdFx0d2lraXRleHQgKz0gYCog6L2s5o2i5qCH6aKY5Li677yaLXtEfCR7dGl0bGVDb252fX0tJHt0aXRsZURlc2N9XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gYCog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote3wke3RpdGxlQ29udn19LVxcbmA7XG5cblx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlV2lraXRleHQoYHt7bm90ZVRBL211bHRpdGl0bGV8JHthY3R1YWxUaXRsZX19fWAsIHtcblx0XHRcdFx0XHR0aXRsZTogYWN0dWFsVGl0bGUsXG5cdFx0XHRcdFx0dmFyaWFudDogJ3poJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbigocmVzdWx0SHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRtdWx0aVRpdGxlOiBKUXVlcnkgPSAkKCQucGFyc2VIVE1MKHJlc3VsdEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSkpLmZpbmQoXG5cdFx0XHRcdFx0XHRcdCcubm90ZVRBLW11bHRpdGl0bGUnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKCRtdWx0aVRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlodbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOWPr+iDvee7j+i/h+i9rOaNol1dXFxuKiDovazmjaLmoIfpopjkuLrvvJonO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudFRleHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bGw+ID0ge307XG5cblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRtdWx0aVRpdGxlLmNoaWxkcmVuKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1tdWx0aXRpdGxlLXZhcmlhbnQnKTtcblx0XHRcdFx0XHRcdFx0XHRhc3NlcnQodmFyaWFudCwgJ3ZhcmlhbnQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSB0ZXh0O1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFZhcmlhbnRBcnJheTogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dFZhcmlhbnRBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRBcnJheVt0ZXh0VmFyaWFudEFycmF5Lmxlbmd0aF0gPSB2YXJpYW50O1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0VmFyaWFudFt0ZXh0XSA9IFt2YXJpYW50XTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZUNvbnZlcnRlZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHZhcmlhbnRUZXh0W3dnVXNlclZhcmlhbnQgYXMgc3RyaW5nXTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBtdWx0aVRpdGxlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHRleHQgb2YgT2JqZWN0LnZhbHVlcyh2YXJpYW50VGV4dCkpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICghdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzTmFtZTogc3RyaW5nID0gdmFyaWFudHNcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhcmlhbnQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLXtSfHt7TWVkaWFXaWtpOlZhcmlhbnRuYW1lLSR7dmFyaWFudH19fX0tYClcblx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCfjgIEnKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50VGl0bGVEZXNjOiBzdHJpbmcgPSBgJHt2YXJpYW50c05hbWV977yaLXtSfCR7dGV4dH19LWA7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFtdWx0aVRpdGxlLmluY2x1ZGVzKHZhcmlhbnRUaXRsZURlc2MpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtdWx0aVRpdGxlW211bHRpVGl0bGUubGVuZ3RoXSA9IHZhcmlhbnRUaXRsZURlc2M7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViSXRlbVNlcGFyYXRvcjogc3RyaW5nID0gJ1xcbioqICc7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAke3N1Ykl0ZW1TZXBhcmF0b3J9JHttdWx0aVRpdGxlLmpvaW4oc3ViSXRlbVNlcGFyYXRvcil9YDtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYFxcbiog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote1J8JHt0aXRsZUNvbnZlcnRlZH19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0dGl0bGVEZWZlcnJlZFxuXHRcdFx0XHQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWdyb3VwczogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1ncm91cCA+ICpbZGF0YS1ub3RldGEtZ3JvdXBdJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFncm91cHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0c3dpdGNoICgkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICd0ZW1wbGF0ZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ21vZHVsZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7I2ludm9rZTpDR3JvdXBWaWV3ZXJ8ZGlhbG9nfCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacrOaWh+S9v+eUqOeahOWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3lsJrmnKrliJvlu7pcXG5gO1xuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIHt7ZWRpdHxNb2R1bGU6Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX185Yib5bu65YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAnX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKrnn6XlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5p2l5rqQ4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKX3igJ1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbDogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1sb2NhbCcpO1xuXHRcdFx0XHRcdGlmICgkbm90ZVRBbG9jYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzlhajmlofmiYvlt6XovazmjaJdXVxcbic7XG5cblx0XHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbHMgPSAkbm90ZVRBbG9jYWwuY2hpbGRyZW4oJypbZGF0YS1ub3RldGEtY29kZV0nKTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBbG9jYWxzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdGxldCBsb2NhbERlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0XHRcdFx0aWYgKGxvY2FsRGVzYykge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9IGDvvIgke2xvY2FsRGVzY33vvIlgO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9ICcnO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbG9jYWxDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIC17RHwke2xvY2FsQ29udn19LSR7bG9jYWxEZXNjfeW9k+WJjeaYvuekuuS4uu+8mi17JHtsb2NhbENvbnZ9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICd7e25vdGVUQS9mb290ZXJ9fVxcbic7XG5cblx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0ID0gd2lraXRleHQ7XG5cblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUod2lraXRleHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZSgpOiBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4ge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUlzTG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpLnJlc29sdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXHRcdFx0dGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlLmVycm9ycyA9IFtdO1xuXHRcdFx0dGhpcy5zdGF0ZS5yZXRyeWFibGUgPSBmYWxzZTtcblxuXHRcdFx0Tm90ZVRBVmlld2VyLmdldE5vdGVUQVBhcnNlVGV4dCgpXG5cdFx0XHRcdC50aGVuKCh3aWtpdGV4dDogQXBpUmVzcG9uc2UpID0+XG5cdFx0XHRcdFx0cGFyc2VXaWtpdGV4dCh3aWtpdGV4dCBhcyBBcGlQYXJzZVJlc3BvbnNlLCB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ1RlbXBsYXRlOkNHcm91cC8tJyxcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IHdnVXNlclZhcmlhbnQgYXMgc3RyaW5nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4oKHBhcnNlZEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5vdXRwdXQgPSBjb252ZXJ0Q29sbGFwc2libGVzKHBhcnNlZEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSk7XG5cdFx0XHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShwYXJzZWRIdG1sKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IgfCBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEFwaVJldHJ5RmFpbEVycm9yKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSA9IGdldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0L1xcJDEvZyxcblx0XHRcdFx0XHRcdFx0ZXJyb3IuZXJyb3JzLmxlbmd0aC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5lcnJvcnMgPSBlcnJvci5lcnJvcnM7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnJldHJ5YWJsZSA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlID0gU3RyaW5nKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZVdyYXAoKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy5kYXRhSXNMb2FkZWQgfHwgdGhpcy5leGVjdXRlUHJvbWlzZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZXhlY3V0ZVByb21pc2UgPSB0aGlzLmRvRXhlY3V0ZSgpO1xuXHRcdFx0dGhpcy5leGVjdXRlUHJvbWlzZS5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHZpZXdlcjogTm90ZVRBVmlld2VyID0gbmV3IE5vdGVUQVZpZXdlcigpO1xuXHR2aWV3ZXJNYXAuc2V0KGhhc2gsIHZpZXdlcik7XG5cblx0cmV0dXJuIHZpZXdlcjtcbn07XG5cbmNvbnN0IHJlc2V0QWxsVmlld2VyID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHZpZXdlciBvZiB2aWV3ZXJNYXAudmFsdWVzKCkpIHtcblx0XHR2aWV3ZXIuZGVzdHJveSgpO1xuXHR9XG5cdHZpZXdlck1hcC5jbGVhcigpO1xufTtcblxuZXhwb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhEaWFsb2d9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0c3RhdGU6IHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGxvYWRpbmc6IGJvb2xlYW47XG5cdFx0b3V0cHV0OiBzdHJpbmc7XG5cdFx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdFx0ZXJyb3JzOiBzdHJpbmdbXTtcblx0XHRyZXRyeWFibGU6IGJvb2xlYW47XG5cdH07XG5cdG9uUmV0cnk6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbb3BlbjogYm9vbGVhbl07XG59PigpO1xuXG5jb25zdCBjbG9zZSA9ICgpOiB2b2lkID0+IHtcblx0ZW1pdCgndXBkYXRlOm9wZW4nLCBmYWxzZSk7XG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1kaWFsb2dcblx0XHQ6b3Blbj1cInN0YXRlLm9wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ1RpdGxlJylcIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cIntsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKX1cIlxuXHRcdDpwcmltYXJ5LWFjdGlvbj1cInN0YXRlLnJldHJ5YWJsZSA/IHtsYWJlbDogZ2V0TWVzc2FnZSgnUmV0cnknKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJ30gOiB1bmRlZmluZWRcIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiZW1pdCgndXBkYXRlOm9wZW4nLCAkZXZlbnQpXCJcblx0XHRAZGVmYXVsdD1cImNsb3NlXCJcblx0XHRAcHJpbWFyeT1cInByb3BzLm9uUmV0cnlcIlxuXHQ+XG5cdFx0PHAgdi1pZj1cInN0YXRlLmxvYWRpbmdcIj57eyBnZXRNZXNzYWdlKCdMb2FkaW5nJykgfX08L3A+XG5cdFx0PGRpdiB2LWVsc2UtaWY9XCJzdGF0ZS5lcnJvck1lc3NhZ2VcIiBjbGFzcz1cIngtbm90ZVRBLXZpZXdlci1vdXRwdXRcIj5cblx0XHRcdDxwIGNsYXNzPVwiZXJyb3JcIj57eyBzdGF0ZS5lcnJvck1lc3NhZ2UgfX08L3A+XG5cdFx0XHQ8b2wgdi1pZj1cInN0YXRlLmVycm9ycy5sZW5ndGhcIj5cblx0XHRcdFx0PGxpIHYtZm9yPVwiKGVycm9yLCBpbmRleCkgaW4gc3RhdGUuZXJyb3JzXCIgOmtleT1cImluZGV4XCI+XG5cdFx0XHRcdFx0e3sgZXJyb3IgfX1cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvb2w+XG5cdFx0PC9kaXY+XG5cdFx0PCEtLSBNZWRpYVdpa2kncyBwYXJzZXIgcmV0dXJucyBzYW5pdGl6ZWQgSFRNTCBmb3IgdGhpcyBvdXRwdXQuIC0tPlxuXHRcdDwhLS0gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby12LWh0bWwgLS0+XG5cdFx0PGRpdiB2LWVsc2UgY2xhc3M9XCJ4LW5vdGVUQS12aWV3ZXItb3V0cHV0XCIgdi1odG1sPVwic3RhdGUub3V0cHV0XCI+PC9kaXY+XG5cdDwvY2R4LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuLngtbm90ZVRBLXZpZXdlci1vdXRwdXQge1xuXHQuZXJyb3Ige1xuXHRcdGNvbG9yOiBAY29sb3ItLWVycm9yO1xuXHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFwaVJldHJ5RmFpbEVycm9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FwaSBjYWxscyBmYWlsZWQgJDEgdGltZShzKSBpbiBhIHJvdy4gRXJyb3JzOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAnQXBpIOiwg+eUqOi/nue7reWksei0pSAkMSDmrKHvvIwkMSDmrKHosIPnlKjnmoTplJnor6/liIbliKvkuLrvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAnQXBpIOiqv+eUqOmAo+e6jOWkseaVlyAkMSDmrKHvvIwkMSDmrKHoqr/nlKjnmoTpjK/oqqTliIbliKXngrrvvJonLFxuXHRcdH0pLFxuXHRcdExvYWRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliqDovb3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6LyJ5YWl4oCm4oCmJyxcblx0XHR9KSxcblx0XHRUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOb3RlVEEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X6K+N6L2s5o2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wtl+ipnui9ieaPmycsXG5cdFx0fSksXG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6ZetJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWiScsXG5cdFx0fSksXG5cdFx0UmV0cnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmV0cnknLFxuXHRcdFx0J3poLWhhbnMnOiAn6YeN6K+VJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeippicsXG5cdFx0fSksXG5cdFx0RXhwYW5kQ29sbGFwc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBvciBoaWRlIGNvbnRlbnQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S6L+makOiXj+WGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLov6Zqx6JeP5YWn5a65Jyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBrZXk6IDAgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHtcbiAga2V5OiAxLFxuICBjbGFzczogXCJ4LW5vdGVUQS12aWV3ZXItb3V0cHV0XCJcbn1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcImVycm9yXCIgfVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsga2V5OiAwIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSBbXCJpbm5lckhUTUxcIl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICBvcGVuOiAkcHJvcHMuc3RhdGUub3BlbixcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ1RpdGxlJyksXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDbG9zZScpfSxcbiAgICBcInByaW1hcnktYWN0aW9uXCI6ICRwcm9wcy5zdGF0ZS5yZXRyeWFibGUgPyB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdSZXRyeScpLCBhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnfSA6IHVuZGVmaW5lZCxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZSxcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCRzZXR1cC5lbWl0KCd1cGRhdGU6b3BlbicsICRldmVudCkpKSxcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZSxcbiAgICBvblByaW1hcnk6ICRzZXR1cC5wcm9wcy5vblJldHJ5XG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAoJHByb3BzLnN0YXRlLmxvYWRpbmcpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInBcIiwgX2hvaXN0ZWRfMSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnTG9hZGluZycpKSwgMSAvKiBURVhUICovKSlcbiAgICAgICAgOiAoJHByb3BzLnN0YXRlLmVycm9yTWVzc2FnZSlcbiAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF8zLCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5zdGF0ZS5lcnJvck1lc3NhZ2UpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgICAoJHByb3BzLnN0YXRlLmVycm9ycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwib2xcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRwcm9wcy5zdGF0ZS5lcnJvcnMsIChlcnJvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImxpXCIsIHsga2V5OiBpbmRleCB9LCBfdG9EaXNwbGF5U3RyaW5nKGVycm9yKSwgMSAvKiBURVhUICovKSlcbiAgICAgICAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgICAgICBdKSlcbiAgICAgICAgICA6IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCB7IGtleTogMiB9LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgTWVkaWFXaWtpJ3MgcGFyc2VyIHJldHVybnMgc2FuaXRpemVkIEhUTUwgZm9yIHRoaXMgb3V0cHV0LiBcIiksXG4gICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby12LWh0bWwgXCIpLFxuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ4LW5vdGVUQS12aWV3ZXItb3V0cHV0XCIsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAkcHJvcHMuc3RhdGUub3V0cHV0XG4gICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzUpXG4gICAgICAgICAgICBdLCAyMTEyIC8qIFNUQUJMRV9GUkFHTUVOVCwgREVWX1JPT1RfRlJBR01FTlQgKi8pKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcImRlZmF1bHQtYWN0aW9uXCIsIFwicHJpbWFyeS1hY3Rpb25cIiwgXCJvblByaW1hcnlcIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXE5vdGVUQVxcXFxtb2R1bGVzXFxcXFZpZXdlckRpYWxvZy52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXE5vdGVUQVxcXFxtb2R1bGVzXFxcXFZpZXdlckRpYWxvZy52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcTm90ZVRBXFxcXG1vZHVsZXNcXFxcVmlld2VyRGlhbG9nLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXE5vdGVUQVxcXFxtb2R1bGVzXFxcXFZpZXdlckRpYWxvZy52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNzZiOTk2ZDBcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImZ1bmN0aW9uIGFzc2VydDxUPih2YWx1ZTogVCB8IHVuZGVmaW5lZCwgdmFsdWVOYW1lOiBzdHJpbmcpOiBhc3NlcnRzIHZhbHVlIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQXNzZXJ0IEZhaWwsICR7dmFsdWVOYW1lfSA9PSBmYWxzZS5gKTtcblx0fVxufVxuXG5leHBvcnQge2Fzc2VydH07XG4iLCAiaW1wb3J0ICcuL2NvbnZlcnRDb2xsYXBzaWJsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGNvbnZlcnRDb2xsYXBzaWJsZXMgPSAoaHRtbDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuXG5cdGZvciAoY29uc3QgY29sbGFwc2libGUgb2YgdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm13LWNvbGxhcHNpYmxlJykpIHtcblx0XHRjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGV0YWlscycpO1xuXHRcdGRldGFpbHMub3BlbiA9ICFjb2xsYXBzaWJsZS5jbGFzc0xpc3QuY29udGFpbnMoJ213LWNvbGxhcHNlZCcpO1xuXG5cdFx0Zm9yIChjb25zdCBjbGFzc05hbWUgb2YgY29sbGFwc2libGUuY2xhc3NMaXN0KSB7XG5cdFx0XHRpZiAoIVsnbXctY29sbGFwc2libGUnLCAnbXctY29sbGFwc2VkJ10uaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRkZXRhaWxzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgY29sbGFwc2libGUuYXR0cmlidXRlcykge1xuXHRcdFx0aWYgKGF0dHJpYnV0ZS5uYW1lICE9PSAnY2xhc3MnKSB7XG5cdFx0XHRcdGRldGFpbHMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdW1tYXJ5Jyk7XG5cdFx0Y29uc3QgaGVhZGluZyA9IGNvbGxhcHNpYmxlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnOnNjb3BlID4gLm13LWNvbGxhcHNpYmxlLWhlYWRpbmcsIDpzY29wZSA+IGgxLCA6c2NvcGUgPiBoMiwgOnNjb3BlID4gaDMsIDpzY29wZSA+IGg0LCA6c2NvcGUgPiBoNSwgOnNjb3BlID4gaDYsIDpzY29wZSA+IGRsLCA6c2NvcGUgPiBkdCdcblx0XHQpO1xuXHRcdGlmIChoZWFkaW5nKSB7XG5cdFx0XHR3aGlsZSAoaGVhZGluZy5maXJzdENoaWxkKSB7XG5cdFx0XHRcdHN1bW1hcnkuYXBwZW5kKGhlYWRpbmcuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHRoZWFkaW5nLnJlbW92ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdW1tYXJ5LnRleHRDb250ZW50ID0gZ2V0TWVzc2FnZSgnRXhwYW5kQ29sbGFwc2UnKTtcblx0XHR9XG5cdFx0ZGV0YWlscy5hcHBlbmQoc3VtbWFyeSwgLi4uY29sbGFwc2libGUuY2hpbGROb2Rlcyk7XG5cdFx0Y29sbGFwc2libGUucmVwbGFjZVdpdGgoZGV0YWlscyk7XG5cdH1cblxuXHRyZXR1cm4gdGVtcGxhdGUuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IHtjb252ZXJ0Q29sbGFwc2libGVzfTtcbiIsICJpbXBvcnQge3R5cGUgZ2V0Vmlld2VyfSBmcm9tICcuL3ZpZXdlcic7XG5cbmNvbnN0IHZpZXdlck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBSZXR1cm5UeXBlPHR5cGVvZiBnZXRWaWV3ZXI+PigpO1xuXG5leHBvcnQge3ZpZXdlck1hcH07XG4iLCAiaW1wb3J0ICcuL2luaXRHbG9iYWxNZXRob2RzLmxlc3MnO1xubGV0IHBvcnRsZXRJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5jb25zdCBpbml0R2xvYmFsTWV0aG9kcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB0eXBlb2YgZ2xvYmFsTWV0aG9kcyA9PiB7XG5cdGNvbnN0IGdsb2JhbE1ldGhvZHM6IHtcblx0XHRpbml0KCk6IHZvaWQ7XG5cdFx0ZGVJbml0KCk6IHZvaWQ7XG5cdH0gPSB7XG5cdFx0aW5pdCgpIHtcblx0XHRcdC8qIGZha2UgKi9cblx0XHR9LFxuXHRcdGRlSW5pdCgpIHtcblx0XHRcdC8qIGZha2UgKi9cblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRwb3J0bGV0SWQgPSAncC1ub3RlVEEnO1xuXG5cdFx0bGV0ICRub3RlVEFUYWI6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRnbG9iYWxNZXRob2RzLmluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoJG5vdGVUQVRhYiB8fCAhcG9ydGxldElkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5vdGVUQVRhYjogSFRNTEVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0KHBvcnRsZXRJZCk7XG5cdFx0XHRpZiAoIW5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkbm90ZVRBVGFiID0gJChub3RlVEFUYWIpO1xuXHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgYWJvdmUgY29kZVxuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JG5vdGVUQVRhYlxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoYG13LXBvcnRsZXQtJHtwb3J0bGV0SWR9YClcblx0XHRcdFx0LmFkZENsYXNzKFtgbXctcG9ydGxldC0ke3BvcnRsZXRJZC5yZXBsYWNlKCdwLScsICcnKX1gLCAndmVjdG9yLW1lbnUtdGFicycsICd2ZWN0b3ItbWVudS10YWJzLWxlZ2FjeSddKTtcblx0XHRcdCRib2R5LmZpbmQoJyNwLXZhcmlhbnRzJykuYWZ0ZXIoJG5vdGVUQVRhYik7XG5cdFx0fTtcblx0XHRnbG9iYWxNZXRob2RzLmRlSW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICghJG5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkbm90ZVRBVGFiLmZpbmQoJ3VsJykuZW1wdHkoKTtcblx0XHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdFx0bXcudXRpbC5oaWRlUG9ydGxldChwb3J0bGV0SWQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSBpZiAoc2tpbiA9PT0gJ3ZlY3Rvci0yMDIyJykge1xuXHRcdHBvcnRsZXRJZCA9ICdwLWFzc29jaWF0ZWQtcGFnZXMnO1xuXG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHQkYm9keS5maW5kKCd4LW5vdGVUQS12aWV3ZXInKS5yZW1vdmUoKTtcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdsb2JhbE1ldGhvZHM7XG59O1xuXG5leHBvcnQge3BvcnRsZXRJZCwgaW5pdEdsb2JhbE1ldGhvZHN9O1xuIiwgImltcG9ydCAnLi9Ob3RlVEEubGVzcyc7XG5pbXBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9IGZyb20gJy4vbW9kdWxlcy92aWV3ZXInO1xuaW1wb3J0IHtpbml0R2xvYmFsTWV0aG9kcywgcG9ydGxldElkfSBmcm9tICcuL21vZHVsZXMvaW5pdEdsb2JhbE1ldGhvZHMnO1xuaW1wb3J0IHtjaGVja0ExMXlDb25maXJtS2V5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZW5lcmF0ZVBvcnRsZXRMaW5rfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZW5lcmF0ZVBvcnRsZXRMaW5rJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBub3RlVEEoJGNvbnRlbnQpOiB2b2lkIHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJGNvbnRlbnQucGFyZW50cygnYm9keScpO1xuXG5cdHJlc2V0QWxsVmlld2VyKCk7XG5cblx0Y29uc3QgZ2xvYmFsTWV0aG9kcyA9IGluaXRHbG9iYWxNZXRob2RzKCRib2R5KTtcblx0Z2xvYmFsTWV0aG9kcy5kZUluaXQoKTtcblx0Z2xvYmFsTWV0aG9kcy5pbml0KCk7XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoJy5tdy1pbmRpY2F0b3JbaWRePW13LWluZGljYXRvci1ub3RlVEEtXScpKSB7XG5cdFx0Y29uc3QgaGFzaDogc3RyaW5nID0gZWxlbWVudC5pZC5yZXBsYWNlKC9ebXctaW5kaWNhdG9yLW5vdGVUQS0vLCAnJyk7XG5cblx0XHRsZXQgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKHBvcnRsZXRJZCkge1xuXHRcdFx0JGVsZW1lbnQuaGlkZSgpO1xuXG5cdFx0XHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSB8IHVuZGVmaW5lZCA9IGdlbmVyYXRlUG9ydGxldExpbmsoaGFzaCk7XG5cdFx0XHRpZiAoISRwb3J0bGV0TGluaykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0JGVsZW1lbnQgPSAkcG9ydGxldExpbms7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb3BlbmVyTGlzdGVuZXIgPSAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRnZXRWaWV3ZXIoJGJvZHksIGhhc2gpLm9wZW4oKTtcblx0XHR9O1xuXHRcdCRlbGVtZW50Lm9uKCdjbGljaycsIG9wZW5lckxpc3RlbmVyKTtcblx0XHQkZWxlbWVudC5vbigna2V5ZG93bicsIG9wZW5lckxpc3RlbmVyKTtcblx0fVxufSk7XG4iLCAiaW1wb3J0ICcuL2dlbmVyYXRlUG9ydGxldExpbmsubGVzcyc7XG5pbXBvcnQge3BvcnRsZXRJZH0gZnJvbSAnLi4vaW5pdEdsb2JhbE1ldGhvZHMnO1xuXG5jb25zdCBnZW5lcmF0ZVBvcnRsZXRMaW5rID0gKGhhc2g6IHN0cmluZyk6IEpRdWVyeSB8IHVuZGVmaW5lZCA9PiB7XG5cdGlmICghcG9ydGxldElkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgJ+axiS/mvKInLCBgY2Etbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCFwb3J0bGV0TGluaykge1xuXHRcdHJldHVybjtcblx0fVxuXHRwb3J0bGV0TGluay5jbGFzc0xpc3QuYWRkKCdjYS1ub3RlVEEnKTtcblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkcG9ydGxldExpbms6IEpRdWVyeSA9ICQocG9ydGxldExpbmspLmFkZENsYXNzKCd4LW5vdGVUQS12aWV3ZXInKTtcblx0Y29uc3QgbGluayA9ICRwb3J0bGV0TGluay5maW5kKCdhJykuZW1wdHkoKVswXTtcblx0aWYgKCFsaW5rKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGxhYmVsczogW3N0cmluZywgc3RyaW5nXVtdID0gW1xuXHRcdFsnaGFucycsICfmsYknXSxcblx0XHRbJ2hhbnQnLCAn5ryiJ10sXG5cdF07XG5cdGZvciAoY29uc3QgW3ZhcmlhbnQsIHRleHRdIG9mIGxhYmVscykge1xuXHRcdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0c3Bhbi5jbGFzc0xpc3QuYWRkKCd4LW5vdGVUQS12aWV3ZXJfX2xhYmVsJywgYHgtbm90ZVRBLXZpZXdlcl9fbGFiZWwtJHt2YXJpYW50fWApO1xuXHRcdHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdGxhYmVsLmFwcGVuZChzcGFuKTtcblx0fVxuXHRsaW5rLmFwcGVuZChsYWJlbCk7XG5cblx0cmV0dXJuICRwb3J0bGV0TGluaztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVQb3J0bGV0TGlua307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLG9CQUFOLGNBQWdDQyxNQUFNO0VBQ3JCQztFQUVUQyxZQUFZRCxRQUFrQjtBQUNwQyxVQUFBLG9CQUFBRSxPQUEwQkYsT0FBT0csUUFBTSxvQkFBQSxDQUFvQjtBQUMzRCxTQUFLQyxPQUFPO0FBQ1osU0FBS0osU0FBUyxDQUFDLEdBQUdBLE1BQU07RUFDekI7QUFDRDs7QUNQQyxJQUFBSyxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLFVBQUFQLE9BQTRCRyxPQUFPLENBQUU7O0FDS3pELElBQU1LLGlCQUFpQkEsQ0FDdEJDLE1BQ0FDLFFBQWdCLEdBQ2hCQyxpQkFBMkIsQ0FBQSxNQUNPO0FBQ2xDLE1BQUksQ0FBQ0QsT0FBTztBQUNYLFdBQU9FLEVBQUVDLFNBQTRCLEVBQUVDLE9BQU8sSUFBSWxCLGtCQUFrQmUsY0FBYyxDQUFDO0VBQ3BGO0FBRUEsUUFBTUksV0FBV0gsRUFBRUMsU0FBc0I7QUFFekMsT0FBS1AsSUFDSFUsTUFBTSxHQUFHUCxJQUFJLEVBQ2JRLEtBQU1DLGNBQXFDO0FBQzNDLFNBQUtILFNBQVNJLFFBQVFELFFBQVE7RUFDL0IsQ0FBQyxFQUNBRSxNQUFPQyxXQUFpQztBQUN4Q0MsWUFBUUQsTUFBTUEsS0FBSztBQUVuQixRQUFJQSxTQUFTLE9BQU9B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MEIsYUFBQWhKLDJCQUVHb0MsTUFBTU0sS0FBSyx5Q0FBeUMsQ0FBQSxHQUFBdUc7QUFBQSxNQUFBO0FBQTFFLFNBQUFELFdBQUE1SSxFQUFBLEdBQUEsRUFBQTZJLFNBQUFELFdBQUEzSSxFQUFBLEdBQUFDLFFBQTZFO0FBQUEsWUFBbEV1RSxVQUFBb0UsT0FBQXpKO0FBQ1YsWUFBTTZDLE9BQWV3QyxRQUFRcUUsR0FBR3BGLFFBQVEseUJBQXlCLEVBQUU7QUFFbkUsVUFBSWdCLFdBQW1CdEssRUFBRXFLLE9BQU87QUFDaEMsVUFBSXNDLFdBQVc7QUFDZHJDLGlCQUFTcUUsS0FBSztBQUVkLGNBQU1iLGVBQW1DSCxvQkFBb0I5RixJQUFJO0FBQ2pFLFlBQUksQ0FBQ2lHLGNBQWM7QUFDbEI7UUFDRDtBQUVBeEQsbUJBQVd3RDtNQUNaO0FBRUEsWUFBTWMsaUJBQWtCQyxXQUF5RDtBQUNoRixZQUFJLEVBQUEsR0FBQ25CLG1CQUFBb0IscUJBQW9CRCxLQUFLLEdBQUc7QUFDaEM7UUFDRDtBQUVBQSxjQUFNRSxlQUFlO0FBQ3JCcEgsa0JBQVVDLE9BQU9DLElBQUksRUFBRTFFLEtBQUs7TUFDN0I7QUFDQW1ILGVBQVMwRSxHQUFHLFNBQVNKLGNBQWM7QUFDbkN0RSxlQUFTMEUsR0FBRyxXQUFXSixjQUFjO0lBQ3RDO0VBQUEsU0FBQXBJLEtBQUE7QUFBQWdJLGVBQUEvSCxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBZ0ksZUFBQTlILEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIkFwaVJldHJ5RmFpbEVycm9yIiwgIkVycm9yIiwgImVycm9ycyIsICJjb25zdHJ1Y3RvciIsICJjb25jYXQiLCAibGVuZ3RoIiwgIm5hbWUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyc2VXaXRoUmV0cnkiLCAiYXJncyIsICJjb3VudCIsICJwcmV2aW91c0Vycm9ycyIsICIkIiwgIkRlZmVycmVkIiwgInJlamVjdCIsICJkZWZlcnJlZCIsICJwYXJzZSIsICJ0aGVuIiwgInJlc3BvbnNlIiwgInJlc29sdmUiLCAiY2F0Y2giLCAiZXJyb3IiLCAiY29uc29sZSIsICJzdGFjayIsICJTdHJpbmciLCAibmV3UmVzcG9uc2UiLCAibmV3RXJyb3IiLCAicGFyc2VXaWtpdGV4dCIsICJpbXBvcnRfdnVlMyIsICJpbXBvcnRfY29kZXgiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJMb2FkaW5nIiwgIlRpdGxlIiwgIkNsb3NlIiwgIlJldHJ5IiwgIkV4cGFuZENvbGxhcHNlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9wcyIsICJfX3Byb3BzIiwgImVtaXQiLCAiX19lbWl0IiwgImNsb3NlIiwgImltcG9ydF92dWUyIiwgIl9ob2lzdGVkXzEiLCAiX2hvaXN0ZWRfMiIsICJjbGFzcyIsICJfaG9pc3RlZF8zIiwgIl9ob2lzdGVkXzQiLCAiX2hvaXN0ZWRfNSIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAib3BlbiIsICJzdGF0ZSIsICJ0aXRsZSIsICJsYWJlbCIsICJyZXRyeWFibGUiLCAiYWN0aW9uVHlwZSIsICIkZXZlbnQiLCAib25EZWZhdWx0IiwgIm9uUHJpbWFyeSIsICJvblJldHJ5IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJsb2FkaW5nIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiZXJyb3JNZXNzYWdlIiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgImluZGV4IiwgImNyZWF0ZUNvbW1lbnRWTm9kZSIsICJpbm5lckhUTUwiLCAib3V0cHV0IiwgIl8iLCAiVmlld2VyRGlhbG9nX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJWaWV3ZXJEaWFsb2dfZGVmYXVsdDIiLCAiYXNzZXJ0IiwgInZhbHVlIiwgInZhbHVlTmFtZSIsICJjb252ZXJ0Q29sbGFwc2libGVzIiwgImh0bWwiLCAidGVtcGxhdGUiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiY29udGVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImNvbGxhcHNpYmxlIiwgImRldGFpbHMiLCAiY2xhc3NMaXN0IiwgImNvbnRhaW5zIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJhZGQiLCAiZXJyIiwgImUiLCAiZiIsICJfaXRlcmF0b3IzIiwgImF0dHJpYnV0ZXMiLCAiX3N0ZXAzIiwgImF0dHJpYnV0ZSIsICJzZXRBdHRyaWJ1dGUiLCAic3VtbWFyeSIsICJoZWFkaW5nIiwgInF1ZXJ5U2VsZWN0b3IiLCAiZmlyc3RDaGlsZCIsICJhcHBlbmQiLCAicmVtb3ZlIiwgInRleHRDb250ZW50IiwgImNoaWxkTm9kZXMiLCAicmVwbGFjZVdpdGgiLCAidmlld2VyTWFwIiwgIk1hcCIsICJnZXRWaWV3ZXIiLCAiJGJvZHkiLCAiaGFzaCIsICJoYXMiLCAic3RvcmVkVmlld2VyIiwgImdldCIsICIkdGFyZ2V0RWxlbWVudCIsICJmaW5kIiwgIndnUGFnZU5hbWUiLCAid2dVc2VyVmFyaWFudCIsICJtdyIsICJjb25maWciLCAiTm90ZVRBVmlld2VyIiwgImFwcCIsICJyb290IiwgImRhdGFJc0xvYWRlZCIsICJleGVjdXRlUHJvbWlzZSIsICJub3RlVEFQYXJzZVRleHQiLCAicmVhY3RpdmUiLCAiY3JlYXRlQXBwIiwgImRvRXhlY3V0ZVdyYXAiLCAibW91bnQiLCAiZGVzdHJveSIsICJ1bm1vdW50IiwgImdldE5vdGVUQVBhcnNlVGV4dCIsICIkbm90ZVRBdGl0bGUiLCAiYWN0dWFsVGl0bGUiLCAicmVwbGFjZSIsICJ3aWtpdGV4dCIsICJ0aXRsZURlZmVycmVkIiwgInRpdGxlQ29udiIsICJhdHRyIiwgInRpdGxlRGVzYyIsICJ2YXJpYW50IiwgInJlc3VsdEh0bWwiLCAiJG11bHRpVGl0bGUiLCAicGFyc2VIVE1MIiwgInRleHRWYXJpYW50IiwgInZhcmlhbnRUZXh0IiwgIl9pdGVyYXRvcjQiLCAiY2hpbGRyZW4iLCAiX3N0ZXA0IiwgImVsZW1lbnQiLCAiJGVsZW1lbnQiLCAidGV4dCIsICJ0cmltIiwgInRleHRWYXJpYW50QXJyYXkiLCAidGl0bGVDb252ZXJ0ZWQiLCAibXVsdGlUaXRsZSIsICJfaSIsICJfT2JqZWN0JHZhbHVlcyIsICJPYmplY3QiLCAidmFsdWVzIiwgInZhcmlhbnRzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInZhcmlhbnRzTmFtZSIsICJtYXAiLCAiam9pbiIsICJ2YXJpYW50VGl0bGVEZXNjIiwgInN1Ykl0ZW1TZXBhcmF0b3IiLCAiJG5vdGVUQWdyb3VwcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICIkbm90ZVRBbG9jYWwiLCAiJG5vdGVUQWxvY2FscyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJsb2NhbERlc2MiLCAibG9jYWxDb252IiwgImRvRXhlY3V0ZSIsICJwYXJzZWRIdG1sIiwgInRvU3RyaW5nIiwgImFsd2F5cyIsICJ2aWV3ZXIiLCAic2V0IiwgInJlc2V0QWxsVmlld2VyIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgImNsZWFyIiwgInBvcnRsZXRJZCIsICJpbml0R2xvYmFsTWV0aG9kcyIsICJnbG9iYWxNZXRob2RzIiwgImluaXQiLCAiZGVJbml0IiwgInNraW4iLCAiJG5vdGVUQVRhYiIsICJub3RlVEFUYWIiLCAidXRpbCIsICJhZGRQb3J0bGV0IiwgInJlbW92ZUNsYXNzIiwgImFkZENsYXNzIiwgImFmdGVyIiwgImVtcHR5IiwgImhpZGVQb3J0bGV0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZW5lcmF0ZVBvcnRsZXRMaW5rIiwgInBvcnRsZXRMaW5rIiwgImFkZFBvcnRsZXRMaW5rIiwgIiRwb3J0bGV0TGluayIsICJsaW5rIiwgImxhYmVscyIsICJfaTIiLCAiX2xhYmVscyIsICJzcGFuIiwgImhvb2siLCAibm90ZVRBIiwgIiRjb250ZW50IiwgInBhcmVudHMiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiaWQiLCAiaGlkZSIsICJvcGVuZXJMaXN0ZW5lciIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInByZXZlbnREZWZhdWx0IiwgIm9uIl0KfQo=
