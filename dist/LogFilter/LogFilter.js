/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-rightsfilter.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LogFilter}
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

// dist/LogFilter/LogFilter.js
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
//! src/LogFilter/options.json
var options_exports = {};
__export(options_exports, {
  configKey: () => configKey,
  default: () => options_default
});
var configKey = "gadget-LogFilter__Initialized";
var options_default = {
  configKey
};
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    rightsLogOnly: {
      type: Boolean,
      required: true
    },
    instructions: {
      type: String,
      required: true
    },
    initialOptions: {
      type: Object,
      required: true
    },
    filterAtStartup: {
      type: Boolean,
      required: true
    },
    highlightAtStartup: {
      type: Boolean,
      required: true
    },
    onFilter: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const type = (0, import_vue2.ref)(props.initialOptions.type);
    const invert = (0, import_vue2.ref)(props.initialOptions.invert);
    const search = (0, import_vue2.ref)(props.initialOptions.search);
    const caseSensitive = (0, import_vue2.ref)(props.initialOptions.caseSensitive);
    const lastClickedHighlight = (0, import_vue2.ref)(false);
    const typeItems = [{
      value: "0",
      label: mw.message("filter-option-added").plain()
    }, {
      value: "1",
      label: mw.message("filter-option-removed").plain()
    }, {
      value: "2",
      label: mw.message("filter-option-added-or-removed").plain()
    }, {
      value: "3",
      label: mw.message("filter-option-added-removed-static").plain()
    }];
    const msg = (key) => mw.message(`filter-${key}`).plain();
    const filter = (highlight) => {
      props.onFilter({
        type: type.value ?? "0",
        invert: invert.value,
        search: search.value,
        caseSensitive: caseSensitive.value
      }, !!(highlight || lastClickedHighlight.value));
    };
    const chooseHighlight = (highlight) => {
      lastClickedHighlight.value = highlight;
      filter();
    };
    (0, import_vue2.onMounted)(() => {
      var _document$getElementB;
      (_document$getElementB = document.getElementById("log-filter__regex")) === null || _document$getElementB === void 0 || _document$getElementB.focus();
      if (props.filterAtStartup) {
        filter(props.highlightAtStartup);
      }
    });
    const __returned__ = {
      props,
      type,
      invert,
      search,
      caseSensitive,
      lastClickedHighlight,
      typeItems,
      msg,
      filter,
      chooseHighlight,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxCheckbox() {
        return import_codex.CdxCheckbox;
      },
      get CdxField() {
        return import_codex.CdxField;
      },
      get CdxSelect() {
        return import_codex.CdxSelect;
      },
      get CdxTextInput() {
        return import_codex.CdxTextInput;
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
  id: "rightsFilter",
  class: "log-filter"
};
var _hoisted_2 = {
  class: "log-filter__instructions"
};
var _hoisted_3 = {
  class: "log-filter__checkboxes"
};
var _hoisted_4 = {
  class: "log-filter__buttons"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("fieldset", _hoisted_1, [(0, import_vue3.createElementVNode)(
    "legend",
    null,
    (0, import_vue3.toDisplayString)($setup.msg("legend")),
    1
    /* TEXT */
  ), (0, import_vue3.createElementVNode)(
    "div",
    _hoisted_2,
    (0, import_vue3.toDisplayString)($props.instructions),
    1
    /* TEXT */
  ), $props.rightsLogOnly ? ((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxField"], {
    key: 0,
    class: "log-filter__select"
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxSelect"], {
      id: "log-filter__select",
      selected: $setup.type,
      "onUpdate:selected": [_cache[0] || (_cache[0] = ($event) => $setup.type = $event), _cache[1] || (_cache[1] = ($event) => $setup.filter())],
      "aria-label": $setup.msg("legend"),
      "menu-items": $setup.typeItems
    }, null, 8, ["selected", "aria-label"])]),
    _: 1
    /* STABLE */
  })) : (0, import_vue3.createCommentVNode)("v-if", true), (0, import_vue3.createVNode)($setup["CdxField"], {
    class: "log-filter__regex"
  }, {
    label: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.msg("regex-label")),
      1
      /* TEXT */
    )]),
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxTextInput"], {
      id: "log-filter__regex",
      modelValue: $setup.search,
      "onUpdate:modelValue": [_cache[2] || (_cache[2] = ($event) => $setup.search = $event), _cache[3] || (_cache[3] = ($event) => $setup.filter())]
    }, null, 8, ["modelValue"])]),
    _: 1
    /* STABLE */
  }), (0, import_vue3.createElementVNode)("div", _hoisted_3, [(0, import_vue3.createVNode)($setup["CdxCheckbox"], {
    id: "log-filter__invert",
    modelValue: $setup.invert,
    "onUpdate:modelValue": [_cache[4] || (_cache[4] = ($event) => $setup.invert = $event), _cache[5] || (_cache[5] = ($event) => $setup.filter())]
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.msg("invert-label")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"]), (0, import_vue3.createVNode)($setup["CdxCheckbox"], {
    id: "log-filter__case",
    modelValue: $setup.caseSensitive,
    "onUpdate:modelValue": [_cache[6] || (_cache[6] = ($event) => $setup.caseSensitive = $event), _cache[7] || (_cache[7] = ($event) => $setup.filter())]
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.msg("case-label")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"])]), (0, import_vue3.createElementVNode)("div", _hoisted_4, [(0, import_vue3.createVNode)($setup["CdxButton"], {
    action: "progressive",
    weight: "primary",
    onClick: _cache[8] || (_cache[8] = ($event) => $setup.chooseHighlight(false))
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.msg("filter-button")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }), (0, import_vue3.createVNode)($setup["CdxButton"], {
    action: "progressive",
    weight: "primary",
    onClick: _cache[9] || (_cache[9] = ($event) => $setup.chooseHighlight(true))
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.msg("highlight-button")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  })])]);
}
//! src/LogFilter/modules/App.vue
App_default.render = render;
App_default.__file = "src\\LogFilter\\modules\\App.vue";
App_default.__scopeId = "data-v-b766a4bd";
var App_default2 = App_default;
//! src/LogFilter/modules/messages.ts
var MESSAGES = {
  "filter-portlet-text": "过滤",
  "filter-portlet-description": "打开交互式日志正则过滤器",
  "filter-gadget-page": "MediaWiki:Gadget-LogFilter.js",
  "filter-rights-list-instructions": "正则表达式过滤以空格分隔的权限列表。",
  "filter-other-list-instructions": "正则表达式过滤本列表的纯文本样式。",
  "filter-legend": "过滤列表",
  "filter-option-added": "添加权限",
  "filter-option-removed": "删除权限",
  "filter-option-added-or-removed": "添加或删除权限",
  "filter-option-added-removed-static": "已添加/已移除/保持不变",
  "filter-regex-label": "正则表达式：",
  "filter-invert-label": "反选",
  "filter-case-label": "大小写敏感",
  "filter-filter-button": "过滤",
  "filter-highlight-button": "高亮"
};
//! src/LogFilter/modules/core.ts
var import_vue4 = require("vue");
var URL_LIFILTER = mw.util.getParamValue("lifilter");
var URL_LIFILTER_CASE = mw.util.getParamValue("lifiltercase");
var URL_LIFILTER_EXPR = mw.util.getParamValue("lifilterexpr");
var URL_LIFILTER_HILIGHT = mw.util.getParamValue("lifilterhilight");
var URL_LIFILTER_INV = mw.util.getParamValue("lifilterinv");
var {
  wgCanonicalNamespace,
  wgCanonicalSpecialPageName
} = mw.config.get();
var LogFilter = class _LogFilter {
  rightsLogOnly = wgCanonicalNamespace === "Special" && wgCanonicalSpecialPageName === "Log" && (location.href.includes("type=rights") || location.href.includes("/rights"));
  $body;
  constructor($body) {
    this.$body = $body;
    mw.messages.set(MESSAGES);
  }
  addPortletLink() {
    const portletLink = mw.util.addPortletLink(this.$body.find("#p-cactions").length ? "p-cactions" : "p-tb", "#", _LogFilter.msg("portlet-text"), "ca-rxfilter", _LogFilter.msg("portlet-description"));
    if (portletLink) {
      $(portletLink).find("a").on("click", (event) => {
        event.preventDefault();
        this.buildForm();
      });
    }
    if (URL_LIFILTER || URL_LIFILTER_EXPR) {
      this.buildForm();
    }
  }
  buildForm() {
    const $pageTop = this.$body.find("#contentSub, #topbar");
    if (!$pageTop.length) {
      return;
    }
    this.$body.find("#ca-rxfilter").hide();
    const root = document.createElement("div");
    $pageTop.after(root);
    const initialOptions = {
      type: "0",
      invert: URL_LIFILTER_INV === "1",
      search: URL_LIFILTER_EXPR ?? "",
      caseSensitive: URL_LIFILTER_CASE !== "1"
    };
    (0, import_vue4.createApp)(App_default2, {
      rightsLogOnly: this.rightsLogOnly,
      instructions: _LogFilter.msg(this.rightsLogOnly ? "rights-list-instructions" : "other-list-instructions"),
      initialOptions,
      filterAtStartup: !!URL_LIFILTER_EXPR,
      highlightAtStartup: URL_LIFILTER_HILIGHT === "1",
      onFilter: (options, highlight) => {
        this.filterLi(options, highlight);
      }
    }).mount(root);
  }
  filterLi(options, highlight) {
    const $listItems = this.$body.find("#bodyContent").find("li");
    if (!$listItems.length) {
      return;
    }
    const {
      type,
      invert,
      search
    } = options;
    const flags = options.caseSensitive ? "g" : "ig";
    let regexRf;
    try {
      regexRf = new RegExp(search, flags);
    } catch (error) {
      console.log(error);
    }
    const REGEX_RIGHT = /^.*?user:.*?\sfrom\s(.*?)\sto\s(.*?)\s\u200E.*?$/i;
    for (const element of $listItems) {
      const $element = $(element);
      let look = "";
      if (this.rightsLogOnly) {
        const oldr = $element.text().replace(REGEX_RIGHT, "$1");
        const newr = $element.text().replace(REGEX_RIGHT, "$2");
        const oldrl = oldr.split(", ");
        const newrl = newr.split(", ");
        for (let i = 0; i < oldrl.length; i++) {
          for (let j = 0; j < newrl.length; j++) {
            if (oldrl[i] === newrl[j]) {
              oldrl[i] = "";
              newrl[j] = "";
            }
          }
        }
        const remr = oldrl.join(",");
        const addr = newrl.join(",");
        switch (type) {
          case "0":
            look = addr;
            break;
          case "1":
            look = remr;
            break;
          case "2":
            look = `${remr} ${addr}`;
            break;
          case "3":
            look = `${oldr} ${newr}`;
            break;
        }
      } else {
        look = $element.text();
      }
      $element.css("background-color", "");
      $element.show();
      if (regexRf && (look.search(regexRf) === -1 && invert || look.search(regexRf) !== -1 && !invert)) {
        if (highlight) {
          $element.css("background-color", "#ffff99");
        }
      } else if (!highlight) {
        $element.hide();
      }
    }
  }
  static msg(key) {
    key = `filter-${key}`;
    return mw.message(key).plain();
  }
};
//! src/LogFilter/modules/constant.ts
var REGEX_TARGET_PAGE = /^(?:activeusers|checkuser|contributions|ipblocklist|linksearch|log|search|(?:uncategoriz|unus|want)ed(?:categori|templat)es|wantedfiles|(?:short|long|ancient|uncategorized|unwatched|wanted|protected|deadend|lonely|new)pages|fewestrevisions|withoutinterwiki|(?:double|broken)redirects|protectedtitles|crossnamespacelinks|recentchanges|categories|disambiguations|listredirects|globalusers|globalblocklist|listusers|watchlist|most(?:linked|revisions|categories)|nuke|whatlinkshere)$/i;
//! src/LogFilter/LogFilter.ts
var import_ext_gadget = require("ext.gadget.Util");
(function logFilter() {
  const {
    configKey: configKey2
  } = options_exports;
  const {
    wgAction,
    wgCanonicalSpecialPageName: wgCanonicalSpecialPageName2
  } = mw.config.get();
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  if (wgAction !== "history" && !mw.util.getParamValue("lifilter") && !REGEX_TARGET_PAGE.test(wgCanonicalSpecialPageName2 || "")) {
    return;
  }
  void (0, import_ext_gadget.getBody)().then(($body) => {
    new LogFilter($body).addPortletLink();
  });
})();

})();

/* </nowiki> */

