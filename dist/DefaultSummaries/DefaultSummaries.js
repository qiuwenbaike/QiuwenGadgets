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
var COMMON_SUMMARIES = [wgULS("修正语法", "修正語法"), wgULS("修正错字", "修正錯字"), wgULS("调整格式", "調整格式"), wgULS("移除破坏", "移除破壞"), wgULS("移除测试", "移除測試")];
if (!wgCurRevisionId) {
  COMMON_SUMMARIES = [wgULS("新页面", "新頁面"), ...COMMON_SUMMARIES];
}
var ARTICLE_SUMMARIES = [wgULS("扩写条目", "擴寫條目"), wgULS("调整来源", "調整來源"), wgULS("调整分类", "調整分類"), wgULS("调整链接", "调整連結"), wgULS("删除无来源内容", "刪除無來源內容"), wgULS("恢复移除的内容", "恢復移除的內容")];
var TALKPAGE_SUMMARIES = [wgULS("回复", "回覆"), wgULS("评论", "評論"), wgULS("意见", "意見"), wgULS("请求", "請求")];
//! src/DefaultSummaries/modules/util/generateSummaryDropdown.ts
var generateMenuOptionWidget = (label) => {
  return new OO.ui.MenuOptionWidget({
    label
  });
};
var addOptionsToDropdown = (dropdownWidget, summaries) => {
  const menuOptionWidgets = [];
  var _iterator = _createForOfIteratorHelper(summaries), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const summary = _step.value;
      menuOptionWidgets[menuOptionWidgets.length] = generateMenuOptionWidget(summary);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  dropdownWidget.getMenu().addItems(menuOptionWidgets);
};
var onSelectCallback = (optionWidget, $wpSummary) => {
  var _$wpSummary$val;
  const originSummary = (_$wpSummary$val = $wpSummary.val()) !== null && _$wpSummary$val !== void 0 ? _$wpSummary$val : "";
  const customSummary = optionWidget.getLabel();
  $wpSummary.val(originSummary.trim() ? "".concat(originSummary, " ").concat(customSummary) : customSummary).trigger("change");
};
var generateSummaryDropdown = ($wpSummary) => {
  const {
    wgNamespaceNumber
  } = mw.config.get();
  const dropdownWidget = new OO.ui.DropdownWidget({
    label: COMMON_SUMMARIES_LABEL
  });
  dropdownWidget.setElementId(dropdownId);
  dropdownWidget.getMenu().on("select", (optionWidget) => {
    onSelectCallback(optionWidget, $wpSummary);
  });
  addOptionsToDropdown(dropdownWidget, COMMON_SUMMARIES);
  if (wgNamespaceNumber === 0) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  } else if (wgNamespaceNumber % 2 !== 0 && wgNamespaceNumber !== 3) {
    addOptionsToDropdown(dropdownWidget, TALKPAGE_SUMMARIES);
  } else if (wgNamespaceNumber === 118) {
    addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
  }
  return dropdownWidget.$element;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RlZmF1bHRTdW1tYXJpZXMvRGVmYXVsdFN1bW1hcmllcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9vcHRpb25zLmpzb24iLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvRGVmYXVsdFN1bW1hcmllcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24udHMiLCAic3JjL0RlZmF1bHRTdW1tYXJpZXMvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIiwgInNyYy9EZWZhdWx0U3VtbWFyaWVzL21vZHVsZXMvcHJvY2Vzc1dpa2lFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtwcm9jZXNzV2lraUVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NXaWtpRWRpdG9yJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkZWZhdWx0U3VtbWFyaWVzKCk6IHZvaWQge1xuXHRtdy5ob29rKCd3aWtpcGFnZS5lZGl0Zm9ybScpLmFkZCgoJGVkaXRGb3JtKTogdm9pZCA9PiB7XG5cdFx0cHJvY2Vzc1dpa2lFZGl0b3IoJGVkaXRGb3JtKTtcblx0fSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoKTtcblx0fSk7XG59KTtcbiIsICJ7XG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LURlZmF1bHRTdW1tYXJpZXNfX0luaXRpYWxpemVkXCIsXG5cdFwiY29uZmlnS2V5VmVcIjogXCJnYWRnZXQtRGVmYXVsdFN1bW1hcmllc19fSW5pdGlhbGl6ZWRfX1ZFXCIsXG5cdFwiZHJvcGRvd25JZFwiOiBcImVkaXRmb3JtX2RlZmF1bHRfc3VtbWFyeVwiXG59XG4iLCAiY29uc3Qge3dnVUxTfSA9IHdpbmRvdztcbmNvbnN0IHt3Z0N1clJldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBDT01NT05fU1VNTUFSSUVTX0xBQkVMOiBzdHJpbmcgPSB3Z1VMUygn5bi455So57yW6L6R5pGY6KaBJywgJ+W4uOeUqOe3qOi8r+aRmOimgScpO1xuXG5sZXQgQ09NTU9OX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfkv67mraPor63ms5UnLCAn5L+u5q2j6Kqe5rOVJyksXG5cdHdnVUxTKCfkv67mraPplJnlrZcnLCAn5L+u5q2j6Yyv5a2XJyksXG5cdHdnVUxTKCfosIPmlbTmoLzlvI8nLCAn6Kq/5pW05qC85byPJyksXG5cdHdnVUxTKCfnp7vpmaTnoLTlnY8nLCAn56e76Zmk56C05aOeJyksXG5cdHdnVUxTKCfnp7vpmaTmtYvor5UnLCAn56e76Zmk5ris6KmmJyksXG5dO1xuXG5pZiAoIXdnQ3VyUmV2aXNpb25JZCkge1xuXHRDT01NT05fU1VNTUFSSUVTID0gW3dnVUxTKCfmlrDpobXpnaInLCAn5paw6aCB6Z2iJyksIC4uLkNPTU1PTl9TVU1NQVJJRVNdO1xufVxuXG5jb25zdCBBUlRJQ0xFX1NVTU1BUklFUzogc3RyaW5nW10gPSBbXG5cdHdnVUxTKCfmianlhpnmnaHnm64nLCAn5pO05a+r5qKd55uuJyksXG5cdHdnVUxTKCfosIPmlbTmnaXmupAnLCAn6Kq/5pW05L6G5rqQJyksXG5cdHdnVUxTKCfosIPmlbTliIbnsbsnLCAn6Kq/5pW05YiG6aGeJyksXG5cdHdnVUxTKCfosIPmlbTpk77mjqUnLCAn6LCD5pW06YCj57WQJyksXG5cdHdnVUxTKCfliKDpmaTml6DmnaXmupDlhoXlrrknLCAn5Yiq6Zmk54Sh5L6G5rqQ5YWn5a65JyksXG5cdHdnVUxTKCfmgaLlpI3np7vpmaTnmoTlhoXlrrknLCAn5oGi5b6p56e76Zmk55qE5YWn5a65JyksXG5dO1xuXG5jb25zdCBUQUxLUEFHRV9TVU1NQVJJRVM6IHN0cmluZ1tdID0gW1xuXHR3Z1VMUygn5Zue5aSNJywgJ+WbnuimhicpLFxuXHR3Z1VMUygn6K+E6K66JywgJ+ipleirlicpLFxuXHR3Z1VMUygn5oSP6KeBJywgJ+aEj+imiycpLFxuXHR3Z1VMUygn6K+35rGCJywgJ+iri+axgicpLFxuXTtcblxuZXhwb3J0IHtDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBDT01NT05fU1VNTUFSSUVTLCBBUlRJQ0xFX1NVTU1BUklFUywgVEFMS1BBR0VfU1VNTUFSSUVTfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0FSVElDTEVfU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTLCBDT01NT05fU1VNTUFSSUVTX0xBQkVMLCBUQUxLUEFHRV9TVU1NQVJJRVN9IGZyb20gJy4uL21lc3NhZ2VzJztcblxuLy8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcbmNvbnN0IGdlbmVyYXRlTWVudU9wdGlvbldpZGdldCA9IChsYWJlbDogc3RyaW5nKTogT08udWkuTWVudU9wdGlvbldpZGdldCA9PiB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdHJldHVybiBuZXcgT08udWkuTWVudU9wdGlvbldpZGdldCh7XG5cdFx0bGFiZWwsXG5cdH0pO1xufTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcbmNvbnN0IGFkZE9wdGlvbnNUb0Ryb3Bkb3duID0gKGRyb3Bkb3duV2lkZ2V0OiBPTy51aS5Ecm9wZG93bldpZGdldCwgc3VtbWFyaWVzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjb25zdCBtZW51T3B0aW9uV2lkZ2V0czogT08udWkuTWVudU9wdGlvbldpZGdldFtdID0gW107XG5cblx0Zm9yIChjb25zdCBzdW1tYXJ5IG9mIHN1bW1hcmllcykge1xuXHRcdG1lbnVPcHRpb25XaWRnZXRzW21lbnVPcHRpb25XaWRnZXRzLmxlbmd0aF0gPSBnZW5lcmF0ZU1lbnVPcHRpb25XaWRnZXQoc3VtbWFyeSk7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkuYWRkSXRlbXMobWVudU9wdGlvbldpZGdldHMpO1xufTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcbmNvbnN0IG9uU2VsZWN0Q2FsbGJhY2sgPSAob3B0aW9uV2lkZ2V0OiBPTy51aS5PcHRpb25XaWRnZXQsICR3cFN1bW1hcnk6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCBvcmlnaW5TdW1tYXJ5OiBzdHJpbmcgPSAoJHdwU3VtbWFyeS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnO1xuXHRjb25zdCBjdXN0b21TdW1tYXJ5OiBzdHJpbmcgPSBvcHRpb25XaWRnZXQuZ2V0TGFiZWwoKSBhcyBzdHJpbmc7XG5cblx0JHdwU3VtbWFyeS52YWwob3JpZ2luU3VtbWFyeS50cmltKCkgPyBgJHtvcmlnaW5TdW1tYXJ5fSAke2N1c3RvbVN1bW1hcnl9YCA6IGN1c3RvbVN1bW1hcnkpLnRyaWdnZXIoJ2NoYW5nZScpO1xufTtcblxuY29uc3QgZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24gPSAoJHdwU3VtbWFyeTogSlF1ZXJ5KTogSlF1ZXJ5ID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRjb25zdCBkcm9wZG93bldpZGdldDogT08udWkuRHJvcGRvd25XaWRnZXQgPSBuZXcgT08udWkuRHJvcGRvd25XaWRnZXQoe1xuXHRcdGxhYmVsOiBDT01NT05fU1VNTUFSSUVTX0xBQkVMLFxuXHR9KTtcblxuXHRkcm9wZG93bldpZGdldC5zZXRFbGVtZW50SWQoT1BUSU9OUy5kcm9wZG93bklkKTtcblxuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRkcm9wZG93bldpZGdldC5nZXRNZW51KCkub24oJ3NlbGVjdCcsIChvcHRpb25XaWRnZXQ6IE9PLnVpLk9wdGlvbldpZGdldCB8IE9PLnVpLk9wdGlvbldpZGdldFtdIHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0b25TZWxlY3RDYWxsYmFjayhvcHRpb25XaWRnZXQgYXMgT08udWkuT3B0aW9uV2lkZ2V0LCAkd3BTdW1tYXJ5KTtcblx0fSk7XG5cblx0YWRkT3B0aW9uc1RvRHJvcGRvd24oZHJvcGRvd25XaWRnZXQsIENPTU1PTl9TVU1NQVJJRVMpO1xuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9IGVsc2UgaWYgKHdnTmFtZXNwYWNlTnVtYmVyICUgMiAhPT0gMCAmJiB3Z05hbWVzcGFjZU51bWJlciAhPT0gMykge1xuXHRcdGFkZE9wdGlvbnNUb0Ryb3Bkb3duKGRyb3Bkb3duV2lkZ2V0LCBUQUxLUEFHRV9TVU1NQVJJRVMpO1xuXHR9IGVsc2UgaWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAxMTgpIHtcblx0XHRhZGRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93bldpZGdldCwgQVJUSUNMRV9TVU1NQVJJRVMpO1xuXHR9XG5cblx0cmV0dXJuIGRyb3Bkb3duV2lkZ2V0LiRlbGVtZW50O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVN1bW1hcnlEcm9wZG93bn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0RlZmF1bHRTdW1tYXJpZXMvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bic7XG5cbmNvbnN0IHByb2Nlc3NWaXN1YWxFZGl0b3IgPSAoKTogdm9pZCA9PiB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXlWZSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7dGFyZ2V0fSA9IHdpbmRvdy52ZS5pbml0O1xuXHRjb25zdCB7c2F2ZURpYWxvZ30gPSB0YXJnZXQ7XG5cdGNvbnN0IHskc2F2ZU9wdGlvbnN9ID0gc2F2ZURpYWxvZztcblx0aWYgKCEkc2F2ZU9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXlWZSwgdHJ1ZSk7XG5cblx0Y29uc3QgJGRyb3Bkb3duczogSlF1ZXJ5ID0gZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24odGFyZ2V0LnNhdmVEaWFsb2cuZWRpdFN1bW1hcnlJbnB1dC4kaW5wdXQpO1xuXG5cdGlmICghc2F2ZURpYWxvZy4kZWxlbWVudC5maW5kKGAjJHtPUFRJT05TLmRyb3Bkb3duSWR9YCkubGVuZ3RoKSB7XG5cdFx0JHNhdmVPcHRpb25zLmJlZm9yZSgkZHJvcGRvd25zKTtcblx0fVxuXG5cdC8vIFJlaW5pdGlhbGl6YXRpb24gaXMgcmVxdWlyZWQgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIFZpc3VhbEVkaXRvciBhbmQgTmV3IFdpa2l0ZXh0IEVkaXRvciAoMjAxNylcblx0bXcuaG9vaygndmUuYWN0aXZhdGlvbkNvbXBsZXRlJykuYWRkKCgpID0+IHtcblx0XHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleVZlKSkge1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleVZlLCBmYWxzZSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0RlZmF1bHRTdW1tYXJpZXMvb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2VuZXJhdGVTdW1tYXJ5RHJvcGRvd259IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVN1bW1hcnlEcm9wZG93bic7XG5cbmNvbnN0IHByb2Nlc3NXaWtpRWRpdG9yID0gKCRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNldCBndWFyZFxuXHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblxuXHRjb25zdCAkZWRpdENoZWNrYm94ZXM6IEpRdWVyeSA9ICRlZGl0Rm9ybS5maW5kKCcuZWRpdENoZWNrYm94ZXMnKTtcblx0aWYgKCEkZWRpdENoZWNrYm94ZXMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGRyb3Bkb3duczogSlF1ZXJ5ID0gZ2VuZXJhdGVTdW1tYXJ5RHJvcGRvd24oJGVkaXRGb3JtLmZpbmQoJ2lucHV0W25hbWU9d3BTdW1tYXJ5XScpKTtcblxuXHQkZHJvcGRvd25zLmNzcyh7XG5cdFx0J3BhZGRpbmctYm90dG9tJzogJzFlbScsXG5cdFx0d2lkdGg6ICc0OCUnLFxuXHR9KTtcblxuXHRpZiAoISRlZGl0Rm9ybS5maW5kKGAjJHtPUFRJT05TLmRyb3Bkb3duSWR9YCkubGVuZ3RoKSB7XG5cdFx0JGVkaXRDaGVja2JveGVzLmJlZm9yZSgkZHJvcGRvd25zKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzV2lraUVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBOztBQ0NyQixJQUFBQyxZQUFhO0FBQ2IsSUFBQUMsY0FBZTtBQUNmLElBQUFDLGFBQWM7O0FDSGYsSUFBTTtFQUFDQztBQUFLLElBQUlDO0FBQ2hCLElBQU07RUFBQ0M7QUFBZSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXhDLElBQU1DLHlCQUFpQ04sTUFBTSxVQUFVLFFBQVE7QUFFL0QsSUFBSU8sbUJBQTZCLENBQ2hDUCxNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxRQUFRLE1BQU0sR0FDcEJBLE1BQU0sUUFBUSxNQUFNLEdBQ3BCQSxNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxRQUFRLE1BQU0sQ0FBQTtBQUdyQixJQUFJLENBQUNFLGlCQUFpQjtBQUNyQksscUJBQW1CLENBQUNQLE1BQU0sT0FBTyxLQUFLLEdBQUcsR0FBR08sZ0JBQWdCO0FBQzdEO0FBRUEsSUFBTUMsb0JBQThCLENBQ25DUixNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxRQUFRLE1BQU0sR0FDcEJBLE1BQU0sUUFBUSxNQUFNLEdBQ3BCQSxNQUFNLFFBQVEsTUFBTSxHQUNwQkEsTUFBTSxXQUFXLFNBQVMsR0FDMUJBLE1BQU0sV0FBVyxTQUFTLENBQUE7QUFHM0IsSUFBTVMscUJBQStCLENBQ3BDVCxNQUFNLE1BQU0sSUFBSSxHQUNoQkEsTUFBTSxNQUFNLElBQUksR0FDaEJBLE1BQU0sTUFBTSxJQUFJLEdBQ2hCQSxNQUFNLE1BQU0sSUFBSSxDQUFBOztBQzFCakIsSUFBTVUsMkJBQTRCQyxXQUEwQztBQUUzRSxTQUFPLElBQUlDLEdBQUdDLEdBQUdDLGlCQUFpQjtJQUNqQ0g7RUFDRCxDQUFDO0FBQ0Y7QUFHQSxJQUFNSSx1QkFBdUJBLENBQUNDLGdCQUFzQ0MsY0FBOEI7QUFFakcsUUFBTUMsb0JBQThDLENBQUE7QUFBQyxNQUFBQyxZQUFBQywyQkFFL0JILFNBQUEsR0FBQUk7QUFBQSxNQUFBO0FBQXRCLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQWlDO0FBQUEsWUFBdEJDLFVBQUFKLE1BQUFLO0FBQ1ZSLHdCQUFrQkEsa0JBQWtCUyxNQUFNLElBQUlqQix5QkFBeUJlLE9BQU87SUFDL0U7RUFBQSxTQUFBRyxLQUFBO0FBQUFULGNBQUFVLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFULGNBQUFXLEVBQUE7RUFBQTtBQUVBZCxpQkFBZWUsUUFBUSxFQUFFQyxTQUFTZCxpQkFBaUI7QUFDcEQ7QUFHQSxJQUFNZSxtQkFBbUJBLENBQUNDLGNBQWtDQyxlQUE2QjtBQUFBLE1BQUFDO0FBQ3hGLFFBQU1DLGlCQUFBRCxrQkFBeUJELFdBQVdHLElBQUksT0FBQSxRQUFBRixvQkFBQSxTQUFBQSxrQkFBNEI7QUFDMUUsUUFBTUcsZ0JBQXdCTCxhQUFhTSxTQUFTO0FBRXBETCxhQUFXRyxJQUFJRCxjQUFjSSxLQUFLLElBQUEsR0FBQUMsT0FBT0wsZUFBYSxHQUFBLEVBQUFLLE9BQUlILGFBQWEsSUFBS0EsYUFBYSxFQUFFSSxRQUFRLFFBQVE7QUFDNUc7QUFFQSxJQUFNQywwQkFBMkJULGdCQUErQjtBQUMvRCxRQUFNO0lBQUNVO0VBQWlCLElBQUkxQyxHQUFHQyxPQUFPQyxJQUFJO0FBRzFDLFFBQU1XLGlCQUF1QyxJQUFJSixHQUFHQyxHQUFHaUMsZUFBZTtJQUNyRW5DLE9BQU9MO0VBQ1IsQ0FBQztBQUVEVSxpQkFBZStCLGFBQXFCaEQsVUFBVTtBQUc5Q2lCLGlCQUFlZSxRQUFRLEVBQUVpQixHQUFHLFVBQVdkLGtCQUF5RTtBQUUvR0QscUJBQWlCQyxjQUFvQ0MsVUFBVTtFQUNoRSxDQUFDO0FBRURwQix1QkFBcUJDLGdCQUFnQlQsZ0JBQWdCO0FBQ3JELE1BQUlzQyxzQkFBc0IsR0FBRztBQUM1QjlCLHlCQUFxQkMsZ0JBQWdCUixpQkFBaUI7RUFDdkQsV0FBV3FDLG9CQUFvQixNQUFNLEtBQUtBLHNCQUFzQixHQUFHO0FBQ2xFOUIseUJBQXFCQyxnQkFBZ0JQLGtCQUFrQjtFQUN4RCxXQUFXb0Msc0JBQXNCLEtBQUs7QUFDckM5Qix5QkFBcUJDLGdCQUFnQlIsaUJBQWlCO0VBQ3ZEO0FBRUEsU0FBT1EsZUFBZWlDO0FBQ3ZCOztBQ3REQSxJQUFNQyxzQkFBc0JBLE1BQVk7QUFFdkMsTUFBSS9DLEdBQUdDLE9BQU9DLElBQVlQLFdBQVcsR0FBRztBQUN2QztFQUNEO0FBRUEsUUFBTTtJQUFDcUQ7RUFBTSxJQUFJbEQsT0FBT21ELEdBQUdDO0FBQzNCLFFBQU07SUFBQ0M7RUFBVSxJQUFJSDtBQUNyQixRQUFNO0lBQUNJO0VBQVksSUFBSUQ7QUFDdkIsTUFBSSxDQUFDQyxhQUFhNUIsUUFBUTtBQUN6QjtFQUNEO0FBR0F4QixLQUFHQyxPQUFPb0QsSUFBWTFELGFBQWEsSUFBSTtBQUV2QyxRQUFNMkQsYUFBcUJiLHdCQUF3Qk8sT0FBT0csV0FBV0ksaUJBQWlCQyxNQUFNO0FBRTVGLE1BQUksQ0FBQ0wsV0FBV0wsU0FBU1csS0FBQSxJQUFBbEIsT0FBaUIzQyxVQUFVLENBQUUsRUFBRTRCLFFBQVE7QUFDL0Q0QixpQkFBYU0sT0FBT0osVUFBVTtFQUMvQjtBQUdBdEQsS0FBRzJELEtBQUssdUJBQXVCLEVBQUVDLElBQUksTUFBTTtBQUMxQyxRQUFJNUQsR0FBR0MsT0FBT0MsSUFBWVAsV0FBVyxHQUFHO0FBQ3ZDSyxTQUFHQyxPQUFPb0QsSUFBWTFELGFBQWEsS0FBSztJQUN6QztFQUNELENBQUM7QUFDRjs7QUM1QkEsSUFBTWtFLG9CQUFxQkMsZUFBeUM7QUFFbkUsTUFBSTlELEdBQUdDLE9BQU9DLElBQVlSLFNBQVMsR0FBRztBQUNyQztFQUNEO0FBR0FNLEtBQUdDLE9BQU9vRCxJQUFZM0QsV0FBVyxJQUFJO0FBRXJDLFFBQU1xRSxrQkFBMEJELFVBQVVMLEtBQUssaUJBQWlCO0FBQ2hFLE1BQUksQ0FBQ00sZ0JBQWdCdkMsUUFBUTtBQUM1QjtFQUNEO0FBRUEsUUFBTThCLGFBQXFCYix3QkFBd0JxQixVQUFVTCxLQUFLLHVCQUF1QixDQUFDO0FBRTFGSCxhQUFXVSxJQUFJO0lBQ2Qsa0JBQWtCO0lBQ2xCQyxPQUFPO0VBQ1IsQ0FBQztBQUVELE1BQUksQ0FBQ0gsVUFBVUwsS0FBQSxJQUFBbEIsT0FBaUIzQyxVQUFVLENBQUUsRUFBRTRCLFFBQVE7QUFDckR1QyxvQkFBZ0JMLE9BQU9KLFVBQVU7RUFDbEM7QUFDRDs7QUx2QkEsTUFBQSxHQUFLOUQsa0JBQUEwRSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsbUJBQXlCO0FBQ3JEcEUsS0FBRzJELEtBQUssbUJBQW1CLEVBQUVDLElBQUtFLGVBQW9CO0FBQ3JERCxzQkFBa0JDLFNBQVM7RUFDNUIsQ0FBQztBQUVEOUQsS0FBRzJELEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRGIsd0JBQW9CO0VBQ3JCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImNvbmZpZ0tleSIsICJjb25maWdLZXlWZSIsICJkcm9wZG93bklkIiwgIndnVUxTIiwgIndpbmRvdyIsICJ3Z0N1clJldmlzaW9uSWQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJDT01NT05fU1VNTUFSSUVTX0xBQkVMIiwgIkNPTU1PTl9TVU1NQVJJRVMiLCAiQVJUSUNMRV9TVU1NQVJJRVMiLCAiVEFMS1BBR0VfU1VNTUFSSUVTIiwgImdlbmVyYXRlTWVudU9wdGlvbldpZGdldCIsICJsYWJlbCIsICJPTyIsICJ1aSIsICJNZW51T3B0aW9uV2lkZ2V0IiwgImFkZE9wdGlvbnNUb0Ryb3Bkb3duIiwgImRyb3Bkb3duV2lkZ2V0IiwgInN1bW1hcmllcyIsICJtZW51T3B0aW9uV2lkZ2V0cyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAic3VtbWFyeSIsICJ2YWx1ZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJnZXRNZW51IiwgImFkZEl0ZW1zIiwgIm9uU2VsZWN0Q2FsbGJhY2siLCAib3B0aW9uV2lkZ2V0IiwgIiR3cFN1bW1hcnkiLCAiXyR3cFN1bW1hcnkkdmFsIiwgIm9yaWdpblN1bW1hcnkiLCAidmFsIiwgImN1c3RvbVN1bW1hcnkiLCAiZ2V0TGFiZWwiLCAidHJpbSIsICJjb25jYXQiLCAidHJpZ2dlciIsICJnZW5lcmF0ZVN1bW1hcnlEcm9wZG93biIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJEcm9wZG93bldpZGdldCIsICJzZXRFbGVtZW50SWQiLCAib24iLCAiJGVsZW1lbnQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICJ0YXJnZXQiLCAidmUiLCAiaW5pdCIsICJzYXZlRGlhbG9nIiwgIiRzYXZlT3B0aW9ucyIsICJzZXQiLCAiJGRyb3Bkb3ducyIsICJlZGl0U3VtbWFyeUlucHV0IiwgIiRpbnB1dCIsICJmaW5kIiwgImJlZm9yZSIsICJob29rIiwgImFkZCIsICJwcm9jZXNzV2lraUVkaXRvciIsICIkZWRpdEZvcm0iLCAiJGVkaXRDaGVja2JveGVzIiwgImNzcyIsICJ3aWR0aCIsICJnZXRCb2R5IiwgInRoZW4iLCAiZGVmYXVsdFN1bW1hcmllcyJdCn0K
