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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvRGVmYXVsdFN1bW1hcmllcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24iLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJkaXN0L0RlZmF1bHRTdW1tYXJpZXMvc3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy91dGlsL1N1bW1hcnlEcm9wZG93bi52dWUiLCAic2ZjLXRlbXBsYXRlOkU6XFxDb2Rlc1xcUWl1d2VuXFxRaXV3ZW5HYWRnZXRzXFxzcmNcXERlZmF1bHRTdW1tYXJpZXNcXG1vZHVsZXNcXHV0aWxcXFN1bW1hcnlEcm9wZG93bi52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3V0aWwvU3VtbWFyeURyb3Bkb3duLnZ1ZSIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24udHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkZWZhdWx0U3VtbWFyaWVzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LURlZmF1bHRTdW1tYXJpZXNfX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRGVmYXVsdFN1bW1hcmllc19fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwiZHJvcGRvd25JZFwiOiBcImVkaXRmb3JtX2RlZmF1bHRfc3VtbWFyeVwiXG59XG4iLCAiY29uc3Qge3dnVUxTfSA9IHdpbmRvdztcbmNvbnN0IHt3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBDT01NT05fU1VNTUFSSUVTX0xBQkVMOiBzdHJpbmcgPSB3Z1VMUygn5bi455So57yW6L6R5pGY6KaBJywgJ+W4uOeUqOe3qOi8r+aRmOimgScpO1xuXG5sZXQgQ09NTU9OX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfkv67ppbDor63lj6UnLCAn5L+u6aO+6Kqe5Y+lJyksXG5cdHdnVUxTKCfkv67mraPor63ms5UnLCAn5L+u5q2j6Kqe5rOVJyksXG5cdHdnVUxTKCfkv67mraPplJnlrZcnLCAn5L+u5q2j6Yyv5a2XJyksXG5cdHdnVUxTKCfmianlhYXlhoXlrrknLCAn5pO05YWF5YWn5a65JyksXG5cdHdnVUxTKCfosIPmlbTmoLzlvI8nLCAn6Kq/5pW05qC85byPJyksXG5cdHdnVUxTKCfosIPmlbTliIbnsbsnLCAn6Kq/5pW05YiG6aGeJyksXG5cdHdnVUxTKCfosIPmlbTpk77mjqUnLCAn6LCD5pW06YCj57WQJyksXG5cdHdnVUxTKCfnp7vpmaTnoLTlnY8nLCAn56e76Zmk56C05aOeJyksXG5cdHdnVUxTKCfnp7vpmaTmtYvor5UnLCAn56e76Zmk5ris6KmmJyksXG5cdHdnVUxTKCfnu7TmiqTmuIXnkIYnLCAn57at6K235riF55CGJyksXG5dO1xuXG5pZiAoIXdnQ3VyUmV2aXNpb25JZCkge1xuXHRDT01NT05fU1VNTUFSSUVTID0gW3dnVUxTKCfmlrDpobXpnaInLCAn5paw6aCB6Z2iJyksIC4uLkNPTU1PTl9TVU1NQVJJRVNdO1xufVxuXG5jb25zdCBBUlRJQ0xFX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfosIPmlbTmnaXmupAnLCAn6Kq/5pW05L6G5rqQJyksXG5cdHdnVUxTKCfliKDpmaTml6DmnaXmupDlhoXlrrknLCAn5Yiq6Zmk54Sh5L6G5rqQ5YWn5a65JyksXG5cdHdnVUxTKCfmgaLlpI3np7vpmaTnmoTlhoXlrrknLCAn5oGi5b6p56e76Zmk55qE5YWn5a65JyksXG5dO1xuXG5jb25zdCBUQUxLUEFHRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5Zue5aSNJywgJ+WbnuimhicpLFxuXHR3Z1VMUygn6K+E6K66JywgJ+ipleirlicpLFxuXHR3Z1VMUygn5oSP6KeBJywgJ+aEj+imiycpLFxuXHR3Z1VMUygn6K+35rGCJywgJ+iri+axgicpLFxuXTtcblxuZXhwb3J0IHtDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBDT01NT05fU1VNTUFSSUVTLCBBUlRJQ0xFX1NVTU1BUklFUywgVEFMS1BBR0VfU1VNTUFSSUVTfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhTZWxlY3QsIHR5cGUgTWVudUl0ZW1EYXRhfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRsYWJlbDogc3RyaW5nO1xuXHRzdW1tYXJpZXM6IHN0cmluZ1tdO1xuXHRvblNlbGVjdDogKHN1bW1hcnk6IHN0cmluZykgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IGNvbXB1dGVkPE1lbnVJdGVtRGF0YVtdPigoKSA9PlxuXHRwcm9wcy5zdW1tYXJpZXMubWFwKChzdW1tYXJ5KSA9PiAoe1xuXHRcdHZhbHVlOiBzdW1tYXJ5LFxuXHRcdGxhYmVsOiBzdW1tYXJ5LFxuXHR9KSlcbik7XG5cbmNvbnN0IHNlbGVjdFN1bW1hcnkgPSAoc3VtbWFyeTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRpZiAodHlwZW9mIHN1bW1hcnkgPT09ICdzdHJpbmcnKSB7XG5cdFx0cHJvcHMub25TZWxlY3Qoc3VtbWFyeSk7XG5cdH1cbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LXNlbGVjdCA6c2VsZWN0ZWQ9XCJudWxsXCIgOm1lbnUtaXRlbXM9XCJtZW51SXRlbXNcIiA6ZGVmYXVsdC1sYWJlbD1cImxhYmVsXCIgQHVwZGF0ZTpzZWxlY3RlZD1cInNlbGVjdFN1bW1hcnlcIiAvPlxuPC90ZW1wbGF0ZT5cbiIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4U2VsZWN0XCJdLCB7XG4gICAgc2VsZWN0ZWQ6IG51bGwsXG4gICAgXCJtZW51LWl0ZW1zXCI6ICRzZXR1cC5tZW51SXRlbXMsXG4gICAgXCJkZWZhdWx0LWxhYmVsXCI6ICRwcm9wcy5sYWJlbCxcbiAgICBcIm9uVXBkYXRlOnNlbGVjdGVkXCI6ICRzZXR1cC5zZWxlY3RTdW1tYXJ5XG4gIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm1lbnUtaXRlbXNcIiwgXCJkZWZhdWx0LWxhYmVsXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXERlZmF1bHRTdW1tYXJpZXNcXFxcbW9kdWxlc1xcXFx1dGlsXFxcXFN1bW1hcnlEcm9wZG93bi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXERlZmF1bHRTdW1tYXJpZXNcXFxcbW9kdWxlc1xcXFx1dGlsXFxcXFN1bW1hcnlEcm9wZG93bi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxEZWZhdWx0U3VtbWFyaWVzXFxcXG1vZHVsZXNcXFxcdXRpbFxcXFxTdW1tYXJ5RHJvcGRvd24udnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0FSVElDTEVfU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBUQUxLUEFHRV9TVU1NQVJJRVN9IGZyb20gJy4uL21lc3NhZ2VzJztcbmltcG9ydCBTdW1tYXJ5RHJvcGRvd24gZnJvbSAnLi9TdW1tYXJ5RHJvcGRvd24udnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuXG5jb25zdCBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93biA9ICgkd3BTdW1tYXJ5OiBKUXVlcnkpOiBKUXVlcnkgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRsZXQgc3VtbWFyaWVzID0gQ09NTU9OX1NVTU1BUklFUztcblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDAgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDExOCkge1xuXHRcdHN1bW1hcmllcyA9IHN1bW1hcmllcy5jb25jYXQoQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9IGVsc2UgaWYgKHdnTmFtZXNwYWNlTnVtYmVyICUgMiAhPT0gMCAmJiB3Z05hbWVzcGFjZU51bWJlciAhPT0gMykge1xuXHRcdHN1bW1hcmllcyA9IHN1bW1hcmllcy5jb25jYXQoVEFMS1BBR0VfU1VNTUFSSUVTKTtcblx0fVxuXG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0cm9vdC5pZCA9IE9QVElPTlMuZHJvcGRvd25JZDtcblx0Y3JlYXRlQXBwKFN1bW1hcnlEcm9wZG93biwge1xuXHRcdGxhYmVsOiBDT01NT05fU1VNTUFSSUVTX0xBQkVMLFxuXHRcdHN1bW1hcmllcyxcblx0XHRvblNlbGVjdDogKHN1bW1hcnk6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3Qgb3JpZ2luU3VtbWFyeSA9ICgkd3BTdW1tYXJ5LnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJyc7XG5cdFx0XHQkd3BTdW1tYXJ5LnZhbChvcmlnaW5TdW1tYXJ5LnRyaW0oKSA/IGAke29yaWdpblN1bW1hcnl9ICR7c3VtbWFyeX1gIDogc3VtbWFyeSkudHJpZ2dlcignY2hhbmdlJyk7XG5cdFx0fSxcblx0fSkubW91bnQocm9vdCk7XG5cblx0cmV0dXJuICQocm9vdCk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlU3VtbWFyeURyb3Bkb3dufTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICgpOiB2b2lkID0+IHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt0YXJnZXR9ID0gd2luZG93LnZlLmluaXQ7XG5cdGNvbnN0IHtzYXZlRGlhbG9nfSA9IHRhcmdldDtcblx0Y29uc3QgeyRzYXZlT3B0aW9uc30gPSBzYXZlRGlhbG9nO1xuXHRpZiAoISRzYXZlT3B0aW9ucy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCB0cnVlKTtcblxuXHRjb25zdCAkZHJvcGRvd25zOiBKUXVlcnkgPSBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bih0YXJnZXQuc2F2ZURpYWxvZy5lZGl0U3VtbWFyeUlucHV0LiRpbnB1dCk7XG5cblx0aWYgKCFzYXZlRGlhbG9nLiRlbGVtZW50LmZpbmQoYCMke09QVElPTlMuZHJvcGRvd25JZH1gKS5sZW5ndGgpIHtcblx0XHQkc2F2ZU9wdGlvbnMuYmVmb3JlKCRkcm9wZG93bnMpO1xuXHR9XG5cblx0Ly8gUmVpbml0aWFsaXphdGlvbiBpcyByZXF1aXJlZCBmb3Igc3dpdGNoaW5nIGJldHdlZW4gVmlzdWFsRWRpdG9yIGFuZCBOZXcgV2lraXRleHQgRWRpdG9yICgyMDE3KVxuXHRtdy5ob29rKCd2ZS5hY3RpdmF0aW9uQ29tcGxldGUnKS5hZGQoKCkgPT4ge1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5VmUpKSB7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5VmUsIGZhbHNlKTtcblx0XHR9XG5cdH0pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn0gZnJvbSAnLi91dGlsL2dlbmVyYXRlU3VtbWFyeURyb3Bkb3duJztcblxuY29uc3QgcHJvY2Vzc1dpa2lFZGl0b3IgPSAoJGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXG5cdGNvbnN0ICRlZGl0Q2hlY2tib3hlczogSlF1ZXJ5ID0gJGVkaXRGb3JtLmZpbmQoJy5lZGl0Q2hlY2tib3hlcycpO1xuXHRpZiAoISRlZGl0Q2hlY2tib3hlcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCAkZHJvcGRvd25zOiBKUXVlcnkgPSBnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bigkZWRpdEZvcm0uZmluZCgnaW5wdXRbbmFtZT13cFN1bW1hcnldJykpO1xuXG5cdCRkcm9wZG93bnMuY3NzKHtcblx0XHQncGFkZGluZy1ib3R0b20nOiAnMWVtJyxcblx0XHR3aWR0aDogJzQ4JScsXG5cdH0pO1xuXG5cdGlmICghJGVkaXRGb3JtLmZpbmQoYCMke09QVElPTlMuZHJvcGRvd25JZH1gKS5sZW5ndGgpIHtcblx0XHQkZWRpdENoZWNrYm94ZXMuYmVmb3JlKCRkcm9wZG93bnMpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NXaWtpRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsWUFBYTtBQUNiLElBQUFDLGNBQWU7QUFDZixJQUFBQyxhQUFjOztBQ0hmLElBQU07RUFBQ0M7QUFBSyxJQUFJQztBQUNoQixJQUFNO0VBQUNDO0FBQWUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUV4QyxJQUFNQyx5QkFBaUNOLE1BQU0sVUFBVSxRQUFRO0FBRS9ELElB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VSxDQUFFLEVBQUU2RCxRQUFRO0FBQ3JEWSxvQkFBZ0JMLE9BQU9MLFVBQVU7RUFDbEM7QUFDRDs7QVJ2QkEsTUFBQSxHQUFLbkUsa0JBQUFnRixTQUFRLEVBQUVDLEtBQUssU0FBU0MsbUJBQXlCO0FBQ3JEMUUsS0FBR2lFLEtBQUssbUJBQW1CLEVBQUVDLElBQUtFLGVBQW9CO0FBQ3JERCxzQkFBa0JDLFNBQVM7RUFDNUIsQ0FBQztBQUVEcEUsS0FBR2lFLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRGYsd0JBQW9CO0VBQ3JCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImNvbmZpZ0tleSIsICJjb25maWdLZXlWZSIsICJkcm9wZG93bklkIiwgIndnVUxTIiwgIndpbmRvdyIsICJ3Z0N1clJldmlzaW9uSWQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJDT01NT05fU1VNTUFSSUVTX0xBQkVMIiwgIkNPTU1PTl9TVU1NQVJJRVMiLCAiQVJUSUNMRV9TVU1NQVJJRVMiLCAiVEFMS1BBR0VfU1VNTUFSSUVTIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgIm1lbnVJdGVtcyIsICJjb21wdXRlZCIsICJzdW1tYXJpZXMiLCAibWFwIiwgInN1bW1hcnkiLCAidmFsdWUiLCAibGFiZWwiLCAic2VsZWN0U3VtbWFyeSIsICJvblNlbGVjdCIsICJpbXBvcnRfdnVlMyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAic2VsZWN0ZWQiLCAiU3VtbWFyeURyb3Bkb3duX2RlZmF1bHQiLCAiX19maWxlIiwgIlN1bW1hcnlEcm9wZG93bl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNCIsICJnZW5lcmF0ZVN1bW1hcnlEcm9wZG93biIsICIkd3BTdW1tYXJ5IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImNvbmNhdCIsICJyb290IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAiY3JlYXRlQXBwIiwgIl8kd3BTdW1tYXJ5JHZhbCIsICJvcmlnaW5TdW1tYXJ5IiwgInZhbCIsICJ0cmltIiwgInRyaWdnZXIiLCAibW91bnQiLCAiJCIsICJwcm9jZXNzVmlzdWFsRWRpdG9yIiwgInRhcmdldCIsICJ2ZSIsICJpbml0IiwgInNhdmVEaWFsb2ciLCAiJHNhdmVPcHRpb25zIiwgImxlbmd0aCIsICJzZXQiLCAiJGRyb3Bkb3ducyIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICIkZWxlbWVudCIsICJmaW5kIiwgImJlZm9yZSIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAiJGVkaXRDaGVja2JveGVzIiwgImNzcyIsICJ3aWR0aCIsICJnZXRCb2R5IiwgInRoZW4iLCAiZGVmYXVsdFN1bW1hcmllcyJdCn0K
