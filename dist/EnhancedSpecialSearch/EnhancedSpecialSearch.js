/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EnhancedSpecialSearch}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

// dist/EnhancedSpecialSearch/EnhancedSpecialSearch.js
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
//! src/EnhancedSpecialSearch/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Search engine": (0, import_ext_gadget.localize)({
      en: "Search engine",
      ja: "検索エンジン",
      zh: "搜索引擎"
    }),
    Baidu: (0, import_ext_gadget.localize)({
      en: "Baidu",
      ja: "Baidu",
      zh: "百度"
    }),
    Bing: (0, import_ext_gadget.localize)({
      en: "Bing",
      "zh-hans": "必应",
      "zh-hant": "必應"
    }),
    Google: (0, import_ext_gadget.localize)({
      en: "Google",
      ja: "Google",
      zh: "谷歌"
    }),
    "In-site search": (0, import_ext_gadget.localize)({
      en: "In-site search",
      "zh-hans": "站内搜索",
      "zh-hant": "站內檢索"
    }),
    Sogou: (0, import_ext_gadget.localize)({
      en: "Sogou",
      ja: "Sogou",
      zh: "搜狗"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var SearchEngineSelect_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "SearchEngineSelect",
  props: {
    options: {
      type: Array,
      required: true
    },
    onSelect: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const selectedIndex = (0, import_vue2.ref)("0");
    const menuItems = (0, import_vue2.computed)(() => props.options.map(({
      site
    }, index) => ({
      value: String(index),
      label: site
    })));
    (0, import_vue2.watch)(selectedIndex, (index) => {
      if (index !== null) {
        props.onSelect(index);
      }
    });
    const __returned__ = {
      props,
      selectedIndex,
      menuItems,
      get CdxField() {
        return import_codex.CdxField;
      },
      get CdxSelect() {
        return import_codex.CdxSelect;
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
var import_vue3 = require("vue");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxField"], {
    id: "enhancedSearchSelectField"
  }, {
    label: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
      (0, import_vue3.toDisplayString)($setup.getMessage("Search engine")),
      1
      /* TEXT */
    )]),
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxSelect"], {
      selected: $setup.selectedIndex,
      "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.selectedIndex = $event),
      "menu-items": $setup.menuItems
    }, null, 8, ["selected", "menu-items"])]),
    _: 1
    /* STABLE */
  });
}
//! src/EnhancedSpecialSearch/components/SearchEngineSelect.vue
SearchEngineSelect_default.render = render;
SearchEngineSelect_default.__file = "src\\EnhancedSpecialSearch\\components\\SearchEngineSelect.vue";
SearchEngineSelect_default.__scopeId = "data-v-146d9949";
var SearchEngineSelect_default2 = SearchEngineSelect_default;
//! src/EnhancedSpecialSearch/modules/util/openPage.ts
var openPage = (url) => {
  const element = document.createElement("a");
  element.href = url;
  element.target = "_blank";
  element.rel = ["noopener", "noreferrer"].join(" ");
  element.click();
};
//! src/EnhancedSpecialSearch/modules/addListener.ts
var addListener = (targetElement, getSelectedOption) => {
  targetElement.addEventListener("submit", (event) => {
    const inputElement = targetElement.querySelector('[type="search"]');
    if (!inputElement) {
      return;
    }
    const selectedOption = getSelectedOption();
    if (!selectedOption || selectedOption.origin) {
      return;
    }
    event.preventDefault();
    openPage((selectedOption.url ?? "").replace("$1", encodeURIComponent(inputElement.value)));
  });
};
//! src/EnhancedSpecialSearch/modules/processElement.ts
var import_vue4 = require("vue");
//! src/EnhancedSpecialSearch/options.json
var siteDomain = "qiuwenbaike.cn";
//! src/EnhancedSpecialSearch/modules/getOptionData.ts
var getOptionData = () => {
  return [{
    site: getMessage("In-site search"),
    origin: true
  }, {
    site: getMessage("Baidu"),
    url: `https://www.baidu.com/s?wd=site%3A${siteDomain}+$1`
  }, {
    site: getMessage("Bing"),
    url: `https://www.bing.com/search?q=site%3A${siteDomain}+$1`
  }, {
    site: getMessage("Google"),
    url: `https://www.google.com/search?q=site%3A${siteDomain}+$1`
  }, {
    site: getMessage("Sogou"),
    url: `https://www.sogou.com/web?query=site%3A${siteDomain}+$1`
  }, {
    site: "360",
    url: `https://www.so.com/s?q=site%3A${siteDomain}+$1`
  }];
};
//! src/EnhancedSpecialSearch/modules/processElement.ts
var processElement = (searchElement, targetElement) => {
  const options = getOptionData();
  let selectedIndex = "0";
  const root = document.createElement("div");
  root.className = "enhancedSearchSelect";
  targetElement.append(root);
  (0, import_vue4.createApp)(SearchEngineSelect_default2, {
    options,
    onSelect: (index) => {
      selectedIndex = index;
    }
  }).mount(root);
  addListener(searchElement, () => options[Number(selectedIndex)]);
};
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
void (0, import_ext_gadget2.getBody)().then(function enhancedSpecialSearch($body) {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Search") {
    return;
  }
  const searchElement = $body.find("#search").get(0) ?? $body.find("#powersearch").get(0);
  const targetElement = $body.find("#mw-search-top-table").get(0);
  if (!searchElement || !targetElement) {
    return;
  }
  processElement(searchElement, targetElement);
});

})();

/* </nowiki> */

