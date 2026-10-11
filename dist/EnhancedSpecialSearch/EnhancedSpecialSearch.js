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
    var _selectedOption$url;
    const inputElement = targetElement.querySelector('[type="search"]');
    if (!inputElement) {
      return;
    }
    const selectedOption = getSelectedOption();
    if (!selectedOption || selectedOption.origin) {
      return;
    }
    event.preventDefault();
    openPage(((_selectedOption$url = selectedOption.url) !== null && _selectedOption$url !== void 0 ? _selectedOption$url : "").replace("$1", encodeURIComponent(inputElement.value)));
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
    url: "https://www.baidu.com/s?wd=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Bing"),
    url: "https://www.bing.com/search?q=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Google"),
    url: "https://www.google.com/search?q=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Sogou"),
    url: "https://www.sogou.com/web?query=site%3A".concat(siteDomain, "+$1")
  }, {
    site: "360",
    url: "https://www.so.com/s?q=site%3A".concat(siteDomain, "+$1")
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
  var _$body$find$get;
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Search") {
    return;
  }
  const searchElement = (_$body$find$get = $body.find("#search").get(0)) !== null && _$body$find$get !== void 0 ? _$body$find$get : $body.find("#powersearch").get(0);
  const targetElement = $body.find("#mw-search-top-table").get(0);
  if (!searchElement || !targetElement) {
    return;
  }
  processElement(searchElement, targetElement);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9FbmhhbmNlZFNwZWNpYWxTZWFyY2gudHMiLCAiZGlzdC9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvc3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9jb21wb25lbnRzL1NlYXJjaEVuZ2luZVNlbGVjdC52dWUiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL2kxOG4udHMiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXEVuaGFuY2VkU3BlY2lhbFNlYXJjaFxcY29tcG9uZW50c1xcU2VhcmNoRW5naW5lU2VsZWN0LnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvY29tcG9uZW50cy9TZWFyY2hFbmdpbmVTZWxlY3QudnVlIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy91dGlsL29wZW5QYWdlLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9vcHRpb25zLmpzb24iLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL2dldE9wdGlvbkRhdGEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAnLi9FbmhhbmNlZFNwZWNpYWxTZWFyY2gubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVuaGFuY2VkU3BlY2lhbFNlYXJjaCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNlYXJjaEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnI3NlYXJjaCcpLmdldCgwKSA/PyAkYm9keS5maW5kKCcjcG93ZXJzZWFyY2gnKS5nZXQoMCk7XG5cdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnI213LXNlYXJjaC10b3AtdGFibGUnKS5nZXQoMCk7XG5cdGlmICghc2VhcmNoRWxlbWVudCB8fCAhdGFyZ2V0RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHByb2Nlc3NFbGVtZW50KHNlYXJjaEVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xufSk7XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4RmllbGQsIENkeFNlbGVjdCwgdHlwZSBNZW51SXRlbURhdGF9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB0eXBlIHtPcHRpb25EYXRhfSBmcm9tICcuLi9tb2R1bGVzL2dldE9wdGlvbkRhdGEnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3B0aW9uczogT3B0aW9uRGF0YVtdO1xuXHRvblNlbGVjdDogKGluZGV4OiBzdHJpbmcpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBzZWxlY3RlZEluZGV4ID0gcmVmPHN0cmluZyB8IG51bGw+KCcwJyk7XG5jb25zdCBtZW51SXRlbXMgPSBjb21wdXRlZDxNZW51SXRlbURhdGFbXT4oKCkgPT5cblx0cHJvcHMub3B0aW9ucy5tYXAoKHtzaXRlfSwgaW5kZXgpID0+ICh7XG5cdFx0dmFsdWU6IFN0cmluZyhpbmRleCksXG5cdFx0bGFiZWw6IHNpdGUsXG5cdH0pKVxuKTtcblxud2F0Y2goc2VsZWN0ZWRJbmRleCwgKGluZGV4KSA9PiB7XG5cdGlmIChpbmRleCAhPT0gbnVsbCkge1xuXHRcdHByb3BzLm9uU2VsZWN0KGluZGV4KTtcblx0fVxufSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWZpZWxkIGlkPVwiZW5oYW5jZWRTZWFyY2hTZWxlY3RGaWVsZFwiPlxuXHRcdDx0ZW1wbGF0ZSAjbGFiZWw+e3sgZ2V0TWVzc2FnZSgnU2VhcmNoIGVuZ2luZScpIH19PC90ZW1wbGF0ZT5cblx0XHQ8Y2R4LXNlbGVjdCB2LW1vZGVsOnNlbGVjdGVkPVwic2VsZWN0ZWRJbmRleFwiIDptZW51LWl0ZW1zPVwibWVudUl0ZW1zXCIgLz5cblx0PC9jZHgtZmllbGQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkPlxuI2VuaGFuY2VkU2VhcmNoU2VsZWN0RmllbGQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDAuNWVtO1xuXHRtYXJnaW46IDA7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnU2VhcmNoIGVuZ2luZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VhcmNoIGVuZ2luZScsXG5cdFx0XHRqYTogJ+aknOe0ouOCqOODs+OCuOODsycsXG5cdFx0XHR6aDogJ+aQnOe0ouW8leaTjicsXG5cdFx0fSksXG5cdFx0QmFpZHU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFpZHUnLFxuXHRcdFx0amE6ICdCYWlkdScsXG5cdFx0XHR6aDogJ+eZvuW6picsXG5cdFx0fSksXG5cdFx0QmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCaW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W/heW6lCcsXG5cdFx0XHQnemgtaGFudCc6ICflv4Xmh4knLFxuXHRcdH0pLFxuXHRcdEdvb2dsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHb29nbGUnLFxuXHRcdFx0amE6ICdHb29nbGUnLFxuXHRcdFx0emg6ICfosLfmrYwnLFxuXHRcdH0pLFxuXHRcdCdJbi1zaXRlIHNlYXJjaCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW4tc2l0ZSBzZWFyY2gnLFxuXHRcdFx0J3poLWhhbnMnOiAn56uZ5YaF5pCc57SiJyxcblx0XHRcdCd6aC1oYW50JzogJ+ermeWFp+aqoue0oicsXG5cdFx0fSksXG5cdFx0U29nb3U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU29nb3UnLFxuXHRcdFx0amE6ICdTb2dvdScsXG5cdFx0XHR6aDogJ+aQnOeLlycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RmllbGRcIl0sIHsgaWQ6IFwiZW5oYW5jZWRTZWFyY2hTZWxlY3RGaWVsZFwiIH0sIHtcbiAgICBsYWJlbDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdTZWFyY2ggZW5naW5lJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgXSksXG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeFNlbGVjdFwiXSwge1xuICAgICAgICBzZWxlY3RlZDogJHNldHVwLnNlbGVjdGVkSW5kZXgsXG4gICAgICAgIFwib25VcGRhdGU6c2VsZWN0ZWRcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuc2VsZWN0ZWRJbmRleCkgPSAkZXZlbnQpKSxcbiAgICAgICAgXCJtZW51LWl0ZW1zXCI6ICRzZXR1cC5tZW51SXRlbXNcbiAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInNlbGVjdGVkXCIsIFwibWVudS1pdGVtc1wiXSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9KSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFbmhhbmNlZFNwZWNpYWxTZWFyY2hcXFxcY29tcG9uZW50c1xcXFxTZWFyY2hFbmdpbmVTZWxlY3QudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxFbmhhbmNlZFNwZWNpYWxTZWFyY2hcXFxcY29tcG9uZW50c1xcXFxTZWFyY2hFbmdpbmVTZWxlY3QudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEVuaGFuY2VkU3BlY2lhbFNlYXJjaFxcXFxjb21wb25lbnRzXFxcXFNlYXJjaEVuZ2luZVNlbGVjdC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxFbmhhbmNlZFNwZWNpYWxTZWFyY2hcXFxcY29tcG9uZW50c1xcXFxTZWFyY2hFbmdpbmVTZWxlY3QudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTE0NmQ5OTQ5XCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJjb25zdCBvcGVuUGFnZSA9ICh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRlbGVtZW50LmhyZWYgPSB1cmw7XG5cdGVsZW1lbnQudGFyZ2V0ID0gJ19ibGFuayc7XG5cdGVsZW1lbnQucmVsID0gWydub29wZW5lcicsICdub3JlZmVycmVyJ10uam9pbignICcpO1xuXG5cdGVsZW1lbnQuY2xpY2soKTtcbn07XG5cbmV4cG9ydCB7b3BlblBhZ2V9O1xuIiwgImltcG9ydCB0eXBlIHtPcHRpb25EYXRhfSBmcm9tICcuL2dldE9wdGlvbkRhdGEnO1xuaW1wb3J0IHtvcGVuUGFnZX0gZnJvbSAnLi91dGlsL29wZW5QYWdlJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIGdldFNlbGVjdGVkT3B0aW9uOiAoKSA9PiBPcHRpb25EYXRhIHwgdW5kZWZpbmVkKTogdm9pZCA9PiB7XG5cdHRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50OiBTdWJtaXRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSB0YXJnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic2VhcmNoXCJdJyk7XG5cdFx0aWYgKCFpbnB1dEVsZW1lbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGdldFNlbGVjdGVkT3B0aW9uKCk7XG5cdFx0aWYgKCFzZWxlY3RlZE9wdGlvbiB8fCBzZWxlY3RlZE9wdGlvbi5vcmlnaW4pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdG9wZW5QYWdlKChzZWxlY3RlZE9wdGlvbi51cmwgPz8gJycpLnJlcGxhY2UoJyQxJywgZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0RWxlbWVudC52YWx1ZSkpKTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQgU2VhcmNoRW5naW5lU2VsZWN0IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoRW5naW5lU2VsZWN0LnZ1ZSc7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZXRPcHRpb25EYXRhfSBmcm9tICcuL2dldE9wdGlvbkRhdGEnO1xuXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9IChzZWFyY2hFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0Y29uc3Qgb3B0aW9ucyA9IGdldE9wdGlvbkRhdGEoKTtcblx0bGV0IHNlbGVjdGVkSW5kZXggPSAnMCc7XG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0cm9vdC5jbGFzc05hbWUgPSAnZW5oYW5jZWRTZWFyY2hTZWxlY3QnO1xuXHR0YXJnZXRFbGVtZW50LmFwcGVuZChyb290KTtcblx0Y3JlYXRlQXBwKFNlYXJjaEVuZ2luZVNlbGVjdCwge1xuXHRcdG9wdGlvbnMsXG5cdFx0b25TZWxlY3Q6IChpbmRleDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRzZWxlY3RlZEluZGV4ID0gaW5kZXg7XG5cdFx0fSxcblx0fSkubW91bnQocm9vdCk7XG5cblx0YWRkTGlzdGVuZXIoc2VhcmNoRWxlbWVudCwgKCkgPT4gb3B0aW9uc1tOdW1iZXIoc2VsZWN0ZWRJbmRleCldKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIiwgIntcblx0XCJzaXRlRG9tYWluXCI6IFwicWl1d2VuYmFpa2UuY25cIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxudHlwZSBPcHRpb25EYXRhID0ge1xuXHRzaXRlOiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0b3JpZ2luPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IGdldE9wdGlvbkRhdGEgPSAoKTogT3B0aW9uRGF0YVtdID0+IHtcblx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdJbi1zaXRlIHNlYXJjaCcpLFxuXHRcdFx0b3JpZ2luOiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnQmFpZHUnKSxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3LmJhaWR1LmNvbS9zP3dkPXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnQmluZycpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdHb29nbGUnKSxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdTb2dvdScpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuc29nb3UuY29tL3dlYj9xdWVyeT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6ICczNjAnLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuc28uY29tL3M/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRdO1xufTtcblxuZXhwb3J0IHt0eXBlIE9wdGlvbkRhdGEsIGdldE9wdGlvbkRhdGF9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQUFDLGVBQXFERCxRQUFBLGtCQUFBO0FBQ3JELElBQUFFLGNBQW1DRixRQUFBLEtBQUE7O0FDRm5DLElBQUFHLG9CQUF1QkgsUUFBQSxpQkFBQTtBQUV2QixJQUFNSSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGtCQUFBLEdBQWlCRCxrQkFBQUUsVUFBUztNQUN6QkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RDLFFBQUEsR0FBT04sa0JBQUFFLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RFLE9BQUEsR0FBTVAsa0JBQUFFLFVBQVM7TUFDZEMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESyxTQUFBLEdBQVFSLGtCQUFBRSxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7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QUNuRCxNQUFJSCwrQkFBK0IsVUFBVTtBQUM1QztFQUNEO0FBRUEsUUFBTVosaUJBQUFXLGtCQUF5Q0QsTUFBTU0sS0FBSyxTQUFTLEVBQUVELElBQUksQ0FBQyxPQUFBLFFBQUFKLG9CQUFBLFNBQUFBLGtCQUFLRCxNQUFNTSxLQUFLLGNBQWMsRUFBRUQsSUFBSSxDQUFDO0FBQy9HLFFBQU1oQyxnQkFBeUMyQixNQUFNTSxLQUFLLHNCQUFzQixFQUFFRCxJQUFJLENBQUM7QUFDdkYsTUFBSSxDQUFDZixpQkFBaUIsQ0FBQ2pCLGVBQWU7QUFDckM7RUFDRDtBQUVBZ0IsaUJBQWVDLGVBQWVqQixhQUFhO0FBQzVDLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiQmFpZHUiLCAiQmluZyIsICJHb29nbGUiLCAiU29nb3UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb3BzIiwgIl9fcHJvcHMiLCAic2VsZWN0ZWRJbmRleCIsICJyZWYiLCAibWVudUl0ZW1zIiwgImNvbXB1dGVkIiwgIm9wdGlvbnMiLCAibWFwIiwgInNpdGUiLCAiaW5kZXgiLCAidmFsdWUiLCAiU3RyaW5nIiwgImxhYmVsIiwgIndhdGNoIiwgIm9uU2VsZWN0IiwgImltcG9ydF92dWUzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJpZCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVRleHRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiZGVmYXVsdCIsICJjcmVhdGVWTm9kZSIsICJzZWxlY3RlZCIsICIkZXZlbnQiLCAiXyIsICJTZWFyY2hFbmdpbmVTZWxlY3RfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIlNlYXJjaEVuZ2luZVNlbGVjdF9kZWZhdWx0MiIsICJvcGVuUGFnZSIsICJ1cmwiLCAiZWxlbWVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImhyZWYiLCAidGFyZ2V0IiwgInJlbCIsICJqb2luIiwgImNsaWNrIiwgImFkZExpc3RlbmVyIiwgInRhcmdldEVsZW1lbnQiLCAiZ2V0U2VsZWN0ZWRPcHRpb24iLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJfc2VsZWN0ZWRPcHRpb24kdXJsIiwgImlucHV0RWxlbWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInNlbGVjdGVkT3B0aW9uIiwgIm9yaWdpbiIsICJwcmV2ZW50RGVmYXVsdCIsICJyZXBsYWNlIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJpbXBvcnRfdnVlNCIsICJzaXRlRG9tYWluIiwgImdldE9wdGlvbkRhdGEiLCAiY29uY2F0IiwgInByb2Nlc3NFbGVtZW50IiwgInNlYXJjaEVsZW1lbnQiLCAicm9vdCIsICJjbGFzc05hbWUiLCAiYXBwZW5kIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJOdW1iZXIiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVuaGFuY2VkU3BlY2lhbFNlYXJjaCIsICIkYm9keSIsICJfJGJvZHkkZmluZCRnZXQiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJmaW5kIl0KfQo=
