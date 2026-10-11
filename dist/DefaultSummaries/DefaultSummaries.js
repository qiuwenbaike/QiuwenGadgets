/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-defaultsummaries.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DefaultSummaries}
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

// dist/DefaultSummaries/DefaultSummaries.js
//! src/DefaultSummaries/DefaultSummaries.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/DefaultSummaries/options.json
var configKey = "gadget-DefaultSummaries__Initialized";
var configKeyVe = "gadget-DefaultSummaries__Initialized__VE";
var dropdownId = "editform_default_summary";
//! src/DefaultSummaries/modules/messages.ts
var {
  wgULS
} = window;
var {
  wgCurRevisionId
} = mw.config.get();
var COMMON_SUMMARIES_LABEL = wgULS("常用编辑摘要", "常用編輯摘要");
var COMMON_SUMMARIES = [wgULS("修饰语句", "修飾語句"), wgULS("修正语法", "修正語法"), wgULS("修正错字", "修正錯字"), wgULS("扩充内容", "擴充內容"), wgULS("调整格式", "調整格式"), wgULS("调整分类", "調整分類"), wgULS("调整链接", "调整連結"), wgULS("移除破坏", "移除破壞"), wgULS("移除测试", "移除測試"), wgULS("维护清理", "維護清理")];
if (!wgCurRevisionId) {
  COMMON_SUMMARIES = [wgULS("新页面", "新頁面"), ...COMMON_SUMMARIES];
}
var ARTICLE_SUMMARIES = [wgULS("调整来源", "調整來源"), wgULS("删除无来源内容", "刪除無來源內容"), wgULS("恢复移除的内容", "恢復移除的內容")];
var TALKPAGE_SUMMARIES = [wgULS("回复", "回覆"), wgULS("评论", "評論"), wgULS("意见", "意見"), wgULS("请求", "請求")];
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
var SummaryDropdown_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "SummaryDropdown",
  props: {
    label: {
      type: String,
      required: true
    },
    summaries: {
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
    const menuItems = (0, import_vue2.computed)(() => props.summaries.map((summary) => ({
      value: summary,
      label: summary
    })));
    const selectSummary = (summary) => {
      if (typeof summary === "string") {
        props.onSelect(summary);
      }
    };
    const __returned__ = {
      props,
      menuItems,
      selectSummary,
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxSelect"], {
    selected: null,
    "menu-items": $setup.menuItems,
    "default-label": $props.label,
    "onUpdate:selected": $setup.selectSummary
  }, null, 8, ["menu-items", "default-label"]);
}
//! src/DefaultSummaries/modules/util/SummaryDropdown.vue
SummaryDropdown_default.render = render;
SummaryDropdown_default.__file = "src\\DefaultSummaries\\modules\\util\\SummaryDropdown.vue";
var SummaryDropdown_default2 = SummaryDropdown_default;
//! src/DefaultSummaries/modules/util/generateSummaryDropdown.ts
var import_vue4 = require("vue");
var generateSummaryDropdown = ($wpSummary) => {
  const {
    wgNamespaceNumber
  } = mw.config.get();
  let summaries = COMMON_SUMMARIES;
  if (wgNamespaceNumber === 0 || wgNamespaceNumber === 118) {
    summaries = summaries.concat(ARTICLE_SUMMARIES);
  } else if (wgNamespaceNumber % 2 !== 0 && wgNamespaceNumber !== 3) {
    summaries = summaries.concat(TALKPAGE_SUMMARIES);
  }
  const root = document.createElement("div");
  root.id = dropdownId;
  (0, import_vue4.createApp)(SummaryDropdown_default2, {
    label: COMMON_SUMMARIES_LABEL,
    summaries,
    onSelect: (summary) => {
      var _$wpSummary$val;
      const originSummary = (_$wpSummary$val = $wpSummary.val()) !== null && _$wpSummary$val !== void 0 ? _$wpSummary$val : "";
      $wpSummary.val(originSummary.trim() ? "".concat(originSummary, " ").concat(summary) : summary).trigger("change");
    }
  }).mount(root);
  return $(root);
};
//! src/DefaultSummaries/modules/processVisualEditor.ts
var processVisualEditor = () => {
  if (mw.config.get(configKeyVe)) {
    return;
  }
  const {
    target
  } = window.ve.init;
  const {
    saveDialog
  } = target;
  const {
    $saveOptions
  } = saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  mw.config.set(configKeyVe, true);
  const $dropdowns = generateSummaryDropdown(target.saveDialog.editSummaryInput.$input);
  if (!saveDialog.$element.find("#".concat(dropdownId)).length) {
    $saveOptions.before($dropdowns);
  }
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKeyVe)) {
      mw.config.set(configKeyVe, false);
    }
  });
};
//! src/DefaultSummaries/modules/processWikiEditor.ts
var processWikiEditor = ($editForm) => {
  if (mw.config.get(configKey)) {
    return;
  }
  mw.config.set(configKey, true);
  const $editCheckboxes = $editForm.find(".editCheckboxes");
  if (!$editCheckboxes.length) {
    return;
  }
  const $dropdowns = generateSummaryDropdown($editForm.find("input[name=wpSummary]"));
  $dropdowns.css({
    "padding-bottom": "1em",
    width: "48%"
  });
  if (!$editForm.find("#".concat(dropdownId)).length) {
    $editCheckboxes.before($dropdowns);
  }
};
//! src/DefaultSummaries/DefaultSummaries.ts
void (0, import_ext_gadget.getBody)().then(function defaultSummaries() {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor($editForm);
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor();
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvRGVmYXVsdFN1bW1hcmllcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24iLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJkaXN0L0RlZmF1bHRTdW1tYXJpZXMvc3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy91dGlsL1N1bW1hcnlEcm9wZG93bi52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXERlZmF1bHRTdW1tYXJpZXNcXG1vZHVsZXNcXHV0aWxcXFN1bW1hcnlEcm9wZG93bi52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3V0aWwvU3VtbWFyeURyb3Bkb3duLnZ1ZSIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24udHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkZWZhdWx0U3VtbWFyaWVzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LURlZmF1bHRTdW1tYXJpZXNfX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRGVmYXVsdFN1bW1hcmllc19fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwiZHJvcGRvd25JZFwiOiBcImVkaXRmb3JtX2RlZmF1bHRfc3VtbWFyeVwiXG59XG4iLCAiY29uc3Qge3dnVUxTfSA9IHdpbmRvdztcbmNvbnN0IHt3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBDT01NT05fU1VNTUFSSUVTX0xBQkVMOiBzdHJpbmcgPSB3Z1VMUygn5bi455So57yW6L6R5pGY6KaBJywgJ+W4uOeUqOe3qOi8r+aRmOimgScpO1xuXG5sZXQgQ09NTU9OX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfkv67ppbDor63lj6UnLCAn5L+u6aO+6Kqe5Y+lJyksXG5cdHdnVUxTKCfkv67mraPor63ms5UnLCAn5L+u5q2j6Kqe5rOVJyksXG5cdHdnVUxTKCfkv67mraPplJnlrZcnLCAn5L+u5q2j6Yyv5a2XJyksXG5cdHdnVUxTKCfmianlhYXlhoXlrrknLCAn5pO05YWF5YWn5a65JyksXG5cdHdnVUxTKCfosIPmlbTmoLzlvI8nLCAn6Kq/5pW05qC85byPJyksXG5cdHdnVUxTKCfosIPmlbTliIbnsbsnLCAn6Kq/5pW05YiG6aGeJyksXG5cdHdnVUxTKCfosIPmlbTpk77mjqUnLCAn6LCD5pW06YCj57WQJyksXG5cdHdnVUxTKCfnp7vpmaTnoLTlnY8nLCAn56e76Zmk56C05aOeJyksXG5cdHdnVUxTKCfnp7vpmaTmtYvor5UnLCAn56e76Zmk5ris6KmmJyksXG5cdHdnVUxTKCfnu7TmiqTmuIXnkIYnLCAn57at6K235riF55CGJyksXG5dO1xuXG5pZiAoIXdnQ3VyUmV2aXNpb25JZCkge1xuXHRDT01NT05fU1VNTUFSSUVTID0gW3dnVUxTKCfmlrDpobXpnaInLCAn5paw6aCB6Z2iJyksIC4uLkNPTU1PTl9TVU1NQVJJRVNdO1xufVxuXG5jb25zdCBBUlRJQ0xFX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfosIPmlbTmnaXmupAnLCAn6Kq/5pW05L6G5rqQJyksXG5cdHdnVUxTKCfliKDpmaTml6DmnaXmupDlhoXlrrknLCAn5Yiq6Zmk54Sh5L6G5rqQ5YWn5a65JyksXG5cdHdnVUxTKCfmgaLlpI3np7vpmaTnmoTlhoXlrrknLCAn5oGi5b6p56e76Zmk55qE5YWn5a65JyksXG5dO1xuXG5jb25zdCBUQUxLUEFHRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5Zue5aSNJywgJ+WbnuimhicpLFxuXHR3Z1VMUygn6K+E6K66JywgJ+ipleirlicpLFxuXHR3Z1VMUygn5oSP6KeBJywgJ+aEj+imiycpLFxuXHR3Z1VMUygn6K+35rGCJywgJ+iri+axgicpLFxuXTtcblxuZXhwb3J0IHtDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBDT01NT05fU1VNTUFSSUVTLCBBUlRJQ0xFX1NVTU1BUklFUywgVEFMS1BBR0VfU1VNTUFSSUVTfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhTZWxlY3QsIHR5cGUgTWVudUl0ZW1EYXRhfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRsYWJlbDogc3RyaW5nO1xuXHRzdW1tYXJpZXM6IHN0cmluZ1tdO1xuXHRvblNlbGVjdDogKHN1bW1hcnk6IHN0cmluZykgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IGNvbXB1dGVkPE1lbnVJdGVtRGF0YVtdPigoKSA9PlxuXHRwcm9wcy5zdW1tYXJpZXMubWFwKChzdW1tYXJ5KSA9PiAoe1xuXHRcdHZhbHVlOiBzdW1tYXJ5LFxuXHRcdGxhYmVsOiBzdW1tYXJ5LFxuXHR9KSlcbik7XG5cbmNvbnN0IHNlbGVjdFN1bW1hcnkgPSAoc3VtbWFyeTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRpZiAodHlwZW9mIHN1bW1hcnkgPT09ICdzdHJpbmcnKSB7XG5cdFx0cHJvcHMub25TZWxlY3Qoc3VtbWFyeSk7XG5cdH1cbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LXNlbGVjdCA6c2VsZWN0ZWQ9XCJudWxsXCIgOm1lbnUtaXRlbXM9XCJtZW51SXRlbXNcIiA6ZGVmYXVsdC1sYWJlbD1cImxhYmVsXCIgQHVwZGF0ZTpzZWxlY3RlZD1cInNlbGVjdFN1bW1hcnlcIiAvPlxuPC90ZW1wbGF0ZT5cbiIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4U2VsZWN0XCJdLCB7XG4gICAgc2VsZWN0ZWQ6IG51bGwsXG4gICAgXCJtZW51LWl0ZW1zXCI6ICRzZXR1cC5tZW51SXRlbXMsXG4gICAgXCJkZWZhdWx0LWxhYmVsXCI6ICRwcm9wcy5sYWJlbCxcbiAgICBcIm9uVXBkYXRlOnNlbGVjdGVkXCI6ICRzZXR1cC5zZWxlY3RTdW1tYXJ5XG4gIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm1lbnUtaXRlbXNcIiwgXCJkZWZhdWx0LWxhYmVsXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxEZWZhdWx0U3VtbWFyaWVzXFxcXG1vZHVsZXNcXFxcdXRpbFxcXFxTdW1tYXJ5RHJvcGRvd24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRGVmYXVsdFN1bW1hcmllc1xcXFxtb2R1bGVzXFxcXHV0aWxcXFxcU3VtbWFyeURyb3Bkb3duLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXERlZmF1bHRTdW1tYXJpZXNcXFxcbW9kdWxlc1xcXFx1dGlsXFxcXFN1bW1hcnlEcm9wZG93bi52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7QVJUSUNMRV9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVMsIENPTU1PTl9TVU1NQVJJRVNfTEFCRUwsIFRBTEtQQUdFX1NVTU1BUklFU30gZnJvbSAnLi4vbWVzc2FnZXMnO1xuaW1wb3J0IFN1bW1hcnlEcm9wZG93biBmcm9tICcuL1N1bW1hcnlEcm9wZG93bi52dWUnO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duID0gKCR3cFN1bW1hcnk6IEpRdWVyeSk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxldCBzdW1tYXJpZXMgPSBDT01NT05fU1VNTUFSSUVTO1xuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCB8fCB3Z05hbWVzcGFjZU51bWJlciA9PT0gMTE4KSB7XG5cdFx0c3VtbWFyaWVzID0gc3VtbWFyaWVzLmNvbmNhdChBUlRJQ0xFX1NVTU1BUklFUyk7XG5cdH0gZWxzZSBpZiAod2dOYW1lc3BhY2VOdW1iZXIgJSAyICE9PSAwICYmIHdnTmFtZXNwYWNlTnVtYmVyICE9PSAzKSB7XG5cdFx0c3VtbWFyaWVzID0gc3VtbWFyaWVzLmNvbmNhdChUQUxLUEFHRV9TVU1NQVJJRVMpO1xuXHR9XG5cblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRyb290LmlkID0gT1BUSU9OUy5kcm9wZG93bklkO1xuXHRjcmVhdGVBcHAoU3VtbWFyeURyb3Bkb3duLCB7XG5cdFx0bGFiZWw6IENPTU1PTl9TVU1NQVJJRVNfTEFCRUwsXG5cdFx0c3VtbWFyaWVzLFxuXHRcdG9uU2VsZWN0OiAoc3VtbWFyeTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCBvcmlnaW5TdW1tYXJ5ID0gKCR3cFN1bW1hcnkudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJztcblx0XHRcdCR3cFN1bW1hcnkudmFsKG9yaWdpblN1bW1hcnkudHJpbSgpID8gYCR7b3JpZ2luU3VtbWFyeX0gJHtzdW1tYXJ5fWAgOiBzdW1tYXJ5KS50cmlnZ2VyKCdjaGFuZ2UnKTtcblx0XHR9LFxuXHR9KS5tb3VudChyb290KTtcblxuXHRyZXR1cm4gJChyb290KTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9EZWZhdWx0U3VtbWFyaWVzL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3RhcmdldH0gPSB3aW5kb3cudmUuaW5pdDtcblx0Y29uc3Qge3NhdmVEaWFsb2d9ID0gdGFyZ2V0O1xuXHRjb25zdCB7JHNhdmVPcHRpb25zfSA9IHNhdmVEaWFsb2c7XG5cdGlmICghJHNhdmVPcHRpb25zLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIHRydWUpO1xuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKHRhcmdldC5zYXZlRGlhbG9nLmVkaXRTdW1tYXJ5SW5wdXQuJGlucHV0KTtcblxuXHRpZiAoIXNhdmVEaWFsb2cuJGVsZW1lbnQuZmluZChgIyR7T1BUSU9OUy5kcm9wZG93bklkfWApLmxlbmd0aCkge1xuXHRcdCRzYXZlT3B0aW9ucy5iZWZvcmUoJGRyb3Bkb3ducyk7XG5cdH1cblxuXHQvLyBSZWluaXRpYWxpemF0aW9uIGlzIHJlcXVpcmVkIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBWaXN1YWxFZGl0b3IgYW5kIE5ldyBXaWtpdGV4dCBFZGl0b3IgKDIwMTcpXG5cdG13Lmhvb2soJ3ZlLmFjdGl2YXRpb25Db21wbGV0ZScpLmFkZCgoKSA9PiB7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgZmFsc2UpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnfi9EZWZhdWx0U3VtbWFyaWVzL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24nO1xuXG5jb25zdCBwcm9jZXNzV2lraUVkaXRvciA9ICgkZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGVkaXRDaGVja2JveGVzOiBKUXVlcnkgPSAkZWRpdEZvcm0uZmluZCgnLmVkaXRDaGVja2JveGVzJyk7XG5cdGlmICghJGVkaXRDaGVja2JveGVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRkcm9wZG93bnM6IEpRdWVyeSA9IGdlbmVyYXRlU3VtbWFyeURyb3Bkb3duKCRlZGl0Rm9ybS5maW5kKCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKSk7XG5cblx0JGRyb3Bkb3ducy5jc3Moe1xuXHRcdCdwYWRkaW5nLWJvdHRvbSc6ICcxZW0nLFxuXHRcdHdpZHRoOiAnNDglJyxcblx0fSk7XG5cblx0aWYgKCEkZWRpdEZvcm0uZmluZChgIyR7T1BUSU9OUy5kcm9wZG93bklkfWApLmxlbmd0aCkge1xuXHRcdCRlZGl0Q2hlY2tib3hlcy5iZWZvcmUoJGRyb3Bkb3ducyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1dpa2lFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsY0FBZTtBQUNmLElBQUFDLGFBQWM7O0FDSGYsSUFBTTtFQUFDQztBQUFLLElBQUlDO0FBQ2hCLElBQU07RUFBQ0M7QUFBZSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXhDLElBQU1DLHlCQUFpQ04sTUFBTSxVQUFVLFFBQVE7QUFFL0QsSUFBSU8s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QUUsRUFBRTZELFFBQVE7QUFDckRZLG9CQUFnQkwsT0FBT0wsVUFBVTtFQUNsQztBQUNEOztBUnZCQSxNQUFBLEdBQUtuRSxrQkFBQWdGLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxtQkFBeUI7QUFDckQxRSxLQUFHaUUsS0FBSyxtQkFBbUIsRUFBRUMsSUFBS0UsZUFBb0I7QUFDckRELHNCQUFrQkMsU0FBUztFQUM1QixDQUFDO0FBRURwRSxLQUFHaUUsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEZix3QkFBb0I7RUFDckIsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiY29uZmlnS2V5IiwgImNvbmZpZ0tleVZlIiwgImRyb3Bkb3duSWQiLCAid2dVTFMiLCAid2luZG93IiwgIndnQ3VyUmV2aXNpb25JZCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIkNPTU1PTl9TVU1NQVJJRVNfTEFCRUwiLCAiQ09NTU9OX1NVTU1BUklFUyIsICJBUlRJQ0xFX1NVTU1BUklFUyIsICJUQUxLUEFHRV9TVU1NQVJJRVMiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAibWVudUl0ZW1zIiwgImNvbXB1dGVkIiwgInN1bW1hcmllcyIsICJtYXAiLCAic3VtbWFyeSIsICJ2YWx1ZSIsICJsYWJlbCIsICJzZWxlY3RTdW1tYXJ5IiwgIm9uU2VsZWN0IiwgImltcG9ydF92dWUzIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJzZWxlY3RlZCIsICJTdW1tYXJ5RHJvcGRvd25fZGVmYXVsdCIsICJfX2ZpbGUiLCAiU3VtbWFyeURyb3Bkb3duX2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgImdlbmVyYXRlU3VtbWFyeURyb3Bkb3duIiwgIiR3cFN1bW1hcnkiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiY29uY2F0IiwgInJvb3QiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJjcmVhdGVBcHAiLCAiXyR3cFN1bW1hcnkkdmFsIiwgIm9yaWdpblN1bW1hcnkiLCAidmFsIiwgInRyaW0iLCAidHJpZ2dlciIsICJtb3VudCIsICIkIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAidGFyZ2V0IiwgInZlIiwgImluaXQiLCAic2F2ZURpYWxvZyIsICIkc2F2ZU9wdGlvbnMiLCAibGVuZ3RoIiwgInNldCIsICIkZHJvcGRvd25zIiwgImVkaXRTdW1tYXJ5SW5wdXQiLCAiJGlucHV0IiwgIiRlbGVtZW50IiwgImZpbmQiLCAiYmVmb3JlIiwgImhvb2siLCAiYWRkIiwgInByb2Nlc3NXaWtpRWRpdG9yIiwgIiRlZGl0Rm9ybSIsICIkZWRpdENoZWNrYm94ZXMiLCAiY3NzIiwgIndpZHRoIiwgImdldEJvZHkiLCAidGhlbiIsICJkZWZhdWx0U3VtbWFyaWVzIl0KfQo=
