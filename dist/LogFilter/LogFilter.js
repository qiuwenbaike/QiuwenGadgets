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
    const msg = (key) => mw.message("filter-".concat(key)).plain();
    const filter = (highlight) => {
      var _type$value;
      props.onFilter({
        type: (_type$value = type.value) !== null && _type$value !== void 0 ? _type$value : "0",
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
      search: URL_LIFILTER_EXPR !== null && URL_LIFILTER_EXPR !== void 0 ? URL_LIFILTER_EXPR : "",
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
    var _iterator = _createForOfIteratorHelper($listItems), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
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
              look = "".concat(remr, " ").concat(addr);
              break;
            case "3":
              look = "".concat(oldr, " ").concat(newr);
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
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  static msg(key) {
    key = "filter-".concat(key);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ0ZpbHRlci9vcHRpb25zLmpzb24iLCAiZGlzdC9Mb2dGaWx0ZXIvc3JjL0xvZ0ZpbHRlci9tb2R1bGVzL0FwcC52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXExvZ0ZpbHRlclxcbW9kdWxlc1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9BcHAudnVlIiwgInNyYy9Mb2dGaWx0ZXIvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29yZS50cyIsICJzcmMvTG9nRmlsdGVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0xvZ0ZpbHRlci9Mb2dGaWx0ZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTG9nRmlsdGVyX19Jbml0aWFsaXplZFwiXG59XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhDaGVja2JveCwgQ2R4RmllbGQsIENkeFNlbGVjdCwgQ2R4VGV4dElucHV0LCB0eXBlIE1lbnVJdGVtRGF0YX0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge29uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHR5cGUge0ZpbHRlck9wdGlvbnN9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0cmlnaHRzTG9nT25seTogYm9vbGVhbjtcblx0aW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XG5cdGluaXRpYWxPcHRpb25zOiBGaWx0ZXJPcHRpb25zO1xuXHRmaWx0ZXJBdFN0YXJ0dXA6IGJvb2xlYW47XG5cdGhpZ2hsaWdodEF0U3RhcnR1cDogYm9vbGVhbjtcblx0b25GaWx0ZXI6IChvcHRpb25zOiBGaWx0ZXJPcHRpb25zLCBoaWdobGlnaHQ6IGJvb2xlYW4pID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCB0eXBlID0gcmVmPHN0cmluZyB8IG51bGw+KHByb3BzLmluaXRpYWxPcHRpb25zLnR5cGUpO1xuY29uc3QgaW52ZXJ0ID0gcmVmKHByb3BzLmluaXRpYWxPcHRpb25zLmludmVydCk7XG5jb25zdCBzZWFyY2ggPSByZWYocHJvcHMuaW5pdGlhbE9wdGlvbnMuc2VhcmNoKTtcbmNvbnN0IGNhc2VTZW5zaXRpdmUgPSByZWYocHJvcHMuaW5pdGlhbE9wdGlvbnMuY2FzZVNlbnNpdGl2ZSk7XG5jb25zdCBsYXN0Q2xpY2tlZEhpZ2hsaWdodCA9IHJlZihmYWxzZSk7XG5jb25zdCB0eXBlSXRlbXM6IE1lbnVJdGVtRGF0YVtdID0gW1xuXHR7dmFsdWU6ICcwJywgbGFiZWw6IG13Lm1lc3NhZ2UoJ2ZpbHRlci1vcHRpb24tYWRkZWQnKS5wbGFpbigpfSxcblx0e3ZhbHVlOiAnMScsIGxhYmVsOiBtdy5tZXNzYWdlKCdmaWx0ZXItb3B0aW9uLXJlbW92ZWQnKS5wbGFpbigpfSxcblx0e3ZhbHVlOiAnMicsIGxhYmVsOiBtdy5tZXNzYWdlKCdmaWx0ZXItb3B0aW9uLWFkZGVkLW9yLXJlbW92ZWQnKS5wbGFpbigpfSxcblx0e3ZhbHVlOiAnMycsIGxhYmVsOiBtdy5tZXNzYWdlKCdmaWx0ZXItb3B0aW9uLWFkZGVkLXJlbW92ZWQtc3RhdGljJykucGxhaW4oKX0sXG5dO1xuY29uc3QgbXNnID0gKGtleTogc3RyaW5nKTogc3RyaW5nID0+IG13Lm1lc3NhZ2UoYGZpbHRlci0ke2tleX1gKS5wbGFpbigpO1xuXG5jb25zdCBmaWx0ZXIgPSAoaGlnaGxpZ2h0PzogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRwcm9wcy5vbkZpbHRlcihcblx0XHR7XG5cdFx0XHR0eXBlOiB0eXBlLnZhbHVlID8/ICcwJyxcblx0XHRcdGludmVydDogaW52ZXJ0LnZhbHVlLFxuXHRcdFx0c2VhcmNoOiBzZWFyY2gudmFsdWUsXG5cdFx0XHRjYXNlU2Vuc2l0aXZlOiBjYXNlU2Vuc2l0aXZlLnZhbHVlLFxuXHRcdH0sXG5cdFx0ISEoaGlnaGxpZ2h0IHx8IGxhc3RDbGlja2VkSGlnaGxpZ2h0LnZhbHVlKVxuXHQpO1xufTtcblxuY29uc3QgY2hvb3NlSGlnaGxpZ2h0ID0gKGhpZ2hsaWdodDogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRsYXN0Q2xpY2tlZEhpZ2hsaWdodC52YWx1ZSA9IGhpZ2hsaWdodDtcblx0ZmlsdGVyKCk7XG59O1xuXG5vbk1vdW50ZWQoKCk6IHZvaWQgPT4ge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nLWZpbHRlcl9fcmVnZXgnKT8uZm9jdXMoKTtcblx0aWYgKHByb3BzLmZpbHRlckF0U3RhcnR1cCkge1xuXHRcdGZpbHRlcihwcm9wcy5oaWdobGlnaHRBdFN0YXJ0dXApO1xuXHR9XG59KTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxmaWVsZHNldCBpZD1cInJpZ2h0c0ZpbHRlclwiIGNsYXNzPVwibG9nLWZpbHRlclwiPlxuXHRcdDxsZWdlbmQ+e3sgbXNnKCdsZWdlbmQnKSB9fTwvbGVnZW5kPlxuXHRcdDxkaXYgY2xhc3M9XCJsb2ctZmlsdGVyX19pbnN0cnVjdGlvbnNcIj57eyBpbnN0cnVjdGlvbnMgfX08L2Rpdj5cblx0XHQ8Y2R4LWZpZWxkIHYtaWY9XCJyaWdodHNMb2dPbmx5XCIgY2xhc3M9XCJsb2ctZmlsdGVyX19zZWxlY3RcIj5cblx0XHRcdDxjZHgtc2VsZWN0XG5cdFx0XHRcdGlkPVwibG9nLWZpbHRlcl9fc2VsZWN0XCJcblx0XHRcdFx0di1tb2RlbDpzZWxlY3RlZD1cInR5cGVcIlxuXHRcdFx0XHQ6YXJpYS1sYWJlbD1cIm1zZygnbGVnZW5kJylcIlxuXHRcdFx0XHQ6bWVudS1pdGVtcz1cInR5cGVJdGVtc1wiXG5cdFx0XHRcdEB1cGRhdGU6c2VsZWN0ZWQ9XCJmaWx0ZXIoKVwiXG5cdFx0XHQvPlxuXHRcdDwvY2R4LWZpZWxkPlxuXHRcdDxjZHgtZmllbGQgY2xhc3M9XCJsb2ctZmlsdGVyX19yZWdleFwiPlxuXHRcdFx0PHRlbXBsYXRlICNsYWJlbD57eyBtc2coJ3JlZ2V4LWxhYmVsJykgfX08L3RlbXBsYXRlPlxuXHRcdFx0PGNkeC10ZXh0LWlucHV0IGlkPVwibG9nLWZpbHRlcl9fcmVnZXhcIiB2LW1vZGVsPVwic2VhcmNoXCIgQHVwZGF0ZTptb2RlbC12YWx1ZT1cImZpbHRlcigpXCIgLz5cblx0XHQ8L2NkeC1maWVsZD5cblx0XHQ8ZGl2IGNsYXNzPVwibG9nLWZpbHRlcl9fY2hlY2tib3hlc1wiPlxuXHRcdFx0PGNkeC1jaGVja2JveCBpZD1cImxvZy1maWx0ZXJfX2ludmVydFwiIHYtbW9kZWw9XCJpbnZlcnRcIiBAdXBkYXRlOm1vZGVsLXZhbHVlPVwiZmlsdGVyKClcIj5cblx0XHRcdFx0e3sgbXNnKCdpbnZlcnQtbGFiZWwnKSB9fVxuXHRcdFx0PC9jZHgtY2hlY2tib3g+XG5cdFx0XHQ8Y2R4LWNoZWNrYm94IGlkPVwibG9nLWZpbHRlcl9fY2FzZVwiIHYtbW9kZWw9XCJjYXNlU2Vuc2l0aXZlXCIgQHVwZGF0ZTptb2RlbC12YWx1ZT1cImZpbHRlcigpXCI+XG5cdFx0XHRcdHt7IG1zZygnY2FzZS1sYWJlbCcpIH19XG5cdFx0XHQ8L2NkeC1jaGVja2JveD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibG9nLWZpbHRlcl9fYnV0dG9uc1wiPlxuXHRcdFx0PGNkeC1idXR0b24gYWN0aW9uPVwicHJvZ3Jlc3NpdmVcIiB3ZWlnaHQ9XCJwcmltYXJ5XCIgQGNsaWNrPVwiY2hvb3NlSGlnaGxpZ2h0KGZhbHNlKVwiPlxuXHRcdFx0XHR7eyBtc2coJ2ZpbHRlci1idXR0b24nKSB9fVxuXHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdFx0PGNkeC1idXR0b24gYWN0aW9uPVwicHJvZ3Jlc3NpdmVcIiB3ZWlnaHQ9XCJwcmltYXJ5XCIgQGNsaWNrPVwiY2hvb3NlSGlnaGxpZ2h0KHRydWUpXCI+XG5cdFx0XHRcdHt7IG1zZygnaGlnaGxpZ2h0LWJ1dHRvbicpIH19XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvZmllbGRzZXQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4ubG9nLWZpbHRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcblx0ZmxleDogMSAxIGF1dG87XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRnYXA6IDAuMjVlbTtcbn1cblxuLmxvZy1maWx0ZXJfX3NlbGVjdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMC4yNWVtO1xuXG5cdDpkZWVwKC5jZHgtc2VsZWN0KSB7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0fVxufVxuXG4ubG9nLWZpbHRlcl9faW5zdHJ1Y3Rpb25zLFxuLmxvZy1maWx0ZXJfX3JlZ2V4LFxuLmxvZy1maWx0ZXJfX2NoZWNrYm94ZXMsXG4ubG9nLWZpbHRlcl9fYnV0dG9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRnYXA6IDAuMjVlbTtcbn1cblxuLmxvZy1maWx0ZXJfX2NoZWNrYm94ZXMgOmRlZXAoLmNkeC1jaGVja2JveCkge1xuXHRtYXJnaW4tYm90dG9tOiAwO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0ge1xuICBpZDogXCJyaWdodHNGaWx0ZXJcIixcbiAgY2xhc3M6IFwibG9nLWZpbHRlclwiXG59XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJsb2ctZmlsdGVyX19pbnN0cnVjdGlvbnNcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJsb2ctZmlsdGVyX19jaGVja2JveGVzXCIgfVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwibG9nLWZpbHRlcl9fYnV0dG9uc1wiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJmaWVsZHNldFwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImxlZ2VuZFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tc2coJ2xlZ2VuZCcpKSwgMSAvKiBURVhUICovKSxcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIF90b0Rpc3BsYXlTdHJpbmcoJHByb3BzLmluc3RydWN0aW9ucyksIDEgLyogVEVYVCAqLyksXG4gICAgKCRwcm9wcy5yaWdodHNMb2dPbmx5KVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RmllbGRcIl0sIHtcbiAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgY2xhc3M6IFwibG9nLWZpbHRlcl9fc2VsZWN0XCJcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhTZWxlY3RcIl0sIHtcbiAgICAgICAgICAgICAgaWQ6IFwibG9nLWZpbHRlcl9fc2VsZWN0XCIsXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiAkc2V0dXAudHlwZSxcbiAgICAgICAgICAgICAgXCJvblVwZGF0ZTpzZWxlY3RlZFwiOiBbXG4gICAgICAgICAgICAgICAgX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAudHlwZSkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoJHNldHVwLmZpbHRlcigpKSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5tc2coJ2xlZ2VuZCcpLFxuICAgICAgICAgICAgICBcIm1lbnUtaXRlbXNcIjogJHNldHVwLnR5cGVJdGVtc1xuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wic2VsZWN0ZWRcIiwgXCJhcmlhLWxhYmVsXCJdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4RmllbGRcIl0sIHsgY2xhc3M6IFwibG9nLWZpbHRlcl9fcmVnZXhcIiB9LCB7XG4gICAgICBsYWJlbDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1zZygncmVnZXgtbGFiZWwnKSksIDEgLyogVEVYVCAqLylcbiAgICAgIF0pLFxuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4VGV4dElucHV0XCJdLCB7XG4gICAgICAgICAgaWQ6IFwibG9nLWZpbHRlcl9fcmVnZXhcIixcbiAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuc2VhcmNoLFxuICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgICBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICRldmVudCA9PiAoKCRzZXR1cC5zZWFyY2gpID0gJGV2ZW50KSksXG4gICAgICAgICAgICBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICRldmVudCA9PiAoJHNldHVwLmZpbHRlcigpKSlcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICAgICAgaWQ6IFwibG9nLWZpbHRlcl9faW52ZXJ0XCIsXG4gICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5pbnZlcnQsXG4gICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBbXG4gICAgICAgICAgX2NhY2hlWzRdIHx8IChfY2FjaGVbNF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaW52ZXJ0KSA9ICRldmVudCkpLFxuICAgICAgICAgIF9jYWNoZVs1XSB8fCAoX2NhY2hlWzVdID0gJGV2ZW50ID0+ICgkc2V0dXAuZmlsdGVyKCkpKVxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1zZygnaW52ZXJ0LWxhYmVsJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiXSksXG4gICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4Q2hlY2tib3hcIl0sIHtcbiAgICAgICAgaWQ6IFwibG9nLWZpbHRlcl9fY2FzZVwiLFxuICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuY2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IFtcbiAgICAgICAgICBfY2FjaGVbNl0gfHwgKF9jYWNoZVs2XSA9ICRldmVudCA9PiAoKCRzZXR1cC5jYXNlU2Vuc2l0aXZlKSA9ICRldmVudCkpLFxuICAgICAgICAgIF9jYWNoZVs3XSB8fCAoX2NhY2hlWzddID0gJGV2ZW50ID0+ICgkc2V0dXAuZmlsdGVyKCkpKVxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1zZygnY2FzZS1sYWJlbCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdKSxcbiAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIl0pXG4gICAgXSksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICB3ZWlnaHQ6IFwicHJpbWFyeVwiLFxuICAgICAgICBvbkNsaWNrOiBfY2FjaGVbOF0gfHwgKF9jYWNoZVs4XSA9ICRldmVudCA9PiAoJHNldHVwLmNob29zZUhpZ2hsaWdodChmYWxzZSkpKVxuICAgICAgfSwge1xuICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tc2coJ2ZpbHRlci1idXR0b24nKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgXSksXG4gICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICB9KSxcbiAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgIHdlaWdodDogXCJwcmltYXJ5XCIsXG4gICAgICAgIG9uQ2xpY2s6IF9jYWNoZVs5XSB8fCAoX2NhY2hlWzldID0gJGV2ZW50ID0+ICgkc2V0dXAuY2hvb3NlSGlnaGxpZ2h0KHRydWUpKSlcbiAgICAgIH0sIHtcbiAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAubXNnKCdoaWdobGlnaHQtYnV0dG9uJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgfSlcbiAgICBdKVxuICBdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxMb2dGaWx0ZXJcXFxcbW9kdWxlc1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxMb2dGaWx0ZXJcXFxcbW9kdWxlc1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXExvZ0ZpbHRlclxcXFxtb2R1bGVzXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxMb2dGaWx0ZXJcXFxcbW9kdWxlc1xcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWI3NjZhNGJkXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJjb25zdCBNRVNTQUdFUyA9IHtcblx0J2ZpbHRlci1wb3J0bGV0LXRleHQnOiAn6L+H5rukJyxcblx0J2ZpbHRlci1wb3J0bGV0LWRlc2NyaXB0aW9uJzogJ+aJk+W8gOS6pOS6kuW8j+aXpeW/l+ato+WImei/h+a7pOWZqCcsXG5cdCdmaWx0ZXItZ2FkZ2V0LXBhZ2UnOiAnTWVkaWFXaWtpOkdhZGdldC1Mb2dGaWx0ZXIuanMnLFxuXHQnZmlsdGVyLXJpZ2h0cy1saXN0LWluc3RydWN0aW9ucyc6ICfmraPliJnooajovr7lvI/ov4fmu6Tku6XnqbrmoLzliIbpmpTnmoTmnYPpmZDliJfooajjgIInLFxuXHQnZmlsdGVyLW90aGVyLWxpc3QtaW5zdHJ1Y3Rpb25zJzogJ+ato+WImeihqOi+vuW8j+i/h+a7pOacrOWIl+ihqOeahOe6r+aWh+acrOagt+W8j+OAgicsXG5cdCdmaWx0ZXItbGVnZW5kJzogJ+i/h+a7pOWIl+ihqCcsXG5cdCdmaWx0ZXItb3B0aW9uLWFkZGVkJzogJ+a3u+WKoOadg+mZkCcsXG5cdCdmaWx0ZXItb3B0aW9uLXJlbW92ZWQnOiAn5Yig6Zmk5p2D6ZmQJyxcblx0J2ZpbHRlci1vcHRpb24tYWRkZWQtb3ItcmVtb3ZlZCc6ICfmt7vliqDmiJbliKDpmaTmnYPpmZAnLFxuXHQnZmlsdGVyLW9wdGlvbi1hZGRlZC1yZW1vdmVkLXN0YXRpYyc6ICflt7Lmt7vliqAv5bey56e76ZmkL+S/neaMgeS4jeWPmCcsXG5cdCdmaWx0ZXItcmVnZXgtbGFiZWwnOiAn5q2j5YiZ6KGo6L6+5byP77yaJyxcblx0J2ZpbHRlci1pbnZlcnQtbGFiZWwnOiAn5Y+N6YCJJyxcblx0J2ZpbHRlci1jYXNlLWxhYmVsJzogJ+Wkp+Wwj+WGmeaVj+aEnycsXG5cdCdmaWx0ZXItZmlsdGVyLWJ1dHRvbic6ICfov4fmu6QnLFxuXHQnZmlsdGVyLWhpZ2hsaWdodC1idXR0b24nOiAn6auY5LquJyxcbn07XG5cbmV4cG9ydCB7TUVTU0FHRVN9O1xuIiwgImltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCB0eXBlIHtGaWx0ZXJPcHRpb25zfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7TUVTU0FHRVN9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IFVSTF9MSUZJTFRFUjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXInKTtcbmNvbnN0IFVSTF9MSUZJTFRFUl9DQVNFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmNhc2UnKTtcbmNvbnN0IFVSTF9MSUZJTFRFUl9FWFBSOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmV4cHInKTtcbmNvbnN0IFVSTF9MSUZJTFRFUl9ISUxJR0hUOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdsaWZpbHRlcmhpbGlnaHQnKTtcbmNvbnN0IFVSTF9MSUZJTFRFUl9JTlY6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2xpZmlsdGVyaW52Jyk7XG5cbmNvbnN0IHt3Z0Nhbm9uaWNhbE5hbWVzcGFjZSwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jbGFzcyBMb2dGaWx0ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHJpZ2h0c0xvZ09ubHkgPVxuXHRcdHdnQ2Fub25pY2FsTmFtZXNwYWNlID09PSAnU3BlY2lhbCcgJiZcblx0XHR3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ0xvZycgJiZcblx0XHQobG9jYXRpb24uaHJlZi5pbmNsdWRlcygndHlwZT1yaWdodHMnKSB8fCBsb2NhdGlvbi5ocmVmLmluY2x1ZGVzKCcvcmlnaHRzJykpO1xuXHRwcml2YXRlICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PjtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSB7XG5cdFx0dGhpcy4kYm9keSA9ICRib2R5O1xuXHRcdG13Lm1lc3NhZ2VzLnNldChNRVNTQUdFUyk7XG5cdH1cblxuXHRwdWJsaWMgYWRkUG9ydGxldExpbmsoKTogdm9pZCB7XG5cdFx0Y29uc3QgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRcdHRoaXMuJGJvZHkuZmluZCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPyAncC1jYWN0aW9ucycgOiAncC10YicsXG5cdFx0XHQnIycsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LXRleHQnKSxcblx0XHRcdCdjYS1yeGZpbHRlcicsXG5cdFx0XHRMb2dGaWx0ZXIubXNnKCdwb3J0bGV0LWRlc2NyaXB0aW9uJylcblx0XHQpO1xuXHRcdGlmIChwb3J0bGV0TGluaykge1xuXHRcdFx0JChwb3J0bGV0TGluaylcblx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHQub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dGhpcy5idWlsZEZvcm0oKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmIChVUkxfTElGSUxURVIgfHwgVVJMX0xJRklMVEVSX0VYUFIpIHtcblx0XHRcdHRoaXMuYnVpbGRGb3JtKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBidWlsZEZvcm0oKTogdm9pZCB7XG5cdFx0Y29uc3QgJHBhZ2VUb3A6IEpRdWVyeSA9IHRoaXMuJGJvZHkuZmluZCgnI2NvbnRlbnRTdWIsICN0b3BiYXInKTtcblx0XHRpZiAoISRwYWdlVG9wLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuJGJvZHkuZmluZCgnI2NhLXJ4ZmlsdGVyJykuaGlkZSgpO1xuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHQkcGFnZVRvcC5hZnRlcihyb290KTtcblxuXHRcdGNvbnN0IGluaXRpYWxPcHRpb25zOiBGaWx0ZXJPcHRpb25zID0ge1xuXHRcdFx0dHlwZTogJzAnLFxuXHRcdFx0aW52ZXJ0OiBVUkxfTElGSUxURVJfSU5WID09PSAnMScsXG5cdFx0XHRzZWFyY2g6IFVSTF9MSUZJTFRFUl9FWFBSID8/ICcnLFxuXHRcdFx0Y2FzZVNlbnNpdGl2ZTogVVJMX0xJRklMVEVSX0NBU0UgIT09ICcxJyxcblx0XHR9O1xuXG5cdFx0Y3JlYXRlQXBwKEFwcCwge1xuXHRcdFx0cmlnaHRzTG9nT25seTogdGhpcy5yaWdodHNMb2dPbmx5LFxuXHRcdFx0aW5zdHJ1Y3Rpb25zOiBMb2dGaWx0ZXIubXNnKHRoaXMucmlnaHRzTG9nT25seSA/ICdyaWdodHMtbGlzdC1pbnN0cnVjdGlvbnMnIDogJ290aGVyLWxpc3QtaW5zdHJ1Y3Rpb25zJyksXG5cdFx0XHRpbml0aWFsT3B0aW9ucyxcblx0XHRcdGZpbHRlckF0U3RhcnR1cDogISFVUkxfTElGSUxURVJfRVhQUixcblx0XHRcdGhpZ2hsaWdodEF0U3RhcnR1cDogVVJMX0xJRklMVEVSX0hJTElHSFQgPT09ICcxJyxcblx0XHRcdG9uRmlsdGVyOiAob3B0aW9uczogRmlsdGVyT3B0aW9ucywgaGlnaGxpZ2h0OiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRcdHRoaXMuZmlsdGVyTGkob3B0aW9ucywgaGlnaGxpZ2h0KTtcblx0XHRcdH0sXG5cdFx0fSkubW91bnQocm9vdCk7XG5cdH1cblxuXHRwcml2YXRlIGZpbHRlckxpKG9wdGlvbnM6IEZpbHRlck9wdGlvbnMsIGhpZ2hsaWdodDogYm9vbGVhbik6IHZvaWQge1xuXHRcdGNvbnN0ICRsaXN0SXRlbXM6IEpRdWVyeSA9IHRoaXMuJGJvZHkuZmluZCgnI2JvZHlDb250ZW50JykuZmluZCgnbGknKTtcblx0XHRpZiAoISRsaXN0SXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qge3R5cGUsIGludmVydCwgc2VhcmNofSA9IG9wdGlvbnM7XG5cdFx0Y29uc3QgZmxhZ3M6IHN0cmluZyA9IG9wdGlvbnMuY2FzZVNlbnNpdGl2ZSA/ICdnJyA6ICdpZyc7XG5cdFx0bGV0IHJlZ2V4UmY6IFJlZ0V4cCB8IHVuZGVmaW5lZDtcblx0XHR0cnkge1xuXHRcdFx0cmVnZXhSZiA9IG5ldyBSZWdFeHAoc2VhcmNoLCBmbGFncyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9XG5cblx0XHRjb25zdCBSRUdFWF9SSUdIVDogUmVnRXhwID0gL14uKj91c2VyOi4qP1xcc2Zyb21cXHMoLio/KVxcc3RvXFxzKC4qPylcXHNcXHUyMDBFLio/JC9pO1xuXG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRsaXN0SXRlbXMpIHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0bGV0IGxvb2s6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRpZiAodGhpcy5yaWdodHNMb2dPbmx5KSB7XG5cdFx0XHRcdGNvbnN0IG9sZHI6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS5yZXBsYWNlKFJFR0VYX1JJR0hULCAnJDEnKTtcblx0XHRcdFx0Y29uc3QgbmV3cjogc3RyaW5nID0gJGVsZW1lbnQudGV4dCgpLnJlcGxhY2UoUkVHRVhfUklHSFQsICckMicpO1xuXHRcdFx0XHRjb25zdCBvbGRybDogc3RyaW5nW10gPSBvbGRyLnNwbGl0KCcsICcpO1xuXHRcdFx0XHRjb25zdCBuZXdybDogc3RyaW5nW10gPSBuZXdyLnNwbGl0KCcsICcpO1xuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgb2xkcmwubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbmV3cmwubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdGlmIChvbGRybFtpXSA9PT0gbmV3cmxbal0pIHtcblx0XHRcdFx0XHRcdFx0b2xkcmxbaV0gPSAnJztcblx0XHRcdFx0XHRcdFx0bmV3cmxbal0gPSAnJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcmVtcjogc3RyaW5nID0gb2xkcmwuam9pbignLCcpO1xuXHRcdFx0XHRjb25zdCBhZGRyOiBzdHJpbmcgPSBuZXdybC5qb2luKCcsJyk7XG5cdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgJzAnOlxuXHRcdFx0XHRcdFx0bG9vayA9IGFkZHI7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcxJzpcblx0XHRcdFx0XHRcdGxvb2sgPSByZW1yO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnMic6XG5cdFx0XHRcdFx0XHRsb29rID0gYCR7cmVtcn0gJHthZGRyfWA7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICczJzpcblx0XHRcdFx0XHRcdGxvb2sgPSBgJHtvbGRyfSAke25ld3J9YDtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb29rID0gJGVsZW1lbnQudGV4dCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQkZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnJyk7XG5cdFx0XHQkZWxlbWVudC5zaG93KCk7XG5cblx0XHRcdGlmIChyZWdleFJmICYmICgobG9vay5zZWFyY2gocmVnZXhSZikgPT09IC0xICYmIGludmVydCkgfHwgKGxvb2suc2VhcmNoKHJlZ2V4UmYpICE9PSAtMSAmJiAhaW52ZXJ0KSkpIHtcblx0XHRcdFx0aWYgKGhpZ2hsaWdodCkge1xuXHRcdFx0XHRcdCRlbGVtZW50LmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZmZmZjk5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIWhpZ2hsaWdodCkge1xuXHRcdFx0XHQkZWxlbWVudC5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRrZXkgPSBgZmlsdGVyLSR7a2V5fWA7XG5cdFx0cmV0dXJuIG13Lm1lc3NhZ2Uoa2V5KS5wbGFpbigpO1xuXHR9XG59XG5cbmV4cG9ydCB7TG9nRmlsdGVyfTtcbiIsICJjb25zdCBSRUdFWF9UQVJHRVRfUEFHRTogUmVnRXhwID1cblx0L14oPzphY3RpdmV1c2Vyc3xjaGVja3VzZXJ8Y29udHJpYnV0aW9uc3xpcGJsb2NrbGlzdHxsaW5rc2VhcmNofGxvZ3xzZWFyY2h8KD86dW5jYXRlZ29yaXp8dW51c3x3YW50KWVkKD86Y2F0ZWdvcml8dGVtcGxhdCllc3x3YW50ZWRmaWxlc3woPzpzaG9ydHxsb25nfGFuY2llbnR8dW5jYXRlZ29yaXplZHx1bndhdGNoZWR8d2FudGVkfHByb3RlY3RlZHxkZWFkZW5kfGxvbmVseXxuZXcpcGFnZXN8ZmV3ZXN0cmV2aXNpb25zfHdpdGhvdXRpbnRlcndpa2l8KD86ZG91YmxlfGJyb2tlbilyZWRpcmVjdHN8cHJvdGVjdGVkdGl0bGVzfGNyb3NzbmFtZXNwYWNlbGlua3N8cmVjZW50Y2hhbmdlc3xjYXRlZ29yaWVzfGRpc2FtYmlndWF0aW9uc3xsaXN0cmVkaXJlY3RzfGdsb2JhbHVzZXJzfGdsb2JhbGJsb2NrbGlzdHxsaXN0dXNlcnN8d2F0Y2hsaXN0fG1vc3QoPzpsaW5rZWR8cmV2aXNpb25zfGNhdGVnb3JpZXMpfG51a2V8d2hhdGxpbmtzaGVyZSkkL2k7XG5cbmV4cG9ydCB7UkVHRVhfVEFSR0VUX1BBR0V9O1xuIiwgIi8qKlxuICogTG9nIGZpbHRlciBzY3JpcHRcbiAqXG4gKiBDcmVhdGVkIGJ5IFNwbGFya2FcbiAqIEFtZW5kZWQgYnkgTWlrZS5saWZlZ3VhcmQgJiBMdXBvXG4gKiBQYXJ0aWFsbHkgcmV3cml0dGVuIGJ5IERpZUJ1Y2hlXG4gKlxuICogPGxpPiBlbGVtZW50IEZpbHRlciBTY3JpcHQsIHZlcnNpb24gWzAuMl1cbiAqIFNob3VsZCBjdXJyZW50bHkgd29yayBvbiBhbGwga25vd24gc2tpbnMgKHdpdGggYSAjY29udGVudFN1YiBvciAjdG9wYmFyKVxuICpcbiAqIG13LnV0aWwuZ2V0VXJsKCBtdy5jb25maWcuZ2V0KCAnd2dQYWdlTmFtZScgKSApICsgJz8nICtcbiAqICd3aXRoSlM9TWVkaWFXaWtpOkdhZGdldC1Mb2dGaWx0ZXIuanMmbGlmaWx0ZXI9MSZsaWZpbHRlcmV4cHI9VEVTVCZsaWZpbHRlcmNhc2UmbGlmaWx0ZXJoaWxpZ2h0JmxpZmlsdGVyaW52J1xuICovXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7TG9nRmlsdGVyfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge1JFR0VYX1RBUkdFVF9QQUdFfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gbG9nRmlsdGVyKCk6IHZvaWQge1xuXHRjb25zdCB7Y29uZmlnS2V5fSA9IE9QVElPTlM7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8vIFdoZW4gdG8gZW5hYmxlIGFsbCB0aGlzXG5cdGlmIChcblx0XHR3Z0FjdGlvbiAhPT0gJ2hpc3RvcnknICYmXG5cdFx0IW13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbGlmaWx0ZXInKSAmJlxuXHRcdCFSRUdFWF9UQVJHRVRfUEFHRS50ZXN0KHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRuZXcgTG9nRmlsdGVyKCRib2R5KS5hZGRQb3J0bGV0TGluaygpOyAvLyBMb2FkXG5cdH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCxpQkFBQTtFQUFBRSxXQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQztBQUFBLENBQUE7QUFDQyxJQUFBRixZQUFhO0FBRGQsSUFBQUUsa0JBQUE7RUFDQ0Y7QUFDRDs7QUNEQSxJQUFBRyxlQUEyRkMsUUFBQSxrQkFBQTtBQUMzRixJQUFBQyxjQUE2QkQsUUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHN0IsVUFBTUUsUUFBUUM7QUFTZCxVQUFNQyxRQUFBLEdBQU9ILFlBQUFJLEtBQW1CSCxNQUFNSSxlQUFlRixJQUFJO0FBQ3pELFVBQU1HLFVBQUEsR0FBU04sWUFBQUksS0FBSUgsTUFBTUksZUFBZUMsTUFBTTtBQUM5QyxVQUFNQyxVQUFBLEdBQVNQLFlBQUFJLEtBQUlILE1BQU1JLGVBQWVFLE1BQU07QUFDOUMsVUFBTUMsaUJBQUEsR0FBZ0JSLFlBQUFJLEtBQUlILE1BQU1JLGVBQWVHLGFBQWE7QUFDNUQsVUFB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QUFDLE9BQWdCRCxHQUFHO0FBQ25CLFdBQU9KLEdBQUdDLFFBQVFHLEdBQUcsRUFBRUYsTUFBTTtFQUM5QjtBQUNEOztBQ2xKQSxJQUFNOEgsb0JBQ0w7O0FDZUQsSUFBQUMsb0JBQXNCL0ksUUFBQSxpQkFBQTtDQUVyQixTQUFTZ0osWUFBa0I7QUFDM0IsUUFBTTtJQUFDcEosV0FBQXFKO0VBQVMsSUFBSXZKO0FBQ3BCLFFBQU07SUFBQ3dKO0lBQVVwRSw0QkFBQXFFO0VBQTBCLElBQUlySSxHQUFHaUUsT0FBT0MsSUFBSTtBQUc3RCxNQUFJbEUsR0FBR2lFLE9BQU9DLElBQUlpRSxVQUFTLEdBQUc7QUFDN0I7RUFDRDtBQUVBbkksS0FBR2lFLE9BQU9VLElBQUl3RCxZQUFXLElBQUk7QUFHN0IsTUFDQ0MsYUFBYSxhQUNiLENBQUNwSSxHQUFHeUQsS0FBS0MsY0FBYyxVQUFVLEtBQ2pDLENBQUNzRSxrQkFBa0JNLEtBQUtELCtCQUE4QixFQUFFLEdBQ3ZEO0FBQ0Q7RUFDRDtBQUVBLFFBQUEsR0FBS0osa0JBQUFNLFNBQVEsRUFBRUMsS0FBTWhFLFdBQXlDO0FBQzdELFFBQUlMLFVBQVVLLEtBQUssRUFBRUksZUFBZTtFQUNyQyxDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsib3B0aW9uc19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImNvbmZpZ0tleSIsICJkZWZhdWx0IiwgIm9wdGlvbnNfZGVmYXVsdCIsICJpbXBvcnRfY29kZXgiLCAicmVxdWlyZSIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgInR5cGUiLCAicmVmIiwgImluaXRpYWxPcHRpb25zIiwgImludmVydCIsICJzZWFyY2giLCAiY2FzZVNlbnNpdGl2ZSIsICJsYXN0Q2xpY2tlZEhpZ2hsaWdodCIsICJ0eXBlSXRlbXMiLCAidmFsdWUiLCAibGFiZWwiLCAibXciLCAibWVzc2FnZSIsICJwbGFpbiIsICJtc2ciLCAia2V5IiwgImNvbmNhdCIsICJmaWx0ZXIiLCAiaGlnaGxpZ2h0IiwgIl90eXBlJHZhbHVlIiwgIm9uRmlsdGVyIiwgImNob29zZUhpZ2hsaWdodCIsICJvbk1vdW50ZWQiLCAiX2RvY3VtZW50JGdldEVsZW1lbnRCIiwgImRvY3VtZW50IiwgImdldEVsZW1lbnRCeUlkIiwgImZvY3VzIiwgImZpbHRlckF0U3RhcnR1cCIsICJoaWdobGlnaHRBdFN0YXJ0dXAiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJpZCIsICJjbGFzcyIsICJfaG9pc3RlZF8yIiwgIl9ob2lzdGVkXzMiLCAiX2hvaXN0ZWRfNCIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiaW5zdHJ1Y3Rpb25zIiwgInJpZ2h0c0xvZ09ubHkiLCAiY3JlYXRlQmxvY2siLCAid2l0aEN0eCIsICJjcmVhdGVWTm9kZSIsICJzZWxlY3RlZCIsICIkZXZlbnQiLCAiXyIsICJjcmVhdGVDb21tZW50Vk5vZGUiLCAiY3JlYXRlVGV4dFZOb2RlIiwgIm1vZGVsVmFsdWUiLCAiYWN0aW9uIiwgIndlaWdodCIsICJvbkNsaWNrIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgIk1FU1NBR0VTIiwgImltcG9ydF92dWU0IiwgIlVSTF9MSUZJTFRFUiIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiVVJMX0xJRklMVEVSX0NBU0UiLCAiVVJMX0xJRklMVEVSX0VYUFIiLCAiVVJMX0xJRklMVEVSX0hJTElHSFQiLCAiVVJMX0xJRklMVEVSX0lOViIsICJ3Z0Nhbm9uaWNhbE5hbWVzcGFjZSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJjb25maWciLCAiZ2V0IiwgIkxvZ0ZpbHRlciIsICJfTG9nRmlsdGVyIiwgImxvY2F0aW9uIiwgImhyZWYiLCAiaW5jbHVkZXMiLCAiJGJvZHkiLCAiY29uc3RydWN0b3IiLCAibWVzc2FnZXMiLCAic2V0IiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRMaW5rIiwgImZpbmQiLCAibGVuZ3RoIiwgIiQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiYnVpbGRGb3JtIiwgIiRwYWdlVG9wIiwgImhpZGUiLCAicm9vdCIsICJjcmVhdGVFbGVtZW50IiwgImFmdGVyIiwgImNyZWF0ZUFwcCIsICJvcHRpb25zIiwgImZpbHRlckxpIiwgIm1vdW50IiwgIiRsaXN0SXRlbXMiLCAiZmxhZ3MiLCAicmVnZXhSZiIsICJSZWdFeHAiLCAiZXJyb3IiLCAiY29uc29sZSIsICJsb2ciLCAiUkVHRVhfUklHSFQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAiJGVsZW1lbnQiLCAibG9vayIsICJvbGRyIiwgInRleHQiLCAicmVwbGFjZSIsICJuZXdyIiwgIm9sZHJsIiwgInNwbGl0IiwgIm5ld3JsIiwgImkiLCAiaiIsICJyZW1yIiwgImpvaW4iLCAiYWRkciIsICJjc3MiLCAic2hvdyIsICJlcnIiLCAiZSIsICJmIiwgIlJFR0VYX1RBUkdFVF9QQUdFIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImxvZ0ZpbHRlciIsICJjb25maWdLZXkyIiwgIndnQWN0aW9uIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lMiIsICJ0ZXN0IiwgImdldEJvZHkiLCAidGhlbiJdCn0K
