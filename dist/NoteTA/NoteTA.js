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
      const heading = collapsible.querySelector(":scope > .mw-collapsible-heading, :scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > h6, :scope > dl");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHMiLCAic3JjL05vdGVUQS9vcHRpb25zLmpzb24iLCAic3JjL05vdGVUQS9tb2R1bGVzL2FwaS50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvcGFyc2VXaWtpdGV4dC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvdmlld2VyLnRzIiwgImRpc3QvTm90ZVRBL3NyYy9Ob3RlVEEvbW9kdWxlcy9WaWV3ZXJEaWFsb2cudnVlIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxOb3RlVEFcXG1vZHVsZXNcXFZpZXdlckRpYWxvZy52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvTm90ZVRBL21vZHVsZXMvVmlld2VyRGlhbG9nLnZ1ZSIsICJzcmMvTm90ZVRBL21vZHVsZXMvdXRpbC9hc3NlcnQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvY29udmVydENvbGxhcHNpYmxlLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0Vmlld01hcC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdEdsb2JhbE1ldGhvZHMudHMiLCAic3JjL05vdGVUQS9Ob3RlVEEudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVQb3J0bGV0TGluay50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY2xhc3MgQXBpUmV0cnlGYWlsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHB1YmxpYyByZWFkb25seSBlcnJvcnM6IHN0cmluZ1tdO1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcihlcnJvcnM6IHN0cmluZ1tdKSB7XG5cdFx0c3VwZXIoYEFwaSBjYWxscyBmYWlsZWQgJHtlcnJvcnMubGVuZ3RofSB0aW1lKHMpIGluIGEgcm93LmApO1xuXHRcdHRoaXMubmFtZSA9ICdBcGlSZXRyeUZhaWxFcnJvcic7XG5cdFx0dGhpcy5lcnJvcnMgPSBbLi4uZXJyb3JzXTtcblx0fVxufVxuXG5leHBvcnQge0FwaVJldHJ5RmFpbEVycm9yfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImltcG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fSBmcm9tICcuL3BhcnNlV2lraXRleHQnO1xuaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcCwgcmVhY3RpdmV9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IE5vdGVUQURpYWxvZyBmcm9tICcuL1ZpZXdlckRpYWxvZy52dWUnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJy4vdXRpbC9hc3NlcnQnO1xuaW1wb3J0IHtjb252ZXJ0Q29sbGFwc2libGVzfSBmcm9tICcuL3V0aWwvY29udmVydENvbGxhcHNpYmxlLnRzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dmlld2VyTWFwfSBmcm9tICcuL2luaXRWaWV3TWFwJztcblxuaW50ZXJmYWNlIFZpZXdlclN0YXRlIHtcblx0b3BlbjogYm9vbGVhbjtcblx0bG9hZGluZzogYm9vbGVhbjtcblx0b3V0cHV0OiBzdHJpbmc7XG5cdGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXHRlcnJvcnM6IHN0cmluZ1tdO1xuXHRyZXRyeWFibGU6IGJvb2xlYW47XG59XG5cbmNvbnN0IGdldFZpZXdlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4sIGhhc2g6IHN0cmluZyk6IHR5cGVvZiB2aWV3ZXIgPT4ge1xuXHRpZiAodmlld2VyTWFwLmhhcyhoYXNoKSkge1xuXHRcdGNvbnN0IHN0b3JlZFZpZXdlciA9IHZpZXdlck1hcC5nZXQoaGFzaCk7XG5cdFx0YXNzZXJ0KHN0b3JlZFZpZXdlciwgJ3ZpZXdlcicpO1xuXG5cdFx0cmV0dXJuIHN0b3JlZFZpZXdlcjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXRFbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKGAjbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdldCBFbGVtZW50IFwiI25vdGVUQS0ke2hhc2h9XCIuYCk7XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y2xhc3MgTm90ZVRBVmlld2VyIHtcblx0XHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBWaWV3ZXJTdGF0ZTtcblx0XHRwcml2YXRlIHJlYWRvbmx5IGFwcDogVnVlQXBwPEVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgcm9vdDogSFRNTEVsZW1lbnQ7XG5cdFx0cHJpdmF0ZSBkYXRhSXNMb2FkZWQ6IGJvb2xlYW47XG5cdFx0cHJpdmF0ZSBleGVjdXRlUHJvbWlzZT86IEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPjtcblx0XHRwcml2YXRlIHN0YXRpYyBub3RlVEFQYXJzZVRleHQ6IHN0cmluZztcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHRoaXMuc3RhdGUgPSByZWFjdGl2ZTxWaWV3ZXJTdGF0ZT4oe1xuXHRcdFx0XHRvcGVuOiBmYWxzZSxcblx0XHRcdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0XHRcdG91dHB1dDogJycsXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogJycsXG5cdFx0XHRcdGVycm9yczogW10sXG5cdFx0XHRcdHJldHJ5YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdCRib2R5LmFwcGVuZCh0aGlzLnJvb3QpO1xuXHRcdFx0dGhpcy5hcHAgPSBjcmVhdGVBcHAoTm90ZVRBRGlhbG9nLCB7XG5cdFx0XHRcdHN0YXRlOiB0aGlzLnN0YXRlLFxuXHRcdFx0XHQnb25VcGRhdGU6b3Blbic6IChvcGVuOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5vcGVuID0gb3Blbjtcblx0XHRcdFx0fSxcblx0XHRcdFx0b25SZXRyeTogKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmFwcC5tb3VudCh0aGlzLnJvb3QpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBvcGVuKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5zdGF0ZS5vcGVuID0gdHJ1ZTtcblx0XHRcdHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5hcHAudW5tb3VudCgpO1xuXHRcdFx0dGhpcy5yb290LnJlbW92ZSgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGdldE5vdGVUQVBhcnNlVGV4dCgpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+IHtcblx0XHRcdGlmIChOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPHN0cmluZz4oKS5yZXNvbHZlKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkbm90ZVRBdGl0bGU6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtdGl0bGUnKTtcblx0XHRcdGNvbnN0IGFjdHVhbFRpdGxlOiBzdHJpbmcgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0XHRcdGNvbnN0IHRpdGxlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHRpZiAoJG5vdGVUQXRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCB0aXRsZUNvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdGFzc2VydCh0aXRsZUNvbnYsICd0aXRsZUNvbnYnKTtcblxuXHRcdFx0XHRsZXQgdGl0bGVEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRpZiAodGl0bGVEZXNjKSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gYO+8iCR7dGl0bGVEZXNjfe+8iWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOaJi+W3pei9rOaNol1dXFxuJztcblx0XHRcdFx0d2lraXRleHQgKz0gYCog6L2s5o2i5qCH6aKY5Li677yaLXtEfCR7dGl0bGVDb252fX0tJHt0aXRsZURlc2N9XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gYCog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote3wke3RpdGxlQ29udn19LVxcbmA7XG5cblx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlV2lraXRleHQoYHt7bm90ZVRBL211bHRpdGl0bGV8JHthY3R1YWxUaXRsZX19fWAsIHtcblx0XHRcdFx0XHR0aXRsZTogYWN0dWFsVGl0bGUsXG5cdFx0XHRcdFx0dmFyaWFudDogJ3poJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbigocmVzdWx0SHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRtdWx0aVRpdGxlOiBKUXVlcnkgPSAkKCQucGFyc2VIVE1MKHJlc3VsdEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSkpLmZpbmQoXG5cdFx0XHRcdFx0XHRcdCcubm90ZVRBLW11bHRpdGl0bGUnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKCRtdWx0aVRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlodbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOWPr+iDvee7j+i/h+i9rOaNol1dXFxuKiDovazmjaLmoIfpopjkuLrvvJonO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudFRleHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bGw+ID0ge307XG5cblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRtdWx0aVRpdGxlLmNoaWxkcmVuKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1tdWx0aXRpdGxlLXZhcmlhbnQnKTtcblx0XHRcdFx0XHRcdFx0XHRhc3NlcnQodmFyaWFudCwgJ3ZhcmlhbnQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSB0ZXh0O1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFZhcmlhbnRBcnJheTogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dFZhcmlhbnRBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRBcnJheVt0ZXh0VmFyaWFudEFycmF5Lmxlbmd0aF0gPSB2YXJpYW50O1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0VmFyaWFudFt0ZXh0XSA9IFt2YXJpYW50XTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZUNvbnZlcnRlZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHZhcmlhbnRUZXh0W3dnVXNlclZhcmlhbnQgYXMgc3RyaW5nXTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBtdWx0aVRpdGxlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHRleHQgb2YgT2JqZWN0LnZhbHVlcyh2YXJpYW50VGV4dCkpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICghdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzTmFtZTogc3RyaW5nID0gdmFyaWFudHNcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhcmlhbnQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLXtSfHt7TWVkaWFXaWtpOlZhcmlhbnRuYW1lLSR7dmFyaWFudH19fX0tYClcblx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCfjgIEnKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50VGl0bGVEZXNjOiBzdHJpbmcgPSBgJHt2YXJpYW50c05hbWV977yaLXtSfCR7dGV4dH19LWA7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFtdWx0aVRpdGxlLmluY2x1ZGVzKHZhcmlhbnRUaXRsZURlc2MpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtdWx0aVRpdGxlW211bHRpVGl0bGUubGVuZ3RoXSA9IHZhcmlhbnRUaXRsZURlc2M7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViSXRlbVNlcGFyYXRvcjogc3RyaW5nID0gJ1xcbioqICc7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAke3N1Ykl0ZW1TZXBhcmF0b3J9JHttdWx0aVRpdGxlLmpvaW4oc3ViSXRlbVNlcGFyYXRvcil9YDtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYFxcbiog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote1J8JHt0aXRsZUNvbnZlcnRlZH19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0dGl0bGVEZWZlcnJlZFxuXHRcdFx0XHQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWdyb3VwczogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1ncm91cCA+ICpbZGF0YS1ub3RldGEtZ3JvdXBdJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFncm91cHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0c3dpdGNoICgkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICd0ZW1wbGF0ZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ21vZHVsZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7I2ludm9rZTpDR3JvdXBWaWV3ZXJ8ZGlhbG9nfCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacrOaWh+S9v+eUqOeahOWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3lsJrmnKrliJvlu7pcXG5gO1xuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIHt7ZWRpdHxNb2R1bGU6Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX185Yib5bu65YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAnX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKrnn6XlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5p2l5rqQ4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKX3igJ1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbDogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1sb2NhbCcpO1xuXHRcdFx0XHRcdGlmICgkbm90ZVRBbG9jYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzlhajmlofmiYvlt6XovazmjaJdXVxcbic7XG5cblx0XHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbHMgPSAkbm90ZVRBbG9jYWwuY2hpbGRyZW4oJypbZGF0YS1ub3RldGEtY29kZV0nKTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBbG9jYWxzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdGxldCBsb2NhbERlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0XHRcdFx0aWYgKGxvY2FsRGVzYykge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9IGDvvIgke2xvY2FsRGVzY33vvIlgO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9ICcnO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbG9jYWxDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIC17RHwke2xvY2FsQ29udn19LSR7bG9jYWxEZXNjfeW9k+WJjeaYvuekuuS4uu+8mi17JHtsb2NhbENvbnZ9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICd7e25vdGVUQS9mb290ZXJ9fVxcbic7XG5cblx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0ID0gd2lraXRleHQ7XG5cblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUod2lraXRleHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZSgpOiBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4ge1xuXHRcdFx0aWYgKHRoaXMuZGF0YUlzTG9hZGVkKSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpLnJlc29sdmUoKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXHRcdFx0dGhpcy5zdGF0ZS5sb2FkaW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlLmVycm9ycyA9IFtdO1xuXHRcdFx0dGhpcy5zdGF0ZS5yZXRyeWFibGUgPSBmYWxzZTtcblxuXHRcdFx0Tm90ZVRBVmlld2VyLmdldE5vdGVUQVBhcnNlVGV4dCgpXG5cdFx0XHRcdC50aGVuKCh3aWtpdGV4dDogQXBpUmVzcG9uc2UpID0+XG5cdFx0XHRcdFx0cGFyc2VXaWtpdGV4dCh3aWtpdGV4dCBhcyBBcGlQYXJzZVJlc3BvbnNlLCB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ1RlbXBsYXRlOkNHcm91cC8tJyxcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IHdnVXNlclZhcmlhbnQgYXMgc3RyaW5nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4oKHBhcnNlZEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5vdXRwdXQgPSBjb252ZXJ0Q29sbGFwc2libGVzKHBhcnNlZEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSk7XG5cdFx0XHRcdFx0dGhpcy5kYXRhSXNMb2FkZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShwYXJzZWRIdG1sKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IgfCBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEFwaVJldHJ5RmFpbEVycm9yKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSA9IGdldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0L1xcJDEvZyxcblx0XHRcdFx0XHRcdFx0ZXJyb3IuZXJyb3JzLmxlbmd0aC50b1N0cmluZygpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5lcnJvcnMgPSBlcnJvci5lcnJvcnM7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnJldHJ5YWJsZSA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlID0gU3RyaW5nKGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZVdyYXAoKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy5kYXRhSXNMb2FkZWQgfHwgdGhpcy5leGVjdXRlUHJvbWlzZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZXhlY3V0ZVByb21pc2UgPSB0aGlzLmRvRXhlY3V0ZSgpO1xuXHRcdFx0dGhpcy5leGVjdXRlUHJvbWlzZS5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRkZWxldGUgdGhpcy5leGVjdXRlUHJvbWlzZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHZpZXdlcjogTm90ZVRBVmlld2VyID0gbmV3IE5vdGVUQVZpZXdlcigpO1xuXHR2aWV3ZXJNYXAuc2V0KGhhc2gsIHZpZXdlcik7XG5cblx0cmV0dXJuIHZpZXdlcjtcbn07XG5cbmNvbnN0IHJlc2V0QWxsVmlld2VyID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHZpZXdlciBvZiB2aWV3ZXJNYXAudmFsdWVzKCkpIHtcblx0XHR2aWV3ZXIuZGVzdHJveSgpO1xuXHR9XG5cdHZpZXdlck1hcC5jbGVhcigpO1xufTtcblxuZXhwb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhEaWFsb2d9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0c3RhdGU6IHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGxvYWRpbmc6IGJvb2xlYW47XG5cdFx0b3V0cHV0OiBzdHJpbmc7XG5cdFx0ZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cdFx0ZXJyb3JzOiBzdHJpbmdbXTtcblx0XHRyZXRyeWFibGU6IGJvb2xlYW47XG5cdH07XG5cdG9uUmV0cnk6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbb3BlbjogYm9vbGVhbl07XG59PigpO1xuXG5jb25zdCBjbG9zZSA9ICgpOiB2b2lkID0+IHtcblx0ZW1pdCgndXBkYXRlOm9wZW4nLCBmYWxzZSk7XG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1kaWFsb2dcblx0XHQ6b3Blbj1cInN0YXRlLm9wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ1RpdGxlJylcIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cIntsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKX1cIlxuXHRcdDpwcmltYXJ5LWFjdGlvbj1cInN0YXRlLnJldHJ5YWJsZSA/IHtsYWJlbDogZ2V0TWVzc2FnZSgnUmV0cnknKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJ30gOiB1bmRlZmluZWRcIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiZW1pdCgndXBkYXRlOm9wZW4nLCAkZXZlbnQpXCJcblx0XHRAZGVmYXVsdD1cImNsb3NlXCJcblx0XHRAcHJpbWFyeT1cInByb3BzLm9uUmV0cnlcIlxuXHQ+XG5cdFx0PHAgdi1pZj1cInN0YXRlLmxvYWRpbmdcIj57eyBnZXRNZXNzYWdlKCdMb2FkaW5nJykgfX08L3A+XG5cdFx0PGRpdiB2LWVsc2UtaWY9XCJzdGF0ZS5lcnJvck1lc3NhZ2VcIiBjbGFzcz1cIngtbm90ZVRBLXZpZXdlci1vdXRwdXRcIj5cblx0XHRcdDxwIGNsYXNzPVwiZXJyb3JcIj57eyBzdGF0ZS5lcnJvck1lc3NhZ2UgfX08L3A+XG5cdFx0XHQ8b2wgdi1pZj1cInN0YXRlLmVycm9ycy5sZW5ndGhcIj5cblx0XHRcdFx0PGxpIHYtZm9yPVwiKGVycm9yLCBpbmRleCkgaW4gc3RhdGUuZXJyb3JzXCIgOmtleT1cImluZGV4XCI+XG5cdFx0XHRcdFx0e3sgZXJyb3IgfX1cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvb2w+XG5cdFx0PC9kaXY+XG5cdFx0PCEtLSBNZWRpYVdpa2kncyBwYXJzZXIgcmV0dXJucyBzYW5pdGl6ZWQgSFRNTCBmb3IgdGhpcyBvdXRwdXQuIC0tPlxuXHRcdDwhLS0gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby12LWh0bWwgLS0+XG5cdFx0PGRpdiB2LWVsc2UgY2xhc3M9XCJ4LW5vdGVUQS12aWV3ZXItb3V0cHV0XCIgdi1odG1sPVwic3RhdGUub3V0cHV0XCI+PC9kaXY+XG5cdDwvY2R4LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uLy4uL3ZhcmlhYmxlcy5sZXNzJztcblxuLngtbm90ZVRBLXZpZXdlci1vdXRwdXQge1xuXHQuZXJyb3Ige1xuXHRcdGNvbG9yOiBAY29sb3ItLWVycm9yO1xuXHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFwaVJldHJ5RmFpbEVycm9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FwaSBjYWxscyBmYWlsZWQgJDEgdGltZShzKSBpbiBhIHJvdy4gRXJyb3JzOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAnQXBpIOiwg+eUqOi/nue7reWksei0pSAkMSDmrKHvvIwkMSDmrKHosIPnlKjnmoTplJnor6/liIbliKvkuLrvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAnQXBpIOiqv+eUqOmAo+e6jOWkseaVlyAkMSDmrKHvvIwkMSDmrKHoqr/nlKjnmoTpjK/oqqTliIbliKXngrrvvJonLFxuXHRcdH0pLFxuXHRcdExvYWRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliqDovb3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo6LyJ5YWl4oCm4oCmJyxcblx0XHR9KSxcblx0XHRUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOb3RlVEEnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X6K+N6L2s5o2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wtl+ipnui9ieaPmycsXG5cdFx0fSksXG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6ZetJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWiScsXG5cdFx0fSksXG5cdFx0UmV0cnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmV0cnknLFxuXHRcdFx0J3poLWhhbnMnOiAn6YeN6K+VJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeippicsXG5cdFx0fSksXG5cdFx0RXhwYW5kQ29sbGFwc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBvciBoaWRlIGNvbnRlbnQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S6L+makOiXj+WGheWuuScsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLov6Zqx6JeP5YWn5a65Jyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBrZXk6IDAgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHtcbiAga2V5OiAxLFxuICBjbGFzczogXCJ4LW5vdGVUQS12aWV3ZXItb3V0cHV0XCJcbn1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcImVycm9yXCIgfVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsga2V5OiAwIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSBbXCJpbm5lckhUTUxcIl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICBvcGVuOiAkcHJvcHMuc3RhdGUub3BlbixcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ1RpdGxlJyksXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDbG9zZScpfSxcbiAgICBcInByaW1hcnktYWN0aW9uXCI6ICRwcm9wcy5zdGF0ZS5yZXRyeWFibGUgPyB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdSZXRyeScpLCBhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnfSA6IHVuZGVmaW5lZCxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZSxcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCRzZXR1cC5lbWl0KCd1cGRhdGU6b3BlbicsICRldmVudCkpKSxcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZSxcbiAgICBvblByaW1hcnk6ICRzZXR1cC5wcm9wcy5vblJldHJ5XG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAoJHByb3BzLnN0YXRlLmxvYWRpbmcpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInBcIiwgX2hvaXN0ZWRfMSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnTG9hZGluZycpKSwgMSAvKiBURVhUICovKSlcbiAgICAgICAgOiAoJHByb3BzLnN0YXRlLmVycm9yTWVzc2FnZSlcbiAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF8zLCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5zdGF0ZS5lcnJvck1lc3NhZ2UpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgICAoJHByb3BzLnN0YXRlLmVycm9ycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwib2xcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRwcm9wcy5zdGF0ZS5lcnJvcnMsIChlcnJvciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImxpXCIsIHsga2V5OiBpbmRleCB9LCBfdG9EaXNwbGF5U3RyaW5nKGVycm9yKSwgMSAvKiBURVhUICovKSlcbiAgICAgICAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICAgICAgICBdKSlcbiAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgICAgICBdKSlcbiAgICAgICAgICA6IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCB7IGtleTogMiB9LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgTWVkaWFXaWtpJ3MgcGFyc2VyIHJldHVybnMgc2FuaXRpemVkIEhUTUwgZm9yIHRoaXMgb3V0cHV0LiBcIiksXG4gICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby12LWh0bWwgXCIpLFxuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ4LW5vdGVUQS12aWV3ZXItb3V0cHV0XCIsXG4gICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAkcHJvcHMuc3RhdGUub3V0cHV0XG4gICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzUpXG4gICAgICAgICAgICBdLCAyMTEyIC8qIFNUQUJMRV9GUkFHTUVOVCwgREVWX1JPT1RfRlJBR01FTlQgKi8pKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcImRlZmF1bHQtYWN0aW9uXCIsIFwicHJpbWFyeS1hY3Rpb25cIiwgXCJvblByaW1hcnlcIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXE5vdGVUQVxcXFxtb2R1bGVzXFxcXFZpZXdlckRpYWxvZy52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXE5vdGVUQVxcXFxtb2R1bGVzXFxcXFZpZXdlckRpYWxvZy52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcTm90ZVRBXFxcXG1vZHVsZXNcXFxcVmlld2VyRGlhbG9nLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXE5vdGVUQVxcXFxtb2R1bGVzXFxcXFZpZXdlckRpYWxvZy52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNzZiOTk2ZDBcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImZ1bmN0aW9uIGFzc2VydDxUPih2YWx1ZTogVCB8IHVuZGVmaW5lZCwgdmFsdWVOYW1lOiBzdHJpbmcpOiBhc3NlcnRzIHZhbHVlIHtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcihgQXNzZXJ0IEZhaWwsICR7dmFsdWVOYW1lfSA9PSBmYWxzZS5gKTtcblx0fVxufVxuXG5leHBvcnQge2Fzc2VydH07XG4iLCAiaW1wb3J0ICcuL2NvbnZlcnRDb2xsYXBzaWJsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGNvbnZlcnRDb2xsYXBzaWJsZXMgPSAoaHRtbDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Y29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXHR0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuXG5cdGZvciAoY29uc3QgY29sbGFwc2libGUgb2YgdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLm13LWNvbGxhcHNpYmxlJykpIHtcblx0XHRjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGV0YWlscycpO1xuXHRcdGRldGFpbHMub3BlbiA9ICFjb2xsYXBzaWJsZS5jbGFzc0xpc3QuY29udGFpbnMoJ213LWNvbGxhcHNlZCcpO1xuXG5cdFx0Zm9yIChjb25zdCBjbGFzc05hbWUgb2YgY29sbGFwc2libGUuY2xhc3NMaXN0KSB7XG5cdFx0XHRpZiAoIVsnbXctY29sbGFwc2libGUnLCAnbXctY29sbGFwc2VkJ10uaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRkZXRhaWxzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgY29sbGFwc2libGUuYXR0cmlidXRlcykge1xuXHRcdFx0aWYgKGF0dHJpYnV0ZS5uYW1lICE9PSAnY2xhc3MnKSB7XG5cdFx0XHRcdGRldGFpbHMuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lLCBhdHRyaWJ1dGUudmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdW1tYXJ5Jyk7XG5cdFx0Y29uc3QgaGVhZGluZyA9IGNvbGxhcHNpYmxlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnOnNjb3BlID4gLm13LWNvbGxhcHNpYmxlLWhlYWRpbmcsIDpzY29wZSA+IGgxLCA6c2NvcGUgPiBoMiwgOnNjb3BlID4gaDMsIDpzY29wZSA+IGg0LCA6c2NvcGUgPiBoNSwgOnNjb3BlID4gaDYsIDpzY29wZSA+IGRsJ1xuXHRcdCk7XG5cdFx0aWYgKGhlYWRpbmcpIHtcblx0XHRcdHdoaWxlIChoZWFkaW5nLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0c3VtbWFyeS5hcHBlbmQoaGVhZGluZy5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdGhlYWRpbmcucmVtb3ZlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1bW1hcnkudGV4dENvbnRlbnQgPSBnZXRNZXNzYWdlKCdFeHBhbmRDb2xsYXBzZScpO1xuXHRcdH1cblx0XHRkZXRhaWxzLmFwcGVuZChzdW1tYXJ5LCAuLi5jb2xsYXBzaWJsZS5jaGlsZE5vZGVzKTtcblx0XHRjb2xsYXBzaWJsZS5yZXBsYWNlV2l0aChkZXRhaWxzKTtcblx0fVxuXG5cdHJldHVybiB0ZW1wbGF0ZS5pbm5lckhUTUw7XG59O1xuXG5leHBvcnQge2NvbnZlcnRDb2xsYXBzaWJsZXN9O1xuIiwgImltcG9ydCB7dHlwZSBnZXRWaWV3ZXJ9IGZyb20gJy4vdmlld2VyJztcblxuY29uc3Qgdmlld2VyTWFwID0gbmV3IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIGdldFZpZXdlcj4+KCk7XG5cbmV4cG9ydCB7dmlld2VyTWFwfTtcbiIsICJpbXBvcnQgJy4vaW5pdEdsb2JhbE1ldGhvZHMubGVzcyc7XG5sZXQgcG9ydGxldElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IGluaXRHbG9iYWxNZXRob2RzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHR5cGVvZiBnbG9iYWxNZXRob2RzID0+IHtcblx0Y29uc3QgZ2xvYmFsTWV0aG9kczoge1xuXHRcdGluaXQoKTogdm9pZDtcblx0XHRkZUluaXQoKTogdm9pZDtcblx0fSA9IHtcblx0XHRpbml0KCkge1xuXHRcdFx0LyogZmFrZSAqL1xuXHRcdH0sXG5cdFx0ZGVJbml0KCkge1xuXHRcdFx0LyogZmFrZSAqL1xuXHRcdH0sXG5cdH07XG5cblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAndmVjdG9yJykge1xuXHRcdHBvcnRsZXRJZCA9ICdwLW5vdGVUQSc7XG5cblx0XHRsZXQgJG5vdGVUQVRhYjogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdGdsb2JhbE1ldGhvZHMuaW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICgkbm90ZVRBVGFiIHx8ICFwb3J0bGV0SWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgbm90ZVRBVGFiOiBIVE1MRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXQocG9ydGxldElkKTtcblx0XHRcdGlmICghbm90ZVRBVGFiKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRub3RlVEFUYWIgPSAkKG5vdGVUQVRhYik7XG5cdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSBhYm92ZSBjb2RlXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHQkbm90ZVRBVGFiXG5cdFx0XHRcdC5yZW1vdmVDbGFzcyhgbXctcG9ydGxldC0ke3BvcnRsZXRJZH1gKVxuXHRcdFx0XHQuYWRkQ2xhc3MoW2Btdy1wb3J0bGV0LSR7cG9ydGxldElkLnJlcGxhY2UoJ3AtJywgJycpfWAsICd2ZWN0b3ItbWVudS10YWJzJywgJ3ZlY3Rvci1tZW51LXRhYnMtbGVnYWN5J10pO1xuXHRcdFx0JGJvZHkuZmluZCgnI3AtdmFyaWFudHMnKS5hZnRlcigkbm90ZVRBVGFiKTtcblx0XHR9O1xuXHRcdGdsb2JhbE1ldGhvZHMuZGVJbml0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCEkbm90ZVRBVGFiKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRub3RlVEFUYWIuZmluZCgndWwnKS5lbXB0eSgpO1xuXHRcdFx0aWYgKHBvcnRsZXRJZCkge1xuXHRcdFx0XHRtdy51dGlsLmhpZGVQb3J0bGV0KHBvcnRsZXRJZCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fSBlbHNlIGlmIChza2luID09PSAndmVjdG9yLTIwMjInKSB7XG5cdFx0cG9ydGxldElkID0gJ3AtYXNzb2NpYXRlZC1wYWdlcyc7XG5cblx0XHRnbG9iYWxNZXRob2RzLmRlSW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdCRib2R5LmZpbmQoJ3gtbm90ZVRBLXZpZXdlcicpLnJlbW92ZSgpO1xuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZ2xvYmFsTWV0aG9kcztcbn07XG5cbmV4cG9ydCB7cG9ydGxldElkLCBpbml0R2xvYmFsTWV0aG9kc307XG4iLCAiaW1wb3J0ICcuL05vdGVUQS5sZXNzJztcbmltcG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn0gZnJvbSAnLi9tb2R1bGVzL3ZpZXdlcic7XG5pbXBvcnQge2luaXRHbG9iYWxNZXRob2RzLCBwb3J0bGV0SWR9IGZyb20gJy4vbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcyc7XG5pbXBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG5vdGVUQSgkY29udGVudCk6IHZvaWQge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkY29udGVudC5wYXJlbnRzKCdib2R5Jyk7XG5cblx0cmVzZXRBbGxWaWV3ZXIoKTtcblxuXHRjb25zdCBnbG9iYWxNZXRob2RzID0gaW5pdEdsb2JhbE1ldGhvZHMoJGJvZHkpO1xuXHRnbG9iYWxNZXRob2RzLmRlSW5pdCgpO1xuXHRnbG9iYWxNZXRob2RzLmluaXQoKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZCgnLm13LWluZGljYXRvcltpZF49bXctaW5kaWNhdG9yLW5vdGVUQS1dJykpIHtcblx0XHRjb25zdCBoYXNoOiBzdHJpbmcgPSBlbGVtZW50LmlkLnJlcGxhY2UoL15tdy1pbmRpY2F0b3Itbm90ZVRBLS8sICcnKTtcblxuXHRcdGxldCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAocG9ydGxldElkKSB7XG5cdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cblx0XHRcdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5IHwgdW5kZWZpbmVkID0gZ2VuZXJhdGVQb3J0bGV0TGluayhoYXNoKTtcblx0XHRcdGlmICghJHBvcnRsZXRMaW5rKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQkZWxlbWVudCA9ICRwb3J0bGV0TGluaztcblx0XHR9XG5cblx0XHRjb25zdCBvcGVuZXJMaXN0ZW5lciA9IChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGdldFZpZXdlcigkYm9keSwgaGFzaCkub3BlbigpO1xuXHRcdH07XG5cdFx0JGVsZW1lbnQub24oJ2NsaWNrJywgb3BlbmVyTGlzdGVuZXIpO1xuXHRcdCRlbGVtZW50Lm9uKCdrZXlkb3duJywgb3BlbmVyTGlzdGVuZXIpO1xuXHR9XG59KTtcbiIsICJpbXBvcnQgJy4vZ2VuZXJhdGVQb3J0bGV0TGluay5sZXNzJztcbmltcG9ydCB7cG9ydGxldElkfSBmcm9tICcuLi9pbml0R2xvYmFsTWV0aG9kcyc7XG5cbmNvbnN0IGdlbmVyYXRlUG9ydGxldExpbmsgPSAoaGFzaDogc3RyaW5nKTogSlF1ZXJ5IHwgdW5kZWZpbmVkID0+IHtcblx0aWYgKCFwb3J0bGV0SWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCAn5rGJL+a8oicsIGBjYS1ub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoIXBvcnRsZXRMaW5rKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHBvcnRsZXRMaW5rLmNsYXNzTGlzdC5hZGQoJ2NhLW5vdGVUQScpO1xuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluaykuYWRkQ2xhc3MoJ3gtbm90ZVRBLXZpZXdlcicpO1xuXHRjb25zdCBsaW5rID0gJHBvcnRsZXRMaW5rLmZpbmQoJ2EnKS5lbXB0eSgpWzBdO1xuXHRpZiAoIWxpbmspIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgbGFiZWxzOiBbc3RyaW5nLCBzdHJpbmddW10gPSBbXG5cdFx0WydoYW5zJywgJ+axiSddLFxuXHRcdFsnaGFudCcsICfmvKInXSxcblx0XTtcblx0Zm9yIChjb25zdCBbdmFyaWFudCwgdGV4dF0gb2YgbGFiZWxzKSB7XG5cdFx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRzcGFuLmNsYXNzTGlzdC5hZGQoJ3gtbm90ZVRBLXZpZXdlcl9fbGFiZWwnLCBgeC1ub3RlVEEtdmlld2VyX19sYWJlbC0ke3ZhcmlhbnR9YCk7XG5cdFx0c3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0bGFiZWwuYXBwZW5kKHNwYW4pO1xuXHR9XG5cdGxpbmsuYXBwZW5kKGxhYmVsKTtcblxuXHRyZXR1cm4gJHBvcnRsZXRMaW5rO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVBvcnRsZXRMaW5rfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsb0JBQU4sY0FBZ0NDLE1BQU07RUFDckJDO0VBRVRDLFlBQVlELFFBQWtCO0FBQ3BDLFVBQUEsb0JBQUFFLE9BQTBCRixPQUFPRyxRQUFNLG9CQUFBLENBQW9CO0FBQzNELFNBQUtDLE9BQU87QUFDWixTQUFLSixTQUFTLENBQUMsR0FBR0EsTUFBTTtFQUN6QjtBQUNEOztBQ1BDLElBQUFLLFVBQVc7O0FDQVosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsVUFBQVAsT0FBNEJHLE9BQU8sQ0FBRTs7QUNLekQsSUFBTUssaUJBQWlCQSxDQUN0QkMsTUFDQUMsUUFBZ0IsR0FDaEJDLGlCQUEyQixDQUFBLE1BQ087QUFDbEMsTUFBSSxDQUFDRCxPQUFPO0FBQ1gsV0FBT0UsRUFBRUMsU0FBNEIsRUFBRUMsT0FBTyxJQUFJbEIsa0JBQWtCZSxjQUFjLENBQUM7RUFDcEY7QUFFQSxRQUFNSSxXQUFXSCxFQUFFQyxTQUFzQjtBQUV6QyxPQUFLUCxJQUNIVSxNQUFNLEdBQUdQLElBQUksRUFDYlEsS0FBTUMsY0FBcUM7QUFDM0MsU0FBS0gsU0FBU0ksUUFBUUQsUUFBUTtFQUMvQixDQUFDLEVBQ0FFLE1BQU9DLFdBQWlDO0FBQ3hDQyxZQUFRRCxNQUFNQSxLQUFLO0FBRW5CLFFBQUlBLFNBQVMsT0FBT0EsVUFBVSxZQUFZLFdB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RUdvQyxNQUFNTSxLQUFLLHlDQUF5QyxDQUFBLEdBQUF1RztBQUFBLE1BQUE7QUFBMUUsU0FBQUQsV0FBQTVJLEVBQUEsR0FBQSxFQUFBNkksU0FBQUQsV0FBQTNJLEVBQUEsR0FBQUMsUUFBNkU7QUFBQSxZQUFsRXVFLFVBQUFvRSxPQUFBeko7QUFDVixZQUFNNkMsT0FBZXdDLFFBQVFxRSxHQUFHcEYsUUFBUSx5QkFBeUIsRUFBRTtBQUVuRSxVQUFJZ0IsV0FBbUJ0SyxFQUFFcUssT0FBTztBQUNoQyxVQUFJc0MsV0FBVztBQUNkckMsaUJBQVNxRSxLQUFLO0FBRWQsY0FBTWIsZUFBbUNILG9CQUFvQjlGLElBQUk7QUFDakUsWUFBSSxDQUFDaUcsY0FBYztBQUNsQjtRQUNEO0FBRUF4RCxtQkFBV3dEO01BQ1o7QUFFQSxZQUFNYyxpQkFBa0JDLFdBQXlEO0FBQ2hGLFlBQUksRUFBQSxHQUFDbkIsbUJBQUFvQixxQkFBb0JELEtBQUssR0FBRztBQUNoQztRQUNEO0FBRUFBLGNBQU1FLGVBQWU7QUFDckJwSCxrQkFBVUMsT0FBT0MsSUFBSSxFQUFFMUUsS0FBSztNQUM3QjtBQUNBbUgsZUFBUzBFLEdBQUcsU0FBU0osY0FBYztBQUNuQ3RFLGVBQVMwRSxHQUFHLFdBQVdKLGNBQWM7SUFDdEM7RUFBQSxTQUFBcEksS0FBQTtBQUFBZ0ksZUFBQS9ILEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFnSSxlQUFBOUgsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiQXBpUmV0cnlGYWlsRXJyb3IiLCAiRXJyb3IiLCAiZXJyb3JzIiwgImNvbnN0cnVjdG9yIiwgImNvbmNhdCIsICJsZW5ndGgiLCAibmFtZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJwYXJzZVdpdGhSZXRyeSIsICJhcmdzIiwgImNvdW50IiwgInByZXZpb3VzRXJyb3JzIiwgIiQiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImRlZmVycmVkIiwgInBhcnNlIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJjYXRjaCIsICJlcnJvciIsICJjb25zb2xlIiwgInN0YWNrIiwgIlN0cmluZyIsICJuZXdSZXNwb25zZSIsICJuZXdFcnJvciIsICJwYXJzZVdpa2l0ZXh0IiwgImltcG9ydF92dWUzIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgIkxvYWRpbmciLCAiVGl0bGUiLCAiQ2xvc2UiLCAiUmV0cnkiLCAiRXhwYW5kQ29sbGFwc2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAiY2xvc2UiLCAiaW1wb3J0X3Z1ZTIiLCAiX2hvaXN0ZWRfMSIsICJfaG9pc3RlZF8yIiwgImNsYXNzIiwgIl9ob2lzdGVkXzMiLCAiX2hvaXN0ZWRfNCIsICJfaG9pc3RlZF81IiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJvcGVuIiwgInN0YXRlIiwgInRpdGxlIiwgImxhYmVsIiwgInJldHJ5YWJsZSIsICJhY3Rpb25UeXBlIiwgIiRldmVudCIsICJvbkRlZmF1bHQiLCAib25QcmltYXJ5IiwgIm9uUmV0cnkiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImxvYWRpbmciLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgInRvRGlzcGxheVN0cmluZyIsICJlcnJvck1lc3NhZ2UiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgIkZyYWdtZW50IiwgInJlbmRlckxpc3QiLCAiaW5kZXgiLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgImlubmVySFRNTCIsICJvdXRwdXQiLCAiXyIsICJWaWV3ZXJEaWFsb2dfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIlZpZXdlckRpYWxvZ19kZWZhdWx0MiIsICJhc3NlcnQiLCAidmFsdWUiLCAidmFsdWVOYW1lIiwgImNvbnZlcnRDb2xsYXBzaWJsZXMiLCAiaHRtbCIsICJ0ZW1wbGF0ZSIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJjb250ZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiY29sbGFwc2libGUiLCAiZGV0YWlscyIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImFkZCIsICJlcnIiLCAiZSIsICJmIiwgIl9pdGVyYXRvcjMiLCAiYXR0cmlidXRlcyIsICJfc3RlcDMiLCAiYXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJzdW1tYXJ5IiwgImhlYWRpbmciLCAicXVlcnlTZWxlY3RvciIsICJmaXJzdENoaWxkIiwgImFwcGVuZCIsICJyZW1vdmUiLCAidGV4dENvbnRlbnQiLCAiY2hpbGROb2RlcyIsICJyZXBsYWNlV2l0aCIsICJ2aWV3ZXJNYXAiLCAiTWFwIiwgImdldFZpZXdlciIsICIkYm9keSIsICJoYXNoIiwgImhhcyIsICJzdG9yZWRWaWV3ZXIiLCAiZ2V0IiwgIiR0YXJnZXRFbGVtZW50IiwgImZpbmQiLCAid2dQYWdlTmFtZSIsICJ3Z1VzZXJWYXJpYW50IiwgIm13IiwgImNvbmZpZyIsICJOb3RlVEFWaWV3ZXIiLCAiYXBwIiwgInJvb3QiLCAiZGF0YUlzTG9hZGVkIiwgImV4ZWN1dGVQcm9taXNlIiwgIm5vdGVUQVBhcnNlVGV4dCIsICJyZWFjdGl2ZSIsICJjcmVhdGVBcHAiLCAiZG9FeGVjdXRlV3JhcCIsICJtb3VudCIsICJkZXN0cm95IiwgInVubW91bnQiLCAiZ2V0Tm90ZVRBUGFyc2VUZXh0IiwgIiRub3RlVEF0aXRsZSIsICJhY3R1YWxUaXRsZSIsICJyZXBsYWNlIiwgIndpa2l0ZXh0IiwgInRpdGxlRGVmZXJyZWQiLCAidGl0bGVDb252IiwgImF0dHIiLCAidGl0bGVEZXNjIiwgInZhcmlhbnQiLCAicmVzdWx0SHRtbCIsICIkbXVsdGlUaXRsZSIsICJwYXJzZUhUTUwiLCAidGV4dFZhcmlhbnQiLCAidmFyaWFudFRleHQiLCAiX2l0ZXJhdG9yNCIsICJjaGlsZHJlbiIsICJfc3RlcDQiLCAiZWxlbWVudCIsICIkZWxlbWVudCIsICJ0ZXh0IiwgInRyaW0iLCAidGV4dFZhcmlhbnRBcnJheSIsICJ0aXRsZUNvbnZlcnRlZCIsICJtdWx0aVRpdGxlIiwgIl9pIiwgIl9PYmplY3QkdmFsdWVzIiwgIk9iamVjdCIsICJ2YWx1ZXMiLCAidmFyaWFudHMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAidmFyaWFudHNOYW1lIiwgIm1hcCIsICJqb2luIiwgInZhcmlhbnRUaXRsZURlc2MiLCAic3ViSXRlbVNlcGFyYXRvciIsICIkbm90ZVRBZ3JvdXBzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIiRub3RlVEFsb2NhbCIsICIkbm90ZVRBbG9jYWxzIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImxvY2FsRGVzYyIsICJsb2NhbENvbnYiLCAiZG9FeGVjdXRlIiwgInBhcnNlZEh0bWwiLCAidG9TdHJpbmciLCAiYWx3YXlzIiwgInZpZXdlciIsICJzZXQiLCAicmVzZXRBbGxWaWV3ZXIiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiY2xlYXIiLCAicG9ydGxldElkIiwgImluaXRHbG9iYWxNZXRob2RzIiwgImdsb2JhbE1ldGhvZHMiLCAiaW5pdCIsICJkZUluaXQiLCAic2tpbiIsICIkbm90ZVRBVGFiIiwgIm5vdGVUQVRhYiIsICJ1dGlsIiwgImFkZFBvcnRsZXQiLCAicmVtb3ZlQ2xhc3MiLCAiYWRkQ2xhc3MiLCAiYWZ0ZXIiLCAiZW1wdHkiLCAiaGlkZVBvcnRsZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdlbmVyYXRlUG9ydGxldExpbmsiLCAicG9ydGxldExpbmsiLCAiYWRkUG9ydGxldExpbmsiLCAiJHBvcnRsZXRMaW5rIiwgImxpbmsiLCAibGFiZWxzIiwgIl9pMiIsICJfbGFiZWxzIiwgInNwYW4iLCAiaG9vayIsICJub3RlVEEiLCAiJGNvbnRlbnQiLCAicGFyZW50cyIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJpZCIsICJoaWRlIiwgIm9wZW5lckxpc3RlbmVyIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAicHJldmVudERlZmF1bHQiLCAib24iXQp9Cg==
