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
      const originSummary = $wpSummary.val() ?? "";
      $wpSummary.val(originSummary.trim() ? `${originSummary} ${summary}` : summary).trigger("change");
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
  if (!saveDialog.$element.find(`#${dropdownId}`).length) {
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
  if (!$editForm.find(`#${dropdownId}`).length) {
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

