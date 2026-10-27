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
//! src/NoteTA/modules/util/convertCollapsibles.ts
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHMiLCAic3JjL05vdGVUQS9vcHRpb25zLmpzb24iLCAic3JjL05vdGVUQS9tb2R1bGVzL2FwaS50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvcGFyc2VXaWtpdGV4dC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvdmlld2VyLnRzIiwgImRpc3QvTm90ZVRBL3NyYy9Ob3RlVEEvbW9kdWxlcy9WaWV3ZXJEaWFsb2cudnVlIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxOb3RlVEFcXG1vZHVsZXNcXFZpZXdlckRpYWxvZy52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvTm90ZVRBL21vZHVsZXMvVmlld2VyRGlhbG9nLnZ1ZSIsICJzcmMvTm90ZVRBL21vZHVsZXMvdXRpbC9hc3NlcnQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvY29udmVydENvbGxhcHNpYmxlcy50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFZpZXdNYXAudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzLnRzIiwgInNyYy9Ob3RlVEEvTm90ZVRBLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNsYXNzIEFwaVJldHJ5RmFpbEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRwdWJsaWMgcmVhZG9ubHkgZXJyb3JzOiBzdHJpbmdbXTtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gWy4uLmVycm9yc107XG5cdH1cbn1cblxuZXhwb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTm90ZVRBLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbnR5cGUgQXBpUGFyc2UgPSBtdy5BcGlbJ3BhcnNlJ107XG50eXBlIEFwaVBhcnNlUGFyYW1ldGVycyA9IFBhcmFtZXRlcnM8QXBpUGFyc2U+O1xudHlwZSBBcGlQYXJzZVJlc3BvbnNlID0gQXdhaXRlZDxSZXR1cm5UeXBlPEFwaVBhcnNlPj47XG50eXBlIEFwaVJlc3BvbnNlID0gQXBpUGFyc2VSZXNwb25zZSB8IEFwaVJldHJ5RmFpbEVycm9yO1xuXG5jb25zdCBwYXJzZVdpdGhSZXRyeSA9IChcblx0YXJnczogQXBpUGFyc2VQYXJhbWV0ZXJzLFxuXHRjb3VudDogbnVtYmVyID0gMyxcblx0cHJldmlvdXNFcnJvcnM6IHN0cmluZ1tdID0gW11cbik6IEpRdWVyeS5EZWZlcnJlZDxBcGlSZXNwb25zZT4gPT4ge1xuXHRpZiAoIWNvdW50KSB7XG5cdFx0cmV0dXJuICQuRGVmZXJyZWQ8QXBpUmV0cnlGYWlsRXJyb3I+KCkucmVqZWN0KG5ldyBBcGlSZXRyeUZhaWxFcnJvcihwcmV2aW91c0Vycm9ycykpO1xuXHR9XG5cblx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdHZvaWQgYXBpXG5cdFx0LnBhcnNlKC4uLmFyZ3MpXG5cdFx0LnRoZW4oKHJlc3BvbnNlOiBBcGlQYXJzZVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdH0pXG5cdFx0LmNhdGNoKChlcnJvcj86IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblxuXHRcdFx0aWYgKGVycm9yICYmIHR5cGVvZiBlcnJvciA9PT0gJ29iamVjdCcgJiYgJ3N0YWNrJyBpbiBlcnJvcikge1xuXHRcdFx0XHRwcmV2aW91c0Vycm9yc1twcmV2aW91c0Vycm9ycy5sZW5ndGhdID0gZXJyb3Iuc3RhY2s7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcmV2aW91c0Vycm9yc1twcmV2aW91c0Vycm9ycy5sZW5ndGhdID0gU3RyaW5nKGVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0cGFyc2VXaXRoUmV0cnkoYXJncywgLS1jb3VudCwgcHJldmlvdXNFcnJvcnMpXG5cdFx0XHRcdC50aGVuKChuZXdSZXNwb25zZTogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUobmV3UmVzcG9uc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKG5ld0Vycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChuZXdFcnJvcik7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdHJldHVybiBkZWZlcnJlZDtcbn07XG5cbmNvbnN0IHBhcnNlV2lraXRleHQgPSAoLi4uYXJnczogQXBpUGFyc2VQYXJhbWV0ZXJzKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdHJldHVybiBwYXJzZVdpdGhSZXRyeShhcmdzKTtcbn07XG5cbmV4cG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fTtcbiIsICJpbXBvcnQge3R5cGUgQXBpUGFyc2VSZXNwb25zZSwgdHlwZSBBcGlSZXNwb25zZSwgcGFyc2VXaWtpdGV4dH0gZnJvbSAnLi9wYXJzZVdpa2l0ZXh0JztcbmltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHAsIHJlYWN0aXZlfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCBOb3RlVEFEaWFsb2cgZnJvbSAnLi9WaWV3ZXJEaWFsb2cudnVlJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Y29udmVydENvbGxhcHNpYmxlc30gZnJvbSAnLi91dGlsL2NvbnZlcnRDb2xsYXBzaWJsZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt2aWV3ZXJNYXB9IGZyb20gJy4vaW5pdFZpZXdNYXAnO1xuXG5pbnRlcmZhY2UgVmlld2VyU3RhdGUge1xuXHRvcGVuOiBib29sZWFuO1xuXHRsb2FkaW5nOiBib29sZWFuO1xuXHRvdXRwdXQ6IHN0cmluZztcblx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdGVycm9yczogc3RyaW5nW107XG5cdHJldHJ5YWJsZTogYm9vbGVhbjtcbn1cblxuY29uc3QgZ2V0Vmlld2VyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiwgaGFzaDogc3RyaW5nKTogdHlwZW9mIHZpZXdlciA9PiB7XG5cdGlmICh2aWV3ZXJNYXAuaGFzKGhhc2gpKSB7XG5cdFx0Y29uc3Qgc3RvcmVkVmlld2VyID0gdmlld2VyTWFwLmdldChoYXNoKTtcblx0XHRhc3NlcnQoc3RvcmVkVmlld2VyLCAndmlld2VyJyk7XG5cblx0XHRyZXR1cm4gc3RvcmVkVmlld2VyO1xuXHR9XG5cblx0Y29uc3QgJHRhcmdldEVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoYCNub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoISR0YXJnZXRFbGVtZW50Lmxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgZ2V0IEVsZW1lbnQgXCIjbm90ZVRBLSR7aGFzaH1cIi5gKTtcblx0fVxuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjbGFzcyBOb3RlVEFWaWV3ZXIge1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgc3RhdGU6IFZpZXdlclN0YXRlO1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgYXBwOiBWdWVBcHA8RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSByb290OiBIVE1MRWxlbWVudDtcblx0XHRwcml2YXRlIGRhdGFJc0xvYWRlZDogYm9vbGVhbjtcblx0XHRwcml2YXRlIGV4ZWN1dGVQcm9taXNlPzogSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+O1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdGVUQVBhcnNlVGV4dDogc3RyaW5nO1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHJlYWN0aXZlPFZpZXdlclN0YXRlPih7XG5cdFx0XHRcdG9wZW46IGZhbHNlLFxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0b3V0cHV0OiAnJyxcblx0XHRcdFx0ZXJyb3JNZXNzYWdlOiAnJyxcblx0XHRcdFx0ZXJyb3JzOiBbXSxcblx0XHRcdFx0cmV0cnlhYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMucm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0JGJvZHkuYXBwZW5kKHRoaXMucm9vdCk7XG5cdFx0XHR0aGlzLmFwcCA9IGNyZWF0ZUFwcChOb3RlVEFEaWFsb2csIHtcblx0XHRcdFx0c3RhdGU6IHRoaXMuc3RhdGUsXG5cdFx0XHRcdCdvblVwZGF0ZTpvcGVuJzogKG9wZW46IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLm9wZW4gPSBvcGVuO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvblJldHJ5OiAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5kb0V4ZWN1dGVXcmFwKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuYXBwLm1vdW50KHRoaXMucm9vdCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG9wZW4oKTogdm9pZCB7XG5cdFx0XHR0aGlzLnN0YXRlLm9wZW4gPSB0cnVlO1xuXHRcdFx0dGhpcy5kb0V4ZWN1dGVXcmFwKCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0XHR0aGlzLmFwcC51bm1vdW50KCk7XG5cdFx0XHR0aGlzLnJvb3QucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZ2V0Tm90ZVRBUGFyc2VUZXh0KCk6IEpRdWVyeS5EZWZlcnJlZDxBcGlSZXNwb25zZT4ge1xuXHRcdFx0aWYgKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQ8c3RyaW5nPigpLnJlc29sdmUoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0ICRub3RlVEF0aXRsZTogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS10aXRsZScpO1xuXHRcdFx0Y29uc3QgYWN0dWFsVGl0bGU6IHN0cmluZyA9IHdnUGFnZU5hbWUucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRcdFx0Y29uc3QgdGl0bGVEZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0XHRcdGlmICgkbm90ZVRBdGl0bGUubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlQ29udjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWNvZGUnKTtcblx0XHRcdFx0YXNzZXJ0KHRpdGxlQ29udiwgJ3RpdGxlQ29udicpO1xuXG5cdFx0XHRcdGxldCB0aXRsZURlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1kZXNjJyk7XG5cdFx0XHRcdGlmICh0aXRsZURlc2MpIHtcblx0XHRcdFx0XHR0aXRsZURlc2MgPSBg77yIJHt0aXRsZURlc2N977yJYDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aXRsZURlc2MgPSAnJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+e3tlZGl0fCR7YWN0dWFsVGl0bGV9fHNlY3Rpb249MH19PC9zcGFuPlxcbmA7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh+S9v+eUqFtbSGVscDrlrZfor43ovazmjaLlpITnkIZ85qCH6aKY5omL5bel6L2s5o2iXV1cXG4nO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDovazmjaLmoIfpopjkuLrvvJote0R8JHt0aXRsZUNvbnZ9fS0ke3RpdGxlRGVzY31cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBgKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17fCR7dGl0bGVDb252fX0tXFxuYDtcblxuXHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFyc2VXaWtpdGV4dChge3tub3RlVEEvbXVsdGl0aXRsZXwke2FjdHVhbFRpdGxlfX19YCwge1xuXHRcdFx0XHRcdHRpdGxlOiBhY3R1YWxUaXRsZSxcblx0XHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKChyZXN1bHRIdG1sOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgJG11bHRpVGl0bGU6IEpRdWVyeSA9ICQoJC5wYXJzZUhUTUwocmVzdWx0SHRtbCBhcyBBcGlQYXJzZVJlc3BvbnNlKSkuZmluZChcblx0XHRcdFx0XHRcdFx0Jy5ub3RlVEEtbXVsdGl0aXRsZSdcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRpZiAoJG11bHRpVGl0bGUubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh1tbSGVscDrlrZfor43ovazmjaLlpITnkIZ85qCH6aKY5Y+v6IO957uP6L+H6L2s5o2iXV1cXG4qIOi9rOaNouagh+mimOS4uu+8mic7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFZhcmlhbnQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50VGV4dDogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVsbD4gPSB7fTtcblxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG11bHRpVGl0bGUuY2hpbGRyZW4oKSkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLW11bHRpdGl0bGUtdmFyaWFudCcpO1xuXHRcdFx0XHRcdFx0XHRcdGFzc2VydCh2YXJpYW50LCAndmFyaWFudCcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dDogc3RyaW5nID0gJGVsZW1lbnQudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHRcdFx0XHR2YXJpYW50VGV4dFt2YXJpYW50XSA9IHRleHQ7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudEFycmF5OiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0ZXh0VmFyaWFudEFycmF5KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0VmFyaWFudEFycmF5W3RleHRWYXJpYW50QXJyYXkubGVuZ3RoXSA9IHZhcmlhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50W3RleHRdID0gW3ZhcmlhbnRdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlQ29udmVydGVkOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gdmFyaWFudFRleHRbd2dVc2VyVmFyaWFudCBhcyBzdHJpbmddO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG11bHRpVGl0bGU6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdGV4dCBvZiBPYmplY3QudmFsdWVzKHZhcmlhbnRUZXh0KSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0ZXh0ID09PSBudWxsIHx8IHRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCF2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50VGV4dFt2YXJpYW50XSA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudHNOYW1lOiBzdHJpbmcgPSB2YXJpYW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgodmFyaWFudDogc3RyaW5nKTogc3RyaW5nID0+IGAte1J8e3tNZWRpYVdpa2k6VmFyaWFudG5hbWUtJHt2YXJpYW50fX19fS1gKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oJ+OAgScpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRUaXRsZURlc2M6IHN0cmluZyA9IGAke3ZhcmlhbnRzTmFtZX3vvJote1J8JHt0ZXh0fX0tYDtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIW11bHRpVGl0bGUuaW5jbHVkZXModmFyaWFudFRpdGxlRGVzYykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdG11bHRpVGl0bGVbbXVsdGlUaXRsZS5sZW5ndGhdID0gdmFyaWFudFRpdGxlRGVzYztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJJdGVtU2VwYXJhdG9yOiBzdHJpbmcgPSAnXFxuKiogJztcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCR7c3ViSXRlbVNlcGFyYXRvcn0ke211bHRpVGl0bGUuam9pbihzdWJJdGVtU2VwYXJhdG9yKX1gO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgXFxuKiDlrp7pmYXmoIfpopjkuLrvvJote1J8JHthY3R1YWxUaXRsZX19Le+8m+W9k+WJjeaYvuekuuS4uu+8mi17Unwke3RpdGxlQ29udmVydGVkfX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHR0aXRsZURlZmVycmVkXG5cdFx0XHRcdC50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBZ3JvdXBzOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLWdyb3VwID4gKltkYXRhLW5vdGV0YS1ncm91cF0nKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWdyb3Vwcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKCRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwLXNvdXJjZScpKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3RlbXBsYXRlJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBge3tDR3JvdXAvJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbW9kdWxlJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBge3sjaW52b2tlOkNHcm91cFZpZXdlcnxkaWFsb2d8JHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pys5paH5L2/55So55qE5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneWwmuacquWIm+W7ulxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCoge3tlZGl0fE1vZHVsZTpDR3JvdXAvJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfXzliJvlu7rlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCdfX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacquefpeWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3mnaXmupDigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwLXNvdXJjZScpfeKAnVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWxvY2FsOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLWxvY2FsJyk7XG5cdFx0XHRcdFx0aWYgKCRub3RlVEFsb2NhbC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA8c3BhbiBzdHlsZT1cImZsb2F0OnJpZ2h0XCI+e3tlZGl0fCR7YWN0dWFsVGl0bGV9fHNlY3Rpb249MH19PC9zcGFuPlxcbmA7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOWFqOaWh+aJi+W3pei9rOaNol1dXFxuJztcblxuXHRcdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWxvY2FscyA9ICRub3RlVEFsb2NhbC5jaGlsZHJlbignKltkYXRhLW5vdGV0YS1jb2RlXScpO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFsb2NhbHMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0bGV0IGxvY2FsRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRcdFx0XHRpZiAobG9jYWxEZXNjKSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxEZXNjID0gYO+8iCR7bG9jYWxEZXNjfe+8iWA7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYWxEZXNjID0gJyc7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBsb2NhbENvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWNvZGUnKTtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYCogLXtEfCR7bG9jYWxDb252fX0tJHtsb2NhbERlc2N95b2T5YmN5pi+56S65Li677yaLXske2xvY2FsQ29udn19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ3t7bm90ZVRBL2Zvb3Rlcn19XFxuJztcblxuXHRcdFx0XHRcdE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQgPSB3aWtpdGV4dDtcblxuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZSh3aWtpdGV4dCk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9FeGVjdXRlKCk6IEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPiB7XG5cdFx0XHRpZiAodGhpcy5kYXRhSXNMb2FkZWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCkucmVzb2x2ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHR0aGlzLnN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUuZXJyb3JzID0gW107XG5cdFx0XHR0aGlzLnN0YXRlLnJldHJ5YWJsZSA9IGZhbHNlO1xuXG5cdFx0XHROb3RlVEFWaWV3ZXIuZ2V0Tm90ZVRBUGFyc2VUZXh0KClcblx0XHRcdFx0LnRoZW4oKHdpa2l0ZXh0OiBBcGlSZXNwb25zZSkgPT5cblx0XHRcdFx0XHRwYXJzZVdpa2l0ZXh0KHdpa2l0ZXh0IGFzIEFwaVBhcnNlUmVzcG9uc2UsIHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnVGVtcGxhdGU6Q0dyb3VwLy0nLFxuXHRcdFx0XHRcdFx0dmFyaWFudDogd2dVc2VyVmFyaWFudCBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbigocGFyc2VkSHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLm91dHB1dCA9IGNvbnZlcnRDb2xsYXBzaWJsZXMocGFyc2VkSHRtbCBhcyBBcGlQYXJzZVJlc3BvbnNlKTtcblx0XHRcdFx0XHR0aGlzLmRhdGFJc0xvYWRlZCA9IHRydWU7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHBhcnNlZEh0bWwpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvciB8IEVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgQXBpUmV0cnlGYWlsRXJyb3IpIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlID0gZ2V0TWVzc2FnZSgnQXBpUmV0cnlGYWlsRXJyb3InKS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHQvXFwkMS9nLFxuXHRcdFx0XHRcdFx0XHRlcnJvci5lcnJvcnMubGVuZ3RoLnRvU3RyaW5nKClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmVycm9ycyA9IGVycm9yLmVycm9ycztcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUucmV0cnlhYmxlID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9FeGVjdXRlV3JhcCgpOiB2b2lkIHtcblx0XHRcdGlmICh0aGlzLmRhdGFJc0xvYWRlZCB8fCB0aGlzLmV4ZWN1dGVQcm9taXNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5leGVjdXRlUHJvbWlzZSA9IHRoaXMuZG9FeGVjdXRlKCk7XG5cdFx0XHR0aGlzLmV4ZWN1dGVQcm9taXNlLmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgdmlld2VyOiBOb3RlVEFWaWV3ZXIgPSBuZXcgTm90ZVRBVmlld2VyKCk7XG5cdHZpZXdlck1hcC5zZXQoaGFzaCwgdmlld2VyKTtcblxuXHRyZXR1cm4gdmlld2VyO1xufTtcblxuY29uc3QgcmVzZXRBbGxWaWV3ZXIgPSAoKTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3Qgdmlld2VyIG9mIHZpZXdlck1hcC52YWx1ZXMoKSkge1xuXHRcdHZpZXdlci5kZXN0cm95KCk7XG5cdH1cblx0dmlld2VyTWFwLmNsZWFyKCk7XG59O1xuXG5leHBvcnQge2dldFZpZXdlciwgcmVzZXRBbGxWaWV3ZXJ9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeERpYWxvZ30gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRzdGF0ZToge1xuXHRcdG9wZW46IGJvb2xlYW47XG5cdFx0bG9hZGluZzogYm9vbGVhbjtcblx0XHRvdXRwdXQ6IHN0cmluZztcblx0XHRlcnJvck1lc3NhZ2U6IHN0cmluZztcblx0XHRlcnJvcnM6IHN0cmluZ1tdO1xuXHRcdHJldHJ5YWJsZTogYm9vbGVhbjtcblx0fTtcblx0b25SZXRyeTogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdCd1cGRhdGU6b3Blbic6IFtvcGVuOiBib29sZWFuXTtcbn0+KCk7XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdDpvcGVuPVwic3RhdGUub3BlblwiXG5cdFx0OnRpdGxlPVwiZ2V0TWVzc2FnZSgnVGl0bGUnKVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDbG9zZScpfVwiXG5cdFx0OnByaW1hcnktYWN0aW9uPVwic3RhdGUucmV0cnlhYmxlID8ge2xhYmVsOiBnZXRNZXNzYWdlKCdSZXRyeScpLCBhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnfSA6IHVuZGVmaW5lZFwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAdXBkYXRlOm9wZW49XCJlbWl0KCd1cGRhdGU6b3BlbicsICRldmVudClcIlxuXHRcdEBkZWZhdWx0PVwiY2xvc2VcIlxuXHRcdEBwcmltYXJ5PVwicHJvcHMub25SZXRyeVwiXG5cdD5cblx0XHQ8cCB2LWlmPVwic3RhdGUubG9hZGluZ1wiPnt7IGdldE1lc3NhZ2UoJ0xvYWRpbmcnKSB9fTwvcD5cblx0XHQ8ZGl2IHYtZWxzZS1pZj1cInN0YXRlLmVycm9yTWVzc2FnZVwiIGNsYXNzPVwieC1ub3RlVEEtdmlld2VyLW91dHB1dFwiPlxuXHRcdFx0PHAgY2xhc3M9XCJlcnJvclwiPnt7IHN0YXRlLmVycm9yTWVzc2FnZSB9fTwvcD5cblx0XHRcdDxvbCB2LWlmPVwic3RhdGUuZXJyb3JzLmxlbmd0aFwiPlxuXHRcdFx0XHQ8bGkgdi1mb3I9XCIoZXJyb3IsIGluZGV4KSBpbiBzdGF0ZS5lcnJvcnNcIiA6a2V5PVwiaW5kZXhcIj5cblx0XHRcdFx0XHR7eyBlcnJvciB9fVxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0PC9vbD5cblx0XHQ8L2Rpdj5cblx0XHQ8IS0tIE1lZGlhV2lraSdzIHBhcnNlciByZXR1cm5zIHNhbml0aXplZCBIVE1MIGZvciB0aGlzIG91dHB1dC4gLS0+XG5cdFx0PCEtLSBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL25vLXYtaHRtbCAtLT5cblx0XHQ8ZGl2IHYtZWxzZSBjbGFzcz1cIngtbm90ZVRBLXZpZXdlci1vdXRwdXRcIiB2LWh0bWw9XCJzdGF0ZS5vdXRwdXRcIj48L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vLi4vdmFyaWFibGVzLmxlc3MnO1xuXG4ueC1ub3RlVEEtdmlld2VyLW91dHB1dCB7XG5cdDpkZWVwKGRldGFpbHMpIHtcblx0XHRtYXJnaW46IDAuNWVtIDA7XG5cdH1cblxuXHQ6ZGVlcChzdW1tYXJ5KSB7XG5cdFx0ZGwsXG5cdFx0ZHQge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lO1xuXHRcdH1cblx0fVxuXG5cdC5lcnJvciB7XG5cdFx0Y29sb3I6IEBjb2xvci0tZXJyb3I7XG5cdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXBpUmV0cnlGYWlsRXJyb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXBpIGNhbGxzIGZhaWxlZCAkMSB0aW1lKHMpIGluIGEgcm93LiBFcnJvcnM6ICcsXG5cdFx0XHQnemgtaGFucyc6ICdBcGkg6LCD55So6L+e57ut5aSx6LSlICQxIOasoe+8jCQxIOasoeiwg+eUqOeahOmUmeivr+WIhuWIq+S4uu+8micsXG5cdFx0XHQnemgtaGFudCc6ICdBcGkg6Kq/55So6YCj57qM5aSx5pWXICQxIOasoe+8jCQxIOasoeiqv+eUqOeahOmMr+iqpOWIhuWIpeeCuu+8micsXG5cdFx0fSksXG5cdFx0TG9hZGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGVUQScsXG5cdFx0XHQnemgtaGFucyc6ICflrZfor43ovazmjaInLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2X6Kme6L2J5o+bJyxcblx0XHR9KSxcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHRSZXRyeTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXRyeScsXG5cdFx0XHQnemgtaGFucyc6ICfph43or5UnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN6KmmJyxcblx0XHR9KSxcblx0XHRFeHBhbmRDb2xsYXBzZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaG93IG9yIGhpZGUgY29udGVudCcsXG5cdFx0XHQnemgtaGFucyc6ICfmmL7npLov6ZqQ6JeP5YaF5a65Jyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekui/pmrHol4/lhaflrrknLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGtleTogMCB9XG5jb25zdCBfaG9pc3RlZF8yID0ge1xuICBrZXk6IDEsXG4gIGNsYXNzOiBcIngtbm90ZVRBLXZpZXdlci1vdXRwdXRcIlxufVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwiZXJyb3JcIiB9XG5jb25zdCBfaG9pc3RlZF80ID0geyBrZXk6IDAgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IFtcImlubmVySFRNTFwiXVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRwcm9wcy5zdGF0ZS5vcGVuLFxuICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnVGl0bGUnKSxcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0Nsb3NlJyl9LFxuICAgIFwicHJpbWFyeS1hY3Rpb25cIjogJHByb3BzLnN0YXRlLnJldHJ5YWJsZSA/IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ1JldHJ5JyksIGFjdGlvblR5cGU6ICdwcm9ncmVzc2l2ZSd9IDogdW5kZWZpbmVkLFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoJHNldHVwLmVtaXQoJ3VwZGF0ZTpvcGVuJywgJGV2ZW50KSkpLFxuICAgIG9uRGVmYXVsdDogJHNldHVwLmNsb3NlLFxuICAgIG9uUHJpbWFyeTogJHNldHVwLnByb3BzLm9uUmV0cnlcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICgkcHJvcHMuc3RhdGUubG9hZGluZylcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwicFwiLCBfaG9pc3RlZF8xLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdMb2FkaW5nJykpLCAxIC8qIFRFWFQgKi8pKVxuICAgICAgICA6ICgkcHJvcHMuc3RhdGUuZXJyb3JNZXNzYWdlKVxuICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzMsIF90b0Rpc3BsYXlTdHJpbmcoJHByb3BzLnN0YXRlLmVycm9yTWVzc2FnZSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICAgICgkcHJvcHMuc3RhdGUuZXJyb3JzLmxlbmd0aClcbiAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJvbFwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHByb3BzLnN0YXRlLmVycm9ycywgKGVycm9yLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwibGlcIiwgeyBrZXk6IGluZGV4IH0sIF90b0Rpc3BsYXlTdHJpbmcoZXJyb3IpLCAxIC8qIFRFWFQgKi8pKVxuICAgICAgICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgICAgICAgIF0pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgIF0pKVxuICAgICAgICAgIDogKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIHsga2V5OiAyIH0sIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBNZWRpYVdpa2kncyBwYXJzZXIgcmV0dXJucyBzYW5pdGl6ZWQgSFRNTCBmb3IgdGhpcyBvdXRwdXQuIFwiKSxcbiAgICAgICAgICAgICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdnVlL25vLXYtaHRtbCBcIiksXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcIngtbm90ZVRBLXZpZXdlci1vdXRwdXRcIixcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICRwcm9wcy5zdGF0ZS5vdXRwdXRcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfNSlcbiAgICAgICAgICAgIF0sIDIxMTIgLyogU1RBQkxFX0ZSQUdNRU5ULCBERVZfUk9PVF9GUkFHTUVOVCAqLykpXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwiZGVmYXVsdC1hY3Rpb25cIiwgXCJwcmltYXJ5LWFjdGlvblwiLCBcIm9uUHJpbWFyeVwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcTm90ZVRBXFxcXG1vZHVsZXNcXFxcVmlld2VyRGlhbG9nLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcTm90ZVRBXFxcXG1vZHVsZXNcXFxcVmlld2VyRGlhbG9nLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxOb3RlVEFcXFxcbW9kdWxlc1xcXFxWaWV3ZXJEaWFsb2cudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcTm90ZVRBXFxcXG1vZHVsZXNcXFxcVmlld2VyRGlhbG9nLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi03NmI5OTZkMFwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiZnVuY3Rpb24gYXNzZXJ0PFQ+KHZhbHVlOiBUIHwgdW5kZWZpbmVkLCB2YWx1ZU5hbWU6IHN0cmluZyk6IGFzc2VydHMgdmFsdWUge1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBBc3NlcnQgRmFpbCwgJHt2YWx1ZU5hbWV9ID09IGZhbHNlLmApO1xuXHR9XG59XG5cbmV4cG9ydCB7YXNzZXJ0fTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBjb252ZXJ0Q29sbGFwc2libGVzID0gKGh0bWw6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblx0dGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcblxuXHRmb3IgKGNvbnN0IGNvbGxhcHNpYmxlIG9mIHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5tdy1jb2xsYXBzaWJsZScpKSB7XG5cdFx0Y29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RldGFpbHMnKTtcblx0XHRkZXRhaWxzLm9wZW4gPSAhY29sbGFwc2libGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdy1jb2xsYXBzZWQnKTtcblxuXHRcdGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIGNvbGxhcHNpYmxlLmNsYXNzTGlzdCkge1xuXHRcdFx0aWYgKCFbJ213LWNvbGxhcHNpYmxlJywgJ213LWNvbGxhcHNlZCddLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0ZGV0YWlscy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgYXR0cmlidXRlIG9mIGNvbGxhcHNpYmxlLmF0dHJpYnV0ZXMpIHtcblx0XHRcdGlmIChhdHRyaWJ1dGUubmFtZSAhPT0gJ2NsYXNzJykge1xuXHRcdFx0XHRkZXRhaWxzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUubmFtZSwgYXR0cmlidXRlLnZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3VtbWFyeScpO1xuXHRcdGNvbnN0IGhlYWRpbmcgPSBjb2xsYXBzaWJsZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0JzpzY29wZSA+IC5tdy1jb2xsYXBzaWJsZS1oZWFkaW5nLCA6c2NvcGUgPiBoMSwgOnNjb3BlID4gaDIsIDpzY29wZSA+IGgzLCA6c2NvcGUgPiBoNCwgOnNjb3BlID4gaDUsIDpzY29wZSA+IGg2LCA6c2NvcGUgPiBkbCwgOnNjb3BlID4gZHQnXG5cdFx0KTtcblx0XHRpZiAoaGVhZGluZykge1xuXHRcdFx0d2hpbGUgKGhlYWRpbmcuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRzdW1tYXJ5LmFwcGVuZChoZWFkaW5nLmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0aGVhZGluZy5yZW1vdmUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3VtbWFyeS50ZXh0Q29udGVudCA9IGdldE1lc3NhZ2UoJ0V4cGFuZENvbGxhcHNlJyk7XG5cdFx0fVxuXHRcdGRldGFpbHMuYXBwZW5kKHN1bW1hcnksIC4uLmNvbGxhcHNpYmxlLmNoaWxkTm9kZXMpO1xuXHRcdGNvbGxhcHNpYmxlLnJlcGxhY2VXaXRoKGRldGFpbHMpO1xuXHR9XG5cblx0cmV0dXJuIHRlbXBsYXRlLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCB7Y29udmVydENvbGxhcHNpYmxlc307XG4iLCAiaW1wb3J0IHt0eXBlIGdldFZpZXdlcn0gZnJvbSAnLi92aWV3ZXInO1xuXG5jb25zdCB2aWV3ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Vmlld2VyPj4oKTtcblxuZXhwb3J0IHt2aWV3ZXJNYXB9O1xuIiwgImltcG9ydCAnLi9pbml0R2xvYmFsTWV0aG9kcy5sZXNzJztcbmxldCBwb3J0bGV0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuY29uc3QgaW5pdEdsb2JhbE1ldGhvZHMgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdHlwZW9mIGdsb2JhbE1ldGhvZHMgPT4ge1xuXHRjb25zdCBnbG9iYWxNZXRob2RzOiB7XG5cdFx0aW5pdCgpOiB2b2lkO1xuXHRcdGRlSW5pdCgpOiB2b2lkO1xuXHR9ID0ge1xuXHRcdGluaXQoKSB7XG5cdFx0XHQvKiBmYWtlICovXG5cdFx0fSxcblx0XHRkZUluaXQoKSB7XG5cdFx0XHQvKiBmYWtlICovXG5cdFx0fSxcblx0fTtcblxuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICd2ZWN0b3InKSB7XG5cdFx0cG9ydGxldElkID0gJ3Atbm90ZVRBJztcblxuXHRcdGxldCAkbm90ZVRBVGFiOiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0Z2xvYmFsTWV0aG9kcy5pbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCRub3RlVEFUYWIgfHwgIXBvcnRsZXRJZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBub3RlVEFUYWI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldChwb3J0bGV0SWQpO1xuXHRcdFx0aWYgKCFub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JG5vdGVUQVRhYiA9ICQobm90ZVRBVGFiKTtcblx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIGFib3ZlIGNvZGVcblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdCRub3RlVEFUYWJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKGBtdy1wb3J0bGV0LSR7cG9ydGxldElkfWApXG5cdFx0XHRcdC5hZGRDbGFzcyhbYG13LXBvcnRsZXQtJHtwb3J0bGV0SWQucmVwbGFjZSgncC0nLCAnJyl9YCwgJ3ZlY3Rvci1tZW51LXRhYnMnLCAndmVjdG9yLW1lbnUtdGFicy1sZWdhY3knXSk7XG5cdFx0XHQkYm9keS5maW5kKCcjcC12YXJpYW50cycpLmFmdGVyKCRub3RlVEFUYWIpO1xuXHRcdH07XG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoISRub3RlVEFUYWIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JG5vdGVUQVRhYi5maW5kKCd1bCcpLmVtcHR5KCk7XG5cdFx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHRcdG13LnV0aWwuaGlkZVBvcnRsZXQocG9ydGxldElkKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9IGVsc2UgaWYgKHNraW4gPT09ICd2ZWN0b3ItMjAyMicpIHtcblx0XHRwb3J0bGV0SWQgPSAncC1hc3NvY2lhdGVkLXBhZ2VzJztcblxuXHRcdGdsb2JhbE1ldGhvZHMuZGVJbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0JGJvZHkuZmluZCgneC1ub3RlVEEtdmlld2VyJykucmVtb3ZlKCk7XG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBnbG9iYWxNZXRob2RzO1xufTtcblxuZXhwb3J0IHtwb3J0bGV0SWQsIGluaXRHbG9iYWxNZXRob2RzfTtcbiIsICJpbXBvcnQgJy4vTm90ZVRBLmxlc3MnO1xuaW1wb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfSBmcm9tICcuL21vZHVsZXMvdmlld2VyJztcbmltcG9ydCB7aW5pdEdsb2JhbE1ldGhvZHMsIHBvcnRsZXRJZH0gZnJvbSAnLi9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzJztcbmltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2VuZXJhdGVQb3J0bGV0TGlua30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVQb3J0bGV0TGluayc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbm90ZVRBKCRjb250ZW50KTogdm9pZCB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICRjb250ZW50LnBhcmVudHMoJ2JvZHknKTtcblxuXHRyZXNldEFsbFZpZXdlcigpO1xuXG5cdGNvbnN0IGdsb2JhbE1ldGhvZHMgPSBpbml0R2xvYmFsTWV0aG9kcygkYm9keSk7XG5cdGdsb2JhbE1ldGhvZHMuZGVJbml0KCk7XG5cdGdsb2JhbE1ldGhvZHMuaW5pdCgpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcubXctaW5kaWNhdG9yW2lkXj1tdy1pbmRpY2F0b3Itbm90ZVRBLV0nKSkge1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGVsZW1lbnQuaWQucmVwbGFjZSgvXm13LWluZGljYXRvci1ub3RlVEEtLywgJycpO1xuXG5cdFx0bGV0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblxuXHRcdFx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgfCB1bmRlZmluZWQgPSBnZW5lcmF0ZVBvcnRsZXRMaW5rKGhhc2gpO1xuXHRcdFx0aWYgKCEkcG9ydGxldExpbmspIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50ID0gJHBvcnRsZXRMaW5rO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wZW5lckxpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGlmICghY2hlY2tBMTF5Q29uZmlybUtleShldmVudCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Z2V0Vmlld2VyKCRib2R5LCBoYXNoKS5vcGVuKCk7XG5cdFx0fTtcblx0XHQkZWxlbWVudC5vbignY2xpY2snLCBvcGVuZXJMaXN0ZW5lcik7XG5cdFx0JGVsZW1lbnQub24oJ2tleWRvd24nLCBvcGVuZXJMaXN0ZW5lcik7XG5cdH1cbn0pO1xuIiwgImltcG9ydCAnLi9nZW5lcmF0ZVBvcnRsZXRMaW5rLmxlc3MnO1xuaW1wb3J0IHtwb3J0bGV0SWR9IGZyb20gJy4uL2luaXRHbG9iYWxNZXRob2RzJztcblxuY29uc3QgZ2VuZXJhdGVQb3J0bGV0TGluayA9IChoYXNoOiBzdHJpbmcpOiBKUXVlcnkgfCB1bmRlZmluZWQgPT4ge1xuXHRpZiAoIXBvcnRsZXRJZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRMaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICfmsYkv5ryiJywgYGNhLW5vdGVUQS0ke2hhc2h9YCk7XG5cdGlmICghcG9ydGxldExpbmspIHtcblx0XHRyZXR1cm47XG5cdH1cblx0cG9ydGxldExpbmsuY2xhc3NMaXN0LmFkZCgnY2Etbm90ZVRBJyk7XG5cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgPSAkKHBvcnRsZXRMaW5rKS5hZGRDbGFzcygneC1ub3RlVEEtdmlld2VyJyk7XG5cdGNvbnN0IGxpbmsgPSAkcG9ydGxldExpbmsuZmluZCgnYScpLmVtcHR5KClbMF07XG5cdGlmICghbGluaykge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBsYWJlbHM6IFtzdHJpbmcsIHN0cmluZ11bXSA9IFtcblx0XHRbJ2hhbnMnLCAn5rGJJ10sXG5cdFx0WydoYW50JywgJ+a8oiddLFxuXHRdO1xuXHRmb3IgKGNvbnN0IFt2YXJpYW50LCB0ZXh0XSBvZiBsYWJlbHMpIHtcblx0XHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdHNwYW4uY2xhc3NMaXN0LmFkZCgneC1ub3RlVEEtdmlld2VyX19sYWJlbCcsIGB4LW5vdGVUQS12aWV3ZXJfX2xhYmVsLSR7dmFyaWFudH1gKTtcblx0XHRzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRsYWJlbC5hcHBlbmQoc3Bhbik7XG5cdH1cblx0bGluay5hcHBlbmQobGFiZWwpO1xuXG5cdHJldHVybiAkcG9ydGxldExpbms7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlUG9ydGxldExpbmt9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxvQkFBTixjQUFnQ0MsTUFBTTtFQUNyQkM7RUFFVEMsWUFBWUQsUUFBa0I7QUFDcEMsVUFBQSxvQkFBQUUsT0FBMEJGLE9BQU9HLFFBQU0sb0JBQUEsQ0FBb0I7QUFDM0QsU0FBS0MsT0FBTztBQUNaLFNBQUtKLFNBQVMsQ0FBQyxHQUFHQSxNQUFNO0VBQ3pCO0FBQ0Q7O0FDUEMsSUFBQUssVUFBVzs7QUNBWixJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBQSxVQUFBUCxPQUE0QkcsT0FBTyxDQUFFOztBQ0t6RCxJQUFNSyxpQkFBaUJBLENBQ3RCQyxNQUNBQyxRQUFnQixHQUNoQkMsaUJBQTJCLENBQUEsTUFDTztBQUNsQyxNQUFJLENBQUNELE9BQU87QUFDWCxXQUFPRSxFQUFFQyxTQUE0QixFQUFFQyxPQUFPLElBQUlsQixrQkFBa0JlLGNBQWMsQ0FBQztFQUNwRjtBQUVBLFFBQU1JLFdBQVdILEVBQUVDLFNBQXNCO0FBRXpDLE9BQUtQLElBQ0hVLE1BQU0sR0FBR1AsSUFBSSxFQUNiUSxLQUFNQyxjQUFxQztBQUMzQyxTQUFLSCxTQUFT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LGlCQUFlO0FBRWYsUUFBTU0sZ0JBQWdCRCxrQkFBa0JoRixLQUFLO0FBQzdDaUYsZ0JBQWNFLE9BQU87QUFDckJGLGdCQUFjQyxLQUFLO0FBQUEsTUFBQTBCLGFBQUFoSiwyQkFFR29DLE1BQU1NLEtBQUsseUNBQXlDLENBQUEsR0FBQXVHO0FBQUEsTUFBQTtBQUExRSxTQUFBRCxXQUFBNUksRUFBQSxHQUFBLEVBQUE2SSxTQUFBRCxXQUFBM0ksRUFBQSxHQUFBQyxRQUE2RTtBQUFBLFlBQWxFdUUsVUFBQW9FLE9BQUF6SjtBQUNWLFlBQU02QyxPQUFld0MsUUFBUXFFLEdBQUdwRixRQUFRLHlCQUF5QixFQUFFO0FBRW5FLFVBQUlnQixXQUFtQnRLLEVBQUVxSyxPQUFPO0FBQ2hDLFVBQUlzQyxXQUFXO0FBQ2RyQyxpQkFBU3FFLEtBQUs7QUFFZCxjQUFNYixlQUFtQ0gsb0JBQW9COUYsSUFBSTtBQUNqRSxZQUFJLENBQUNpRyxjQUFjO0FBQ2xCO1FBQ0Q7QUFFQXhELG1CQUFXd0Q7TUFDWjtBQUVBLFlBQU1jLGlCQUFrQkMsV0FBeUQ7QUFDaEYsWUFBSSxFQUFBLEdBQUNuQixtQkFBQW9CLHFCQUFvQkQsS0FBSyxHQUFHO0FBQ2hDO1FBQ0Q7QUFFQUEsY0FBTUUsZUFBZTtBQUNyQnBILGtCQUFVQyxPQUFPQyxJQUFJLEVBQUUxRSxLQUFLO01BQzdCO0FBQ0FtSCxlQUFTMEUsR0FBRyxTQUFTSixjQUFjO0FBQ25DdEUsZUFBUzBFLEdBQUcsV0FBV0osY0FBYztJQUN0QztFQUFBLFNBQUFwSSxLQUFBO0FBQUFnSSxlQUFBL0gsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWdJLGVBQUE5SCxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJBcGlSZXRyeUZhaWxFcnJvciIsICJFcnJvciIsICJlcnJvcnMiLCAiY29uc3RydWN0b3IiLCAiY29uY2F0IiwgImxlbmd0aCIsICJuYW1lIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcnNlV2l0aFJldHJ5IiwgImFyZ3MiLCAiY291bnQiLCAicHJldmlvdXNFcnJvcnMiLCAiJCIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiZGVmZXJyZWQiLCAicGFyc2UiLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgImNhdGNoIiwgImVycm9yIiwgImNvbnNvbGUiLCAic3RhY2siLCAiU3RyaW5nIiwgIm5ld1Jlc3BvbnNlIiwgIm5ld0Vycm9yIiwgInBhcnNlV2lraXRleHQiLCAiaW1wb3J0X3Z1ZTMiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiTG9hZGluZyIsICJUaXRsZSIsICJDbG9zZSIsICJSZXRyeSIsICJFeHBhbmRDb2xsYXBzZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvcHMiLCAiX19wcm9wcyIsICJlbWl0IiwgIl9fZW1pdCIsICJjbG9zZSIsICJpbXBvcnRfdnVlMiIsICJfaG9pc3RlZF8xIiwgIl9ob2lzdGVkXzIiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMyIsICJfaG9pc3RlZF80IiwgIl9ob2lzdGVkXzUiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgIm9wZW4iLCAic3RhdGUiLCAidGl0bGUiLCAibGFiZWwiLCAicmV0cnlhYmxlIiwgImFjdGlvblR5cGUiLCAiJGV2ZW50IiwgIm9uRGVmYXVsdCIsICJvblByaW1hcnkiLCAib25SZXRyeSIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAibG9hZGluZyIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAidG9EaXNwbGF5U3RyaW5nIiwgImVycm9yTWVzc2FnZSIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiRnJhZ21lbnQiLCAicmVuZGVyTGlzdCIsICJpbmRleCIsICJjcmVhdGVDb21tZW50Vk5vZGUiLCAiaW5uZXJIVE1MIiwgIm91dHB1dCIsICJfIiwgIlZpZXdlckRpYWxvZ19kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiVmlld2VyRGlhbG9nX2RlZmF1bHQyIiwgImFzc2VydCIsICJ2YWx1ZSIsICJ2YWx1ZU5hbWUiLCAiY29udmVydENvbGxhcHNpYmxlcyIsICJodG1sIiwgInRlbXBsYXRlIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImNvbnRlbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJjb2xsYXBzaWJsZSIsICJkZXRhaWxzIiwgImNsYXNzTGlzdCIsICJjb250YWlucyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJjbGFzc05hbWUiLCAiaW5jbHVkZXMiLCAiYWRkIiwgImVyciIsICJlIiwgImYiLCAiX2l0ZXJhdG9yMyIsICJhdHRyaWJ1dGVzIiwgIl9zdGVwMyIsICJhdHRyaWJ1dGUiLCAic2V0QXR0cmlidXRlIiwgInN1bW1hcnkiLCAiaGVhZGluZyIsICJxdWVyeVNlbGVjdG9yIiwgImZpcnN0Q2hpbGQiLCAiYXBwZW5kIiwgInJlbW92ZSIsICJ0ZXh0Q29udGVudCIsICJjaGlsZE5vZGVzIiwgInJlcGxhY2VXaXRoIiwgInZpZXdlck1hcCIsICJNYXAiLCAiZ2V0Vmlld2VyIiwgIiRib2R5IiwgImhhc2giLCAiaGFzIiwgInN0b3JlZFZpZXdlciIsICJnZXQiLCAiJHRhcmdldEVsZW1lbnQiLCAiZmluZCIsICJ3Z1BhZ2VOYW1lIiwgIndnVXNlclZhcmlhbnQiLCAibXciLCAiY29uZmlnIiwgIk5vdGVUQVZpZXdlciIsICJhcHAiLCAicm9vdCIsICJkYXRhSXNMb2FkZWQiLCAiZXhlY3V0ZVByb21pc2UiLCAibm90ZVRBUGFyc2VUZXh0IiwgInJlYWN0aXZlIiwgImNyZWF0ZUFwcCIsICJkb0V4ZWN1dGVXcmFwIiwgIm1vdW50IiwgImRlc3Ryb3kiLCAidW5tb3VudCIsICJnZXROb3RlVEFQYXJzZVRleHQiLCAiJG5vdGVUQXRpdGxlIiwgImFjdHVhbFRpdGxlIiwgInJlcGxhY2UiLCAid2lraXRleHQiLCAidGl0bGVEZWZlcnJlZCIsICJ0aXRsZUNvbnYiLCAiYXR0ciIsICJ0aXRsZURlc2MiLCAidmFyaWFudCIsICJyZXN1bHRIdG1sIiwgIiRtdWx0aVRpdGxlIiwgInBhcnNlSFRNTCIsICJ0ZXh0VmFyaWFudCIsICJ2YXJpYW50VGV4dCIsICJfaXRlcmF0b3I0IiwgImNoaWxkcmVuIiwgIl9zdGVwNCIsICJlbGVtZW50IiwgIiRlbGVtZW50IiwgInRleHQiLCAidHJpbSIsICJ0ZXh0VmFyaWFudEFycmF5IiwgInRpdGxlQ29udmVydGVkIiwgIm11bHRpVGl0bGUiLCAiX2kiLCAiX09iamVjdCR2YWx1ZXMiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJ2YXJpYW50cyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJ2YXJpYW50c05hbWUiLCAibWFwIiwgImpvaW4iLCAidmFyaWFudFRpdGxlRGVzYyIsICJzdWJJdGVtU2VwYXJhdG9yIiwgIiRub3RlVEFncm91cHMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiJG5vdGVUQWxvY2FsIiwgIiRub3RlVEFsb2NhbHMiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAibG9jYWxEZXNjIiwgImxvY2FsQ29udiIsICJkb0V4ZWN1dGUiLCAicGFyc2VkSHRtbCIsICJ0b1N0cmluZyIsICJhbHdheXMiLCAidmlld2VyIiwgInNldCIsICJyZXNldEFsbFZpZXdlciIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJjbGVhciIsICJwb3J0bGV0SWQiLCAiaW5pdEdsb2JhbE1ldGhvZHMiLCAiZ2xvYmFsTWV0aG9kcyIsICJpbml0IiwgImRlSW5pdCIsICJza2luIiwgIiRub3RlVEFUYWIiLCAibm90ZVRBVGFiIiwgInV0aWwiLCAiYWRkUG9ydGxldCIsICJyZW1vdmVDbGFzcyIsICJhZGRDbGFzcyIsICJhZnRlciIsICJlbXB0eSIsICJoaWRlUG9ydGxldCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2VuZXJhdGVQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJhZGRQb3J0bGV0TGluayIsICIkcG9ydGxldExpbmsiLCAibGluayIsICJsYWJlbHMiLCAiX2kyIiwgIl9sYWJlbHMiLCAic3BhbiIsICJob29rIiwgIm5vdGVUQSIsICIkY29udGVudCIsICJwYXJlbnRzIiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgImlkIiwgImhpZGUiLCAib3BlbmVyTGlzdGVuZXIiLCAiZXZlbnQiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJvbiJdCn0K
