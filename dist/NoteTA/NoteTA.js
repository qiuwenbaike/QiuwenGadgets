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
var ApiRetryFailError = class extends Error {
  errors;
  constructor(errors) {
    super(`Api calls failed ${errors.length} time(s) in a row.`);
    this.name = "ApiRetryFailError";
    this.errors = [...errors];
  }
};
//! src/NoteTA/options.json
var version = "2.0";
//! src/NoteTA/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`NoteTA/${version}`);
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
    throw new Error(`Assert Fail, ${valueName} == false.`);
  }
}
//! src/NoteTA/modules/util/convertCollapsibles.ts
var convertCollapsibles = (html) => {
  const template = document.createElement("template");
  template.innerHTML = html;
  for (const collapsible of template.content.querySelectorAll(".mw-collapsible")) {
    const details = document.createElement("details");
    details.open = !collapsible.classList.contains("mw-collapsed");
    for (const className of collapsible.classList) {
      if (!["mw-collapsible", "mw-collapsed"].includes(className)) {
        details.classList.add(className);
      }
    }
    for (const attribute of collapsible.attributes) {
      if (attribute.name !== "class") {
        details.setAttribute(attribute.name, attribute.value);
      }
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
  const $targetElement = $body.find(`#noteTA-${hash}`);
  if (!$targetElement.length) {
    throw new Error(`Can't get Element "#noteTA-${hash}".`);
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
          titleDesc = `（${titleDesc}）`;
        } else {
          titleDesc = "";
        }
        wikitext += `<span style="float:right">{{edit|${actualTitle}|section=0}}</span>
`;
        wikitext += "; 本文使用[[Help:字词转换处理|标题手工转换]]\n";
        wikitext += `* 转换标题为：-{D|${titleConv}}-${titleDesc}
`;
        wikitext += `* 实际标题为：-{R|${actualTitle}}-；当前显示为：-{|${titleConv}}-
`;
        void titleDeferred.resolve();
      } else {
        parseWikitext(`{{noteTA/multititle|${actualTitle}}}`, {
          title: actualTitle,
          variant: "zh"
        }).then((resultHtml) => {
          const $multiTitle = $($.parseHTML(resultHtml)).find(".noteTA-multititle");
          if ($multiTitle.length) {
            wikitext += "; 本文[[Help:字词转换处理|标题可能经过转换]]\n* 转换标题为：";
            const textVariant = {};
            const variantText = {};
            for (const element of $multiTitle.children()) {
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
            const titleConverted = variantText[wgUserVariant];
            const multiTitle = [];
            for (const text of Object.values(variantText)) {
              if (text === null || text === void 0) {
                continue;
              }
              const variants = textVariant[text];
              if (!variants) {
                continue;
              }
              for (const variant of variants) {
                variantText[variant] = null;
              }
              const variantsName = variants.map((variant) => `-{R|{{MediaWiki:Variantname-${variant}}}}-`).join("、");
              const variantTitleDesc = `${variantsName}：-{R|${text}}-`;
              if (!multiTitle.includes(variantTitleDesc)) {
                multiTitle[multiTitle.length] = variantTitleDesc;
              }
            }
            const subItemSeparator = "\n** ";
            wikitext += `${subItemSeparator}${multiTitle.join(subItemSeparator)}`;
            wikitext += `
* 实际标题为：-{R|${actualTitle}}-；当前显示为：-{R|${titleConverted}}-
`;
          }
          void titleDeferred.resolve();
        }).catch((error) => {
          void titleDeferred.reject(error);
        });
      }
      const deferred = $.Deferred();
      titleDeferred.then(() => {
        const $noteTAgroups = $targetElement.find(".noteTA-group > *[data-noteta-group]");
        for (const element of $noteTAgroups) {
          const $element = $(element);
          switch ($element.attr("data-noteta-group-source")) {
            case "template":
              wikitext += `{{CGroup/${$element.attr("data-noteta-group")}}}
`;
              break;
            case "module":
              wikitext += `{{#invoke:CGroupViewer|dialog|${$element.attr("data-noteta-group")}}}
`;
              break;
            case "none":
              wikitext += `; 本文使用的公共转换组“${$element.attr("data-noteta-group")}”尚未创建
`;
              wikitext += `* {{edit|Module:CGroup/${$element.attr("data-noteta-group")}|创建公共转换组“${$element.attr("data-noteta-group")}”}}
`;
              break;
            default:
              wikitext += `; 未知公共转换组“${$element.attr("data-noteta-group")}”来源“${$element.attr("data-noteta-group-source")}”
`;
          }
        }
        const $noteTAlocal = $targetElement.find(".noteTA-local");
        if ($noteTAlocal.length) {
          wikitext += `<span style="float:right">{{edit|${actualTitle}|section=0}}</span>
`;
          wikitext += "; 本文使用[[Help:字词转换处理|全文手工转换]]\n";
          const $noteTAlocals = $noteTAlocal.children("*[data-noteta-code]");
          for (const element of $noteTAlocals) {
            const $element = $(element);
            let localDesc = $element.attr("data-noteta-desc");
            if (localDesc) {
              localDesc = `（${localDesc}）`;
            } else {
              localDesc = "";
            }
            const localConv = $element.attr("data-noteta-code");
            wikitext += `* -{D|${localConv}}-${localDesc}当前显示为：-{${localConv}}-
`;
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
  for (const viewer of viewerMap.values()) {
    viewer.destroy();
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
      $noteTATab.removeClass(`mw-portlet-${portletId}`).addClass([`mw-portlet-${portletId.replace("p-", "")}`, "vector-menu-tabs", "vector-menu-tabs-legacy"]);
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
  const portletLink = mw.util.addPortletLink(portletId, "#", "汉/漢", `ca-noteTA-${hash}`);
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
  for (const [variant, text] of labels) {
    const span = document.createElement("span");
    span.classList.add("x-noteTA-viewer__label", `x-noteTA-viewer__label-${variant}`);
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
  for (const element of $body.find(".mw-indicator[id^=mw-indicator-noteTA-]")) {
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
});

})();

/* </nowiki> */

